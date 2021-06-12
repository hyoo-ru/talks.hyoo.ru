namespace $ {
	
	export class $hyoo_talks_message extends $mol_store<{
		text: string,
		author: string | null,
		moment: string,
	}> {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		text( next?: string ) {
			return this.value( 'text' , next ) ?? ''
		}
		
		author( next?: $hyoo_talks_person ) {
			const id = this.value( 'author' , next && next.id() )
			if( id ) return this.Person( id )
			return null
		}
		
		@ $mol_mem
		Person( id: string ) {
			return new this.$.$hyoo_talks_person
		}
		
	}
	
}
