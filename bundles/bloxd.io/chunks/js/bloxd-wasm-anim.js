export const id = 5;
export const ids = [5];
export const modules = {
  42377: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_anim_bg.c6262fa91f6c7562c4c9.wasm"
  },
  42372: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BloxdAnimWasmError: () => Qb,
      compileAnimationPackInWasm: () => Kb
    });
    var Ab = {};

    function Mb(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = Zb(bb, Wb.Wz9m),
        Yb = Hb,
        Bb = Zb(ab, Wb.Wz9m),
        eb = Hb,
        vb = Zb(Ub, Wb.Wz9m),
        Lb = Hb,
        Pb = Zb(Ab, Wb.Wz9m),
        jb = Hb,
        Rb = Zb(Mb, Wb.Wz9m),
        kb = Hb;
      var Db = yb(Tb) ? 0 : function(bb, ab) {
          const Ub = ab(1 * bb.length, 1) >>> 0;
          return Xb().set(bb, Ub / 1), Hb = bb.length, Ub
        }(Tb, Wb.Wz9m),
        xb = Hb;
      const ib = Wb.tX64(Eb, Yb, Bb, eb, vb, Lb, Pb, jb, Rb, kb, Db, xb);
      if (ib[3]) throw zb(ib[2]);
      var fb, mb, pb = (fb = ib[0], mb = ib[1], fb >>>= 0, Xb().subarray(fb / 1, fb / 1 + mb)).slice();
      return Wb.IUMA(ib[0], 1 * ib[1], 1), pb
    }

    function Tb(bb, ab) {
      const Ub = Db(bb, Wb.Wz9m, Wb.hhcM),
        Ab = Hb,
        Mb = Wb.iLr5(Ub, Ab, ab);
      if (Mb[1]) throw zb(Mb[0])
    }

    function Eb() {
      Wb.cuHp()
    }

    function Yb() {
      return {
        __proto__: null,
        ug6H: {
          __proto__: null,
          ldH4: function(bb, ab) {
            return Bb(Error(Lb(bb, ab)))
          },
          k6cr: function(bb, ab) {
            const Ub = jb(ab),
              Ab = "string" === typeof Ub ? Ub : void 0;
            var Mb = yb(Ab) ? 0 : Db(Ab, Wb.Wz9m, Wb.hhcM),
              Tb = Hb;
            vb().setInt32(bb + 4, Tb, !0), vb().setInt32(bb + 0, Mb, !0)
          },
          Tjct: function(bb, ab) {
            throw new Error(Lb(bb, ab))
          },
          N3P3: function(bb, ab) {
            console.error(Lb(bb, ab))
          },
          RrLR: function(bb) {
            zb(bb)
          }
        }
      }
    }

    function Bb(bb) {
      kb === Rb.length && Rb.push(Rb.length + 1);
      const ab = kb;
      return kb = Rb[ab], Rb[ab] = bb, ab
    }
    Ub.r(Ab), Ub.d(Ab, {
      EEb: () => Mb,
      Ov: () => Tb,
      default: () => Fb,
      initSync: () => db,
      cv: () => Eb
    });
    let eb = null;

    function vb() {
      return (null === eb || !0 === eb.buffer.detached || void 0 === eb.buffer.detached && eb.buffer !== Wb.memory.buffer) && (eb = new DataView(Wb.memory.buffer)), eb
    }

    function Lb(bb, ab) {
      return function(bb, ab) {
        fb += ab, fb >= ib && (xb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), xb.decode(), fb = ab);
        return xb.decode(Xb().subarray(bb, bb + ab))
      }(bb >>> 0, ab)
    }
    let Pb = null;

    function Xb() {
      return null !== Pb && 0 !== Pb.byteLength || (Pb = new Uint8Array(Wb.memory.buffer)), Pb
    }

    function jb(bb) {
      return Rb[bb]
    }
    let Rb = new Array(1024).fill(void 0);
    Rb.push(void 0, null, !0, !1);
    let kb = Rb.length;

    function yb(bb) {
      return void 0 === bb || null === bb
    }

    function Zb(bb, ab) {
      const Ub = ab(4 * bb.length, 4) >>> 0,
        Ab = vb();
      for (let Mb = 0; Mb < bb.length; Mb++) Ab.setUint32(Ub + 4 * Mb, Bb(bb[Mb]), !0);
      return Hb = bb.length, Ub
    }

    function Db(bb, ab, Ub) {
      if (void 0 === Ub) {
        const Ub = mb.encode(bb),
          Ab = ab(Ub.length, 1) >>> 0;
        return Xb().subarray(Ab, Ab + Ub.length).set(Ub), Hb = Ub.length, Ab
      }
      let Ab = bb.length,
        Mb = ab(Ab, 1) >>> 0;
      const Tb = Xb();
      let Eb = 0;
      for (; Eb < Ab; Eb++) {
        const ab = bb.charCodeAt(Eb);
        if (ab > 127) break;
        Tb[Mb + Eb] = ab
      }
      if (Eb !== Ab) {
        0 !== Eb && (bb = bb.slice(Eb)), Mb = Ub(Mb, Ab, Ab = Eb + 3 * bb.length, 1) >>> 0;
        const ab = Xb().subarray(Mb + Eb, Mb + Ab);
        Eb += mb.encodeInto(bb, ab).written, Mb = Ub(Mb, Ab, Eb, 1) >>> 0
      }
      return Hb = Eb, Mb
    }

    function zb(bb) {
      const ab = jb(bb);
      return function(bb) {
        bb < 1028 || (Rb[bb] = kb, kb = bb)
      }(bb), ab
    }
    let xb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    xb.decode();
    const ib = 2146435072;
    let fb = 0;
    const mb = new TextEncoder;
    "encodeInto" in mb || (mb.encodeInto = function(bb, ab) {
      const Ub = mb.encode(bb);
      return ab.set(Ub), {
        read: bb.length,
        written: Ub.length
      }
    });
    let pb, Nb, Wb, Hb = 0;

    function Ib(bb, ab) {
      return Nb = bb, Wb = bb.exports, pb = ab, eb = null, Pb = null, Wb.uuDM(), Wb
    }

    function db(bb) {
      if (void 0 !== Wb) return Wb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ab = Yb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return Ib(new WebAssembly.Instance(bb, ab), bb)
    }
    async function Fb(bb) {
      if (void 0 !== Wb) return Wb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ab = Yb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: Ub,
        module: Ab
      } = await async function(bb, ab) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, ab)
          } catch (Ub) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw Ub;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Ub)
          }
          const Ab = await bb.arrayBuffer();
          return await WebAssembly.instantiate(Ab, ab)
        } {
          const Ub = await WebAssembly.instantiate(bb, ab);
          return Ub instanceof WebAssembly.Instance ? {
            instance: Ub,
            module: bb
          } : Ub
        }
      }(await bb, ab);
      return Ib(Ub, Ab)
    }
    var hb = Ub(3382),
      Gb = Ub(6251);
    class Qb extends Error {
      stage;
      constructor(bb, ab) {
        super((0, hb.w)(bb, ab), {
          cause: ab
        }), this.name = "BloxdAnimWasmError", this.stage = bb
      }
    }
    let qb = null,
      ub = null;

    function rb() {
      if (ub) throw ub
    }
    async function Kb(bb, ab, Mb) {
      rb();
      const Tb = await (qb ??= (async () => {
        let bb;
        try {
          bb = await (0, hb.A)(new Ub.U(Ub(42377)), (0, Gb.b)("bloxd_wasm_anim"))
        } catch (ab) {
          throw new Qb((0, hb.G)(ab), ab)
        }
        try {
          await Fb({
            module_or_path: bb
          })
        } catch (ab) {
          throw new Qb("instantiate", ab)
        }
        return Ab
      })(), qb.catch((() => {
        qb = null
      })), qb);
      rb();
      try {
        return Tb.EEb(Object.entries(bb).flat(), [...ab.mobTypes], [...ab.vehicleTypes], [...ab.mobAiStates], [...ab.playerPoses], "builtIns" in Mb ? Mb.builtIns : void 0)
      } catch (Eb) {
        const bb = new Qb("call", Eb);
        throw Eb instanceof WebAssembly.RuntimeError && (ub = bb), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);