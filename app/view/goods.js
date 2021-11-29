Ext.define('page.view.goods',{
  extend:'Ext.grid.Panel',
  alias: 'widget.goodsview',
  title:'Список товаров',
  frame:true,
  style: {
    width: '1100px',
    height: '800px',
    margin: '10px auto 10px auto',
  },
  store: 'storeGoods',
  id: 'goodsGrid',
  //верхний тулбар
  dockedItems: [
    {
      items: [
        {   //фильтр по id
          xtype: 'textfield',
          fieldLabel: 'ID',
          name: 'ID',
          itemId: 'ID',
          allowblank: false,
          style: 'margin:10px 0 5px 10px',
          emptyText: 'Введите фильтр...',
          enableKeyEvents: true,
          listeners: {
            keypress: function (form, e) {
              var grid = form.up('grid');
              grid.getStore().addFilter({
                property: 'productID',
                value: form.getValue()
              });
            }
          }
        },
        {
          //фильтр по описанию
          xtype: 'textfield',
          fieldLabel: 'Описание',
          name: 'descr',
          itemId: 'descr',
          allowblank: false,
          style: 'margin:5px 0 10px 10px',
          emptyText: 'Введите фильтр...',
          enableKeyEvents: true,
          listeners: {
            specialkey: function (form, e) {
              var grid = form.up('grid');
              grid.getStore().addFilter({
                property: 'description',
                value: form.getValue()
              });
            }
          }
        }
      ]
    }
  ],
  //колонки сетки
  columns: [{
    header: 'ID',
    dataIndex: 'productID',
    flex: 1
  }, {
    header: 'Имя',
    dataIndex: 'name',
    id: 'nameID',
    flex: 1,
  }, {
    header: 'Описание',
    dataIndex: 'description',
    flex: 1
  }, {
    header: 'Цена',
    dataIndex: 'price',
    flex: 1
  }, {
    header: 'Кол-во',
    dataIndex: 'amount',
    flex: 1,
    renderer: function (value, meta) {
      if (!value) { var background = 'red'}
      meta.style = 'background-color:' + background;
      return value;
    }

  }]
})


