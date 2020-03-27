import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog } from '@angular/material';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
  entryComponents: [DetailModalComponent]
})

export class GenresComponent{
  popular: [];
  private genreId: string;
  length = 10000;
  pageSize = 20;
  pageEvent: PageEvent;

  constructor(

    private movieService: MoviesService,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.genreId = event.url.replace('/genres/', '');
        this.getMoviesPages(this.genreId, 0);
      }
    });
  }

  async getMoviesPages(id: string, page: number): Promise<any> {
    if (!page) {
      page = 1;
    }
    let popular = await this.movieService.getMoviesbyGenerId(id, page);
    let ret = popular.results;
    for (popular of ret) {
      popular["posterMovie"] = "http://image.tmdb.org/t/p/w500" + popular["poster_path"];
    }
    this.popular = ret.slice(0, 20); 
  }

  changePage(event: PageEvent) {
    this.genreId;
    let page = event.pageIndex + 1;
    let pageSize = event.pageSize;
    this.getMoviesPages(this.genreId, page);
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

  async openModal(id) {
    //let result = await this.movieService.getMovie(id);
    const dialogRef = this.dialog.open(DetailModalComponent, {
      width: '850px',
      data: { id: id }
    });
  }
}