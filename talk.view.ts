namespace $.$$ {
	
	export class $hyoo_talks extends $.$hyoo_talks {
		
		chat_id_current() {
			return this.$.$mol_state_arg.value( 'chat' )
		}
		
		@ $mol_mem
		only_chat() : boolean {
			const val = this.$.$mol_state_arg.value( 'embed' )
			return val !== null
		}
		
		@ $mol_mem
		pages() {
			const chat = this.chat_id_current()
			const only_chat = this.only_chat()
			return [
				... only_chat ? [] : [ this.Roster() ],
				... chat ? [ this.Chat_page( chat ) ] : []
			]
		}
		
		@ $mol_mem
		links() {
			return this.domain().user().chats().map( chat => this.Chat_link( chat.id() ) )
		}
		
		chat( id: string ) {
			return this.domain().chat( id )
		}
		
		chat_title( id: string ) {
			return this.chat( id ).title()
		}
		
		chat_arg( id: string ) {
			return { chat: id }
		}
		
		chat_new_id() {
			return $mol_guid()
		}
		
		chat_page_tools() {
			if ( this.only_chat() )  {
				return [ this.Chat_open() ]
			}
			
			return [ this.Chat_close() ]
		}
		
	}
	
}
