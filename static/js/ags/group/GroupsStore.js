
Ext.define('ags.group.GroupsStore', {
	extend: 'Ext.data.Store',
	requires: [
       //'Ags.model.Abbrev'
    ],
	constructor: function(){
		Ext.apply(this, {
			model: 'ags.model.Group',
			storeId: "groups",
			sssorters: [ {
				property: 'dated',
				direction: 'DESC'
			}],
			deadsortInfo: {
				property: 'code',
				direction: 'DESC'
			},
			//groupField: "group",
			pageSize: 1000,
			autoLoad: true,
			proxy: {
				type: 'ajax',
				url: "/ajax/ags4/groups",
				reader: {
					type: 'json',
					root: "groups",
					idProperty: 'group_code',
					totalProperty: 'groups_count'
				}
			}
		});
		this.callParent();

	}
});
