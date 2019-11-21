import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonRouterOutlet,
  IonIcon,
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton
} from "@ionic/react";
import { Home } from "./Home";
import { IonReactRouter } from "@ionic/react-router";
import { home, exit } from "ionicons/icons";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router";

const SignedInComp = (props: any) => {
  const { user } = props;
  const signOut = () => Auth.signOut();

  const routeTabClicked = (route: string) => (e: any) => {
    // e.preventDefault();
    // console.log(`forced navigate: ${route}`);
    // console.log({ props });
    // props.history.push(`/${route}`);
  };

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path="/home"
            render={props => <Home user={user} />}
            exact={true}
          />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton
            className="navTab"
            tab="home"
            href="/home"
            onClick={routeTabClicked("home")}
          >
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton className="navTab" tab="signout" onClick={signOut}>
            <IonIcon icon={exit} />
            <IonLabel>Exit</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export const SignedIn = withRouter(SignedInComp);
