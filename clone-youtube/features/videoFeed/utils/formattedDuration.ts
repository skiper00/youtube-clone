import type { Duration } from 'dayjs/plugin/duration';

export const formattedDuration = (dur: Duration) => {
	return dur.asSeconds() >= 3600 ? dur.format('H:mm:ss') : dur.format('m:ss');
};
