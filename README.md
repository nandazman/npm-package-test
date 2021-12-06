# Boilerplate NPM Package

This is a repository that supports an upcoming blog post at <https://developers.deepgram.com/blog/2021/12/build-npm-packages/>. 

This package is published and can be used by installing it:

```
npm install @phazonoverload/first-package
```

## Usage

```js
const OpenMovieDatabase = require('./index')
const omdb = new OpenMovieDatabase('YOUR_OPEN_MOVIE_DATABASE_API_KEY')

omdb.get({ t: 'Inside Out' }).then(results => {
    console.log({ results })
})
.catch(error => {
    console.log({ error })
})
```
