const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmE3OGU5NzdkZjY4YjNiYTJjMjVjZWU4MTY0ZmYyZiIsInN1YiI6IjY2MjhkZjU3MzQ0YThlMDE0Y2FlZTA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o34j8ZVAlARN_QbSQ0pOS2VBnHbqqCGKLofM7i27gKA'
  }
};

let getData = function () {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())  //url에서 데이터를 받아와 json으로 저장하는 화살표함수
  .then(response => console.log(response))
  .catch(err => console.error(err));
}

document.getElementById(`movieCard`);


//카드만들기
let makeCard = movie => {
  let { title, context, poster, vote_average } = movie;

  let card = document.createElement('div');
  let image = document.createElement('img');
  let movieTitle = document.createElement('h2');
  let movieContext = document.createElement('p');
  let starPoint = document.createElement('p');

  
  card.className = 'movieCard';
  image.className = 'poster';
  movieTitle.className = 'title';
  movieContext.className = 'context';
  starPoint.className = 'starPoint';

  image.src = `https://image.tmdb.org/t/p/w500${poster}`;

  movieTitle.textContent = title;
  movieContext.textContent = context;
  starPoint.textContent = `평점: ${vote_average}`;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(context);
  card.appendChild(starPoint);

  return card;
};
//모달박스 안에 넣을 영화id
let movieID = document.createElement('result[0].id')

//id팝업을 위한 모달박스
let modal=document.getElementById('alertModal')
//모달박스켜기 위한 dom
let alert=document.getElementById('onCard')
//모달박스끄기위한 dom
let closeBtn=document.getElementsByClassName('close')

//모달박스켜기
onCard.addEventListener('onCard', function(){
  modal.myStyle.display='block'
})
//모달박스끄기
closeBtn.addEventListener('close', function(){
  modal.myStyle.display='none'
})

// let makeCard = function(result){
//   for(n=0;n<result.length;n++){

//   }
// }