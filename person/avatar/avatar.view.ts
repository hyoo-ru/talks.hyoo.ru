namespace $.$$ {
	
	export class $hyoo_talks_person_avatar extends $.$hyoo_talks_person_avatar {
		
		title() {
			return this.person()?.name() ?? ''
		}
		
		uri() {
			return this.person()?.avatar() ?? ''
		}
		
	}
	
}
