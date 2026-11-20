export const id = 131;
export const ids = [131];
export const modules = {
  6395: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      loadPageShaderPackCompiler: () => BR
    });
    var Eu = {};
    yu.r(Eu), yu.d(Eu, {
      AKu: () => Ku,
      juu: () => Qu,
      default: () => Pu,
      DKu: () => mu,
      MKu: () => Ju,
      initSync: () => hu,
      iV: () => Nu,
      rEu: () => Xu,
      IKu: () => Vu,
      GKu: () => ru,
      bD: () => Bu,
      UKu: () => xu,
      dD: () => Su,
      nKu: () => pu
    });
    class Ku {
      static __wrap(uu) {
        const Ru = Object.create(Ku.prototype);
        return Ru.__wbg_ptr = uu, Wu.register(Ru, Ru.__wbg_ptr, Ru), Ru
      }
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Wu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        Fu.WkfX(uu, 0)
      }
      get errorsJson() {
        let uu, Ru;
        try {
          const yu = Fu.FqHg(this.__wbg_ptr);
          return uu = yu[0], Ru = yu[1], ku(yu[0], yu[1])
        } finally {
          Fu.pYln(uu, Ru, 1)
        }
      }
      get features() {
        const uu = Fu.dC0Q(this.__wbg_ptr);
        var Ru = Hu(uu[0], uu[1]);
        return Fu.pYln(uu[0], 4 * uu[1], 4), Ru
      }
      get hooks() {
        const uu = Fu.n1tP(this.__wbg_ptr);
        var Ru = du(uu[0], uu[1]).slice();
        return Fu.pYln(uu[0], 1 * uu[1], 1), Ru
      }
      mapValidationMessage(uu, Ru, yu, Eu, Ku) {
        let Qu, mu;
        try {
          const Xu = Fu.bBuO(this.__wbg_ptr, uu, Ru, yu, ju(Eu), ju(Ku));
          var Ju = Xu[0],
            Nu = Xu[1];
          if (Xu[3]) throw Ju = 0, Nu = 0, su(Xu[2]);
          return Qu = Ju, mu = Nu, ku(Ju, Nu)
        } finally {
          Fu.pYln(Qu, mu, 1)
        }
      }
      get moduleCodes() {
        const uu = Fu.K3jx(this.__wbg_ptr);
        var Ru = Hu(uu[0], uu[1]);
        return Fu.pYln(uu[0], 4 * uu[1], 4), Ru
      }
      get offInStrictJson() {
        let uu, Ru;
        try {
          const yu = Fu.m3JC(this.__wbg_ptr);
          return uu = yu[0], Ru = yu[1], ku(yu[0], yu[1])
        } finally {
          Fu.pYln(uu, Ru, 1)
        }
      }
      get reads() {
        const uu = Fu.qtJt(this.__wbg_ptr);
        var Ru = Hu(uu[0], uu[1]);
        return Fu.pYln(uu[0], 4 * uu[1], 4), Ru
      }
      get validationModuleCodes() {
        const uu = Fu.suo0(this.__wbg_ptr);
        var Ru = Hu(uu[0], uu[1]);
        return Fu.pYln(uu[0], 4 * uu[1], 4), Ru
      }
      get validationModuleKeys() {
        const uu = Fu.peYN(this.__wbg_ptr);
        var Ru = du(uu[0], uu[1]).slice();
        return Fu.pYln(uu[0], 1 * uu[1], 1), Ru
      }
      get variantFlags() {
        const uu = Fu.XaT1(this.__wbg_ptr);
        var Ru = du(uu[0], uu[1]).slice();
        return Fu.pYln(uu[0], 1 * uu[1], 1), Ru
      }
    }

    function Qu(uu, Ru, yu, Eu, Qu, mu, Ju) {
      const Nu = nu(uu, Fu.waFT),
        Xu = wu,
        Vu = nu(Ru, Fu.waFT),
        ru = wu,
        Bu = nu(yu, Fu.waFT),
        xu = wu,
        Su = Uu(Eu, Fu.waFT),
        pu = wu,
        Tu = nu(Qu, Fu.waFT),
        Wu = wu,
        ju = nu(mu, Fu.waFT),
        Hu = wu,
        du = nu(Ju, Fu.waFT),
        bu = wu,
        Cu = Fu.GhxK(Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu);
      if (Cu[2]) throw su(Cu[1]);
      return Ku.__wrap(Cu[0])
    }

    function mu() {
      const uu = Fu.wr9H();
      var Ru = Hu(uu[0], uu[1]);
      return Fu.pYln(uu[0], 4 * uu[1], 4), Ru
    }

    function Ju() {
      const uu = Fu.gJvH();
      var Ru = Hu(uu[0], uu[1]);
      return Fu.pYln(uu[0], 4 * uu[1], 4), Ru
    }

    function Nu() {
      Fu.fWC9()
    }

    function Xu(uu, Ru, yu, Eu, Ku) {
      let Qu, mu;
      try {
        const Xu = nu(uu, Fu.waFT),
          Vu = wu,
          ru = Uu(Ru, Fu.waFT),
          Bu = wu,
          xu = nu(yu, Fu.waFT),
          Su = wu,
          pu = Uu(Eu, Fu.waFT),
          Tu = wu,
          Wu = function(uu, Ru) {
            const yu = Ru(1 * uu.length, 1) >>> 0;
            return Du().set(uu, yu / 1), wu = uu.length, yu
          }(Ku, Fu.waFT),
          ju = wu,
          Hu = Fu.eyRI(Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju);
        var Ju = Hu[0],
          Nu = Hu[1];
        if (Hu[3]) throw Ju = 0, Nu = 0, su(Hu[2]);
        return Qu = Ju, mu = Nu, ku(Ju, Nu)
      } finally {
        Fu.pYln(Qu, mu, 1)
      }
    }

    function Vu() {
      let uu, Ru;
      try {
        const yu = Fu.QRJB();
        return uu = yu[0], Ru = yu[1], ku(yu[0], yu[1])
      } finally {
        Fu.pYln(uu, Ru, 1)
      }
    }

    function ru(uu) {
      let Ru, yu;
      try {
        const Qu = Fu.dZle(uu);
        var Eu = Qu[0],
          Ku = Qu[1];
        if (Qu[3]) throw Eu = 0, Ku = 0, su(Qu[2]);
        return Ru = Eu, yu = Ku, ku(Eu, Ku)
      } finally {
        Fu.pYln(Ru, yu, 1)
      }
    }

    function Bu() {
      return Fu.eAnM() >>> 0
    }

    function xu() {
      let uu, Ru;
      try {
        const yu = Fu.fYNW();
        return uu = yu[0], Ru = yu[1], ku(yu[0], yu[1])
      } finally {
        Fu.pYln(uu, Ru, 1)
      }
    }

    function Su(uu, Ru) {
      let yu, Eu;
      try {
        const mu = nu(uu, Fu.waFT),
          Ju = wu,
          Nu = Uu(Ru, Fu.waFT),
          Xu = wu,
          Vu = Fu.USSo(mu, Ju, Nu, Xu);
        var Ku = Vu[0],
          Qu = Vu[1];
        if (Vu[3]) throw Ku = 0, Qu = 0, su(Vu[2]);
        return yu = Ku, Eu = Qu, ku(Ku, Qu)
      } finally {
        Fu.pYln(yu, Eu, 1)
      }
    }

    function pu(uu) {
      let Ru, yu;
      try {
        const Qu = Fu.KmJN(ju(uu));
        var Eu = Qu[0],
          Ku = Qu[1];
        if (Qu[3]) throw Eu = 0, Ku = 0, su(Qu[2]);
        return Ru = Eu, yu = Ku, ku(Eu, Ku)
      } finally {
        Fu.pYln(Ru, yu, 1)
      }
    }

    function Tu() {
      return {
        __proto__: null,
        bSNY: {
          __proto__: null,
          vza3: function(uu, Ru) {
            return ju(Error(ku(uu, Ru)))
          },
          a0kz: function(uu) {
            return null === Mu(uu)
          },
          HAaE: function(uu) {
            return "string" === typeof Mu(uu)
          },
          iWQh: function(uu, Ru) {
            const yu = Mu(Ru),
              Eu = "string" === typeof yu ? yu : void 0;
            var Ku, Qu = void 0 === (Ku = Eu) || null === Ku ? 0 : function(uu, Ru, yu) {
                if (void 0 === yu) {
                  const yu = cu.encode(uu),
                    Eu = Ru(yu.length, 1) >>> 0;
                  return Du().subarray(Eu, Eu + yu.length).set(yu), wu = yu.length, Eu
                }
                let Eu = uu.length,
                  Ku = Ru(Eu, 1) >>> 0;
                const Qu = Du();
                let mu = 0;
                for (; mu < Eu; mu++) {
                  const Ru = uu.charCodeAt(mu);
                  if (Ru > 127) break;
                  Qu[Ku + mu] = Ru
                }
                if (mu !== Eu) {
                  0 !== mu && (uu = uu.slice(mu)), Ku = yu(Ku, Eu, Eu = mu + 3 * uu.length, 1) >>> 0;
                  const Ru = Du().subarray(Ku + mu, Ku + Eu);
                  mu += cu.encodeInto(uu, Ru).written, Ku = yu(Ku, Eu, mu, 1) >>> 0
                }
                return wu = mu, Ku
              }(Eu, Fu.waFT, Fu.No9f),
              mu = wu;
            Cu().setInt32(uu + 4, mu, !0), Cu().setInt32(uu + 0, Qu, !0)
          },
          Rqtj: function(uu, Ru) {
            throw new Error(ku(uu, Ru))
          },
          eXX4: function(uu, Ru) {
            return Mu(uu).charCodeAt(Ru >>> 0)
          },
          ZU8x: function(uu, Ru) {
            console.error(ku(uu, Ru))
          },
          fILd: function(uu) {
            return Mu(uu).length
          },
          lP6y: function(uu, Ru) {
            return ju(ku(uu, Ru))
          },
          umZL: function(uu) {
            su(uu)
          }
        }
      }
    }
    Symbol.dispose && (Ku.prototype[Symbol.dispose] = Ku.prototype.free);
    const Wu = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => Fu.WkfX(uu, 1)));

    function ju(uu) {
      Gu === Iu.length && Iu.push(Iu.length + 1);
      const Ru = Gu;
      return Gu = Iu[Ru], Iu[Ru] = uu, Ru
    }

    function Hu(uu, Ru) {
      uu >>>= 0;
      const yu = Cu(),
        Eu = [];
      for (let Ku = uu; Ku < uu + 4 * Ru; Ku += 4) Eu.push(su(yu.getUint32(Ku, !0)));
      return Eu
    }

    function du(uu, Ru) {
      return uu >>>= 0, Du().subarray(uu / 1, uu / 1 + Ru)
    }
    let bu = null;

    function Cu() {
      return (null === bu || !0 === bu.buffer.detached || void 0 === bu.buffer.detached && bu.buffer !== Fu.memory.buffer) && (bu = new DataView(Fu.memory.buffer)), bu
    }

    function ku(uu, Ru) {
      return function(uu, Ru) {
        gu += Ru, gu >= lu && (tu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), tu.decode(), gu = Ru);
        return tu.decode(Du().subarray(uu, uu + Ru))
      }(uu >>> 0, Ru)
    }
    let eu = null;
    let Au = null;

    function Du() {
      return null !== Au && 0 !== Au.byteLength || (Au = new Uint8Array(Fu.memory.buffer)), Au
    }

    function Mu(uu) {
      return Iu[uu]
    }
    let Iu = new Array(1024).fill(void 0);
    Iu.push(void 0, null, !0, !1);
    let Gu = Iu.length;

    function Uu(uu, Ru) {
      const yu = Ru(4 * uu.length, 4) >>> 0;
      return (null !== eu && 0 !== eu.byteLength || (eu = new Uint32Array(Fu.memory.buffer)), eu).set(uu, yu / 4), wu = uu.length, yu
    }

    function nu(uu, Ru) {
      const yu = Ru(4 * uu.length, 4) >>> 0,
        Eu = Cu();
      for (let Ku = 0; Ku < uu.length; Ku++) Eu.setUint32(yu + 4 * Ku, ju(uu[Ku]), !0);
      return wu = uu.length, yu
    }

    function su(uu) {
      const Ru = Mu(uu);
      return function(uu) {
        uu < 1028 || (Iu[uu] = Gu, Gu = uu)
      }(uu), Ru
    }
    let tu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    tu.decode();
    const lu = 2146435072;
    let gu = 0;
    const cu = new TextEncoder;
    "encodeInto" in cu || (cu.encodeInto = function(uu, Ru) {
      const yu = cu.encode(uu);
      return Ru.set(yu), {
        read: uu.length,
        written: yu.length
      }
    });
    let Lu, zu, Fu, wu = 0;

    function Zu(uu, Ru) {
      return zu = uu, Fu = uu.exports, Lu = Ru, bu = null, eu = null, Au = null, Fu.Wi2c(), Fu
    }

    function hu(uu) {
      if (void 0 !== Fu) return Fu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Ru = Tu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return Zu(new WebAssembly.Instance(uu, Ru), uu)
    }
    async function Pu(uu) {
      if (void 0 !== Fu) return Fu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Ru = Tu();
      ("string" === typeof uu || "function" === typeof Request && uu instanceof Request || "function" === typeof URL && uu instanceof URL) && (uu = fetch(uu));
      const {
        instance: yu,
        module: Eu
      } = await async function(uu, Ru) {
        if ("function" === typeof Response && uu instanceof Response) {
          if (!uu.ok) throw new Error(`failed to fetch Wasm: ${uu.status} ${uu.statusText} fetching '${uu.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(uu, Ru)
          } catch (yu) {
            if (! function(uu) {
                switch (uu) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(uu.type) || "application/wasm" === uu.headers.get("Content-Type")) throw yu;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", yu)
          }
          const Eu = await uu.arrayBuffer();
          return await WebAssembly.instantiate(Eu, Ru)
        } {
          const yu = await WebAssembly.instantiate(uu, Ru);
          return yu instanceof WebAssembly.Instance ? {
            instance: yu,
            module: uu
          } : yu
        }
      }(await uu, Ru);
      return Zu(yu, Eu)
    }
    var iu = yu(3514),
      Yu = yu(6401);
    class ou extends Error {
      stage;
      constructor(uu, Ru) {
        super((0, iu.z)(uu, Ru), {
          cause: Ru
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = uu
      }
    }
    let qu = null,
      Ou = null;

    function vu() {
      return qu ? Promise.resolve(qu) : (Ou || (Ou = async function() {
        let uu;
        try {
          uu = await (0, iu.D)(new yu.U(yu(6404)), (0, Yu.d)("bloxd_wasm_shader_pack"))
        } catch (Ru) {
          throw new ou((0, iu.I)(Ru), Ru)
        }
        try {
          await Pu({
            module_or_path: uu
          })
        } catch (Ru) {
          throw new ou("instantiate", Ru)
        }
        return qu = Eu, qu
      }(), Ou.then(void 0, (() => {
        Ou = null
      }))), Ou)
    }
    var au = yu(6412);

    function fu(uu) {
      let [Ru, yu, Eu, Ku] = uu;
      const Qu = {
        file: Ru,
        line: yu,
        message: Eu
      };
      return Ku && (Qu.variants = Ku.map(au.o)), Qu
    }

    function uR(uu) {
      return JSON.parse(uu).map(fu)
    }

    function RR(uu, Ru) {
      if (!Number.isInteger(uu) || uu < 0 || uu > 4294967295) throw new Error(`${Ru} ${uu} is not a whole number from 0 to 4294967295`);
      return uu
    }

    function yR(uu) {
      return [uu.named.map((uu => uu.name)), Uint32Array.from(uu.named, (uu => RR(uu.id, "Texture ID")))]
    }
    const ER = new WeakMap;
    const KR = new WeakMap,
      QR = new WeakSet;

    function mR(uu, Ru) {
      if (QR.has(uu)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Ru()
      } catch (yu) {
        throw yu instanceof WebAssembly.RuntimeError && QR.add(uu), yu
      }
    }

    function JR(uu) {
      let Ru = KR.get(uu);
      if (!Ru) {
        let yu, Eu;
        Ru = {
          juu: (Ru, yu) => mR(uu, (() => function(uu, Ru, yu) {
            const Eu = uu.juu(Ru.map((uu => uu.path)), Ru.map((uu => uu.source)), ...yR(yu), yu.aliases.map((uu => uu.name)), yu.aliases.map((uu => uu.texture)), yu.aliases.map((uu => uu.kind)));
            let Ku = !1;
            try {
              const uu = Eu.validationModuleCodes,
                Ru = Array.from(Eu.validationModuleKeys, ((Ru, yu) => ({
                  key: (0, au.o)(Ru),
                  code: uu[yu]
                }))),
                yu = {
                  errors: uR(Eu.errorsJson),
                  offInStrict: uR(Eu.offInStrictJson),
                  variants: (0, au.h)(Eu),
                  validationModules: Ru,
                  features: Eu.features
                };
              return Ru.forEach(((uu, Ru) => {
                ER.set(uu, {
                  pack: Eu,
                  index: Ru
                })
              })), Ku = Ru.length > 0, yu
            } finally {
              Ku || Eu.free()
            }
          }(uu, Ru, yu))),
          mapValidationMessage: (Ru, yu) => {
            const Eu = ER.get(Ru);
            if (!Eu) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return fu(JSON.parse(mR(uu, (() => Eu.pack.mapValidationMessage(Eu.index, yu.lineNum, yu.linePos, yu.message, yu.type)))))
          },
          rEu: Ru => mR(uu, (() => function(uu, Ru) {
            const yu = new Int32Array(Ru.length),
              Eu = [];
            return Ru.forEach(((uu, Ru) => {
              yu[Ru] = uu.variants ? uu.variants.length : -1;
              for (const yu of uu.variants ?? []) Eu.push((0, au.l)(yu))
            })), uR(uu.rEu(Ru.map((uu => uu.file)), Uint32Array.from(Ru, (uu => RR(uu.line, "Diagnostic line"))), Ru.map((uu => uu.message)), yu, Uint8Array.from(Eu)))
          }(uu, Ru))),
          dD: Ru => mR(uu, (() => uu.dD(...yR(Ru)))),
          get SHADER_PACK_HEADER_VERSION() {
            return yu ??= mR(uu, (() => uu.UKu())), yu
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Eu ??= mR(uu, (() => {
              const Ru = uu.MKu();
              return uu.DKu().map(((uu, yu) => ({
                path: uu,
                source: Ru[yu]
              })))
            })), Eu
          },
          nKu: Ru => mR(uu, (() => uu.nKu(Ru))),
          resolveHeader: Ru => mR(uu, (() => uu.GKu((0, au.l)(Ru)))),
          IKu: () => mR(uu, (() => uu.IKu()))
        }, KR.set(uu, Ru)
      }
      return Ru
    }
    var NR = yu(3029),
      XR = yu(6407);
    const VR = "bloxdShaderPackWasmFailureReported";
    let rR = null;

    function BR() {
      return rR ??= async function() {
        if ("undefined" === typeof WebAssembly) return xR("unsupported", "This browser has no WebAssembly"), null;
        const uu = (0, XR.loadShaderPackTextures)().then((() => !0), (uu => (console.error("Could not load the shader pack textures, so shader packs can't run", uu), !1)));
        try {
          const Ru = await async function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vu;
            return JR(await uu())
          }();
          return await uu ? Ru : null
        } catch (Ru) {
          const uu = Ru instanceof Error ? Ru.message : String(Ru);
          return xR(NR.b[Ru instanceof ou ? Ru.stage : "instantiate"], uu), null
        }
      }(), rR
    }

    function xR(uu, Ru) {
      (0, NR.g)(VR, `Shader pack wasm ${uu}, so shader packs can't run: ${Ru}`, Ru, `shader_pack_${uu}`)
    }
  },
  6404: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_shader_pack_bg.ee23d5c4d4bcf1ec75ea.wasm"
  },
  6401: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(3514);
    const Ku = {
      bloxd_wasm: () => "3ed1a084322ad3cb30f47a8b06ce739897d64e664873e8362bad69a4e0fce36c",
      bloxd_wasm_client: () => "a9917e573bede14f22b22d14f5e644f2e71fcc9a6e34c58bf3e57cb4d3b8dd2b",
      bloxd_wasm_workers: () => "ecdb0c80693ae8280b8bb13b956bc3d05f85f48abcbff37b3a125c9c9aeb9848",
      bloxd_wasm_models: () => "8616b4260206fb1a456630cc184280886bca0201d0f8f84810c3b788ec25c1df",
      bloxd_wasm_webgpu: () => "e1a74926aaf9a1691f5a3d8a06cc60f732a0a528f8f9aac762b2a2303d0da591",
      bloxd_wasm_webgl: () => "ecba4faf3200e609973474a28d49b8ef73a4138f5f8c0d78ca0483605b24a0a2",
      bloxd_wasm_webgl1: () => "abdfe5d3d9983581a3b06cba824de0a31dd1a1adb24080f819fc74a713dfff02",
      bloxd_wasm_replay: () => "5f179054ce214c3ba0c750b1416df152f42691008bf442f02c9d21149669f166",
      bloxd_wasm_recorder: () => "f2da278d1126f2da5d1768d8feca01c3d5ad046842ca42386086ad694791f414",
      bloxd_wasm_anim: () => "f3d3949e0ee8ede817bb5a787d7fe6321fd96ba9985c07ea9ebdff2066b61798",
      bloxd_wasm_textures: () => "1cc3b5ae23772c6447fc1490ff3e9e59019a9128a46b8927b277f7cf41150b52",
      bloxd_wasm_shader_pack: () => "2dacc1cc4dca547291848db95b089e90361aa09148df7a071edd232a8671549d"
    };
    var Qu = yu(4470);

    function mu(uu) {
      const Ru = Object.prototype.hasOwnProperty.call(Ku, uu) ? Ku[uu]() : void 0;
      if (void 0 !== Ru) return {
        sha256: Ru,
        onMismatch: Qu.A
      };
      throw new Eu.g(`${uu} has no release digest, so this build refuses it`)
    }
  },
  6412: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => du,
      h: () => bu,
      l: () => ju,
      o: () => Wu
    });
    var Eu = yu(6418);
    const Ku = 6,
      Qu = 3,
      mu = 1,
      Ju = 2,
      Nu = 4,
      Xu = 8,
      Vu = 16,
      ru = 32,
      Bu = 64,
      xu = 128,
      Su = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function pu(uu) {
      if (!uu) return 0;
      const Ru = Su.indexOf(uu);
      if (Ru <= 0) throw new Error(`"${uu}" is not a shader pack hook function`);
      return Ru
    }

    function Tu(uu) {
      if (0 === uu) return null;
      const Ru = Su[uu];
      if (void 0 === Ru) throw new Error(`${uu} is not a shader pack hook function id`);
      return Ru
    }

    function Wu(uu) {
      const Ru = Eu.c.length;
      return {
        strict: uu >= Ru,
        program: Eu.c[uu % Ru]
      }
    }

    function ju(uu) {
      return Number(uu.strict) * Eu.c.length + Eu.c.indexOf(uu.program)
    }

    function Hu(uu) {
      return "" === uu ? [] : uu.split(" ")
    }

    function du(uu) {
      const Ru = {
        variantFlags: new Uint8Array(Ku),
        hooks: new Uint8Array(Ku * Qu),
        moduleCodes: Array(Ku).fill(""),
        reads: Array(2 * Ku).fill("")
      };
      for (const yu of uu) {
        const uu = ju(yu.key),
          Eu = (uu, Ru) => null === yu.hooks.surface || yu.reads.fragment.includes(uu) ? 0 : Ru;
        Ru.variantFlags[uu] = (yu.sceneDepth ? mu : 0) | (yu.movesVertices ? Ju : 0) | (yu.sunShadow ? Nu : 0) | (yu.airShadow ? Xu : 0) | (yu.discards ? Vu : 0) | Eu("localPosition", ru) | Eu("enchantSpeed", Bu) | Eu("enchantTier", xu), Ru.hooks[uu * Qu] = pu(yu.hooks.vertex), Ru.hooks[uu * Qu + 1] = pu(yu.hooks.surface), Ru.hooks[uu * Qu + 2] = pu(yu.hooks.light), Ru.moduleCodes[uu] = yu.moduleCode, Ru.reads[2 * uu] = yu.reads.vertex.join(" "), Ru.reads[2 * uu + 1] = yu.reads.fragment.join(" ")
      }
      return Ru
    }

    function bu(uu) {
      const {
        hooks: Ru,
        moduleCodes: yu,
        reads: Eu
      } = uu;
      return Array.from(uu.variantFlags, ((uu, Ku) => {
        const ru = Ku * Qu;
        return {
          key: Wu(Ku),
          hooks: {
            vertex: Tu(Ru[ru]),
            surface: Tu(Ru[ru + 1]),
            light: Tu(Ru[ru + 2])
          },
          moduleCode: yu[Ku],
          sceneDepth: 0 !== (uu & mu),
          sunShadow: 0 !== (uu & Nu),
          airShadow: 0 !== (uu & Xu),
          movesVertices: 0 !== (uu & Ju),
          discards: 0 !== (uu & Vu),
          reads: {
            vertex: Hu(Eu[2 * Ku]),
            fragment: Hu(Eu[2 * Ku + 1])
          }
        }
      }))
    }
  },
  6418: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      g: () => mu,
      h: () => Ju,
      i: () => Ku,
      j: () => Qu
    });
    const Eu = ["terrain", "liquid", "model"];

    function Ku() {
      const uu = [];
      for (const Ru of [!1, !0])
        for (const yu of Eu) uu.push({
          strict: Ru,
          program: yu
        });
      return uu
    }

    function Qu(uu) {
      return `${uu.strict?"strict":"allow"}.${uu.program}`
    }

    function mu(uu) {
      return !uu.hooks.vertex && !uu.hooks.surface && !uu.hooks.light
    }

    function Ju(uu, Ru) {
      return "off" !== Ru && (null === uu || uu.some((uu => uu.key.strict === ("strict" === Ru) && !mu(uu))))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);