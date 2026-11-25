export const id = 67;
export const ids = [67];
export const modules = {
  61743: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_recorder_bg.dbf2c42a46751dde4754.wasm"
  },
  61735: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BloxdRecorderWasmError: () => EQ,
      RECORDER_MODULE_ID: () => RQ,
      loadRecorderModule: () => LQ,
      markRecorderTrapped: () => fQ,
      prefetchRecorderModule: () => kQ,
      recorderMemoryBytes: () => tQ,
      unloadRecorderModule: () => SQ
    });
    var wQ = {};
    XQ.r(wQ), XQ.d(wQ, {
      jTQ: () => qQ,
      gsQ: () => iQ,
      Mg: () => TQ,
      default: () => hQ,
      initSync: () => lQ,
      QJ: () => zQ,
      rTQ: () => sQ,
      TTQ: () => FQ
    });
    class qQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        dQ.yyW6(QQ, 0)
      }
      busy() {
        return 0 !== dQ.TRVO(this.__wbg_ptr)
      }
      command(QQ, WQ) {
        return 0 !== dQ.TRpi(this.__wbg_ptr, QQ, WQ)
      }
      zTQ(QQ) {
        return dQ.DTcN(this.__wbg_ptr, QQ) >>> 0
      }
      qTQ() {
        dQ.dtKk(this.__wbg_ptr)
      }
      wTQ() {
        return dQ.bmdQ(this.__wbg_ptr) >>> 0
      }
      XTQ() {
        return dQ.Omzv(this.__wbg_ptr)
      }
      PTQ() {
        return dQ.lmHC(this.__wbg_ptr) >>> 0
      }
      gTQ() {
        return dQ.W2GW(this.__wbg_ptr) >>> 0
      }
      feed(QQ) {
        return dQ.QsjA(this.__wbg_ptr, QQ) >>> 0
      }
      constructor() {
        const QQ = dQ.Dbij();
        return this.__wbg_ptr = QQ, gQ.register(this, this.__wbg_ptr, this), this
      }
      FTQ() {
        return dQ.k5t0(this.__wbg_ptr) >>> 0
      }
      JsQ() {
        return dQ.dGzR(this.__wbg_ptr) >>> 0
      }
      WTQ(QQ, WQ, XQ) {
        return 0 !== dQ.LqK2(this.__wbg_ptr, QQ, WQ, XQ)
      }
      stage(QQ) {
        return dQ.SYpD(this.__wbg_ptr, QQ) >>> 0
      }
      step() {
        return dQ.SY40(this.__wbg_ptr) >>> 0
      }
    }

    function TQ(QQ, WQ) {
      const XQ = function(QQ, WQ, XQ) {
          if (void 0 === XQ) {
            const XQ = UQ.encode(QQ),
              wQ = WQ(XQ.length, 1) >>> 0;
            return jQ().subarray(wQ, wQ + XQ.length).set(XQ), HQ = XQ.length, wQ
          }
          let wQ = QQ.length,
            qQ = WQ(wQ, 1) >>> 0;
          const TQ = jQ();
          let zQ = 0;
          for (; zQ < wQ; zQ++) {
            const WQ = QQ.charCodeAt(zQ);
            if (WQ > 127) break;
            TQ[qQ + zQ] = WQ
          }
          if (zQ !== wQ) {
            0 !== zQ && (QQ = QQ.slice(zQ)), qQ = XQ(qQ, wQ, wQ = zQ + 3 * QQ.length, 1) >>> 0;
            const WQ = jQ().subarray(qQ + zQ, qQ + wQ);
            zQ += UQ.encodeInto(QQ, WQ).written, qQ = XQ(qQ, wQ, zQ, 1) >>> 0
          }
          return HQ = zQ, qQ
        }(QQ, dQ.FVkV, dQ.hcZZ),
        wQ = HQ,
        qQ = dQ.AUtC(XQ, wQ, WQ);
      if (qQ[1]) throw VQ(qQ[0])
    }

    function zQ() {
      dQ.Zudr()
    }

    function sQ() {
      return dQ.Oyyp() >>> 0
    }

    function FQ() {
      return VQ(dQ.HT6w())
    }

    function PQ() {
      return {
        __proto__: null,
        EcEl: {
          __proto__: null,
          eczh: function(QQ, WQ) {
            return JQ(Error(rQ(QQ, WQ)))
          },
          TnND: function() {
            return JQ(dQ.memory)
          },
          pBnh: function(QQ, WQ) {
            throw new Error(rQ(QQ, WQ))
          },
          uJHG: function(QQ, WQ) {
            console.error(rQ(QQ, WQ))
          },
          ITae: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
    const gQ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((QQ => dQ?.__wbg_recordermodule_free(QQ, 1)));

    function JQ(QQ) {
      yQ === BQ.length && BQ.push(BQ.length + 1);
      const WQ = yQ;
      return yQ = BQ[WQ], BQ[WQ] = QQ, WQ
    }

    function rQ(QQ, WQ) {
      return function(QQ, WQ) {
        GQ += WQ, GQ >= pQ && (DQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), DQ.decode(), GQ = WQ);
        return DQ.decode(jQ().subarray(QQ, QQ + WQ))
      }(QQ >>> 0, WQ)
    }
    let IQ = null;

    function jQ() {
      return null !== IQ && 0 !== IQ.byteLength || (IQ = new Uint8Array(dQ.memory.buffer)), IQ
    }
    let BQ = new Array(1024).fill(void 0);
    BQ.push(void 0, null, !0, !1);
    let yQ = BQ.length;

    function VQ(QQ) {
      const WQ = function(QQ) {
        return BQ[QQ]
      }(QQ);
      return function(QQ) {
        QQ < 1028 || (BQ[QQ] = yQ, yQ = QQ)
      }(QQ), WQ
    }
    let DQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    DQ.decode();
    const pQ = 2146435072;
    let GQ = 0;
    const UQ = new TextEncoder;
    "encodeInto" in UQ || (UQ.encodeInto = function(QQ, WQ) {
      const XQ = UQ.encode(QQ);
      return WQ.set(XQ), {
        read: QQ.length,
        written: XQ.length
      }
    });
    let bQ, vQ, dQ, HQ = 0;

    function aQ(QQ, WQ) {
      return vQ = QQ, dQ = QQ.exports, bQ = WQ, IQ = null, dQ.Gpdq(), dQ
    }

    function lQ(QQ) {
      if (void 0 !== dQ) return dQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WQ = PQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return aQ(new WebAssembly.Instance(QQ, WQ), QQ)
    }
    async function hQ(QQ) {
      if (void 0 !== dQ) return dQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WQ = PQ();
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
      return aQ(XQ, wQ)
    }

    function iQ() {
      dQ = void 0, vQ = void 0, IQ = null, BQ = new Array(1024).fill(void 0), BQ.push(void 0, null, !0, !1), yQ = BQ.length
    }
    var cQ = XQ(3110),
      AQ = XQ(6987);
    const RQ = 2;
    class EQ extends Error {
      stage;
      constructor(QQ, WQ) {
        super((0, cQ.E)(QQ, WQ), {
          cause: WQ
        }), this.name = "BloxdRecorderWasmError", this.stage = QQ
      }
    }
    let CQ = null;
    const uQ = function(QQ) {
      let WQ = null,
        XQ = null,
        wQ = null,
        qQ = null;
      const TQ = async () => {
        let XQ = null;
        try {
          return XQ = WQ ??= (0, cQ.H)(QQ.url(), (0, AQ.b)(QQ.name)), await XQ
        } catch (wQ) {
          throw WQ === XQ && (WQ = null), QQ.error((0, cQ.L)(wQ), wQ)
        }
      };
      return {
        load: () => {
          if (qQ) return Promise.reject(qQ);
          if (XQ) return XQ;
          const WQ = (async () => {
            const WQ = await TQ();
            try {
              await QQ.init(WQ)
            } catch (XQ) {
              throw QQ.error("instantiate", XQ)
            }
            return QQ.bindings
          })();
          XQ = WQ, wQ = WQ;
          const zQ = () => {
            wQ === WQ && (wQ = null)
          };
          return WQ.then(zQ, (() => {
            zQ(), XQ === WQ && (XQ = null)
          })), WQ
        },
        prefetch: async () => {
          qQ || XQ || await TQ()
        },
        markTrapped: WQ => (qQ ??= QQ.error("call", WQ), qQ),
        unload: () => {
          qQ || !QQ.reset || wQ || (QQ.reset(), XQ = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new XQ.U(XQ(61743)),
      init: async QQ => {
        await hQ({
          module_or_path: QQ
        }), CQ = FQ()
      },
      bindings: wQ,
      error: (QQ, WQ) => new EQ(QQ, WQ),
      reset: () => {
        iQ(), CQ = null
      }
    });

    function LQ() {
      return uQ.load()
    }

    function kQ() {
      return uQ.prefetch()
    }

    function fQ(QQ) {
      return uQ.markTrapped(QQ)
    }

    function SQ() {
      uQ.unload()
    }

    function tQ() {
      return CQ?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);