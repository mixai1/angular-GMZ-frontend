import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news/news.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  constructor(public service: NewsService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("onSubmit")
    this.service.createNews().subscribe((res: any) => {
      this.toastr.success("Новость успешно добавлена","Успешное добавление")
      this.service.formNewsModel.reset();
      this.router.navigateByUrl('/news');
    }, (err) => {
      if(err.status == 400){
        this.toastr.error("Что пошло не так","Ошибка валидации")
      }
    })
  }

}
