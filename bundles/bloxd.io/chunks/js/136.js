export const id = 136;
export const ids = [136];
export const modules = {
  6682: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      loadPageShaderPackCompiler: () => LU
    });
    var WT = {};
    mT.r(WT), mT.d(WT, {
      qzT: () => zT,
      mTT: () => MT,
      default: () => ST,
      izT: () => gT,
      bzT: () => nT,
      initSync: () => KT,
      ml: () => HT,
      mWT: () => kT,
      OzT: () => jT,
      ezT: () => lT,
      XF: () => LT,
      YzT: () => pT,
      JF: () => BT,
      JzT: () => ZT
    });
    class zT {
      static __wrap(TT) {
        const UT = Object.create(zT.prototype);
        return UT.__wbg_ptr = TT, vT.register(UT, UT.__wbg_ptr, UT), UT
      }
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        uT.UbI1(TT, 0)
      }
      get xzT() {
        let TT, UT;
        try {
          const mT = uT.OIBy(this.__wbg_ptr);
          return TT = mT[0], UT = mT[1], eT(mT[0], mT[1])
        } finally {
          uT.F1jm(TT, UT, 1)
        }
      }
      get features() {
        const TT = uT.rc6L(this.__wbg_ptr);
        var UT = qT(TT[0], TT[1]);
        return uT.F1jm(TT[0], 4 * TT[1], 4), UT
      }
      get hooks() {
        const TT = uT.iQGZ(this.__wbg_ptr);
        var UT = iT(TT[0], TT[1]).slice();
        return uT.F1jm(TT[0], 1 * TT[1], 1), UT
      }
      mapValidationMessage(TT, UT, mT, WT, zT) {
        let MT, gT;
        try {
          const kT = uT.l5XM(this.__wbg_ptr, TT, UT, mT, fT(WT), fT(zT));
          var nT = kT[0],
            HT = kT[1];
          if (kT[3]) throw nT = 0, HT = 0, XT(kT[2]);
          return MT = nT, gT = HT, eT(nT, HT)
        } finally {
          uT.F1jm(MT, gT, 1)
        }
      }
      get moduleCodes() {
        const TT = uT.sTLa(this.__wbg_ptr);
        var UT = qT(TT[0], TT[1]);
        return uT.F1jm(TT[0], 4 * TT[1], 4), UT
      }
      get dzT() {
        let TT, UT;
        try {
          const mT = uT.BguI(this.__wbg_ptr);
          return TT = mT[0], UT = mT[1], eT(mT[0], mT[1])
        } finally {
          uT.F1jm(TT, UT, 1)
        }
      }
      get reads() {
        const TT = uT.VnQQ(this.__wbg_ptr);
        var UT = qT(TT[0], TT[1]);
        return uT.F1jm(TT[0], 4 * TT[1], 4), UT
      }
      get validationModuleCodes() {
        const TT = uT.qIor(this.__wbg_ptr);
        var UT = qT(TT[0], TT[1]);
        return uT.F1jm(TT[0], 4 * TT[1], 4), UT
      }
      get validationModuleKeys() {
        const TT = uT.QVKO(this.__wbg_ptr);
        var UT = iT(TT[0], TT[1]).slice();
        return uT.F1jm(TT[0], 1 * TT[1], 1), UT
      }
      get variantFlags() {
        const TT = uT.l3CM(this.__wbg_ptr);
        var UT = iT(TT[0], TT[1]).slice();
        return uT.F1jm(TT[0], 1 * TT[1], 1), UT
      }
    }

    function MT(TT, UT, mT, WT, MT, gT, nT) {
      const HT = yT(TT, uT.CUNy),
        kT = CT,
        jT = yT(UT, uT.CUNy),
        lT = CT,
        LT = yT(mT, uT.CUNy),
        pT = CT,
        BT = aT(WT, uT.CUNy),
        ZT = CT,
        cT = yT(MT, uT.CUNy),
        vT = CT,
        fT = yT(gT, uT.CUNy),
        qT = CT,
        iT = yT(nT, uT.CUNy),
        bT = CT,
        OT = uT.Dz97(HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT);
      if (OT[2]) throw XT(OT[1]);
      return zT.__wrap(OT[0])
    }

    function gT() {
      const TT = uT.G546();
      var UT = qT(TT[0], TT[1]);
      return uT.F1jm(TT[0], 4 * TT[1], 4), UT
    }

    function nT() {
      const TT = uT.zv2p();
      var UT = qT(TT[0], TT[1]);
      return uT.F1jm(TT[0], 4 * TT[1], 4), UT
    }

    function HT() {
      uT.Af7l()
    }

    function kT(TT, UT, mT, WT, zT) {
      let MT, gT;
      try {
        const kT = yT(TT, uT.CUNy),
          jT = CT,
          lT = aT(UT, uT.CUNy),
          LT = CT,
          pT = yT(mT, uT.CUNy),
          BT = CT,
          ZT = aT(WT, uT.CUNy),
          cT = CT,
          vT = function(TT, UT) {
            const mT = UT(1 * TT.length, 1) >>> 0;
            return xT().set(TT, mT / 1), CT = TT.length, mT
          }(zT, uT.CUNy),
          fT = CT,
          qT = uT.pXvU(kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT);
        var nT = qT[0],
          HT = qT[1];
        if (qT[3]) throw nT = 0, HT = 0, XT(qT[2]);
        return MT = nT, gT = HT, eT(nT, HT)
      } finally {
        uT.F1jm(MT, gT, 1)
      }
    }

    function jT() {
      let TT, UT;
      try {
        const mT = uT.vl6D();
        return TT = mT[0], UT = mT[1], eT(mT[0], mT[1])
      } finally {
        uT.F1jm(TT, UT, 1)
      }
    }

    function lT(TT) {
      let UT, mT;
      try {
        const MT = uT.cr1A(TT);
        var WT = MT[0],
          zT = MT[1];
        if (MT[3]) throw WT = 0, zT = 0, XT(MT[2]);
        return UT = WT, mT = zT, eT(WT, zT)
      } finally {
        uT.F1jm(UT, mT, 1)
      }
    }

    function LT() {
      return uT.TQHJ() >>> 0
    }

    function pT() {
      let TT, UT;
      try {
        const mT = uT.rSZz();
        return TT = mT[0], UT = mT[1], eT(mT[0], mT[1])
      } finally {
        uT.F1jm(TT, UT, 1)
      }
    }

    function BT(TT, UT) {
      let mT, WT;
      try {
        const gT = yT(TT, uT.CUNy),
          nT = CT,
          HT = aT(UT, uT.CUNy),
          kT = CT,
          jT = uT.LjqY(gT, nT, HT, kT);
        var zT = jT[0],
          MT = jT[1];
        if (jT[3]) throw zT = 0, MT = 0, XT(jT[2]);
        return mT = zT, WT = MT, eT(zT, MT)
      } finally {
        uT.F1jm(mT, WT, 1)
      }
    }

    function ZT(TT) {
      let UT, mT;
      try {
        const MT = uT.zyHB(fT(TT));
        var WT = MT[0],
          zT = MT[1];
        if (MT[3]) throw WT = 0, zT = 0, XT(MT[2]);
        return UT = WT, mT = zT, eT(WT, zT)
      } finally {
        uT.F1jm(UT, mT, 1)
      }
    }

    function cT() {
      return {
        __proto__: null,
        XZjD: {
          __proto__: null,
          VWJj: function(TT, UT) {
            return fT(Error(eT(TT, UT)))
          },
          pFhS: function(TT) {
            return null === dT(TT)
          },
          I4lp: function(TT) {
            return "string" === typeof dT(TT)
          },
          mY1a: function(TT, UT) {
            const mT = dT(UT),
              WT = "string" === typeof mT ? mT : void 0;
            var zT, MT = void 0 === (zT = WT) || null === zT ? 0 : function(TT, UT, mT) {
                if (void 0 === mT) {
                  const mT = FT.encode(TT),
                    WT = UT(mT.length, 1) >>> 0;
                  return xT().subarray(WT, WT + mT.length).set(mT), CT = mT.length, WT
                }
                let WT = TT.length,
                  zT = UT(WT, 1) >>> 0;
                const MT = xT();
                let gT = 0;
                for (; gT < WT; gT++) {
                  const UT = TT.charCodeAt(gT);
                  if (UT > 127) break;
                  MT[zT + gT] = UT
                }
                if (gT !== WT) {
                  0 !== gT && (TT = TT.slice(gT)), zT = mT(zT, WT, WT = gT + 3 * TT.length, 1) >>> 0;
                  const UT = xT().subarray(zT + gT, zT + WT);
                  gT += FT.encodeInto(TT, UT).written, zT = mT(zT, WT, gT, 1) >>> 0
                }
                return CT = gT, zT
              }(WT, uT.CUNy, uT.NcBx),
              gT = CT;
            OT().setInt32(TT + 4, gT, !0), OT().setInt32(TT + 0, MT, !0)
          },
          ydDq: function(TT, UT) {
            throw new Error(eT(TT, UT))
          },
          z37G: function(TT, UT) {
            return dT(TT).charCodeAt(UT >>> 0)
          },
          baIv: function(TT, UT) {
            console.error(eT(TT, UT))
          },
          c1UO: function(TT) {
            return dT(TT).length
          },
          Bkbh: function(TT, UT) {
            return fT(eT(TT, UT))
          },
          KDqI: function(TT) {
            XT(TT)
          }
        }
      }
    }
    Symbol.dispose && (zT.prototype[Symbol.dispose] = zT.prototype.free);
    const vT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => uT.UbI1(TT, 1)));

    function fT(TT) {
      tT === wT.length && wT.push(wT.length + 1);
      const UT = tT;
      return tT = wT[UT], wT[UT] = TT, UT
    }

    function qT(TT, UT) {
      TT >>>= 0;
      const mT = OT(),
        WT = [];
      for (let zT = TT; zT < TT + 4 * UT; zT += 4) WT.push(XT(mT.getUint32(zT, !0)));
      return WT
    }

    function iT(TT, UT) {
      return TT >>>= 0, xT().subarray(TT / 1, TT / 1 + UT)
    }
    let bT = null;

    function OT() {
      return null !== bT && bT.buffer === uT.memory.buffer || (bT = new DataView(uT.memory.buffer)), bT
    }

    function eT(TT, UT) {
      return function(TT, UT) {
        sT += UT, sT >= QT && (IT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), IT.decode(), sT = UT);
        return IT.decode(xT().subarray(TT, TT + UT))
      }(TT >>> 0, UT)
    }
    let YT = null;
    let JT = null;

    function xT() {
      return null !== JT && 0 !== JT.byteLength || (JT = new Uint8Array(uT.memory.buffer)), JT
    }

    function dT(TT) {
      return wT[TT]
    }
    let wT = new Array(1024).fill(void 0);
    wT.push(void 0, null, !0, !1);
    let tT = wT.length;

    function aT(TT, UT) {
      const mT = UT(4 * TT.length, 4) >>> 0;
      return (null !== YT && 0 !== YT.byteLength || (YT = new Uint32Array(uT.memory.buffer)), YT).set(TT, mT / 4), CT = TT.length, mT
    }

    function yT(TT, UT) {
      const mT = UT(4 * TT.length, 4) >>> 0,
        WT = OT();
      for (let zT = 0; zT < TT.length; zT++) WT.setUint32(mT + 4 * zT, fT(TT[zT]), !0);
      return CT = TT.length, mT
    }

    function XT(TT) {
      const UT = dT(TT);
      return function(TT) {
        TT < 1028 || (wT[TT] = tT, tT = TT)
      }(TT), UT
    }
    let IT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    IT.decode();
    const QT = 2146435072;
    let sT = 0;
    const FT = new TextEncoder;
    "encodeInto" in FT || (FT.encodeInto = function(TT, UT) {
      const mT = FT.encode(TT);
      return UT.set(mT), {
        read: TT.length,
        written: mT.length
      }
    });
    let PT, VT, uT, CT = 0;

    function rT(TT, UT) {
      return VT = TT, uT = TT.exports, PT = UT, bT = null, YT = null, JT = null, uT.XYqV(), uT
    }

    function KT(TT) {
      if (void 0 !== uT) return uT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const UT = cT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return rT(new WebAssembly.Instance(TT, UT), TT)
    }
    async function ST(TT) {
      if (void 0 !== uT) return uT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const UT = cT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: mT,
        module: WT
      } = await async function(TT, UT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, UT)
          } catch (mT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw mT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", mT)
          }
          const WT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(WT, UT)
        } {
          const mT = await WebAssembly.instantiate(TT, UT);
          return mT instanceof WebAssembly.Instance ? {
            instance: mT,
            module: TT
          } : mT
        }
      }(await TT, UT);
      return rT(mT, WT)
    }
    var GT = mT(3001),
      NT = mT(6688);
    class ET extends Error {
      stage;
      constructor(TT, UT) {
        super((0, GT.F)(TT, UT), {
          cause: UT
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = TT
      }
    }
    let hT = null,
      DT = null;

    function oT() {
      return hT ? Promise.resolve(hT) : (DT || (DT = async function() {
        let TT;
        try {
          TT = await (0, GT.I)(new mT.U(mT(6690)), (0, NT.b)("bloxd_wasm_shader_pack"))
        } catch (UT) {
          throw new ET((0, GT.P)(UT), UT)
        }
        try {
          await ST({
            module_or_path: TT
          })
        } catch (UT) {
          throw new ET("instantiate", UT)
        }
        return hT = WT, hT
      }(), DT.then(void 0, (() => {
        DT = null
      }))), DT)
    }
    var AT = mT(6706);

    function RT(TT) {
      let [UT, mT, WT, zT] = TT;
      const MT = {
        file: UT,
        line: mT,
        message: WT
      };
      return zT && (MT.variants = zT.map(AT.m)), MT
    }

    function TU(TT) {
      return JSON.parse(TT).map(RT)
    }

    function UU(TT, UT) {
      if (!Number.isInteger(TT) || TT < 0 || TT > 4294967295) throw new Error(`${UT} ${TT} is not a whole number from 0 to 4294967295`);
      return TT
    }

    function mU(TT) {
      return [TT.named.map((TT => TT.name)), Uint32Array.from(TT.named, (TT => UU(TT.id, "Texture ID")))]
    }
    const WU = new WeakMap;
    const zU = new WeakMap,
      MU = new WeakSet;

    function gU(TT, UT) {
      if (MU.has(TT)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return UT()
      } catch (mT) {
        throw mT instanceof WebAssembly.RuntimeError && MU.add(TT), mT
      }
    }

    function nU(TT) {
      let UT = zU.get(TT);
      if (!UT) {
        let mT, WT;
        UT = {
          mTT: (UT, mT) => gU(TT, (() => function(TT, UT, mT) {
            const WT = TT.mTT(UT.map((TT => TT.path)), UT.map((TT => TT.source)), ...mU(mT), mT.aliases.map((TT => TT.name)), mT.aliases.map((TT => TT.texture)), mT.aliases.map((TT => TT.kind)));
            let zT = !1;
            try {
              const TT = WT.validationModuleCodes,
                UT = Array.from(WT.validationModuleKeys, ((UT, mT) => ({
                  key: (0, AT.m)(UT),
                  code: TT[mT]
                }))),
                mT = {
                  errors: TU(WT.xzT),
                  offInStrict: TU(WT.dzT),
                  variants: (0, AT.h)(WT),
                  validationModules: UT,
                  features: WT.features
                };
              return UT.forEach(((TT, UT) => {
                WU.set(TT, {
                  pack: WT,
                  index: UT
                })
              })), zT = UT.length > 0, mT
            } finally {
              zT || WT.free()
            }
          }(TT, UT, mT))),
          mapValidationMessage: (UT, mT) => {
            const WT = WU.get(UT);
            if (!WT) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return RT(JSON.parse(gU(TT, (() => WT.pack.mapValidationMessage(WT.index, mT.lineNum, mT.linePos, mT.message, mT.type)))))
          },
          mWT: UT => gU(TT, (() => function(TT, UT) {
            const mT = new Int32Array(UT.length),
              WT = [];
            return UT.forEach(((TT, UT) => {
              mT[UT] = TT.variants ? TT.variants.length : -1;
              for (const mT of TT.variants ?? []) WT.push((0, AT.i)(mT))
            })), TU(TT.mWT(UT.map((TT => TT.file)), Uint32Array.from(UT, (TT => UU(TT.line, "Diagnostic line"))), UT.map((TT => TT.message)), mT, Uint8Array.from(WT)))
          }(TT, UT))),
          JF: UT => gU(TT, (() => TT.JF(...mU(UT)))),
          get SHADER_PACK_HEADER_VERSION() {
            return mT ??= gU(TT, (() => TT.YzT())), mT
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return WT ??= gU(TT, (() => {
              const UT = TT.bzT();
              return TT.izT().map(((TT, mT) => ({
                path: TT,
                source: UT[mT]
              })))
            })), WT
          },
          JzT: UT => gU(TT, (() => TT.JzT(UT))),
          resolveHeader: UT => gU(TT, (() => TT.ezT((0, AT.i)(UT)))),
          OzT: () => gU(TT, (() => TT.OzT()))
        }, zU.set(TT, UT)
      }
      return UT
    }
    var HU = mT(3336),
      kU = mT(6698);
    const jU = "bloxdShaderPackWasmFailureReported";
    let lU = null;

    function LU() {
      return lU ??= async function() {
        if ("undefined" === typeof WebAssembly) return pU("unsupported", "This browser has no WebAssembly"), null;
        const TT = (0, kU.loadShaderPackTextures)().then((() => !0), (TT => (console.error("Could not load the shader pack textures, so shader packs can't run", TT), !1)));
        try {
          const UT = await async function() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oT;
            return nU(await TT())
          }();
          return await TT ? UT : null
        } catch (UT) {
          const TT = UT instanceof Error ? UT.message : String(UT);
          return pU(HU.d[UT instanceof ET ? UT.stage : "instantiate"], TT), null
        }
      }(), lU
    }

    function pU(TT, UT) {
      (0, HU.g)(jU, `Shader pack wasm ${TT}, so shader packs can't run: ${UT}`, UT, `shader_pack_${TT}`)
    }
  },
  6690: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_shader_pack_bg.59eb84459d886a20e964.wasm"
  },
  6688: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(3001);
    const zT = {
      bloxd_wasm: () => "f27f4f7ab88718881db9d78f55a901cbbb02cd6bf05768435c5f2febd84d596d",
      bloxd_wasm_client: () => "fe788e9625b49e5678303f11a8ccc6a8c723d74fb00195130bf800992df44145",
      bloxd_wasm_workers: () => "9fb7dbb4f3017c2cc6380a2c767b44a4b54fa9ed16a4abd92a7532b57861043e",
      bloxd_wasm_models: () => "c20178931ac19cee58b7771522bf0ba147ea1510835a2c987e0b1db7fea6ed31",
      bloxd_wasm_webgpu: () => "35eb5bbeecb540e751c7772a16e8c673eae334d8012cb03c16848cbcaead6ddb",
      bloxd_wasm_webgl: () => "cec6d5fa8c55e39d3e1d139626227ac277edded615c086119498fb33675206ab",
      bloxd_wasm_webgl1: () => "74b3f9f1c13416de2df904cf4e4ab62ffa42eac861f93b0a1bccb4d2143350c5",
      bloxd_wasm_replay: () => "f779c38a59848818069249dcb1a8196265b0837c473149c9b69b1b4da8202e06",
      bloxd_wasm_recorder: () => "51a9fb786a0c5f3456cd21a32d84b845b2ae56e9d50089027c682f1bd37ca3f5",
      bloxd_wasm_anim: () => "9afb84ad58982f160166f83214a1898ab627c7d097478d5712c0084c9f41f151",
      bloxd_wasm_textures: () => "4cb0448cd98b7a67e67215005f76b27fa8e465345a667579443082f00c6c20a6",
      bloxd_wasm_shader_pack: () => "b8b683214f5ac4a8b9de92714a869aeb3ab931c2e3e084bdd9355b16df02f922"
    };
    var MT = mT(4780);

    function gT(TT) {
      const UT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== UT) return {
        sha256: UT,
        onMismatch: MT.z
      };
      throw new WT.i(`${TT} has no release digest, so this build refuses it`)
    }
  },
  6706: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => iT,
      h: () => bT,
      i: () => fT,
      m: () => vT
    });
    var WT = mT(6713);
    const zT = 6,
      MT = 3,
      gT = 1,
      nT = 2,
      HT = 4,
      kT = 8,
      jT = 16,
      lT = 32,
      LT = 64,
      pT = 128,
      BT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ZT(TT) {
      if (!TT) return 0;
      const UT = BT.indexOf(TT);
      if (UT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return UT
    }

    function cT(TT) {
      if (0 === TT) return null;
      const UT = BT[TT];
      if (void 0 === UT) throw new Error(`${TT} is not a shader pack hook function id`);
      return UT
    }

    function vT(TT) {
      const UT = WT.e.length;
      return {
        strict: TT >= UT,
        program: WT.e[TT % UT]
      }
    }

    function fT(TT) {
      return Number(TT.strict) * WT.e.length + WT.e.indexOf(TT.program)
    }

    function qT(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function iT(TT) {
      const UT = {
        variantFlags: new Uint8Array(zT),
        hooks: new Uint8Array(zT * MT),
        moduleCodes: Array(zT).fill(""),
        reads: Array(2 * zT).fill("")
      };
      for (const mT of TT) {
        const TT = fT(mT.key),
          WT = (TT, UT) => null === mT.hooks.surface || mT.reads.fragment.includes(TT) ? 0 : UT;
        UT.variantFlags[TT] = (mT.sceneDepth ? gT : 0) | (mT.movesVertices ? nT : 0) | (mT.sunShadow ? HT : 0) | (mT.airShadow ? kT : 0) | (mT.discards ? jT : 0) | WT("localPosition", lT) | WT("enchantSpeed", LT) | WT("enchantTier", pT), UT.hooks[TT * MT] = ZT(mT.hooks.vertex), UT.hooks[TT * MT + 1] = ZT(mT.hooks.surface), UT.hooks[TT * MT + 2] = ZT(mT.hooks.light), UT.moduleCodes[TT] = mT.moduleCode, UT.reads[2 * TT] = mT.reads.vertex.join(" "), UT.reads[2 * TT + 1] = mT.reads.fragment.join(" ")
      }
      return UT
    }

    function bT(TT) {
      const {
        hooks: UT,
        moduleCodes: mT,
        reads: WT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, zT) => {
        const lT = zT * MT;
        return {
          key: vT(zT),
          hooks: {
            vertex: cT(UT[lT]),
            surface: cT(UT[lT + 1]),
            light: cT(UT[lT + 2])
          },
          moduleCode: mT[zT],
          sceneDepth: 0 !== (TT & gT),
          sunShadow: 0 !== (TT & HT),
          airShadow: 0 !== (TT & kT),
          movesVertices: 0 !== (TT & nT),
          discards: 0 !== (TT & jT),
          reads: {
            vertex: qT(WT[2 * zT]),
            fragment: qT(WT[2 * zT + 1])
          }
        }
      }))
    }
  },
  6713: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT,
      i: () => gT,
      l: () => nT,
      n: () => zT,
      r: () => MT
    });
    const WT = ["terrain", "liquid", "model"];

    function zT() {
      const TT = [];
      for (const UT of [!1, !0])
        for (const mT of WT) TT.push({
          strict: UT,
          program: mT
        });
      return TT
    }

    function MT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function gT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function nT(TT, UT) {
      return "off" !== UT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === UT) && !gT(TT))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);