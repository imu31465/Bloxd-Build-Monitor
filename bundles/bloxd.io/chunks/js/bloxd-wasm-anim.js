export const id = 5;
export const ids = [5];
export const modules = {
  42095: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_anim_bg.27943341851d95a4a103.wasm"
  },
  42093: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BloxdAnimWasmError: () => YT,
      compileAnimationPackInWasm: () => nT
    });
    var iT = {};

    function zT(TT, oT, IT, iT, zT, kT) {
      const WT = AT(TT, ET.uzBX),
        XT = fT,
        BT = AT(oT, ET.uzBX),
        FT = fT,
        ST = AT(IT, ET.uzBX),
        DT = fT,
        LT = AT(iT, ET.uzBX),
        cT = fT,
        KT = AT(zT, ET.uzBX),
        MT = fT;
      var gT = rT(kT) ? 0 : function(TT, oT) {
          const IT = oT(1 * TT.length, 1) >>> 0;
          return xT().set(TT, IT / 1), fT = TT.length, IT
        }(kT, ET.uzBX),
        wT = fT;
      const mT = ET.ELqP(WT, XT, BT, FT, ST, DT, LT, cT, KT, MT, gT, wT);
      if (mT[3]) throw hT(mT[2]);
      var eT, RT, uT = (eT = mT[0], RT = mT[1], eT >>>= 0, xT().subarray(eT / 1, eT / 1 + RT)).slice();
      return ET.p3CH(mT[0], 1 * mT[1], 1), uT
    }

    function kT(TT, oT) {
      const IT = gT(TT, ET.uzBX, ET.IX8T),
        iT = fT,
        zT = ET.rYAm(IT, iT, oT);
      if (zT[1]) throw hT(zT[0])
    }

    function WT() {
      ET.nwri()
    }

    function XT() {
      return {
        __proto__: null,
        z7Wl: {
          __proto__: null,
          hWXl: function(TT, oT) {
            return BT(Error(DT(TT, oT)))
          },
          Ib1k: function(TT, oT) {
            const IT = cT(oT),
              iT = "string" === typeof IT ? IT : void 0;
            var zT = rT(iT) ? 0 : gT(iT, ET.uzBX, ET.IX8T),
              kT = fT;
            ST().setInt32(TT + 4, kT, !0), ST().setInt32(TT + 0, zT, !0)
          },
          TRlG: function(TT, oT) {
            throw new Error(DT(TT, oT))
          },
          eqvw: function(TT, oT) {
            console.error(DT(TT, oT))
          },
          Ukis: function(TT) {
            hT(TT)
          }
        }
      }
    }

    function BT(TT) {
      MT === KT.length && KT.push(KT.length + 1);
      const oT = MT;
      return MT = KT[oT], KT[oT] = TT, oT
    }
    IT.r(iT), IT.d(iT, {
      gWT: () => zT,
      DD: () => kT,
      default: () => JT,
      initSync: () => jT,
      LD: () => WT
    });
    let FT = null;

    function ST() {
      return (null === FT || !0 === FT.buffer.detached || void 0 === FT.buffer.detached && FT.buffer !== ET.memory.buffer) && (FT = new DataView(ET.memory.buffer)), FT
    }

    function DT(TT, oT) {
      return function(TT, oT) {
        eT += oT, eT >= mT && (wT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), wT.decode(), eT = oT);
        return wT.decode(xT().subarray(TT, TT + oT))
      }(TT >>> 0, oT)
    }
    let LT = null;

    function xT() {
      return null !== LT && 0 !== LT.byteLength || (LT = new Uint8Array(ET.memory.buffer)), LT
    }

    function cT(TT) {
      return KT[TT]
    }
    let KT = new Array(1024).fill(void 0);
    KT.push(void 0, null, !0, !1);
    let MT = KT.length;

    function rT(TT) {
      return void 0 === TT || null === TT
    }

    function AT(TT, oT) {
      const IT = oT(4 * TT.length, 4) >>> 0,
        iT = ST();
      for (let zT = 0; zT < TT.length; zT++) iT.setUint32(IT + 4 * zT, BT(TT[zT]), !0);
      return fT = TT.length, IT
    }

    function gT(TT, oT, IT) {
      if (void 0 === IT) {
        const IT = RT.encode(TT),
          iT = oT(IT.length, 1) >>> 0;
        return xT().subarray(iT, iT + IT.length).set(IT), fT = IT.length, iT
      }
      let iT = TT.length,
        zT = oT(iT, 1) >>> 0;
      const kT = xT();
      let WT = 0;
      for (; WT < iT; WT++) {
        const oT = TT.charCodeAt(WT);
        if (oT > 127) break;
        kT[zT + WT] = oT
      }
      if (WT !== iT) {
        0 !== WT && (TT = TT.slice(WT)), zT = IT(zT, iT, iT = WT + 3 * TT.length, 1) >>> 0;
        const oT = xT().subarray(zT + WT, zT + iT);
        WT += RT.encodeInto(TT, oT).written, zT = IT(zT, iT, WT, 1) >>> 0
      }
      return fT = WT, zT
    }

    function hT(TT) {
      const oT = cT(TT);
      return function(TT) {
        TT < 1028 || (KT[TT] = MT, MT = TT)
      }(TT), oT
    }
    let wT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    wT.decode();
    const mT = 2146435072;
    let eT = 0;
    const RT = new TextEncoder;
    "encodeInto" in RT || (RT.encodeInto = function(TT, oT) {
      const IT = RT.encode(TT);
      return oT.set(IT), {
        read: TT.length,
        written: IT.length
      }
    });
    let uT, vT, ET, fT = 0;

    function CT(TT, oT) {
      return vT = TT, ET = TT.exports, uT = oT, FT = null, LT = null, ET.xBHt(), ET
    }

    function jT(TT) {
      if (void 0 !== ET) return ET;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const oT = XT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return CT(new WebAssembly.Instance(TT, oT), TT)
    }
    async function JT(TT) {
      if (void 0 !== ET) return ET;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const oT = XT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: IT,
        module: iT
      } = await async function(TT, oT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, oT)
          } catch (IT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw IT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", IT)
          }
          const iT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(iT, oT)
        } {
          const IT = await WebAssembly.instantiate(TT, oT);
          return IT instanceof WebAssembly.Instance ? {
            instance: IT,
            module: TT
          } : IT
        }
      }(await TT, oT);
      return CT(IT, iT)
    }
    var UT = IT(3280),
      aT = IT(6123);
    class YT extends Error {
      stage;
      constructor(TT, oT) {
        super((0, UT.G)(TT, oT), {
          cause: oT
        }), this.name = "BloxdAnimWasmError", this.stage = TT
      }
    }
    let QT = null,
      OT = null;

    function HT() {
      if (OT) throw OT
    }
    async function nT(TT, oT, zT) {
      HT();
      const kT = await (QT ??= (async () => {
        let TT;
        try {
          TT = await (0, UT.J)(new IT.U(IT(42095)), (0, aT.c)("bloxd_wasm_anim"))
        } catch (oT) {
          throw new YT((0, UT.N)(oT), oT)
        }
        try {
          await JT({
            module_or_path: TT
          })
        } catch (oT) {
          throw new YT("instantiate", oT)
        }
        return iT
      })(), QT.catch((() => {
        QT = null
      })), QT);
      HT();
      try {
        return kT.gWT(Object.entries(TT).flat(), [...oT.mobTypes], [...oT.vehicleTypes], [...oT.mobAiStates], [...oT.playerPoses], "builtIns" in zT ? zT.builtIns : void 0)
      } catch (WT) {
        const TT = new YT("call", WT);
        throw WT instanceof WebAssembly.RuntimeError && (OT = TT), TT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);