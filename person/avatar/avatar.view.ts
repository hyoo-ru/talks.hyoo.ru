namespace $.$$ {
	
	export class $hyoo_talks_person_avatar extends $.$hyoo_talks_person_avatar {
		
		title() {
			return this.person()?.name() ?? ''
		}
		
		image() {
			return this.person()?.avatar() ?? 'about:blank'
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
