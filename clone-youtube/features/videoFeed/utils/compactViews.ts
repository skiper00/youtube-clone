export const compactViews = (numStr: string) => {
    const num = parseInt(numStr, 10);
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed() + ' млрд.';
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed() + ' млн.';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed() + ' тыс.';
    } else {
        return num.toString();
    }
};
