# Essential JS 2 Typescript Seed

This seed project is a skeleton application used to create [Essential JS 2](https://www.syncfusion.com/products/essential-js2) web application.

The seed contains Essential JS 2 button component for preview and all common settings are preconfigured.

## Getting Started

To get started you need to clone the `ej2-typescript-seed` repository and navigate to ej2-typescript-seed location.

```
git clone https://github.com/syncfusion/ej2-typescript-seed.git
cd ej2-typescript-seed
```

## Installing

We can get all the Essential JS 2 components in a single npm package [`ej2`](https://www.npmjs.com/package/@syncfusion/ej2).

We already configure the required packages in the `package.json` file.

You can run the below command to install all dependent packages related to this seed project.

```
npm install
```

## Testing

This application is preconfigured with unit test of Essential JS 2 button component.

The test case is written in Jasmine and we run it with Karma test runner. The karma configuration settings are available in the `karma.conf.js` file.

The test case file can be found in the `spec` folder.

You can simply run the below command to get the test report in `test-report` location.

```
npm run test
```

## Running

The application is configured with `browser-sync`, so it will serve the web application in your default browser.

We used `webpack` to bundle the source file and `gulp-sass` to compile the styles, before running the application in browser.

You can use the below command to run the web application.

```
npm run serve
```

## Resources

You can also refer the below resources to know more details about Essential JS 2 components.

* [Pure JS Demos](http://ej2.syncfusion.com/demos/)
* [Pure JS Documentation](http://ej2.syncfusion.com/documentation/)
