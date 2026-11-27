export const id = 77;
export const ids = [77];
export const modules = {
  64343: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_recorder_bg.abf0a8c8735d5f103ccc.wasm"
  },
  64335: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BloxdRecorderWasmError: () => DR,
      RECORDER_MODULE_ID: () => NR,
      loadRecorderModule: () => cR,
      markRecorderTrapped: () => IR,
      prefetchRecorderModule: () => PR,
      recorderMemoryBytes: () => zR,
      unloadRecorderModule: () => mR
    });
    var yR = {};
    GR.r(yR), GR.d(yR, {
      vZR: () => tR,
      GiR: () => vR,
      HK: () => uR,
      default: () => bR,
      initSync: () => gR,
      oK: () => ZR,
      gZR: () => qR,
      AZR: () => iR
    });
    class tR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        BR.IZKb(RR, 0)
      }
      busy() {
        return 0 !== BR.a9dM(this.__wbg_ptr)
      }
      command(RR, JR) {
        return 0 !== BR.YUzY(this.__wbg_ptr, RR, JR)
      }
      CZR(RR) {
        return BR.rwOF(this.__wbg_ptr, RR) >>> 0
      }
      WZR() {
        BR.ySGR(this.__wbg_ptr)
      }
      UZR() {
        return BR.iSsS(this.__wbg_ptr) >>> 0
      }
      nZR() {
        return BR.cQto(this.__wbg_ptr)
      }
      BZR() {
        return BR.BetY(this.__wbg_ptr) >>> 0
      }
      lZR() {
        return BR.WysN(this.__wbg_ptr) >>> 0
      }
      feed(RR) {
        return BR.stUw(this.__wbg_ptr, RR) >>> 0
      }
      constructor() {
        const RR = BR.qVlU();
        return this.__wbg_ptr = RR, VR.register(this, this.__wbg_ptr, this), this
      }
      MZR() {
        return BR.STlR(this.__wbg_ptr) >>> 0
      }
      yiR() {
        return BR.RyNC(this.__wbg_ptr) >>> 0
      }
      LZR(RR, JR, GR) {
        return 0 !== BR.qCeT(this.__wbg_ptr, RR, JR, GR)
      }
      stage(RR) {
        return BR.j3gb(this.__wbg_ptr, RR) >>> 0
      }
      step() {
        return BR.sxJx(this.__wbg_ptr) >>> 0
      }
    }

    function uR(RR, JR) {
      const GR = function(RR, JR, GR) {
          if (void 0 === GR) {
            const GR = CR.encode(RR),
              yR = JR(GR.length, 1) >>> 0;
            return eR().subarray(yR, yR + GR.length).set(GR), lR = GR.length, yR
          }
          let yR = RR.length,
            tR = JR(yR, 1) >>> 0;
          const uR = eR();
          let ZR = 0;
          for (; ZR < yR; ZR++) {
            const JR = RR.charCodeAt(ZR);
            if (JR > 127) break;
            uR[tR + ZR] = JR
          }
          if (ZR !== yR) {
            0 !== ZR && (RR = RR.slice(ZR)), tR = GR(tR, yR, yR = ZR + 3 * RR.length, 1) >>> 0;
            const JR = eR().subarray(tR + ZR, tR + yR);
            ZR += CR.encodeInto(RR, JR).written, tR = GR(tR, yR, ZR, 1) >>> 0
          }
          return lR = ZR, tR
        }(RR, BR.mp7v, BR.hl4r),
        yR = lR,
        tR = BR.XH8V(GR, yR, JR);
      if (tR[1]) throw nR(tR[0])
    }

    function ZR() {
      BR.AWWD()
    }

    function qR() {
      return BR.E6nY() >>> 0
    }

    function iR() {
      return nR(BR.iNPq())
    }

    function fR() {
      return {
        __proto__: null,
        pT7H: {
          __proto__: null,
          C16B: function(RR, JR) {
            return KR(Error(wR(RR, JR)))
          },
          S7th: function() {
            return KR(BR.memory)
          },
          OcIc: function(RR, JR) {
            throw new Error(wR(RR, JR))
          },
          pe2e: function(RR, JR) {
            console.error(wR(RR, JR))
          },
          jDhP: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (tR.prototype[Symbol.dispose] = tR.prototype.free);
    const VR = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((RR => BR?.__wbg_recordermodule_free(RR, 1)));

    function KR(RR) {
      LR === aR.length && aR.push(aR.length + 1);
      const JR = LR;
      return LR = aR[JR], aR[JR] = RR, JR
    }

    function wR(RR, JR) {
      return function(RR, JR) {
        AR += JR, AR >= WR && (UR = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), UR.decode(), AR = JR);
        return UR.decode(eR().subarray(RR, RR + JR))
      }(RR >>> 0, JR)
    }
    let rR = null;

    function eR() {
      return null !== rR && 0 !== rR.byteLength || (rR = new Uint8Array(BR.memory.buffer)), rR
    }
    let aR = new Array(1024).fill(void 0);
    aR.push(void 0, null, !0, !1);
    let LR = aR.length;

    function nR(RR) {
      const JR = function(RR) {
        return aR[RR]
      }(RR);
      return function(RR) {
        RR < 1028 || (aR[RR] = LR, LR = RR)
      }(RR), JR
    }
    let UR = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    UR.decode();
    const WR = 2146435072;
    let AR = 0;
    const CR = new TextEncoder;
    "encodeInto" in CR || (CR.encodeInto = function(RR, JR) {
      const GR = CR.encode(RR);
      return JR.set(GR), {
        read: RR.length,
        written: GR.length
      }
    });
    let XR, MR, BR, lR = 0;

    function pR(RR, JR) {
      return MR = RR, BR = RR.exports, XR = JR, rR = null, BR.YhGr(), BR
    }

    function gR(RR) {
      if (void 0 !== BR) return BR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module: RR
      } = RR) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const JR = fR();
      RR instanceof WebAssembly.Module || (RR = new WebAssembly.Module(RR));
      return pR(new WebAssembly.Instance(RR, JR), RR)
    }
    async function bR(RR) {
      if (void 0 !== BR) return BR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module_or_path: RR
      } = RR) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const JR = fR();
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
      return pR(GR, yR)
    }

    function vR() {
      BR = void 0, MR = void 0, rR = null, aR = new Array(1024).fill(void 0), aR.push(void 0, null, !0, !1), LR = aR.length
    }
    var OR = GR(2457),
      xR = GR(7762);
    const NR = 2;
    class DR extends Error {
      stage;
      constructor(RR, JR) {
        super((0, OR.z)(RR, JR), {
          cause: JR
        }), this.name = "BloxdRecorderWasmError", this.stage = RR
      }
    }
    let HR = null;
    const oR = function(RR) {
      let JR = null,
        GR = null,
        yR = null,
        tR = null;
      const uR = async () => {
        let GR = null;
        try {
          return GR = JR ??= (0, OR.A)(RR.url(), (0, xR.c)(RR.name)), await GR
        } catch (yR) {
          throw JR === GR && (JR = null), RR.error((0, OR.E)(yR), yR)
        }
      };
      return {
        load: () => {
          if (tR) return Promise.reject(tR);
          if (GR) return GR;
          const JR = (async () => {
            const JR = await uR();
            try {
              await RR.init(JR)
            } catch (GR) {
              throw RR.error("instantiate", GR)
            }
            return RR.bindings
          })();
          GR = JR, yR = JR;
          const ZR = () => {
            yR === JR && (yR = null)
          };
          return JR.then(ZR, (() => {
            ZR(), GR === JR && (GR = null)
          })), JR
        },
        prefetch: async () => {
          tR || GR || await uR()
        },
        markTrapped: JR => (tR ??= RR.error("call", JR), tR),
        unload: () => {
          tR || !RR.reset || yR || (RR.reset(), GR = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new GR.U(GR(64343)),
      init: async RR => {
        await bR({
          module_or_path: RR
        }), HR = iR()
      },
      bindings: yR,
      error: (RR, JR) => new DR(RR, JR),
      reset: () => {
        vR(), HR = null
      }
    });

    function cR() {
      return oR.load()
    }

    function PR() {
      return oR.prefetch()
    }

    function IR(RR) {
      return oR.markTrapped(RR)
    }

    function mR() {
      oR.unload()
    }

    function zR() {
      return HR?.buffer.byteLength ?? 0
    }
  },
  7762: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(2457);
    const tR = {
      bloxd_wasm: () => "31dc7d689c00e0ba537ee7f626a34d0004a848135d46f08eb518035abee4bd78",
      bloxd_wasm_client: () => "3b6f626c672c16835e48be6eda2b8710ce7ef029c244b4a5763ca9c72afd1b15",
      bloxd_wasm_workers: () => "57abc294db658237bc7d99b35bd3f29743c220eedebc8ac3f7feffe93ef605d9",
      bloxd_wasm_models: () => "91848043cbb1596bc2da50dc271a4cd1d5748938f8eaa4bb6e2a97c3115313e3",
      bloxd_wasm_webgpu: () => "f945f7dfcd84e1c2443e02ed24bd7fc26f3a25462a20b367dbcf6b52367ae837",
      bloxd_wasm_webgl: () => "9fbafd6231ee584775c304827d74014f8c15cff0854a0975bc3b6d00259cb13b",
      bloxd_wasm_webgl1: () => "23c52ed9fe5a4512122e2f73d5ee88fdaeeb108903994541446badd1fee1bb4c",
      bloxd_wasm_replay: () => "972e1c6128c0d1cd8598ec680bedb57345cf87b953e82efa23119df1c888426d",
      bloxd_wasm_recorder: () => "c168224dbeb3a34221482e3a0ad41a3c0ebe14db31539da9b26d296033e9fb3d",
      bloxd_wasm_anim: () => "3cc08cf0d193225c4efab3299a0dd42815a95a9b8b44e2d5957de0a151ae7db3",
      bloxd_wasm_textures: () => "78779f7faa55b7ab66454ef9cac79a3b6156f91b60fc795d24d615f3dca40e19",
      bloxd_wasm_shader_pack: () => "2aca035dd9675be55a94be3cc38a846b93983e04d5e35b062d6e7f0e268c5303"
    };
    var uR = GR(5554);

    function ZR(RR) {
      const JR = Object.prototype.hasOwnProperty.call(tR, RR) ? tR[RR]() : void 0;
      if (void 0 !== JR) return {
        sha256: JR,
        onMismatch: uR.E
      };
      throw new yR.g(`${RR} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);