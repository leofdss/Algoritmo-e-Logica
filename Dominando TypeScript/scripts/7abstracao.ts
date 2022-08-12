interface IMeuUsuario {
    nome: string;
    email: string;
    telefone: string;
}

abstract class AbstractNotificacao {
    protected abstract enviar(usuario: IMeuUsuario): boolean;
    a(): boolean {
        return this.enviar({} as IMeuUsuario);
    }
}

class Email extends AbstractNotificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(usuario);
        return true;
    }
}

class SMS extends AbstractNotificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(usuario);
        return true;
    }
}

const email: Email = new Email();
email.enviar({
    nome: 'nome',
    email: 'nome@empresa',
    telefone: 'telefone'
});
