'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Experience-Chan is SUGOI");
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	
	$("#submitBtn").click(changeProject);
	
}

function projectClick(e) {
    console.log("Project clicked");
    e.preventDefault();	
	var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
	
	
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
	var imageTemp = $(containingProject).find(".img");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p> I AM EXPERIENCE-CHAN</p>");
	   $(imageTemp).fadeToggle();
	   $(description).fadeToggle();
    }
}

function changeProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newDescription = $('#description').val();
   $(projectID + " .project-description").text(newDescription);
}