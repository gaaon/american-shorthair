import { NextApiRequest, NextApiResponse } from 'next-server/dist/lib/utils';

import { constants } from 'http2';

import statusApi from '../status';

const {
  HTTP_STATUS_OK,
  HTTP2_HEADER_CONTENT_TYPE
} = constants;

describe('Status api', function () {
  it('should return 200 status and empty json body.', function () {
    const req: jest.Mocked<NextApiRequest> = {} as any;
    const res: jest.Mocked<NextApiResponse> = {
      setHeader: jest.fn(),
      status: jest.fn(),
      end: jest.fn(),
    } as any;

    res.status.mockImplementation((_: number) => res);
    statusApi(req, res);

    const setHeaderMockCalls = res.setHeader.mock.calls;
    expect(setHeaderMockCalls.length).toEqual(1);
    expect(setHeaderMockCalls[0]).toEqual([ HTTP2_HEADER_CONTENT_TYPE, 'application/json']);

    const statusMockCalls = res.status.mock.calls;
    expect(statusMockCalls.length).toEqual(1);
    expect(statusMockCalls[0][0]).toEqual(HTTP_STATUS_OK);

    const endMockCalls = res.end.mock.calls;
    expect(endMockCalls.length).toEqual(1);
    expect(endMockCalls[0][0]).toEqual('{}');
  });
});
