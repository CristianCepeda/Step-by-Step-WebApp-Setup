### Create React App

Step 1
- Create a new directory so that we can initialize a package.json file by running either command. Answer the questions it asks to fill in the file.

  ```shell
  yarn init
  ```
  ```shell
  npm init
  ```

Step 2
  - Add Webpack to the devDependencies inside the package.json by running the following command.

    ```shell
    yarn add webpack webpack-cli -D
    ```


  - After the dev dependencies have finished installing add these scripts to the file as well.

  ```json
  "scripts": {
      "dev": "webpack -wd",
      "build": "webpack --config webpack.config.js",
      "http-server": "http-server dist/"
    }
    ```

- The dev script causes Webpack to run in watch mode and development mode. This is so that it doesn't spend a lot of time trying to compile everything and so that it bundles it up to the specific number of bundles you configure it to do.
- The `--config` flag is meant to specify the files you want to run Webpack on. Sometimes you might have more complex bundling and need multiple files. So this will bundle the files individually.

- Now create a file called `webpack.config.js` and configure it based on your needs but for references purposes look inside my file and copy and paste it.

Step 3
  - Now is a perfect time to install react and babel. Add a `.babelrc` file to the directory path and copy the code that I have. This lets us know what presets we will be using.
  - They are es2015 which is JSX syntax, and react which allows Babel to use React, and understand React and compile it.

  ```shell
  yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react -D
  yarn add react react-dom
  ```
Step 4
  - Lets go into or webpack.config.js file and add a module section. This is so we can specify are loaders. Loaders are one functionality of Webpack which make sure that webpack knows how to process specific type of files.
  - This will be a good time to also install any additional dev dependencies that will be needed so we can use additional loaders. [ Ex. css-loader or file-loader or image-webpack-loader] see the documentation on how to add these dependencies.

  ```shell
  yarn add css-loader -D
  yarn add style-loader -D
  yarn add file-loader -D
  yarn add image-webpack-loader -D
  ```

  - Note that Webpack reads from right to left in an array so in the module loader it will read 'css-loader' first and then 'style-loader' second. You will want the most recently used loaders in the front of the array.

  ```js
  module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  ```

Step 5
  - Coming soon
