import { NextApiHandler } from "next";
import { ZodError } from "zod";
import { userModel, userSchema, UserType } from "../../../models/userModel";

// export type LoginApiRequestBody = {
//   username: UserType['username'],
//   email: UserType['email'],
//   password: UserType['password']
// }

const loginApiHandler: NextApiHandler = async (req, res) => {
  const parsedData = userSchema
    .pick({ email: true, password: true }).strict().safeParse(req.body);

  if (parsedData.success === false) {
    return res.status(400).json({
      error: parsedData.error,
    });
  }

  const { data } = parsedData;
  const user = await userModel.findOne(data);
  if (!user) {
    return res.status(401).json({
      error: {
        issues: [
          {
            "code": "incorrect_credentials",
            "message": "Email or password is incorrect",
            "path": ["email", "password"]
          }
        ],
        name: "LoginError"
      }
    })
  }
  res.json(user);
};

export default loginApiHandler;
