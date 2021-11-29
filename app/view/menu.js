Ext.define('page.view.menu',{
    extend:'Ext.panel.Panel',
    alias:'widget.menuview',
    title:'Главное окно',
    id:'menuID',
    requaries:['goods'],
    items:[
        {
            xtype:'button',
            text:'Товары',
            style:'margin: 5px 10px 5px 10px',
            listeners:{
                click:function(){
                    Ext.getCmp('goodsTabID').show();
                }
            }
        },
        {
            xtype:'button',
            text:'Выход',
            style:'margin: 5px 0 5px 0px',
            listeners:{
                click:function(){
                    Ext.getCmp('loginID').show();
                    Ext.getCmp('menuID').hide();
                    Ext.getCmp('goodsTabID').hide();
                    Ext.getCmp('loginID').items.get(0).setValue("");
                    Ext.getCmp('loginID').items.get(1).setValue("");
                }
            }
        }
    ]
});

