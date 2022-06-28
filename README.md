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
### Import Module
import { CheckboxModule } from 'src/app/modules';
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
