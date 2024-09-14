import { displayWorkExperience } from './components/displayWorkExperience.js';
import { displaySites } from './components/displaySites.js';
import { displayAchievements } from './components/displayAchievements.js';
import { displayFigmaProjects } from './components/displayFigmaProjects.js';
import { displayOtherProjects } from './components/displayOtherProjects.js';

document.addEventListener("DOMContentLoaded", function () {
    const BASE_URL = 'https://fastfolio.onrender.com/';

    const apiUrls = {
        workExperience: `${BASE_URL}work_experience/`,
        sites: `${BASE_URL}sites/`,
        achievements: `${BASE_URL}achievements/`,
        figmaProjects: `${BASE_URL}figma_projects/`,
        otherProjects: `${BASE_URL}other/`
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
            document.getElementById('data-container').innerHTML = '<p class="text-red-500">Error fetching data, please contact t.me/totaljerkface</p>';
        }
    }

    fetchData(apiUrls.sites, displaySites);
    fetchData(apiUrls.achievements, displayAchievements);
    fetchData(apiUrls.workExperience, displayWorkExperience);
    fetchData(apiUrls.figmaProjects, displayFigmaProjects);
    fetchData(apiUrls.otherProjects, displayOtherProjects);
});
