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
  let checkCharacters = email.split("");
  if (!checkCharacters.includes("@") || checkCharacters[0] == "@") {
    return false;
  }
  return true;
}
