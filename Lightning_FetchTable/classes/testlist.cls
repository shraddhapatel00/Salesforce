public class testlist {
    AggregateResult[] loc = [select location__c from job_application__c group by location__c];
public static AggregateResult[] getlocation() {
    return [select location__c from job_application__c group by location__c]; 
  }
}