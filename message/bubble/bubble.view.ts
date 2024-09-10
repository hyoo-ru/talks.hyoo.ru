namespace $.$$ {
	export class $hyoo_talks_message_bubble extends $.$hyoo_talks_message_bubble {
		
		text( next?: string ) {
			return this.message().text( next )
		}
		
		author() {
			return this.message().authors()[0]!
		}
		
		@ $mol_mem
		side() {
			return this.message().authors().includes( this.$.$hyoo_crus_glob.home().cast( $hyoo_talks_person ) ) ? 'self' : 'other'
		}
		
		moment() {
			return this.message().changed()?.toString( 'YYYY-MM-DD hh:mm' ) ?? ''
		}
		
	}
}
