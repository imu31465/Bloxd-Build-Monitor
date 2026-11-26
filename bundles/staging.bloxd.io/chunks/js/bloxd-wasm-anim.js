export const id = 5;
export const ids = [5];
export const modules = {
  54036: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_anim_bg.871999dc0f27698e17e9.wasm"
  },
  54029: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BloxdAnimWasmError: () => LB,
      compileAnimationPackInWasm: () => wB
    });
    var YB = {};

    function DB(BB, OB, GB, YB, DB, QB) {
      const oB = RB(BB, dB.rubw),
        jB = KB,
        yB = RB(OB, dB.rubw),
        JB = KB,
        MB = RB(GB, dB.rubw),
        PB = KB,
        zB = RB(YB, dB.rubw),
        pB = KB,
        qB = RB(DB, dB.rubw),
        ZB = KB;
      var WB = NB(QB) ? 0 : function(BB, OB) {
          const GB = OB(1 * BB.length, 1) >>> 0;
          return lB().set(BB, GB / 1), KB = BB.length, GB
        }(QB, dB.rubw),
        VB = KB;
      const SB = dB.uB0s(oB, jB, yB, JB, MB, PB, zB, pB, qB, ZB, WB, VB);
      if (SB[3]) throw AB(SB[2]);
      var nB, UB, fB = (nB = SB[0], UB = SB[1], nB >>>= 0, lB().subarray(nB / 1, nB / 1 + UB)).slice();
      return dB.UVD4(SB[0], 1 * SB[1], 1), fB
    }

    function QB(BB, OB) {
      const GB = WB(BB, dB.rubw, dB.knRL),
        YB = KB,
        DB = dB.a2OL(GB, YB, OB);
      if (DB[1]) throw AB(DB[0])
    }

    function oB() {
      dB.bPmF()
    }

    function jB() {
      return {
        __proto__: null,
        tUHU: {
          __proto__: null,
          alcT: function(BB, OB) {
            return yB(Error(PB(BB, OB)))
          },
          mNP4: function(BB, OB) {
            const GB = pB(OB),
              YB = "string" === typeof GB ? GB : void 0;
            var DB = NB(YB) ? 0 : WB(YB, dB.rubw, dB.knRL),
              QB = KB;
            MB().setInt32(BB + 4, QB, !0), MB().setInt32(BB + 0, DB, !0)
          },
          FMyY: function(BB, OB) {
            throw new Error(PB(BB, OB))
          },
          Ap2r: function(BB, OB) {
            console.error(PB(BB, OB))
          },
          dDx4: function(BB) {
            AB(BB)
          }
        }
      }
    }

    function yB(BB) {
      ZB === qB.length && qB.push(qB.length + 1);
      const OB = ZB;
      return ZB = qB[OB], qB[OB] = BB, OB
    }
    GB.r(YB), GB.d(YB, {
      GyB: () => DB,
      sy: () => QB,
      default: () => IB,
      initSync: () => mB,
      VP: () => oB
    });
    let JB = null;

    function MB() {
      return null !== JB && JB.buffer === dB.memory.buffer || (JB = new DataView(dB.memory.buffer)), JB
    }

    function PB(BB, OB) {
      return function(BB, OB) {
        nB += OB, nB >= SB && (VB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), VB.decode(), nB = OB);
        return VB.decode(lB().subarray(BB, BB + OB))
      }(BB >>> 0, OB)
    }
    let zB = null;

    function lB() {
      return null !== zB && 0 !== zB.byteLength || (zB = new Uint8Array(dB.memory.buffer)), zB
    }

    function pB(BB) {
      return qB[BB]
    }
    let qB = new Array(1024).fill(void 0);
    qB.push(void 0, null, !0, !1);
    let ZB = qB.length;

    function NB(BB) {
      return void 0 === BB || null === BB
    }

    function RB(BB, OB) {
      const GB = OB(4 * BB.length, 4) >>> 0,
        YB = MB();
      for (let DB = 0; DB < BB.length; DB++) YB.setUint32(GB + 4 * DB, yB(BB[DB]), !0);
      return KB = BB.length, GB
    }

    function WB(BB, OB, GB) {
      if (void 0 === GB) {
        const GB = UB.encode(BB),
          YB = OB(GB.length, 1) >>> 0;
        return lB().subarray(YB, YB + GB.length).set(GB), KB = GB.length, YB
      }
      let YB = BB.length,
        DB = OB(YB, 1) >>> 0;
      const QB = lB();
      let oB = 0;
      for (; oB < YB; oB++) {
        const OB = BB.charCodeAt(oB);
        if (OB > 127) break;
        QB[DB + oB] = OB
      }
      if (oB !== YB) {
        0 !== oB && (BB = BB.slice(oB)), DB = GB(DB, YB, YB = oB + 3 * BB.length, 1) >>> 0;
        const OB = lB().subarray(DB + oB, DB + YB);
        oB += UB.encodeInto(BB, OB).written, DB = GB(DB, YB, oB, 1) >>> 0
      }
      return KB = oB, DB
    }

    function AB(BB) {
      const OB = pB(BB);
      return function(BB) {
        BB < 1028 || (qB[BB] = ZB, ZB = BB)
      }(BB), OB
    }
    let VB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    VB.decode();
    const SB = 2146435072;
    let nB = 0;
    const UB = new TextEncoder;
    "encodeInto" in UB || (UB.encodeInto = function(BB, OB) {
      const GB = UB.encode(BB);
      return OB.set(GB), {
        read: BB.length,
        written: GB.length
      }
    });
    let fB, kB, dB, KB = 0;

    function uB(BB, OB) {
      return kB = BB, dB = BB.exports, fB = OB, JB = null, zB = null, dB.rxZz(), dB
    }

    function mB(BB) {
      if (void 0 !== dB) return dB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const OB = jB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return uB(new WebAssembly.Instance(BB, OB), BB)
    }
    async function IB(BB) {
      if (void 0 !== dB) return dB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const OB = jB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: GB,
        module: YB
      } = await async function(BB, OB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, OB)
          } catch (GB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw GB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GB)
          }
          const YB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(YB, OB)
        } {
          const GB = await WebAssembly.instantiate(BB, OB);
          return GB instanceof WebAssembly.Instance ? {
            instance: GB,
            module: BB
          } : GB
        }
      }(await BB, OB);
      return uB(GB, YB)
    }
    var FB = GB(3210),
      iB = GB(7161);
    class LB extends Error {
      stage;
      constructor(BB, OB) {
        super((0, FB.C)(BB, OB), {
          cause: OB
        }), this.name = "BloxdAnimWasmError", this.stage = BB
      }
    }
    let gB = null,
      rB = null;

    function XB() {
      if (rB) throw rB
    }
    async function wB(BB, OB, DB) {
      XB();
      const QB = await (gB ??= (async () => {
        let BB;
        try {
          BB = await (0, FB.G)(new GB.U(GB(54036)), (0, iB.d)("bloxd_wasm_anim"))
        } catch (OB) {
          throw new LB((0, FB.M)(OB), OB)
        }
        try {
          await IB({
            module_or_path: BB
          })
        } catch (OB) {
          throw new LB("instantiate", OB)
        }
        return YB
      })(), gB.catch((() => {
        gB = null
      })), gB);
      XB();
      try {
        return QB.GyB(Object.entries(BB).flat(), [...OB.mobTypes], [...OB.vehicleTypes], [...OB.mobAiStates], [...OB.playerPoses], "builtIns" in DB ? DB.builtIns : void 0)
      } catch (oB) {
        const BB = new LB("call", oB);
        throw oB instanceof WebAssembly.RuntimeError && (rB = BB), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);