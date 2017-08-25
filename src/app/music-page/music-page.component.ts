import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Music } from '../music.model';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.css'],
  providers: [MusicService]
})
export class MusicPageComponent implements OnInit {
  musicId: string;
  musicToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private musicService: MusicService ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.musicId = urlParameters['id'];
    });
    this.musicToDisplay = this.musicService.getMusicById(this.musicId);
  }

}
