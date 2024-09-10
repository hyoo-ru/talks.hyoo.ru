namespace $ {
	
	export class $hyoo_talks_channel extends $hyoo_crus_dict.with({
		Messages: $hyoo_crus_list_ref_to( ()=> $hyoo_talks_message ),
		Draft: $hyoo_crus_atom_ref_to( ()=> $hyoo_crus_text ),
		Anchor: $hyoo_crus_atom_ref_to( ()=> $hyoo_talks_message ),
	}) {
		
		draft( next?: string ) {
			return this.Draft(null)?.ensure({} )?.text( next ) ?? ''
		}
		
		anchor( next?: $hyoo_talks_message ) {
			return this.Anchor( next )?.remote( next ) ?? null
		}
		
	}
	
}
