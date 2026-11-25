export const id = 5;
export const ids = [5];
export const modules = {
  53730: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_anim_bg.649ef08b4f54c949019a.wasm"
  },
  53722: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BloxdAnimWasmError: () => kM,
      compileAnimationPackInWasm: () => YM
    });
    var OM = {};

    function SM(MM, rM, iM, OM, SM, jM) {
      const aM = lM(MM, gM.HuKV),
        PM = uM,
        nM = lM(rM, gM.HuKV),
        QM = uM,
        zM = lM(iM, gM.HuKV),
        LM = uM,
        mM = lM(OM, gM.HuKV),
        hM = uM,
        JM = lM(SM, gM.HuKV),
        dM = uM;
      var EM = yM(jM) ? 0 : function(MM, rM) {
          const iM = rM(1 * MM.length, 1) >>> 0;
          return HM().set(MM, iM / 1), uM = MM.length, iM
        }(jM, gM.HuKV),
        GM = uM;
      const CM = gM.LPfT(aM, PM, nM, QM, zM, LM, mM, hM, JM, dM, EM, GM);
      if (CM[3]) throw UM(CM[2]);
      var eM, bM, wM = (eM = CM[0], bM = CM[1], eM >>>= 0, HM().subarray(eM / 1, eM / 1 + bM)).slice();
      return gM.t5mD(CM[0], 1 * CM[1], 1), wM
    }

    function jM(MM, rM) {
      const iM = EM(MM, gM.HuKV, gM.JbGx),
        OM = uM,
        SM = gM.F9n2(iM, OM, rM);
      if (SM[1]) throw UM(SM[0])
    }

    function aM() {
      gM.HxNI()
    }

    function PM() {
      return {
        __proto__: null,
        oBW3: {
          __proto__: null,
          zaJa: function(MM, rM) {
            return nM(Error(LM(MM, rM)))
          },
          MbuI: function(MM, rM) {
            const iM = hM(rM),
              OM = "string" === typeof iM ? iM : void 0;
            var SM = yM(OM) ? 0 : EM(OM, gM.HuKV, gM.JbGx),
              jM = uM;
            zM().setInt32(MM + 4, jM, !0), zM().setInt32(MM + 0, SM, !0)
          },
          KIxe: function(MM, rM) {
            throw new Error(LM(MM, rM))
          },
          aDnB: function(MM, rM) {
            console.error(LM(MM, rM))
          },
          r2FP: function(MM) {
            UM(MM)
          }
        }
      }
    }

    function nM(MM) {
      dM === JM.length && JM.push(JM.length + 1);
      const rM = dM;
      return dM = JM[rM], JM[rM] = MM, rM
    }
    iM.r(OM), iM.d(OM, {
      FaM: () => SM,
      PQ: () => jM,
      default: () => WM,
      initSync: () => pM,
      HQ: () => aM
    });
    let QM = null;

    function zM() {
      return null !== QM && QM.buffer === gM.memory.buffer || (QM = new DataView(gM.memory.buffer)), QM
    }

    function LM(MM, rM) {
      return function(MM, rM) {
        eM += rM, eM >= CM && (GM = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), GM.decode(), eM = rM);
        return GM.decode(HM().subarray(MM, MM + rM))
      }(MM >>> 0, rM)
    }
    let mM = null;

    function HM() {
      return null !== mM && 0 !== mM.byteLength || (mM = new Uint8Array(gM.memory.buffer)), mM
    }

    function hM(MM) {
      return JM[MM]
    }
    let JM = new Array(1024).fill(void 0);
    JM.push(void 0, null, !0, !1);
    let dM = JM.length;

    function yM(MM) {
      return void 0 === MM || null === MM
    }

    function lM(MM, rM) {
      const iM = rM(4 * MM.length, 4) >>> 0,
        OM = zM();
      for (let SM = 0; SM < MM.length; SM++) OM.setUint32(iM + 4 * SM, nM(MM[SM]), !0);
      return uM = MM.length, iM
    }

    function EM(MM, rM, iM) {
      if (void 0 === iM) {
        const iM = bM.encode(MM),
          OM = rM(iM.length, 1) >>> 0;
        return HM().subarray(OM, OM + iM.length).set(iM), uM = iM.length, OM
      }
      let OM = MM.length,
        SM = rM(OM, 1) >>> 0;
      const jM = HM();
      let aM = 0;
      for (; aM < OM; aM++) {
        const rM = MM.charCodeAt(aM);
        if (rM > 127) break;
        jM[SM + aM] = rM
      }
      if (aM !== OM) {
        0 !== aM && (MM = MM.slice(aM)), SM = iM(SM, OM, OM = aM + 3 * MM.length, 1) >>> 0;
        const rM = HM().subarray(SM + aM, SM + OM);
        aM += bM.encodeInto(MM, rM).written, SM = iM(SM, OM, aM, 1) >>> 0
      }
      return uM = aM, SM
    }

    function UM(MM) {
      const rM = hM(MM);
      return function(MM) {
        MM < 1028 || (JM[MM] = dM, dM = MM)
      }(MM), rM
    }
    let GM = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    GM.decode();
    const CM = 2146435072;
    let eM = 0;
    const bM = new TextEncoder;
    "encodeInto" in bM || (bM.encodeInto = function(MM, rM) {
      const iM = bM.encode(MM);
      return rM.set(iM), {
        read: MM.length,
        written: iM.length
      }
    });
    let wM, tM, gM, uM = 0;

    function RM(MM, rM) {
      return tM = MM, gM = MM.exports, wM = rM, QM = null, mM = null, gM.I4BH(), gM
    }

    function pM(MM) {
      if (void 0 !== gM) return gM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module: MM
      } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rM = PM();
      MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
      return RM(new WebAssembly.Instance(MM, rM), MM)
    }
    async function WM(MM) {
      if (void 0 !== gM) return gM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module_or_path: MM
      } = MM) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rM = PM();
      ("string" === typeof MM || "function" === typeof Request && MM instanceof Request || "function" === typeof URL && MM instanceof URL) && (MM = fetch(MM));
      const {
        instance: iM,
        module: OM
      } = await async function(MM, rM) {
        if ("function" === typeof Response && MM instanceof Response) {
          if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(MM, rM)
          } catch (iM) {
            if (! function(MM) {
                switch (MM) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(MM.type) || "application/wasm" === MM.headers.get("Content-Type")) throw iM;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", iM)
          }
          const OM = await MM.arrayBuffer();
          return await WebAssembly.instantiate(OM, rM)
        } {
          const iM = await WebAssembly.instantiate(MM, rM);
          return iM instanceof WebAssembly.Instance ? {
            instance: iM,
            module: MM
          } : iM
        }
      }(await MM, rM);
      return RM(iM, OM)
    }
    var sM = iM(3188),
      DM = iM(7116);
    class kM extends Error {
      stage;
      constructor(MM, rM) {
        super((0, sM.B)(MM, rM), {
          cause: rM
        }), this.name = "BloxdAnimWasmError", this.stage = MM
      }
    }
    let ZM = null,
      oM = null;

    function fM() {
      if (oM) throw oM
    }
    async function YM(MM, rM, SM) {
      fM();
      const jM = await (ZM ??= (async () => {
        let MM;
        try {
          MM = await (0, sM.E)(new iM.U(iM(53730)), (0, DM.b)("bloxd_wasm_anim"))
        } catch (rM) {
          throw new kM((0, sM.J)(rM), rM)
        }
        try {
          await WM({
            module_or_path: MM
          })
        } catch (rM) {
          throw new kM("instantiate", rM)
        }
        return OM
      })(), ZM.catch((() => {
        ZM = null
      })), ZM);
      fM();
      try {
        return jM.FaM(Object.entries(MM).flat(), [...rM.mobTypes], [...rM.vehicleTypes], [...rM.mobAiStates], [...rM.playerPoses], "builtIns" in SM ? SM.builtIns : void 0)
      } catch (aM) {
        const MM = new kM("call", aM);
        throw aM instanceof WebAssembly.RuntimeError && (oM = MM), MM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);