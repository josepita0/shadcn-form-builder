import { create } from "zustand";

interface IAppConfig {
  ENV: {
    IS_PRODUCTION: boolean;
    API_URL: string;
  };
  LOCALE_ENVS: {
    API_URL: string;
    SELF_URL: string;
  };
  IS_ACTIVE: {
    true: {
      label: string;
      value: boolean;
    };
    false: {
      label: string;
      value: boolean;
    };
  };
}

interface IServiceConfigStore {
  messages: {
    error: string | null;
    success: string | null;
  };

  APP_CONFIG: IAppConfig | null;
  setAppConfig: (data: IAppConfig) => void;
}

export const useServicesConfigStore = create<IServiceConfigStore>((set) => ({
  messages: {
    error: null,
    success: null,
  },

  APP_CONFIG: null,
  setAppConfig: (data) => set({ APP_CONFIG: data }),
}));
