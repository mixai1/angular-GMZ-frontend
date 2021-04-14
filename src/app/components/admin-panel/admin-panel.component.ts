import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  images: any[];
  file: File;
  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

  onfileupLoads(event) {
    this.file = event.target.files;
    console.log(this.file);
  }
  onSave() {
  }

}
