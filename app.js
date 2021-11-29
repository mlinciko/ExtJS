Ext.application({    
    name: 'page',
    appFolder: 'app',
    views:['menu', 'goods','card','login','goodsTab'],
    stores:['storeGoods'],
    controllers:['edit','validate'],
    launch: function() {     
        Ext.create('Ext.container.Viewport',{
          items:[
            {xtype:'loginview'},
            { 
              xtype: 'menuview',
              hidden:true
            },
            {
              xtype:'goodsTabview',
              hidden:true
            }
          ]
        }
    )},
  });
