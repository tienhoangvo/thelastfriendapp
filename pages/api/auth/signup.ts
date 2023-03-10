import { NextApiHandler } from "next";
import { userModel, userSchema } from "../../../models/userModel";

const signupApiHandler: NextApiHandler = async (req, res) => {
  const parsedData = userSchema.pick({
    "email": true,
    "username": true,
    "password": true
  }).safeParse(req.body)

  if (parsedData.success === false) {
    return res.status(400).json({
      error: parsedData.error
    })
  }

  const { data } = parsedData

  let newUser = { ...data, createdAt: new Date() }

  await userModel.insertOne(newUser)

  res.json(newUser)
}

export default signupApiHandler