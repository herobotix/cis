ready(function (){
	
	displayPage = document.getElementById("displayPage");
	pages = {}
	pages.homepage = function() { /*homepage template*/
		page = document.getElementsByClassName("homepage template")[0].cloneNode(true);
		page.classList.remove("template");
		displayPage.textContent = "";
		displayPage.appendChild(page);
	}
	pages.year_entries = function() { /*Year entries template*/
		page = document.getElementsByClassName("year_entries template")[0].cloneNode(true);
		page.classList.remove("template");
		displayPage.textContent = "";
		displayPage.appendChild(page);
	}
	pages.TESTPAGE = function() { /*TESTPAGE template*/
		page = document.getElementsByClassName("TESTPAGE template")[0].cloneNode(true);
		page.classList.remove("template");
		displayPage.textContent = "";
		displayPage.appendChild(page);
	}
	
	/*function drkmdtoggle(event) {
		document.body.classList.toggle("drkmd")
	}
	
	document.getElementById("drkmdbtn").addEventListener("click", drkmdtoggle );*/
		
	function onRedir () {
		if (location.hash === "#year_entries") pages.year_entries();
		else if (location.hash === "#TESTPAGE") pages.TESTPAGE();
		else pages.homepage();
	}
	
	window.onhashchange = onRedir;
	
	window.onhashchange();
});