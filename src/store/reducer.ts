export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ENERGY_TRANSFER_EVENTS":
      return { ...state, energyTransferEvents: action.energyTransferEvents };
    case "ENERGY_TRANSFER_EVENT_CREATED":
      return {
        ...state,
        lastTransferEventCreated: action.energyTransferEvent,
        energyTransferEvents: [
          ...state.energyTransferEvents,
          action.energyTransferEvent
        ]
      };
    case "USER":
      return { ...state, user: action.user };
    case "CUSTOMER":
      return { ...state, customer: action.customer };
    case "DD_ITEMS":
      return { ...state, dds: action.dds };
    case "DD_CREATED":
      return { ...state, dds: [...state.dds, action.dd] };
    default:
      return state;
  }
};
