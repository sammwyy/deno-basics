import { emptyDir } from "https://deno.land/std/fs/mod.ts";

await emptyDir("./assets");
console.log("All files in the directory has been deleted!");