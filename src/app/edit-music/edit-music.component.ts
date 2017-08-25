import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.css'],
  providers: [MusicService]
})
export class EditMusicComponent implements OnInit {
  @Input() selectedMusic;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  beginUpdatingMusic(musicToUpdate){
    this.musicService.updateMusic(musicToUpdate);
  }

  beginDeletingMusic(musicToDelete){
    if(confirm("Are you sure you want to delete this entry?")){
      this.musicService.deleteMusic(musicToDelete);
    }
  }

}
