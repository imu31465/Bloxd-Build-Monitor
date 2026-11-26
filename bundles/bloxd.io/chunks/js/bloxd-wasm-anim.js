export const id = 5;
export const ids = [5];
export const modules = {
  53924: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_anim_bg.6179f928de4459d74d9f.wasm"
  },
  53922: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BloxdAnimWasmError: () => iV,
      compileAnimationPackInWasm: () => cV
    });
    var JV = {};

    function YV(VV, eV, xV, JV, YV, UV) {
      const yV = jV(VV, MV.fRTy),
        pV = zV,
        QV = jV(eV, MV.fRTy),
        nV = zV,
        wV = jV(xV, MV.fRTy),
        ZV = zV,
        vV = jV(JV, MV.fRTy),
        kV = zV,
        bV = jV(YV, MV.fRTy),
        EV = zV;
      var qV = BV(UV) ? 0 : function(VV, eV) {
          const xV = eV(1 * VV.length, 1) >>> 0;
          return rV().set(VV, xV / 1), zV = VV.length, xV
        }(UV, MV.fRTy),
        FV = zV;
      const TV = MV.OiVz(yV, pV, QV, nV, wV, ZV, vV, kV, bV, EV, qV, FV);
      if (TV[3]) throw tV(TV[2]);
      var PV, AV, NV = (PV = TV[0], AV = TV[1], PV >>>= 0, rV().subarray(PV / 1, PV / 1 + AV)).slice();
      return MV.Lgq9(TV[0], 1 * TV[1], 1), NV
    }

    function UV(VV, eV) {
      const xV = qV(VV, MV.fRTy, MV.TdLt),
        JV = zV,
        YV = MV.ekgY(xV, JV, eV);
      if (YV[1]) throw tV(YV[0])
    }

    function yV() {
      MV.V2Pj()
    }

    function pV() {
      return {
        __proto__: null,
        F2jg: {
          __proto__: null,
          Hvcs: function(VV, eV) {
            return QV(Error(ZV(VV, eV)))
          },
          TeTw: function(VV, eV) {
            const xV = kV(eV),
              JV = "string" === typeof xV ? xV : void 0;
            var YV = BV(JV) ? 0 : qV(JV, MV.fRTy, MV.TdLt),
              UV = zV;
            wV().setInt32(VV + 4, UV, !0), wV().setInt32(VV + 0, YV, !0)
          },
          Cf9c: function(VV, eV) {
            throw new Error(ZV(VV, eV))
          },
          nmLo: function(VV, eV) {
            console.error(ZV(VV, eV))
          },
          sP9s: function(VV) {
            tV(VV)
          }
        }
      }
    }

    function QV(VV) {
      EV === bV.length && bV.push(bV.length + 1);
      const eV = EV;
      return EV = bV[eV], bV[eV] = VV, eV
    }
    xV.r(JV), xV.d(JV, {
      wQV: () => YV,
      sw: () => UV,
      default: () => RV,
      initSync: () => WV,
      hZ: () => yV
    });
    let nV = null;

    function wV() {
      return null !== nV && nV.buffer === MV.memory.buffer || (nV = new DataView(MV.memory.buffer)), nV
    }

    function ZV(VV, eV) {
      return function(VV, eV) {
        PV += eV, PV >= TV && (FV = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), FV.decode(), PV = eV);
        return FV.decode(rV().subarray(VV, VV + eV))
      }(VV >>> 0, eV)
    }
    let vV = null;

    function rV() {
      return null !== vV && 0 !== vV.byteLength || (vV = new Uint8Array(MV.memory.buffer)), vV
    }

    function kV(VV) {
      return bV[VV]
    }
    let bV = new Array(1024).fill(void 0);
    bV.push(void 0, null, !0, !1);
    let EV = bV.length;

    function BV(VV) {
      return void 0 === VV || null === VV
    }

    function jV(VV, eV) {
      const xV = eV(4 * VV.length, 4) >>> 0,
        JV = wV();
      for (let YV = 0; YV < VV.length; YV++) JV.setUint32(xV + 4 * YV, QV(VV[YV]), !0);
      return zV = VV.length, xV
    }

    function qV(VV, eV, xV) {
      if (void 0 === xV) {
        const xV = AV.encode(VV),
          JV = eV(xV.length, 1) >>> 0;
        return rV().subarray(JV, JV + xV.length).set(xV), zV = xV.length, JV
      }
      let JV = VV.length,
        YV = eV(JV, 1) >>> 0;
      const UV = rV();
      let yV = 0;
      for (; yV < JV; yV++) {
        const eV = VV.charCodeAt(yV);
        if (eV > 127) break;
        UV[YV + yV] = eV
      }
      if (yV !== JV) {
        0 !== yV && (VV = VV.slice(yV)), YV = xV(YV, JV, JV = yV + 3 * VV.length, 1) >>> 0;
        const eV = rV().subarray(YV + yV, YV + JV);
        yV += AV.encodeInto(VV, eV).written, YV = xV(YV, JV, yV, 1) >>> 0
      }
      return zV = yV, YV
    }

    function tV(VV) {
      const eV = kV(VV);
      return function(VV) {
        VV < 1028 || (bV[VV] = EV, EV = VV)
      }(VV), eV
    }
    let FV = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    FV.decode();
    const TV = 2146435072;
    let PV = 0;
    const AV = new TextEncoder;
    "encodeInto" in AV || (AV.encodeInto = function(VV, eV) {
      const xV = AV.encode(VV);
      return eV.set(xV), {
        read: VV.length,
        written: xV.length
      }
    });
    let NV, XV, MV, zV = 0;

    function GV(VV, eV) {
      return XV = VV, MV = VV.exports, NV = eV, nV = null, vV = null, MV.Ovll(), MV
    }

    function WV(VV) {
      if (void 0 !== MV) return MV;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module: VV
      } = VV) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const eV = pV();
      VV instanceof WebAssembly.Module || (VV = new WebAssembly.Module(VV));
      return GV(new WebAssembly.Instance(VV, eV), VV)
    }
    async function RV(VV) {
      if (void 0 !== MV) return MV;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module_or_path: VV
      } = VV) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const eV = pV();
      ("string" === typeof VV || "function" === typeof Request && VV instanceof Request || "function" === typeof URL && VV instanceof URL) && (VV = fetch(VV));
      const {
        instance: xV,
        module: JV
      } = await async function(VV, eV) {
        if ("function" === typeof Response && VV instanceof Response) {
          if (!VV.ok) throw new Error(`failed to fetch Wasm: ${VV.status} ${VV.statusText} fetching '${VV.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(VV, eV)
          } catch (xV) {
            if (! function(VV) {
                switch (VV) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(VV.type) || "application/wasm" === VV.headers.get("Content-Type")) throw xV;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", xV)
          }
          const JV = await VV.arrayBuffer();
          return await WebAssembly.instantiate(JV, eV)
        } {
          const xV = await WebAssembly.instantiate(VV, eV);
          return xV instanceof WebAssembly.Instance ? {
            instance: xV,
            module: VV
          } : xV
        }
      }(await VV, eV);
      return GV(xV, JV)
    }
    var gV = xV(3196),
      DV = xV(7178);
    class iV extends Error {
      stage;
      constructor(VV, eV) {
        super((0, gV.D)(VV, eV), {
          cause: eV
        }), this.name = "BloxdAnimWasmError", this.stage = VV
      }
    }
    let CV = null,
      aV = null;

    function oV() {
      if (aV) throw aV
    }
    async function cV(VV, eV, YV) {
      oV();
      const UV = await (CV ??= (async () => {
        let VV;
        try {
          VV = await (0, gV.G)(new xV.U(xV(53924)), (0, DV.e)("bloxd_wasm_anim"))
        } catch (eV) {
          throw new iV((0, gV.J)(eV), eV)
        }
        try {
          await RV({
            module_or_path: VV
          })
        } catch (eV) {
          throw new iV("instantiate", eV)
        }
        return JV
      })(), CV.catch((() => {
        CV = null
      })), CV);
      oV();
      try {
        return UV.wQV(Object.entries(VV).flat(), [...eV.mobTypes], [...eV.vehicleTypes], [...eV.mobAiStates], [...eV.playerPoses], "builtIns" in YV ? YV.builtIns : void 0)
      } catch (yV) {
        const VV = new iV("call", yV);
        throw yV instanceof WebAssembly.RuntimeError && (aV = VV), VV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);