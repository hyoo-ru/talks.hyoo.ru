namespace $ {
	
	export class $hyoo_talks_person extends $mol_store<{
		name: string,
		background: string,
		avatar: string,
		online: number,
		chats: string[],
		drafts: Record< string, string >,
		read_messages: Record< string , number >,
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
			$mol_fiber_defer( ()=> {
				if( this.online_near() ) return
				this.value( 'online', new $mol_time_moment().valueOf() )
			} )
		}
		
		chats( next?: $hyoo_talks_chat[] ) {
			const ids = this.value( 'chats' , next && next.map( m => m.id() ) )
			if( !ids ) return []
			return ids.map( id => this.domain().chat( id ) )
		}
		
		@ $mol_mem_key
		draft( chat: $hyoo_talks_chat, next?: null ) {
			
			const drafts = this.sub( 'drafts' )
			let id = next === undefined ? drafts.value( chat.id() ) : ''
			
			if( !id ) {
				id = $mol_guid()
				$mol_fiber_defer( ()=>
					drafts.value( chat.id(), id )
				)
			}
			
			return this.domain().message( id )
		}
		
		@ $mol_mem_key
		read_messages( chat: $hyoo_talks_chat , next?: number ) {
			const sub = this.sub( 'read_messages' )
			return sub.value( chat.id() , next ) ?? chat.messages().length
		}
		
	}
	
}
