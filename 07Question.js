// Use lastIndexOf to determine the position of the last occurrence of a script.

let sentence =
  "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.";

let sentence_script = "that is";

console.log(
  `The last index of the script: '${sentence_script}' is at index ${sentence.lastIndexOf(sentence_script)}`
);
