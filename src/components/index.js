import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // The relative path of the components folder
    '~/components',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    // /[A-Z]\w+Base\.vue$/,
    /\.vue$/
  );
  
  const register = (app) => {
    requireComponent.keys().forEach((fileName) => {
      // Get component config
      const componentConfig = requireComponent(fileName);
      // Get component name
      //const componentName = fileName.split('/').pop()?.replace(/\.\w+$/, '');
      const componentName = upperFirst(
            camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
        )   
  
      app.component(componentName, componentConfig.default || componentConfig);
    });
  };


// app.component('hello-world', HelloWorld);
export default {
    register
}