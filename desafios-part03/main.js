fetch('https://api.github.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const nomes = `<div class="card-user">
      <img src="${user.avatar_url}" alt="" id="userAvatar" />
      <div class="description">
        <p id="userName">${user.login}</p>
        <p id="userCity"></p>
      </div>
    </div>`;

      document
        .getElementById('lista-nomes')
        .insertAdjacentHTML('beforeend', nomes);
    });
  })
  .catch((error) => console.log(error));
