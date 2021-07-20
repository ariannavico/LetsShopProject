import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"



@Injectable({
    providedIn: 'root'
})

export class SharedService {
    constructor(private http: HttpClient) { }

    category: string = ''
    currentCategoryName:string = ''
    currentProductType:string = ''
    categories: string[] = []
    dataOriginal:any = []
    data: any = []
    currentProduct: any = {}
    cart: any = []
    isBought: any = ''
    productIndex: any
    taxCost: number = 60;
    subTotal: number = 0
    checkout: number = 0
    indexRemoveItem: any
    payments:any 
    ApiMock:string = "https://60b0a8001f26610017ffed24.mockapi.io/products"
    typeProduct:string= ''
    doorStep:boolean= false


    
    getDatiMock(): Observable<any> {
        return this.http.get(this.ApiMock)
    }


    getDati() {
        this.getDatiMock().subscribe(data => {
            this.data = data
            this.dataOriginal = data
            console.log(this.data, 'dati');
            this.getCategory()
        })

    }

    getCategory() {
        this.category = this.data.map((el: any) => {
            this.categories.push(el.category)
        })
        this.categories = this.removeDuplicates(this.categories)
        //console.log(this.categories);
    }

    removeDuplicates(data: any) {
        return data.filter((value: any, index: any) => data.indexOf(value) === index)

    }
    

    currentCategory(el:any){
        this.currentCategoryName = el
        console.log(el);
    }

    currentTypeProduct(el:any){
        this.currentProductType = el
        if(el){
            this.typeProduct = 'Green Products'
        }else{
            this.typeProduct = 'Featured Products'
        }
        console.log(el, this.typeProduct, 'tipo');
    }

    getCurrentProduct(i: any) {
        this.currentProduct = this.data.filter((e: any) => {
            return e.id === i.id
        })
        console.log(this.currentProduct, 'o');
        this.currentTypeProduct(i.isGreen)
    }

    addToCart(el: any) {
        if (this.cart.length > 0) {
            this.isBought = (e: any) => e.id === el.id
            if (this.cart.findIndex(this.isBought) >= 0) {
                el.quantity += 1
                el.priceTotal = parseInt(el.price) * (el.quantity)
                console.log(this.cart);
                this.subTotal += parseInt(el.price)
            }
            else {
                this.subTotal += parseInt(el.price)
                el.quantity = 1;
                el.priceTotal = parseInt(el.price)
                this.cart.push(el)
            }
        } else {
            el.priceTotal = parseInt(el.price)
            el.quantity = 1
            this.subTotal = parseInt(el.price)
            this.cart.push(el)
            console.log(this.cart, 1);

        }
        this.checkout = this.subTotal + this.taxCost
    }


    removeQuantity(e: any,) {
        if (e.quantity > 1) {
            this.cart.filter((el: any) => {
                if (el.id === e.id) {
                    el.quantity -= 1
                    el.priceTotal = el.price * (el.quantity)
                }
                console.log(this.cart);
            })
        } else {
            if (this.cart.length !== 1) {
                this.indexRemoveItem = this.cart.indexOf(e)
                console.log(this.indexRemoveItem);
                this.indexRemoveItem = this.cart.splice(this.indexRemoveItem, 1)
                console.log(this.cart);

            } else {
                this.cart = []
            }
        }
        this.payment()
    }

    addQuantity(e: any) {

        this.cart.filter((el: any) => {
            if (el.id === e.id) {
                el.quantity += 1
                el.priceTotal = el.price * (el.quantity)
            }
        })
        this.payment()
    }

    
    payment(){
        this.subTotal = 0
        this.payments = this.cart.map((e:any)=>{
            this.subTotal +=  parseInt(e.priceTotal)
            this.checkout = this.subTotal + this.taxCost
        })
        
    }
}