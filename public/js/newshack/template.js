define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/template/widget.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n        <div id=\"btn-why\">\n            <a href=\"#why\">Why?</a>\n        </div>\n    ";
  }

  buffer += "<div id=\"header\">\n\n    <h1>Storyline</h1>\n\n    <div id=\"btn-share\">\n        <a href=\"https://twitter.com/intent/tweet?text=Storyline: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&url="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.storylineURI)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Share</a>\n    </div>\n\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.background), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  return buffer;
  });

return this["JST"];

});