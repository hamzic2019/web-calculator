var theParent = document.querySelector("#theDude");
    theParent.addEventListener("click", doSomething, false);


   function doaSomething(e) {
       var a = e.target.innerText;

      console.log('Button clicked: ' + a);

       e.stopPropagation();
   }
