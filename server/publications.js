Meteor.publish('posts', function() {
  return Posts.find({}, options);
});

Meteor.publish('comments', function() {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find();
});
