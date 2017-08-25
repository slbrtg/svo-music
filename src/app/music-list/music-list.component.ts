import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
  providers: [MusicService]
})
export class MusicListComponent implements OnInit {
  music: FirebaseListObservable<any[]>;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.music = this.musicService.getMusic();
  }

}
