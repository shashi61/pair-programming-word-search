const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (let j = 0; j < letters[0].length; j++) {
      let str = "";
  
      for (let i = 0; i < letters.length; i++) {
        str += letters[i][j];
      }
  
      if (str.includes(word)) {
        return true;
      }
    }
    return false;
  };
  

module.exports = wordSearch