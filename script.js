let timeFrames = ["daily", "weekly", "monthly"];

let activeTimeFrame = "weekly";

function setTime(timeFrame) {
	if (timeFrame != activeTimeFrame) {
		const lastItem = document.getElementById(activeTimeFrame);
		lastItem.classList.remove("link-active");

		const selectedItem = document.getElementById(timeFrame);
		selectedItem.classList.add("link-active");

		activeTimeFrame = timeFrame;

		switch (timeFrame) {
			case "daily":
				time = "Day";
				break;
			case "weekly":
				time = "Week";
				break;
			case "monthly":
				time = "Month";
				break;
		}

		let hour = "hrs";
		data.forEach((item) => {
			let categoryTime = item.title.toLowerCase().trim() + "_time";
			const element = document.getElementById(categoryTime);
			item.timeframes[timeFrame].current == 1 ? (hour = "hr") : (hour = "hrs");
			element.innerHTML = `${item.timeframes[timeFrame].current} ${hour}`;

			let categoryResume = item.title.toLowerCase().trim() + "_resume";
			const resume = document.getElementById(categoryResume);
			item.timeframes[timeFrame].previous == 1 ? (hour = "hr") : (hour = "hrs");
			resume.innerHTML = `Last ${time} - ${item.timeframes[timeFrame].previous}${hour}`;
		});
	}
}
