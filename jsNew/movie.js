const printMovies = document.querySelector("#printMovieData");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmE3OGU5NzdkZjY4YjNiYTJjMjVjZWU4MTY0ZmYyZiIsInN1YiI6IjY2MjhkZjU3MzQ0YThlMDE0Y2FlZTA2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o34j8ZVAlARN_QbSQ0pOS2VBnHbqqCGKLofM7i27gKA",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json()) //url에서 데이터를 받아와 json으로 저장하는 화살표함수
  .then((response) => {
    //movieData 함수에 response 할당
    movieData(response);
    return response;
  })
  .catch((err) => console.error(err));

let template = ``;
let searchMovieData;

//movieData 함수 선언, 영화의 정보를 받아와(reponse) 콘솔에 기록하고 카드를 만드는 함수
let movieData = (response) => {
  console.log(response);
  response.results.forEach((movie) => {
    //+= → forEach로 반복해서 실행할 때, 기존에 만든 카드 아래에 새로운 영화 데이터 카드를 삽입하기 위함(+=)
    //innerHTML으로 html 내에 직접 카드 삽입
    template += `<div class="eachCard">
                      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="" />
                      <h2 class="movieName">${movie.title}</h2>
                      <p class="movieSum">${movie.overview}</p>
                      <p class="movieRate">평점 ${movie.vote_average}</p>
                      
                    </div>`;
    printMovies.innerHTML = template;

    // querySelectorAll(".요소") → html에서 요소를 추출하는데, 요소 앞에 붙는 특수문자에 따라 지칭하는 것이 달라진다.
    const eachCard = document.querySelectorAll(".eachCard");

    // 위에서 선언한 eachCard를 forEach로 반복 / card = 위에서 만들었던 template / cardIdx = 카드 인덱스
    // addEventListener → onclick과 유사하게 "어떤 행동 시 피드백"을 주는 메서드
    // eachCard.forEach → 모든 카드를 순회하면서 이 이벤트를 수행하겠다
    // alert(`영화 id : ${response.results[cardIdx].id}`); → response.results[cardIdx].id = 위에서 얻어온 response에서 results라는 객체 내의 id를 출력하라 
    eachCard.forEach((card, cardIdx) => {
      card.addEventListener("click", () => {
        alert(`영화 id : ${response.results[cardIdx].id}`);
      });
    });

    // 검색창 구현 함수
  searchMovieData = () => {
    // .toUpperCase → 요소의 스펠링을 대문자로 통일시키는 메소드
    // value = 입력받은 문자열을 상수로 저장
    const value = document.getElementById('searchBarBody').value.toUpperCase();
    // cardData = eachCard에서 제목 추출
    const cardData = document.getElementsByClassName('eachCard');
    // 변수 이름만 선언하고, 아래에서 할당하겠다는 의미
    let movieName;

    // 영화 제목을 반복하면서 입력된 문자열과 비교하는 함수
    for (let i=0; i<cardData.length; i++) {
      movieName = cardData[i].getElementsByClassName('movieName');
    // indexOf(value)→value값이 위치하는 곳의 index를 리턴함
      if(movieName[0].innerHTML.toUpperCase().indexOf(value)>-1) {
        cardData[i].style.display='block';
        
      } else {
        cardData[i].style.display='none';
      };
    }
  };

  let mapMovieId = response.results.map((v) => {
    return v.id;
  });

  mapMovieId.forEach((e, idx) => {
    console.log(`${idx} => ${e}`);
  });

  });
};
