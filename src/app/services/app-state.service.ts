import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productsState : any = {
   products:[],
   keyword:"",
  totalPages:0,
  pageSize:3,
  currentPage:1,
    totalProducts:0,
    status : "",
    errorMessage : ""
}

public authState : any = {
    isAuthenticated : false,
    username : undefined,
    roles : undefined,
    token : undefined
}

public setProductState(state : any){
    this.productsState = {...this.productsState, ...state}
}

  constructor() { }

  public setAuthState(state : any){
    this.authState = {...this.authState, ...state}
  }
}
