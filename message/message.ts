namespace $ {
	
	export class $hyoo_talks_message extends $mol_store<{
		text: string,
		author: string | null,
		moment: string,
		complete: boolean,
	}> {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $hyoo_talks_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		text( next?: string ) {
			return this.value( 'text' , next ) ?? ''
		}
		
		complete( next?: boolean ) {
			return this.value( 'complete' , next ) ?? false
		}
		
		author( next?: $hyoo_talks_person ) {
			const id = this.value( 'author' , next && next.id() )
			if( id ) return this.domain().person( id )
			return null
		}
		
		moment( next?: $mol_time_moment ) {
			const str = this.value( 'moment', next && next.toString() )
			return str ? new $mol_time_moment( str ) : null
		}
		
	}
	
}
