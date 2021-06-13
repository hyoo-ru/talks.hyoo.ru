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
		draft( reset?: null ) {
			return this.domain().message( $mol_guid() )
		}
		
		draft_text( next?: string ) {
			return this.draft().text( next )
		}

		draft_send() {
			
			const draft = this.draft()
			if( !draft.text() ) return
			
			const user = this.domain().user()
			
			draft.moment( new this.$.$mol_time_moment() )
			draft.author( user )
			user.chats([ ... new Set([ ... user.chats(), this.chat() ]) ])
			
			this.messages([ ... this.messages(), draft ])
			this.draft( null )
			
			this.$.$mol_wait_rest()
			this.Body().scroll_top( Number.MAX_SAFE_INTEGER )
			
		}
		
	}
	
	$mol_view_component( $hyoo_talks_chat_page )
	
}
