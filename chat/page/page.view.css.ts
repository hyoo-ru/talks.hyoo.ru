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
			basis: rem(54),
			shrink: 0,
		},
		
		Title: {
			boxShadow: 'none',
			background: {
				color: 'transparent',
			},
			width: rem(12),
			':placeholder-shown': {
				box: {
					shadow: [{
						inset: true,
						x: 0,
						y: 0,
						blur: 0,
						spread: px(1),
						color: $mol_theme.line,
					}],
				},
				background: {
					color: $mol_theme.field,
				},
			},
		},
		
		Search: {
			alignSelf: 'stretch',
			flex: {
				shrink: 0,
				basis: per(100),
			},
		},
		
		Body: {
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
