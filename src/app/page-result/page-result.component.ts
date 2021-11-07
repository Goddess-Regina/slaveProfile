import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-page-result',
  templateUrl: './page-result.component.html',
  styleUrls: ['./page-result.component.css']
})
export class PageResultComponent implements OnInit {
  @Output() pageToShowEvent = new EventEmitter<number>();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
   // this.getProfiles();
    this.getProfiles1();
  }

/*  private getProfiles() {
    const https = require('https');

    const options = {
      hostname: 'api.pipedream.com',
      port: 443,
      path: '/v1/sources/dc_lVunxp4/event_summaries',
      headers: {
        Authorization: 'Bearer <api_key>',
      },
    };

    const req = https.request(options, resp => {
      let data = '';
      resp.on('data', chunk => {
        data += chunk;
      });
      resp.on('end', () => {
        console.log(JSON.parse(data));
      });
    }).on('error', err => {
      console.error('[error] ' + err.message);
    });
    req.end();

  }*/

  private getProfiles1() {
    this.httpClient.get('https://api.pipedream.com/v1/sources/dc_lVunxp4/event_summaries?expand=event'
      , {
        headers: new HttpHeaders({
          'Authorization': 'Bearer 76c030ab71daae5908437a13af8bec91',
          'Cache-Control': 'no-cache'
        }),
        responseType: 'json'
      })
      .subscribe(data => {
        console.log('profiles', data);
      });
  }
}
