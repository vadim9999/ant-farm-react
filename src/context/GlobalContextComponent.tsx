import React, { createContext, useMemo, useReducer } from "react";

interface GlobalState {
  isRecording: boolean;
}

interface ICreateContext {
  globalState: GlobalState;
  dispatch: React.Dispatch<Partial<GlobalState>>;
}

export const GlobalContext = React.createContext<ICreateContext>({
  globalState: { isRecording: false },
  dispatch: () => {},
});

interface IGlobalContextComponent {
  children: React.ReactNode;
}

const GlobalContextComponent = ({ children }: IGlobalContextComponent) => {
  const [globalState, dispatch] = useReducer(
    (
      prevGlobalState: GlobalState,
      nextGlobalState: Partial<GlobalState>
    ): GlobalState => ({
      ...prevGlobalState,
      ...nextGlobalState,
    }),
    {
      isRecording: false,
    }
  );
  const contextValue = useMemo(() => {
    return { globalState, dispatch };
  }, [globalState, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextComponent;
