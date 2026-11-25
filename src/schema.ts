import { z } from "zod";

export const schema = z.object({
    name: z
        .string()
        .min(2, "Ном камаш 2 ҳарф бошад"),
    description: z
        .string()
        .min(3, "Маълумот камаш 3 ҳарф бошад"),
    image: z
        .any()
        .refine(
            (files) => !files || files.length === 0 || files[0].size <= 2 * 1024 * 1024,
            "Расм аз 2 МБ калон набошад"
        ),
});

export type FormValues = z.infer<typeof schema>;
