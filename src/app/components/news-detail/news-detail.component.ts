import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from '../../models/news';
import { UserProfileService } from '../../services/user/user-profile.service';
import { NewsService } from '../../services/news/news.service';

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
