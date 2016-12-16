/**
 * Created by gaob on 12/13/2016.
 *
 * a service to log all
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
/** Dummy version of an authenticated user service */
export class LogService {


    constructor(private http:Http){}

    log(msg: any)   {
        console.log(msg);
        //this.http.post().
    }
    error(msg: any) { console.error(msg); }
    warn(msg: any)  { console.warn(msg); }
}
