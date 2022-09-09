namespace $.$$ {
	export class $hyoo_talks_message_bubble extends $.$hyoo_talks_message_bubble {
		
		// @ $mol_mem
		// rows() {
			
		// 	if( !this.message().complete() && !this.peek() ) {
		// 		return [
		// 			this.Meta(),
		// 			this.Peek(),
		// 		]
		// 	}
			
		// 	return super.rows()
		// }
		
		text( next?: string ) {
			return this.message().text( next )
		}
		
		author() {
			return this.message().author()!
		}
		
		@ $mol_mem
		side() {
			const message = this.message()
			return message.domain().User() === message.author() ? 'self' : 'other'
		}
		
		@ $mol_mem
		editable( next?: boolean ) {
			if( next !== undefined ) return next
			return this.side() === 'self'
		}
		
		editable_faorce() {
			this.editable( true )
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
			return this.message().changed()?.toString( 'YYYY-MM-DD hh:mm' ) ?? ''
		}
		
		@ $mol_mem
		peek_label() {
			return '•'.repeat( this.text().length )
		}
		
	}
}
