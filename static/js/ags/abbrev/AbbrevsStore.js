
Ext.define('Ags.abbrev.AbbrevsStore', {
	extend: 'Ext.data.Store',
	requires: [
       //'Ags.model.Abbrev'
    ],
	constructor: function(){
		Ext.apply(this, {
			model: 'Ags.model.Abbrev',
			storeId: "abbrevs",
			sssorters: [ {
				property: 'dated',
				direction: 'DESC'
			}],
			deadsortInfo: {
				property: 'code',
				direction: 'DESC'
			},
			groupField: "group",
			pageSize: 2000,
			autoLoad: true,
			proxy: {
				type: 'ajax',
				url: "/ags/4/abbrevs.json",
				reader: {
					type: 'json',
					root: "abbreviations",
					idProperty: 'code',
					sstotalProperty: 'code_count'
				}
			}
		});
		this.callParent();

	}
});
