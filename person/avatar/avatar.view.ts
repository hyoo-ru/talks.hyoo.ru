namespace $.$$ {
	
	export class $hyoo_talks_person_avatar extends $.$hyoo_talks_person_avatar {
		
		name() {
			return this.person()?.name() ?? ''
		}
		
		image() {
			return this.person()?.avatar() || `https://gravatar.com/avatar/${ this.person()?.id() }?d=robohash`
		}
		
		@ $mol_mem
		uri() {
			const talkers = [
				this.person()?.id() ?? '',
				this.person()?.domain().user().id() ?? '',
			]
			talkers.sort()
			return `#chat=${ talkers.join('-') }`
		}
		
	}
	
}
