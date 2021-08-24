namespace $ {
	
	export class $hyoo_talks_message extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $hyoo_talks_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'message' ).doc( this.id() )
		}
		
		text( next?: string ) {
			return this.state().sub( 'text' ).text( next )
		}
		
		text_selection( next?: number[] ) {
			return this.state().sub( 'text' ).selection( next )
		}
		
		complete( next?: boolean ) {
			return Boolean( this.state().sub( 'complete' ).value( next ) )
		}
		
		@ $mol_mem
		author( next?: $hyoo_talks_person ) {
			const id = this.state().sub( 'author' ).value( next && next.id() )
			if( id ) return this.domain().person( String( id ) )
			return null
		}
		
		@ $mol_mem
		moment( next?: $mol_time_moment ) {
			const str = this.state().sub( 'moment' ).value( next && next.toString() )
			return str ? new $mol_time_moment( String( str ) ) : null
		}
		
	}
	
}
