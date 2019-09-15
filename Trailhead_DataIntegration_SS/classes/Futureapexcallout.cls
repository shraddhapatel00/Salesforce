public class Futureapexcallout{

  @future(Callout=true)
  public static void apexcallout(){
    
     // Instantiate a new http object
    Http h = new Http();
    
    // Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
    HttpRequest req = new HttpRequest();
    String requestURL='https://sb-integration-pms.herokuapp.com/projects';
    
    req.setEndpoint(requestURL);
    req.setMethod('POST');

   req.setHeader('Content-Type', 'application/json;charset=UTF-8');
// Set the body as a JSON object
      req.setBody('{"opportunityId": "00641000004EKmFAAW",  "opportunityName": "Super-Duper Big Deal",  "accountName": "ACME Corp, Inc.",  "closeDate": "2016-10-30",  "amount": 150000}');
     
  }

}