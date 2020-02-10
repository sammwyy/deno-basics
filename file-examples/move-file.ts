import { move } from "https://deno.land/std/fs/mod.ts";

try {
    await move("./somefile.txt", "./newdir/somefile.txt");
} catch (e) {
    console.error(e);
}