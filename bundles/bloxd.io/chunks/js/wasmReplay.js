export const id = 63;
export const ids = [63];
export const modules = {
  60988: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_replay_bg.6817b8cd52234e0f59f4.wasm"
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
  60983: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BloxdReplayWasmError: () => TQ,
      loadReplayModule: () => fQ,
      markReplayTrapped: () => JQ,
      replayMemoryBytes: () => hQ,
      unloadReplayModule: () => VQ
    });
    var LQ = {};
    wQ.r(LQ), wQ.d(LQ, {
      xoQ: () => qQ,
      qkQ: () => IQ,
      FH: () => oQ,
      default: () => rQ,
      initSync: () => sQ,
      wH: () => DQ,
      uoQ: () => kQ,
      AoQ: () => vQ
    });
    class qQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        WQ.XjrD(QQ, 0)
      }
      GoQ(QQ, FQ, wQ, LQ, qQ, oQ) {
        WQ.dblD(this.__wbg_ptr, QQ, FQ, wQ, LQ, qQ, oQ)
      }
      close() {
        WQ.vCLj(this.__wbg_ptr)
      }
      crop(QQ, FQ) {
        WQ.OsrM(this.__wbg_ptr, QQ, FQ)
      }
      CoQ(QQ, FQ) {
        WQ.Sjac(this.__wbg_ptr, QQ, FQ)
      }
      ioQ() {
        return WQ.iVie(this.__wbg_ptr) >>> 0
      }
      SoQ() {
        return WQ.AMoe(this.__wbg_ptr) >>> 0
      }
      WoQ() {
        return WQ.qtpf(this.__wbg_ptr) >>> 0
      }
      RoQ() {
        return WQ.JNLr(this.__wbg_ptr) >>> 0
      }
      coQ(QQ, FQ) {
        WQ.WkJJ(this.__wbg_ptr, QQ, FQ)
      }
      constructor() {
        const QQ = WQ.bMko();
        return this.__wbg_ptr = QQ, uQ.register(this, this.__wbg_ptr, this), this
      }
      open() {
        WQ.lO9O(this.__wbg_ptr)
      }
      ooQ() {
        return WQ.fZEk(this.__wbg_ptr) >>> 0
      }
      pause() {
        WQ.iZjQ(this.__wbg_ptr)
      }
      play() {
        WQ.ZovV(this.__wbg_ptr)
      }
      save() {
        return WQ.tRF8(this.__wbg_ptr) >>> 0
      }
      OoQ() {
        WQ.W9nU(this.__wbg_ptr)
      }
      seek(QQ, FQ) {
        WQ.n7ud(this.__wbg_ptr, QQ, FQ)
      }
      roQ(QQ) {
        WQ.IawZ(this.__wbg_ptr, QQ)
      }
      poQ(QQ, FQ) {
        const wQ = function(QQ, FQ) {
            const wQ = FQ(8 * QQ.length, 8) >>> 0;
            return function() {
              null !== bQ && 0 !== bQ.byteLength || (bQ = new Float64Array(WQ.memory.buffer));
              return bQ
            }().set(QQ, wQ / 8), RQ = QQ.length, wQ
          }(FQ, WQ.O9fp),
          LQ = RQ;
        WQ.GbZy(this.__wbg_ptr, QQ, wQ, LQ)
      }
      MoQ(QQ, FQ) {
        WQ.GIAv(this.__wbg_ptr, QQ, FQ)
      }
      soQ(QQ) {
        WQ.cFQv(this.__wbg_ptr, QQ)
      }
      stage(QQ) {
        return WQ.Hxzv(this.__wbg_ptr, QQ) >>> 0
      }
      step(QQ, FQ) {
        return WQ.IYpZ(this.__wbg_ptr, QQ, FQ) >>> 0
      }
    }

    function oQ(QQ, FQ) {
      const wQ = function(QQ, FQ, wQ) {
          if (void 0 === wQ) {
            const wQ = CQ.encode(QQ),
              LQ = FQ(wQ.length, 1) >>> 0;
            return AQ().subarray(LQ, LQ + wQ.length).set(wQ), RQ = wQ.length, LQ
          }
          let LQ = QQ.length,
            qQ = FQ(LQ, 1) >>> 0;
          const oQ = AQ();
          let DQ = 0;
          for (; DQ < LQ; DQ++) {
            const FQ = QQ.charCodeAt(DQ);
            if (FQ > 127) break;
            oQ[qQ + DQ] = FQ
          }
          if (DQ !== LQ) {
            0 !== DQ && (QQ = QQ.slice(DQ)), qQ = wQ(qQ, LQ, LQ = DQ + 3 * QQ.length, 1) >>> 0;
            const FQ = AQ().subarray(qQ + DQ, qQ + LQ);
            DQ += CQ.encodeInto(QQ, FQ).written, qQ = wQ(qQ, LQ, DQ, 1) >>> 0
          }
          return RQ = DQ, qQ
        }(QQ, WQ.O9fp, WQ.QSaN),
        LQ = RQ,
        qQ = WQ.XpBj(wQ, LQ, FQ);
      if (qQ[1]) throw MQ(qQ[0])
    }

    function DQ() {
      WQ.vyNZ()
    }

    function kQ() {
      return WQ.BHjA() >>> 0
    }

    function vQ() {
      return MQ(WQ.MkIr())
    }

    function mQ() {
      return {
        __proto__: null,
        hOo0: {
          __proto__: null,
          WG1V: function(QQ, FQ) {
            return HQ(Error(YQ(QQ, FQ)))
          },
          y03V: function() {
            return HQ(WQ.memory)
          },
          o88w: function(QQ, FQ) {
            throw new Error(YQ(QQ, FQ))
          },
          vznD: function(QQ, FQ) {
            console.error(YQ(QQ, FQ))
          },
          U0kg: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
    const uQ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((QQ => WQ?.__wbg_replaymodule_free(QQ, 1)));

    function HQ(QQ) {
      eQ === tQ.length && tQ.push(tQ.length + 1);
      const FQ = eQ;
      return eQ = tQ[FQ], tQ[FQ] = QQ, FQ
    }
    let bQ = null;

    function YQ(QQ, FQ) {
      return function(QQ, FQ) {
        cQ += FQ, cQ >= pQ && (GQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), GQ.decode(), cQ = FQ);
        return GQ.decode(AQ().subarray(QQ, QQ + FQ))
      }(QQ >>> 0, FQ)
    }
    let xQ = null;

    function AQ() {
      return null !== xQ && 0 !== xQ.byteLength || (xQ = new Uint8Array(WQ.memory.buffer)), xQ
    }
    let tQ = new Array(1024).fill(void 0);
    tQ.push(void 0, null, !0, !1);
    let eQ = tQ.length;

    function MQ(QQ) {
      const FQ = function(QQ) {
        return tQ[QQ]
      }(QQ);
      return function(QQ) {
        QQ < 1028 || (tQ[QQ] = eQ, eQ = QQ)
      }(QQ), FQ
    }
    let GQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    GQ.decode();
    const pQ = 2146435072;
    let cQ = 0;
    const CQ = new TextEncoder;
    "encodeInto" in CQ || (CQ.encodeInto = function(QQ, FQ) {
      const wQ = CQ.encode(QQ);
      return FQ.set(wQ), {
        read: QQ.length,
        written: wQ.length
      }
    });
    let SQ, iQ, WQ, RQ = 0;

    function OQ(QQ, FQ) {
      return iQ = QQ, WQ = QQ.exports, SQ = FQ, bQ = null, xQ = null, WQ.ssx9(), WQ
    }

    function sQ(QQ) {
      if (void 0 !== WQ) return WQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const FQ = mQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return OQ(new WebAssembly.Instance(QQ, FQ), QQ)
    }
    async function rQ(QQ) {
      if (void 0 !== WQ) return WQ;
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
      return OQ(wQ, LQ)
    }

    function IQ() {
      WQ = void 0, iQ = void 0, bQ = null, xQ = null, tQ = new Array(1024).fill(void 0), tQ.push(void 0, null, !0, !1), eQ = tQ.length
    }
    var UQ = wQ(2811),
      NQ = wQ(6446);
    class TQ extends Error {
      stage;
      constructor(QQ, FQ) {
        super((0, UQ.N)(QQ, FQ), {
          cause: FQ
        }), this.name = "BloxdReplayWasmError", this.stage = QQ
      }
    }
    let KQ = null,
      zQ = null,
      lQ = Promise.resolve(),
      jQ = 0,
      aQ = null,
      XQ = null;

    function fQ() {
      if (XQ) return Promise.reject(XQ);
      if (zQ) return zQ;
      const QQ = jQ,
        FQ = lQ,
        qQ = (async () => {
          let qQ;
          await FQ, KQ ??= (0, UQ.R)(new wQ.U(wQ(60988)), (0, NQ.e)("bloxd_wasm_replay"));
          try {
            qQ = await KQ
          } catch (oQ) {
            throw KQ = null, new TQ((0, UQ.X)(oQ), oQ)
          }
          if (QQ !== jQ) throw new TQ("instantiate", new Error("unloaded while loading"));
          try {
            await rQ({
              module_or_path: qQ
            })
          } catch (oQ) {
            throw IQ(), new TQ("instantiate", oQ)
          }
          if (QQ !== jQ) throw IQ(), new TQ("instantiate", new Error("unloaded while loading"));
          return aQ = vQ(), LQ
        })();
      return zQ = qQ, lQ = qQ.catch((() => {})), qQ.catch((() => {
        zQ === qQ && (zQ = null)
      })), qQ
    }

    function VQ() {
      XQ || EQ()
    }

    function hQ() {
      return aQ?.buffer.byteLength ?? 0
    }

    function JQ(QQ) {
      return XQ || (XQ = new TQ("call", QQ), EQ()), XQ
    }

    function EQ() {
      jQ++, IQ(), zQ = null, aQ = null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);