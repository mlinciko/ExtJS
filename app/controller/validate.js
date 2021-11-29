Ext.define('page.controller.validate',{
  extend: 'Ext.app.Controller',

  views: ['login'],
  init: function () {
    this.control({
      'loginview button': {
        click: this.signUser
      }
    })
  },
  signUser:function (button) {
    var window = button.up().up();
    console.log(window);
    var username = window.items.get(0).getValue();
    var password = window.items.get(1).getValue();
    if (username == 'admin' && password == 'padmin') {
      window.hide();
      Ext.getCmp('menuID').show();
    }
    else alert('Неверные данные!');
  },

})