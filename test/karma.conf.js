module.exports = function(karma) {
  karma.set({

    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'blocky-text.js',

      'bower_components/angular-mocks/angular-mocks.js',
      'test/**/*.spec.*'
    ],
    exclude: [],
    reporters: ['progress'],

    port: 9876,
    runnerPort: 9100,
    colors: true,
    logLevel: karma.LOG_INFO,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true,

    plugins: [
      'karma-jasmine',
      'karma-coffee-preprocessor',
      'karma-phantomjs-launcher'
    ]

  });
};
