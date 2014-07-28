/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/IssuePicker.js' */
AJS.namespace("JIRA.AdminHelper");JIRA.AdminHelper.IssuePicker=AJS.SingleSelect.extend({init:function(a){function b(c){if(!c.sections){return[]}var d=[];AJS.$(c.sections).each(function(e,g){var f=new AJS.GroupDescriptor({weight:e,label:g.label});AJS.$(g.issues).each(function(j,h){f.addItem(new AJS.ItemDescriptor({value:h.key,label:h.key+" - "+h.summaryText,html:h.keyHtml+" - "+h.summary,icon:contextPath+h.img}))});d.push(f)});return d}AJS.$.extend(a,{errorMessage:"Please select an issue",ajaxOptions:{url:contextPath+"/rest/api/1.0/issues/picker?currentJQL=project!=null",query:true,formatResponse:b}});this._super(a)}});
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'templates/common.soy' */
// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.AdminHelper == 'undefined') { JIRA.Templates.AdminHelper = {}; }
if (typeof JIRA.Templates.AdminHelper.Common == 'undefined') { JIRA.Templates.AdminHelper.Common = {}; }


JIRA.Templates.AdminHelper.Common.statusImage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.status == 'green') ? '<span class="icon adminhelper-icon-tick"></span> ' : '<span class="icon adminhelper-icon-cross"></span> ');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.AdminHelper.Common.warningImage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="icon adminhelper-icon-warning"></span> ');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.AdminHelper.Common.loadingStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="status-loading" />');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.AdminHelper.Common.statusLineRow = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="statusRow ', (opt_data.hideFailedStatuses && opt_data.statusLine.status == 'red') ? 'hidden' : '', '" data-status="', soy.$$escapeHtml(opt_data.statusLine.status), '"><td>');
  JIRA.Templates.AdminHelper.Common.statusImage({status: opt_data.statusLine.status}, output);
  output.append('</td><td>');
  var summaryList23 = opt_data.statusLine.summary;
  var summaryListLen23 = summaryList23.length;
  for (var summaryIndex23 = 0; summaryIndex23 < summaryListLen23; summaryIndex23++) {
    var summaryData23 = summaryList23[summaryIndex23];
    output.append('<p>', summaryData23, '</p>');
  }
  output.append('</td><td>');
  if (opt_data.statusLine.details.length == 1) {
    var detailList32 = opt_data.statusLine.details;
    var detailListLen32 = detailList32.length;
    for (var detailIndex32 = 0; detailIndex32 < detailListLen32; detailIndex32++) {
      var detailData32 = detailList32[detailIndex32];
      output.append(detailData32);
    }
  } else {
    var detailList37 = opt_data.statusLine.details;
    var detailListLen37 = detailList37.length;
    for (var detailIndex37 = 0; detailIndex37 < detailListLen37; detailIndex37++) {
      var detailData37 = detailList37[detailIndex37];
      output.append('<p>', detailData37, '</p>');
    }
  }
  output.append('</td></tr>');
  return opt_sb ? '' : output.toString();
};

/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'templates/whereismycf-dialog.soy' */
// This file was automatically generated from whereismycf-dialog.soy.
// Please don't edit this file by hand.

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.Dialogs == 'undefined') { JIRA.Templates.Dialogs = {}; }
if (typeof JIRA.Templates.Dialogs.WhereIsMyCf == 'undefined') { JIRA.Templates.Dialogs.WhereIsMyCf = {}; }


JIRA.Templates.Dialogs.WhereIsMyCf.searchPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" class="aui ajs-dirty-warning-exempt"><div class="form-body"><div id="whereismycf-suggestions" class="aui-list" /><div class=\'description\'>', soy.$$escapeHtml("Begin typing to find your field"), '</div><div class="field-status-placeholder"></div></div><div class="buttons-container form-footer"><div class="buttons"><a href="#" class="cancel" id="aui-dialog-close">', soy.$$escapeHtml("Close"), '</a></div></div></form>');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.Dialogs.WhereIsMyCf.resultPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-status-results"><div class="aui-message"><ul class="item-details"><li><dl><dt>', soy.$$escapeHtml("Project"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.project), '">', soy.$$escapeHtml(opt_data.project), '</dd></dl><dl><dt>', soy.$$escapeHtml("Issue type"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.issueType), '">', soy.$$escapeHtml(opt_data.issueType), '</dd></dl><dl><dt>', soy.$$escapeHtml("Screen"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.operation), '">', soy.$$escapeHtml(opt_data.operation), '</dd></dl><dl><dt>', soy.$$escapeHtml("Field"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.fieldName), '">', soy.$$escapeHtml(opt_data.fieldName), '</dd></dl><dl><dt>', soy.$$escapeHtml("Status"), ': </dt><dd>');
  JIRA.Templates.AdminHelper.Common.statusImage(opt_data, output);
  output.append((opt_data.status == 'green') ? soy.$$escapeHtml(AJS.format("The \x27\x27{0}\x27\x27 field should be present on the form you are viewing",opt_data.fieldName)) : soy.$$escapeHtml(AJS.format("The \x27\x27{0}\x27\x27 field is not present on the form you are viewing",opt_data.fieldName)), '</dd></dl></li></ul></div>');
  if (opt_data.statusLines.length == 0) {
    output.append('<div class="aui-message info"><span class="aui-icon icon-info"></span><p>', soy.$$escapeHtml(AJS.format("There are no details available about the \x27\x27{0}\x27\x27 field status",opt_data.fieldName)), '</p></div>');
  } else {
    output.append('<table class="status-table aui"><thead><tr><th width="10%">', soy.$$escapeHtml("Status"), '</th><th width="30%">', soy.$$escapeHtml("Summary"), '</th><th width="60%">', soy.$$escapeHtml("Details"), '</th></tr></thead><tbody>');
    var statusLineList57 = opt_data.statusLines;
    var statusLineListLen57 = statusLineList57.length;
    for (var statusLineIndex57 = 0; statusLineIndex57 < statusLineListLen57; statusLineIndex57++) {
      var statusLineData57 = statusLineList57[statusLineIndex57];
      JIRA.Templates.AdminHelper.Common.statusLineRow({statusLine: statusLineData57}, output);
    }
    output.append('<tbody></table>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.Dialogs.WhereIsMyCf.errorPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ajaxerror"><div class="aui-message ', soy.$$escapeHtml(opt_data.errorClass), '">');
  if (opt_data.errorMessages.length == 1) {
    var msgList69 = opt_data.errorMessages;
    var msgListLen69 = msgList69.length;
    for (var msgIndex69 = 0; msgIndex69 < msgListLen69; msgIndex69++) {
      var msgData69 = msgList69[msgIndex69];
      output.append('<p>', soy.$$escapeHtml(msgData69), '</p>');
    }
  } else {
    output.append('<ul>');
    var msgList76 = opt_data.errorMessages;
    var msgListLen76 = msgList76.length;
    for (var msgIndex76 = 0; msgIndex76 < msgListLen76; msgIndex76++) {
      var msgData76 = msgList76[msgIndex76];
      output.append('<li>', soy.$$escapeHtml(msgData76), '</li>');
    }
    output.append('</ul>');
  }
  output.append('</div></div>', (! opt_data.noCloseLink) ? '<div class="buttons-container form-footer"><div class="buttons"><a href="#" class="cancel" id="aui-dialog-close">' + soy.$$escapeHtml("Close") + '</a></div></div>' : '');
  return opt_sb ? '' : output.toString();
};

/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/whereismycf-dialog.js' */
AJS.namespace("JIRA.WhereIsMyCf");JIRA.WhereIsMyCf.WhereIsMyCfDialog=JIRA.Dialog.extend({OPERATION_CREATE:0,OPERATION_EDIT:1,OPERATION_VIEW:2,_getDefaultOptions:function(){return AJS.$.extend(this._super(),{cached:false,id:"whereismycf-dialog",widthClass:"large",stacked:true})},_setContent:function(b,d){var a=this;if(b){this._super(b,d)}else{this._super(AJS.$(JIRA.Templates.Dialogs.WhereIsMyCf.searchPage()),true)}this.get$popupContent().find(".cancel").click(function(f){a.hide();f.preventDefault()});if(JIRA.Dialog.current===this){var c=new JIRA.setFocus.FocusConfiguration();c.context=this.get$popup()[0];c.parentElementSelectors=[".form-body"];JIRA.setFocus.pushConfiguration(c);JIRA.setFocus.triggerFocus()}},_formatActionsResponse:function(a){var b=[];if(a){var c=new AJS.GroupDescriptor({showLabel:false,label:"Fields"});AJS.$(a).each(function(){var d=new AJS.ItemDescriptor({label:this.customFieldName});d.properties.cfId=this.customFieldId;c.addItem(d)});b.push(c)}return b},decorateContent:function(){var b=this,a=JIRA.Meta.getIssueKey();this.addHeading("Where is my field?");this.queryControl=new AJS.QueryableDropdownSelect({id:"whereismycf",element:this.$content.find("#whereismycf-suggestions"),ajaxOptions:{minQueryLength:1,dataType:"json",url:contextPath+"/rest/whereismycf/1.0/fields/all",formatResponse:this._formatActionsResponse},showDropdownButton:true,loadOnInit:true});this.queryControl._handleServerError=function(g){var h=JIRA.SmartAjax.buildSimpleErrorContent(g);var f=g.status===401?"warning":"error";b._setContent(AJS.$(JIRA.Templates.Dialogs.WhereIsMyCf.errorPage({errrorMessage:h,errorClass:f})),false)};var c=this.queryControl.listController.options.selectionHandler;this.queryControl.listController.options.selectionHandler=function(f){c.call(this,f);b.get$popupContent().find(".field-status-results").remove();b.get$popupContent().find(".field-status-placeholder").append(AJS.$(JIRA.Templates.AdminHelper.Common.loadingStatus()));var g=this.getFocused().data("descriptor");AJS.trigger("analyticsEvent",{name:"adminhelper.whereismycf.field.select"});JIRA.SmartAjax.makeRequest({url:contextPath+AJS.format("/rest/whereismycf/1.0/fields/{0}?{1}",g.properties.cfId,b.options.context.asRequestParams()),complete:function(j,k,i){if(i.successful){b.queryControl.$field.val("").css("color","black");b.get$popupContent().find(".status-loading").remove();var h=i.data;b.get$popupContent().find(".field-status-placeholder").append(AJS.$(JIRA.Templates.Dialogs.WhereIsMyCf.resultPage({fieldName:g.label(),issueType:h.issueType,issueKey:h.issueKey,project:h.projectName,operation:h.operation,status:h.status,statusLines:d(h.statusLines),baseUrl:contextPath})))}else{e(b,i)}b._positionInCenter()}});return false};function d(i){if(i.length==0){return i}function g(l){var k=[];AJS.$.each(l,function(m,n){k.push(h(n))});return k}function h(l){if(l.parameters.length==0){return AJS.escapeHTML(l.message)}else{var k=f(l.parameters);k.splice(0,0,AJS.escapeHTML(l.message));return AJS.format.apply(this,k)}}function f(l){var k=[];AJS.$.each(l,function(m,n){if(n.type=="plain"){k.push(AJS.escapeHTML(n.value))}else{if(n.type=="link"){k.push(AJS.format("<a href=''{0}'' target=''_blank''>{1}</a>",AJS.escapeHTML(n.href),AJS.escapeHTML(n.text)))}else{if(n.type=="newline"){k.push("<br/>")}else{if(n.type=="tagstart"){k.push("<"+n.tagName+">")}else{if(n.type=="tagend"){k.push("</"+n.tagName+">")}else{throw"Unrecognized parameter type: "+n.type}}}}}});return k}var j=[];AJS.$.each(i,function(m,k){var l={};l.status=k.status;l.summary=g(k.summary);l.details=g(k.details);j.push(l)});return j}function e(g,h){var j=[];var i=JIRA.SmartAjax.buildSimpleErrorContent(h);if(i){j.push(i)}else{if(h.data&&h.data.errorMessages){j.push(h.data.errorMessages)}if(h.data&&h.data.errors){j.push(h.data.errors)}}var f=h.status===401?"warning":"error";g._setContent(AJS.$(JIRA.Templates.Dialogs.WhereIsMyCf.errorPage({errorMessages:j,errorClass:f})),false)}},show:function(a){if(a){this.context(a)}if(!this.options.context){throw"This class must be initialized with 'context' parameter before calling show()"}this._super()},context:function(a){if(a){this.options.context=a}else{return this.options.context}},hide:function(a){if(this._super(a)===false){return false}JIRA.setFocus.popConfiguration()}});JIRA.WhereIsMyCf.IssueContext=Class.extend({init:function(a){this.options=a||{}},issueKey:function(a){if(a){this.options.issueKey=a}else{return this.options.issueKey}},asRequestParams:function(){function a(c){return typeof(c)!="undefined"}var b="atl_token="+atl_token();if(a(this.options.issueKey)){b+="&issueKey="+this.options.issueKey}if(a(this.options.projectKey)){b+="&projectKey="+this.options.projectKey}if(a(this.options.projectId)){b+="&projectId="+this.options.projectId}if(a(this.options.issueOperation!==undefined)){b+="&issueOperation="+this.options.issueOperation}if(a(this.options.issueTypeId)){b+="&issueTypeId="+this.options.issueTypeId}return b}});
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/whereismycf.js' */
(function(g){var d="Where is my field?";JIRA.WhereIsMyCf.dialog=new JIRA.WhereIsMyCf.WhereIsMyCfDialog;g(document).delegate(".whereismycf-trigger","click",function(i){i.preventDefault();AJS.trigger("analyticsEvent",{name:"adminhelper.whereismycf.dialog.open"});JIRA.WhereIsMyCf.dialog.show(c())});g(document).bind("showLayer",function(j,l,k){if(l=="inlineDialog"&&k.popup.attr("id")=="inline-dialog-field_picker_popup"){if(k.popup.find(".whereismycf-qfpicker-link").length==0){var i=g("<a href='#' class='whereismycf-qfpicker-link'>"+d+"</a>").appendTo(k.popup.find(".qf-picker-header dl"));i.click(function(m){m.preventDefault();k.hide();h();JIRA.WhereIsMyCf.dialog.show(b())})}}});function h(){AJS.InlineDialog.current=null}function f(){var i=JIRA.Issue.getIssueKey();if(!i&&JIRA.IssueNavigator){i=JIRA.IssueNavigator.getSelectedIssueKey()}return i}function c(){return new JIRA.WhereIsMyCf.IssueContext({issueKey:f(),issueOperation:JIRA.WhereIsMyCf.dialog.OPERATION_VIEW})}function b(){var i=JIRA.Dialog.current;if(i.options.id=="create-issue-dialog"){return a(i)}else{if(i.options.id=="edit-issue-dialog"){return e(i)}else{throw"Uknown current dialog ID: "+i.options.id}}}function a(i){var j=i.get$popupContent();return new JIRA.WhereIsMyCf.IssueContext({projectId:j.find("#project").find("option:selected").val(),issueTypeId:j.find("#issuetype").find("option:selected").val(),issueOperation:JIRA.WhereIsMyCf.dialog.OPERATION_CREATE})}function e(i){var j=i.get$popupContent();return new JIRA.WhereIsMyCf.IssueContext({issueKey:f(),issueTypeId:j.find("#issuetype").find("option:selected").val(),issueOperation:JIRA.WhereIsMyCf.dialog.OPERATION_EDIT})}})(AJS.$);
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'templates/permission-helper-dialog.soy' */
// This file was automatically generated from permission-helper-dialog.soy.
// Please don't edit this file by hand.

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.Dialogs == 'undefined') { JIRA.Templates.Dialogs = {}; }
if (typeof JIRA.Templates.Dialogs.PermissionHelper == 'undefined') { JIRA.Templates.Dialogs.PermissionHelper = {}; }


JIRA.Templates.Dialogs.PermissionHelper.searchPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" class="permissionhelper-search-form aui ajs-dirty-warning-exempt"><div class="content-area-container"><div class="form-body"><div id="error-message-placeholder"></div><div class="action-description">', soy.$$escapeHtml("Discover why a user does or does not have certain permissions..."), '</div><div class="field-group"><label for="permissionhelper-user">', soy.$$escapeHtml("User"), '</label><select id="permissionhelper-user" name="permissionhelper-user" class="single-user-picker js-default-user-picker" data-container-class="long-field"></select><div class=\'description\'>', soy.$$escapeHtml("Begin typing to find a user, leave blank for Anonymous user"), '</div></div><div class="field-group ', (opt_data.currentIssueKey) ? 'hidden' : '', '"><label for="permissionhelper-issue">', soy.$$escapeHtml("Issue"), '</label><select class="aui-field-select select" name="permissionhelper-issue" id="permissionhelper-issue"></select><div class="description">', soy.$$escapeHtml("Begin typing to find an issue"), '</div></div><div class="field-group"><label for="permissionhelper-permission">', soy.$$escapeHtml("Permission"), '</label><select class="aui-field-select select" name="permissionhelper-permission" id="permissionhelper-permission">');
  var permissionGroupList20 = opt_data.permissionGroups;
  var permissionGroupListLen20 = permissionGroupList20.length;
  for (var permissionGroupIndex20 = 0; permissionGroupIndex20 < permissionGroupListLen20; permissionGroupIndex20++) {
    var permissionGroupData20 = permissionGroupList20[permissionGroupIndex20];
    output.append('<optgroup label="', soy.$$escapeHtml(permissionGroupData20.name), '">');
    var permissionList24 = permissionGroupData20.permissions;
    var permissionListLen24 = permissionList24.length;
    for (var permissionIndex24 = 0; permissionIndex24 < permissionListLen24; permissionIndex24++) {
      var permissionData24 = permissionList24[permissionIndex24];
      output.append('<option ', (permissionData24.id == 10) ? 'selected="selected"' : '', ' value="', soy.$$escapeHtml(permissionData24.id), '">', soy.$$escapeHtml(permissionData24.name), '</option>');
    }
    output.append('</optgroup>');
  }
  output.append('</select><div class=\'description\'>', soy.$$escapeHtml("Begin typing to find a permission or press down to see all"), '</div></div></div><div class="form-body field-status-placeholder" /></div><div class="buttons-container form-footer"><div class="buttons"><input class="button search" type="submit" id="permission-helper-submit" value="', soy.$$escapeHtml("Submit"), '">', (! opt_data.noCloseLink) ? '<a href="#" class="cancel" id="aui-dialog-close">' + soy.$$escapeHtml("Close") + '</a>' : '', '</div></div></form>');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.Dialogs.PermissionHelper.resultPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-status-results"><div class="aui-message"><ul class="item-details"><li><dl><dt>', soy.$$escapeHtml("Permission name"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.permissionName), '">', soy.$$escapeHtml(opt_data.permissionName), '</dd></dl><dl><dt>', soy.$$escapeHtml("User"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.userDisplayName), '">', (opt_data.username != '') ? '<a href="' + soy.$$escapeHtml(opt_data.baseUrl) + '/secure/admin/user/ViewUser.jspa?name=' + soy.$$escapeHtml(opt_data.username) + '">' + soy.$$escapeHtml(opt_data.userDisplayName) + '</a>' : soy.$$escapeHtml(opt_data.userDisplayName), '</dd></dl><dl><dt>', soy.$$escapeHtml("Project"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.projectName), '"><a href="', soy.$$escapeHtml(opt_data.baseUrl), '/browse/', soy.$$escapeHtml(opt_data.projectKey), '">', soy.$$escapeHtml(opt_data.projectName), '</a></dd></dl><dl><dt>', soy.$$escapeHtml("Permission scheme"), ': </dt><dd title="blah"><a href="', soy.$$escapeHtml(opt_data.baseUrl), '/plugins/servlet/project-config/', soy.$$escapeHtml(opt_data.projectKey), '/permissions">', soy.$$escapeHtml(opt_data.permissionSchemeName), '</a></dd></dl>', (opt_data.issueKey) ? '<dl><dt>' + soy.$$escapeHtml("Issue") + ': </dt><dd title="' + soy.$$escapeHtml(opt_data.issueKey) + '"><a href="' + soy.$$escapeHtml(opt_data.baseUrl) + '/browse/' + soy.$$escapeHtml(opt_data.issueKey) + '">' + soy.$$escapeHtml(opt_data.issueKey) + '</a></dd></dl>' : '', '<dl><dt>', soy.$$escapeHtml("Status"), ': </dt><dd>');
  JIRA.Templates.AdminHelper.Common.statusImage(opt_data, output);
  output.append((opt_data.status == 'green') ? soy.$$escapeHtml(AJS.format("{0} has the \x27\x27{1}\x27\x27 permission",opt_data.userDisplayName,opt_data.permissionName)) : soy.$$escapeHtml(AJS.format("{0} does not have the \x27\x27{1}\x27\x27 permission",opt_data.userDisplayName,opt_data.permissionName)), '</dd></dl></li></ul></div>');
  if (opt_data.statusLines.length == 0) {
    output.append('<div class="aui-message info"><span class="aui-icon icon-info"></span><p>', soy.$$escapeHtml(AJS.format("There are no details available about the \x27\x27{0}\x27\x27 permission",opt_data.permissionName)), '</p></div>');
  } else {
    output.append('<table class="status-table aui"><thead><tr><th width="10%">', soy.$$escapeHtml("Status"), '</th><th width="30%">', soy.$$escapeHtml("Summary"), '</th><th width="60%">', soy.$$escapeHtml("Details"), '</th></tr></thead><tbody>');
    var statusLineList127 = opt_data.statusLines;
    var statusLineListLen127 = statusLineList127.length;
    for (var statusLineIndex127 = 0; statusLineIndex127 < statusLineListLen127; statusLineIndex127++) {
      var statusLineData127 = statusLineList127[statusLineIndex127];
      JIRA.Templates.AdminHelper.Common.statusLineRow({statusLine: statusLineData127, hideFailedStatuses: opt_data.hideFailedStatuses}, output);
    }
    output.append('<tbody></table><div class="toggle-conditions-container"><a class="show-failed-conditions" ', (opt_data.hideFailedStatuses == false || opt_data.allGreenStatuses == true) ? 'style="display: none"' : '', '>', soy.$$escapeHtml("Show failed conditions"), '</a><a class="hide-failed-conditions" ', (opt_data.hideFailedStatuses == true || opt_data.allFailedStatuses == true) ? 'style="display: none"' : '', '>', soy.$$escapeHtml("Hide failed conditions"), '</a></div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.Dialogs.PermissionHelper.errorPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ajaxerror"><div class="aui-message ', soy.$$escapeHtml(opt_data.errorClass), '">');
  if (opt_data.errorMessages.length == 1) {
    var msgList152 = opt_data.errorMessages;
    var msgListLen152 = msgList152.length;
    for (var msgIndex152 = 0; msgIndex152 < msgListLen152; msgIndex152++) {
      var msgData152 = msgList152[msgIndex152];
      output.append('<p>', soy.$$escapeHtml(msgData152), '</p>');
    }
  } else {
    output.append('<ul>');
    var msgList159 = opt_data.errorMessages;
    var msgListLen159 = msgList159.length;
    for (var msgIndex159 = 0; msgIndex159 < msgListLen159; msgIndex159++) {
      var msgData159 = msgList159[msgIndex159];
      output.append('<li>', soy.$$escapeHtml(msgData159), '</li>');
    }
    output.append('</ul>');
  }
  output.append('</div></div><div class="buttons-container form-footer"><div class="buttons"><a href="#" class="cancel" id="aui-dialog-close">', soy.$$escapeHtml("Close"), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};

/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/permission-helper-ui.js' */
AJS.namespace("JIRA.PermissionHelper");JIRA.PermissionHelper.PERMISSIONS=[{"name":"Project Permissions","permissions":[{"id":"23","name":"Administer Projects"},{"id":"10","name":"Browse Projects"},{"id":"29","name":"View Development Tools"},{"id":"45","name":"View Read-Only Workflow"}]},{"name":"Issue Permissions","permissions":[{"id":"11","name":"Create Issues"},{"id":"12","name":"Edit Issues"},{"id":"46","name":"Transition Issues"},{"id":"28","name":"Schedule Issues"},{"id":"25","name":"Move Issues"},{"id":"13","name":"Assign Issues"},{"id":"17","name":"Assignable User"},{"id":"14","name":"Resolve Issues"},{"id":"18","name":"Close Issues"},{"id":"30","name":"Modify Reporter"},{"id":"16","name":"Delete Issues"},{"id":"21","name":"Link Issues"},{"id":"26","name":"Set Issue Security"}]},{"name":"Voters & Watchers Permissions","permissions":[{"id":"31","name":"View Voters and Watchers"},{"id":"32","name":"Manage Watchers"}]},{"name":"Comments Permissions","permissions":[{"id":"15","name":"Add Comments"},{"id":"34","name":"Edit All Comments"},{"id":"35","name":"Edit Own Comments"},{"id":"36","name":"Delete All Comments"},{"id":"37","name":"Delete Own Comments"}]},{"name":"Attachments Permissions","permissions":[{"id":"19","name":"Create Attachments"},{"id":"38","name":"Delete All Attachments"},{"id":"39","name":"Delete Own Attachments"}]},{"name":"Time Tracking Permissions","permissions":[{"id":"20","name":"Work On Issues"},{"id":"40","name":"Edit Own Worklogs"},{"id":"41","name":"Edit All Worklogs"},{"id":"42","name":"Delete Own Worklogs"},{"id":"43","name":"Delete All Worklogs"}]}];JIRA.PermissionHelper.PermissionHelperUi={initUi:function(d,b,c){i();var l={};l.searchButton=d.find("input.search");l.searchForm=d.find("form.permissionhelper-search-form");var k=function(o){o.preventDefault();var m=h(d,b);d.find(".error").remove();var n=false;if(!m.params().issueKey){e(AJS.$("#permissionhelper-issue",d),"Please select an issue");n=true}if(!m.params().permissionId){e(AJS.$("#permissionhelper-permission"),"Please select a valid permission");n=true}if(n){return}d.find("#error-message-placeholder").empty();d.find(".field-status-results").remove();d.find(".field-status-placeholder").append(AJS.$(JIRA.Templates.AdminHelper.Common.loadingStatus()));AJS.trigger("analyticsEvent",{name:"adminhelper.permhelper.check",data:{permissionId:m.params().permissionId}});JIRA.SmartAjax.makeRequest({url:contextPath+AJS.format("/rest/whereismycf/1.0/permissions?username={0}&issueKey={1}&permissionId={2}",m.params().username,m.params().issueKey,m.params().permissionId),complete:function(s,u,q){d.find(".status-loading").remove();if(q.successful){var t=q.data;var r=j(t.statusLines);var p=AJS.$(JIRA.Templates.Dialogs.PermissionHelper.resultPage({permissionName:t.permissionName,username:t.username,userDisplayName:t.userDisplayName,issueKey:t.issueKey,projectKey:t.projectKey,projectName:t.projectName,status:t.status,statusLines:r,hideFailedStatuses:g(r),allFailedStatuses:!g(r),allGreenStatuses:a(r),baseUrl:contextPath,permissionSchemeName:t.permissionSchemeName}));d.find(".field-status-placeholder").append(p);if(c){c()}p.delegate(".show-failed-conditions","click",function(v){console.log("SHOWING");v.preventDefault();AJS.$(".statusRow[data-status='red']").show();AJS.$(".show-failed-conditions").hide();AJS.$(".hide-failed-conditions").show();JIRA.PermissionHelper.dialog._positionInCenter()});p.delegate(".hide-failed-conditions","click",function(v){console.log("HIDING");v.preventDefault();AJS.$(".statusRow[data-status='red']").hide();AJS.$(".hide-failed-conditions").hide();AJS.$(".show-failed-conditions").show();JIRA.PermissionHelper.dialog._positionInCenter()})}else{f(d,q)}}})};l.searchForm.submit(k);l.searchButton.click(k);function e(m,n){m.parent().append(AJS.$("<div>").addClass("error").text(n))}function h(m,n){return{permissionId:function(){var o=m.find("#permissionhelper-permission option:selected");if(o.length>0){return o.val()}else{return 10}},paramsForRequest:function(){return n.asRequestParams(this._paramsFromContents())},params:function(){return n.params(this._paramsFromContents())},_paramsFromContents:function(){var r={};var q=m.find("#permissionhelper-user option:selected");if(q.length==1){r.username=q.val()}else{r.username=""}var p=m.find("#permissionhelper-issue option:selected");if(p.length>0){r.issueKey=p.val()}var o=m.find("#permissionhelper-permission option:selected");if(o.length>0){r.permissionId=o.val()}return r}}}function j(p){if(p.length==0){return p}function n(s){var r=[];AJS.$.each(s,function(t,u){r.push(o(u))});return r}function o(s){if(s.parameters.length==0){return AJS.escapeHTML(s.message)}else{var r=m(s.parameters);r.splice(0,0,AJS.escapeHTML(s.message));return AJS.format.apply(this,r)}}function m(s){var r=[];AJS.$.each(s,function(t,u){if(u.type=="plain"){r.push(AJS.escapeHTML(u.value))}else{if(u.type=="link"){r.push(AJS.format("<a href=''{0}'' target=''_blank''>{1}</a>",AJS.escapeHTML(u.href),AJS.escapeHTML(u.text)))}else{if(u.type=="newline"){r.push("<br/>")}else{if(u.type=="tagstart"){r.push("<"+u.tagName+">")}else{if(u.type=="tagend"){r.push("</"+u.tagName+">")}else{throw"Unrecognized parameter type: "+u.type}}}}}});return r}var q=[];AJS.$.each(p,function(t,r){var s={};s.status=r.status;s.required=r.required;s.summary=n(r.summary);s.details=n(r.details);q.push(s)});return q}function g(o){var m=false;var n=false;AJS.$.each(o,function(q,p){if(p.status=="green"){m=true}else{if(p.required){n=true}}});return n?false:m}function a(n){var m=false;AJS.$.each(n,function(p,o){if(o.status=="red"){m=true}});return !m}function f(p,o){var m=false;var r=[];if(o.data){var q=JSON.parse(o.data);if(q.errorMessages&&q.errorMessages.length){r.push(q.errorMessages);m=true}if(q.errors){if(q.errors.issue){e(AJS.$("#permissionhelper-issue",p),q.errors.issue);m=true}if(q.errors.user){e(AJS.$("#permissionhelper-user",p),q.errors.user);m=true}if(q.errors.permission){e(AJS.$("#permissionhelper-permission",p),q.errors.permission);m=true}}}if(!m){r.push(JIRA.SmartAjax.buildSimpleErrorContent(o))}var n=l.searchForm.find("#error-message-placeholder");AJS.$.each(r,function(s,t){AJS.messages.error(n,{body:t,closeable:false})})}function i(){new JIRA.AdminHelper.IssuePicker({element:AJS.$("#permissionhelper-issue"),itemAttrDisplayed:"label",width:500});new AJS.SingleSelect({element:AJS.$("#permissionhelper-permission"),itemAttrDisplayed:"label",width:500})}return l}};
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/permission-helper-dialog.js' */
JIRA.PermissionHelper.PermissionHelperDialog=JIRA.Dialog.extend({_getDefaultOptions:function(){return AJS.$.extend(this._super(),{cached:false,id:"permission-helper-dialog",widthClass:"large",stacked:true})},_setContent:function(c,f){var a=this;if(c){this._super(c,f)}else{var e=this.context().issueKey()||"";var b=this.context().permissionId()||"";this._super(AJS.$(JIRA.Templates.Dialogs.PermissionHelper.searchPage({currentIssueKey:e,currentPermissionId:b,permissionGroups:JIRA.PermissionHelper.PERMISSIONS})),true)}this.get$popupContent().find(".cancel").click(function(g){a.hide();g.preventDefault()});if(JIRA.Dialog.current===this){var d=new JIRA.setFocus.FocusConfiguration();d.context=this.get$popup()[0];d.parentElementSelectors=[".form-body"];JIRA.setFocus.pushConfiguration(d);JIRA.setFocus.triggerFocus()}},decorateContent:function(){var a=this;this.addHeading("Permission Helper");JIRA.PermissionHelper.PermissionHelperUi.initUi(this.get$popupContent(),this.context(),function(){a._positionInCenter()})},show:function(a){if(a){this.context(a)}if(!this.options.context){throw"This class must be initialized with 'context' parameter before calling show()"}this._super()},context:function(a){if(a){this.options.context=a}else{return this.options.context}},hide:function(a){if(this._super(a)===false){return false}JIRA.setFocus.popConfiguration()}});JIRA.PermissionHelper.Context=Class.extend({init:function(a){this.options=a||{}},issueKey:function(a){if(a){this.options.issueKey=a}else{return this.options.issueKey}},permissionId:function(a){if(a){this.options.permissionId=a}else{return this.options.permissionId}},params:function(a){var b=AJS.$.extend({},this.options);if(this._exists(a)){AJS.$.extend(b,a)}return b},asRequestParams:function(a){var c=this.params(a);var b="atl_token="+atl_token();if(this._exists(c.username)){b+="&username="+c.username}if(this._exists(c.issueKey)){b+="&issueKey="+c.issueKey}if(this._exists(c.projectKey)){b+="&projectKey="+c.projectKey}if(this._exists(c.projectId)){b+="&projectId="+c.projectId}if(this._exists(c.issueOperation!==undefined)){b+="&issueOperation="+c.issueOperation}if(this._exists(c.issueTypeId)){b+="&issueTypeId="+c.issueTypeId}return b},_exists:function(a){return typeof(a)!="undefined"}});
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/permission-helper.js' */
(function(d){var c="Permission Helper";JIRA.PermissionHelper.dialog=new JIRA.PermissionHelper.PermissionHelperDialog;d(document).delegate(".permissionhelper-trigger","click",function(e){e.preventDefault();AJS.trigger("analyticsEvent",{name:"adminhelper.permhelper.dialog.open"});JIRA.PermissionHelper.dialog.show(a())});d(function(){var e=d("#permission-helper-admin-page");if(e.length==1){b();AJS.trigger("analyticsEvent",{name:"adminhelper.permhelper.adminpage.open"});e.append(d(JIRA.Templates.Dialogs.PermissionHelper.searchPage({noCloseLink:true,permissionGroups:JIRA.PermissionHelper.PERMISSIONS})));e.trigger(JIRA.Events.NEW_CONTENT_ADDED,[e]);JIRA.PermissionHelper.PermissionHelperUi.initUi(e,new JIRA.PermissionHelper.Context());d("#permissionhelper-user-field").focus()}});function a(){var e=JIRA.Issue.getIssueKey();if(!e&&JIRA.IssueNavigator){e=JIRA.IssueNavigator.getSelectedIssueKey()}return new JIRA.PermissionHelper.Context({issueKey:e,issueOperation:JIRA.PermissionHelper.dialog.OPERATION_VIEW})}function b(){var e=d("#permission-helper-admin-page");e.prepend(d("<h2>").attr("id","admin-page-heading").text(c))}})(AJS.$);
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'templates/notification-helper.soy' */
// This file was automatically generated from notification-helper.soy.
// Please don't edit this file by hand.

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }
if (typeof JIRA.Templates.Dialogs == 'undefined') { JIRA.Templates.Dialogs = {}; }
if (typeof JIRA.Templates.Dialogs.NotificationHelper == 'undefined') { JIRA.Templates.Dialogs.NotificationHelper = {}; }


JIRA.Templates.Dialogs.NotificationHelper.searchPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" class="notificationhelper-search-form aui ajs-dirty-warning-exempt"><div class="content-area-container"><div class="form-body"><div id="error-message-placeholder"></div><div class="action-description">', soy.$$escapeHtml("Find out why users receive, or do not receive notifications for this issue"), '</div><div class="field-group"><label for="notificationhelper-user">', soy.$$escapeHtml("User"), '</label><select id="notificationhelper-user" name="notificationhelper-user" class="single-user-picker js-default-user-picker" data-container-class="long-field"></select><div class=\'description\'>', soy.$$escapeHtml("Begin typing to find a user"), '</div></div><div class="field-group ', (opt_data.currentIssueKey) ? 'hidden' : '', '"><label for="notificationhelper-issue">', soy.$$escapeHtml("Issue"), '</label><select class="aui-field-select select" name="notificationhelper-issue" id="notificationhelper-issue"></select><div class="description">', soy.$$escapeHtml("Begin typing to find an issue"), '</div></div><div class="field-group"><label for="notificationhelper-event">', soy.$$escapeHtml("Notification Event"), '</label><select class="aui-field-select select" name="notificationhelper-event" id="notificationhelper-event">');
  var eventList20 = opt_data.events;
  var eventListLen20 = eventList20.length;
  for (var eventIndex20 = 0; eventIndex20 < eventListLen20; eventIndex20++) {
    var eventData20 = eventList20[eventIndex20];
    output.append('<option ', (eventData20.id == opt_data.defaultEventId) ? 'selected="selected"' : '', ' value="', soy.$$escapeHtml(eventData20.id), '">', soy.$$escapeHtml(eventData20.name), '</option>');
  }
  output.append('</select><div class=\'description\'>', soy.$$escapeHtml("Begin typing to find a notification event or press down to see all"), '</div></div></div><div class="form-body field-status-placeholder" /></div><div class="buttons-container form-footer"><div class="buttons"><input class="button search" type="submit" id="permission-helper-submit" value="', soy.$$escapeHtml("Submit"), '">', (! opt_data.noCloseLink) ? '<a href="#" class="cancel" id="aui-dialog-close">' + soy.$$escapeHtml("Close") + '</a>' : '', '</div></div></form>');
  return opt_sb ? '' : output.toString();
};


JIRA.Templates.Dialogs.NotificationHelper.resultPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-status-results"><div class="aui-message"><ul class="item-details"><li><dl><dt>', soy.$$escapeHtml("Event"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.eventName), '">', soy.$$escapeHtml(opt_data.eventName), '</dd></dl><dl><dt>', soy.$$escapeHtml("User"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.userDisplayName), '">', (opt_data.username != '') ? '<a href="' + soy.$$escapeHtml(opt_data.baseUrl) + '/secure/admin/user/ViewUser.jspa?name=' + soy.$$escapeHtml(opt_data.username) + '">' + soy.$$escapeHtml(opt_data.userDisplayName) + '</a>' : soy.$$escapeHtml(opt_data.userDisplayName), '</dd></dl><dl><dt>', soy.$$escapeHtml("Project"), ': </dt><dd title="', soy.$$escapeHtml(opt_data.projectName), '"><a href="', soy.$$escapeHtml(opt_data.baseUrl), '/browse/', soy.$$escapeHtml(opt_data.projectKey), '">', soy.$$escapeHtml(opt_data.projectName), '</a></dd></dl><dl><dt>', soy.$$escapeHtml("Scheme"), ': </dt><dd title="blah"><a href="', soy.$$escapeHtml(opt_data.baseUrl), '/plugins/servlet/project-config/', soy.$$escapeHtml(opt_data.projectKey), '/notifications">', soy.$$escapeHtml(opt_data.notificationSchemeName), '</a></dd></dl>', (opt_data.issueKey) ? '<dl><dt>' + soy.$$escapeHtml("Issue") + ': </dt><dd title="' + soy.$$escapeHtml(opt_data.issueKey) + '"><a href="' + soy.$$escapeHtml(opt_data.baseUrl) + '/browse/' + soy.$$escapeHtml(opt_data.issueKey) + '">' + soy.$$escapeHtml(opt_data.issueKey) + '</a></dd></dl>' : '', '<dl><dt>', soy.$$escapeHtml("Status"), ': </dt><dd>');
  JIRA.Templates.AdminHelper.Common.statusImage(opt_data, output);
  if (opt_data.status == 'green') {
    output.append(soy.$$escapeHtml(AJS.format("{0} receives notifications for the \x27\x27{1}\x27\x27 event",opt_data.userDisplayName,opt_data.eventName)));
    if (opt_data.userNotifyOwnChanges == false) {
      output.append('<br>');
      JIRA.Templates.AdminHelper.Common.warningImage(null, output);
      output.append(soy.$$escapeHtml(AJS.format("{0} does not get notified of their own changes.",opt_data.userDisplayName)), ' <a target="_blank" href="https://confluence.atlassian.com/display/JIRA/Managing+your+User+Profile#ManagingyourUserProfile-Preferences">', soy.$$escapeHtml("Learn more"), '</a>.');
    }
  } else {
    output.append(soy.$$escapeHtml(AJS.format("{0} does not receive notifications for the \x27\x27{1}\x27\x27 event",opt_data.userDisplayName,opt_data.eventName)));
  }
  output.append('</dd></dl></li></ul></div>');
  if (opt_data.statusLines.length == 0) {
    output.append('<div class="aui-message info"><span class="aui-icon icon-info"></span><p>', soy.$$escapeHtml(AJS.format("There are no details available about the notifications for the \x27\x27{0}\x27\x27 event",opt_data.eventName)), '</p></div>');
  } else {
    output.append('<table class="status-table aui"><thead><tr><th width="10%">', soy.$$escapeHtml("Status"), '</th><th width="30%">', soy.$$escapeHtml("Summary"), '</th><th width="60%">', soy.$$escapeHtml("Details"), '</th></tr></thead><tbody>');
    var statusLineList129 = opt_data.statusLines;
    var statusLineListLen129 = statusLineList129.length;
    for (var statusLineIndex129 = 0; statusLineIndex129 < statusLineListLen129; statusLineIndex129++) {
      var statusLineData129 = statusLineList129[statusLineIndex129];
      JIRA.Templates.AdminHelper.Common.statusLineRow({statusLine: statusLineData129, hideFailedStatuses: opt_data.hideFailedStatuses}, output);
    }
    output.append('<tbody></table><div class="toggle-conditions-container"><a class="show-failed-conditions" ', (opt_data.hideFailedStatuses == false || opt_data.allGreenStatuses == true) ? 'style="display: none"' : '', '>', soy.$$escapeHtml("Show failed conditions"), '</a><a class="hide-failed-conditions" ', (opt_data.hideFailedStatuses == true || opt_data.allFailedStatuses == true) ? 'style="display: none"' : '', '>', soy.$$escapeHtml("Hide failed conditions"), '</a></div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/notification-helper-ui.js' */
AJS.namespace("JIRA.NotificationHelper");JIRA.NotificationHelper.NOTIFICATION_EVENTS=[{"id":1,"isDefault":true,"name":"Issue Created"},{"id":2,"name":"Issue Updated"},{"id":3,"name":"Issue Assigned"},{"id":4,"name":"Issue Resolved"},{"id":5,"name":"Issue Closed"},{"id":6,"name":"Issue Commented"},{"id":14,"name":"Issue Comment Edited"},{"id":17,"name":"Issue Comment Deleted"},{"id":7,"name":"Issue Reopened"},{"id":8,"name":"Issue Deleted"},{"id":9,"name":"Issue Moved"},{"id":10,"name":"Work Logged On Issue"},{"id":11,"name":"Work Started On Issue"},{"id":12,"name":"Work Stopped On Issue"},{"id":15,"name":"Issue Worklog Updated"},{"id":16,"name":"Issue Worklog Deleted"},{"id":13,"name":"Generic Event"}];JIRA.NotificationHelper.defaultEventId=function(){var a;AJS.$(JIRA.NotificationHelper.NOTIFICATION_EVENTS).each(function(){if(this.isDefault){a=this.id}});return a};JIRA.NotificationHelper.NotificationHelperUi={initUi:function(c,k,b){g();var l={};l.searchButton=c.find("input.search");l.searchForm=c.find("form.notificationhelper-search-form");var i=function(o){o.preventDefault();var m=f(c,k);c.find(".error").remove();var n=false;if(!m.params().username){d(AJS.$("#notificationhelper-user",c),"Please select a user");n=true}if(!m.params().issueKey){d(AJS.$("#notificationhelper-issue",c),"Please select an issue");n=true}if(!m.params().eventId){d(AJS.$("#notificationhelper-event",c),"Please select a valid notification event");n=true}if(n){return}c.find("#error-message-placeholder").empty();c.find(".field-status-results").remove();c.find(".field-status-placeholder").append(AJS.$(JIRA.Templates.AdminHelper.Common.loadingStatus()));AJS.trigger("analyticsEvent",{name:"adminhelper.notihelper.check",data:{eventId:m.params().eventId}});JIRA.SmartAjax.makeRequest({url:contextPath+AJS.format("/rest/whereismycf/1.0/notifications?username={0}&issueKey={1}&eventId={2}",m.params().username,m.params().issueKey,m.params().eventId),complete:function(t,u,r){c.find(".status-loading").remove();if(r.successful){var p=r.data;var s=h(p.statusLines);var q=AJS.$(JIRA.Templates.Dialogs.NotificationHelper.resultPage({eventName:p.eventName,username:p.username,userDisplayName:p.userDisplayName,userNotifyOwnChanges:p.userNotifyOwnChanges,issueKey:p.issueKey,projectKey:p.projectKey,projectName:p.projectName,status:p.status,statusLines:s,notificationSchemeName:p.notificationSchemeName,hideFailedStatuses:j(s),allFailedStatuses:!j(s),allGreenStatuses:a(s),baseUrl:contextPath}));c.find(".field-status-placeholder").append(q);if(b){b()}q.delegate(".show-failed-conditions","click",function(v){v.preventDefault();AJS.$(".statusRow[data-status='red']").show();AJS.$(".show-failed-conditions").hide();AJS.$(".hide-failed-conditions").show();if(b){b()}});q.delegate(".hide-failed-conditions","click",function(v){v.preventDefault();AJS.$(".statusRow[data-status='red']").hide();AJS.$(".hide-failed-conditions").hide();AJS.$(".show-failed-conditions").show();if(b){b()}})}else{e(c,r)}}})};l.searchForm.submit(i);l.searchButton.click(i);function d(m,n){m.parent().append(AJS.$("<div>").addClass("error").text(n))}function f(m,n){return{eventId:function(){var o=m.find("#notificationhelper-event option:selected");if(eventId.length>0){return o.val()}else{return JIRA.NotificationHelper.defaultEventId()}},paramsForRequest:function(){return n.asRequestParams(this._paramsFromContents())},params:function(){return n.params(this._paramsFromContents())},_paramsFromContents:function(){var r={};var p=m.find("#notificationhelper-user option:selected");if(p.length==1){r.username=p.val()}var o=m.find("#notificationhelper-issue option:selected");if(o.length>0){r.issueKey=o.val()}var q=m.find("#notificationhelper-event option:selected");if(q.length>0){r.eventId=q.val()}return r}}}function h(p){if(p.length==0){return p}function n(s){var r=[];AJS.$.each(s,function(t,u){r.push(o(u))});return r}function o(s){if(s.parameters.length==0){return AJS.escapeHTML(s.message)}else{var r=m(s.parameters);r.splice(0,0,AJS.escapeHTML(s.message));return AJS.format.apply(this,r)}}function m(s){var r=[];AJS.$.each(s,function(t,u){if(u.type=="plain"){r.push(AJS.escapeHTML(u.value))}else{if(u.type=="link"){r.push(AJS.format("<a href=''{0}'' target=''_blank''>{1}</a>",AJS.escapeHTML(u.href),AJS.escapeHTML(u.text)))}else{if(u.type=="newline"){r.push("<br/>")}else{if(u.type=="tagstart"){r.push("<"+u.tagName+">")}else{if(u.type=="tagend"){r.push("</"+u.tagName+">")}else{throw"Unrecognized parameter type: "+u.type}}}}}});return r}var q=[];AJS.$.each(p,function(t,r){var s={};s.status=r.status;s.summary=n(r.summary);s.details=n(r.details);q.push(s)});return q}function j(n){var m=false;AJS.$.each(n,function(p,o){if(o.status=="green"){m=true;return false}});return m}function a(n){var m=false;AJS.$.each(n,function(p,o){if(o.status=="red"){m=true}});return !m}function e(p,o){var m=false;var r=[];if(o.data){var q=JSON.parse(o.data);if(q.errorMessages&&q.errorMessages.length){r.push(q.errorMessages);m=true}if(q.errors){if(q.errors.issue){d(AJS.$("#notificationhelper-issue",p),q.errors.issue);m=true}if(q.errors.user){d(AJS.$("#notificationhelper-user",p),q.errors.user);m=true}if(q.errors.event){d(AJS.$("#notificationhelper-event",p),q.errors.event);m=true}}}if(!m){r.push(JIRA.SmartAjax.buildSimpleErrorContent(o))}var n=l.searchForm.find("#error-message-placeholder");AJS.$.each(r,function(s,t){AJS.messages.error(n,{body:t,closeable:false})})}function g(){new JIRA.AdminHelper.IssuePicker({element:AJS.$("#notificationhelper-issue"),itemAttrDisplayed:"label",width:500});new AJS.SingleSelect({element:AJS.$("#notificationhelper-event"),itemAttrDisplayed:"label",width:500})}return l}};
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/notification-helper-dialog.js' */
JIRA.NotificationHelper.NotificationHelperDialog=JIRA.Dialog.extend({_getDefaultOptions:function(){return AJS.$.extend(this._super(),{cached:false,id:"permission-helper-dialog",widthClass:"large",stacked:true})},_setContent:function(b,e){var a=this;if(b){this._super(b,e)}else{var d=this.context().issueKey()||"";this._super(AJS.$(JIRA.Templates.Dialogs.NotificationHelper.searchPage({currentIssueKey:d,events:JIRA.NotificationHelper.NOTIFICATION_EVENTS,defaultEventId:JIRA.NotificationHelper.defaultEventId()})),true)}this.get$popupContent().find(".cancel").click(function(f){a.hide();f.preventDefault()});if(JIRA.Dialog.current===this){var c=new JIRA.setFocus.FocusConfiguration();c.context=this.get$popup()[0];c.parentElementSelectors=[".form-body"];JIRA.setFocus.pushConfiguration(c);JIRA.setFocus.triggerFocus()}},decorateContent:function(){var a=this;this.addHeading("Notification Helper");JIRA.NotificationHelper.NotificationHelperUi.initUi(this.get$popupContent(),this.context(),function(){a._positionInCenter()})},show:function(a){if(a){this.context(a)}if(!this.options.context){throw"This class must be initialized with 'context' parameter before calling show()"}this._super()},context:function(a){if(a){this.options.context=a}else{return this.options.context}},hide:function(a){if(this._super(a)===false){return false}JIRA.setFocus.popConfiguration()}});JIRA.NotificationHelper.Context=Class.extend({init:function(a){this.options=a||{}},issueKey:function(a){if(a){this.options.issueKey=a}else{return this.options.issueKey}},eventId:function(a){if(a){this.options.permissionId=a}else{return this.options.eventId}},params:function(a){var b=AJS.$.extend({},this.options);if(this._exists(a)){AJS.$.extend(b,a)}return b},asRequestParams:function(a){var c=this.params(a);var b="atl_token="+atl_token();if(this._exists(c.username)){b+="&username="+c.username}if(this._exists(c.issueKey)){b+="&issueKey="+c.issueKey}if(this._exists(c.projectKey)){b+="&projectKey="+c.projectKey}if(this._exists(c.projectId)){b+="&projectId="+c.projectId}if(this._exists(c.issueOperation!==undefined)){b+="&issueOperation="+c.issueOperation}if(this._exists(c.issueTypeId)){b+="&issueTypeId="+c.issueTypeId}return b},_exists:function(a){return typeof(a)!="undefined"}});
/* module-key = 'com.atlassian.jira.plugins.jira-admin-helper-plugin:whereismycf-resources', location = 'js/notification-helper.js' */
(function(d){var c="Notification Helper";JIRA.NotificationHelper.dialog=new JIRA.NotificationHelper.NotificationHelperDialog;d(document).delegate(".notificationhelper-trigger","click",function(e){e.preventDefault();AJS.trigger("analyticsEvent",{name:"adminhelper.notihelper.dialog.open"});JIRA.NotificationHelper.dialog.show(a())});d(function(){var e=d("#notification-helper-admin-page");if(e.length==1){b();AJS.trigger("analyticsEvent",{name:"adminhelper.notihelper.adminpage.open"});e.append(d(JIRA.Templates.Dialogs.NotificationHelper.searchPage({noCloseLink:true,events:JIRA.NotificationHelper.NOTIFICATION_EVENTS,defaultEventId:JIRA.NotificationHelper.defaultEventId()})));e.trigger(JIRA.Events.NEW_CONTENT_ADDED,[e]);JIRA.NotificationHelper.NotificationHelperUi.initUi(e,new JIRA.NotificationHelper.Context());d("#notificationhelper-user-field").focus()}});function a(){var e=JIRA.Issue.getIssueKey();if(!e&&JIRA.IssueNavigator){e=JIRA.IssueNavigator.getSelectedIssueKey()}return new JIRA.NotificationHelper.Context({issueKey:e,issueOperation:JIRA.NotificationHelper.dialog.OPERATION_VIEW})}function b(){var e=d("#notification-helper-admin-page");e.prepend(d("<h2>").attr("id","admin-page-heading").text(c))}})(AJS.$);
