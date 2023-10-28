const data = fetch("https://jsonplaceholder.typicode.com/users");

data.then((response) => response.json()).then((response) => getData(response));
const classusers = document.querySelector(".users");
// console.log(users)
function getData(users) {
  users.forEach((user) => {
    console.log(user);

    let name = (
      `<h3 id="user${user.id}">
        <a href="user_detail.html?id=${user.id}">Name: ${user.name}</a>
      </h3>`
    );

    classusers.innerHTML += name;
    // classusers.insertAdjacentHTML('beforeend',name);
  });
}
// console.log(data)
