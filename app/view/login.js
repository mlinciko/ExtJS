Ext.define('page.view.login' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.loginview',
    title : 'Окно входа',
    width : 300,
    style:'margin: 50px auto 0 auto',
    frame : true,
    id:'loginID',
    items: [
    {
       xtype: 'textfield',
       fieldLabel: 'Пользователь',
       name: 'username',
       allowblank: false,
       style:'margin:10px 0 0 5px'
      },
      {
       xtype: 'textfield',
       fieldLabel: 'Пароль',
       name: 'password',
       allowblank: false,
       inputType: 'password',
       style:'margin:5px 0 10px 5px'
      },
    ],
    buttons:[
      {
       text: 'Войти',
      }
    ]
    });