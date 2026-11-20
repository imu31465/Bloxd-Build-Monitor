export const id = 5;
export const ids = [5];
export const modules = {
  42678: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_anim_bg.695678f2c00bb059e5e2.wasm"
  },
  42670: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BloxdAnimWasmError: () => eb,
      compileAnimationPackInWasm: () => mb
    });
    var Bb = {};

    function Ob(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = lb(bb, xb.cF1X),
        Lb = zb,
        Yb = lb(ub, xb.cF1X),
        Sb = zb,
        ab = lb(hb, xb.cF1X),
        Hb = zb,
        wb = lb(Bb, xb.cF1X),
        Xb = zb,
        pb = lb(Ob, xb.cF1X),
        ob = zb;
      var Kb = Ab(Gb) ? 0 : function(bb, ub) {
          const hb = ub(1 * bb.length, 1) >>> 0;
          return Zb().set(bb, hb / 1), zb = bb.length, hb
        }(Gb, xb.cF1X),
        Cb = zb;
      const db = xb.sDKb(Ub, Lb, Yb, Sb, ab, Hb, wb, Xb, pb, ob, Kb, Cb);
      if (db[3]) throw Wb(db[2]);
      var rb, jb, nb = (rb = db[0], jb = db[1], rb >>>= 0, Zb().subarray(rb / 1, rb / 1 + jb)).slice();
      return xb.FlIq(db[0], 1 * db[1], 1), nb
    }

    function Gb(bb, ub) {
      const hb = Kb(bb, xb.cF1X, xb.JMsM),
        Bb = zb,
        Ob = xb.nlvi(hb, Bb, ub);
      if (Ob[1]) throw Wb(Ob[0])
    }

    function Ub() {
      xb.sd5j()
    }

    function Lb() {
      return {
        __proto__: null,
        KFSc: {
          __proto__: null,
          MhJU: function(bb, ub) {
            return Yb(Error(Hb(bb, ub)))
          },
          DKZ2: function(bb, ub) {
            const hb = Xb(ub),
              Bb = "string" === typeof hb ? hb : void 0;
            var Ob = Ab(Bb) ? 0 : Kb(Bb, xb.cF1X, xb.JMsM),
              Gb = zb;
            ab().setInt32(bb + 4, Gb, !0), ab().setInt32(bb + 0, Ob, !0)
          },
          jV30: function(bb, ub) {
            throw new Error(Hb(bb, ub))
          },
          acuU: function(bb, ub) {
            console.error(Hb(bb, ub))
          },
          Ol68: function(bb) {
            Wb(bb)
          }
        }
      }
    }

    function Yb(bb) {
      ob === pb.length && pb.push(pb.length + 1);
      const ub = ob;
      return ob = pb[ub], pb[ub] = bb, ub
    }
    hb.r(Bb), hb.d(Bb, {
      JUb: () => Ob,
      Ea: () => Gb,
      default: () => vb,
      initSync: () => ib,
      ya: () => Ub
    });
    let Sb = null;

    function ab() {
      return (null === Sb || !0 === Sb.buffer.detached || void 0 === Sb.buffer.detached && Sb.buffer !== xb.memory.buffer) && (Sb = new DataView(xb.memory.buffer)), Sb
    }

    function Hb(bb, ub) {
      return function(bb, ub) {
        rb += ub, rb >= db && (Cb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Cb.decode(), rb = ub);
        return Cb.decode(Zb().subarray(bb, bb + ub))
      }(bb >>> 0, ub)
    }
    let wb = null;

    function Zb() {
      return null !== wb && 0 !== wb.byteLength || (wb = new Uint8Array(xb.memory.buffer)), wb
    }

    function Xb(bb) {
      return pb[bb]
    }
    let pb = new Array(1024).fill(void 0);
    pb.push(void 0, null, !0, !1);
    let ob = pb.length;

    function Ab(bb) {
      return void 0 === bb || null === bb
    }

    function lb(bb, ub) {
      const hb = ub(4 * bb.length, 4) >>> 0,
        Bb = ab();
      for (let Ob = 0; Ob < bb.length; Ob++) Bb.setUint32(hb + 4 * Ob, Yb(bb[Ob]), !0);
      return zb = bb.length, hb
    }

    function Kb(bb, ub, hb) {
      if (void 0 === hb) {
        const hb = jb.encode(bb),
          Bb = ub(hb.length, 1) >>> 0;
        return Zb().subarray(Bb, Bb + hb.length).set(hb), zb = hb.length, Bb
      }
      let Bb = bb.length,
        Ob = ub(Bb, 1) >>> 0;
      const Gb = Zb();
      let Ub = 0;
      for (; Ub < Bb; Ub++) {
        const ub = bb.charCodeAt(Ub);
        if (ub > 127) break;
        Gb[Ob + Ub] = ub
      }
      if (Ub !== Bb) {
        0 !== Ub && (bb = bb.slice(Ub)), Ob = hb(Ob, Bb, Bb = Ub + 3 * bb.length, 1) >>> 0;
        const ub = Zb().subarray(Ob + Ub, Ob + Bb);
        Ub += jb.encodeInto(bb, ub).written, Ob = hb(Ob, Bb, Ub, 1) >>> 0
      }
      return zb = Ub, Ob
    }

    function Wb(bb) {
      const ub = Xb(bb);
      return function(bb) {
        bb < 1028 || (pb[bb] = ob, ob = bb)
      }(bb), ub
    }
    let Cb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Cb.decode();
    const db = 2146435072;
    let rb = 0;
    const jb = new TextEncoder;
    "encodeInto" in jb || (jb.encodeInto = function(bb, ub) {
      const hb = jb.encode(bb);
      return ub.set(hb), {
        read: bb.length,
        written: hb.length
      }
    });
    let nb, Db, xb, zb = 0;

    function gb(bb, ub) {
      return Db = bb, xb = bb.exports, nb = ub, Sb = null, wb = null, xb.MkOT(), xb
    }

    function ib(bb) {
      if (void 0 !== xb) return xb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ub = Lb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return gb(new WebAssembly.Instance(bb, ub), bb)
    }
    async function vb(bb) {
      if (void 0 !== xb) return xb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ub = Lb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: hb,
        module: Bb
      } = await async function(bb, ub) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, ub)
          } catch (hb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw hb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", hb)
          }
          const Bb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(Bb, ub)
        } {
          const hb = await WebAssembly.instantiate(bb, ub);
          return hb instanceof WebAssembly.Instance ? {
            instance: hb,
            module: bb
          } : hb
        }
      }(await bb, ub);
      return gb(hb, Bb)
    }
    var tb = hb(2688),
      Jb = hb(6358);
    class eb extends Error {
      stage;
      constructor(bb, ub) {
        super((0, tb.A)(bb, ub), {
          cause: ub
        }), this.name = "BloxdAnimWasmError", this.stage = bb
      }
    }
    let Nb = null,
      sb = null;

    function Mb() {
      if (sb) throw sb
    }
    async function mb(bb, ub, Ob) {
      Mb();
      const Gb = await (Nb ??= (async () => {
        let bb;
        try {
          bb = await (0, tb.C)(new hb.U(hb(42678)), (0, Jb.d)("bloxd_wasm_anim"))
        } catch (ub) {
          throw new eb((0, tb.K)(ub), ub)
        }
        try {
          await vb({
            module_or_path: bb
          })
        } catch (ub) {
          throw new eb("instantiate", ub)
        }
        return Bb
      })(), Nb.catch((() => {
        Nb = null
      })), Nb);
      Mb();
      try {
        return Gb.JUb(Object.entries(bb).flat(), [...ub.mobTypes], [...ub.vehicleTypes], [...ub.mobAiStates], [...ub.playerPoses], "builtIns" in Ob ? Ob.builtIns : void 0)
      } catch (Ub) {
        const bb = new eb("call", Ub);
        throw Ub instanceof WebAssembly.RuntimeError && (sb = bb), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);