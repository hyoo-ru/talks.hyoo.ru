namespace $.$$ {
	
	const { rem } = $mol_style_unit
	const { url } = $mol_style_func
	
	$mol_style_define( $hyoo_talks, {
		
		background: {
			image: [[ url( 'https://wallpaperaccess.com/full/1385511.jpg' ) ]],
		},
		
		Roster: {
			
			flex: {
				basis: rem(20),
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
		
	} )
	
}
