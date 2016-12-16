/**
 * Created by gaob on 12/15/2016.
 */



import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
/** Dummy version of an authenticated user service */
export class AccessService {

    static clientId = '13303251277-m4d66omlqn4kd2cebm3ueo2iuebiev11.apps.googleusercontent.com';
    static apiKey = 'AIzaSyC_AVRBRTKnnd2C8ZBQxwv708KiCFnYti0';
    static scopes = ['https://www.googleapis.com/auth/plus.me','https://www.googleapis.com/auth/calendar.readonly'];
    static logoutUrl = 'https://accounts.google.com/o/oauth2/revoke?token=';

    public isAuthenticated: boolean = false;
    public userName: string;
    public userImageUrl: string;

    private token:string;
    private googleOauthUrl:string =`https://accounts.google.com/o/oauth2/v2/auth?
    scope=email%20profile&
    state=%2Fprofile&
    redirect_uri=https%3A%2F%2localhost%2Foauthcallback&
    response_type=token&
    client_id=812741506391.apps.googleusercontent.com`;
    constructor(private http:Http){
    }

    login(){
           }


}