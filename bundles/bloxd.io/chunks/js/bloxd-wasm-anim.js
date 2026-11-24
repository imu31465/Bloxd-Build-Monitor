export const id = 5;
export const ids = [5];
export const modules = {
  42501: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_anim_bg.2be4d1788048e763f3b1.wasm"
  },
  42499: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BloxdAnimWasmError: () => iD,
      compileAnimationPackInWasm: () => ZD
    });
    var pD = {};

    function sD(DD, zD, wD, pD, sD, KD) {
      const rD = nD(DD, CD.UmW6),
        LD = xD,
        cD = nD(zD, CD.UmW6),
        gD = xD,
        RD = nD(wD, CD.UmW6),
        AD = xD,
        UD = nD(pD, CD.UmW6),
        ID = xD,
        BD = nD(sD, CD.UmW6),
        GD = xD;
      var MD = hD(KD) ? 0 : function(DD, zD) {
          const wD = zD(1 * DD.length, 1) >>> 0;
          return fD().set(DD, wD / 1), xD = DD.length, wD
        }(KD, CD.UmW6),
        JD = xD;
      const ED = CD.orBx(rD, LD, cD, gD, RD, AD, UD, ID, BD, GD, MD, JD);
      if (ED[3]) throw OD(ED[2]);
      var QD, XD, VD = (QD = ED[0], XD = ED[1], QD >>>= 0, fD().subarray(QD / 1, QD / 1 + XD)).slice();
      return CD.f0Ov(ED[0], 1 * ED[1], 1), VD
    }

    function KD(DD, zD) {
      const wD = MD(DD, CD.UmW6, CD.OxYh),
        pD = xD,
        sD = CD.kl8f(wD, pD, zD);
      if (sD[1]) throw OD(sD[0])
    }

    function rD() {
      CD.EdYV()
    }

    function LD() {
      return {
        __proto__: null,
        Ke6A: {
          __proto__: null,
          zf0p: function(DD, zD) {
            return cD(Error(AD(DD, zD)))
          },
          t4rI: function(DD, zD) {
            const wD = ID(zD),
              pD = "string" === typeof wD ? wD : void 0;
            var sD = hD(pD) ? 0 : MD(pD, CD.UmW6, CD.OxYh),
              KD = xD;
            RD().setInt32(DD + 4, KD, !0), RD().setInt32(DD + 0, sD, !0)
          },
          CWE0: function(DD, zD) {
            throw new Error(AD(DD, zD))
          },
          kgwC: function(DD, zD) {
            console.error(AD(DD, zD))
          },
          mLmm: function(DD) {
            OD(DD)
          }
        }
      }
    }

    function cD(DD) {
      GD === BD.length && BD.push(BD.length + 1);
      const zD = GD;
      return GD = BD[zD], BD[zD] = DD, zD
    }
    wD.r(pD), wD.d(pD, {
      zLD: () => sD,
      UA: () => KD,
      default: () => jD,
      initSync: () => bD,
      fA: () => rD
    });
    let gD = null;

    function RD() {
      return null !== gD && gD.buffer === CD.memory.buffer || (gD = new DataView(CD.memory.buffer)), gD
    }

    function AD(DD, zD) {
      return function(DD, zD) {
        QD += zD, QD >= ED && (JD = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), JD.decode(), QD = zD);
        return JD.decode(fD().subarray(DD, DD + zD))
      }(DD >>> 0, zD)
    }
    let UD = null;

    function fD() {
      return null !== UD && 0 !== UD.byteLength || (UD = new Uint8Array(CD.memory.buffer)), UD
    }

    function ID(DD) {
      return BD[DD]
    }
    let BD = new Array(1024).fill(void 0);
    BD.push(void 0, null, !0, !1);
    let GD = BD.length;

    function hD(DD) {
      return void 0 === DD || null === DD
    }

    function nD(DD, zD) {
      const wD = zD(4 * DD.length, 4) >>> 0,
        pD = RD();
      for (let sD = 0; sD < DD.length; sD++) pD.setUint32(wD + 4 * sD, cD(DD[sD]), !0);
      return xD = DD.length, wD
    }

    function MD(DD, zD, wD) {
      if (void 0 === wD) {
        const wD = XD.encode(DD),
          pD = zD(wD.length, 1) >>> 0;
        return fD().subarray(pD, pD + wD.length).set(wD), xD = wD.length, pD
      }
      let pD = DD.length,
        sD = zD(pD, 1) >>> 0;
      const KD = fD();
      let rD = 0;
      for (; rD < pD; rD++) {
        const zD = DD.charCodeAt(rD);
        if (zD > 127) break;
        KD[sD + rD] = zD
      }
      if (rD !== pD) {
        0 !== rD && (DD = DD.slice(rD)), sD = wD(sD, pD, pD = rD + 3 * DD.length, 1) >>> 0;
        const zD = fD().subarray(sD + rD, sD + pD);
        rD += XD.encodeInto(DD, zD).written, sD = wD(sD, pD, rD, 1) >>> 0
      }
      return xD = rD, sD
    }

    function OD(DD) {
      const zD = ID(DD);
      return function(DD) {
        DD < 1028 || (BD[DD] = GD, GD = DD)
      }(DD), zD
    }
    let JD = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    JD.decode();
    const ED = 2146435072;
    let QD = 0;
    const XD = new TextEncoder;
    "encodeInto" in XD || (XD.encodeInto = function(DD, zD) {
      const wD = XD.encode(DD);
      return zD.set(wD), {
        read: DD.length,
        written: wD.length
      }
    });
    let VD, PD, CD, xD = 0;

    function TD(DD, zD) {
      return PD = DD, CD = DD.exports, VD = zD, gD = null, UD = null, CD.INlW(), CD
    }

    function bD(DD) {
      if (void 0 !== CD) return CD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zD = LD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return TD(new WebAssembly.Instance(DD, zD), DD)
    }
    async function jD(DD) {
      if (void 0 !== CD) return CD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zD = LD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: wD,
        module: pD
      } = await async function(DD, zD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, zD)
          } catch (wD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw wD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wD)
          }
          const pD = await DD.arrayBuffer();
          return await WebAssembly.instantiate(pD, zD)
        } {
          const wD = await WebAssembly.instantiate(DD, zD);
          return wD instanceof WebAssembly.Instance ? {
            instance: wD,
            module: DD
          } : wD
        }
      }(await DD, zD);
      return TD(wD, pD)
    }
    var dD = wD(2868),
      SD = wD(6653);
    class iD extends Error {
      stage;
      constructor(DD, zD) {
        super((0, dD.A)(DD, zD), {
          cause: zD
        }), this.name = "BloxdAnimWasmError", this.stage = DD
      }
    }
    let lD = null,
      WD = null;

    function ND() {
      if (WD) throw WD
    }
    async function ZD(DD, zD, sD) {
      ND();
      const KD = await (lD ??= (async () => {
        let DD;
        try {
          DD = await (0, dD.B)(new wD.U(wD(42501)), (0, SD.d)("bloxd_wasm_anim"))
        } catch (zD) {
          throw new iD((0, dD.G)(zD), zD)
        }
        try {
          await jD({
            module_or_path: DD
          })
        } catch (zD) {
          throw new iD("instantiate", zD)
        }
        return pD
      })(), lD.catch((() => {
        lD = null
      })), lD);
      ND();
      try {
        return KD.zLD(Object.entries(DD).flat(), [...zD.mobTypes], [...zD.vehicleTypes], [...zD.mobAiStates], [...zD.playerPoses], "builtIns" in sD ? sD.builtIns : void 0)
      } catch (rD) {
        const DD = new iD("call", rD);
        throw rD instanceof WebAssembly.RuntimeError && (WD = DD), DD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);