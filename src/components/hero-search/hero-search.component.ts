import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import { Subject }            from 'rxjs/Subject';

import { HeroService }        from '../../services/hero.service';
import { Hero }               from '../../models/hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroService]
})

export class HeroSearchComponent implements OnInit {

    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private service: HeroService,
        private router: Router
    ) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.service.search(term) : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        this.router.navigate(['/detail', hero.id]);
    }

}
