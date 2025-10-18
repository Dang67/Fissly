export default function getTdee(bmr: number, weeklyGoal: string): number {
    if (weeklyGoal.toString().startsWith('Tăng 0.25')) {
        return bmr * 1.55 + 275;
    } else if (weeklyGoal.toString().startsWith('Tăng 0.5')) {
        return bmr * 1.55 + 550;
    } else if (weeklyGoal.toString().startsWith('Tăng 0.75')) {
        return bmr * 1.55 + 825;
    } else if (weeklyGoal.toString().startsWith('Tăng 1')) {
        return bmr * 1.55 + 1100;
    } else if (weeklyGoal.toString().startsWith('Giảm 0.25')) {
        return bmr * 1.55 - 275;
    } else if (weeklyGoal.toString().startsWith('Giảm 0.5')) {
        return bmr * 1.55 - 550;
    } else if (weeklyGoal.toString().startsWith('Giảm 0.75')) {
        return bmr * 1.55 - 825;
    } else if (weeklyGoal.toString().startsWith('Giảm 1')) {
        return bmr * 1.55 - 1100;
    } else {
        return bmr * 1.55;
    }
};