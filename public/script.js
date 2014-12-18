(function (map) {
	var components = {},
		generatorForm = $('#generator-form'),
		
		formBorderBox = '.form-border-box',
		formContainer = '.form-container',
		
		formMoveXs = $('#form-move-xs'),
		formMoveSm = $('#form-move-sm'),
		formMoveMd = $('#form-move-md'),
		formMoveLg = $('#form-move-lg'),
		
		formVisibilityCSS = '.form-visibility-css',
		formPrintCss = '.form-print-css',
		
		output = $('#output');
	
	for (var i=0; i<map.length; i++) {
		components[map[i]] = $('#component_' + map[i]).html();
	}
	
	components.license = $('#component_license').html();
	components.warning = $('#component_warning').html();
	
	$(generatorForm).on('submit', function (e) {
		e.preventDefault();
		
		var tempVal;
		
		$(output).val('');
		appendOutput(components.license);
		
		tempVal = radioGetVal(formBorderBox);
		if (tempVal == 'both') {
			appendOutput(components.border_box_container_fluid);
			appendOutput(components.border_box_container_fixed);
		}
		else if (tempVal == 'fluid') {
			appendOutput(components.border_box_container_fluid);
		}
		else if (tempVal == 'fixed') {
			appendOutput(components.border_box_container_fixed);
		}
		else {
			appendOutput(components.border_box_all);
		}
		
		tempVal = radioGetVal(formContainer);
		if (tempVal == 'fluid') {
			appendOutput(components.bootstrap_container_fluid);
		}
		else if (tempVal == 'fixed') {
			appendOutput(components.bootstrap_container_fixed);
		}
		else {
			appendOutput(components.bootstrap_container_fluid);
			appendOutput(components.bootstrap_container_fixed);
		}
		
		appendOutput(components.bootstrap_column);
		
		if ($(formMoveXs).is(':checked')) {
			appendOutput(components.bootstrap_column_xs_move);
		}
		if ($(formMoveSm).is(':checked')) {
			appendOutput(components.bootstrap_column_sm_move);
		}
		if ($(formMoveMd).is(':checked')) {
			appendOutput(components.bootstrap_column_md_move);
		}
		if ($(formMoveLg).is(':checked')) {
			appendOutput(components.bootstrap_column_lg_move);
		}
		
		tempVal = radioGetVal(formVisibilityCSS);
		if (tempVal == 'none') { }
		else if (tempVal == 'not') {
			appendOutput(components.warning);
			appendOutput(components.bootstrap_visible_normal);
		}
		else {
			appendOutput(components.bootstrap_visible_important);
		}
		
		tempVal = radioGetVal(formPrintCss);
		if (tempVal == 'none') { }
		else if (tempVal == 'not') {
			appendOutput(components.warning);
			appendOutput(components.bootstrap_visible_print_normal);
		}
		else {
			appendOutput(components.bootstrap_visible_print_important);
		}
	});
	
	function appendOutput (appendContent) {
		$(output).val(function (index, content) {
			return content + appendContent + '\n';
		});
	}
	
	function radioGetVal (node) {
		return $(node + ':checked').val();
	}
})(map);
