import express from 'express';
import {Error} from "mongoose";
import Link from "../models/Link";
import {LinkWithoutId} from "../types";

const linkRouter = express.Router();

linkRouter.post('/', async (req, res, next) => {
    try {
        const alphabet = 'abcdefghijklmnopqrstABCDEFGHIJKLMNOPQRST';
        let randomStr = '';
        let uniq = false;
        let link;

        while (!uniq) {
            for (let i = 0; i < 7; i++) {
                randomStr += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            }

            const existLink = await Link.find({shortUrl: randomStr});
            if (!existLink[0]) {
                uniq = true;

                const newLink: LinkWithoutId = {
                    originalUrl: req.body.originalUrl,
                    shortUrl: randomStr,
                };

                link = new Link(newLink);
                await link.save();
            }
        }
        res.send(link);
    } catch (error) {
        if (error instanceof Error.ValidationError) {
            res.status(400).send(error);
        }
        next(error);
    }
});

export default linkRouter;