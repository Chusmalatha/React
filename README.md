# Namasthe React 

# NPM
->not a node package manager
->It manages the all packages
->All packages are availabel in this npm
->Biggest package manager
->standard repository for all the packages
->we can use npm to include any package


# PACKAGE.JSON
->Package.json is a configuration for npm
->It keeps a track of one version of that package is installed into    our system


PACKAGE-LOCK.JSON
->It keeps all the tracks of exact version that is being installed
->It does not update like (^)


BUNDLER
->A package helps to minify the whole code to push it to production
->Used to bundle the whole code
->Examples are Webpack, veet, parcel 


DEPENDENCIES(package, library)
->2 types
    DEV DEPENDENCY
    ->Required for our development phase
    NORMAL DEPENDENCY
    ->USed in Production also
->npm install -D parcel 
->-D means I need this as a Dev dependency


PARCEL
->"devDependencies": {
    "parcel": "^2.15.4"
  }
->if a new version is released 2.15.5 parcel will automatically updates its version if we are putting ^(Carrat)
->It updates only for minor upgrades
->^ for minor upgrades
->~ for major upgradesQ2
->Major upgrades means lot of things gonna changes, so it is not good update like this
->It creates a dev build, local sever, automatically refreshes the browser if we change anything in files
->Parcel is doing HMR-Hot Module Replacement(automatically refreshes)
->Parcel is using File Watching Algorithm which is written C++
->Caching - It gives faster development
->Parcel will do Image Optimization
->Minification
->Bundling
->Compressing
->Consistent Hashing - It is a technique to evenly distribute keys across servers in a way that   minimizes remapping when servers are added or removed.
->Code splitting
->Differential Bundling - An app can be opended in web browser, firebox , it supports older browsers
->Diagnostic - beautiful errors
->Error Handling
->HTTPs
->Tree Shaking - remove unused code
->It has different build for dev and production bundles


NODE MODULES
->It contains all the code that we fetch from npm
->It is like a database abotu dependencies
->These are very heavyy


TRANSITIVE DEPENDENCY
->Pakage.json shows that the parcel is our dependency
->Parcel itself be dependent on lot of things
->Dependency Tree


** No need to push these node modules into the git
** What ever we can regenerate dont put it onthe git

** npx->it will execute 


CDN
->Fetching from CDN is costly

** parcel-cache and dist are temporaray files, can be regenerated


# Browserlist