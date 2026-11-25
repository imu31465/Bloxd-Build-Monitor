export const id = 136;
export const ids = [136];
export const modules = {
  6608: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadPageShaderPackCompiler: () => fb
    });
    var wG = {};
    ZG.r(wG), ZG.d(wG, {
      uSG: () => SG,
      EGG: () => LG,
      default: () => RG,
      iSG: () => yG,
      CSG: () => kG,
      initSync: () => eG,
      Gp: () => UG,
      QwG: () => YG,
      WSG: () => VG,
      mSG: () => pG,
      Qv: () => fG,
      ISG: () => QG,
      sF: () => KG,
      FSG: () => hG
    });
    class SG {
      static __wrap(GG) {
        const bG = Object.create(SG.prototype);
        return bG.__wbg_ptr = GG, JG.register(bG, bG.__wbg_ptr, bG), bG
      }
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, JG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        qG.rGHs(GG, 0)
      }
      get vSG() {
        let GG, bG;
        try {
          const ZG = qG.hszr(this.__wbg_ptr);
          return GG = ZG[0], bG = ZG[1], uG(ZG[0], ZG[1])
        } finally {
          qG.MiUz(GG, bG, 1)
        }
      }
      get features() {
        const GG = qG.r8Pt(this.__wbg_ptr);
        var bG = zG(GG[0], GG[1]);
        return qG.MiUz(GG[0], 4 * GG[1], 4), bG
      }
      get hooks() {
        const GG = qG.q07X(this.__wbg_ptr);
        var bG = EG(GG[0], GG[1]).slice();
        return qG.MiUz(GG[0], 1 * GG[1], 1), bG
      }
      mapValidationMessage(GG, bG, ZG, wG, SG) {
        let LG, yG;
        try {
          const YG = qG.jfrd(this.__wbg_ptr, GG, bG, ZG, rG(wG), rG(SG));
          var kG = YG[0],
            UG = YG[1];
          if (YG[3]) throw kG = 0, UG = 0, cG(YG[2]);
          return LG = kG, yG = UG, uG(kG, UG)
        } finally {
          qG.MiUz(LG, yG, 1)
        }
      }
      get moduleCodes() {
        const GG = qG.bSLr(this.__wbg_ptr);
        var bG = zG(GG[0], GG[1]);
        return qG.MiUz(GG[0], 4 * GG[1], 4), bG
      }
      get aSG() {
        let GG, bG;
        try {
          const ZG = qG.fprP(this.__wbg_ptr);
          return GG = ZG[0], bG = ZG[1], uG(ZG[0], ZG[1])
        } finally {
          qG.MiUz(GG, bG, 1)
        }
      }
      get reads() {
        const GG = qG.Obr0(this.__wbg_ptr);
        var bG = zG(GG[0], GG[1]);
        return qG.MiUz(GG[0], 4 * GG[1], 4), bG
      }
      get validationModuleCodes() {
        const GG = qG.NFyo(this.__wbg_ptr);
        var bG = zG(GG[0], GG[1]);
        return qG.MiUz(GG[0], 4 * GG[1], 4), bG
      }
      get validationModuleKeys() {
        const GG = qG.cNde(this.__wbg_ptr);
        var bG = EG(GG[0], GG[1]).slice();
        return qG.MiUz(GG[0], 1 * GG[1], 1), bG
      }
      get variantFlags() {
        const GG = qG.ibVV(this.__wbg_ptr);
        var bG = EG(GG[0], GG[1]).slice();
        return qG.MiUz(GG[0], 1 * GG[1], 1), bG
      }
    }

    function LG(GG, bG, ZG, wG, LG, yG, kG) {
      const UG = aG(GG, qG.IkNL),
        YG = nG,
        VG = aG(bG, qG.IkNL),
        pG = nG,
        fG = aG(ZG, qG.IkNL),
        QG = nG,
        KG = vG(wG, qG.IkNL),
        hG = nG,
        dG = aG(LG, qG.IkNL),
        JG = nG,
        rG = aG(yG, qG.IkNL),
        zG = nG,
        EG = aG(kG, qG.IkNL),
        oG = nG,
        XG = qG.x3gQ(UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG);
      if (XG[2]) throw cG(XG[1]);
      return SG.__wrap(XG[0])
    }

    function yG() {
      const GG = qG.Qn0E();
      var bG = zG(GG[0], GG[1]);
      return qG.MiUz(GG[0], 4 * GG[1], 4), bG
    }

    function kG() {
      const GG = qG.RfwA();
      var bG = zG(GG[0], GG[1]);
      return qG.MiUz(GG[0], 4 * GG[1], 4), bG
    }

    function UG() {
      qG.aNxG()
    }

    function YG(GG, bG, ZG, wG, SG) {
      let LG, yG;
      try {
        const YG = aG(GG, qG.IkNL),
          VG = nG,
          pG = vG(bG, qG.IkNL),
          fG = nG,
          QG = aG(ZG, qG.IkNL),
          KG = nG,
          hG = vG(wG, qG.IkNL),
          dG = nG,
          JG = function(GG, bG) {
            const ZG = bG(1 * GG.length, 1) >>> 0;
            return WG().set(GG, ZG / 1), nG = GG.length, ZG
          }(SG, qG.IkNL),
          rG = nG,
          zG = qG.dfb7(YG, VG, pG, fG, QG, KG, hG, dG, JG, rG);
        var kG = zG[0],
          UG = zG[1];
        if (zG[3]) throw kG = 0, UG = 0, cG(zG[2]);
        return LG = kG, yG = UG, uG(kG, UG)
      } finally {
        qG.MiUz(LG, yG, 1)
      }
    }

    function VG() {
      let GG, bG;
      try {
        const ZG = qG.xAzR();
        return GG = ZG[0], bG = ZG[1], uG(ZG[0], ZG[1])
      } finally {
        qG.MiUz(GG, bG, 1)
      }
    }

    function pG(GG) {
      let bG, ZG;
      try {
        const LG = qG.VgDR(GG);
        var wG = LG[0],
          SG = LG[1];
        if (LG[3]) throw wG = 0, SG = 0, cG(LG[2]);
        return bG = wG, ZG = SG, uG(wG, SG)
      } finally {
        qG.MiUz(bG, ZG, 1)
      }
    }

    function fG() {
      return qG.DRsQ() >>> 0
    }

    function QG() {
      let GG, bG;
      try {
        const ZG = qG.TnOr();
        return GG = ZG[0], bG = ZG[1], uG(ZG[0], ZG[1])
      } finally {
        qG.MiUz(GG, bG, 1)
      }
    }

    function KG(GG, bG) {
      let ZG, wG;
      try {
        const yG = aG(GG, qG.IkNL),
          kG = nG,
          UG = vG(bG, qG.IkNL),
          YG = nG,
          VG = qG.AbPv(yG, kG, UG, YG);
        var SG = VG[0],
          LG = VG[1];
        if (VG[3]) throw SG = 0, LG = 0, cG(VG[2]);
        return ZG = SG, wG = LG, uG(SG, LG)
      } finally {
        qG.MiUz(ZG, wG, 1)
      }
    }

    function hG(GG) {
      let bG, ZG;
      try {
        const LG = qG.caAm(rG(GG));
        var wG = LG[0],
          SG = LG[1];
        if (LG[3]) throw wG = 0, SG = 0, cG(LG[2]);
        return bG = wG, ZG = SG, uG(wG, SG)
      } finally {
        qG.MiUz(bG, ZG, 1)
      }
    }

    function dG() {
      return {
        __proto__: null,
        ThAz: {
          __proto__: null,
          eaV4: function(GG, bG) {
            return rG(Error(uG(GG, bG)))
          },
          pwbw: function(GG) {
            return null === mG(GG)
          },
          COkK: function(GG) {
            return "string" === typeof mG(GG)
          },
          WXY0: function(GG, bG) {
            const ZG = mG(bG),
              wG = "string" === typeof ZG ? ZG : void 0;
            var SG, LG = void 0 === (SG = wG) || null === SG ? 0 : function(GG, bG, ZG) {
                if (void 0 === ZG) {
                  const ZG = MG.encode(GG),
                    wG = bG(ZG.length, 1) >>> 0;
                  return WG().subarray(wG, wG + ZG.length).set(ZG), nG = ZG.length, wG
                }
                let wG = GG.length,
                  SG = bG(wG, 1) >>> 0;
                const LG = WG();
                let yG = 0;
                for (; yG < wG; yG++) {
                  const bG = GG.charCodeAt(yG);
                  if (bG > 127) break;
                  LG[SG + yG] = bG
                }
                if (yG !== wG) {
                  0 !== yG && (GG = GG.slice(yG)), SG = ZG(SG, wG, wG = yG + 3 * GG.length, 1) >>> 0;
                  const bG = WG().subarray(SG + yG, SG + wG);
                  yG += MG.encodeInto(GG, bG).written, SG = ZG(SG, wG, yG, 1) >>> 0
                }
                return nG = yG, SG
              }(wG, qG.IkNL, qG.Pd9B),
              yG = nG;
            XG().setInt32(GG + 4, yG, !0), XG().setInt32(GG + 0, LG, !0)
          },
          INXc: function(GG, bG) {
            throw new Error(uG(GG, bG))
          },
          Oo6P: function(GG, bG) {
            return mG(GG).charCodeAt(bG >>> 0)
          },
          Ik02: function(GG, bG) {
            console.error(uG(GG, bG))
          },
          pzYM: function(GG) {
            return mG(GG).length
          },
          Rqbq: function(GG, bG) {
            return rG(uG(GG, bG))
          },
          NEmb: function(GG) {
            cG(GG)
          }
        }
      }
    }
    Symbol.dispose && (SG.prototype[Symbol.dispose] = SG.prototype.free);
    const JG = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((GG => qG.rGHs(GG, 1)));

    function rG(GG) {
      FG === IG.length && IG.push(IG.length + 1);
      const bG = FG;
      return FG = IG[bG], IG[bG] = GG, bG
    }

    function zG(GG, bG) {
      GG >>>= 0;
      const ZG = XG(),
        wG = [];
      for (let SG = GG; SG < GG + 4 * bG; SG += 4) wG.push(cG(ZG.getUint32(SG, !0)));
      return wG
    }

    function EG(GG, bG) {
      return GG >>>= 0, WG().subarray(GG / 1, GG / 1 + bG)
    }
    let oG = null;

    function XG() {
      return null !== oG && oG.buffer === qG.memory.buffer || (oG = new DataView(qG.memory.buffer)), oG
    }

    function uG(GG, bG) {
      return function(GG, bG) {
        PG += bG, PG >= jG && (lG = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), lG.decode(), PG = bG);
        return lG.decode(WG().subarray(GG, GG + bG))
      }(GG >>> 0, bG)
    }
    let iG = null;
    let CG = null;

    function WG() {
      return null !== CG && 0 !== CG.byteLength || (CG = new Uint8Array(qG.memory.buffer)), CG
    }

    function mG(GG) {
      return IG[GG]
    }
    let IG = new Array(1024).fill(void 0);
    IG.push(void 0, null, !0, !1);
    let FG = IG.length;

    function vG(GG, bG) {
      const ZG = bG(4 * GG.length, 4) >>> 0;
      return (null !== iG && 0 !== iG.byteLength || (iG = new Uint32Array(qG.memory.buffer)), iG).set(GG, ZG / 4), nG = GG.length, ZG
    }

    function aG(GG, bG) {
      const ZG = bG(4 * GG.length, 4) >>> 0,
        wG = XG();
      for (let SG = 0; SG < GG.length; SG++) wG.setUint32(ZG + 4 * SG, rG(GG[SG]), !0);
      return nG = GG.length, ZG
    }

    function cG(GG) {
      const bG = mG(GG);
      return function(GG) {
        GG < 1028 || (IG[GG] = FG, FG = GG)
      }(GG), bG
    }
    let lG = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    lG.decode();
    const jG = 2146435072;
    let PG = 0;
    const MG = new TextEncoder;
    "encodeInto" in MG || (MG.encodeInto = function(GG, bG) {
      const ZG = MG.encode(GG);
      return bG.set(ZG), {
        read: GG.length,
        written: ZG.length
      }
    });
    let AG, sG, qG, nG = 0;

    function gG(GG, bG) {
      return sG = GG, qG = GG.exports, AG = bG, oG = null, iG = null, CG = null, qG.ttYv(), qG
    }

    function eG(GG) {
      if (void 0 !== qG) return qG;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module: GG
      } = GG) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bG = dG();
      GG instanceof WebAssembly.Module || (GG = new WebAssembly.Module(GG));
      return gG(new WebAssembly.Instance(GG, bG), GG)
    }
    async function RG(GG) {
      if (void 0 !== qG) return qG;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module_or_path: GG
      } = GG) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bG = dG();
      ("string" === typeof GG || "function" === typeof Request && GG instanceof Request || "function" === typeof URL && GG instanceof URL) && (GG = fetch(GG));
      const {
        instance: ZG,
        module: wG
      } = await async function(GG, bG) {
        if ("function" === typeof Response && GG instanceof Response) {
          if (!GG.ok) throw new Error(`failed to fetch Wasm: ${GG.status} ${GG.statusText} fetching '${GG.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(GG, bG)
          } catch (ZG) {
            if (! function(GG) {
                switch (GG) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(GG.type) || "application/wasm" === GG.headers.get("Content-Type")) throw ZG;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZG)
          }
          const wG = await GG.arrayBuffer();
          return await WebAssembly.instantiate(wG, bG)
        } {
          const ZG = await WebAssembly.instantiate(GG, bG);
          return ZG instanceof WebAssembly.Instance ? {
            instance: ZG,
            module: GG
          } : ZG
        }
      }(await GG, bG);
      return gG(ZG, wG)
    }
    var TG = ZG(2872),
      HG = ZG(6617);
    class tG extends Error {
      stage;
      constructor(GG, bG) {
        super((0, TG.D)(GG, bG), {
          cause: bG
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = GG
      }
    }
    let DG = null,
      NG = null;

    function OG() {
      return DG ? Promise.resolve(DG) : (NG || (NG = async function() {
        let GG;
        try {
          GG = await (0, TG.G)(new ZG.U(ZG(6620)), (0, HG.e)("bloxd_wasm_shader_pack"))
        } catch (bG) {
          throw new tG((0, TG.L)(bG), bG)
        }
        try {
          await RG({
            module_or_path: GG
          })
        } catch (bG) {
          throw new tG("instantiate", bG)
        }
        return DG = wG, DG
      }(), NG.then(void 0, (() => {
        NG = null
      }))), NG)
    }
    var xG = ZG(6629);

    function BG(GG) {
      let [bG, ZG, wG, SG] = GG;
      const LG = {
        file: bG,
        line: ZG,
        message: wG
      };
      return SG && (LG.variants = SG.map(xG.o)), LG
    }

    function Gb(GG) {
      return JSON.parse(GG).map(BG)
    }

    function bb(GG, bG) {
      if (!Number.isInteger(GG) || GG < 0 || GG > 4294967295) throw new Error(`${bG} ${GG} is not a whole number from 0 to 4294967295`);
      return GG
    }

    function Zb(GG) {
      return [GG.named.map((GG => GG.name)), Uint32Array.from(GG.named, (GG => bb(GG.id, "Texture ID")))]
    }
    const wb = new WeakMap;
    const Sb = new WeakMap,
      Lb = new WeakSet;

    function yb(GG, bG) {
      if (Lb.has(GG)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return bG()
      } catch (ZG) {
        throw ZG instanceof WebAssembly.RuntimeError && Lb.add(GG), ZG
      }
    }

    function kb(GG) {
      let bG = Sb.get(GG);
      if (!bG) {
        let ZG, wG;
        bG = {
          EGG: (bG, ZG) => yb(GG, (() => function(GG, bG, ZG) {
            const wG = GG.EGG(bG.map((GG => GG.path)), bG.map((GG => GG.source)), ...Zb(ZG), ZG.aliases.map((GG => GG.name)), ZG.aliases.map((GG => GG.texture)), ZG.aliases.map((GG => GG.kind)));
            let SG = !1;
            try {
              const GG = wG.validationModuleCodes,
                bG = Array.from(wG.validationModuleKeys, ((bG, ZG) => ({
                  key: (0, xG.o)(bG),
                  code: GG[ZG]
                }))),
                ZG = {
                  errors: Gb(wG.vSG),
                  offInStrict: Gb(wG.aSG),
                  variants: (0, xG.h)(wG),
                  validationModules: bG,
                  features: wG.features
                };
              return bG.forEach(((GG, bG) => {
                wb.set(GG, {
                  pack: wG,
                  index: bG
                })
              })), SG = bG.length > 0, ZG
            } finally {
              SG || wG.free()
            }
          }(GG, bG, ZG))),
          mapValidationMessage: (bG, ZG) => {
            const wG = wb.get(bG);
            if (!wG) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return BG(JSON.parse(yb(GG, (() => wG.pack.mapValidationMessage(wG.index, ZG.lineNum, ZG.linePos, ZG.message, ZG.type)))))
          },
          QwG: bG => yb(GG, (() => function(GG, bG) {
            const ZG = new Int32Array(bG.length),
              wG = [];
            return bG.forEach(((GG, bG) => {
              ZG[bG] = GG.variants ? GG.variants.length : -1;
              for (const ZG of GG.variants ?? []) wG.push((0, xG.k)(ZG))
            })), Gb(GG.QwG(bG.map((GG => GG.file)), Uint32Array.from(bG, (GG => bb(GG.line, "Diagnostic line"))), bG.map((GG => GG.message)), ZG, Uint8Array.from(wG)))
          }(GG, bG))),
          sF: bG => yb(GG, (() => GG.sF(...Zb(bG)))),
          get SHADER_PACK_HEADER_VERSION() {
            return ZG ??= yb(GG, (() => GG.ISG())), ZG
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return wG ??= yb(GG, (() => {
              const bG = GG.CSG();
              return GG.iSG().map(((GG, ZG) => ({
                path: GG,
                source: bG[ZG]
              })))
            })), wG
          },
          FSG: bG => yb(GG, (() => GG.FSG(bG))),
          resolveHeader: bG => yb(GG, (() => GG.mSG((0, xG.k)(bG)))),
          WSG: () => yb(GG, (() => GG.WSG()))
        }, Sb.set(GG, bG)
      }
      return bG
    }
    var Ub = ZG(3201),
      Yb = ZG(6627);
    const Vb = "bloxdShaderPackWasmFailureReported";
    let pb = null;

    function fb() {
      return pb ??= async function() {
        if ("undefined" === typeof WebAssembly) return Qb("unsupported", "This browser has no WebAssembly"), null;
        const GG = (0, Yb.loadShaderPackTextures)().then((() => !0), (GG => (console.error("Could not load the shader pack textures, so shader packs can't run", GG), !1)));
        try {
          const bG = await async function() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OG;
            return kb(await GG())
          }();
          return await GG ? bG : null
        } catch (bG) {
          const GG = bG instanceof Error ? bG.message : String(bG);
          return Qb(Ub.b[bG instanceof tG ? bG.stage : "instantiate"], GG), null
        }
      }(), pb
    }

    function Qb(GG, bG) {
      (0, Ub.g)(Vb, `Shader pack wasm ${GG}, so shader packs can't run: ${bG}`, bG, `shader_pack_${GG}`)
    }
  },
  6620: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_shader_pack_bg.b2efd01bad4a0b498959.wasm"
  },
  6617: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(2872);
    const SG = {
      bloxd_wasm: () => "227276669bc81789ae0877e56ad1fa5148b881f36403e765502d7e555a33087b",
      bloxd_wasm_client: () => "fde6efab397f5d28c36c7f7a90c3f8e1e62ec9f2af8488ddf98fdaa9b2cebcf1",
      bloxd_wasm_workers: () => "a8f5ca009ba569fbb81d001dc1c9c7b54b8e4226097b17169475b4bb5e1b6f99",
      bloxd_wasm_models: () => "097716d2f3ac493be1328cd23cfea825beae0b4d004cb4793fdff4648d25e301",
      bloxd_wasm_webgpu: () => "67fd54aabb1d4d6967e430405453b87c364949978d0f7829b088145aae1e9ce5",
      bloxd_wasm_webgl: () => "cdb0cf8160692e68dd70a2abf12e1128a08d64229d0469d4cc325cafd535e3d2",
      bloxd_wasm_webgl1: () => "e8028f55daf732b5703910fe0886408ee732d8fa1e0480d554692849ab6badfa",
      bloxd_wasm_replay: () => "218045edbe3647b06370037bf62e2cd5b77074e838aa33d42c210d12a23e3077",
      bloxd_wasm_recorder: () => "8c52d908a7d9cbdccb92ee77564b71599d585f3b620f197e3396dcac8eca4f39",
      bloxd_wasm_anim: () => "4aa0ad1549e0d5c6e1e816ef89f5c6c760fcacd619ca992ecbfbe1cf2f199e59",
      bloxd_wasm_textures: () => "e5d65888cff795e87fa902109722e0986a22a654053de444a1b316ec7c6a343f",
      bloxd_wasm_shader_pack: () => "1379c312c4022055abc387da5e4950082e1556f2bea4656a45cd7e8eb7e7ab66"
    };
    var LG = ZG(4708);

    function yG(GG) {
      const bG = Object.prototype.hasOwnProperty.call(SG, GG) ? SG[GG]() : void 0;
      if (void 0 !== bG) return {
        sha256: bG,
        onMismatch: LG.y
      };
      throw new wG.k(`${GG} has no release digest, so this build refuses it`)
    }
  },
  6629: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => EG,
      h: () => oG,
      k: () => rG,
      o: () => JG
    });
    var wG = ZG(6636);
    const SG = 6,
      LG = 3,
      yG = 1,
      kG = 2,
      UG = 4,
      YG = 8,
      VG = 16,
      pG = 32,
      fG = 64,
      QG = 128,
      KG = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function hG(GG) {
      if (!GG) return 0;
      const bG = KG.indexOf(GG);
      if (bG <= 0) throw new Error(`"${GG}" is not a shader pack hook function`);
      return bG
    }

    function dG(GG) {
      if (0 === GG) return null;
      const bG = KG[GG];
      if (void 0 === bG) throw new Error(`${GG} is not a shader pack hook function id`);
      return bG
    }

    function JG(GG) {
      const bG = wG.e.length;
      return {
        strict: GG >= bG,
        program: wG.e[GG % bG]
      }
    }

    function rG(GG) {
      return Number(GG.strict) * wG.e.length + wG.e.indexOf(GG.program)
    }

    function zG(GG) {
      return "" === GG ? [] : GG.split(" ")
    }

    function EG(GG) {
      const bG = {
        variantFlags: new Uint8Array(SG),
        hooks: new Uint8Array(SG * LG),
        moduleCodes: Array(SG).fill(""),
        reads: Array(2 * SG).fill("")
      };
      for (const ZG of GG) {
        const GG = rG(ZG.key),
          wG = (GG, bG) => null === ZG.hooks.surface || ZG.reads.fragment.includes(GG) ? 0 : bG;
        bG.variantFlags[GG] = (ZG.sceneDepth ? yG : 0) | (ZG.movesVertices ? kG : 0) | (ZG.sunShadow ? UG : 0) | (ZG.airShadow ? YG : 0) | (ZG.discards ? VG : 0) | wG("localPosition", pG) | wG("enchantSpeed", fG) | wG("enchantTier", QG), bG.hooks[GG * LG] = hG(ZG.hooks.vertex), bG.hooks[GG * LG + 1] = hG(ZG.hooks.surface), bG.hooks[GG * LG + 2] = hG(ZG.hooks.light), bG.moduleCodes[GG] = ZG.moduleCode, bG.reads[2 * GG] = ZG.reads.vertex.join(" "), bG.reads[2 * GG + 1] = ZG.reads.fragment.join(" ")
      }
      return bG
    }

    function oG(GG) {
      const {
        hooks: bG,
        moduleCodes: ZG,
        reads: wG
      } = GG;
      return Array.from(GG.variantFlags, ((GG, SG) => {
        const pG = SG * LG;
        return {
          key: JG(SG),
          hooks: {
            vertex: dG(bG[pG]),
            surface: dG(bG[pG + 1]),
            light: dG(bG[pG + 2])
          },
          moduleCode: ZG[SG],
          sceneDepth: 0 !== (GG & yG),
          sunShadow: 0 !== (GG & UG),
          airShadow: 0 !== (GG & YG),
          movesVertices: 0 !== (GG & kG),
          discards: 0 !== (GG & VG),
          reads: {
            vertex: zG(wG[2 * SG]),
            fragment: zG(wG[2 * SG + 1])
          }
        }
      }))
    }
  },
  6636: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG,
      i: () => yG,
      m: () => kG,
      q: () => SG,
      u: () => LG
    });
    const wG = ["terrain", "liquid", "model"];

    function SG() {
      const GG = [];
      for (const bG of [!1, !0])
        for (const ZG of wG) GG.push({
          strict: bG,
          program: ZG
        });
      return GG
    }

    function LG(GG) {
      return `${GG.strict?"strict":"allow"}.${GG.program}`
    }

    function yG(GG) {
      return !GG.hooks.vertex && !GG.hooks.surface && !GG.hooks.light
    }

    function kG(GG, bG) {
      return "off" !== bG && (null === GG || GG.some((GG => GG.key.strict === ("strict" === bG) && !yG(GG))))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);