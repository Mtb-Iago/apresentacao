async function loadGitHubData() {
  const username = 'Mtb-Iago';
  const cacheKey = 'github_repos_cache';
  
  // 1. Tenta carregar do Cache (localStorage) primeiro
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const umDia = 24 * 60 * 60 * 1000;
    
    // Se o cache tiver menos de 24h, usa ele e nem chama a API
    if (Date.now() - timestamp < umDia) {
      renderProjects(data);
      return; 
    }
  }

  // 2. Se não tem cache ou expirou, tenta a API
  try {
    const response = await fetch(`https://api.github.com{username}/repos?sort=updated`);
    
    if (!response.ok) throw new Error("Limite atingido");

    const repos = await response.json();
    const topRepos = repos.slice(0, 6);

    // Salva no Cache para as próximas 24 horas
    localStorage.setItem(cacheKey, JSON.stringify({
      data: topRepos,
      timestamp: Date.now()
    }));

    renderProjects(topRepos);

  } catch (error) {
    console.warn("API Offline/Limitada. Usando dados antigos ou fallback.");
    // Se a API falhou mas temos cache antigo, usa o antigo mesmo expirado
    if (cachedData) {
      renderProjects(JSON.parse(cachedData).data);
    } else {
      renderProjects([]); // Se for a primeira vez e falhar, mostra vazio ou fallback
    }
  }
}
