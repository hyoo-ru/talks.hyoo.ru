namespace $ {
	
	export class $hyoo_talks_chat extends $mol_store<{
		title: string,
		messages: string[],
	}> {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'id is not defined' ) )
		}
		
		domain(): $hyoo_talks_domain {
			return this.$.$mol_fail( new Error( 'domain is not defined' ) )
		}
		
		title( next?: string ) {
			return this.value( 'title', next ) ?? ''
		}
		
		messages( next?: $hyoo_talks_message[] ) {
			const ids = this.value( 'messages' , next && next.map( m => m.id() ) )
			if( !ids ) return []
			return ids.map( id => this.domain().message( id ) )
		}
		
		messages_count() {
			return this.value( 'messages' ).length
		}
	}
	
}
