import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class LyricsServices {
  constructor(public http: HttpClient) {

  }

  public apiKey = 'b2ee2340090a9c2340c5e1666242d357';
getSongByName(name) {
  return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=${this.apiKey}`, name);
}

getSongByArtist(artist)
{
  return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&page_size=3&page=1&s_track_rating=desc&apikey=${this.apiKey}`);
}

  getLyricById(id) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${this.apiKey}`);

  }
  saveL(l) {
    return this.http.post(`http://localhost:3000/posts/lyric`, {'lyrics': l});

  }

  chartS() {
    return this.http.get(`http://localhost:3000/posts/chart`);

  }
  findall() {
    return this.http.get(`http://localhost:3000/posts/findall2`);

  }
  searchNSave() {
    return this.http.get(`http://localhost:3000/posts/saveSearch`);

  }
}


