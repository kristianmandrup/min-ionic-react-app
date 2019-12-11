/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
    priority
  }
}
`;
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    name
    description
    priority
  }
}
`;
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    id
    name
    description
    priority
  }
}
`;
export const createDd = `mutation CreateDd($input: CreateDdInput!) {
  createDd(input: $input) {
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
export const updateDd = `mutation UpdateDd($input: UpdateDdInput!) {
  updateDd(input: $input) {
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
export const deleteDd = `mutation DeleteDd($input: DeleteDdInput!) {
  deleteDd(input: $input) {
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
export const createCustomer = `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
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
export const updateCustomer = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
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
export const deleteCustomer = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
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
export const createEnergyTransfer = `mutation CreateEnergyTransfer($input: CreateEnergyTransferInput!) {
  createEnergyTransfer(input: $input) {
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
export const updateEnergyTransfer = `mutation UpdateEnergyTransfer($input: UpdateEnergyTransferInput!) {
  updateEnergyTransfer(input: $input) {
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
export const deleteEnergyTransfer = `mutation DeleteEnergyTransfer($input: DeleteEnergyTransferInput!) {
  deleteEnergyTransfer(input: $input) {
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
export const createEnergyTransferEvent = `mutation CreateEnergyTransferEvent($input: CreateEnergyTransferEventInput!) {
  createEnergyTransferEvent(input: $input) {
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
export const updateEnergyTransferEvent = `mutation UpdateEnergyTransferEvent($input: UpdateEnergyTransferEventInput!) {
  updateEnergyTransferEvent(input: $input) {
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
export const deleteEnergyTransferEvent = `mutation DeleteEnergyTransferEvent($input: DeleteEnergyTransferEventInput!) {
  deleteEnergyTransferEvent(input: $input) {
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
export const createEnergyAccount = `mutation CreateEnergyAccount($input: CreateEnergyAccountInput!) {
  createEnergyAccount(input: $input) {
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
export const updateEnergyAccount = `mutation UpdateEnergyAccount($input: UpdateEnergyAccountInput!) {
  updateEnergyAccount(input: $input) {
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
export const deleteEnergyAccount = `mutation DeleteEnergyAccount($input: DeleteEnergyAccountInput!) {
  deleteEnergyAccount(input: $input) {
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
export const createEnergyAccountEvent = `mutation CreateEnergyAccountEvent($input: CreateEnergyAccountEventInput!) {
  createEnergyAccountEvent(input: $input) {
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
export const updateEnergyAccountEvent = `mutation UpdateEnergyAccountEvent($input: UpdateEnergyAccountEventInput!) {
  updateEnergyAccountEvent(input: $input) {
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
export const deleteEnergyAccountEvent = `mutation DeleteEnergyAccountEvent($input: DeleteEnergyAccountEventInput!) {
  deleteEnergyAccountEvent(input: $input) {
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
export const createEnergyReading = `mutation CreateEnergyReading($input: CreateEnergyReadingInput!) {
  createEnergyReading(input: $input) {
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
export const updateEnergyReading = `mutation UpdateEnergyReading($input: UpdateEnergyReadingInput!) {
  updateEnergyReading(input: $input) {
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
export const deleteEnergyReading = `mutation DeleteEnergyReading($input: DeleteEnergyReadingInput!) {
  deleteEnergyReading(input: $input) {
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
