export const id = 117;
export const ids = [117];
export const modules = {
  5621: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      loadPageShaderPackCompiler: () => tM
    });
    var wW = {};
    MW.r(wW), MW.d(wW, {
      TeW: () => CW,
      wAW: () => zR,
      default: () => OW,
      gBW: () => AW,
      iBW: () => bR,
      initSync: () => uW,
      gR: () => yR,
      ZyW: () => NW,
      YeW: () => eW,
      JeW: () => BW,
      lRW: () => tR,
      PeW: () => TW,
      oRW: () => gR,
      IeW: () => iR
    });
    class CW {
      static __wrap(WW) {
        const RW = Object.create(CW.prototype);
        return RW.__wbg_ptr = WW, JW.register(RW, RW.__wbg_ptr, RW), RW
      }
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, JW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        xR.wYEx(WW, 0)
      }
      get errorsJson() {
        let WW, RW;
        try {
          const MW = xR.phze(this.__wbg_ptr);
          return WW = MW[0], RW = MW[1], fW(MW[0], MW[1])
        } finally {
          xR.l1BZ(WW, RW, 1)
        }
      }
      get features() {
        const WW = xR.ZqNK(this.__wbg_ptr);
        var RW = IW(WW[0], WW[1]);
        return xR.l1BZ(WW[0], 4 * WW[1], 4), RW
      }
      get hooks() {
        const WW = xR.shEI(this.__wbg_ptr);
        var RW = oW(WW[0], WW[1]).slice();
        return xR.l1BZ(WW[0], 1 * WW[1], 1), RW
      }
      mapValidationMessage(WW, RW, MW, wW, CW) {
        let zR, AW;
        try {
          const NW = xR.QPmT(this.__wbg_ptr, WW, RW, MW, PW(wW), PW(CW));
          var bR = NW[0],
            yR = NW[1];
          if (NW[3]) throw bR = 0, yR = 0, dW(NW[2]);
          return zR = bR, AW = yR, fW(bR, yR)
        } finally {
          xR.l1BZ(zR, AW, 1)
        }
      }
      get moduleCodes() {
        const WW = xR.QFkP(this.__wbg_ptr);
        var RW = IW(WW[0], WW[1]);
        return xR.l1BZ(WW[0], 4 * WW[1], 4), RW
      }
      get offInStrictJson() {
        let WW, RW;
        try {
          const MW = xR.COC4(this.__wbg_ptr);
          return WW = MW[0], RW = MW[1], fW(MW[0], MW[1])
        } finally {
          xR.l1BZ(WW, RW, 1)
        }
      }
      get reads() {
        const WW = xR.uMyK(this.__wbg_ptr);
        var RW = IW(WW[0], WW[1]);
        return xR.l1BZ(WW[0], 4 * WW[1], 4), RW
      }
      get validationModuleCodes() {
        const WW = xR.PJri(this.__wbg_ptr);
        var RW = IW(WW[0], WW[1]);
        return xR.l1BZ(WW[0], 4 * WW[1], 4), RW
      }
      get validationModuleKeys() {
        const WW = xR.t3m5(this.__wbg_ptr);
        var RW = oW(WW[0], WW[1]).slice();
        return xR.l1BZ(WW[0], 1 * WW[1], 1), RW
      }
      get variantFlags() {
        const WW = xR.cXRS(this.__wbg_ptr);
        var RW = oW(WW[0], WW[1]).slice();
        return xR.l1BZ(WW[0], 1 * WW[1], 1), RW
      }
    }

    function zR(WW, RW, MW, wW, zR, AW, bR) {
      const yR = sW(WW, xR.vED7),
        NW = vR,
        eW = sW(RW, xR.vED7),
        BW = vR,
        tR = sW(MW, xR.vED7),
        TW = vR,
        gR = aR(wW, xR.vED7),
        iR = vR,
        YW = sW(zR, xR.vED7),
        JW = vR,
        PW = sW(AW, xR.vED7),
        IW = vR,
        oW = sW(bR, xR.vED7),
        lW = vR,
        FW = xR.M0jM(yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW);
      if (FW[2]) throw dW(FW[1]);
      return CW.__wrap(FW[0])
    }

    function AW() {
      const WW = xR.Bqgx();
      var RW = IW(WW[0], WW[1]);
      return xR.l1BZ(WW[0], 4 * WW[1], 4), RW
    }

    function bR() {
      const WW = xR.L1ma();
      var RW = IW(WW[0], WW[1]);
      return xR.l1BZ(WW[0], 4 * WW[1], 4), RW
    }

    function yR() {
      xR.lqQi()
    }

    function NW(WW, RW, MW, wW, CW) {
      let zR, AW;
      try {
        const NW = sW(WW, xR.vED7),
          eW = vR,
          BW = aR(RW, xR.vED7),
          tR = vR,
          TW = sW(MW, xR.vED7),
          gR = vR,
          iR = aR(wW, xR.vED7),
          YW = vR,
          JW = function(WW, RW) {
            const MW = RW(1 * WW.length, 1) >>> 0;
            return cR().set(WW, MW / 1), vR = WW.length, MW
          }(CW, xR.vED7),
          PW = vR,
          IW = xR.Wp77(NW, eW, BW, tR, TW, gR, iR, YW, JW, PW);
        var bR = IW[0],
          yR = IW[1];
        if (IW[3]) throw bR = 0, yR = 0, dW(IW[2]);
        return zR = bR, AW = yR, fW(bR, yR)
      } finally {
        xR.l1BZ(zR, AW, 1)
      }
    }

    function eW() {
      let WW, RW;
      try {
        const MW = xR.fyIz();
        return WW = MW[0], RW = MW[1], fW(MW[0], MW[1])
      } finally {
        xR.l1BZ(WW, RW, 1)
      }
    }

    function BW(WW) {
      let RW, MW;
      try {
        const zR = xR.WUgR(WW);
        var wW = zR[0],
          CW = zR[1];
        if (zR[3]) throw wW = 0, CW = 0, dW(zR[2]);
        return RW = wW, MW = CW, fW(wW, CW)
      } finally {
        xR.l1BZ(RW, MW, 1)
      }
    }

    function tR() {
      return xR.OhrB() >>> 0
    }

    function TW() {
      let WW, RW;
      try {
        const MW = xR.aiub();
        return WW = MW[0], RW = MW[1], fW(MW[0], MW[1])
      } finally {
        xR.l1BZ(WW, RW, 1)
      }
    }

    function gR(WW, RW) {
      let MW, wW;
      try {
        const AW = sW(WW, xR.vED7),
          bR = vR,
          yR = aR(RW, xR.vED7),
          NW = vR,
          eW = xR.kVwN(AW, bR, yR, NW);
        var CW = eW[0],
          zR = eW[1];
        if (eW[3]) throw CW = 0, zR = 0, dW(eW[2]);
        return MW = CW, wW = zR, fW(CW, zR)
      } finally {
        xR.l1BZ(MW, wW, 1)
      }
    }

    function iR(WW) {
      let RW, MW;
      try {
        const zR = xR.NPYC(PW(WW));
        var wW = zR[0],
          CW = zR[1];
        if (zR[3]) throw wW = 0, CW = 0, dW(zR[2]);
        return RW = wW, MW = CW, fW(wW, CW)
      } finally {
        xR.l1BZ(RW, MW, 1)
      }
    }

    function YW() {
      return {
        __proto__: null,
        tVSA: {
          __proto__: null,
          IIHN: function(WW, RW) {
            return PW(Error(fW(WW, RW)))
          },
          Yqzg: function(WW) {
            return null === XW(WW)
          },
          Z4Vl: function(WW) {
            return "string" === typeof XW(WW)
          },
          Fyj9: function(WW, RW) {
            const MW = XW(RW),
              wW = "string" === typeof MW ? MW : void 0;
            var CW, zR = void 0 === (CW = wW) || null === CW ? 0 : function(WW, RW, MW) {
                if (void 0 === MW) {
                  const MW = EW.encode(WW),
                    wW = RW(MW.length, 1) >>> 0;
                  return cR().subarray(wW, wW + MW.length).set(MW), vR = MW.length, wW
                }
                let wW = WW.length,
                  CW = RW(wW, 1) >>> 0;
                const zR = cR();
                let AW = 0;
                for (; AW < wW; AW++) {
                  const RW = WW.charCodeAt(AW);
                  if (RW > 127) break;
                  zR[CW + AW] = RW
                }
                if (AW !== wW) {
                  0 !== AW && (WW = WW.slice(AW)), CW = MW(CW, wW, wW = AW + 3 * WW.length, 1) >>> 0;
                  const RW = cR().subarray(CW + AW, CW + wW);
                  AW += EW.encodeInto(WW, RW).written, CW = MW(CW, wW, AW, 1) >>> 0
                }
                return vR = AW, CW
              }(wW, xR.vED7, xR.GVr4),
              AW = vR;
            FW().setInt32(WW + 4, AW, !0), FW().setInt32(WW + 0, zR, !0)
          },
          LkSB: function(WW, RW) {
            throw new Error(fW(WW, RW))
          },
          fnDp: function(WW, RW) {
            return XW(WW).charCodeAt(RW >>> 0)
          },
          rWug: function(WW, RW) {
            console.error(fW(WW, RW))
          },
          DJ6G: function(WW) {
            return XW(WW).length
          },
          W0IL: function(WW, RW) {
            return PW(fW(WW, RW))
          },
          WC3I: function(WW) {
            dW(WW)
          }
        }
      }
    }
    Symbol.dispose && (CW.prototype[Symbol.dispose] = CW.prototype.free);
    const JW = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((WW => xR.wYEx(WW, 1)));

    function PW(WW) {
      kR === jR.length && jR.push(jR.length + 1);
      const RW = kR;
      return kR = jR[RW], jR[RW] = WW, RW
    }

    function IW(WW, RW) {
      WW >>>= 0;
      const MW = FW(),
        wW = [];
      for (let CW = WW; CW < WW + 4 * RW; CW += 4) wW.push(dW(MW.getUint32(CW, !0)));
      return wW
    }

    function oW(WW, RW) {
      return WW >>>= 0, cR().subarray(WW / 1, WW / 1 + RW)
    }
    let lW = null;

    function FW() {
      return (null === lW || !0 === lW.buffer.detached || void 0 === lW.buffer.detached && lW.buffer !== xR.memory.buffer) && (lW = new DataView(xR.memory.buffer)), lW
    }

    function fW(WW, RW) {
      return function(WW, RW) {
        UW += RW, UW >= hW && (pW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), pW.decode(), UW = RW);
        return pW.decode(cR().subarray(WW, WW + RW))
      }(WW >>> 0, RW)
    }
    let QW = null;
    let rR = null;

    function cR() {
      return null !== rR && 0 !== rR.byteLength || (rR = new Uint8Array(xR.memory.buffer)), rR
    }

    function XW(WW) {
      return jR[WW]
    }
    let jR = new Array(1024).fill(void 0);
    jR.push(void 0, null, !0, !1);
    let kR = jR.length;

    function aR(WW, RW) {
      const MW = RW(4 * WW.length, 4) >>> 0;
      return (null !== QW && 0 !== QW.byteLength || (QW = new Uint32Array(xR.memory.buffer)), QW).set(WW, MW / 4), vR = WW.length, MW
    }

    function sW(WW, RW) {
      const MW = RW(4 * WW.length, 4) >>> 0,
        wW = FW();
      for (let CW = 0; CW < WW.length; CW++) wW.setUint32(MW + 4 * CW, PW(WW[CW]), !0);
      return vR = WW.length, MW
    }

    function dW(WW) {
      const RW = XW(WW);
      return function(WW) {
        WW < 1028 || (jR[WW] = kR, kR = WW)
      }(WW), RW
    }
    let pW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    pW.decode();
    const hW = 2146435072;
    let UW = 0;
    const EW = new TextEncoder;
    "encodeInto" in EW || (EW.encodeInto = function(WW, RW) {
      const MW = EW.encode(WW);
      return RW.set(MW), {
        read: WW.length,
        written: MW.length
      }
    });
    let VW, mR, xR, vR = 0;

    function KW(WW, RW) {
      return mR = WW, xR = WW.exports, VW = RW, lW = null, QW = null, rR = null, xR.VXIW(), xR
    }

    function uW(WW) {
      if (void 0 !== xR) return xR;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RW = YW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return KW(new WebAssembly.Instance(WW, RW), WW)
    }
    async function OW(WW) {
      if (void 0 !== xR) return xR;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RW = YW();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: MW,
        module: wW
      } = await async function(WW, RW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, RW)
          } catch (MW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw MW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", MW)
          }
          const wW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(wW, RW)
        } {
          const MW = await WebAssembly.instantiate(WW, RW);
          return MW instanceof WebAssembly.Instance ? {
            instance: MW,
            module: WW
          } : MW
        }
      }(await WW, RW);
      return KW(MW, wW)
    }
    var nW = MW(2801),
      GW = MW(5629);
    class LW extends Error {
      stage;
      constructor(WW, RW) {
        super((0, nW.l)(WW, RW), {
          cause: RW
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = WW
      }
    }
    let HW = null,
      DW = null;

    function qR() {
      return HW ? Promise.resolve(HW) : (DW || (DW = async function() {
        let WW;
        try {
          WW = await (0, nW.p)(new MW.U(MW(5636)), (0, GW.e)("bloxd_wasm_shader_pack"))
        } catch (RW) {
          throw new LW((0, nW.s)(RW), RW)
        }
        try {
          await OW({
            module_or_path: WW
          })
        } catch (RW) {
          throw new LW("instantiate", RW)
        }
        return HW = wW, HW
      }(), DW.then(void 0, (() => {
        DW = null
      }))), DW)
    }
    var ZW = MW(5640);

    function SW(WW) {
      let [RW, MW, wW, CW] = WW;
      const zR = {
        file: RW,
        line: MW,
        message: wW
      };
      return CW && (zR.variants = CW.map(ZW.m)), zR
    }

    function WR(WW) {
      return JSON.parse(WW).map(SW)
    }

    function RR(WW, RW) {
      if (!Number.isInteger(WW) || WW < 0 || WW > 4294967295) throw new Error(`${RW} ${WW} is not a whole number from 0 to 4294967295`);
      return WW
    }

    function MR(WW) {
      return [WW.named.map((WW => WW.name)), Uint32Array.from(WW.named, (WW => RR(WW.id, "Texture ID")))]
    }
    const wR = new WeakMap;
    const CR = new WeakMap,
      zM = new WeakSet;

    function AR(WW, RW) {
      if (zM.has(WW)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return RW()
      } catch (MW) {
        throw MW instanceof WebAssembly.RuntimeError && zM.add(WW), MW
      }
    }

    function bM(WW) {
      let RW = CR.get(WW);
      if (!RW) {
        let MW, wW;
        RW = {
          wAW: (RW, MW) => AR(WW, (() => function(WW, RW, MW) {
            const wW = WW.wAW(RW.map((WW => WW.path)), RW.map((WW => WW.source)), ...MR(MW), MW.aliases.map((WW => WW.name)), MW.aliases.map((WW => WW.texture)), MW.aliases.map((WW => WW.kind)));
            let CW = !1;
            try {
              const WW = wW.validationModuleCodes,
                RW = Array.from(wW.validationModuleKeys, ((RW, MW) => ({
                  key: (0, ZW.m)(RW),
                  code: WW[MW]
                }))),
                MW = {
                  errors: WR(wW.errorsJson),
                  offInStrict: WR(wW.offInStrictJson),
                  variants: (0, ZW.g)(wW),
                  validationModules: RW,
                  features: wW.features
                };
              return RW.forEach(((WW, RW) => {
                wR.set(WW, {
                  pack: wW,
                  index: RW
                })
              })), CW = RW.length > 0, MW
            } finally {
              CW || wW.free()
            }
          }(WW, RW, MW))),
          mapValidationMessage: (RW, MW) => {
            const wW = wR.get(RW);
            if (!wW) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return SW(JSON.parse(AR(WW, (() => wW.pack.mapValidationMessage(wW.index, MW.lineNum, MW.linePos, MW.message, MW.type)))))
          },
          ZyW: RW => AR(WW, (() => function(WW, RW) {
            const MW = new Int32Array(RW.length),
              wW = [];
            return RW.forEach(((WW, RW) => {
              MW[RW] = WW.variants ? WW.variants.length : -1;
              for (const MW of WW.variants ?? []) wW.push((0, ZW.j)(MW))
            })), WR(WW.ZyW(RW.map((WW => WW.file)), Uint32Array.from(RW, (WW => RR(WW.line, "Diagnostic line"))), RW.map((WW => WW.message)), MW, Uint8Array.from(wW)))
          }(WW, RW))),
          oRW: RW => AR(WW, (() => WW.oRW(...MR(RW)))),
          get SHADER_PACK_HEADER_VERSION() {
            return MW ??= AR(WW, (() => WW.PeW())), MW
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return wW ??= AR(WW, (() => {
              const RW = WW.iBW();
              return WW.gBW().map(((WW, MW) => ({
                path: WW,
                source: RW[MW]
              })))
            })), wW
          },
          IeW: RW => AR(WW, (() => WW.IeW(RW))),
          resolveHeader: RW => AR(WW, (() => WW.JeW((0, ZW.j)(RW)))),
          YeW: () => AR(WW, (() => WW.YeW()))
        }, CR.set(WW, RW)
      }
      return RW
    }
    var yM = MW(2355),
      NR = MW(5638);
    const eR = "bloxdShaderPackWasmFailureReported";
    let BR = null;

    function tM() {
      return BR ??= async function() {
        if ("undefined" === typeof WebAssembly) return TR("unsupported", "This browser has no WebAssembly"), null;
        const WW = (0, NR.loadShaderPackTextures)().then((() => !0), (WW => (console.error("Could not load the shader pack textures, so shader packs can't run", WW), !1)));
        try {
          const RW = await async function() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qR;
            return bM(await WW())
          }();
          return await WW ? RW : null
        } catch (RW) {
          const WW = RW instanceof Error ? RW.message : String(RW);
          return TR(yM.c[RW instanceof LW ? RW.stage : "instantiate"], WW), null
        }
      }(), BR
    }

    function TR(WW, RW) {
      (0, yM.k)(eR, `Shader pack wasm ${WW}, so shader packs can't run: ${RW}`, RW, `shader_pack_${WW}`)
    }
  },
  5636: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_shader_pack_bg.92416c89ac7436823cf5.wasm"
  },
  5629: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(2801);
    const CW = {
      bloxd_wasm: () => "203c21aa685dc02d7135644abbcd3b43a006a971312aadf6b579e5c0912ba5f7",
      bloxd_wasm_client: () => "a77ff3d7010d2eb8b76b633277c458a02aa69d73a6b7b0f61b4b56c179565d82",
      bloxd_wasm_workers: () => "8f412dfdd4f30dbd2d7737bcfcbe48d8a44b2a8da10bfb2ae1b7e29d51125437",
      bloxd_wasm_models: () => "a2c24e83a17a8ea51d6d551a71c56cb26ce4162026e1cbbb094de7dc563c2466",
      bloxd_wasm_webgpu: () => "03136cbb4279f6e19dbdc7a6b27a89a1e9dbcfb41906d617400c1b8098a140cb",
      bloxd_wasm_webgl: () => "4b1a25494c2ed4cf220a7bb9a10b8c6844ff1f76c23929d2be00a88620743abd",
      bloxd_wasm_webgl1: () => "52bf789737e0035155091501532e60c5bb14c4059bdcbfb7216afa8b3715b02c",
      bloxd_wasm_replay: () => "1f5392d4ced29d91bff7aeba499f106661213b56c971b192288c4811b41cd07d",
      bloxd_wasm_recorder: () => "1fac86a86643ebd2010f3fe11c6a8cc2c6566f8162e97196ae75675bc3261673",
      bloxd_wasm_anim: () => "64cb5cc983adf707988a6c6507854d48955c50f80be9775c4150614da93910d2",
      bloxd_wasm_textures: () => "80b1e00de8cbc353671c67c9ae46a7c22ba4eb45364a0d4e33added505ec03be",
      bloxd_wasm_shader_pack: () => "13dad2e0aefbfe2a4f35d53d1b0b8cf2c467c8940e7540c4c139f66d272dac12"
    };
    var zR = MW(5631);

    function AW(WW) {
      const RW = Object.prototype.hasOwnProperty.call(CW, WW) ? CW[WW]() : void 0;
      if (void 0 !== RW) return {
        sha256: RW,
        onMismatch: zR.p
      };
      throw new wW.f(`${WW} has no release digest, so this build refuses it`)
    }
  },
  5640: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => JW,
      g: () => PW,
      j: () => iR,
      m: () => gR
    });
    var wW = MW(5644);
    const CW = 6,
      zR = 3,
      AW = 1,
      bR = 2,
      yR = 4,
      NW = 8,
      eW = 16,
      BW = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tR(WW) {
      if (!WW) return 0;
      const RW = BW.indexOf(WW);
      if (RW <= 0) throw new Error(`"${WW}" is not a shader pack hook function`);
      return RW
    }

    function TW(WW) {
      if (0 === WW) return null;
      const RW = BW[WW];
      if (void 0 === RW) throw new Error(`${WW} is not a shader pack hook function id`);
      return RW
    }

    function gR(WW) {
      const RW = wW.c.length;
      return {
        strict: WW >= RW,
        program: wW.c[WW % RW]
      }
    }

    function iR(WW) {
      return Number(WW.strict) * wW.c.length + wW.c.indexOf(WW.program)
    }

    function YW(WW) {
      return "" === WW ? [] : WW.split(" ")
    }

    function JW(WW) {
      const RW = {
        variantFlags: new Uint8Array(CW),
        hooks: new Uint8Array(CW * zR),
        moduleCodes: Array(CW).fill(""),
        reads: Array(2 * CW).fill("")
      };
      for (const MW of WW) {
        const WW = iR(MW.key);
        RW.variantFlags[WW] = (MW.sceneDepth ? AW : 0) | (MW.movesVertices ? bR : 0) | (MW.sunShadow ? yR : 0) | (MW.airShadow ? NW : 0) | (MW.discards ? eW : 0), RW.hooks[WW * zR] = tR(MW.hooks.vertex), RW.hooks[WW * zR + 1] = tR(MW.hooks.surface), RW.hooks[WW * zR + 2] = tR(MW.hooks.light), RW.moduleCodes[WW] = MW.moduleCode, RW.reads[2 * WW] = MW.reads.vertex.join(" "), RW.reads[2 * WW + 1] = MW.reads.fragment.join(" ")
      }
      return RW
    }

    function PW(WW) {
      const {
        hooks: RW,
        moduleCodes: MW,
        reads: wW
      } = WW;
      return Array.from(WW.variantFlags, ((WW, CW) => {
        const BW = CW * zR;
        return {
          key: gR(CW),
          hooks: {
            vertex: TW(RW[BW]),
            surface: TW(RW[BW + 1]),
            light: TW(RW[BW + 2])
          },
          moduleCode: MW[CW],
          sceneDepth: 0 !== (WW & AW),
          sunShadow: 0 !== (WW & yR),
          airShadow: 0 !== (WW & NW),
          movesVertices: 0 !== (WW & bR),
          discards: 0 !== (WW & eW),
          reads: {
            vertex: YW(wW[2 * CW]),
            fragment: YW(wW[2 * CW + 1])
          }
        }
      }))
    }
  },
  5644: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW,
      g: () => CW,
      k: () => zR
    });
    const wW = ["terrain", "liquid", "model"];

    function CW(WW) {
      return !WW.hooks.vertex && !WW.hooks.surface && !WW.hooks.light
    }

    function zR(WW, RW) {
      return "off" !== RW && (null === WW || WW.some((WW => WW.key.strict === ("strict" === RW) && !CW(WW))))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);