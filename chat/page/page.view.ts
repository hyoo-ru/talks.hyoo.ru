namespace $.$$ {
	
	export class $hyoo_talks_chat_page extends $.$hyoo_talks_chat_page {
		
		head() {
			return [
				this.Title(),
				this.Joined(),
				this.Search_toggle(),
				this.Tools(),
				... this.search_enabled() ? [ this.Search() ] : [],
			]
		}
		
		@ $mol_mem
		search_enabled( next?: boolean ) {
			
			if( next === undefined ) return false
			
			if( next ) {
				$mol_fiber_defer( ()=>
					this.Search().Query().focused( true )
				)
			} else {
				this.search( '' )
			}
			
			return next
		}
		
		search_start( event: Event ) {
			this.search_enabled( true )
			event.preventDefault()
		}
		
		search_end( event: Event ) {
			this.search_enabled( false )
			this.Search_toggle().focused( true )
			event.preventDefault()
		}
		
		@ $mol_mem
		chat() {
			const domain = new this.$.$hyoo_talks_domain
			return domain.chat( this.chat_id() )
		}
		
		@ $mol_mem
		domain() {
			return this.chat().domain()
		}
		
		title( next?: string ) {
			return this.chat().title( next ) || this.default_title()
		}
		
		@ $mol_mem
		messages( next?: $hyoo_talks_message[] ) {
			$mol_fiber_defer( ()=> {
				if( this.Bubbles().gap_after() === 0 ){
					this.scroll_end()
				}
			} )
			return this.chat().messages( next )
		}
		
		message( id: string ) {
			return this.domain().message( id )
		}
		
		@ $mol_mem
		bubbles() {
			return this.messages().map( msg => this.Bubble( msg.id() ) )
		}
		
		draft_controls () {
			return [
				this.Draft_text(),
				... this.draft().text().trim() ? [ this.Draft_send() ] : []
			]
		}
		
		@ $mol_mem
		draft( next?: null ) {
			return this.domain().user().draft( this.chat(), next )
		}
	
		@ $mol_mem
		joined( next?: boolean ) {
			
			const chat = this.chat()
			const user = this.domain().user()
			
			const joined = user.chats().indexOf( chat ) !== -1
			if( next === undefined ) return joined
			
			if( next ) {
				user.chats([ chat, ... user.chats() ])
				this.$.$mol_notify.allowed( true )
			} else {
				user.chats( user.chats().filter( c => c !== chat ) )
			}
			
			return next
		}
		
		draft_text( next?: string ) {
			
			const chat = this.chat()
			const draft = this.draft()
			const user = this.domain().user()
			
			user.online_update()
			
			if( next !== undefined ) $mol_fiber_defer( ()=> {
				
				const chats = new Set( user.chats() )
				if( !chats.has( chat ) ) user.chats([ ... chats, chat ])
				
				if( draft.author() !== user ) draft.author( user )
				
				const messages = new Set( chat.messages() )
				if( messages.has( draft ) ) {
					if( !next ) {
						messages.delete( draft )
						chat.messages([ ... messages ])
					}
				} else {
					if( next ) chat.messages([ ... messages, draft ])
				}
					
			} )
	
			return draft.text( next )
		}
		
		talkers_auto_join( chat: $hyoo_talks_chat ) {

			const talkers = chat.id().split('-')
			if ( talkers.length === 1 ) return
				
			for ( const id of talkers ) {
				
				const person = this.domain().person( id )

				if ( person.chats().findIndex( val => val.id() === chat.id() ) !== -1 ) continue
					
				person.chats( [ ...person.chats() , chat ] )

			}

		}

		draft_send() {
			
			const draft = this.draft()
			
			if ( !draft.text() ) return

			const chat = this.chat()
			
			draft.moment( new this.$.$mol_time_moment() )
			draft.complete( true )
			
			const messages = new Set( chat.messages() )
			messages.delete( draft )
			chat.messages([ ... messages, draft ])
			
			this.draft( null )
		
			this.$.$mol_wait_rest()
			this.scroll_end()
			
			this.$.$mol_notify.allowed( true )

			this.talkers_auto_join( chat )
		}
		
		scroll_end() {
			const body = this.Body()
			body.scroll_top( body.dom_node().scrollHeight )
		}
		
		@ $mol_mem
		update_last_readed_message() {
			let [ , last_viewed ] = this.Bubbles().view_window()
			
			const last_readed = this.domain().user().read_messages( this.chat() )

			while( last_viewed >= last_readed ) {

				const message = this.chat().messages() [ last_viewed ]
				// why message can be eq to undefined?
				
				if ( message === undefined || message.complete() === true ) {
					break
				}

				last_viewed--
			}
			

			return this.$.$mol_fiber_defer(
					() => {

						if ( last_viewed > last_readed ) {
							this.domain().user().read_messages( this.chat() , last_viewed )
						}

					}
				)
		}
		
		auto() {
			this.update_last_readed_message()
		}
		
	}
	
	$mol_view_component( $hyoo_talks_chat_page )
	
}
