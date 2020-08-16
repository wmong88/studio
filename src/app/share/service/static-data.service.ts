import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  lazyList = [
    {
      name: 'studio',
      path: 'studio'
    }
  ]

  studio: [] = []

  public studioList: Observable<any>

  constructor(private httpClient: HttpClient) { }

  getStaticData = (filename: string) => {
    let path:string = 'assets/data/'

    this.httpClient.get(path + filename + '.json').toPromise().then(res => {
      console.log(res);
      
      return res
    })

    return this.studioList.asObservable()
  }

  // load(){
  //   return Promise.all(
  //     this.lazyList.map(list => {
  //       console.log(list)
  //       return this.httpClient
  //       .get('assets/data/studio.json')
  //       .toPromise()
  //       .then(res => {
  //         //this[list.name] = res;
  //         //this.trans
  //         console.log(res);
  //         return res
  //       }

  //       )
  //     }

  //     )
  //   )
  // }

  
}
