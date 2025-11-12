'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { complianceThemes, getAllQuestions } from '@/data/complianceThemes';
import QuestionCard from '@/components/compliance/QuestionCard';
import ProgressBar from '@/components/compliance/ProgressBar';

interface Answer {
  questionId: string;
  themeId: string;
  selectedOption: string;
  score: number;
}

export default function QuestionsPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  // Flatten all questions from all themes
  const allQuestions = complianceThemes.flatMap((theme) =>
    theme.questions.map((question) => ({
      ...question,
      themeId: theme.id,
      themeTitle: theme.shortTitle,
      themeColor: theme.color,
      themeIcon: theme.icon,
    }))
  );

  const totalQuestions = allQuestions.length;
  const currentQuestion = allQuestions[currentQuestionIndex];

  // Load answers from sessionStorage on mount
  useEffect(() => {
    const savedAnswers = sessionStorage.getItem('compliance-answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Save answers to sessionStorage whenever they change
  useEffect(() => {
    if (answers.length > 0) {
      sessionStorage.setItem('compliance-answers', JSON.stringify(answers));
    }
  }, [answers]);

  const handleSelectOption = (optionLabel: string, score: number) => {
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      themeId: currentQuestion.themeId,
      selectedOption: optionLabel,
      score,
    };

    // Update or add answer
    const existingIndex = answers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );

    let updatedAnswers;
    if (existingIndex >= 0) {
      updatedAnswers = [...answers];
      updatedAnswers[existingIndex] = newAnswer;
    } else {
      updatedAnswers = [...answers, newAnswer];
    }

    setAnswers(updatedAnswers);
  };

  const getCurrentAnswer = () => {
    return answers.find((a) => a.questionId === currentQuestion.id);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    const currentAnswer = getCurrentAnswer();
    if (!currentAnswer) {
      alert('Veuillez sélectionner une réponse avant de continuer.');
      return;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Last question - go to results
      router.push('/compliance-scan/resultats');
    }
  };

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const currentAnswer = getCurrentAnswer();

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={totalQuestions}
            moduleColor={currentQuestion.themeColor}
          />
        </div>

        {/* Question Card */}
        <QuestionCard
          questionId={currentQuestion.id}
          questionLabel={currentQuestion.text}
          options={currentQuestion.options}
          moduleId={currentQuestion.themeId}
          moduleLabel={currentQuestion.themeTitle}
          moduleColor={currentQuestion.themeColor}
          moduleIcon={currentQuestion.themeIcon}
          selectedOption={currentAnswer?.selectedOption}
          onSelect={handleSelectOption}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-3 mt-4 sm:mt-6 md:mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-semibold transition-all duration-200 text-sm sm:text-base ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'btn-agoria-outline active:scale-95'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Précédent</span>
            <span className="sm:hidden">Préc.</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 font-semibold transition-all duration-200 text-sm sm:text-base ${
              currentAnswer
                ? 'btn-agoria-primary active:scale-95'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="hidden sm:inline">{isLastQuestion ? 'Voir les résultats' : 'Suivant'}</span>
            <span className="sm:hidden">{isLastQuestion ? 'Résultats' : 'Suiv.'}</span>
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Question Counter (mobile) */}
        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500">
          Question {currentQuestionIndex + 1} / {totalQuestions}
        </div>
      </div>
    </div>
  );
}
