# ihmcroboticsdocs.github.io
Website for IHMC Robotics Open Source Software Documentation

Making changes locally:
- To view changes:
npm start
- Load site at http://localhost:3000/

How to publish changes onto the website:
- Commit and push all local changes to GitHub
- cd into the website directory (w the package.json file) of the repo
- To generate the html files:
yarn run build
- Run this script from the command-line:
  GIT_USER=<GIT_USER> \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  yarn run publish-gh-pages ( or 'npm run publish-gh-pages`)
  
Other things to note:
- The Docs (all md files, as well as the md files that link to javadocs) are kept in the docs folder
- All other webpages are in the pages folder of the website directory

For more info: https://docusaurus.io/docs/en/installation


Framework so far:

- There is a markdown file that has external links to the index.html file for the javadocs for euclid (plan is to do it in packages, not sure if this is ideal). Currently using "rawgit" to retrieve the html link (perhaps there is a more secure/consistent way to do this in case it gets deprecated) from the actual euclid github repo itself (currently my forked one). So, whenever code is changed in euclid, new javadocs will be generated and the index.html file will be changed also and our link will have the updated changes.

- To use rawgit: If your URL to the index.html file in package repo is:  https://github.com/<your user name>/<your repo>/blob/master/index.html replace it with  https://rawgit.com/<your user name>/<your repo>/master/index.html

There is one con: the docs directory must have a flat structure in order to render them to html, but there is a plugin coming along.