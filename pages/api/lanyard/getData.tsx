import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const lanyard = await (await fetch(`https://api.lanyard.rest/v1/users/${process.env.DISCORD_USER_ID}`)).json();
    const data = {
        user: {
            id: lanyard.data.discord_user.id,
            username: lanyard.data.discord_user.username,
            discriminator: lanyard.data.discord_user.discriminator,
            avatar: lanyard.data.discord_user.avatar,
            status: lanyard.data.discord_status,
            activities: lanyard.data.activities,
        },
        active: {
            mobile: lanyard.data.active_on_discord_mobile,
            desktop: lanyard.data.active_on_discord_desktop,
            web: lanyard.data.active_on_discord_web,
        },
        success: lanyard.success,
    }
    res.status(200).json(data);
}