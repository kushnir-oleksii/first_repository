function task1 (number) {
  if (+number === 5){
    return true
  }
}

function validateEmail(email) {
    if (email == "") {
      return false;
    }
    if (typeof email != "string") {
      return false;
    }
    
    if (+email == 0) {
        return false;
      }
    if (email.length < 5){
        return false
    }

    if (email.length < 5) {
      return false;
    }
}
function validateEmail1(email){
  let atCount = 0;
for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    atCount++;
  }
  if (atCount > 1) {
    return false;
  }
}
return atCount === 1;
}

function validateEmail2(email) {
  let atIndex = email.indexOf('@');
  let dotIndex = email.lastIndexOf('.');
  if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex >= email.length - 2 || email[atIndex-1] === '.' || email[atIndex+1] === '.') {
    return false;
  }
  return true;
}






// function validateEmail(email){
//     return true
// }


// function validateEmail(email){
//     if (email === ''){
//          return false
//      }
//  }

// function validateEmail(email) {
//     if (email == "") {
//       return false;
//     }
//     if (typeof email != "string") {
//       return false;
//     }
//     if (!email.split('').includes('@') || email.split('') [0] == '@'){
//         return false;}

//     // if (+email == 0) {
//     //   return false;
//     // }

//     // let atCount = 0;
//     // for (let i = 0; i < email.length; i++) {
//     // if (email[i] === "@") {
//     //   atCount++;
//     // }
//     // if (atCount > 1) {
//     //   return false;      
//     } 
 


//     let checkCharacters = email.split("");
//     if (!checkCharacters.includes("@") || checkCharacters[0] == "@") {
//       return false;
//     }
   

//     if (email.length < 5){
//         return false
//     }



    // if (!email.split('').includes('@') || email.split('') [0] == '@'){
    //   return false;}}



  
  