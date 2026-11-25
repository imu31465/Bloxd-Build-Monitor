export const id = 138;
export const ids = [138];
export const modules = {
  6984: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadPageShaderPackCompiler: () => rW
    });
    var wQ = {};
    XQ.r(wQ), XQ.d(wQ, {
      HqQ: () => qQ,
      JQQ: () => TQ,
      default: () => nQ,
      aqQ: () => zQ,
      lqQ: () => sQ,
      initSync: () => eQ,
      QJ: () => FQ,
      gwQ: () => PQ,
      hqQ: () => gQ,
      iqQ: () => JQ,
      XE: () => rQ,
      cqQ: () => IQ,
      WE: () => jQ,
      RqQ: () => BQ
    });
    class qQ {
      static __wrap(QQ) {
        const WQ = Object.create(qQ.prototype);
        return WQ.__wbg_ptr = QQ, VQ.register(WQ, WQ.__wbg_ptr, WQ), WQ
      }
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        SQ.FqN5(QQ, 0)
      }
      get EqQ() {
        let QQ, WQ;
        try {
          const XQ = SQ.NHnA(this.__wbg_ptr);
          return QQ = XQ[0], WQ = XQ[1], vQ(XQ[0], XQ[1])
        } finally {
          SQ.HGmr(QQ, WQ, 1)
        }
      }
      get features() {
        const QQ = SQ.RTtg(this.__wbg_ptr);
        var WQ = pQ(QQ[0], QQ[1]);
        return SQ.HGmr(QQ[0], 4 * QQ[1], 4), WQ
      }
      get hooks() {
        const QQ = SQ.nYlm(this.__wbg_ptr);
        var WQ = GQ(QQ[0], QQ[1]).slice();
        return SQ.HGmr(QQ[0], 1 * QQ[1], 1), WQ
      }
      mapValidationMessage(QQ, WQ, XQ, wQ, qQ) {
        let TQ, zQ;
        try {
          const PQ = SQ.YgEP(this.__wbg_ptr, QQ, WQ, XQ, DQ(wQ), DQ(qQ));
          var sQ = PQ[0],
            FQ = PQ[1];
          if (PQ[3]) throw sQ = 0, FQ = 0, RQ(PQ[2]);
          return TQ = sQ, zQ = FQ, vQ(sQ, FQ)
        } finally {
          SQ.HGmr(TQ, zQ, 1)
        }
      }
      get moduleCodes() {
        const QQ = SQ.B7Ov(this.__wbg_ptr);
        var WQ = pQ(QQ[0], QQ[1]);
        return SQ.HGmr(QQ[0], 4 * QQ[1], 4), WQ
      }
      get uqQ() {
        let QQ, WQ;
        try {
          const XQ = SQ.hcLQ(this.__wbg_ptr);
          return QQ = XQ[0], WQ = XQ[1], vQ(XQ[0], XQ[1])
        } finally {
          SQ.HGmr(QQ, WQ, 1)
        }
      }
      get reads() {
        const QQ = SQ.fAEi(this.__wbg_ptr);
        var WQ = pQ(QQ[0], QQ[1]);
        return SQ.HGmr(QQ[0], 4 * QQ[1], 4), WQ
      }
      get validationModuleCodes() {
        const QQ = SQ.Mthx(this.__wbg_ptr);
        var WQ = pQ(QQ[0], QQ[1]);
        return SQ.HGmr(QQ[0], 4 * QQ[1], 4), WQ
      }
      get validationModuleKeys() {
        const QQ = SQ.KeRU(this.__wbg_ptr);
        var WQ = GQ(QQ[0], QQ[1]).slice();
        return SQ.HGmr(QQ[0], 1 * QQ[1], 1), WQ
      }
      get variantFlags() {
        const QQ = SQ.mquR(this.__wbg_ptr);
        var WQ = GQ(QQ[0], QQ[1]).slice();
        return SQ.HGmr(QQ[0], 1 * QQ[1], 1), WQ
      }
    }

    function TQ(QQ, WQ, XQ, wQ, TQ, zQ, sQ) {
      const FQ = AQ(QQ, SQ.Ah0U),
        PQ = tQ,
        gQ = AQ(WQ, SQ.Ah0U),
        JQ = tQ,
        rQ = AQ(XQ, SQ.Ah0U),
        IQ = tQ,
        jQ = cQ(wQ, SQ.Ah0U),
        BQ = tQ,
        yQ = AQ(TQ, SQ.Ah0U),
        VQ = tQ,
        DQ = AQ(zQ, SQ.Ah0U),
        pQ = tQ,
        GQ = AQ(sQ, SQ.Ah0U),
        UQ = tQ,
        bQ = SQ.f4EM(FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ);
      if (bQ[2]) throw RQ(bQ[1]);
      return qQ.__wrap(bQ[0])
    }

    function zQ() {
      const QQ = SQ.mOAJ();
      var WQ = pQ(QQ[0], QQ[1]);
      return SQ.HGmr(QQ[0], 4 * QQ[1], 4), WQ
    }

    function sQ() {
      const QQ = SQ.oUJD();
      var WQ = pQ(QQ[0], QQ[1]);
      return SQ.HGmr(QQ[0], 4 * QQ[1], 4), WQ
    }

    function FQ() {
      SQ.ukbh()
    }

    function PQ(QQ, WQ, XQ, wQ, qQ) {
      let TQ, zQ;
      try {
        const PQ = AQ(QQ, SQ.Ah0U),
          gQ = tQ,
          JQ = cQ(WQ, SQ.Ah0U),
          rQ = tQ,
          IQ = AQ(XQ, SQ.Ah0U),
          jQ = tQ,
          BQ = cQ(wQ, SQ.Ah0U),
          yQ = tQ,
          VQ = function(QQ, WQ) {
            const XQ = WQ(1 * QQ.length, 1) >>> 0;
            return aQ().set(QQ, XQ / 1), tQ = QQ.length, XQ
          }(qQ, SQ.Ah0U),
          DQ = tQ,
          pQ = SQ.JAgL(PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ);
        var sQ = pQ[0],
          FQ = pQ[1];
        if (pQ[3]) throw sQ = 0, FQ = 0, RQ(pQ[2]);
        return TQ = sQ, zQ = FQ, vQ(sQ, FQ)
      } finally {
        SQ.HGmr(TQ, zQ, 1)
      }
    }

    function gQ() {
      let QQ, WQ;
      try {
        const XQ = SQ.m7p2();
        return QQ = XQ[0], WQ = XQ[1], vQ(XQ[0], XQ[1])
      } finally {
        SQ.HGmr(QQ, WQ, 1)
      }
    }

    function JQ(QQ) {
      let WQ, XQ;
      try {
        const TQ = SQ.bxSV(QQ);
        var wQ = TQ[0],
          qQ = TQ[1];
        if (TQ[3]) throw wQ = 0, qQ = 0, RQ(TQ[2]);
        return WQ = wQ, XQ = qQ, vQ(wQ, qQ)
      } finally {
        SQ.HGmr(WQ, XQ, 1)
      }
    }

    function rQ() {
      return SQ.mFpR() >>> 0
    }

    function IQ() {
      let QQ, WQ;
      try {
        const XQ = SQ.je9U();
        return QQ = XQ[0], WQ = XQ[1], vQ(XQ[0], XQ[1])
      } finally {
        SQ.HGmr(QQ, WQ, 1)
      }
    }

    function jQ(QQ, WQ) {
      let XQ, wQ;
      try {
        const zQ = AQ(QQ, SQ.Ah0U),
          sQ = tQ,
          FQ = cQ(WQ, SQ.Ah0U),
          PQ = tQ,
          gQ = SQ.jxQa(zQ, sQ, FQ, PQ);
        var qQ = gQ[0],
          TQ = gQ[1];
        if (gQ[3]) throw qQ = 0, TQ = 0, RQ(gQ[2]);
        return XQ = qQ, wQ = TQ, vQ(qQ, TQ)
      } finally {
        SQ.HGmr(XQ, wQ, 1)
      }
    }

    function BQ(QQ) {
      let WQ, XQ;
      try {
        const TQ = SQ.kMgA(DQ(QQ));
        var wQ = TQ[0],
          qQ = TQ[1];
        if (TQ[3]) throw wQ = 0, qQ = 0, RQ(TQ[2]);
        return WQ = wQ, XQ = qQ, vQ(wQ, qQ)
      } finally {
        SQ.HGmr(WQ, XQ, 1)
      }
    }

    function yQ() {
      return {
        __proto__: null,
        NHNS: {
          __proto__: null,
          DZws: function(QQ, WQ) {
            return DQ(Error(vQ(QQ, WQ)))
          },
          L2mx: function(QQ) {
            return null === lQ(QQ)
          },
          Yx3S: function(QQ) {
            return "string" === typeof lQ(QQ)
          },
          rYtE: function(QQ, WQ) {
            const XQ = lQ(WQ),
              wQ = "string" === typeof XQ ? XQ : void 0;
            var qQ, TQ = void 0 === (qQ = wQ) || null === qQ ? 0 : function(QQ, WQ, XQ) {
                if (void 0 === XQ) {
                  const XQ = LQ.encode(QQ),
                    wQ = WQ(XQ.length, 1) >>> 0;
                  return aQ().subarray(wQ, wQ + XQ.length).set(XQ), tQ = XQ.length, wQ
                }
                let wQ = QQ.length,
                  qQ = WQ(wQ, 1) >>> 0;
                const TQ = aQ();
                let zQ = 0;
                for (; zQ < wQ; zQ++) {
                  const WQ = QQ.charCodeAt(zQ);
                  if (WQ > 127) break;
                  TQ[qQ + zQ] = WQ
                }
                if (zQ !== wQ) {
                  0 !== zQ && (QQ = QQ.slice(zQ)), qQ = XQ(qQ, wQ, wQ = zQ + 3 * QQ.length, 1) >>> 0;
                  const WQ = aQ().subarray(qQ + zQ, qQ + wQ);
                  zQ += LQ.encodeInto(QQ, WQ).written, qQ = XQ(qQ, wQ, zQ, 1) >>> 0
                }
                return tQ = zQ, qQ
              }(wQ, SQ.Ah0U, SQ.lHu2),
              zQ = tQ;
            bQ().setInt32(QQ + 4, zQ, !0), bQ().setInt32(QQ + 0, TQ, !0)
          },
          KbJ2: function(QQ, WQ) {
            throw new Error(vQ(QQ, WQ))
          },
          Jv1P: function(QQ, WQ) {
            return lQ(QQ).charCodeAt(WQ >>> 0)
          },
          WQdd: function(QQ, WQ) {
            console.error(vQ(QQ, WQ))
          },
          qUnp: function(QQ) {
            return lQ(QQ).length
          },
          eCEp: function(QQ, WQ) {
            return DQ(vQ(QQ, WQ))
          },
          CtPR: function(QQ) {
            RQ(QQ)
          }
        }
      }
    }
    Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
    const VQ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((QQ => SQ.FqN5(QQ, 1)));

    function DQ(QQ) {
      iQ === hQ.length && hQ.push(hQ.length + 1);
      const WQ = iQ;
      return iQ = hQ[WQ], hQ[WQ] = QQ, WQ
    }

    function pQ(QQ, WQ) {
      QQ >>>= 0;
      const XQ = bQ(),
        wQ = [];
      for (let qQ = QQ; qQ < QQ + 4 * WQ; qQ += 4) wQ.push(RQ(XQ.getUint32(qQ, !0)));
      return wQ
    }

    function GQ(QQ, WQ) {
      return QQ >>>= 0, aQ().subarray(QQ / 1, QQ / 1 + WQ)
    }
    let UQ = null;

    function bQ() {
      return null !== UQ && UQ.buffer === SQ.memory.buffer || (UQ = new DataView(SQ.memory.buffer)), UQ
    }

    function vQ(QQ, WQ) {
      return function(QQ, WQ) {
        uQ += WQ, uQ >= CQ && (EQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), EQ.decode(), uQ = WQ);
        return EQ.decode(aQ().subarray(QQ, QQ + WQ))
      }(QQ >>> 0, WQ)
    }
    let dQ = null;
    let HQ = null;

    function aQ() {
      return null !== HQ && 0 !== HQ.byteLength || (HQ = new Uint8Array(SQ.memory.buffer)), HQ
    }

    function lQ(QQ) {
      return hQ[QQ]
    }
    let hQ = new Array(1024).fill(void 0);
    hQ.push(void 0, null, !0, !1);
    let iQ = hQ.length;

    function cQ(QQ, WQ) {
      const XQ = WQ(4 * QQ.length, 4) >>> 0;
      return (null !== dQ && 0 !== dQ.byteLength || (dQ = new Uint32Array(SQ.memory.buffer)), dQ).set(QQ, XQ / 4), tQ = QQ.length, XQ
    }

    function AQ(QQ, WQ) {
      const XQ = WQ(4 * QQ.length, 4) >>> 0,
        wQ = bQ();
      for (let qQ = 0; qQ < QQ.length; qQ++) wQ.setUint32(XQ + 4 * qQ, DQ(QQ[qQ]), !0);
      return tQ = QQ.length, XQ
    }

    function RQ(QQ) {
      const WQ = lQ(QQ);
      return function(QQ) {
        QQ < 1028 || (hQ[QQ] = iQ, iQ = QQ)
      }(QQ), WQ
    }
    let EQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    EQ.decode();
    const CQ = 2146435072;
    let uQ = 0;
    const LQ = new TextEncoder;
    "encodeInto" in LQ || (LQ.encodeInto = function(QQ, WQ) {
      const XQ = LQ.encode(QQ);
      return WQ.set(XQ), {
        read: QQ.length,
        written: XQ.length
      }
    });
    let kQ, fQ, SQ, tQ = 0;

    function oQ(QQ, WQ) {
      return fQ = QQ, SQ = QQ.exports, kQ = WQ, UQ = null, dQ = null, HQ = null, SQ.iwBW(), SQ
    }

    function eQ(QQ) {
      if (void 0 !== SQ) return SQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WQ = yQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return oQ(new WebAssembly.Instance(QQ, WQ), QQ)
    }
    async function nQ(QQ) {
      if (void 0 !== SQ) return SQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WQ = yQ();
      ("string" === typeof QQ || "function" === typeof Request && QQ instanceof Request || "function" === typeof URL && QQ instanceof URL) && (QQ = fetch(QQ));
      const {
        instance: XQ,
        module: wQ
      } = await async function(QQ, WQ) {
        if ("function" === typeof Response && QQ instanceof Response) {
          if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(QQ, WQ)
          } catch (XQ) {
            if (! function(QQ) {
                switch (QQ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(QQ.type) || "application/wasm" === QQ.headers.get("Content-Type")) throw XQ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", XQ)
          }
          const wQ = await QQ.arrayBuffer();
          return await WebAssembly.instantiate(wQ, WQ)
        } {
          const XQ = await WebAssembly.instantiate(QQ, WQ);
          return XQ instanceof WebAssembly.Instance ? {
            instance: XQ,
            module: QQ
          } : XQ
        }
      }(await QQ, WQ);
      return oQ(XQ, wQ)
    }
    var xQ = XQ(3110),
      YQ = XQ(6987);
    class NQ extends Error {
      stage;
      constructor(QQ, WQ) {
        super((0, xQ.E)(QQ, WQ), {
          cause: WQ
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = QQ
      }
    }
    let ZQ = null,
      OQ = null;

    function KQ() {
      return ZQ ? Promise.resolve(ZQ) : (OQ || (OQ = async function() {
        let QQ;
        try {
          QQ = await (0, xQ.H)(new XQ.U(XQ(6994)), (0, YQ.b)("bloxd_wasm_shader_pack"))
        } catch (WQ) {
          throw new NQ((0, xQ.L)(WQ), WQ)
        }
        try {
          await nQ({
            module_or_path: QQ
          })
        } catch (WQ) {
          throw new NQ("instantiate", WQ)
        }
        return ZQ = wQ, ZQ
      }(), OQ.then(void 0, (() => {
        OQ = null
      }))), OQ)
    }
    var mQ = XQ(7007);

    function MQ(QQ) {
      let [WQ, XQ, wQ, qQ] = QQ;
      const TQ = {
        file: WQ,
        line: XQ,
        message: wQ
      };
      return qQ && (TQ.variants = qQ.map(mQ.n)), TQ
    }

    function QW(QQ) {
      return JSON.parse(QQ).map(MQ)
    }

    function WW(QQ, WQ) {
      if (!Number.isInteger(QQ) || QQ < 0 || QQ > 4294967295) throw new Error(`${WQ} ${QQ} is not a whole number from 0 to 4294967295`);
      return QQ
    }

    function XW(QQ) {
      return [QQ.named.map((QQ => QQ.name)), Uint32Array.from(QQ.named, (QQ => WW(QQ.id, "Texture ID")))]
    }
    const wW = new WeakMap;
    const qW = new WeakMap,
      TW = new WeakSet;

    function zW(QQ, WQ) {
      if (TW.has(QQ)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return WQ()
      } catch (XQ) {
        throw XQ instanceof WebAssembly.RuntimeError && TW.add(QQ), XQ
      }
    }

    function sW(QQ) {
      let WQ = qW.get(QQ);
      if (!WQ) {
        let XQ, wQ;
        WQ = {
          JQQ: (WQ, XQ) => zW(QQ, (() => function(QQ, WQ, XQ) {
            const wQ = QQ.JQQ(WQ.map((QQ => QQ.path)), WQ.map((QQ => QQ.source)), ...XW(XQ), XQ.aliases.map((QQ => QQ.name)), XQ.aliases.map((QQ => QQ.texture)), XQ.aliases.map((QQ => QQ.kind)));
            let qQ = !1;
            try {
              const QQ = wQ.validationModuleCodes,
                WQ = Array.from(wQ.validationModuleKeys, ((WQ, XQ) => ({
                  key: (0, mQ.n)(WQ),
                  code: QQ[XQ]
                }))),
                XQ = {
                  errors: QW(wQ.EqQ),
                  offInStrict: QW(wQ.uqQ),
                  variants: (0, mQ.i)(wQ),
                  validationModules: WQ,
                  features: wQ.features
                };
              return WQ.forEach(((QQ, WQ) => {
                wW.set(QQ, {
                  pack: wQ,
                  index: WQ
                })
              })), qQ = WQ.length > 0, XQ
            } finally {
              qQ || wQ.free()
            }
          }(QQ, WQ, XQ))),
          mapValidationMessage: (WQ, XQ) => {
            const wQ = wW.get(WQ);
            if (!wQ) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return MQ(JSON.parse(zW(QQ, (() => wQ.pack.mapValidationMessage(wQ.index, XQ.lineNum, XQ.linePos, XQ.message, XQ.type)))))
          },
          gwQ: WQ => zW(QQ, (() => function(QQ, WQ) {
            const XQ = new Int32Array(WQ.length),
              wQ = [];
            return WQ.forEach(((QQ, WQ) => {
              XQ[WQ] = QQ.variants ? QQ.variants.length : -1;
              for (const XQ of QQ.variants ?? []) wQ.push((0, mQ.k)(XQ))
            })), QW(QQ.gwQ(WQ.map((QQ => QQ.file)), Uint32Array.from(WQ, (QQ => WW(QQ.line, "Diagnostic line"))), WQ.map((QQ => QQ.message)), XQ, Uint8Array.from(wQ)))
          }(QQ, WQ))),
          WE: WQ => zW(QQ, (() => QQ.WE(...XW(WQ)))),
          get SHADER_PACK_HEADER_VERSION() {
            return XQ ??= zW(QQ, (() => QQ.cqQ())), XQ
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return wQ ??= zW(QQ, (() => {
              const WQ = QQ.lqQ();
              return QQ.aqQ().map(((QQ, XQ) => ({
                path: QQ,
                source: WQ[XQ]
              })))
            })), wQ
          },
          RqQ: WQ => zW(QQ, (() => QQ.RqQ(WQ))),
          resolveHeader: WQ => zW(QQ, (() => QQ.iqQ((0, mQ.k)(WQ)))),
          hqQ: () => zW(QQ, (() => QQ.hqQ()))
        }, qW.set(QQ, WQ)
      }
      return WQ
    }
    var FW = XQ(3497),
      PW = XQ(7002);
    const gW = "bloxdShaderPackWasmFailureReported";
    let JW = null;

    function rW() {
      return JW ??= async function() {
        if ("undefined" === typeof WebAssembly) return IW("unsupported", "This browser has no WebAssembly"), null;
        const QQ = (0, PW.loadShaderPackTextures)().then((() => !0), (QQ => (console.error("Could not load the shader pack textures, so shader packs can't run", QQ), !1)));
        try {
          const WQ = await async function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KQ;
            return sW(await QQ())
          }();
          return await QQ ? WQ : null
        } catch (WQ) {
          const QQ = WQ instanceof Error ? WQ.message : String(WQ);
          return IW(FW.d[WQ instanceof NQ ? WQ.stage : "instantiate"], QQ), null
        }
      }(), JW
    }

    function IW(QQ, WQ) {
      (0, FW.i)(gW, `Shader pack wasm ${QQ}, so shader packs can't run: ${WQ}`, WQ, `shader_pack_${QQ}`)
    }
  },
  6994: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_shader_pack_bg.938ec16b214ada95cae1.wasm"
  },
  6987: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(3110);
    const qQ = {
      bloxd_wasm: () => "dd6e97ff3b2ac0a551c961b09c612a1b6271d0ab071405556ca4b01f3a262e0b",
      bloxd_wasm_client: () => "309a75346eaeb0a0c6deb9ff417655a1f3ee1a732c70d146d55d1c0cf5938364",
      bloxd_wasm_workers: () => "f608ea61c1af12b7c05879fbd8d0c7dde303a5fb75c7292bfa3f906e24d19907",
      bloxd_wasm_models: () => "8aee95f905bbb58656a61d4cb8ab4dca70f9ee4de220b91c74ac1451d8a4d903",
      bloxd_wasm_webgpu: () => "3c90d3c6f2962d9b5dbc4704e4401368dd2e64ffff3b397e17ca0c23f7e81811",
      bloxd_wasm_webgl: () => "86975f768364e7fdc9b4410826b72db14bfcdef06238e83f58fc072aa970e79d",
      bloxd_wasm_webgl1: () => "1a777fd3f8c3daff218cd0b04a37e914343ce24b2285e695360ed70c5f3d7401",
      bloxd_wasm_replay: () => "02dd750a1ef9276da71ab3efedc1f9f3a09a0cd04fd27e9c08a2cfb8afc9f088",
      bloxd_wasm_recorder: () => "7d5897572629ab0f11d0a09f7f26094a57d854f2017607c5867966529d26eb57",
      bloxd_wasm_anim: () => "ebd7588e63ea2f9db7dec89f47c29d3ec897ec93ad35765845ce0571e06ef572",
      bloxd_wasm_textures: () => "34f98c6b670b35fb03e92023855c94bf914433162196e0949956d65fec8cb777",
      bloxd_wasm_shader_pack: () => "ec75c18af246de94ce930f2606184b35eb764513f5853fb54dabe73873305b16"
    };
    var TQ = XQ(5002);

    function zQ(QQ) {
      const WQ = Object.prototype.hasOwnProperty.call(qQ, QQ) ? qQ[QQ]() : void 0;
      if (void 0 !== WQ) return {
        sha256: WQ,
        onMismatch: TQ.v
      };
      throw new wQ.i(`${QQ} has no release digest, so this build refuses it`)
    }
  },
  7007: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => GQ,
      i: () => UQ,
      k: () => DQ,
      n: () => VQ
    });
    var wQ = XQ(7015);
    const qQ = 6,
      TQ = 3,
      zQ = 1,
      sQ = 2,
      FQ = 4,
      PQ = 8,
      gQ = 16,
      JQ = 32,
      rQ = 64,
      IQ = 128,
      jQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function BQ(QQ) {
      if (!QQ) return 0;
      const WQ = jQ.indexOf(QQ);
      if (WQ <= 0) throw new Error(`"${QQ}" is not a shader pack hook function`);
      return WQ
    }

    function yQ(QQ) {
      if (0 === QQ) return null;
      const WQ = jQ[QQ];
      if (void 0 === WQ) throw new Error(`${QQ} is not a shader pack hook function id`);
      return WQ
    }

    function VQ(QQ) {
      const WQ = wQ.d.length;
      return {
        strict: QQ >= WQ,
        program: wQ.d[QQ % WQ]
      }
    }

    function DQ(QQ) {
      return Number(QQ.strict) * wQ.d.length + wQ.d.indexOf(QQ.program)
    }

    function pQ(QQ) {
      return "" === QQ ? [] : QQ.split(" ")
    }

    function GQ(QQ) {
      const WQ = {
        variantFlags: new Uint8Array(qQ),
        hooks: new Uint8Array(qQ * TQ),
        moduleCodes: Array(qQ).fill(""),
        reads: Array(2 * qQ).fill("")
      };
      for (const XQ of QQ) {
        const QQ = DQ(XQ.key),
          wQ = (QQ, WQ) => null === XQ.hooks.surface || XQ.reads.fragment.includes(QQ) ? 0 : WQ;
        WQ.variantFlags[QQ] = (XQ.sceneDepth ? zQ : 0) | (XQ.movesVertices ? sQ : 0) | (XQ.sunShadow ? FQ : 0) | (XQ.airShadow ? PQ : 0) | (XQ.discards ? gQ : 0) | wQ("localPosition", JQ) | wQ("enchantSpeed", rQ) | wQ("enchantTier", IQ), WQ.hooks[QQ * TQ] = BQ(XQ.hooks.vertex), WQ.hooks[QQ * TQ + 1] = BQ(XQ.hooks.surface), WQ.hooks[QQ * TQ + 2] = BQ(XQ.hooks.light), WQ.moduleCodes[QQ] = XQ.moduleCode, WQ.reads[2 * QQ] = XQ.reads.vertex.join(" "), WQ.reads[2 * QQ + 1] = XQ.reads.fragment.join(" ")
      }
      return WQ
    }

    function UQ(QQ) {
      const {
        hooks: WQ,
        moduleCodes: XQ,
        reads: wQ
      } = QQ;
      return Array.from(QQ.variantFlags, ((QQ, qQ) => {
        const JQ = qQ * TQ;
        return {
          key: VQ(qQ),
          hooks: {
            vertex: yQ(WQ[JQ]),
            surface: yQ(WQ[JQ + 1]),
            light: yQ(WQ[JQ + 2])
          },
          moduleCode: XQ[qQ],
          sceneDepth: 0 !== (QQ & zQ),
          sunShadow: 0 !== (QQ & FQ),
          airShadow: 0 !== (QQ & PQ),
          movesVertices: 0 !== (QQ & sQ),
          discards: 0 !== (QQ & gQ),
          reads: {
            vertex: pQ(wQ[2 * qQ]),
            fragment: pQ(wQ[2 * qQ + 1])
          }
        }
      }))
    }
  },
  7015: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      h: () => zQ,
      i: () => sQ,
      m: () => qQ,
      n: () => TQ
    });
    const wQ = ["terrain", "liquid", "model"];

    function qQ() {
      const QQ = [];
      for (const WQ of [!1, !0])
        for (const XQ of wQ) QQ.push({
          strict: WQ,
          program: XQ
        });
      return QQ
    }

    function TQ(QQ) {
      return `${QQ.strict?"strict":"allow"}.${QQ.program}`
    }

    function zQ(QQ) {
      return !QQ.hooks.vertex && !QQ.hooks.surface && !QQ.hooks.light
    }

    function sQ(QQ, WQ) {
      return "off" !== WQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === WQ) && !zQ(QQ))))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);