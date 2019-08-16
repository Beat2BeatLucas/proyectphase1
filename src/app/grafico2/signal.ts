export class Signal {
    private d1_signal: number[];
    private d2_signal: number[];
    private d3_signal: number[];
    private avr_signal: number[];
    private avl_signal: number[];
    private avf_signal: number[];
    private v1_signal: number[];
    private v2_signal: number[];
    private v3_signal: number[];
    private v4_signal: number[];
    private v5_signal: number[];
    private v6_signal: number[];

    constructor(){}

    public set_derivations(data: string){
        //Recibe como paremetro un string que almacena la
        //información del fichero de texto.
        //setea los atributos de clase.
    }

    public get_derivation(){ 
        //Recibe como parámetros:
        //   * Señal a recuperar
        //   * Escalamiento en amplitud
        //   * Escalamiento en tiempo
        //   * Devuelve la señal transformada o no
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