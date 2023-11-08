import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/shareReplay';

export interface Config {
  herosUrl: string;
  textfile: string;
  date: any;
}

@Component({
  selector: 'app-recent-content',
  templateUrl: './recent-content.component.html',
  styleUrls: ['./recent-content.component.scss']
})


@Injectable()
export class RecentContentComponent implements  OnInit {
  public videoInfo: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log("HI" +(this.getPlaylists()));

    //throw new Error('HELLOOOOOOOO');
  }

  // This method retrieves the playlists from my youtube channel
  getPlaylists() : any {

   return this.http.get<Config>('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2C%20id%2C%20localizations%2C%20player%2C%20status&maxResults=25&key=AIzaSyAdHKvr6v3VgQ_brqQ7znEom_L4my_aifk&channelId=UC2iN3Ti-xZFeUfEsqZlEn2g').subscribe(response => {
    console.log(response);
    this.videoInfo = response;
    console.log(this.videoInfo);

  });
  }

}
