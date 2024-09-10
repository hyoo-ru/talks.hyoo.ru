namespace $ {
	
	export class $hyoo_talks_topic extends $hyoo_crus_entity.with({
		Messages: $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_list_ref_to( ()=> $hyoo_talks_message ) ),
	}) {
		
		messages( auto?: any ) {
			return this.Messages(null)?.ensure({ '': $hyoo_crus_rank.mod }) ?? null
		}
		
		@ $mol_action
		message_make() {
			const feed = this.feed_my()
			const message = feed!.Messages(null)!.make(null)!
			this.messages(null)?.splice([ message.ref() ])
			return message
		}
		
		person_my() {
			return this.$.$hyoo_crus_glob.home( $hyoo_talks_person )
		}
		
		feed_my() {
			return this.person_my().outbox( this )!
		}
		
		draft_my( next?: string ) {
			return this.feed_my().draft( next ) ?? ''
		}
		
		watch_my( next?: boolean ) {
			return this.person_my().chat_watch( this, next )
		}
		
		anchor_my( next?: $hyoo_talks_message ) {
			return this.feed_my().anchor( next )
		}
		
		// @ $mol_mem
		// unread_count() {
			
		// 	const all = this.messages()
		// 	if( !all.length ) return 0
			
		// 	const last = this.domain().User().last_seen_message( this )
		// 	if( !last ) return all.length
			
		// 	return all.length - all.indexOf( last ) - 1
		// }
		
	}
	
}
