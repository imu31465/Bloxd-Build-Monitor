export const id = 5;
export const ids = [5];
export const modules = {
  42939: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_anim_bg.3f3ecba3f9397299db2a.wasm"
  },
  42932: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BloxdAnimWasmError: () => CQ,
      compileAnimationPackInWasm: () => fQ
    });
    var wQ = {};

    function qQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = DQ(QQ, lQ.IpKS),
        sQ = hQ,
        FQ = DQ(WQ, lQ.IpKS),
        PQ = hQ,
        gQ = DQ(XQ, lQ.IpKS),
        JQ = hQ,
        rQ = DQ(wQ, lQ.IpKS),
        jQ = hQ,
        BQ = DQ(qQ, lQ.IpKS),
        yQ = hQ;
      var pQ = VQ(TQ) ? 0 : function(QQ, WQ) {
          const XQ = WQ(1 * QQ.length, 1) >>> 0;
          return IQ().set(QQ, XQ / 1), hQ = QQ.length, XQ
        }(TQ, lQ.IpKS),
        UQ = hQ;
      const bQ = lQ.MLNA(zQ, sQ, FQ, PQ, gQ, JQ, rQ, jQ, BQ, yQ, pQ, UQ);
      if (bQ[3]) throw GQ(bQ[2]);
      var vQ, dQ, HQ = (vQ = bQ[0], dQ = bQ[1], vQ >>>= 0, IQ().subarray(vQ / 1, vQ / 1 + dQ)).slice();
      return lQ.oiMR(bQ[0], 1 * bQ[1], 1), HQ
    }

    function TQ(QQ, WQ) {
      const XQ = pQ(QQ, lQ.IpKS, lQ.SFjA),
        wQ = hQ,
        qQ = lQ.QR60(XQ, wQ, WQ);
      if (qQ[1]) throw GQ(qQ[0])
    }

    function zQ() {
      lQ.WfDt()
    }

    function sQ() {
      return {
        __proto__: null,
        te92: {
          __proto__: null,
          wqTb: function(QQ, WQ) {
            return FQ(Error(JQ(QQ, WQ)))
          },
          aShM: function(QQ, WQ) {
            const XQ = jQ(WQ),
              wQ = "string" === typeof XQ ? XQ : void 0;
            var qQ = VQ(wQ) ? 0 : pQ(wQ, lQ.IpKS, lQ.SFjA),
              TQ = hQ;
            gQ().setInt32(QQ + 4, TQ, !0), gQ().setInt32(QQ + 0, qQ, !0)
          },
          QFwo: function(QQ, WQ) {
            throw new Error(JQ(QQ, WQ))
          },
          MNGJ: function(QQ, WQ) {
            console.error(JQ(QQ, WQ))
          },
          gpXD: function(QQ) {
            GQ(QQ)
          }
        }
      }
    }

    function FQ(QQ) {
      yQ === BQ.length && BQ.push(BQ.length + 1);
      const WQ = yQ;
      return yQ = BQ[WQ], BQ[WQ] = QQ, WQ
    }
    XQ.r(wQ), XQ.d(wQ, {
      zsQ: () => qQ,
      Mg: () => TQ,
      default: () => AQ,
      initSync: () => cQ,
      QJ: () => zQ
    });
    let PQ = null;

    function gQ() {
      return null !== PQ && PQ.buffer === lQ.memory.buffer || (PQ = new DataView(lQ.memory.buffer)), PQ
    }

    function JQ(QQ, WQ) {
      return function(QQ, WQ) {
        vQ += WQ, vQ >= bQ && (UQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), UQ.decode(), vQ = WQ);
        return UQ.decode(IQ().subarray(QQ, QQ + WQ))
      }(QQ >>> 0, WQ)
    }
    let rQ = null;

    function IQ() {
      return null !== rQ && 0 !== rQ.byteLength || (rQ = new Uint8Array(lQ.memory.buffer)), rQ
    }

    function jQ(QQ) {
      return BQ[QQ]
    }
    let BQ = new Array(1024).fill(void 0);
    BQ.push(void 0, null, !0, !1);
    let yQ = BQ.length;

    function VQ(QQ) {
      return void 0 === QQ || null === QQ
    }

    function DQ(QQ, WQ) {
      const XQ = WQ(4 * QQ.length, 4) >>> 0,
        wQ = gQ();
      for (let qQ = 0; qQ < QQ.length; qQ++) wQ.setUint32(XQ + 4 * qQ, FQ(QQ[qQ]), !0);
      return hQ = QQ.length, XQ
    }

    function pQ(QQ, WQ, XQ) {
      if (void 0 === XQ) {
        const XQ = dQ.encode(QQ),
          wQ = WQ(XQ.length, 1) >>> 0;
        return IQ().subarray(wQ, wQ + XQ.length).set(XQ), hQ = XQ.length, wQ
      }
      let wQ = QQ.length,
        qQ = WQ(wQ, 1) >>> 0;
      const TQ = IQ();
      let zQ = 0;
      for (; zQ < wQ; zQ++) {
        const WQ = QQ.charCodeAt(zQ);
        if (WQ > 127) break;
        TQ[qQ + zQ] = WQ
      }
      if (zQ !== wQ) {
        0 !== zQ && (QQ = QQ.slice(zQ)), qQ = XQ(qQ, wQ, wQ = zQ + 3 * QQ.length, 1) >>> 0;
        const WQ = IQ().subarray(qQ + zQ, qQ + wQ);
        zQ += dQ.encodeInto(QQ, WQ).written, qQ = XQ(qQ, wQ, zQ, 1) >>> 0
      }
      return hQ = zQ, qQ
    }

    function GQ(QQ) {
      const WQ = jQ(QQ);
      return function(QQ) {
        QQ < 1028 || (BQ[QQ] = yQ, yQ = QQ)
      }(QQ), WQ
    }
    let UQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    UQ.decode();
    const bQ = 2146435072;
    let vQ = 0;
    const dQ = new TextEncoder;
    "encodeInto" in dQ || (dQ.encodeInto = function(QQ, WQ) {
      const XQ = dQ.encode(QQ);
      return WQ.set(XQ), {
        read: QQ.length,
        written: XQ.length
      }
    });
    let HQ, aQ, lQ, hQ = 0;

    function iQ(QQ, WQ) {
      return aQ = QQ, lQ = QQ.exports, HQ = WQ, PQ = null, rQ = null, lQ.Kjl7(), lQ
    }

    function cQ(QQ) {
      if (void 0 !== lQ) return lQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WQ = sQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return iQ(new WebAssembly.Instance(QQ, WQ), QQ)
    }
    async function AQ(QQ) {
      if (void 0 !== lQ) return lQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WQ = sQ();
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
      return iQ(XQ, wQ)
    }
    var RQ = XQ(3110),
      EQ = XQ(6987);
    class CQ extends Error {
      stage;
      constructor(QQ, WQ) {
        super((0, RQ.E)(QQ, WQ), {
          cause: WQ
        }), this.name = "BloxdAnimWasmError", this.stage = QQ
      }
    }
    let uQ = null,
      LQ = null;

    function kQ() {
      if (LQ) throw LQ
    }
    async function fQ(QQ, WQ, qQ) {
      kQ();
      const TQ = await (uQ ??= (async () => {
        let QQ;
        try {
          QQ = await (0, RQ.H)(new XQ.U(XQ(42939)), (0, EQ.b)("bloxd_wasm_anim"))
        } catch (WQ) {
          throw new CQ((0, RQ.L)(WQ), WQ)
        }
        try {
          await AQ({
            module_or_path: QQ
          })
        } catch (WQ) {
          throw new CQ("instantiate", WQ)
        }
        return wQ
      })(), uQ.catch((() => {
        uQ = null
      })), uQ);
      kQ();
      try {
        return TQ.zsQ(Object.entries(QQ).flat(), [...WQ.mobTypes], [...WQ.vehicleTypes], [...WQ.mobAiStates], [...WQ.playerPoses], "builtIns" in qQ ? qQ.builtIns : void 0)
      } catch (zQ) {
        const QQ = new CQ("call", zQ);
        throw zQ instanceof WebAssembly.RuntimeError && (LQ = QQ), QQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);