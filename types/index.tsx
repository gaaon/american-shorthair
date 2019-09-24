import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type LinkItem = {
  link: string,
  label: string,
  icon?: IconProp,
  as?: string,
};

export type Website = {
  name: string
  url: string
};
