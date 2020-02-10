import { writeFileStr } from 'https://deno.land/std/fs/mod.ts';

function createIfNotExist (fileName:string, fileContent:string) {
    const promise = async (): Promise<void> => {
        try {
          await Deno.stat(fileName);
          return;
        } catch (error) {
          if (error && error.kind === Deno.ErrorKind.NotFound) {
            await writeFileStr(fileName, fileContent);
          } else {
            throw error;
          }
        }
    };
    
    promise();
}

createIfNotExist("./output.txt", "this is a output");