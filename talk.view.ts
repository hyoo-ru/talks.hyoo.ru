namespace $.$$ {
	
	export class $hyoo_talks extends $.$hyoo_talks {
		
		domain() {
			return this.$.$hyoo_talks_domain
		}
		
		yard() {
			return this.domain().yard()
		}
		
		chat_id_current() {
			return this.$.$mol_state_arg.value( 'chat' ) ?? ''
		}
		
		settings_opened() {
			return this.$.$mol_state_arg.value( 'settings' ) !== null
		}
		
		roster_opened() {
			return this.$.$mol_state_arg.value( 'roster' ) !== null
		}
		
		@ $mol_mem
		embed() : boolean {
			
			const val = this.$.$mol_state_arg.value( 'embed' )
			if( val !== null ) return true
			
			if( this.roster_opened() ) return false
			
			const context = this.$.$mol_dom_context
			return context.self !== context.parent
			
		}
		
		@ $mol_mem
		pages() {
			
			const chat = this.chat_id_current()
			const roster = !this.embed()
			
			return [
				... roster ? [ this.Roster() ] : [],
				... chat ? [ this.Chat_page( chat ) ] : [],
				... this.settings_opened() ? [ this.Settings() ] : [],
			]
			
		}
		
		User() {
			return this.domain().User()
		}
		
		background() {
			const uri = this.User().background()
			const shade = `hsl( var(--mol_theme_hue), 0% , calc( 50% + 50% * var(--mol_theme_luma) ), .8 )`
			return uri ? `linear-gradient( ${shade}, ${shade} ), url(${ JSON.stringify( uri ) })` : shade
		}
		
		roster_body() {
			return [
				... this.User().chats().length > 1 ? [ this.Links_query() ] : [],
				this.Links(),
			]
		}
		
		@ $mol_mem
		links() {
			return this.User().chats()
				.filter( $mol_match_text( this.links_query(), chat => [ chat.title() ] ) )
				.map( chat => this.Chat_link( chat.id ) )
				.reverse()
		}
		
		chat( id: $mol_int62_string ) {
			return this.domain().Chat( id )
		}
		
		person( id: $mol_int62_string ) {
			return this.domain().Person( id )
		}
		
		@ $mol_mem_key
		chat_title( id: $mol_int62_string ) {
			return this.chat( id ).title() || this.unnamed()
		}
		
		chat_arg( id: string ) {
			return { chat: id }
		}
		
		chat_new() {
			const chat = this.domain().chat_new()
			this.User().chat_watch( chat, true )
			this.$.$mol_dom_context.location.href = '#!chat=' + chat.id
		}
		
		@ $mol_mem_key
		chat_unread_count( id: $mol_int62_string ) {
			return this.chat( id ).unread_count()
		}
		
		@ $mol_mem_key
		message_notify( chat: $hyoo_talks_chat ) {

			if( !this.chat_unread_count( chat.id ) ) return null

			this.$.$mol_notify.show({
				context: `${chat.title()}`,
				message: this.new_message(),
				uri: this.$.$mol_state_arg.link({ chat: chat.id })
			})

			return null
		}
		
		chat_link_sub( id: $mol_int62_string ) {	
			return [
				... this.chat_unread_count( id ) === 0 ? [] : [ this.Chat_unread_count( id ) ],
				this.Chat_link_title( id ),
			]
		}
		
		// auto() {
			
		// 	for( const chat of this.User().chats() ) {
		// 		this.message_notify( chat )
		// 	}
			
		// 	return null
		// }

	}
	
}
