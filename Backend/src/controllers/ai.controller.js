const aiService = require("../services/ai.service.js");


module.exports.getReview = async (req, res) => {
    const code  = req.body.code;
    console.error("Error: generateContent called with invalid prompt:", code);

    if(!code) {
        console.error("Error: generateContent called with invalid prompt:", code);
        return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await aiService.generateContent(code);

    res.send(response);
}