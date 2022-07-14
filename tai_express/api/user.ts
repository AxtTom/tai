import { Express } from 'express';

export function UserApi(app: Express) {
    app.post('/api/user', async (req, res) => {

    });

    app.post('/api/auth', async (req, res) => {
        if (req.body.pin && req.body.pin != '') {
            const user = await global.users.findOne({ pin: req.body.pin });
            if (user) {
                res.json({
                    name: user.name,
                    admin: user.admin
                });
            }
            else {
                res.status(401)
            }
        }
        else {
            res.status(401)
        }
        res.end();
    });
}