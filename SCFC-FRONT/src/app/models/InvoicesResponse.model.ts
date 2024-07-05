import { Difference } from './differences.model';
import { Invoice } from './invoice.model';
import { IWsReturnBasic } from './ws.return.model';

export interface InvoicesResponse extends IWsReturnBasic{
    differences : Difference[],
    allInvoices : Invoice[]
}