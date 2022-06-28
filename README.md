# ngx-checkbox

## Installation

```sh
waw add ngx-checkbox
```

## Usage
```html
<wcheckbox label="Click me!" [(model)]="value.checkbox" (modelChange)="test()" ></wcheckbox>
```
```
ts 
import { CheckboxModule } from 'src/app/modules/checkbox/checkbox.module';
@NgModule({
	imports: [
		CheckboxModule
	]
})

```
## Arguments
```
label: string | Displayed text
model: boolean | Returns the state of checkbox
modelChange | Called when model changes
```
