import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  // array of files: attribute left blank so that it is accepted
  // as an array and not to try to push it into anything
  files: DS.attr()
});
