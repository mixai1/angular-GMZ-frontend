import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from '../model/news';
import { UserProfileService } from '../shared/user-profile.service';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  news: INews;
  newsList: INews[];
  constructor(private router: ActivatedRoute, private service: NewsService) { }

  ngOnInit(): void {
    let id: number = this.router.snapshot.params['id'];
    this.service.getFullNews(id).subscribe(
      (res: INews) => {
        this.news = res;
      },
      (err: any) => {
        this.news = null;
      }
    );
    this.service.getSomeNews().subscribe(
      (res: INews[]) => {
        this.newsList = res;
      }
    )
  }

}
