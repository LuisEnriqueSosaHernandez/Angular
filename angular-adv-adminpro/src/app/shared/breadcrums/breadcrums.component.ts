import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {
  public titulo: string;
  public tituloSubs$: Subscription;
  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosDeRuta().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `Admin Pro - ${titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosDeRuta() {
    return this.router.events.pipe(
      filter(predicate => predicate instanceof ActivationEnd),
      filter((predicate: ActivationEnd) => predicate.snapshot.firstChild === null),
      map((predicate: ActivationEnd) => predicate.snapshot.data)
    );
  }
}
