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
  
  
  return "\n    <div id=\"btn-why\">\n        <a href=\"#why\">Why?</a>\n    </div>\n";
  }

  buffer += "<h1>Storyline</h1>\n\n<div class=\"btn-share\">\n    <a href=\"https://twitter.com/intent/tweet?text=Storyline: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&url="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.storylineURI)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Share</a>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.storyline)),stack1 == null || stack1 === false ? stack1 : stack1.background), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });

this["JST"]["app/template/navigation.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"btn-back\">\n    <a href=\"#\" class=\"back fadeIn\">Back</a>\n</div>";
  });

this["JST"]["app/template/story.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"main-thumb\">\n            <img src=\"";
  if (helper = helpers.thumbnail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumbnail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.preferredLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.preferredLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n        </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"story-article article\">\n    <h2>";
  if (helper = helpers.preferredLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.preferredLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    <p class=\"date\">"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventStartDate), options) : helperMissing.call(depth0, "date", (depth0 && depth0.eventStartDate), options)))
    + "</p>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.thumbnail), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"article-content\">\n        <p>Article content</p>\n    </div>\n    <div class=\"related\">\n        <div class=\"story clearfix\">\n            <div class=\"thumb\">\n                <img src=\"http://ichef.bbci.co.uk/news/235/media/images/74595000/jpg/_74595283_022110683-1.jpg\" />\n            </div>\n            <div class=\"sub-content\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tempor urna.</p>\n            </div>\n        </div>\n        <div class=\"story clearfix\">\n            <div class=\"thumb\">\n                <img src=\"http://ichef.bbci.co.uk/news/235/media/images/74595000/jpg/_74595283_022110683-1.jpg\" />\n            </div>\n            <div class=\"sub-content\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tempor urna.</p>\n            </div>\n        </div>\n        <div class=\"story clearfix\">\n            <div class=\"thumb\">\n                <img src=\"http://ichef.bbci.co.uk/news/235/media/images/74595000/jpg/_74595283_022110683-1.jpg\" />\n            </div>\n            <div class=\"sub-content\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tempor urna.</p>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["app/template/storyline.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"year-group\">\n            <div class=\"year\">"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"story\" data-id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                    <a href=\"#\">\n                        <div class=\"date\">\n                            <span class=\"day\">"
    + escapeExpression((helper = helpers.day || (depth0 && depth0.day),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventStartDate), options) : helperMissing.call(depth0, "day", (depth0 && depth0.eventStartDate), options)))
    + "</span>\n                            <span class=\"month\">"
    + escapeExpression((helper = helpers.month || (depth0 && depth0.month),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventStartDate), options) : helperMissing.call(depth0, "month", (depth0 && depth0.eventStartDate), options)))
    + "</span>\n                        </div>\n                        <div class=\"title\">\n                            "
    + escapeExpression(((stack1 = (depth0 && depth0.preferredLabel)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        </div>\n                    </a>\n                </div>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <div class=\"story\" data-id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                <a href=\"#\">\n                    <div class=\"date\">\n                        <span class=\"day\">"
    + escapeExpression((helper = helpers.day || (depth0 && depth0.day),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventStartDate), options) : helperMissing.call(depth0, "day", (depth0 && depth0.eventStartDate), options)))
    + "</span>\n                        <span class=\"month\">"
    + escapeExpression((helper = helpers.month || (depth0 && depth0.month),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventStartDate), options) : helperMissing.call(depth0, "month", (depth0 && depth0.eventStartDate), options)))
    + "</span>\n                    </div>\n                    <div class=\"title\">\n                        "
    + escapeExpression(((stack1 = (depth0 && depth0.preferredLabel)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                    </div>\n                </a>\n            </div>\n        ";
  return buffer;
  }

  buffer += "<div class=\"storyline\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.years), {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
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

  buffer += "<div class=\"title-text\">\n    <h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.date), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>";
  return buffer;
  });

this["JST"]["app/template/topic.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <img src=\"";
  if (helper = helpers.thumbnail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumbnail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.preferredLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.preferredLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n    ";
  return buffer;
  }

  buffer += "<div class=\"topic-article article\">\n    <h2>";
  if (helper = helpers.preferredLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.preferredLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    <p class=\"date\">"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.eventStartDate), options) : helperMissing.call(depth0, "date", (depth0 && depth0.eventStartDate), options)))
    + "</p>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.thumbnail), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"article-content\">\n        <div class=\"introduction\">\n            <div class=\"thumb\">\n                <img src=\"http://ichef.bbci.co.uk/news/235/media/images/74595000/jpg/_74595283_022110683-1.jpg\" />\n            </div>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tempor urna. Suspendisse congue, arcu at dictum volutpat, ante risus placerat massa, sed condimentum nisi dui ac est. Proin condimentum rhoncus felis ut aliquam. Donec urna arcu, commodo nec urna facilisis.</p>\n        </div>\n        <div class=\"related\">\n            <div class=\"story clearfix\">\n                <div class=\"thumb\">\n                    <img src=\"http://ichef.bbci.co.uk/news/235/media/images/74595000/jpg/_74595283_022110683-1.jpg\" />\n                </div>\n                <div class=\"sub-content\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tempor urna.</p>\n                </div>\n            </div>\n            <div class=\"story clearfix\">\n                <div class=\"thumb\">\n                    <img src=\"http://ichef.bbci.co.uk/news/235/media/images/74595000/jpg/_74595283_022110683-1.jpg\" />\n                </div>\n                <div class=\"sub-content\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tempor urna.</p>\n                </div>\n            </div>\n            <div class=\"story clearfix\">\n                <div class=\"thumb\">\n                    <img src=\"http://ichef.bbci.co.uk/news/235/media/images/74595000/jpg/_74595283_022110683-1.jpg\" />\n                </div>\n                <div class=\"sub-content\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tempor urna.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["app/template/topics.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a class=\"topic\" href=\"#\" data-id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.preferredLabel)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n    ";
  return buffer;
  }

  buffer += "<ul class=\"topics-list\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.topics), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

return this["JST"];

});