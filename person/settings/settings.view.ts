namespace $.$$ {
	
	export class $hyoo_talks_person_settings extends $.$hyoo_talks_person_settings {
		
		name( next?: string ) {
			return this.person()?.name( next )
		}
		
		background( next?: string ) {
			return this.person()?.background( next )
		}
		
		avatar( next?: string ) {
			return this.person()?.avatar( next )
		}
		
	}
	
}
