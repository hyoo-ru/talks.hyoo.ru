namespace $.$$ {
	
	export class $hyoo_talks extends $.$hyoo_talks {
		
		@ $mol_mem
		chat_id_current() {
			const opener = this.$.$mol_state_arg.value( 'embed' )
			const origin = opener ? new URL( opener ).origin : ''
			const id = this.$.$mol_state_arg.value( 'chat' ) ?? ''
			return origin ? origin + '/' + id : id
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
			
			this.user().online_update()
			
			const chat = this.chat_id_current()
			const roster = !this.embed()
			
			return [
				... roster ? [ this.Roster() ] : [],
				... chat ? [ this.Chat_page( chat ) ] : [],
				... this.settings_opened() ? [ this.Settings() ] : [],
			]
			
		}
		
		user() {
			return this.domain().user()
		}
		
		background() {
			const uri = this.user().background()
			const shade = `hsl( var(--mol_theme_hue), 0% , calc( 50% + 50% * var(--mol_theme_luma) ), .8 )`
			return uri ? `linear-gradient( ${shade}, ${shade} ), url(${ JSON.stringify( uri ) })` : shade
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
		
		@ $mol_mem_key
		chat_title( id: string ) {
			const talkers = id.split( '-' )
			if ( talkers.length === 1 ) return this.chat( id ).title() || id
			
			const unnamed = this.$.$mol_locale.text( '$hyoo_talks_unnamed_person' )
			const auto_title = talkers
				.filter( id => id !== this.domain().user().id() )
				.map( id => this.domain().person( id ).name() || unnamed ).join( ',' )
			
			return this.chat( id ).title() || auto_title
		}
		
		chat_arg( id: string ) {
			return { chat: id }
		}
		
		chat_new_id() {
			return $mol_guid()
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

			if( !this.chat_unread_count( chat.id() ) ) return null

			this.$.$mol_notify.show({
				context: `${chat.title()}`,
				message: `?????????? ??????????????????`,
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

	}
	
}
