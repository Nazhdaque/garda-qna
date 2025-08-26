//---
export class AttrSetter {
	initWith = (attr, data) => {
		for (const key in data)
			document
				.querySelectorAll(`${key}`)
				.forEach(el => el.setAttribute(`${attr}`, `${data[key]}`));
	};
}

//---
export class GetCustomPropsValues {
	constructor(element) {
		this.values = [];
		this.element = element ?? document.documentElement;
	}

	getValues = props => {
		props.forEach(prop =>
			this.values.push(
				getComputedStyle(this.element, null).getPropertyValue(prop)
			)
		);
		return this.values;
	};
}

//---
export class MobileDesktopStatesManager {
	constructor(onMobile, onDesktop) {
		this.onMobile = onMobile;
		this.onDesktop = onDesktop;
	}

	setState = isMobileSize =>
		isMobileSize ? this.onMobile() : this.onDesktop();

	checkState = breakpoint =>
		window.innerWidth <= breakpoint
			? this.setState(true)
			: this.setState(false);

	watchState = breakpoint =>
		window
			.matchMedia(`(max-width: ${breakpoint}px)`)
			.addEventListener("change", e => this.setState(e.matches));

	toggleStateOn = breakpoint => {
		this.checkState(breakpoint);
		this.watchState(breakpoint);
	};
}

//---
export class SizeSetter {
	constructor(prop) {
		this.prop = prop;
	}

	observer = slaves =>
		new ResizeObserver(masters =>
			masters.forEach(master => {
				switch (this.prop) {
					case "w":
						const width = master.borderBoxSize[0].inlineSize;
						slaves.forEach(slave => (slave.style.maxWidth = `${width}px`));
						break;
					case "h":
						const height = master.borderBoxSize[0].blockSize;
						slaves.forEach(slave => (slave.style.minHeight = `${height}px`));
						break;
				}
			})
		);

	initWith = relatedItems => {
		relatedItems.forEach(([m, s], i) => {
			const master = document.querySelector(`.${m}`);
			const slaves = document.querySelectorAll(`.${s}`);
			const index = i + 1;

			master && slaves
				? this.observer(slaves).observe(master)
				: console.error(
						`SizeSetter: there is no master-${index} or slave-${index}`
				  );
		});
	};
}

//---
export const getElements = array => {
	const elements = [];
	array.forEach(item => elements.push(document.querySelector(item)));
	return elements;
};

//---
export const throttle = (fn, delay = 50) => {
	let lastCall = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;
		return fn(...args);
	};
};
