[![Build Status](https://travis-ci.org/nodeframe/persistent-data.svg?branch=master)](https://travis-ci.org/nodeframe/persistent-data)

# Persistent Data
Imagine what the easiest way to use persistent data in a project it becomes to be this library, Persistent Data doesn't use a database. Instead, BSON are stored in the file system there is no overhead and dependency, you can use anywhere and it will stored persistent file in your own project or what the path you wish without any painless

## Installation
```
npm install @nodeframe/persistent-data
```
then the code you can do
```javascript
// es module
import Data from '@nodeframe/persistent-data'
// or 
var Data = require('@nodeframe/persistent-data')
```
## Usage
```javascript

const data = new Data({},PATH) // the initial value is empty object and it will store bson file to PATH, 

data.save({name:"John Doe"})
data.load() // get {name:"John Doe"}

data.merge({age:22})
data.load() // get {name:"John Doe",age:22}

data.save() // this is reset the data to default
data.remove() // remove bson persistent file
```
