// Importing required services for directives.
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector : "[hoverOverElement]"
})
export class HoverOverComponent {
    
    constructor(private elem: ElementRef) {

    }

    // Hostlistener for mouseenter event.
    @HostListener('mouseenter', ['$event'])
    OnMouseEnter(event: any) {
        const row = event.target.innerText.length;
        if(row <= 2) {
          this.colorChange('blue'); // Make it blue, for rating 1-2.
        }
        else if(row >=3 && row <= 4) {
          this.colorChange('red'); // Make it red, for rating 3-4.
        }
        else {
          this.colorChange('green'); // Make it green, for rating 5.
        }
    }
    
    //HostListener for mouseleave event.
    @HostListener('mouseleave')
    OnMouseLeave() {
      this.colorChange(null); // Make it as before.
    }

    private colorChange(color:string) {
      this.elem.nativeElement.style.color = color; // Change color of text
    }
}