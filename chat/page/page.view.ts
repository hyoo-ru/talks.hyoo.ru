namespace $.$$ {
	
	export class $hyoo_talks_chat_page extends $.$hyoo_talks_chat_page {
		
		messages( next?: string[] ) {
			return this.Store().value( 'chat/messages', next ) as string[] ?? []
		}
		
		@ $mol_mem
		Message( id: string ) {
			const message = this.Store().sub( `message=${id}`, new $hyoo_talks_message({
				text: '',
				author: null,
				moment: '',
			}) )
			message.id = $mol_const( id )
			return message
		}
		
		@ $mol_mem
		bubbles() {
			return this.messages().map( id => this.Bubble( id ) )
		}
		
		bubble_text( id: string, next?: string ) {
			return this.Message( id ).text( next )
		}
		
		draft_controls () {
			return [
				this.Draft_text(),
				... this.draft().text().trim() ? [ this.Draft_send() ] : []
			]
		}
		
		@ $mol_mem
		draft( reset?: null ) {
			return this.Message( $mol_guid() )
		}
		
		draft_text( next?: string ) {
			return this.draft().text( next )
		}

		draft_send() {
			if( !this.draft().text() ) return
			this.messages([ ... this.messages(), this.draft().id() ])
			this.draft( null )
			this.$.$mol_wait_rest()
			this.Body().scroll_top( Number.MAX_SAFE_INTEGER )
		}
		
	}
	
	$mol_view_component( $hyoo_talks_chat_page )
	
}
