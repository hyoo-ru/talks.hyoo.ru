namespace $ {
	
	export class $hyoo_talks_person extends $hyoo_crus_home.with({
		Avatar: $hyoo_crus_atom_str,
		Background: $hyoo_crus_atom_str,
		Chats: $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_list_ref_to( ()=> $hyoo_talks_topic ) ),
		Outboxes: $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_dict_to( $hyoo_crus_atom_ref_to( ()=> $hyoo_talks_channel ) ) ),
	}) {
		
		@ $mol_mem
		avatar( next?: string ) {
			return this.Avatar( next )?.val( next ) ?? ''
		}
		
		@ $mol_mem
		background( next?: string ) {
			return this.Background( next )?.val( next ) ?? ''
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
			return this.land().faces.last_moment()
		}
		
		@ $mol_mem
		chats( next?: $hyoo_talks_topic[] ): readonly $hyoo_talks_topic[] {
			return this.Chats( next )?.ensure({})?.remote_list( next ) ?? []
		}
		
		@ $mol_mem_key
		chat_watch( chat: $hyoo_talks_topic, next?: boolean ) {
			return this.Chats( next )?.ensure({})?.has( chat.ref(), next ) ?? false
		}
		
		@ $mol_action
		chat_make() {
			return this.Chats( null )!.ensure({})!.make({ '': $hyoo_crus_rank.reg })
		}
		
		@ $mol_mem_key
		outbox( chat: $hyoo_talks_topic ) {
			return this.Outboxes(null)?.ensure({})?.key( chat.ref(), null )?.ensure({ '': $hyoo_crus_rank.get }) ?? null
		}
		
		// @ $mol_mem_key
		// last_seen_message( chat: $hyoo_talks_topic, next?: $hyoo_talks_message ) {
		// 	const id = this.state()
		// 		.sub( 'last_seen_message', $hyoo_crowd_struct )
		// 		.sub( chat.id, $hyoo_crowd_reg )
		// 		.str( next?.id ) as $mol_int62_string
		// 	return id ? this.domain().Message( id ) : null
		// }
		
	}
	
}
