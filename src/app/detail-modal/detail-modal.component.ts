import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})

export class DetailModalComponent implements OnInit {
  movie;
  posterphoto;
  backphoto; 
  genres;
  release;
  constructor(
    private movieService: MoviesService,
    public dialogRef: MatDialogRef<DetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    //data.conteudo["posterMovie"] = "http://image.tmdb.org/t/p/w500" + data.conteudo["backdrop_path"];
  }

  ngOnInit() {
    this.getMovieId(this.data.id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async getMovieId(id: number) {
    let result = await this.movieService.getMovie(id);
    this.movie = result;
    
    this.genres = result.genres;
    this.release = result.release_date;
    this.backphoto = `http://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
    this.posterphoto = `http://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }


  // public getMovie(data) {
  //   debugger;
  //   let result = this.movieService.getMovie(data);
  //   console.log(result);
  // }

}