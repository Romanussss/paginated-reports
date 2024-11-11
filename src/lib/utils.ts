import { clsx, type ClassValue } from "clsx";
import { isValid, parse, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function tryParseDateString(dateStr: string): Date | null {
    // Check for full ISO 8601 format first to preserve time if provided
    if (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(dateStr)) {
        const isoDate = parseISO(dateStr);
        if (isValid(isoDate)) return isoDate;
    }

    // Parse using known formats, interpreting dates without time as UTC midnight
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

    // Fallback to parse date as ISO string if possible
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
// test 123 123git 
