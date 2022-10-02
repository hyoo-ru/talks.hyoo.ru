namespace $ {
	
	export class $hyoo_talks_domain extends $mol_object {
		
		@ $mol_mem
		static yard() {
			return new this.$.$hyoo_sync_client
		}
		
		@ $mol_mem
		static User() {
			return this.Person( this.yard().peer().id )
		}
		
		@ $mol_mem_key
		static Person( id: $mol_int62_string ) {
			return $hyoo_talks_person.make({ id })
		}
		
		@ $mol_mem_key
		static Chat( id: $mol_int62_string ) {
			return $hyoo_talks_chat.make({ id })
		}
		
		static chat_new() {
			return this.Chat( this.yard().land_grab( [''], [], ['0_0'] ).id() )
		}
		
		@ $mol_mem_key
		static Message( id: $mol_int62_string ) {
			return $hyoo_talks_message.make({ id })
		}
		
		static message_new() {
			return this.Message( this.yard().land_grab().id() )
		}
		
	}
	
}
