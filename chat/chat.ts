namespace $ {
	
	export class $hyoo_talks_chat extends $hyoo_talks_entity {
		
		@ $mol_mem
		title( next?: string ) {
			return this.state().sub( 'title', $hyoo_crowd_text ).str( next )
		}
		
		@ $mol_mem
		messages( next?: $hyoo_talks_message[] ) {
			
			const ids = this.state().sub( 'messages', $hyoo_crowd_list )
				.list( next && next.map( m => m.id ) ) as readonly $mol_int62_string[]
			
			const domain = this.$.$hyoo_talks_domain
			return ids.map( id => domain.Message( id ) )
			
		}
		
		message_add( msg: $hyoo_talks_message ) {
			this.state().sub( 'messages', $hyoo_crowd_list ).add( msg.id )
		}
		
		@ $mol_mem
		draft( next?: null | $hyoo_talks_message ) {
			
			const node = this.state()
				.sub( 'drafts', $hyoo_crowd_struct )
				.sub( this.domain().User().id, $hyoo_crowd_reg )
			
			const id = node.str( next === undefined ? undefined : ( next?.id ?? '' ) ) as $mol_int62_string | ''
			return id ? this.domain().Message( id ) : null
			
		}
		
		draft_new() {
			return this.draft( this.domain().message_new() )!
		}
		
		@ $mol_mem
		unread_count() {
			
			const all = this.messages()
			if( !all.length ) return 0
			
			const last = this.domain().User().last_seen_message( this )
			if( !last ) return all.length
			
			return all.length - all.indexOf( last ) - 1
		}
		
	}
	
}
