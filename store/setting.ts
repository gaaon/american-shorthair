import { action, observable } from 'mobx';

import { NextPageContext } from 'next';

import cookie from 'cookie';
import Cookies from 'js-cookie';

export interface Setting {
  isHomeAnimActive: boolean;
}

export interface SettingStore extends Setting {
  toggleAnimActive: () => void;
}

export const hydrateSetting = (ctx: NextPageContext): Setting => {
  let isHomeAnimActive: string | undefined;

  if (ctx.req) {
    const headers = ctx.req.headers;
    const ctxCookie = cookie.parse(headers.cookie || '');
    isHomeAnimActive = ctxCookie['isHomeAnimActive'];
  } else {
    isHomeAnimActive = Cookies.get('isHomeAnimActive');
  }

  return {
    isHomeAnimActive: isHomeAnimActive === undefined || isHomeAnimActive === 'true',
  };
};

export const createSettingStore = ({ isHomeAnimActive }: Setting): SettingStore => {
  const store = observable({
    isHomeAnimActive: isHomeAnimActive,
    toggleAnimActive() {
      store.isHomeAnimActive = !store.isHomeAnimActive;
      Cookies.set('isHomeAnimActive', (store.isHomeAnimActive) + '');
    },
  }, {
    toggleAnimActive: action,
  });

  return store;
};
