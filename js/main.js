// js/app.js
import { challenges } from './challenges_data.js';
import { 
    displayChallenges, 
    loadChallengeDetail, 
    updateOutputArea, 
    resetChallengeDisplay,
    getChallengeInputs,
    updateNavButtonCounts,
    setActiveNavButton
} from './ui_manager.js';

document.addEventListener('DOMContentLoaded', () => {
    const runChallengeButton = document.getElementById('run-challenge');
    const navButtons = document.querySelectorAll('#main-nav button'); // Pegar novamente para este escopo

    let currentChallenge = null;

    function handleChallengeSelection(challengeId) {
        currentChallenge = challenges.find(c => c.id === challengeId);
        if (currentChallenge) {
            loadChallengeDetail(currentChallenge);
        }
    }

    function runCurrentChallenge() {
        if (!currentChallenge) return;

        const inputValues = getChallengeInputs(currentChallenge);

        try {
            const result = currentChallenge.solution(inputValues);
            updateOutputArea(result);
        } catch (error) {
            console.error("Erro na execução do desafio:", error);
            updateOutputArea(`Ocorreu um erro na sua função: ${error.message}\n\nStack Trace (ver console para detalhes):\n${error.stack.substring(0, 200)}...`, 'error');
        }
    }

    // --- EVENT LISTENERS ---
    runChallengeButton.addEventListener('click', runCurrentChallenge);

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            setActiveNavButton(button);
            const difficulty = button.dataset.difficulty;
            displayChallenges(challenges, difficulty, handleChallengeSelection);
            resetChallengeDisplay(); // Reseta a área principal
            currentChallenge = null; // Limpa o desafio atual ao filtrar
        });
    });
    
    // --- INICIALIZAÇÃO ---
    updateNavButtonCounts(challenges);
    // Exibir todos os desafios inicialmente e definir o botão "Todos" como ativo
    const initialActiveButton = document.querySelector('#main-nav button[data-difficulty="all"]');
    if(initialActiveButton) setActiveNavButton(initialActiveButton);
    displayChallenges(challenges, 'all', handleChallengeSelection); 
    resetChallengeDisplay(); // Garante que o placeholder apareça no início
});