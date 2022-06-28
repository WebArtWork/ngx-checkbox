import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wcheckbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent{
	@Input() model;
	@Input() label;
	@Output() modelChange = new EventEmitter()
	constructor() {}
}
