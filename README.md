# ihmcroboticsdocs.github.io
Website for IHMC Robotics Open Source Software Documentation

To install Docusaurus on your computer  (if you are making website changes):
- Clone the gihub repo (if you haven't done so) and cd into the directory
- Run the command:
npm install --global docusaurus-init

To generate the html files from md:
- yarn run build

Note: This step is usually unnecessary because when you do yarn run start or publish changes to github, the html files should be built for you.

Making changes locally:
- To view changes:
yarn start
- Load site at http://localhost:3000/ (it will automatically open up on your browser window)

How to publish changes onto the website:
- Commit and push all local changes to GitHub
- cd into the website directory (w the package.json file) of the repo
- Run this script from the command-line:
  GIT_USER=<GIT_USER> \
  CURRENT_BRANCH=source \
  USE_SSH=true \
  yarn run publish-gh-pages
- Note: the current branch can be any branch that the relevant docs folder is in (except master since the website is published to master)

Other things to note:
- The Docs (all md files, as well as the md files that link to javadocs) are kept in the docs folder
- All other webpages are in the pages folder of the website directory

Errors that may occur:
- If you receive an error when trying to publish changes or loading the site locally, check your docusaurus version. Eg. I received a type error (utils.getPath is not a function), try running yarn upgrade docusaurus-init
For more info: https://docusaurus.io/docs/en/installatio


Framework so far:

- There is a markdown file that has external links to the index.html file for the javadocs for euclid (plan is to do it in packages, not sure if this is ideal). Currently using "rawgit" to retrieve the html link (perhaps there is a more secure/consistent way to do this in case it gets deprecated) from the actual euclid github repo itself (currently my forked one). So, whenever code is changed in euclid, new javadocs will be generated and the index.html file will be changed also and our link will have the updated changes.

- To use rawgit: If your URL to the index.html file in package repo is:  https://github.com/<your user name>/<your repo>/blob/master/index.html replace it with  https://rawgit.com/<your user name>/<your repo>/master/index.html

There is one con: the docs directory must have a flat structure in order to render them to html, but there is a plugin coming along.