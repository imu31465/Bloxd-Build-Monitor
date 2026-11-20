export const id = 131;
export const ids = [131];
export const modules = {
  6295: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      loadPageShaderPackCompiler: () => jR
    });
    var tU = {};
    gU.r(tU), gU.d(tU, {
      HtU: () => pU,
      i_: () => EU,
      default: () => iU,
      StU: () => PU,
      stU: () => TU,
      initSync: () => FU,
      lc: () => qU,
      mgU: () => KU,
      ytU: () => cU,
      ktU: () => GU,
      wZ: () => jU,
      FtU: () => uU,
      xZ: () => CU,
      itU: () => hU
    });
    class pU {
      static __wrap(UU) {
        const RU = Object.create(pU.prototype);
        return RU.__wbg_ptr = UU, eU.register(RU, RU.__wbg_ptr, RU), RU
      }
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        sU.TLg7(UU, 0)
      }
      get errorsJson() {
        let UU, RU;
        try {
          const gU = sU.SB7o(this.__wbg_ptr);
          return UU = gU[0], RU = gU[1], JU(gU[0], gU[1])
        } finally {
          sU.bIiB(UU, RU, 1)
        }
      }
      get features() {
        const UU = sU.xHwp(this.__wbg_ptr);
        var RU = fU(UU[0], UU[1]);
        return sU.bIiB(UU[0], 4 * UU[1], 4), RU
      }
      get hooks() {
        const UU = sU.oC5g(this.__wbg_ptr);
        var RU = xU(UU[0], UU[1]).slice();
        return sU.bIiB(UU[0], 1 * UU[1], 1), RU
      }
      mapValidationMessage(UU, RU, gU, tU, pU) {
        let EU, PU;
        try {
          const KU = sU.Vh5N(this.__wbg_ptr, UU, RU, gU, WU(tU), WU(pU));
          var TU = KU[0],
            qU = KU[1];
          if (KU[3]) throw TU = 0, qU = 0, VU(KU[2]);
          return EU = TU, PU = qU, JU(TU, qU)
        } finally {
          sU.bIiB(EU, PU, 1)
        }
      }
      get moduleCodes() {
        const UU = sU.uLAK(this.__wbg_ptr);
        var RU = fU(UU[0], UU[1]);
        return sU.bIiB(UU[0], 4 * UU[1], 4), RU
      }
      get offInStrictJson() {
        let UU, RU;
        try {
          const gU = sU.YpRJ(this.__wbg_ptr);
          return UU = gU[0], RU = gU[1], JU(gU[0], gU[1])
        } finally {
          sU.bIiB(UU, RU, 1)
        }
      }
      get reads() {
        const UU = sU.zHYn(this.__wbg_ptr);
        var RU = fU(UU[0], UU[1]);
        return sU.bIiB(UU[0], 4 * UU[1], 4), RU
      }
      get validationModuleCodes() {
        const UU = sU.pT2e(this.__wbg_ptr);
        var RU = fU(UU[0], UU[1]);
        return sU.bIiB(UU[0], 4 * UU[1], 4), RU
      }
      get validationModuleKeys() {
        const UU = sU.mqMG(this.__wbg_ptr);
        var RU = xU(UU[0], UU[1]).slice();
        return sU.bIiB(UU[0], 1 * UU[1], 1), RU
      }
      get variantFlags() {
        const UU = sU.ky50(this.__wbg_ptr);
        var RU = xU(UU[0], UU[1]).slice();
        return sU.bIiB(UU[0], 1 * UU[1], 1), RU
      }
    }

    function EU(UU, RU, gU, tU, EU, PU, TU) {
      const qU = BU(UU, sU.BK5v),
        KU = yU,
        cU = BU(RU, sU.BK5v),
        GU = yU,
        jU = BU(gU, sU.BK5v),
        uU = yU,
        CU = YU(tU, sU.BK5v),
        hU = yU,
        QU = BU(EU, sU.BK5v),
        eU = yU,
        WU = BU(PU, sU.BK5v),
        fU = yU,
        xU = BU(TU, sU.BK5v),
        mU = yU,
        IU = sU.OErR(qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU);
      if (IU[2]) throw VU(IU[1]);
      return pU.__wrap(IU[0])
    }

    function PU() {
      const UU = sU.pJ8p();
      var RU = fU(UU[0], UU[1]);
      return sU.bIiB(UU[0], 4 * UU[1], 4), RU
    }

    function TU() {
      const UU = sU.TIgN();
      var RU = fU(UU[0], UU[1]);
      return sU.bIiB(UU[0], 4 * UU[1], 4), RU
    }

    function qU() {
      sU.a0aR()
    }

    function KU(UU, RU, gU, tU, pU) {
      let EU, PU;
      try {
        const KU = BU(UU, sU.BK5v),
          cU = yU,
          GU = YU(RU, sU.BK5v),
          jU = yU,
          uU = BU(gU, sU.BK5v),
          CU = yU,
          hU = YU(tU, sU.BK5v),
          QU = yU,
          eU = function(UU, RU) {
            const gU = RU(1 * UU.length, 1) >>> 0;
            return bU().set(UU, gU / 1), yU = UU.length, gU
          }(pU, sU.BK5v),
          WU = yU,
          fU = sU.KroG(KU, cU, GU, jU, uU, CU, hU, QU, eU, WU);
        var TU = fU[0],
          qU = fU[1];
        if (fU[3]) throw TU = 0, qU = 0, VU(fU[2]);
        return EU = TU, PU = qU, JU(TU, qU)
      } finally {
        sU.bIiB(EU, PU, 1)
      }
    }

    function cU() {
      let UU, RU;
      try {
        const gU = sU.fq32();
        return UU = gU[0], RU = gU[1], JU(gU[0], gU[1])
      } finally {
        sU.bIiB(UU, RU, 1)
      }
    }

    function GU(UU) {
      let RU, gU;
      try {
        const EU = sU.gIUc(UU);
        var tU = EU[0],
          pU = EU[1];
        if (EU[3]) throw tU = 0, pU = 0, VU(EU[2]);
        return RU = tU, gU = pU, JU(tU, pU)
      } finally {
        sU.bIiB(RU, gU, 1)
      }
    }

    function jU() {
      return sU.E8qA() >>> 0
    }

    function uU() {
      let UU, RU;
      try {
        const gU = sU.akAO();
        return UU = gU[0], RU = gU[1], JU(gU[0], gU[1])
      } finally {
        sU.bIiB(UU, RU, 1)
      }
    }

    function CU(UU, RU) {
      let gU, tU;
      try {
        const PU = BU(UU, sU.BK5v),
          TU = yU,
          qU = YU(RU, sU.BK5v),
          KU = yU,
          cU = sU.dkFu(PU, TU, qU, KU);
        var pU = cU[0],
          EU = cU[1];
        if (cU[3]) throw pU = 0, EU = 0, VU(cU[2]);
        return gU = pU, tU = EU, JU(pU, EU)
      } finally {
        sU.bIiB(gU, tU, 1)
      }
    }

    function hU(UU) {
      let RU, gU;
      try {
        const EU = sU.FNSQ(WU(UU));
        var tU = EU[0],
          pU = EU[1];
        if (EU[3]) throw tU = 0, pU = 0, VU(EU[2]);
        return RU = tU, gU = pU, JU(tU, pU)
      } finally {
        sU.bIiB(RU, gU, 1)
      }
    }

    function QU() {
      return {
        __proto__: null,
        hLqz: {
          __proto__: null,
          C9RC: function(UU, RU) {
            return WU(Error(JU(UU, RU)))
          },
          abXE: function(UU) {
            return null === oU(UU)
          },
          ZTky: function(UU) {
            return "string" === typeof oU(UU)
          },
          dEd5: function(UU, RU) {
            const gU = oU(RU),
              tU = "string" === typeof gU ? gU : void 0;
            var pU, EU = void 0 === (pU = tU) || null === pU ? 0 : function(UU, RU, gU) {
                if (void 0 === gU) {
                  const gU = dU.encode(UU),
                    tU = RU(gU.length, 1) >>> 0;
                  return bU().subarray(tU, tU + gU.length).set(gU), yU = gU.length, tU
                }
                let tU = UU.length,
                  pU = RU(tU, 1) >>> 0;
                const EU = bU();
                let PU = 0;
                for (; PU < tU; PU++) {
                  const RU = UU.charCodeAt(PU);
                  if (RU > 127) break;
                  EU[pU + PU] = RU
                }
                if (PU !== tU) {
                  0 !== PU && (UU = UU.slice(PU)), pU = gU(pU, tU, tU = PU + 3 * UU.length, 1) >>> 0;
                  const RU = bU().subarray(pU + PU, pU + tU);
                  PU += dU.encodeInto(UU, RU).written, pU = gU(pU, tU, PU, 1) >>> 0
                }
                return yU = PU, pU
              }(tU, sU.BK5v, sU.TWkK),
              PU = yU;
            IU().setInt32(UU + 4, PU, !0), IU().setInt32(UU + 0, EU, !0)
          },
          whrG: function(UU, RU) {
            throw new Error(JU(UU, RU))
          },
          dj3W: function(UU, RU) {
            return oU(UU).charCodeAt(RU >>> 0)
          },
          EMoQ: function(UU, RU) {
            console.error(JU(UU, RU))
          },
          x2ha: function(UU) {
            return oU(UU).length
          },
          PgyC: function(UU, RU) {
            return WU(JU(UU, RU))
          },
          eMdc: function(UU) {
            VU(UU)
          }
        }
      }
    }
    Symbol.dispose && (pU.prototype[Symbol.dispose] = pU.prototype.free);
    const eU = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((UU => sU.TLg7(UU, 1)));

    function WU(UU) {
      aU === ZU.length && ZU.push(ZU.length + 1);
      const RU = aU;
      return aU = ZU[RU], ZU[RU] = UU, RU
    }

    function fU(UU, RU) {
      UU >>>= 0;
      const gU = IU(),
        tU = [];
      for (let pU = UU; pU < UU + 4 * RU; pU += 4) tU.push(VU(gU.getUint32(pU, !0)));
      return tU
    }

    function xU(UU, RU) {
      return UU >>>= 0, bU().subarray(UU / 1, UU / 1 + RU)
    }
    let mU = null;

    function IU() {
      return (null === mU || !0 === mU.buffer.detached || void 0 === mU.buffer.detached && mU.buffer !== sU.memory.buffer) && (mU = new DataView(sU.memory.buffer)), mU
    }

    function JU(UU, RU) {
      return function(UU, RU) {
        vU += RU, vU >= XU && (rU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), rU.decode(), vU = RU);
        return rU.decode(bU().subarray(UU, UU + RU))
      }(UU >>> 0, RU)
    }
    let wU = null;
    let nU = null;

    function bU() {
      return null !== nU && 0 !== nU.byteLength || (nU = new Uint8Array(sU.memory.buffer)), nU
    }

    function oU(UU) {
      return ZU[UU]
    }
    let ZU = new Array(1024).fill(void 0);
    ZU.push(void 0, null, !0, !1);
    let aU = ZU.length;

    function YU(UU, RU) {
      const gU = RU(4 * UU.length, 4) >>> 0;
      return (null !== wU && 0 !== wU.byteLength || (wU = new Uint32Array(sU.memory.buffer)), wU).set(UU, gU / 4), yU = UU.length, gU
    }

    function BU(UU, RU) {
      const gU = RU(4 * UU.length, 4) >>> 0,
        tU = IU();
      for (let pU = 0; pU < UU.length; pU++) tU.setUint32(gU + 4 * pU, WU(UU[pU]), !0);
      return yU = UU.length, gU
    }

    function VU(UU) {
      const RU = oU(UU);
      return function(UU) {
        UU < 1028 || (ZU[UU] = aU, aU = UU)
      }(UU), RU
    }
    let rU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    rU.decode();
    const XU = 2146435072;
    let vU = 0;
    const dU = new TextEncoder;
    "encodeInto" in dU || (dU.encodeInto = function(UU, RU) {
      const gU = dU.encode(UU);
      return RU.set(gU), {
        read: UU.length,
        written: gU.length
      }
    });
    let HU, SU, sU, yU = 0;

    function kU(UU, RU) {
      return SU = UU, sU = UU.exports, HU = RU, mU = null, wU = null, nU = null, sU.YjdF(), sU
    }

    function FU(UU) {
      if (void 0 !== sU) return sU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RU = QU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return kU(new WebAssembly.Instance(UU, RU), UU)
    }
    async function iU(UU) {
      if (void 0 !== sU) return sU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RU = QU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: gU,
        module: tU
      } = await async function(UU, RU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, RU)
          } catch (gU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw gU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gU)
          }
          const tU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(tU, RU)
        } {
          const gU = await WebAssembly.instantiate(UU, RU);
          return gU instanceof WebAssembly.Instance ? {
            instance: gU,
            module: UU
          } : gU
        }
      }(await UU, RU);
      return kU(gU, tU)
    }
    var AU = gU(3377),
      zU = gU(6297);
    class MU extends Error {
      stage;
      constructor(UU, RU) {
        super((0, AU.z)(UU, RU), {
          cause: RU
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = UU
      }
    }
    let DU = null,
      LU = null;

    function NU() {
      return DU ? Promise.resolve(DU) : (LU || (LU = async function() {
        let UU;
        try {
          UU = await (0, AU.D)(new gU.U(gU(6302)), (0, zU.b)("bloxd_wasm_shader_pack"))
        } catch (RU) {
          throw new MU((0, AU.K)(RU), RU)
        }
        try {
          await iU({
            module_or_path: UU
          })
        } catch (RU) {
          throw new MU("instantiate", RU)
        }
        return DU = tU, DU
      }(), LU.then(void 0, (() => {
        LU = null
      }))), LU)
    }
    var lU = gU(6311);

    function OU(UU) {
      let [RU, gU, tU, pU] = UU;
      const EU = {
        file: RU,
        line: gU,
        message: tU
      };
      return pU && (EU.variants = pU.map(lU.j)), EU
    }

    function UR(UU) {
      return JSON.parse(UU).map(OU)
    }

    function RR(UU, RU) {
      if (!Number.isInteger(UU) || UU < 0 || UU > 4294967295) throw new Error(`${RU} ${UU} is not a whole number from 0 to 4294967295`);
      return UU
    }

    function gR(UU) {
      return [UU.named.map((UU => UU.name)), Uint32Array.from(UU.named, (UU => RR(UU.id, "Texture ID")))]
    }
    const tR = new WeakMap;
    const pR = new WeakMap,
      ER = new WeakSet;

    function PR(UU, RU) {
      if (ER.has(UU)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return RU()
      } catch (gU) {
        throw gU instanceof WebAssembly.RuntimeError && ER.add(UU), gU
      }
    }

    function TR(UU) {
      let RU = pR.get(UU);
      if (!RU) {
        let gU, tU;
        RU = {
          i_: (RU, gU) => PR(UU, (() => function(UU, RU, gU) {
            const tU = UU.i_(RU.map((UU => UU.path)), RU.map((UU => UU.source)), ...gR(gU), gU.aliases.map((UU => UU.name)), gU.aliases.map((UU => UU.texture)), gU.aliases.map((UU => UU.kind)));
            let pU = !1;
            try {
              const UU = tU.validationModuleCodes,
                RU = Array.from(tU.validationModuleKeys, ((RU, gU) => ({
                  key: (0, lU.j)(RU),
                  code: UU[gU]
                }))),
                gU = {
                  errors: UR(tU.errorsJson),
                  offInStrict: UR(tU.offInStrictJson),
                  variants: (0, lU.f)(tU),
                  validationModules: RU,
                  features: tU.features
                };
              return RU.forEach(((UU, RU) => {
                tR.set(UU, {
                  pack: tU,
                  index: RU
                })
              })), pU = RU.length > 0, gU
            } finally {
              pU || tU.free()
            }
          }(UU, RU, gU))),
          mapValidationMessage: (RU, gU) => {
            const tU = tR.get(RU);
            if (!tU) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return OU(JSON.parse(PR(UU, (() => tU.pack.mapValidationMessage(tU.index, gU.lineNum, gU.linePos, gU.message, gU.type)))))
          },
          mgU: RU => PR(UU, (() => function(UU, RU) {
            const gU = new Int32Array(RU.length),
              tU = [];
            return RU.forEach(((UU, RU) => {
              gU[RU] = UU.variants ? UU.variants.length : -1;
              for (const gU of UU.variants ?? []) tU.push((0, lU.h)(gU))
            })), UR(UU.mgU(RU.map((UU => UU.file)), Uint32Array.from(RU, (UU => RR(UU.line, "Diagnostic line"))), RU.map((UU => UU.message)), gU, Uint8Array.from(tU)))
          }(UU, RU))),
          xZ: RU => PR(UU, (() => UU.xZ(...gR(RU)))),
          get SHADER_PACK_HEADER_VERSION() {
            return gU ??= PR(UU, (() => UU.FtU())), gU
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return tU ??= PR(UU, (() => {
              const RU = UU.stU();
              return UU.StU().map(((UU, gU) => ({
                path: UU,
                source: RU[gU]
              })))
            })), tU
          },
          itU: RU => PR(UU, (() => UU.itU(RU))),
          resolveHeader: RU => PR(UU, (() => UU.ktU((0, lU.h)(RU)))),
          ytU: () => PR(UU, (() => UU.ytU()))
        }, pR.set(UU, RU)
      }
      return RU
    }
    var qR = gU(2923),
      KR = gU(6306);
    const cR = "bloxdShaderPackWasmFailureReported";
    let GR = null;

    function jR() {
      return GR ??= async function() {
        if ("undefined" === typeof WebAssembly) return uR("unsupported", "This browser has no WebAssembly"), null;
        const UU = (0, KR.loadShaderPackTextures)().then((() => !0), (UU => (console.error("Could not load the shader pack textures, so shader packs can't run", UU), !1)));
        try {
          const RU = await async function() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NU;
            return TR(await UU())
          }();
          return await UU ? RU : null
        } catch (RU) {
          const UU = RU instanceof Error ? RU.message : String(RU);
          return uR(qR.d[RU instanceof MU ? RU.stage : "instantiate"], UU), null
        }
      }(), GR
    }

    function uR(UU, RU) {
      (0, qR.j)(cR, `Shader pack wasm ${UU}, so shader packs can't run: ${RU}`, RU, `shader_pack_${UU}`)
    }
  },
  6302: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_shader_pack_bg.6477ba64672d629480ce.wasm"
  },
  6297: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(3377);
    const pU = {
      bloxd_wasm: () => "9aea991b9dfc231682f5590d3cc7b71fdc8d10d57b6fc256a691170448cb241e",
      bloxd_wasm_client: () => "802e9a6883f55b00b2e9f994d468ef47c157db779d67da12a28169a4064f9ba2",
      bloxd_wasm_workers: () => "6e68db7fd51b5ae0bb150a4c2fcdf448b467f8cbd8e24efcf974a9654674f1d6",
      bloxd_wasm_models: () => "f3c8f0349e4b7cd2fe62824f818b019cb1ff9fda7d99058af5539dbe1c36e2ff",
      bloxd_wasm_webgpu: () => "7b8aba519ce147883d63480e46db11f2a6dd62b2bdebd6ff07895ba08f395e69",
      bloxd_wasm_webgl: () => "a107c8272b9d653c63376eb1e9164df07a85032e3f7cbbd1d972097394cfca11",
      bloxd_wasm_webgl1: () => "2c5aabca21f20977da3990bb0cf77633b2f229a640ab72f5a52f39d28d9e0fd9",
      bloxd_wasm_replay: () => "803e2c90d202bb5830af931fbeaac2469dcc5032d591607636dd72eecf9c8910",
      bloxd_wasm_recorder: () => "edcf2c59dbceafb4c90033bd8006f0358827a3de806838c1aa9aa5da84f115b3",
      bloxd_wasm_anim: () => "7a1e82ad213a41556d7866bfc1df7fce0247390479775e811f0b8f916b979482",
      bloxd_wasm_textures: () => "bc7a7de98d207f079e8f358dc014dee940cff8bd63182b40ac7fd19938da92d8",
      bloxd_wasm_shader_pack: () => "1e25de668a456adfdd95befe66a4ef213a16bedd08af3aac14531a1b656da9d3"
    };
    var EU = gU(4352);

    function PU(UU) {
      const RU = Object.prototype.hasOwnProperty.call(pU, UU) ? pU[UU]() : void 0;
      if (void 0 !== RU) return {
        sha256: RU,
        onMismatch: EU.E
      };
      throw new tU.j(`${UU} has no release digest, so this build refuses it`)
    }
  },
  6311: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => xU,
      f: () => mU,
      h: () => WU,
      j: () => eU
    });
    var tU = gU(6316);
    const pU = 6,
      EU = 3,
      PU = 1,
      TU = 2,
      qU = 4,
      KU = 8,
      cU = 16,
      GU = 32,
      jU = 64,
      uU = 128,
      CU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function hU(UU) {
      if (!UU) return 0;
      const RU = CU.indexOf(UU);
      if (RU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
      return RU
    }

    function QU(UU) {
      if (0 === UU) return null;
      const RU = CU[UU];
      if (void 0 === RU) throw new Error(`${UU} is not a shader pack hook function id`);
      return RU
    }

    function eU(UU) {
      const RU = tU.b.length;
      return {
        strict: UU >= RU,
        program: tU.b[UU % RU]
      }
    }

    function WU(UU) {
      return Number(UU.strict) * tU.b.length + tU.b.indexOf(UU.program)
    }

    function fU(UU) {
      return "" === UU ? [] : UU.split(" ")
    }

    function xU(UU) {
      const RU = {
        variantFlags: new Uint8Array(pU),
        hooks: new Uint8Array(pU * EU),
        moduleCodes: Array(pU).fill(""),
        reads: Array(2 * pU).fill("")
      };
      for (const gU of UU) {
        const UU = WU(gU.key),
          tU = (UU, RU) => null === gU.hooks.surface || gU.reads.fragment.includes(UU) ? 0 : RU;
        RU.variantFlags[UU] = (gU.sceneDepth ? PU : 0) | (gU.movesVertices ? TU : 0) | (gU.sunShadow ? qU : 0) | (gU.airShadow ? KU : 0) | (gU.discards ? cU : 0) | tU("localPosition", GU) | tU("enchantSpeed", jU) | tU("enchantTier", uU), RU.hooks[UU * EU] = hU(gU.hooks.vertex), RU.hooks[UU * EU + 1] = hU(gU.hooks.surface), RU.hooks[UU * EU + 2] = hU(gU.hooks.light), RU.moduleCodes[UU] = gU.moduleCode, RU.reads[2 * UU] = gU.reads.vertex.join(" "), RU.reads[2 * UU + 1] = gU.reads.fragment.join(" ")
      }
      return RU
    }

    function mU(UU) {
      const {
        hooks: RU,
        moduleCodes: gU,
        reads: tU
      } = UU;
      return Array.from(UU.variantFlags, ((UU, pU) => {
        const GU = pU * EU;
        return {
          key: eU(pU),
          hooks: {
            vertex: QU(RU[GU]),
            surface: QU(RU[GU + 1]),
            light: QU(RU[GU + 2])
          },
          moduleCode: gU[pU],
          sceneDepth: 0 !== (UU & PU),
          sunShadow: 0 !== (UU & qU),
          airShadow: 0 !== (UU & KU),
          movesVertices: 0 !== (UU & TU),
          discards: 0 !== (UU & cU),
          reads: {
            vertex: fU(tU[2 * pU]),
            fragment: fU(tU[2 * pU + 1])
          }
        }
      }))
    }
  },
  6316: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => PU,
      i: () => TU,
      j: () => pU,
      k: () => EU
    });
    const tU = ["terrain", "liquid", "model"];

    function pU() {
      const UU = [];
      for (const RU of [!1, !0])
        for (const gU of tU) UU.push({
          strict: RU,
          program: gU
        });
      return UU
    }

    function EU(UU) {
      return `${UU.strict?"strict":"allow"}.${UU.program}`
    }

    function PU(UU) {
      return !UU.hooks.vertex && !UU.hooks.surface && !UU.hooks.light
    }

    function TU(UU, RU) {
      return "off" !== RU && (null === UU || UU.some((UU => UU.key.strict === ("strict" === RU) && !PU(UU))))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);