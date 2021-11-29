Ext.define('page.store.storeGoods', {
    extend: 'Ext.data.Store',
    alias:'widget.storegoods',
    model: 'page.model.dataGoods',
    autoLoad: true,
    autoSync: true,
    storeId: 'storeGoods',
    proxy: {
        type: 'ajax',
        url: 'app/data/goods.json',
        reader: {
            type: 'json',
            root: 'goods',
            successProperty: 'success'
        }
    }
});