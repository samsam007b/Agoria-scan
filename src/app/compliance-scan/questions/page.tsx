'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import questionsData from '@/data/questions.json';
import QuestionCard from '@/components/compliance/QuestionCard';
import ProgressBar from '@/components/compliance/ProgressBar';

interface Answer {
  questionId: string;
  moduleId: string;
  selectedOption: string;
  score: number;
}

export default function QuestionsPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  // Flatten all questions from all modules
  const allQuestions = questionsData.modules.flatMap((module) =>
    module.questions.map((question) => ({
      ...question,
      moduleId: module.id,
      moduleLabel: module.label,
      moduleColor: module.color,
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

  const handleSelectOption = (optionKey: string, score: number) => {
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      moduleId: currentQuestion.moduleId,
      selectedOption: optionKey,
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={totalQuestions}
            moduleColor={currentQuestion.moduleColor}
          />
        </div>

        {/* Question Card */}
        <QuestionCard
          questionId={currentQuestion.id}
          questionLabel={currentQuestion.label}
          options={currentQuestion.options}
          moduleId={currentQuestion.moduleId}
          moduleLabel={currentQuestion.moduleLabel}
          moduleColor={currentQuestion.moduleColor}
          selectedOption={currentAnswer?.selectedOption}
          onSelect={handleSelectOption}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-200 ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'btn-agoria-outline'
            }`}
          >
            <ChevronLeft size={20} />
            Précédent
          </button>

          <button
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-200 ${
              currentAnswer
                ? 'btn-agoria-primary'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isLastQuestion ? 'Voir les résultats' : 'Suivant'}
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Question Counter (mobile) */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Question {currentQuestionIndex + 1} / {totalQuestions}
        </div>
      </div>
    </div>
  );
}
