import Ember from 'ember';

export default Ember.Controller.extend({
  // We're filtering the model by the parent
  // parent is a promise, so we have to see if there's content in the parent
  // The root folders are the ones that don't have a parent, so their content will be null
  // They're the ones we're displaying at the top
  rootFolders: Ember.computed.filterBy('model', 'parent.content', null)
});
