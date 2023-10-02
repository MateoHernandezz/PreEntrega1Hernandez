let nombre = prompt("Bienvenido a nuestro servicio de cotización de planes de redes sociales. Por favor, ingresa tu nombre:");
let presupuesto = Number(prompt(`Hola ${nombre}, ingresa tu presupuesto en pesos:`));
let eleccion = "";

function cotizarPlan(presupuesto, plan) {
    let calculo = presupuesto - plan.precio;
    let reservar = prompt(`El costo por el ${plan.nombre} es de $${plan.precio} pesos. Te sobra un total de $${calculo} pesos.\n¿Deseas reservar este plan?\n\nInstrucciones: Presiona aceptar o escribe "si" para reservarlo, o escribe "no" para revisar otras opciones.`).toLowerCase();

    if (reservar == "si" || reservar == "") {
        alert(`Reservaste el ${plan.nombre} con éxito. Pasa a pagar $${plan.precio} pesos.\nGracias por elegir nuestros servicios.`);
    } else {
        alert("Regresando al menú...");
    }
}

function eleccionPlan() {
    do {
        eleccion = prompt(`${nombre}, tu presupuesto es de: $${presupuesto} pesos. ¿En cuál de las opciones estás interesado?\n1) Plan Básico: $35,000\n2) Plan Medio: $40,000\n3) Plan Premium: $60,000\n4) Plan Emprendedor: $20,000 - $25,000\n5) Plan Personalizado\n6) Cerrar programa`);

        switch (eleccion) {
            case "1":
                cotizarPlan(presupuesto, { nombre: "Plan Básico", precio: 35000 });
                break;
            case "2":
                cotizarPlan(presupuesto, { nombre: "Plan Medio", precio: 40000 });
                break;
            case "3":
                cotizarPlan(presupuesto, { nombre: "Plan Premium", precio: 60000 });
                break;
            case "4":
                let presupuestoEmprendedor = Number(prompt("Por favor, ingresa tu presupuesto específico para el Plan Emprendedor (entre $20,000 y $25,000 MXN):"));
                if (presupuestoEmprendedor >= 20000 && presupuestoEmprendedor <= 25000) {
                    cotizarPlan(presupuesto, { nombre: "Plan Emprendedor", precio: presupuestoEmprendedor });
                } else {
                    alert("Presupuesto fuera del rango del Plan Emprendedor.");
                }
                break;
            case "5":
                alert("Contamos con planes personalizados. Por favor, contáctanos para más información.");
                break;
            case "6":
                alert("Gracias por visitarnos. Vuelve pronto.");
                break;
            default:
                alert("Entrada inválida.");
        }
    } while (eleccion !== "6");
}

eleccionPlan();