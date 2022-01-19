namespace $ {
	
	export class $hyoo_talks_person extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $hyoo_talks_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'person' ).doc( this.id() )
		}
		
		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}
		
		background( next?: string ) {
			return String( this.state().sub( 'background' ).value( next ) ?? '' )
		}
		
		avatar( next?: string ) {
			return String( this.state().sub( 'avatar' ).value( next ) ?? '' )
		}
		
		@ $mol_mem
		online_near() {
			
			const moment = this.online_time()
			if( !moment ) return false
			
			const now = this.$.$mol_state_time.now( 60_000 )
			return ( now - moment.valueOf() < 60_000 )
			
		}
		
		@ $mol_mem
		online_time() {
			const str = this.state().sub( 'online' ).value()
			return str ? new $mol_time_moment( String( str ) ) : null
		}
		
		online_update() {
			this.state().sub( 'online' ).value(
				new $mol_time_moment().toString( 'YYYY-MM-DDThh:mmZ' )
			)
		}
		
		chats( next?: $hyoo_talks_chat[] ) {
			const ids = this.state().sub( 'chats' ).list( next && next.map( m => m.id() ) )
			if( !ids ) return []
			return ids.map( id => this.domain().chat( String( id ) ) )
		}
		
		@ $mol_mem_key
		draft( chat: $hyoo_talks_chat, next?: null ) {
			
			const drafts = this.state().sub( 'drafts' )
			let id = String( next === undefined ? drafts.sub( chat.id() ).value() ?? '' : '' )
			
			if( !id ) {
				id = $mol_guid()
				drafts.sub( chat.id() ).value( id )
			}
			
			return this.domain().message( id )
		}
		
		@ $mol_mem_key
		read_messages( chat: $hyoo_talks_chat , next?: number ) {
			const sub = this.state().sub( 'read_messages' )
			return Number( sub.sub( chat.id() ).value( next ) ) ?? chat.messages().length
		}
		
	}
	
}
