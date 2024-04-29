const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmE3OGU5NzdkZjY4YjNiYTJjMjVjZWU4MTY0ZmYyZiIsInN1YiI6IjY2MjhkZjU3MzQ0YThlMDE0Y2FlZTA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o34j8ZVAlARN_QbSQ0pOS2VBnHbqqCGKLofM7i27gKA'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
