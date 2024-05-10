import { component$, useStore, useTask$ } from "@builder.io/qwik";

interface TimeDiffProps {
	startingTime?: string;
}

export default component$<TimeDiffProps>(({ startingTime = Date.now() }) => {
	const store = useStore({
		timeDifference: "",
		hour: 0,
		minute: 0,
		second: 0,
	});

	useTask$(() => {
		const update = () => {
			const currentTime = new Date();
			const createdAtTime = new Date(startingTime);

			const timeInSeconds = Math.abs(
				Math.floor((currentTime.getTime() - createdAtTime.getTime()) / 1000),
			);

			store.second = currentTime.getSeconds() * (360 / 60);
			store.minute = currentTime.getMinutes() * (360 / 60);
			store.hour = currentTime.getHours() * (360 / 12);

			if (timeInSeconds < 60) {
				store.timeDifference = `${timeInSeconds.toString()} seconds ago`;
			} else if (timeInSeconds < 3600) {
				const minutes = Math.floor(timeInSeconds / 60);
				store.timeDifference = `${minutes.toString()} ${
					minutes === 1 ? "minute" : "minutes"
				} ago`;
			} else if (timeInSeconds < 86400) {
				const hours = Math.floor(timeInSeconds / 3600);
				store.timeDifference = `${hours.toString()} ${
					hours === 1 ? "hour" : "hours"
				} ago`;
			} else if (timeInSeconds < 604800) {
				const days = Math.floor(timeInSeconds / 86400);
				store.timeDifference = `${days.toString()} ${
					days === 1 ? "day" : "days"
				} ago`;
			} else if (timeInSeconds < 2629746) {
				const weeks = Math.floor(timeInSeconds / 604800);
				store.timeDifference = `${weeks.toString()} ${
					weeks === 1 ? "week" : "weeks"
				} ago`;
			} else if (timeInSeconds < 31556952) {
				const months = Math.floor(timeInSeconds / 2629746);
				store.timeDifference = `${months.toString()} ${
					months === 1 ? "month" : "months"
				} ago`;
			} else {
				const years = Math.floor(timeInSeconds / 31556952);
				store.timeDifference = `${years.toString()} ${
					years === 1 ? "year" : "years"
				} ago`;
			}
		};
		update();
		const tmrId = setInterval(update, 60000);
		return () => clearInterval(tmrId);
	});

	return <div class="text-gray-500">{store.timeDifference}</div>;
});
