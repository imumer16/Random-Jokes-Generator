let Jokes = {
  get_joke: function () {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then((response) => response.json())
      .then((data) => {
        // console.table(data);
        document.querySelector(".setup").innerText = data.setup;
        document.querySelector(".punchline").innerText = "~" + data.punchline;
      })
      .catch((error) => {
        // console.log(error.code + " = " + error.message);
        document.querySelector(".setup").innerText = error.code;
        document.getElementById("punchline").style.color = "red";
        document.getElementById("punchline").style.fontSize = "3em";
        document.querySelector(".punchline").innerText = error.message;
      });
  },
};

//Event "Click Search button"
document.querySelector(".btn").addEventListener("click", function () {
  Jokes.get_joke();
});
//Event "Enter key"
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    Jokes.get_joke();
  }
});
