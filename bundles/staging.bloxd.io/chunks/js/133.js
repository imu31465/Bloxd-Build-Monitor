export const id = 133;
export const ids = [133];
export const modules = {
  6810: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadPageShaderPackCompiler: () => kH
    });
    var tS = {};
    gS.r(tS), gS.d(tS, {
      otS: () => bS,
      f6: () => XS,
      default: () => MS,
      ltS: () => xS,
      mtS: () => NS,
      initSync: () => BS,
      Xf: () => qS,
      VgS: () => uS,
      etS: () => IS,
      rtS: () => fS,
      cL: () => kS,
      SbS: () => aS,
      dL: () => KS,
      HbS: () => jS
    });
    class bS {
      static __wrap(SS) {
        const HS = Object.create(bS.prototype);
        return HS.__wbg_ptr = SS, CS.register(HS, HS.__wbg_ptr, HS), HS
      }
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, CS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        US.rUSc(SS, 0)
      }
      get gbS() {
        let SS, HS;
        try {
          const gS = US.iIYl(this.__wbg_ptr);
          return SS = gS[0], HS = gS[1], hS(gS[0], gS[1])
        } finally {
          US.mI0Y(SS, HS, 1)
        }
      }
      get features() {
        const SS = US.WSya(this.__wbg_ptr);
        var HS = PS(SS[0], SS[1]);
        return US.mI0Y(SS[0], 4 * SS[1], 4), HS
      }
      get hooks() {
        const SS = US.y0x5(this.__wbg_ptr);
        var HS = QS(SS[0], SS[1]).slice();
        return US.mI0Y(SS[0], 1 * SS[1], 1), HS
      }
      mapValidationMessage(SS, HS, gS, tS, bS) {
        let XS, xS;
        try {
          const uS = US.txcM(this.__wbg_ptr, SS, HS, gS, nS(tS), nS(bS));
          var NS = uS[0],
            qS = uS[1];
          if (uS[3]) throw NS = 0, qS = 0, YS(uS[2]);
          return XS = NS, xS = qS, hS(NS, qS)
        } finally {
          US.mI0Y(XS, xS, 1)
        }
      }
      get moduleCodes() {
        const SS = US.Ypzg(this.__wbg_ptr);
        var HS = PS(SS[0], SS[1]);
        return US.mI0Y(SS[0], 4 * SS[1], 4), HS
      }
      get tbS() {
        let SS, HS;
        try {
          const gS = US.xt7j(this.__wbg_ptr);
          return SS = gS[0], HS = gS[1], hS(gS[0], gS[1])
        } finally {
          US.mI0Y(SS, HS, 1)
        }
      }
      get reads() {
        const SS = US.DBuH(this.__wbg_ptr);
        var HS = PS(SS[0], SS[1]);
        return US.mI0Y(SS[0], 4 * SS[1], 4), HS
      }
      get validationModuleCodes() {
        const SS = US.bUwY(this.__wbg_ptr);
        var HS = PS(SS[0], SS[1]);
        return US.mI0Y(SS[0], 4 * SS[1], 4), HS
      }
      get validationModuleKeys() {
        const SS = US.Ruf1(this.__wbg_ptr);
        var HS = QS(SS[0], SS[1]).slice();
        return US.mI0Y(SS[0], 1 * SS[1], 1), HS
      }
      get variantFlags() {
        const SS = US.c7PH(this.__wbg_ptr);
        var HS = QS(SS[0], SS[1]).slice();
        return US.mI0Y(SS[0], 1 * SS[1], 1), HS
      }
    }

    function XS(SS, HS, gS, tS, XS, xS, NS) {
      const qS = LS(SS, US.K0xj),
        uS = pS,
        IS = LS(HS, US.K0xj),
        fS = pS,
        kS = LS(gS, US.K0xj),
        aS = pS,
        KS = ES(tS, US.K0xj),
        jS = pS,
        GS = LS(XS, US.K0xj),
        CS = pS,
        nS = LS(xS, US.K0xj),
        PS = pS,
        QS = LS(NS, US.K0xj),
        DS = pS,
        wS = US.yBg9(qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS);
      if (wS[2]) throw YS(wS[1]);
      return bS.__wrap(wS[0])
    }

    function xS() {
      const SS = US.Ml0H();
      var HS = PS(SS[0], SS[1]);
      return US.mI0Y(SS[0], 4 * SS[1], 4), HS
    }

    function NS() {
      const SS = US.YNEB();
      var HS = PS(SS[0], SS[1]);
      return US.mI0Y(SS[0], 4 * SS[1], 4), HS
    }

    function qS() {
      US.dHFm()
    }

    function uS(SS, HS, gS, tS, bS) {
      let XS, xS;
      try {
        const uS = LS(SS, US.K0xj),
          IS = pS,
          fS = ES(HS, US.K0xj),
          kS = pS,
          aS = LS(gS, US.K0xj),
          KS = pS,
          jS = ES(tS, US.K0xj),
          GS = pS,
          CS = function(SS, HS) {
            const gS = HS(1 * SS.length, 1) >>> 0;
            return OS().set(SS, gS / 1), pS = SS.length, gS
          }(bS, US.K0xj),
          nS = pS,
          PS = US.AS0z(uS, IS, fS, kS, aS, KS, jS, GS, CS, nS);
        var NS = PS[0],
          qS = PS[1];
        if (PS[3]) throw NS = 0, qS = 0, YS(PS[2]);
        return XS = NS, xS = qS, hS(NS, qS)
      } finally {
        US.mI0Y(XS, xS, 1)
      }
    }

    function IS() {
      let SS, HS;
      try {
        const gS = US.x6tW();
        return SS = gS[0], HS = gS[1], hS(gS[0], gS[1])
      } finally {
        US.mI0Y(SS, HS, 1)
      }
    }

    function fS(SS) {
      let HS, gS;
      try {
        const XS = US.DwSR(SS);
        var tS = XS[0],
          bS = XS[1];
        if (XS[3]) throw tS = 0, bS = 0, YS(XS[2]);
        return HS = tS, gS = bS, hS(tS, bS)
      } finally {
        US.mI0Y(HS, gS, 1)
      }
    }

    function kS() {
      return US.DzlC() >>> 0
    }

    function aS() {
      let SS, HS;
      try {
        const gS = US.E51e();
        return SS = gS[0], HS = gS[1], hS(gS[0], gS[1])
      } finally {
        US.mI0Y(SS, HS, 1)
      }
    }

    function KS(SS, HS) {
      let gS, tS;
      try {
        const xS = LS(SS, US.K0xj),
          NS = pS,
          qS = ES(HS, US.K0xj),
          uS = pS,
          IS = US.jtIK(xS, NS, qS, uS);
        var bS = IS[0],
          XS = IS[1];
        if (IS[3]) throw bS = 0, XS = 0, YS(IS[2]);
        return gS = bS, tS = XS, hS(bS, XS)
      } finally {
        US.mI0Y(gS, tS, 1)
      }
    }

    function jS(SS) {
      let HS, gS;
      try {
        const XS = US.M73S(nS(SS));
        var tS = XS[0],
          bS = XS[1];
        if (XS[3]) throw tS = 0, bS = 0, YS(XS[2]);
        return HS = tS, gS = bS, hS(tS, bS)
      } finally {
        US.mI0Y(HS, gS, 1)
      }
    }

    function GS() {
      return {
        __proto__: null,
        lRry: {
          __proto__: null,
          jpZc: function(SS, HS) {
            return nS(Error(hS(SS, HS)))
          },
          uIx2: function(SS) {
            return null === dS(SS)
          },
          HUsH: function(SS) {
            return "string" === typeof dS(SS)
          },
          o3HP: function(SS, HS) {
            const gS = dS(HS),
              tS = "string" === typeof gS ? gS : void 0;
            var bS, XS = void 0 === (bS = tS) || null === bS ? 0 : function(SS, HS, gS) {
                if (void 0 === gS) {
                  const gS = iS.encode(SS),
                    tS = HS(gS.length, 1) >>> 0;
                  return OS().subarray(tS, tS + gS.length).set(gS), pS = gS.length, tS
                }
                let tS = SS.length,
                  bS = HS(tS, 1) >>> 0;
                const XS = OS();
                let xS = 0;
                for (; xS < tS; xS++) {
                  const HS = SS.charCodeAt(xS);
                  if (HS > 127) break;
                  XS[bS + xS] = HS
                }
                if (xS !== tS) {
                  0 !== xS && (SS = SS.slice(xS)), bS = gS(bS, tS, tS = xS + 3 * SS.length, 1) >>> 0;
                  const HS = OS().subarray(bS + xS, bS + tS);
                  xS += iS.encodeInto(SS, HS).written, bS = gS(bS, tS, xS, 1) >>> 0
                }
                return pS = xS, bS
              }(tS, US.K0xj, US.ILsk),
              xS = pS;
            wS().setInt32(SS + 4, xS, !0), wS().setInt32(SS + 0, XS, !0)
          },
          U4tr: function(SS, HS) {
            throw new Error(hS(SS, HS))
          },
          ddlE: function(SS, HS) {
            return dS(SS).charCodeAt(HS >>> 0)
          },
          L3s8: function(SS, HS) {
            console.error(hS(SS, HS))
          },
          xytq: function(SS) {
            return dS(SS).length
          },
          bYnR: function(SS, HS) {
            return nS(hS(SS, HS))
          },
          YCTC: function(SS) {
            YS(SS)
          }
        }
      }
    }
    Symbol.dispose && (bS.prototype[Symbol.dispose] = bS.prototype.free);
    const CS = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((SS => US.rUSc(SS, 1)));

    function nS(SS) {
      vS === cS.length && cS.push(cS.length + 1);
      const HS = vS;
      return vS = cS[HS], cS[HS] = SS, HS
    }

    function PS(SS, HS) {
      SS >>>= 0;
      const gS = wS(),
        tS = [];
      for (let bS = SS; bS < SS + 4 * HS; bS += 4) tS.push(YS(gS.getUint32(bS, !0)));
      return tS
    }

    function QS(SS, HS) {
      return SS >>>= 0, OS().subarray(SS / 1, SS / 1 + HS)
    }
    let DS = null;

    function wS() {
      return null !== DS && DS.buffer === US.memory.buffer || (DS = new DataView(US.memory.buffer)), DS
    }

    function hS(SS, HS) {
      return function(SS, HS) {
        VS += HS, VS >= yS && (AS = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), AS.decode(), VS = HS);
        return AS.decode(OS().subarray(SS, SS + HS))
      }(SS >>> 0, HS)
    }
    let ZS = null;
    let JS = null;

    function OS() {
      return null !== JS && 0 !== JS.byteLength || (JS = new Uint8Array(US.memory.buffer)), JS
    }

    function dS(SS) {
      return cS[SS]
    }
    let cS = new Array(1024).fill(void 0);
    cS.push(void 0, null, !0, !1);
    let vS = cS.length;

    function ES(SS, HS) {
      const gS = HS(4 * SS.length, 4) >>> 0;
      return (null !== ZS && 0 !== ZS.byteLength || (ZS = new Uint32Array(US.memory.buffer)), ZS).set(SS, gS / 4), pS = SS.length, gS
    }

    function LS(SS, HS) {
      const gS = HS(4 * SS.length, 4) >>> 0,
        tS = wS();
      for (let bS = 0; bS < SS.length; bS++) tS.setUint32(gS + 4 * bS, nS(SS[bS]), !0);
      return pS = SS.length, gS
    }

    function YS(SS) {
      const HS = dS(SS);
      return function(SS) {
        SS < 1028 || (cS[SS] = vS, vS = SS)
      }(SS), HS
    }
    let AS = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    AS.decode();
    const yS = 2146435072;
    let VS = 0;
    const iS = new TextEncoder;
    "encodeInto" in iS || (iS.encodeInto = function(SS, HS) {
      const gS = iS.encode(SS);
      return HS.set(gS), {
        read: SS.length,
        written: gS.length
      }
    });
    let WS, zS, US, pS = 0;

    function sS(SS, HS) {
      return zS = SS, US = SS.exports, WS = HS, DS = null, ZS = null, JS = null, US.ApYb(), US
    }

    function BS(SS) {
      if (void 0 !== US) return US;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module: SS
      } = SS) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const HS = GS();
      SS instanceof WebAssembly.Module || (SS = new WebAssembly.Module(SS));
      return sS(new WebAssembly.Instance(SS, HS), SS)
    }
    async function MS(SS) {
      if (void 0 !== US) return US;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module_or_path: SS
      } = SS) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const HS = GS();
      ("string" === typeof SS || "function" === typeof Request && SS instanceof Request || "function" === typeof URL && SS instanceof URL) && (SS = fetch(SS));
      const {
        instance: gS,
        module: tS
      } = await async function(SS, HS) {
        if ("function" === typeof Response && SS instanceof Response) {
          if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(SS, HS)
          } catch (gS) {
            if (! function(SS) {
                switch (SS) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(SS.type) || "application/wasm" === SS.headers.get("Content-Type")) throw gS;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gS)
          }
          const tS = await SS.arrayBuffer();
          return await WebAssembly.instantiate(tS, HS)
        } {
          const gS = await WebAssembly.instantiate(SS, HS);
          return gS instanceof WebAssembly.Instance ? {
            instance: gS,
            module: SS
          } : gS
        }
      }(await SS, HS);
      return sS(gS, tS)
    }
    var FS = gS(3030),
      RS = gS(6819);
    class TS extends Error {
      stage;
      constructor(SS, HS) {
        super((0, FS.E)(SS, HS), {
          cause: HS
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = SS
      }
    }
    let oS = null,
      lS = null;

    function mS() {
      return oS ? Promise.resolve(oS) : (lS || (lS = async function() {
        let SS;
        try {
          SS = await (0, FS.F)(new gS.U(gS(6821)), (0, RS.c)("bloxd_wasm_shader_pack"))
        } catch (HS) {
          throw new TS((0, FS.L)(HS), HS)
        }
        try {
          await MS({
            module_or_path: SS
          })
        } catch (HS) {
          throw new TS("instantiate", HS)
        }
        return oS = tS, oS
      }(), lS.then(void 0, (() => {
        lS = null
      }))), lS)
    }
    var eS = gS(6826);

    function rS(SS) {
      let [HS, gS, tS, bS] = SS;
      const XS = {
        file: HS,
        line: gS,
        message: tS
      };
      return bS && (XS.variants = bS.map(eS.p)), XS
    }

    function SH(SS) {
      return JSON.parse(SS).map(rS)
    }

    function HH(SS, HS) {
      if (!Number.isInteger(SS) || SS < 0 || SS > 4294967295) throw new Error(`${HS} ${SS} is not a whole number from 0 to 4294967295`);
      return SS
    }

    function gH(SS) {
      return [SS.named.map((SS => SS.name)), Uint32Array.from(SS.named, (SS => HH(SS.id, "Texture ID")))]
    }
    const tH = new WeakMap;
    const bH = new WeakMap,
      XH = new WeakSet;

    function xH(SS, HS) {
      if (XH.has(SS)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return HS()
      } catch (gS) {
        throw gS instanceof WebAssembly.RuntimeError && XH.add(SS), gS
      }
    }

    function NH(SS) {
      let HS = bH.get(SS);
      if (!HS) {
        let gS, tS;
        HS = {
          f6: (HS, gS) => xH(SS, (() => function(SS, HS, gS) {
            const tS = SS.f6(HS.map((SS => SS.path)), HS.map((SS => SS.source)), ...gH(gS), gS.aliases.map((SS => SS.name)), gS.aliases.map((SS => SS.texture)), gS.aliases.map((SS => SS.kind)));
            let bS = !1;
            try {
              const SS = tS.validationModuleCodes,
                HS = Array.from(tS.validationModuleKeys, ((HS, gS) => ({
                  key: (0, eS.p)(HS),
                  code: SS[gS]
                }))),
                gS = {
                  errors: SH(tS.gbS),
                  offInStrict: SH(tS.tbS),
                  variants: (0, eS.i)(tS),
                  validationModules: HS,
                  features: tS.features
                };
              return HS.forEach(((SS, HS) => {
                tH.set(SS, {
                  pack: tS,
                  index: HS
                })
              })), bS = HS.length > 0, gS
            } finally {
              bS || tS.free()
            }
          }(SS, HS, gS))),
          mapValidationMessage: (HS, gS) => {
            const tS = tH.get(HS);
            if (!tS) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return rS(JSON.parse(xH(SS, (() => tS.pack.mapValidationMessage(tS.index, gS.lineNum, gS.linePos, gS.message, gS.type)))))
          },
          VgS: HS => xH(SS, (() => function(SS, HS) {
            const gS = new Int32Array(HS.length),
              tS = [];
            return HS.forEach(((SS, HS) => {
              gS[HS] = SS.variants ? SS.variants.length : -1;
              for (const gS of SS.variants ?? []) tS.push((0, eS.m)(gS))
            })), SH(SS.VgS(HS.map((SS => SS.file)), Uint32Array.from(HS, (SS => HH(SS.line, "Diagnostic line"))), HS.map((SS => SS.message)), gS, Uint8Array.from(tS)))
          }(SS, HS))),
          dL: HS => xH(SS, (() => SS.dL(...gH(HS)))),
          get SHADER_PACK_HEADER_VERSION() {
            return gS ??= xH(SS, (() => SS.SbS())), gS
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return tS ??= xH(SS, (() => {
              const HS = SS.mtS();
              return SS.ltS().map(((SS, gS) => ({
                path: SS,
                source: HS[gS]
              })))
            })), tS
          },
          HbS: HS => xH(SS, (() => SS.HbS(HS))),
          resolveHeader: HS => xH(SS, (() => SS.rtS((0, eS.m)(HS)))),
          etS: () => xH(SS, (() => SS.etS()))
        }, bH.set(SS, HS)
      }
      return HS
    }
    var qH = gS(3385),
      uH = gS(6824);
    const IH = "bloxdShaderPackWasmFailureReported";
    let fH = null;

    function kH() {
      return fH ??= async function() {
        if ("undefined" === typeof WebAssembly) return aH("unsupported", "This browser has no WebAssembly"), null;
        const SS = (0, uH.loadShaderPackTextures)().then((() => !0), (SS => (console.error("Could not load the shader pack textures, so shader packs can't run", SS), !1)));
        try {
          const HS = await async function() {
            let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mS;
            return NH(await SS())
          }();
          return await SS ? HS : null
        } catch (HS) {
          const SS = HS instanceof Error ? HS.message : String(HS);
          return aH(qH.d[HS instanceof TS ? HS.stage : "instantiate"], SS), null
        }
      }(), fH
    }

    function aH(SS, HS) {
      (0, qH.h)(IH, `Shader pack wasm ${SS}, so shader packs can't run: ${HS}`, HS, `shader_pack_${SS}`)
    }
  },
  6821: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_shader_pack_bg.f252dd14451a6ea86cc6.wasm"
  },
  6819: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(3030);
    const bS = {
      bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
      bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
      bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
      bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
      bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
      bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
      bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
      bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
      bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
      bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
      bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
      bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
    };
    var XS = gS(4812);

    function xS(SS) {
      const HS = Object.prototype.hasOwnProperty.call(bS, SS) ? bS[SS]() : void 0;
      if (void 0 !== HS) return {
        sha256: HS,
        onMismatch: XS.D
      };
      throw new tS.h(`${SS} has no release digest, so this build refuses it`)
    }
  },
  6826: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => QS,
      i: () => DS,
      m: () => nS,
      p: () => CS
    });
    var tS = gS(6832);
    const bS = 6,
      XS = 3,
      xS = 1,
      NS = 2,
      qS = 4,
      uS = 8,
      IS = 16,
      fS = 32,
      kS = 64,
      aS = 128,
      KS = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function jS(SS) {
      if (!SS) return 0;
      const HS = KS.indexOf(SS);
      if (HS <= 0) throw new Error(`"${SS}" is not a shader pack hook function`);
      return HS
    }

    function GS(SS) {
      if (0 === SS) return null;
      const HS = KS[SS];
      if (void 0 === HS) throw new Error(`${SS} is not a shader pack hook function id`);
      return HS
    }

    function CS(SS) {
      const HS = tS.c.length;
      return {
        strict: SS >= HS,
        program: tS.c[SS % HS]
      }
    }

    function nS(SS) {
      return Number(SS.strict) * tS.c.length + tS.c.indexOf(SS.program)
    }

    function PS(SS) {
      return "" === SS ? [] : SS.split(" ")
    }

    function QS(SS) {
      const HS = {
        variantFlags: new Uint8Array(bS),
        hooks: new Uint8Array(bS * XS),
        moduleCodes: Array(bS).fill(""),
        reads: Array(2 * bS).fill("")
      };
      for (const gS of SS) {
        const SS = nS(gS.key),
          tS = (SS, HS) => null === gS.hooks.surface || gS.reads.fragment.includes(SS) ? 0 : HS;
        HS.variantFlags[SS] = (gS.sceneDepth ? xS : 0) | (gS.movesVertices ? NS : 0) | (gS.sunShadow ? qS : 0) | (gS.airShadow ? uS : 0) | (gS.discards ? IS : 0) | tS("localPosition", fS) | tS("enchantSpeed", kS) | tS("enchantTier", aS), HS.hooks[SS * XS] = jS(gS.hooks.vertex), HS.hooks[SS * XS + 1] = jS(gS.hooks.surface), HS.hooks[SS * XS + 2] = jS(gS.hooks.light), HS.moduleCodes[SS] = gS.moduleCode, HS.reads[2 * SS] = gS.reads.vertex.join(" "), HS.reads[2 * SS + 1] = gS.reads.fragment.join(" ")
      }
      return HS
    }

    function DS(SS) {
      const {
        hooks: HS,
        moduleCodes: gS,
        reads: tS
      } = SS;
      return Array.from(SS.variantFlags, ((SS, bS) => {
        const fS = bS * XS;
        return {
          key: CS(bS),
          hooks: {
            vertex: GS(HS[fS]),
            surface: GS(HS[fS + 1]),
            light: GS(HS[fS + 2])
          },
          moduleCode: gS[bS],
          sceneDepth: 0 !== (SS & xS),
          sunShadow: 0 !== (SS & qS),
          airShadow: 0 !== (SS & uS),
          movesVertices: 0 !== (SS & NS),
          discards: 0 !== (SS & IS),
          reads: {
            vertex: PS(tS[2 * bS]),
            fragment: PS(tS[2 * bS + 1])
          }
        }
      }))
    }
  },
  6832: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      d: () => xS,
      e: () => NS,
      f: () => bS,
      h: () => XS
    });
    const tS = ["terrain", "liquid", "model"];

    function bS() {
      const SS = [];
      for (const HS of [!1, !0])
        for (const gS of tS) SS.push({
          strict: HS,
          program: gS
        });
      return SS
    }

    function XS(SS) {
      return `${SS.strict?"strict":"allow"}.${SS.program}`
    }

    function xS(SS) {
      return !SS.hooks.vertex && !SS.hooks.surface && !SS.hooks.light
    }

    function NS(SS, HS) {
      return "off" !== HS && (null === SS || SS.some((SS => SS.key.strict === ("strict" === HS) && !xS(SS))))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);