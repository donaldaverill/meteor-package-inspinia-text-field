Template.inspiniaTextField.helpers({
  skipLabel() {
    return this.skipLabel || false;
  },
  disabled() {
    const instance = Template.instance();
    if (instance.loading && instance.loading.get()) {
      return 'disabled';
    }
  },
});

Template.inspiniaTextField.events({
  'change, keyup'(event, template) {
    if (template.data.onChange) {
      template.data.onChange.call(template);
    }
  },
});
