function getUserId(user) {
  console.log(user.id);
}

function getUserFullName(user) {
  console.log(`${user.firstName} ${user.lastName}`);
}

function getUserAge(user) {
  console.log(user.age);
}

export { getUserId, getUserFullName, getUserAge };
