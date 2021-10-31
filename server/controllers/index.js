module.exports = {
  login: require('./user/login'),
  signup: require('./user/signup'),
  logout: require('./user/logout'),
  userinfo: require('./mypage/user-info'),
  edituserinfo: require('./mypage/edit-user-info'),
  withdrawal: require('./mypage/withdrawal'),
  // todo: require('./mainpage/todo')
};
