
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/leandrojales2/portifolio-profissional/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}

