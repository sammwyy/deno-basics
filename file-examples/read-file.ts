import { readFileStr } from 'https://deno.land/std/fs/mod.ts';

try {
    const fileContent = await readFileStr("./text.txt");
    console.log(fileContent);
} catch (e) {
    console.error(e);
}