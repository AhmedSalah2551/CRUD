import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  language:any
  newMode : boolean = false;
  constructor(
    private translate: TranslateService)
  {
    this.language = localStorage.getItem("language");
    if("language" in localStorage){
      translate.use(this.language);
    };
  }
  ngOnInit(): void {
    // const savedDarkMode = localStorage.getItem('darkMode');
    // if (savedDarkMode) {
    //   this.newMode = JSON.parse(savedDarkMode);
    // }
  }
  title = 'angulartasks';
}
