let pacientes = [];

function exibirPacientes() {
    document.getElementById("outLista").textContent = pacientes.join("\n");
}

function adicionarPaciente() {
    let nomePaciente = document.getElementById("inPaciente").value.trim();
    if (nomePaciente !== "") {
        pacientes.push(nomePaciente);
        exibirPacientes();
        document.getElementById("inPaciente").value = "";  
    }
}

function marcarComoUrgente() {
    let nomePaciente = document.getElementById("outAtendimento").textContent;
    let indicePaciente = pacientes.indexOf(nomePaciente);
    if (indicePaciente !== -1) {
        pacientes.splice(indicePaciente, 1);
        pacientes.unshift(nomePaciente);
        exibirPacientes();
    }
}

function atenderPaciente() {
    if (pacientes.length > 0) {
        let pacienteAtendido = pacientes.shift();
        document.getElementById("outAtendimento").textContent = pacienteAtendido;
        exibirPacientes();
    } else {
        document.getElementById("outAtendimento").textContent = "";
    }
}

document.getElementById("btnAdicionar").addEventListener("click", adicionarPaciente);
document.getElementById("btnUrgencia").addEventListener("click", marcarComoUrgente);
document.getElementById("btnAtender").addEventListener("click", atenderPaciente);
