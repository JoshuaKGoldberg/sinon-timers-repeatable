import { describe, expect, it } from "vitest";

import { useFakeTimers } from "./index.js";

describe("useFakeTimers", () => {
	it("returns the same object when called twice", () => {
		const first = useFakeTimers();
		const second = useFakeTimers();
		expect(first).toEqual(second);
	});

	it("does not throw an error when called in another test", () => {
		useFakeTimers();
	});
});
