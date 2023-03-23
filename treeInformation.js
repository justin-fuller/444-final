function loadXMLDoc() {
  //Code to do XML HTTP request (see slides) goes here
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Run a function to handle XML data recv’d
      myFunction(this);
    }
  };
  xhttp.open("GET", "trees.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML; //Response returned as XML data
  txt = "";
  // loading the XML DOC by the ThemeEntiryAbridgedData tag
  x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");
  var div = document.createElement("div");

  console.log(x);
  for (i = 0; i < x.length; i++) {
    txt += x[i].childNodes[1].innerHTML + "<br>";

    // set the text of the newHTML <p> tag to the stuff we have been
    // printing out in the console
    document.getElementById("newHTML").innerHTML = txt;

    // used this source to display an image on click
    //https://www.geeksforgeeks.org/how-to-show-images-on-click-using-html/
    document.getElementById("MMagnoliaImage").style.display = "block";
  }
}
