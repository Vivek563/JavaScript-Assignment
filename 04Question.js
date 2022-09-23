// Check if the string contains a word Script using includes() method.

let sampleWord = 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.';

const word = 'Script';

console.log(`Simple word contain the word : ${word} ? ${sampleWord.includes(word) ? 'Yes' : 'No'}`);