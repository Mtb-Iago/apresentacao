async function loadGitHubData() {
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const user = await userRes.json();
    document.getElementById("avatar").src = user.avatar_url;

    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed`);
    const repos = await repoRes.json();

    const container = document.getElementById("projectList");

    repos.slice(0, 6).forEach(repo => {
      const article = document.createElement("article");
      article.className = "card";
      article.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição"}</p>
        <a href="${repo.html_url}" target="_blank">Ver projeto →</a>
      `;
      container.appendChild(article);
    });
  } catch (error) {
    console.error("Erro ao carregar dados do GitHub", error);
  }
}

loadGitHubData();