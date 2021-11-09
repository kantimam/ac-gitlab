import { IClient } from "../activecollab-node-sdk/src/constants/types";

let acClient: any = null;

function setClient(client: IClient) {
    (acClient as IClient) = client;
}

export default { acClient, setClient };