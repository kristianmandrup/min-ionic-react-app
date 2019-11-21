import Amplify from "aws-amplify";
import API from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
API.configure(awsconfig);
PubSub.configure(awsconfig);

export { Amplify, API, PubSub };
