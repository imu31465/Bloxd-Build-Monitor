export const id = 157;
export const ids = [157];
export const modules = {
  7621: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      loadPageShaderPackCompiler: () => li
    });
    var mW = {};
    OW.r(mW), OW.d(mW, {
      mNW: () => EW,
      dWW: () => NW,
      default: () => qW,
      ENW: () => PW,
      NNW: () => LW,
      initSync: () => BW,
      qt: () => cW,
      smW: () => wW,
      PNW: () => tW,
      LNW: () => ZW,
      fn: () => xW,
      cNW: () => lW,
      IH: () => AW,
      wNW: () => bW
    });
    class EW {
      static __wrap(WW) {
        const iW = Object.create(EW.prototype);
        return iW.__wbg_ptr = WW, UW.register(iW, iW.__wbg_ptr, iW), iW
      }
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, UW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        fW.iYZ0(WW, 0)
      }
      get tNW() {
        let WW, iW;
        try {
          const OW = fW.sXz4(this.__wbg_ptr);
          return WW = OW[0], iW = OW[1], YW(OW[0], OW[1])
        } finally {
          fW.mMWd(WW, iW, 1)
        }
      }
      get features() {
        const WW = fW.Nz1o(this.__wbg_ptr);
        var iW = sW(WW[0], WW[1]);
        return fW.mMWd(WW[0], 4 * WW[1], 4), iW
      }
      get hooks() {
        const WW = fW.Gap1(this.__wbg_ptr);
        var iW = MW(WW[0], WW[1]).slice();
        return fW.mMWd(WW[0], 1 * WW[1], 1), iW
      }
      mapValidationMessage(WW, iW, OW, mW, EW) {
        let NW, PW;
        try {
          const wW = fW.cNpm(this.__wbg_ptr, WW, iW, OW, kW(mW), kW(EW));
          var LW = wW[0],
            cW = wW[1];
          if (wW[3]) throw LW = 0, cW = 0, dW(wW[2]);
          return NW = LW, PW = cW, YW(LW, cW)
        } finally {
          fW.mMWd(NW, PW, 1)
        }
      }
      get moduleCodes() {
        const WW = fW.LkJH(this.__wbg_ptr);
        var iW = sW(WW[0], WW[1]);
        return fW.mMWd(WW[0], 4 * WW[1], 4), iW
      }
      get ZNW() {
        let WW, iW;
        try {
          const OW = fW.vBWS(this.__wbg_ptr);
          return WW = OW[0], iW = OW[1], YW(OW[0], OW[1])
        } finally {
          fW.mMWd(WW, iW, 1)
        }
      }
      get reads() {
        const WW = fW.LjCS(this.__wbg_ptr);
        var iW = sW(WW[0], WW[1]);
        return fW.mMWd(WW[0], 4 * WW[1], 4), iW
      }
      get validationModuleCodes() {
        const WW = fW.Dqas(this.__wbg_ptr);
        var iW = sW(WW[0], WW[1]);
        return fW.mMWd(WW[0], 4 * WW[1], 4), iW
      }
      get validationModuleKeys() {
        const WW = fW.zCLh(this.__wbg_ptr);
        var iW = MW(WW[0], WW[1]).slice();
        return fW.mMWd(WW[0], 1 * WW[1], 1), iW
      }
      get variantFlags() {
        const WW = fW.u89O(this.__wbg_ptr);
        var iW = MW(WW[0], WW[1]).slice();
        return fW.mMWd(WW[0], 1 * WW[1], 1), iW
      }
    }

    function NW(WW, iW, OW, mW, NW, PW, LW) {
      const cW = oW(WW, fW.sECv),
        wW = CW,
        tW = oW(iW, fW.sECv),
        ZW = CW,
        xW = oW(OW, fW.sECv),
        lW = CW,
        AW = uW(mW, fW.sECv),
        bW = CW,
        jW = oW(NW, fW.sECv),
        UW = CW,
        kW = oW(PW, fW.sECv),
        sW = CW,
        MW = oW(LW, fW.sECv),
        KW = CW,
        SW = fW.bEs3(cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW);
      if (SW[2]) throw dW(SW[1]);
      return EW.__wrap(SW[0])
    }

    function PW() {
      const WW = fW.ym2B();
      var iW = sW(WW[0], WW[1]);
      return fW.mMWd(WW[0], 4 * WW[1], 4), iW
    }

    function LW() {
      const WW = fW.uCk0();
      var iW = sW(WW[0], WW[1]);
      return fW.mMWd(WW[0], 4 * WW[1], 4), iW
    }

    function cW() {
      fW.Q4LW()
    }

    function wW(WW, iW, OW, mW, EW) {
      let NW, PW;
      try {
        const wW = oW(WW, fW.sECv),
          tW = CW,
          ZW = uW(iW, fW.sECv),
          xW = CW,
          lW = oW(OW, fW.sECv),
          AW = CW,
          bW = uW(mW, fW.sECv),
          jW = CW,
          UW = function(WW, iW) {
            const OW = iW(1 * WW.length, 1) >>> 0;
            return JW().set(WW, OW / 1), CW = WW.length, OW
          }(EW, fW.sECv),
          kW = CW,
          sW = fW.gYH1(wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW);
        var LW = sW[0],
          cW = sW[1];
        if (sW[3]) throw LW = 0, cW = 0, dW(sW[2]);
        return NW = LW, PW = cW, YW(LW, cW)
      } finally {
        fW.mMWd(NW, PW, 1)
      }
    }

    function tW() {
      let WW, iW;
      try {
        const OW = fW.fPkj();
        return WW = OW[0], iW = OW[1], YW(OW[0], OW[1])
      } finally {
        fW.mMWd(WW, iW, 1)
      }
    }

    function ZW(WW) {
      let iW, OW;
      try {
        const NW = fW.RXAC(WW);
        var mW = NW[0],
          EW = NW[1];
        if (NW[3]) throw mW = 0, EW = 0, dW(NW[2]);
        return iW = mW, OW = EW, YW(mW, EW)
      } finally {
        fW.mMWd(iW, OW, 1)
      }
    }

    function xW() {
      return fW.ZWh1() >>> 0
    }

    function lW() {
      let WW, iW;
      try {
        const OW = fW.iA7j();
        return WW = OW[0], iW = OW[1], YW(OW[0], OW[1])
      } finally {
        fW.mMWd(WW, iW, 1)
      }
    }

    function AW(WW, iW) {
      let OW, mW;
      try {
        const PW = oW(WW, fW.sECv),
          LW = CW,
          cW = uW(iW, fW.sECv),
          wW = CW,
          tW = fW.Szsq(PW, LW, cW, wW);
        var EW = tW[0],
          NW = tW[1];
        if (tW[3]) throw EW = 0, NW = 0, dW(tW[2]);
        return OW = EW, mW = NW, YW(EW, NW)
      } finally {
        fW.mMWd(OW, mW, 1)
      }
    }

    function bW(WW) {
      let iW, OW;
      try {
        const NW = fW.bEVV(kW(WW));
        var mW = NW[0],
          EW = NW[1];
        if (NW[3]) throw mW = 0, EW = 0, dW(NW[2]);
        return iW = mW, OW = EW, YW(mW, EW)
      } finally {
        fW.mMWd(iW, OW, 1)
      }
    }

    function jW() {
      return {
        __proto__: null,
        wuvB: {
          __proto__: null,
          xaAu: function(WW, iW) {
            return kW(Error(YW(WW, iW)))
          },
          HvYL: function(WW) {
            return null === hW(WW)
          },
          q2F2: function(WW) {
            return "string" === typeof hW(WW)
          },
          r81f: function(WW, iW) {
            const OW = hW(iW),
              mW = "string" === typeof OW ? OW : void 0;
            var EW, NW = void 0 === (EW = mW) || null === EW ? 0 : function(WW, iW, OW) {
                if (void 0 === OW) {
                  const OW = DW.encode(WW),
                    mW = iW(OW.length, 1) >>> 0;
                  return JW().subarray(mW, mW + OW.length).set(OW), CW = OW.length, mW
                }
                let mW = WW.length,
                  EW = iW(mW, 1) >>> 0;
                const NW = JW();
                let PW = 0;
                for (; PW < mW; PW++) {
                  const iW = WW.charCodeAt(PW);
                  if (iW > 127) break;
                  NW[EW + PW] = iW
                }
                if (PW !== mW) {
                  0 !== PW && (WW = WW.slice(PW)), EW = OW(EW, mW, mW = PW + 3 * WW.length, 1) >>> 0;
                  const iW = JW().subarray(EW + PW, EW + mW);
                  PW += DW.encodeInto(WW, iW).written, EW = OW(EW, mW, PW, 1) >>> 0
                }
                return CW = PW, EW
              }(mW, fW.sECv, fW.qUaG),
              PW = CW;
            SW().setInt32(WW + 4, PW, !0), SW().setInt32(WW + 0, NW, !0)
          },
          nQD5: function(WW, iW) {
            throw new Error(YW(WW, iW))
          },
          Dnck: function(WW, iW) {
            return hW(WW).charCodeAt(iW >>> 0)
          },
          KCJ4: function(WW, iW) {
            console.error(YW(WW, iW))
          },
          AwFd: function(WW) {
            return hW(WW).length
          },
          BjOt: function(WW, iW) {
            return kW(YW(WW, iW))
          },
          H1Gh: function(WW) {
            dW(WW)
          }
        }
      }
    }
    Symbol.dispose && (EW.prototype[Symbol.dispose] = EW.prototype.free);
    const UW = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((WW => fW.iYZ0(WW, 1)));

    function kW(WW) {
      nW === HW.length && HW.push(HW.length + 1);
      const iW = nW;
      return nW = HW[iW], HW[iW] = WW, iW
    }

    function sW(WW, iW) {
      WW >>>= 0;
      const OW = SW(),
        mW = [];
      for (let EW = WW; EW < WW + 4 * iW; EW += 4) mW.push(dW(OW.getUint32(EW, !0)));
      return mW
    }

    function MW(WW, iW) {
      return WW >>>= 0, JW().subarray(WW / 1, WW / 1 + iW)
    }
    let KW = null;

    function SW() {
      return null !== KW && KW.buffer === fW.memory.buffer || (KW = new DataView(fW.memory.buffer)), KW
    }

    function YW(WW, iW) {
      return function(WW, iW) {
        gW += iW, gW >= vW && (eW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), eW.decode(), gW = iW);
        return eW.decode(JW().subarray(WW, WW + iW))
      }(WW >>> 0, iW)
    }
    let yW = null;
    let TW = null;

    function JW() {
      return null !== TW && 0 !== TW.byteLength || (TW = new Uint8Array(fW.memory.buffer)), TW
    }

    function hW(WW) {
      return HW[WW]
    }
    let HW = new Array(1024).fill(void 0);
    HW.push(void 0, null, !0, !1);
    let nW = HW.length;

    function uW(WW, iW) {
      const OW = iW(4 * WW.length, 4) >>> 0;
      return (null !== yW && 0 !== yW.byteLength || (yW = new Uint32Array(fW.memory.buffer)), yW).set(WW, OW / 4), CW = WW.length, OW
    }

    function oW(WW, iW) {
      const OW = iW(4 * WW.length, 4) >>> 0,
        mW = SW();
      for (let EW = 0; EW < WW.length; EW++) mW.setUint32(OW + 4 * EW, kW(WW[EW]), !0);
      return CW = WW.length, OW
    }

    function dW(WW) {
      const iW = hW(WW);
      return function(WW) {
        WW < 1028 || (HW[WW] = nW, nW = WW)
      }(WW), iW
    }
    let eW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    eW.decode();
    const vW = 2146435072;
    let gW = 0;
    const DW = new TextEncoder;
    "encodeInto" in DW || (DW.encodeInto = function(WW, iW) {
      const OW = DW.encode(WW);
      return iW.set(OW), {
        read: WW.length,
        written: OW.length
      }
    });
    let VW, pW, fW, CW = 0;

    function XW(WW, iW) {
      return pW = WW, fW = WW.exports, VW = iW, KW = null, yW = null, TW = null, fW.UcQe(), fW
    }

    function BW(WW) {
      if (void 0 !== fW) return fW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const iW = jW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return XW(new WebAssembly.Instance(WW, iW), WW)
    }
    async function qW(WW) {
      if (void 0 !== fW) return fW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const iW = jW();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: OW,
        module: mW
      } = await async function(WW, iW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, iW)
          } catch (OW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw OW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", OW)
          }
          const mW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(mW, iW)
        } {
          const OW = await WebAssembly.instantiate(WW, iW);
          return OW instanceof WebAssembly.Instance ? {
            instance: OW,
            module: WW
          } : OW
        }
      }(await WW, iW);
      return XW(OW, mW)
    }
    var RW = OW(2388),
      GW = OW(7625);
    class IW extends Error {
      stage;
      constructor(WW, iW) {
        super((0, RW.A)(WW, iW), {
          cause: iW
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = WW
      }
    }
    let aW = null,
      rW = null;

    function zW() {
      return aW ? Promise.resolve(aW) : (rW || (rW = async function() {
        let WW;
        try {
          WW = await (0, RW.B)(new OW.U(OW(7629)), (0, GW.c)("bloxd_wasm_shader_pack"))
        } catch (iW) {
          throw new IW((0, RW.E)(iW), iW)
        }
        try {
          await qW({
            module_or_path: WW
          })
        } catch (iW) {
          throw new IW("instantiate", iW)
        }
        return aW = mW, aW
      }(), rW.then(void 0, (() => {
        rW = null
      }))), rW)
    }
    var FW = OW(7639);

    function QW(WW) {
      let [iW, OW, mW, EW] = WW;
      const NW = {
        file: iW,
        line: OW,
        message: mW
      };
      return EW && (NW.variants = EW.map(FW.m)), NW
    }

    function Wi(WW) {
      return JSON.parse(WW).map(QW)
    }

    function ii(WW, iW) {
      if (!Number.isInteger(WW) || WW < 0 || WW > 4294967295) throw new Error(`${iW} ${WW} is not a whole number from 0 to 4294967295`);
      return WW
    }

    function Oi(WW) {
      return [WW.named.map((WW => WW.name)), Uint32Array.from(WW.named, (WW => ii(WW.id, "Texture ID")))]
    }
    const mi = new WeakMap;
    const Ei = new WeakMap,
      Ni = new WeakSet;

    function Pi(WW, iW) {
      if (Ni.has(WW)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return iW()
      } catch (OW) {
        throw OW instanceof WebAssembly.RuntimeError && Ni.add(WW), OW
      }
    }

    function Li(WW) {
      let iW = Ei.get(WW);
      if (!iW) {
        let OW, mW;
        iW = {
          dWW: (iW, OW) => Pi(WW, (() => function(WW, iW, OW) {
            const mW = WW.dWW(iW.map((WW => WW.path)), iW.map((WW => WW.source)), ...Oi(OW), OW.aliases.map((WW => WW.name)), OW.aliases.map((WW => WW.texture)), OW.aliases.map((WW => WW.kind)));
            let EW = !1;
            try {
              const WW = mW.validationModuleCodes,
                iW = Array.from(mW.validationModuleKeys, ((iW, OW) => ({
                  key: (0, FW.m)(iW),
                  code: WW[OW]
                }))),
                OW = {
                  errors: Wi(mW.tNW),
                  offInStrict: Wi(mW.ZNW),
                  variants: (0, FW.i)(mW),
                  validationModules: iW,
                  features: mW.features
                };
              return iW.forEach(((WW, iW) => {
                mi.set(WW, {
                  pack: mW,
                  index: iW
                })
              })), EW = iW.length > 0, OW
            } finally {
              EW || mW.free()
            }
          }(WW, iW, OW))),
          mapValidationMessage: (iW, OW) => {
            const mW = mi.get(iW);
            if (!mW) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return QW(JSON.parse(Pi(WW, (() => mW.pack.mapValidationMessage(mW.index, OW.lineNum, OW.linePos, OW.message, OW.type)))))
          },
          smW: iW => Pi(WW, (() => function(WW, iW) {
            const OW = new Int32Array(iW.length),
              mW = [];
            return iW.forEach(((WW, iW) => {
              OW[iW] = WW.variants ? WW.variants.length : -1;
              for (const OW of WW.variants ?? []) mW.push((0, FW.l)(OW))
            })), Wi(WW.smW(iW.map((WW => WW.file)), Uint32Array.from(iW, (WW => ii(WW.line, "Diagnostic line"))), iW.map((WW => WW.message)), OW, Uint8Array.from(mW)))
          }(WW, iW))),
          IH: iW => Pi(WW, (() => WW.IH(...Oi(iW)))),
          get SHADER_PACK_HEADER_VERSION() {
            return OW ??= Pi(WW, (() => WW.cNW())), OW
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return mW ??= Pi(WW, (() => {
              const iW = WW.NNW();
              return WW.ENW().map(((WW, OW) => ({
                path: WW,
                source: iW[OW]
              })))
            })), mW
          },
          wNW: iW => Pi(WW, (() => WW.wNW(iW))),
          resolveHeader: iW => Pi(WW, (() => WW.LNW((0, FW.l)(iW)))),
          PNW: () => Pi(WW, (() => WW.PNW()))
        }, Ei.set(WW, iW)
      }
      return iW
    }
    var ci = OW(4409),
      wi = OW(299),
      ti = OW(7637);
    const Zi = "bloxdShaderPackWasmFailureReported";
    let xi = null;

    function li() {
      return xi ??= async function() {
        if ("undefined" === typeof WebAssembly) return Ai("unsupported", "This browser has no WebAssembly"), null;
        const WW = (0, ti.loadShaderPackTextures)().then((() => !0), (WW => (console.error("Could not load the shader pack textures, so shader packs can't run", WW), !1)));
        try {
          await (0, wi.p)();
          const iW = await async function() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zW;
            return Li(await WW())
          }();
          return await WW ? iW : null
        } catch (iW) {
          const WW = iW instanceof Error ? iW.message : String(iW);
          return Ai(ci.b[iW instanceof IW ? iW.stage : "instantiate"], WW), null
        }
      }(), xi
    }

    function Ai(WW, iW) {
      (0, ci.j)(Zi, `Shader pack wasm ${WW}, so shader packs can't run: ${iW}`, iW, `shader_pack_${WW}`)
    }
  },
  7629: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_shader_pack_bg.2d63a3cce58e86eda196.wasm"
  },
  7625: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(2388);
    const EW = {
      bloxd_wasm: () => "102e63c69ba1846a7ef3e4f3119d9407d849792a77d386b77d132cbd19000baf",
      bloxd_wasm_client: () => "828553d657b63b8b78489e1c312c1521bbff4059679c6442f668bd5b77b44d26",
      bloxd_wasm_workers: () => "c3e0f9c9d3450b1b58eeeabddc49241fbc8ffeffe05a0e2cd8e7c4d8847442a4",
      bloxd_wasm_models: () => "77704cdcef014d8f1aa72c519a652297b25e80d6cafc34478014bd291b97f37e",
      bloxd_wasm_webgpu: () => "603e3bc645f5c3d0c95d7f24327b193ab3d090814bbdb68c6ad2438495025f9d",
      bloxd_wasm_webgl: () => "8157beb90345cb7dcaa6d28e4816f7951234731f38d297579b1de22172034862",
      bloxd_wasm_webgl1: () => "ac00e7c2f783046413779c397bcab25db7aaf3ceb5743e39ab05f2fc699b197b",
      bloxd_wasm_replay: () => "a585d75239773f442a258771a295653a54d6e99e4b872f0a2a4512a7fceaca4a",
      bloxd_wasm_recorder: () => "1c3da6ac9b656d482455def4919768325136d09e94b6b18afdb7ecc55287a265",
      bloxd_wasm_anim: () => "95aba8d7de72cdcce081f679def0f8248e845944fba77b065315103503401e53",
      bloxd_wasm_textures: () => "378f24688349d1dc6f860f72e8fafaf79ead5d9fccc14eb96ca959801b415d82",
      bloxd_wasm_shader_pack: () => "fa64ff9ddba4399ee91af4ff8bb1c0cc63df7e9ee2ebb4a275be7918ce6cdefd"
    };
    var NW = OW(5427);

    function PW(WW) {
      const iW = Object.prototype.hasOwnProperty.call(EW, WW) ? EW[WW]() : void 0;
      if (void 0 !== iW) return {
        sha256: iW,
        onMismatch: NW.y
      };
      throw new mW.k(`${WW} has no release digest, so this build refuses it`)
    }
  },
  7639: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => MW,
      i: () => KW,
      l: () => kW,
      m: () => UW
    });
    var mW = OW(7646);
    const EW = 6,
      NW = 3,
      PW = 1,
      LW = 2,
      cW = 4,
      wW = 8,
      tW = 16,
      ZW = 32,
      xW = 64,
      lW = 128,
      AW = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function bW(WW) {
      if (!WW) return 0;
      const iW = AW.indexOf(WW);
      if (iW <= 0) throw new Error(`"${WW}" is not a shader pack hook function`);
      return iW
    }

    function jW(WW) {
      if (0 === WW) return null;
      const iW = AW[WW];
      if (void 0 === iW) throw new Error(`${WW} is not a shader pack hook function id`);
      return iW
    }

    function UW(WW) {
      const iW = mW.e.length;
      return {
        strict: WW >= iW,
        program: mW.e[WW % iW]
      }
    }

    function kW(WW) {
      return Number(WW.strict) * mW.e.length + mW.e.indexOf(WW.program)
    }

    function sW(WW) {
      return "" === WW ? [] : WW.split(" ")
    }

    function MW(WW) {
      const iW = {
        variantFlags: new Uint8Array(EW),
        hooks: new Uint8Array(EW * NW),
        moduleCodes: Array(EW).fill(""),
        reads: Array(2 * EW).fill("")
      };
      for (const OW of WW) {
        const WW = kW(OW.key),
          mW = (WW, iW) => null === OW.hooks.surface || OW.reads.fragment.includes(WW) ? 0 : iW;
        iW.variantFlags[WW] = (OW.sceneDepth ? PW : 0) | (OW.movesVertices ? LW : 0) | (OW.sunShadow ? cW : 0) | (OW.airShadow ? wW : 0) | (OW.discards ? tW : 0) | mW("localPosition", ZW) | mW("enchantSpeed", xW) | mW("enchantTier", lW), iW.hooks[WW * NW] = bW(OW.hooks.vertex), iW.hooks[WW * NW + 1] = bW(OW.hooks.surface), iW.hooks[WW * NW + 2] = bW(OW.hooks.light), iW.moduleCodes[WW] = OW.moduleCode, iW.reads[2 * WW] = OW.reads.vertex.join(" "), iW.reads[2 * WW + 1] = OW.reads.fragment.join(" ")
      }
      return iW
    }

    function KW(WW) {
      const {
        hooks: iW,
        moduleCodes: OW,
        reads: mW
      } = WW;
      return Array.from(WW.variantFlags, ((WW, EW) => {
        const ZW = EW * NW;
        return {
          key: UW(EW),
          hooks: {
            vertex: jW(iW[ZW]),
            surface: jW(iW[ZW + 1]),
            light: jW(iW[ZW + 2])
          },
          moduleCode: OW[EW],
          sceneDepth: 0 !== (WW & PW),
          sunShadow: 0 !== (WW & cW),
          airShadow: 0 !== (WW & wW),
          movesVertices: 0 !== (WW & LW),
          discards: 0 !== (WW & tW),
          reads: {
            vertex: sW(mW[2 * EW]),
            fragment: sW(mW[2 * EW + 1])
          }
        }
      }))
    }
  },
  7646: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      g: () => PW,
      j: () => LW,
      n: () => EW,
      p: () => NW
    });
    const mW = ["terrain", "liquid", "model"];

    function EW() {
      const WW = [];
      for (const iW of [!1, !0])
        for (const OW of mW) WW.push({
          strict: iW,
          program: OW
        });
      return WW
    }

    function NW(WW) {
      return `${WW.strict?"strict":"allow"}.${WW.program}`
    }

    function PW(WW) {
      return !WW.hooks.vertex && !WW.hooks.surface && !WW.hooks.light
    }

    function LW(WW, iW) {
      return "off" !== iW && (null === WW || WW.some((WW => WW.key.strict === ("strict" === iW) && !PW(WW))))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);