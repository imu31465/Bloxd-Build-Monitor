export const id = 5;
export const ids = [5];
export const modules = {
  42639: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_anim_bg.62acb0067fa1f3ff467f.wasm"
  },
  42634: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BloxdAnimWasmError: () => RB,
      compileAnimationPackInWasm: () => LB
    });
    var TB = {};

    function JB(BB, IB, ZB, TB, JB, oB) {
      const GB = UB(BB, iB.p5Lh),
        vB = pB,
        kB = UB(IB, iB.p5Lh),
        cB = pB,
        nB = UB(ZB, iB.p5Lh),
        hB = pB,
        zB = UB(TB, iB.p5Lh),
        NB = pB,
        gB = UB(JB, iB.p5Lh),
        qB = pB;
      var WB = yB(oB) ? 0 : function(BB, IB) {
          const ZB = IB(1 * BB.length, 1) >>> 0;
          return FB().set(BB, ZB / 1), pB = BB.length, ZB
        }(oB, iB.p5Lh),
        CB = pB;
      const QB = iB.sXdY(GB, vB, kB, cB, nB, hB, zB, NB, gB, qB, WB, CB);
      if (QB[3]) throw dB(QB[2]);
      var sB, wB, OB = (sB = QB[0], wB = QB[1], sB >>>= 0, FB().subarray(sB / 1, sB / 1 + wB)).slice();
      return iB.oodx(QB[0], 1 * QB[1], 1), OB
    }

    function oB(BB, IB) {
      const ZB = WB(BB, iB.p5Lh, iB.JCYo),
        TB = pB,
        JB = iB.WqlJ(ZB, TB, IB);
      if (JB[1]) throw dB(JB[0])
    }

    function GB() {
      iB.aoUD()
    }

    function vB() {
      return {
        __proto__: null,
        Yjeu: {
          __proto__: null,
          OVcX: function(BB, IB) {
            return kB(Error(hB(BB, IB)))
          },
          cWv6: function(BB, IB) {
            const ZB = NB(IB),
              TB = "string" === typeof ZB ? ZB : void 0;
            var JB = yB(TB) ? 0 : WB(TB, iB.p5Lh, iB.JCYo),
              oB = pB;
            nB().setInt32(BB + 4, oB, !0), nB().setInt32(BB + 0, JB, !0)
          },
          kqjr: function(BB, IB) {
            throw new Error(hB(BB, IB))
          },
          MYlM: function(BB, IB) {
            console.error(hB(BB, IB))
          },
          aftt: function(BB) {
            dB(BB)
          }
        }
      }
    }

    function kB(BB) {
      qB === gB.length && gB.push(gB.length + 1);
      const IB = qB;
      return qB = gB[IB], gB[IB] = BB, IB
    }
    ZB.r(TB), ZB.d(TB, {
      ovB: () => JB,
      hh: () => oB,
      default: () => MB,
      initSync: () => HB,
      zh: () => GB
    });
    let cB = null;

    function nB() {
      return null !== cB && cB.buffer === iB.memory.buffer || (cB = new DataView(iB.memory.buffer)), cB
    }

    function hB(BB, IB) {
      return function(BB, IB) {
        sB += IB, sB >= QB && (CB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), CB.decode(), sB = IB);
        return CB.decode(FB().subarray(BB, BB + IB))
      }(BB >>> 0, IB)
    }
    let zB = null;

    function FB() {
      return null !== zB && 0 !== zB.byteLength || (zB = new Uint8Array(iB.memory.buffer)), zB
    }

    function NB(BB) {
      return gB[BB]
    }
    let gB = new Array(1024).fill(void 0);
    gB.push(void 0, null, !0, !1);
    let qB = gB.length;

    function yB(BB) {
      return void 0 === BB || null === BB
    }

    function UB(BB, IB) {
      const ZB = IB(4 * BB.length, 4) >>> 0,
        TB = nB();
      for (let JB = 0; JB < BB.length; JB++) TB.setUint32(ZB + 4 * JB, kB(BB[JB]), !0);
      return pB = BB.length, ZB
    }

    function WB(BB, IB, ZB) {
      if (void 0 === ZB) {
        const ZB = wB.encode(BB),
          TB = IB(ZB.length, 1) >>> 0;
        return FB().subarray(TB, TB + ZB.length).set(ZB), pB = ZB.length, TB
      }
      let TB = BB.length,
        JB = IB(TB, 1) >>> 0;
      const oB = FB();
      let GB = 0;
      for (; GB < TB; GB++) {
        const IB = BB.charCodeAt(GB);
        if (IB > 127) break;
        oB[JB + GB] = IB
      }
      if (GB !== TB) {
        0 !== GB && (BB = BB.slice(GB)), JB = ZB(JB, TB, TB = GB + 3 * BB.length, 1) >>> 0;
        const IB = FB().subarray(JB + GB, JB + TB);
        GB += wB.encodeInto(BB, IB).written, JB = ZB(JB, TB, GB, 1) >>> 0
      }
      return pB = GB, JB
    }

    function dB(BB) {
      const IB = NB(BB);
      return function(BB) {
        BB < 1028 || (gB[BB] = qB, qB = BB)
      }(BB), IB
    }
    let CB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    CB.decode();
    const QB = 2146435072;
    let sB = 0;
    const wB = new TextEncoder;
    "encodeInto" in wB || (wB.encodeInto = function(BB, IB) {
      const ZB = wB.encode(BB);
      return IB.set(ZB), {
        read: BB.length,
        written: ZB.length
      }
    });
    let OB, YB, iB, pB = 0;

    function aB(BB, IB) {
      return YB = BB, iB = BB.exports, OB = IB, cB = null, zB = null, iB.Vqwq(), iB
    }

    function HB(BB) {
      if (void 0 !== iB) return iB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const IB = vB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return aB(new WebAssembly.Instance(BB, IB), BB)
    }
    async function MB(BB) {
      if (void 0 !== iB) return iB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const IB = vB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: ZB,
        module: TB
      } = await async function(BB, IB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, IB)
          } catch (ZB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw ZB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZB)
          }
          const TB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(TB, IB)
        } {
          const ZB = await WebAssembly.instantiate(BB, IB);
          return ZB instanceof WebAssembly.Instance ? {
            instance: ZB,
            module: BB
          } : ZB
        }
      }(await BB, IB);
      return aB(ZB, TB)
    }
    var jB = ZB(3043),
      PB = ZB(6771);
    class RB extends Error {
      stage;
      constructor(BB, IB) {
        super((0, jB.G)(BB, IB), {
          cause: IB
        }), this.name = "BloxdAnimWasmError", this.stage = BB
      }
    }
    let rB = null,
      mB = null;

    function XB() {
      if (mB) throw mB
    }
    async function LB(BB, IB, JB) {
      XB();
      const oB = await (rB ??= (async () => {
        let BB;
        try {
          BB = await (0, jB.J)(new ZB.U(ZB(42639)), (0, PB.e)("bloxd_wasm_anim"))
        } catch (IB) {
          throw new RB((0, jB.N)(IB), IB)
        }
        try {
          await MB({
            module_or_path: BB
          })
        } catch (IB) {
          throw new RB("instantiate", IB)
        }
        return TB
      })(), rB.catch((() => {
        rB = null
      })), rB);
      XB();
      try {
        return oB.ovB(Object.entries(BB).flat(), [...IB.mobTypes], [...IB.vehicleTypes], [...IB.mobAiStates], [...IB.playerPoses], "builtIns" in JB ? JB.builtIns : void 0)
      } catch (GB) {
        const BB = new RB("call", GB);
        throw GB instanceof WebAssembly.RuntimeError && (mB = BB), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);