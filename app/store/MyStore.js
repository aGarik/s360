Ext.define('smiley360.store.MyStore', {
    extend: 'Ext.data.Store',
    config: {
        fields: [
        {
            name: 'first_name'
        },
        {
            name: 'last_name'
        }
        ],
        storeId: 'MyStore',
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: 'api/myPHPfile.php',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});