export class Referencia {
    private ref_width: number;
    private ref_height: number;
    private ref_svg: any;
    private background_color: string;

    constructor(width: number, height: number, svg: any ,color: string){
        this.ref_width= width;
        this.ref_height= height;
        this.ref_svg= svg;
        this.background_color= color;
    }

    public createRef(){
        this.initSVG();
    }

    private initSVG(){
        this.ref_svg.attr('width', this.ref_width + '%')
                     .attr('height', this.ref_height + '%')
                     .style('background-color',this.background_color)
                     .attr('g');
    }

    public drawRef(refs: string[]){
        var num_elements= refs.length;
        var segment_height= this.ref_height/(num_elements + 1);
        var array_widths= [0, this.ref_width/3, this.ref_width/3, 2*this.ref_width/3,
                            2*this.ref_width/3, this.ref_width];
        var array_heights= [segment_height, segment_height, 0.25*segment_height,
                            0.25*segment_height, segment_height, segment_height];
        var points;

        var step= 0;
        for(var i=0; i<=num_elements; i++){
            
            points='';
            for(var j=0; j<=array_widths.length; j++){
                points += array_widths[j+step] + ',' + array_heights[j+step] + ' ';
            }
            
            this.ref_svg.append('polyline')
                .attr('points',points)
                .attr('fill','none')
                .attr('stroke','black')
                .attr('stroke-width',1);
                
            step += segment_height;
        }
    }
}