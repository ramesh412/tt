import { Component, OnInit } from '@angular/core';
import {observable} from 'rxjs'
import * as Rx from 'rxjs';
import * as $ from 'jquery'
import { ThrowStmt } from '@angular/compiler';


const btn =$('#btn');
const btnStream$= Rx.fromEvent(btn,"click");

btnStream$.subscribe(
  function(e){
    console.log('clicked')
  }
)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cloths = ["Shirt", "Pant", "TShirt"];
  months =["january","feb","march","april","may","june"]
  constructor() { }

  ngOnInit() {
   console.log(this.cloths.pop());
   console.log(this.cloths.shift());
   document.getElementById('div1').addEventListener("click",function(){
     if(
      document.getElementById('div1').style.background==="green"
     ){
      document.getElementById('div1').style.background="red";
  document.getElementById('div2').style.background="green"; 
     }else{
      document.getElementById('div1').style.background="green";
      document.getElementById('div2').style.background="red";
     }
   })
   document.getElementById('div2').addEventListener("click",function(){
    if(
     document.getElementById('div2').style.background==="red"
    ){
     document.getElementById('div1').style.background="red";
 document.getElementById('div2').style.background="green"; 
    }else{
     document.getElementById('div2').style.background="red";
     document.getElementById('div1').style.background="green";
    }
  })
  document.getElementById('div1').style.background="red";
  document.getElementById('div2').style.background="green";
  // <div id="div1">hhh</div>
		// <div id="div2">kkkkkkkkkkkk</div>

this.runs();
          
         
    // Rx.from(fetch('/api/endpoint')).subscribe({
    //   next(response) { console.log(response); },
    //   error(err) { console.error('Error: ' + err); },
    //   complete() { console.log('Completed'); }
  
    // });
  
  
  // const btn =$('#btn');
  // const btnStream$= Rx.fromEvent(btn,"click");
  // btnStream$.subscribe(
  //   function(e){
  //     console.log('clicked')

  //   }
  // )
  }
  
// Create an Observable out of a promise
fun(){
const input= $('#btn');
  const InputStream$= Rx.fromEvent(input,"click");
  InputStream$.subscribe(
    function(x){
      console.log('e',x.target
      )
    }
  )
  }
  runs(){
    // $('#btn').on('click',function(){
    //   var div = $('#par');
    //   div.animate({ height:'toggle'})
    //       });

   
}
// commit
myValue = false
  colorChange() {
    this.myValue = !this.myValue;
  }
monthFun(val){
console.log("kkkkk",val.target.value)
}  
add(a,b){
  return a+b;
}
}
