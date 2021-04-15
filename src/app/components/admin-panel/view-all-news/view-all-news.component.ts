import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news/news.service';
import { INews } from '../../../models/news';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-news',
  templateUrl: './view-all-news.component.html',
  styleUrls: ['./view-all-news.component.css']
})
export class ViewAllNewsComponent implements OnInit {

  listNews: INews[];
  constructor(private service: NewsService, private roter: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getNews().subscribe(
      (res: INews[]) => {
        this.listNews = res;
      },
      (err: any) => {
        this.listNews = null;
      });
  }
  onDelete(id) {
    this.service.deletNews(id).subscribe(
      (res: any) => {
        this.toastr.success("Удаление прошло успешно", "Новость удалена");
        this.ngOnInit();
      },
      (err: any) => {
        this.toastr.error("Не удачная операция", "Новость не удалена");
      });
  }
}
