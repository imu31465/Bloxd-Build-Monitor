export const id = 5;
export const ids = [5];
export const modules = {
  41938: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_anim_bg.0ca41d7a477cc388d2bd.wasm"
  },
  41932: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BloxdAnimWasmError: () => PJ,
      compileAnimationPackInWasm: () => zJ
    });
    var FJ = {};

    function UJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = rJ(JJ, IJ.xt5R),
        AJ = MJ,
        qJ = rJ(cJ, IJ.xt5R),
        jJ = MJ,
        YJ = rJ(ZJ, IJ.xt5R),
        hJ = MJ,
        DJ = rJ(FJ, IJ.xt5R),
        nJ = MJ,
        GJ = rJ(UJ, IJ.xt5R),
        fJ = MJ;
      var vJ = xJ(eJ) ? 0 : function(JJ, cJ) {
          const ZJ = cJ(1 * JJ.length, 1) >>> 0;
          return sJ().set(JJ, ZJ / 1), MJ = JJ.length, ZJ
        }(eJ, IJ.xt5R),
        QJ = MJ;
      const EJ = IJ.CGyT(XJ, AJ, qJ, jJ, YJ, hJ, DJ, nJ, GJ, fJ, vJ, QJ);
      if (EJ[3]) throw mJ(EJ[2]);
      var VJ, KJ, yJ = (VJ = EJ[0], KJ = EJ[1], VJ >>>= 0, sJ().subarray(VJ / 1, VJ / 1 + KJ)).slice();
      return IJ.usaR(EJ[0], 1 * EJ[1], 1), yJ
    }

    function eJ(JJ, cJ) {
      const ZJ = vJ(JJ, IJ.xt5R, IJ.Fdqt),
        FJ = MJ,
        UJ = IJ.EKIj(ZJ, FJ, cJ);
      if (UJ[1]) throw mJ(UJ[0])
    }

    function XJ() {
      IJ.lN0W()
    }

    function AJ() {
      return {
        __proto__: null,
        ukFr: {
          __proto__: null,
          p3nr: function(JJ, cJ) {
            return qJ(Error(hJ(JJ, cJ)))
          },
          fhwI: function(JJ, cJ) {
            const ZJ = nJ(cJ),
              FJ = "string" === typeof ZJ ? ZJ : void 0;
            var UJ = xJ(FJ) ? 0 : vJ(FJ, IJ.xt5R, IJ.Fdqt),
              eJ = MJ;
            YJ().setInt32(JJ + 4, eJ, !0), YJ().setInt32(JJ + 0, UJ, !0)
          },
          gVBi: function(JJ, cJ) {
            throw new Error(hJ(JJ, cJ))
          },
          ODRO: function(JJ, cJ) {
            console.error(hJ(JJ, cJ))
          },
          OIKQ: function(JJ) {
            mJ(JJ)
          }
        }
      }
    }

    function qJ(JJ) {
      fJ === GJ.length && GJ.push(GJ.length + 1);
      const cJ = fJ;
      return fJ = GJ[cJ], GJ[cJ] = JJ, cJ
    }
    ZJ.r(FJ), ZJ.d(FJ, {
      mXJ: () => UJ,
      CY: () => eJ,
      default: () => WJ,
      initSync: () => wJ,
      uY: () => XJ
    });
    let jJ = null;

    function YJ() {
      return (null === jJ || !0 === jJ.buffer.detached || void 0 === jJ.buffer.detached && jJ.buffer !== IJ.memory.buffer) && (jJ = new DataView(IJ.memory.buffer)), jJ
    }

    function hJ(JJ, cJ) {
      return function(JJ, cJ) {
        VJ += cJ, VJ >= EJ && (QJ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), QJ.decode(), VJ = cJ);
        return QJ.decode(sJ().subarray(JJ, JJ + cJ))
      }(JJ >>> 0, cJ)
    }
    let DJ = null;

    function sJ() {
      return null !== DJ && 0 !== DJ.byteLength || (DJ = new Uint8Array(IJ.memory.buffer)), DJ
    }

    function nJ(JJ) {
      return GJ[JJ]
    }
    let GJ = new Array(1024).fill(void 0);
    GJ.push(void 0, null, !0, !1);
    let fJ = GJ.length;

    function xJ(JJ) {
      return void 0 === JJ || null === JJ
    }

    function rJ(JJ, cJ) {
      const ZJ = cJ(4 * JJ.length, 4) >>> 0,
        FJ = YJ();
      for (let UJ = 0; UJ < JJ.length; UJ++) FJ.setUint32(ZJ + 4 * UJ, qJ(JJ[UJ]), !0);
      return MJ = JJ.length, ZJ
    }

    function vJ(JJ, cJ, ZJ) {
      if (void 0 === ZJ) {
        const ZJ = KJ.encode(JJ),
          FJ = cJ(ZJ.length, 1) >>> 0;
        return sJ().subarray(FJ, FJ + ZJ.length).set(ZJ), MJ = ZJ.length, FJ
      }
      let FJ = JJ.length,
        UJ = cJ(FJ, 1) >>> 0;
      const eJ = sJ();
      let XJ = 0;
      for (; XJ < FJ; XJ++) {
        const cJ = JJ.charCodeAt(XJ);
        if (cJ > 127) break;
        eJ[UJ + XJ] = cJ
      }
      if (XJ !== FJ) {
        0 !== XJ && (JJ = JJ.slice(XJ)), UJ = ZJ(UJ, FJ, FJ = XJ + 3 * JJ.length, 1) >>> 0;
        const cJ = sJ().subarray(UJ + XJ, UJ + FJ);
        XJ += KJ.encodeInto(JJ, cJ).written, UJ = ZJ(UJ, FJ, XJ, 1) >>> 0
      }
      return MJ = XJ, UJ
    }

    function mJ(JJ) {
      const cJ = nJ(JJ);
      return function(JJ) {
        JJ < 1028 || (GJ[JJ] = fJ, fJ = JJ)
      }(JJ), cJ
    }
    let QJ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    QJ.decode();
    const EJ = 2146435072;
    let VJ = 0;
    const KJ = new TextEncoder;
    "encodeInto" in KJ || (KJ.encodeInto = function(JJ, cJ) {
      const ZJ = KJ.encode(JJ);
      return cJ.set(ZJ), {
        read: JJ.length,
        written: ZJ.length
      }
    });
    let yJ, SJ, IJ, MJ = 0;

    function bJ(JJ, cJ) {
      return SJ = JJ, IJ = JJ.exports, yJ = cJ, jJ = null, DJ = null, IJ.xTix(), IJ
    }

    function wJ(JJ) {
      if (void 0 !== IJ) return IJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module: JJ
      } = JJ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cJ = AJ();
      JJ instanceof WebAssembly.Module || (JJ = new WebAssembly.Module(JJ));
      return bJ(new WebAssembly.Instance(JJ, cJ), JJ)
    }
    async function WJ(JJ) {
      if (void 0 !== IJ) return IJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module_or_path: JJ
      } = JJ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cJ = AJ();
      ("string" === typeof JJ || "function" === typeof Request && JJ instanceof Request || "function" === typeof URL && JJ instanceof URL) && (JJ = fetch(JJ));
      const {
        instance: ZJ,
        module: FJ
      } = await async function(JJ, cJ) {
        if ("function" === typeof Response && JJ instanceof Response) {
          if (!JJ.ok) throw new Error(`failed to fetch Wasm: ${JJ.status} ${JJ.statusText} fetching '${JJ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(JJ, cJ)
          } catch (ZJ) {
            if (! function(JJ) {
                switch (JJ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(JJ.type) || "application/wasm" === JJ.headers.get("Content-Type")) throw ZJ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZJ)
          }
          const FJ = await JJ.arrayBuffer();
          return await WebAssembly.instantiate(FJ, cJ)
        } {
          const ZJ = await WebAssembly.instantiate(JJ, cJ);
          return ZJ instanceof WebAssembly.Instance ? {
            instance: ZJ,
            module: JJ
          } : ZJ
        }
      }(await JJ, cJ);
      return bJ(ZJ, FJ)
    }
    var gJ = ZJ(3183),
      HJ = ZJ(5963);
    class PJ extends Error {
      stage;
      constructor(JJ, cJ) {
        super((0, gJ.F)(JJ, cJ), {
          cause: cJ
        }), this.name = "BloxdAnimWasmError", this.stage = JJ
      }
    }
    let kJ = null,
      pJ = null;

    function dJ() {
      if (pJ) throw pJ
    }
    async function zJ(JJ, cJ, UJ) {
      dJ();
      const eJ = await (kJ ??= (async () => {
        let JJ;
        try {
          JJ = await (0, gJ.H)(new ZJ.U(ZJ(41938)), (0, HJ.e)("bloxd_wasm_anim"))
        } catch (cJ) {
          throw new PJ((0, gJ.O)(cJ), cJ)
        }
        try {
          await WJ({
            module_or_path: JJ
          })
        } catch (cJ) {
          throw new PJ("instantiate", cJ)
        }
        return FJ
      })(), kJ.catch((() => {
        kJ = null
      })), kJ);
      dJ();
      try {
        return eJ.mXJ(Object.entries(JJ).flat(), [...cJ.mobTypes], [...cJ.vehicleTypes], [...cJ.mobAiStates], [...cJ.playerPoses], "builtIns" in UJ ? UJ.builtIns : void 0)
      } catch (XJ) {
        const JJ = new PJ("call", XJ);
        throw XJ instanceof WebAssembly.RuntimeError && (pJ = JJ), JJ
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);