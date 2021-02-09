import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { News } from '../model/news';
import { Data } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  NewsList: News[];
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getNews().subscribe(
      (res: News[]) => {

        console.log(res);

        this.NewsList = res.reverse();
      }
    )
  }

}
