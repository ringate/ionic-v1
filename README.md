## Ionic 1.x

This is the repo for Ionic 1.x. If you're looking for the latest version (>= 2.0) of Ionic, please visit the main [Ionic](https://github.com/ionic-team/ionic) repo.

For new apps, we *strongly* recommend the [latest version of Ionic](https://github.com/ionic-team/ionic) which comes with the latest version of Angular, many new components, enhanced performance, and more.

For more information on Ionic 1.x, please read the [original README.md](README_OLD.md)

## Restucture JS Template

For better manage angularJS files. Moved to `./src` from `./www/js`. Using `gulp-concat` to generate single `app.js` into `./www/js`.

Below source code from ionic `Tab` template.

```
src\
   └── js\
         └── controllers\
                        └── account.js
                        └── chats.js
                        └── chatDetail.js
                        └── dash.js
         └── services\
                     └───── chats.js
         └── directives\
         └── filters\
         └── app.js
         └── routes.js
         └── init.js
```
