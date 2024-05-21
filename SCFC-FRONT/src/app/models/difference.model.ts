import { IWsReturnBasic } from './ws.return.model';

// export interface Differences extends IWsReturnBasic {
//   data: string;
// }

export interface Difference extends IWsReturnBasic{
  cae: number;
  date: string;
  sourceFile: string;
  differences: Record<string, any[]>;
}
