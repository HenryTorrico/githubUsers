import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

class CacheItem<T> {
  url: string;
  timestampCached: number;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class CachedService {
  cache: CacheItem<any>[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(url: string, cacheTime?: number, forceRefresh: boolean = false)
  : Observable<T> {
    let cachedItem: CacheItem<T> = this.getCachedItem<T>(url);

    if (cachedItem != undefined && !forceRefresh) {
      let expireDate = cachedItem.timestampCached + cacheTime;
      if (Date.now() < expireDate) {
        return of(cachedItem.data);
      }
    }
    return this.http.get<T>(url).pipe(
      map(data => {
        if (cacheTime) {
          if (cachedItem == undefined) {
            cachedItem = new CacheItem();
            cachedItem.url = url;
            this.cache.push(cachedItem);
          }
          cachedItem.data = data;
          cachedItem.timestampCached = Date.now();
        }
        return data;
      })
    );
  }

  private getCachedItem<T>(url: string): CacheItem<T> {
    return this.cache.find(item => item.url == url);
  }
}