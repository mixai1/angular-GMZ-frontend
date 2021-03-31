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
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.service.getNews().subscribe(
      (res: INews[]) => {
        this.NewsList = res.reverse();
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
  
  onDetail(){
    
  }


  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
