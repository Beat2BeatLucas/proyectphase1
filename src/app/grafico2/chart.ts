import * as d3 from 'd3';

export class Chart {
    private chart_height: number;
    private chart_width: number;
    private chart_svg: any;
    private background_color: string;

    constructor(width: number, height:number, color: string){
        this.chart_width= width;
        this.chart_height= height;
        this.background_color= color;
        this.chart_svg= d3.select('#container2').append('svg');
    }

    public createGrid(){
        this.initSVG();
        this.drawGrid();
    }

    private initSVG(){
        this.chart_svg.attr('width', this.chart_width + '%')
                      .attr('height', this.chart_height + '%')
                      .style('background-color',this.background_color)
                      .attr('g');
    }

    private drawGrid(){
        var defs= this.chart_svg.append('defs');
        
        var pattern1= defs.append('pattern')
                    .attr('id','smallGrid')
                    .attr('width',5)
                    .attr('height',5)
                    .attr('patternUnits','userSpaceOnUse');
            pattern1.append('path')
                    .attr('fill','none')
                    .attr('stroke','#459BE1')
                    .attr('stroke-width',0.4)
                    .attr('d','M 5 0 L 0 0 0 5');
        
        
        var pattern2= defs.append('pattern')
                    .attr('id','mediumGrid')
                    .attr('width',25)
                    .attr('height',25)
                    .attr('patternUnits','userSpaceOnUse');
            pattern2.append('rect')
                    .attr('width',25)
                    .attr('height',25)
                    .attr('fill','url(#smallGrid)');
            pattern2.append('path')
                    .attr('fill','none')
                    .attr('stroke','#459BE1')
                    .attr('stroke-width',1)
                    .attr('d','M 25 0 L 0 0 0 25');
    
        var pattern3= defs.append('pattern')
                    .attr('id','grid')
                    .attr('width',125)
                    .attr('height',125)
                    .attr('patternUnits','userSpaceOnUse');
            pattern3.append('rect')
                    .attr('width',125)
                    .attr('height',125)
                    .attr('fill','url(#mediumGrid)');
            pattern3.append('path')
                    .attr('fill','none')
                    .attr('stroke','#459BE1')
                    .attr('stroke-width',2.5)
                    .attr('d','M 125 0 L 0 0 0 125');

        this.chart_svg.append('rect')
                    .attr('x', 0)
                    .attr('y', 0)
                    .attr('width','100%')
                    .attr('height','100%')
                    .attr('fill','url(#grid)');
    }

    public drawPath(pathData: string){
        this.chart_svg.append('path')
            .attr('stroke','#A0CDF1')
            .attr('fill','none')
            .attr('stroke-width',1)
            .attr('stroke-linejoin','round')
            .attr('d', pathData);
      }
    
}