namespace $ {
	
	export class $hyoo_talks_person extends $mol_store<{
		name: string,
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
		
		avatar() {
			return  `https://gravatar.com/avatar/${ this.id() }?d=robohash`
		}
		
	}
	
}
