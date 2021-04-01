import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { INews } from '../model/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListNews: INews[];
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getSomeNews().subscribe(
      (res: INews[]) => {
        this.ListNews = res;
      },
      (err: any) => {
        if (err.status == 400) {
          this.ListNews = null;
        }
      });
  }
}