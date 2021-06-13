namespace $.$$ {
	export class $hyoo_talks_message_bubble extends $.$hyoo_talks_message_bubble {
		
		text( next?: string ) {
			return this.message().text( next )
		}
		
		author() {
			return this.message().author()!
		}
		
		@ $mol_mem
		side() {
			const message = this.message()
			return message.domain().user() === message.author() ? 'self' : 'other'
		}
		
		editable() {
			return this.side() === 'self'
		}
		
		@ $mol_mem
		links() {
			return ( this.text().match( /https?:\/\/\S+/g ) ?? [] ).map(
				uri => uri.replace( 'https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/' )
			)
		}
		
		previews() {
			return this.links().map( (_,i)=> this.Preview(i) )
		}
		
		preview_uri( index: number ) {
			return this.links()[ index ]
		}
		
		moment() {
			return this.message().moment()?.toString( 'YYYY-MM-DD hh:mm' ) ?? '∞'
		}
		
	}
}
