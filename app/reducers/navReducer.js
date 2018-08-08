import { NavigationActions } from "react-navigation";
import { RootNavigator } from "../components/AppNavigator";

const firstAction = RootNavigator.router.getActionForPathAndParams("HomeScreen");
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(tempNavState);

const NavReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case "HomeScreen":
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "HomeScreen" }),
        state
      );
      break;
    case "DetailsScreen":
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "DetailsScreen" }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default NavReducer;
