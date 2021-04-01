import { Component, HostListener, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { INews } from '../model/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListNews: INews[];
  isShow: boolean;
  topPosToStartShowing = 100;
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