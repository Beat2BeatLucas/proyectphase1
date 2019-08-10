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

    public drawRef(refs: string[], container_width: number, container_height:number){
        var w_aux= container_width * (this.ref_width/100);
        var h_aux= container_height * (this.ref_height/100);
        var num_elements= refs.length;
        var segment_height= h_aux/(num_elements + 1);
        var array_widths= [0, w_aux/3, w_aux/3, 2*w_aux/3,
                            2*w_aux/3, w_aux];
        var array_heights= [segment_height, segment_height, 0.5*segment_height,
                            0.5*segment_height, segment_height, segment_height];
        var points;
        
        console.log(w_aux);
        console.log(h_aux);
        console.log(num_elements);
        console.log(segment_height);
        console.log(array_widths);
        console.log(array_heights);
        for(var i=0; i<num_elements; i++){
            
            for(var k=0; k<array_widths.length; k++){
                if(i > 0){
                    array_heights[k] += segment_height;
                } 
            }

            points='';
            for(var j=0; j<array_widths.length; j++){
                points += array_widths[j] + ',' + array_heights[j] + ' ';
            }
            
            console.log(points);
            this.ref_svg.append('polyline')
                .attr('points',points)
                .attr('fill','none')
                .attr('stroke','black')
                .attr('stroke-width',1);
                
        }
    }
}