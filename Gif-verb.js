
const apiKey = 'WB82naOgFwZKDPe8fJk56XqIvTSqJF6B';

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const gifContainer = document.getElementById('gif-container');
    const removeButton = document.getElementById('remove-button');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const searchTerm = searchInput.value;
        searchInput.value = ''; 

        if (searchTerm.trim() === '') {
            return; 
        }

        
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const gifUrl = data.data.image_url;

        
            const gifElement = document.createElement('img');
            gifElement.src = gifUrl;
            gifContainer.appendChild(gifElement);
        } catch (error) {
            console.error('Error fetching GIF:', error);
        }
    });

    removeButton.addEventListener('click', () => {
        
        while (gifContainer.firstChild) {
            gifContainer.removeChild(gifContainer.firstChild);
        }
    });
});
