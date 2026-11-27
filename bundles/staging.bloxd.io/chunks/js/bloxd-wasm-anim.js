export const id = 5;
export const ids = [5];
export const modules = {
  54636: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_anim_bg.7b09b851f17c0f78c272.wasm"
  },
  54630: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BloxdAnimWasmError: () => HR,
      compileAnimationPackInWasm: () => IR
    });
    var yR = {};

    function tR(RR, JR, GR, yR, tR, uR) {
      const ZR = UR(RR, gR.GX6w),
        qR = bR,
        iR = UR(JR, gR.GX6w),
        fR = bR,
        VR = UR(GR, gR.GX6w),
        KR = bR,
        wR = UR(yR, gR.GX6w),
        eR = bR,
        aR = UR(tR, gR.GX6w),
        LR = bR;
      var WR = nR(uR) ? 0 : function(RR, JR) {
          const GR = JR(1 * RR.length, 1) >>> 0;
          return rR().set(RR, GR / 1), bR = RR.length, GR
        }(uR, gR.GX6w),
        CR = bR;
      const XR = gR.XnOo(ZR, qR, iR, fR, VR, KR, wR, eR, aR, LR, WR, CR);
      if (XR[3]) throw AR(XR[2]);
      var MR, BR, lR = (MR = XR[0], BR = XR[1], MR >>>= 0, rR().subarray(MR / 1, MR / 1 + BR)).slice();
      return gR.bmS1(XR[0], 1 * XR[1], 1), lR
    }

    function uR(RR, JR) {
      const GR = WR(RR, gR.GX6w, gR.xyL8),
        yR = bR,
        tR = gR.fMGE(GR, yR, JR);
      if (tR[1]) throw AR(tR[0])
    }

    function ZR() {
      gR.JyP9()
    }

    function qR() {
      return {
        __proto__: null,
        Zpv2: {
          __proto__: null,
          qfgc: function(RR, JR) {
            return iR(Error(KR(RR, JR)))
          },
          ub6D: function(RR, JR) {
            const GR = eR(JR),
              yR = "string" === typeof GR ? GR : void 0;
            var tR = nR(yR) ? 0 : WR(yR, gR.GX6w, gR.xyL8),
              uR = bR;
            VR().setInt32(RR + 4, uR, !0), VR().setInt32(RR + 0, tR, !0)
          },
          WsDp: function(RR, JR) {
            throw new Error(KR(RR, JR))
          },
          ZqWV: function(RR, JR) {
            console.error(KR(RR, JR))
          },
          o2ot: function(RR) {
            AR(RR)
          }
        }
      }
    }

    function iR(RR) {
      LR === aR.length && aR.push(aR.length + 1);
      const JR = LR;
      return LR = aR[JR], aR[JR] = RR, JR
    }
    GR.r(yR), GR.d(yR, {
      sqR: () => tR,
      HK: () => uR,
      default: () => xR,
      initSync: () => OR,
      oK: () => ZR
    });
    let fR = null;

    function VR() {
      return null !== fR && fR.buffer === gR.memory.buffer || (fR = new DataView(gR.memory.buffer)), fR
    }

    function KR(RR, JR) {
      return function(RR, JR) {
        MR += JR, MR >= XR && (CR = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), CR.decode(), MR = JR);
        return CR.decode(rR().subarray(RR, RR + JR))
      }(RR >>> 0, JR)
    }
    let wR = null;

    function rR() {
      return null !== wR && 0 !== wR.byteLength || (wR = new Uint8Array(gR.memory.buffer)), wR
    }

    function eR(RR) {
      return aR[RR]
    }
    let aR = new Array(1024).fill(void 0);
    aR.push(void 0, null, !0, !1);
    let LR = aR.length;

    function nR(RR) {
      return void 0 === RR || null === RR
    }

    function UR(RR, JR) {
      const GR = JR(4 * RR.length, 4) >>> 0,
        yR = VR();
      for (let tR = 0; tR < RR.length; tR++) yR.setUint32(GR + 4 * tR, iR(RR[tR]), !0);
      return bR = RR.length, GR
    }

    function WR(RR, JR, GR) {
      if (void 0 === GR) {
        const GR = BR.encode(RR),
          yR = JR(GR.length, 1) >>> 0;
        return rR().subarray(yR, yR + GR.length).set(GR), bR = GR.length, yR
      }
      let yR = RR.length,
        tR = JR(yR, 1) >>> 0;
      const uR = rR();
      let ZR = 0;
      for (; ZR < yR; ZR++) {
        const JR = RR.charCodeAt(ZR);
        if (JR > 127) break;
        uR[tR + ZR] = JR
      }
      if (ZR !== yR) {
        0 !== ZR && (RR = RR.slice(ZR)), tR = GR(tR, yR, yR = ZR + 3 * RR.length, 1) >>> 0;
        const JR = rR().subarray(tR + ZR, tR + yR);
        ZR += BR.encodeInto(RR, JR).written, tR = GR(tR, yR, ZR, 1) >>> 0
      }
      return bR = ZR, tR
    }

    function AR(RR) {
      const JR = eR(RR);
      return function(RR) {
        RR < 1028 || (aR[RR] = LR, LR = RR)
      }(RR), JR
    }
    let CR = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    CR.decode();
    const XR = 2146435072;
    let MR = 0;
    const BR = new TextEncoder;
    "encodeInto" in BR || (BR.encodeInto = function(RR, JR) {
      const GR = BR.encode(RR);
      return JR.set(GR), {
        read: RR.length,
        written: GR.length
      }
    });
    let lR, pR, gR, bR = 0;

    function vR(RR, JR) {
      return pR = RR, gR = RR.exports, lR = JR, fR = null, wR = null, gR.ipM6(), gR
    }

    function OR(RR) {
      if (void 0 !== gR) return gR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module: RR
      } = RR) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const JR = qR();
      RR instanceof WebAssembly.Module || (RR = new WebAssembly.Module(RR));
      return vR(new WebAssembly.Instance(RR, JR), RR)
    }
    async function xR(RR) {
      if (void 0 !== gR) return gR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module_or_path: RR
      } = RR) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const JR = qR();
      ("string" === typeof RR || "function" === typeof Request && RR instanceof Request || "function" === typeof URL && RR instanceof URL) && (RR = fetch(RR));
      const {
        instance: GR,
        module: yR
      } = await async function(RR, JR) {
        if ("function" === typeof Response && RR instanceof Response) {
          if (!RR.ok) throw new Error(`failed to fetch Wasm: ${RR.status} ${RR.statusText} fetching '${RR.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(RR, JR)
          } catch (GR) {
            if (! function(RR) {
                switch (RR) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(RR.type) || "application/wasm" === RR.headers.get("Content-Type")) throw GR;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GR)
          }
          const yR = await RR.arrayBuffer();
          return await WebAssembly.instantiate(yR, JR)
        } {
          const GR = await WebAssembly.instantiate(RR, JR);
          return GR instanceof WebAssembly.Instance ? {
            instance: GR,
            module: RR
          } : GR
        }
      }(await RR, JR);
      return vR(GR, yR)
    }
    var NR = GR(2457),
      DR = GR(7762);
    class HR extends Error {
      stage;
      constructor(RR, JR) {
        super((0, NR.z)(RR, JR), {
          cause: JR
        }), this.name = "BloxdAnimWasmError", this.stage = RR
      }
    }
    let oR = null,
      cR = null;

    function PR() {
      if (cR) throw cR
    }
    async function IR(RR, JR, tR) {
      PR();
      const uR = await (oR ??= (async () => {
        let RR;
        try {
          RR = await (0, NR.A)(new GR.U(GR(54636)), (0, DR.c)("bloxd_wasm_anim"))
        } catch (JR) {
          throw new HR((0, NR.E)(JR), JR)
        }
        try {
          await xR({
            module_or_path: RR
          })
        } catch (JR) {
          throw new HR("instantiate", JR)
        }
        return yR
      })(), oR.catch((() => {
        oR = null
      })), oR);
      PR();
      try {
        return uR.sqR(Object.entries(RR).flat(), [...JR.mobTypes], [...JR.vehicleTypes], [...JR.mobAiStates], [...JR.playerPoses], "builtIns" in tR ? tR.builtIns : void 0)
      } catch (ZR) {
        const RR = new HR("call", ZR);
        throw ZR instanceof WebAssembly.RuntimeError && (cR = RR), RR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);