// not

export class BaseController {}
export class SendGridService {
    sendMail(email: Email): void {
        console.log("email", email)
    }
}
export class Email {}

export class InserirUsuarioController extends BaseController {
    constructor(private _sendGridService: SendGridService) {
        super();
    }

    protected enviarEmail(): void {
        const email = new Email();
        this._sendGridService.sendMail(email)
    }
}

const x = new SendGridService();
const a = new InserirUsuarioController(x);
