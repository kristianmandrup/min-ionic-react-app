import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { IonApp } from "@ionic/react";
import "./styling";
import { useReducer, useState } from "react"; // using hooks
import { reducer } from "./store";
import { authUser } from "./user";
// import { Auth } from "aws-amplify";
import "./configuration";
import { withAuthenticator } from "aws-amplify-react";
import { SignedIn, NotSignedIn } from "./pages";

const initialState = {};

const authenticate = async (dispatch: any, { setUser }: any) => {
  // await Auth.signIn(cognitoUser.email, cognitoUser.password);
  authUser(dispatch, { setUser });
};

const InnerApp = (props: any) => {
  const { user } = props;
  return user ? (
    <SignedIn {...props} user={user} />
  ) : (
    <NotSignedIn {...props} />
  );
};

const App: React.FC = (props: any) => {
  // eslint-disable-next-line
  const [_, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState();
  useEffect(() => {
    if (!user) authenticate(dispatch, { setUser });
  }, [user]);
  return (
    <BrowserRouter>
      <IonApp>
        <InnerApp {...props} user={user} />
      </IonApp>
    </BrowserRouter>
  );
};

export const AuthApp = withAuthenticator(App, true);
