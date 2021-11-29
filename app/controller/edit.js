Ext.define('page.controller.edit',{
  extend:'Ext.app.Controller',

  views:['card', 'goods'],
  stores:['storeGoods'],
  models:['dataGoods'],
  init:function(){
    this.control({
      'viewport goodsTabview goodsview':{
        itemclick:this.editCard
      },
      'cardview button[action=save]':{
        click: this.updateProduct
      },
    })
  },
  //загрузка данных в карточку товара
  editCard:function(grid, record){
    var view = Ext.create('widget.cardview');
    view.down('form').loadRecord(record);
  },
  //обновление данных в сетке
  updateProduct:function(button){
    var win = button.up('cardview');
    var form = win.down('form');
    var record = form.getRecord();
    var values = form.getValues();
    //валидность полей
    if (values.price < 0 || values.amount < 0 || (values.amount.indexOf('.') > -1) || (values.amount.indexOf(',') > -1)){
      alert('Исправьте значение');
    }
    else{
      //наличие изменений
      if(record.data.price != values.price || record.data.amount != values.amount)
      {
        alert('Имеются изменённые данные');
      }
      record.set(values);
      win.close();
    }                     
    //this.getStore('storeGoods').sync(); //обновление данных на сервере
  },
})