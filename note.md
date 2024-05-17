## install

### install node and angular
##  download node pkg
##  npm install -g @angular/cli@12

### create angular app, name is my-app
ng new my-app

## String Interpolation
{{value}} on html page, define in component js

## ng serve error
'''
my-app % ng serve
⠋ Generating browser application bundles (phase: setup)...Compiling @angular/core : es2015 as esm2015
Compiling @angular/common : es2015 as esm2015
Compiling @angular/platform-browser : es2015 as esm2015
Compiling @angular/router : es2015 as esm2015
Compiling @angular/platform-browser-dynamic : es2015 as esm2015
⠹ Generating browser application bundles (phase: building)...node:internal/crypto/hash:69
this[kHandle] = new _Hash(algorithm, xofLen);
^

Error: error:0308010C:digital envelope routines::unsupported
at new Hash (node:internal/crypto/hash:69:19)
at Object.createHash (node:crypto:138:10)
at BulkUpdateDecorator.hashFactory (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/util/createHash.js:145:18)
at BulkUpdateDecorator.update (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/util/createHash.js:46:50)
at RawSource.updateHash (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/node_modules/webpack-sources/lib/RawSource.js:77:8)
at NormalModule._initBuildHash (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:880:17)
at handleParseResult (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:946:10)
at /Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:1040:4
at processResult (/Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:755:11)
at /Users/shanchu/IdeaProjects/training/angular_demo/my-app/node_modules/webpack/lib/NormalModule.js:819:5 {
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v## ## 1
'''

> solution： degrade node version
> nvm use 16



## Property Binding
<img [src]="imgSrc">

## two-way Binding
## Template Reference Variable

## Modules
ng generate module pokemon-base  
ng g c pokemon-base/pokemon-list --module=pokemon-base

## Components In-Depth &ngOnInit

### Components In-Depth & ngOnInit

#### Components In-Depth
In Angular, a component is one of the fundamental building blocks for constructing user interfaces. A component consists of a component class and an associated template, where the component class is responsible for controlling the behavior and state of the component, and the template defines the view structure and layout of the component. Components allow you to break down your application into reusable and maintainable parts, each with its own state and behavior.

#### ngOnInit Lifecycle Hook
`ngOnInit()` is a lifecycle hook method in Angular that is executed once when a component is initialized. After the component is created, Angular calls the `ngOnInit()` method, at which point the component's properties have been set but have not yet been rendered in the view. Therefore, `ngOnInit()` is typically used to perform initialization logic, such as fetching initial data or subscribing to data streams.

Example:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
    console.log('Component initialized');
  }

}
```

### List/Detail Page (@Input Explained)

#### @Input Decorator
`@Input()` is a decorator in Angular used to pass data from a parent component to a child component. By applying the `@Input()` decorator to an input property in the child component, the child component can receive data from the parent component and use it internally.

Example:
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() message: string;

  constructor() { }

}
```

```html
<!-- Parent Component Template -->
<app-child [message]="parentMessage"></app-child>
```

### List/Detail Page (@Output Explained)

#### @Output Decorator
`@Output()` is a decorator in Angular used to pass data from a child component to a parent component. By applying the `@Output()` decorator to an output property in the child component and emitting events using `EventEmitter`, the child component can pass data to the parent component.

Example:
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Message from child component');
  }

}
```

```html
<!-- Parent Component Template -->
<app-child (messageEvent)="receiveMessage($event)"></app-child>
```

### Services & Dependency Injection

#### Services and Dependency Injection
In Angular, a service is an injectable class used to provide specific functionality or shared logic to an application. Services are commonly used for tasks such as data fetching, authentication, logging, etc. Dependency Injection (DI) is a design pattern used to inject services into components, allowing components to access instances of services through the dependency injection system.

Example:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return 'Data from DataService';
  }

}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataService) { }

  getDataFromService() {
    return this.dataService.getData();
  }

}
```

### Observables

#### Observables
In Angular, Observables are a powerful tool for handling asynchronous data streams. Observables can emit multiple values in a sequence and can be used throughout an application for tasks such as handling HTTP requests, event handling, etc. Observables come with a rich set of operators for transforming, filtering, and combining data streams.

Example:
```typescript
import { Observable } from 'rxjs';

const observable = new Observable<number>((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Observable completed')
});
```

### Template Driven Forms (ngForm)

#### Template Driven Forms
Template-driven forms in Angular are a method of creating forms where the form's structure and behavior are defined in the template file using directives such as `ngForm`, `ngModel`, and `ngSubmit`. With template-driven forms, Angular automatically tracks the form and its input elements' state and validity.

Example:
```html
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="name" ngModel required>
  <button type="submit">Submit</button>
</form>
```

### Radio Buttons (Template Driven Forms)

#### Radio Buttons
Radio buttons in template-driven forms allow users to select only one option from a list of predefined options. Radio buttons are created using the `<input type="radio">` element and are typically grouped together using the `name` attribute.

Example:
```html
<input type="radio" name="gender" value="male" ngModel>
<input type="radio" name="gender" value="female" ngModel>
```

### Checkboxes (Template Driven Forms)

#### Checkboxes
Checkboxes in template-driven forms allow users to select one or more options from a list of predefined options. Checkboxes are created using the `<input type="checkbox">` element and can be bound to a model using the `ngModel` directive.

Example:
```html
<input type="checkbox" name="hobby" value="reading" ngModel>
<input type="checkbox" name="hobby" value="sports" ngModel>
<input type="checkbox" name="hobby" value="music" ngModel>
```

### Form Validation (Template Driven Forms)

#### Form Validation
Form validation in template-driven forms allows you to ensure that user input meets specific requirements before submitting the form. Angular provides built-in validation directives such as `required`, `minLength`, `maxLength`, etc., which can be applied to form controls using the `ngModel` directive.

Example:
```html
<input type="text" name="username" ngModel required>
<input type="email" name="email" ngModel email>
```

### Select & Option (Template Driven Forms)

#### Select & Option
The `<select>` element in template-driven forms is used to create a dropdown list of options, and the `<option>` element defines the available options within the dropdown. The `ngModel` directive can be used to bind the selected option to a model.

Example:
```html
<select name="city" ngModel>
  <option value="New York">New York</option>
  <option value="Los Angeles">Los Angeles</option>
  <option value="Chicago">Chicago</option>
</select>
```


### Submitting Forms (ngSubmit)

#### Submitting Forms with ngSubmit
In Angular, the `ngSubmit` directive is used to handle form submissions. It allows you to define a method in your component that will be called when the form is submitted. This method can then handle the form data, perform validation, and trigger any necessary actions.

Example:
```html
<form (ngSubmit)="onSubmit()">
  <!-- Form fields here -->
  <button type="submit">Submit</button>
</form>
```

### Route Parameters

#### Route Parameters
Route parameters in Angular are used to pass data from one component to another through the URL. They are specified in the route configuration and accessed in the component using the `ActivatedRoute` service.

Example:
```typescript
// Route configuration
{ path: 'details/:id', component: DetailsComponent }

// Component code
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    this.id = params['id'];
  });
}
```

### Angular Router

#### Angular Router
Angular Router is a powerful feature that allows you to manage navigation in your Angular applications. It provides a way to define routes, navigate between different views/components, and pass data between them.

Example:
```typescript
// Route configuration
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

// App module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
```

### NgContent

#### NgContent
NgContent is a directive in Angular that allows you to project content from a parent component into a child component's template. It is often used to create reusable components with customizable content.

Example:
```html
<!-- Parent component template -->
<app-card>
  <h2>Title</h2>
  <p>Content goes here...</p>
</app-card>

<!-- Child component template -->
<div class="card">
  <ng-content></ng-content>
</div>
```

### @ViewChild()

#### @ViewChild()
The `@ViewChild()` decorator in Angular is used to access child components, directives, or DOM elements in the parent component. It provides a way to interact with child elements programmatically.

Example:
```typescript
// Component code
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<div #childElement>Child content</div>'
})
export class ParentComponent {
  @ViewChild('childElement') childElement: ElementRef;

  ngAfterViewInit() {
    console.log(this.childElement.nativeElement.textContent);
  }
}
```


### ElementRef

#### ElementRef
`ElementRef` is a class in Angular that provides access to the underlying DOM element of a component or directive. It allows you to manipulate the element directly using native DOM methods and properties.

Example:
```typescript
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: '<div #myDiv>Hello, Angular!</div>'
})
export class SampleComponent {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
}
```

### Renderer2

#### Renderer2
`Renderer2` is an Angular service used for DOM manipulation. It provides a platform-independent way to modify the DOM, ensuring compatibility across different environments, such as server-side rendering and web workers.

Example:
```typescript
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: '<div #myDiv>Hello, Angular!</div>'
})
export class SampleComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello, Angular!');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.elementRef.nativeElement, div);
  }
}
```

### ngContainer vs. ngTemplate vs. ngContent

#### ngContainer vs. ngTemplate vs. ngContent
- `ngContainer`: A structural directive that serves as a placeholder for multiple elements without creating an additional DOM element. It is useful for applying structural directives like `ngIf` or `ngFor` to multiple elements.
- `ngTemplate`: A directive used to define reusable templates within the component's template. It allows you to define a template without rendering it immediately. It is often used with structural directives like `ngIf`, `ngFor`, or `ngSwitch`.
- `ngContent`: A directive used to project content from a parent component into a child component's template. It is often used to create reusable components with customizable content.

Example:
```html
<!-- ngContainer -->
<div *ngIf="condition">
  <ng-container *ngFor="let item of items">
    {{ item }}
  </ng-container>
</div>

<!-- ngTemplate -->
<ng-template #myTemplate>
  <p>Hello, Angular!</p>
</ng-template>
<div *ngIf="condition; then myTemplate"></div>

<!-- ngContent -->
<!-- Parent component template -->
<app-child>
  <h1>Title</h1>
  <p>Content</p>
</app-child>

<!-- Child component template -->
<div class="child">
  <ng-content></ng-content>
</div>
```

### Directives

#### Directives
Directives are a powerful feature in Angular that allow you to extend the behavior of HTML elements. There are three types of directives in Angular: component directives, attribute directives, and structural directives. They enable you to create reusable and modular components, add behavior to elements, and manipulate the DOM dynamically.

Example:
```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

```html
<!-- Usage -->
<p appHighlight>Highlight me!</p>
```


### configuring Angular metadata with decorators

In Angular, decorators are functions that are used to annotate and modify classes or class members like properties and methods. Decorators are prefixed with the @ symbol and are placed immediately before the class, property, or method they are decorating.

When you use decorators to configure Angular metadata, you are essentially providing additional information to Angular about how various parts of your application should be treated and processed during compilation.

Here's how decorators can be used to configure Angular metadata:

1. **@Component**: Used to define metadata for a component, such as its selector, template, styles, and more.

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-example',
     templateUrl: './example.component.html',
     styleUrls: ['./example.component.css']
   })
   export class ExampleComponent {
     // Component logic here
   }
   ```

2. **@Directive**: Similar to @Component but used for directives instead. Directives allow you to attach behavior to DOM elements.

   ```typescript
   import { Directive, ElementRef } from '@angular/core';

   @Directive({
     selector: '[appExampleDirective]'
   })
   export class ExampleDirective {
     constructor(private elementRef: ElementRef) {
       // Directive logic here
     }
   }
   ```

3. **@NgModule**: Used to define metadata for an Angular module, such as the list of components, directives, pipes, and services that belong to the module.

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule {
     // Module logic here
   }
   ```

4. **@Injectable**: Used to provide metadata for a service, indicating that it can be injected into other components or services.

   ```typescript
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'
   })
   export class ExampleService {
     // Service logic here
   }
   ```

By using decorators to configure Angular metadata, you are able to define how various parts of your application should behave and interact with each other, ultimately influencing how Angular compiles and processes your application during runtime.



