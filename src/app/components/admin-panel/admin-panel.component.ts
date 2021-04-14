import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../services/news/news.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  images: any[];
  file: File;
  isShowAllNews: boolean = false;
  constructor(private storage: AngularFireStorage) { }
  ngOnInit(): void { }

  showAllNews(){
    this.isShowAllNews = true;
  }

  formTemplateDocument = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    discription: new FormControl('',[Validators.required, Validators.maxLength(120)]),
    documentUrl: new FormControl('',[Validators.required])
  });

  onSubmit(formValue: any) {
    console.log("onSubmit");
    if(this.formTemplateDocument.valid){
      this.storage.upload(`document/${formValue.name}`,formValue.target.files[0]);
    }
  }

  get formControls(){
    return this.formTemplateDocument['controls'];
  }
}
