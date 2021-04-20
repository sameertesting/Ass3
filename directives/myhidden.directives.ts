import {Directive, Renderer2,ElementRef,Input} from '@angular/core';

@Directive({
    selector:'[myHidden]'
})
export class MyHiddenDirectives{
    @Input()
    myHidden:boolean=true;
constructor(private el: ElementRef,private renderer:Renderer2)
{
    renderer.setStyle(el.nativeElement,'display','none');
}
ngOnChanges(){
if(this.myHidden){
    this.renderer.setStyle(this.el.nativeElement,'backgroung-color','pink');
}
else{
    this.renderer.setStyle(this.el.nativeElement,'backgroung-color','pink');
}
}
}