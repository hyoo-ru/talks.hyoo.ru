namespace $ {
	
	export class $hyoo_talks_chat extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $hyoo_talks_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'chat' ).doc( this.id() )
		}
		
		title( next?: string ) {
			return this.state().sub( 'title' ).text( next )
		}
		
		messages( next?: $hyoo_talks_message[] ) {
			const ids = this.state().sub( 'messages' ).list( next && next.map( m => m.id() ) )
			if( !ids ) return []
			return ids.map( id => this.domain().message( String( id ) ) )
		}
		
	}
	
}
