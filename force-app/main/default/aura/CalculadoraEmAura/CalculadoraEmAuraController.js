({
	executeAdicao : function(component, event, helper) {
        
		var primeiroValor = component.get("v.primeiroValor");
        var segundoValor = component.get("v.segundoValor");
        
        var resultado = Number(primeiroValor) + Number(segundoValor);
        
        component.set("v.resultado", resultado);
        component.set("v.operacao", "+");

        helper.setResult(component, helper);
	},
    
    executeSubtracao : function(component, event, helper) {
		var primeiroValor = component.get("v.primeiroValor");
        var segundoValor = component.get("v.segundoValor");
        
        var resultado = Number(primeiroValor) + Number(segundoValor);
        
        component.set("v.resultado", resultado);
        component.set("v.operacao", "-");

        helper.setResult(component, helper);
	},
    
    executeMultiplicao : function(component, event, helper) {
		var primeiroValor = component.get("v.primeiroValor");
        var segundoValor = component.get("v.segundoValor");
        
        var resultado = Number(primeiroValor) + Number(segundoValor);
        
        component.set("v.resultado", resultado);
        component.set("v.operacao", "*");

        helper.setResult(component, helper);
	},
    
    executeDivisao : function(component, event, helper) {
		var primeiroValor = component.get("v.primeiroValor");
        var segundoValor = component.get("v.segundoValor");
        
        var resultado = Number(primeiroValor) + Number(segundoValor);
        
        component.set("v.resultado", resultado);
        component.set("v.operacao", "/");

        helper.setResult(component, helper);
	},
})