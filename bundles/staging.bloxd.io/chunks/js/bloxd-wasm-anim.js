export const id = 5;
export const ids = [5];
export const modules = {
  42666: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_anim_bg.86fc9f1257f7f962d50b.wasm"
  },
  42660: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BloxdAnimWasmError: () => yS,
      compileAnimationPackInWasm: () => zS
    });
    var tS = {};

    function bS(SS, HS, gS, tS, bS, XS) {
      const xS = nS(SS, dS.Q5Lw),
        NS = cS,
        qS = nS(HS, dS.Q5Lw),
        uS = cS,
        IS = nS(gS, dS.Q5Lw),
        fS = cS,
        kS = nS(tS, dS.Q5Lw),
        KS = cS,
        jS = nS(bS, dS.Q5Lw),
        GS = cS;
      var PS = CS(XS) ? 0 : function(SS, HS) {
          const gS = HS(1 * SS.length, 1) >>> 0;
          return aS().set(SS, gS / 1), cS = SS.length, gS
        }(XS, dS.Q5Lw),
        DS = cS;
      const wS = dS.wtgB(xS, NS, qS, uS, IS, fS, kS, KS, jS, GS, PS, DS);
      if (wS[3]) throw QS(wS[2]);
      var hS, ZS, JS = (hS = wS[0], ZS = wS[1], hS >>>= 0, aS().subarray(hS / 1, hS / 1 + ZS)).slice();
      return dS.sgji(wS[0], 1 * wS[1], 1), JS
    }

    function XS(SS, HS) {
      const gS = PS(SS, dS.Q5Lw, dS.VfHJ),
        tS = cS,
        bS = dS.lkur(gS, tS, HS);
      if (bS[1]) throw QS(bS[0])
    }

    function xS() {
      dS.OPoh()
    }

    function NS() {
      return {
        __proto__: null,
        HwLg: {
          __proto__: null,
          Dh36: function(SS, HS) {
            return qS(Error(fS(SS, HS)))
          },
          kGji: function(SS, HS) {
            const gS = KS(HS),
              tS = "string" === typeof gS ? gS : void 0;
            var bS = CS(tS) ? 0 : PS(tS, dS.Q5Lw, dS.VfHJ),
              XS = cS;
            IS().setInt32(SS + 4, XS, !0), IS().setInt32(SS + 0, bS, !0)
          },
          tTwq: function(SS, HS) {
            throw new Error(fS(SS, HS))
          },
          SQ1j: function(SS, HS) {
            console.error(fS(SS, HS))
          },
          qwBG: function(SS) {
            QS(SS)
          }
        }
      }
    }

    function qS(SS) {
      GS === jS.length && jS.push(jS.length + 1);
      const HS = GS;
      return GS = jS[HS], jS[HS] = SS, HS
    }
    gS.r(tS), gS.d(tS, {
      DxS: () => bS,
      bf: () => XS,
      default: () => LS,
      initSync: () => ES,
      Xf: () => xS
    });
    let uS = null;

    function IS() {
      return null !== uS && uS.buffer === dS.memory.buffer || (uS = new DataView(dS.memory.buffer)), uS
    }

    function fS(SS, HS) {
      return function(SS, HS) {
        hS += HS, hS >= wS && (DS = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), DS.decode(), hS = HS);
        return DS.decode(aS().subarray(SS, SS + HS))
      }(SS >>> 0, HS)
    }
    let kS = null;

    function aS() {
      return null !== kS && 0 !== kS.byteLength || (kS = new Uint8Array(dS.memory.buffer)), kS
    }

    function KS(SS) {
      return jS[SS]
    }
    let jS = new Array(1024).fill(void 0);
    jS.push(void 0, null, !0, !1);
    let GS = jS.length;

    function CS(SS) {
      return void 0 === SS || null === SS
    }

    function nS(SS, HS) {
      const gS = HS(4 * SS.length, 4) >>> 0,
        tS = IS();
      for (let bS = 0; bS < SS.length; bS++) tS.setUint32(gS + 4 * bS, qS(SS[bS]), !0);
      return cS = SS.length, gS
    }

    function PS(SS, HS, gS) {
      if (void 0 === gS) {
        const gS = ZS.encode(SS),
          tS = HS(gS.length, 1) >>> 0;
        return aS().subarray(tS, tS + gS.length).set(gS), cS = gS.length, tS
      }
      let tS = SS.length,
        bS = HS(tS, 1) >>> 0;
      const XS = aS();
      let xS = 0;
      for (; xS < tS; xS++) {
        const HS = SS.charCodeAt(xS);
        if (HS > 127) break;
        XS[bS + xS] = HS
      }
      if (xS !== tS) {
        0 !== xS && (SS = SS.slice(xS)), bS = gS(bS, tS, tS = xS + 3 * SS.length, 1) >>> 0;
        const HS = aS().subarray(bS + xS, bS + tS);
        xS += ZS.encodeInto(SS, HS).written, bS = gS(bS, tS, xS, 1) >>> 0
      }
      return cS = xS, bS
    }

    function QS(SS) {
      const HS = KS(SS);
      return function(SS) {
        SS < 1028 || (jS[SS] = GS, GS = SS)
      }(SS), HS
    }
    let DS = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    DS.decode();
    const wS = 2146435072;
    let hS = 0;
    const ZS = new TextEncoder;
    "encodeInto" in ZS || (ZS.encodeInto = function(SS, HS) {
      const gS = ZS.encode(SS);
      return HS.set(gS), {
        read: SS.length,
        written: gS.length
      }
    });
    let JS, OS, dS, cS = 0;

    function vS(SS, HS) {
      return OS = SS, dS = SS.exports, JS = HS, uS = null, kS = null, dS.aqEN(), dS
    }

    function ES(SS) {
      if (void 0 !== dS) return dS;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module: SS
      } = SS) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const HS = NS();
      SS instanceof WebAssembly.Module || (SS = new WebAssembly.Module(SS));
      return vS(new WebAssembly.Instance(SS, HS), SS)
    }
    async function LS(SS) {
      if (void 0 !== dS) return dS;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module_or_path: SS
      } = SS) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const HS = NS();
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
      return vS(gS, tS)
    }
    var YS = gS(3030),
      AS = gS(6819);
    class yS extends Error {
      stage;
      constructor(SS, HS) {
        super((0, YS.E)(SS, HS), {
          cause: HS
        }), this.name = "BloxdAnimWasmError", this.stage = SS
      }
    }
    let VS = null,
      iS = null;

    function WS() {
      if (iS) throw iS
    }
    async function zS(SS, HS, bS) {
      WS();
      const XS = await (VS ??= (async () => {
        let SS;
        try {
          SS = await (0, YS.F)(new gS.U(gS(42666)), (0, AS.c)("bloxd_wasm_anim"))
        } catch (HS) {
          throw new yS((0, YS.L)(HS), HS)
        }
        try {
          await LS({
            module_or_path: SS
          })
        } catch (HS) {
          throw new yS("instantiate", HS)
        }
        return tS
      })(), VS.catch((() => {
        VS = null
      })), VS);
      WS();
      try {
        return XS.DxS(Object.entries(SS).flat(), [...HS.mobTypes], [...HS.vehicleTypes], [...HS.mobAiStates], [...HS.playerPoses], "builtIns" in bS ? bS.builtIns : void 0)
      } catch (xS) {
        const SS = new yS("call", xS);
        throw xS instanceof WebAssembly.RuntimeError && (iS = SS), SS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);