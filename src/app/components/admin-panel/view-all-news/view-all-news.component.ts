import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news/news.service';
import { INews } from '../../../models/news';

@Component({
  selector: 'app-view-all-news',
  templateUrl: './view-all-news.component.html',
  styleUrls: ['./view-all-news.component.css']
})
export class ViewAllNewsComponent implements OnInit {

  listNews: INews[];
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getNews().subscribe(
      (res: INews[]) => {
        this.listNews = res;
      },
      (err: any) => {

      }
    )
  }

}
