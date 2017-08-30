import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {FormElementComponent} from './formelement.component';
import {FormComponent} from './form.component';
import {WidgetChooserComponent} from './widgetchooser.component';
import {
  ArrayWidget,
  ButtonWidget,
  ObjectWidget,
  CheckboxWidget,
  FileWidget,
  IntegerWidget,
  TextAreaWidget,
  RadioWidget,
  RangeWidget,
  SelectWidget,
  StringWidget
} from './defaultwidgets';
import {
  DefaultWidget
} from './default.widget';

import {WidgetRegistry} from './widgetregistry';
import {DefaultWidgetRegistry} from './defaultwidgets';
import {SchemaValidatorFactory, ZSchemaValidatorFactory} from './schemavalidatorfactory';
import {FormElementComponentAction} from './formelement.action.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FormElementComponent,
    FormElementComponentAction,
    FormComponent,
    WidgetChooserComponent,
    DefaultWidget,
    ArrayWidget,
    ButtonWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
  ],
  entryComponents: [
    FormElementComponent,
    FormElementComponentAction,
    FormComponent,
    WidgetChooserComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget,
  ],
  exports: [
    FormComponent,
    FormElementComponent,
    FormElementComponentAction,
    WidgetChooserComponent,
    ArrayWidget,
    ObjectWidget,
    CheckboxWidget,
    FileWidget,
    IntegerWidget,
    TextAreaWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    StringWidget
  ]
})
export class SchemaFormModule {

  static forRoot({widgetRegistry, validatorFactory}: { widgetRegistry?: any, validatorFactory?: any } = {
    widgetRegistry: DefaultWidgetRegistry,
    validatorFactory: ZSchemaValidatorFactory
  }): ModuleWithProviders {

    return {
      ngModule: SchemaFormModule,
      providers: [
        {
          provide: WidgetRegistry,
          useClass: widgetRegistry ? widgetRegistry : DefaultWidgetRegistry
        },
        {
          provide: SchemaValidatorFactory,
          useClass: validatorFactory ? validatorFactory : ZSchemaValidatorFactory
        }
      ]
    };
  }
}
