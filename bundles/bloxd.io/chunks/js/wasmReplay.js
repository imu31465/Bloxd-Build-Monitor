export const id = 58;
export const ids = [58];
export const modules = {
  59737: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_replay_bg.6b2d1aa79977d634b6e1.wasm"
  },
  5963: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(3183);
    const UJ = {
      bloxd_wasm: () => "523d3e5949bf2a4753ef5ca2a73400ebb345835b7971369ead2f990b98be43ec",
      bloxd_wasm_client: () => "d4cb36df94a07de19e42eeffa0530f0524c7d89d6cd225e6e3040a8fe33cb61f",
      bloxd_wasm_workers: () => "b13b723c21ff4be0aa4bb62ce03a9989f6e3a955e9dbcbcab4ce4af24b202aca",
      bloxd_wasm_models: () => "f6812c5c938dcbac86f88041ffced930fe9d08400f719159d23aa9e3370f1e40",
      bloxd_wasm_webgpu: () => "e406b84c9505f7a02226339b21c94d9a9039f99b240ba6ea17b3503c03394d97",
      bloxd_wasm_webgl: () => "31e54300aadfdf39d9adf46e78a03ba62332faca6c028e444167fa4ad879a305",
      bloxd_wasm_webgl1: () => "eabb7ee7c8fbfb9be543faab1ff74311865cfd0aa56a6ee1f3f14d03e5ae7d24",
      bloxd_wasm_replay: () => "4f3a9b06c75077dd5f30c00cad61978d804090ee39979df7a1cfbfc9252724da",
      bloxd_wasm_recorder: () => "27d0a05e493ac60b3abbc822d35e07432c9fd8fda5fab082d13b04b57a84627e",
      bloxd_wasm_anim: () => "df3ee160579d661f445b2f411e354890d481e89dda8265b662e7e3f787cf6236",
      bloxd_wasm_textures: () => "1fc5f5b691e5b407d47f375467e6fd9d0f10cb030443922e1b8b25cd186e7173",
      bloxd_wasm_shader_pack: () => "749cb76383a9de0896958e82b823c3a4f9479f89c71e25be0da5c1167b8eeea1"
    };
    var eJ = ZJ(5971);

    function XJ(JJ) {
      const cJ = Object.prototype.hasOwnProperty.call(UJ, JJ) ? UJ[JJ]() : void 0;
      if (void 0 !== cJ) return {
        sha256: cJ,
        onMismatch: eJ.t
      };
      throw new FJ.j(`${JJ} has no release digest, so this build refuses it`)
    }
  },
  59735: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BloxdReplayWasmError: () => HJ,
      loadReplayModule: () => OJ,
      markReplayTrapped: () => uJ,
      replayMemoryBytes: () => CJ,
      unloadReplayModule: () => TJ
    });
    var FJ = {};
    ZJ.r(FJ), ZJ.d(FJ, {
      dUJ: () => UJ,
      yXJ: () => wJ,
      CY: () => eJ,
      default: () => bJ,
      initSync: () => MJ,
      uY: () => XJ,
      HUJ: () => AJ,
      zUJ: () => qJ
    });
    class UJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, YJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        yJ.TYuR(JJ, 0)
      }
      CUJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
        yJ.iMTQ(this.__wbg_ptr, JJ, cJ, ZJ, FJ, UJ, eJ)
      }
      close() {
        yJ.c2vp(this.__wbg_ptr)
      }
      crop(JJ, cJ) {
        yJ.msW0(this.__wbg_ptr, JJ, cJ)
      }
      RUJ(JJ, cJ) {
        yJ.rcSA(this.__wbg_ptr, JJ, cJ)
      }
      aUJ() {
        return yJ.in6k(this.__wbg_ptr) >>> 0
      }
      LUJ() {
        return yJ.dLFI(this.__wbg_ptr) >>> 0
      }
      BUJ() {
        return yJ.cNY6(this.__wbg_ptr) >>> 0
      }
      tUJ() {
        return yJ.JMYQ(this.__wbg_ptr) >>> 0
      }
      iUJ(JJ, cJ) {
        yJ.scXt(this.__wbg_ptr, JJ, cJ)
      }
      constructor() {
        const JJ = yJ.htMZ();
        return this.__wbg_ptr = JJ, YJ.register(this, this.__wbg_ptr, this), this
      }
      open() {
        yJ.SA3Q(this.__wbg_ptr)
      }
      bUJ() {
        return yJ.PHaO(this.__wbg_ptr) >>> 0
      }
      pause() {
        yJ.c2Gv(this.__wbg_ptr)
      }
      play() {
        yJ.Eh8M(this.__wbg_ptr)
      }
      save() {
        return yJ.ASlv(this.__wbg_ptr) >>> 0
      }
      oUJ() {
        yJ.wqjj(this.__wbg_ptr)
      }
      seek(JJ, cJ) {
        yJ.Az2l(this.__wbg_ptr, JJ, cJ)
      }
      JeJ(JJ) {
        yJ.mEta(this.__wbg_ptr, JJ)
      }
      uUJ(JJ, cJ) {
        const ZJ = function(JJ, cJ) {
            const ZJ = cJ(8 * JJ.length, 8) >>> 0;
            return function() {
              null !== DJ && 0 !== DJ.byteLength || (DJ = new Float64Array(yJ.memory.buffer));
              return DJ
            }().set(JJ, ZJ / 8), SJ = JJ.length, ZJ
          }(cJ, yJ.bzbe),
          FJ = SJ;
        yJ.ULjQ(this.__wbg_ptr, JJ, ZJ, FJ)
      }
      TUJ(JJ, cJ) {
        yJ.CGgW(this.__wbg_ptr, JJ, cJ)
      }
      lUJ(JJ) {
        yJ.iHJT(this.__wbg_ptr, JJ)
      }
      stage(JJ) {
        return yJ.FRqU(this.__wbg_ptr, JJ) >>> 0
      }
      step(JJ, cJ) {
        return yJ.IfgQ(this.__wbg_ptr, JJ, cJ) >>> 0
      }
    }

    function eJ(JJ, cJ) {
      const ZJ = function(JJ, cJ, ZJ) {
          if (void 0 === ZJ) {
            const ZJ = EJ.encode(JJ),
              FJ = cJ(ZJ.length, 1) >>> 0;
            return GJ().subarray(FJ, FJ + ZJ.length).set(ZJ), SJ = ZJ.length, FJ
          }
          let FJ = JJ.length,
            UJ = cJ(FJ, 1) >>> 0;
          const eJ = GJ();
          let XJ = 0;
          for (; XJ < FJ; XJ++) {
            const cJ = JJ.charCodeAt(XJ);
            if (cJ > 127) break;
            eJ[UJ + XJ] = cJ
          }
          if (XJ !== FJ) {
            0 !== XJ && (JJ = JJ.slice(XJ)), UJ = ZJ(UJ, FJ, FJ = XJ + 3 * JJ.length, 1) >>> 0;
            const cJ = GJ().subarray(UJ + XJ, UJ + FJ);
            XJ += EJ.encodeInto(JJ, cJ).written, UJ = ZJ(UJ, FJ, XJ, 1) >>> 0
          }
          return SJ = XJ, UJ
        }(JJ, yJ.bzbe, yJ.GWNC),
        FJ = SJ,
        UJ = yJ.iIp9(ZJ, FJ, cJ);
      if (UJ[1]) throw rJ(UJ[0])
    }

    function XJ() {
      yJ.zjgL()
    }

    function AJ() {
      return yJ.vnvd() >>> 0
    }

    function qJ() {
      return rJ(yJ.pCnP())
    }

    function jJ() {
      return {
        __proto__: null,
        FPaM: {
          __proto__: null,
          Kgh4: function(JJ, cJ) {
            return hJ(Error(sJ(JJ, cJ)))
          },
          ggKj: function() {
            return hJ(yJ.memory)
          },
          MOe9: function(JJ, cJ) {
            throw new Error(sJ(JJ, cJ))
          },
          j5p2: function(JJ, cJ) {
            console.error(sJ(JJ, cJ))
          },
          BOGK: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (UJ.prototype[Symbol.dispose] = UJ.prototype.free);
    const YJ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((JJ => yJ?.__wbg_replaymodule_free(JJ, 1)));

    function hJ(JJ) {
      xJ === fJ.length && fJ.push(fJ.length + 1);
      const cJ = xJ;
      return xJ = fJ[cJ], fJ[cJ] = JJ, cJ
    }
    let DJ = null;

    function sJ(JJ, cJ) {
      return function(JJ, cJ) {
        QJ += cJ, QJ >= mJ && (vJ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), vJ.decode(), QJ = cJ);
        return vJ.decode(GJ().subarray(JJ, JJ + cJ))
      }(JJ >>> 0, cJ)
    }
    let nJ = null;

    function GJ() {
      return null !== nJ && 0 !== nJ.byteLength || (nJ = new Uint8Array(yJ.memory.buffer)), nJ
    }
    let fJ = new Array(1024).fill(void 0);
    fJ.push(void 0, null, !0, !1);
    let xJ = fJ.length;

    function rJ(JJ) {
      const cJ = function(JJ) {
        return fJ[JJ]
      }(JJ);
      return function(JJ) {
        JJ < 1028 || (fJ[JJ] = xJ, xJ = JJ)
      }(JJ), cJ
    }
    let vJ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    vJ.decode();
    const mJ = 2146435072;
    let QJ = 0;
    const EJ = new TextEncoder;
    "encodeInto" in EJ || (EJ.encodeInto = function(JJ, cJ) {
      const ZJ = EJ.encode(JJ);
      return cJ.set(ZJ), {
        read: JJ.length,
        written: ZJ.length
      }
    });
    let VJ, KJ, yJ, SJ = 0;

    function IJ(JJ, cJ) {
      return KJ = JJ, yJ = JJ.exports, VJ = cJ, DJ = null, nJ = null, yJ.HYVS(), yJ
    }

    function MJ(JJ) {
      if (void 0 !== yJ) return yJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module: JJ
      } = JJ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cJ = jJ();
      JJ instanceof WebAssembly.Module || (JJ = new WebAssembly.Module(JJ));
      return IJ(new WebAssembly.Instance(JJ, cJ), JJ)
    }
    async function bJ(JJ) {
      if (void 0 !== yJ) return yJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module_or_path: JJ
      } = JJ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cJ = jJ();
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
      return IJ(ZJ, FJ)
    }

    function wJ() {
      yJ = void 0, KJ = void 0, DJ = null, nJ = null, fJ = new Array(1024).fill(void 0), fJ.push(void 0, null, !0, !1), xJ = fJ.length
    }
    var WJ = ZJ(3183),
      gJ = ZJ(5963);
    class HJ extends Error {
      stage;
      constructor(JJ, cJ) {
        super((0, WJ.F)(JJ, cJ), {
          cause: cJ
        }), this.name = "BloxdReplayWasmError", this.stage = JJ
      }
    }
    let PJ = null,
      kJ = null,
      pJ = Promise.resolve(),
      dJ = 0,
      zJ = null,
      NJ = null;

    function OJ() {
      if (NJ) return Promise.reject(NJ);
      if (kJ) return kJ;
      const JJ = dJ,
        cJ = pJ,
        UJ = (async () => {
          let UJ;
          await cJ, PJ ??= (0, WJ.H)(new ZJ.U(ZJ(59737)), (0, gJ.e)("bloxd_wasm_replay"));
          try {
            UJ = await PJ
          } catch (eJ) {
            throw PJ = null, new HJ((0, WJ.O)(eJ), eJ)
          }
          if (JJ !== dJ) throw new HJ("instantiate", new Error("unloaded while loading"));
          try {
            await bJ({
              module_or_path: UJ
            })
          } catch (eJ) {
            throw wJ(), new HJ("instantiate", eJ)
          }
          if (JJ !== dJ) throw wJ(), new HJ("instantiate", new Error("unloaded while loading"));
          return zJ = qJ(), FJ
        })();
      return kJ = UJ, pJ = UJ.catch((() => {})), UJ.catch((() => {
        kJ === UJ && (kJ = null)
      })), UJ
    }

    function TJ() {
      NJ || iJ()
    }

    function CJ() {
      return zJ?.buffer.byteLength ?? 0
    }

    function uJ(JJ) {
      return NJ || (NJ = new HJ("call", JJ), iJ()), NJ
    }

    function iJ() {
      dJ++, wJ(), kJ = null, zJ = null
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);