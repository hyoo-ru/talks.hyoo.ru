namespace $ {
	
	export class $hyoo_talks_message extends $hyoo_talks_entity {
		
		@ $mol_mem
		text( next?: string ) {
			return this.state().sub( 'text', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		author() {
			const id = [ ... this.state().land.authors() ][0]
			return id ? this.$.$hyoo_talks_domain.Person( id ) : null
		}
		
		@ $mol_mem
		changed() {
			const stamp = this.state().land.last_stamp()
			return stamp ? new $mol_time_moment( stamp ).toOffset( new $mol_time_moment().offset! ): null
		}
		
	}
	
}
