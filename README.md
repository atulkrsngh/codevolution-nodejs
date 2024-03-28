# codevolution-nodejs
npm is the default package manager for node.js. We have pnpm and yarn also but not the default one. 
package.json is the npm's configuration file

In package.json, whatever we write under keywords, it will be indexed by the npm registry to help find packages when someone searches for it

npm init --yes will generate the package.json file with default values without prompting anything. We can go to package.json and change anything we want

npm i always install the latest stable version

Semantic Versioning: SemVer is one of the widely accepted versioning systems. A simple set of rules and requirements that dictates how version numbers are assigned and incremented. It is crucial to keep semantic and historical track of changes. version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to next.
It's format : X:Y:Z. X is major version, Y is minor version and Z is patch. 
When you fix bug and code stays backward compatible, you increment patch version
When you add new functionality but code still stays backward compatible, you increment minor version. You also reset the patch version to zero.
When you make changes and code is not backward compatible, we increment major version. We also reset minor and patch version to zero. 

Semantic version always starts with 0.1.0 because we never start with patch on a brand new package. 0.Y.Z ( a major version of zero) is used for initial development. When the code is production ready, you increment to version 1.0.0
Even the simplest of the changes has to be done with an increase in version number. 
