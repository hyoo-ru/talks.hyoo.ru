namespace $ {
	
	export class $hyoo_talks_message extends $hyoo_crus_entity.with({
		Text: $hyoo_crus_atom_str,
	}) {
		
		@ $mol_mem
		text( next?: string ) {
			return this.Text( next )?.val( next ) ?? ''
		}
		
		@ $mol_mem
		authors() {
			const glob = this.$.$hyoo_crus_glob
			return this.author_lords().map( ref => glob.Node( ref, $hyoo_talks_person ) )
		}
		
		@ $mol_mem
		changed() {
			return this.last_change()?.toOffset( new $mol_time_moment().offset! )
		}
		
	}
	
}
