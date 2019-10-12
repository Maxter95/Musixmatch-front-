import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LyricsServices} from '../services/lyrics.services';
import {Lyric} from '../models/Lyric';

@Component({
  selector: 'app-show-l',
  templateUrl: './show-l.component.html',
  styleUrls: ['./show-l.component.css']
})
export class ShowLComponent implements OnInit {
 lyr: any;
  lyrr: Lyric = new Lyric();
  showForm1: boolean = true;
  constructor( private route: ActivatedRoute ,
               private router: Router,
               public lyricsService: LyricsServices) { }

  ngOnInit() {
    this.lyr = JSON.parse(localStorage.getItem('lyr'));
  }

  goBack() {
    this.router.navigate (['/Home']);
  }

  save(a) {
this.lyricsService.saveL(JSON.stringify(a)).subscribe(data => { this.lyrr = data as Lyric ; } , error => console.log(this.lyr));
    this.showForm1 = !this.showForm1;
  }

}
