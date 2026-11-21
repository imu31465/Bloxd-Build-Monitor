export const id = 132;
export const ids = [132];
export const modules = {
  6438: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      loadPageShaderPackCompiler: () => bF
    });
    var LQ = {};
    wQ.r(LQ), wQ.d(LQ, {
      RqQ: () => qQ,
      tQQ: () => oQ,
      default: () => JQ,
      OqQ: () => DQ,
      sqQ: () => kQ,
      initSync: () => hQ,
      wH: () => vQ,
      uLQ: () => mQ,
      rqQ: () => uQ,
      IqQ: () => HQ,
      vN: () => bQ,
      UqQ: () => YQ,
      kN: () => xQ,
      NqQ: () => AQ
    });
    class qQ {
      static __wrap(QQ) {
        const FQ = Object.create(qQ.prototype);
        return FQ.__wbg_ptr = QQ, eQ.register(FQ, FQ.__wbg_ptr, FQ), FQ
      }
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        XQ.Vic3(QQ, 0)
      }
      get errorsJson() {
        let QQ, FQ;
        try {
          const wQ = XQ.VL0J(this.__wbg_ptr);
          return QQ = wQ[0], FQ = wQ[1], SQ(wQ[0], wQ[1])
        } finally {
          XQ.RMhz(QQ, FQ, 1)
        }
      }
      get features() {
        const QQ = XQ.Q9nT(this.__wbg_ptr);
        var FQ = GQ(QQ[0], QQ[1]);
        return XQ.RMhz(QQ[0], 4 * QQ[1], 4), FQ
      }
      get hooks() {
        const QQ = XQ.rLDd(this.__wbg_ptr);
        var FQ = pQ(QQ[0], QQ[1]).slice();
        return XQ.RMhz(QQ[0], 1 * QQ[1], 1), FQ
      }
      mapValidationMessage(QQ, FQ, wQ, LQ, qQ) {
        let oQ, DQ;
        try {
          const mQ = XQ.ggNU(this.__wbg_ptr, QQ, FQ, wQ, MQ(LQ), MQ(qQ));
          var kQ = mQ[0],
            vQ = mQ[1];
          if (mQ[3]) throw kQ = 0, vQ = 0, NQ(mQ[2]);
          return oQ = kQ, DQ = vQ, SQ(kQ, vQ)
        } finally {
          XQ.RMhz(oQ, DQ, 1)
        }
      }
      get moduleCodes() {
        const QQ = XQ.p5cv(this.__wbg_ptr);
        var FQ = GQ(QQ[0], QQ[1]);
        return XQ.RMhz(QQ[0], 4 * QQ[1], 4), FQ
      }
      get offInStrictJson() {
        let QQ, FQ;
        try {
          const wQ = XQ.RggB(this.__wbg_ptr);
          return QQ = wQ[0], FQ = wQ[1], SQ(wQ[0], wQ[1])
        } finally {
          XQ.RMhz(QQ, FQ, 1)
        }
      }
      get reads() {
        const QQ = XQ.TtDk(this.__wbg_ptr);
        var FQ = GQ(QQ[0], QQ[1]);
        return XQ.RMhz(QQ[0], 4 * QQ[1], 4), FQ
      }
      get validationModuleCodes() {
        const QQ = XQ.dNiy(this.__wbg_ptr);
        var FQ = GQ(QQ[0], QQ[1]);
        return XQ.RMhz(QQ[0], 4 * QQ[1], 4), FQ
      }
      get validationModuleKeys() {
        const QQ = XQ.nUd3(this.__wbg_ptr);
        var FQ = pQ(QQ[0], QQ[1]).slice();
        return XQ.RMhz(QQ[0], 1 * QQ[1], 1), FQ
      }
      get variantFlags() {
        const QQ = XQ.UZ7I(this.__wbg_ptr);
        var FQ = pQ(QQ[0], QQ[1]).slice();
        return XQ.RMhz(QQ[0], 1 * QQ[1], 1), FQ
      }
    }

    function oQ(QQ, FQ, wQ, LQ, oQ, DQ, kQ) {
      const vQ = UQ(QQ, XQ.OR0q),
        mQ = fQ,
        uQ = UQ(FQ, XQ.OR0q),
        HQ = fQ,
        bQ = UQ(wQ, XQ.OR0q),
        YQ = fQ,
        xQ = IQ(LQ, XQ.OR0q),
        AQ = fQ,
        tQ = UQ(oQ, XQ.OR0q),
        eQ = fQ,
        MQ = UQ(DQ, XQ.OR0q),
        GQ = fQ,
        pQ = UQ(kQ, XQ.OR0q),
        cQ = fQ,
        CQ = XQ.C8vF(vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ);
      if (CQ[2]) throw NQ(CQ[1]);
      return qQ.__wrap(CQ[0])
    }

    function DQ() {
      const QQ = XQ.njPp();
      var FQ = GQ(QQ[0], QQ[1]);
      return XQ.RMhz(QQ[0], 4 * QQ[1], 4), FQ
    }

    function kQ() {
      const QQ = XQ.urPZ();
      var FQ = GQ(QQ[0], QQ[1]);
      return XQ.RMhz(QQ[0], 4 * QQ[1], 4), FQ
    }

    function vQ() {
      XQ.n8Va()
    }

    function mQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ, DQ;
      try {
        const mQ = UQ(QQ, XQ.OR0q),
          uQ = fQ,
          HQ = IQ(FQ, XQ.OR0q),
          bQ = fQ,
          YQ = UQ(wQ, XQ.OR0q),
          xQ = fQ,
          AQ = IQ(LQ, XQ.OR0q),
          tQ = fQ,
          eQ = function(QQ, FQ) {
            const wQ = FQ(1 * QQ.length, 1) >>> 0;
            return RQ().set(QQ, wQ / 1), fQ = QQ.length, wQ
          }(qQ, XQ.OR0q),
          MQ = fQ,
          GQ = XQ.YbmF(mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ);
        var kQ = GQ[0],
          vQ = GQ[1];
        if (GQ[3]) throw kQ = 0, vQ = 0, NQ(GQ[2]);
        return oQ = kQ, DQ = vQ, SQ(kQ, vQ)
      } finally {
        XQ.RMhz(oQ, DQ, 1)
      }
    }

    function uQ() {
      let QQ, FQ;
      try {
        const wQ = XQ.pTce();
        return QQ = wQ[0], FQ = wQ[1], SQ(wQ[0], wQ[1])
      } finally {
        XQ.RMhz(QQ, FQ, 1)
      }
    }

    function HQ(QQ) {
      let FQ, wQ;
      try {
        const oQ = XQ.gWJe(QQ);
        var LQ = oQ[0],
          qQ = oQ[1];
        if (oQ[3]) throw LQ = 0, qQ = 0, NQ(oQ[2]);
        return FQ = LQ, wQ = qQ, SQ(LQ, qQ)
      } finally {
        XQ.RMhz(FQ, wQ, 1)
      }
    }

    function bQ() {
      return XQ.PsFT() >>> 0
    }

    function YQ() {
      let QQ, FQ;
      try {
        const wQ = XQ.gzXe();
        return QQ = wQ[0], FQ = wQ[1], SQ(wQ[0], wQ[1])
      } finally {
        XQ.RMhz(QQ, FQ, 1)
      }
    }

    function xQ(QQ, FQ) {
      let wQ, LQ;
      try {
        const DQ = UQ(QQ, XQ.OR0q),
          kQ = fQ,
          vQ = IQ(FQ, XQ.OR0q),
          mQ = fQ,
          uQ = XQ.WlK4(DQ, kQ, vQ, mQ);
        var qQ = uQ[0],
          oQ = uQ[1];
        if (uQ[3]) throw qQ = 0, oQ = 0, NQ(uQ[2]);
        return wQ = qQ, LQ = oQ, SQ(qQ, oQ)
      } finally {
        XQ.RMhz(wQ, LQ, 1)
      }
    }

    function AQ(QQ) {
      let FQ, wQ;
      try {
        const oQ = XQ.SBBP(MQ(QQ));
        var LQ = oQ[0],
          qQ = oQ[1];
        if (oQ[3]) throw LQ = 0, qQ = 0, NQ(oQ[2]);
        return FQ = LQ, wQ = qQ, SQ(LQ, qQ)
      } finally {
        XQ.RMhz(FQ, wQ, 1)
      }
    }

    function tQ() {
      return {
        __proto__: null,
        IlkP: {
          __proto__: null,
          V2Ln: function(QQ, FQ) {
            return MQ(Error(SQ(QQ, FQ)))
          },
          CzgM: function(QQ) {
            return null === OQ(QQ)
          },
          h9k8: function(QQ) {
            return "string" === typeof OQ(QQ)
          },
          hidU: function(QQ, FQ) {
            const wQ = OQ(FQ),
              LQ = "string" === typeof wQ ? wQ : void 0;
            var qQ, oQ = void 0 === (qQ = LQ) || null === qQ ? 0 : function(QQ, FQ, wQ) {
                if (void 0 === wQ) {
                  const wQ = lQ.encode(QQ),
                    LQ = FQ(wQ.length, 1) >>> 0;
                  return RQ().subarray(LQ, LQ + wQ.length).set(wQ), fQ = wQ.length, LQ
                }
                let LQ = QQ.length,
                  qQ = FQ(LQ, 1) >>> 0;
                const oQ = RQ();
                let DQ = 0;
                for (; DQ < LQ; DQ++) {
                  const FQ = QQ.charCodeAt(DQ);
                  if (FQ > 127) break;
                  oQ[qQ + DQ] = FQ
                }
                if (DQ !== LQ) {
                  0 !== DQ && (QQ = QQ.slice(DQ)), qQ = wQ(qQ, LQ, LQ = DQ + 3 * QQ.length, 1) >>> 0;
                  const FQ = RQ().subarray(qQ + DQ, qQ + LQ);
                  DQ += lQ.encodeInto(QQ, FQ).written, qQ = wQ(qQ, LQ, DQ, 1) >>> 0
                }
                return fQ = DQ, qQ
              }(LQ, XQ.OR0q, XQ.uagC),
              DQ = fQ;
            CQ().setInt32(QQ + 4, DQ, !0), CQ().setInt32(QQ + 0, oQ, !0)
          },
          YD60: function(QQ, FQ) {
            throw new Error(SQ(QQ, FQ))
          },
          COza: function(QQ, FQ) {
            return OQ(QQ).charCodeAt(FQ >>> 0)
          },
          pdZl: function(QQ, FQ) {
            console.error(SQ(QQ, FQ))
          },
          VZuK: function(QQ) {
            return OQ(QQ).length
          },
          ptXh: function(QQ, FQ) {
            return MQ(SQ(QQ, FQ))
          },
          MEWy: function(QQ) {
            NQ(QQ)
          }
        }
      }
    }
    Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
    const eQ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((QQ => XQ.Vic3(QQ, 1)));

    function MQ(QQ) {
      rQ === sQ.length && sQ.push(sQ.length + 1);
      const FQ = rQ;
      return rQ = sQ[FQ], sQ[FQ] = QQ, FQ
    }

    function GQ(QQ, FQ) {
      QQ >>>= 0;
      const wQ = CQ(),
        LQ = [];
      for (let qQ = QQ; qQ < QQ + 4 * FQ; qQ += 4) LQ.push(NQ(wQ.getUint32(qQ, !0)));
      return LQ
    }

    function pQ(QQ, FQ) {
      return QQ >>>= 0, RQ().subarray(QQ / 1, QQ / 1 + FQ)
    }
    let cQ = null;

    function CQ() {
      return (null === cQ || !0 === cQ.buffer.detached || void 0 === cQ.buffer.detached && cQ.buffer !== XQ.memory.buffer) && (cQ = new DataView(XQ.memory.buffer)), cQ
    }

    function SQ(QQ, FQ) {
      return function(QQ, FQ) {
        zQ += FQ, zQ >= KQ && (TQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), TQ.decode(), zQ = FQ);
        return TQ.decode(RQ().subarray(QQ, QQ + FQ))
      }(QQ >>> 0, FQ)
    }
    let iQ = null;
    let WQ = null;

    function RQ() {
      return null !== WQ && 0 !== WQ.byteLength || (WQ = new Uint8Array(XQ.memory.buffer)), WQ
    }

    function OQ(QQ) {
      return sQ[QQ]
    }
    let sQ = new Array(1024).fill(void 0);
    sQ.push(void 0, null, !0, !1);
    let rQ = sQ.length;

    function IQ(QQ, FQ) {
      const wQ = FQ(4 * QQ.length, 4) >>> 0;
      return (null !== iQ && 0 !== iQ.byteLength || (iQ = new Uint32Array(XQ.memory.buffer)), iQ).set(QQ, wQ / 4), fQ = QQ.length, wQ
    }

    function UQ(QQ, FQ) {
      const wQ = FQ(4 * QQ.length, 4) >>> 0,
        LQ = CQ();
      for (let qQ = 0; qQ < QQ.length; qQ++) LQ.setUint32(wQ + 4 * qQ, MQ(QQ[qQ]), !0);
      return fQ = QQ.length, wQ
    }

    function NQ(QQ) {
      const FQ = OQ(QQ);
      return function(QQ) {
        QQ < 1028 || (sQ[QQ] = rQ, rQ = QQ)
      }(QQ), FQ
    }
    let TQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    TQ.decode();
    const KQ = 2146435072;
    let zQ = 0;
    const lQ = new TextEncoder;
    "encodeInto" in lQ || (lQ.encodeInto = function(QQ, FQ) {
      const wQ = lQ.encode(QQ);
      return FQ.set(wQ), {
        read: QQ.length,
        written: wQ.length
      }
    });
    let jQ, aQ, XQ, fQ = 0;

    function VQ(QQ, FQ) {
      return aQ = QQ, XQ = QQ.exports, jQ = FQ, cQ = null, iQ = null, WQ = null, XQ.F2Nn(), XQ
    }

    function hQ(QQ) {
      if (void 0 !== XQ) return XQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const FQ = tQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return VQ(new WebAssembly.Instance(QQ, FQ), QQ)
    }
    async function JQ(QQ) {
      if (void 0 !== XQ) return XQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const FQ = tQ();
      ("string" === typeof QQ || "function" === typeof Request && QQ instanceof Request || "function" === typeof URL && QQ instanceof URL) && (QQ = fetch(QQ));
      const {
        instance: wQ,
        module: LQ
      } = await async function(QQ, FQ) {
        if ("function" === typeof Response && QQ instanceof Response) {
          if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(QQ, FQ)
          } catch (wQ) {
            if (! function(QQ) {
                switch (QQ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(QQ.type) || "application/wasm" === QQ.headers.get("Content-Type")) throw wQ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wQ)
          }
          const LQ = await QQ.arrayBuffer();
          return await WebAssembly.instantiate(LQ, FQ)
        } {
          const wQ = await WebAssembly.instantiate(QQ, FQ);
          return wQ instanceof WebAssembly.Instance ? {
            instance: wQ,
            module: QQ
          } : wQ
        }
      }(await QQ, FQ);
      return VQ(wQ, LQ)
    }
    var EQ = wQ(2811),
      nQ = wQ(6446);
    class gQ extends Error {
      stage;
      constructor(QQ, FQ) {
        super((0, EQ.N)(QQ, FQ), {
          cause: FQ
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = QQ
      }
    }
    let PQ = null,
      ZQ = null;

    function yQ() {
      return PQ ? Promise.resolve(PQ) : (ZQ || (ZQ = async function() {
        let QQ;
        try {
          QQ = await (0, EQ.R)(new wQ.U(wQ(6453)), (0, nQ.e)("bloxd_wasm_shader_pack"))
        } catch (FQ) {
          throw new gQ((0, EQ.X)(FQ), FQ)
        }
        try {
          await JQ({
            module_or_path: QQ
          })
        } catch (FQ) {
          throw new gQ("instantiate", FQ)
        }
        return PQ = LQ, PQ
      }(), ZQ.then(void 0, (() => {
        ZQ = null
      }))), ZQ)
    }
    var BQ = wQ(6467);

    function dQ(QQ) {
      let [FQ, wQ, LQ, qQ] = QQ;
      const oQ = {
        file: FQ,
        line: wQ,
        message: LQ
      };
      return qQ && (oQ.variants = qQ.map(BQ.l)), oQ
    }

    function QF(QQ) {
      return JSON.parse(QQ).map(dQ)
    }

    function FF(QQ, FQ) {
      if (!Number.isInteger(QQ) || QQ < 0 || QQ > 4294967295) throw new Error(`${FQ} ${QQ} is not a whole number from 0 to 4294967295`);
      return QQ
    }

    function wF(QQ) {
      return [QQ.named.map((QQ => QQ.name)), Uint32Array.from(QQ.named, (QQ => FF(QQ.id, "Texture ID")))]
    }
    const LF = new WeakMap;
    const qF = new WeakMap,
      oF = new WeakSet;

    function DF(QQ, FQ) {
      if (oF.has(QQ)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return FQ()
      } catch (wQ) {
        throw wQ instanceof WebAssembly.RuntimeError && oF.add(QQ), wQ
      }
    }

    function kF(QQ) {
      let FQ = qF.get(QQ);
      if (!FQ) {
        let wQ, LQ;
        FQ = {
          tQQ: (FQ, wQ) => DF(QQ, (() => function(QQ, FQ, wQ) {
            const LQ = QQ.tQQ(FQ.map((QQ => QQ.path)), FQ.map((QQ => QQ.source)), ...wF(wQ), wQ.aliases.map((QQ => QQ.name)), wQ.aliases.map((QQ => QQ.texture)), wQ.aliases.map((QQ => QQ.kind)));
            let qQ = !1;
            try {
              const QQ = LQ.validationModuleCodes,
                FQ = Array.from(LQ.validationModuleKeys, ((FQ, wQ) => ({
                  key: (0, BQ.l)(FQ),
                  code: QQ[wQ]
                }))),
                wQ = {
                  errors: QF(LQ.errorsJson),
                  offInStrict: QF(LQ.offInStrictJson),
                  variants: (0, BQ.g)(LQ),
                  validationModules: FQ,
                  features: LQ.features
                };
              return FQ.forEach(((QQ, FQ) => {
                LF.set(QQ, {
                  pack: LQ,
                  index: FQ
                })
              })), qQ = FQ.length > 0, wQ
            } finally {
              qQ || LQ.free()
            }
          }(QQ, FQ, wQ))),
          mapValidationMessage: (FQ, wQ) => {
            const LQ = LF.get(FQ);
            if (!LQ) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return dQ(JSON.parse(DF(QQ, (() => LQ.pack.mapValidationMessage(LQ.index, wQ.lineNum, wQ.linePos, wQ.message, wQ.type)))))
          },
          uLQ: FQ => DF(QQ, (() => function(QQ, FQ) {
            const wQ = new Int32Array(FQ.length),
              LQ = [];
            return FQ.forEach(((QQ, FQ) => {
              wQ[FQ] = QQ.variants ? QQ.variants.length : -1;
              for (const wQ of QQ.variants ?? []) LQ.push((0, BQ.k)(wQ))
            })), QF(QQ.uLQ(FQ.map((QQ => QQ.file)), Uint32Array.from(FQ, (QQ => FF(QQ.line, "Diagnostic line"))), FQ.map((QQ => QQ.message)), wQ, Uint8Array.from(LQ)))
          }(QQ, FQ))),
          kN: FQ => DF(QQ, (() => QQ.kN(...wF(FQ)))),
          get SHADER_PACK_HEADER_VERSION() {
            return wQ ??= DF(QQ, (() => QQ.UqQ())), wQ
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return LQ ??= DF(QQ, (() => {
              const FQ = QQ.sqQ();
              return QQ.OqQ().map(((QQ, wQ) => ({
                path: QQ,
                source: FQ[wQ]
              })))
            })), LQ
          },
          NqQ: FQ => DF(QQ, (() => QQ.NqQ(FQ))),
          resolveHeader: FQ => DF(QQ, (() => QQ.IqQ((0, BQ.k)(FQ)))),
          rqQ: () => DF(QQ, (() => QQ.rqQ()))
        }, qF.set(QQ, FQ)
      }
      return FQ
    }
    var vF = wQ(3110),
      mF = wQ(6460);
    const uF = "bloxdShaderPackWasmFailureReported";
    let HF = null;

    function bF() {
      return HF ??= async function() {
        if ("undefined" === typeof WebAssembly) return YF("unsupported", "This browser has no WebAssembly"), null;
        const QQ = (0, mF.loadShaderPackTextures)().then((() => !0), (QQ => (console.error("Could not load the shader pack textures, so shader packs can't run", QQ), !1)));
        try {
          const FQ = await async function() {
            let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yQ;
            return kF(await QQ())
          }();
          return await QQ ? FQ : null
        } catch (FQ) {
          const QQ = FQ instanceof Error ? FQ.message : String(FQ);
          return YF(vF.b[FQ instanceof gQ ? FQ.stage : "instantiate"], QQ), null
        }
      }(), HF
    }

    function YF(QQ, FQ) {
      (0, vF.f)(uF, `Shader pack wasm ${QQ}, so shader packs can't run: ${FQ}`, FQ, `shader_pack_${QQ}`)
    }
  },
  6453: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_shader_pack_bg.80d86b93e0b28b1ed3da.wasm"
  },
  6446: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(2811);
    const qQ = {
      bloxd_wasm: () => "1dd71b260cf77c239728051b861ab33f1bc93c07cb4fd28db7884da2815d9fb7",
      bloxd_wasm_client: () => "3cfdd659c2eb8b6808b191f6b866ba4e169bdaee4701af255db5568969af1bb7",
      bloxd_wasm_workers: () => "e767134c25f99ed90bec9c0af92587618ddb83193667d16121760ce713ad3288",
      bloxd_wasm_models: () => "7efbd9cd4bdaa31a2b1cc79e297121e9fc854705c550b2f59e1da981f144f4cb",
      bloxd_wasm_webgpu: () => "5a2823876f9d5f8660104cc25ddeb02c3ddbc283e88525fa31e6d0deaa802210",
      bloxd_wasm_webgl: () => "08bd13fedb12bff9b9605ef44db652dccf2f7dcf60a963258385b5f773a6f220",
      bloxd_wasm_webgl1: () => "d6f63b1aa81b972a9480431e3334c89fc0648b9790fe3b5c8ff72a4945814f45",
      bloxd_wasm_replay: () => "225276b91dfdf588b8a1477982fd12458f6ce65cfbaf6a782c82ab32d22513fb",
      bloxd_wasm_recorder: () => "5fccb956d97b8d65d45cf6afb9a7042d1e4e4bad858c8aa1ec94da37e97ec72f",
      bloxd_wasm_anim: () => "3f5071fcbbd4cd73afc810a4abff7c2f49f86a8638003d25fa9521ff9c12ae28",
      bloxd_wasm_textures: () => "f13f878b8e801e1b7391eae5c539ceb75b7c99a88018bdad896fe7b520427f2f",
      bloxd_wasm_shader_pack: () => "e521fc18804ece0348d56f2c73e39ef69fee01e1ad9f9c53d92bd0fdbf472492"
    };
    var oQ = wQ(4540);

    function DQ(QQ) {
      const FQ = Object.prototype.hasOwnProperty.call(qQ, QQ) ? qQ[QQ]() : void 0;
      if (void 0 !== FQ) return {
        sha256: FQ,
        onMismatch: oQ.o
      };
      throw new LQ.j(`${QQ} has no release digest, so this build refuses it`)
    }
  },
  6467: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => pQ,
      g: () => cQ,
      k: () => MQ,
      l: () => eQ
    });
    var LQ = wQ(6470);
    const qQ = 6,
      oQ = 3,
      DQ = 1,
      kQ = 2,
      vQ = 4,
      mQ = 8,
      uQ = 16,
      HQ = 32,
      bQ = 64,
      YQ = 128,
      xQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function AQ(QQ) {
      if (!QQ) return 0;
      const FQ = xQ.indexOf(QQ);
      if (FQ <= 0) throw new Error(`"${QQ}" is not a shader pack hook function`);
      return FQ
    }

    function tQ(QQ) {
      if (0 === QQ) return null;
      const FQ = xQ[QQ];
      if (void 0 === FQ) throw new Error(`${QQ} is not a shader pack hook function id`);
      return FQ
    }

    function eQ(QQ) {
      const FQ = LQ.d.length;
      return {
        strict: QQ >= FQ,
        program: LQ.d[QQ % FQ]
      }
    }

    function MQ(QQ) {
      return Number(QQ.strict) * LQ.d.length + LQ.d.indexOf(QQ.program)
    }

    function GQ(QQ) {
      return "" === QQ ? [] : QQ.split(" ")
    }

    function pQ(QQ) {
      const FQ = {
        variantFlags: new Uint8Array(qQ),
        hooks: new Uint8Array(qQ * oQ),
        moduleCodes: Array(qQ).fill(""),
        reads: Array(2 * qQ).fill("")
      };
      for (const wQ of QQ) {
        const QQ = MQ(wQ.key),
          LQ = (QQ, FQ) => null === wQ.hooks.surface || wQ.reads.fragment.includes(QQ) ? 0 : FQ;
        FQ.variantFlags[QQ] = (wQ.sceneDepth ? DQ : 0) | (wQ.movesVertices ? kQ : 0) | (wQ.sunShadow ? vQ : 0) | (wQ.airShadow ? mQ : 0) | (wQ.discards ? uQ : 0) | LQ("localPosition", HQ) | LQ("enchantSpeed", bQ) | LQ("enchantTier", YQ), FQ.hooks[QQ * oQ] = AQ(wQ.hooks.vertex), FQ.hooks[QQ * oQ + 1] = AQ(wQ.hooks.surface), FQ.hooks[QQ * oQ + 2] = AQ(wQ.hooks.light), FQ.moduleCodes[QQ] = wQ.moduleCode, FQ.reads[2 * QQ] = wQ.reads.vertex.join(" "), FQ.reads[2 * QQ + 1] = wQ.reads.fragment.join(" ")
      }
      return FQ
    }

    function cQ(QQ) {
      const {
        hooks: FQ,
        moduleCodes: wQ,
        reads: LQ
      } = QQ;
      return Array.from(QQ.variantFlags, ((QQ, qQ) => {
        const HQ = qQ * oQ;
        return {
          key: eQ(qQ),
          hooks: {
            vertex: tQ(FQ[HQ]),
            surface: tQ(FQ[HQ + 1]),
            light: tQ(FQ[HQ + 2])
          },
          moduleCode: wQ[qQ],
          sceneDepth: 0 !== (QQ & DQ),
          sunShadow: 0 !== (QQ & vQ),
          airShadow: 0 !== (QQ & mQ),
          movesVertices: 0 !== (QQ & kQ),
          discards: 0 !== (QQ & uQ),
          reads: {
            vertex: GQ(LQ[2 * qQ]),
            fragment: GQ(LQ[2 * qQ + 1])
          }
        }
      }))
    }
  },
  6470: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      h: () => DQ,
      l: () => kQ,
      m: () => qQ,
      o: () => oQ
    });
    const LQ = ["terrain", "liquid", "model"];

    function qQ() {
      const QQ = [];
      for (const FQ of [!1, !0])
        for (const wQ of LQ) QQ.push({
          strict: FQ,
          program: wQ
        });
      return QQ
    }

    function oQ(QQ) {
      return `${QQ.strict?"strict":"allow"}.${QQ.program}`
    }

    function DQ(QQ) {
      return !QQ.hooks.vertex && !QQ.hooks.surface && !QQ.hooks.light
    }

    function kQ(QQ, FQ) {
      return "off" !== FQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === FQ) && !DQ(QQ))))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);