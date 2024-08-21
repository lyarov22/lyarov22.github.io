document.addEventListener("DOMContentLoaded", function () {
    const apiUrls = {
        sites: 'http://localhost:8000/sites/',
        achievements: 'http://localhost:8000/achievements/',
        workExperience: 'http://localhost:8000/work_experience/',
        figmaProjects: 'http://localhost:8000/figma_projects/'
    };

    async function fetchData(apiUrl, displayFunction) {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayFunction(data);
        } catch (error) {
            console.error('Fetch error:', error);
            document.getElementById('data-container').innerHTML = '<p class="text-red-500">Error fetching data</p>';
        }
    }

    function displaySites(data) {
        const container = document.getElementById('sites-container');
        container.innerHTML = ''; // Clear previous data
        data.sort((a, b) => a.per - b.per);
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = '';
            card.innerHTML = `
            <div class="max-w-2xl bg-white rounded-lg shadow dark:bg-gray-800 mx-5">
                <a href="${item.url}">
                    <img class="w-full" src="${item.avatar}" alt="Site image" />
                </a>
                <div class="px-5 pb-5 pt-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${item.title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.description}</p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.detailed_description}</p>
                    <div class="flex flex-row items-center gap-4">
                        <a href="${item.url}"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Open Site
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <div class="justify-left flex flex-row gap-2">
                            <p class="text-gray-900 dark:text-white bg-green-900 rounded-xl px-3 py-1">Сайт</p>
                            <p class="text-gray-900 dark:text-white bg-green-900 rounded-xl px-3 py-1">pet-проект</p>
                            <p class="text-gray-900 dark:text-white bg-green-900 rounded-xl px-3 py-1">Fullstack</p>
                        </div>
                    </div>
                </div>
            </div>`;
            container.appendChild(card);
        });
    }

    function displayAchievements(data) {
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
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Дата достижения: ${item.date}</p>
                </div>
            </div>`;
            container.appendChild(card);
        });
    }

    function displayWorkExperience(data) {
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
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.company}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.start_date} - ${item.end_date} (${item.duration})</p>
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

    function displayFigmaProjects(data) {
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

    fetchData(apiUrls.sites, displaySites);
    fetchData(apiUrls.achievements, displayAchievements);
    fetchData(apiUrls.workExperience, displayWorkExperience);
    fetchData(apiUrls.figmaProjects, displayFigmaProjects);
});
