namespace $ {
	
	export class $hyoo_talks_person extends $hyoo_talks_entity {
		
		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		background( next?: string ) {
			return this.state().sub( 'background', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		avatar( next?: string ) {
			return this.state().sub( 'avatar', $hyoo_crowd_reg ).str( next )
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
			const stamp = this.state().land.last_stamp()
			return stamp ? new $mol_time_moment( stamp ) : null
		}
		
		@ $mol_mem
		chats( next?: $hyoo_talks_chat[] ): readonly $hyoo_talks_chat[] {
			
			const ids = this.state().sub( 'chats', $hyoo_crowd_list )
				.list( next && next.map( m => m.id ) ) as readonly $mol_int62_string[]
			
			const domain = this.$.$hyoo_talks_domain
			return ids.map( id => domain.Chat( id ) )
			
		}
		
		@ $mol_mem_key
		chat_watch( chat: $hyoo_talks_chat, next?: boolean ) {
			
			const node = this.state().sub( 'chats', $hyoo_crowd_list )
			if( next === undefined ) return node.has( chat.id )
			
			if( next ) node.add( chat.id )
			else node.drop( chat.id )
			
			return next
		}
		
		@ $mol_mem_key
		last_seen_message( chat: $hyoo_talks_chat, next?: $hyoo_talks_message ) {
			const id = this.state()
				.sub( 'last_seen_message', $hyoo_crowd_struct )
				.sub( chat.id, $hyoo_crowd_reg )
				.str( next?.id ) as $mol_int62_string
			return id ? this.domain().Message( id ) : null
		}
		
	}
	
}
