({
	setResult : function(component, helper) {
        
        var calculoRealizado = component.get("v.primeiroValor") + component.get("v.operacao") + component.get("v.segundoValor");
        var resultado = component.get("v.resultado");
        
		component.set("v.CalculoRealizado", calculoRealizado);
        
        var action = component.get("c.registraCalculo");
        action.setParams({
            calculoRealizado: calculoRealizado,
            resultado: resultado
        });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                alert('sucesso!');
            }
        });
        
        $A.enqueueAction(action);
	}
})