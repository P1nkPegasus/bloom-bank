import { FLOWER_TYPERS } from './data/flowers';
import { useGoals } from './hooks/useGoals';

export default function App() {
  const { goals, addGoal, deleteGoal, incrementProgress } = useGoals();
  // TODO: add logic for completedGoal
  return (
    <main style={{ padding: '20px', color: 'white' }}>
      <button
        onClick={() => addGoal('test goal')}
        style={{ marginBottom: '16px' }}
        aria-label="Add a new goal"
      >
        add goal
      </button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} style={{ marginBottom: '8px' }}>
            {goal.name} - {goal.flowerType.name} - {goal.progress}%
            <button
              onClick={() => incrementProgress(goal.id)}
              style={{ marginLeft: '8px' }}
              aria-label={`Water ${goal.name}`}
            >
              water goal
            </button>
            <button
              onClick={() => deleteGoal(goal.id)}
              style={{ marginLeft: '8px' }}
              aria-label={`Delete ${goal.name}`}
            >
              delete goal
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
