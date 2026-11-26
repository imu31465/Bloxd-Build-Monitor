export const id = 147;
export const ids = [147];
export const modules = {
  7209: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadPageShaderPackCompiler: () => IX
    });
    var cU = {};
    zU.r(cU), zU.d(cU, {
      hyU: () => yU,
      bUU: () => QU,
      default: () => mU,
      UQU: () => AU,
      XQU: () => FU,
      initSync: () => nU,
      HD: () => oU,
      scU: () => DU,
      zQU: () => EU,
      cQU: () => YU,
      lq: () => NU,
      yQU: () => IU,
      mq: () => pU,
      QQU: () => aU
    });
    class yU {
      static __wrap(UU) {
        const XU = Object.create(yU.prototype);
        return XU.__wbg_ptr = UU, gU.register(XU, XU.__wbg_ptr, XU), XU
      }
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        vU.Hdv7(UU, 0)
      }
      get AQU() {
        let UU, XU;
        try {
          const zU = vU.MwWX(this.__wbg_ptr);
          return UU = zU[0], XU = zU[1], PU(zU[0], zU[1])
        } finally {
          vU.sejp(UU, XU, 1)
        }
      }
      get features() {
        const UU = vU.czBA(this.__wbg_ptr);
        var XU = GU(UU[0], UU[1]);
        return vU.sejp(UU[0], 4 * UU[1], 4), XU
      }
      get hooks() {
        const UU = vU.RSwI(this.__wbg_ptr);
        var XU = BU(UU[0], UU[1]).slice();
        return vU.sejp(UU[0], 1 * UU[1], 1), XU
      }
      mapValidationMessage(UU, XU, zU, cU, yU) {
        let QU, AU;
        try {
          const DU = vU.wIPF(this.__wbg_ptr, UU, XU, zU, kU(cU), kU(yU));
          var FU = DU[0],
            oU = DU[1];
          if (DU[3]) throw FU = 0, oU = 0, SU(DU[2]);
          return QU = FU, AU = oU, PU(FU, oU)
        } finally {
          vU.sejp(QU, AU, 1)
        }
      }
      get moduleCodes() {
        const UU = vU.cg1e(this.__wbg_ptr);
        var XU = GU(UU[0], UU[1]);
        return vU.sejp(UU[0], 4 * UU[1], 4), XU
      }
      get FQU() {
        let UU, XU;
        try {
          const zU = vU.STbB(this.__wbg_ptr);
          return UU = zU[0], XU = zU[1], PU(zU[0], zU[1])
        } finally {
          vU.sejp(UU, XU, 1)
        }
      }
      get reads() {
        const UU = vU.fqiE(this.__wbg_ptr);
        var XU = GU(UU[0], UU[1]);
        return vU.sejp(UU[0], 4 * UU[1], 4), XU
      }
      get validationModuleCodes() {
        const UU = vU.MHlb(this.__wbg_ptr);
        var XU = GU(UU[0], UU[1]);
        return vU.sejp(UU[0], 4 * UU[1], 4), XU
      }
      get validationModuleKeys() {
        const UU = vU.zhQ5(this.__wbg_ptr);
        var XU = BU(UU[0], UU[1]).slice();
        return vU.sejp(UU[0], 1 * UU[1], 1), XU
      }
      get variantFlags() {
        const UU = vU.mrFQ(this.__wbg_ptr);
        var XU = BU(UU[0], UU[1]).slice();
        return vU.sejp(UU[0], 1 * UU[1], 1), XU
      }
    }

    function QU(UU, XU, zU, cU, QU, AU, FU) {
      const oU = OU(UU, vU.qTIs),
        DU = VU,
        EU = OU(XU, vU.qTIs),
        YU = VU,
        NU = OU(zU, vU.qTIs),
        IU = VU,
        pU = qU(cU, vU.qTIs),
        aU = VU,
        tU = OU(QU, vU.qTIs),
        gU = VU,
        kU = OU(AU, vU.qTIs),
        GU = VU,
        BU = OU(FU, vU.qTIs),
        ZU = VU,
        RU = vU.q1xn(oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU);
      if (RU[2]) throw SU(RU[1]);
      return yU.__wrap(RU[0])
    }

    function AU() {
      const UU = vU.leKu();
      var XU = GU(UU[0], UU[1]);
      return vU.sejp(UU[0], 4 * UU[1], 4), XU
    }

    function FU() {
      const UU = vU.SQ1r();
      var XU = GU(UU[0], UU[1]);
      return vU.sejp(UU[0], 4 * UU[1], 4), XU
    }

    function oU() {
      vU.muib()
    }

    function DU(UU, XU, zU, cU, yU) {
      let QU, AU;
      try {
        const DU = OU(UU, vU.qTIs),
          EU = VU,
          YU = qU(XU, vU.qTIs),
          NU = VU,
          IU = OU(zU, vU.qTIs),
          pU = VU,
          aU = qU(cU, vU.qTIs),
          tU = VU,
          gU = function(UU, XU) {
            const zU = XU(1 * UU.length, 1) >>> 0;
            return LU().set(UU, zU / 1), VU = UU.length, zU
          }(yU, vU.qTIs),
          kU = VU,
          GU = vU.XP0f(DU, EU, YU, NU, IU, pU, aU, tU, gU, kU);
        var FU = GU[0],
          oU = GU[1];
        if (GU[3]) throw FU = 0, oU = 0, SU(GU[2]);
        return QU = FU, AU = oU, PU(FU, oU)
      } finally {
        vU.sejp(QU, AU, 1)
      }
    }

    function EU() {
      let UU, XU;
      try {
        const zU = vU.NzsQ();
        return UU = zU[0], XU = zU[1], PU(zU[0], zU[1])
      } finally {
        vU.sejp(UU, XU, 1)
      }
    }

    function YU(UU) {
      let XU, zU;
      try {
        const QU = vU.LLUC(UU);
        var cU = QU[0],
          yU = QU[1];
        if (QU[3]) throw cU = 0, yU = 0, SU(QU[2]);
        return XU = cU, zU = yU, PU(cU, yU)
      } finally {
        vU.sejp(XU, zU, 1)
      }
    }

    function NU() {
      return vU.NkPf() >>> 0
    }

    function IU() {
      let UU, XU;
      try {
        const zU = vU.snxa();
        return UU = zU[0], XU = zU[1], PU(zU[0], zU[1])
      } finally {
        vU.sejp(UU, XU, 1)
      }
    }

    function pU(UU, XU) {
      let zU, cU;
      try {
        const AU = OU(UU, vU.qTIs),
          FU = VU,
          oU = qU(XU, vU.qTIs),
          DU = VU,
          EU = vU.oaTN(AU, FU, oU, DU);
        var yU = EU[0],
          QU = EU[1];
        if (EU[3]) throw yU = 0, QU = 0, SU(EU[2]);
        return zU = yU, cU = QU, PU(yU, QU)
      } finally {
        vU.sejp(zU, cU, 1)
      }
    }

    function aU(UU) {
      let XU, zU;
      try {
        const QU = vU.gpq4(kU(UU));
        var cU = QU[0],
          yU = QU[1];
        if (QU[3]) throw cU = 0, yU = 0, SU(QU[2]);
        return XU = cU, zU = yU, PU(cU, yU)
      } finally {
        vU.sejp(XU, zU, 1)
      }
    }

    function tU() {
      return {
        __proto__: null,
        CIXG: {
          __proto__: null,
          mrwc: function(UU, XU) {
            return kU(Error(PU(UU, XU)))
          },
          nzwD: function(UU) {
            return null === eU(UU)
          },
          MdWd: function(UU) {
            return "string" === typeof eU(UU)
          },
          rh4o: function(UU, XU) {
            const zU = eU(XU),
              cU = "string" === typeof zU ? zU : void 0;
            var yU, QU = void 0 === (yU = cU) || null === yU ? 0 : function(UU, XU, zU) {
                if (void 0 === zU) {
                  const zU = iU.encode(UU),
                    cU = XU(zU.length, 1) >>> 0;
                  return LU().subarray(cU, cU + zU.length).set(zU), VU = zU.length, cU
                }
                let cU = UU.length,
                  yU = XU(cU, 1) >>> 0;
                const QU = LU();
                let AU = 0;
                for (; AU < cU; AU++) {
                  const XU = UU.charCodeAt(AU);
                  if (XU > 127) break;
                  QU[yU + AU] = XU
                }
                if (AU !== cU) {
                  0 !== AU && (UU = UU.slice(AU)), yU = zU(yU, cU, cU = AU + 3 * UU.length, 1) >>> 0;
                  const XU = LU().subarray(yU + AU, yU + cU);
                  AU += iU.encodeInto(UU, XU).written, yU = zU(yU, cU, AU, 1) >>> 0
                }
                return VU = AU, yU
              }(cU, vU.qTIs, vU.NsDo),
              AU = VU;
            RU().setInt32(UU + 4, AU, !0), RU().setInt32(UU + 0, QU, !0)
          },
          xNHU: function(UU, XU) {
            throw new Error(PU(UU, XU))
          },
          msM0: function(UU, XU) {
            return eU(UU).charCodeAt(XU >>> 0)
          },
          PYI0: function(UU, XU) {
            console.error(PU(UU, XU))
          },
          YigK: function(UU) {
            return eU(UU).length
          },
          CT0l: function(UU, XU) {
            return kU(PU(UU, XU))
          },
          tBur: function(UU) {
            SU(UU)
          }
        }
      }
    }
    Symbol.dispose && (yU.prototype[Symbol.dispose] = yU.prototype.free);
    const gU = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((UU => vU.Hdv7(UU, 1)));

    function kU(UU) {
      wU === CU.length && CU.push(CU.length + 1);
      const XU = wU;
      return wU = CU[XU], CU[XU] = UU, XU
    }

    function GU(UU, XU) {
      UU >>>= 0;
      const zU = RU(),
        cU = [];
      for (let yU = UU; yU < UU + 4 * XU; yU += 4) cU.push(SU(zU.getUint32(yU, !0)));
      return cU
    }

    function BU(UU, XU) {
      return UU >>>= 0, LU().subarray(UU / 1, UU / 1 + XU)
    }
    let ZU = null;

    function RU() {
      return null !== ZU && ZU.buffer === vU.memory.buffer || (ZU = new DataView(vU.memory.buffer)), ZU
    }

    function PU(UU, XU) {
      return function(UU, XU) {
        fU += XU, fU >= uU && (rU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), rU.decode(), fU = XU);
        return rU.decode(LU().subarray(UU, UU + XU))
      }(UU >>> 0, XU)
    }
    let WU = null;
    let dU = null;

    function LU() {
      return null !== dU && 0 !== dU.byteLength || (dU = new Uint8Array(vU.memory.buffer)), dU
    }

    function eU(UU) {
      return CU[UU]
    }
    let CU = new Array(1024).fill(void 0);
    CU.push(void 0, null, !0, !1);
    let wU = CU.length;

    function qU(UU, XU) {
      const zU = XU(4 * UU.length, 4) >>> 0;
      return (null !== WU && 0 !== WU.byteLength || (WU = new Uint32Array(vU.memory.buffer)), WU).set(UU, zU / 4), VU = UU.length, zU
    }

    function OU(UU, XU) {
      const zU = XU(4 * UU.length, 4) >>> 0,
        cU = RU();
      for (let yU = 0; yU < UU.length; yU++) cU.setUint32(zU + 4 * yU, kU(UU[yU]), !0);
      return VU = UU.length, zU
    }

    function SU(UU) {
      const XU = eU(UU);
      return function(UU) {
        UU < 1028 || (CU[UU] = wU, wU = UU)
      }(UU), XU
    }
    let rU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    rU.decode();
    const uU = 2146435072;
    let fU = 0;
    const iU = new TextEncoder;
    "encodeInto" in iU || (iU.encodeInto = function(UU, XU) {
      const zU = iU.encode(UU);
      return XU.set(zU), {
        read: UU.length,
        written: zU.length
      }
    });
    let HU, MU, vU, VU = 0;

    function sU(UU, XU) {
      return MU = UU, vU = UU.exports, HU = XU, ZU = null, WU = null, dU = null, vU.eJRw(), vU
    }

    function nU(UU) {
      if (void 0 !== vU) return vU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const XU = tU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return sU(new WebAssembly.Instance(UU, XU), UU)
    }
    async function mU(UU) {
      if (void 0 !== vU) return vU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const XU = tU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: zU,
        module: cU
      } = await async function(UU, XU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, XU)
          } catch (zU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw zU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zU)
          }
          const cU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(cU, XU)
        } {
          const zU = await WebAssembly.instantiate(UU, XU);
          return zU instanceof WebAssembly.Instance ? {
            instance: zU,
            module: UU
          } : zU
        }
      }(await UU, XU);
      return sU(zU, cU)
    }
    var lU = zU(3176),
      xU = zU(7213);
    class JU extends Error {
      stage;
      constructor(UU, XU) {
        super((0, lU.J)(UU, XU), {
          cause: XU
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = UU
      }
    }
    let jU = null,
      KU = null;

    function bU() {
      return jU ? Promise.resolve(jU) : (KU || (KU = async function() {
        let UU;
        try {
          UU = await (0, lU.M)(new zU.U(zU(7217)), (0, xU.e)("bloxd_wasm_shader_pack"))
        } catch (XU) {
          throw new JU((0, lU.T)(XU), XU)
        }
        try {
          await mU({
            module_or_path: UU
          })
        } catch (XU) {
          throw new JU("instantiate", XU)
        }
        return jU = cU, jU
      }(), KU.then(void 0, (() => {
        KU = null
      }))), KU)
    }
    var TU = zU(7226);

    function hU(UU) {
      let [XU, zU, cU, yU] = UU;
      const QU = {
        file: XU,
        line: zU,
        message: cU
      };
      return yU && (QU.variants = yU.map(TU.h)), QU
    }

    function UX(UU) {
      return JSON.parse(UU).map(hU)
    }

    function XX(UU, XU) {
      if (!Number.isInteger(UU) || UU < 0 || UU > 4294967295) throw new Error(`${XU} ${UU} is not a whole number from 0 to 4294967295`);
      return UU
    }

    function zX(UU) {
      return [UU.named.map((UU => UU.name)), Uint32Array.from(UU.named, (UU => XX(UU.id, "Texture ID")))]
    }
    const cX = new WeakMap;
    const yX = new WeakMap,
      QX = new WeakSet;

    function AX(UU, XU) {
      if (QX.has(UU)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return XU()
      } catch (zU) {
        throw zU instanceof WebAssembly.RuntimeError && QX.add(UU), zU
      }
    }

    function FX(UU) {
      let XU = yX.get(UU);
      if (!XU) {
        let zU, cU;
        XU = {
          bUU: (XU, zU) => AX(UU, (() => function(UU, XU, zU) {
            const cU = UU.bUU(XU.map((UU => UU.path)), XU.map((UU => UU.source)), ...zX(zU), zU.aliases.map((UU => UU.name)), zU.aliases.map((UU => UU.texture)), zU.aliases.map((UU => UU.kind)));
            let yU = !1;
            try {
              const UU = cU.validationModuleCodes,
                XU = Array.from(cU.validationModuleKeys, ((XU, zU) => ({
                  key: (0, TU.h)(XU),
                  code: UU[zU]
                }))),
                zU = {
                  errors: UX(cU.AQU),
                  offInStrict: UX(cU.FQU),
                  variants: (0, TU.f)(cU),
                  validationModules: XU,
                  features: cU.features
                };
              return XU.forEach(((UU, XU) => {
                cX.set(UU, {
                  pack: cU,
                  index: XU
                })
              })), yU = XU.length > 0, zU
            } finally {
              yU || cU.free()
            }
          }(UU, XU, zU))),
          mapValidationMessage: (XU, zU) => {
            const cU = cX.get(XU);
            if (!cU) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return hU(JSON.parse(AX(UU, (() => cU.pack.mapValidationMessage(cU.index, zU.lineNum, zU.linePos, zU.message, zU.type)))))
          },
          scU: XU => AX(UU, (() => function(UU, XU) {
            const zU = new Int32Array(XU.length),
              cU = [];
            return XU.forEach(((UU, XU) => {
              zU[XU] = UU.variants ? UU.variants.length : -1;
              for (const zU of UU.variants ?? []) cU.push((0, TU.g)(zU))
            })), UX(UU.scU(XU.map((UU => UU.file)), Uint32Array.from(XU, (UU => XX(UU.line, "Diagnostic line"))), XU.map((UU => UU.message)), zU, Uint8Array.from(cU)))
          }(UU, XU))),
          mq: XU => AX(UU, (() => UU.mq(...zX(XU)))),
          get SHADER_PACK_HEADER_VERSION() {
            return zU ??= AX(UU, (() => UU.yQU())), zU
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return cU ??= AX(UU, (() => {
              const XU = UU.XQU();
              return UU.UQU().map(((UU, zU) => ({
                path: UU,
                source: XU[zU]
              })))
            })), cU
          },
          QQU: XU => AX(UU, (() => UU.QQU(XU))),
          resolveHeader: XU => AX(UU, (() => UU.cQU((0, TU.g)(XU)))),
          zQU: () => AX(UU, (() => UU.zQU()))
        }, yX.set(UU, XU)
      }
      return XU
    }
    var oX = zU(3592),
      DX = zU(3604),
      EX = zU(7219);
    const YX = "bloxdShaderPackWasmFailureReported";
    let NX = null;

    function IX() {
      return NX ??= async function() {
        if ("undefined" === typeof WebAssembly) return pX("unsupported", "This browser has no WebAssembly"), null;
        const UU = (0, EX.loadShaderPackTextures)().then((() => !0), (UU => (console.error("Could not load the shader pack textures, so shader packs can't run", UU), !1)));
        try {
          await (0, DX.j)();
          const XU = await async function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bU;
            return FX(await UU())
          }();
          return await UU ? XU : null
        } catch (XU) {
          const UU = XU instanceof Error ? XU.message : String(XU);
          return pX(oX.d[XU instanceof JU ? XU.stage : "instantiate"], UU), null
        }
      }(), NX
    }

    function pX(UU, XU) {
      (0, oX.g)(YX, `Shader pack wasm ${UU}, so shader packs can't run: ${XU}`, XU, `shader_pack_${UU}`)
    }
  },
  7217: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_shader_pack_bg.45f1ccf688d095d246ba.wasm"
  },
  7213: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(3176);
    const yU = {
      bloxd_wasm: () => "7f53022eec2cb692d1cd79c2eeeb6f8a7607270973e0f6e0c72df23cc86c2b9f",
      bloxd_wasm_client: () => "57b44b4e08ce6b959c851fa76e413083d1b9237ff788a96d3931877841e31e3b",
      bloxd_wasm_workers: () => "e095c7f514df56db3ce2e1ace2484bbfab4bed79f4fe2840e3f351e25bef8126",
      bloxd_wasm_models: () => "d264f0be9eaf7df40aab32e155f7170e6a2029f73e36b3aa879f2b238d2f98c1",
      bloxd_wasm_webgpu: () => "45fb92410826d4556fb1610a55c96252dff22810c6b27376d120613e28fb722d",
      bloxd_wasm_webgl: () => "b3808b20b91fd2d43a5bb7c9219998b24db293acd36599f3cfc217aa2f03b9ee",
      bloxd_wasm_webgl1: () => "955dabc5322d1e4788a42fc358c9d0d686dca5eaafd1809064b6bbdc73e56b76",
      bloxd_wasm_replay: () => "13f05b235e8455220553f84808d39e41289fbb259c59a2477b25fa31ba963b54",
      bloxd_wasm_recorder: () => "a55faba2add92e1697c15223e522d87ba7631a7aaeb806e24cd4da91de455075",
      bloxd_wasm_anim: () => "9fd10823eecbab78e8d130701ec44bc31691f897e4963312a2cef80080a0b854",
      bloxd_wasm_textures: () => "659ffb2c9bc8159fee909f52c433ec6a1a8921210ad3488ef78dfd6ff1c90774",
      bloxd_wasm_shader_pack: () => "adccd38b5fea7520e10f50666ef79fc0704d8a73746e668ac8e591ff0037f1dc"
    };
    var QU = zU(5179);

    function AU(UU) {
      const XU = Object.prototype.hasOwnProperty.call(yU, UU) ? yU[UU]() : void 0;
      if (void 0 !== XU) return {
        sha256: XU,
        onMismatch: QU.v
      };
      throw new cU.i(`${UU} has no release digest, so this build refuses it`)
    }
  },
  7226: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => BU,
      f: () => ZU,
      g: () => kU,
      h: () => gU
    });
    var cU = zU(7233);
    const yU = 6,
      QU = 3,
      AU = 1,
      FU = 2,
      oU = 4,
      DU = 8,
      EU = 16,
      YU = 32,
      NU = 64,
      IU = 128,
      pU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function aU(UU) {
      if (!UU) return 0;
      const XU = pU.indexOf(UU);
      if (XU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
      return XU
    }

    function tU(UU) {
      if (0 === UU) return null;
      const XU = pU[UU];
      if (void 0 === XU) throw new Error(`${UU} is not a shader pack hook function id`);
      return XU
    }

    function gU(UU) {
      const XU = cU.e.length;
      return {
        strict: UU >= XU,
        program: cU.e[UU % XU]
      }
    }

    function kU(UU) {
      return Number(UU.strict) * cU.e.length + cU.e.indexOf(UU.program)
    }

    function GU(UU) {
      return "" === UU ? [] : UU.split(" ")
    }

    function BU(UU) {
      const XU = {
        variantFlags: new Uint8Array(yU),
        hooks: new Uint8Array(yU * QU),
        moduleCodes: Array(yU).fill(""),
        reads: Array(2 * yU).fill("")
      };
      for (const zU of UU) {
        const UU = kU(zU.key),
          cU = (UU, XU) => null === zU.hooks.surface || zU.reads.fragment.includes(UU) ? 0 : XU;
        XU.variantFlags[UU] = (zU.sceneDepth ? AU : 0) | (zU.movesVertices ? FU : 0) | (zU.sunShadow ? oU : 0) | (zU.airShadow ? DU : 0) | (zU.discards ? EU : 0) | cU("localPosition", YU) | cU("enchantSpeed", NU) | cU("enchantTier", IU), XU.hooks[UU * QU] = aU(zU.hooks.vertex), XU.hooks[UU * QU + 1] = aU(zU.hooks.surface), XU.hooks[UU * QU + 2] = aU(zU.hooks.light), XU.moduleCodes[UU] = zU.moduleCode, XU.reads[2 * UU] = zU.reads.vertex.join(" "), XU.reads[2 * UU + 1] = zU.reads.fragment.join(" ")
      }
      return XU
    }

    function ZU(UU) {
      const {
        hooks: XU,
        moduleCodes: zU,
        reads: cU
      } = UU;
      return Array.from(UU.variantFlags, ((UU, yU) => {
        const YU = yU * QU;
        return {
          key: gU(yU),
          hooks: {
            vertex: tU(XU[YU]),
            surface: tU(XU[YU + 1]),
            light: tU(XU[YU + 2])
          },
          moduleCode: zU[yU],
          sceneDepth: 0 !== (UU & AU),
          sunShadow: 0 !== (UU & oU),
          airShadow: 0 !== (UU & DU),
          movesVertices: 0 !== (UU & FU),
          discards: 0 !== (UU & EU),
          reads: {
            vertex: GU(cU[2 * yU]),
            fragment: GU(cU[2 * yU + 1])
          }
        }
      }))
    }
  },
  7233: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      f: () => AU,
      j: () => FU,
      k: () => yU,
      o: () => QU
    });
    const cU = ["terrain", "liquid", "model"];

    function yU() {
      const UU = [];
      for (const XU of [!1, !0])
        for (const zU of cU) UU.push({
          strict: XU,
          program: zU
        });
      return UU
    }

    function QU(UU) {
      return `${UU.strict?"strict":"allow"}.${UU.program}`
    }

    function AU(UU) {
      return !UU.hooks.vertex && !UU.hooks.surface && !UU.hooks.light
    }

    function FU(UU, XU) {
      return "off" !== XU && (null === UU || UU.some((UU => UU.key.strict === ("strict" === XU) && !AU(UU))))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);