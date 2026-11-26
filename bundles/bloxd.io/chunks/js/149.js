export const id = 149;
export const ids = [149];
export const modules = {
  7159: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadPageShaderPackCompiler: () => lO
    });
    var YB = {};
    GB.r(YB), GB.d(YB, {
      nQB: () => DB,
      VOB: () => QB,
      default: () => eB,
      UQB: () => oB,
      fQB: () => jB,
      initSync: () => aB,
      VP: () => yB,
      lDB: () => JB,
      kQB: () => MB,
      dQB: () => PB,
      JI: () => zB,
      KQB: () => lB,
      yI: () => pB,
      uQB: () => qB
    });
    class DB {
      static __wrap(BB) {
        const OB = Object.create(DB.prototype);
        return OB.__wbg_ptr = BB, NB.register(OB, OB.__wbg_ptr, OB), OB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, NB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        EB.sCil(BB, 0)
      }
      get mQB() {
        let BB, OB;
        try {
          const GB = EB.DzOi(this.__wbg_ptr);
          return BB = GB[0], OB = GB[1], nB(GB[0], GB[1])
        } finally {
          EB.EvV7(BB, OB, 1)
        }
      }
      get features() {
        const BB = EB.Zb6Y(this.__wbg_ptr);
        var OB = WB(BB[0], BB[1]);
        return EB.EvV7(BB[0], 4 * BB[1], 4), OB
      }
      get hooks() {
        const BB = EB.TiQC(this.__wbg_ptr);
        var OB = AB(BB[0], BB[1]).slice();
        return EB.EvV7(BB[0], 1 * BB[1], 1), OB
      }
      mapValidationMessage(BB, OB, GB, YB, DB) {
        let QB, oB;
        try {
          const JB = EB.pTkp(this.__wbg_ptr, BB, OB, GB, RB(YB), RB(DB));
          var jB = JB[0],
            yB = JB[1];
          if (JB[3]) throw jB = 0, yB = 0, FB(JB[2]);
          return QB = jB, oB = yB, nB(jB, yB)
        } finally {
          EB.EvV7(QB, oB, 1)
        }
      }
      get moduleCodes() {
        const BB = EB.UuyH(this.__wbg_ptr);
        var OB = WB(BB[0], BB[1]);
        return EB.EvV7(BB[0], 4 * BB[1], 4), OB
      }
      get IQB() {
        let BB, OB;
        try {
          const GB = EB.Ix1d(this.__wbg_ptr);
          return BB = GB[0], OB = GB[1], nB(GB[0], GB[1])
        } finally {
          EB.EvV7(BB, OB, 1)
        }
      }
      get reads() {
        const BB = EB.JkGX(this.__wbg_ptr);
        var OB = WB(BB[0], BB[1]);
        return EB.EvV7(BB[0], 4 * BB[1], 4), OB
      }
      get validationModuleCodes() {
        const BB = EB.vWUD(this.__wbg_ptr);
        var OB = WB(BB[0], BB[1]);
        return EB.EvV7(BB[0], 4 * BB[1], 4), OB
      }
      get validationModuleKeys() {
        const BB = EB.s9cl(this.__wbg_ptr);
        var OB = AB(BB[0], BB[1]).slice();
        return EB.EvV7(BB[0], 1 * BB[1], 1), OB
      }
      get variantFlags() {
        const BB = EB.W92s(this.__wbg_ptr);
        var OB = AB(BB[0], BB[1]).slice();
        return EB.EvV7(BB[0], 1 * BB[1], 1), OB
      }
    }

    function QB(BB, OB, GB, YB, QB, oB, jB) {
      const yB = IB(BB, EB.B0Tb),
        JB = cB,
        MB = IB(OB, EB.B0Tb),
        PB = cB,
        zB = IB(GB, EB.B0Tb),
        lB = cB,
        pB = mB(YB, EB.B0Tb),
        qB = cB,
        ZB = IB(QB, EB.B0Tb),
        NB = cB,
        RB = IB(oB, EB.B0Tb),
        WB = cB,
        AB = IB(jB, EB.B0Tb),
        VB = cB,
        SB = EB.eIfv(yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB);
      if (SB[2]) throw FB(SB[1]);
      return DB.__wrap(SB[0])
    }

    function oB() {
      const BB = EB.I3Ny();
      var OB = WB(BB[0], BB[1]);
      return EB.EvV7(BB[0], 4 * BB[1], 4), OB
    }

    function jB() {
      const BB = EB.JFkd();
      var OB = WB(BB[0], BB[1]);
      return EB.EvV7(BB[0], 4 * BB[1], 4), OB
    }

    function yB() {
      EB.CvtO()
    }

    function JB(BB, OB, GB, YB, DB) {
      let QB, oB;
      try {
        const JB = IB(BB, EB.B0Tb),
          MB = cB,
          PB = mB(OB, EB.B0Tb),
          zB = cB,
          lB = IB(GB, EB.B0Tb),
          pB = cB,
          qB = mB(YB, EB.B0Tb),
          ZB = cB,
          NB = function(BB, OB) {
            const GB = OB(1 * BB.length, 1) >>> 0;
            return kB().set(BB, GB / 1), cB = BB.length, GB
          }(DB, EB.B0Tb),
          RB = cB,
          WB = EB.qCKe(JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB);
        var jB = WB[0],
          yB = WB[1];
        if (WB[3]) throw jB = 0, yB = 0, FB(WB[2]);
        return QB = jB, oB = yB, nB(jB, yB)
      } finally {
        EB.EvV7(QB, oB, 1)
      }
    }

    function MB() {
      let BB, OB;
      try {
        const GB = EB.FkVX();
        return BB = GB[0], OB = GB[1], nB(GB[0], GB[1])
      } finally {
        EB.EvV7(BB, OB, 1)
      }
    }

    function PB(BB) {
      let OB, GB;
      try {
        const QB = EB.osAz(BB);
        var YB = QB[0],
          DB = QB[1];
        if (QB[3]) throw YB = 0, DB = 0, FB(QB[2]);
        return OB = YB, GB = DB, nB(YB, DB)
      } finally {
        EB.EvV7(OB, GB, 1)
      }
    }

    function zB() {
      return EB.pjcN() >>> 0
    }

    function lB() {
      let BB, OB;
      try {
        const GB = EB.Ghl3();
        return BB = GB[0], OB = GB[1], nB(GB[0], GB[1])
      } finally {
        EB.EvV7(BB, OB, 1)
      }
    }

    function pB(BB, OB) {
      let GB, YB;
      try {
        const oB = IB(BB, EB.B0Tb),
          jB = cB,
          yB = mB(OB, EB.B0Tb),
          JB = cB,
          MB = EB.Wz07(oB, jB, yB, JB);
        var DB = MB[0],
          QB = MB[1];
        if (MB[3]) throw DB = 0, QB = 0, FB(MB[2]);
        return GB = DB, YB = QB, nB(DB, QB)
      } finally {
        EB.EvV7(GB, YB, 1)
      }
    }

    function qB(BB) {
      let OB, GB;
      try {
        const QB = EB.omuL(RB(BB));
        var YB = QB[0],
          DB = QB[1];
        if (QB[3]) throw YB = 0, DB = 0, FB(QB[2]);
        return OB = YB, GB = DB, nB(YB, DB)
      } finally {
        EB.EvV7(OB, GB, 1)
      }
    }

    function ZB() {
      return {
        __proto__: null,
        omwy: {
          __proto__: null,
          Vsqr: function(BB, OB) {
            return RB(Error(nB(BB, OB)))
          },
          u4CZ: function(BB) {
            return null === dB(BB)
          },
          LxVj: function(BB) {
            return "string" === typeof dB(BB)
          },
          A6FI: function(BB, OB) {
            const GB = dB(OB),
              YB = "string" === typeof GB ? GB : void 0;
            var DB, QB = void 0 === (DB = YB) || null === DB ? 0 : function(BB, OB, GB) {
                if (void 0 === GB) {
                  const GB = rB.encode(BB),
                    YB = OB(GB.length, 1) >>> 0;
                  return kB().subarray(YB, YB + GB.length).set(GB), cB = GB.length, YB
                }
                let YB = BB.length,
                  DB = OB(YB, 1) >>> 0;
                const QB = kB();
                let oB = 0;
                for (; oB < YB; oB++) {
                  const OB = BB.charCodeAt(oB);
                  if (OB > 127) break;
                  QB[DB + oB] = OB
                }
                if (oB !== YB) {
                  0 !== oB && (BB = BB.slice(oB)), DB = GB(DB, YB, YB = oB + 3 * BB.length, 1) >>> 0;
                  const OB = kB().subarray(DB + oB, DB + YB);
                  oB += rB.encodeInto(BB, OB).written, DB = GB(DB, YB, oB, 1) >>> 0
                }
                return cB = oB, DB
              }(YB, EB.B0Tb, EB.CWDu),
              oB = cB;
            SB().setInt32(BB + 4, oB, !0), SB().setInt32(BB + 0, QB, !0)
          },
          fXvW: function(BB, OB) {
            throw new Error(nB(BB, OB))
          },
          iQks: function(BB, OB) {
            return dB(BB).charCodeAt(OB >>> 0)
          },
          QDBO: function(BB, OB) {
            console.error(nB(BB, OB))
          },
          ycM7: function(BB) {
            return dB(BB).length
          },
          N2Hn: function(BB, OB) {
            return RB(nB(BB, OB))
          },
          QQzl: function(BB) {
            FB(BB)
          }
        }
      }
    }
    Symbol.dispose && (DB.prototype[Symbol.dispose] = DB.prototype.free);
    const NB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => EB.sCil(BB, 1)));

    function RB(BB) {
      uB === KB.length && KB.push(KB.length + 1);
      const OB = uB;
      return uB = KB[OB], KB[OB] = BB, OB
    }

    function WB(BB, OB) {
      BB >>>= 0;
      const GB = SB(),
        YB = [];
      for (let DB = BB; DB < BB + 4 * OB; DB += 4) YB.push(FB(GB.getUint32(DB, !0)));
      return YB
    }

    function AB(BB, OB) {
      return BB >>>= 0, kB().subarray(BB / 1, BB / 1 + OB)
    }
    let VB = null;

    function SB() {
      return null !== VB && VB.buffer === EB.memory.buffer || (VB = new DataView(EB.memory.buffer)), VB
    }

    function nB(BB, OB) {
      return function(BB, OB) {
        gB += OB, gB >= LB && (iB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), iB.decode(), gB = OB);
        return iB.decode(kB().subarray(BB, BB + OB))
      }(BB >>> 0, OB)
    }
    let UB = null;
    let fB = null;

    function kB() {
      return null !== fB && 0 !== fB.byteLength || (fB = new Uint8Array(EB.memory.buffer)), fB
    }

    function dB(BB) {
      return KB[BB]
    }
    let KB = new Array(1024).fill(void 0);
    KB.push(void 0, null, !0, !1);
    let uB = KB.length;

    function mB(BB, OB) {
      const GB = OB(4 * BB.length, 4) >>> 0;
      return (null !== UB && 0 !== UB.byteLength || (UB = new Uint32Array(EB.memory.buffer)), UB).set(BB, GB / 4), cB = BB.length, GB
    }

    function IB(BB, OB) {
      const GB = OB(4 * BB.length, 4) >>> 0,
        YB = SB();
      for (let DB = 0; DB < BB.length; DB++) YB.setUint32(GB + 4 * DB, RB(BB[DB]), !0);
      return cB = BB.length, GB
    }

    function FB(BB) {
      const OB = dB(BB);
      return function(BB) {
        BB < 1028 || (KB[BB] = uB, uB = BB)
      }(BB), OB
    }
    let iB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    iB.decode();
    const LB = 2146435072;
    let gB = 0;
    const rB = new TextEncoder;
    "encodeInto" in rB || (rB.encodeInto = function(BB, OB) {
      const GB = rB.encode(BB);
      return OB.set(GB), {
        read: BB.length,
        written: GB.length
      }
    });
    let XB, wB, EB, cB = 0;

    function hB(BB, OB) {
      return wB = BB, EB = BB.exports, XB = OB, VB = null, UB = null, fB = null, EB.rLBV(), EB
    }

    function aB(BB) {
      if (void 0 !== EB) return EB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const OB = ZB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return hB(new WebAssembly.Instance(BB, OB), BB)
    }
    async function eB(BB) {
      if (void 0 !== EB) return EB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const OB = ZB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: GB,
        module: YB
      } = await async function(BB, OB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, OB)
          } catch (GB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw GB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GB)
          }
          const YB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(YB, OB)
        } {
          const GB = await WebAssembly.instantiate(BB, OB);
          return GB instanceof WebAssembly.Instance ? {
            instance: GB,
            module: BB
          } : GB
        }
      }(await BB, OB);
      return hB(GB, YB)
    }
    var TB = GB(3210),
      bB = GB(7161);
    class CB extends Error {
      stage;
      constructor(BB, OB) {
        super((0, TB.C)(BB, OB), {
          cause: OB
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = BB
      }
    }
    let HB = null,
      vB = null;

    function sB() {
      return HB ? Promise.resolve(HB) : (vB || (vB = async function() {
        let BB;
        try {
          BB = await (0, TB.G)(new GB.U(GB(7166)), (0, bB.d)("bloxd_wasm_shader_pack"))
        } catch (OB) {
          throw new CB((0, TB.M)(OB), OB)
        }
        try {
          await eB({
            module_or_path: BB
          })
        } catch (OB) {
          throw new CB("instantiate", OB)
        }
        return HB = YB, HB
      }(), vB.then(void 0, (() => {
        vB = null
      }))), vB)
    }
    var xB = GB(7176);

    function tB(BB) {
      let [OB, GB, YB, DB] = BB;
      const QB = {
        file: OB,
        line: GB,
        message: YB
      };
      return DB && (QB.variants = DB.map(xB.l)), QB
    }

    function BO(BB) {
      return JSON.parse(BB).map(tB)
    }

    function OO(BB, OB) {
      if (!Number.isInteger(BB) || BB < 0 || BB > 4294967295) throw new Error(`${OB} ${BB} is not a whole number from 0 to 4294967295`);
      return BB
    }

    function GO(BB) {
      return [BB.named.map((BB => BB.name)), Uint32Array.from(BB.named, (BB => OO(BB.id, "Texture ID")))]
    }
    const YO = new WeakMap;
    const DO = new WeakMap,
      QO = new WeakSet;

    function oO(BB, OB) {
      if (QO.has(BB)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return OB()
      } catch (GB) {
        throw GB instanceof WebAssembly.RuntimeError && QO.add(BB), GB
      }
    }

    function jO(BB) {
      let OB = DO.get(BB);
      if (!OB) {
        let GB, YB;
        OB = {
          VOB: (OB, GB) => oO(BB, (() => function(BB, OB, GB) {
            const YB = BB.VOB(OB.map((BB => BB.path)), OB.map((BB => BB.source)), ...GO(GB), GB.aliases.map((BB => BB.name)), GB.aliases.map((BB => BB.texture)), GB.aliases.map((BB => BB.kind)));
            let DB = !1;
            try {
              const BB = YB.validationModuleCodes,
                OB = Array.from(YB.validationModuleKeys, ((OB, GB) => ({
                  key: (0, xB.l)(OB),
                  code: BB[GB]
                }))),
                GB = {
                  errors: BO(YB.mQB),
                  offInStrict: BO(YB.IQB),
                  variants: (0, xB.g)(YB),
                  validationModules: OB,
                  features: YB.features
                };
              return OB.forEach(((BB, OB) => {
                YO.set(BB, {
                  pack: YB,
                  index: OB
                })
              })), DB = OB.length > 0, GB
            } finally {
              DB || YB.free()
            }
          }(BB, OB, GB))),
          mapValidationMessage: (OB, GB) => {
            const YB = YO.get(OB);
            if (!YB) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return tB(JSON.parse(oO(BB, (() => YB.pack.mapValidationMessage(YB.index, GB.lineNum, GB.linePos, GB.message, GB.type)))))
          },
          lDB: OB => oO(BB, (() => function(BB, OB) {
            const GB = new Int32Array(OB.length),
              YB = [];
            return OB.forEach(((BB, OB) => {
              GB[OB] = BB.variants ? BB.variants.length : -1;
              for (const GB of BB.variants ?? []) YB.push((0, xB.h)(GB))
            })), BO(BB.lDB(OB.map((BB => BB.file)), Uint32Array.from(OB, (BB => OO(BB.line, "Diagnostic line"))), OB.map((BB => BB.message)), GB, Uint8Array.from(YB)))
          }(BB, OB))),
          yI: OB => oO(BB, (() => BB.yI(...GO(OB)))),
          get SHADER_PACK_HEADER_VERSION() {
            return GB ??= oO(BB, (() => BB.KQB())), GB
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return YB ??= oO(BB, (() => {
              const OB = BB.fQB();
              return BB.UQB().map(((BB, GB) => ({
                path: BB,
                source: OB[GB]
              })))
            })), YB
          },
          uQB: OB => oO(BB, (() => BB.uQB(OB))),
          resolveHeader: OB => oO(BB, (() => BB.dQB((0, xB.h)(OB)))),
          kQB: () => oO(BB, (() => BB.kQB()))
        }, DO.set(BB, OB)
      }
      return OB
    }
    var yO = GB(3641),
      JO = GB(3656),
      MO = GB(7174);
    const PO = "bloxdShaderPackWasmFailureReported";
    let zO = null;

    function lO() {
      return zO ??= async function() {
        if ("undefined" === typeof WebAssembly) return pO("unsupported", "This browser has no WebAssembly"), null;
        const BB = (0, MO.loadShaderPackTextures)().then((() => !0), (BB => (console.error("Could not load the shader pack textures, so shader packs can't run", BB), !1)));
        try {
          await (0, JO.g)();
          const OB = await async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sB;
            return jO(await BB())
          }();
          return await BB ? OB : null
        } catch (OB) {
          const BB = OB instanceof Error ? OB.message : String(OB);
          return pO(yO.c[OB instanceof CB ? OB.stage : "instantiate"], BB), null
        }
      }(), zO
    }

    function pO(BB, OB) {
      (0, yO.h)(PO, `Shader pack wasm ${BB}, so shader packs can't run: ${OB}`, OB, `shader_pack_${BB}`)
    }
  },
  7166: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_shader_pack_bg.a24dc50a5e16926e4132.wasm"
  },
  7161: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(3210);
    const DB = {
      bloxd_wasm: () => "bbd4532b4204ac6b037d21981a0077e27c49bf77bad5ade13596319f1c6101a5",
      bloxd_wasm_client: () => "8365f73c3472844058a4a0f574b2102c245aef505acbb602a81be3847509c8fa",
      bloxd_wasm_workers: () => "8409ee2ec92a1f5bf3cf7df6088eeb4c89a7f9ab0b6c537ab5e6bee5e1c85a52",
      bloxd_wasm_models: () => "4297705d02ef7091b212436b1b1d90f181427336ab1bf97d3c1a2eebcb00ef44",
      bloxd_wasm_webgpu: () => "feb1e82520617426b733fd3101371d0a4d1be5eea8eb5f7115ad8b481c5ecc2a",
      bloxd_wasm_webgl: () => "ccc8a64ee7a944567fefa835e06af6da6175cc2ce9d8d4fb5fc2acb63861821b",
      bloxd_wasm_webgl1: () => "ef3b6328394821ae9f35e9d6eb203b2d9872f6911c2948b8b5bd2bd784af58be",
      bloxd_wasm_replay: () => "e6bfd69259d4961ba1c2eff287fb0493dd998b3af1045ea9988589f9c1c784a6",
      bloxd_wasm_recorder: () => "61e54a37d20be582fb8a73e1f48e79e660cbedc06e1fc696d3d52ad467693eb7",
      bloxd_wasm_anim: () => "412a9ead222a90865e84867e83bc25acfd52a0e1c584c793e1f272639ce5dc2c",
      bloxd_wasm_textures: () => "43d7ae101efe7b39af19b5e650a2896a40d167bca827906978d39975a015e416",
      bloxd_wasm_shader_pack: () => "072b43f08a8ed6ea1336897ed9d7881ce755636d8b8a8f34eaa208a897665b42"
    };
    var QB = GB(5165);

    function oB(BB) {
      const OB = Object.prototype.hasOwnProperty.call(DB, BB) ? DB[BB]() : void 0;
      if (void 0 !== OB) return {
        sha256: OB,
        onMismatch: QB.s
      };
      throw new YB.g(`${BB} has no release digest, so this build refuses it`)
    }
  },
  7176: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => AB,
      g: () => VB,
      h: () => RB,
      l: () => NB
    });
    var YB = GB(7179);
    const DB = 6,
      QB = 3,
      oB = 1,
      jB = 2,
      yB = 4,
      JB = 8,
      MB = 16,
      PB = 32,
      zB = 64,
      lB = 128,
      pB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function qB(BB) {
      if (!BB) return 0;
      const OB = pB.indexOf(BB);
      if (OB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return OB
    }

    function ZB(BB) {
      if (0 === BB) return null;
      const OB = pB[BB];
      if (void 0 === OB) throw new Error(`${BB} is not a shader pack hook function id`);
      return OB
    }

    function NB(BB) {
      const OB = YB.e.length;
      return {
        strict: BB >= OB,
        program: YB.e[BB % OB]
      }
    }

    function RB(BB) {
      return Number(BB.strict) * YB.e.length + YB.e.indexOf(BB.program)
    }

    function WB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function AB(BB) {
      const OB = {
        variantFlags: new Uint8Array(DB),
        hooks: new Uint8Array(DB * QB),
        moduleCodes: Array(DB).fill(""),
        reads: Array(2 * DB).fill("")
      };
      for (const GB of BB) {
        const BB = RB(GB.key),
          YB = (BB, OB) => null === GB.hooks.surface || GB.reads.fragment.includes(BB) ? 0 : OB;
        OB.variantFlags[BB] = (GB.sceneDepth ? oB : 0) | (GB.movesVertices ? jB : 0) | (GB.sunShadow ? yB : 0) | (GB.airShadow ? JB : 0) | (GB.discards ? MB : 0) | YB("localPosition", PB) | YB("enchantSpeed", zB) | YB("enchantTier", lB), OB.hooks[BB * QB] = qB(GB.hooks.vertex), OB.hooks[BB * QB + 1] = qB(GB.hooks.surface), OB.hooks[BB * QB + 2] = qB(GB.hooks.light), OB.moduleCodes[BB] = GB.moduleCode, OB.reads[2 * BB] = GB.reads.vertex.join(" "), OB.reads[2 * BB + 1] = GB.reads.fragment.join(" ")
      }
      return OB
    }

    function VB(BB) {
      const {
        hooks: OB,
        moduleCodes: GB,
        reads: YB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, DB) => {
        const PB = DB * QB;
        return {
          key: NB(DB),
          hooks: {
            vertex: ZB(OB[PB]),
            surface: ZB(OB[PB + 1]),
            light: ZB(OB[PB + 2])
          },
          moduleCode: GB[DB],
          sceneDepth: 0 !== (BB & oB),
          sunShadow: 0 !== (BB & yB),
          airShadow: 0 !== (BB & JB),
          movesVertices: 0 !== (BB & jB),
          discards: 0 !== (BB & MB),
          reads: {
            vertex: WB(YB[2 * DB]),
            fragment: WB(YB[2 * DB + 1])
          }
        }
      }))
    }
  },
  7179: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      g: () => oB,
      k: () => jB,
      o: () => DB,
      r: () => QB
    });
    const YB = ["terrain", "liquid", "model"];

    function DB() {
      const BB = [];
      for (const OB of [!1, !0])
        for (const GB of YB) BB.push({
          strict: OB,
          program: GB
        });
      return BB
    }

    function QB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function oB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function jB(BB, OB) {
      return "off" !== OB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === OB) && !oB(BB))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);