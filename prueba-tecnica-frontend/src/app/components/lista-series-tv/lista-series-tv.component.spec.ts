import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeriesTvComponent } from './lista-series-tv.component';

describe('ListaSeriesTvComponent', () => {
  let component: ListaSeriesTvComponent;
  let fixture: ComponentFixture<ListaSeriesTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSeriesTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSeriesTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
