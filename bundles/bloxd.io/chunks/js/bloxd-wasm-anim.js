export const id = 5;
export const ids = [5];
export const modules = {
  42819: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_anim_bg.6f8dededeb4aaaa84457.wasm"
  },
  42816: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BloxdAnimWasmError: () => QT,
      compileAnimationPackInWasm: () => VT
    });
    var WT = {};

    function zT(TT, UT, mT, WT, zT, MT) {
      const gT = fT(TT, dT.hjCm),
        nT = wT,
        HT = fT(UT, dT.hjCm),
        kT = wT,
        jT = fT(mT, dT.hjCm),
        lT = wT,
        LT = fT(WT, dT.hjCm),
        BT = wT,
        ZT = fT(zT, dT.hjCm),
        cT = wT;
      var qT = vT(MT) ? 0 : function(TT, UT) {
          const mT = UT(1 * TT.length, 1) >>> 0;
          return pT().set(TT, mT / 1), wT = TT.length, mT
        }(MT, dT.hjCm),
        bT = wT;
      const OT = dT.zNhW(gT, nT, HT, kT, jT, lT, LT, BT, ZT, cT, qT, bT);
      if (OT[3]) throw iT(OT[2]);
      var eT, YT, JT = (eT = OT[0], YT = OT[1], eT >>>= 0, pT().subarray(eT / 1, eT / 1 + YT)).slice();
      return dT.Wd9d(OT[0], 1 * OT[1], 1), JT
    }

    function MT(TT, UT) {
      const mT = qT(TT, dT.hjCm, dT.CahQ),
        WT = wT,
        zT = dT.sapL(mT, WT, UT);
      if (zT[1]) throw iT(zT[0])
    }

    function gT() {
      dT.B008()
    }

    function nT() {
      return {
        __proto__: null,
        njJM: {
          __proto__: null,
          fVVy: function(TT, UT) {
            return HT(Error(lT(TT, UT)))
          },
          aWt8: function(TT, UT) {
            const mT = BT(UT),
              WT = "string" === typeof mT ? mT : void 0;
            var zT = vT(WT) ? 0 : qT(WT, dT.hjCm, dT.CahQ),
              MT = wT;
            jT().setInt32(TT + 4, MT, !0), jT().setInt32(TT + 0, zT, !0)
          },
          KrDP: function(TT, UT) {
            throw new Error(lT(TT, UT))
          },
          yXvs: function(TT, UT) {
            console.error(lT(TT, UT))
          },
          Uu51: function(TT) {
            iT(TT)
          }
        }
      }
    }

    function HT(TT) {
      cT === ZT.length && ZT.push(ZT.length + 1);
      const UT = cT;
      return cT = ZT[UT], ZT[UT] = TT, UT
    }
    mT.r(WT), mT.d(WT, {
      AgT: () => zT,
      Ul: () => MT,
      default: () => yT,
      initSync: () => aT,
      ml: () => gT
    });
    let kT = null;

    function jT() {
      return null !== kT && kT.buffer === dT.memory.buffer || (kT = new DataView(dT.memory.buffer)), kT
    }

    function lT(TT, UT) {
      return function(TT, UT) {
        eT += UT, eT >= OT && (bT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), bT.decode(), eT = UT);
        return bT.decode(pT().subarray(TT, TT + UT))
      }(TT >>> 0, UT)
    }
    let LT = null;

    function pT() {
      return null !== LT && 0 !== LT.byteLength || (LT = new Uint8Array(dT.memory.buffer)), LT
    }

    function BT(TT) {
      return ZT[TT]
    }
    let ZT = new Array(1024).fill(void 0);
    ZT.push(void 0, null, !0, !1);
    let cT = ZT.length;

    function vT(TT) {
      return void 0 === TT || null === TT
    }

    function fT(TT, UT) {
      const mT = UT(4 * TT.length, 4) >>> 0,
        WT = jT();
      for (let zT = 0; zT < TT.length; zT++) WT.setUint32(mT + 4 * zT, HT(TT[zT]), !0);
      return wT = TT.length, mT
    }

    function qT(TT, UT, mT) {
      if (void 0 === mT) {
        const mT = YT.encode(TT),
          WT = UT(mT.length, 1) >>> 0;
        return pT().subarray(WT, WT + mT.length).set(mT), wT = mT.length, WT
      }
      let WT = TT.length,
        zT = UT(WT, 1) >>> 0;
      const MT = pT();
      let gT = 0;
      for (; gT < WT; gT++) {
        const UT = TT.charCodeAt(gT);
        if (UT > 127) break;
        MT[zT + gT] = UT
      }
      if (gT !== WT) {
        0 !== gT && (TT = TT.slice(gT)), zT = mT(zT, WT, WT = gT + 3 * TT.length, 1) >>> 0;
        const UT = pT().subarray(zT + gT, zT + WT);
        gT += YT.encodeInto(TT, UT).written, zT = mT(zT, WT, gT, 1) >>> 0
      }
      return wT = gT, zT
    }

    function iT(TT) {
      const UT = BT(TT);
      return function(TT) {
        TT < 1028 || (ZT[TT] = cT, cT = TT)
      }(TT), UT
    }
    let bT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    bT.decode();
    const OT = 2146435072;
    let eT = 0;
    const YT = new TextEncoder;
    "encodeInto" in YT || (YT.encodeInto = function(TT, UT) {
      const mT = YT.encode(TT);
      return UT.set(mT), {
        read: TT.length,
        written: mT.length
      }
    });
    let JT, xT, dT, wT = 0;

    function tT(TT, UT) {
      return xT = TT, dT = TT.exports, JT = UT, kT = null, LT = null, dT.HX0v(), dT
    }

    function aT(TT) {
      if (void 0 !== dT) return dT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const UT = nT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return tT(new WebAssembly.Instance(TT, UT), TT)
    }
    async function yT(TT) {
      if (void 0 !== dT) return dT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const UT = nT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: mT,
        module: WT
      } = await async function(TT, UT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, UT)
          } catch (mT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw mT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", mT)
          }
          const WT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(WT, UT)
        } {
          const mT = await WebAssembly.instantiate(TT, UT);
          return mT instanceof WebAssembly.Instance ? {
            instance: mT,
            module: TT
          } : mT
        }
      }(await TT, UT);
      return tT(mT, WT)
    }
    var XT = mT(3001),
      IT = mT(6688);
    class QT extends Error {
      stage;
      constructor(TT, UT) {
        super((0, XT.F)(TT, UT), {
          cause: UT
        }), this.name = "BloxdAnimWasmError", this.stage = TT
      }
    }
    let sT = null,
      FT = null;

    function PT() {
      if (FT) throw FT
    }
    async function VT(TT, UT, zT) {
      PT();
      const MT = await (sT ??= (async () => {
        let TT;
        try {
          TT = await (0, XT.I)(new mT.U(mT(42819)), (0, IT.b)("bloxd_wasm_anim"))
        } catch (UT) {
          throw new QT((0, XT.P)(UT), UT)
        }
        try {
          await yT({
            module_or_path: TT
          })
        } catch (UT) {
          throw new QT("instantiate", UT)
        }
        return WT
      })(), sT.catch((() => {
        sT = null
      })), sT);
      PT();
      try {
        return MT.AgT(Object.entries(TT).flat(), [...UT.mobTypes], [...UT.vehicleTypes], [...UT.mobAiStates], [...UT.playerPoses], "builtIns" in zT ? zT.builtIns : void 0)
      } catch (gT) {
        const TT = new QT("call", gT);
        throw gT instanceof WebAssembly.RuntimeError && (FT = TT), TT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);