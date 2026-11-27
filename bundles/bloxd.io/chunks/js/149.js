export const id = 149;
export const ids = [149];
export const modules = {
  7249: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadPageShaderPackCompiler: () => qi
    });
    var ye = {};
    He.r(ye), He.d(ye, {
      hMe: () => be,
      vie: () => Me,
      default: () => ne,
      NMe: () => Ke,
      GMe: () => Ue,
      initSync: () => Se,
      uR: () => Fe,
      Lbe: () => Je,
      rMe: () => oe,
      QMe: () => Re,
      mV: () => ke,
      eKe: () => qe,
      cV: () => fe,
      iKe: () => Te
    });
    class be {
      static __wrap(ee) {
        const ie = Object.create(be.prototype);
        return ie.__wbg_ptr = ee, Xe.register(ie, ie.__wbg_ptr, ie), ie
      }
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Xe.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        ue.DvtQ(ee, 0)
      }
      get HKe() {
        let ee, ie;
        try {
          const He = ue.acWZ(this.__wbg_ptr);
          return ee = He[0], ie = He[1], de(He[0], He[1])
        } finally {
          ue.tO2i(ee, ie, 1)
        }
      }
      get features() {
        const ee = ue.HTih(this.__wbg_ptr);
        var ie = Be(ee[0], ee[1]);
        return ue.tO2i(ee[0], 4 * ee[1], 4), ie
      }
      get hooks() {
        const ee = ue.UWDQ(this.__wbg_ptr);
        var ie = Ee(ee[0], ee[1]).slice();
        return ue.tO2i(ee[0], 1 * ee[1], 1), ie
      }
      mapValidationMessage(ee, ie, He, ye, be) {
        let Me, Ke;
        try {
          const Je = ue.W6Qr(this.__wbg_ptr, ee, ie, He, ze(ye), ze(be));
          var Ue = Je[0],
            Fe = Je[1];
          if (Je[3]) throw Ue = 0, Fe = 0, Ve(Je[2]);
          return Me = Ue, Ke = Fe, de(Ue, Fe)
        } finally {
          ue.tO2i(Me, Ke, 1)
        }
      }
      get moduleCodes() {
        const ee = ue.Y2ri(this.__wbg_ptr);
        var ie = Be(ee[0], ee[1]);
        return ue.tO2i(ee[0], 4 * ee[1], 4), ie
      }
      get yKe() {
        let ee, ie;
        try {
          const He = ue.CKHo(this.__wbg_ptr);
          return ee = He[0], ie = He[1], de(He[0], He[1])
        } finally {
          ue.tO2i(ee, ie, 1)
        }
      }
      get reads() {
        const ee = ue.qUed(this.__wbg_ptr);
        var ie = Be(ee[0], ee[1]);
        return ue.tO2i(ee[0], 4 * ee[1], 4), ie
      }
      get validationModuleCodes() {
        const ee = ue.PGNY(this.__wbg_ptr);
        var ie = Be(ee[0], ee[1]);
        return ue.tO2i(ee[0], 4 * ee[1], 4), ie
      }
      get validationModuleKeys() {
        const ee = ue.QmTq(this.__wbg_ptr);
        var ie = Ee(ee[0], ee[1]).slice();
        return ue.tO2i(ee[0], 1 * ee[1], 1), ie
      }
      get variantFlags() {
        const ee = ue.hxyF(this.__wbg_ptr);
        var ie = Ee(ee[0], ee[1]).slice();
        return ue.tO2i(ee[0], 1 * ee[1], 1), ie
      }
    }

    function Me(ee, ie, He, ye, Me, Ke, Ue) {
      const Fe = Ye(ee, ue.pMyQ),
        Je = me,
        oe = Ye(ie, ue.pMyQ),
        Re = me,
        ke = Ye(He, ue.pMyQ),
        qe = me,
        fe = Ae(ye, ue.pMyQ),
        Te = me,
        pe = Ye(Me, ue.pMyQ),
        Xe = me,
        ze = Ye(Ke, ue.pMyQ),
        Be = me,
        Ee = Ye(Ue, ue.pMyQ),
        ge = me,
        Oe = ue.dWP1(Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge);
      if (Oe[2]) throw Ve(Oe[1]);
      return be.__wrap(Oe[0])
    }

    function Ke() {
      const ee = ue.rVVm();
      var ie = Be(ee[0], ee[1]);
      return ue.tO2i(ee[0], 4 * ee[1], 4), ie
    }

    function Ue() {
      const ee = ue.Ixxl();
      var ie = Be(ee[0], ee[1]);
      return ue.tO2i(ee[0], 4 * ee[1], 4), ie
    }

    function Fe() {
      ue.dbYX()
    }

    function Je(ee, ie, He, ye, be) {
      let Me, Ke;
      try {
        const Je = Ye(ee, ue.pMyQ),
          oe = me,
          Re = Ae(ie, ue.pMyQ),
          ke = me,
          qe = Ye(He, ue.pMyQ),
          fe = me,
          Te = Ae(ye, ue.pMyQ),
          pe = me,
          Xe = function(ee, ie) {
            const He = ie(1 * ee.length, 1) >>> 0;
            return Ze().set(ee, He / 1), me = ee.length, He
          }(be, ue.pMyQ),
          ze = me,
          Be = ue.KXQg(Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze);
        var Ue = Be[0],
          Fe = Be[1];
        if (Be[3]) throw Ue = 0, Fe = 0, Ve(Be[2]);
        return Me = Ue, Ke = Fe, de(Ue, Fe)
      } finally {
        ue.tO2i(Me, Ke, 1)
      }
    }

    function oe() {
      let ee, ie;
      try {
        const He = ue.O2JA();
        return ee = He[0], ie = He[1], de(He[0], He[1])
      } finally {
        ue.tO2i(ee, ie, 1)
      }
    }

    function Re(ee) {
      let ie, He;
      try {
        const Me = ue.ttqV(ee);
        var ye = Me[0],
          be = Me[1];
        if (Me[3]) throw ye = 0, be = 0, Ve(Me[2]);
        return ie = ye, He = be, de(ye, be)
      } finally {
        ue.tO2i(ie, He, 1)
      }
    }

    function ke() {
      return ue.fLoE() >>> 0
    }

    function qe() {
      let ee, ie;
      try {
        const He = ue.grXd();
        return ee = He[0], ie = He[1], de(He[0], He[1])
      } finally {
        ue.tO2i(ee, ie, 1)
      }
    }

    function fe(ee, ie) {
      let He, ye;
      try {
        const Ke = Ye(ee, ue.pMyQ),
          Ue = me,
          Fe = Ae(ie, ue.pMyQ),
          Je = me,
          oe = ue.n3wo(Ke, Ue, Fe, Je);
        var be = oe[0],
          Me = oe[1];
        if (oe[3]) throw be = 0, Me = 0, Ve(oe[2]);
        return He = be, ye = Me, de(be, Me)
      } finally {
        ue.tO2i(He, ye, 1)
      }
    }

    function Te(ee) {
      let ie, He;
      try {
        const Me = ue.K0XC(ze(ee));
        var ye = Me[0],
          be = Me[1];
        if (Me[3]) throw ye = 0, be = 0, Ve(Me[2]);
        return ie = ye, He = be, de(ye, be)
      } finally {
        ue.tO2i(ie, He, 1)
      }
    }

    function pe() {
      return {
        __proto__: null,
        OzgS: {
          __proto__: null,
          no4O: function(ee, ie) {
            return ze(Error(de(ee, ie)))
          },
          DFus: function(ee) {
            return null === we(ee)
          },
          svg3: function(ee) {
            return "string" === typeof we(ee)
          },
          IHu7: function(ee, ie) {
            const He = we(ie),
              ye = "string" === typeof He ? He : void 0;
            var be, Me = void 0 === (be = ye) || null === be ? 0 : function(ee, ie, He) {
                if (void 0 === He) {
                  const He = Le.encode(ee),
                    ye = ie(He.length, 1) >>> 0;
                  return Ze().subarray(ye, ye + He.length).set(He), me = He.length, ye
                }
                let ye = ee.length,
                  be = ie(ye, 1) >>> 0;
                const Me = Ze();
                let Ke = 0;
                for (; Ke < ye; Ke++) {
                  const ie = ee.charCodeAt(Ke);
                  if (ie > 127) break;
                  Me[be + Ke] = ie
                }
                if (Ke !== ye) {
                  0 !== Ke && (ee = ee.slice(Ke)), be = He(be, ye, ye = Ke + 3 * ee.length, 1) >>> 0;
                  const ie = Ze().subarray(be + Ke, be + ye);
                  Ke += Le.encodeInto(ee, ie).written, be = He(be, ye, Ke, 1) >>> 0
                }
                return me = Ke, be
              }(ye, ue.pMyQ, ue.XeH4),
              Ke = me;
            Oe().setInt32(ee + 4, Ke, !0), Oe().setInt32(ee + 0, Me, !0)
          },
          A8Pk: function(ee, ie) {
            throw new Error(de(ee, ie))
          },
          No7d: function(ee, ie) {
            return we(ee).charCodeAt(ie >>> 0)
          },
          hROD: function(ee, ie) {
            console.error(de(ee, ie))
          },
          NVS5: function(ee) {
            return we(ee).length
          },
          jQsO: function(ee, ie) {
            return ze(de(ee, ie))
          },
          OOAp: function(ee) {
            Ve(ee)
          }
        }
      }
    }
    Symbol.dispose && (be.prototype[Symbol.dispose] = be.prototype.free);
    const Xe = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((ee => ue.DvtQ(ee, 1)));

    function ze(ee) {
      Pe === De.length && De.push(De.length + 1);
      const ie = Pe;
      return Pe = De[ie], De[ie] = ee, ie
    }

    function Be(ee, ie) {
      ee >>>= 0;
      const He = Oe(),
        ye = [];
      for (let be = ee; be < ee + 4 * ie; be += 4) ye.push(Ve(He.getUint32(be, !0)));
      return ye
    }

    function Ee(ee, ie) {
      return ee >>>= 0, Ze().subarray(ee / 1, ee / 1 + ie)
    }
    let ge = null;

    function Oe() {
      return null !== ge && ge.buffer === ue.memory.buffer || (ge = new DataView(ue.memory.buffer)), ge
    }

    function de(ee, ie) {
      return function(ee, ie) {
        xe += ie, xe >= ce && (ae = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ae.decode(), xe = ie);
        return ae.decode(Ze().subarray(ee, ee + ie))
      }(ee >>> 0, ie)
    }
    let We = null;
    let te = null;

    function Ze() {
      return null !== te && 0 !== te.byteLength || (te = new Uint8Array(ue.memory.buffer)), te
    }

    function we(ee) {
      return De[ee]
    }
    let De = new Array(1024).fill(void 0);
    De.push(void 0, null, !0, !1);
    let Pe = De.length;

    function Ae(ee, ie) {
      const He = ie(4 * ee.length, 4) >>> 0;
      return (null !== We && 0 !== We.byteLength || (We = new Uint32Array(ue.memory.buffer)), We).set(ee, He / 4), me = ee.length, He
    }

    function Ye(ee, ie) {
      const He = ie(4 * ee.length, 4) >>> 0,
        ye = Oe();
      for (let be = 0; be < ee.length; be++) ye.setUint32(He + 4 * be, ze(ee[be]), !0);
      return me = ee.length, He
    }

    function Ve(ee) {
      const ie = we(ee);
      return function(ee) {
        ee < 1028 || (De[ee] = Pe, Pe = ee)
      }(ee), ie
    }
    let ae = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ae.decode();
    const ce = 2146435072;
    let xe = 0;
    const Le = new TextEncoder;
    "encodeInto" in Le || (Le.encodeInto = function(ee, ie) {
      const He = Le.encode(ee);
      return ie.set(He), {
        read: ee.length,
        written: He.length
      }
    });
    let Ce, ve, ue, me = 0;

    function le(ee, ie) {
      return ve = ee, ue = ee.exports, Ce = ie, ge = null, We = null, te = null, ue.Iu3Y(), ue
    }

    function Se(ee) {
      if (void 0 !== ue) return ue;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module: ee
      } = ee) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ie = pe();
      ee instanceof WebAssembly.Module || (ee = new WebAssembly.Module(ee));
      return le(new WebAssembly.Instance(ee, ie), ee)
    }
    async function ne(ee) {
      if (void 0 !== ue) return ue;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module_or_path: ee
      } = ee) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ie = pe();
      ("string" === typeof ee || "function" === typeof Request && ee instanceof Request || "function" === typeof URL && ee instanceof URL) && (ee = fetch(ee));
      const {
        instance: He,
        module: ye
      } = await async function(ee, ie) {
        if ("function" === typeof Response && ee instanceof Response) {
          if (!ee.ok) throw new Error(`failed to fetch Wasm: ${ee.status} ${ee.statusText} fetching '${ee.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(ee, ie)
          } catch (He) {
            if (! function(ee) {
                switch (ee) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(ee.type) || "application/wasm" === ee.headers.get("Content-Type")) throw He;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", He)
          }
          const ye = await ee.arrayBuffer();
          return await WebAssembly.instantiate(ye, ie)
        } {
          const He = await WebAssembly.instantiate(ee, ie);
          return He instanceof WebAssembly.Instance ? {
            instance: He,
            module: ee
          } : He
        }
      }(await ee, ie);
      return le(He, ye)
    }
    var je = He(3101),
      se = He(7251);
    class Ie extends Error {
      stage;
      constructor(ee, ie) {
        super((0, je.A)(ee, ie), {
          cause: ie
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = ee
      }
    }
    let he = null,
      Ne = null;

    function Ge() {
      return he ? Promise.resolve(he) : (Ne || (Ne = async function() {
        let ee;
        try {
          ee = await (0, je.B)(new He.U(He(7256)), (0, se.d)("bloxd_wasm_shader_pack"))
        } catch (ie) {
          throw new Ie((0, je.J)(ie), ie)
        }
        try {
          await ne({
            module_or_path: ee
          })
        } catch (ie) {
          throw new Ie("instantiate", ie)
        }
        return he = ye, he
      }(), Ne.then(void 0, (() => {
        Ne = null
      }))), Ne)
    }
    var re = He(7268);

    function Qe(ee) {
      let [ie, He, ye, be] = ee;
      const Me = {
        file: ie,
        line: He,
        message: ye
      };
      return be && (Me.variants = be.map(re.k)), Me
    }

    function ei(ee) {
      return JSON.parse(ee).map(Qe)
    }

    function ii(ee, ie) {
      if (!Number.isInteger(ee) || ee < 0 || ee > 4294967295) throw new Error(`${ie} ${ee} is not a whole number from 0 to 4294967295`);
      return ee
    }

    function Hi(ee) {
      return [ee.named.map((ee => ee.name)), Uint32Array.from(ee.named, (ee => ii(ee.id, "Texture ID")))]
    }
    const yi = new WeakMap;
    const bi = new WeakMap,
      Mi = new WeakSet;

    function Ki(ee, ie) {
      if (Mi.has(ee)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return ie()
      } catch (He) {
        throw He instanceof WebAssembly.RuntimeError && Mi.add(ee), He
      }
    }

    function Ui(ee) {
      let ie = bi.get(ee);
      if (!ie) {
        let He, ye;
        ie = {
          vie: (ie, He) => Ki(ee, (() => function(ee, ie, He) {
            const ye = ee.vie(ie.map((ee => ee.path)), ie.map((ee => ee.source)), ...Hi(He), He.aliases.map((ee => ee.name)), He.aliases.map((ee => ee.texture)), He.aliases.map((ee => ee.kind)));
            let be = !1;
            try {
              const ee = ye.validationModuleCodes,
                ie = Array.from(ye.validationModuleKeys, ((ie, He) => ({
                  key: (0, re.k)(ie),
                  code: ee[He]
                }))),
                He = {
                  errors: ei(ye.HKe),
                  offInStrict: ei(ye.yKe),
                  variants: (0, re.e)(ye),
                  validationModules: ie,
                  features: ye.features
                };
              return ie.forEach(((ee, ie) => {
                yi.set(ee, {
                  pack: ye,
                  index: ie
                })
              })), be = ie.length > 0, He
            } finally {
              be || ye.free()
            }
          }(ee, ie, He))),
          mapValidationMessage: (ie, He) => {
            const ye = yi.get(ie);
            if (!ye) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return Qe(JSON.parse(Ki(ee, (() => ye.pack.mapValidationMessage(ye.index, He.lineNum, He.linePos, He.message, He.type)))))
          },
          Lbe: ie => Ki(ee, (() => function(ee, ie) {
            const He = new Int32Array(ie.length),
              ye = [];
            return ie.forEach(((ee, ie) => {
              He[ie] = ee.variants ? ee.variants.length : -1;
              for (const He of ee.variants ?? []) ye.push((0, re.g)(He))
            })), ei(ee.Lbe(ie.map((ee => ee.file)), Uint32Array.from(ie, (ee => ii(ee.line, "Diagnostic line"))), ie.map((ee => ee.message)), He, Uint8Array.from(ye)))
          }(ee, ie))),
          cV: ie => Ki(ee, (() => ee.cV(...Hi(ie)))),
          get SHADER_PACK_HEADER_VERSION() {
            return He ??= Ki(ee, (() => ee.eKe())), He
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return ye ??= Ki(ee, (() => {
              const ie = ee.GMe();
              return ee.NMe().map(((ee, He) => ({
                path: ee,
                source: ie[He]
              })))
            })), ye
          },
          iKe: ie => Ki(ee, (() => ee.iKe(ie))),
          resolveHeader: ie => Ki(ee, (() => ee.QMe((0, re.g)(ie)))),
          rMe: () => Ki(ee, (() => ee.rMe()))
        }, bi.set(ee, ie)
      }
      return ie
    }
    var Fi = He(3543),
      Ji = He(3565),
      oi = He(7262);
    const Ri = "bloxdShaderPackWasmFailureReported";
    let ki = null;

    function qi() {
      return ki ??= async function() {
        if ("undefined" === typeof WebAssembly) return fi("unsupported", "This browser has no WebAssembly"), null;
        const ee = (0, oi.loadShaderPackTextures)().then((() => !0), (ee => (console.error("Could not load the shader pack textures, so shader packs can't run", ee), !1)));
        try {
          await (0, Ji.g)();
          const ie = await async function() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge;
            return Ui(await ee())
          }();
          return await ee ? ie : null
        } catch (ie) {
          const ee = ie instanceof Error ? ie.message : String(ie);
          return fi(Fi.d[ie instanceof Ie ? ie.stage : "instantiate"], ee), null
        }
      }(), ki
    }

    function fi(ee, ie) {
      (0, Fi.h)(Ri, `Shader pack wasm ${ee}, so shader packs can't run: ${ie}`, ie, `shader_pack_${ee}`)
    }
  },
  7256: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_shader_pack_bg.38898a4f2e07504bf559.wasm"
  },
  7251: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(3101);
    const be = {
      bloxd_wasm: () => "e02d54b065b2f499b180e1b3347d16df55a2947d0e605d2078a3d3b6da48d9a9",
      bloxd_wasm_client: () => "c679f6743194014168c148d06b29ff43ac2ebd65af96551ab04742237da2cbc0",
      bloxd_wasm_workers: () => "64996202cfa4b1e69476b5072e56b0cfcea62edff120e603bbcded9c0cc2f2b2",
      bloxd_wasm_models: () => "d8940e8e7ccbe7fea2cc7bbf2297c0d75ddbf7e4f7faf3d9bb2ad0765fbba5c2",
      bloxd_wasm_webgpu: () => "cf5aebafb7e2919918851e5ade65769e47a6978ba139ea29c093aa7d03105200",
      bloxd_wasm_webgl: () => "8ae617ef40b6df6e9c6b2b4fb13fbb620e731d320ec11ddc75acee07da832d88",
      bloxd_wasm_webgl1: () => "5541e97c52b53f4d16d1e55f9d8eb127812f263b741e67830d3bb080322b1915",
      bloxd_wasm_replay: () => "fa06c4ee5e806830b3ad4c2e2323335346c04bf67f500d15ce0c53d3a6cad80e",
      bloxd_wasm_recorder: () => "f6eb834fb863f1cd66bacc3bb3d9505f0a66acb7d26cea69ffc0ae9f1664e920",
      bloxd_wasm_anim: () => "b7f47661c5c9230379971e76cc8f09962d7323de4ff12c8fdf43c1fd62033f90",
      bloxd_wasm_textures: () => "5c62f6a16c856ae74984e597d42471c5a63fb99862f370b47f78d95328e7a101",
      bloxd_wasm_shader_pack: () => "e3e6a3571f741530e11f118b8afcc85da15081a89450db4b464665c2ed09dc09"
    };
    var Me = He(5153);

    function Ke(ee) {
      const ie = Object.prototype.hasOwnProperty.call(be, ee) ? be[ee]() : void 0;
      if (void 0 !== ie) return {
        sha256: ie,
        onMismatch: Me.B
      };
      throw new ye.i(`${ee} has no release digest, so this build refuses it`)
    }
  },
  7268: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ee,
      e: () => ge,
      g: () => ze,
      k: () => Xe
    });
    var ye = He(7276);
    const be = 6,
      Me = 3,
      Ke = 1,
      Ue = 2,
      Fe = 4,
      Je = 8,
      oe = 16,
      Re = 32,
      ke = 64,
      qe = 128,
      fe = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Te(ee) {
      if (!ee) return 0;
      const ie = fe.indexOf(ee);
      if (ie <= 0) throw new Error(`"${ee}" is not a shader pack hook function`);
      return ie
    }

    function pe(ee) {
      if (0 === ee) return null;
      const ie = fe[ee];
      if (void 0 === ie) throw new Error(`${ee} is not a shader pack hook function id`);
      return ie
    }

    function Xe(ee) {
      const ie = ye.d.length;
      return {
        strict: ee >= ie,
        program: ye.d[ee % ie]
      }
    }

    function ze(ee) {
      return Number(ee.strict) * ye.d.length + ye.d.indexOf(ee.program)
    }

    function Be(ee) {
      return "" === ee ? [] : ee.split(" ")
    }

    function Ee(ee) {
      const ie = {
        variantFlags: new Uint8Array(be),
        hooks: new Uint8Array(be * Me),
        moduleCodes: Array(be).fill(""),
        reads: Array(2 * be).fill("")
      };
      for (const He of ee) {
        const ee = ze(He.key),
          ye = (ee, ie) => null === He.hooks.surface || He.reads.fragment.includes(ee) ? 0 : ie;
        ie.variantFlags[ee] = (He.sceneDepth ? Ke : 0) | (He.movesVertices ? Ue : 0) | (He.sunShadow ? Fe : 0) | (He.airShadow ? Je : 0) | (He.discards ? oe : 0) | ye("localPosition", Re) | ye("enchantSpeed", ke) | ye("enchantTier", qe), ie.hooks[ee * Me] = Te(He.hooks.vertex), ie.hooks[ee * Me + 1] = Te(He.hooks.surface), ie.hooks[ee * Me + 2] = Te(He.hooks.light), ie.moduleCodes[ee] = He.moduleCode, ie.reads[2 * ee] = He.reads.vertex.join(" "), ie.reads[2 * ee + 1] = He.reads.fragment.join(" ")
      }
      return ie
    }

    function ge(ee) {
      const {
        hooks: ie,
        moduleCodes: He,
        reads: ye
      } = ee;
      return Array.from(ee.variantFlags, ((ee, be) => {
        const Re = be * Me;
        return {
          key: Xe(be),
          hooks: {
            vertex: pe(ie[Re]),
            surface: pe(ie[Re + 1]),
            light: pe(ie[Re + 2])
          },
          moduleCode: He[be],
          sceneDepth: 0 !== (ee & Ke),
          sunShadow: 0 !== (ee & Fe),
          airShadow: 0 !== (ee & Je),
          movesVertices: 0 !== (ee & Ue),
          discards: 0 !== (ee & oe),
          reads: {
            vertex: Be(ye[2 * be]),
            fragment: Be(ye[2 * be + 1])
          }
        }
      }))
    }
  },
  7276: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      h: () => Ke,
      l: () => Ue,
      m: () => be,
      o: () => Me
    });
    const ye = ["terrain", "liquid", "model"];

    function be() {
      const ee = [];
      for (const ie of [!1, !0])
        for (const He of ye) ee.push({
          strict: ie,
          program: He
        });
      return ee
    }

    function Me(ee) {
      return `${ee.strict?"strict":"allow"}.${ee.program}`
    }

    function Ke(ee) {
      return !ee.hooks.vertex && !ee.hooks.surface && !ee.hooks.light
    }

    function Ue(ee, ie) {
      return "off" !== ie && (null === ee || ee.some((ee => ee.key.strict === ("strict" === ie) && !Ke(ee))))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);