namespace $.$$ {
	
	export class $hyoo_talks extends $.$hyoo_talks {
		
		chat_id_current() {
			return this.$.$mol_state_arg.value( 'chat' )
		}
		
		settings_opened() {
			return this.$.$mol_state_arg.value( 'settings' ) !== null
		}
		
		@ $mol_mem
		only_chat() : boolean {
			const val = this.$.$mol_state_arg.value( 'embed' )
			return val !== null
		}
		
		@ $mol_mem
		pages() {
			
			this.user().online_update()
			
			const chat = this.chat_id_current()
			const only_chat = this.only_chat()
			
			return [
				... only_chat ? [] : [ this.Roster() ],
				... chat ? [ this.Chat_page( chat ) ] : [],
				... this.settings_opened() ? [ this.Settings() ] : [],
			]
			
		}
		
		user() {
			return this.domain().user()
		}
		
		background() {
			const uri = this.user().background()
			return uri ? `url(${ JSON.stringify( uri ) })` : 'none'
		}
		
		roster_body() {
			return [
				... this.user().chats().length > 1 ? [ this.Links_query() ] : [],
				this.Links(),
			]
		}
		
		@ $mol_mem
		links() {
			return this.user().chats()
				.filter( $mol_match_text( this.links_query(), chat => [ chat.title() ] ) )
				.map( chat => this.Chat_link( chat.id() ) )
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
			
			const context = this.$.$mol_dom_context
			const embed = context.self !== context.parent
			
			return [
				... embed ? [ this.Chat_open() ] : [],
				... this.only_chat() ? [] : [ this.Chat_close() ],
			]
			
		}
		
		@ $mol_mem_key
		chat_unread_count( id: string ) {
			const chat = this.chat( id )
			
			const last_index = this.user().read_messages( chat )
			const messages = this.chat( id ).messages()
			const messages_completed = messages.slice( last_index ).filter( msg => msg.complete() )
			
			return messages_completed.length
		}
		
		@ $mol_mem_key
		message_notify( chat : $hyoo_talks_chat ) {

			this.$.$mol_notify.allowed( true )
			
			if( !this.chat_unread_count( chat.id() ) ) return null

			this.$.$mol_notify.show({
				context: `${chat.title()}`,
				message: `Новое сообщение`,
				uri: this.$.$mol_state_arg.link({ chat: chat.id() })
			})

			return null
		}
		
		chat_link_sub( id : string ) {	
			return [
				... this.chat_unread_count( id ) === 0 ? [] : [ this.Chat_unread_count( id ) ],
				this.Chat_link_title(  id ),
			]
		}
		
		auto() {
			
			for( const chat of this.user().chats() ) {
				this.message_notify( chat )
			}
			
			return null
		}

		language( next?: string ) {
			return this.$.$mol_locale.lang( next )
		}
		
	}
	
}
