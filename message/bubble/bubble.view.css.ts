namespace $.$$ {
	
	const { vary } = $mol_style_func
	
	$mol_style_define( $hyoo_talks_message_bubble, {

		'@': {
			hyoo_talks_message_bubble_side: {
				self: {
					Meta: {
						flex: {
							direction: 'row-reverse',
						},
					},
					alignItems: 'flex-end',
				},
				other: {
					alignItems: 'flex-start',
				},
			},
		},
		
		Meta: {
			flex: {
				wrap: 'wrap',
			},
		},
		
		When: {
			padding: $mol_gap.text,
			color: $mol_theme.shade,
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
		
		Peek: {
			wordBreak: 'break-all',
		},
		
		Previews: {
			alignSelf: 'stretch',
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
