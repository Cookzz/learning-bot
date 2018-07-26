module.exports = class NeuralNetwork {
  constructor(){
    this.bag = [];
  }

  bagOfWords(words){
    var wordsLength = words.length;
    var bagLength = this.bag.length;

    if (bagLength == '0'){
      this.bag.push(...words);
    }
    else {
      for (var x = 0; x < bagLength; x++){
        for (var y = 0; y < wordsLength; y++){
          if (words[x] != this.bag[y]){
            this.bag.push(words[x]);
          }
          else {
            //do nothing
          }
        }
      }
    }

    console.log(words);
  }

  test(){

  }
}

/*
  CHECK LENGTH OF BAG AND WORDS

  IF (NO LENGTH)
  THEN ALL WORDS ADD TO BAG

  IF (THERE IS LENGTH)
  THEN EACH WORD IN BAG WILL BE CHECKED WITH THE ENTIRE WORDS LENGTH
    IF THAT WORD CHECKED IN BAG EXISTS
    THEN DISCARD THAT WORD
    ELSE IF THAT WORD DOES NOT EXIST IN BAG
    THEN PUSH

    THIS METHOD IS INEFFICIENT (IF THERE ARE 2> IN AN ARRAY, IT WILL BE CHECKED AGAIN)
*/
