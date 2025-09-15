public with sharing class SearchTeacher {
    @AuraEnabled(cacheable=true)
    public static List<Study__c> searchStudyAndCurso(Id professorId) {

        List<Study__c> teacherList = new List<Study__c>();
        
    
        teacherList = [SELECT Name, Curso__r.Name, Curso__r.Professor__r.Name
						FROM Study__c WHERE Curso__r.Professor__c = :professorId];
                        
        return teacherList;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Teacher__c> searchTeacherName(){
         List<Teacher__c> nameTeacherList = new List<Teacher__c>();
        
        nameTeacherList = [SELECT Id, Name FROM Teacher__c];
    
        return nameTeacherList;
    }



}
