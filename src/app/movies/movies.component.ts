import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog } from '@angular/material';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  entryComponents: [DetailModalComponent]
})

export class MoviesComponent implements OnInit {
  popular: [];

  length = 10000;
  pageSize = 20;
  pageEvent: PageEvent;

  constructor(
    private movieService: MoviesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getMoviesPages(null);
  }

  changePage(event: PageEvent) {
    let page = event.pageIndex + 1;
    let pageSize = event.pageSize;
    this.getMoviesPages(page);
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

  async getMoviesPages(page: number): Promise<any> {
    if (!page) {
      page = 1;
    }
    let popular = await this.movieService.getMoviesPage(page);
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