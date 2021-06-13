namespace $ {
	
	export class $hyoo_talks_person extends $mol_store<{
		name: string,
		background: string,
		avatar: string,
		online: string,
		chats: string[],
	}> {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $hyoo_talks_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		name( next?: string ) {
			return this.value( 'name' , next ) ?? ''
		}
		
		background( next?: string ) {
			return this.value( 'background' , next ) ?? ''
		}
		
		avatar( next?: string ) {
			return this.value( 'avatar' , next ) ?? ''
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
			const str = this.value( 'online' )
			return str ? new $mol_time_moment( str ) : null
		}
		
		online_update() {
			$mol_fiber_defer(
				()=> this.value( 'online', new $mol_time_moment().toString() )
			)
		}
		
		chats( next?: $hyoo_talks_chat[] ) {
			const ids = this.value( 'chats' , next && next.map( m => m.id() ) )
			if( !ids ) return []
			return ids.map( id => this.domain().chat( id ) )
		}
		
	}
	
}
