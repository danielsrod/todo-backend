interface IReturnHandler {
    status: boolean;
    message: string;
    data: any;
}

export class DefaultReturnHandler {
    status: boolean;
    message: string;
    data: any;
    constructor(props: IReturnHandler) {
        const { status, message, data } = props;
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export class DefaultControllerCatchHandler {
    status: boolean;
    message: string;
    data: any;
    constructor(props: IReturnHandler) {
        const { status, message, data } = props;
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
