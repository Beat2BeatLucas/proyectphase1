import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {Grilla} from './grilla';
import { Referencia } from './referencia';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})

export class GraficoComponent implements OnInit {

  private width: number;
  private height: number;
  private svg: any;
  private svg2: any;
  private svgRef1: any;
  private svgRef2: any;

  data: any[]=[[0, 80],[30, 100],[50, 30],[100, 50],[200, 40],[300, 80],[350,120],[400,50]];
  data2: any[]=[[0, 180],[30, 200],[50, 130],[100, 150],[200, 140],[300, 180],[350,220],[400,150]];

  constructor() { 
    this.width= 1002;
    this.height= 502;
  }

  ngOnInit() {
    this.initSvg();
  }

  private initSvg(){
    d3.select('#container')
      .style('margin-left',250 + 'px')
      .style('width', this.width + 'px')
      .style('height', this.height + 'px');

    this.svgRef1= d3.select('#container')
        .append('svg');

    this.svg= d3.select('#container')
        .append('svg');

    this.svgRef2= d3.select('#container')
        .append('svg');

    this.svg2= d3.select('#container')
        .append('svg');
    
    
    let lineGenerator= d3.line();
    let pathData= lineGenerator(this.data);
    let pathData2= lineGenerator(this.data2);

    var referencia1= new Referencia(5,100,this.svgRef1,'azure');
    referencia1.createRef();
    referencia1.drawRef(['DI','DII','DIII','aVr','aVl','aVf'], this.width, this.height);

    var grilla1= new Grilla(45,100,this.svg,'beige');
    grilla1.createGrid();
    grilla1.drawPath(pathData);

    var referencia2= new Referencia(5,100,this.svgRef2,'mistyrose');
    referencia2.createRef();
    referencia2.drawRef(['v1','v2','v3','v4','v5','v6'], this.width, this.height);

    var grilla2= new Grilla(45,100,this.svg2,'white');
    grilla2.createGrid();
    grilla2.drawPath(pathData2);

  }

}
