import { DifferenceService } from './../../services/difference.service';
import { Component, OnInit } from '@angular/core';
import { Difference } from '../../models/differences.model';
import { Invoice } from '../../models/invoice.model';

interface DifferenceTableItemInfo<T> {
  options: T[],
  selectedOption: T
}

type DifferenceTableItem = {
  id: DifferenceTableItemInfo<number> | number,
  fecha: DifferenceTableItemInfo<string> | string,
  tipoComp: DifferenceTableItemInfo<string> | string,
  ptoVenta: DifferenceTableItemInfo<string> | string,
  numComp: DifferenceTableItemInfo<string> | string,
  despachoImport: DifferenceTableItemInfo<string> | string,
  codDocVendedor: DifferenceTableItemInfo<string> | string,
  docVendedor: DifferenceTableItemInfo<string> | string,
  nombreVendedor: DifferenceTableItemInfo<string> | string,
  importeTotal: DifferenceTableItemInfo<number> | number,
  totalNoGrav: DifferenceTableItemInfo<number> | number,
  totalExento: DifferenceTableItemInfo<number> | number,
  percValorAgregado: DifferenceTableItemInfo<number> | number,
  percOtrosImpNac: DifferenceTableItemInfo<number> | number,
  percIIBB: DifferenceTableItemInfo<number> | number,
  percMuni: DifferenceTableItemInfo<number> | number,
  totalImpInternos: DifferenceTableItemInfo<number> | number,
  codMoneda: DifferenceTableItemInfo<string> | string,
  tipoCambio: DifferenceTableItemInfo<number> | number,
  cantAlicuotas: DifferenceTableItemInfo<string> | string,
  codOperacion: DifferenceTableItemInfo<string> | string,
  creditoFiscComputable: DifferenceTableItemInfo<number> | number,
  otrosTributos: DifferenceTableItemInfo<number> | number,
  sourceFile: DifferenceTableItemInfo<string> | string,
  cuitEmisor: DifferenceTableItemInfo<string> | string,
  denomEmisor: DifferenceTableItemInfo<string> | string,
  ivacomision: DifferenceTableItemInfo<number> | number,
  errorDescription: DifferenceTableItemInfo<string> | string,
  hasError: DifferenceTableItemInfo<boolean> | boolean,
  selected: boolean
}



@Component({
  selector: 'app-differences-table',
  templateUrl: './differences-table.component.html',
  styleUrls: ['./differences-table.component.css']
})
export class DifferenceTableComponent implements OnInit {
  tableArray: DifferenceTableItem[] = [];

  constructor(private differenceService: DifferenceService) { }

  isObject(value: any): value is DifferenceTableItemInfo<any> {
    return typeof value === 'object' && value !== null && 'options' in value && 'selectedOption' in value;
  }

  onSelectChange(item: DifferenceTableItem, field: keyof DifferenceTableItem, event: any) {
    if (this.isObject(item[field])) {
      (item[field] as DifferenceTableItemInfo<any>).selectedOption = event.value;
    }
  }

  getProperty = <T>(attrA: T, attrB: T): T | DifferenceTableItemInfo<T> =>
    attrA === attrB ? attrA : (attrA === null) ? attrB : (attrB === null) ? attrA : {
      options: [attrA, attrB],
      selectedOption: attrA
    };

  // ngOnInit(): void {
  //   this.differenceService.currentDifferences.subscribe(differences => {
  //     this.tableArray = [];

  //     differences.forEach(invoice => {
  //       const invoiceA = invoice.invoicePurchaseA;
  //       const invoiceB = invoice.invoicePurchaseB;

  //       if (!invoiceA || !invoiceB) {
  //         const validInvoice : Invoice = invoiceA ? invoiceA : invoiceB

  //         this.tableArray.push(validInvoice)

  //       } else {

  //         const difference: DifferenceTableItem = {
  //           id: this.getProperty<number>(invoiceA.id, invoiceB.id),
  //           fecha: this.getProperty<string>(invoiceA.fecha, invoiceB.fecha),
  //           tipoComp: this.getProperty<string>(invoiceA.tipoComp, invoiceB.tipoComp),
  //           ptoVenta: this.getProperty<string>(invoiceA.ptoVenta, invoiceB.ptoVenta),
  //           numComp: this.getProperty<string>(invoiceA.numComp, invoiceB.numComp),
  //           despachoImport: this.getProperty<string>(invoiceA.despachoImport, invoiceB.despachoImport),
  //           codDocVendedor: this.getProperty<string>(invoiceA.codDocVendedor, invoiceB.codDocVendedor),
  //           docVendedor: this.getProperty<string>(invoiceA.docVendedor, invoiceB.docVendedor),
  //           nombreVendedor: this.getProperty<string>(invoiceA.nombreVendedor, invoiceB.nombreVendedor),
  //           importeTotal: this.getProperty<number>(invoiceA.importeTotal, invoiceB.importeTotal),
  //           totalNoGrav: this.getProperty<number>(invoiceA.totalNoGrav, invoiceB.totalNoGrav),
  //           totalExento: this.getProperty<number>(invoiceA.totalExento, invoiceB.totalExento),
  //           percValorAgregado: this.getProperty<number>(invoiceA.percValorAgregado, invoiceB.percValorAgregado),
  //           percOtrosImpNac: this.getProperty<number>(invoiceA.percOtrosImpNac, invoiceB.percOtrosImpNac),
  //           percIIBB: this.getProperty<number>(invoiceA.percIIBB, invoiceB.percIIBB),
  //           percMuni: this.getProperty<number>(invoiceA.percMuni, invoiceB.percMuni),
  //           totalImpInternos: this.getProperty<number>(invoiceA.totalImpInternos, invoiceB.totalImpInternos),
  //           codMoneda: this.getProperty<string>(invoiceA.codMoneda, invoiceB.codMoneda),
  //           tipoCambio: this.getProperty<number>(invoiceA.tipoCambio, invoiceB.tipoCambio),
  //           cantAlicuotas: this.getProperty<string>(invoiceA.cantAlicuotas, invoiceB.cantAlicuotas),
  //           codOperacion: this.getProperty<string>(invoiceA.codOperacion, invoiceB.codOperacion),
  //           creditoFiscComputable: this.getProperty<number>(invoiceA.creditoFiscComputable, invoiceB.creditoFiscComputable),
  //           otrosTributos: this.getProperty<number>(invoiceA.otrosTributos, invoiceB.otrosTributos),
  //           sourceFile: this.getProperty<string>(invoiceA.sourceFile, invoiceB.sourceFile),
  //           cuitEmisor: this.getProperty<string>(invoiceA.cuitEmisor, invoiceB.cuitEmisor),
  //           denomEmisor: this.getProperty<string>(invoiceA.denomEmisor, invoiceB.denomEmisor),
  //           ivacomision: this.getProperty<number>(invoiceA.ivacomision, invoiceB.ivacomision),
  //           errorDescription: this.getProperty<string>(invoiceA.errorDescription, invoiceB.errorDescription),
  //           hasError: this.getProperty<boolean>(invoiceA.hasError, invoiceB.hasError)
  //         };

  //         this.tableArray.push(difference)
  //       }


  //     });
  //   });
  // }

  ngOnInit(): void {
    this.differenceService.currentDifferences.subscribe(differences => {
      this.tableArray = [];
  
      differences.forEach(invoice => {
        const invoiceA = invoice.invoicePurchaseA;
        const invoiceB = invoice.invoicePurchaseB;
  
        if (!invoiceA || !invoiceB) {
          const validInvoice: Invoice = invoiceA ? invoiceA : invoiceB;
          this.tableArray.push({...validInvoice, selected: false});
        } else {
          const difference: DifferenceTableItem = {
            id: this.getProperty<number>(invoiceA.id, invoiceB.id),
            fecha: this.getProperty<string>(invoiceA.fecha, invoiceB.fecha),
            tipoComp: this.getProperty<string>(invoiceA.tipoComp, invoiceB.tipoComp),
            ptoVenta: this.getProperty<string>(invoiceA.ptoVenta, invoiceB.ptoVenta),
            numComp: this.getProperty<string>(invoiceA.numComp, invoiceB.numComp),
            despachoImport: this.getProperty<string>(invoiceA.despachoImport, invoiceB.despachoImport),
            codDocVendedor: this.getProperty<string>(invoiceA.codDocVendedor, invoiceB.codDocVendedor),
            docVendedor: this.getProperty<string>(invoiceA.docVendedor, invoiceB.docVendedor),
            nombreVendedor: this.getProperty<string>(invoiceA.nombreVendedor, invoiceB.nombreVendedor),
            importeTotal: this.getProperty<number>(invoiceA.importeTotal, invoiceB.importeTotal),
            totalNoGrav: this.getProperty<number>(invoiceA.totalNoGrav, invoiceB.totalNoGrav),
            totalExento: this.getProperty<number>(invoiceA.totalExento, invoiceB.totalExento),
            percValorAgregado: this.getProperty<number>(invoiceA.percValorAgregado, invoiceB.percValorAgregado),
            percOtrosImpNac: this.getProperty<number>(invoiceA.percOtrosImpNac, invoiceB.percOtrosImpNac),
            percIIBB: this.getProperty<number>(invoiceA.percIIBB, invoiceB.percIIBB),
            percMuni: this.getProperty<number>(invoiceA.percMuni, invoiceB.percMuni),
            totalImpInternos: this.getProperty<number>(invoiceA.totalImpInternos, invoiceB.totalImpInternos),
            codMoneda: this.getProperty<string>(invoiceA.codMoneda, invoiceB.codMoneda),
            tipoCambio: this.getProperty<number>(invoiceA.tipoCambio, invoiceB.tipoCambio),
            cantAlicuotas: this.getProperty<string>(invoiceA.cantAlicuotas, invoiceB.cantAlicuotas),
            codOperacion: this.getProperty<string>(invoiceA.codOperacion, invoiceB.codOperacion),
            creditoFiscComputable: this.getProperty<number>(invoiceA.creditoFiscComputable, invoiceB.creditoFiscComputable),
            otrosTributos: this.getProperty<number>(invoiceA.otrosTributos, invoiceB.otrosTributos),
            sourceFile: this.getProperty<string>(invoiceA.sourceFile, invoiceB.sourceFile),
            cuitEmisor: this.getProperty<string>(invoiceA.cuitEmisor, invoiceB.cuitEmisor),
            denomEmisor: this.getProperty<string>(invoiceA.denomEmisor, invoiceB.denomEmisor),
            ivacomision: this.getProperty<number>(invoiceA.ivacomision, invoiceB.ivacomision),
            errorDescription: this.getProperty<string>(invoiceA.errorDescription, invoiceB.errorDescription),
            hasError: this.getProperty<boolean>(invoiceA.hasError, invoiceB.hasError),
            selected: false
          };
  
          this.tableArray.push(difference);
        }
      });
    });
  }

  // saveItems() {
  //   const storedInvoices = localStorage.getItem('allInvoices');
  //   let allInvoices: Invoice[] = storedInvoices ? JSON.parse(storedInvoices) : [];
    
  //   const convertedTableArray: Invoice[] = this.tableArray.map(item => {
  //       let convertedItem: Partial<Invoice> = {};
  //       (Object.keys(item) as Array<keyof DifferenceTableItem>).forEach(key => {
  //           if (this.isObject(item[key])) {
  //               (convertedItem as any)[key] = (item[key] as DifferenceTableItemInfo<any>).selectedOption;
  //           } else {
  //               (convertedItem as any)[key] = item[key];
  //           }
  //       });
  //       return convertedItem as Invoice;
  //   });
    
  //   let updatedCount = 0;
  //   let addedCount = 0;

  //   convertedTableArray.forEach(newItem => {
  //       const existingIndex = allInvoices.findIndex(existingItem => 
  //           existingItem.fecha === newItem.fecha &&
  //           existingItem.ptoVenta === newItem.ptoVenta &&
  //           existingItem.numComp === newItem.numComp &&
  //           existingItem.docVendedor === newItem.docVendedor
  //       );

  //       if (existingIndex !== -1) {
  //           allInvoices[existingIndex] = { ...allInvoices[existingIndex], ...newItem };
  //           updatedCount++;
  //       } else {
  //           allInvoices.push(newItem);
  //           addedCount++;
  //       }
  //   });
    
  //   localStorage.setItem('allInvoices', JSON.stringify(allInvoices));

  //   console.log(`Se actualizaron ${updatedCount} elementos y se agregaron ${addedCount} nuevos elementos.`);
  // }
  saveItems() {
    const storedInvoices = localStorage.getItem('allInvoices');
    let allInvoices: Invoice[] = storedInvoices ? JSON.parse(storedInvoices) : [];
    
    const selectedItems = this.tableArray.filter(item => item.selected);
    
    const convertedTableArray: Invoice[] = selectedItems.map(item => {
      let convertedItem: Partial<Invoice> = {};
      (Object.keys(item) as Array<keyof DifferenceTableItem>).forEach(key => {
        if (this.isObject(item[key])) {
          (convertedItem as any)[key] = (item[key] as DifferenceTableItemInfo<any>).selectedOption;
        } else {
          (convertedItem as any)[key] = item[key];
        }
      });
      return convertedItem as Invoice;
    });
    
    let updatedCount = 0;
    let addedCount = 0;
  
    convertedTableArray.forEach(newItem => {
      const existingIndex = allInvoices.findIndex(existingItem => 
        existingItem.fecha === newItem.fecha &&
        existingItem.ptoVenta === newItem.ptoVenta &&
        existingItem.numComp === newItem.numComp &&
        existingItem.docVendedor === newItem.docVendedor
      );
  
      if (existingIndex !== -1) {
        allInvoices[existingIndex] = { ...allInvoices[existingIndex], ...newItem };
        updatedCount++;
      } else {
        allInvoices.push(newItem);
        addedCount++;
      }
    });
    
    localStorage.setItem('allInvoices', JSON.stringify(allInvoices));
    console.log(allInvoices)
    console.log(`Se actualizaron ${updatedCount} elementos y se agregaron ${addedCount} nuevos elementos.`);
  }
}
