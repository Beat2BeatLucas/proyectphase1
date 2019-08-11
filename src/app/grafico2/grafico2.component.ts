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
    this.initSvg();
    this.drawGraph();
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

    var reference1= new Reference(5,100,'azure');
    reference1.createRef();
    reference1.drawRef(['DI','DII','DIII','aVr','aVl','aVf'], this.width, this.height);

    var chart1= new Chart(45,100,'beige');
    chart1.createGrid();
    chart1.drawPath(pathData);

    var reference2= new Reference(5,100,'azure');
    reference2.createRef();
    reference2.drawRef(['v1','v2','v3','v4','v5','v6'], this.width, this.height);

    var grilla2= new Chart(45,100,'beige');
    grilla2.createGrid();
    grilla2.drawPath(pathData2);
  }

}
