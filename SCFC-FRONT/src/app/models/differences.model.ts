import { Invoice } from './invoice.model';
import { IWsReturnBasic } from './ws.return.model';

export interface Difference extends IWsReturnBasic{
  invoicePurchaseA : Invoice,
  invoicePurchaseB : Invoice,
}
