public with sharing class SearchTeacher {

    @AuraEnabled(cacheable=true)
    public static List<Teacher__c> searchTeacherName(){
         List<Teacher__c> nameTeacherList = [SELECT Id, Name FROM Teacher__c];
        
        return nameTeacherList;
    }

     @AuraEnabled(cacheable=true)
    public static List<Course__c> searchCourseName(Id professorId){
         List<Course__c> nameCourseList = [SELECT Id, Name FROM Course__c WHERE Professor__c = :professorId];

         return nameCourseList;

    
        }
     @AuraEnabled(cacheable=true)
    public static List<Study__c> searchStudyName(Id courseId){
         List<Study__c> nameStudyList = [SELECT Id, Name FROM Study__c WHERE Curso__r.Professor__r.Id = :courseId];

         System.debug('NameStudyList: ' + nameStudyList);
         
         return nameStudyList;    
        }

}
