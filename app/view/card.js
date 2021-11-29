Ext.define('page.view.card',{
    extend: 'Ext.window.Window',
    alias : 'widget.cardview',
    title : `Карточка товара`,
    autoShow:true,
    height:220,
    width:400,
    store:'storeGoods',
    items:[
      {
        xtype:'form',
        frame:true,
        items:[
          {
              xtype: 'textfield',
              fieldLabel:'ID',
              disabled:true,
              name:'productID',
              style:'margin:10px 0 0 10px',
          },
          {
              xtype:'textfield',
              fieldLabel:'Наименование:',
              disabled: true,
              name:'name',
              style:'margin:5px 0 0 10px',
          },
          {
              xtype:'numberfield',
              fieldLabel:'Цена:',
              name:'price',
              emptyText:'',
              style:'margin:5px 0 0 10px',
              validator: function(v) {
                  return /^[0-9]*(\.[0-9]*)?$/.test(v);
              },
          },
          {
              xtype:'numberfield',
              fieldLabel:'Кол-во',
              name:'amount',
              emptyText:'',
              style:'margin:5px 0 0 10px',
              validator: function(v) {
                  return /^[0-9]*$/.test(v);
              },
          }
        ]
      }
    ],
    buttons:[
        {
            text:'Сохранить',
            action:'save',
        },
        {
            text:'Отмена',
            listeners:{
              click:function(){
                  var parentWindow = this.findParentByType('cardview');
                  parentWindow.hide();
              }
          }
        }
    ]
})