export function displayAchievements(data) {
    const container = document.getElementById('achievements-container');
    container.innerHTML = ''; // Clear previous data
    data.sort((a, b) => b.per - a.per);
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = '';
        card.innerHTML = `
        <div class="max-w-2xl bg-white rounded-lg shadow dark:bg-gray-800 mx-5">
            <img class="w-full" src="${item.photo}" alt="Achievement photo" />
            <div class="px-5 pb-5 pt-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
                <p class="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Date: ${item.date}</p>
            </div>
        </div>`;
        container.appendChild(card);
    });
}