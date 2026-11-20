export const id = 131;
export const ids = [131];
export const modules = {
  6607: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      loadPageShaderPackCompiler: () => Ck
    });
    var lT = {};
    cT.r(lT), cT.d(lT, {
      DlT: () => MT,
      k_: () => KT,
      default: () => UT,
      alT: () => OT,
      FlT: () => yT,
      initSync: () => gT,
      MA: () => fT,
      OcT: () => xT,
      rlT: () => IT,
      PlT: () => AT,
      yJ: () => CT,
      wlT: () => jT,
      OJ: () => vT,
      mlT: () => tT
    });
    class MT {
      static __wrap(TT) {
        const kT = Object.create(MT.prototype);
        return kT.__wbg_ptr = TT, NT.register(kT, kT.__wbg_ptr, kT), kT
      }
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, NT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        dT.FrpW(TT, 0)
      }
      get errorsJson() {
        let TT, kT;
        try {
          const cT = dT.UGDH(this.__wbg_ptr);
          return TT = cT[0], kT = cT[1], rT(cT[0], cT[1])
        } finally {
          dT.n7uV(TT, kT, 1)
        }
      }
      get features() {
        const TT = dT.mWOd(this.__wbg_ptr);
        var kT = ST(TT[0], TT[1]);
        return dT.n7uV(TT[0], 4 * TT[1], 4), kT
      }
      get hooks() {
        const TT = dT.obSm(this.__wbg_ptr);
        var kT = DT(TT[0], TT[1]).slice();
        return dT.n7uV(TT[0], 1 * TT[1], 1), kT
      }
      mapValidationMessage(TT, kT, cT, lT, MT) {
        let KT, OT;
        try {
          const xT = dT.brBp(this.__wbg_ptr, TT, kT, cT, QT(lT), QT(MT));
          var yT = xT[0],
            fT = xT[1];
          if (xT[3]) throw yT = 0, fT = 0, eT(xT[2]);
          return KT = yT, OT = fT, rT(yT, fT)
        } finally {
          dT.n7uV(KT, OT, 1)
        }
      }
      get moduleCodes() {
        const TT = dT.IWAV(this.__wbg_ptr);
        var kT = ST(TT[0], TT[1]);
        return dT.n7uV(TT[0], 4 * TT[1], 4), kT
      }
      get offInStrictJson() {
        let TT, kT;
        try {
          const cT = dT.TtjD(this.__wbg_ptr);
          return TT = cT[0], kT = cT[1], rT(cT[0], cT[1])
        } finally {
          dT.n7uV(TT, kT, 1)
        }
      }
      get reads() {
        const TT = dT.u6fL(this.__wbg_ptr);
        var kT = ST(TT[0], TT[1]);
        return dT.n7uV(TT[0], 4 * TT[1], 4), kT
      }
      get validationModuleCodes() {
        const TT = dT.lGMH(this.__wbg_ptr);
        var kT = ST(TT[0], TT[1]);
        return dT.n7uV(TT[0], 4 * TT[1], 4), kT
      }
      get validationModuleKeys() {
        const TT = dT.kGYb(this.__wbg_ptr);
        var kT = DT(TT[0], TT[1]).slice();
        return dT.n7uV(TT[0], 1 * TT[1], 1), kT
      }
      get variantFlags() {
        const TT = dT.TweI(this.__wbg_ptr);
        var kT = DT(TT[0], TT[1]).slice();
        return dT.n7uV(TT[0], 1 * TT[1], 1), kT
      }
    }

    function KT(TT, kT, cT, lT, KT, OT, yT) {
      const fT = HT(TT, dT.LGfS),
        xT = LT,
        IT = HT(kT, dT.LGfS),
        AT = LT,
        CT = HT(cT, dT.LGfS),
        jT = LT,
        vT = oT(lT, dT.LGfS),
        tT = LT,
        hT = HT(KT, dT.LGfS),
        NT = LT,
        QT = HT(OT, dT.LGfS),
        ST = LT,
        DT = HT(yT, dT.LGfS),
        aT = LT,
        FT = dT.ISGu(fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT);
      if (FT[2]) throw eT(FT[1]);
      return MT.__wrap(FT[0])
    }

    function OT() {
      const TT = dT.TUrs();
      var kT = ST(TT[0], TT[1]);
      return dT.n7uV(TT[0], 4 * TT[1], 4), kT
    }

    function yT() {
      const TT = dT.Q97x();
      var kT = ST(TT[0], TT[1]);
      return dT.n7uV(TT[0], 4 * TT[1], 4), kT
    }

    function fT() {
      dT.CxXR()
    }

    function xT(TT, kT, cT, lT, MT) {
      let KT, OT;
      try {
        const xT = HT(TT, dT.LGfS),
          IT = LT,
          AT = oT(kT, dT.LGfS),
          CT = LT,
          jT = HT(cT, dT.LGfS),
          vT = LT,
          tT = oT(lT, dT.LGfS),
          hT = LT,
          NT = function(TT, kT) {
            const cT = kT(1 * TT.length, 1) >>> 0;
            return mT().set(TT, cT / 1), LT = TT.length, cT
          }(MT, dT.LGfS),
          QT = LT,
          ST = dT.qDda(xT, IT, AT, CT, jT, vT, tT, hT, NT, QT);
        var yT = ST[0],
          fT = ST[1];
        if (ST[3]) throw yT = 0, fT = 0, eT(ST[2]);
        return KT = yT, OT = fT, rT(yT, fT)
      } finally {
        dT.n7uV(KT, OT, 1)
      }
    }

    function IT() {
      let TT, kT;
      try {
        const cT = dT.DI40();
        return TT = cT[0], kT = cT[1], rT(cT[0], cT[1])
      } finally {
        dT.n7uV(TT, kT, 1)
      }
    }

    function AT(TT) {
      let kT, cT;
      try {
        const KT = dT.d5tV(TT);
        var lT = KT[0],
          MT = KT[1];
        if (KT[3]) throw lT = 0, MT = 0, eT(KT[2]);
        return kT = lT, cT = MT, rT(lT, MT)
      } finally {
        dT.n7uV(kT, cT, 1)
      }
    }

    function CT() {
      return dT.VRCB() >>> 0
    }

    function jT() {
      let TT, kT;
      try {
        const cT = dT.PHbS();
        return TT = cT[0], kT = cT[1], rT(cT[0], cT[1])
      } finally {
        dT.n7uV(TT, kT, 1)
      }
    }

    function vT(TT, kT) {
      let cT, lT;
      try {
        const OT = HT(TT, dT.LGfS),
          yT = LT,
          fT = oT(kT, dT.LGfS),
          xT = LT,
          IT = dT.m3iR(OT, yT, fT, xT);
        var MT = IT[0],
          KT = IT[1];
        if (IT[3]) throw MT = 0, KT = 0, eT(IT[2]);
        return cT = MT, lT = KT, rT(MT, KT)
      } finally {
        dT.n7uV(cT, lT, 1)
      }
    }

    function tT(TT) {
      let kT, cT;
      try {
        const KT = dT.d4mh(QT(TT));
        var lT = KT[0],
          MT = KT[1];
        if (KT[3]) throw lT = 0, MT = 0, eT(KT[2]);
        return kT = lT, cT = MT, rT(lT, MT)
      } finally {
        dT.n7uV(kT, cT, 1)
      }
    }

    function hT() {
      return {
        __proto__: null,
        HwSR: {
          __proto__: null,
          TQs7: function(TT, kT) {
            return QT(Error(rT(TT, kT)))
          },
          KDYp: function(TT) {
            return null === bT(TT)
          },
          bFhG: function(TT) {
            return "string" === typeof bT(TT)
          },
          if5H: function(TT, kT) {
            const cT = bT(kT),
              lT = "string" === typeof cT ? cT : void 0;
            var MT, KT = void 0 === (MT = lT) || null === MT ? 0 : function(TT, kT, cT) {
                if (void 0 === cT) {
                  const cT = ZT.encode(TT),
                    lT = kT(cT.length, 1) >>> 0;
                  return mT().subarray(lT, lT + cT.length).set(cT), LT = cT.length, lT
                }
                let lT = TT.length,
                  MT = kT(lT, 1) >>> 0;
                const KT = mT();
                let OT = 0;
                for (; OT < lT; OT++) {
                  const kT = TT.charCodeAt(OT);
                  if (kT > 127) break;
                  KT[MT + OT] = kT
                }
                if (OT !== lT) {
                  0 !== OT && (TT = TT.slice(OT)), MT = cT(MT, lT, lT = OT + 3 * TT.length, 1) >>> 0;
                  const kT = mT().subarray(MT + OT, MT + lT);
                  OT += ZT.encodeInto(TT, kT).written, MT = cT(MT, lT, OT, 1) >>> 0
                }
                return LT = OT, MT
              }(lT, dT.LGfS, dT.o1mH),
              OT = LT;
            FT().setInt32(TT + 4, OT, !0), FT().setInt32(TT + 0, KT, !0)
          },
          AFYo: function(TT, kT) {
            throw new Error(rT(TT, kT))
          },
          YCgx: function(TT, kT) {
            return bT(TT).charCodeAt(kT >>> 0)
          },
          NoJ7: function(TT, kT) {
            console.error(rT(TT, kT))
          },
          wDTz: function(TT) {
            return bT(TT).length
          },
          P9e3: function(TT, kT) {
            return QT(rT(TT, kT))
          },
          kknN: function(TT) {
            eT(TT)
          }
        }
      }
    }
    Symbol.dispose && (MT.prototype[Symbol.dispose] = MT.prototype.free);
    const NT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => dT.FrpW(TT, 1)));

    function QT(TT) {
      JT === zT.length && zT.push(zT.length + 1);
      const kT = JT;
      return JT = zT[kT], zT[kT] = TT, kT
    }

    function ST(TT, kT) {
      TT >>>= 0;
      const cT = FT(),
        lT = [];
      for (let MT = TT; MT < TT + 4 * kT; MT += 4) lT.push(eT(cT.getUint32(MT, !0)));
      return lT
    }

    function DT(TT, kT) {
      return TT >>>= 0, mT().subarray(TT / 1, TT / 1 + kT)
    }
    let aT = null;

    function FT() {
      return (null === aT || !0 === aT.buffer.detached || void 0 === aT.buffer.detached && aT.buffer !== dT.memory.buffer) && (aT = new DataView(dT.memory.buffer)), aT
    }

    function rT(TT, kT) {
      return function(TT, kT) {
        ET += kT, ET >= VT && (GT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), GT.decode(), ET = kT);
        return GT.decode(mT().subarray(TT, TT + kT))
      }(TT >>> 0, kT)
    }
    let PT = null;
    let wT = null;

    function mT() {
      return null !== wT && 0 !== wT.byteLength || (wT = new Uint8Array(dT.memory.buffer)), wT
    }

    function bT(TT) {
      return zT[TT]
    }
    let zT = new Array(1024).fill(void 0);
    zT.push(void 0, null, !0, !1);
    let JT = zT.length;

    function oT(TT, kT) {
      const cT = kT(4 * TT.length, 4) >>> 0;
      return (null !== PT && 0 !== PT.byteLength || (PT = new Uint32Array(dT.memory.buffer)), PT).set(TT, cT / 4), LT = TT.length, cT
    }

    function HT(TT, kT) {
      const cT = kT(4 * TT.length, 4) >>> 0,
        lT = FT();
      for (let MT = 0; MT < TT.length; MT++) lT.setUint32(cT + 4 * MT, QT(TT[MT]), !0);
      return LT = TT.length, cT
    }

    function eT(TT) {
      const kT = bT(TT);
      return function(TT) {
        TT < 1028 || (zT[TT] = JT, JT = TT)
      }(TT), kT
    }
    let GT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    GT.decode();
    const VT = 2146435072;
    let ET = 0;
    const ZT = new TextEncoder;
    "encodeInto" in ZT || (ZT.encodeInto = function(TT, kT) {
      const cT = ZT.encode(TT);
      return kT.set(cT), {
        read: TT.length,
        written: cT.length
      }
    });
    let uT, XT, dT, LT = 0;

    function RT(TT, kT) {
      return XT = TT, dT = TT.exports, uT = kT, aT = null, PT = null, wT = null, dT.TkSs(), dT
    }

    function gT(TT) {
      if (void 0 !== dT) return dT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const kT = hT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return RT(new WebAssembly.Instance(TT, kT), TT)
    }
    async function UT(TT) {
      if (void 0 !== dT) return dT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const kT = hT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: cT,
        module: lT
      } = await async function(TT, kT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, kT)
          } catch (cT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw cT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cT)
          }
          const lT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(lT, kT)
        } {
          const cT = await WebAssembly.instantiate(TT, kT);
          return cT instanceof WebAssembly.Instance ? {
            instance: cT,
            module: TT
          } : cT
        }
      }(await TT, kT);
      return RT(cT, lT)
    }
    var YT = cT(3684),
      BT = cT(6609);
    class WT extends Error {
      stage;
      constructor(TT, kT) {
        super((0, YT.F)(TT, kT), {
          cause: kT
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = TT
      }
    }
    let nT = null,
      pT = null;

    function iT() {
      return nT ? Promise.resolve(nT) : (pT || (pT = async function() {
        let TT;
        try {
          TT = await (0, YT.J)(new cT.U(cT(6614)), (0, BT.e)("bloxd_wasm_shader_pack"))
        } catch (kT) {
          throw new WT((0, YT.R)(kT), kT)
        }
        try {
          await UT({
            module_or_path: TT
          })
        } catch (kT) {
          throw new WT("instantiate", kT)
        }
        return nT = lT, nT
      }(), pT.then(void 0, (() => {
        pT = null
      }))), pT)
    }
    var qT = cT(6628);

    function sT(TT) {
      let [kT, cT, lT, MT] = TT;
      const KT = {
        file: kT,
        line: cT,
        message: lT
      };
      return MT && (KT.variants = MT.map(qT.o)), KT
    }

    function Tk(TT) {
      return JSON.parse(TT).map(sT)
    }

    function kk(TT, kT) {
      if (!Number.isInteger(TT) || TT < 0 || TT > 4294967295) throw new Error(`${kT} ${TT} is not a whole number from 0 to 4294967295`);
      return TT
    }

    function ck(TT) {
      return [TT.named.map((TT => TT.name)), Uint32Array.from(TT.named, (TT => kk(TT.id, "Texture ID")))]
    }
    const lk = new WeakMap;
    const Mk = new WeakMap,
      Kk = new WeakSet;

    function Ok(TT, kT) {
      if (Kk.has(TT)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return kT()
      } catch (cT) {
        throw cT instanceof WebAssembly.RuntimeError && Kk.add(TT), cT
      }
    }

    function yk(TT) {
      let kT = Mk.get(TT);
      if (!kT) {
        let cT, lT;
        kT = {
          k_: (kT, cT) => Ok(TT, (() => function(TT, kT, cT) {
            const lT = TT.k_(kT.map((TT => TT.path)), kT.map((TT => TT.source)), ...ck(cT), cT.aliases.map((TT => TT.name)), cT.aliases.map((TT => TT.texture)), cT.aliases.map((TT => TT.kind)));
            let MT = !1;
            try {
              const TT = lT.validationModuleCodes,
                kT = Array.from(lT.validationModuleKeys, ((kT, cT) => ({
                  key: (0, qT.o)(kT),
                  code: TT[cT]
                }))),
                cT = {
                  errors: Tk(lT.errorsJson),
                  offInStrict: Tk(lT.offInStrictJson),
                  variants: (0, qT.i)(lT),
                  validationModules: kT,
                  features: lT.features
                };
              return kT.forEach(((TT, kT) => {
                lk.set(TT, {
                  pack: lT,
                  index: kT
                })
              })), MT = kT.length > 0, cT
            } finally {
              MT || lT.free()
            }
          }(TT, kT, cT))),
          mapValidationMessage: (kT, cT) => {
            const lT = lk.get(kT);
            if (!lT) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return sT(JSON.parse(Ok(TT, (() => lT.pack.mapValidationMessage(lT.index, cT.lineNum, cT.linePos, cT.message, cT.type)))))
          },
          OcT: kT => Ok(TT, (() => function(TT, kT) {
            const cT = new Int32Array(kT.length),
              lT = [];
            return kT.forEach(((TT, kT) => {
              cT[kT] = TT.variants ? TT.variants.length : -1;
              for (const cT of TT.variants ?? []) lT.push((0, qT.k)(cT))
            })), Tk(TT.OcT(kT.map((TT => TT.file)), Uint32Array.from(kT, (TT => kk(TT.line, "Diagnostic line"))), kT.map((TT => TT.message)), cT, Uint8Array.from(lT)))
          }(TT, kT))),
          OJ: kT => Ok(TT, (() => TT.OJ(...ck(kT)))),
          get SHADER_PACK_HEADER_VERSION() {
            return cT ??= Ok(TT, (() => TT.wlT())), cT
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return lT ??= Ok(TT, (() => {
              const kT = TT.FlT();
              return TT.alT().map(((TT, cT) => ({
                path: TT,
                source: kT[cT]
              })))
            })), lT
          },
          mlT: kT => Ok(TT, (() => TT.mlT(kT))),
          resolveHeader: kT => Ok(TT, (() => TT.PlT((0, qT.k)(kT)))),
          rlT: () => Ok(TT, (() => TT.rlT()))
        }, Mk.set(TT, kT)
      }
      return kT
    }
    var fk = cT(3170),
      xk = cT(6623);
    const Ik = "bloxdShaderPackWasmFailureReported";
    let Ak = null;

    function Ck() {
      return Ak ??= async function() {
        if ("undefined" === typeof WebAssembly) return jk("unsupported", "This browser has no WebAssembly"), null;
        const TT = (0, xk.loadShaderPackTextures)().then((() => !0), (TT => (console.error("Could not load the shader pack textures, so shader packs can't run", TT), !1)));
        try {
          const kT = await async function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iT;
            return yk(await TT())
          }();
          return await TT ? kT : null
        } catch (kT) {
          const TT = kT instanceof Error ? kT.message : String(kT);
          return jk(fk.c[kT instanceof WT ? kT.stage : "instantiate"], TT), null
        }
      }(), Ak
    }

    function jk(TT, kT) {
      (0, fk.i)(Ik, `Shader pack wasm ${TT}, so shader packs can't run: ${kT}`, kT, `shader_pack_${TT}`)
    }
  },
  6614: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_shader_pack_bg.8f9705dafcb99662e58e.wasm"
  },
  6609: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(3684);
    const MT = {
      bloxd_wasm: () => "a0f424b25368d6393787ae0cadc74c38a79bf45853cbc8fe0d3b4b00ed2f3987",
      bloxd_wasm_client: () => "0848a1ad8f1a6acd15190097c16d6c8cee3ea20961c9a5135fb70c8e5a3a8765",
      bloxd_wasm_workers: () => "70acc026337513cb3482a9557a18f648e482d0083d7e5e1b6fe3e07bdcb2f8e3",
      bloxd_wasm_models: () => "634d37ef8cef3ee4f695383ddf3aede7e518819fda02f111669a55711db8829c",
      bloxd_wasm_webgpu: () => "af696a84742b4427e456975c7e2c98397cd27946ad3057ca6a41701cfdd49270",
      bloxd_wasm_webgl: () => "47a865a6f0812bc9a2a7d464d212069d989bfc60e391a5b004c51ed9559d1e27",
      bloxd_wasm_webgl1: () => "5aba3664c214844c153b620384afd9cea74130cc607a9c685d1bcb6b1c27c0ab",
      bloxd_wasm_replay: () => "e3dd0cd7ff45dd407891c5abf1fcf21a49472dcaf48a1de94d52bdc122668ccb",
      bloxd_wasm_recorder: () => "2ae924a7cec0f9372a697abc3ae0b17fe0bb9ee6dd19eec21dc29e9750c477ef",
      bloxd_wasm_anim: () => "430af23f79668b6e0629c901770a89c5c28880e27fbfff3d39abec128e94239a",
      bloxd_wasm_textures: () => "b21f3145552327388bc76ac1444ca300a6882c320fa905c6294cbf6b199edb5f",
      bloxd_wasm_shader_pack: () => "8971c80e16c937b8809bd65766732ac5b19a0f1e03dd98d4cfc7cc2bf271b324"
    };
    var KT = cT(4681);

    function OT(TT) {
      const kT = Object.prototype.hasOwnProperty.call(MT, TT) ? MT[TT]() : void 0;
      if (void 0 !== kT) return {
        sha256: kT,
        onMismatch: KT.x
      };
      throw new lT.f(`${TT} has no release digest, so this build refuses it`)
    }
  },
  6628: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => DT,
      i: () => aT,
      k: () => QT,
      o: () => NT
    });
    var lT = cT(6633);
    const MT = 6,
      KT = 3,
      OT = 1,
      yT = 2,
      fT = 4,
      xT = 8,
      IT = 16,
      AT = 32,
      CT = 64,
      jT = 128,
      vT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tT(TT) {
      if (!TT) return 0;
      const kT = vT.indexOf(TT);
      if (kT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return kT
    }

    function hT(TT) {
      if (0 === TT) return null;
      const kT = vT[TT];
      if (void 0 === kT) throw new Error(`${TT} is not a shader pack hook function id`);
      return kT
    }

    function NT(TT) {
      const kT = lT.e.length;
      return {
        strict: TT >= kT,
        program: lT.e[TT % kT]
      }
    }

    function QT(TT) {
      return Number(TT.strict) * lT.e.length + lT.e.indexOf(TT.program)
    }

    function ST(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function DT(TT) {
      const kT = {
        variantFlags: new Uint8Array(MT),
        hooks: new Uint8Array(MT * KT),
        moduleCodes: Array(MT).fill(""),
        reads: Array(2 * MT).fill("")
      };
      for (const cT of TT) {
        const TT = QT(cT.key),
          lT = (TT, kT) => null === cT.hooks.surface || cT.reads.fragment.includes(TT) ? 0 : kT;
        kT.variantFlags[TT] = (cT.sceneDepth ? OT : 0) | (cT.movesVertices ? yT : 0) | (cT.sunShadow ? fT : 0) | (cT.airShadow ? xT : 0) | (cT.discards ? IT : 0) | lT("localPosition", AT) | lT("enchantSpeed", CT) | lT("enchantTier", jT), kT.hooks[TT * KT] = tT(cT.hooks.vertex), kT.hooks[TT * KT + 1] = tT(cT.hooks.surface), kT.hooks[TT * KT + 2] = tT(cT.hooks.light), kT.moduleCodes[TT] = cT.moduleCode, kT.reads[2 * TT] = cT.reads.vertex.join(" "), kT.reads[2 * TT + 1] = cT.reads.fragment.join(" ")
      }
      return kT
    }

    function aT(TT) {
      const {
        hooks: kT,
        moduleCodes: cT,
        reads: lT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, MT) => {
        const AT = MT * KT;
        return {
          key: NT(MT),
          hooks: {
            vertex: hT(kT[AT]),
            surface: hT(kT[AT + 1]),
            light: hT(kT[AT + 2])
          },
          moduleCode: cT[MT],
          sceneDepth: 0 !== (TT & OT),
          sunShadow: 0 !== (TT & fT),
          airShadow: 0 !== (TT & xT),
          movesVertices: 0 !== (TT & yT),
          discards: 0 !== (TT & IT),
          reads: {
            vertex: ST(lT[2 * MT]),
            fragment: ST(lT[2 * MT + 1])
          }
        }
      }))
    }
  },
  6633: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      f: () => OT,
      j: () => yT,
      k: () => MT,
      o: () => KT
    });
    const lT = ["terrain", "liquid", "model"];

    function MT() {
      const TT = [];
      for (const kT of [!1, !0])
        for (const cT of lT) TT.push({
          strict: kT,
          program: cT
        });
      return TT
    }

    function KT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function OT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function yT(TT, kT) {
      return "off" !== kT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === kT) && !OT(TT))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);