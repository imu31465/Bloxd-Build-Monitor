export const id = 5;
export const ids = [5];
export const modules = {
  42431: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_anim_bg.e53b529390d5e67a1dd3.wasm"
  },
  42427: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BloxdAnimWasmError: () => jD,
      compileAnimationPackInWasm: () => GD
    });
    var ID = {};

    function pD(DD, CD, cD, ID, pD, iD) {
      const fD = ND(DD, xD.pVL0),
        bD = qD,
        QD = ND(CD, xD.pVL0),
        wD = qD,
        SD = ND(cD, xD.pVL0),
        BD = qD,
        yD = ND(ID, xD.pVL0),
        tD = qD,
        ZD = ND(pD, xD.pVL0),
        oD = qD;
      var gD = vD(iD) ? 0 : function(DD, CD) {
          const cD = CD(1 * DD.length, 1) >>> 0;
          return MD().set(DD, cD / 1), qD = DD.length, cD
        }(iD, xD.pVL0),
        mD = qD;
      const nD = xD.ecNx(fD, bD, QD, wD, SD, BD, yD, tD, ZD, oD, gD, mD);
      if (nD[3]) throw XD(nD[2]);
      var OD, PD, HD = (OD = nD[0], PD = nD[1], OD >>>= 0, MD().subarray(OD / 1, OD / 1 + PD)).slice();
      return xD.g1XR(nD[0], 1 * nD[1], 1), HD
    }

    function iD(DD, CD) {
      const cD = gD(DD, xD.pVL0, xD.s7MM),
        ID = qD,
        pD = xD.KQ8H(cD, ID, CD);
      if (pD[1]) throw XD(pD[0])
    }

    function fD() {
      xD.n24Y()
    }

    function bD() {
      return {
        __proto__: null,
        NCmx: {
          __proto__: null,
          iWNc: function(DD, CD) {
            return QD(Error(BD(DD, CD)))
          },
          C98P: function(DD, CD) {
            const cD = tD(CD),
              ID = "string" === typeof cD ? cD : void 0;
            var pD = vD(ID) ? 0 : gD(ID, xD.pVL0, xD.s7MM),
              iD = qD;
            SD().setInt32(DD + 4, iD, !0), SD().setInt32(DD + 0, pD, !0)
          },
          s4Xo: function(DD, CD) {
            throw new Error(BD(DD, CD))
          },
          JxOI: function(DD, CD) {
            console.error(BD(DD, CD))
          },
          J5ZE: function(DD) {
            XD(DD)
          }
        }
      }
    }

    function QD(DD) {
      oD === ZD.length && ZD.push(ZD.length + 1);
      const CD = oD;
      return oD = ZD[CD], ZD[CD] = DD, CD
    }
    cD.r(ID), cD.d(ID, {
      ffD: () => pD,
      NB: () => iD,
      default: () => aD,
      initSync: () => KD,
      gB: () => fD
    });
    let wD = null;

    function SD() {
      return (null === wD || !0 === wD.buffer.detached || void 0 === wD.buffer.detached && wD.buffer !== xD.memory.buffer) && (wD = new DataView(xD.memory.buffer)), wD
    }

    function BD(DD, CD) {
      return function(DD, CD) {
        OD += CD, OD >= nD && (mD = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mD.decode(), OD = CD);
        return mD.decode(MD().subarray(DD, DD + CD))
      }(DD >>> 0, CD)
    }
    let yD = null;

    function MD() {
      return null !== yD && 0 !== yD.byteLength || (yD = new Uint8Array(xD.memory.buffer)), yD
    }

    function tD(DD) {
      return ZD[DD]
    }
    let ZD = new Array(1024).fill(void 0);
    ZD.push(void 0, null, !0, !1);
    let oD = ZD.length;

    function vD(DD) {
      return void 0 === DD || null === DD
    }

    function ND(DD, CD) {
      const cD = CD(4 * DD.length, 4) >>> 0,
        ID = SD();
      for (let pD = 0; pD < DD.length; pD++) ID.setUint32(cD + 4 * pD, QD(DD[pD]), !0);
      return qD = DD.length, cD
    }

    function gD(DD, CD, cD) {
      if (void 0 === cD) {
        const cD = PD.encode(DD),
          ID = CD(cD.length, 1) >>> 0;
        return MD().subarray(ID, ID + cD.length).set(cD), qD = cD.length, ID
      }
      let ID = DD.length,
        pD = CD(ID, 1) >>> 0;
      const iD = MD();
      let fD = 0;
      for (; fD < ID; fD++) {
        const CD = DD.charCodeAt(fD);
        if (CD > 127) break;
        iD[pD + fD] = CD
      }
      if (fD !== ID) {
        0 !== fD && (DD = DD.slice(fD)), pD = cD(pD, ID, ID = fD + 3 * DD.length, 1) >>> 0;
        const CD = MD().subarray(pD + fD, pD + ID);
        fD += PD.encodeInto(DD, CD).written, pD = cD(pD, ID, fD, 1) >>> 0
      }
      return qD = fD, pD
    }

    function XD(DD) {
      const CD = tD(DD);
      return function(DD) {
        DD < 1028 || (ZD[DD] = oD, oD = DD)
      }(DD), CD
    }
    let mD = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mD.decode();
    const nD = 2146435072;
    let OD = 0;
    const PD = new TextEncoder;
    "encodeInto" in PD || (PD.encodeInto = function(DD, CD) {
      const cD = PD.encode(DD);
      return CD.set(cD), {
        read: DD.length,
        written: cD.length
      }
    });
    let HD, UD, xD, qD = 0;

    function JD(DD, CD) {
      return UD = DD, xD = DD.exports, HD = CD, wD = null, yD = null, xD.iXOA(), xD
    }

    function KD(DD) {
      if (void 0 !== xD) return xD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const CD = bD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return JD(new WebAssembly.Instance(DD, CD), DD)
    }
    async function aD(DD) {
      if (void 0 !== xD) return xD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const CD = bD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: cD,
        module: ID
      } = await async function(DD, CD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, CD)
          } catch (cD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw cD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cD)
          }
          const ID = await DD.arrayBuffer();
          return await WebAssembly.instantiate(ID, CD)
        } {
          const cD = await WebAssembly.instantiate(DD, CD);
          return cD instanceof WebAssembly.Instance ? {
            instance: cD,
            module: DD
          } : cD
        }
      }(await DD, CD);
      return JD(cD, ID)
    }
    var VD = cD(3529),
      zD = cD(6372);
    class jD extends Error {
      stage;
      constructor(DD, CD) {
        super((0, VD.D)(DD, CD), {
          cause: CD
        }), this.name = "BloxdAnimWasmError", this.stage = DD
      }
    }
    let lD = null,
      LD = null;

    function TD() {
      if (LD) throw LD
    }
    async function GD(DD, CD, pD) {
      TD();
      const iD = await (lD ??= (async () => {
        let DD;
        try {
          DD = await (0, VD.H)(new cD.U(cD(42431)), (0, zD.e)("bloxd_wasm_anim"))
        } catch (CD) {
          throw new jD((0, VD.L)(CD), CD)
        }
        try {
          await aD({
            module_or_path: DD
          })
        } catch (CD) {
          throw new jD("instantiate", CD)
        }
        return ID
      })(), lD.catch((() => {
        lD = null
      })), lD);
      TD();
      try {
        return iD.ffD(Object.entries(DD).flat(), [...CD.mobTypes], [...CD.vehicleTypes], [...CD.mobAiStates], [...CD.playerPoses], "builtIns" in pD ? pD.builtIns : void 0)
      } catch (fD) {
        const DD = new jD("call", fD);
        throw fD instanceof WebAssembly.RuntimeError && (LD = DD), DD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);