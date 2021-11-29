Ext.define('page.model.dataGoods',{
    extend:'Ext.data.Model',
    fields: [
        {
            name:'productID',
            type:'int'
        },
        {
            name: 'name',
            type:'string',
        },
        {
            name: 'description',
            type:'string',
        },
        {
            name:'price',
            type:'float'
        },
        {
            name:'amount',
            type:'int'
        }
    ]
});
