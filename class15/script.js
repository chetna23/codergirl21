window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let testNameInput = document.querySelector("input[name=testName]");
      //  let testNameInput = document.getElementById("");
       let testDate = document.querySelector("input[name=testDate]");
       let windRating = document.querySelector("radio[name='windRating']");
       console.log(windRating);
       if (testNameInput.value === "" || testDate.value === "" || windRating.value === "") {
          alert("All fields are required!");
          // stop the form submission
          event.preventDefault();
       }
    });
 });