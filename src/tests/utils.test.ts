import { describe, it, expect } from "vitest";
import { tryParseDateString, parseDateString } from "@/lib/utils";

describe("Utility Functions", () => {
    describe("tryParseDateString", () => {
        it("should correctly parse valid date strings", () => {
            expect(tryParseDateString("2024-10-28")?.toISOString()).toBe("2024-10-28T00:00:00.000Z");
        });

        it("should return null for invalid date strings", () => {
            expect(tryParseDateString("invalid-date")).toBeNull();
        });
    });

    describe("parseDateString", () => {
        it("should throw an error for invalid date strings", () => {
            expect(() => parseDateString("invalid-date")).toThrowError("Invalid date string: invalid-date");
        });

        it("should correctly parse valid date strings", () => {
            expect(parseDateString("2024-10-28").toISOString()).toBe("2024-10-28T00:00:00.000Z");
        });
    });
});
