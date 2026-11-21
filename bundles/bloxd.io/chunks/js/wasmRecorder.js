export const id = 62;
export const ids = [62];
export const modules = {
  60976: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_recorder_bg.2be24ef9f180b6336dbf.wasm"
  },
  60972: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BloxdRecorderWasmError: () => TQ,
      RECORDER_MODULE_ID: () => NQ,
      loadRecorderModule: () => lQ,
      markRecorderTrapped: () => aQ,
      prefetchRecorderModule: () => jQ,
      recorderMemoryBytes: () => fQ,
      unloadRecorderModule: () => XQ
    });
    var LQ = {};
    wQ.r(LQ), wQ.d(LQ, {
      boQ: () => qQ,
      qkQ: () => rQ,
      FH: () => oQ,
      default: () => sQ,
      initSync: () => OQ,
      wH: () => DQ,
      uoQ: () => kQ,
      woQ: () => vQ
    });
    class qQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        iQ.yxjN(QQ, 0)
      }
      busy() {
        return 0 !== iQ.Df07(this.__wbg_ptr)
      }
      command(QQ, FQ) {
        return 0 !== iQ.jW4u(this.__wbg_ptr, QQ, FQ)
      }
      LoQ(QQ) {
        return iQ.FGEk(this.__wbg_ptr, QQ) >>> 0
      }
      FoQ() {
        iQ.Dw0c(this.__wbg_ptr)
      }
      QoQ() {
        return iQ.SQGU(this.__wbg_ptr) >>> 0
      }
      dqQ() {
        return iQ.KUwW(this.__wbg_ptr)
      }
      koQ() {
        return iQ.sthH(this.__wbg_ptr) >>> 0
      }
      voQ() {
        return iQ.O6x5(this.__wbg_ptr) >>> 0
      }
      feed(QQ) {
        return iQ.p5Uj(this.__wbg_ptr, QQ) >>> 0
      }
      constructor() {
        const QQ = iQ.QQi7();
        return this.__wbg_ptr = QQ, uQ.register(this, this.__wbg_ptr, this), this
      }
      ooQ() {
        return iQ.nu1C(this.__wbg_ptr) >>> 0
      }
      okQ() {
        return iQ.Rway(this.__wbg_ptr) >>> 0
      }
      BqQ(QQ, FQ, wQ) {
        return 0 !== iQ.DnEN(this.__wbg_ptr, QQ, FQ, wQ)
      }
      stage(QQ) {
        return iQ.Ut42(this.__wbg_ptr, QQ) >>> 0
      }
      step() {
        return iQ.KK1C(this.__wbg_ptr) >>> 0
      }
    }

    function oQ(QQ, FQ) {
      const wQ = function(QQ, FQ, wQ) {
          if (void 0 === wQ) {
            const wQ = cQ.encode(QQ),
              LQ = FQ(wQ.length, 1) >>> 0;
            return xQ().subarray(LQ, LQ + wQ.length).set(wQ), WQ = wQ.length, LQ
          }
          let LQ = QQ.length,
            qQ = FQ(LQ, 1) >>> 0;
          const oQ = xQ();
          let DQ = 0;
          for (; DQ < LQ; DQ++) {
            const FQ = QQ.charCodeAt(DQ);
            if (FQ > 127) break;
            oQ[qQ + DQ] = FQ
          }
          if (DQ !== LQ) {
            0 !== DQ && (QQ = QQ.slice(DQ)), qQ = wQ(qQ, LQ, LQ = DQ + 3 * QQ.length, 1) >>> 0;
            const FQ = xQ().subarray(qQ + DQ, qQ + LQ);
            DQ += cQ.encodeInto(QQ, FQ).written, qQ = wQ(qQ, LQ, DQ, 1) >>> 0
          }
          return WQ = DQ, qQ
        }(QQ, iQ.WN0V, iQ.JsZA),
        LQ = WQ,
        qQ = iQ.xH6k(wQ, LQ, FQ);
      if (qQ[1]) throw eQ(qQ[0])
    }

    function DQ() {
      iQ.sWQ4()
    }

    function kQ() {
      return iQ.Ya5Q() >>> 0
    }

    function vQ() {
      return eQ(iQ.jgp9())
    }

    function mQ() {
      return {
        __proto__: null,
        Ur7U: {
          __proto__: null,
          rXI9: function(QQ, FQ) {
            return HQ(Error(bQ(QQ, FQ)))
          },
          gA2l: function() {
            return HQ(iQ.memory)
          },
          SFJn: function(QQ, FQ) {
            throw new Error(bQ(QQ, FQ))
          },
          JxRZ: function(QQ, FQ) {
            console.error(bQ(QQ, FQ))
          },
          AuEx: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
    const uQ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((QQ => iQ?.__wbg_recordermodule_free(QQ, 1)));

    function HQ(QQ) {
      tQ === AQ.length && AQ.push(AQ.length + 1);
      const FQ = tQ;
      return tQ = AQ[FQ], AQ[FQ] = QQ, FQ
    }

    function bQ(QQ, FQ) {
      return function(QQ, FQ) {
        pQ += FQ, pQ >= GQ && (MQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), MQ.decode(), pQ = FQ);
        return MQ.decode(xQ().subarray(QQ, QQ + FQ))
      }(QQ >>> 0, FQ)
    }
    let YQ = null;

    function xQ() {
      return null !== YQ && 0 !== YQ.byteLength || (YQ = new Uint8Array(iQ.memory.buffer)), YQ
    }
    let AQ = new Array(1024).fill(void 0);
    AQ.push(void 0, null, !0, !1);
    let tQ = AQ.length;

    function eQ(QQ) {
      const FQ = function(QQ) {
        return AQ[QQ]
      }(QQ);
      return function(QQ) {
        QQ < 1028 || (AQ[QQ] = tQ, tQ = QQ)
      }(QQ), FQ
    }
    let MQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    MQ.decode();
    const GQ = 2146435072;
    let pQ = 0;
    const cQ = new TextEncoder;
    "encodeInto" in cQ || (cQ.encodeInto = function(QQ, FQ) {
      const wQ = cQ.encode(QQ);
      return FQ.set(wQ), {
        read: QQ.length,
        written: wQ.length
      }
    });
    let CQ, SQ, iQ, WQ = 0;

    function RQ(QQ, FQ) {
      return SQ = QQ, iQ = QQ.exports, CQ = FQ, YQ = null, iQ.VInp(), iQ
    }

    function OQ(QQ) {
      if (void 0 !== iQ) return iQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const FQ = mQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return RQ(new WebAssembly.Instance(QQ, FQ), QQ)
    }
    async function sQ(QQ) {
      if (void 0 !== iQ) return iQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const FQ = mQ();
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
      return RQ(wQ, LQ)
    }

    function rQ() {
      iQ = void 0, SQ = void 0, YQ = null, AQ = new Array(1024).fill(void 0), AQ.push(void 0, null, !0, !1), tQ = AQ.length
    }
    var IQ = wQ(2811),
      UQ = wQ(6446);
    const NQ = 2;
    class TQ extends Error {
      stage;
      constructor(QQ, FQ) {
        super((0, IQ.N)(QQ, FQ), {
          cause: FQ
        }), this.name = "BloxdRecorderWasmError", this.stage = QQ
      }
    }
    let KQ = null;
    const zQ = function(QQ) {
      let FQ = null,
        wQ = null,
        LQ = null,
        qQ = null;
      const oQ = async () => {
        let wQ = null;
        try {
          return wQ = FQ ??= (0, IQ.R)(QQ.url(), (0, UQ.e)(QQ.name)), await wQ
        } catch (LQ) {
          throw FQ === wQ && (FQ = null), QQ.error((0, IQ.X)(LQ), LQ)
        }
      };
      return {
        load: () => {
          if (qQ) return Promise.reject(qQ);
          if (wQ) return wQ;
          const FQ = (async () => {
            const FQ = await oQ();
            try {
              await QQ.init(FQ)
            } catch (wQ) {
              throw QQ.error("instantiate", wQ)
            }
            return QQ.bindings
          })();
          wQ = FQ, LQ = FQ;
          const DQ = () => {
            LQ === FQ && (LQ = null)
          };
          return FQ.then(DQ, (() => {
            DQ(), wQ === FQ && (wQ = null)
          })), FQ
        },
        prefetch: async () => {
          qQ || wQ || await oQ()
        },
        markTrapped: FQ => (qQ ??= QQ.error("call", FQ), qQ),
        unload: () => {
          qQ || !QQ.reset || LQ || (QQ.reset(), wQ = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new wQ.U(wQ(60976)),
      init: async QQ => {
        await sQ({
          module_or_path: QQ
        }), KQ = vQ()
      },
      bindings: LQ,
      error: (QQ, FQ) => new TQ(QQ, FQ),
      reset: () => {
        rQ(), KQ = null
      }
    });

    function lQ() {
      return zQ.load()
    }

    function jQ() {
      return zQ.prefetch()
    }

    function aQ(QQ) {
      return zQ.markTrapped(QQ)
    }

    function XQ() {
      zQ.unload()
    }

    function fQ() {
      return KQ?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);