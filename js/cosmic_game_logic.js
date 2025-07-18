// 🌌 COSMIC LOOPS: The Fermi Paradox Engine Game Logic 🛸
// "Where is everybody who might be asking 'Where is everybody?'"

const cosmicLoopOrder = [
    { name: "The Great Silence", file: "great_silence.html", unlockScore: 0 },
    { name: "The Zoo Hypothesis", file: "zoo_hypothesis.html", unlockScore: 50 },
    { name: "The Great Filter", file: "great_filter.html", unlockScore: 100 },
    { name: "Transcendence Scenarios", file: "transcendence_scenarios.html", unlockScore: 150 },
    { name: "Time & Scale Paradoxes", file: "time_scale_paradoxes.html", unlockScore: 200 },
    { name: "The Observer Effect", file: "observer_effect.html", unlockScore: 250 }
];

let currentCosmicPerspective = null;
let currentContentIndex = 0;
let progressIndicator;
let optimismScore = 0;  // "We'll find them/transcend together"
let pessimismScore = 0; // "We're alone/doomed/filtered"
let totalCosmicScore = 0;
let cosmicContentPool = [];
let usedCosmicContent = [];
let maxCosmicItems = 8;

let contentDisplay;
let engineCommentary;
let nextButton;
let scoreDisplay;
let unlockStatus;

document.addEventListener('DOMContentLoaded', function() {
    initializeCosmicGame();
});

function initializeCosmicGame() {
    contentDisplay = document.getElementById('cosmic-content-display');
    engineCommentary = document.getElementById('cosmic-engine-commentary');
    nextButton = document.getElementById('cosmic-next-button');
    scoreDisplay = document.getElementById('current-cosmic-score');
    unlockStatus = document.getElementById('cosmic-unlock-status');
    progressIndicator = document.getElementById('cosmic-progress-indicator');
    
    try {
        cosmicContentPool = getCosmicLoopContent();
        console.log(`🛸 Loaded ${cosmicContentPool.length} cosmic content items`);
    } catch (error) {
        console.error('🚨 Error loading cosmic content pool:', error);
        contentDisplay.innerHTML = '<p style="color: #ff6b9d;">🛸 Cosmic interference detected. Please refresh the paradox.</p>';
        return;
    }
    
    setupCosmicPerspectiveSelection();
    nextButton.addEventListener('click', loadNextCosmicContent);
    nextButton.disabled = true;
    updateCosmicScoreDisplay();
}

function setupCosmicPerspectiveSelection() {
    const chooseOptimistic = document.getElementById('choose-optimistic');
    const choosePessimistic = document.getElementById('choose-pessimistic');
    
    chooseOptimistic.addEventListener('click', () => selectCosmicPerspective('optimistic'));
    choosePessimistic.addEventListener('click', () => selectCosmicPerspective('pessimistic'));
}

function selectCosmicPerspective(perspective) {
    currentCosmicPerspective = perspective;
    document.getElementById('cosmic-preference-selection').style.display = 'none';
    nextButton.disabled = false;
    
    let perspectiveMessage = getCosmicPerspectiveMessage(perspective);
    
    contentDisplay.innerHTML = `
        <div class="cosmic-perspective-intro">
            <p><strong>${perspectiveMessage}</strong></p>
            <p>Click "Explore the Next Cosmic Angle" to begin your journey through the paradox.</p>
        </div>
    `;
    
    engineCommentary.innerHTML = '<p><em>🛸 The Engine begins analyzing how this very choice reflects your cosmic outlook on existence itself...</em></p>';
}

function getCosmicPerspectiveMessage(perspective) {
    const title = document.title.toLowerCase();
    
    if (title.includes('great silence')) {
        return perspective === 'optimistic' 
            ? "You've chosen the Cosmic Connectivity perspective. You believe the silence is temporary - we're either not listening right, not looking in the right places, or haven't waited long enough. The universe is full of chatter we just haven't tuned into yet."
            : "You've chosen the Cosmic Solitude perspective. You suspect the Great Silence reflects a deeper truth - that consciousness is rare, fragile, or that the universe is fundamentally hostile to complex communication across vast distances.";
    } else if (title.includes('zoo hypothesis')) {
        return perspective === 'optimistic'
            ? "You've chosen the Cosmic Protection perspective. You believe we're being watched over by benevolent advanced civilizations who are protecting our natural development - like a nature preserve for emerging consciousness."
            : "You've chosen the Cosmic Specimen perspective. You suspect we're either experimental subjects, entertainment, or so primitive that advanced beings consider us beneath notice - isolated for their convenience, not ours.";
    } else if (title.includes('great filter')) {
        return perspective === 'optimistic'
            ? "You've chosen the Filter Conquered perspective. You believe the Great Filter is behind us - we've survived the nearly impossible transition to complex life and intelligence. We're the rare success story."
            : "You've chosen the Filter Awaits perspective. You suspect the Great Filter lies ahead - that something catastrophic awaits all civilizations that reach our level of development, explaining the cosmic silence.";
    } else if (title.includes('transcendence')) {
        return perspective === 'optimistic'
            ? "You've chosen the Cosmic Graduation perspective. You believe advanced civilizations transcend physical reality in beautiful ways - digital paradises, consciousness expansion, or spiritual evolution that we'll eventually join."
            : "You've chosen the Transcendence Trap perspective. You suspect that 'transcendence' is actually civilizational suicide - advanced beings disappear because transcendence destroys them or makes them irrelevant to physical reality.";
    } else if (title.includes('time')) {
        return perspective === 'optimistic'
            ? "You've chosen the Cosmic Timing perspective. You believe we're early to the cosmic party - most civilizations haven't emerged yet, or we're operating on the wrong timescales but will eventually sync up."
            : "You've chosen the Temporal Isolation perspective. You suspect we're either too late (missing the cosmic party), too early (alone in a young universe), or trapped in temporal scales that make contact impossible.";
    } else if (title.includes('observer')) {
        return perspective === 'optimistic'
            ? "You've chosen the Conscious Universe perspective. You believe consciousness is the universe's way of observing itself, and our search for other minds is part of a beautiful cosmic awakening to self-awareness."
            : "You've chosen the Observer Paradox perspective. You suspect that the act of conscious observation fundamentally changes reality in ways that prevent or destroy the very phenomena we're trying to observe.";
    }
    
    return perspective === 'optimistic'
        ? "You've chosen the Cosmic Optimism perspective. You believe the universe is fundamentally friendly to consciousness and that contact, transcendence, or cosmic community is not only possible but inevitable."
        : "You've chosen the Cosmic Pessimism perspective. You see the universe as fundamentally hostile to consciousness, with silence, isolation, and existential barriers as the natural state of cosmic existence.";
}

function loadNextCosmicContent() {
    if (!currentCosmicPerspective) {
        alert('🛸 Please select a cosmic perspective first.');
        return;
    }
    
    if (usedCosmicContent.length >= maxCosmicItems) {
        showCosmicLoopCompletion();
        return;
    }
    
    const nextContent = getNextCosmicContentItem();
    
    if (!nextContent) {
        showCosmicLoopCompletion();
        return;
    }
    
    displayCosmicContent(nextContent);
    usedCosmicContent.push(nextContent);
    currentContentIndex++;
    updateCosmicProgressDisplay();
}

function getNextCosmicContentItem() {
    let availableContent = cosmicContentPool.filter(item => 
        !usedCosmicContent.includes(item)
    );
    
    if (availableContent.length === 0) {
        return null;
    }
    
    let preferredContent = availableContent.filter(item => 
        item.stance === currentCosmicPerspective || item.stance === 'neutral'
    );
    
    if (preferredContent.length === 0) {
        preferredContent = availableContent;
    }
    
    return preferredContent[Math.floor(Math.random() * preferredContent.length)];
}

function displayCosmicContent(content) {
    let html = '';
    
    switch (content.type) {
        case 'cosmic_tf_question':
            html = createCosmicTrueFalseQuestion(content);
            break;
        case 'cosmic_mc_question':
            html = createCosmicMultipleChoiceQuestion(content);
            break;
        case 'cosmic_video':
            html = createCosmicVideoContent(content);
            break;
        case 'cosmic_factoid':
            html = createCosmicFactoidContent(content);
            break;
        case 'drake_calculator':
            html = createDrakeCalculator(content);
            break;
        case 'communication_experiment':
            html = createCommunicationExperiment(content);
            break;
        default:
            html = '<p>🛸 Unknown cosmic content type detected</p>';
    }
    
    contentDisplay.innerHTML = html;
    engineCommentary.innerHTML = `<p><em>🛸 ${content.engine_commentary}</em></p>`;
    
    if (content.type.includes('question') || content.type.includes('calculator') || content.type.includes('experiment')) {
        nextButton.disabled = true;
    } else {
        updateScoreForNonQuestion(content.value, content.stance);
        nextButton.disabled = false;
    }
}

function createCosmicTrueFalseQuestion(content) {
    return `
        <div class="cosmic-question-content">
            <h3>🌌 Cosmic Contemplation:</h3>
            <p class="cosmic-question-text">${content.question}</p>
            <div class="cosmic-answer-buttons">
                <button class="cosmic-answer-btn optimistic-btn" onclick="answerCosmicTrueFalse(true, ${content.correct_answer}, ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">TRUE</button>
                <button class="cosmic-answer-btn pessimistic-btn" onclick="answerCosmicTrueFalse(false, ${content.correct_answer}, ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">FALSE</button>
            </div>
            <div id="cosmic-feedback-area"></div>
        </div>
    `;
}

function createCosmicMultipleChoiceQuestion(content) {
    let optionsHtml = '';
    for (let key in content.options) {
        optionsHtml += `<button class="cosmic-answer-btn" onclick="answerCosmicMultipleChoice('${key}', '${content.correct_answer_key}', ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">${key}: ${content.options[key]}</button>`;
    }
    
    return `
        <div class="cosmic-question-content">
            <h3>🛸 Cosmic Multiple Choice:</h3>
            <p class="cosmic-question-text">${content.question}</p>
            <div class="cosmic-answer-buttons">
                ${optionsHtml}
            </div>
            <div id="cosmic-feedback-area"></div>
        </div>
    `;
}

function createCosmicVideoContent(content) {
    return `
        <div class="cosmic-video-content">
            <h3>📡 ${content.title}</h3>
            <div class="cosmic-video-wrapper">
                <iframe src="${content.url}" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="cosmic-content-value">Cosmic Insight Value: +${content.value} points</p>
        </div>
    `;
}

function createCosmicFactoidContent(content) {
    return `
        <div class="cosmic-factoid-content">
            <h3>🌌 Cosmic Insight:</h3>
            <p class="cosmic-factoid-text">${content.text}</p>
            <p class="cosmic-content-value">Cosmic Wisdom: +${content.value} points</p>
        </div>
    `;
}

function createDrakeCalculator(content) {
    return `
        <div class="drake-calculator">
            <h3>🔢 Drake Equation Interactive</h3>
            <p>${content.description}</p>
            <div class="drake-inputs">
                <label>Rate of star formation: <input type="number" id="star-rate" min="0" step="0.1" value="1"></label>
                <label>Fraction with planets: <input type="number" id="planet-fraction" min="0" max="1" step="0.01" value="0.5"></label>
                <label>Planets per star that could support life: <input type="number" id="habitable-planets" min="0" step="0.1" value="2"></label>
                <label>Fraction that develop life: <input type="number" id="life-fraction" min="0" max="1" step="0.01" value="0.5"></label>
                <label>Fraction that develop intelligence: <input type="number" id="intelligence-fraction" min="0" max="1" step="0.01" value="0.1"></label>
                <label>Fraction that develop communication: <input type="number" id="communication-fraction" min="0" max="1" step="0.01" value="0.1"></label>
                <label>Civilization lifetime (years): <input type="number" id="civilization-lifetime" min="1" value="10000"></label>
            </div>
            <button onclick="calculateDrake(${content.value}, '${content.stance}')" class="cosmic-answer-btn">Calculate Cosmic Loneliness</button>
            <div id="drake-result"></div>
        </div>
    `;
}

function calculateDrake(value, stance) {
    const starRate = parseFloat(document.getElementById('star-rate').value);
    const planetFraction = parseFloat(document.getElementById('planet-fraction').value);
    const habitablePlanets = parseFloat(document.getElementById('habitable-planets').value);
    const lifeFraction = parseFloat(document.getElementById('life-fraction').value);
    const intelligenceFraction = parseFloat(document.getElementById('intelligence-fraction').value);
    const communicationFraction = parseFloat(document.getElementById('communication-fraction').value);
    const civilizationLifetime = parseFloat(document.getElementById('civilization-lifetime').value);
    
    const result = starRate * planetFraction * habitablePlanets * lifeFraction * intelligenceFraction * communicationFraction * civilizationLifetime;
    
    let interpretation = '';
    if (result < 0.1) {
        interpretation = "We might be cosmically alone. The universe echoes with silence.";
    } else if (result < 1) {
        interpretation = "We're likely among the few. Cosmic loneliness is probable.";
    } else if (result < 10) {
        interpretation = "A handful of civilizations might exist. We're rare but not unique.";
    } else if (result < 1000) {
        interpretation = "The galaxy could be buzzing with hundreds of civilizations!";
    } else {
        interpretation = "The cosmos should be teeming with thousands of civilizations. Where is everybody?";
    }
    
    document.getElementById('drake-result').innerHTML = `
        <div class="drake-result">
            <h4>🛸 Cosmic Calculation Result: ${result.toFixed(2)} civilizations</h4>
            <p>${interpretation}</p>
            <p><em>Your calculation reveals your cosmic optimism or pessimism...</em></p>
        </div>
    `;
    
    updateScoreForNonQuestion(value, stance);
    nextButton.disabled = false;
}

function answerCosmicTrueFalse(userAnswer, correctAnswer, value, stance, correctFeedback, incorrectFeedback) {
    const isCorrect = userAnswer === correctAnswer;
    showCosmicFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance);
}

function answerCosmicMultipleChoice(userAnswer, correctAnswer, value, stance, correctFeedback, incorrectFeedback) {
    const isCorrect = userAnswer === correctAnswer;
    showCosmicFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance);
}

function showCosmicFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance) {
    const feedbackArea = document.getElementById('cosmic-feedback-area');
    
    const earnedPoints = isCorrect ? value : Math.floor(value / 2);
    totalCosmicScore += earnedPoints;
    
    if (stance === 'optimistic') {
        optimismScore += earnedPoints;
    } else if (stance === 'pessimistic') {
        pessimismScore += earnedPoints;
    }
    
    const feedbackClass = isCorrect ? 'cosmic-correct-feedback' : 'cosmic-incorrect-feedback';
    const feedbackText = isCorrect ? correctFeedback : incorrectFeedback;
    
    feedbackArea.innerHTML = `
        <div class="${feedbackClass}">
            <p><strong>🌌 ${isCorrect ? 'Cosmic Insight Achieved!' : 'Consider This Perspective:'}</strong></p>
            <p>${feedbackText}</p>
            <p class="cosmic-points-earned">+${earnedPoints} Cosmic Consciousness Points</p>
        </div>
    `;
    
    const answerButtons = document.querySelectorAll('.cosmic-answer-btn');
    answerButtons.forEach(btn => btn.disabled = true);
    
    nextButton.disabled = false;
    updateCosmicScoreDisplay();
}

function updateScoreForNonQuestion(value, stance) {
    totalCosmicScore += value;
    
    if (stance === 'optimistic') {
        optimismScore += value;
    } else if (stance === 'pessimistic') {
        pessimismScore += value;
    }
    
    updateCosmicScoreDisplay();
}

function updateCosmicProgressDisplay() {
    if (progressIndicator) {
        const percentage = Math.round((currentContentIndex / maxCosmicItems) * 100);
        const currentLoopName = getCurrentCosmicLoopName();
        progressIndicator.textContent = `${currentLoopName}: ${currentContentIndex}/${maxCosmicItems} (${percentage}%)`;
    }
}

function updateCosmicScoreDisplay() {
    if (scoreDisplay) {
        scoreDisplay.textContent = `Cosmic Consciousness Score: ${totalCosmicScore}`;
    }
}

function getCurrentCosmicLoopName() {
    const title = document.title.toLowerCase();
    
    if (title.includes('great silence')) return 'Loop 5.1';
    if (title.includes('zoo hypothesis')) return 'Loop 5.2';
    if (title.includes('great filter')) return 'Loop 5.3';
    if (title.includes('transcendence')) return 'Loop 5.4';
    if (title.includes('time') || title.includes('scale')) return 'Loop 5.5';
    if (title.includes('observer')) return 'Loop 5.6';
    
    return 'Cosmic Loop';
}

function getNextCosmicLoop() {
    const currentTitle = document.title.toLowerCase();
    
    if (currentTitle.includes('great silence')) {
        return { name: "The Zoo Hypothesis", file: "zoo_hypothesis.html" };
    } else if (currentTitle.includes('zoo hypothesis')) {
        return { name: "The Great Filter", file: "great_filter.html" };
    } else if (currentTitle.includes('great filter')) {
        return { name: "Transcendence Scenarios", file: "transcendence_scenarios.html" };
    } else if (currentTitle.includes('transcendence')) {
        return { name: "Time & Scale Paradoxes", file: "time_scale_paradoxes.html" };
    } else if (currentTitle.includes('time') || currentTitle.includes('scale')) {
        return { name: "The Observer Effect", file: "observer_effect.html" };
    }
    
    return null; // Last loop
}

function getCosmicPersonalizedMessage() {
    const ratio = optimismScore / (pessimismScore + 1); // Avoid division by zero
    
    if (ratio > 1.5) {
        return "Your cosmic journey reveals deep optimism about consciousness in the universe. You believe connection, transcendence, and cosmic community are not only possible but inevitable.";
    } else if (ratio < 0.67) {
        return "Your cosmic exploration suggests a pessimistic outlook on consciousness in the universe. You see isolation, barriers, and cosmic loneliness as fundamental features of existence.";
    } else {
        return "Your cosmic perspective balances hope and realism, recognizing both the beautiful possibilities and sobering challenges of consciousness in an vast, mysterious universe.";
    }
}

function showCosmicLoopCompletion() {
    const currentLoopName = getCurrentCosmicLoopName() + ': ' + getCurrentCosmicLoopTitle();
    const nextLoop = getNextCosmicLoop();
    
    contentDisplay.innerHTML = `
        <div class="cosmic-completion-content">
            <h3>🌌 Cosmic Loop Complete: ${currentLoopName}</h3>
            <p><strong>Your Final Cosmic Score: ${totalCosmicScore} points</strong></p>
            
            <div class="cosmic-belief-analysis">
                <h4>Your Cosmic Consciousness Leanings:</h4>
                <ul>
                    <li>Cosmic Optimism: ${optimismScore} points</li>
                    <li>Cosmic Pessimism: ${pessimismScore} points</li>
                </ul>
            </div>
            
            <div class="cosmic-journey-complete">
                <h4>🛸 Cosmic Exploration Complete!</h4>
                <p>You have explored this aspect of the Fermi Paradox.</p>
                <p>The Engine appreciates your thoughtful engagement with these cosmic questions about consciousness seeking consciousness.</p>
            </div>
            
            <div class="cosmic-navigation-buttons" style="margin-top: 30px; text-align: center;">
                <button onclick="window.location.href='index.html'" class="cosmic-nav-button" style="margin: 10px; padding: 12px 24px; background: rgba(255,255,255,0.2); color: #4facfe; border: 1px solid rgba(79, 172, 254, 0.3); border-radius: 8px; cursor: pointer;">← Return to Cosmic Engine</button>
                ${nextLoop ? `<button onclick="window.location.href='${nextLoop.file}'" class="cosmic-nav-button" style="margin: 10px; padding: 12px 24px; background: linear-gradient(45deg, #ff6b9d, #c471ed); color: white; border: none; border-radius: 8px; cursor: pointer;">Next Cosmic Loop: ${nextLoop.name} →</button>` : '<button onclick="window.location.href=\'index.html\'" class="cosmic-nav-button" style="margin: 10px; padding: 12px 24px; background: linear-gradient(45deg, #4facfe, #00f2fe); color: white; border: none; border-radius: 8px; cursor: pointer;">🌌 Cosmic Journey Complete - Return to Engine →</button>'}
            </div>
        </div>
    `;
    
    engineCommentary.innerHTML = `
        <p><em>🛸 The Engine has analyzed your cosmic consciousness journey through this paradox. ${getCosmicPersonalizedMessage()}</em></p>
        <p><em>Remember: You are the universe using conscious beings to wonder about conscious beings in the universe. The ultimate recursive loop of cosmic self-awareness!</em></p>
    `;
    
    nextButton.style.display = 'none';
}

function getCurrentCosmicLoopTitle() {
    const title = document.title.toLowerCase();
    
    if (title.includes('great silence')) return 'The Great Silence';
    if (title.includes('zoo hypothesis')) return 'The Zoo Hypothesis';
    if (title.includes('great filter')) return 'The Great Filter';
    if (title.includes('transcendence')) return 'Transcendence Scenarios';
    if (title.includes('time') || title.includes('scale')) return 'Time & Scale Paradoxes';
    if (title.includes('observer')) return 'The Observer Effect';
    
    return 'Cosmic Loop';
}

// 🌌 Cosmic wisdom generator for easter eggs
const cosmicWisdomBank = [
    "Your teenage angst was practice for cosmic loneliness",
    "Maybe the real aliens were the philosophical questions we asked along the way",
    "Statistically, someone else in the universe is also having an existential crisis right now",
    "If a civilization transcends in a digital forest and no one's around to detect it, did it really happen?",
    "The universe's biggest plot twist: consciousness examining its own consciousness",
    "What if every advanced civilization discovers the same thing and goes 'Oh... OH NO'",
    "Maybe aliens are also wondering why their dating apps only show other aliens",
    "The fact that we're asking 'Where is everybody?' might be the most important data point in the universe",
    "Your loneliness on Saturday night is practice for cosmic loneliness",
    "The ultimate recursion: beings using consciousness to wonder about consciousness"
];

function getRandomCosmicWisdom() {
    return cosmicWisdomBank[Math.floor(Math.random() * cosmicWisdomBank.length)];
}
