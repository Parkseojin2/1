document.addEventListener("DOMContentLoaded", function() {
  const apiKey = '58ad78eebd7ebfd2c9174a4f3094eb5e'; 
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const movieList = document.getElementById('movieList');
          data.results.forEach(movie => {
              const movieTitle = movie.title;
              const overview = movie.overview;
              const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'NoImageAvailable.jpg'; // 이미지가 없는 경우 대체 이미지
              const voteAverage = movie.vote_average;

              // 카드 
              const movieCard = document.createElement('div');
              movieCard.classList.add('card');

              // 포스터 이미지 
              const posterImg = document.createElement('img');
              posterImg.src = posterPath;
              posterImg.alt = movieTitle + ' poster';
              movieCard.appendChild(posterImg);

              // 제목 
              const titleElement = document.createElement('h2');
              titleElement.textContent = movieTitle;
              movieCard.appendChild(titleElement);

              // 내용 요약 
              const overviewElement = document.createElement('p');
              overviewElement.textContent = overview ? overview : 'No overview available'; // 내용 요약이 없는 경우
              movieCard.appendChild(overviewElement);

              // 평점
              const voteAverageElement = document.createElement('p');
              voteAverageElement.textContent = `평점: ${voteAverage}`;
              movieCard.appendChild(voteAverageElement);

              // 영화 목록에 카드 추가
              movieList.appendChild(movieCard);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
});
