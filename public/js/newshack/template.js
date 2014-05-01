define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/template/creative.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/template/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n        <div id=\"btn-why\">\n            <a href=\"#why\">Why?</a>\n        </div>\n    ";
  }

  buffer += "<div id=\"header\">\n    <h1>Storyline</h1>\n\n    <div id=\"btn-share\">\n        <a href=\"https://twitter.com/intent/tweet?text=Storyline: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&url="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.storylineURI)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Share</a>\n    </div>\n\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.background), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["JST"]["app/template/story.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

this["JST"]["app/template/storyline.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"year\">\n            "
    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"story\">\n                    <a href=\"#\" data-id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.uri)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                        <div class=\"date\">\n                            "
    + escapeExpression(((stack1 = (depth0 && depth0.startDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        </div>\n                        <div class=\"content\">\n                            "
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        </div>\n                    </a>\n                </div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.events), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"story\">\n                <a href=\"#\" data-id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.uri)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                    <div class=\"date\">\n                        "
    + escapeExpression(((stack1 = (depth0 && depth0.startDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                    </div>\n                    <div class=\"content\">\n                        "
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                    </div>\n                </a>\n            </div>\n        ";
  return buffer;
  }

  buffer += "<div class=\"storyline\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.year), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["JST"]["app/template/title.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += " <span class=\"date\">";
  if (helper = helpers.date) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.date); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  }

  buffer += "<div id=\"title\">\n    <h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>";
  return buffer;
  });

this["JST"]["app/template/topics.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a href=\"#\" data-id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.uri)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.preferredLabel)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n    ";
  return buffer;
  }

  buffer += "<ul class=\"topics\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.topics), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

return this["JST"];

});