namespace $.$$ {
	
	export class $hyoo_talks_chat_page extends $.$hyoo_talks_chat_page {
		
		@ $mol_mem
		domain() {
			return this.remote().sub( '', super.domain() )
		}
		
		@ $mol_mem
		chat() {
			return this.domain().chat( this.chat_id() )
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
			
			draft.author( this.domain().user() )
			this.messages([ ... this.messages(), draft ])
			this.draft( null )
			
			this.$.$mol_wait_rest()
			this.Body().scroll_top( Number.MAX_SAFE_INTEGER )
			
		}
		
	}
	
	$mol_view_component( $hyoo_talks_chat_page )
	
}
