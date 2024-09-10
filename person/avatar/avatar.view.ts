namespace $.$$ {
	
	export class $hyoo_talks_person_avatar extends $.$hyoo_talks_person_avatar {
		
		id() {
			return this.person()?.ref().description! ?? ''
		}
		
		name() {
			return this.person()?.title()
		}
		
		// @ $mol_mem
		// uri() {
		// 	const talkers = [
		// 		this.person()?.id ?? '',
		// 		this.person()?.domain().User().id ?? '',
		// 	]
		// 	talkers.sort()
		// 	return `#chat=${ talkers.join('-') }`
		// }
		
		name_content() {
			return [
				... this.person()?.online_near() ? [ this.Online() ] : [],
				this.name(),
			]
		}
	}
	
}
