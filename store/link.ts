import {LinkItem} from '../types';
import {observable} from 'mobx';

export interface LinkStore {
  internalLinks: Array<LinkItem>
}

export const createLinkStore = (): LinkStore => observable({
  internalLinks: [
    {link: '/intro', label: '소개', icon: 'far fa-smile-wink'},
    {link: '/service', label: '서비스', icon: 'far fa-lightbulb'},
    {link: '/laboratory', label: '실험실', icon: 'fas fa-flask'},
    // {link: '/blog', label: '블로그', icon: 'fas fa-blog'},
  ],
});
