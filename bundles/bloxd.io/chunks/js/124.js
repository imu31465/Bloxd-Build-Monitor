export const id = 124;
export const ids = [124];
export const modules = {
  5949: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadPageShaderPackCompiler: () => LT
    });
    var VB = {};
    dB.r(VB), dB.d(VB, {
      MyB: () => yB,
      iBB: () => pB,
      default: () => CB,
      zyB: () => lB,
      wyB: () => JB,
      initSync: () => hB,
      Dk: () => YB,
      LVB: () => gB,
      UyB: () => oB,
      FyB: () => kB,
      aU: () => LB,
      KyB: () => OB,
      PU: () => DB,
      ryB: () => uB
    });
    class yB {
      static __wrap(BB) {
        const TB = Object.create(yB.prototype);
        return TB.__wbg_ptr = BB, EB.register(TB, TB.__wbg_ptr, TB), TB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        ZB.YvrM(BB, 0)
      }
      get errorsJson() {
        let BB, TB;
        try {
          const dB = ZB.LN4t(this.__wbg_ptr);
          return BB = dB[0], TB = dB[1], fB(dB[0], dB[1])
        } finally {
          ZB.hwAo(BB, TB, 1)
        }
      }
      get features() {
        const BB = ZB.tlhx(this.__wbg_ptr);
        var TB = mB(BB[0], BB[1]);
        return ZB.hwAo(BB[0], 4 * BB[1], 4), TB
      }
      get hooks() {
        const BB = ZB.ufge(this.__wbg_ptr);
        var TB = iB(BB[0], BB[1]).slice();
        return ZB.hwAo(BB[0], 1 * BB[1], 1), TB
      }
      mapValidationMessage(BB, TB, dB, VB, yB) {
        let pB, lB;
        try {
          const gB = ZB.Basm(this.__wbg_ptr, BB, TB, dB, vB(VB), vB(yB));
          var JB = gB[0],
            YB = gB[1];
          if (gB[3]) throw JB = 0, YB = 0, IB(gB[2]);
          return pB = JB, lB = YB, fB(JB, YB)
        } finally {
          ZB.hwAo(pB, lB, 1)
        }
      }
      get moduleCodes() {
        const BB = ZB.rkHh(this.__wbg_ptr);
        var TB = mB(BB[0], BB[1]);
        return ZB.hwAo(BB[0], 4 * BB[1], 4), TB
      }
      get offInStrictJson() {
        let BB, TB;
        try {
          const dB = ZB.qLsB(this.__wbg_ptr);
          return BB = dB[0], TB = dB[1], fB(dB[0], dB[1])
        } finally {
          ZB.hwAo(BB, TB, 1)
        }
      }
      get reads() {
        const BB = ZB.OdHM(this.__wbg_ptr);
        var TB = mB(BB[0], BB[1]);
        return ZB.hwAo(BB[0], 4 * BB[1], 4), TB
      }
      get validationModuleCodes() {
        const BB = ZB.i0pK(this.__wbg_ptr);
        var TB = mB(BB[0], BB[1]);
        return ZB.hwAo(BB[0], 4 * BB[1], 4), TB
      }
      get validationModuleKeys() {
        const BB = ZB.POKI(this.__wbg_ptr);
        var TB = iB(BB[0], BB[1]).slice();
        return ZB.hwAo(BB[0], 1 * BB[1], 1), TB
      }
      get variantFlags() {
        const BB = ZB.tsyj(this.__wbg_ptr);
        var TB = iB(BB[0], BB[1]).slice();
        return ZB.hwAo(BB[0], 1 * BB[1], 1), TB
      }
    }

    function pB(BB, TB, dB, VB, pB, lB, JB) {
      const YB = rB(BB, ZB.mrPM),
        gB = XB,
        oB = rB(TB, ZB.mrPM),
        kB = XB,
        LB = rB(dB, ZB.mrPM),
        OB = XB,
        DB = KB(VB, ZB.mrPM),
        uB = XB,
        HB = rB(pB, ZB.mrPM),
        EB = XB,
        vB = rB(lB, ZB.mrPM),
        mB = XB,
        iB = rB(JB, ZB.mrPM),
        NB = XB,
        tB = ZB.qNaO(YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB);
      if (tB[2]) throw IB(tB[1]);
      return yB.__wrap(tB[0])
    }

    function lB() {
      const BB = ZB.blRy();
      var TB = mB(BB[0], BB[1]);
      return ZB.hwAo(BB[0], 4 * BB[1], 4), TB
    }

    function JB() {
      const BB = ZB.kuTI();
      var TB = mB(BB[0], BB[1]);
      return ZB.hwAo(BB[0], 4 * BB[1], 4), TB
    }

    function YB() {
      ZB.d0Ho()
    }

    function gB(BB, TB, dB, VB, yB) {
      let pB, lB;
      try {
        const gB = rB(BB, ZB.mrPM),
          oB = XB,
          kB = KB(TB, ZB.mrPM),
          LB = XB,
          OB = rB(dB, ZB.mrPM),
          DB = XB,
          uB = KB(VB, ZB.mrPM),
          HB = XB,
          EB = function(BB, TB) {
            const dB = TB(1 * BB.length, 1) >>> 0;
            return zB().set(BB, dB / 1), XB = BB.length, dB
          }(yB, ZB.mrPM),
          vB = XB,
          mB = ZB.zqiJ(gB, oB, kB, LB, OB, DB, uB, HB, EB, vB);
        var JB = mB[0],
          YB = mB[1];
        if (mB[3]) throw JB = 0, YB = 0, IB(mB[2]);
        return pB = JB, lB = YB, fB(JB, YB)
      } finally {
        ZB.hwAo(pB, lB, 1)
      }
    }

    function oB() {
      let BB, TB;
      try {
        const dB = ZB.hft6();
        return BB = dB[0], TB = dB[1], fB(dB[0], dB[1])
      } finally {
        ZB.hwAo(BB, TB, 1)
      }
    }

    function kB(BB) {
      let TB, dB;
      try {
        const pB = ZB.JOW9(BB);
        var VB = pB[0],
          yB = pB[1];
        if (pB[3]) throw VB = 0, yB = 0, IB(pB[2]);
        return TB = VB, dB = yB, fB(VB, yB)
      } finally {
        ZB.hwAo(TB, dB, 1)
      }
    }

    function LB() {
      return ZB.GoOx() >>> 0
    }

    function OB() {
      let BB, TB;
      try {
        const dB = ZB.IPGL();
        return BB = dB[0], TB = dB[1], fB(dB[0], dB[1])
      } finally {
        ZB.hwAo(BB, TB, 1)
      }
    }

    function DB(BB, TB) {
      let dB, VB;
      try {
        const lB = rB(BB, ZB.mrPM),
          JB = XB,
          YB = KB(TB, ZB.mrPM),
          gB = XB,
          oB = ZB.gbPJ(lB, JB, YB, gB);
        var yB = oB[0],
          pB = oB[1];
        if (oB[3]) throw yB = 0, pB = 0, IB(oB[2]);
        return dB = yB, VB = pB, fB(yB, pB)
      } finally {
        ZB.hwAo(dB, VB, 1)
      }
    }

    function uB(BB) {
      let TB, dB;
      try {
        const pB = ZB.yzNe(vB(BB));
        var VB = pB[0],
          yB = pB[1];
        if (pB[3]) throw VB = 0, yB = 0, IB(pB[2]);
        return TB = VB, dB = yB, fB(VB, yB)
      } finally {
        ZB.hwAo(TB, dB, 1)
      }
    }

    function HB() {
      return {
        __proto__: null,
        NOGm: {
          __proto__: null,
          nXWp: function(BB, TB) {
            return vB(Error(fB(BB, TB)))
          },
          ebTa: function(BB) {
            return null === wB(BB)
          },
          qrjz: function(BB) {
            return "string" === typeof wB(BB)
          },
          YMYW: function(BB, TB) {
            const dB = wB(TB),
              VB = "string" === typeof dB ? dB : void 0;
            var yB, pB = void 0 === (yB = VB) || null === yB ? 0 : function(BB, TB, dB) {
                if (void 0 === dB) {
                  const dB = QB.encode(BB),
                    VB = TB(dB.length, 1) >>> 0;
                  return zB().subarray(VB, VB + dB.length).set(dB), XB = dB.length, VB
                }
                let VB = BB.length,
                  yB = TB(VB, 1) >>> 0;
                const pB = zB();
                let lB = 0;
                for (; lB < VB; lB++) {
                  const TB = BB.charCodeAt(lB);
                  if (TB > 127) break;
                  pB[yB + lB] = TB
                }
                if (lB !== VB) {
                  0 !== lB && (BB = BB.slice(lB)), yB = dB(yB, VB, VB = lB + 3 * BB.length, 1) >>> 0;
                  const TB = zB().subarray(yB + lB, yB + VB);
                  lB += QB.encodeInto(BB, TB).written, yB = dB(yB, VB, lB, 1) >>> 0
                }
                return XB = lB, yB
              }(VB, ZB.mrPM, ZB.Dggd),
              lB = XB;
            tB().setInt32(BB + 4, lB, !0), tB().setInt32(BB + 0, pB, !0)
          },
          rACx: function(BB, TB) {
            throw new Error(fB(BB, TB))
          },
          S4es: function(BB, TB) {
            return wB(BB).charCodeAt(TB >>> 0)
          },
          Zeca: function(BB, TB) {
            console.error(fB(BB, TB))
          },
          Mig0: function(BB) {
            return wB(BB).length
          },
          WhFJ: function(BB, TB) {
            return vB(fB(BB, TB))
          },
          W87g: function(BB) {
            IB(BB)
          }
        }
      }
    }
    Symbol.dispose && (yB.prototype[Symbol.dispose] = yB.prototype.free);
    const EB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => ZB.YvrM(BB, 1)));

    function vB(BB) {
      FB === UB.length && UB.push(UB.length + 1);
      const TB = FB;
      return FB = UB[TB], UB[TB] = BB, TB
    }

    function mB(BB, TB) {
      BB >>>= 0;
      const dB = tB(),
        VB = [];
      for (let yB = BB; yB < BB + 4 * TB; yB += 4) VB.push(IB(dB.getUint32(yB, !0)));
      return VB
    }

    function iB(BB, TB) {
      return BB >>>= 0, zB().subarray(BB / 1, BB / 1 + TB)
    }
    let NB = null;

    function tB() {
      return (null === NB || !0 === NB.buffer.detached || void 0 === NB.buffer.detached && NB.buffer !== ZB.memory.buffer) && (NB = new DataView(ZB.memory.buffer)), NB
    }

    function fB(BB, TB) {
      return function(BB, TB) {
        PB += TB, PB >= SB && (cB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), cB.decode(), PB = TB);
        return cB.decode(zB().subarray(BB, BB + TB))
      }(BB >>> 0, TB)
    }
    let sB = null;
    let MB = null;

    function zB() {
      return null !== MB && 0 !== MB.byteLength || (MB = new Uint8Array(ZB.memory.buffer)), MB
    }

    function wB(BB) {
      return UB[BB]
    }
    let UB = new Array(1024).fill(void 0);
    UB.push(void 0, null, !0, !1);
    let FB = UB.length;

    function KB(BB, TB) {
      const dB = TB(4 * BB.length, 4) >>> 0;
      return (null !== sB && 0 !== sB.byteLength || (sB = new Uint32Array(ZB.memory.buffer)), sB).set(BB, dB / 4), XB = BB.length, dB
    }

    function rB(BB, TB) {
      const dB = TB(4 * BB.length, 4) >>> 0,
        VB = tB();
      for (let yB = 0; yB < BB.length; yB++) VB.setUint32(dB + 4 * yB, vB(BB[yB]), !0);
      return XB = BB.length, dB
    }

    function IB(BB) {
      const TB = wB(BB);
      return function(BB) {
        BB < 1028 || (UB[BB] = FB, FB = BB)
      }(BB), TB
    }
    let cB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    cB.decode();
    const SB = 2146435072;
    let PB = 0;
    const QB = new TextEncoder;
    "encodeInto" in QB || (QB.encodeInto = function(BB, TB) {
      const dB = QB.encode(BB);
      return TB.set(dB), {
        read: BB.length,
        written: dB.length
      }
    });
    let RB, aB, ZB, XB = 0;

    function WB(BB, TB) {
      return aB = BB, ZB = BB.exports, RB = TB, NB = null, sB = null, MB = null, ZB.N9aE(), ZB
    }

    function hB(BB) {
      if (void 0 !== ZB) return ZB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const TB = HB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return WB(new WebAssembly.Instance(BB, TB), BB)
    }
    async function CB(BB) {
      if (void 0 !== ZB) return ZB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const TB = HB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: dB,
        module: VB
      } = await async function(BB, TB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, TB)
          } catch (dB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw dB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", dB)
          }
          const VB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(VB, TB)
        } {
          const dB = await WebAssembly.instantiate(BB, TB);
          return dB instanceof WebAssembly.Instance ? {
            instance: dB,
            module: BB
          } : dB
        }
      }(await BB, TB);
      return WB(dB, VB)
    }
    var GB = dB(3216),
      qB = dB(5953);
    class xB extends Error {
      stage;
      constructor(BB, TB) {
        super((0, GB.E)(BB, TB), {
          cause: TB
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = BB
      }
    }
    let jB = null,
      AB = null;

    function bB() {
      return jB ? Promise.resolve(jB) : (AB || (AB = async function() {
        let BB;
        try {
          BB = await (0, GB.G)(new dB.U(dB(5966)), (0, qB.c)("bloxd_wasm_shader_pack"))
        } catch (TB) {
          throw new xB((0, GB.M)(TB), TB)
        }
        try {
          await CB({
            module_or_path: BB
          })
        } catch (TB) {
          throw new xB("instantiate", TB)
        }
        return jB = VB, jB
      }(), AB.then(void 0, (() => {
        AB = null
      }))), AB)
    }
    var nB = dB(5975);

    function eB(BB) {
      let [TB, dB, VB, yB] = BB;
      const pB = {
        file: TB,
        line: dB,
        message: VB
      };
      return yB && (pB.variants = yB.map(nB.h)), pB
    }

    function BT(BB) {
      return JSON.parse(BB).map(eB)
    }

    function TT(BB, TB) {
      if (!Number.isInteger(BB) || BB < 0 || BB > 4294967295) throw new Error(`${TB} ${BB} is not a whole number from 0 to 4294967295`);
      return BB
    }

    function dT(BB) {
      return [BB.named.map((BB => BB.name)), Uint32Array.from(BB.named, (BB => TT(BB.id, "Texture ID")))]
    }
    const VT = new WeakMap;
    const yT = new WeakMap,
      pT = new WeakSet;

    function lT(BB, TB) {
      if (pT.has(BB)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return TB()
      } catch (dB) {
        throw dB instanceof WebAssembly.RuntimeError && pT.add(BB), dB
      }
    }

    function JT(BB) {
      let TB = yT.get(BB);
      if (!TB) {
        let dB, VB;
        TB = {
          iBB: (TB, dB) => lT(BB, (() => function(BB, TB, dB) {
            const VB = BB.iBB(TB.map((BB => BB.path)), TB.map((BB => BB.source)), ...dT(dB), dB.aliases.map((BB => BB.name)), dB.aliases.map((BB => BB.texture)), dB.aliases.map((BB => BB.kind)));
            let yB = !1;
            try {
              const BB = VB.validationModuleCodes,
                TB = Array.from(VB.validationModuleKeys, ((TB, dB) => ({
                  key: (0, nB.h)(TB),
                  code: BB[dB]
                }))),
                dB = {
                  errors: BT(VB.errorsJson),
                  offInStrict: BT(VB.offInStrictJson),
                  variants: (0, nB.e)(VB),
                  validationModules: TB,
                  features: VB.features
                };
              return TB.forEach(((BB, TB) => {
                VT.set(BB, {
                  pack: VB,
                  index: TB
                })
              })), yB = TB.length > 0, dB
            } finally {
              yB || VB.free()
            }
          }(BB, TB, dB))),
          mapValidationMessage: (TB, dB) => {
            const VB = VT.get(TB);
            if (!VB) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return eB(JSON.parse(lT(BB, (() => VB.pack.mapValidationMessage(VB.index, dB.lineNum, dB.linePos, dB.message, dB.type)))))
          },
          LVB: TB => lT(BB, (() => function(BB, TB) {
            const dB = new Int32Array(TB.length),
              VB = [];
            return TB.forEach(((BB, TB) => {
              dB[TB] = BB.variants ? BB.variants.length : -1;
              for (const dB of BB.variants ?? []) VB.push((0, nB.f)(dB))
            })), BT(BB.LVB(TB.map((BB => BB.file)), Uint32Array.from(TB, (BB => TT(BB.line, "Diagnostic line"))), TB.map((BB => BB.message)), dB, Uint8Array.from(VB)))
          }(BB, TB))),
          PU: TB => lT(BB, (() => BB.PU(...dT(TB)))),
          get SHADER_PACK_HEADER_VERSION() {
            return dB ??= lT(BB, (() => BB.KyB())), dB
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return VB ??= lT(BB, (() => {
              const TB = BB.wyB();
              return BB.zyB().map(((BB, dB) => ({
                path: BB,
                source: TB[dB]
              })))
            })), VB
          },
          ryB: TB => lT(BB, (() => BB.ryB(TB))),
          resolveHeader: TB => lT(BB, (() => BB.FyB((0, nB.f)(TB)))),
          UyB: () => lT(BB, (() => BB.UyB()))
        }, yT.set(BB, TB)
      }
      return TB
    }
    var YT = dB(2698),
      gT = dB(5973);
    const oT = "bloxdShaderPackWasmFailureReported";
    let kT = null;

    function LT() {
      return kT ??= async function() {
        if ("undefined" === typeof WebAssembly) return OT("unsupported", "This browser has no WebAssembly"), null;
        const BB = (0, gT.loadShaderPackTextures)().then((() => !0), (BB => (console.error("Could not load the shader pack textures, so shader packs can't run", BB), !1)));
        try {
          const TB = await async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bB;
            return JT(await BB())
          }();
          return await BB ? TB : null
        } catch (TB) {
          const BB = TB instanceof Error ? TB.message : String(TB);
          return OT(YT.c[TB instanceof xB ? TB.stage : "instantiate"], BB), null
        }
      }(), kT
    }

    function OT(BB, TB) {
      (0, YT.g)(oT, `Shader pack wasm ${BB}, so shader packs can't run: ${TB}`, TB, `shader_pack_${BB}`)
    }
  },
  5966: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_shader_pack_bg.effae8a78082d73d2340.wasm"
  },
  5953: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(3216);
    const yB = {
      bloxd_wasm: () => "6a2efd5680223ac4664cc3045620a185da94b2f4e06849c44e38e480fc80e38a",
      bloxd_wasm_client: () => "607784131ab158c610f964eeccd0a0852f74d8ce3d4f4aee969d2f319a80e3b6",
      bloxd_wasm_workers: () => "d5276c08ec0e736252a42b7c12c1091036eec7cc17105f167a56c574e34a0505",
      bloxd_wasm_models: () => "92f9285c30a7dd1629d525045b29e9aca6c3d567d620b4834fec4760fd172ddc",
      bloxd_wasm_webgpu: () => "ed656d46a24419edcd62f7bc46fd9a190039bf0f388edff699daa513cf32f6d2",
      bloxd_wasm_webgl: () => "52116128612eeabf26c6510c105a72c4a8c70bb8b756449209899fb860a93f15",
      bloxd_wasm_webgl1: () => "3697a90b61a47ddbbdceb28b1c9caaf73e71aabf414852b8293dc48cb3f6a6a8",
      bloxd_wasm_replay: () => "5464460b78e15b4bb176525399accbb59f863e7383feb54312b177c696166e48",
      bloxd_wasm_recorder: () => "e1fdcb56336c3bc38215a981e4378ac3821b8912419bc7fd948eb1da353324ba",
      bloxd_wasm_anim: () => "74e56eee078a428190364a7d35938aac7810b6b32140848c6b994c19e70e3042",
      bloxd_wasm_textures: () => "4b25ea5144f7ce6b7af54af6beda3d49671ed61aae27771d204b13971136dce5",
      bloxd_wasm_shader_pack: () => "4746bfad07ac1f13f98ece970e8e224d9432f9561a8a4390c6f598c4e17052f5"
    };
    var pB = dB(5959);

    function lB(BB) {
      const TB = Object.prototype.hasOwnProperty.call(yB, BB) ? yB[BB]() : void 0;
      if (void 0 !== TB) return {
        sha256: TB,
        onMismatch: pB.w
      };
      throw new VB.j(`${BB} has no release digest, so this build refuses it`)
    }
  },
  5975: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => iB,
      e: () => NB,
      f: () => vB,
      h: () => EB
    });
    var VB = dB(5981);
    const yB = 6,
      pB = 3,
      lB = 1,
      JB = 2,
      YB = 4,
      gB = 8,
      oB = 16,
      kB = 32,
      LB = 64,
      OB = 128,
      DB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function uB(BB) {
      if (!BB) return 0;
      const TB = DB.indexOf(BB);
      if (TB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return TB
    }

    function HB(BB) {
      if (0 === BB) return null;
      const TB = DB[BB];
      if (void 0 === TB) throw new Error(`${BB} is not a shader pack hook function id`);
      return TB
    }

    function EB(BB) {
      const TB = VB.b.length;
      return {
        strict: BB >= TB,
        program: VB.b[BB % TB]
      }
    }

    function vB(BB) {
      return Number(BB.strict) * VB.b.length + VB.b.indexOf(BB.program)
    }

    function mB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function iB(BB) {
      const TB = {
        variantFlags: new Uint8Array(yB),
        hooks: new Uint8Array(yB * pB),
        moduleCodes: Array(yB).fill(""),
        reads: Array(2 * yB).fill("")
      };
      for (const dB of BB) {
        const BB = vB(dB.key),
          VB = (BB, TB) => null === dB.hooks.surface || dB.reads.fragment.includes(BB) ? 0 : TB;
        TB.variantFlags[BB] = (dB.sceneDepth ? lB : 0) | (dB.movesVertices ? JB : 0) | (dB.sunShadow ? YB : 0) | (dB.airShadow ? gB : 0) | (dB.discards ? oB : 0) | VB("localPosition", kB) | VB("enchantSpeed", LB) | VB("enchantTier", OB), TB.hooks[BB * pB] = uB(dB.hooks.vertex), TB.hooks[BB * pB + 1] = uB(dB.hooks.surface), TB.hooks[BB * pB + 2] = uB(dB.hooks.light), TB.moduleCodes[BB] = dB.moduleCode, TB.reads[2 * BB] = dB.reads.vertex.join(" "), TB.reads[2 * BB + 1] = dB.reads.fragment.join(" ")
      }
      return TB
    }

    function NB(BB) {
      const {
        hooks: TB,
        moduleCodes: dB,
        reads: VB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, yB) => {
        const kB = yB * pB;
        return {
          key: EB(yB),
          hooks: {
            vertex: HB(TB[kB]),
            surface: HB(TB[kB + 1]),
            light: HB(TB[kB + 2])
          },
          moduleCode: dB[yB],
          sceneDepth: 0 !== (BB & lB),
          sunShadow: 0 !== (BB & YB),
          airShadow: 0 !== (BB & gB),
          movesVertices: 0 !== (BB & JB),
          discards: 0 !== (BB & oB),
          reads: {
            vertex: mB(VB[2 * yB]),
            fragment: mB(VB[2 * yB + 1])
          }
        }
      }))
    }
  },
  5981: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      e: () => yB,
      f: () => pB
    });
    const VB = ["terrain", "liquid", "model"];

    function yB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function pB(BB, TB) {
      return "off" !== TB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === TB) && !yB(BB))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);