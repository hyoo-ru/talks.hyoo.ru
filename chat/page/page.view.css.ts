namespace $.$$ {
	
	const { rem, px, per } = $mol_style_unit
	
	$mol_style_define( $hyoo_talks_chat_page, {
		
		'@': {
			hyoo_talks_chat_page_embed: {
				'true': {
					backgroundColor: 'transparent',
				}
			}
		},
		
		flex: {
			basis: rem(50),
			shrink: 0,
		},
		
		Title: {
			width: rem(12),
			box: {
				shadow: 'none',
			},
			background: {
				color: 'transparent',
			},
		},
		
		Tools: {
			flex: {
				grow: 0,
			},
		},
		
		Search: {
			alignSelf: 'stretch',
			flex: {
				shrink: 0,
				basis: per(100),
			},
		},
		
		Body_content: {
			padding: 0,
			flex: {
				grow: 0,
				basis: 'auto',
			},
		},
		
		Bubble: {
			margin: $mol_gap.block,
		},
		
		Foot: {
			padding: $mol_gap.block,
		},
		
		Draft_text: {
			
			flex: {
				shrink: 1,
			},
			
		},
		
	} )
	
}
