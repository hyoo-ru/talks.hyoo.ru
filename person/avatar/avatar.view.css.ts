namespace $.$$ {
	
	const { rem } = $mol_style_unit

	$mol_style_define( $hyoo_talks_person_avatar, {
		
		padding: 0,
		
		Image: {
			width: rem(2.5),
			height: rem(2.5),
			flex: 'none',
			border: {
				radius: $mol_gap.round,
			},
		},
		
		Name: {
			padding: $mol_gap.text,
		},
		
	} )
	
}
