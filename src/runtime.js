((globalThis) => {
  const { core } = Deno;
  const { ops } = core;

  core.initializeAsyncOps();

  function argsToMessage(...args) {
    return args.map((arg) => JSON.stringify(arg)).join(" ");
  }

  globalThis.console = {
    log: (...args) => {
      core.print(`[🐺]: ${argsToMessage(...args)}\n`, false);
    },
    error: (...args) => {
      core.print(`[🐺]: ${argsToMessage(...args)}\n`, true);
    },
  };

  globalThis.turkiyejs = {
    readFile: (path) => {
      return ops.op_read_file(path);
    },
    writeFile: (path, contents) => {
      return ops.op_write_file(path, contents);
    },
    removeFile: (path) => {
      return ops.op_remove_file(path);
    },
  };
})(globalThis);
