import React, { createContext } from 'react';

import { useLocalStore } from 'mobx-react';

import {AppContext} from 'next/app';

import {createSettingStore, hydrateSetting, SettingStore} from './setting';
import {createLinkStore, LinkStore} from './link';
// import {createLinkStore} from './link';

export const StoreContext = createContext<RootStore | null>(null);

export interface RootStore {
  setting: SettingStore;
  link: LinkStore;
}

export const createData = (appCtx: AppContext): RootStore => {
  return {
    setting: createSettingStore(hydrateSetting(appCtx.ctx)),
    link: createLinkStore(),
  };
};


let rootStore: RootStore;
export const initializeData = (initialData = rootStore || {}): RootStore => {
  let { setting: { isHomeAnimActive = true } = {}, link } = initialData;

  return {
    setting: createSettingStore({isHomeAnimActive}),
    link,
  }
};

export const InjectStoreContext: React.FC<{initialData: RootStore}> = ({ children, initialData }) => {
  rootStore = useLocalStore(() => initializeData(initialData));

  if (rootStore == null) return null;

  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  )
};

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error("useStore: !store, did you forget StoreProvider?");
  }
  return store;
};