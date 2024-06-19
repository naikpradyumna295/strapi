class StatEntry {
  constructor() {
    this.uid = 0;
    this.gid = 0;
    this.size = 0;
    this.blksize = 0;
    this.atimeMs = 0;
    this.mtimeMs = 0;
    this.ctimeMs = 0;
    this.birthtimeMs = 0;
    this.atime = new Date(0);
    this.mtime = new Date(0);
    this.ctime = new Date(0);
    this.birthtime = new Date(0);
    this.dev = 0;
    this.ino = 0;
    this.mode = HR;
    this.nlink = 1;
    this.rdev = 0;
    this.blocks = 1;
  }

  isBlockDevice() { return false; }
  isCharacterDevice() { return false; }
  isDirectory() { return (this.mode & 61440) === 16384; }
  isFIFO() { return false; }
  isFile() { return (this.mode & 61440) === 32768; }
  isSocket() { return false; }
  isSymbolicLink() { return (this.mode & 61440) === 40960; }
}

class BigIntStatEntry {
  constructor() {
    this.uid = BigInt(0);
    this.gid = BigInt(0);
    this.size = BigInt(0);
    this.blksize = BigInt(0);
    this.atimeMs = BigInt(0);
    this.mtimeMs = BigInt(0);
    this.ctimeMs = BigInt(0);
    this.birthtimeMs = BigInt(0);
    this.atimeNs = BigInt(0);
    this.mtimeNs = BigInt(0);
    this.ctimeNs = BigInt(0);
    this.birthtimeNs = BigInt(0);
    this.atime = new Date(0);
    this.mtime = new Date(0);
    this.ctime = new Date(0);
    this.birthtime = new Date(0);
    this.dev = BigInt(0);
    this.ino = BigInt(0);
    this.mode = BigInt(HR);
    this.nlink = BigInt(1);
    this.rdev = BigInt(0);
    this.blocks = BigInt(1);
  }

  isBlockDevice() { return false; }
  isCharacterDevice() { return false; }
  isDirectory() { return (this.mode & BigInt(61440)) === BigInt(16384); }
  isFIFO() { return false; }
  isFile() { return (this.mode & BigInt(61440)) === BigInt(32768); }
  isSocket() { return false; }
  isSymbolicLink() { return (this.mode & BigInt(61440)) === BigInt(40960); }
}

function D_e(t) {
  let e, r;
  if (e = t.match(B_e)) {
    t = e[1];
  } else if (r = t.match(v_e)) {
    t = `\\\\${r[1] ? ".\\" : ""}${r[2]}`;
  } else {
    return t;
  }
  return t.replace(/\//g, "\\");
}

function P_e(t) {
  t = t.replace(/\\/g, "/");
  let e, r;
  if (e = t.match(w_e)) {
    t = `/${e[1]}`;
  } else if (r = t.match(I_e)) {
    t = `/unc/${r[1] ? ".dot/" : ""}${r[2]}`;
  }
  return t;
}

function DD(t, e) {
  return t === ue ? O7(e) : GR(e);
}

const Hw = require('path');
const Bt = { root: "/", dot: ".", parent: ".." };
const dr = { home: "~", nodeModules: "node_modules", manifest: "package.json", lockfile: "yarn.lock", virtual: "__virtual__", pnpJs: ".pnp.js", pnpCjs: ".pnp.cjs", pnpData: ".pnp.data.json", pnpEsmLoader: ".pnp.loader.mjs" };

(() => {
  // Original minified code continues here...
})();

