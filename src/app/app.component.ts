
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productos=[
    {nombre :'producto 1',precio :15000},
    {nombre :'producto 2',precio :20000},
    {nombre :'producto 3',precio :45000},
    {nombre :'producto 4',precio :15000},
    {nombre :'producto 5',precio :15000},
    {nombre :'producto 6',precio :15000},
    {nombre :'producto 7',precio :15000},
  ];

}
