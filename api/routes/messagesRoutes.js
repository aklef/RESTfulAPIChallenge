'use strict';

module.exports = function (app)
{
   var messages = require('../controllers/messagesController');

   // messages Routes
   app.route('/messages')
      .get(messages.list_all_messages)
      .post(messages.write_a_message)
      .delete(messages.delete_all_messages);

   app.route('/messages/:messageId')
      .get(messages.read_a_message)
      .delete(messages.delete_a_message);
};
