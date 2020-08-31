import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {}
  ngOnInit(): void {}

  buscar(termino: string) {
    //console.log(termino);
    this.loading = true;
    if (termino) {
      this.spotify.getArtistas(termino).subscribe((data: any) => {
        this.artistas = data;
      });
    } else {
      this.artistas = [];
    }
    this.loading = false;
  }
}
