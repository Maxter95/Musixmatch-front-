import { Component, OnInit } from '@angular/core';
import {LyricsServices} from '../services/lyrics.services';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {Chart} from 'chart.js';
import {Rating} from '../models/Rating';
@Component({
  selector: 'app-lyric',

  templateUrl: './lyric.component.html',
  styleUrls: ['./lyric.component.css'],

})

export class LyricComponent implements OnInit {
  searchText;
  musiques: any;
  lyric: any;
  ch: any;
  lyric2: any ;
  id;
 ch1 = [];
  ch2: any;
  isLoading: Boolean;
   liste: any[];
   ch3= new Array<Rating>();
  showForm1: boolean = false;
  public chartData: Object [];
  public primaryXAxis: Object;
  public chercherMusique$: Observable<any> = undefined;
  constructor(public lyricsService: LyricsServices , private route: ActivatedRoute ,
              private router: Router ) { }

  ngOnInit():void {
    this.isLoading = false;

// Data for chart series


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
  chart() {
    this.lyricsService.chartS().subscribe(ch => {
      this.ch = ch;

      console.log (this.ch);

    });

  }
  findall() {
    this.lyricsService.findall().subscribe(ch => {
      this.ch = ch;

      console.log(this.ch);
      for ( let a in this.ch ){

        for (let b in this.ch[a].artists){

        this.ch1.push(this.ch[a].artists[b].map(t=>t.artist.artist_name));
        this.ch3.push({"name":(this.ch[a].artists[b].map(t=>t.artist.artist_name)).toString(),"rate":parseInt(this.ch[a].artists[b].map(t=>t.artist.artist_rating))});


      }}


      console.log(this.ch3);
      this.chartData = this.ch3;
      this.primaryXAxis = { valueType: 'Category' };
    });

    this.showForm1 = !this.showForm1;
  }

  ssearchNSave() {
    this.lyricsService.searchNSave().subscribe(ch2 => {
      this.ch2 = ch2;

      console.log (this.ch2);

    });

  }

  notEmpty(){
    return this.searchText == null;
  }


}
