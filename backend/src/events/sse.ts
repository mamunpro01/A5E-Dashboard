import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const send = () => {

        const payload = {

            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            node: process.version

        };

        res.write(`data: ${JSON.stringify(payload)}\n\n`);

    };

    send();

    const timer = setInterval(send,1000);

    req.on("close",()=>{

        clearInterval(timer);

    });

});

export default router;
