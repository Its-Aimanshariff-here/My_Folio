const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getFunnySafeJoke() {
  jokeEl.innerText = "Cooking up a funny one by Mr.Shariff.... 😂";

  try {
    const sourceChoice = Math.random();
    let jokeText = "";

    if (sourceChoice < 0.5) {
      // 50% chance: JokeAPI (Miscellaneous & Puns only, no programming)
      const res = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Pun");
      const data = await res.json();

      if (data.type === "single") {
        jokeText = data.joke;
      } else {
        jokeText = `${data.setup} — ${data.delivery}`;
      }
    } else {
      // 50% chance: Official Joke API (general real-life jokes)
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      jokeText = `${data.setup} — ${data.punchline}`;
    }

    jokeEl.innerText = jokeText;
  } catch (err) {
    jokeEl.innerText = "Oops, something went wrong 😅";
    console.error(err);
  }
}

jokeBtn.addEventListener("click", getFunnySafeJoke);