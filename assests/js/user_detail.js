const userDetail = document.querySelector(".user-detail");

// Lấy id người dùng từ URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
        let userInfo = `
            <h2>Name: ${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Address: ${user.address.street} - ${user.address.city}</p
        `;
        userDetail.innerHTML = userInfo;
    });