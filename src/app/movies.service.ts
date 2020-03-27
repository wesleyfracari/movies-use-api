import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  async getMovies() {
    // let result = await fetch('http://api.themoviedb.org/3/movie/popular?api_key=64c470c6d174e558b9af2e27ddc57425');
    // let result2 = result.json();
    try {
      let result = await this.http.get('http://api.themoviedb.org/3/movie/popular?api_key=64c470c6d174e558b9af2e27ddc57425&include_adult=true').toPromise();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getMovie(id: number) {
    try {
      let result = await this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=64c470c6d174e558b9af2e27ddc57425`).toPromise();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getMoviesPage(page: number) {
    try {
      let result = await this.http.get(`http://api.themoviedb.org/3/movie/popular?api_key=64c470c6d174e558b9af2e27ddc57425&page=${page}&include_adult=true`).toPromise();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getGeners() {
    try {
      let result = await this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=64c470c6d174e558b9af2e27ddc57425&language=en-US&include_adult=true').toPromise();
      return result;
    } catch (error) {
      return error;
    }
  }

  async getMoviesbyGenerId(id: string, page: number) {
    try {
      let result = await this.http.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=64c470c6d174e558b9af2e27ddc57425&page=${page}`).toPromise();
      return result;
    } catch (error) {
      return error;
    }
  }
  
}
  // async getMovies(): Promise<Movie[]> {
  //   return MOVIES;
  // }

  // async getMovie(id: number){
  //   let resultId  = MOVIES.find(Movie => Movie.id === id);
  //   return resultId;
  // }


// export class Movie {
//   id: number;
//   original_language: string;
//   original_title: string;
//   title: string;
//   vote_average: number;
//   poster_path: string;
// }

// export const MOVIES: Movie[] = [
//   { id: 1,  original_language: "English", original_title: "ATW", title: "ATS", vote_average: 10,poster_path: "/assets/img/1.jpg" },
//   { id: 2,  original_language: "English", original_title: "ATW", title: "Atf", vote_average: 9, poster_path: "/assets/img/2.jpg" },
//   { id: 3,  original_language: "English", original_title: "ATW", title: "ATW", vote_average: 8, poster_path: "/assets/img/3.jpg" },
//   { id: 4,  original_language: "English", original_title: "ATW", title: "ATW", vote_average: 7, poster_path: "/assets/img/4.jpg" },
//   { id: 5,  original_language: "English", original_title: "ATW", title: "ATW", vote_average: 9, poster_path: "/assets/img/5.jpg" },
//   { id: 6,  original_language: "English", original_title: "ATW", title: "ATW", vote_average: 2, poster_path: "/assets/img/6.jpg" },
//   { id: 7,  original_language: "English", original_title: "ATW", title: "ATW", vote_average: 3, poster_path: "/assets/img/7.jpg" },
//   { id: 8,  original_language: "English", original_title: "ATW", title: "ATW", vote_average: 9, poster_path: "/assets/img/8.jpg" },
//   { id: 9,  original_language: "English", original_title: "ATW", title: "ATW", vote_average: 4, poster_path: "/assets/img/9.jpg" },
//   { id: 10, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 9, poster_path: "/assets/img/10.jpg" },
//   { id: 11, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 1, poster_path: "/assets/img/11.jpg" },
//   { id: 12, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 2, poster_path: "/assets/img/12.jpg" },
//   { id: 13, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 1, poster_path: "/assets/img/13.jpg" },
//   { id: 14, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 1, poster_path: "/assets/img/14.jpg" },
//   { id: 15, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 1, poster_path: "/assets/img/15.jpg" },
//   { id: 16, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 2, poster_path: "/assets/img/16.jpg" },
//   { id: 17, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 3, poster_path: "/assets/img/17.jpg" },
//   { id: 18, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 1, poster_path: "/assets/img/18.jpg" },
//   { id: 19, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 2, poster_path: "/assets/img/19.jpg" },
//   { id: 20, original_language: "English", original_title: "ATW", title: "ATW", vote_average: 4, poster_path: "/assets/img/20.jpg" }
// ]