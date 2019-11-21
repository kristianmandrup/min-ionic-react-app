import { Auth } from "aws-amplify";

export function authUser(dispatch: any, { setUser }: any) {
  Auth.currentAuthenticatedUser()
    .then(authUser => {
      const { attributes } = authUser;
      const user = {
        ...attributes
      };
      // update store
      dispatch({ type: "USER", user });

      setUser && setUser(user);
    })
    .catch(err => console.log(err));
}
