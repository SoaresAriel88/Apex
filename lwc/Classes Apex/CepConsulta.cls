public with sharing class CepConsulta {
    
    public static CepResultado cepConsultation(String cep){

       
    
        
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://viacep.com.br/ws/'+cep+'/json/');
        req.setMethod('GET');
        
        HttpResponse res = http.send(req);

        CepResultado resposta = (CepResultado)JSON.deserialize(res.getBody(), CepResultado.class);

        System.debug('O retorno foi' + resposta.logradouro);
        
        return resposta;
    
    
    }

    
}