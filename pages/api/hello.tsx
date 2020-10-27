/* req is an instance of http.IncomingMessage, 
plus some pre-built middlewares you can see here.
res is an instance of http.ServerResponse, 
plus some helper functions you can see here.*/

// export default (req, res) => {
//   res.status(200).json({ text: "Hello" });
// };


import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
}