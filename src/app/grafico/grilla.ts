export class Grilla {
    private grid_height: number;
    private grid_width: number;
    private grid_svg: any;
    private background_color: string;

    constructor(width: number, height:number, svg: any, color: string){
        this.grid_width= width;
        this.grid_height= height;
        this.grid_svg= svg;
        this.background_color= color;
    }

    public createGrid(){
        this.initSVG();
        this.drawGrid();
    }

    private initSVG(){
        this.grid_svg.attr('width', this.grid_width + '%')
                     .attr('height', this.grid_height + '%')
                     .style('background-color',this.background_color)
                     .attr('g');
    }

    private drawGrid(){
        var defs= this.grid_svg.append('defs');
    
        var pattern1= defs.append('pattern')
                    .attr('id','smallGrid')
                    .attr('width',5)
                    .attr('height',5)
                    .attr('patternUnits','userSpaceOnUse');
            pattern1.append('path')
                    .attr('fill','none')
                    .attr('stroke','gray')
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
                    .attr('stroke','gray')
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
                    .attr('stroke','gray')
                    .attr('stroke-width',2.5)
                    .attr('d','M 125 0 L 0 0 0 125');

        this.grid_svg.append('rect')
                    .attr('x', 0)
                    .attr('y', 0)
                    .attr('width','100%')
                    .attr('height','100%')
                    .attr('fill','url(#grid)');
    }

    public drawPath(pathData: string){
        this.grid_svg.append('path')
            .attr('stroke','steelblue')
            .attr('fill','none')
            .attr('stroke-width',1)
            .attr('stroke-linejoin','round')
            .attr('d', pathData);
      }
    
}