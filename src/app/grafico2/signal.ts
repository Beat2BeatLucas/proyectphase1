import * as d3 from 'd3';

export class Signal {
    private rows: number;
    private columns: number;
    private d1_signal: any[];
    private d2_signal: any[];
    private d3_signal: any[];
    private avr_signal: any[];
    private avl_signal: any[];
    private avf_signal: any[];
    private v1_signal: any[];
    private v2_signal: any[];
    private v3_signal: any[];
    private v4_signal: any[];
    private v5_signal: any[];
    private v6_signal: any[];

    constructor(){}

    public set_derivations(data: string){
        /*Recibe como parametro un string que almacena la información 
        del fichero de texto y setea los atributos de clase.*/
        let res=d3.csvParseRows(data);
        this.rows= res.length;          //número de filas
        this.columns= res[0].length;    //número de columnas
        let time=[];
        let DI=[];
        let DII=[];
        let DIII=[];
        let aVr=[];
        let aVl=[];
        let aVf=[];
        let v1=[];
        let v2=[];
        let v3=[];
        let v4=[];
        let v5=[];
        let v6=[];

        for(let i=0; i<this.rows; i++){
            time[i]=parseFloat(res[i][0]);
            DI[i]=parseFloat(res[i][1]);
            DII[i]=parseFloat(res[i][2]);
            DIII[i]=parseFloat(res[i][3]);
            aVr[i]=parseFloat(res[i][4]);
            aVl[i]=parseFloat(res[i][5]);
            aVf[i]=parseFloat(res[i][6]);
            v1[i]=parseFloat(res[i][7]);
            v2[i]=parseFloat(res[i][8]);
            v3[i]=parseFloat(res[i][9]);
            v4[i]=parseFloat(res[i][10]);
            v5[i]=parseFloat(res[i][11]);
            v6[i]=parseFloat(res[i][12]);
        }

        //Se declara cada señal (atributo de clase) como una matriz de n filas x 2 columnas,
        //es decir, cada fila corresponderá a una coordenada a graficar (tiempo,amplitud).
        this.d1_signal=new Array(this.rows);
        this.d2_signal=new Array(this.rows);
        this.d3_signal=new Array(this.rows);
        this.avr_signal=new Array(this.rows);
        this.avl_signal=new Array(this.rows);
        this.avf_signal=new Array(this.rows);
        this.v1_signal=new Array(this.rows);
        this.v2_signal=new Array(this.rows);
        this.v3_signal=new Array(this.rows);
        this.v4_signal=new Array(this.rows);
        this.v5_signal=new Array(this.rows);
        this.v6_signal=new Array(this.rows);

        for(let i=0; i<this.rows; i++){
           this.d1_signal[i]=new Array(2);
           this.d2_signal[i]=new Array(2);
           this.d3_signal[i]=new Array(2);
           this.avr_signal[i]=new Array(2);
           this.avl_signal[i]=new Array(2);
           this.avf_signal[i]=new Array(2);
           this.v1_signal[i]=new Array(2);
           this.v2_signal[i]=new Array(2);
           this.v3_signal[i]=new Array(2);
           this.v4_signal[i]=new Array(2);
           this.v5_signal[i]=new Array(2);
           this.v6_signal[i]=new Array(2);
        }

        //Asignar los valores correspondientes a cada posición de las matrices
        for(let i=0; i<this.rows; i++){
           this.d1_signal[i][0]=time[i];
           this.d1_signal[i][1]=DI[i];
           this.d2_signal[i][0]=time[i];
           this.d2_signal[i][1]=DII[i];
           this.d3_signal[i][0]=time[i];
           this.d3_signal[i][1]=DIII[i];
           this.avr_signal[i][0]=time[i];
           this.avr_signal[i][1]=aVr[i];
           this.avl_signal[i][0]=time[i];
           this.avl_signal[i][1]=aVl[i];
           this.avf_signal[i][0]=time[i];
           this.avf_signal[i][1]=aVf[i];
           this.v1_signal[i][0]=time[i];
           this.v1_signal[i][1]=v1[i];
           this.v2_signal[i][0]=time[i];
           this.v2_signal[i][1]=v2[i];
           this.v3_signal[i][0]=time[i];
           this.v3_signal[i][1]=v3[i];
           this.v4_signal[i][0]=time[i];
           this.v4_signal[i][1]=v4[i];
           this.v5_signal[i][0]=time[i];
           this.v5_signal[i][1]=v5[i];
           this.v6_signal[i][0]=time[i];
           this.v6_signal[i][1]=v6[i];
        }

        console.log(this.d1_signal);
        
    }

    public get_derivation(){ 
        //Recibe como parámetros:
        //   * Señal a recuperar
        //   * Escalamiento en amplitud
        //   * Escalamiento en tiempo
        //   * Devuelve la señal transformada o no

        /** Prueba graficación señal*/
        let copia_d2=this.d2_signal.slice();
        
        for(let i=0; i<copia_d2.length; i++){
            copia_d2[i][0]= 125*copia_d2[i][0];
            copia_d2[i][1]= -50*copia_d2[i][1] +250;
        }

        return copia_d2;
        /************************** */
    }

    private amplitude_scale(){
        //Se encarga de escalar la señal en amplitud para graficarla
        //y puede devolverla escalada o no.
        //Recibe como parámetro la señal y el factor de escala en amplitud.
    }

    private temporal_scale(){
        //Se encarga de escalar los puntos en el tiempo.
        //Recibe como parámetro la señal y el factor de escala temporal.
    }


}