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

  getMusicById(musicId: string) {
    return this.database.object('music/' + musicId);
  }

  updateMusic(localUpdatedMusic) {
    let musicEntryInFirebase = this.getMusicById(localUpdatedMusic.$key);
    musicEntryInFirebase.update({
      name: localUpdatedMusic.name,
      genre: localUpdatedMusic.genre,
      info: localUpdatedMusic.info,
      link: localUpdatedMusic.link
    });
  }

  deleteMusic(localMusicToDelete){
    let musicEntryInFirebase = this.getMusicById(localMusicToDelete.$key);
    musicEntryInFirebase.remove();
  }

}
