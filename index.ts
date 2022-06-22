import * as readline from 'readline';

class Palindrome {

  word: string;

  constructor(word: string) {
    this.word = word;
  }

  palindrome(): boolean {
    var re          = /[\W_]/g;
    var lowerWord   = this.word.toLowerCase().replace(re, '');
    var reverseWord  = lowerWord.split('').reverse().join(''); 
    return reverseWord === lowerWord;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukan kalimat atau kata: ', (answer) => {
  const palindrome  = new Palindrome(answer);
  const result    = palindrome.palindrome();

  switch (result) {
    case true:
      console.log('Palindrome');
      break;
    case false:
      console.log('Bukan Palindrome');
      break;
  
    default:
      break;
  }

  rl.close();
});
