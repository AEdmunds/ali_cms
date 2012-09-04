// Use this to customize the wymeditor boot process
// Just mirror the options specified in boot_wym.js with the new options here.
// This will completely override anything specified in boot_wym.js for that key.
// e.g. skin: 'something_else'
if (typeof(custom_wymeditor_boot_options) == "undefined") { 
	custom_wymeditor_boot_options = {
		// mcj - put the pre one in the button bar so we can get code in there
		containersItems: [
		    {'name': 'h1', 'title':'Heading_1', 'css':'wym_containers_h1'},
		    {'name': 'h2', 'title':'Heading_2', 'css':'wym_containers_h2'},
		    {'name': 'h3', 'title':'Heading_3', 'css':'wym_containers_h3'},
		    {'name': 'p', 'title':'Paragraph', 'css':'wym_containers_p'},
		    {'name': 'pre', 'title':'Preformatted', 'css':'wym_containers_pre'}
		]
	}; 
}

