import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Music } from '../music.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MusicService]
})
export class AdminComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  addNewMusic(name: string, genre: string, info: string, link: string){
    let newMusic: Music = new Music(name,genre,info,link);
    this.musicService.addNewMusic(newMusic);
  }

}
