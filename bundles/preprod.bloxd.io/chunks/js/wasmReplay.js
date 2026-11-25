export const id = 68;
export const ids = [68];
export const modules = {
  61752: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_replay_bg.dbe80fea7c0105503ce5.wasm"
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
  61750: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      BloxdReplayWasmError: () => EQ,
      loadReplayModule: () => tQ,
      markReplayTrapped: () => nQ,
      replayMemoryBytes: () => eQ,
      unloadReplayModule: () => oQ
    });
    var wQ = {};
    XQ.r(wQ), XQ.d(wQ, {
      yTQ: () => qQ,
      gsQ: () => cQ,
      Mg: () => TQ,
      default: () => iQ,
      initSync: () => hQ,
      QJ: () => zQ,
      rTQ: () => sQ,
      VTQ: () => FQ
    });
    class qQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        HQ.Zl0o(QQ, 0)
      }
      bTQ(QQ, WQ, XQ, wQ, qQ, TQ) {
        HQ.HAVO(this.__wbg_ptr, QQ, WQ, XQ, wQ, qQ, TQ)
      }
      close() {
        HQ.IZQN(this.__wbg_ptr)
      }
      crop(QQ, WQ) {
        HQ.ztDu(this.__wbg_ptr, QQ, WQ)
      }
      HTQ(QQ, WQ) {
        HQ.GqVL(this.__wbg_ptr, QQ, WQ)
      }
      lTQ() {
        return HQ.EQ2V(this.__wbg_ptr) >>> 0
      }
      aTQ() {
        return HQ.JVV7(this.__wbg_ptr) >>> 0
      }
      hTQ() {
        return HQ.jg2l(this.__wbg_ptr) >>> 0
      }
      iTQ() {
        return HQ.CrRs(this.__wbg_ptr) >>> 0
      }
      dTQ(QQ, WQ) {
        HQ.zkkl(this.__wbg_ptr, QQ, WQ)
      }
      constructor() {
        const QQ = HQ.saWn();
        return this.__wbg_ptr = QQ, gQ.register(this, this.__wbg_ptr, this), this
      }
      open() {
        HQ.yjVO(this.__wbg_ptr)
      }
      FTQ() {
        return HQ.Y6xg(this.__wbg_ptr) >>> 0
      }
      pause() {
        HQ.aJJa(this.__wbg_ptr)
      }
      play() {
        HQ.NYNX(this.__wbg_ptr)
      }
      save() {
        return HQ.h96K(this.__wbg_ptr) >>> 0
      }
      cTQ() {
        HQ.K21e(this.__wbg_ptr)
      }
      seek(QQ, WQ) {
        HQ.Km98(this.__wbg_ptr, QQ, WQ)
      }
      ETQ(QQ) {
        HQ.wAnj(this.__wbg_ptr, QQ)
      }
      vTQ(QQ, WQ) {
        const XQ = function(QQ, WQ) {
            const XQ = WQ(8 * QQ.length, 8) >>> 0;
            return function() {
              null !== rQ && 0 !== rQ.byteLength || (rQ = new Float64Array(HQ.memory.buffer));
              return rQ
            }().set(QQ, XQ / 8), aQ = QQ.length, XQ
          }(WQ, HQ.e2YW),
          wQ = aQ;
        HQ.jNV9(this.__wbg_ptr, QQ, XQ, wQ)
      }
      UTQ(QQ, WQ) {
        HQ.kZe1(this.__wbg_ptr, QQ, WQ)
      }
      RTQ(QQ) {
        HQ.BlRd(this.__wbg_ptr, QQ)
      }
      stage(QQ) {
        return HQ.zWJA(this.__wbg_ptr, QQ) >>> 0
      }
      step(QQ, WQ) {
        return HQ.VA8K(this.__wbg_ptr, QQ, WQ) >>> 0
      }
    }

    function TQ(QQ, WQ) {
      const XQ = function(QQ, WQ, XQ) {
          if (void 0 === XQ) {
            const XQ = bQ.encode(QQ),
              wQ = WQ(XQ.length, 1) >>> 0;
            return BQ().subarray(wQ, wQ + XQ.length).set(XQ), aQ = XQ.length, wQ
          }
          let wQ = QQ.length,
            qQ = WQ(wQ, 1) >>> 0;
          const TQ = BQ();
          let zQ = 0;
          for (; zQ < wQ; zQ++) {
            const WQ = QQ.charCodeAt(zQ);
            if (WQ > 127) break;
            TQ[qQ + zQ] = WQ
          }
          if (zQ !== wQ) {
            0 !== zQ && (QQ = QQ.slice(zQ)), qQ = XQ(qQ, wQ, wQ = zQ + 3 * QQ.length, 1) >>> 0;
            const WQ = BQ().subarray(qQ + zQ, qQ + wQ);
            zQ += bQ.encodeInto(QQ, WQ).written, qQ = XQ(qQ, wQ, zQ, 1) >>> 0
          }
          return aQ = zQ, qQ
        }(QQ, HQ.e2YW, HQ.NbHn),
        wQ = aQ,
        qQ = HQ.WMcA(XQ, wQ, WQ);
      if (qQ[1]) throw DQ(qQ[0])
    }

    function zQ() {
      HQ.px6e()
    }

    function sQ() {
      return HQ.XKxe() >>> 0
    }

    function FQ() {
      return DQ(HQ.l0xR())
    }

    function PQ() {
      return {
        __proto__: null,
        uptt: {
          __proto__: null,
          OIU9: function(QQ, WQ) {
            return JQ(Error(IQ(QQ, WQ)))
          },
          uoXB: function() {
            return JQ(HQ.memory)
          },
          ulSr: function(QQ, WQ) {
            throw new Error(IQ(QQ, WQ))
          },
          j63n: function(QQ, WQ) {
            console.error(IQ(QQ, WQ))
          },
          gNaT: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
    const gQ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((QQ => HQ?.__wbg_replaymodule_free(QQ, 1)));

    function JQ(QQ) {
      VQ === yQ.length && yQ.push(yQ.length + 1);
      const WQ = VQ;
      return VQ = yQ[WQ], yQ[WQ] = QQ, WQ
    }
    let rQ = null;

    function IQ(QQ, WQ) {
      return function(QQ, WQ) {
        UQ += WQ, UQ >= GQ && (pQ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), pQ.decode(), UQ = WQ);
        return pQ.decode(BQ().subarray(QQ, QQ + WQ))
      }(QQ >>> 0, WQ)
    }
    let jQ = null;

    function BQ() {
      return null !== jQ && 0 !== jQ.byteLength || (jQ = new Uint8Array(HQ.memory.buffer)), jQ
    }
    let yQ = new Array(1024).fill(void 0);
    yQ.push(void 0, null, !0, !1);
    let VQ = yQ.length;

    function DQ(QQ) {
      const WQ = function(QQ) {
        return yQ[QQ]
      }(QQ);
      return function(QQ) {
        QQ < 1028 || (yQ[QQ] = VQ, VQ = QQ)
      }(QQ), WQ
    }
    let pQ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    pQ.decode();
    const GQ = 2146435072;
    let UQ = 0;
    const bQ = new TextEncoder;
    "encodeInto" in bQ || (bQ.encodeInto = function(QQ, WQ) {
      const XQ = bQ.encode(QQ);
      return WQ.set(XQ), {
        read: QQ.length,
        written: XQ.length
      }
    });
    let vQ, dQ, HQ, aQ = 0;

    function lQ(QQ, WQ) {
      return dQ = QQ, HQ = QQ.exports, vQ = WQ, rQ = null, jQ = null, HQ.VxaD(), HQ
    }

    function hQ(QQ) {
      if (void 0 !== HQ) return HQ;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WQ = PQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return lQ(new WebAssembly.Instance(QQ, WQ), QQ)
    }
    async function iQ(QQ) {
      if (void 0 !== HQ) return HQ;
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
      return lQ(XQ, wQ)
    }

    function cQ() {
      HQ = void 0, dQ = void 0, rQ = null, jQ = null, yQ = new Array(1024).fill(void 0), yQ.push(void 0, null, !0, !1), VQ = yQ.length
    }
    var AQ = XQ(3110),
      RQ = XQ(6987);
    class EQ extends Error {
      stage;
      constructor(QQ, WQ) {
        super((0, AQ.E)(QQ, WQ), {
          cause: WQ
        }), this.name = "BloxdReplayWasmError", this.stage = QQ
      }
    }
    let CQ = null,
      uQ = null,
      LQ = Promise.resolve(),
      kQ = 0,
      fQ = null,
      SQ = null;

    function tQ() {
      if (SQ) return Promise.reject(SQ);
      if (uQ) return uQ;
      const QQ = kQ,
        WQ = LQ,
        qQ = (async () => {
          let qQ;
          await WQ, CQ ??= (0, AQ.H)(new XQ.U(XQ(61752)), (0, RQ.b)("bloxd_wasm_replay"));
          try {
            qQ = await CQ
          } catch (TQ) {
            throw CQ = null, new EQ((0, AQ.L)(TQ), TQ)
          }
          if (QQ !== kQ) throw new EQ("instantiate", new Error("unloaded while loading"));
          try {
            await iQ({
              module_or_path: qQ
            })
          } catch (TQ) {
            throw cQ(), new EQ("instantiate", TQ)
          }
          if (QQ !== kQ) throw cQ(), new EQ("instantiate", new Error("unloaded while loading"));
          return fQ = FQ(), wQ
        })();
      return uQ = qQ, LQ = qQ.catch((() => {})), qQ.catch((() => {
        uQ === qQ && (uQ = null)
      })), qQ
    }

    function oQ() {
      SQ || xQ()
    }

    function eQ() {
      return fQ?.buffer.byteLength ?? 0
    }

    function nQ(QQ) {
      return SQ || (SQ = new EQ("call", QQ), xQ()), SQ
    }

    function xQ() {
      kQ++, cQ(), uQ = null, fQ = null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);