# ihmcroboticsdocs.github.io
Website for IHMC Robotics Open Source Software Documentation

How to publish changes onto the website:
- Run this script from the command-line:
  GIT_USER=<GIT_USER> \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  yarn run publish-gh-pages ( or 'npm run publish-gh-pages`)
  
Other things to note:
- The Docs (all md files) are kept in the docs folder
- All other webpages are in the pages folder of the website directory
