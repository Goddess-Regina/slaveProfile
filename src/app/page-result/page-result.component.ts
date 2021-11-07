import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from, Observable} from 'rxjs';

@Component({
  selector: 'app-page-result',
  templateUrl: './page-result.component.html',
  styleUrls: ['./page-result.component.css']
})
export class PageResultComponent implements OnInit {
  @Output() pageToShowEvent = new EventEmitter<number>();
  private authToken = '76c030ab71daae5908437a13af8bec91';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getData().subscribe(data => {
      console.log('profiles2', data);
    });
     //this.getProfiles1();
  }


  private getProfiles1() {
    const headers = new HttpHeaders({
      authorization: 'Bearer 76c030ab71daae5908437a13af8bec91',
    });

/*
    this.httpClient.get('http://localhost:4200/api/sources/dc_lVunxp4/event_summaries?expand=event'
   // this.httpClient.get('https://api.pipedream.com/v1/sources/dc_lVunxp4/event_summaries?expand=event'
      , { headers })
      .subscribe(data => {
        console.log('profiles1', data);
      });

    this.httpClient.get('https://goddess-regina.github.io/api/sources/dc_lVunxp4/event_summaries?expand=event'
      // this.httpClient.get('https://api.pipedream.com/v1/sources/dc_lVunxp4/event_summaries?expand=event'
      , { headers })
      .subscribe(data => {
        console.log('profiles2', data);
      });

    this.httpClient.get('https://goddess-regina.github.io/slaveProfile/api/sources/dc_lVunxp4/event_summaries?expand=event'
      // this.httpClient.get('https://api.pipedream.com/v1/sources/dc_lVunxp4/event_summaries?expand=event'
      , { headers })
      .subscribe(data => {
        console.log('profiles3', data);
      });
*/

    this.httpClient.get('https://api.pipedream.com/v1/sources/dc_lVunxp4/event_summaries?expand=event'
      , { headers })
      .subscribe(data => {
        console.log('profiles4', data);
      });
  }

  getData(): Observable<any> {
    return from(
      fetch(
        'https://api.pipedream.com/v1/sources/dc_lVunxp4/event_summaries?expand=event', // the url you are trying to access
        {
          headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer 76c030ab71daae5908437a13af8bec91'
          },
          method: 'GET', // GET, POST, PUT, DELETE
          mode: 'no-cors' // the most important option
        }
      ));
  }
}
