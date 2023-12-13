'use strict';
function searchSeries(event) {
            event.preventDefault();

            // Get the input value
            let query = document.getElementById("query").value;

            // Fetch data from the TVMaze API
            fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Search Result:", data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }