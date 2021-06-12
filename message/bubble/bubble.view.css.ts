namespace $.$$ {
	
	const { rem } = $mol_style_unit
	
	$mol_style_define( $hyoo_talks_message_bubble, {
		
		'@': {
			hyoo_talks_message_bubble_side: {
				self: {
					flex: {
						direction: 'row-reverse',
					},
				},
				other: {
					flex: {
						direction: 'row',
					},
				},
			},
		},
		
		Author: {
			width: rem(2.5),
			height: rem(2.5),
			flex: 'none',
			border: {
				radius: $mol_gap.round,
			},
		},
		
		Text: {
			padding: 0,
			flex: {
				grow: 1,
				shrink: 1,
			},
			background: {
				color: $mol_theme.back,
			},
			border: {
				radius: $mol_gap.round,
			},
		},
		
	} )
	
}
