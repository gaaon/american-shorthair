import { NextApiRequest, NextApiResponse } from 'next-server/dist/lib/utils';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).end('{}');
};
