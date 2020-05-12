import { Battle } from './battle';
import Pokemon from "./mockPokemon.model";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LikeButtonComponent} from "../../like-button/like-button.component";

describe('Battle', () => {

  let component: Pokemon;
  let fixture: ComponentFixture<Pokemon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Pokemon]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(new Battle(new Pokemon('Salamèche', 39, 65, 52), new Pokemon('Bulbizarre', 45, 45, 49))).toBeTruthy();
  });
});
