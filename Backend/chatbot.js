const express = require("express");
const router = express.Router();

// Map of responses for specific keywords
const responses = {
    anxiety: "It's okay to feel anxious sometimes. Let's take some deep breaths together.",
    depression: "Depression can be tough. Remember, you are not alone, and help is available.",
    fatigue: "Feeling fatigued? Rest and self-care are important for recovery.",
    worry: "Try to focus on what you can control and let go of the rest. I'm here to help.",
    sadness: "It's okay to feel sad. Allow yourself to process those emotions.",
    hopelessness: "Even when things seem bleak, remember that there's always a way forward.",
    fear: "Fear can be overwhelming. Try grounding exercises to stay in the present moment.",
    nervousness: "Nervousness is natural. Try to take slow, deep breaths.",
    restlessness: "Channel restlessness into small, productive actions to ease your mind.",
    anger: "Anger can be powerful. Take a moment to calm down and think things through.",
    frustration: "Take a step back and reassess the situation. You’ve got this!",
    loneliness: "Loneliness can be hard. Consider reaching out to a loved one or friend.",
    guilt: "Guilt is a heavy burden. Reflect on it and strive for self-forgiveness.",
    shame: "You are more than your mistakes. Practice self-compassion.",
    irritability: "Try identifying the triggers and addressing them one at a time.",
    confusion: "Confusion can be a sign to pause and reflect before moving forward.",
    tension: "Relaxation techniques like stretching or meditation may help relieve tension.",
    overwhelmed: "Break things down into small, manageable steps. You’re doing great.",
    panic: "Ground yourself with the 5-4-3-2-1 technique: name five things you see, four you can touch, etc.",
    sleeplessness: "A bedtime routine can help. Avoid screens before sleep and try reading.",
    agitation: "Take deep breaths and find a quiet place to center yourself.",
    helplessness: "Even when you feel helpless, remember that support is always available.",
    "mood swings": "Mood swings are normal. Keep track of them to better understand triggers.",
    "loss of interest": "Try small activities that once made you happy. Progress takes time.",
    "crying spells": "Crying can be a good release. It’s okay to let your emotions flow.",
    "lack of focus": "Break tasks into smaller steps and eliminate distractions when possible.",
    stress: "Stress is normal. Take breaks, stay hydrated, and practice self-care.",
    apprehension: "Anticipation can be hard. Focus on what you can control right now.",
    exhaustion: "Prioritize rest and ask for help if needed. Your well-being matters.",
    trauma: "Trauma is deep and personal. Consider seeking professional help to heal.",
    uneasiness: "Pause and reflect. What’s causing this feeling? Let's address it together.",
    "low self-esteem": "You are valuable and deserve kindness from yourself.",
    perfectionism: "Remember, progress is better than perfection. Be kind to yourself.",
    burnout: "Take time to rest and focus on self-care to recharge.",
    distrust: "Building trust takes time. Start with small steps and honesty.",
    isolation: "Reach out to someone you trust or consider joining a supportive group.",
    apathy: "Apathy can signal deeper emotions. Explore what might be behind it.",
    "nervous breakdown": "Seek immediate support. You are not alone in this.",
    "emotional numbness": "Numbness is your mind’s way of protecting you. Take it slow.",
    "social withdrawal": "Social connections can heal. Start with small interactions.",
    pessimism: "Shift focus to small positives. What went right today?",
    "suicidal thoughts": "Please reach out to a professional or trusted person. Your life is precious.",
    "self-doubt": "Trust yourself. You’ve overcome challenges before, and you can do it again.",
    "chronic worry": "Long-term worry drains energy. Write down concerns and focus on solutions.",
    unworthiness: "You are deserving of love and respect. Believe in your value.",
    hypervigilance: "Pause and breathe. Try to focus on the present moment.",
    "racing thoughts": "Slow down. Write your thoughts to organize them.",
    anguish: "It’s okay to feel deep pain. Seek solace in supportive company.",
    disconnection: "Reconnect by engaging in an activity you enjoy.",
    obsessiveness: "Focus on grounding exercises to center your thoughts.",
    impatience: "Patience grows with practice. Take small steps.",
    "loss of motivation": "Start with small tasks to regain momentum.",
    "irrational fear": "Challenge fear with facts. You’re stronger than you think.",
    selfblame: "Blaming yourself won’t change the past. Forgive yourself and move forward.",
    overthinking: "Overthinking? Distract yourself with an enjoyable activity.",
    "today is not a good day": "I'm sorry you're having a tough day. Let’s talk about how I can support you.",
    "i had an argument with someone": "Arguments can be draining. Try to calm yourself before revisiting the situation.",
    "i feel stressed and need help": "Stress can be overwhelming. Take a moment to breathe and let’s work through it.",
    "i'm not sure how i feel": "That’s okay. Take your time to understand your emotions. I’m here to listen.",
    default: "I'm here to help. Could you share more about how you're feeling?"
};

// Handle chatbot POST requests
router.post("/", (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Message text is required" });
    }

    // Match the user's message with predefined keywords
    const keyword = Object.keys(responses).find((key) => text.toLowerCase().includes(key));

    // Respond with the corresponding message or a default response
    const response = keyword ? responses[keyword] : responses.default;

    res.json({ response, emotion: keyword || "default" });
});

module.exports = router;
