namespace $ {
	
	export class $hyoo_talks_domain extends $mol_store_shared {
		
		// return to heroku :(
		// server() {
		// 	return 'wss://1c7b0d030e7c4dec95bd69db88e56c85.apig.ru-moscow-1.hc.sbercloud.ru'
		// }
		
		@ $mol_mem
		user() {
			
			let id = this.$.$mol_store_local.value( 'user' ) as string | null
			if( !id ) {
				id = Math.random().toString( 16 ).slice( 2 )
				new $mol_after_tick( ()=> this.$.$mol_store_local.value( 'user', id ) )
			}
			
			return this.person( id )
		}
		
		@ $mol_mem_key
		person( id: string ) {
			const person = this.sub( `person=${id}`, new $hyoo_talks_person() )
			person.id = $mol_const( id )
			person.domain = $mol_const( this )
			return person
		}
		
		@ $mol_mem_key
		chat( id: string ) {
			const chat = this.sub( `chat=${id}`, new $hyoo_talks_chat({
				title: '',
				messages: [],
			}) )
			chat.id = $mol_const( id )
			chat.domain = $mol_const( this )
			return chat
		}
		
		@ $mol_mem_key
		message( id: string ) {
			const message = this.sub( `message=${id}`, new $hyoo_talks_message() )
			message.id = $mol_const( id )
			message.domain = $mol_const( this )
			return message
		}
		
	}
	
}
