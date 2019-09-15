({
    doInit : function(component, event, helper) {
    var action = component.get("c.getlocation");
    action.setCallback(this, function(a) {
     component.set("v.job_application__c.location__c", a.getReturnValue());
    });
    $A.enqueueAction(action); 
  }
})