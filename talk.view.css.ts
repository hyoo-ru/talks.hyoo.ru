namespace $.$$ {
	
	const { rem } = $mol_style_unit
	const { url } = $mol_style_func
	
	$mol_style_define( $hyoo_talks, {
		
		'@': {
			hyoo_talks_embed: {
				'true': {
					background: {
						color: 'transparent',
						image: 'none',
					},
				},
			},
		},
		
		background: {
			size: [ 'cover' ],
		},
		
		Roster: {
			
			flex: {
				basis: rem(26),
				shrink: 0,
			},
			
			Foot: {
				padding: $mol_gap.block,
			},
			
		},
		
		Links_query: {
			alignSelf: 'auto',
			flex: {
				grow: 0,
				shrink: 0,
			},
		},
		
		Placeholder: {
			
			Head: {
				padding: 0,
			},
			
			Body: {
				padding: 0,
			},
			
			
			'@': {
				hyoo_talks_placeholder_transparent: {
					'true': {
						backgroundColor: 'transparent',
					}
				}
			},
		
		},
		
		Chat_unread_count: {
			
			left: 0,
			
		}
		
	} )
	
}
