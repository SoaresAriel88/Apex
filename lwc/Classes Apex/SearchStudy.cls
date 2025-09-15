public class SearchStudy {
  
@AuraEnabled(cacheable=true)
  public static List<Study__c> searchStatus(String status){

    List<Study__c> studyList = new List<Study__c>();
    
    if(status == 'Todos'){
        studyList = [SELECT Name, Status__c FROM Study__c];
    } else if (status == 'Ativo'){
        studyList = [SELECT Name, Status__c FROM Study__c WHERE Status__c = 'Ativo'];
    } else if (status == 'Inativo'){
        studyList = [SELECT Name, Status__c FROM Study__c WHERE Status__c = 'Inativo'];
    }
      return studyList;
}   

  


    }



