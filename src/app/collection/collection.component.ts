import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  pageTitle: string
  productList: any
  
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let param:string = params['productName']
      this.setPageTitle(param)
      this.setStaticData(param)
    })
  }

  //fetch data by respective product
  setStaticData = (path:string) => {
    let productName:string = path.split('-')[0].toLowerCase()
    let filename:string = 'collection' + productName.charAt(0).toUpperCase() + productName.slice(1) + 'List.json' //filename can be easily updated according to URL

    this.httpClient.get('assets/data/' + filename).toPromise().then(res => {
      this.productList = res
    })
  }

  //Construct page title from path
  setPageTitle = (path:string) => {
    let pathLowerCase:string = path.toLowerCase()
    let productNames:Array<string> = pathLowerCase.split('-')

    for(let i=0; i<productNames.length; i++){
      productNames[i] = productNames[i].charAt(0).toUpperCase() + productNames[i].slice(1)
    }

    this.pageTitle = productNames.join(' ')
  }

}
