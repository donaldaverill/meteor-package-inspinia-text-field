if (Meteor.isClient) {
  const formFields = new ReactiveDict('formFields');
  Template.formTemplate.helpers({
    formValue(fieldName) {
      return formFields.get(fieldName);
    },
    fieldChanged() {
      // must return a function
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
      const message =
      `
      Form values
      Name: ${formFields.get('name')}
      Sales: ${formFields.get('sales')}
      `;
      alert(message);
    }
  });
}
