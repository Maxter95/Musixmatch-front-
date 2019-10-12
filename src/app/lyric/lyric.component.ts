import { Component, OnInit } from '@angular/core';
import {LyricsServices} from '../services/lyrics.services';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.component.html',
  styleUrls: ['./lyric.component.css']
})

export class LyricComponent implements OnInit {
  searchText;
  musiques: any;
  lyric: any;
  lyric2: any ;
  id;
  isLoading: Boolean;
   liste: any[];
  public chercherMusique$: Observable<any> = undefined;
  constructor(public lyricsService: LyricsServices , private route: ActivatedRoute ,
              private router: Router ) { }

  ngOnInit() {
    this.isLoading = false;
  }
  chercherMusique(searchText) {
    this.isLoading = true;
    this.musiques = [];
    this.lyricsService.getSongByArtist(searchText).subscribe(musiques =>{
      this.isLoading = false;
      this.musiques = musiques;
     console.log (this.musiques);
      this.liste = this.musiques.message.body.track_list;
      console.log (this.liste);
  });
  }
    showLyric(id) {
      this.lyricsService.getLyricById(id).subscribe(lyric => {
        this.lyric = lyric;
        this.lyric2 = this.lyric.message.body.lyrics.lyrics_body;
        console.log (this.lyric2);
        localStorage.setItem ('lyr' , JSON.stringify (this.lyric2)) ;
       this.router.navigate (['/Show']);
      });
    }





}
