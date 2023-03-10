import { NextApiHandler } from "next";
import { ChannelType } from "../../../models/channelModel";

export type ChannelsResponse = Required<ChannelType>[]

const channelsHandler: NextApiHandler<ChannelsResponse> = (req, res) => {
  res.json([])
}


export default channelsHandler