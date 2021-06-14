namespace $.$$ {
	
	export class $hyoo_talks_chat_page extends $.$hyoo_talks_chat_page {
		
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
			return this.chat().title( next )
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
		draft( next?: string ) {
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
			
			if( next ) $mol_fiber_defer( ()=> {
					
				if( draft.author() !== user ) draft.author( user )
				
				const chats = new Set( user.chats() )
				if( !chats.has( chat ) ) user.chats([ ... chats, chat ])
				
				const messages = new Set( chat.messages() )
				if( !messages.has( draft ) ) chat.messages([ ... messages, draft ])
				
			} )
			
			return draft.text( next )
		}

		draft_send() {
			
			this.draft().moment( new this.$.$mol_time_moment() )
			this.draft().complete( true )
			this.draft( '' )
			
			this.$.$mol_wait_rest()
			this.scroll_end()
			
		}
		
		scroll_end() {
			const body = this.Body()
			body.scroll_top( body.dom_node().scrollHeight )
		}
		
		@ $mol_mem
		mark_read() {
			const [ , end ] = this.Bubbles().view_window()

			const user = this.domain().user()
			const last = user.read_messages( this.chat() )
			
			const next = Math.max( end , last )
			
			this.$.$mol_fiber_defer( () => user.read_messages( this.chat() , next ) )
			
			return next
		}
		
		auto() {
			this.mark_read()
		}
		
	}
	
	$mol_view_component( $hyoo_talks_chat_page )
	
}
