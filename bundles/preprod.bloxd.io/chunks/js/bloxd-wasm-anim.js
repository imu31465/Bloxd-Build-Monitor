export const id = 5;
export const ids = [5];
export const modules = {
  53719: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_anim_bg.ee7886aed49a713814db.wasm"
  },
  53713: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BloxdAnimWasmError: () => uU,
      compileAnimationPackInWasm: () => MU
    });
    var cU = {};

    function yU(UU, XU, zU, cU, yU, QU) {
      const AU = kU(UU, eU.SEUw),
        FU = CU,
        oU = kU(XU, eU.SEUw),
        DU = CU,
        EU = kU(zU, eU.SEUw),
        YU = CU,
        NU = kU(cU, eU.SEUw),
        pU = CU,
        aU = kU(yU, eU.SEUw),
        tU = CU;
      var GU = gU(QU) ? 0 : function(UU, XU) {
          const zU = XU(1 * UU.length, 1) >>> 0;
          return IU().set(UU, zU / 1), CU = UU.length, zU
        }(QU, eU.SEUw),
        ZU = CU;
      const RU = eU.ksq9(AU, FU, oU, DU, EU, YU, NU, pU, aU, tU, GU, ZU);
      if (RU[3]) throw BU(RU[2]);
      var PU, WU, dU = (PU = RU[0], WU = RU[1], PU >>>= 0, IU().subarray(PU / 1, PU / 1 + WU)).slice();
      return eU.H6L1(RU[0], 1 * RU[1], 1), dU
    }

    function QU(UU, XU) {
      const zU = GU(UU, eU.SEUw, eU.BLfe),
        cU = CU,
        yU = eU.NhqF(zU, cU, XU);
      if (yU[1]) throw BU(yU[0])
    }

    function AU() {
      eU.UqBt()
    }

    function FU() {
      return {
        __proto__: null,
        rFNH: {
          __proto__: null,
          XKDW: function(UU, XU) {
            return oU(Error(YU(UU, XU)))
          },
          J5n4: function(UU, XU) {
            const zU = pU(XU),
              cU = "string" === typeof zU ? zU : void 0;
            var yU = gU(cU) ? 0 : GU(cU, eU.SEUw, eU.BLfe),
              QU = CU;
            EU().setInt32(UU + 4, QU, !0), EU().setInt32(UU + 0, yU, !0)
          },
          WHKN: function(UU, XU) {
            throw new Error(YU(UU, XU))
          },
          genL: function(UU, XU) {
            console.error(YU(UU, XU))
          },
          fw0z: function(UU) {
            BU(UU)
          }
        }
      }
    }

    function oU(UU) {
      tU === aU.length && aU.push(aU.length + 1);
      const XU = tU;
      return tU = aU[XU], aU[XU] = UU, XU
    }
    zU.r(cU), zU.d(cU, {
      wFU: () => yU,
      FD: () => QU,
      default: () => OU,
      initSync: () => qU,
      HD: () => AU
    });
    let DU = null;

    function EU() {
      return null !== DU && DU.buffer === eU.memory.buffer || (DU = new DataView(eU.memory.buffer)), DU
    }

    function YU(UU, XU) {
      return function(UU, XU) {
        PU += XU, PU >= RU && (ZU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ZU.decode(), PU = XU);
        return ZU.decode(IU().subarray(UU, UU + XU))
      }(UU >>> 0, XU)
    }
    let NU = null;

    function IU() {
      return null !== NU && 0 !== NU.byteLength || (NU = new Uint8Array(eU.memory.buffer)), NU
    }

    function pU(UU) {
      return aU[UU]
    }
    let aU = new Array(1024).fill(void 0);
    aU.push(void 0, null, !0, !1);
    let tU = aU.length;

    function gU(UU) {
      return void 0 === UU || null === UU
    }

    function kU(UU, XU) {
      const zU = XU(4 * UU.length, 4) >>> 0,
        cU = EU();
      for (let yU = 0; yU < UU.length; yU++) cU.setUint32(zU + 4 * yU, oU(UU[yU]), !0);
      return CU = UU.length, zU
    }

    function GU(UU, XU, zU) {
      if (void 0 === zU) {
        const zU = WU.encode(UU),
          cU = XU(zU.length, 1) >>> 0;
        return IU().subarray(cU, cU + zU.length).set(zU), CU = zU.length, cU
      }
      let cU = UU.length,
        yU = XU(cU, 1) >>> 0;
      const QU = IU();
      let AU = 0;
      for (; AU < cU; AU++) {
        const XU = UU.charCodeAt(AU);
        if (XU > 127) break;
        QU[yU + AU] = XU
      }
      if (AU !== cU) {
        0 !== AU && (UU = UU.slice(AU)), yU = zU(yU, cU, cU = AU + 3 * UU.length, 1) >>> 0;
        const XU = IU().subarray(yU + AU, yU + cU);
        AU += WU.encodeInto(UU, XU).written, yU = zU(yU, cU, AU, 1) >>> 0
      }
      return CU = AU, yU
    }

    function BU(UU) {
      const XU = pU(UU);
      return function(UU) {
        UU < 1028 || (aU[UU] = tU, tU = UU)
      }(UU), XU
    }
    let ZU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ZU.decode();
    const RU = 2146435072;
    let PU = 0;
    const WU = new TextEncoder;
    "encodeInto" in WU || (WU.encodeInto = function(UU, XU) {
      const zU = WU.encode(UU);
      return XU.set(zU), {
        read: UU.length,
        written: zU.length
      }
    });
    let dU, LU, eU, CU = 0;

    function wU(UU, XU) {
      return LU = UU, eU = UU.exports, dU = XU, DU = null, NU = null, eU.TOf1(), eU
    }

    function qU(UU) {
      if (void 0 !== eU) return eU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const XU = FU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return wU(new WebAssembly.Instance(UU, XU), UU)
    }
    async function OU(UU) {
      if (void 0 !== eU) return eU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const XU = FU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: zU,
        module: cU
      } = await async function(UU, XU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, XU)
          } catch (zU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw zU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zU)
          }
          const cU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(cU, XU)
        } {
          const zU = await WebAssembly.instantiate(UU, XU);
          return zU instanceof WebAssembly.Instance ? {
            instance: zU,
            module: UU
          } : zU
        }
      }(await UU, XU);
      return wU(zU, cU)
    }
    var SU = zU(3176),
      rU = zU(7213);
    class uU extends Error {
      stage;
      constructor(UU, XU) {
        super((0, SU.J)(UU, XU), {
          cause: XU
        }), this.name = "BloxdAnimWasmError", this.stage = UU
      }
    }
    let fU = null,
      iU = null;

    function HU() {
      if (iU) throw iU
    }
    async function MU(UU, XU, yU) {
      HU();
      const QU = await (fU ??= (async () => {
        let UU;
        try {
          UU = await (0, SU.M)(new zU.U(zU(53719)), (0, rU.e)("bloxd_wasm_anim"))
        } catch (XU) {
          throw new uU((0, SU.T)(XU), XU)
        }
        try {
          await OU({
            module_or_path: UU
          })
        } catch (XU) {
          throw new uU("instantiate", XU)
        }
        return cU
      })(), fU.catch((() => {
        fU = null
      })), fU);
      HU();
      try {
        return QU.wFU(Object.entries(UU).flat(), [...XU.mobTypes], [...XU.vehicleTypes], [...XU.mobAiStates], [...XU.playerPoses], "builtIns" in yU ? yU.builtIns : void 0)
      } catch (AU) {
        const UU = new uU("call", AU);
        throw AU instanceof WebAssembly.RuntimeError && (iU = UU), UU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);