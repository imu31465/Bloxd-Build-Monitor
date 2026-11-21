export const id = 5;
export const ids = [5];
export const modules = {
  42679: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_anim_bg.eeed96dc31eb415f614d.wasm"
  },
  42675: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BloxdAnimWasmError: () => KQ,
      compileAnimationPackInWasm: () => aQ
    });
    var LQ = {};

    function qQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = MQ(QQ, OQ.bltk),
        kQ = sQ,
        vQ = MQ(FQ, OQ.bltk),
        mQ = sQ,
        uQ = MQ(wQ, OQ.bltk),
        HQ = sQ,
        bQ = MQ(LQ, OQ.bltk),
        xQ = sQ,
        AQ = MQ(qQ, OQ.bltk),
        tQ = sQ;
      var GQ = eQ(oQ) ? 0 : function(QQ, FQ) {
          const wQ = FQ(1 * QQ.length, 1) >>> 0;
          return YQ().set(QQ, wQ / 1), sQ = QQ.length, wQ
        }(oQ, OQ.bltk),
        cQ = sQ;
      const CQ = OQ.dfyD(DQ, kQ, vQ, mQ, uQ, HQ, bQ, xQ, AQ, tQ, GQ, cQ);
      if (CQ[3]) throw pQ(CQ[2]);
      var SQ, iQ, WQ = (SQ = CQ[0], iQ = CQ[1], SQ >>>= 0, YQ().subarray(SQ / 1, SQ / 1 + iQ)).slice();
      return OQ.cZDM(CQ[0], 1 * CQ[1], 1), WQ
    }

    function oQ(QQ, FQ) {
      const wQ = GQ(QQ, OQ.bltk, OQ.CZY1),
        LQ = sQ,
        qQ = OQ.GSSq(wQ, LQ, FQ);
      if (qQ[1]) throw pQ(qQ[0])
    }

    function DQ() {
      OQ.Xjem()
    }

    function kQ() {
      return {
        __proto__: null,
        BT6X: {
          __proto__: null,
          j4gl: function(QQ, FQ) {
            return vQ(Error(HQ(QQ, FQ)))
          },
          lUGo: function(QQ, FQ) {
            const wQ = xQ(FQ),
              LQ = "string" === typeof wQ ? wQ : void 0;
            var qQ = eQ(LQ) ? 0 : GQ(LQ, OQ.bltk, OQ.CZY1),
              oQ = sQ;
            uQ().setInt32(QQ + 4, oQ, !0), uQ().setInt32(QQ + 0, qQ, !0)
          },
          mYJs: function(QQ, FQ) {
            throw new Error(HQ(QQ, FQ))
          },
          L8d0: function(QQ, FQ) {
            console.error(HQ(QQ, FQ))
          },
          PaD4: function(QQ) {
            pQ(QQ)
          }
        }
      }
    }

    function vQ(QQ) {
      tQ === AQ.length && AQ.push(AQ.length + 1);
      const FQ = tQ;
      return tQ = AQ[FQ], AQ[FQ] = QQ, FQ
    }
    wQ.r(LQ), wQ.d(LQ, {
      QkQ: () => qQ,
      FH: () => oQ,
      default: () => UQ,
      initSync: () => IQ,
      wH: () => DQ
    });
    let mQ = null;

    function uQ() {
      return (null === mQ || !0 === mQ.buffer.detached || void 0 === mQ.buffer.detached && mQ.buffer !== OQ.memory.buffer) && (mQ = new DataView(OQ.memory.buffer)), mQ
    }

    function HQ(QQ, FQ) {
      return function(QQ, FQ) {
        SQ += FQ, SQ >= CQ && (cQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), cQ.decode(), SQ = FQ);
        return cQ.decode(YQ().subarray(QQ, QQ + FQ))
      }(QQ >>> 0, FQ)
    }
    let bQ = null;

    function YQ() {
      return null !== bQ && 0 !== bQ.byteLength || (bQ = new Uint8Array(OQ.memory.buffer)), bQ
    }

    function xQ(QQ) {
      return AQ[QQ]
    }
    let AQ = new Array(1024).fill(void 0);
    AQ.push(void 0, null, !0, !1);
    let tQ = AQ.length;

    function eQ(QQ) {
      return void 0 === QQ || null === QQ
    }

    function MQ(QQ, FQ) {
      const wQ = FQ(4 * QQ.length, 4) >>> 0,
        LQ = uQ();
      for (let qQ = 0; qQ < QQ.length; qQ++) LQ.setUint32(wQ + 4 * qQ, vQ(QQ[qQ]), !0);
      return sQ = QQ.length, wQ
    }

    function GQ(QQ, FQ, wQ) {
      if (void 0 === wQ) {
        const wQ = iQ.encode(QQ),
          LQ = FQ(wQ.length, 1) >>> 0;
        return YQ().subarray(LQ, LQ + wQ.length).set(wQ), sQ = wQ.length, LQ
      }
      let LQ = QQ.length,
        qQ = FQ(LQ, 1) >>> 0;
      const oQ = YQ();
      let DQ = 0;
      for (; DQ < LQ; DQ++) {
        const FQ = QQ.charCodeAt(DQ);
        if (FQ > 127) break;
        oQ[qQ + DQ] = FQ
      }
      if (DQ !== LQ) {
        0 !== DQ && (QQ = QQ.slice(DQ)), qQ = wQ(qQ, LQ, LQ = DQ + 3 * QQ.length, 1) >>> 0;
        const FQ = YQ().subarray(qQ + DQ, qQ + LQ);
        DQ += iQ.encodeInto(QQ, FQ).written, qQ = wQ(qQ, LQ, DQ, 1) >>> 0
      }
      return sQ = DQ, qQ
    }

    function pQ(QQ) {
      const FQ = xQ(QQ);
      return function(QQ) {
        QQ < 1028 || (AQ[QQ] = tQ, tQ = QQ)
      }(QQ), FQ
    }
    let cQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    cQ.decode();
    const CQ = 2146435072;
    let SQ = 0;
    const iQ = new TextEncoder;
    "encodeInto" in iQ || (iQ.encodeInto = function(QQ, FQ) {
      const wQ = iQ.encode(QQ);
      return FQ.set(wQ), {
        read: QQ.length,
        written: wQ.length
      }
    });
    let WQ, RQ, OQ, sQ = 0;

    function rQ(QQ, FQ) {
      return RQ = QQ, OQ = QQ.exports, WQ = FQ, mQ = null, bQ = null, OQ.moBB(), OQ
    }

    function IQ(QQ) {
      if (void 0 !== OQ) return OQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const FQ = kQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return rQ(new WebAssembly.Instance(QQ, FQ), QQ)
    }
    async function UQ(QQ) {
      if (void 0 !== OQ) return OQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const FQ = kQ();
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
      return rQ(wQ, LQ)
    }
    var NQ = wQ(2811),
      TQ = wQ(6446);
    class KQ extends Error {
      stage;
      constructor(QQ, FQ) {
        super((0, NQ.N)(QQ, FQ), {
          cause: FQ
        }), this.name = "BloxdAnimWasmError", this.stage = QQ
      }
    }
    let zQ = null,
      lQ = null;

    function jQ() {
      if (lQ) throw lQ
    }
    async function aQ(QQ, FQ, qQ) {
      jQ();
      const oQ = await (zQ ??= (async () => {
        let QQ;
        try {
          QQ = await (0, NQ.R)(new wQ.U(wQ(42679)), (0, TQ.e)("bloxd_wasm_anim"))
        } catch (FQ) {
          throw new KQ((0, NQ.X)(FQ), FQ)
        }
        try {
          await UQ({
            module_or_path: QQ
          })
        } catch (FQ) {
          throw new KQ("instantiate", FQ)
        }
        return LQ
      })(), zQ.catch((() => {
        zQ = null
      })), zQ);
      jQ();
      try {
        return oQ.QkQ(Object.entries(QQ).flat(), [...FQ.mobTypes], [...FQ.vehicleTypes], [...FQ.mobAiStates], [...FQ.playerPoses], "builtIns" in qQ ? qQ.builtIns : void 0)
      } catch (DQ) {
        const QQ = new KQ("call", DQ);
        throw DQ instanceof WebAssembly.RuntimeError && (lQ = QQ), QQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);