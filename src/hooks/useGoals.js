import { useState } from 'react';
import { getRandomFlower } from '../data/flowers';

export const useGoals = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (name) => {
    if (!name.trim()) return;
    const newGoal = {
      id: Date.now(),
      name: name.trim(),
      progress: 5,
      flowerType: getRandomFlower(),
      createdAt: new Date().toISOString(),
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const deleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const incrementProgress = (id) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, progress: Math.min(goal.progress + 1, 10) } : goal
      )
    );
  };

  const completedGoal = (id) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => (goal.id === id ? { ...goal, progress: 100 } : goal))
    );
  };

  return {
    goals,
    addGoal,
    deleteGoal,
    incrementProgress,
    completedGoal,
  };
};
