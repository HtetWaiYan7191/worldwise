import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  isLogIn: false,
  currentUser: null,
  signupUsers: [],
  errorMessage: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "signup":
      return {
        ...state,
        errorMessage: "",
        signupUsers: [...state.signupUsers, action.payload],
      };
    case "signupFailed":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "logInSuccess":
      return {
        ...state,
        errorMessage: "",
        isLogIn: true,
        currentUser: action.payload,
      };
    case "logInFail":
      return {
        ...state,
        errorMessage: action.payload,
        isLogIn: false,
      };
      case "logout":
        return{
            ...initialState,
            signupUsers: state.signupUsers,
            errorMessage: ""
        }
    default:
      throw new Error("cannot find the type in reducer :(");
  }
}
function AuthProvider({ children }) {
  const [{ isLogIn, currentUser, signupUsers, errorMessage }, dispatch] =
    useReducer(reducer, initialState);

  function login(email, password) {
    if (signupUsers.length < 0) {
      dispatch({
        type: "logInFail",
        payload: " We cannot find your account 😞. Did you sign up already ?🤔",
      });
      return false;
    }

    const existedUsers = signupUsers.map((user) => user.email);
const index = existedUsers.indexOf(email);

if (index === -1) {
  dispatch({ type: "logInFail", payload: "User not found ☹️" });
  return false;
} else {
  const userInfo = signupUsers[index];
  if (userInfo.password === password) {
    dispatch({ type: "logInSuccess", payload: { email, password } });
    return true;
  } else {
    dispatch({ type: "logInFail", payload: "Incorrect password ☹️" });
    return false;
  }
}
  }

  function signup(email, password) {
    if (!email || !password) return;
    const existedUsers = signupUsers.map((user) => user.email);
    if (existedUsers.includes(email)) {
      dispatch({ type: "signupFailed", payload: "User already existed 🤔" });
      return false;
    } else {
      dispatch({ type: "signup", payload: { email, password } });
      return true;
    }
  }

  function logout() {
    dispatch({type: 'logout'})
    return true;
  }
  return (
    <AuthContext.Provider
      value={{ isLogIn, currentUser, signupUsers, errorMessage, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Authcontext was used outside the Auth Provider");
  return context;
}

export { AuthProvider, useAuth };
