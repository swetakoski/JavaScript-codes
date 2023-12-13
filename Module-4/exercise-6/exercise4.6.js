'use strict';
function searchJokes(event) {
            event.preventDefault();

            let query = document.getElementById("query").value;
            fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
                .then(response => response.json())
                .then(data => {
                    displayJokes(data.result);
                })
                .catch(error => {
                    console.error('Error fetching Chuck Norris jokes:', error);
                });
        }

        function displayJokes(jokes) {
            let jokesContainer = document.getElementById("jokesContainer");
            jokesContainer.innerHTML = '';
            jokes.forEach(joke => {
                let article = document.createElement("article");
                let paragraph = document.createElement("p");
                paragraph.textContent = joke.value;
                article.appendChild(paragraph);
                jokesContainer.appendChild(article);
            });
        }