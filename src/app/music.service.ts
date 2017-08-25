import { Injectable } from '@angular/core';
import { Music } from './music.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MusicService {
  music: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
      this.music = database.list('music');
  }

  getAllMusic(){
    return this.music;
  }

  addNewMusic(newMusic: Music){
    this.music.push(newMusic);
  }

}
