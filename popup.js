$(document).ready(function() {

	// declaring variables early
	String startID;
	String endID;
	String startName;
	String endName;
	String startURL;
	String endURL;

	$.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=2",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            // console.log(data); // apparently used for debugging
            startID = query.random[0].id;
        	endID = query.random[1].id;
        	startName = query.random[0].title;
        	endName = query.random[1].title;
        	startURL = "https://en.wikipedia.org/?curid=" + startID;
        	endURL = "https://en.wikipedia.org/?curid=" + endID;
        },
        error: function (errorMessage) {
        }
        /*
        
        */

        // need to convert the codes to https://en.wikipedia.org/?curid=___________
        // need Chrome WebRequest API to bring the user to a page
    });

});

/* This stuff below was from StackOverflow */
function clickHandler(e) {
    chrome.tabs.update({url: "https://example.com"});
    window.close(); // Note: window.close(), not this.close()
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click-me').addEventListener('click', clickHandler);
});