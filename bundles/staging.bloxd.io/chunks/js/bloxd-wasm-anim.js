export const id = 5;
export const ids = [5];
export const modules = {
  43075: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_anim_bg.ee427ae85608d3954ac4.wasm"
  },
  43073: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BloxdAnimWasmError: () => jG,
      compileAnimationPackInWasm: () => sG
    });
    var wG = {};

    function SG(GG, bG, ZG, wG, SG, LG) {
      const yG = rG(GG, mG.YpXY),
        kG = IG,
        UG = rG(bG, mG.YpXY),
        YG = IG,
        VG = rG(ZG, mG.YpXY),
        pG = IG,
        fG = rG(wG, mG.YpXY),
        KG = IG,
        hG = rG(SG, mG.YpXY),
        dG = IG;
      var zG = JG(LG) ? 0 : function(GG, bG) {
          const ZG = bG(1 * GG.length, 1) >>> 0;
          return QG().set(GG, ZG / 1), IG = GG.length, ZG
        }(LG, mG.YpXY),
        oG = IG;
      const XG = mG.adFy(yG, kG, UG, YG, VG, pG, fG, KG, hG, dG, zG, oG);
      if (XG[3]) throw EG(XG[2]);
      var uG, iG, CG = (uG = XG[0], iG = XG[1], uG >>>= 0, QG().subarray(uG / 1, uG / 1 + iG)).slice();
      return mG.tlWo(XG[0], 1 * XG[1], 1), CG
    }

    function LG(GG, bG) {
      const ZG = zG(GG, mG.YpXY, mG.x7sh),
        wG = IG,
        SG = mG.pMoE(ZG, wG, bG);
      if (SG[1]) throw EG(SG[0])
    }

    function yG() {
      mG.gMm3()
    }

    function kG() {
      return {
        __proto__: null,
        s11N: {
          __proto__: null,
          eN3c: function(GG, bG) {
            return UG(Error(pG(GG, bG)))
          },
          hq3D: function(GG, bG) {
            const ZG = KG(bG),
              wG = "string" === typeof ZG ? ZG : void 0;
            var SG = JG(wG) ? 0 : zG(wG, mG.YpXY, mG.x7sh),
              LG = IG;
            VG().setInt32(GG + 4, LG, !0), VG().setInt32(GG + 0, SG, !0)
          },
          ZnEp: function(GG, bG) {
            throw new Error(pG(GG, bG))
          },
          n9In: function(GG, bG) {
            console.error(pG(GG, bG))
          },
          rm7o: function(GG) {
            EG(GG)
          }
        }
      }
    }

    function UG(GG) {
      dG === hG.length && hG.push(hG.length + 1);
      const bG = dG;
      return dG = hG[bG], hG[bG] = GG, bG
    }
    ZG.r(wG), ZG.d(wG, {
      xyG: () => SG,
      BV: () => LG,
      default: () => aG,
      initSync: () => vG,
      Gp: () => yG
    });
    let YG = null;

    function VG() {
      return null !== YG && YG.buffer === mG.memory.buffer || (YG = new DataView(mG.memory.buffer)), YG
    }

    function pG(GG, bG) {
      return function(GG, bG) {
        uG += bG, uG >= XG && (oG = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), oG.decode(), uG = bG);
        return oG.decode(QG().subarray(GG, GG + bG))
      }(GG >>> 0, bG)
    }
    let fG = null;

    function QG() {
      return null !== fG && 0 !== fG.byteLength || (fG = new Uint8Array(mG.memory.buffer)), fG
    }

    function KG(GG) {
      return hG[GG]
    }
    let hG = new Array(1024).fill(void 0);
    hG.push(void 0, null, !0, !1);
    let dG = hG.length;

    function JG(GG) {
      return void 0 === GG || null === GG
    }

    function rG(GG, bG) {
      const ZG = bG(4 * GG.length, 4) >>> 0,
        wG = VG();
      for (let SG = 0; SG < GG.length; SG++) wG.setUint32(ZG + 4 * SG, UG(GG[SG]), !0);
      return IG = GG.length, ZG
    }

    function zG(GG, bG, ZG) {
      if (void 0 === ZG) {
        const ZG = iG.encode(GG),
          wG = bG(ZG.length, 1) >>> 0;
        return QG().subarray(wG, wG + ZG.length).set(ZG), IG = ZG.length, wG
      }
      let wG = GG.length,
        SG = bG(wG, 1) >>> 0;
      const LG = QG();
      let yG = 0;
      for (; yG < wG; yG++) {
        const bG = GG.charCodeAt(yG);
        if (bG > 127) break;
        LG[SG + yG] = bG
      }
      if (yG !== wG) {
        0 !== yG && (GG = GG.slice(yG)), SG = ZG(SG, wG, wG = yG + 3 * GG.length, 1) >>> 0;
        const bG = QG().subarray(SG + yG, SG + wG);
        yG += iG.encodeInto(GG, bG).written, SG = ZG(SG, wG, yG, 1) >>> 0
      }
      return IG = yG, SG
    }

    function EG(GG) {
      const bG = KG(GG);
      return function(GG) {
        GG < 1028 || (hG[GG] = dG, dG = GG)
      }(GG), bG
    }
    let oG = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    oG.decode();
    const XG = 2146435072;
    let uG = 0;
    const iG = new TextEncoder;
    "encodeInto" in iG || (iG.encodeInto = function(GG, bG) {
      const ZG = iG.encode(GG);
      return bG.set(ZG), {
        read: GG.length,
        written: ZG.length
      }
    });
    let CG, WG, mG, IG = 0;

    function FG(GG, bG) {
      return WG = GG, mG = GG.exports, CG = bG, YG = null, fG = null, mG.HQKJ(), mG
    }

    function vG(GG) {
      if (void 0 !== mG) return mG;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module: GG
      } = GG) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bG = kG();
      GG instanceof WebAssembly.Module || (GG = new WebAssembly.Module(GG));
      return FG(new WebAssembly.Instance(GG, bG), GG)
    }
    async function aG(GG) {
      if (void 0 !== mG) return mG;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module_or_path: GG
      } = GG) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bG = kG();
      ("string" === typeof GG || "function" === typeof Request && GG instanceof Request || "function" === typeof URL && GG instanceof URL) && (GG = fetch(GG));
      const {
        instance: ZG,
        module: wG
      } = await async function(GG, bG) {
        if ("function" === typeof Response && GG instanceof Response) {
          if (!GG.ok) throw new Error(`failed to fetch Wasm: ${GG.status} ${GG.statusText} fetching '${GG.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(GG, bG)
          } catch (ZG) {
            if (! function(GG) {
                switch (GG) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(GG.type) || "application/wasm" === GG.headers.get("Content-Type")) throw ZG;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZG)
          }
          const wG = await GG.arrayBuffer();
          return await WebAssembly.instantiate(wG, bG)
        } {
          const ZG = await WebAssembly.instantiate(GG, bG);
          return ZG instanceof WebAssembly.Instance ? {
            instance: ZG,
            module: GG
          } : ZG
        }
      }(await GG, bG);
      return FG(ZG, wG)
    }
    var cG = ZG(2872),
      lG = ZG(6617);
    class jG extends Error {
      stage;
      constructor(GG, bG) {
        super((0, cG.D)(GG, bG), {
          cause: bG
        }), this.name = "BloxdAnimWasmError", this.stage = GG
      }
    }
    let PG = null,
      MG = null;

    function AG() {
      if (MG) throw MG
    }
    async function sG(GG, bG, SG) {
      AG();
      const LG = await (PG ??= (async () => {
        let GG;
        try {
          GG = await (0, cG.G)(new ZG.U(ZG(43075)), (0, lG.e)("bloxd_wasm_anim"))
        } catch (bG) {
          throw new jG((0, cG.L)(bG), bG)
        }
        try {
          await aG({
            module_or_path: GG
          })
        } catch (bG) {
          throw new jG("instantiate", bG)
        }
        return wG
      })(), PG.catch((() => {
        PG = null
      })), PG);
      AG();
      try {
        return LG.xyG(Object.entries(GG).flat(), [...bG.mobTypes], [...bG.vehicleTypes], [...bG.mobAiStates], [...bG.playerPoses], "builtIns" in SG ? SG.builtIns : void 0)
      } catch (yG) {
        const GG = new jG("call", yG);
        throw yG instanceof WebAssembly.RuntimeError && (MG = GG), GG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);