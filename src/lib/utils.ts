import { isValid, parse, parseISO } from "date-fns";

export function cn(...classes: string[]) {

    return classes.filter(Boolean).join(' ');

}

export function tryParseDateString(dateStr: string): Date | null {
    // Check if the date string contains a timezone offset (e.g., "2024-10-29 12:30:06.5450270 -05:00")
    const dateWithTimezone = Date.parse(dateStr);
    if (!isNaN(dateWithTimezone)) {
        const parsedDate = new Date(dateWithTimezone);
        if (isValid(parsedDate)) return new Date(parsedDate.toISOString()); // Ensure UTC
    }

    // Known formats without time information, treated as UTC midnight
    const formats = [
        "yyyy-MM-dd",
        "MM/dd/yyyy",
        "M/d/yyyy",
        "MM-dd-yyyy",
        "M-d-yyyy",
    ];

    for (const formatStr of formats) {
        const parsedDate = parse(dateStr, formatStr, new Date(0));
        if (isValid(parsedDate)) {
            return new Date(Date.UTC(parsedDate.getFullYear(), parsedDate.getMonth(), parsedDate.getDate()));
        }
    }

    // Attempt to parse as ISO date string if none of the above formats match
    const fallbackDate = parseISO(dateStr);
    if (isValid(fallbackDate)) return fallbackDate;

    return null;
}

export function parseDateString(dateStr: string): Date {
    const parsedDate = tryParseDateString(dateStr);
    if (!parsedDate) {
        throw new Error(`Invalid date string: ${dateStr}`);
    }
    return parsedDate;
}
