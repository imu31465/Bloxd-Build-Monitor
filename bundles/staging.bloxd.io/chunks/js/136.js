export const id = 136;
export const ids = [136];
export const modules = {
  6810: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      loadPageShaderPackCompiler: () => cE
    });
    var su = {};
    ju.r(su), ju.d(su, {
      NUu: () => Uu,
      luu: () => Zu,
      default: () => tu,
      OUu: () => Xu,
      YUu: () => lu,
      initSync: () => Lu,
      sb: () => qu,
      Rju: () => fu,
      hUu: () => Cu,
      DUu: () => bu,
      bV: () => cu,
      gUu: () => Nu,
      fV: () => Ou,
      MUu: () => Yu
    });
    class Uu {
      static __wrap(uu) {
        const Eu = Object.create(Uu.prototype);
        return Eu.__wbg_ptr = uu, Du.register(Eu, Eu.__wbg_ptr, Eu), Eu
      }
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Du.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        Iu.ipd0(uu, 0)
      }
      get eUu() {
        let uu, Eu;
        try {
          const ju = Iu.IBPq(this.__wbg_ptr);
          return uu = ju[0], Eu = ju[1], wu(ju[0], ju[1])
        } finally {
          Iu.llkB(uu, Eu, 1)
        }
      }
      get features() {
        const uu = Iu.bQ7J(this.__wbg_ptr);
        var Eu = Mu(uu[0], uu[1]);
        return Iu.llkB(uu[0], 4 * uu[1], 4), Eu
      }
      get hooks() {
        const uu = Iu.DigX(this.__wbg_ptr);
        var Eu = eu(uu[0], uu[1]).slice();
        return Iu.llkB(uu[0], 1 * uu[1], 1), Eu
      }
      mapValidationMessage(uu, Eu, ju, su, Uu) {
        let Zu, Xu;
        try {
          const fu = Iu.ghHK(this.__wbg_ptr, uu, Eu, ju, gu(su), gu(Uu));
          var lu = fu[0],
            qu = fu[1];
          if (fu[3]) throw lu = 0, qu = 0, Ku(fu[2]);
          return Zu = lu, Xu = qu, wu(lu, qu)
        } finally {
          Iu.llkB(Zu, Xu, 1)
        }
      }
      get moduleCodes() {
        const uu = Iu.RKXa(this.__wbg_ptr);
        var Eu = Mu(uu[0], uu[1]);
        return Iu.llkB(uu[0], 4 * uu[1], 4), Eu
      }
      get GUu() {
        let uu, Eu;
        try {
          const ju = Iu.oR00(this.__wbg_ptr);
          return uu = ju[0], Eu = ju[1], wu(ju[0], ju[1])
        } finally {
          Iu.llkB(uu, Eu, 1)
        }
      }
      get reads() {
        const uu = Iu.pmKy(this.__wbg_ptr);
        var Eu = Mu(uu[0], uu[1]);
        return Iu.llkB(uu[0], 4 * uu[1], 4), Eu
      }
      get validationModuleCodes() {
        const uu = Iu.ukp6(this.__wbg_ptr);
        var Eu = Mu(uu[0], uu[1]);
        return Iu.llkB(uu[0], 4 * uu[1], 4), Eu
      }
      get validationModuleKeys() {
        const uu = Iu.yoOk(this.__wbg_ptr);
        var Eu = eu(uu[0], uu[1]).slice();
        return Iu.llkB(uu[0], 1 * uu[1], 1), Eu
      }
      get variantFlags() {
        const uu = Iu.kvQU(this.__wbg_ptr);
        var Eu = eu(uu[0], uu[1]).slice();
        return Iu.llkB(uu[0], 1 * uu[1], 1), Eu
      }
    }

    function Zu(uu, Eu, ju, su, Zu, Xu, lu) {
      const qu = vu(uu, Iu.pW7f),
        fu = Fu,
        Cu = vu(Eu, Iu.pW7f),
        bu = Fu,
        cu = vu(ju, Iu.pW7f),
        Nu = Fu,
        Ou = mu(su, Iu.pW7f),
        Yu = Fu,
        hu = vu(Zu, Iu.pW7f),
        Du = Fu,
        gu = vu(Xu, Iu.pW7f),
        Mu = Fu,
        eu = vu(lu, Iu.pW7f),
        Gu = Fu,
        pu = Iu.vnkN(qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu);
      if (pu[2]) throw Ku(pu[1]);
      return Uu.__wrap(pu[0])
    }

    function Xu() {
      const uu = Iu.gHgI();
      var Eu = Mu(uu[0], uu[1]);
      return Iu.llkB(uu[0], 4 * uu[1], 4), Eu
    }

    function lu() {
      const uu = Iu.i5l3();
      var Eu = Mu(uu[0], uu[1]);
      return Iu.llkB(uu[0], 4 * uu[1], 4), Eu
    }

    function qu() {
      Iu.UIEQ()
    }

    function fu(uu, Eu, ju, su, Uu) {
      let Zu, Xu;
      try {
        const fu = vu(uu, Iu.pW7f),
          Cu = Fu,
          bu = mu(Eu, Iu.pW7f),
          cu = Fu,
          Nu = vu(ju, Iu.pW7f),
          Ou = Fu,
          Yu = mu(su, Iu.pW7f),
          hu = Fu,
          Du = function(uu, Eu) {
            const ju = Eu(1 * uu.length, 1) >>> 0;
            return au().set(uu, ju / 1), Fu = uu.length, ju
          }(Uu, Iu.pW7f),
          gu = Fu,
          Mu = Iu.dPIe(fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu);
        var lu = Mu[0],
          qu = Mu[1];
        if (Mu[3]) throw lu = 0, qu = 0, Ku(Mu[2]);
        return Zu = lu, Xu = qu, wu(lu, qu)
      } finally {
        Iu.llkB(Zu, Xu, 1)
      }
    }

    function Cu() {
      let uu, Eu;
      try {
        const ju = Iu.Ufio();
        return uu = ju[0], Eu = ju[1], wu(ju[0], ju[1])
      } finally {
        Iu.llkB(uu, Eu, 1)
      }
    }

    function bu(uu) {
      let Eu, ju;
      try {
        const Zu = Iu.sv3j(uu);
        var su = Zu[0],
          Uu = Zu[1];
        if (Zu[3]) throw su = 0, Uu = 0, Ku(Zu[2]);
        return Eu = su, ju = Uu, wu(su, Uu)
      } finally {
        Iu.llkB(Eu, ju, 1)
      }
    }

    function cu() {
      return Iu.Jlxc() >>> 0
    }

    function Nu() {
      let uu, Eu;
      try {
        const ju = Iu.IsSi();
        return uu = ju[0], Eu = ju[1], wu(ju[0], ju[1])
      } finally {
        Iu.llkB(uu, Eu, 1)
      }
    }

    function Ou(uu, Eu) {
      let ju, su;
      try {
        const Xu = vu(uu, Iu.pW7f),
          lu = Fu,
          qu = mu(Eu, Iu.pW7f),
          fu = Fu,
          Cu = Iu.rWSd(Xu, lu, qu, fu);
        var Uu = Cu[0],
          Zu = Cu[1];
        if (Cu[3]) throw Uu = 0, Zu = 0, Ku(Cu[2]);
        return ju = Uu, su = Zu, wu(Uu, Zu)
      } finally {
        Iu.llkB(ju, su, 1)
      }
    }

    function Yu(uu) {
      let Eu, ju;
      try {
        const Zu = Iu.jEvY(gu(uu));
        var su = Zu[0],
          Uu = Zu[1];
        if (Zu[3]) throw su = 0, Uu = 0, Ku(Zu[2]);
        return Eu = su, ju = Uu, wu(su, Uu)
      } finally {
        Iu.llkB(Eu, ju, 1)
      }
    }

    function hu() {
      return {
        __proto__: null,
        Wrr6: {
          __proto__: null,
          STXY: function(uu, Eu) {
            return gu(Error(wu(uu, Eu)))
          },
          Qzz4: function(uu) {
            return null === Pu(uu)
          },
          Y4hT: function(uu) {
            return "string" === typeof Pu(uu)
          },
          knWi: function(uu, Eu) {
            const ju = Pu(Eu),
              su = "string" === typeof ju ? ju : void 0;
            var Uu, Zu = void 0 === (Uu = su) || null === Uu ? 0 : function(uu, Eu, ju) {
                if (void 0 === ju) {
                  const ju = iu.encode(uu),
                    su = Eu(ju.length, 1) >>> 0;
                  return au().subarray(su, su + ju.length).set(ju), Fu = ju.length, su
                }
                let su = uu.length,
                  Uu = Eu(su, 1) >>> 0;
                const Zu = au();
                let Xu = 0;
                for (; Xu < su; Xu++) {
                  const Eu = uu.charCodeAt(Xu);
                  if (Eu > 127) break;
                  Zu[Uu + Xu] = Eu
                }
                if (Xu !== su) {
                  0 !== Xu && (uu = uu.slice(Xu)), Uu = ju(Uu, su, su = Xu + 3 * uu.length, 1) >>> 0;
                  const Eu = au().subarray(Uu + Xu, Uu + su);
                  Xu += iu.encodeInto(uu, Eu).written, Uu = ju(Uu, su, Xu, 1) >>> 0
                }
                return Fu = Xu, Uu
              }(su, Iu.pW7f, Iu.zFC0),
              Xu = Fu;
            pu().setInt32(uu + 4, Xu, !0), pu().setInt32(uu + 0, Zu, !0)
          },
          cqPz: function(uu, Eu) {
            throw new Error(wu(uu, Eu))
          },
          CW1v: function(uu, Eu) {
            return Pu(uu).charCodeAt(Eu >>> 0)
          },
          YXyv: function(uu, Eu) {
            console.error(wu(uu, Eu))
          },
          wmyQ: function(uu) {
            return Pu(uu).length
          },
          xALL: function(uu, Eu) {
            return gu(wu(uu, Eu))
          },
          fYYa: function(uu) {
            Ku(uu)
          }
        }
      }
    }
    Symbol.dispose && (Uu.prototype[Symbol.dispose] = Uu.prototype.free);
    const Du = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((uu => Iu.ipd0(uu, 1)));

    function gu(uu) {
      ku === ou.length && ou.push(ou.length + 1);
      const Eu = ku;
      return ku = ou[Eu], ou[Eu] = uu, Eu
    }

    function Mu(uu, Eu) {
      uu >>>= 0;
      const ju = pu(),
        su = [];
      for (let Uu = uu; Uu < uu + 4 * Eu; Uu += 4) su.push(Ku(ju.getUint32(Uu, !0)));
      return su
    }

    function eu(uu, Eu) {
      return uu >>>= 0, au().subarray(uu / 1, uu / 1 + Eu)
    }
    let Gu = null;

    function pu() {
      return null !== Gu && Gu.buffer === Iu.memory.buffer || (Gu = new DataView(Iu.memory.buffer)), Gu
    }

    function wu(uu, Eu) {
      return function(uu, Eu) {
        Qu += Eu, Qu >= ru && (Vu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Vu.decode(), Qu = Eu);
        return Vu.decode(au().subarray(uu, uu + Eu))
      }(uu >>> 0, Eu)
    }
    let Ju = null;
    let du = null;

    function au() {
      return null !== du && 0 !== du.byteLength || (du = new Uint8Array(Iu.memory.buffer)), du
    }

    function Pu(uu) {
      return ou[uu]
    }
    let ou = new Array(1024).fill(void 0);
    ou.push(void 0, null, !0, !1);
    let ku = ou.length;

    function mu(uu, Eu) {
      const ju = Eu(4 * uu.length, 4) >>> 0;
      return (null !== Ju && 0 !== Ju.byteLength || (Ju = new Uint32Array(Iu.memory.buffer)), Ju).set(uu, ju / 4), Fu = uu.length, ju
    }

    function vu(uu, Eu) {
      const ju = Eu(4 * uu.length, 4) >>> 0,
        su = pu();
      for (let Uu = 0; Uu < uu.length; Uu++) su.setUint32(ju + 4 * Uu, gu(uu[Uu]), !0);
      return Fu = uu.length, ju
    }

    function Ku(uu) {
      const Eu = Pu(uu);
      return function(uu) {
        uu < 1028 || (ou[uu] = ku, ku = uu)
      }(uu), Eu
    }
    let Vu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Vu.decode();
    const ru = 2146435072;
    let Qu = 0;
    const iu = new TextEncoder;
    "encodeInto" in iu || (iu.encodeInto = function(uu, Eu) {
      const ju = iu.encode(uu);
      return Eu.set(ju), {
        read: uu.length,
        written: ju.length
      }
    });
    let Wu, Su, Iu, Fu = 0;

    function Bu(uu, Eu) {
      return Su = uu, Iu = uu.exports, Wu = Eu, Gu = null, Ju = null, du = null, Iu.KO7s(), Iu
    }

    function Lu(uu) {
      if (void 0 !== Iu) return Iu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eu = hu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return Bu(new WebAssembly.Instance(uu, Eu), uu)
    }
    async function tu(uu) {
      if (void 0 !== Iu) return Iu;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eu = hu();
      ("string" === typeof uu || "function" === typeof Request && uu instanceof Request || "function" === typeof URL && uu instanceof URL) && (uu = fetch(uu));
      const {
        instance: ju,
        module: su
      } = await async function(uu, Eu) {
        if ("function" === typeof Response && uu instanceof Response) {
          if (!uu.ok) throw new Error(`failed to fetch Wasm: ${uu.status} ${uu.statusText} fetching '${uu.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(uu, Eu)
          } catch (ju) {
            if (! function(uu) {
                switch (uu) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(uu.type) || "application/wasm" === uu.headers.get("Content-Type")) throw ju;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ju)
          }
          const su = await uu.arrayBuffer();
          return await WebAssembly.instantiate(su, Eu)
        } {
          const ju = await WebAssembly.instantiate(uu, Eu);
          return ju instanceof WebAssembly.Instance ? {
            instance: ju,
            module: uu
          } : ju
        }
      }(await uu, Eu);
      return Bu(ju, su)
    }
    var xu = ju(3020),
      Tu = ju(6818);
    class Hu extends Error {
      stage;
      constructor(uu, Eu) {
        super((0, xu.F)(uu, Eu), {
          cause: Eu
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = uu
      }
    }
    let Au = null,
      nu = null;

    function yu() {
      return Au ? Promise.resolve(Au) : (nu || (nu = async function() {
        let uu;
        try {
          uu = await (0, xu.I)(new ju.U(ju(6822)), (0, Tu.b)("bloxd_wasm_shader_pack"))
        } catch (Eu) {
          throw new Hu((0, xu.L)(Eu), Eu)
        }
        try {
          await tu({
            module_or_path: uu
          })
        } catch (Eu) {
          throw new Hu("instantiate", Eu)
        }
        return Au = su, Au
      }(), nu.then(void 0, (() => {
        nu = null
      }))), nu)
    }
    var zu = ju(6836);

    function Ru(uu) {
      let [Eu, ju, su, Uu] = uu;
      const Zu = {
        file: Eu,
        line: ju,
        message: su
      };
      return Uu && (Zu.variants = Uu.map(zu.m)), Zu
    }

    function uE(uu) {
      return JSON.parse(uu).map(Ru)
    }

    function EE(uu, Eu) {
      if (!Number.isInteger(uu) || uu < 0 || uu > 4294967295) throw new Error(`${Eu} ${uu} is not a whole number from 0 to 4294967295`);
      return uu
    }

    function jE(uu) {
      return [uu.named.map((uu => uu.name)), Uint32Array.from(uu.named, (uu => EE(uu.id, "Texture ID")))]
    }
    const sE = new WeakMap;
    const UE = new WeakMap,
      ZE = new WeakSet;

    function XE(uu, Eu) {
      if (ZE.has(uu)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Eu()
      } catch (ju) {
        throw ju instanceof WebAssembly.RuntimeError && ZE.add(uu), ju
      }
    }

    function lE(uu) {
      let Eu = UE.get(uu);
      if (!Eu) {
        let ju, su;
        Eu = {
          luu: (Eu, ju) => XE(uu, (() => function(uu, Eu, ju) {
            const su = uu.luu(Eu.map((uu => uu.path)), Eu.map((uu => uu.source)), ...jE(ju), ju.aliases.map((uu => uu.name)), ju.aliases.map((uu => uu.texture)), ju.aliases.map((uu => uu.kind)));
            let Uu = !1;
            try {
              const uu = su.validationModuleCodes,
                Eu = Array.from(su.validationModuleKeys, ((Eu, ju) => ({
                  key: (0, zu.m)(Eu),
                  code: uu[ju]
                }))),
                ju = {
                  errors: uE(su.eUu),
                  offInStrict: uE(su.GUu),
                  variants: (0, zu.f)(su),
                  validationModules: Eu,
                  features: su.features
                };
              return Eu.forEach(((uu, Eu) => {
                sE.set(uu, {
                  pack: su,
                  index: Eu
                })
              })), Uu = Eu.length > 0, ju
            } finally {
              Uu || su.free()
            }
          }(uu, Eu, ju))),
          mapValidationMessage: (Eu, ju) => {
            const su = sE.get(Eu);
            if (!su) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return Ru(JSON.parse(XE(uu, (() => su.pack.mapValidationMessage(su.index, ju.lineNum, ju.linePos, ju.message, ju.type)))))
          },
          Rju: Eu => XE(uu, (() => function(uu, Eu) {
            const ju = new Int32Array(Eu.length),
              su = [];
            return Eu.forEach(((uu, Eu) => {
              ju[Eu] = uu.variants ? uu.variants.length : -1;
              for (const ju of uu.variants ?? []) su.push((0, zu.j)(ju))
            })), uE(uu.Rju(Eu.map((uu => uu.file)), Uint32Array.from(Eu, (uu => EE(uu.line, "Diagnostic line"))), Eu.map((uu => uu.message)), ju, Uint8Array.from(su)))
          }(uu, Eu))),
          fV: Eu => XE(uu, (() => uu.fV(...jE(Eu)))),
          get SHADER_PACK_HEADER_VERSION() {
            return ju ??= XE(uu, (() => uu.gUu())), ju
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return su ??= XE(uu, (() => {
              const Eu = uu.YUu();
              return uu.OUu().map(((uu, ju) => ({
                path: uu,
                source: Eu[ju]
              })))
            })), su
          },
          MUu: Eu => XE(uu, (() => uu.MUu(Eu))),
          resolveHeader: Eu => XE(uu, (() => uu.DUu((0, zu.j)(Eu)))),
          hUu: () => XE(uu, (() => uu.hUu()))
        }, UE.set(uu, Eu)
      }
      return Eu
    }
    var qE = ju(3396),
      fE = ju(6827);
    const CE = "bloxdShaderPackWasmFailureReported";
    let bE = null;

    function cE() {
      return bE ??= async function() {
        if ("undefined" === typeof WebAssembly) return NE("unsupported", "This browser has no WebAssembly"), null;
        const uu = (0, fE.loadShaderPackTextures)().then((() => !0), (uu => (console.error("Could not load the shader pack textures, so shader packs can't run", uu), !1)));
        try {
          const Eu = await async function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yu;
            return lE(await uu())
          }();
          return await uu ? Eu : null
        } catch (Eu) {
          const uu = Eu instanceof Error ? Eu.message : String(Eu);
          return NE(qE.e[Eu instanceof Hu ? Eu.stage : "instantiate"], uu), null
        }
      }(), bE
    }

    function NE(uu, Eu) {
      (0, qE.m)(CE, `Shader pack wasm ${uu}, so shader packs can't run: ${Eu}`, Eu, `shader_pack_${uu}`)
    }
  },
  6822: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_shader_pack_bg.1fbc30ed80dc8412b37b.wasm"
  },
  6818: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(3020);
    const Uu = {
      bloxd_wasm: () => "2517ea48b70adb2315dde407aac9f7771c8f8fed4679df16a67d4f64e16c0ca4",
      bloxd_wasm_client: () => "8e3f5c7e0ae9778e8a2bd555c9edea34e1d676dc84c47647f9c7991c78833b4b",
      bloxd_wasm_workers: () => "d314ffb1d191d7f6e9dac1c5f780237cb88fc08431e4e713d1c31afadf5b76c9",
      bloxd_wasm_models: () => "42b4348bfb4c39f2510c78f8a28323e13b143f72ae8226764cf2206b470c6fb3",
      bloxd_wasm_webgpu: () => "c94f0ae845af7c64763dcb834061b20260ad6971d870317f9bca33a9ff0b5ef7",
      bloxd_wasm_webgl: () => "38da11f9eab49b5d8f0185157a6a5ad6178e22840ff20a445e1f5249ac36cd91",
      bloxd_wasm_webgl1: () => "ab1532b525d3a2188fd7631f21987906e6be9fdd62b14c0c03f54625410b4948",
      bloxd_wasm_replay: () => "1c1690d0d143f51a770a1ac88fb427efc12cb7c4ca9f74446ee285cbe1e29b0f",
      bloxd_wasm_recorder: () => "97298cfd514093207f0c3863193df40fc2a4be3f5101bb93ee5a1dc7efa69233",
      bloxd_wasm_anim: () => "b0759d22815334552b8854b47c63eec9a03952d38dd1a922a5af613c34fa435b",
      bloxd_wasm_textures: () => "4f2ee2890c6dcabbc98355370ba732664c4dbb0f4dd616c0ecd33a7f045a54d2",
      bloxd_wasm_shader_pack: () => "920f59d8c3d7cd8bfe52d0c86bce310b93a17cac0f77c75edad8ee229808259a"
    };
    var Zu = ju(4874);

    function Xu(uu) {
      const Eu = Object.prototype.hasOwnProperty.call(Uu, uu) ? Uu[uu]() : void 0;
      if (void 0 !== Eu) return {
        sha256: Eu,
        onMismatch: Zu.B
      };
      throw new su.j(`${uu} has no release digest, so this build refuses it`)
    }
  },
  6836: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => eu,
      f: () => Gu,
      j: () => gu,
      m: () => Du
    });
    var su = ju(6840);
    const Uu = 6,
      Zu = 3,
      Xu = 1,
      lu = 2,
      qu = 4,
      fu = 8,
      Cu = 16,
      bu = 32,
      cu = 64,
      Nu = 128,
      Ou = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Yu(uu) {
      if (!uu) return 0;
      const Eu = Ou.indexOf(uu);
      if (Eu <= 0) throw new Error(`"${uu}" is not a shader pack hook function`);
      return Eu
    }

    function hu(uu) {
      if (0 === uu) return null;
      const Eu = Ou[uu];
      if (void 0 === Eu) throw new Error(`${uu} is not a shader pack hook function id`);
      return Eu
    }

    function Du(uu) {
      const Eu = su.b.length;
      return {
        strict: uu >= Eu,
        program: su.b[uu % Eu]
      }
    }

    function gu(uu) {
      return Number(uu.strict) * su.b.length + su.b.indexOf(uu.program)
    }

    function Mu(uu) {
      return "" === uu ? [] : uu.split(" ")
    }

    function eu(uu) {
      const Eu = {
        variantFlags: new Uint8Array(Uu),
        hooks: new Uint8Array(Uu * Zu),
        moduleCodes: Array(Uu).fill(""),
        reads: Array(2 * Uu).fill("")
      };
      for (const ju of uu) {
        const uu = gu(ju.key),
          su = (uu, Eu) => null === ju.hooks.surface || ju.reads.fragment.includes(uu) ? 0 : Eu;
        Eu.variantFlags[uu] = (ju.sceneDepth ? Xu : 0) | (ju.movesVertices ? lu : 0) | (ju.sunShadow ? qu : 0) | (ju.airShadow ? fu : 0) | (ju.discards ? Cu : 0) | su("localPosition", bu) | su("enchantSpeed", cu) | su("enchantTier", Nu), Eu.hooks[uu * Zu] = Yu(ju.hooks.vertex), Eu.hooks[uu * Zu + 1] = Yu(ju.hooks.surface), Eu.hooks[uu * Zu + 2] = Yu(ju.hooks.light), Eu.moduleCodes[uu] = ju.moduleCode, Eu.reads[2 * uu] = ju.reads.vertex.join(" "), Eu.reads[2 * uu + 1] = ju.reads.fragment.join(" ")
      }
      return Eu
    }

    function Gu(uu) {
      const {
        hooks: Eu,
        moduleCodes: ju,
        reads: su
      } = uu;
      return Array.from(uu.variantFlags, ((uu, Uu) => {
        const bu = Uu * Zu;
        return {
          key: Du(Uu),
          hooks: {
            vertex: hu(Eu[bu]),
            surface: hu(Eu[bu + 1]),
            light: hu(Eu[bu + 2])
          },
          moduleCode: ju[Uu],
          sceneDepth: 0 !== (uu & Xu),
          sunShadow: 0 !== (uu & qu),
          airShadow: 0 !== (uu & fu),
          movesVertices: 0 !== (uu & lu),
          discards: 0 !== (uu & Cu),
          reads: {
            vertex: Mu(su[2 * Uu]),
            fragment: Mu(su[2 * Uu + 1])
          }
        }
      }))
    }
  },
  6840: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => Xu,
      i: () => lu,
      j: () => Uu,
      l: () => Zu
    });
    const su = ["terrain", "liquid", "model"];

    function Uu() {
      const uu = [];
      for (const Eu of [!1, !0])
        for (const ju of su) uu.push({
          strict: Eu,
          program: ju
        });
      return uu
    }

    function Zu(uu) {
      return `${uu.strict?"strict":"allow"}.${uu.program}`
    }

    function Xu(uu) {
      return !uu.hooks.vertex && !uu.hooks.surface && !uu.hooks.light
    }

    function lu(uu, Eu) {
      return "off" !== Eu && (null === uu || uu.some((uu => uu.key.strict === ("strict" === Eu) && !Xu(uu))))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);