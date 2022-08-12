// yes

export interface IEmail {}
export class EmailImpl implements IEmail {}

export interface IEmailService {
    enviarEmail(email: IEmail): void;
}

export class BaseController { }

export class InserirUsuarioControllerImpl extends BaseController {
    constructor(private _emailService: IEmailService) {
        super();
     }

    protected enviarEmail(): void {
        const email = new EmailImpl();
        this._emailService.enviarEmail(email);
    }
}