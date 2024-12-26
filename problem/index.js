import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Update progress by adding calories burned from the exercise
    this.progress += exercise.caloriesBurned;
    console.log(`Added exercise: ${exercise.name}, Calories burned: ${exercise.caloriesBurned}`);
    console.log(`Current progress: ${this.progress} / ${this.goal} calories`);

    // Emit 'goalReached' event if the goal is achieved or exceeded
    if (this.progress >= this.goal) {
      this.emit('goalReached');
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  // Define a listener to send a congratulatory message when the goal is reached
  tracker.on('goalReached', () => {
    console.log('Congratulations! You have reached your fitness goal!');
  });

  // Simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
