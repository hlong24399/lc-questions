var nextGreatestLetter = function(letters, target) {
  for (idx in letters)
  {
    const t = target.charCodeAt('\n');
    const r = letters[idx].charCodeAt('\n');;
    if (r > t)
    {
      console.log(letters[idx]);
      break;
    }
  }
};

nextGreatestLetter(["c","f","j"], "d");