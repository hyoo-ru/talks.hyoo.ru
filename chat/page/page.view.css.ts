namespace $.$$ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $hyoo_talks_chat_page, {
		
		flex: {
			basis: rem(60),
			shrink: 0,
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
