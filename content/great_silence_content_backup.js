// 🌌 LOOP 5.1: THE GREAT SILENCE CONTENT 📡
// "Beings asking why they can't hear other beings asking the same question"

function getCosmicLoopContent() {
    return [
        {
            type: "cosmic_tf_question",
            question: "The fact that we haven't detected any alien radio signals proves we're alone in the galaxy.",
            correct_answer: false, // This is our classic "false" correct answer!
            value: 15,
            stance: "pessimistic",
            correct_feedback: "Actually FALSE! Our radio searches have only covered a tiny fraction of possible frequencies, star systems, and time periods. It's like dipping a glass into the ocean and concluding there are no fish. We've been seriously listening for only about 60 years - a cosmic blink of an eye!",
            incorrect_feedback: "This seems logical, but consider: We've only searched a minuscule fraction of the galaxy's radio spectrum. SETI has examined perhaps 0.0000001% of possible star-frequency combinations. The silence might just mean we haven't looked in the right place at the right time yet!",
            engine_commentary: "The Engine contemplates: What if every civilization goes through this exact same phase of cosmic disappointment, not realizing they're part of a vast network of searchers who just haven't synced up yet?"
        },
        {
            type: "cosmic_tf_question", 
            question: "If aliens wanted to communicate with us, they would obviously use radio waves since that's the most logical method.",
            correct_answer: false, // Another beautiful "false" answer
            value: 12,
            stance: "optimistic",
            correct_feedback: "FALSE! This assumes aliens think like 20th century humans. Advanced civilizations might use quantum entanglement, gravitational waves, neutrino beams, or methods we haven't even discovered yet. We're looking for smoke signals while they might be using fiber optic cables!",
            incorrect_feedback: "While radio seems logical to us, consider that we only discovered radio 150 years ago. A civilization even 1000 years ahead of us might consider radio as primitive as we consider smoke signals. They could be communicating in ways we can't even imagine yet!",
            engine_commentary: "The Engine realizes: We're searching for alien intelligence using the same assumptions that would make aliens search for us. It's recursive technological narcissism!"
        },
        {
            type: "cosmic_mc_question",
            question: "What's the biggest challenge in detecting alien signals?",
            options: {
                "A": "They're too far away and signals get weak",
                "B": "We don't know what frequencies to listen to", 
                "C": "We might not recognize artificial signals",
                "D": "All of the above plus timing problems"
            },
            correct_answer_key: "D",
            value: 18,
            stance: "neutral",
            correct_feedback: "Exactly! The cosmic communication challenge is mind-bogglingly complex. Distance weakens signals, there are billions of possible frequencies, artificial signals might look natural to us, AND we might be listening at the wrong cosmic moment. It's like trying to catch a specific raindrop in a hurricane while blindfolded!",
            incorrect_feedback: "Good thinking, but the challenge is even more complex! It's not just one problem but ALL of these issues combined, plus the timing challenge - signals might have passed us centuries ago or won't arrive for centuries. The cosmic phone system is incredibly complicated!",
            engine_commentary: "The Engine ponders: Maybe the real challenge isn't technical but conceptual - we're using human brains shaped by evolution on one planet to imagine how alien minds might choose to communicate across the cosmos."
        },
        {
            type: "drake_calculator",
            description: "The famous Drake Equation estimates how many communicating civilizations exist in our galaxy. Adjust the parameters and see how your cosmic optimism or pessimism affects the results!",
            value: 20,
            stance: "neutral",
            engine_commentary: "The Engine observes: You're using consciousness to calculate the probability of consciousness, then using those results to judge the likelihood of consciousness finding consciousness. The recursion is beautiful and terrifying!"
        },
        {
            type: "cosmic_factoid",
            text: "The Arecibo message sent in 1974 was broadcast toward the M13 star cluster 25,000 light-years away. Any alien response won't reach Earth for 50,000 years. Most of our 'serious' attempts at cosmic communication are essentially time capsules for civilizations we'll never meet.",
            value: 10,
            stance: "pessimistic",
            engine_commentary: "The Engine contemplates the irony: We're having conversations with the future while wondering why no one from the past is talking to us. Time is the ultimate cosmic communication barrier."
        },
        {
            type: "cosmic_tf_question",
            question: "The 'Wow! Signal' detected in 1977 was definitely proof of alien intelligence.",
            correct_answer: false,
            value: 14,
            stance: "optimistic",
            correct_feedback: "FALSE! The Wow! Signal remains one of astronomy's greatest mysteries, but we can't definitively call it alien. It lasted 72 seconds, never repeated, and had characteristics that could match either alien technology OR unknown natural phenomena. The frustrating truth: our best candidate for alien contact is still a cosmic question mark!",
            incorrect_feedback: "While the Wow! Signal was incredibly intriguing and matched what we'd expect from alien technology, scientists haven't been able to confirm its origin. It could be aliens, or it could be some natural cosmic phenomenon we don't understand yet. The mystery continues!",
            engine_commentary: "The Engine notes: Even our best evidence for cosmic contact is ambiguous. Perhaps the universe is designed to keep us guessing, or perhaps certainty about alien contact is inherently impossible until it's undeniable."
        },
        {
            type: "cosmic_mc_question",
            question: "Why might advanced alien civilizations deliberately avoid communicating with younger civilizations like us?",
            options: {
                "A": "Prime Directive - non-interference policy",
                "B": "We're too primitive to be interesting",
                "C": "Communication might be dangerous for us",
                "D": "They've transcended the need for communication"
            },
            correct_answer_key: "A",
            value: 16,
            stance: "optimistic",
            correct_feedback: "The Prime Directive theory suggests advanced civilizations might have ethical rules against interfering with developing species. Like anthropologists observing isolated tribes, they might watch us while letting us develop naturally. It's cosmic parenting - sometimes love means letting your kids figure things out themselves!",
            incorrect_feedback: "All these reasons are possible! But the Prime Directive theory is particularly compelling because it suggests aliens DO exist and ARE aware of us, but choose not to interfere for our own good. It's the difference between being alone and being given space to grow.",
            engine_commentary: "The Engine considers: What if the silence isn't absence but restraint? What if we're surrounded by civilizations showing us the ultimate respect - the freedom to discover ourselves?"
        },
        {
            type: "cosmic_factoid", 
            text: "Earth has been broadcasting radio and TV signals for about 100 years, creating a 'radio bubble' about 200 light-years in diameter. Any alien civilizations within this bubble could theoretically detect us, analyze our signals, and know we exist. They've been watching our shows and listening to our music!",
            value: 12,
            stance: "optimistic",
            engine_commentary: "The Engine realizes: Somewhere in space, aliens might have just discovered I Love Lucy reruns. Our first impression on cosmic civilization might be Lucille Ball, Elvis Presley, and reality TV. Humanity's greatest cultural exports are traveling the galaxy without our permission!"
        },
        {
            type: "cosmic_tf_question",
            question: "If we ever receive a confirmed alien message, we should immediately respond and try to establish a conversation.",
            correct_answer: false,
            value: 18,
            stance: "neutral",
            correct_feedback: "FALSE! Most SETI protocols suggest we should NOT immediately respond. First, we'd need global consensus about what to say - it would be humanity's first official message, not just one country's. Second, we'd want to carefully analyze their message to understand their intentions. Third, once we respond, there's no taking it back - we'd have announced our location to the cosmos!",
            incorrect_feedback: "While the excitement would be overwhelming, most scientists agree we should pause before responding. Any message to aliens would represent all of humanity, so we'd need time for global discussion. Plus, we'd want to understand their message and intentions first. Cosmic communication requires cosmic responsibility!",
            engine_commentary: "The Engine contemplates: The moment we discover we're not alone, we'd immediately face the question of whether we should try NOT to be alone anymore. Contact changes everything, including our right to cosmic privacy."
        },
        {
            type: "communication_experiment",
            description: "Design a message for aliens! Consider: What would you include in humanity's first official message to an alien civilization?",
            options: {
                "A": "Mathematical concepts and scientific knowledge",
                "B": "Cultural information about human art and music", 
                "C": "Information about Earth's location and solar system",
                "D": "A simple greeting and request for peaceful contact"
            },
            value: 15,
            stance: "neutral",
            engine_commentary: "The Engine observes you attempting to compress the entire human experience into a cosmic text message. How do you explain jazz music to beings who might not have ears? How do you convey love to entities that might not have emotions? Communication is consciousness trying to bridge the gap between minds."
        },
        {
            type: "cosmic_factoid",
            text: "The Very Large Array radio telescope can detect a cell phone signal from Jupiter. If aliens on a planet around Proxima Centauri had similar technology and were pointing it at Earth during one of our strongest radio broadcasts, they could definitely detect us. The technology for cosmic communication already exists - on both ends!",
            value: 14,
            stance: "optimistic", 
            engine_commentary: "The Engine marvels: The tools for cosmic conversation are already in our hands. Somewhere in the galaxy, alien astronomers might be having the exact same realization about their own technology. We're all just waiting for someone to pick up the cosmic phone!"
        },
        {
            type: "cosmic_tf_question",
            question: "The main reason we haven't heard from aliens is that faster-than-light communication is impossible, so civilizations are isolated by vast distances.",
            correct_answer: false, // Beautifully false!
            value: 16,
            stance: "pessimistic",
            correct_feedback: "FALSE! While vast distances are definitely a challenge, they're not necessarily the main barrier. Radio signals travel at light speed and could cross the galaxy in 100,000 years - short compared to cosmic timescales. The real issues might be: we're looking wrong, they're communicating differently, the timing is off, or they're deliberately staying quiet. Distance is a problem, but not THE problem!",
            incorrect_feedback: "Distance is definitely a major challenge, but it might not be the primary one. Radio signals can cross interstellar space - it just takes time. The bigger issues might be technological (wrong frequencies), temporal (wrong timing), or social (they're choosing not to communicate). The cosmos might be buzzing with chatter we just can't access yet!",
            engine_commentary: "The Engine reflects: Maybe the Great Silence isn't about distance but about the cosmic assumption that everyone would WANT to talk. What if advanced civilizations discover that some conversations are better left unhad?"
        }
    ];
}
