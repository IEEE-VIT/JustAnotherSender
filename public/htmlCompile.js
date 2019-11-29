function compile() {
    var html = document.getElementById("html");
    var code = document.getElementById("compiledHTML").contentWindow.document;
    code.open();
    code.writeln(
      html.value
    );
    code.close();
    console.log("Updating")
  }
  
document.getElementById("html").addEventListener("keyup", function (){
    compile()
})