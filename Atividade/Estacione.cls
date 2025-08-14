public class Estacione {
	 
    public class Car{
    	String model;
         
         public car(String model){
         	this.model = model;   
         }
    }
    
    
    Map<String, Car> mapCarByVague = new Map<String, Car>();
    
   
        
    public void addEstacione(String location, Car currentCar){
      Boolean verifyVague = this.mapCarByVague.containsKey(location);
         if(verifyVague == true){
             System.debug('Vai bater ouxi');
         } else{
             System.debug('Oia tem vaguinha');
              mapCarByVague.put(location, currentCar);
         }
   	}
    
    public void getCar(String location) {
        System.debug(this.mapCarByVague.get(location));
    }
}
