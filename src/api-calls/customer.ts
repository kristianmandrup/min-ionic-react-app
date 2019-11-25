import API, { graphqlOperation } from "@aws-amplify/api";
import { getCustomerByEmail } from "../graphql/queries";

export async function getCustomerDataByEmail(dispatch: any, { user }: any) {
  if (!user) return;
  const { email } = user;
  if (!email) {
    console.error("getCustomerDataByEmail", "missing email", { user });
    throw new Error("getCustomerDataByEmail: user missing email");
  }
  try {
    const payload: any = await API.graphql(
      graphqlOperation(getCustomerByEmail, {
        email: email
      })
    );
    const firstResult = payload;
    const customers = firstResult.data.getCustomerByEmail.items;
    const customer = customers[0];
    const events = customer.energyTransfer.events;
    const energyTransferEvents = events.items;
    dispatch({ type: "ENERGY_TRANSFER_EVENTS", energyTransferEvents });
    dispatch({ type: "CUSTOMER", customer });
  } catch (e) {
    console.error({ e });
    return;
  }
}
