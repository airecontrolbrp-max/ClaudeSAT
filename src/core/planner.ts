export async function createPlan(task: string) {
  return {
    task,
    steps: [
      "Analyze the task",
      "Break into subtasks",
      "Assign execution strategy",
      "Define success criteria"
    ]
  };
}
