({
	doInit : function(component, event, helper) {
        var locationName= component.get("c.getlocation");
            locationName.setCallback(this, function(response) {
            var state = response.getState();
              
            if (state === "SUCCESS") {
                var apexResponse=response.getReturnValue();
                //set response to attribute value
                console.log('***'+JSON.stringify(apexResponse));
                                 
                component.set("v.locationlist",apexResponse);
            }else if(state === "ERROR"){
                var errors = response.getError();
                console.error(errors);
                alert('Problem with connection. Contact your system administrator.');
            }
           
        });
        $A.enqueueAction(locationName);
        
       var positionName= component.get("c.getposition");
            positionName.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var apexResponse=response.getReturnValue();
                //set response to attribute value
                console.log('***'+JSON.stringify(apexResponse));
                component.set("v.positionlist",apexResponse);
               
            }else if(state === "ERROR"){
                var errors = response.getError();
                console.error(errors);
                alert('Problem with connection. Contact your system administrator.');
            }
           
        });
        $A.enqueueAction(positionName);
		
	
},

	toggle: function (component, event, helper) {
        
        var sel1 = component.find("myselect1").get("v.value");
        var sel2 = component.find("myselect2").get("v.value");
        var details= component.get("c.getdetails");
        if(sel2 !== "myselect2"){
        component.set("v.posname",sel2);
        }
        details.setParams({
            myselect1:sel1,
            myselect2:sel2
        });
         
         details.setCallback(this, function(response) {
            var state = response.getState();
            
            if (state === "SUCCESS") {
                var apexResponse=response.getReturnValue();
                //set response to attribute value
                
                console.log('***'+JSON.stringify(apexResponse));
                
                component.set("v.details",apexResponse);
                var totalselected = 0;
                var totalapplied = 0;
                
                for(var i=0; i < apexResponse.length; i++){
                    console.log(apexResponse);
                     totalselected = apexResponse[i].No_of_Selected__c + totalselected;
                    
                    component.set("v.sumsel",totalselected);
                     totalapplied = apexResponse[i].No_of_applied__c + totalapplied;
                    
                    component.set("v.sumapp",totalapplied);
                }
                
                    }else if(state === "ERROR"){
                var errors = response.getError();
                console.error(errors);
                alert('Problem with connection. Contact your system administrator.');
            }
             
          });
        $A.enqueueAction(details);
    }
         })