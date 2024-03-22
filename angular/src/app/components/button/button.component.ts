import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  @Input() text!: string;
  @Input() color: string = '#E7FE58'; 
  @Input() icon :string ="";
}
