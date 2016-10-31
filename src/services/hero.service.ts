import { Injectable }               from '@angular/core';
import { Headers, Http, Response }  from '@angular/http';
import { Observable }    from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero';

@Injectable()
export class HeroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'app/heroes';

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    delete(id: number): Promise<void> {
        const url = `${this.serviceUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.serviceUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.serviceUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`${this.serviceUrl}/?name=${term}`)
            .map((r: Response) => r.json().data as Hero[]);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
