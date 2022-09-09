namespace $ {
	
	export class $hyoo_talks_entity extends $mol_object {
		
		id = '0_0' as $mol_int62_string
		
		domain() {
			return this.$.$hyoo_talks_domain
		}
		
		@ $mol_mem
		state(): $hyoo_crowd_struct {
			return this.domain().yard().land( this.id ).chief
		}
		
		// toString() {
		// 	return this.id
		// }
		
	}
	
}
