((globalThis) => {
  const { core } = Deno;
  const { ops } = core;

  core.initializeAsyncOps();

  function argsToMessage(...args) {
    return args.map((arg) => JSON.stringify(arg)).join(" ");
  }

  globalThis.konsol = {
    kayıt: (...args) => {
      core.print(`[🐺]: ${argsToMessage(...args)}\n`, false);
    },
    hata: (...args) => {
      core.print(`[🐺]: ${argsToMessage(...args)}\n`, true);
    },
  };

  globalThis.turkiyejs = {
    dosyaOku: (path) => {
      return ops.op_read_file(path);
    },
    dosyaYaz: (path, contents) => {
      return ops.op_write_file(path, contents);
    },
    dosyaKaldır: (path) => {
      return ops.op_remove_file(path);
    },
    baskent: () => {
      return "Ankara";
    },
  };
})(globalThis);
