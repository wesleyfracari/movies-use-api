import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})

export class SidenavListComponent implements OnInit {
  @Output() public sidenavClose = new EventEmitter();
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  panelOpenState = false;

  constructor(public movieService: MoviesService) {
    //this.dataSource.data= this.dados;
  }

  ngOnInit() {
    this.getGenreList();
  }


  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  async getGenreList() {
    let result = await this.movieService.getGeners();
    let ret = result.genres;
    this.dataSource.data = [{ name: 'Genres', children: ret }];
  }
  async openGenre() {
    this.onSidenavClose();
  }
}