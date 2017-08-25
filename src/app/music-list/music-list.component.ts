import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Music } from '../music.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
  providers: [MusicService]
})
export class MusicListComponent implements OnInit {
  music: FirebaseListObservable<any[]>;

  constructor(private router: Router,private musicService: MusicService) { }

  ngOnInit() {
    this.music = this.musicService.getAllMusic();
    console.log(this.music);
  }

  goToDetailPage(clickedMusic) {
    console.log("got this far");
    console.log(clickedMusic);
    this.router.navigate(['music', clickedMusic.$key]);
  }

}
