import { writeFileStr } from 'https://deno.land/std/fs/mod.ts';

try {
    const fileContent = "this is a simple output";
    await writeFileStr("./output.txt", fileContent);
} catch (e) {
    console.error(e);
}