import { writeJson } from "https://deno.land/std/fs/mod.ts";

try {
    const json = {name:"sammwy", age: 18, foo: "bar"};
    await writeJson("./file.json", json, {spaces: 2});
} catch (e) {
    console.error(e);
}