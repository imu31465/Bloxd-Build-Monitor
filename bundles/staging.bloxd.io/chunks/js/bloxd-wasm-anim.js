export const id = 5;
export const ids = [5];
export const modules = {
  42634: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_anim_bg.86d99ae5d33500eeeff5.wasm"
  },
  42631: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BloxdAnimWasmError: () => Ob,
      compileAnimationPackInWasm: () => zb
    });
    var kb = {};

    function Wb(bb, cb, sb, kb, Wb, ab) {
      const Tb = Cb(bb, Bb.tqpA),
        Ub = tb,
        Ib = Cb(cb, Bb.tqpA),
        Hb = tb,
        fb = Cb(sb, Bb.tqpA),
        Mb = tb,
        Xb = Cb(kb, Bb.tqpA),
        mb = tb,
        lb = Cb(Wb, Bb.tqpA),
        Qb = tb;
      var Nb = eb(ab) ? 0 : function(bb, cb) {
          const sb = cb(1 * bb.length, 1) >>> 0;
          return nb().set(bb, sb / 1), tb = bb.length, sb
        }(ab, Bb.tqpA),
        Lb = tb;
      const ub = Bb.Tgwl(Tb, Ub, Ib, Hb, fb, Mb, Xb, mb, lb, Qb, Nb, Lb);
      if (ub[3]) throw Vb(ub[2]);
      var Yb, hb, Jb = (Yb = ub[0], hb = ub[1], Yb >>>= 0, nb().subarray(Yb / 1, Yb / 1 + hb)).slice();
      return Bb.G6jn(ub[0], 1 * ub[1], 1), Jb
    }

    function ab(bb, cb) {
      const sb = Nb(bb, Bb.tqpA, Bb.AXmm),
        kb = tb,
        Wb = Bb.EFu5(sb, kb, cb);
      if (Wb[1]) throw Vb(Wb[0])
    }

    function Tb() {
      Bb.vpUl()
    }

    function Ub() {
      return {
        __proto__: null,
        uxJP: {
          __proto__: null,
          DYWU: function(bb, cb) {
            return Ib(Error(Mb(bb, cb)))
          },
          T9WR: function(bb, cb) {
            const sb = mb(cb),
              kb = "string" === typeof sb ? sb : void 0;
            var Wb = eb(kb) ? 0 : Nb(kb, Bb.tqpA, Bb.AXmm),
              ab = tb;
            fb().setInt32(bb + 4, ab, !0), fb().setInt32(bb + 0, Wb, !0)
          },
          HTKL: function(bb, cb) {
            throw new Error(Mb(bb, cb))
          },
          S3Hx: function(bb, cb) {
            console.error(Mb(bb, cb))
          },
          ayT4: function(bb) {
            Vb(bb)
          }
        }
      }
    }

    function Ib(bb) {
      Qb === lb.length && lb.push(lb.length + 1);
      const cb = Qb;
      return Qb = lb[cb], lb[cb] = bb, cb
    }
    sb.r(kb), sb.d(kb, {
      lTb: () => Wb,
      CM: () => ab,
      default: () => Db,
      initSync: () => Pb,
      NM: () => Tb
    });
    let Hb = null;

    function fb() {
      return (null === Hb || !0 === Hb.buffer.detached || void 0 === Hb.buffer.detached && Hb.buffer !== Bb.memory.buffer) && (Hb = new DataView(Bb.memory.buffer)), Hb
    }

    function Mb(bb, cb) {
      return function(bb, cb) {
        Yb += cb, Yb >= ub && (Lb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Lb.decode(), Yb = cb);
        return Lb.decode(nb().subarray(bb, bb + cb))
      }(bb >>> 0, cb)
    }
    let Xb = null;

    function nb() {
      return null !== Xb && 0 !== Xb.byteLength || (Xb = new Uint8Array(Bb.memory.buffer)), Xb
    }

    function mb(bb) {
      return lb[bb]
    }
    let lb = new Array(1024).fill(void 0);
    lb.push(void 0, null, !0, !1);
    let Qb = lb.length;

    function eb(bb) {
      return void 0 === bb || null === bb
    }

    function Cb(bb, cb) {
      const sb = cb(4 * bb.length, 4) >>> 0,
        kb = fb();
      for (let Wb = 0; Wb < bb.length; Wb++) kb.setUint32(sb + 4 * Wb, Ib(bb[Wb]), !0);
      return tb = bb.length, sb
    }

    function Nb(bb, cb, sb) {
      if (void 0 === sb) {
        const sb = hb.encode(bb),
          kb = cb(sb.length, 1) >>> 0;
        return nb().subarray(kb, kb + sb.length).set(sb), tb = sb.length, kb
      }
      let kb = bb.length,
        Wb = cb(kb, 1) >>> 0;
      const ab = nb();
      let Tb = 0;
      for (; Tb < kb; Tb++) {
        const cb = bb.charCodeAt(Tb);
        if (cb > 127) break;
        ab[Wb + Tb] = cb
      }
      if (Tb !== kb) {
        0 !== Tb && (bb = bb.slice(Tb)), Wb = sb(Wb, kb, kb = Tb + 3 * bb.length, 1) >>> 0;
        const cb = nb().subarray(Wb + Tb, Wb + kb);
        Tb += hb.encodeInto(bb, cb).written, Wb = sb(Wb, kb, Tb, 1) >>> 0
      }
      return tb = Tb, Wb
    }

    function Vb(bb) {
      const cb = mb(bb);
      return function(bb) {
        bb < 1028 || (lb[bb] = Qb, Qb = bb)
      }(bb), cb
    }
    let Lb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Lb.decode();
    const ub = 2146435072;
    let Yb = 0;
    const hb = new TextEncoder;
    "encodeInto" in hb || (hb.encodeInto = function(bb, cb) {
      const sb = hb.encode(bb);
      return cb.set(sb), {
        read: bb.length,
        written: sb.length
      }
    });
    let Jb, gb, Bb, tb = 0;

    function yb(bb, cb) {
      return gb = bb, Bb = bb.exports, Jb = cb, Hb = null, Xb = null, Bb.QKNk(), Bb
    }

    function Pb(bb) {
      if (void 0 !== Bb) return Bb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cb = Ub();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return yb(new WebAssembly.Instance(bb, cb), bb)
    }
    async function Db(bb) {
      if (void 0 !== Bb) return Bb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cb = Ub();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: sb,
        module: kb
      } = await async function(bb, cb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, cb)
          } catch (sb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw sb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", sb)
          }
          const kb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(kb, cb)
        } {
          const sb = await WebAssembly.instantiate(bb, cb);
          return sb instanceof WebAssembly.Instance ? {
            instance: sb,
            module: bb
          } : sb
        }
      }(await bb, cb);
      return yb(sb, kb)
    }
    var Eb = sb(3505),
      ib = sb(6285);
    class Ob extends Error {
      stage;
      constructor(bb, cb) {
        super((0, Eb.x)(bb, cb), {
          cause: cb
        }), this.name = "BloxdAnimWasmError", this.stage = bb
      }
    }
    let Gb = null,
      Kb = null;

    function Zb() {
      if (Kb) throw Kb
    }
    async function zb(bb, cb, Wb) {
      Zb();
      const ab = await (Gb ??= (async () => {
        let bb;
        try {
          bb = await (0, Eb.A)(new sb.U(sb(42634)), (0, ib.d)("bloxd_wasm_anim"))
        } catch (cb) {
          throw new Ob((0, Eb.E)(cb), cb)
        }
        try {
          await Db({
            module_or_path: bb
          })
        } catch (cb) {
          throw new Ob("instantiate", cb)
        }
        return kb
      })(), Gb.catch((() => {
        Gb = null
      })), Gb);
      Zb();
      try {
        return ab.lTb(Object.entries(bb).flat(), [...cb.mobTypes], [...cb.vehicleTypes], [...cb.mobAiStates], [...cb.playerPoses], "builtIns" in Wb ? Wb.builtIns : void 0)
      } catch (Tb) {
        const bb = new Ob("call", Tb);
        throw Tb instanceof WebAssembly.RuntimeError && (Kb = bb), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);