/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
    priority
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
    priority
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
    priority
  }
}
`;
export const onCreateDd = `subscription OnCreateDd {
  onCreateDd {
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
export const onUpdateDd = `subscription OnUpdateDd {
  onUpdateDd {
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
export const onDeleteDd = `subscription OnDeleteDd {
  onDeleteDd {
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
export const onCreateCustomer = `subscription OnCreateCustomer {
  onCreateCustomer {
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
export const onUpdateCustomer = `subscription OnUpdateCustomer {
  onUpdateCustomer {
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
export const onDeleteCustomer = `subscription OnDeleteCustomer {
  onDeleteCustomer {
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
export const onCreateEnergyTransfer = `subscription OnCreateEnergyTransfer {
  onCreateEnergyTransfer {
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
export const onUpdateEnergyTransfer = `subscription OnUpdateEnergyTransfer {
  onUpdateEnergyTransfer {
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
export const onDeleteEnergyTransfer = `subscription OnDeleteEnergyTransfer {
  onDeleteEnergyTransfer {
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
export const onCreateEnergyTransferEvent = `subscription OnCreateEnergyTransferEvent {
  onCreateEnergyTransferEvent {
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
export const onUpdateEnergyTransferEvent = `subscription OnUpdateEnergyTransferEvent {
  onUpdateEnergyTransferEvent {
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
export const onDeleteEnergyTransferEvent = `subscription OnDeleteEnergyTransferEvent {
  onDeleteEnergyTransferEvent {
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
export const onCreateEnergyAccount = `subscription OnCreateEnergyAccount {
  onCreateEnergyAccount {
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
export const onUpdateEnergyAccount = `subscription OnUpdateEnergyAccount {
  onUpdateEnergyAccount {
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
export const onDeleteEnergyAccount = `subscription OnDeleteEnergyAccount {
  onDeleteEnergyAccount {
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
export const onCreateEnergyAccountEvent = `subscription OnCreateEnergyAccountEvent {
  onCreateEnergyAccountEvent {
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
export const onUpdateEnergyAccountEvent = `subscription OnUpdateEnergyAccountEvent {
  onUpdateEnergyAccountEvent {
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
export const onDeleteEnergyAccountEvent = `subscription OnDeleteEnergyAccountEvent {
  onDeleteEnergyAccountEvent {
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
export const onCreateEnergyReading = `subscription OnCreateEnergyReading {
  onCreateEnergyReading {
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
export const onUpdateEnergyReading = `subscription OnUpdateEnergyReading {
  onUpdateEnergyReading {
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
export const onDeleteEnergyReading = `subscription OnDeleteEnergyReading {
  onDeleteEnergyReading {
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
