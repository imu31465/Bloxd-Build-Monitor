export const id = 132;
export const ids = [132];
export const modules = {
  6114: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      loadPageShaderPackCompiler: () => Lo
    });
    var iT = {};
    IT.r(iT), IT.d(iT, {
      siT: () => zT,
      v_: () => kT,
      default: () => tT,
      tiT: () => WT,
      GiT: () => XT,
      initSync: () => sT,
      LD: () => BT,
      EIT: () => FT,
      piT: () => ST,
      biT: () => DT,
      lC: () => LT,
      yiT: () => xT,
      ZC: () => cT,
      NiT: () => KT
    });
    class zT {
      static __wrap(TT) {
        const oT = Object.create(zT.prototype);
        return oT.__wbg_ptr = TT, rT.register(oT, oT.__wbg_ptr, oT), oT
      }
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qT.fObX(TT, 0)
      }
      get errorsJson() {
        let TT, oT;
        try {
          const IT = qT.Iyh0(this.__wbg_ptr);
          return TT = IT[0], oT = IT[1], eT(IT[0], IT[1])
        } finally {
          qT.NMYn(TT, oT, 1)
        }
      }
      get features() {
        const TT = qT.Lnbn(this.__wbg_ptr);
        var oT = gT(TT[0], TT[1]);
        return qT.NMYn(TT[0], 4 * TT[1], 4), oT
      }
      get hooks() {
        const TT = qT.y2Qx(this.__wbg_ptr);
        var oT = hT(TT[0], TT[1]).slice();
        return qT.NMYn(TT[0], 1 * TT[1], 1), oT
      }
      mapValidationMessage(TT, oT, IT, iT, zT) {
        let kT, WT;
        try {
          const FT = qT.TVcu(this.__wbg_ptr, TT, oT, IT, AT(iT), AT(zT));
          var XT = FT[0],
            BT = FT[1];
          if (FT[3]) throw XT = 0, BT = 0, UT(FT[2]);
          return kT = XT, WT = BT, eT(XT, BT)
        } finally {
          qT.NMYn(kT, WT, 1)
        }
      }
      get moduleCodes() {
        const TT = qT.AcDQ(this.__wbg_ptr);
        var oT = gT(TT[0], TT[1]);
        return qT.NMYn(TT[0], 4 * TT[1], 4), oT
      }
      get offInStrictJson() {
        let TT, oT;
        try {
          const IT = qT.BhE8(this.__wbg_ptr);
          return TT = IT[0], oT = IT[1], eT(IT[0], IT[1])
        } finally {
          qT.NMYn(TT, oT, 1)
        }
      }
      get reads() {
        const TT = qT.AVgB(this.__wbg_ptr);
        var oT = gT(TT[0], TT[1]);
        return qT.NMYn(TT[0], 4 * TT[1], 4), oT
      }
      get validationModuleCodes() {
        const TT = qT.n9M4(this.__wbg_ptr);
        var oT = gT(TT[0], TT[1]);
        return qT.NMYn(TT[0], 4 * TT[1], 4), oT
      }
      get validationModuleKeys() {
        const TT = qT.CEGz(this.__wbg_ptr);
        var oT = hT(TT[0], TT[1]).slice();
        return qT.NMYn(TT[0], 1 * TT[1], 1), oT
      }
      get variantFlags() {
        const TT = qT.BCra(this.__wbg_ptr);
        var oT = hT(TT[0], TT[1]).slice();
        return qT.NMYn(TT[0], 1 * TT[1], 1), oT
      }
    }

    function kT(TT, oT, IT, iT, kT, WT, XT) {
      const BT = JT(TT, qT.bjBQ),
        FT = ZT,
        ST = JT(oT, qT.bjBQ),
        DT = ZT,
        LT = JT(IT, qT.bjBQ),
        xT = ZT,
        cT = jT(iT, qT.bjBQ),
        KT = ZT,
        MT = JT(kT, qT.bjBQ),
        rT = ZT,
        AT = JT(WT, qT.bjBQ),
        gT = ZT,
        hT = JT(XT, qT.bjBQ),
        wT = ZT,
        mT = qT.W6f5(BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT);
      if (mT[2]) throw UT(mT[1]);
      return zT.__wrap(mT[0])
    }

    function WT() {
      const TT = qT.Zfoq();
      var oT = gT(TT[0], TT[1]);
      return qT.NMYn(TT[0], 4 * TT[1], 4), oT
    }

    function XT() {
      const TT = qT.TL2u();
      var oT = gT(TT[0], TT[1]);
      return qT.NMYn(TT[0], 4 * TT[1], 4), oT
    }

    function BT() {
      qT.JBhT()
    }

    function FT(TT, oT, IT, iT, zT) {
      let kT, WT;
      try {
        const FT = JT(TT, qT.bjBQ),
          ST = ZT,
          DT = jT(oT, qT.bjBQ),
          LT = ZT,
          xT = JT(IT, qT.bjBQ),
          cT = ZT,
          KT = jT(iT, qT.bjBQ),
          MT = ZT,
          rT = function(TT, oT) {
            const IT = oT(1 * TT.length, 1) >>> 0;
            return vT().set(TT, IT / 1), ZT = TT.length, IT
          }(zT, qT.bjBQ),
          AT = ZT,
          gT = qT.KkGR(FT, ST, DT, LT, xT, cT, KT, MT, rT, AT);
        var XT = gT[0],
          BT = gT[1];
        if (gT[3]) throw XT = 0, BT = 0, UT(gT[2]);
        return kT = XT, WT = BT, eT(XT, BT)
      } finally {
        qT.NMYn(kT, WT, 1)
      }
    }

    function ST() {
      let TT, oT;
      try {
        const IT = qT.metN();
        return TT = IT[0], oT = IT[1], eT(IT[0], IT[1])
      } finally {
        qT.NMYn(TT, oT, 1)
      }
    }

    function DT(TT) {
      let oT, IT;
      try {
        const kT = qT.sJ1V(TT);
        var iT = kT[0],
          zT = kT[1];
        if (kT[3]) throw iT = 0, zT = 0, UT(kT[2]);
        return oT = iT, IT = zT, eT(iT, zT)
      } finally {
        qT.NMYn(oT, IT, 1)
      }
    }

    function LT() {
      return qT.mN6U() >>> 0
    }

    function xT() {
      let TT, oT;
      try {
        const IT = qT.Yf7m();
        return TT = IT[0], oT = IT[1], eT(IT[0], IT[1])
      } finally {
        qT.NMYn(TT, oT, 1)
      }
    }

    function cT(TT, oT) {
      let IT, iT;
      try {
        const WT = JT(TT, qT.bjBQ),
          XT = ZT,
          BT = jT(oT, qT.bjBQ),
          FT = ZT,
          ST = qT.UqiY(WT, XT, BT, FT);
        var zT = ST[0],
          kT = ST[1];
        if (ST[3]) throw zT = 0, kT = 0, UT(ST[2]);
        return IT = zT, iT = kT, eT(zT, kT)
      } finally {
        qT.NMYn(IT, iT, 1)
      }
    }

    function KT(TT) {
      let oT, IT;
      try {
        const kT = qT.UagZ(AT(TT));
        var iT = kT[0],
          zT = kT[1];
        if (kT[3]) throw iT = 0, zT = 0, UT(kT[2]);
        return oT = iT, IT = zT, eT(iT, zT)
      } finally {
        qT.NMYn(oT, IT, 1)
      }
    }

    function MT() {
      return {
        __proto__: null,
        PfmH: {
          __proto__: null,
          dxwq: function(TT, oT) {
            return AT(Error(eT(TT, oT)))
          },
          n0Se: function(TT) {
            return null === ET(TT)
          },
          DZIL: function(TT) {
            return "string" === typeof ET(TT)
          },
          bsV5: function(TT, oT) {
            const IT = ET(oT),
              iT = "string" === typeof IT ? IT : void 0;
            var zT, kT = void 0 === (zT = iT) || null === zT ? 0 : function(TT, oT, IT) {
                if (void 0 === IT) {
                  const IT = OT.encode(TT),
                    iT = oT(IT.length, 1) >>> 0;
                  return vT().subarray(iT, iT + IT.length).set(IT), ZT = IT.length, iT
                }
                let iT = TT.length,
                  zT = oT(iT, 1) >>> 0;
                const kT = vT();
                let WT = 0;
                for (; WT < iT; WT++) {
                  const oT = TT.charCodeAt(WT);
                  if (oT > 127) break;
                  kT[zT + WT] = oT
                }
                if (WT !== iT) {
                  0 !== WT && (TT = TT.slice(WT)), zT = IT(zT, iT, iT = WT + 3 * TT.length, 1) >>> 0;
                  const oT = vT().subarray(zT + WT, zT + iT);
                  WT += OT.encodeInto(TT, oT).written, zT = IT(zT, iT, WT, 1) >>> 0
                }
                return ZT = WT, zT
              }(iT, qT.bjBQ, qT.L3ZI),
              WT = ZT;
            mT().setInt32(TT + 4, WT, !0), mT().setInt32(TT + 0, kT, !0)
          },
          EtYL: function(TT, oT) {
            throw new Error(eT(TT, oT))
          },
          DSlm: function(TT, oT) {
            return ET(TT).charCodeAt(oT >>> 0)
          },
          Op0B: function(TT, oT) {
            console.error(eT(TT, oT))
          },
          TZF6: function(TT) {
            return ET(TT).length
          },
          yTm2: function(TT, oT) {
            return AT(eT(TT, oT))
          },
          aYsb: function(TT) {
            UT(TT)
          }
        }
      }
    }
    Symbol.dispose && (zT.prototype[Symbol.dispose] = zT.prototype.free);
    const rT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => qT.fObX(TT, 1)));

    function AT(TT) {
      CT === fT.length && fT.push(fT.length + 1);
      const oT = CT;
      return CT = fT[oT], fT[oT] = TT, oT
    }

    function gT(TT, oT) {
      TT >>>= 0;
      const IT = mT(),
        iT = [];
      for (let zT = TT; zT < TT + 4 * oT; zT += 4) iT.push(UT(IT.getUint32(zT, !0)));
      return iT
    }

    function hT(TT, oT) {
      return TT >>>= 0, vT().subarray(TT / 1, TT / 1 + oT)
    }
    let wT = null;

    function mT() {
      return (null === wT || !0 === wT.buffer.detached || void 0 === wT.buffer.detached && wT.buffer !== qT.memory.buffer) && (wT = new DataView(qT.memory.buffer)), wT
    }

    function eT(TT, oT) {
      return function(TT, oT) {
        QT += oT, QT >= YT && (aT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), aT.decode(), QT = oT);
        return aT.decode(vT().subarray(TT, TT + oT))
      }(TT >>> 0, oT)
    }
    let RT = null;
    let uT = null;

    function vT() {
      return null !== uT && 0 !== uT.byteLength || (uT = new Uint8Array(qT.memory.buffer)), uT
    }

    function ET(TT) {
      return fT[TT]
    }
    let fT = new Array(1024).fill(void 0);
    fT.push(void 0, null, !0, !1);
    let CT = fT.length;

    function jT(TT, oT) {
      const IT = oT(4 * TT.length, 4) >>> 0;
      return (null !== RT && 0 !== RT.byteLength || (RT = new Uint32Array(qT.memory.buffer)), RT).set(TT, IT / 4), ZT = TT.length, IT
    }

    function JT(TT, oT) {
      const IT = oT(4 * TT.length, 4) >>> 0,
        iT = mT();
      for (let zT = 0; zT < TT.length; zT++) iT.setUint32(IT + 4 * zT, AT(TT[zT]), !0);
      return ZT = TT.length, IT
    }

    function UT(TT) {
      const oT = ET(TT);
      return function(TT) {
        TT < 1028 || (fT[TT] = CT, CT = TT)
      }(TT), oT
    }
    let aT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    aT.decode();
    const YT = 2146435072;
    let QT = 0;
    const OT = new TextEncoder;
    "encodeInto" in OT || (OT.encodeInto = function(TT, oT) {
      const IT = OT.encode(TT);
      return oT.set(IT), {
        read: TT.length,
        written: IT.length
      }
    });
    let HT, nT, qT, ZT = 0;

    function lT(TT, oT) {
      return nT = TT, qT = TT.exports, HT = oT, wT = null, RT = null, uT = null, qT.YjjA(), qT
    }

    function sT(TT) {
      if (void 0 !== qT) return qT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const oT = MT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return lT(new WebAssembly.Instance(TT, oT), TT)
    }
    async function tT(TT) {
      if (void 0 !== qT) return qT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const oT = MT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: IT,
        module: iT
      } = await async function(TT, oT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, oT)
          } catch (IT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw IT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", IT)
          }
          const iT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(iT, oT)
        } {
          const IT = await WebAssembly.instantiate(TT, oT);
          return IT instanceof WebAssembly.Instance ? {
            instance: IT,
            module: TT
          } : IT
        }
      }(await TT, oT);
      return lT(IT, iT)
    }
    var GT = IT(3280),
      pT = IT(6123);
    class bT extends Error {
      stage;
      constructor(TT, oT) {
        super((0, GT.G)(TT, oT), {
          cause: oT
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = TT
      }
    }
    let yT = null,
      NT = null;

    function PT() {
      return yT ? Promise.resolve(yT) : (NT || (NT = async function() {
        let TT;
        try {
          TT = await (0, GT.J)(new IT.U(IT(6130)), (0, pT.c)("bloxd_wasm_shader_pack"))
        } catch (oT) {
          throw new bT((0, GT.N)(oT), oT)
        }
        try {
          await tT({
            module_or_path: TT
          })
        } catch (oT) {
          throw new bT("instantiate", oT)
        }
        return yT = iT, yT
      }(), NT.then(void 0, (() => {
        NT = null
      }))), NT)
    }
    var dT = IT(6141);

    function VT(TT) {
      let [oT, IT, iT, zT] = TT;
      const kT = {
        file: oT,
        line: IT,
        message: iT
      };
      return zT && (kT.variants = zT.map(dT.n)), kT
    }

    function To(TT) {
      return JSON.parse(TT).map(VT)
    }

    function oo(TT, oT) {
      if (!Number.isInteger(TT) || TT < 0 || TT > 4294967295) throw new Error(`${oT} ${TT} is not a whole number from 0 to 4294967295`);
      return TT
    }

    function Io(TT) {
      return [TT.named.map((TT => TT.name)), Uint32Array.from(TT.named, (TT => oo(TT.id, "Texture ID")))]
    }
    const io = new WeakMap;
    const zo = new WeakMap,
      ko = new WeakSet;

    function Wo(TT, oT) {
      if (ko.has(TT)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return oT()
      } catch (IT) {
        throw IT instanceof WebAssembly.RuntimeError && ko.add(TT), IT
      }
    }

    function Xo(TT) {
      let oT = zo.get(TT);
      if (!oT) {
        let IT, iT;
        oT = {
          v_: (oT, IT) => Wo(TT, (() => function(TT, oT, IT) {
            const iT = TT.v_(oT.map((TT => TT.path)), oT.map((TT => TT.source)), ...Io(IT), IT.aliases.map((TT => TT.name)), IT.aliases.map((TT => TT.texture)), IT.aliases.map((TT => TT.kind)));
            let zT = !1;
            try {
              const TT = iT.validationModuleCodes,
                oT = Array.from(iT.validationModuleKeys, ((oT, IT) => ({
                  key: (0, dT.n)(oT),
                  code: TT[IT]
                }))),
                IT = {
                  errors: To(iT.errorsJson),
                  offInStrict: To(iT.offInStrictJson),
                  variants: (0, dT.g)(iT),
                  validationModules: oT,
                  features: iT.features
                };
              return oT.forEach(((TT, oT) => {
                io.set(TT, {
                  pack: iT,
                  index: oT
                })
              })), zT = oT.length > 0, IT
            } finally {
              zT || iT.free()
            }
          }(TT, oT, IT))),
          mapValidationMessage: (oT, IT) => {
            const iT = io.get(oT);
            if (!iT) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return VT(JSON.parse(Wo(TT, (() => iT.pack.mapValidationMessage(iT.index, IT.lineNum, IT.linePos, IT.message, IT.type)))))
          },
          EIT: oT => Wo(TT, (() => function(TT, oT) {
            const IT = new Int32Array(oT.length),
              iT = [];
            return oT.forEach(((TT, oT) => {
              IT[oT] = TT.variants ? TT.variants.length : -1;
              for (const IT of TT.variants ?? []) iT.push((0, dT.j)(IT))
            })), To(TT.EIT(oT.map((TT => TT.file)), Uint32Array.from(oT, (TT => oo(TT.line, "Diagnostic line"))), oT.map((TT => TT.message)), IT, Uint8Array.from(iT)))
          }(TT, oT))),
          ZC: oT => Wo(TT, (() => TT.ZC(...Io(oT)))),
          get SHADER_PACK_HEADER_VERSION() {
            return IT ??= Wo(TT, (() => TT.yiT())), IT
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return iT ??= Wo(TT, (() => {
              const oT = TT.GiT();
              return TT.tiT().map(((TT, IT) => ({
                path: TT,
                source: oT[IT]
              })))
            })), iT
          },
          NiT: oT => Wo(TT, (() => TT.NiT(oT))),
          resolveHeader: oT => Wo(TT, (() => TT.biT((0, dT.j)(oT)))),
          piT: () => Wo(TT, (() => TT.piT()))
        }, zo.set(TT, oT)
      }
      return oT
    }
    var Bo = IT(2785),
      Fo = IT(6138);
    const So = "bloxdShaderPackWasmFailureReported";
    let Do = null;

    function Lo() {
      return Do ??= async function() {
        if ("undefined" === typeof WebAssembly) return xo("unsupported", "This browser has no WebAssembly"), null;
        const TT = (0, Fo.loadShaderPackTextures)().then((() => !0), (TT => (console.error("Could not load the shader pack textures, so shader packs can't run", TT), !1)));
        try {
          const oT = await async function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PT;
            return Xo(await TT())
          }();
          return await TT ? oT : null
        } catch (oT) {
          const TT = oT instanceof Error ? oT.message : String(oT);
          return xo(Bo.e[oT instanceof bT ? oT.stage : "instantiate"], TT), null
        }
      }(), Do
    }

    function xo(TT, oT) {
      (0, Bo.k)(So, `Shader pack wasm ${TT}, so shader packs can't run: ${oT}`, oT, `shader_pack_${TT}`)
    }
  },
  6130: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_shader_pack_bg.b28011e8ebeb1f2a26f2.wasm"
  },
  6123: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(3280);
    const zT = {
      bloxd_wasm: () => "891b125e1fa53c747db8046ca1a7828990783e6318b475060b2689b2c62ec64b",
      bloxd_wasm_client: () => "afe376ddb7e074ef28dc003cae65be2019ba85870176102f5c99327651531a90",
      bloxd_wasm_workers: () => "bdacf110fdd54ff050ae9c3d3c9c40fa9932196a316574c38050f09f93d5d4d0",
      bloxd_wasm_models: () => "d431807fb8651e0a5be03886feec149ab2c5d8f7292513bb4f5f6f8198ccd3fa",
      bloxd_wasm_webgpu: () => "36744cc13e8d59f3d9a2cc30379d81ca4b0e563c1ccd9032a15b3d5d2fd1f9b1",
      bloxd_wasm_webgl: () => "d7f8f069066a9513edfd41a54bdc46943132c54fd47d41226907a9c5957c5a3e",
      bloxd_wasm_webgl1: () => "1f274f498c33507fd74ae865400b574dec316d2e2535b8bdd60f2679aec71305",
      bloxd_wasm_replay: () => "308a6b9500ce1acc37831e57249009d9c05a3a9b3821582ea4fe8330d515270a",
      bloxd_wasm_recorder: () => "c2dd3c772eaa41d9a4cfcd9261204dae143353c48db7c49556d0089946997bff",
      bloxd_wasm_anim: () => "92da9dc930879a101e815385ac8673ac818daddd3cc10a9e6f242c32dd68abe8",
      bloxd_wasm_textures: () => "de7050a0a81f4523efadc506fed6ff11ef5e5819f30494428008fcaceee90545",
      bloxd_wasm_shader_pack: () => "012d029967fec4420d84f73dad4d7e807ec1901518f66edd03a82520f373fb43"
    };
    var kT = IT(4191);

    function WT(TT) {
      const oT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== oT) return {
        sha256: oT,
        onMismatch: kT.y
      };
      throw new iT.k(`${TT} has no release digest, so this build refuses it`)
    }
  },
  6141: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => hT,
      g: () => wT,
      j: () => AT,
      n: () => rT
    });
    var iT = IT(6143);
    const zT = 6,
      kT = 3,
      WT = 1,
      XT = 2,
      BT = 4,
      FT = 8,
      ST = 16,
      DT = 32,
      LT = 64,
      xT = 128,
      cT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function KT(TT) {
      if (!TT) return 0;
      const oT = cT.indexOf(TT);
      if (oT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return oT
    }

    function MT(TT) {
      if (0 === TT) return null;
      const oT = cT[TT];
      if (void 0 === oT) throw new Error(`${TT} is not a shader pack hook function id`);
      return oT
    }

    function rT(TT) {
      const oT = iT.d.length;
      return {
        strict: TT >= oT,
        program: iT.d[TT % oT]
      }
    }

    function AT(TT) {
      return Number(TT.strict) * iT.d.length + iT.d.indexOf(TT.program)
    }

    function gT(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function hT(TT) {
      const oT = {
        variantFlags: new Uint8Array(zT),
        hooks: new Uint8Array(zT * kT),
        moduleCodes: Array(zT).fill(""),
        reads: Array(2 * zT).fill("")
      };
      for (const IT of TT) {
        const TT = AT(IT.key),
          iT = (TT, oT) => null === IT.hooks.surface || IT.reads.fragment.includes(TT) ? 0 : oT;
        oT.variantFlags[TT] = (IT.sceneDepth ? WT : 0) | (IT.movesVertices ? XT : 0) | (IT.sunShadow ? BT : 0) | (IT.airShadow ? FT : 0) | (IT.discards ? ST : 0) | iT("localPosition", DT) | iT("enchantSpeed", LT) | iT("enchantTier", xT), oT.hooks[TT * kT] = KT(IT.hooks.vertex), oT.hooks[TT * kT + 1] = KT(IT.hooks.surface), oT.hooks[TT * kT + 2] = KT(IT.hooks.light), oT.moduleCodes[TT] = IT.moduleCode, oT.reads[2 * TT] = IT.reads.vertex.join(" "), oT.reads[2 * TT + 1] = IT.reads.fragment.join(" ")
      }
      return oT
    }

    function wT(TT) {
      const {
        hooks: oT,
        moduleCodes: IT,
        reads: iT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, zT) => {
        const DT = zT * kT;
        return {
          key: rT(zT),
          hooks: {
            vertex: MT(oT[DT]),
            surface: MT(oT[DT + 1]),
            light: MT(oT[DT + 2])
          },
          moduleCode: IT[zT],
          sceneDepth: 0 !== (TT & WT),
          sunShadow: 0 !== (TT & BT),
          airShadow: 0 !== (TT & FT),
          movesVertices: 0 !== (TT & XT),
          discards: 0 !== (TT & ST),
          reads: {
            vertex: gT(iT[2 * zT]),
            fragment: gT(iT[2 * zT + 1])
          }
        }
      }))
    }
  },
  6143: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      g: () => WT,
      h: () => XT,
      k: () => zT,
      l: () => kT
    });
    const iT = ["terrain", "liquid", "model"];

    function zT() {
      const TT = [];
      for (const oT of [!1, !0])
        for (const IT of iT) TT.push({
          strict: oT,
          program: IT
        });
      return TT
    }

    function kT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function WT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function XT(TT, oT) {
      return "off" !== oT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === oT) && !WT(TT))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);