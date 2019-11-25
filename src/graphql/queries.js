/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    priority
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      priority
    }
    nextToken
  }
}
`;
export const getDd = `query GetDd($id: ID!) {
  getDd(id: $id) {
    id
    user
    bank
    sortCode
    accountNumber
    accountName
    debitStartDate
    debitEndDate
    debitAmountPence
    debitPeriod
    debitFrequency
  }
}
`;
export const listDds = `query ListDds($filter: ModelDdFilterInput, $limit: Int, $nextToken: String) {
  listDds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user
      bank
      sortCode
      accountNumber
      accountName
      debitStartDate
      debitEndDate
      debitAmountPence
      debitPeriod
      debitFrequency
    }
    nextToken
  }
}
`;

export const getCustomerByEmail = `query GetCustomerByEmail(
  $email: String
  $sortDirection: ModelSortDirection
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  getCustomerByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      energyTransfer {
        id
        activationCode
         events(sortDirection: ASC) {
          items{
            id
            eventDateTime
            eventType
            eventMetaData
          }
        }
      }      energyAccounts {
        nextToken
      }
    }
    nextToken
  }
}
`;

export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    name
    email
    energyTransfer {
      id
      activationCode
      customer {
        id
        name
        email
      }
      events {
        nextToken
      }
    }
    energyAccounts {
      items {
        id
        energyType
        accountName
        nextBillDate
      }
      nextToken
    }
  }
}
`;
export const listCustomers = `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      energyTransfer {
        id
        activationCode
      }
      energyAccounts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEnergyTransfer = `query GetEnergyTransfer($id: ID!) {
  getEnergyTransfer(id: $id) {
    id
    activationCode
    customer {
      id
      name
      email
      energyTransfer {
        id
        activationCode
      }
      energyAccounts {
        nextToken
      }
    }
    events {
      items {
        id
        eventDateTime
        eventType
        eventMetaData
      }
      nextToken
    }
  }
}
`;
export const listEnergyTransfers = `query ListEnergyTransfers(
  $filter: ModelEnergyTransferFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnergyTransfers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      activationCode
      customer {
        id
        name
        email
      }
      events {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEnergyTransferEvent = `query GetEnergyTransferEvent($id: ID!) {
  getEnergyTransferEvent(id: $id) {
    id
    eventDateTime
    eventType
    eventMetaData
    energyTransfer {
      id
      activationCode
      customer {
        id
        name
        email
      }
      events {
        nextToken
      }
    }
  }
}
`;
export const listEnergyTransferEvents = `query ListEnergyTransferEvents(
  $filter: ModelEnergyTransferEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnergyTransferEvents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      eventDateTime
      eventType
      eventMetaData
      energyTransfer {
        id
        activationCode
      }
    }
    nextToken
  }
}
`;
export const getEnergyAccount = `query GetEnergyAccount($id: ID!) {
  getEnergyAccount(id: $id) {
    id
    energyType
    accountName
    nextBillDate
    customer {
      id
      name
      email
      energyTransfer {
        id
        activationCode
      }
      energyAccounts {
        nextToken
      }
    }
    readings {
      items {
        id
        readingDateTime
        reading
        readingFileLocation
      }
      nextToken
    }
    events {
      items {
        id
        eventDateTime
        eventType
        eventMetaData
      }
      nextToken
    }
  }
}
`;
export const listEnergyAccounts = `query ListEnergyAccounts(
  $filter: ModelEnergyAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnergyAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      energyType
      accountName
      nextBillDate
      customer {
        id
        name
        email
      }
      readings {
        nextToken
      }
      events {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEnergyAccountEvent = `query GetEnergyAccountEvent($id: ID!) {
  getEnergyAccountEvent(id: $id) {
    id
    eventDateTime
    eventType
    eventMetaData
    energyAccount {
      id
      energyType
      accountName
      nextBillDate
      customer {
        id
        name
        email
      }
      readings {
        nextToken
      }
      events {
        nextToken
      }
    }
  }
}
`;
export const listEnergyAccountEvents = `query ListEnergyAccountEvents(
  $filter: ModelEnergyAccountEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnergyAccountEvents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      eventDateTime
      eventType
      eventMetaData
      energyAccount {
        id
        energyType
        accountName
        nextBillDate
      }
    }
    nextToken
  }
}
`;
export const getEnergyReading = `query GetEnergyReading($id: ID!) {
  getEnergyReading(id: $id) {
    id
    readingDateTime
    reading
    readingFileLocation
    energyAccount {
      id
      energyType
      accountName
      nextBillDate
      customer {
        id
        name
        email
      }
      readings {
        nextToken
      }
      events {
        nextToken
      }
    }
  }
}
`;
export const listEnergyReadings = `query ListEnergyReadings(
  $filter: ModelEnergyReadingFilterInput
  $limit: Int
  $nextToken: String
) {
  listEnergyReadings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      readingDateTime
      reading
      readingFileLocation
      energyAccount {
        id
        energyType
        accountName
        nextBillDate
      }
    }
    nextToken
  }
}
`;
