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
		
		@ $mol_fiber.method
		notification_subscription_object() {
			const getReg = $mol_fiber_sync( navigator.serviceWorker.getRegistration )

			const registration = getReg.call( navigator.serviceWorker )
			if (!registration) return
			
			const getSubscription = $mol_fiber_sync( registration.pushManager.getSubscription )
			const subscription = getSubscription.call( registration.pushManager )

			return subscription
		}

		@ $mol_fiber.method
		notification_request() {
			const status = $mol_fiber_sync( Notification.requestPermission )
			return status.call( Notification )
		}
		
		
		@ $mol_fiber.method
		notification_enable() {
			if (Notification.permission !== 'granted') {
				console.log('request')
				const status = this.notification_request()
				console.log({ status })
				if (status !== 'granted') {
					return null
				}
			}
		}
		
	}
	
}
