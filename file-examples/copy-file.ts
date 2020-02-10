import { copy } from "https://deno.land/std/fs/mod.ts";

try {
    await copy("./somefile.txt", "./newdir/somefile.txt");
} catch (e) {
    console.error(e);
}