export class Signal {
    private d1_signal: number[];
    private d2_signal: number[];
    private d3_signal: number[];
    private avr_signal: number[];
    private avl_signal: number[];
    private avf_signal: number[];
    private v1: number[];
    private v2: number[];
    private v3: number[];
    private v4: number[];
    private v5: number[];
    private v6: number[];

    constructor(){}

    public set_derivations(){
        //Recibe como paremetro el fichero txt y
        //setea los atributos de clase.
    }

    public get_derivation(){ 
        //Recibe como parámetros:
        //   * Senal a recuperar
        //   * Escalamiento en amplitud
        //   * Escalamiento en tiempo
        //   * Devuelve la señal transformada o no
    }

    private amplitude_scale(){
        //Se encarga de escalar la señal en amplitud para graficarla
        //y puede devolverla escalada o no.
        //Recibe como parámetro la señal y el factor de escala
    }

    private temporal_scale(){
        //Se encarga de esacalar los puntos en el tiempo.
        //Recibe como parámetro la señal y el factor de escala
    }


}