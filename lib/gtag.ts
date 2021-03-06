export const GA_TRACKING_ID = 'UA-146790367-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  (<any>window).gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {action: string, category: string, label: string, value: number}) => {
  (<any>window).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
