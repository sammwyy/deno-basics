import { readJson } from "https://deno.land/std/fs/mod.ts";

try {
    const json = await readJson("./file.json");
    console.log(json);
} catch (e) {
    console.error(e);
}
