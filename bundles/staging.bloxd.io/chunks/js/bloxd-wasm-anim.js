export const id = 5;
export const ids = [5];
export const modules = {
  42609: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_anim_bg.69aee2517e6a8bb5cb56.wasm"
  },
  42606: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BloxdAnimWasmError: () => XU,
      compileAnimationPackInWasm: () => SU
    });
    var tU = {};

    function pU(UU, RU, gU, tU, pU, EU) {
      const PU = WU(UU, oU.M6NU),
        TU = ZU,
        qU = WU(RU, oU.M6NU),
        KU = ZU,
        cU = WU(gU, oU.M6NU),
        GU = ZU,
        jU = WU(tU, oU.M6NU),
        CU = ZU,
        hU = WU(pU, oU.M6NU),
        QU = ZU;
      var fU = eU(EU) ? 0 : function(UU, RU) {
          const gU = RU(1 * UU.length, 1) >>> 0;
          return uU().set(UU, gU / 1), ZU = UU.length, gU
        }(EU, oU.M6NU),
        mU = ZU;
      const IU = oU.RO0F(PU, TU, qU, KU, cU, GU, jU, CU, hU, QU, fU, mU);
      if (IU[3]) throw xU(IU[2]);
      var JU, wU, nU = (JU = IU[0], wU = IU[1], JU >>>= 0, uU().subarray(JU / 1, JU / 1 + wU)).slice();
      return oU.igu9(IU[0], 1 * IU[1], 1), nU
    }

    function EU(UU, RU) {
      const gU = fU(UU, oU.M6NU, oU.jtdZ),
        tU = ZU,
        pU = oU.qNKf(gU, tU, RU);
      if (pU[1]) throw xU(pU[0])
    }

    function PU() {
      oU.IAHc()
    }

    function TU() {
      return {
        __proto__: null,
        MOVI: {
          __proto__: null,
          hFCp: function(UU, RU) {
            return qU(Error(GU(UU, RU)))
          },
          b2Dn: function(UU, RU) {
            const gU = CU(RU),
              tU = "string" === typeof gU ? gU : void 0;
            var pU = eU(tU) ? 0 : fU(tU, oU.M6NU, oU.jtdZ),
              EU = ZU;
            cU().setInt32(UU + 4, EU, !0), cU().setInt32(UU + 0, pU, !0)
          },
          aYXF: function(UU, RU) {
            throw new Error(GU(UU, RU))
          },
          MsUi: function(UU, RU) {
            console.error(GU(UU, RU))
          },
          c4ZH: function(UU) {
            xU(UU)
          }
        }
      }
    }

    function qU(UU) {
      QU === hU.length && hU.push(hU.length + 1);
      const RU = QU;
      return QU = hU[RU], hU[RU] = UU, RU
    }
    gU.r(tU), gU.d(tU, {
      TPU: () => pU,
      Nc: () => EU,
      default: () => BU,
      initSync: () => YU,
      lc: () => PU
    });
    let KU = null;

    function cU() {
      return (null === KU || !0 === KU.buffer.detached || void 0 === KU.buffer.detached && KU.buffer !== oU.memory.buffer) && (KU = new DataView(oU.memory.buffer)), KU
    }

    function GU(UU, RU) {
      return function(UU, RU) {
        JU += RU, JU >= IU && (mU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mU.decode(), JU = RU);
        return mU.decode(uU().subarray(UU, UU + RU))
      }(UU >>> 0, RU)
    }
    let jU = null;

    function uU() {
      return null !== jU && 0 !== jU.byteLength || (jU = new Uint8Array(oU.memory.buffer)), jU
    }

    function CU(UU) {
      return hU[UU]
    }
    let hU = new Array(1024).fill(void 0);
    hU.push(void 0, null, !0, !1);
    let QU = hU.length;

    function eU(UU) {
      return void 0 === UU || null === UU
    }

    function WU(UU, RU) {
      const gU = RU(4 * UU.length, 4) >>> 0,
        tU = cU();
      for (let pU = 0; pU < UU.length; pU++) tU.setUint32(gU + 4 * pU, qU(UU[pU]), !0);
      return ZU = UU.length, gU
    }

    function fU(UU, RU, gU) {
      if (void 0 === gU) {
        const gU = wU.encode(UU),
          tU = RU(gU.length, 1) >>> 0;
        return uU().subarray(tU, tU + gU.length).set(gU), ZU = gU.length, tU
      }
      let tU = UU.length,
        pU = RU(tU, 1) >>> 0;
      const EU = uU();
      let PU = 0;
      for (; PU < tU; PU++) {
        const RU = UU.charCodeAt(PU);
        if (RU > 127) break;
        EU[pU + PU] = RU
      }
      if (PU !== tU) {
        0 !== PU && (UU = UU.slice(PU)), pU = gU(pU, tU, tU = PU + 3 * UU.length, 1) >>> 0;
        const RU = uU().subarray(pU + PU, pU + tU);
        PU += wU.encodeInto(UU, RU).written, pU = gU(pU, tU, PU, 1) >>> 0
      }
      return ZU = PU, pU
    }

    function xU(UU) {
      const RU = CU(UU);
      return function(UU) {
        UU < 1028 || (hU[UU] = QU, QU = UU)
      }(UU), RU
    }
    let mU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mU.decode();
    const IU = 2146435072;
    let JU = 0;
    const wU = new TextEncoder;
    "encodeInto" in wU || (wU.encodeInto = function(UU, RU) {
      const gU = wU.encode(UU);
      return RU.set(gU), {
        read: UU.length,
        written: gU.length
      }
    });
    let nU, bU, oU, ZU = 0;

    function aU(UU, RU) {
      return bU = UU, oU = UU.exports, nU = RU, KU = null, jU = null, oU.WQEf(), oU
    }

    function YU(UU) {
      if (void 0 !== oU) return oU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RU = TU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return aU(new WebAssembly.Instance(UU, RU), UU)
    }
    async function BU(UU) {
      if (void 0 !== oU) return oU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RU = TU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: gU,
        module: tU
      } = await async function(UU, RU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, RU)
          } catch (gU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw gU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gU)
          }
          const tU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(tU, RU)
        } {
          const gU = await WebAssembly.instantiate(UU, RU);
          return gU instanceof WebAssembly.Instance ? {
            instance: gU,
            module: UU
          } : gU
        }
      }(await UU, RU);
      return aU(gU, tU)
    }
    var VU = gU(3377),
      rU = gU(6297);
    class XU extends Error {
      stage;
      constructor(UU, RU) {
        super((0, VU.z)(UU, RU), {
          cause: RU
        }), this.name = "BloxdAnimWasmError", this.stage = UU
      }
    }
    let vU = null,
      dU = null;

    function HU() {
      if (dU) throw dU
    }
    async function SU(UU, RU, pU) {
      HU();
      const EU = await (vU ??= (async () => {
        let UU;
        try {
          UU = await (0, VU.D)(new gU.U(gU(42609)), (0, rU.b)("bloxd_wasm_anim"))
        } catch (RU) {
          throw new XU((0, VU.K)(RU), RU)
        }
        try {
          await BU({
            module_or_path: UU
          })
        } catch (RU) {
          throw new XU("instantiate", RU)
        }
        return tU
      })(), vU.catch((() => {
        vU = null
      })), vU);
      HU();
      try {
        return EU.TPU(Object.entries(UU).flat(), [...RU.mobTypes], [...RU.vehicleTypes], [...RU.mobAiStates], [...RU.playerPoses], "builtIns" in pU ? pU.builtIns : void 0)
      } catch (PU) {
        const UU = new XU("call", PU);
        throw PU instanceof WebAssembly.RuntimeError && (dU = UU), UU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);