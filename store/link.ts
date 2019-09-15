import {LinkItem} from '../types';
import {observable} from 'mobx';

import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faSmileWink, faLightbulb } from '@fortawesome/free-regular-svg-icons';

export interface LinkStore {
  internalLinks: Array<LinkItem>
}

export const createLinkStore = (): LinkStore => observable({
  internalLinks: [
    {link: '/intro', label: '소개', icon: faSmileWink},
    {link: '/service', label: '서비스', icon: faLightbulb},
    {link: '/laboratory', label: '실험실', icon: faFlask},
    // {link: '/blog', label: '블로그', icon: 'fas fa-blog'},
  ],
});
