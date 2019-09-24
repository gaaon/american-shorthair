import { NextApiRequest, NextApiResponse } from 'next-server/dist/lib/utils';

import { constants } from 'http2';

const {
  HTTP2_HEADER_CONTENT_TYPE,
  HTTP_STATUS_OK
} = constants;

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(HTTP2_HEADER_CONTENT_TYPE, 'application/json');
  res.status(HTTP_STATUS_OK).end('{}');
};
