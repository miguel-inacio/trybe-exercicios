let estadoProcessoSeletivo = "aprovada";

switch (estadoProcessoSeletivo){
  case "aprovada":
    console.log("Você foi aprovada!!!");
    break;
  case "lista":
    console.log("Você está na lista de espera!");
    break;
  case "reprovada":
    console.log("Você foi reprovada D:");
    break;
  default:
    console.log("não se aplica");
}