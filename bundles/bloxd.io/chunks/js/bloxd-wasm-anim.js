export const id = 5;
export const ids = [5];
export const modules = {
  41988: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_anim_bg.71fe8b84c5a1ac6a29ec.wasm"
  },
  41979: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BloxdAnimWasmError: () => SB,
      compileAnimationPackInWasm: () => aB
    });
    var VB = {};

    function yB(BB, TB, dB, VB, yB, pB) {
      const lB = vB(BB, wB.Jq8i),
        JB = UB,
        YB = vB(TB, wB.Jq8i),
        gB = UB,
        oB = vB(dB, wB.Jq8i),
        kB = UB,
        LB = vB(VB, wB.Jq8i),
        DB = UB,
        uB = vB(yB, wB.Jq8i),
        HB = UB;
      var mB = EB(pB) ? 0 : function(BB, TB) {
          const dB = TB(1 * BB.length, 1) >>> 0;
          return OB().set(BB, dB / 1), UB = BB.length, dB
        }(pB, wB.Jq8i),
        NB = UB;
      const tB = wB.W5a3(lB, JB, YB, gB, oB, kB, LB, DB, uB, HB, mB, NB);
      if (tB[3]) throw iB(tB[2]);
      var fB, sB, MB = (fB = tB[0], sB = tB[1], fB >>>= 0, OB().subarray(fB / 1, fB / 1 + sB)).slice();
      return wB.SxwI(tB[0], 1 * tB[1], 1), MB
    }

    function pB(BB, TB) {
      const dB = mB(BB, wB.Jq8i, wB.ZhSm),
        VB = UB,
        yB = wB.mAST(dB, VB, TB);
      if (yB[1]) throw iB(yB[0])
    }

    function lB() {
      wB.aCoW()
    }

    function JB() {
      return {
        __proto__: null,
        wm9I: {
          __proto__: null,
          kJbQ: function(BB, TB) {
            return YB(Error(kB(BB, TB)))
          },
          qijr: function(BB, TB) {
            const dB = DB(TB),
              VB = "string" === typeof dB ? dB : void 0;
            var yB = EB(VB) ? 0 : mB(VB, wB.Jq8i, wB.ZhSm),
              pB = UB;
            oB().setInt32(BB + 4, pB, !0), oB().setInt32(BB + 0, yB, !0)
          },
          bY93: function(BB, TB) {
            throw new Error(kB(BB, TB))
          },
          E1xl: function(BB, TB) {
            console.error(kB(BB, TB))
          },
          p3pG: function(BB) {
            iB(BB)
          }
        }
      }
    }

    function YB(BB) {
      HB === uB.length && uB.push(uB.length + 1);
      const TB = HB;
      return HB = uB[TB], uB[TB] = BB, TB
    }
    dB.r(VB), dB.d(VB, {
      nlB: () => yB,
      Ok: () => pB,
      default: () => rB,
      initSync: () => KB,
      Dk: () => lB
    });
    let gB = null;

    function oB() {
      return (null === gB || !0 === gB.buffer.detached || void 0 === gB.buffer.detached && gB.buffer !== wB.memory.buffer) && (gB = new DataView(wB.memory.buffer)), gB
    }

    function kB(BB, TB) {
      return function(BB, TB) {
        fB += TB, fB >= tB && (NB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), NB.decode(), fB = TB);
        return NB.decode(OB().subarray(BB, BB + TB))
      }(BB >>> 0, TB)
    }
    let LB = null;

    function OB() {
      return null !== LB && 0 !== LB.byteLength || (LB = new Uint8Array(wB.memory.buffer)), LB
    }

    function DB(BB) {
      return uB[BB]
    }
    let uB = new Array(1024).fill(void 0);
    uB.push(void 0, null, !0, !1);
    let HB = uB.length;

    function EB(BB) {
      return void 0 === BB || null === BB
    }

    function vB(BB, TB) {
      const dB = TB(4 * BB.length, 4) >>> 0,
        VB = oB();
      for (let yB = 0; yB < BB.length; yB++) VB.setUint32(dB + 4 * yB, YB(BB[yB]), !0);
      return UB = BB.length, dB
    }

    function mB(BB, TB, dB) {
      if (void 0 === dB) {
        const dB = sB.encode(BB),
          VB = TB(dB.length, 1) >>> 0;
        return OB().subarray(VB, VB + dB.length).set(dB), UB = dB.length, VB
      }
      let VB = BB.length,
        yB = TB(VB, 1) >>> 0;
      const pB = OB();
      let lB = 0;
      for (; lB < VB; lB++) {
        const TB = BB.charCodeAt(lB);
        if (TB > 127) break;
        pB[yB + lB] = TB
      }
      if (lB !== VB) {
        0 !== lB && (BB = BB.slice(lB)), yB = dB(yB, VB, VB = lB + 3 * BB.length, 1) >>> 0;
        const TB = OB().subarray(yB + lB, yB + VB);
        lB += sB.encodeInto(BB, TB).written, yB = dB(yB, VB, lB, 1) >>> 0
      }
      return UB = lB, yB
    }

    function iB(BB) {
      const TB = DB(BB);
      return function(BB) {
        BB < 1028 || (uB[BB] = HB, HB = BB)
      }(BB), TB
    }
    let NB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    NB.decode();
    const tB = 2146435072;
    let fB = 0;
    const sB = new TextEncoder;
    "encodeInto" in sB || (sB.encodeInto = function(BB, TB) {
      const dB = sB.encode(BB);
      return TB.set(dB), {
        read: BB.length,
        written: dB.length
      }
    });
    let MB, zB, wB, UB = 0;

    function FB(BB, TB) {
      return zB = BB, wB = BB.exports, MB = TB, gB = null, LB = null, wB.aAzT(), wB
    }

    function KB(BB) {
      if (void 0 !== wB) return wB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const TB = JB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return FB(new WebAssembly.Instance(BB, TB), BB)
    }
    async function rB(BB) {
      if (void 0 !== wB) return wB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const TB = JB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: dB,
        module: VB
      } = await async function(BB, TB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, TB)
          } catch (dB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw dB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", dB)
          }
          const VB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(VB, TB)
        } {
          const dB = await WebAssembly.instantiate(BB, TB);
          return dB instanceof WebAssembly.Instance ? {
            instance: dB,
            module: BB
          } : dB
        }
      }(await BB, TB);
      return FB(dB, VB)
    }
    var IB = dB(3216),
      cB = dB(5953);
    class SB extends Error {
      stage;
      constructor(BB, TB) {
        super((0, IB.E)(BB, TB), {
          cause: TB
        }), this.name = "BloxdAnimWasmError", this.stage = BB
      }
    }
    let PB = null,
      QB = null;

    function RB() {
      if (QB) throw QB
    }
    async function aB(BB, TB, yB) {
      RB();
      const pB = await (PB ??= (async () => {
        let BB;
        try {
          BB = await (0, IB.G)(new dB.U(dB(41988)), (0, cB.c)("bloxd_wasm_anim"))
        } catch (TB) {
          throw new SB((0, IB.M)(TB), TB)
        }
        try {
          await rB({
            module_or_path: BB
          })
        } catch (TB) {
          throw new SB("instantiate", TB)
        }
        return VB
      })(), PB.catch((() => {
        PB = null
      })), PB);
      RB();
      try {
        return pB.nlB(Object.entries(BB).flat(), [...TB.mobTypes], [...TB.vehicleTypes], [...TB.mobAiStates], [...TB.playerPoses], "builtIns" in yB ? yB.builtIns : void 0)
      } catch (lB) {
        const BB = new SB("call", lB);
        throw lB instanceof WebAssembly.RuntimeError && (QB = BB), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);