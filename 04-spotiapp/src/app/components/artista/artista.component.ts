import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
artista:any={};
topTracks:any[]=[];
loadingArtist:boolean;
  constructor(private router:ActivatedRoute,private spotify:SpotifyService) { 
    this.loadingArtist=true;
    this.router.params.subscribe(params=>{
      this.spotify.getArtista(params['id']).subscribe(artista=>{
        this.artista=artista;
        this.loadingArtist=false;
      });
      this.getTopTracks(params['id']); 
    });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe((topTracks:any)=>{
        //console.log(topTracks);
        this.topTracks=topTracks;
    });
  }

  ngOnInit(): void {
  }

}
