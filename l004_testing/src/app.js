const sortByAge = (users) => {
    const newUsers = [...users];
    return newUsers.sort((per1, per2) => per1.age - per2.age);
}

module.exports = { sortByAge }