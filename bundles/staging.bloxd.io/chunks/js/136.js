export const id = 136;
export const ids = [136];
export const modules = {
  6574: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      loadPageShaderPackCompiler: () => rj
    });
    var QB = {};
    zB.r(QB), zB.d(QB, {
      BnB: () => nB,
      O4: () => dB,
      default: () => wB,
      jnB: () => IB,
      znB: () => NB,
      initSync: () => lB,
      dp: () => uB,
      lzB: () => UB,
      QnB: () => aB,
      nnB: () => pB,
      lF: () => rB,
      dnB: () => sB,
      ZF: () => JB,
      InB: () => mB
    });
    class nB {
      static __wrap(BB) {
        const jB = Object.create(nB.prototype);
        return jB.__wbg_ptr = BB, kB.register(jB, jB.__wbg_ptr, jB), jB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        PB.koRb(BB, 0)
      }
      get NnB() {
        let BB, jB;
        try {
          const zB = PB.R0wS(this.__wbg_ptr);
          return BB = zB[0], jB = zB[1], MB(zB[0], zB[1])
        } finally {
          PB.HSGI(BB, jB, 1)
        }
      }
      get features() {
        const BB = PB.R25R(this.__wbg_ptr);
        var jB = LB(BB[0], BB[1]);
        return PB.HSGI(BB[0], 4 * BB[1], 4), jB
      }
      get hooks() {
        const BB = PB.VuqE(this.__wbg_ptr);
        var jB = gB(BB[0], BB[1]).slice();
        return PB.HSGI(BB[0], 1 * BB[1], 1), jB
      }
      mapValidationMessage(BB, jB, zB, QB, nB) {
        let dB, IB;
        try {
          const UB = PB.poxU(this.__wbg_ptr, BB, jB, zB, GB(QB), GB(nB));
          var NB = UB[0],
            uB = UB[1];
          if (UB[3]) throw NB = 0, uB = 0, YB(UB[2]);
          return dB = NB, IB = uB, MB(NB, uB)
        } finally {
          PB.HSGI(dB, IB, 1)
        }
      }
      get moduleCodes() {
        const BB = PB.oFWP(this.__wbg_ptr);
        var jB = LB(BB[0], BB[1]);
        return PB.HSGI(BB[0], 4 * BB[1], 4), jB
      }
      get unB() {
        let BB, jB;
        try {
          const zB = PB.BJcy(this.__wbg_ptr);
          return BB = zB[0], jB = zB[1], MB(zB[0], zB[1])
        } finally {
          PB.HSGI(BB, jB, 1)
        }
      }
      get reads() {
        const BB = PB.O6RU(this.__wbg_ptr);
        var jB = LB(BB[0], BB[1]);
        return PB.HSGI(BB[0], 4 * BB[1], 4), jB
      }
      get validationModuleCodes() {
        const BB = PB.wuyD(this.__wbg_ptr);
        var jB = LB(BB[0], BB[1]);
        return PB.HSGI(BB[0], 4 * BB[1], 4), jB
      }
      get validationModuleKeys() {
        const BB = PB.wwz8(this.__wbg_ptr);
        var jB = gB(BB[0], BB[1]).slice();
        return PB.HSGI(BB[0], 1 * BB[1], 1), jB
      }
      get variantFlags() {
        const BB = PB.T5e6(this.__wbg_ptr);
        var jB = gB(BB[0], BB[1]).slice();
        return PB.HSGI(BB[0], 1 * BB[1], 1), jB
      }
    }

    function dB(BB, jB, zB, QB, dB, IB, NB) {
      const uB = FB(BB, PB.ACwY),
        UB = WB,
        aB = FB(jB, PB.ACwY),
        pB = WB,
        rB = FB(zB, PB.ACwY),
        sB = WB,
        JB = DB(QB, PB.ACwY),
        mB = WB,
        yB = FB(dB, PB.ACwY),
        kB = WB,
        GB = FB(IB, PB.ACwY),
        LB = WB,
        gB = FB(NB, PB.ACwY),
        tB = WB,
        SB = PB.lHCG(uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB);
      if (SB[2]) throw YB(SB[1]);
      return nB.__wrap(SB[0])
    }

    function IB() {
      const BB = PB.DLxt();
      var jB = LB(BB[0], BB[1]);
      return PB.HSGI(BB[0], 4 * BB[1], 4), jB
    }

    function NB() {
      const BB = PB.LPnN();
      var jB = LB(BB[0], BB[1]);
      return PB.HSGI(BB[0], 4 * BB[1], 4), jB
    }

    function uB() {
      PB.C3nF()
    }

    function UB(BB, jB, zB, QB, nB) {
      let dB, IB;
      try {
        const UB = FB(BB, PB.ACwY),
          aB = WB,
          pB = DB(jB, PB.ACwY),
          rB = WB,
          sB = FB(zB, PB.ACwY),
          JB = WB,
          mB = DB(QB, PB.ACwY),
          yB = WB,
          kB = function(BB, jB) {
            const zB = jB(1 * BB.length, 1) >>> 0;
            return qB().set(BB, zB / 1), WB = BB.length, zB
          }(nB, PB.ACwY),
          GB = WB,
          LB = PB.rtCt(UB, aB, pB, rB, sB, JB, mB, yB, kB, GB);
        var NB = LB[0],
          uB = LB[1];
        if (LB[3]) throw NB = 0, uB = 0, YB(LB[2]);
        return dB = NB, IB = uB, MB(NB, uB)
      } finally {
        PB.HSGI(dB, IB, 1)
      }
    }

    function aB() {
      let BB, jB;
      try {
        const zB = PB.GZIE();
        return BB = zB[0], jB = zB[1], MB(zB[0], zB[1])
      } finally {
        PB.HSGI(BB, jB, 1)
      }
    }

    function pB(BB) {
      let jB, zB;
      try {
        const dB = PB.zb1R(BB);
        var QB = dB[0],
          nB = dB[1];
        if (dB[3]) throw QB = 0, nB = 0, YB(dB[2]);
        return jB = QB, zB = nB, MB(QB, nB)
      } finally {
        PB.HSGI(jB, zB, 1)
      }
    }

    function rB() {
      return PB.lKtD() >>> 0
    }

    function sB() {
      let BB, jB;
      try {
        const zB = PB.n5r1();
        return BB = zB[0], jB = zB[1], MB(zB[0], zB[1])
      } finally {
        PB.HSGI(BB, jB, 1)
      }
    }

    function JB(BB, jB) {
      let zB, QB;
      try {
        const IB = FB(BB, PB.ACwY),
          NB = WB,
          uB = DB(jB, PB.ACwY),
          UB = WB,
          aB = PB.sSsg(IB, NB, uB, UB);
        var nB = aB[0],
          dB = aB[1];
        if (aB[3]) throw nB = 0, dB = 0, YB(aB[2]);
        return zB = nB, QB = dB, MB(nB, dB)
      } finally {
        PB.HSGI(zB, QB, 1)
      }
    }

    function mB(BB) {
      let jB, zB;
      try {
        const dB = PB.MG86(GB(BB));
        var QB = dB[0],
          nB = dB[1];
        if (dB[3]) throw QB = 0, nB = 0, YB(dB[2]);
        return jB = QB, zB = nB, MB(QB, nB)
      } finally {
        PB.HSGI(jB, zB, 1)
      }
    }

    function yB() {
      return {
        __proto__: null,
        q5Gl: {
          __proto__: null,
          coq0: function(BB, jB) {
            return GB(Error(MB(BB, jB)))
          },
          U10b: function(BB) {
            return null === fB(BB)
          },
          y0Jr: function(BB) {
            return "string" === typeof fB(BB)
          },
          X8aF: function(BB, jB) {
            const zB = fB(jB),
              QB = "string" === typeof zB ? zB : void 0;
            var nB, dB = void 0 === (nB = QB) || null === nB ? 0 : function(BB, jB, zB) {
                if (void 0 === zB) {
                  const zB = ZB.encode(BB),
                    QB = jB(zB.length, 1) >>> 0;
                  return qB().subarray(QB, QB + zB.length).set(zB), WB = zB.length, QB
                }
                let QB = BB.length,
                  nB = jB(QB, 1) >>> 0;
                const dB = qB();
                let IB = 0;
                for (; IB < QB; IB++) {
                  const jB = BB.charCodeAt(IB);
                  if (jB > 127) break;
                  dB[nB + IB] = jB
                }
                if (IB !== QB) {
                  0 !== IB && (BB = BB.slice(IB)), nB = zB(nB, QB, QB = IB + 3 * BB.length, 1) >>> 0;
                  const jB = qB().subarray(nB + IB, nB + QB);
                  IB += ZB.encodeInto(BB, jB).written, nB = zB(nB, QB, IB, 1) >>> 0
                }
                return WB = IB, nB
              }(QB, PB.ACwY, PB.kAmb),
              IB = WB;
            SB().setInt32(BB + 4, IB, !0), SB().setInt32(BB + 0, dB, !0)
          },
          uHCl: function(BB, jB) {
            throw new Error(MB(BB, jB))
          },
          SrkF: function(BB, jB) {
            return fB(BB).charCodeAt(jB >>> 0)
          },
          T2gj: function(BB, jB) {
            console.error(MB(BB, jB))
          },
          l93Q: function(BB) {
            return fB(BB).length
          },
          pTPE: function(BB, jB) {
            return GB(MB(BB, jB))
          },
          JgtK: function(BB) {
            YB(BB)
          }
        }
      }
    }
    Symbol.dispose && (nB.prototype[Symbol.dispose] = nB.prototype.free);
    const kB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => PB.koRb(BB, 1)));

    function GB(BB) {
      HB === oB.length && oB.push(oB.length + 1);
      const jB = HB;
      return HB = oB[jB], oB[jB] = BB, jB
    }

    function LB(BB, jB) {
      BB >>>= 0;
      const zB = SB(),
        QB = [];
      for (let nB = BB; nB < BB + 4 * jB; nB += 4) QB.push(YB(zB.getUint32(nB, !0)));
      return QB
    }

    function gB(BB, jB) {
      return BB >>>= 0, qB().subarray(BB / 1, BB / 1 + jB)
    }
    let tB = null;

    function SB() {
      return null !== tB && tB.buffer === PB.memory.buffer || (tB = new DataView(PB.memory.buffer)), tB
    }

    function MB(BB, jB) {
      return function(BB, jB) {
        XB += jB, XB >= hB && (VB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), VB.decode(), XB = jB);
        return VB.decode(qB().subarray(BB, BB + jB))
      }(BB >>> 0, jB)
    }
    let EB = null;
    let iB = null;

    function qB() {
      return null !== iB && 0 !== iB.byteLength || (iB = new Uint8Array(PB.memory.buffer)), iB
    }

    function fB(BB) {
      return oB[BB]
    }
    let oB = new Array(1024).fill(void 0);
    oB.push(void 0, null, !0, !1);
    let HB = oB.length;

    function DB(BB, jB) {
      const zB = jB(4 * BB.length, 4) >>> 0;
      return (null !== EB && 0 !== EB.byteLength || (EB = new Uint32Array(PB.memory.buffer)), EB).set(BB, zB / 4), WB = BB.length, zB
    }

    function FB(BB, jB) {
      const zB = jB(4 * BB.length, 4) >>> 0,
        QB = SB();
      for (let nB = 0; nB < BB.length; nB++) QB.setUint32(zB + 4 * nB, GB(BB[nB]), !0);
      return WB = BB.length, zB
    }

    function YB(BB) {
      const jB = fB(BB);
      return function(BB) {
        BB < 1028 || (oB[BB] = HB, HB = BB)
      }(BB), jB
    }
    let VB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    VB.decode();
    const hB = 2146435072;
    let XB = 0;
    const ZB = new TextEncoder;
    "encodeInto" in ZB || (ZB.encodeInto = function(BB, jB) {
      const zB = ZB.encode(BB);
      return jB.set(zB), {
        read: BB.length,
        written: zB.length
      }
    });
    let AB, TB, PB, WB = 0;

    function eB(BB, jB) {
      return TB = BB, PB = BB.exports, AB = jB, tB = null, EB = null, iB = null, PB.Nnm5(), PB
    }

    function lB(BB) {
      if (void 0 !== PB) return PB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const jB = yB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return eB(new WebAssembly.Instance(BB, jB), BB)
    }
    async function wB(BB) {
      if (void 0 !== PB) return PB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const jB = yB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: zB,
        module: QB
      } = await async function(BB, jB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, jB)
          } catch (zB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw zB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zB)
          }
          const QB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(QB, jB)
        } {
          const zB = await WebAssembly.instantiate(BB, jB);
          return zB instanceof WebAssembly.Instance ? {
            instance: zB,
            module: BB
          } : zB
        }
      }(await BB, jB);
      return eB(zB, QB)
    }
    var xB = zB(2974),
      KB = zB(6578);
    class CB extends Error {
      stage;
      constructor(BB, jB) {
        super((0, xB.F)(BB, jB), {
          cause: jB
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = BB
      }
    }
    let cB = null,
      bB = null;

    function vB() {
      return cB ? Promise.resolve(cB) : (bB || (bB = async function() {
        let BB;
        try {
          BB = await (0, xB.I)(new zB.U(zB(6580)), (0, KB.b)("bloxd_wasm_shader_pack"))
        } catch (jB) {
          throw new CB((0, xB.M)(jB), jB)
        }
        try {
          await wB({
            module_or_path: BB
          })
        } catch (jB) {
          throw new CB("instantiate", jB)
        }
        return cB = QB, cB
      }(), bB.then(void 0, (() => {
        bB = null
      }))), bB)
    }
    var RB = zB(6587);

    function OB(BB) {
      let [jB, zB, QB, nB] = BB;
      const dB = {
        file: jB,
        line: zB,
        message: QB
      };
      return nB && (dB.variants = nB.map(RB.j)), dB
    }

    function Bj(BB) {
      return JSON.parse(BB).map(OB)
    }

    function jj(BB, jB) {
      if (!Number.isInteger(BB) || BB < 0 || BB > 4294967295) throw new Error(`${jB} ${BB} is not a whole number from 0 to 4294967295`);
      return BB
    }

    function zj(BB) {
      return [BB.named.map((BB => BB.name)), Uint32Array.from(BB.named, (BB => jj(BB.id, "Texture ID")))]
    }
    const Qj = new WeakMap;
    const nj = new WeakMap,
      dj = new WeakSet;

    function Ij(BB, jB) {
      if (dj.has(BB)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return jB()
      } catch (zB) {
        throw zB instanceof WebAssembly.RuntimeError && dj.add(BB), zB
      }
    }

    function Nj(BB) {
      let jB = nj.get(BB);
      if (!jB) {
        let zB, QB;
        jB = {
          O4: (jB, zB) => Ij(BB, (() => function(BB, jB, zB) {
            const QB = BB.O4(jB.map((BB => BB.path)), jB.map((BB => BB.source)), ...zj(zB), zB.aliases.map((BB => BB.name)), zB.aliases.map((BB => BB.texture)), zB.aliases.map((BB => BB.kind)));
            let nB = !1;
            try {
              const BB = QB.validationModuleCodes,
                jB = Array.from(QB.validationModuleKeys, ((jB, zB) => ({
                  key: (0, RB.j)(jB),
                  code: BB[zB]
                }))),
                zB = {
                  errors: Bj(QB.NnB),
                  offInStrict: Bj(QB.unB),
                  variants: (0, RB.g)(QB),
                  validationModules: jB,
                  features: QB.features
                };
              return jB.forEach(((BB, jB) => {
                Qj.set(BB, {
                  pack: QB,
                  index: jB
                })
              })), nB = jB.length > 0, zB
            } finally {
              nB || QB.free()
            }
          }(BB, jB, zB))),
          mapValidationMessage: (jB, zB) => {
            const QB = Qj.get(jB);
            if (!QB) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return OB(JSON.parse(Ij(BB, (() => QB.pack.mapValidationMessage(QB.index, zB.lineNum, zB.linePos, zB.message, zB.type)))))
          },
          lzB: jB => Ij(BB, (() => function(BB, jB) {
            const zB = new Int32Array(jB.length),
              QB = [];
            return jB.forEach(((BB, jB) => {
              zB[jB] = BB.variants ? BB.variants.length : -1;
              for (const zB of BB.variants ?? []) QB.push((0, RB.i)(zB))
            })), Bj(BB.lzB(jB.map((BB => BB.file)), Uint32Array.from(jB, (BB => jj(BB.line, "Diagnostic line"))), jB.map((BB => BB.message)), zB, Uint8Array.from(QB)))
          }(BB, jB))),
          ZF: jB => Ij(BB, (() => BB.ZF(...zj(jB)))),
          get SHADER_PACK_HEADER_VERSION() {
            return zB ??= Ij(BB, (() => BB.dnB())), zB
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return QB ??= Ij(BB, (() => {
              const jB = BB.znB();
              return BB.jnB().map(((BB, zB) => ({
                path: BB,
                source: jB[zB]
              })))
            })), QB
          },
          InB: jB => Ij(BB, (() => BB.InB(jB))),
          resolveHeader: jB => Ij(BB, (() => BB.nnB((0, RB.i)(jB)))),
          QnB: () => Ij(BB, (() => BB.QnB()))
        }, nj.set(BB, jB)
      }
      return jB
    }
    var uj = zB(3325),
      Uj = zB(6585);
    const aj = "bloxdShaderPackWasmFailureReported";
    let pj = null;

    function rj() {
      return pj ??= async function() {
        if ("undefined" === typeof WebAssembly) return sj("unsupported", "This browser has no WebAssembly"), null;
        const BB = (0, Uj.loadShaderPackTextures)().then((() => !0), (BB => (console.error("Could not load the shader pack textures, so shader packs can't run", BB), !1)));
        try {
          const jB = await async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vB;
            return Nj(await BB())
          }();
          return await BB ? jB : null
        } catch (jB) {
          const BB = jB instanceof Error ? jB.message : String(jB);
          return sj(uj.b[jB instanceof CB ? jB.stage : "instantiate"], BB), null
        }
      }(), pj
    }

    function sj(BB, jB) {
      (0, uj.g)(aj, `Shader pack wasm ${BB}, so shader packs can't run: ${jB}`, jB, `shader_pack_${BB}`)
    }
  },
  6580: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_shader_pack_bg.f47c6601fe16d758881d.wasm"
  },
  6578: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(2974);
    const nB = {
      bloxd_wasm: () => "7b09e9f186f5fba9951cb6b712084b2a283fca06a42be21f6449860d6e7dc573",
      bloxd_wasm_client: () => "c15f866f14080480fea14857b9de7e539e335dce452b3ac1f19f0e3e937c9012",
      bloxd_wasm_workers: () => "00de63c66aff71381fa14ebd2820bcc01d1f74d973a6e00204eb827cb328e85b",
      bloxd_wasm_models: () => "32d703ec0b794e85682ae80d087c7f2eff99230a39b9a0cb5be5c019534d7923",
      bloxd_wasm_webgpu: () => "1d41e428ff1a8bf8ab5a5da0e8d9f622575ba5f347bc8d40eb30b5fceef8b724",
      bloxd_wasm_webgl: () => "312dff8c1bb47e85d35f931d8977e1ee5f52f92a42fa20f9d0123d9376d1a917",
      bloxd_wasm_webgl1: () => "4855e300e3e615d0266ab5ac62961960b1300dfb8770375a7b598d1264a1830f",
      bloxd_wasm_replay: () => "5423fc1dc63ea74c6d9a1fac1b68ef8b53800a6e323e74b70ac272cca42c91f0",
      bloxd_wasm_recorder: () => "70b2547fb7560662bf26d9ee964aae4306b95745e4a8f6ad1533e65a931bfcbd",
      bloxd_wasm_anim: () => "a442a15413a6d8e2fce5f258c2ba4985529d8bf26cece64b09dc4584f043ade6",
      bloxd_wasm_textures: () => "e405dd767a5408e017f07c07979684ef0a0b2226e22378a714bcaf40408edfe9",
      bloxd_wasm_shader_pack: () => "98655291aac1601e5d21cb4017dab03da1e258471aa722674ba91fc68305d170"
    };
    var dB = zB(4782);

    function IB(BB) {
      const jB = Object.prototype.hasOwnProperty.call(nB, BB) ? nB[BB]() : void 0;
      if (void 0 !== jB) return {
        sha256: jB,
        onMismatch: dB.t
      };
      throw new QB.h(`${BB} has no release digest, so this build refuses it`)
    }
  },
  6587: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => gB,
      g: () => tB,
      i: () => GB,
      j: () => kB
    });
    var QB = zB(6592);
    const nB = 6,
      dB = 3,
      IB = 1,
      NB = 2,
      uB = 4,
      UB = 8,
      aB = 16,
      pB = 32,
      rB = 64,
      sB = 128,
      JB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function mB(BB) {
      if (!BB) return 0;
      const jB = JB.indexOf(BB);
      if (jB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return jB
    }

    function yB(BB) {
      if (0 === BB) return null;
      const jB = JB[BB];
      if (void 0 === jB) throw new Error(`${BB} is not a shader pack hook function id`);
      return jB
    }

    function kB(BB) {
      const jB = QB.e.length;
      return {
        strict: BB >= jB,
        program: QB.e[BB % jB]
      }
    }

    function GB(BB) {
      return Number(BB.strict) * QB.e.length + QB.e.indexOf(BB.program)
    }

    function LB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function gB(BB) {
      const jB = {
        variantFlags: new Uint8Array(nB),
        hooks: new Uint8Array(nB * dB),
        moduleCodes: Array(nB).fill(""),
        reads: Array(2 * nB).fill("")
      };
      for (const zB of BB) {
        const BB = GB(zB.key),
          QB = (BB, jB) => null === zB.hooks.surface || zB.reads.fragment.includes(BB) ? 0 : jB;
        jB.variantFlags[BB] = (zB.sceneDepth ? IB : 0) | (zB.movesVertices ? NB : 0) | (zB.sunShadow ? uB : 0) | (zB.airShadow ? UB : 0) | (zB.discards ? aB : 0) | QB("localPosition", pB) | QB("enchantSpeed", rB) | QB("enchantTier", sB), jB.hooks[BB * dB] = mB(zB.hooks.vertex), jB.hooks[BB * dB + 1] = mB(zB.hooks.surface), jB.hooks[BB * dB + 2] = mB(zB.hooks.light), jB.moduleCodes[BB] = zB.moduleCode, jB.reads[2 * BB] = zB.reads.vertex.join(" "), jB.reads[2 * BB + 1] = zB.reads.fragment.join(" ")
      }
      return jB
    }

    function tB(BB) {
      const {
        hooks: jB,
        moduleCodes: zB,
        reads: QB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, nB) => {
        const pB = nB * dB;
        return {
          key: kB(nB),
          hooks: {
            vertex: yB(jB[pB]),
            surface: yB(jB[pB + 1]),
            light: yB(jB[pB + 2])
          },
          moduleCode: zB[nB],
          sceneDepth: 0 !== (BB & IB),
          sunShadow: 0 !== (BB & uB),
          airShadow: 0 !== (BB & UB),
          movesVertices: 0 !== (BB & NB),
          discards: 0 !== (BB & aB),
          reads: {
            vertex: LB(QB[2 * nB]),
            fragment: LB(QB[2 * nB + 1])
          }
        }
      }))
    }
  },
  6592: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      i: () => IB,
      m: () => NB,
      q: () => nB,
      s: () => dB
    });
    const QB = ["terrain", "liquid", "model"];

    function nB() {
      const BB = [];
      for (const jB of [!1, !0])
        for (const zB of QB) BB.push({
          strict: jB,
          program: zB
        });
      return BB
    }

    function dB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function IB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function NB(BB, jB) {
      return "off" !== jB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === jB) && !IB(BB))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);