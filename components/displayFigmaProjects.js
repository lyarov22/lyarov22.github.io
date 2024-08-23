export function displayFigmaProjects(data) {
    const container = document.getElementById('figma-projects-container');
    container.innerHTML = ''; // Clear previous data
    data.sort((a, b) => b.per - a.per);
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = '';
        card.innerHTML = `
        <div class="max-w-2xl bg-white rounded-lg shadow dark:bg-gray-800 mx-5">
            <a href="${item.url}">
                <img class="w-full" src="${item.avatar}" alt="Figma project image" />
            </a>
            <div class="px-5 pb-5 pt-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
                                    <p class="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">${item.description}</p>
                    <a href="${item.url}"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Open on Figma
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
            </div>
        </div>`;
        container.appendChild(card);
    });
}