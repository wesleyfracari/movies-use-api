import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog } from '@angular/material';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  entryComponents: [DetailModalComponent]
})

export class HomeComponent implements OnInit {
  //movies: Movie[];
  popular: [];
  private id: number;
  private url: string;
  length = 20;
  pageSize = 20;

  constructor(
    private movieService: MoviesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    //this.getMovies();
    this.getMovies();
  }
  public executeSelectedChange = (event) => {
    console.log(event);
  }

  async getMovies(): Promise<any> {
    let popular = await this.movieService.getMovies();
    let ret = popular.results;
    for (popular of ret) {
      popular["posterMovie"] = "http://image.tmdb.org/t/p/w500" + popular["poster_path"];
    }
    this.popular = ret.slice(0, 20);
  }
  
  async openModal(id) {
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '850px',
      data: { id: id }
    });
  }
}