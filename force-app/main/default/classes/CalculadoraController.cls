public class CalculadoraController {
    
    @AuraEnabled
    public static void registraCalculo(String calculoRealizado, String resultado){
        
        Historico_de_Calculo__c hc = new Historico_de_Calculo__c();
        hc.Calculo_Realizado__c = calculoRealizado;
        hc.Resultado_do_Calculo__c = resultado;
        
        insert hc; 
    }

    @AuraEnabled(cacheable=true)
    public static List<String> getCars(){
        List<Veiculo__c> cars = [SELECT Name FROM Veiculo__c];
        List<String> carNames = new List<String>();
        for(Veiculo__c car : cars){
            carNames.add(car.Name);
        }

        return carNames;
    }

    @AuraEnabled
    public static void insertAccount(String name){
        
        Account acc = new Account();
        acc.Name = name;
        insert acc;
    }
}