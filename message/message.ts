namespace $ {
	
	export class $hyoo_talks_message extends $mol_store<{
		text: string,
		author: string | null,
		moment: string,
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
		
		author( next?: $hyoo_talks_person ) {
			const id = this.value( 'author' , next && next.id() )
			if( id ) return this.domain().person( id )
			return null
		}
		
	}
	
}
