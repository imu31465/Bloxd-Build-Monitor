export const id = 133;
export const ids = [133];
export const modules = {
  6645: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadPageShaderPackCompiler: () => Uz
    });
    var pD = {};
    wD.r(pD), wD.d(pD, {
      EsD: () => sD,
      LDD: () => KD,
      default: () => oD,
      QsD: () => rD,
      XsD: () => LD,
      initSync: () => eD,
      fA: () => cD,
      RpD: () => gD,
      VsD: () => RD,
      CsD: () => AD,
      Kl: () => UD,
      xsD: () => fD,
      qS: () => ID,
      TsD: () => BD
    });
    class sD {
      static __wrap(DD) {
        const zD = Object.create(sD.prototype);
        return zD.__wbg_ptr = DD, hD.register(zD, zD.__wbg_ptr, zD), zD
      }
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        yD.YEN2(DD, 0)
      }
      get bsD() {
        let DD, zD;
        try {
          const wD = yD.GNhq(this.__wbg_ptr);
          return DD = wD[0], zD = wD[1], QD(wD[0], wD[1])
        } finally {
          yD.yQTQ(DD, zD, 1)
        }
      }
      get features() {
        const DD = yD.NW8P(this.__wbg_ptr);
        var zD = MD(DD[0], DD[1]);
        return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
      }
      get hooks() {
        const DD = yD.rgfl(this.__wbg_ptr);
        var zD = OD(DD[0], DD[1]).slice();
        return yD.yQTQ(DD[0], 1 * DD[1], 1), zD
      }
      mapValidationMessage(DD, zD, wD, pD, sD) {
        let KD, rD;
        try {
          const gD = yD.aEzN(this.__wbg_ptr, DD, zD, wD, nD(pD), nD(sD));
          var LD = gD[0],
            cD = gD[1];
          if (gD[3]) throw LD = 0, cD = 0, dD(gD[2]);
          return KD = LD, rD = cD, QD(LD, cD)
        } finally {
          yD.yQTQ(KD, rD, 1)
        }
      }
      get moduleCodes() {
        const DD = yD.aRAI(this.__wbg_ptr);
        var zD = MD(DD[0], DD[1]);
        return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
      }
      get jsD() {
        let DD, zD;
        try {
          const wD = yD.BulD(this.__wbg_ptr);
          return DD = wD[0], zD = wD[1], QD(wD[0], wD[1])
        } finally {
          yD.yQTQ(DD, zD, 1)
        }
      }
      get reads() {
        const DD = yD.Jgsb(this.__wbg_ptr);
        var zD = MD(DD[0], DD[1]);
        return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
      }
      get validationModuleCodes() {
        const DD = yD.DqW9(this.__wbg_ptr);
        var zD = MD(DD[0], DD[1]);
        return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
      }
      get validationModuleKeys() {
        const DD = yD.iZzo(this.__wbg_ptr);
        var zD = OD(DD[0], DD[1]).slice();
        return yD.yQTQ(DD[0], 1 * DD[1], 1), zD
      }
      get variantFlags() {
        const DD = yD.lAP6(this.__wbg_ptr);
        var zD = OD(DD[0], DD[1]).slice();
        return yD.yQTQ(DD[0], 1 * DD[1], 1), zD
      }
    }

    function KD(DD, zD, wD, pD, KD, rD, LD) {
      const cD = jD(DD, yD.lieu),
        gD = kD,
        RD = jD(zD, yD.lieu),
        AD = kD,
        UD = jD(wD, yD.lieu),
        fD = kD,
        ID = bD(pD, yD.lieu),
        BD = kD,
        GD = jD(KD, yD.lieu),
        hD = kD,
        nD = jD(rD, yD.lieu),
        MD = kD,
        OD = jD(LD, yD.lieu),
        JD = kD,
        ED = yD.lK0t(cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD);
      if (ED[2]) throw dD(ED[1]);
      return sD.__wrap(ED[0])
    }

    function rD() {
      const DD = yD.KYtr();
      var zD = MD(DD[0], DD[1]);
      return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
    }

    function LD() {
      const DD = yD.jV3D();
      var zD = MD(DD[0], DD[1]);
      return yD.yQTQ(DD[0], 4 * DD[1], 4), zD
    }

    function cD() {
      yD.fnK7()
    }

    function gD(DD, zD, wD, pD, sD) {
      let KD, rD;
      try {
        const gD = jD(DD, yD.lieu),
          RD = kD,
          AD = bD(zD, yD.lieu),
          UD = kD,
          fD = jD(wD, yD.lieu),
          ID = kD,
          BD = bD(pD, yD.lieu),
          GD = kD,
          hD = function(DD, zD) {
            const wD = zD(1 * DD.length, 1) >>> 0;
            return PD().set(DD, wD / 1), kD = DD.length, wD
          }(sD, yD.lieu),
          nD = kD,
          MD = yD.heli(gD, RD, AD, UD, fD, ID, BD, GD, hD, nD);
        var LD = MD[0],
          cD = MD[1];
        if (MD[3]) throw LD = 0, cD = 0, dD(MD[2]);
        return KD = LD, rD = cD, QD(LD, cD)
      } finally {
        yD.yQTQ(KD, rD, 1)
      }
    }

    function RD() {
      let DD, zD;
      try {
        const wD = yD.pi1s();
        return DD = wD[0], zD = wD[1], QD(wD[0], wD[1])
      } finally {
        yD.yQTQ(DD, zD, 1)
      }
    }

    function AD(DD) {
      let zD, wD;
      try {
        const KD = yD.F6Kj(DD);
        var pD = KD[0],
          sD = KD[1];
        if (KD[3]) throw pD = 0, sD = 0, dD(KD[2]);
        return zD = pD, wD = sD, QD(pD, sD)
      } finally {
        yD.yQTQ(zD, wD, 1)
      }
    }

    function UD() {
      return yD.OZhC() >>> 0
    }

    function fD() {
      let DD, zD;
      try {
        const wD = yD.r2Te();
        return DD = wD[0], zD = wD[1], QD(wD[0], wD[1])
      } finally {
        yD.yQTQ(DD, zD, 1)
      }
    }

    function ID(DD, zD) {
      let wD, pD;
      try {
        const rD = jD(DD, yD.lieu),
          LD = kD,
          cD = bD(zD, yD.lieu),
          gD = kD,
          RD = yD.p0nD(rD, LD, cD, gD);
        var sD = RD[0],
          KD = RD[1];
        if (RD[3]) throw sD = 0, KD = 0, dD(RD[2]);
        return wD = sD, pD = KD, QD(sD, KD)
      } finally {
        yD.yQTQ(wD, pD, 1)
      }
    }

    function BD(DD) {
      let zD, wD;
      try {
        const KD = yD.r6gy(nD(DD));
        var pD = KD[0],
          sD = KD[1];
        if (KD[3]) throw pD = 0, sD = 0, dD(KD[2]);
        return zD = pD, wD = sD, QD(pD, sD)
      } finally {
        yD.yQTQ(zD, wD, 1)
      }
    }

    function GD() {
      return {
        __proto__: null,
        pK50: {
          __proto__: null,
          IHd4: function(DD, zD) {
            return nD(Error(QD(DD, zD)))
          },
          higc: function(DD) {
            return null === CD(DD)
          },
          W0OS: function(DD) {
            return "string" === typeof CD(DD)
          },
          aHcP: function(DD, zD) {
            const wD = CD(zD),
              pD = "string" === typeof wD ? wD : void 0;
            var sD, KD = void 0 === (sD = pD) || null === sD ? 0 : function(DD, zD, wD) {
                if (void 0 === wD) {
                  const wD = WD.encode(DD),
                    pD = zD(wD.length, 1) >>> 0;
                  return PD().subarray(pD, pD + wD.length).set(wD), kD = wD.length, pD
                }
                let pD = DD.length,
                  sD = zD(pD, 1) >>> 0;
                const KD = PD();
                let rD = 0;
                for (; rD < pD; rD++) {
                  const zD = DD.charCodeAt(rD);
                  if (zD > 127) break;
                  KD[sD + rD] = zD
                }
                if (rD !== pD) {
                  0 !== rD && (DD = DD.slice(rD)), sD = wD(sD, pD, pD = rD + 3 * DD.length, 1) >>> 0;
                  const zD = PD().subarray(sD + rD, sD + pD);
                  rD += WD.encodeInto(DD, zD).written, sD = wD(sD, pD, rD, 1) >>> 0
                }
                return kD = rD, sD
              }(pD, yD.lieu, yD.LRsF),
              rD = kD;
            ED().setInt32(DD + 4, rD, !0), ED().setInt32(DD + 0, KD, !0)
          },
          TsiV: function(DD, zD) {
            throw new Error(QD(DD, zD))
          },
          y14F: function(DD, zD) {
            return CD(DD).charCodeAt(zD >>> 0)
          },
          ta0F: function(DD, zD) {
            console.error(QD(DD, zD))
          },
          bWwl: function(DD) {
            return CD(DD).length
          },
          tCS7: function(DD, zD) {
            return nD(QD(DD, zD))
          },
          TfRw: function(DD) {
            dD(DD)
          }
        }
      }
    }
    Symbol.dispose && (sD.prototype[Symbol.dispose] = sD.prototype.free);
    const hD = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => yD.YEN2(DD, 1)));

    function nD(DD) {
      TD === xD.length && xD.push(xD.length + 1);
      const zD = TD;
      return TD = xD[zD], xD[zD] = DD, zD
    }

    function MD(DD, zD) {
      DD >>>= 0;
      const wD = ED(),
        pD = [];
      for (let sD = DD; sD < DD + 4 * zD; sD += 4) pD.push(dD(wD.getUint32(sD, !0)));
      return pD
    }

    function OD(DD, zD) {
      return DD >>>= 0, PD().subarray(DD / 1, DD / 1 + zD)
    }
    let JD = null;

    function ED() {
      return null !== JD && JD.buffer === yD.memory.buffer || (JD = new DataView(yD.memory.buffer)), JD
    }

    function QD(DD, zD) {
      return function(DD, zD) {
        lD += zD, lD >= iD && (SD = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), SD.decode(), lD = zD);
        return SD.decode(PD().subarray(DD, DD + zD))
      }(DD >>> 0, zD)
    }
    let XD = null;
    let VD = null;

    function PD() {
      return null !== VD && 0 !== VD.byteLength || (VD = new Uint8Array(yD.memory.buffer)), VD
    }

    function CD(DD) {
      return xD[DD]
    }
    let xD = new Array(1024).fill(void 0);
    xD.push(void 0, null, !0, !1);
    let TD = xD.length;

    function bD(DD, zD) {
      const wD = zD(4 * DD.length, 4) >>> 0;
      return (null !== XD && 0 !== XD.byteLength || (XD = new Uint32Array(yD.memory.buffer)), XD).set(DD, wD / 4), kD = DD.length, wD
    }

    function jD(DD, zD) {
      const wD = zD(4 * DD.length, 4) >>> 0,
        pD = ED();
      for (let sD = 0; sD < DD.length; sD++) pD.setUint32(wD + 4 * sD, nD(DD[sD]), !0);
      return kD = DD.length, wD
    }

    function dD(DD) {
      const zD = CD(DD);
      return function(DD) {
        DD < 1028 || (xD[DD] = TD, TD = DD)
      }(DD), zD
    }
    let SD = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    SD.decode();
    const iD = 2146435072;
    let lD = 0;
    const WD = new TextEncoder;
    "encodeInto" in WD || (WD.encodeInto = function(DD, zD) {
      const wD = WD.encode(DD);
      return zD.set(wD), {
        read: DD.length,
        written: wD.length
      }
    });
    let ND, ZD, yD, kD = 0;

    function mD(DD, zD) {
      return ZD = DD, yD = DD.exports, ND = zD, JD = null, XD = null, VD = null, yD.BSII(), yD
    }

    function eD(DD) {
      if (void 0 !== yD) return yD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zD = GD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return mD(new WebAssembly.Instance(DD, zD), DD)
    }
    async function oD(DD) {
      if (void 0 !== yD) return yD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zD = GD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: wD,
        module: pD
      } = await async function(DD, zD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, zD)
          } catch (wD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw wD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wD)
          }
          const pD = await DD.arrayBuffer();
          return await WebAssembly.instantiate(pD, zD)
        } {
          const wD = await WebAssembly.instantiate(DD, zD);
          return wD instanceof WebAssembly.Instance ? {
            instance: wD,
            module: DD
          } : wD
        }
      }(await DD, zD);
      return mD(wD, pD)
    }
    var aD = wD(2868),
      uD = wD(6653);
    class vD extends Error {
      stage;
      constructor(DD, zD) {
        super((0, aD.A)(DD, zD), {
          cause: zD
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = DD
      }
    }
    let tD = null,
      FD = null;

    function YD() {
      return tD ? Promise.resolve(tD) : (FD || (FD = async function() {
        let DD;
        try {
          DD = await (0, aD.B)(new wD.U(wD(6659)), (0, uD.d)("bloxd_wasm_shader_pack"))
        } catch (zD) {
          throw new vD((0, aD.G)(zD), zD)
        }
        try {
          await oD({
            module_or_path: DD
          })
        } catch (zD) {
          throw new vD("instantiate", zD)
        }
        return tD = pD, tD
      }(), FD.then(void 0, (() => {
        FD = null
      }))), FD)
    }
    var HD = wD(6670);

    function qD(DD) {
      let [zD, wD, pD, sD] = DD;
      const KD = {
        file: zD,
        line: wD,
        message: pD
      };
      return sD && (KD.variants = sD.map(HD.h)), KD
    }

    function Dz(DD) {
      return JSON.parse(DD).map(qD)
    }

    function zz(DD, zD) {
      if (!Number.isInteger(DD) || DD < 0 || DD > 4294967295) throw new Error(`${zD} ${DD} is not a whole number from 0 to 4294967295`);
      return DD
    }

    function wz(DD) {
      return [DD.named.map((DD => DD.name)), Uint32Array.from(DD.named, (DD => zz(DD.id, "Texture ID")))]
    }
    const pz = new WeakMap;
    const sz = new WeakMap,
      Kz = new WeakSet;

    function rz(DD, zD) {
      if (Kz.has(DD)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return zD()
      } catch (wD) {
        throw wD instanceof WebAssembly.RuntimeError && Kz.add(DD), wD
      }
    }

    function Lz(DD) {
      let zD = sz.get(DD);
      if (!zD) {
        let wD, pD;
        zD = {
          LDD: (zD, wD) => rz(DD, (() => function(DD, zD, wD) {
            const pD = DD.LDD(zD.map((DD => DD.path)), zD.map((DD => DD.source)), ...wz(wD), wD.aliases.map((DD => DD.name)), wD.aliases.map((DD => DD.texture)), wD.aliases.map((DD => DD.kind)));
            let sD = !1;
            try {
              const DD = pD.validationModuleCodes,
                zD = Array.from(pD.validationModuleKeys, ((zD, wD) => ({
                  key: (0, HD.h)(zD),
                  code: DD[wD]
                }))),
                wD = {
                  errors: Dz(pD.bsD),
                  offInStrict: Dz(pD.jsD),
                  variants: (0, HD.e)(pD),
                  validationModules: zD,
                  features: pD.features
                };
              return zD.forEach(((DD, zD) => {
                pz.set(DD, {
                  pack: pD,
                  index: zD
                })
              })), sD = zD.length > 0, wD
            } finally {
              sD || pD.free()
            }
          }(DD, zD, wD))),
          mapValidationMessage: (zD, wD) => {
            const pD = pz.get(zD);
            if (!pD) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return qD(JSON.parse(rz(DD, (() => pD.pack.mapValidationMessage(pD.index, wD.lineNum, wD.linePos, wD.message, wD.type)))))
          },
          RpD: zD => rz(DD, (() => function(DD, zD) {
            const wD = new Int32Array(zD.length),
              pD = [];
            return zD.forEach(((DD, zD) => {
              wD[zD] = DD.variants ? DD.variants.length : -1;
              for (const wD of DD.variants ?? []) pD.push((0, HD.f)(wD))
            })), Dz(DD.RpD(zD.map((DD => DD.file)), Uint32Array.from(zD, (DD => zz(DD.line, "Diagnostic line"))), zD.map((DD => DD.message)), wD, Uint8Array.from(pD)))
          }(DD, zD))),
          qS: zD => rz(DD, (() => DD.qS(...wz(zD)))),
          get SHADER_PACK_HEADER_VERSION() {
            return wD ??= rz(DD, (() => DD.xsD())), wD
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return pD ??= rz(DD, (() => {
              const zD = DD.XsD();
              return DD.QsD().map(((DD, wD) => ({
                path: DD,
                source: zD[wD]
              })))
            })), pD
          },
          TsD: zD => rz(DD, (() => DD.TsD(zD))),
          resolveHeader: zD => rz(DD, (() => DD.CsD((0, HD.f)(zD)))),
          VsD: () => rz(DD, (() => DD.VsD()))
        }, sz.set(DD, zD)
      }
      return zD
    }
    var cz = wD(3205),
      gz = wD(6664);
    const Rz = "bloxdShaderPackWasmFailureReported";
    let Az = null;

    function Uz() {
      return Az ??= async function() {
        if ("undefined" === typeof WebAssembly) return fz("unsupported", "This browser has no WebAssembly"), null;
        const DD = (0, gz.loadShaderPackTextures)().then((() => !0), (DD => (console.error("Could not load the shader pack textures, so shader packs can't run", DD), !1)));
        try {
          const zD = await async function() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YD;
            return Lz(await DD())
          }();
          return await DD ? zD : null
        } catch (zD) {
          const DD = zD instanceof Error ? zD.message : String(zD);
          return fz(cz.e[zD instanceof vD ? zD.stage : "instantiate"], DD), null
        }
      }(), Az
    }

    function fz(DD, zD) {
      (0, cz.j)(Rz, `Shader pack wasm ${DD}, so shader packs can't run: ${zD}`, zD, `shader_pack_${DD}`)
    }
  },
  6659: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_shader_pack_bg.bccfa67f1d2e1d222959.wasm"
  },
  6653: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(2868);
    const sD = {
      bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
      bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
      bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
      bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
      bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
      bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
      bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
      bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
      bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
      bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
      bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
      bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
    };
    var KD = wD(4722);

    function rD(DD) {
      const zD = Object.prototype.hasOwnProperty.call(sD, DD) ? sD[DD]() : void 0;
      if (void 0 !== zD) return {
        sha256: zD,
        onMismatch: KD.B
      };
      throw new pD.l(`${DD} has no release digest, so this build refuses it`)
    }
  },
  6670: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => OD,
      e: () => JD,
      f: () => nD,
      h: () => hD
    });
    var pD = wD(6678);
    const sD = 6,
      KD = 3,
      rD = 1,
      LD = 2,
      cD = 4,
      gD = 8,
      RD = 16,
      AD = 32,
      UD = 64,
      fD = 128,
      ID = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function BD(DD) {
      if (!DD) return 0;
      const zD = ID.indexOf(DD);
      if (zD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
      return zD
    }

    function GD(DD) {
      if (0 === DD) return null;
      const zD = ID[DD];
      if (void 0 === zD) throw new Error(`${DD} is not a shader pack hook function id`);
      return zD
    }

    function hD(DD) {
      const zD = pD.c.length;
      return {
        strict: DD >= zD,
        program: pD.c[DD % zD]
      }
    }

    function nD(DD) {
      return Number(DD.strict) * pD.c.length + pD.c.indexOf(DD.program)
    }

    function MD(DD) {
      return "" === DD ? [] : DD.split(" ")
    }

    function OD(DD) {
      const zD = {
        variantFlags: new Uint8Array(sD),
        hooks: new Uint8Array(sD * KD),
        moduleCodes: Array(sD).fill(""),
        reads: Array(2 * sD).fill("")
      };
      for (const wD of DD) {
        const DD = nD(wD.key),
          pD = (DD, zD) => null === wD.hooks.surface || wD.reads.fragment.includes(DD) ? 0 : zD;
        zD.variantFlags[DD] = (wD.sceneDepth ? rD : 0) | (wD.movesVertices ? LD : 0) | (wD.sunShadow ? cD : 0) | (wD.airShadow ? gD : 0) | (wD.discards ? RD : 0) | pD("localPosition", AD) | pD("enchantSpeed", UD) | pD("enchantTier", fD), zD.hooks[DD * KD] = BD(wD.hooks.vertex), zD.hooks[DD * KD + 1] = BD(wD.hooks.surface), zD.hooks[DD * KD + 2] = BD(wD.hooks.light), zD.moduleCodes[DD] = wD.moduleCode, zD.reads[2 * DD] = wD.reads.vertex.join(" "), zD.reads[2 * DD + 1] = wD.reads.fragment.join(" ")
      }
      return zD
    }

    function JD(DD) {
      const {
        hooks: zD,
        moduleCodes: wD,
        reads: pD
      } = DD;
      return Array.from(DD.variantFlags, ((DD, sD) => {
        const AD = sD * KD;
        return {
          key: hD(sD),
          hooks: {
            vertex: GD(zD[AD]),
            surface: GD(zD[AD + 1]),
            light: GD(zD[AD + 2])
          },
          moduleCode: wD[sD],
          sceneDepth: 0 !== (DD & rD),
          sunShadow: 0 !== (DD & cD),
          airShadow: 0 !== (DD & gD),
          movesVertices: 0 !== (DD & LD),
          discards: 0 !== (DD & RD),
          reads: {
            vertex: MD(pD[2 * sD]),
            fragment: MD(pD[2 * sD + 1])
          }
        }
      }))
    }
  },
  6678: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      d: () => rD,
      f: () => LD,
      h: () => sD,
      l: () => KD
    });
    const pD = ["terrain", "liquid", "model"];

    function sD() {
      const DD = [];
      for (const zD of [!1, !0])
        for (const wD of pD) DD.push({
          strict: zD,
          program: wD
        });
      return DD
    }

    function KD(DD) {
      return `${DD.strict?"strict":"allow"}.${DD.program}`
    }

    function rD(DD) {
      return !DD.hooks.vertex && !DD.hooks.surface && !DD.hooks.light
    }

    function LD(DD, zD) {
      return "off" !== zD && (null === DD || DD.some((DD => DD.key.strict === ("strict" === zD) && !rD(DD))))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);