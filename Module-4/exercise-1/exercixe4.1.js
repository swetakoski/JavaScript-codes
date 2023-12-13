'use strict;'
function searchSeries(event) {
            event.preventDefault();

            let query = document.getElementById("query").value;
            fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }