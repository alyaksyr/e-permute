import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  personnels:any[];
  link_img : string;
  p: number = 1;
  
  constructor(private router: Router,
    private personnelS: PersonnelService, private pageTitle: Title) { 
      // this.link_img = AppConfig.imageUrl;
      this.pageTitle.setTitle('Tableau de board | E-permute');
    }

  ngOnInit() {
    this.getAllPersonnel();
  }

  onEditarticle(){
    this.router.navigate(['/admin/articles/editer']);
  }

  getAllPersonnel(){
    let personnel:any;
    this.personnelS.getAll().subscribe(res=>{
      try {
        if(res && res.status === 200){
          personnel = res.data;
          this.personnels = personnel;
          console.log(this.personnels);
        }else{
          this.personnels = [];
        }
      } catch (error) {
        this.personnels = [];
      }
      
    })
  }

  deleteArticle(id:number){

  }

}
