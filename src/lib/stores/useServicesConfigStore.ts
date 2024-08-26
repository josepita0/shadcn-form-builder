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

const defatultConfig: IAppConfig = {
  ENV: {
    IS_PRODUCTION: process?.env?.NEXT_PUBLIC_ENV === "prod",
    API_URL: process?.env?.NEXT_PUBLIC_API_URL,
  },
  LOCALE_ENVS: {
    API_URL: process?.env?.NEXT_PUBLIC_API_URL,
    SELF_URL: process?.env?.NEXT_PUBLIC_FRONT_URL,
  },
  IS_ACTIVE: {
    true: { label: "Activo", value: true },
    false: { label: "Bloqueado", value: false },
  },
};

interface IServiceConfigStore {
  messages: {
    error: string | null;
    success: string | null;
  };

  APP_CONFIG: IAppConfig;
  setAppConfig: (data: IAppConfig) => void;
}

export const useServicesConfigStore = create<IServiceConfigStore>((set) => ({
  messages: {
    error: null,
    success: null,
  },

  APP_CONFIG: defatultConfig,
  setAppConfig: (data) => set({ APP_CONFIG: data }),
}));
