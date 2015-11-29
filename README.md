# Blaze text field component for the Inspinia admin theme.
### Example:
```html
<!-- formTemplate.html -->
<template name="formTemplate">
  <form id="someForm">
    {{> inspiniaTextField
      type='text'
      field='name'
      label='First Name'
      instructions='First Name'
      value=(formValue 'name')
      onChange=fieldChanged
    }}
    {{> inspiniaTextField
      type='number'
      field='sales'
      label='Total Sales'
      prefix='$'
      min=0
      value=(formValue 'sales')
      onChange=fieldChanged
    }}
    <input type="submit">
  </form>
</template>
```
```js
// formTemplate.js
if (Meteor.isClient) {
  const formFields = new ReactiveDict('formFields');
  Template.formTemplate.helpers({
    formValue(fieldName) {
      return formFields.get(fieldName);
    },
    fieldChanged() {
      // return a function
      return function() {
        fieldName = this.$('input').data().fieldName;
        newValue = this.$('input').val();
        formFields.set(fieldName, newValue);
      };
    },
  });
  Template.formTemplate.events({
    'submit'(e, t) {
      e.preventDefault();
      // do something with the field values.
      const message =
      `
      Form values
      Name: ${formFields.get('name')}
      Sales: ${formFields.get('sales')}
      `;
      console.log(message);
    }
  });
}
```
See full example in the repository.
##### Arguments:
- *field*, String, Required.
  - The name of the field.
- *type*, String, Required unless *static* is true.
  - The type of the input field such as text, email, password or number.
- *value*, String, Optional.
  - The value of the input field.
- *onChange*, Function, Optional.
  - Function to run on change and keyup events.
- *label*, String, Required unless *skipLabel* is true.
  - The label for the input field.
- *skipLabel*, Boolean, Optional.
  - If true, the label will not be displayed. Additionally,  *label* will not be required.
- *required*, Boolean, Optional.
  - True if the input field should be required for the form.
- *disabled*, Boolean, Optional.
  - Sets the input field to disabled.
- *instructions*, String, Optional.
  - Text to display as a placeholder for the input field.
- *prefix*, String, Optional.
  - Input group addon to display directly before the input field.
- *postfix*, String, Optional.
  - Input group addon to display directly after the input field.
- *min*, Number, Optional.
  - Useful if *type* is number.
- *max*, Number, Optional.
  - Useful if *type* is number.
- *helpText*, String, Optional.
  - Helpful information to display below the text field.
- *static*, Boolean, Optional.
  - If true, sets the input to hidden. A *label* can still be set as well as an optional *content* argument to replace where the input would go.
- *content*, String, Optional.
  - If *static* is true, will replace the input with this text.
