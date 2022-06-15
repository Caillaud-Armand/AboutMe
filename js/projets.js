/**
 * 
 */

function action(project_id, item_id, image_id){
	display(project_id);
	highlight(item_id);
	set_image(image_id);
}

function display(project_id){
	let projects_displayed = document.getElementsByClassName("display");
	for (let i = 0; i < projects_displayed.length; i++) {
		projects_displayed[i].className = "project";
	}
	
	let display_project = document.getElementById(project_id);
	display_project.className = display_project.className + " display";
}

function highlight(item_id){
	let old_project_buttons = document.getElementsByClassName("highlight");
	for (let i = 0; i < old_project_buttons.length; i++) {
		old_project_buttons[i].className = "button";
	}
	
	let new_project_button = document.getElementById(item_id);
	new_project_button.className = new_project_button.className +" highlight";
	
}

function set_image(image_id){
	document.getElementById("selection_image").setAttribute("src","media/"+image_id+"/"+image_id+".png");
}
