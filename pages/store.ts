import { observable } from 'mobx';
import { NextPageContext } from 'next-server/dist/lib/utils';
import cookie from 'cookie';
import Cookies from 'js-cookie';

const createSettingStore = (ctx: NextPageContext) => {
  let isHomeAnimActive: string | undefined;

  if (ctx.req) {
    const headers = ctx.req.headers;
    const ctxCookie = cookie.parse(headers.cookie || '');
    isHomeAnimActive = ctxCookie['isHomeAnimActive'];
  } else {
    isHomeAnimActive = Cookies.get('isHomeAnimActive');
  }

  return observable({
    isHomeAnimActive,
  });
};

export const createRootStore = (ctx: NextPageContext) => observable({
  setting: createSettingStore(ctx),
});

