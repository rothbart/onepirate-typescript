# onepirate-CRA-typescript

Thanks for stopping by! This project is based on the Typescript version of the [onepirate theme](https://material-ui.com/store/items/onepirate/). It uses [create-react-app](https://github.com/facebook/create-react-app) as a harness for running locally. This is intended as a quick way to play with React, Material-UI, and the onepirate theme to see if it's something you might want to use for your own work. You could also use it as an easy way to get a new project off the ground.

I made a few additional changes (besides adding CRA):
* Added [react router](https://reactrouter.com/) for navigation
* Placed all static resources in /public
* Made some small changes to the way markdown is loaded in Privacy.tsx and Terms.tsx (in my opinion this makes the code a bit more robust/extensible)

I decided to open source this work while building the [Modern Guide to Web Development](https://field-guide.web.app/). If you find this helpful please check out the [my site](https://field-guide.web.app/) or drop me an [email](mailto:rothbart@gmail.com).

## Building and running locally

Once you clone this repo you can use `npm install` and the standard create-react-app scripts to run it locally:

```
C:\onepirate-typescript> npm install
...
C:\onepirate-typescript> npm run build
...
C:\onepirate-typescript> npm start
```
