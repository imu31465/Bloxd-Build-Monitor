export const id = 133;
export const ids = [133];
export const modules = {
  6609: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadPageShaderPackCompiler: () => Nz
    });
    var QC = {};
    ZC.r(QC), ZC.d(QC, {
      zwC: () => wC,
      K3: () => bC,
      default: () => DC,
      ZwC: () => nC,
      QwC: () => fC,
      initSync: () => tC,
      pW: () => oC,
      rZC: () => qC,
      wwC: () => FC,
      bwC: () => WC,
      Am: () => NC,
      nwC: () => MC,
      Rm: () => gC,
      fwC: () => SC
    });
    class wC {
      static __wrap(CC) {
        const zC = Object.create(wC.prototype);
        return zC.__wbg_ptr = CC, PC.register(zC, zC.__wbg_ptr, zC), zC
      }
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        sC.IZbw(CC, 0)
      }
      get owC() {
        let CC, zC;
        try {
          const ZC = sC.s1XG(this.__wbg_ptr);
          return CC = ZC[0], zC = ZC[1], IC(ZC[0], ZC[1])
        } finally {
          sC.Ct4l(CC, zC, 1)
        }
      }
      get features() {
        const CC = sC.OI1q(this.__wbg_ptr);
        var zC = RC(CC[0], CC[1]);
        return sC.Ct4l(CC[0], 4 * CC[1], 4), zC
      }
      get hooks() {
        const CC = sC.OtRn(this.__wbg_ptr);
        var zC = AC(CC[0], CC[1]).slice();
        return sC.Ct4l(CC[0], 1 * CC[1], 1), zC
      }
      mapValidationMessage(CC, zC, ZC, QC, wC) {
        let bC, nC;
        try {
          const qC = sC.Lj6h(this.__wbg_ptr, CC, zC, ZC, GC(QC), GC(wC));
          var fC = qC[0],
            oC = qC[1];
          if (qC[3]) throw fC = 0, oC = 0, HC(qC[2]);
          return bC = fC, nC = oC, IC(fC, oC)
        } finally {
          sC.Ct4l(bC, nC, 1)
        }
      }
      get moduleCodes() {
        const CC = sC.g59L(this.__wbg_ptr);
        var zC = RC(CC[0], CC[1]);
        return sC.Ct4l(CC[0], 4 * CC[1], 4), zC
      }
      get qwC() {
        let CC, zC;
        try {
          const ZC = sC.tzlZ(this.__wbg_ptr);
          return CC = ZC[0], zC = ZC[1], IC(ZC[0], ZC[1])
        } finally {
          sC.Ct4l(CC, zC, 1)
        }
      }
      get reads() {
        const CC = sC.aWuX(this.__wbg_ptr);
        var zC = RC(CC[0], CC[1]);
        return sC.Ct4l(CC[0], 4 * CC[1], 4), zC
      }
      get validationModuleCodes() {
        const CC = sC.Hf8g(this.__wbg_ptr);
        var zC = RC(CC[0], CC[1]);
        return sC.Ct4l(CC[0], 4 * CC[1], 4), zC
      }
      get validationModuleKeys() {
        const CC = sC.F8M3(this.__wbg_ptr);
        var zC = AC(CC[0], CC[1]).slice();
        return sC.Ct4l(CC[0], 1 * CC[1], 1), zC
      }
      get variantFlags() {
        const CC = sC.Tijv(this.__wbg_ptr);
        var zC = AC(CC[0], CC[1]).slice();
        return sC.Ct4l(CC[0], 1 * CC[1], 1), zC
      }
    }

    function bC(CC, zC, ZC, QC, bC, nC, fC) {
      const oC = mC(CC, sC.uiUI),
        qC = TC,
        FC = mC(zC, sC.uiUI),
        WC = TC,
        NC = mC(ZC, sC.uiUI),
        MC = TC,
        gC = dC(QC, sC.uiUI),
        SC = TC,
        pC = mC(bC, sC.uiUI),
        PC = TC,
        GC = mC(nC, sC.uiUI),
        RC = TC,
        AC = mC(fC, sC.uiUI),
        xC = TC,
        JC = sC.aozm(oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC);
      if (JC[2]) throw HC(JC[1]);
      return wC.__wrap(JC[0])
    }

    function nC() {
      const CC = sC.RxYz();
      var zC = RC(CC[0], CC[1]);
      return sC.Ct4l(CC[0], 4 * CC[1], 4), zC
    }

    function fC() {
      const CC = sC.sKJ2();
      var zC = RC(CC[0], CC[1]);
      return sC.Ct4l(CC[0], 4 * CC[1], 4), zC
    }

    function oC() {
      sC.IQDe()
    }

    function qC(CC, zC, ZC, QC, wC) {
      let bC, nC;
      try {
        const qC = mC(CC, sC.uiUI),
          FC = TC,
          WC = dC(zC, sC.uiUI),
          NC = TC,
          MC = mC(ZC, sC.uiUI),
          gC = TC,
          SC = dC(QC, sC.uiUI),
          pC = TC,
          PC = function(CC, zC) {
            const ZC = zC(1 * CC.length, 1) >>> 0;
            return eC().set(CC, ZC / 1), TC = CC.length, ZC
          }(wC, sC.uiUI),
          GC = TC,
          RC = sC.ghdI(qC, FC, WC, NC, MC, gC, SC, pC, PC, GC);
        var fC = RC[0],
          oC = RC[1];
        if (RC[3]) throw fC = 0, oC = 0, HC(RC[2]);
        return bC = fC, nC = oC, IC(fC, oC)
      } finally {
        sC.Ct4l(bC, nC, 1)
      }
    }

    function FC() {
      let CC, zC;
      try {
        const ZC = sC.On8j();
        return CC = ZC[0], zC = ZC[1], IC(ZC[0], ZC[1])
      } finally {
        sC.Ct4l(CC, zC, 1)
      }
    }

    function WC(CC) {
      let zC, ZC;
      try {
        const bC = sC.pWnx(CC);
        var QC = bC[0],
          wC = bC[1];
        if (bC[3]) throw QC = 0, wC = 0, HC(bC[2]);
        return zC = QC, ZC = wC, IC(QC, wC)
      } finally {
        sC.Ct4l(zC, ZC, 1)
      }
    }

    function NC() {
      return sC.cx7F() >>> 0
    }

    function MC() {
      let CC, zC;
      try {
        const ZC = sC.tQJ3();
        return CC = ZC[0], zC = ZC[1], IC(ZC[0], ZC[1])
      } finally {
        sC.Ct4l(CC, zC, 1)
      }
    }

    function gC(CC, zC) {
      let ZC, QC;
      try {
        const nC = mC(CC, sC.uiUI),
          fC = TC,
          oC = dC(zC, sC.uiUI),
          qC = TC,
          FC = sC.ZoZD(nC, fC, oC, qC);
        var wC = FC[0],
          bC = FC[1];
        if (FC[3]) throw wC = 0, bC = 0, HC(FC[2]);
        return ZC = wC, QC = bC, IC(wC, bC)
      } finally {
        sC.Ct4l(ZC, QC, 1)
      }
    }

    function SC(CC) {
      let zC, ZC;
      try {
        const bC = sC.afbp(GC(CC));
        var QC = bC[0],
          wC = bC[1];
        if (bC[3]) throw QC = 0, wC = 0, HC(bC[2]);
        return zC = QC, ZC = wC, IC(QC, wC)
      } finally {
        sC.Ct4l(zC, ZC, 1)
      }
    }

    function pC() {
      return {
        __proto__: null,
        Oz5A: {
          __proto__: null,
          yG9O: function(CC, zC) {
            return GC(Error(IC(CC, zC)))
          },
          RURy: function(CC) {
            return null === hC(CC)
          },
          FK4D: function(CC) {
            return "string" === typeof hC(CC)
          },
          QR66: function(CC, zC) {
            const ZC = hC(zC),
              QC = "string" === typeof ZC ? ZC : void 0;
            var wC, bC = void 0 === (wC = QC) || null === wC ? 0 : function(CC, zC, ZC) {
                if (void 0 === ZC) {
                  const ZC = cC.encode(CC),
                    QC = zC(ZC.length, 1) >>> 0;
                  return eC().subarray(QC, QC + ZC.length).set(ZC), TC = ZC.length, QC
                }
                let QC = CC.length,
                  wC = zC(QC, 1) >>> 0;
                const bC = eC();
                let nC = 0;
                for (; nC < QC; nC++) {
                  const zC = CC.charCodeAt(nC);
                  if (zC > 127) break;
                  bC[wC + nC] = zC
                }
                if (nC !== QC) {
                  0 !== nC && (CC = CC.slice(nC)), wC = ZC(wC, QC, QC = nC + 3 * CC.length, 1) >>> 0;
                  const zC = eC().subarray(wC + nC, wC + QC);
                  nC += cC.encodeInto(CC, zC).written, wC = ZC(wC, QC, nC, 1) >>> 0
                }
                return TC = nC, wC
              }(QC, sC.uiUI, sC.t5OK),
              nC = TC;
            JC().setInt32(CC + 4, nC, !0), JC().setInt32(CC + 0, bC, !0)
          },
          mkwm: function(CC, zC) {
            throw new Error(IC(CC, zC))
          },
          gEty: function(CC, zC) {
            return hC(CC).charCodeAt(zC >>> 0)
          },
          jPPu: function(CC, zC) {
            console.error(IC(CC, zC))
          },
          fSvU: function(CC) {
            return hC(CC).length
          },
          mfLY: function(CC, zC) {
            return GC(IC(CC, zC))
          },
          qbxc: function(CC) {
            HC(CC)
          }
        }
      }
    }
    Symbol.dispose && (wC.prototype[Symbol.dispose] = wC.prototype.free);
    const PC = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((CC => sC.IZbw(CC, 1)));

    function GC(CC) {
      YC === KC.length && KC.push(KC.length + 1);
      const zC = YC;
      return YC = KC[zC], KC[zC] = CC, zC
    }

    function RC(CC, zC) {
      CC >>>= 0;
      const ZC = JC(),
        QC = [];
      for (let wC = CC; wC < CC + 4 * zC; wC += 4) QC.push(HC(ZC.getUint32(wC, !0)));
      return QC
    }

    function AC(CC, zC) {
      return CC >>>= 0, eC().subarray(CC / 1, CC / 1 + zC)
    }
    let xC = null;

    function JC() {
      return null !== xC && xC.buffer === sC.memory.buffer || (xC = new DataView(sC.memory.buffer)), xC
    }

    function IC(CC, zC) {
      return function(CC, zC) {
        XC += zC, XC >= lC && (EC = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), EC.decode(), XC = zC);
        return EC.decode(eC().subarray(CC, CC + zC))
      }(CC >>> 0, zC)
    }
    let iC = null;
    let vC = null;

    function eC() {
      return null !== vC && 0 !== vC.byteLength || (vC = new Uint8Array(sC.memory.buffer)), vC
    }

    function hC(CC) {
      return KC[CC]
    }
    let KC = new Array(1024).fill(void 0);
    KC.push(void 0, null, !0, !1);
    let YC = KC.length;

    function dC(CC, zC) {
      const ZC = zC(4 * CC.length, 4) >>> 0;
      return (null !== iC && 0 !== iC.byteLength || (iC = new Uint32Array(sC.memory.buffer)), iC).set(CC, ZC / 4), TC = CC.length, ZC
    }

    function mC(CC, zC) {
      const ZC = zC(4 * CC.length, 4) >>> 0,
        QC = JC();
      for (let wC = 0; wC < CC.length; wC++) QC.setUint32(ZC + 4 * wC, GC(CC[wC]), !0);
      return TC = CC.length, ZC
    }

    function HC(CC) {
      const zC = hC(CC);
      return function(CC) {
        CC < 1028 || (KC[CC] = YC, YC = CC)
      }(CC), zC
    }
    let EC = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    EC.decode();
    const lC = 2146435072;
    let XC = 0;
    const cC = new TextEncoder;
    "encodeInto" in cC || (cC.encodeInto = function(CC, zC) {
      const ZC = cC.encode(CC);
      return zC.set(ZC), {
        read: CC.length,
        written: ZC.length
      }
    });
    let uC, rC, sC, TC = 0;

    function aC(CC, zC) {
      return rC = CC, sC = CC.exports, uC = zC, xC = null, iC = null, vC = null, sC.IgCc(), sC
    }

    function tC(CC) {
      if (void 0 !== sC) return sC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module: CC
      } = CC) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zC = pC();
      CC instanceof WebAssembly.Module || (CC = new WebAssembly.Module(CC));
      return aC(new WebAssembly.Instance(CC, zC), CC)
    }
    async function DC(CC) {
      if (void 0 !== sC) return sC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module_or_path: CC
      } = CC) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zC = pC();
      ("string" === typeof CC || "function" === typeof Request && CC instanceof Request || "function" === typeof URL && CC instanceof URL) && (CC = fetch(CC));
      const {
        instance: ZC,
        module: QC
      } = await async function(CC, zC) {
        if ("function" === typeof Response && CC instanceof Response) {
          if (!CC.ok) throw new Error(`failed to fetch Wasm: ${CC.status} ${CC.statusText} fetching '${CC.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(CC, zC)
          } catch (ZC) {
            if (! function(CC) {
                switch (CC) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(CC.type) || "application/wasm" === CC.headers.get("Content-Type")) throw ZC;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZC)
          }
          const QC = await CC.arrayBuffer();
          return await WebAssembly.instantiate(QC, zC)
        } {
          const ZC = await WebAssembly.instantiate(CC, zC);
          return ZC instanceof WebAssembly.Instance ? {
            instance: ZC,
            module: CC
          } : ZC
        }
      }(await CC, zC);
      return aC(ZC, QC)
    }
    var jC = ZC(2856),
      yC = ZC(6616);
    class LC extends Error {
      stage;
      constructor(CC, zC) {
        super((0, jC.F)(CC, zC), {
          cause: zC
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = CC
      }
    }
    let UC = null,
      BC = null;

    function OC() {
      return UC ? Promise.resolve(UC) : (BC || (BC = async function() {
        let CC;
        try {
          CC = await (0, jC.I)(new ZC.U(ZC(6621)), (0, yC.e)("bloxd_wasm_shader_pack"))
        } catch (zC) {
          throw new LC((0, jC.P)(zC), zC)
        }
        try {
          await DC({
            module_or_path: CC
          })
        } catch (zC) {
          throw new LC("instantiate", zC)
        }
        return UC = QC, UC
      }(), BC.then(void 0, (() => {
        BC = null
      }))), BC)
    }
    var kC = ZC(6639);

    function VC(CC) {
      let [zC, ZC, QC, wC] = CC;
      const bC = {
        file: zC,
        line: ZC,
        message: QC
      };
      return wC && (bC.variants = wC.map(kC.h)), bC
    }

    function Cz(CC) {
      return JSON.parse(CC).map(VC)
    }

    function zz(CC, zC) {
      if (!Number.isInteger(CC) || CC < 0 || CC > 4294967295) throw new Error(`${zC} ${CC} is not a whole number from 0 to 4294967295`);
      return CC
    }

    function Zz(CC) {
      return [CC.named.map((CC => CC.name)), Uint32Array.from(CC.named, (CC => zz(CC.id, "Texture ID")))]
    }
    const Qz = new WeakMap;
    const wz = new WeakMap,
      bz = new WeakSet;

    function nz(CC, zC) {
      if (bz.has(CC)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return zC()
      } catch (ZC) {
        throw ZC instanceof WebAssembly.RuntimeError && bz.add(CC), ZC
      }
    }

    function fz(CC) {
      let zC = wz.get(CC);
      if (!zC) {
        let ZC, QC;
        zC = {
          K3: (zC, ZC) => nz(CC, (() => function(CC, zC, ZC) {
            const QC = CC.K3(zC.map((CC => CC.path)), zC.map((CC => CC.source)), ...Zz(ZC), ZC.aliases.map((CC => CC.name)), ZC.aliases.map((CC => CC.texture)), ZC.aliases.map((CC => CC.kind)));
            let wC = !1;
            try {
              const CC = QC.validationModuleCodes,
                zC = Array.from(QC.validationModuleKeys, ((zC, ZC) => ({
                  key: (0, kC.h)(zC),
                  code: CC[ZC]
                }))),
                ZC = {
                  errors: Cz(QC.owC),
                  offInStrict: Cz(QC.qwC),
                  variants: (0, kC.f)(QC),
                  validationModules: zC,
                  features: QC.features
                };
              return zC.forEach(((CC, zC) => {
                Qz.set(CC, {
                  pack: QC,
                  index: zC
                })
              })), wC = zC.length > 0, ZC
            } finally {
              wC || QC.free()
            }
          }(CC, zC, ZC))),
          mapValidationMessage: (zC, ZC) => {
            const QC = Qz.get(zC);
            if (!QC) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return VC(JSON.parse(nz(CC, (() => QC.pack.mapValidationMessage(QC.index, ZC.lineNum, ZC.linePos, ZC.message, ZC.type)))))
          },
          rZC: zC => nz(CC, (() => function(CC, zC) {
            const ZC = new Int32Array(zC.length),
              QC = [];
            return zC.forEach(((CC, zC) => {
              ZC[zC] = CC.variants ? CC.variants.length : -1;
              for (const ZC of CC.variants ?? []) QC.push((0, kC.g)(ZC))
            })), Cz(CC.rZC(zC.map((CC => CC.file)), Uint32Array.from(zC, (CC => zz(CC.line, "Diagnostic line"))), zC.map((CC => CC.message)), ZC, Uint8Array.from(QC)))
          }(CC, zC))),
          Rm: zC => nz(CC, (() => CC.Rm(...Zz(zC)))),
          get SHADER_PACK_HEADER_VERSION() {
            return ZC ??= nz(CC, (() => CC.nwC())), ZC
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return QC ??= nz(CC, (() => {
              const zC = CC.QwC();
              return CC.ZwC().map(((CC, ZC) => ({
                path: CC,
                source: zC[ZC]
              })))
            })), QC
          },
          fwC: zC => nz(CC, (() => CC.fwC(zC))),
          resolveHeader: zC => nz(CC, (() => CC.bwC((0, kC.g)(zC)))),
          wwC: () => nz(CC, (() => CC.wwC()))
        }, wz.set(CC, zC)
      }
      return zC
    }
    var oz = ZC(3208),
      qz = ZC(6630);
    const Fz = "bloxdShaderPackWasmFailureReported";
    let Wz = null;

    function Nz() {
      return Wz ??= async function() {
        if ("undefined" === typeof WebAssembly) return Mz("unsupported", "This browser has no WebAssembly"), null;
        const CC = (0, qz.loadShaderPackTextures)().then((() => !0), (CC => (console.error("Could not load the shader pack textures, so shader packs can't run", CC), !1)));
        try {
          const zC = await async function() {
            let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OC;
            return fz(await CC())
          }();
          return await CC ? zC : null
        } catch (zC) {
          const CC = zC instanceof Error ? zC.message : String(zC);
          return Mz(oz.b[zC instanceof LC ? zC.stage : "instantiate"], CC), null
        }
      }(), Wz
    }

    function Mz(CC, zC) {
      (0, oz.g)(Fz, `Shader pack wasm ${CC}, so shader packs can't run: ${zC}`, zC, `shader_pack_${CC}`)
    }
  },
  6621: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_shader_pack_bg.e140c3822ca3dad999c3.wasm"
  },
  6616: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(2856);
    const wC = {
      bloxd_wasm: () => "64213eca4658377ef00b2e8eca80917f662fb244ea5072aa932d693e87ee34a4",
      bloxd_wasm_client: () => "fc3cf04d5b7854fba80fd4d4a48c70cd5cfa75bed057ae2631f2eac809bb72d6",
      bloxd_wasm_workers: () => "6e4d4a97778a79d3d1539bba135e452823879ae247a4075c185762ab01e74bb8",
      bloxd_wasm_models: () => "a9e6377967b2efe08bc1c2c1ba7803c68faf84b1979c48237b60c2a5371ef6f0",
      bloxd_wasm_webgpu: () => "0c329bbf92b5e8dc40c9c50de71fa16d3214efd01ed90e0c806f70cc5dc4a678",
      bloxd_wasm_webgl: () => "1a61f36acda217637aa35c038c864802f4a597fe34b899397ecb8b3f7a6010d4",
      bloxd_wasm_webgl1: () => "fa07e900fdcc5ea52a844349243c3504ebaca1ebb1ff15c9d66db4fcc37f2404",
      bloxd_wasm_replay: () => "37f9a110c636f28820cc4bb4d1a11de7ceaafb9c9325a7fee4fe688876d19d67",
      bloxd_wasm_recorder: () => "2775bc33cdba5c03f27ade88929e4fdaf4b4c582cc3952198fb551b59541422e",
      bloxd_wasm_anim: () => "70063f4837211665774447f408deefe4678a8f5e792ddcf5187eb1ba64be142f",
      bloxd_wasm_textures: () => "6b2065e443e650047a940883eaf075d2749daed9964ef622b7e96432f1c0c8b1",
      bloxd_wasm_shader_pack: () => "90a9cbfbe256edc10cec287ff1dfdba1125031ab0d4dcf3f4270800ba2f9cb4a"
    };
    var bC = ZC(4635);

    function nC(CC) {
      const zC = Object.prototype.hasOwnProperty.call(wC, CC) ? wC[CC]() : void 0;
      if (void 0 !== zC) return {
        sha256: zC,
        onMismatch: bC.w
      };
      throw new QC.h(`${CC} has no release digest, so this build refuses it`)
    }
  },
  6639: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => AC,
      f: () => xC,
      g: () => GC,
      h: () => PC
    });
    var QC = ZC(6646);
    const wC = 6,
      bC = 3,
      nC = 1,
      fC = 2,
      oC = 4,
      qC = 8,
      FC = 16,
      WC = 32,
      NC = 64,
      MC = 128,
      gC = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function SC(CC) {
      if (!CC) return 0;
      const zC = gC.indexOf(CC);
      if (zC <= 0) throw new Error(`"${CC}" is not a shader pack hook function`);
      return zC
    }

    function pC(CC) {
      if (0 === CC) return null;
      const zC = gC[CC];
      if (void 0 === zC) throw new Error(`${CC} is not a shader pack hook function id`);
      return zC
    }

    function PC(CC) {
      const zC = QC.e.length;
      return {
        strict: CC >= zC,
        program: QC.e[CC % zC]
      }
    }

    function GC(CC) {
      return Number(CC.strict) * QC.e.length + QC.e.indexOf(CC.program)
    }

    function RC(CC) {
      return "" === CC ? [] : CC.split(" ")
    }

    function AC(CC) {
      const zC = {
        variantFlags: new Uint8Array(wC),
        hooks: new Uint8Array(wC * bC),
        moduleCodes: Array(wC).fill(""),
        reads: Array(2 * wC).fill("")
      };
      for (const ZC of CC) {
        const CC = GC(ZC.key),
          QC = (CC, zC) => null === ZC.hooks.surface || ZC.reads.fragment.includes(CC) ? 0 : zC;
        zC.variantFlags[CC] = (ZC.sceneDepth ? nC : 0) | (ZC.movesVertices ? fC : 0) | (ZC.sunShadow ? oC : 0) | (ZC.airShadow ? qC : 0) | (ZC.discards ? FC : 0) | QC("localPosition", WC) | QC("enchantSpeed", NC) | QC("enchantTier", MC), zC.hooks[CC * bC] = SC(ZC.hooks.vertex), zC.hooks[CC * bC + 1] = SC(ZC.hooks.surface), zC.hooks[CC * bC + 2] = SC(ZC.hooks.light), zC.moduleCodes[CC] = ZC.moduleCode, zC.reads[2 * CC] = ZC.reads.vertex.join(" "), zC.reads[2 * CC + 1] = ZC.reads.fragment.join(" ")
      }
      return zC
    }

    function xC(CC) {
      const {
        hooks: zC,
        moduleCodes: ZC,
        reads: QC
      } = CC;
      return Array.from(CC.variantFlags, ((CC, wC) => {
        const WC = wC * bC;
        return {
          key: PC(wC),
          hooks: {
            vertex: pC(zC[WC]),
            surface: pC(zC[WC + 1]),
            light: pC(zC[WC + 2])
          },
          moduleCode: ZC[wC],
          sceneDepth: 0 !== (CC & nC),
          sunShadow: 0 !== (CC & oC),
          airShadow: 0 !== (CC & qC),
          movesVertices: 0 !== (CC & fC),
          discards: 0 !== (CC & FC),
          reads: {
            vertex: RC(QC[2 * wC]),
            fragment: RC(QC[2 * wC + 1])
          }
        }
      }))
    }
  },
  6646: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => nC,
      m: () => fC,
      n: () => wC,
      r: () => bC
    });
    const QC = ["terrain", "liquid", "model"];

    function wC() {
      const CC = [];
      for (const zC of [!1, !0])
        for (const ZC of QC) CC.push({
          strict: zC,
          program: ZC
        });
      return CC
    }

    function bC(CC) {
      return `${CC.strict?"strict":"allow"}.${CC.program}`
    }

    function nC(CC) {
      return !CC.hooks.vertex && !CC.hooks.surface && !CC.hooks.light
    }

    function fC(CC, zC) {
      return "off" !== zC && (null === CC || CC.some((CC => CC.key.strict === ("strict" === zC) && !nC(CC))))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);