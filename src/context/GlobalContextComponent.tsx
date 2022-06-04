import React, { useMemo, useReducer } from "react";
import { VideoResolution } from "types";

export enum Locale {
  En = "en_GB",
  Uk = "uk_UA",
}

interface GlobalState {
  isRecording: boolean;
  isStartedPreview: boolean;
  isStreaming: boolean;
  userId: string;
  imageUrl: string;
  currentResolution: VideoResolution;
}

interface ICreateContext {
  globalState: GlobalState;
  dispatch: React.Dispatch<Partial<GlobalState>>;
}

export const GlobalContext = React.createContext<ICreateContext>({
  globalState: {
    isRecording: false,
    isStartedPreview: false,
    isStreaming: false,
    userId: "",
    imageUrl: "",
    currentResolution: VideoResolution.Q480,
  },
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
      isStartedPreview: false,
      isStreaming: false,
      userId: "",
      imageUrl: "",
      currentResolution: VideoResolution.Q480,
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
