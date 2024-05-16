document.addEventListener("DOMContent-Loaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function() 
    {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("header-placeholder").innerHTML = xhr.responseText;

            document.getElementById("aboutLink").addEventListener("click", function(event)
            {
                event.preventDefault(); // Prevent default anchor behavior
                var dropdownContent = document.getElementById("dropdown-content");
                dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block" ;
            });

            // add event listener for the dropdown after the header is loaded
            document.getElementById("aboutLink").addEventListener("click", function(event) 
            {
                event.preventDefault(); //Prevent default anchor behavior
                var dropdownContent = document.getElementById("dropdown-content");

                dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block" ;
            });
        }
    };
    xhr.send();
});
