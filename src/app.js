/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("I can't make it tonight.");

  document.getElementById("generate").addEventListener("click", function() {
    document.getElementById("excuse").innerText = generateExcuse();
  });
};

const generateExcuse = () => {
  let who = ["My house", "My lizard", "The world", "My sanity"];
  let action = ["broke", "flew away", "crushed", "broke"];
  let what = ["my car", "with my wallet", "my computer"];
  let when = [
    "this morning",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was walking"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
