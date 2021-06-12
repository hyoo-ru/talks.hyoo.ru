namespace $.$$ {
	export class $hyoo_talks_message_bubble extends $.$hyoo_talks_message_bubble {
		
		text() {
			return this.message().text()
		}
		
		author() {
			return this.message().author()!
		}
		
		side() {
			const message = this.message()
			return message.domain().user() === message.author() ? 'self' : 'other'
		}
		
	}
}
