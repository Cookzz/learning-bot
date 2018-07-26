class WordLibrary {
  constructor(){
    this.bag = [];
  }

  bagOfWords(words){
    let wordsLength = words.length;
    let bagLength = this.bag.length;
    let i=0;

    while (i < wordsLength){
      if(this.bag.indexOf(words[i]) == -1){
        this.bag.push(words[i].toLowerCase());
      }
      i++;
    }

    console.log(this.bag);
  }
}
