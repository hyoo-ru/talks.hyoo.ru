namespace $.$$ {
	
	export class $hyoo_talks extends $.$hyoo_talks {
		
		chat_id_current() {
			return this.$.$mol_state_arg.value( 'chat' )
		}
		
		@ $mol_mem
		pages() {
			const chat = this.chat_id_current()
			return [
				this.Roster(),
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
		
	}
	
}
