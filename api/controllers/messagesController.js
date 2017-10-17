'use strict';

var mongoose = require('mongoose'),
  Messages = mongoose.model('Messages');

var callback = function (err, message)
{
  if (err)
    res.send(err);
  res.json(message);
}
  
exports.list_all_messages = function (req, res)
{
  Messages.find(
  {}, callback);
};

exports.delete_all_messages = function (req, res)
{
  Messages.remove(
  {}, function (err, message)
  {
    if (err)
      res.send(err);
    res.json(
    {
      message: 'All messages successfully deleted'
    });
  });
};

exports.write_a_message = function (req, res)
{
  var new_message = new Messages(req.body),
    // Ignore case for the palindrome check
    contents = new_message.contents.toLowerCase();

  if (isPalindrome(contents))
  {
    new_message.isPalindrome = true;
  }
  new_message.save(function (err, message)
  {
    if (err)
      res.send(err);
    res.json(message);
  });
  
  // Efficient palindrome-checking in js
  function isPalindrome(s, i)
  {
    return (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i);
  }
};

exports.read_a_message = function (req, res)
{
  Messages.findById(req.params.messageId, callback);
};

exports.delete_a_message = function (req, res)
{
  Messages.remove(
  {
    _id: req.params.messageId
  }, function (err, message)
  {
    if (err)
      res.send(err);
    res.json(
    {
      message: 'Messages successfully deleted'
    });
  });
};
