namespace hospital{
    export class Paciente extends Pessoa{
        private codPaciente: number;

        getCodPaciente(): number{
            return this.codPaciente;
        }

        setCodPaciente(codPaciente:number): void{
            this.codPaciente = codPaciente;
        }
    }
}