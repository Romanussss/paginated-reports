import { describe, it, expect } from "vitest";
import { tryParseDateString, parseDateString } from "@/lib/utils";

describe("Utility Functions", () => {
    describe("tryParseDateString", () => {
        it("should correctly parse dates in various formats", () => {
            expect(tryParseDateString("2024-10-28")?.toISOString()).toBe(new Date(Date.UTC(2024, 9, 28)).toISOString());
            expect(tryParseDateString("10/28/2024")?.toISOString()).toBe(new Date(Date.UTC(2024, 9, 28)).toISOString());
            expect(tryParseDateString("1/5/2024")?.toISOString()).toBe(new Date(Date.UTC(2024, 0, 5)).toISOString());
            expect(tryParseDateString("10-28-2024")?.toISOString()).toBe(new Date(Date.UTC(2024, 9, 28)).toISOString());
            expect(tryParseDateString("1-5-2024")?.toISOString()).toBe(new Date(Date.UTC(2024, 0, 5)).toISOString());
        });

        it("should return null for invalid date strings", () => {
            expect(tryParseDateString("invalid-date")).toBeNull();
            expect(tryParseDateString("13/45/2024")).toBeNull();
            expect(tryParseDateString("2024/10/28")).toBeNull();
            expect(tryParseDateString("28/10/2024")).toBeNull();
        });

        it("should handle ambiguous formats correctly", () => {
            expect(tryParseDateString("01-02-2024")?.toISOString()).toBe(new Date(Date.UTC(2024, 0, 2)).toISOString());
        });
    });

    describe("parseDateString", () => {
        it("should throw an error for invalid date strings", () => {
            expect(() => parseDateString("invalid-date")).toThrowError("Invalid date string: invalid-date");
            expect(() => parseDateString("13/45/2024")).toThrowError("Invalid date string: 13/45/2024");
        });

        it("should correctly parse valid date strings", () => {
            expect(parseDateString("2024-10-28").toISOString()).toBe(new Date(Date.UTC(2024, 9, 28)).toISOString());
        });
    });
});
