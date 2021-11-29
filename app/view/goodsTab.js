Ext.define('page.view.goodsTab',{
    extend:'Ext.tab.Panel',
    alias:'widget.goodsTabview',
    id:'goodsTabID',
    items:[
        {
            title:'Товары 1',
            items: [{ xtype: 'goodsview'}]
        },
        {
            title:'Товары 2'
        },
        {
            title:'Товары 3'
        }
    ]
})