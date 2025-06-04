// js/ui_manager.js

// Elementos do DOM (obtidos uma vez e exportados ou passados para funções)
const challengeListEl = document.getElementById('challenge-list');
const challengePlaceholderEl = document.getElementById('challenge-placeholder');
const challengeContentEl = document.getElementById('challenge-content');
const challengeTitleEl = document.getElementById('challenge-title');
const challengeDescriptionEl = document.getElementById('challenge-description');
const challengeDifficultyTextEl = document.getElementById('challenge-difficulty-text');
const inputAreaEl = document.getElementById('input-area');
const outputAreaEl = document.getElementById('output-area');
const navButtons = document.querySelectorAll('#main-nav button'); // Adicionado aqui

let activeChallengeListItem = null; // Para gerenciar o item ativo na lista

export function displayChallenges(challengesData, filter = 'all', onChallengeClickCallback) {
    challengeListEl.innerHTML = ''; 
    const filteredChallenges = filter === 'all' ? challengesData : challengesData.filter(c => c.difficulty === filter);

    if (filteredChallenges.length === 0) {
        challengeListEl.innerHTML = '<li class="no-challenges">Nenhum desafio encontrado para este filtro.</li>';
        return;
    }

    filteredChallenges.forEach(challenge => {
        const listItem = document.createElement('li');
        let difficultyClass = '';
        if (challenge.difficulty === 'easy') difficultyClass = 'difficulty-easy';
        else if (challenge.difficulty === 'medium') difficultyClass = 'difficulty-medium';
        else if (challenge.difficulty === 'hard') difficultyClass = 'difficulty-hard';
        
        listItem.className = `challenge-item ${difficultyClass}`;
        listItem.innerHTML = `<span class="challenge-item-title">${challenge.title}</span>`;
        listItem.dataset.challengeId = challenge.id;
        listItem.addEventListener('click', () => {
            onChallengeClickCallback(challenge.id); // Chama o callback passado
            if (activeChallengeListItem) {
                activeChallengeListItem.classList.remove('active');
            }
            listItem.classList.add('active');
            activeChallengeListItem = listItem;
        });
        challengeListEl.appendChild(listItem);
    });
}

export function loadChallengeDetail(challenge) {
    if (!challenge) return;

    challengePlaceholderEl.classList.add('hidden');
    challengeContentEl.classList.remove('hidden');

    challengeTitleEl.textContent = challenge.title;
    challengeDescriptionEl.innerHTML = challenge.description; 
    
    challengeDifficultyTextEl.textContent = challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1);
    challengeDifficultyTextEl.className = 'difficulty-badge'; // Limpa classes anteriores
    challengeDifficultyTextEl.classList.add(challenge.difficulty);


    inputAreaEl.innerHTML = ''; 
    challenge.inputs.forEach(inputDef => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';

        const label = document.createElement('label');
        label.setAttribute('for', inputDef.name);
        label.textContent = inputDef.label;

        let inputElement;
        if (inputDef.type === 'textarea') {
            inputElement = document.createElement('textarea');
            inputElement.rows = 3;
        } else {
            inputElement = document.createElement('input');
            inputElement.type = inputDef.type;
        }
        inputElement.id = inputDef.name;
        inputElement.name = inputDef.name;
        inputElement.className = 'form-control';
        if(inputDef.placeholder) inputElement.placeholder = inputDef.placeholder;

        formGroup.appendChild(label);
        formGroup.appendChild(inputElement);
        inputAreaEl.appendChild(formGroup);
    });

    updateOutputArea('// A saída aparecerá aqui...', 'placeholder');
}

export function updateOutputArea(content, type = 'normal') { // type: 'normal', 'error', 'placeholder'
    outputAreaEl.textContent = content;
    outputAreaEl.classList.remove('output-error', 'output-placeholder');
    if (type === 'error') {
        outputAreaEl.classList.add('output-error');
    } else if (type === 'placeholder') {
        outputAreaEl.classList.add('output-placeholder');
    }
}

export function resetChallengeDisplay() {
    challengePlaceholderEl.classList.remove('hidden');
    challengeContentEl.classList.add('hidden');
    if (activeChallengeListItem) {
        activeChallengeListItem.classList.remove('active');
        activeChallengeListItem = null;
    }
    updateOutputArea('// A saída aparecerá aqui...', 'placeholder');
}

export function getChallengeInputs(challenge) {
    const inputs = {};
    if (!challenge) return inputs;
    challenge.inputs.forEach(inputDef => {
        const inputEl = document.getElementById(inputDef.name);
        inputs[inputDef.name] = inputEl.value;
    });
    return inputs;
}

export function updateNavButtonCounts(challengesData) {
    navButtons.forEach(button => {
        const difficulty = button.dataset.difficulty;
        const count = difficulty === 'all' ? challengesData.length : challengesData.filter(c => c.difficulty === difficulty).length;
        const baseText = button.textContent.match(/^[a-zA-Z\s]+/)[0].trim();
        button.textContent = `${baseText} (${count})`;
    });
}

export function setActiveNavButton(clickedButton) {
    navButtons.forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
}