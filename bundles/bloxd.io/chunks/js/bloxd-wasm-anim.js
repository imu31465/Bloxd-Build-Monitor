export const id = 5;
export const ids = [5];
export const modules = {
  54864: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_anim_bg.376b5350f54590266799.wasm"
  },
  54858: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BloxdAnimWasmError: () => Wb,
      compileAnimationPackInWasm: () => vb
    });
    var eb = {};

    function Hb(bb, wb, Mb, eb, Hb, pb) {
      const Vb = sb(bb, Rb.JUT0),
        gb = Db,
        lb = sb(wb, Rb.JUT0),
        Lb = Db,
        Ib = sb(Mb, Rb.JUT0),
        Ob = Db,
        Ub = sb(eb, Rb.JUT0),
        Cb = Db,
        Eb = sb(Hb, Rb.JUT0),
        Fb = Db;
      var mb = Bb(pb) ? 0 : function(bb, wb) {
          const Mb = wb(1 * bb.length, 1) >>> 0;
          return tb().set(bb, Mb / 1), Db = bb.length, Mb
        }(pb, Rb.JUT0),
        zb = Db;
      const Xb = Rb.yqwN(Vb, gb, lb, Lb, Ib, Ob, Ub, Cb, Eb, Fb, mb, zb);
      if (Xb[3]) throw hb(Xb[2]);
      var xb, jb, Kb = (xb = Xb[0], jb = Xb[1], xb >>>= 0, tb().subarray(xb / 1, xb / 1 + jb)).slice();
      return Rb.dy5f(Xb[0], 1 * Xb[1], 1), Kb
    }

    function pb(bb, wb) {
      const Mb = mb(bb, Rb.JUT0, Rb.XLC0),
        eb = Db,
        Hb = Rb.HKY4(Mb, eb, wb);
      if (Hb[1]) throw hb(Hb[0])
    }

    function Vb() {
      Rb.uj9q()
    }

    function gb() {
      return {
        __proto__: null,
        pJQS: {
          __proto__: null,
          lFvs: function(bb, wb) {
            return lb(Error(Ob(bb, wb)))
          },
          Y4KG: function(bb, wb) {
            const Mb = Cb(wb),
              eb = "string" === typeof Mb ? Mb : void 0;
            var Hb = Bb(eb) ? 0 : mb(eb, Rb.JUT0, Rb.XLC0),
              pb = Db;
            Ib().setInt32(bb + 4, pb, !0), Ib().setInt32(bb + 0, Hb, !0)
          },
          Khxe: function(bb, wb) {
            throw new Error(Ob(bb, wb))
          },
          b0Tp: function(bb, wb) {
            console.error(Ob(bb, wb))
          },
          enV8: function(bb) {
            hb(bb)
          }
        }
      }
    }

    function lb(bb) {
      Fb === Eb.length && Eb.push(Eb.length + 1);
      const wb = Fb;
      return Fb = Eb[wb], Eb[wb] = bb, wb
    }
    Mb.r(eb), Mb.d(eb, {
      tlb: () => Hb,
      xO: () => pb,
      default: () => Zb,
      initSync: () => Yb,
      jO: () => Vb
    });
    let Lb = null;

    function Ib() {
      return null !== Lb && Lb.buffer === Rb.memory.buffer || (Lb = new DataView(Rb.memory.buffer)), Lb
    }

    function Ob(bb, wb) {
      return function(bb, wb) {
        xb += wb, xb >= Xb && (zb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), zb.decode(), xb = wb);
        return zb.decode(tb().subarray(bb, bb + wb))
      }(bb >>> 0, wb)
    }
    let Ub = null;

    function tb() {
      return null !== Ub && 0 !== Ub.byteLength || (Ub = new Uint8Array(Rb.memory.buffer)), Ub
    }

    function Cb(bb) {
      return Eb[bb]
    }
    let Eb = new Array(1024).fill(void 0);
    Eb.push(void 0, null, !0, !1);
    let Fb = Eb.length;

    function Bb(bb) {
      return void 0 === bb || null === bb
    }

    function sb(bb, wb) {
      const Mb = wb(4 * bb.length, 4) >>> 0,
        eb = Ib();
      for (let Hb = 0; Hb < bb.length; Hb++) eb.setUint32(Mb + 4 * Hb, lb(bb[Hb]), !0);
      return Db = bb.length, Mb
    }

    function mb(bb, wb, Mb) {
      if (void 0 === Mb) {
        const Mb = jb.encode(bb),
          eb = wb(Mb.length, 1) >>> 0;
        return tb().subarray(eb, eb + Mb.length).set(Mb), Db = Mb.length, eb
      }
      let eb = bb.length,
        Hb = wb(eb, 1) >>> 0;
      const pb = tb();
      let Vb = 0;
      for (; Vb < eb; Vb++) {
        const wb = bb.charCodeAt(Vb);
        if (wb > 127) break;
        pb[Hb + Vb] = wb
      }
      if (Vb !== eb) {
        0 !== Vb && (bb = bb.slice(Vb)), Hb = Mb(Hb, eb, eb = Vb + 3 * bb.length, 1) >>> 0;
        const wb = tb().subarray(Hb + Vb, Hb + eb);
        Vb += jb.encodeInto(bb, wb).written, Hb = Mb(Hb, eb, Vb, 1) >>> 0
      }
      return Db = Vb, Hb
    }

    function hb(bb) {
      const wb = Cb(bb);
      return function(bb) {
        bb < 1028 || (Eb[bb] = Fb, Fb = bb)
      }(bb), wb
    }
    let zb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    zb.decode();
    const Xb = 2146435072;
    let xb = 0;
    const jb = new TextEncoder;
    "encodeInto" in jb || (jb.encodeInto = function(bb, wb) {
      const Mb = jb.encode(bb);
      return wb.set(Mb), {
        read: bb.length,
        written: Mb.length
      }
    });
    let Kb, rb, Rb, Db = 0;

    function cb(bb, wb) {
      return rb = bb, Rb = bb.exports, Kb = wb, Lb = null, Ub = null, Rb.jklg(), Rb
    }

    function Yb(bb) {
      if (void 0 !== Rb) return Rb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const wb = gb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return cb(new WebAssembly.Instance(bb, wb), bb)
    }
    async function Zb(bb) {
      if (void 0 !== Rb) return Rb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const wb = gb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: Mb,
        module: eb
      } = await async function(bb, wb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, wb)
          } catch (Mb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw Mb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Mb)
          }
          const eb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(eb, wb)
        } {
          const Mb = await WebAssembly.instantiate(bb, wb);
          return Mb instanceof WebAssembly.Instance ? {
            instance: Mb,
            module: bb
          } : Mb
        }
      }(await bb, wb);
      return cb(Mb, eb)
    }
    var fb = Mb(2471),
      Ab = Mb(7804);
    class Wb extends Error {
      stage;
      constructor(bb, wb) {
        super((0, fb.x)(bb, wb), {
          cause: wb
        }), this.name = "BloxdAnimWasmError", this.stage = bb
      }
    }
    let Jb = null,
      Sb = null;

    function Nb() {
      if (Sb) throw Sb
    }
    async function vb(bb, wb, Hb) {
      Nb();
      const pb = await (Jb ??= (async () => {
        let bb;
        try {
          bb = await (0, fb.y)(new Mb.U(Mb(54864)), (0, Ab.e)("bloxd_wasm_anim"))
        } catch (wb) {
          throw new Wb((0, fb.E)(wb), wb)
        }
        try {
          await Zb({
            module_or_path: bb
          })
        } catch (wb) {
          throw new Wb("instantiate", wb)
        }
        return eb
      })(), Jb.catch((() => {
        Jb = null
      })), Jb);
      Nb();
      try {
        return pb.tlb(Object.entries(bb).flat(), [...wb.mobTypes], [...wb.vehicleTypes], [...wb.mobAiStates], [...wb.playerPoses], "builtIns" in Hb ? Hb.builtIns : void 0)
      } catch (Vb) {
        const bb = new Wb("call", Vb);
        throw Vb instanceof WebAssembly.RuntimeError && (Sb = bb), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);