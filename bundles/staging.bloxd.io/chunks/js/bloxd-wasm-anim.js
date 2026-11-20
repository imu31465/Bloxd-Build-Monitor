export const id = 5;
export const ids = [5];
export const modules = {
  42775: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_anim_bg.72940cfd2d68260d9b79.wasm"
  },
  42771: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BloxdAnimWasmError: () => VT,
      compileAnimationPackInWasm: () => XT
    });
    var lT = {};

    function MT(TT, kT, cT, lT, MT, KT) {
      const OT = QT(TT, bT.eZXG),
        yT = zT,
        fT = QT(kT, bT.eZXG),
        xT = zT,
        IT = QT(cT, bT.eZXG),
        AT = zT,
        CT = QT(lT, bT.eZXG),
        vT = zT,
        tT = QT(MT, bT.eZXG),
        hT = zT;
      var ST = NT(KT) ? 0 : function(TT, kT) {
          const cT = kT(1 * TT.length, 1) >>> 0;
          return jT().set(TT, cT / 1), zT = TT.length, cT
        }(KT, bT.eZXG),
        aT = zT;
      const FT = bT.WKwf(OT, yT, fT, xT, IT, AT, CT, vT, tT, hT, ST, aT);
      if (FT[3]) throw DT(FT[2]);
      var rT, PT, wT = (rT = FT[0], PT = FT[1], rT >>>= 0, jT().subarray(rT / 1, rT / 1 + PT)).slice();
      return bT.SyBO(FT[0], 1 * FT[1], 1), wT
    }

    function KT(TT, kT) {
      const cT = ST(TT, bT.eZXG, bT.suSW),
        lT = zT,
        MT = bT.ziZJ(cT, lT, kT);
      if (MT[1]) throw DT(MT[0])
    }

    function OT() {
      bT.Ub9P()
    }

    function yT() {
      return {
        __proto__: null,
        x09S: {
          __proto__: null,
          PnsL: function(TT, kT) {
            return fT(Error(AT(TT, kT)))
          },
          CrWC: function(TT, kT) {
            const cT = vT(kT),
              lT = "string" === typeof cT ? cT : void 0;
            var MT = NT(lT) ? 0 : ST(lT, bT.eZXG, bT.suSW),
              KT = zT;
            IT().setInt32(TT + 4, KT, !0), IT().setInt32(TT + 0, MT, !0)
          },
          B2rz: function(TT, kT) {
            throw new Error(AT(TT, kT))
          },
          PY3Z: function(TT, kT) {
            console.error(AT(TT, kT))
          },
          tgzV: function(TT) {
            DT(TT)
          }
        }
      }
    }

    function fT(TT) {
      hT === tT.length && tT.push(tT.length + 1);
      const kT = hT;
      return hT = tT[kT], tT[kT] = TT, kT
    }
    cT.r(lT), cT.d(lT, {
      nKT: () => MT,
      lA: () => KT,
      default: () => HT,
      initSync: () => oT,
      MA: () => OT
    });
    let xT = null;

    function IT() {
      return (null === xT || !0 === xT.buffer.detached || void 0 === xT.buffer.detached && xT.buffer !== bT.memory.buffer) && (xT = new DataView(bT.memory.buffer)), xT
    }

    function AT(TT, kT) {
      return function(TT, kT) {
        rT += kT, rT >= FT && (aT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), aT.decode(), rT = kT);
        return aT.decode(jT().subarray(TT, TT + kT))
      }(TT >>> 0, kT)
    }
    let CT = null;

    function jT() {
      return null !== CT && 0 !== CT.byteLength || (CT = new Uint8Array(bT.memory.buffer)), CT
    }

    function vT(TT) {
      return tT[TT]
    }
    let tT = new Array(1024).fill(void 0);
    tT.push(void 0, null, !0, !1);
    let hT = tT.length;

    function NT(TT) {
      return void 0 === TT || null === TT
    }

    function QT(TT, kT) {
      const cT = kT(4 * TT.length, 4) >>> 0,
        lT = IT();
      for (let MT = 0; MT < TT.length; MT++) lT.setUint32(cT + 4 * MT, fT(TT[MT]), !0);
      return zT = TT.length, cT
    }

    function ST(TT, kT, cT) {
      if (void 0 === cT) {
        const cT = PT.encode(TT),
          lT = kT(cT.length, 1) >>> 0;
        return jT().subarray(lT, lT + cT.length).set(cT), zT = cT.length, lT
      }
      let lT = TT.length,
        MT = kT(lT, 1) >>> 0;
      const KT = jT();
      let OT = 0;
      for (; OT < lT; OT++) {
        const kT = TT.charCodeAt(OT);
        if (kT > 127) break;
        KT[MT + OT] = kT
      }
      if (OT !== lT) {
        0 !== OT && (TT = TT.slice(OT)), MT = cT(MT, lT, lT = OT + 3 * TT.length, 1) >>> 0;
        const kT = jT().subarray(MT + OT, MT + lT);
        OT += PT.encodeInto(TT, kT).written, MT = cT(MT, lT, OT, 1) >>> 0
      }
      return zT = OT, MT
    }

    function DT(TT) {
      const kT = vT(TT);
      return function(TT) {
        TT < 1028 || (tT[TT] = hT, hT = TT)
      }(TT), kT
    }
    let aT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    aT.decode();
    const FT = 2146435072;
    let rT = 0;
    const PT = new TextEncoder;
    "encodeInto" in PT || (PT.encodeInto = function(TT, kT) {
      const cT = PT.encode(TT);
      return kT.set(cT), {
        read: TT.length,
        written: cT.length
      }
    });
    let wT, mT, bT, zT = 0;

    function JT(TT, kT) {
      return mT = TT, bT = TT.exports, wT = kT, xT = null, CT = null, bT.i0cp(), bT
    }

    function oT(TT) {
      if (void 0 !== bT) return bT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const kT = yT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return JT(new WebAssembly.Instance(TT, kT), TT)
    }
    async function HT(TT) {
      if (void 0 !== bT) return bT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const kT = yT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: cT,
        module: lT
      } = await async function(TT, kT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, kT)
          } catch (cT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw cT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cT)
          }
          const lT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(lT, kT)
        } {
          const cT = await WebAssembly.instantiate(TT, kT);
          return cT instanceof WebAssembly.Instance ? {
            instance: cT,
            module: TT
          } : cT
        }
      }(await TT, kT);
      return JT(cT, lT)
    }
    var eT = cT(3684),
      GT = cT(6609);
    class VT extends Error {
      stage;
      constructor(TT, kT) {
        super((0, eT.F)(TT, kT), {
          cause: kT
        }), this.name = "BloxdAnimWasmError", this.stage = TT
      }
    }
    let ET = null,
      ZT = null;

    function uT() {
      if (ZT) throw ZT
    }
    async function XT(TT, kT, MT) {
      uT();
      const KT = await (ET ??= (async () => {
        let TT;
        try {
          TT = await (0, eT.J)(new cT.U(cT(42775)), (0, GT.e)("bloxd_wasm_anim"))
        } catch (kT) {
          throw new VT((0, eT.R)(kT), kT)
        }
        try {
          await HT({
            module_or_path: TT
          })
        } catch (kT) {
          throw new VT("instantiate", kT)
        }
        return lT
      })(), ET.catch((() => {
        ET = null
      })), ET);
      uT();
      try {
        return KT.nKT(Object.entries(TT).flat(), [...kT.mobTypes], [...kT.vehicleTypes], [...kT.mobAiStates], [...kT.playerPoses], "builtIns" in MT ? MT.builtIns : void 0)
      } catch (OT) {
        const TT = new VT("call", OT);
        throw OT instanceof WebAssembly.RuntimeError && (ZT = TT), TT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);