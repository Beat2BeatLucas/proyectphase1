import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Reference } from './reference';
import { Chart } from './chart';

@Component({
  selector: 'app-grafico2',
  templateUrl: './grafico2.component.html',
  styleUrls: ['./grafico2.component.css']
})
export class Grafico2Component implements OnInit {
  private width: number;
  private height: number;
  
  data: any[]=[[0, 80],[30, 100],[50, 30],[100, 50],[200, 40],[300, 80],[350,120],[400,50]];
  data2: any[]=[[0, 180],[30, 200],[50, 130],[100, 150],[200, 140],[300, 180],[350,220],[400,150]];

  

  constructor() { 
    this.width= 1002;
    this.height= 502;
  }

  ngOnInit() {
    this.loadFile();
    this.initSvg();
    this.drawGraph();
  }

  private loadFile(){
    //Read the file and store it in a string variable
    function readFile(event){
      let file= event.target.files[0];
      let reader= new FileReader();
      reader.onload= (e) =>{
        let text=reader.result;
        text= text.toString();
        //tabulations between numbers are remplaced by commas
        let data= text.replace(/[\t]+/g,',');
        console.log(data);
      }
      reader.readAsText(file);
    }

    document.getElementById('file-input').addEventListener('change',readFile,false);

   /*
    let cadena= 'Marca Modelo Color Año\n' + 
                'Ford Escort Negro 1993\n' +
                'Renault Clio Azul 2011\n';
    //let res=d3.csvParse(cadena);
    //console.log(res[1]);
    let res=d3.csvParseRows(cadena);
    console.log(res);
    console.log(res.length);  //número de filas
    console.log(res[0].length); //número de columnas
    console.log(res[0][0]);
    let str="hola que tal";
    console.log(str.split(' '));
    */

  

      
  }

  private initSvg(){
    d3.select('#container2')
      .style('margin-left',250 + 'px')
      .style('width', this.width + 'px')
      .style('height', this.height + 'px');
  }

  private drawGraph(){
    let lineGenerator= d3.line();
    let pathData= lineGenerator(this.data);
    let pathData2= lineGenerator(this.data2);

    var reference1= new Reference(5,100,'#2B4791');
    reference1.createRef();
    reference1.drawRef(['DI','DII','DIII','aVr','aVl','aVf'], this.width, this.height);

    var chart1= new Chart(45,100,'#2B4791');
    chart1.createGrid();
    chart1.drawPath(pathData);

    var reference2= new Reference(5,100,'#2B4791');
    reference2.createRef();
    reference2.drawRef(['v1','v2','v3','v4','v5','v6'], this.width, this.height);

    var grilla2= new Chart(45,100,'#2B4791');
    grilla2.createGrid();
    grilla2.drawPath(pathData2);
  }

  //background: #2B4791
  //grid: #459BE1
  //path: #A0CDF1
}
