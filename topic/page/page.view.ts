namespace $.$$ {
	
	export class $hyoo_talks_topic_page extends $.$hyoo_talks_topic_page {

		Head() {
			return this.embed() ? null! : super.Head()
		}
		
		head() {
			return [
				this.Title(),
				this.Tools(),
				... this.search_enabled() ? [ this.Search() ] : [],
			]
		}
		
		@ $mol_mem
		search_enabled( next?: boolean ) {
			
			if( next === undefined ) return false
			
			if( next ) {
				this.Search().Query().focused( true )
			} else {
				this.search( '' )
			}
			
			return next
		}
		
		search_start( event: Event ) {
			this.search_enabled( true )
			event.preventDefault()
		}
		
		search_end( event: Event ) {
			this.search_enabled( false )
			this.Search_toggle().focused( true )
			event.preventDefault()
		}
		
		@ $mol_mem
		chat() {
			return this.$.$hyoo_crus_glob.Node( $hyoo_crus_ref( this.chat_id() ), $hyoo_talks_topic )
		}
		
		title( next?: string ) {
			return this.chat().title( next )
		}
		
		@ $mol_mem
		messages( next?: $hyoo_talks_message[] ) {
			new $mol_after_frame( $mol_wire_async( ()=> {
				if( this.Bubbles().gap_after() === 0 ){
					this.scroll_end()
				}
			} ) )
			return this.chat().messages( next )?.remote_list( next ) ?? []
		}
		
		message( msg: $hyoo_talks_message ) {
			return msg
		}
		
		@ $mol_mem
		bubbles() {
			return this.messages().map( msg => this.Bubble( msg ) )
		}
		
		draft_controls () {
			return [
				this.Draft_text(),
				this.Speech_toggle(),
				... this.draft_text().trim() ? [ this.Draft_send() ] : []
			]
		}
		
		@ $mol_mem
		joined( next?: boolean ) {
			this.$.$mol_notify.allowed( true )
			return this.chat().watch_my( next )
		}
		
		@ $mol_mem
		draft_text( next?: string ) {
			return this.chat().draft_my( next )
		}
		
		draft_send() {
			
			const text = this.draft_text()
			if ( !text ) return 
			
			const message = this.chat().message_make()!
			message.text( text )
			this.draft_text( '' )
			
			this.$.$mol_wait_rest()
			this.scroll_end()
			
			this.joined( true )

		}
		
		body_scroll_top( next? : number ) {
			const key = `${ this }.body_scroll_top()`
			return this.$.$mol_state_local.value( key , next )
				?? Number.MAX_SAFE_INTEGER
		}
		
		scroll_end() {
			this.Body().scroll_top( this.Body().dom_node().scrollHeight )
		}
		
		@ $mol_mem
		update_anchor() {
			
			const all = this.messages()
			let top = this.Bubbles().view_window()[0]
			
			this.chat().anchor_my( all[ top ] )

		}
		
		@ $mol_mem
		@ $mol_action
		autoscroll() {
			
			const message = this.chat().anchor_my()
			if( !message ) return
			
			this.ensure_visible( this.Bubble( message ), 'start' )
			
		}
		
		/** All messages in CSV (actually TSV) as Blob */
		dump_blob() {
			
			// get all messages in the chat
			const messages = this.chat().messages()
			
			// makes CSV lines: author, message, date-time
			const lines = messages.map( msg => {
				return [
					// author name or id
					msg.author()?.name() || msg.author()?.id || '',
					// message text
					msg.text() ?? '',
					// formatted time moment in local time zone
					msg.changed()?.toString( 'YYYY-MM-DD hh:mm:ss' ) ?? '',
				].map( v => JSON.stringify( v ) ).join( '\t' )
			} )
			
			// prepend lines vith headers
			const tsv = [ 'Name\tMessage\tMoment', ... lines ].join( '\n' )
			
			// convert to blob and return
			return new Blob( [ tsv ], { type: 'text/tab-separated-values' } )
			
		}
		
		/** File name for dump messages. */
		dump_name() {
			const name = this.chat().title() || this.chat().id || super.dump_name()
			return name + '.csv'
		}
		
		/** App listens speech or not. **/
		hearing( next? : boolean ) {
			// Bind "microphone" toggler with speech api
			return this.$.$mol_speech.hearing( next )
		}
		
		/** Current watched recognition result. */
		@ $mol_mem
		speech_index( next = 0 ) {
			return next
		}
		
		/** Task for convertion continous speech to messages. */
		@ $mol_mem
		speech_to_text() {
			
			// skip task when speech recognition is disabled
			if( !this.hearing() ) return null
			
			// get last recognition result
			const index = this.speech_index()
			const last = this.$.$mol_speech.recognition( index )
			if( !last ) return null
			
			// get recognized text
			let text = last[0].transcript
			
			// highlight if we unsure in result
			const sure = last[0].confidence
			if( sure < .75 ) text = '//' + text
			
			// update draft text
			this.draft_text( text )
			
			// if recognition result is finalized
			if( last.isFinal ) {
				// delayed mutaion
				new $mol_after_tick( $mol_wire_async( ()=> {
					this.speech_index( index + 1 ) // watch next recognition
					this.draft_send() // submit message and make new draft
				} ) )
			}
			
			// all tasks should return something
			return null
		}
		
		auto() {
			this.speech_to_text()
			this.autoscroll()
			this.update_anchor()
		}
		
	}
	
	$mol_view_component( $hyoo_talks_topic_page )
	
}
