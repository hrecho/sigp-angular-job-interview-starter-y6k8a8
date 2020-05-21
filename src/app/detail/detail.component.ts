import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil, tap, map, flatMap } from 'rxjs/operators';
import { GithubIssue } from '../models/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any>;
  private data: GithubIssue;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map((params) => {
        return params.ID;
      }),
      flatMap((issueID: number) => {
        return this.readData(issueID);
      }),
      tap((issueData) => {
        this.data = issueData;
      })
    ).subscribe();
    
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  readData(issueID): Observable<GithubIssue> {
    const requestUrl = 'https://api.github.com/repos/angular/material2/issues/' + issueID;
    return this.http.get<GithubIssue>(requestUrl);
  }  
}