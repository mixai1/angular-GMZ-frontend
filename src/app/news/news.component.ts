import { Component, OnInit, HostListener } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { INews } from '../model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  NewsList: INews[];
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getNews().subscribe(
      (res: INews[]) => {
        this.NewsList = this.sortDateNews(res);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  private sortDateNews(list: INews[]): INews[] {
    let sortList: INews[] = list.sort((i, j) => {
      return new Date(i.dateTime) > new Date(j.dateTime) ? -1 : 1;
    });
    return sortList;
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
