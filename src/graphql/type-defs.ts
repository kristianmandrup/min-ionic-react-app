import gql from "graphql-tag";

// enum DebitPeriod {
//   DAY
//   WEEK
//   MONTH
//   YEAR
// }

// enum EnergyType {
//   ELECTRICITY
//   GAS
//   OIL
// }

// enum EnergyTransferEventType{
//   SWITCH_STARTED
//   OBJECTION
//   OBJECTION_RESOLVED
//   SWITCH_DATE_AGREED
//   SWITCH_COMPLETE
// }

// enum EnergyAccountEventType{
//   METER_READING_REQUESTED
//   METER_READING_SUBMITTED
//   BILL_DATE_NOTIFICATION
// }

// type Todo @model {
//   id: ID!
//   name: String!
//   description: String
//   priority: String
// }

// type Dd @model {
//   id: ID!
//   user: String!
//   bank: String!
//   sortCode: Int!
//   accountNumber: Int!
//   accountName: String!
//   debitStartDate: String!
//   debitEndDate: String
//   debitAmountPence: Int!
//   debitPeriod: DebitPeriod!
//   debitFrequency: Int!
// }

// type Customer @model {
//   id: ID!
//   name: String!
//   email: String!
//   energyTransfer: EnergyTransfer @connection(name: "EnergyTransfer")
//   energyAccounts: [EnergyAccount] @connection(name: "EnergyAccounts")
// }

// type EnergyTransfer @model {
//   id: ID!
//   activationCode: String!
//   customer: Customer @connection(name: "EnergyTransfer")
//   events: [EnergyTransferEvent] @connection(name: "EnergyTransferEvents")
// }

// type EnergyTransferEvent @model {
//   id: ID!
//   eventDateTime: String!
//   eventType: EnergyTransferEventType!
//   eventMetaData: String!
//   energyTransfer: EnergyTransfer @connection(name: "EnergyTransferEvents")
// }

// type EnergyAccount @model {
//   id: ID!
//   energyType: EnergyType!
//   accountName: String!
//   nextBillDate: String
//   customer: Customer @connection(name: "EnergyAccounts")
//   readings: [EnergyReading] @connection(name: "Readings")
//   events: [EnergyAccountEvent]  @connection(name: "EnergyAccountEvents")
// }

// type EnergyAccountEvent @model {
//   id: ID!
//   eventDateTime: String!
//   eventType: EnergyAccountEventType!
//   eventMetaData: String!
//   energyAccount: EnergyAccount @connection(name: "EnergyAccountEvents")
// }

const EnergyReading = gql`
  type EnergyReading @model {
    id: ID!
    readingDateTime: String!
    reading: String!
    readingFileLocation: String
    energyAccount: EnergyAccount @connection(name: "Readings")
  }
`;
