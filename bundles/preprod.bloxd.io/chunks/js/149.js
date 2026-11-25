export const id = 149;
export const ids = [149];
export const modules = {
  7111: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      loadPageShaderPackCompiler: () => mr
    });
    var OM = {};
    iM.r(OM), iM.d(OM, {
      mSM: () => SM,
      zMM: () => jM,
      default: () => FM,
      HSM: () => aM,
      hSM: () => PM,
      initSync: () => vM,
      HQ: () => nM,
      ciM: () => QM,
      JSM: () => zM,
      dSM: () => LM,
      qD: () => mM,
      ySM: () => HM,
      KD: () => hM,
      lSM: () => JM
    });
    class SM {
      static __wrap(MM) {
        const rM = Object.create(SM.prototype);
        return rM.__wbg_ptr = MM, yM.register(rM, rM.__wbg_ptr, rM), rM
      }
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        NM.OlPM(MM, 0)
      }
      get USM() {
        let MM, rM;
        try {
          const iM = NM.pZJJ(this.__wbg_ptr);
          return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
        } finally {
          NM.sKiU(MM, rM, 1)
        }
      }
      get features() {
        const MM = NM.VdT8(this.__wbg_ptr);
        var rM = EM(MM[0], MM[1]);
        return NM.sKiU(MM[0], 4 * MM[1], 4), rM
      }
      get hooks() {
        const MM = NM.Vifg(this.__wbg_ptr);
        var rM = UM(MM[0], MM[1]).slice();
        return NM.sKiU(MM[0], 1 * MM[1], 1), rM
      }
      mapValidationMessage(MM, rM, iM, OM, SM) {
        let jM, aM;
        try {
          const QM = NM.ZZHJ(this.__wbg_ptr, MM, rM, iM, lM(OM), lM(SM));
          var PM = QM[0],
            nM = QM[1];
          if (QM[3]) throw PM = 0, nM = 0, sM(QM[2]);
          return jM = PM, aM = nM, eM(PM, nM)
        } finally {
          NM.sKiU(jM, aM, 1)
        }
      }
      get moduleCodes() {
        const MM = NM.ZFKQ(this.__wbg_ptr);
        var rM = EM(MM[0], MM[1]);
        return NM.sKiU(MM[0], 4 * MM[1], 4), rM
      }
      get GSM() {
        let MM, rM;
        try {
          const iM = NM.Js5b(this.__wbg_ptr);
          return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
        } finally {
          NM.sKiU(MM, rM, 1)
        }
      }
      get reads() {
        const MM = NM.bQFX(this.__wbg_ptr);
        var rM = EM(MM[0], MM[1]);
        return NM.sKiU(MM[0], 4 * MM[1], 4), rM
      }
      get validationModuleCodes() {
        const MM = NM.oXQq(this.__wbg_ptr);
        var rM = EM(MM[0], MM[1]);
        return NM.sKiU(MM[0], 4 * MM[1], 4), rM
      }
      get validationModuleKeys() {
        const MM = NM.Ur8S(this.__wbg_ptr);
        var rM = UM(MM[0], MM[1]).slice();
        return NM.sKiU(MM[0], 1 * MM[1], 1), rM
      }
      get variantFlags() {
        const MM = NM.HLh6(this.__wbg_ptr);
        var rM = UM(MM[0], MM[1]).slice();
        return NM.sKiU(MM[0], 1 * MM[1], 1), rM
      }
    }

    function jM(MM, rM, iM, OM, jM, aM, PM) {
      const nM = WM(MM, NM.DjZi),
        QM = AM,
        zM = WM(rM, NM.DjZi),
        LM = AM,
        mM = WM(iM, NM.DjZi),
        HM = AM,
        hM = pM(OM, NM.DjZi),
        JM = AM,
        dM = WM(jM, NM.DjZi),
        yM = AM,
        lM = WM(aM, NM.DjZi),
        EM = AM,
        UM = WM(PM, NM.DjZi),
        GM = AM,
        CM = NM.Gun2(nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM);
      if (CM[2]) throw sM(CM[1]);
      return SM.__wrap(CM[0])
    }

    function aM() {
      const MM = NM.I93C();
      var rM = EM(MM[0], MM[1]);
      return NM.sKiU(MM[0], 4 * MM[1], 4), rM
    }

    function PM() {
      const MM = NM.xU0n();
      var rM = EM(MM[0], MM[1]);
      return NM.sKiU(MM[0], 4 * MM[1], 4), rM
    }

    function nM() {
      NM.Z87a()
    }

    function QM(MM, rM, iM, OM, SM) {
      let jM, aM;
      try {
        const QM = WM(MM, NM.DjZi),
          zM = AM,
          LM = pM(rM, NM.DjZi),
          mM = AM,
          HM = WM(iM, NM.DjZi),
          hM = AM,
          JM = pM(OM, NM.DjZi),
          dM = AM,
          yM = function(MM, rM) {
            const iM = rM(1 * MM.length, 1) >>> 0;
            return tM().set(MM, iM / 1), AM = MM.length, iM
          }(SM, NM.DjZi),
          lM = AM,
          EM = NM.ZbRp(QM, zM, LM, mM, HM, hM, JM, dM, yM, lM);
        var PM = EM[0],
          nM = EM[1];
        if (EM[3]) throw PM = 0, nM = 0, sM(EM[2]);
        return jM = PM, aM = nM, eM(PM, nM)
      } finally {
        NM.sKiU(jM, aM, 1)
      }
    }

    function zM() {
      let MM, rM;
      try {
        const iM = NM.CrML();
        return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
      } finally {
        NM.sKiU(MM, rM, 1)
      }
    }

    function LM(MM) {
      let rM, iM;
      try {
        const jM = NM.OAr6(MM);
        var OM = jM[0],
          SM = jM[1];
        if (jM[3]) throw OM = 0, SM = 0, sM(jM[2]);
        return rM = OM, iM = SM, eM(OM, SM)
      } finally {
        NM.sKiU(rM, iM, 1)
      }
    }

    function mM() {
      return NM.ueLP() >>> 0
    }

    function HM() {
      let MM, rM;
      try {
        const iM = NM.yD5Q();
        return MM = iM[0], rM = iM[1], eM(iM[0], iM[1])
      } finally {
        NM.sKiU(MM, rM, 1)
      }
    }

    function hM(MM, rM) {
      let iM, OM;
      try {
        const aM = WM(MM, NM.DjZi),
          PM = AM,
          nM = pM(rM, NM.DjZi),
          QM = AM,
          zM = NM.tXqn(aM, PM, nM, QM);
        var SM = zM[0],
          jM = zM[1];
        if (zM[3]) throw SM = 0, jM = 0, sM(zM[2]);
        return iM = SM, OM = jM, eM(SM, jM)
      } finally {
        NM.sKiU(iM, OM, 1)
      }
    }

    function JM(MM) {
      let rM, iM;
      try {
        const jM = NM.MkYg(lM(MM));
        var OM = jM[0],
          SM = jM[1];
        if (jM[3]) throw OM = 0, SM = 0, sM(jM[2]);
        return rM = OM, iM = SM, eM(OM, SM)
      } finally {
        NM.sKiU(rM, iM, 1)
      }
    }

    function dM() {
      return {
        __proto__: null,
        Z6AG: {
          __proto__: null,
          PmwO: function(MM, rM) {
            return lM(Error(eM(MM, rM)))
          },
          kjdt: function(MM) {
            return null === gM(MM)
          },
          fx3x: function(MM) {
            return "string" === typeof gM(MM)
          },
          B2g5: function(MM, rM) {
            const iM = gM(rM),
              OM = "string" === typeof iM ? iM : void 0;
            var SM, jM = void 0 === (SM = OM) || null === SM ? 0 : function(MM, rM, iM) {
                if (void 0 === iM) {
                  const iM = oM.encode(MM),
                    OM = rM(iM.length, 1) >>> 0;
                  return tM().subarray(OM, OM + iM.length).set(iM), AM = iM.length, OM
                }
                let OM = MM.length,
                  SM = rM(OM, 1) >>> 0;
                const jM = tM();
                let aM = 0;
                for (; aM < OM; aM++) {
                  const rM = MM.charCodeAt(aM);
                  if (rM > 127) break;
                  jM[SM + aM] = rM
                }
                if (aM !== OM) {
                  0 !== aM && (MM = MM.slice(aM)), SM = iM(SM, OM, OM = aM + 3 * MM.length, 1) >>> 0;
                  const rM = tM().subarray(SM + aM, SM + OM);
                  aM += oM.encodeInto(MM, rM).written, SM = iM(SM, OM, aM, 1) >>> 0
                }
                return AM = aM, SM
              }(OM, NM.DjZi, NM.mxHZ),
              aM = AM;
            CM().setInt32(MM + 4, aM, !0), CM().setInt32(MM + 0, jM, !0)
          },
          K28G: function(MM, rM) {
            throw new Error(eM(MM, rM))
          },
          deBA: function(MM, rM) {
            return gM(MM).charCodeAt(rM >>> 0)
          },
          NbBR: function(MM, rM) {
            console.error(eM(MM, rM))
          },
          WvCd: function(MM) {
            return gM(MM).length
          },
          uTue: function(MM, rM) {
            return lM(eM(MM, rM))
          },
          i5HW: function(MM) {
            sM(MM)
          }
        }
      }
    }
    Symbol.dispose && (SM.prototype[Symbol.dispose] = SM.prototype.free);
    const yM = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((MM => NM.OlPM(MM, 1)));

    function lM(MM) {
      RM === uM.length && uM.push(uM.length + 1);
      const rM = RM;
      return RM = uM[rM], uM[rM] = MM, rM
    }

    function EM(MM, rM) {
      MM >>>= 0;
      const iM = CM(),
        OM = [];
      for (let SM = MM; SM < MM + 4 * rM; SM += 4) OM.push(sM(iM.getUint32(SM, !0)));
      return OM
    }

    function UM(MM, rM) {
      return MM >>>= 0, tM().subarray(MM / 1, MM / 1 + rM)
    }
    let GM = null;

    function CM() {
      return null !== GM && GM.buffer === NM.memory.buffer || (GM = new DataView(NM.memory.buffer)), GM
    }

    function eM(MM, rM) {
      return function(MM, rM) {
        ZM += rM, ZM >= kM && (DM = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), DM.decode(), ZM = rM);
        return DM.decode(tM().subarray(MM, MM + rM))
      }(MM >>> 0, rM)
    }
    let bM = null;
    let wM = null;

    function tM() {
      return null !== wM && 0 !== wM.byteLength || (wM = new Uint8Array(NM.memory.buffer)), wM
    }

    function gM(MM) {
      return uM[MM]
    }
    let uM = new Array(1024).fill(void 0);
    uM.push(void 0, null, !0, !1);
    let RM = uM.length;

    function pM(MM, rM) {
      const iM = rM(4 * MM.length, 4) >>> 0;
      return (null !== bM && 0 !== bM.byteLength || (bM = new Uint32Array(NM.memory.buffer)), bM).set(MM, iM / 4), AM = MM.length, iM
    }

    function WM(MM, rM) {
      const iM = rM(4 * MM.length, 4) >>> 0,
        OM = CM();
      for (let SM = 0; SM < MM.length; SM++) OM.setUint32(iM + 4 * SM, lM(MM[SM]), !0);
      return AM = MM.length, iM
    }

    function sM(MM) {
      const rM = gM(MM);
      return function(MM) {
        MM < 1028 || (uM[MM] = RM, RM = MM)
      }(MM), rM
    }
    let DM = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    DM.decode();
    const kM = 2146435072;
    let ZM = 0;
    const oM = new TextEncoder;
    "encodeInto" in oM || (oM.encodeInto = function(MM, rM) {
      const iM = oM.encode(MM);
      return rM.set(iM), {
        read: MM.length,
        written: iM.length
      }
    });
    let fM, YM, NM, AM = 0;

    function xM(MM, rM) {
      return YM = MM, NM = MM.exports, fM = rM, GM = null, bM = null, wM = null, NM.itXl(), NM
    }

    function vM(MM) {
      if (void 0 !== NM) return NM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module: MM
      } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rM = dM();
      MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
      return xM(new WebAssembly.Instance(MM, rM), MM)
    }
    async function FM(MM) {
      if (void 0 !== NM) return NM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module_or_path: MM
      } = MM) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rM = dM();
      ("string" === typeof MM || "function" === typeof Request && MM instanceof Request || "function" === typeof URL && MM instanceof URL) && (MM = fetch(MM));
      const {
        instance: iM,
        module: OM
      } = await async function(MM, rM) {
        if ("function" === typeof Response && MM instanceof Response) {
          if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(MM, rM)
          } catch (iM) {
            if (! function(MM) {
                switch (MM) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(MM.type) || "application/wasm" === MM.headers.get("Content-Type")) throw iM;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", iM)
          }
          const OM = await MM.arrayBuffer();
          return await WebAssembly.instantiate(OM, rM)
        } {
          const iM = await WebAssembly.instantiate(MM, rM);
          return iM instanceof WebAssembly.Instance ? {
            instance: iM,
            module: MM
          } : iM
        }
      }(await MM, rM);
      return xM(iM, OM)
    }
    var BM = iM(3188),
      XM = iM(7116);
    class IM extends Error {
      stage;
      constructor(MM, rM) {
        super((0, BM.B)(MM, rM), {
          cause: rM
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = MM
      }
    }
    let KM = null,
      qM = null;

    function TM() {
      return KM ? Promise.resolve(KM) : (qM || (qM = async function() {
        let MM;
        try {
          MM = await (0, BM.E)(new iM.U(iM(7118)), (0, XM.b)("bloxd_wasm_shader_pack"))
        } catch (rM) {
          throw new IM((0, BM.J)(rM), rM)
        }
        try {
          await FM({
            module_or_path: MM
          })
        } catch (rM) {
          throw new IM("instantiate", rM)
        }
        return KM = OM, KM
      }(), qM.then(void 0, (() => {
        qM = null
      }))), qM)
    }
    var VM = iM(7124);

    function cM(MM) {
      let [rM, iM, OM, SM] = MM;
      const jM = {
        file: rM,
        line: iM,
        message: OM
      };
      return SM && (jM.variants = SM.map(VM.g)), jM
    }

    function Mr(MM) {
      return JSON.parse(MM).map(cM)
    }

    function rr(MM, rM) {
      if (!Number.isInteger(MM) || MM < 0 || MM > 4294967295) throw new Error(`${rM} ${MM} is not a whole number from 0 to 4294967295`);
      return MM
    }

    function ir(MM) {
      return [MM.named.map((MM => MM.name)), Uint32Array.from(MM.named, (MM => rr(MM.id, "Texture ID")))]
    }
    const Or = new WeakMap;
    const Sr = new WeakMap,
      jr = new WeakSet;

    function ar(MM, rM) {
      if (jr.has(MM)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return rM()
      } catch (iM) {
        throw iM instanceof WebAssembly.RuntimeError && jr.add(MM), iM
      }
    }

    function Pr(MM) {
      let rM = Sr.get(MM);
      if (!rM) {
        let iM, OM;
        rM = {
          zMM: (rM, iM) => ar(MM, (() => function(MM, rM, iM) {
            const OM = MM.zMM(rM.map((MM => MM.path)), rM.map((MM => MM.source)), ...ir(iM), iM.aliases.map((MM => MM.name)), iM.aliases.map((MM => MM.texture)), iM.aliases.map((MM => MM.kind)));
            let SM = !1;
            try {
              const MM = OM.validationModuleCodes,
                rM = Array.from(OM.validationModuleKeys, ((rM, iM) => ({
                  key: (0, VM.g)(rM),
                  code: MM[iM]
                }))),
                iM = {
                  errors: Mr(OM.USM),
                  offInStrict: Mr(OM.GSM),
                  variants: (0, VM.c)(OM),
                  validationModules: rM,
                  features: OM.features
                };
              return rM.forEach(((MM, rM) => {
                Or.set(MM, {
                  pack: OM,
                  index: rM
                })
              })), SM = rM.length > 0, iM
            } finally {
              SM || OM.free()
            }
          }(MM, rM, iM))),
          mapValidationMessage: (rM, iM) => {
            const OM = Or.get(rM);
            if (!OM) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return cM(JSON.parse(ar(MM, (() => OM.pack.mapValidationMessage(OM.index, iM.lineNum, iM.linePos, iM.message, iM.type)))))
          },
          ciM: rM => ar(MM, (() => function(MM, rM) {
            const iM = new Int32Array(rM.length),
              OM = [];
            return rM.forEach(((MM, rM) => {
              iM[rM] = MM.variants ? MM.variants.length : -1;
              for (const iM of MM.variants ?? []) OM.push((0, VM.f)(iM))
            })), Mr(MM.ciM(rM.map((MM => MM.file)), Uint32Array.from(rM, (MM => rr(MM.line, "Diagnostic line"))), rM.map((MM => MM.message)), iM, Uint8Array.from(OM)))
          }(MM, rM))),
          KD: rM => ar(MM, (() => MM.KD(...ir(rM)))),
          get SHADER_PACK_HEADER_VERSION() {
            return iM ??= ar(MM, (() => MM.ySM())), iM
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return OM ??= ar(MM, (() => {
              const rM = MM.hSM();
              return MM.HSM().map(((MM, iM) => ({
                path: MM,
                source: rM[iM]
              })))
            })), OM
          },
          lSM: rM => ar(MM, (() => MM.lSM(rM))),
          resolveHeader: rM => ar(MM, (() => MM.dSM((0, VM.f)(rM)))),
          JSM: () => ar(MM, (() => MM.JSM()))
        }, Sr.set(MM, rM)
      }
      return rM
    }
    var nr = iM(3629),
      Qr = iM(7120);
    const zr = "bloxdShaderPackWasmFailureReported";
    let Lr = null;

    function mr() {
      return Lr ??= async function() {
        if ("undefined" === typeof WebAssembly) return Hr("unsupported", "This browser has no WebAssembly"), null;
        const MM = (0, Qr.loadShaderPackTextures)().then((() => !0), (MM => (console.error("Could not load the shader pack textures, so shader packs can't run", MM), !1)));
        try {
          const rM = await async function() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TM;
            return Pr(await MM())
          }();
          return await MM ? rM : null
        } catch (rM) {
          const MM = rM instanceof Error ? rM.message : String(rM);
          return Hr(nr.e[rM instanceof IM ? rM.stage : "instantiate"], MM), null
        }
      }(), Lr
    }

    function Hr(MM, rM) {
      (0, nr.i)(zr, `Shader pack wasm ${MM}, so shader packs can't run: ${rM}`, rM, `shader_pack_${MM}`)
    }
  },
  7118: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_shader_pack_bg.3abc4329b19aa8a1b898.wasm"
  },
  7116: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(3188);
    const SM = {
      bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
      bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
      bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
      bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
      bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
      bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
      bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
      bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
      bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
      bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
      bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
      bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
    };
    var jM = iM(5069);

    function aM(MM) {
      const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
      if (void 0 !== rM) return {
        sha256: rM,
        onMismatch: jM.B
      };
      throw new OM.f(`${MM} has no release digest, so this build refuses it`)
    }
  },
  7124: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => UM,
      c: () => GM,
      f: () => lM,
      g: () => yM
    });
    var OM = iM(7131);
    const SM = 6,
      jM = 3,
      aM = 1,
      PM = 2,
      nM = 4,
      QM = 8,
      zM = 16,
      LM = 32,
      mM = 64,
      HM = 128,
      hM = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function JM(MM) {
      if (!MM) return 0;
      const rM = hM.indexOf(MM);
      if (rM <= 0) throw new Error(`"${MM}" is not a shader pack hook function`);
      return rM
    }

    function dM(MM) {
      if (0 === MM) return null;
      const rM = hM[MM];
      if (void 0 === rM) throw new Error(`${MM} is not a shader pack hook function id`);
      return rM
    }

    function yM(MM) {
      const rM = OM.e.length;
      return {
        strict: MM >= rM,
        program: OM.e[MM % rM]
      }
    }

    function lM(MM) {
      return Number(MM.strict) * OM.e.length + OM.e.indexOf(MM.program)
    }

    function EM(MM) {
      return "" === MM ? [] : MM.split(" ")
    }

    function UM(MM) {
      const rM = {
        variantFlags: new Uint8Array(SM),
        hooks: new Uint8Array(SM * jM),
        moduleCodes: Array(SM).fill(""),
        reads: Array(2 * SM).fill("")
      };
      for (const iM of MM) {
        const MM = lM(iM.key),
          OM = (MM, rM) => null === iM.hooks.surface || iM.reads.fragment.includes(MM) ? 0 : rM;
        rM.variantFlags[MM] = (iM.sceneDepth ? aM : 0) | (iM.movesVertices ? PM : 0) | (iM.sunShadow ? nM : 0) | (iM.airShadow ? QM : 0) | (iM.discards ? zM : 0) | OM("localPosition", LM) | OM("enchantSpeed", mM) | OM("enchantTier", HM), rM.hooks[MM * jM] = JM(iM.hooks.vertex), rM.hooks[MM * jM + 1] = JM(iM.hooks.surface), rM.hooks[MM * jM + 2] = JM(iM.hooks.light), rM.moduleCodes[MM] = iM.moduleCode, rM.reads[2 * MM] = iM.reads.vertex.join(" "), rM.reads[2 * MM + 1] = iM.reads.fragment.join(" ")
      }
      return rM
    }

    function GM(MM) {
      const {
        hooks: rM,
        moduleCodes: iM,
        reads: OM
      } = MM;
      return Array.from(MM.variantFlags, ((MM, SM) => {
        const LM = SM * jM;
        return {
          key: yM(SM),
          hooks: {
            vertex: dM(rM[LM]),
            surface: dM(rM[LM + 1]),
            light: dM(rM[LM + 2])
          },
          moduleCode: iM[SM],
          sceneDepth: 0 !== (MM & aM),
          sunShadow: 0 !== (MM & nM),
          airShadow: 0 !== (MM & QM),
          movesVertices: 0 !== (MM & PM),
          discards: 0 !== (MM & zM),
          reads: {
            vertex: EM(OM[2 * SM]),
            fragment: EM(OM[2 * SM + 1])
          }
        }
      }))
    }
  },
  7131: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => aM,
      l: () => PM,
      m: () => SM,
      o: () => jM
    });
    const OM = ["terrain", "liquid", "model"];

    function SM() {
      const MM = [];
      for (const rM of [!1, !0])
        for (const iM of OM) MM.push({
          strict: rM,
          program: iM
        });
      return MM
    }

    function jM(MM) {
      return `${MM.strict?"strict":"allow"}.${MM.program}`
    }

    function aM(MM) {
      return !MM.hooks.vertex && !MM.hooks.surface && !MM.hooks.light
    }

    function PM(MM, rM) {
      return "off" !== rM && (null === MM || MM.some((MM => MM.key.strict === ("strict" === rM) && !aM(MM))))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);