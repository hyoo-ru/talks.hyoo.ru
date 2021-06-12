namespace $.$$ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $hyoo_talks_chat_page, {
		
		'@': {
			hyoo_talks_chat_page_transparent: {
				'true': {
					backgroundColor: 'transparent',
				}
			}
		},
		
		flex: {
			basis: rem(60),
			shrink: 0,
		},
		
		Title: {
			boxShadow: 'none',
			background: {
				color: 'transparent',
			},
			':placeholder-shown': {
				boxShadow: 'inset 0 0 0 1px var(--mol_theme_line)',
				background: {
					color: $mol_theme.field,
				},
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
