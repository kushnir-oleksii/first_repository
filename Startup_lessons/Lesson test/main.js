// function validateEmail(email) {
   
//     let checkCharacters = email.split("");
//     let atIndex = checkCharacters.indexOf("@");
//     if (atIndex == -1 || atIndex == 0 || atIndex == checkCharacters.length - 1) {
//       return false;
//     }
//     let dotIndex = checkCharacters.indexOf(".", atIndex);
//     if (dotIndex == - 1 || dotIndex == atIndex - 1 || dotIndex == checkCharacters.length + 1) {
//       return false;
//     }
//    return true
  
//   }
//   console.log(validateEmail("emalgma.@ilco.m"))

// function validateEmail(email) {
//     const atIndex = email.indexOf('@');
//     const dotIndex = email.lastIndexOf('.');
//     if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex >= email.length - 2 || email[atIndex-1] === '.' || email[atIndex+1] === '.') {
//       return false;
//     }
//     return true;
//   }
//   console.log(validateEmail("emalgma.@il.com"))//false
//   console.log(validateEmail("emalgma@ilcom"))//false
//   console.log(validateEmail("emalgma@il.com"))//true

// function validateEmail(email) {
//     if (email.length < 5) {
//       return false;
//     }
//     let atCount = 0;
//     for (let i = 0; i < email.length; i++) {
//       if (email[i] === "@") {
//         atCount++;
//       }
//       if (atCount > 1) {
//         return false;
//       }
//     }
//     return atCount === 1;
//   }

//   console.log(validateEmail("ema@lg.ma@il.com"))

function task1 (number) {
  if (+number === 5){
    return true
  }
}
console.log(task1(10/2))