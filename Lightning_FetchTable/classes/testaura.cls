public class testaura {
  @AuraEnabled 
  public static AggregateResult[] getlocation() {
    return [select Location__c from job_application__c group by location__c]; 
  }
    @AuraEnabled 
  public static AggregateResult[] getposition() {
    return [select Position_name__c from job_application__c group by Position_name__c]; 
  }
      @AuraEnabled 
  public static list<Job_application__c> getdetails(string myselect1,string myselect2) {
     
      return [select Location__c,Position_name__c,No_of_applied__c,No_of_Selected__c,Year__c
            from job_application__c where
            Location__c = :myselect1 and Position_name__c = :myselect2 ]; 
  }
}