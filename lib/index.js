
import { _variables, _replaces }  from './config'

function LessPluginAntd2CssVariable(options = {}){
  const { variables, replaces } = options;
  this.variables = variables || _variables
  this.replaces = replaces || _replaces
}

LessPluginAntd2CssVariable.prototype.install = function (less, pluginManager, functions) {
  const PreProcessor = {
    process:  (src)=> {
      let result = src;
      Object.keys(this.variables).forEach((key) => {
        const value = this.variables[key];
        if (typeof value === 'string') {
          result = result.replace(new RegExp(key + ':[^;]*;', 'g'), key + ': ' + this.variables[key] + ';');
        }
      });
      Object.keys(this.replaces).forEach((key) => {
        const value = this.replaces[key];
        if (typeof value === 'string') {
          result = result.split(key).join(value);
        }
      });
      return result;
    }
  }
  pluginManager.addPreProcessor(PreProcessor);
  const call = (name, ...args) => {
    return new less.tree.Call(name, [new less.tree.Expression(args)]);
  };
  const anonymous = (value) => {
    return new less.tree.Anonymous(value);
  };
  functions.add("_fade", (node, amount) => {
    if (node.name === "var") {
      const color = node.args[0].value;
      if (color === "--primary-color" || color === "--info-color") {
        return call("var", anonymous("--primary-fade-" + amount.value));
      }
      if (color === "--error-color" || color === "--highlight-color") {
        return call("var", anonymous("--error-fade-" + amount.value));
      }
      if (color === "--warning-color") {
        return call("var", anonymous("--warning-fade-" + amount.value));
      }
      if (color === "--success-color") {
        return call("var", anonymous("--success-fade-" + amount.value));
      }
      return call("var", anonymous(color + "-fade-unknown"));
    }
    const f = functions.get("fade");
    return f ? f(node, amount) : node;
  });
}


export default LessPluginAntd2CssVariable
