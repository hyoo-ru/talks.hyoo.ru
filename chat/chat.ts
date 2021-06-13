namespace $ {
	
	export class $hyoo_talks_chat extends $mol_store<{
		title: string,
		messages: string[],
		meta_subscriptions: string[],
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
		
		@ $mol_mem
		meta_subscriptions( next?: string[] ) {
			console.log('ms', next)
			return this.value( 'meta_subscriptions' , next )
		}
		
	}
	
}
