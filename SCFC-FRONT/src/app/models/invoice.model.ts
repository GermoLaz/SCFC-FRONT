import { IWsReturnBasic } from './ws.return.model';

// export interface Differences extends IWsReturnBasic {
//   data: string;
// }

export interface Invoice extends IWsReturnBasic{
    
    id: number,
    fecha: string,
    tipoComp: string,
    ptoVenta: string,
    numComp: string,
    despachoImport: string,
    codDocVendedor: string,
    docVendedor: string,
    nombreVendedor: string,
    importeTotal: number,
    totalNoGrav: number,
    totalExento: number,
    percValorAgregado: number,
    percOtrosImpNac: number,
    percIIBB: number,
    percMuni: number,
    totalImpInternos: number,
    codMoneda: string,
    tipoCambio: number,
    cantAlicuotas: string,
    codOperacion: string,
    creditoFiscComputable: number,
    otrosTributos: number,
    sourceFile: string,
    cuitEmisor: string,
    denomEmisor: string,
    ivacomision: number,
    errorDescription: string,
    hasError: boolean
}
