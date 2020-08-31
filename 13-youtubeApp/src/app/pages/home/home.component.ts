import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";
import { Video } from 'src/app/models/youtube.models';
import Swal from 'sweetalert2'
import { DomSanitizer } from '@angular/platform-browser';
import { DomseguroPipe} from "../../pipes/domseguro.pipe"
  import { from } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[]=[];

  constructor(private youtubeServices:YoutubeService,
    private domSanitazer:DomSanitizer,
    private domSeguro:DomseguroPipe) { }

  ngOnInit(): void {
  this.cargarVideos();
  }
cargarVideos(){
  this.youtubeServices.getVideos().subscribe(resp=>{
    this.videos.push(...resp)
  })
}
  mostrarVideo(video:Video){
    //let url = this.domSanitazer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+video.resourceId.videoId);
   const url = "https://www.youtube.com/embed/"+video.resourceId.videoId;
    Swal.fire({
      html:`
      <h4>${video.title}</h4>
      <hr>
      <iframe width="100%" 
      height="315" 
      src=${url}
      frameborder="0" 
      allow="accelerometer; 
      autoplay; encrypted-media; 
      gyroscope; picture-in-picture" 
      allowfullscreen></iframe>`
    })
  }

}
