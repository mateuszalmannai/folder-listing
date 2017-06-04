import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    startItemNaming(){
      this.set('isEditing', true)
    },
    save(){
      // display + button again
      this.set('isEditing', false);

      // make things easier to access
      let parent = this.get('parent');
      let itemType = this.get('itemType');

      let item = this.get('store').createRecord(itemType, {
        name: this.get('name')
      })
      if(itemType == 'file') {
        item.set('folder', parent);
      } else {
        item.set('parent', parent)
      }
      item.save();
      parent.save();
    }
  }
});
