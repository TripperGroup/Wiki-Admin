import posts from './posts';

import pages from './pages';
import categories from './categories';
//import tags from './tags';
import users from './users';
import profile from './profile';
//import settings from './settings';
import comments from './comments';
import dashboard from './dashboard';
import media from './media';

export default {
  dashboard,
  posts,
  media,
  pages,
  categories,
  comments,
  users,
  profile,
};

const defaultContent = dashboard;

export { defaultContent };
