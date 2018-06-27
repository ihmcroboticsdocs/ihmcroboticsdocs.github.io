# ihmcroboticsdocs.github.io
Website for IHMC Robotics Open Source Software Documentation

FRAMEWORK AND HOW TO NAVIGATE:
- The website and all individual webpages generated by project repos are hosted via GitHub pages.
- The main documentation website is created in the ihmcroboticsdocs.github.io repo. This has the homepage, footer and header links and navbar, as well as a documentation homepage that links to the relevant documentation for individual projects.
- How docusaurus works: It generates two folders: docs and website, into a directory of your choice. For project repos, this directory is websitedocs. For the main website, it's simply the root directory of the source branch. These generated docs and website folders will have all the files you create and edit complete with the tools to render your documentation with docusaurus themes. Docusaurus takes these files and PUBLISHES your website (mostly raw html and relevant files) into another branch in your repo. Currently, it is set up to publish to the gh-pages branch of your github project repository. For the main website, the docs and website folders are in the source brnach and the site is published to the master branch of ihmcroboticsdocs.github.io.
- Each project will have a websitedocs folder in their repo. This websitedocs directory will have a docs directory, website directory and a script to normalize the stylings for the javadocs generated (more on that below). This websitedocs directory will have the necessary docusaurus infrastructure set up for you to write and publish documentation that will be integrated with the main website ihmcroboticsdocs.github.io. It is important that you do not delete or rename the docs and website directories as they are required for docusaurus to generate the site.
- The docs directory contains all the md fies with info you want documented (tutorials, introductions, etc.).
- The website directory files that you need to modify according to your project are:
  - static folder: This contains an index.html file in which you need to update the href to docs/nameofyourprojectdocshomepage eg. docs/euclidhome where euclidhome.md is the md file behind the homepage of the euclid documentation. The static directory also contains a javadocs folder in which you'll generated your javadocs into.
  - replacestyles.sh: This script file is necessary because the docusaurus infrastructure is not set up to use different/custom css easily in different parts of the website. When the javadocs are generated in the static/javadocs directory, all the html files will include a path to css files in the javadocs directory. When these files are published to the gh-pages branch, docusaurus removes the css files from the static/javadocs directory (despite much effort navigating docusaurus docs, still haven't figured out a way for it to stop doing this). Since the css files are removed in the gh-pages branch, the html files rendered as webpages have no styling. My solution for this is a script that replaces all the css paths in the html files with the URL of the css file online. After you generate your javadocs in the relevant folder, just cd into the websitedocs directory and run the script. This previous css files in the javadocs directory are removed by the script since they result in odd behaviour in the html rendering.
  - siteConfig.js: Enter the title "Project Name' and tagline 'IHMC Project-Name Documentation', and the baseUrl 'reponame'.The url is always'https://ihmcroboticsdocs.github.io'. The projectName is the name of your project GitHub repo and the organizationName is ihmcroboticsdocs.

STEPS TO START CREATING DOCUMENTATION:
- Make a copy of an existing websitedocs directory (see euclid or euclid-core) into your project repository.
- Make sure you have the latest version of Node and Yarn installed.
- Install Docusaurus on your computer by running the command:
npm install --global docusaurus-init

Note: DO NOT run docusaurus-init as this will regenerate docusaurus template files

- Make the changes mentioned above in "FRAMEWORK AND HOW TO NAVIGATE" to edit the websitedocs directory contents according to your project.
- Create the documentation pages as md files and place them in the docs folder (or if you have static html pages put them in website/static).
- If you want to make other edits, I suggest consulting https://docusaurus.io/docs/en/installation for more instructions. NOTE: The framework is set up in such a way that each project repo links to the main website but docusaurus is not really suited for integrating contributions from multiple repos into one website, we are able to get away with this through some fiddling with siteConfig.js and hard links, but you may find that some edits cause weird behavior).
- Before you publish, you need to make sure that all your md files are rendered to html. To generate these html which will then be published in your gh-pages branch, cd into your website directory run the command: 'yarn run build' OR 'npm run build'.
- To view changes locally, cd into your website directory and run the command:
yarn start OR npm start OR docusaurus-start 
- Load site at http://localhost:3000/ (it will automatically open up on your browser window) to view changes locally
- If you are satisfied and ready to publish your changes to GitHub, commit and push all changes to GitHub and then cd into your website directory (with the package.json file) and run the command:
  GIT_USER=<GIT_USER> \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  yarn run publish-gh-pages
  
  Note: the current branch can be any branch that the relevant docs folder is in (for ihmcroboticsdocs.github.io the branch is source and the website is published to master. For project repos, the current branch is usually master and the website publishes to the gh-pages branch)

- If the publishing does not work, try running 'yarn install' and then 'yarn run build' in your website directory and then repeat the step above.
- Ensure that in your GitHub repository settings, in GitHub pages the source is set to the gh-pages branch.

VERSIONING:
- If it is the FIRST TIME setting up your project repo's websitedocs folder with versioning, cd into your website directory and run the command:
yarn examples versions

This will generate a versions.js file which will generate a versions page listing all the site versions. Customize this file by entering your the URL where past versions of your project can be viewed and accessed as well as links to their docs and release notes.

- If you are ready to finalize the documentation for a version, ensure that all your javadocs in the 'javadocs' folder in website/static are correct and the script replacestyles.sh has been run on them to adjust their css styling. Rename the javadocs folder to 'javadocs-version#' eg. 'javadocs-0.8.2' and make sure the link to the javadocs in projectnamejavadocs.md in your docs directory points to  https://ihmcroboticsdocs.github.io/projectreponame/javadocs-version#/overview-summary.html.
- Run the command

yarn run version <version-number>

(for example yarn run version 0.8.3). This will preserve all documents in the docs directory and make them available as documentation for version 0.8.3. If this is the latest version, documents from this version will use the URL docs/doc1.html. For past versions, documents will use the URL docs/oldversionnumber/doc1.html.
- Running the command again eg. yarn run version 0.9.0 will make version 0.9.0 the most recent set of documentation so documentation from version 0.8.3 will use the URL docs/0.8.3/doc1.html while documentation from version 0.9.0 will use docs/doc1.html.
- Upon creating a version, only the files from the docs directory and the sidebar files (sidebars.json) will be stored as part of that version. Therefore, static files (such as those in the img and javadocs directory) will not be associated to a version automatically by docusaurus. This is why we rename the javadocs folder, once all javadocs are generated and the replacestyles.sh is run on it, to specify the version it belongs to. If changes are made to be incorporated into a new version, new javadocs must be generated into website/static/javadocs and replacestyles.sh must then be run before renaming to javadocs-version# and updating the link in projectnamejavadocs.md accordingly. After this is done, a new version can then be created by running the command stated above.
- See the euclid and euclid-core repos for examples; visit https://docusaurus.io/docs/en/versioning for more help.

Other things to note:
- All documentation website related things are in the websitedocs folder of the project repo.
- The Docs (all md files, as well as the md files that link to javadocs) are kept in the docs folder
- All other webpages and website related things are in the pages folder of the website directory
- The docs directory must have a flat structure for the md files to render properly with docusaurus
- To upgrade to the most recent version of docusaurus, run 'npm update docusaurus'.

Errors that may occur (these are the most prominent/frequent ones encountered so far):
- If you receive an error when trying to publish changes or loading the site locally, check your docusaurus version. 
- Type error (utils.getPath is not a function), try running 'yarn upgrade', then 'yarn install', then 'docusaurus-start' in your website directory. 
- "EBUSY" or "ECONN REFUSED" error: this happens during publishing usually when the branch that it is trying to publish to is open/active, try closing your IDE where you're editing your project repo.

For more info: https://docusaurus.io/docs/en/installation

For help: https://github.com/facebook/docusaurus/issues




