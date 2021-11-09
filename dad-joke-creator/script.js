const button = document.querySelector(".button");
const display = document.querySelector(".display");

button.addEventListener("click", async () => {
  let newJoke = await getDadJoke();
  display.innerText = newJoke;
});

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } }; //choosing header
  const res = await axios.get("https://icanhazdadjoke.com/", config);

  return res.data.joke;
};
