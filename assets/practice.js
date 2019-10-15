(function () {
    console.log("hello");

    var MyDiv = document.getElementById("MyDiv");
    var header = document.createElement("h1");
    var newText = document.createTextNode("Hello World!");
    header.appendChild(newText);
    MyDiv.appendChild(header);

})();