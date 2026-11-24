export const id = 65;
export const ids = [65];
export const modules = {
  61553: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_replay_bg.c1813b2bd7b433a4dae4.wasm"
  },
  6819: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(3030);
    const bS = {
      bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
      bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
      bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
      bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
      bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
      bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
      bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
      bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
      bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
      bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
      bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
      bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
    };
    var XS = gS(4812);

    function xS(SS) {
      const HS = Object.prototype.hasOwnProperty.call(bS, SS) ? bS[SS]() : void 0;
      if (void 0 !== HS) return {
        sha256: HS,
        onMismatch: XS.D
      };
      throw new tS.h(`${SS} has no release digest, so this build refuses it`)
    }
  },
  61544: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BloxdReplayWasmError: () => AS,
      loadReplayModule: () => pS,
      markReplayTrapped: () => MS,
      replayMemoryBytes: () => BS,
      unloadReplayModule: () => sS
    });
    var tS = {};
    gS.r(tS), gS.d(tS, {
      WbS: () => bS,
      JxS: () => ES,
      bf: () => XS,
      default: () => vS,
      initSync: () => cS,
      Xf: () => xS,
      AbS: () => NS,
      zbS: () => qS
    });
    class bS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        JS.HuNd(SS, 0)
      }
      BbS(SS, HS, gS, tS, bS, XS) {
        JS.szDG(this.__wbg_ptr, SS, HS, gS, tS, bS, XS)
      }
      close() {
        JS.kVtB(this.__wbg_ptr)
      }
      crop(SS, HS) {
        JS.mMvx(this.__wbg_ptr, SS, HS)
      }
      RbS(SS, HS) {
        JS.jV8X(this.__wbg_ptr, SS, HS)
      }
      obS() {
        return JS.pw9E(this.__wbg_ptr) >>> 0
      }
      TbS() {
        return JS.rjmr(this.__wbg_ptr) >>> 0
      }
      lbS() {
        return JS.cW5f(this.__wbg_ptr) >>> 0
      }
      mbS() {
        return JS.yAcH(this.__wbg_ptr) >>> 0
      }
      FbS(SS, HS) {
        JS.vFxC(this.__wbg_ptr, SS, HS)
      }
      constructor() {
        const SS = JS.P44B();
        return this.__wbg_ptr = SS, IS.register(this, this.__wbg_ptr, this), this
      }
      open() {
        JS.Gfbx(this.__wbg_ptr)
      }
      vbS() {
        return JS.HvPe(this.__wbg_ptr) >>> 0
      }
      pause() {
        JS.bpGO(this.__wbg_ptr)
      }
      play() {
        JS.QRJ6(this.__wbg_ptr)
      }
      save() {
        return JS.ShhX(this.__wbg_ptr) >>> 0
      }
      ebS() {
        JS.cqsI(this.__wbg_ptr)
      }
      seek(SS, HS) {
        JS.RxCE(this.__wbg_ptr, SS, HS)
      }
      SXS(SS) {
        JS.HVz8(this.__wbg_ptr, SS)
      }
      MbS(SS, HS) {
        const gS = function(SS, HS) {
            const gS = HS(8 * SS.length, 8) >>> 0;
            return function() {
              null !== kS && 0 !== kS.byteLength || (kS = new Float64Array(JS.memory.buffer));
              return kS
            }().set(SS, gS / 8), OS = SS.length, gS
          }(HS, JS.QDoe),
          tS = OS;
        JS.y2Pr(this.__wbg_ptr, SS, gS, tS)
      }
      sbS(SS, HS) {
        JS.WmVR(this.__wbg_ptr, SS, HS)
      }
      rbS(SS) {
        JS.Zo42(this.__wbg_ptr, SS)
      }
      stage(SS) {
        return JS.iC4k(this.__wbg_ptr, SS) >>> 0
      }
      step(SS, HS) {
        return JS.pbUE(this.__wbg_ptr, SS, HS) >>> 0
      }
    }

    function XS(SS, HS) {
      const gS = function(SS, HS, gS) {
          if (void 0 === gS) {
            const gS = wS.encode(SS),
              tS = HS(gS.length, 1) >>> 0;
            return jS().subarray(tS, tS + gS.length).set(gS), OS = gS.length, tS
          }
          let tS = SS.length,
            bS = HS(tS, 1) >>> 0;
          const XS = jS();
          let xS = 0;
          for (; xS < tS; xS++) {
            const HS = SS.charCodeAt(xS);
            if (HS > 127) break;
            XS[bS + xS] = HS
          }
          if (xS !== tS) {
            0 !== xS && (SS = SS.slice(xS)), bS = gS(bS, tS, tS = xS + 3 * SS.length, 1) >>> 0;
            const HS = jS().subarray(bS + xS, bS + tS);
            xS += wS.encodeInto(SS, HS).written, bS = gS(bS, tS, xS, 1) >>> 0
          }
          return OS = xS, bS
        }(SS, JS.QDoe, JS.PJfL),
        tS = OS,
        bS = JS.eCGh(gS, tS, HS);
      if (bS[1]) throw nS(bS[0])
    }

    function xS() {
      JS.EDO9()
    }

    function NS() {
      return JS.KgRb() >>> 0
    }

    function qS() {
      return nS(JS.I0RY())
    }

    function uS() {
      return {
        __proto__: null,
        as1A: {
          __proto__: null,
          HLCA: function(SS, HS) {
            return fS(Error(aS(SS, HS)))
          },
          tTgF: function() {
            return fS(JS.memory)
          },
          TcAw: function(SS, HS) {
            throw new Error(aS(SS, HS))
          },
          qOJ7: function(SS, HS) {
            console.error(aS(SS, HS))
          },
          C0rA: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (bS.prototype[Symbol.dispose] = bS.prototype.free);
    const IS = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((SS => JS?.__wbg_replaymodule_free(SS, 1)));

    function fS(SS) {
      CS === GS.length && GS.push(GS.length + 1);
      const HS = CS;
      return CS = GS[HS], GS[HS] = SS, HS
    }
    let kS = null;

    function aS(SS, HS) {
      return function(SS, HS) {
        DS += HS, DS >= QS && (PS = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), PS.decode(), DS = HS);
        return PS.decode(jS().subarray(SS, SS + HS))
      }(SS >>> 0, HS)
    }
    let KS = null;

    function jS() {
      return null !== KS && 0 !== KS.byteLength || (KS = new Uint8Array(JS.memory.buffer)), KS
    }
    let GS = new Array(1024).fill(void 0);
    GS.push(void 0, null, !0, !1);
    let CS = GS.length;

    function nS(SS) {
      const HS = function(SS) {
        return GS[SS]
      }(SS);
      return function(SS) {
        SS < 1028 || (GS[SS] = CS, CS = SS)
      }(SS), HS
    }
    let PS = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    PS.decode();
    const QS = 2146435072;
    let DS = 0;
    const wS = new TextEncoder;
    "encodeInto" in wS || (wS.encodeInto = function(SS, HS) {
      const gS = wS.encode(SS);
      return HS.set(gS), {
        read: SS.length,
        written: gS.length
      }
    });
    let hS, ZS, JS, OS = 0;

    function dS(SS, HS) {
      return ZS = SS, JS = SS.exports, hS = HS, kS = null, KS = null, JS.pzcE(), JS
    }

    function cS(SS) {
      if (void 0 !== JS) return JS;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module: SS
      } = SS) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const HS = uS();
      SS instanceof WebAssembly.Module || (SS = new WebAssembly.Module(SS));
      return dS(new WebAssembly.Instance(SS, HS), SS)
    }
    async function vS(SS) {
      if (void 0 !== JS) return JS;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module_or_path: SS
      } = SS) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const HS = uS();
      ("string" === typeof SS || "function" === typeof Request && SS instanceof Request || "function" === typeof URL && SS instanceof URL) && (SS = fetch(SS));
      const {
        instance: gS,
        module: tS
      } = await async function(SS, HS) {
        if ("function" === typeof Response && SS instanceof Response) {
          if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(SS, HS)
          } catch (gS) {
            if (! function(SS) {
                switch (SS) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(SS.type) || "application/wasm" === SS.headers.get("Content-Type")) throw gS;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gS)
          }
          const tS = await SS.arrayBuffer();
          return await WebAssembly.instantiate(tS, HS)
        } {
          const gS = await WebAssembly.instantiate(SS, HS);
          return gS instanceof WebAssembly.Instance ? {
            instance: gS,
            module: SS
          } : gS
        }
      }(await SS, HS);
      return dS(gS, tS)
    }

    function ES() {
      JS = void 0, ZS = void 0, kS = null, KS = null, GS = new Array(1024).fill(void 0), GS.push(void 0, null, !0, !1), CS = GS.length
    }
    var LS = gS(3030),
      YS = gS(6819);
    class AS extends Error {
      stage;
      constructor(SS, HS) {
        super((0, LS.E)(SS, HS), {
          cause: HS
        }), this.name = "BloxdReplayWasmError", this.stage = SS
      }
    }
    let yS = null,
      VS = null,
      iS = Promise.resolve(),
      WS = 0,
      zS = null,
      US = null;

    function pS() {
      if (US) return Promise.reject(US);
      if (VS) return VS;
      const SS = WS,
        HS = iS,
        bS = (async () => {
          let bS;
          await HS, yS ??= (0, LS.F)(new gS.U(gS(61553)), (0, YS.c)("bloxd_wasm_replay"));
          try {
            bS = await yS
          } catch (XS) {
            throw yS = null, new AS((0, LS.L)(XS), XS)
          }
          if (SS !== WS) throw new AS("instantiate", new Error("unloaded while loading"));
          try {
            await vS({
              module_or_path: bS
            })
          } catch (XS) {
            throw ES(), new AS("instantiate", XS)
          }
          if (SS !== WS) throw ES(), new AS("instantiate", new Error("unloaded while loading"));
          return zS = qS(), tS
        })();
      return VS = bS, iS = bS.catch((() => {})), bS.catch((() => {
        VS === bS && (VS = null)
      })), bS
    }

    function sS() {
      US || FS()
    }

    function BS() {
      return zS?.buffer.byteLength ?? 0
    }

    function MS(SS) {
      return US || (US = new AS("call", SS), FS()), US
    }

    function FS() {
      WS++, ES(), VS = null, zS = null
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);