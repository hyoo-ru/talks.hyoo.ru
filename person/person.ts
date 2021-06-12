namespace $ {
	
	export class $hyoo_talks_person extends $mol_store<{
		name: string,
		chats: string[],
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
		
		chats( next?: $hyoo_talks_chat[] ) {
			const ids = this.value( 'chats' , next && next.map( m => m.id() ) )
			if( !ids ) return []
			return ids.map( id => this.domain().chat( id ) )
		}
		
	}
	
}
