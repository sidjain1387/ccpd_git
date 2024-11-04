// const getData = () => {
//   fetch("https://api.github.com/users/sidjain1387")
//     .then((response) => response.json())
//     .then((data) => display(data))
//     .catch((error) => console.error(error));
// };

const getData = async () => {
  try {
    const username = document.getElementById("username").value;
    console.log("username ", username);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    display(data);
  } catch (error) {
    console.error(error);
  }
};

const display = (data) => {
  console.log(data);
  const parentDiv = document.getElementById("parent");
//   const avatarImg = document.getElementById("avatar");
//   avatarImg.style.display = "none";
  parentDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Username:</strong> ${data.login}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Public Repos:</strong> ${data.public_repos}</p>
      <img src="${data.avatar_url}" alt="Avatar" width="150" />
    `;
};
