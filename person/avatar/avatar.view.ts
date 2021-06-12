namespace $.$$ {
	
	export class $hyoo_talks_person_avatar extends $.$hyoo_talks_person_avatar {
		
		title() {
			return this.person()?.name() ?? ''
		}
		
		uri() {
			return `https://gravatar.com/avatar/${ this.person()?.id() ?? '' }?d=robohash`
		}
		
	}
	
}
