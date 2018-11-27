import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalsVariable {
  public globalInvisible: boolean;
  public globalTableUser: boolean;
  public globalAccessToken: string = '';
}
