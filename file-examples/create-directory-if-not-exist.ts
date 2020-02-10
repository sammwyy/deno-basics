import { ensureDir} from "https://deno.land/std/fs/mod.ts";

try {
    await ensureDir("./newDirectory");
} catch (e) {
    console.error(e);
}