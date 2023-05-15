import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //Primeiro para criação de 
  beforeEach(async () => 
      TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'exemplo-semana'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('exemplo-semana');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('exemplo-semana app is running!');
  });

  it(`should have value 'Resources on element <h2> `, () => {

    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement.querySelectorAll('h2');
    expect(compiled[0].textContent).toBe('Resources');

  });

  it(`encontrar o valor 'Next Steps' no elementoo <h2>`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const compiled = fixture.debugElement.nativeElement.querySelectorAll('h2');
    console.log(compiled);
    expect(compiled[1]?.textContent).toBe('Next Steps')
  })

  it(`1. encontrar o valor 'Angular Logo'  
      2. e largura de 40 em uma imagem`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement.querySelector('img')

    expect(compiled.alt).toBe('Angular Logo')
    expect(compiled.width).toEqual(40)
  })

  it(`Encontrar condicionais dentro da class 'terminal' no elemento <pre> `, () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement

    expect(compiled.querySelector('.terminal pre')?.textContent).toContain('ng generate component xyz')
  })

});
