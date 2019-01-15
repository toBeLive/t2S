import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GlobalsVariable {
  public globalInvisible: boolean;
  public globalTableUser: boolean;
  public globalTableCustomers: boolean;
  public globalTableClient: boolean;
  public globalInputClient: boolean;
  public globalAccessToken = '';
  public globalProfilName = 'Войти';
  public globalCurrentEmployeeID: string;
}
