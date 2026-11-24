export const id = 5;
export const ids = [5];
export const modules = {
  42781: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_anim_bg.f605a536873d81a6e47d.wasm"
  },
  42778: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BloxdAnimWasmError: () => hB,
      compileAnimationPackInWasm: () => TB
    });
    var QB = {};

    function nB(BB, jB, zB, QB, nB, dB) {
      const IB = GB(BB, fB.kMRp),
        NB = oB,
        uB = GB(jB, fB.kMRp),
        UB = oB,
        aB = GB(zB, fB.kMRp),
        pB = oB,
        rB = GB(QB, fB.kMRp),
        JB = oB,
        mB = GB(nB, fB.kMRp),
        yB = oB;
      var LB = kB(dB) ? 0 : function(BB, jB) {
          const zB = jB(1 * BB.length, 1) >>> 0;
          return sB().set(BB, zB / 1), oB = BB.length, zB
        }(dB, fB.kMRp),
        tB = oB;
      const SB = fB.SYHB(IB, NB, uB, UB, aB, pB, rB, JB, mB, yB, LB, tB);
      if (SB[3]) throw gB(SB[2]);
      var MB, EB, iB = (MB = SB[0], EB = SB[1], MB >>>= 0, sB().subarray(MB / 1, MB / 1 + EB)).slice();
      return fB.pY7p(SB[0], 1 * SB[1], 1), iB
    }

    function dB(BB, jB) {
      const zB = LB(BB, fB.kMRp, fB.Pvmt),
        QB = oB,
        nB = fB.n4sl(zB, QB, jB);
      if (nB[1]) throw gB(nB[0])
    }

    function IB() {
      fB.Th9q()
    }

    function NB() {
      return {
        __proto__: null,
        cPnk: {
          __proto__: null,
          B5r2: function(BB, jB) {
            return uB(Error(pB(BB, jB)))
          },
          Zy0y: function(BB, jB) {
            const zB = JB(jB),
              QB = "string" === typeof zB ? zB : void 0;
            var nB = kB(QB) ? 0 : LB(QB, fB.kMRp, fB.Pvmt),
              dB = oB;
            aB().setInt32(BB + 4, dB, !0), aB().setInt32(BB + 0, nB, !0)
          },
          sPVG: function(BB, jB) {
            throw new Error(pB(BB, jB))
          },
          cxm0: function(BB, jB) {
            console.error(pB(BB, jB))
          },
          MY8a: function(BB) {
            gB(BB)
          }
        }
      }
    }

    function uB(BB) {
      yB === mB.length && mB.push(mB.length + 1);
      const jB = yB;
      return yB = mB[jB], mB[jB] = BB, jB
    }
    zB.r(QB), zB.d(QB, {
      HIB: () => nB,
      np: () => dB,
      default: () => FB,
      initSync: () => DB,
      dp: () => IB
    });
    let UB = null;

    function aB() {
      return null !== UB && UB.buffer === fB.memory.buffer || (UB = new DataView(fB.memory.buffer)), UB
    }

    function pB(BB, jB) {
      return function(BB, jB) {
        MB += jB, MB >= SB && (tB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), tB.decode(), MB = jB);
        return tB.decode(sB().subarray(BB, BB + jB))
      }(BB >>> 0, jB)
    }
    let rB = null;

    function sB() {
      return null !== rB && 0 !== rB.byteLength || (rB = new Uint8Array(fB.memory.buffer)), rB
    }

    function JB(BB) {
      return mB[BB]
    }
    let mB = new Array(1024).fill(void 0);
    mB.push(void 0, null, !0, !1);
    let yB = mB.length;

    function kB(BB) {
      return void 0 === BB || null === BB
    }

    function GB(BB, jB) {
      const zB = jB(4 * BB.length, 4) >>> 0,
        QB = aB();
      for (let nB = 0; nB < BB.length; nB++) QB.setUint32(zB + 4 * nB, uB(BB[nB]), !0);
      return oB = BB.length, zB
    }

    function LB(BB, jB, zB) {
      if (void 0 === zB) {
        const zB = EB.encode(BB),
          QB = jB(zB.length, 1) >>> 0;
        return sB().subarray(QB, QB + zB.length).set(zB), oB = zB.length, QB
      }
      let QB = BB.length,
        nB = jB(QB, 1) >>> 0;
      const dB = sB();
      let IB = 0;
      for (; IB < QB; IB++) {
        const jB = BB.charCodeAt(IB);
        if (jB > 127) break;
        dB[nB + IB] = jB
      }
      if (IB !== QB) {
        0 !== IB && (BB = BB.slice(IB)), nB = zB(nB, QB, QB = IB + 3 * BB.length, 1) >>> 0;
        const jB = sB().subarray(nB + IB, nB + QB);
        IB += EB.encodeInto(BB, jB).written, nB = zB(nB, QB, IB, 1) >>> 0
      }
      return oB = IB, nB
    }

    function gB(BB) {
      const jB = JB(BB);
      return function(BB) {
        BB < 1028 || (mB[BB] = yB, yB = BB)
      }(BB), jB
    }
    let tB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    tB.decode();
    const SB = 2146435072;
    let MB = 0;
    const EB = new TextEncoder;
    "encodeInto" in EB || (EB.encodeInto = function(BB, jB) {
      const zB = EB.encode(BB);
      return jB.set(zB), {
        read: BB.length,
        written: zB.length
      }
    });
    let iB, qB, fB, oB = 0;

    function HB(BB, jB) {
      return qB = BB, fB = BB.exports, iB = jB, UB = null, rB = null, fB.NxKd(), fB
    }

    function DB(BB) {
      if (void 0 !== fB) return fB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const jB = NB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return HB(new WebAssembly.Instance(BB, jB), BB)
    }
    async function FB(BB) {
      if (void 0 !== fB) return fB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const jB = NB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: zB,
        module: QB
      } = await async function(BB, jB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, jB)
          } catch (zB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw zB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zB)
          }
          const QB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(QB, jB)
        } {
          const zB = await WebAssembly.instantiate(BB, jB);
          return zB instanceof WebAssembly.Instance ? {
            instance: zB,
            module: BB
          } : zB
        }
      }(await BB, jB);
      return HB(zB, QB)
    }
    var YB = zB(2974),
      VB = zB(6578);
    class hB extends Error {
      stage;
      constructor(BB, jB) {
        super((0, YB.F)(BB, jB), {
          cause: jB
        }), this.name = "BloxdAnimWasmError", this.stage = BB
      }
    }
    let XB = null,
      ZB = null;

    function AB() {
      if (ZB) throw ZB
    }
    async function TB(BB, jB, nB) {
      AB();
      const dB = await (XB ??= (async () => {
        let BB;
        try {
          BB = await (0, YB.I)(new zB.U(zB(42781)), (0, VB.b)("bloxd_wasm_anim"))
        } catch (jB) {
          throw new hB((0, YB.M)(jB), jB)
        }
        try {
          await FB({
            module_or_path: BB
          })
        } catch (jB) {
          throw new hB("instantiate", jB)
        }
        return QB
      })(), XB.catch((() => {
        XB = null
      })), XB);
      AB();
      try {
        return dB.HIB(Object.entries(BB).flat(), [...jB.mobTypes], [...jB.vehicleTypes], [...jB.mobAiStates], [...jB.playerPoses], "builtIns" in nB ? nB.builtIns : void 0)
      } catch (IB) {
        const BB = new hB("call", IB);
        throw IB instanceof WebAssembly.RuntimeError && (ZB = BB), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);