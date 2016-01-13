# Blaze text field component for the [Inspinia](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) admin theme.
**Note:** [Inspinia Styles](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) must be included separately. See below for [instructions](#how-to-include-styles) on how to include styles.
### Installation
```bash
meteor add fourquet:inspinia-text-field
```
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
See [full example in the repository](https://github.com/fourquet/meteor-package-inspinia-text-field/tree/master/example).
##### Arguments:
- *field*, String, Required.
  - The name of the field.
- *type*, String, Required unless *static* is `true`.
  - The type of the input field such as text, email, password or number.
- *value*, String, Optional.
  - The value of the input field.
- *onChange*, Function, Optional.
  - Function to run on change and keyup events.
- *label*, String, Required unless *skipLabel* is `true`.
  - The label for the input field.
- *skipLabel*, Boolean, Optional.
  - If `true`, the label will not be displayed. Additionally, *label* will not be required.
- *required*, Boolean, Optional.
  - `true` if the input field should be required for the form.
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
  - If `true`, sets the input to hidden. A *label* can still be set as well as an optional *content* argument to replace where the input would go.
- *content*, String, Optional.
  - If *static* is `true`, will replace the input with this text.
- *success*, Boolean, Optional
  - Displays message below textField but only if the *success* is `false` and *submitted* is `true` and *error* message exists.
- *submitted*, Boolean, Optional
  - If *success* is `true`, an error message may be displayed below the textField.
- *errorMessage*, String, Optional
  - An error message to be displayed if *success* is `false` and *submitted* is `true`.

#### How to include styles
* [Purchase](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) theme at [wrapbootstrap.com](https://wrapbootstrap.com).
* In the app, if the `packages` directory does not exists, create it in the app root: `mkdir packages && cd packages`.
* Create a new Meteor package: `meteor create --package fourquet:inspinia-styles`
* Add the styles to the new package directory like below:

![screen shot 2016-01-13 at 9 22 48 am](https://cloud.githubusercontent.com/assets/5255608/12302061/2acfac3a-b9d8-11e5-8223-2f039527679e.png)

* Edit `package.js` so the `Package.onUse` looks like:

![screen shot 2016-01-13 at 9 36 55 am](https://cloud.githubusercontent.com/assets/5255608/12302280/4c34505a-b9d9-11e5-9064-022900fc92fe.png)

* Add the package to your app: `meteor add fourquet:inspinia-styles`.

#### Version
0.0.2

#### License
MIT
