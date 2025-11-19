trigger VeiculoTrigger on Veiculo__c (before update) {

    for(Veiculo__c v : Trigger.new){
        if(v.Eletrico__c == 'Sim'){
            
        }else{
            
        }
    }
}