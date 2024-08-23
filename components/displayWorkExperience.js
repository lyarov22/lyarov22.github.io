export function displayWorkExperience(data) {
    const container = document.getElementById('work-experience-container');
    container.innerHTML = ''; // Clear previous data
    data.sort((a, b) => b.per - a.per);
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = '';
        card.innerHTML = `
        <div class="max-w-2xl bg-white rounded-lg shadow dark:bg-gray-800 mx-5">
        <div class="px-5 pb-5 pt-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
            <p class="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">${item.company}</p>
            <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">${item.start_date} - ${item.end_date} (${item.duration})</p>
            <ul class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${item.responsibilities.map(resp => `<li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.5 14.2L5 10.7l-1.4 1.4 4.9 4.9 8.5-8.5-1.4-1.4-7.6 7.6z"/></svg>
                ${resp}
            </li>`).join('')}
            </ul>
        </div>
        </div>
        `;
        container.appendChild(card);
    });
}