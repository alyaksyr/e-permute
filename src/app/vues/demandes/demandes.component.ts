import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/parametres/app-config';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss']
})
export class DemandesComponent implements OnInit {

  demandes:any[];
  link_img : string;
  p: number = 1;
  
  constructor(private router: Router,
    private demandeS: DemandeService, private pageTitle: Title) { 
      // this.link_img = AppConfig.imageUrl;
      this.pageTitle.setTitle('Liste des demandes | E-permute');
    }

  ngOnInit() {
    this.getAllDemande();
  }

  onEditarticle(){
    this.router.navigate(['/admin/articles/editer']);
  }

  getAllDemande(){
    let demande:any;
    this.demandeS.getAll().subscribe(res=>{
      try {
        if(res && res.status === 200){
          demande = res.data;
          this.demandes = demande;
          console.log(this.demandes);
        }else{
          this.demandes = [];
        }
      } catch (error) {
        this.demandes = [];
      }
      
    })
  }

  deleteArticle(id:number){

  }
}
