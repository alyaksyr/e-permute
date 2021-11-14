import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  isAuth: boolean;
  faSearch = faSearch;
  constructor() { }

  ngOnInit() {
    this.isAuth = true;
  }

}
