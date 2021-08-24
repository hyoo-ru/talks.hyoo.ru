namespace $ {
	
	export class $hyoo_talks_domain extends $mol_object2 {
		
		@ $mol_mem
		state() {
			return new this.$.$mol_state_shared
		}
		
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
			const person = new $hyoo_talks_person()
			person.id = $mol_const( id )
			person.domain = $mol_const( this )
			return person
		}
		
		@ $mol_mem_key
		chat( id: string ) {
			const chat = new $hyoo_talks_chat
			chat.id = $mol_const( id )
			chat.domain = $mol_const( this )
			return chat
		}
		
		@ $mol_mem_key
		message( id: string ) {
			const message = new $hyoo_talks_message()
			message.id = $mol_const( id )
			message.domain = $mol_const( this )
			return message
		}
		
	}
	
}
