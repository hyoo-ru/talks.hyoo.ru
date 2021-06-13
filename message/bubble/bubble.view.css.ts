namespace $.$$ {
	
	$mol_style_define( $hyoo_talks_message_bubble, {
		
		'@': {
			hyoo_talks_message_bubble_side: {
				self: {
					Meta: {
						justifyContent: 'flex-end',
					},
				},
				other: {
					Meta: {
					},
				},
			},
		},
		
		When: {
			padding: $mol_gap.text,	
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
			Edit: {
				background: {
					color: 'transparent',
				},
				boxShadow: 'none',
			},
		},
		
		Preview: {
			padding: 0,
			flex: {
				grow: 1,
				shrink: 1,
				basis: 'auto',
			},
		},	
		
	} )
	
}
