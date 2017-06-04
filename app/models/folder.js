import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  files: DS.hasMany(),
  /*
  If you just have a belongsTo, then it doesn't know which relationship it's working with
  We tell Ember that it's the 'inverse' of folders
   */
  parent: DS.belongsTo('folder', {inverse: 'folders'}),
  folders: DS.hasMany('folder', {inverse: 'parent'})
});
