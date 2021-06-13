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
		
		messages( next?: $hyoo_talks_message[] ) {
			$mol_fiber_defer( ()=> {
				if( this.Bubbles().gap_after() === 0 ){
					this.Body().scroll_top( Number.MAX_SAFE_INTEGER )
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
		
		draft_text( next?: string ) {
			
			this.domain().user().online_update()
			
			const draft = this.draft()
			const user = this.domain().user()
			
			if( next ) {
				
				this.messages([ ... new Set([ ... this.messages(), draft ]) ])
				user.chats([ ... new Set([ ... user.chats(), this.chat() ]) ])
				
				draft.moment( new this.$.$mol_time_moment() )
				draft.author( user )
			}
			
			return draft.text( next )
		}

		draft_send() {
			
			this.draft().complete( true )
			this.draft( '' )
			
			this.$.$mol_wait_rest()
			this.Body().scroll_top( Number.MAX_SAFE_INTEGER )
			
		}
		
	}
	
	$mol_view_component( $hyoo_talks_chat_page )
	
}
