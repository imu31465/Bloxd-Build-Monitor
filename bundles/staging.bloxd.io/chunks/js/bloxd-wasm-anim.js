export const id = 5;
export const ids = [5];
export const modules = {
  42435: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_anim_bg.72dea6b87a87456a5828.wasm"
  },
  42432: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BloxdAnimWasmError: () => lC,
      compileAnimationPackInWasm: () => rC
    });
    var QC = {};

    function wC(CC, zC, ZC, QC, wC, bC) {
      const nC = GC(CC, hC.XsNz),
        fC = KC,
        oC = GC(zC, hC.XsNz),
        qC = KC,
        FC = GC(ZC, hC.XsNz),
        WC = KC,
        NC = GC(QC, hC.XsNz),
        gC = KC,
        SC = GC(wC, hC.XsNz),
        pC = KC;
      var RC = PC(bC) ? 0 : function(CC, zC) {
          const ZC = zC(1 * CC.length, 1) >>> 0;
          return MC().set(CC, ZC / 1), KC = CC.length, ZC
        }(bC, hC.XsNz),
        xC = KC;
      const JC = hC.JmIP(nC, fC, oC, qC, FC, WC, NC, gC, SC, pC, RC, xC);
      if (JC[3]) throw AC(JC[2]);
      var IC, iC, vC = (IC = JC[0], iC = JC[1], IC >>>= 0, MC().subarray(IC / 1, IC / 1 + iC)).slice();
      return hC.LnDQ(JC[0], 1 * JC[1], 1), vC
    }

    function bC(CC, zC) {
      const ZC = RC(CC, hC.XsNz, hC.l7s8),
        QC = KC,
        wC = hC.UdTS(ZC, QC, zC);
      if (wC[1]) throw AC(wC[0])
    }

    function nC() {
      hC.S3an()
    }

    function fC() {
      return {
        __proto__: null,
        OrUC: {
          __proto__: null,
          xH1Z: function(CC, zC) {
            return oC(Error(WC(CC, zC)))
          },
          I3eF: function(CC, zC) {
            const ZC = gC(zC),
              QC = "string" === typeof ZC ? ZC : void 0;
            var wC = PC(QC) ? 0 : RC(QC, hC.XsNz, hC.l7s8),
              bC = KC;
            FC().setInt32(CC + 4, bC, !0), FC().setInt32(CC + 0, wC, !0)
          },
          B5M0: function(CC, zC) {
            throw new Error(WC(CC, zC))
          },
          SICw: function(CC, zC) {
            console.error(WC(CC, zC))
          },
          Rv0u: function(CC) {
            AC(CC)
          }
        }
      }
    }

    function oC(CC) {
      pC === SC.length && SC.push(SC.length + 1);
      const zC = pC;
      return pC = SC[zC], SC[zC] = CC, zC
    }
    ZC.r(QC), ZC.d(QC, {
      hnC: () => wC,
      SW: () => bC,
      default: () => mC,
      initSync: () => dC,
      pW: () => nC
    });
    let qC = null;

    function FC() {
      return null !== qC && qC.buffer === hC.memory.buffer || (qC = new DataView(hC.memory.buffer)), qC
    }

    function WC(CC, zC) {
      return function(CC, zC) {
        IC += zC, IC >= JC && (xC = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), xC.decode(), IC = zC);
        return xC.decode(MC().subarray(CC, CC + zC))
      }(CC >>> 0, zC)
    }
    let NC = null;

    function MC() {
      return null !== NC && 0 !== NC.byteLength || (NC = new Uint8Array(hC.memory.buffer)), NC
    }

    function gC(CC) {
      return SC[CC]
    }
    let SC = new Array(1024).fill(void 0);
    SC.push(void 0, null, !0, !1);
    let pC = SC.length;

    function PC(CC) {
      return void 0 === CC || null === CC
    }

    function GC(CC, zC) {
      const ZC = zC(4 * CC.length, 4) >>> 0,
        QC = FC();
      for (let wC = 0; wC < CC.length; wC++) QC.setUint32(ZC + 4 * wC, oC(CC[wC]), !0);
      return KC = CC.length, ZC
    }

    function RC(CC, zC, ZC) {
      if (void 0 === ZC) {
        const ZC = iC.encode(CC),
          QC = zC(ZC.length, 1) >>> 0;
        return MC().subarray(QC, QC + ZC.length).set(ZC), KC = ZC.length, QC
      }
      let QC = CC.length,
        wC = zC(QC, 1) >>> 0;
      const bC = MC();
      let nC = 0;
      for (; nC < QC; nC++) {
        const zC = CC.charCodeAt(nC);
        if (zC > 127) break;
        bC[wC + nC] = zC
      }
      if (nC !== QC) {
        0 !== nC && (CC = CC.slice(nC)), wC = ZC(wC, QC, QC = nC + 3 * CC.length, 1) >>> 0;
        const zC = MC().subarray(wC + nC, wC + QC);
        nC += iC.encodeInto(CC, zC).written, wC = ZC(wC, QC, nC, 1) >>> 0
      }
      return KC = nC, wC
    }

    function AC(CC) {
      const zC = gC(CC);
      return function(CC) {
        CC < 1028 || (SC[CC] = pC, pC = CC)
      }(CC), zC
    }
    let xC = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    xC.decode();
    const JC = 2146435072;
    let IC = 0;
    const iC = new TextEncoder;
    "encodeInto" in iC || (iC.encodeInto = function(CC, zC) {
      const ZC = iC.encode(CC);
      return zC.set(ZC), {
        read: CC.length,
        written: ZC.length
      }
    });
    let vC, eC, hC, KC = 0;

    function YC(CC, zC) {
      return eC = CC, hC = CC.exports, vC = zC, qC = null, NC = null, hC.B1Kp(), hC
    }

    function dC(CC) {
      if (void 0 !== hC) return hC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module: CC
      } = CC) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zC = fC();
      CC instanceof WebAssembly.Module || (CC = new WebAssembly.Module(CC));
      return YC(new WebAssembly.Instance(CC, zC), CC)
    }
    async function mC(CC) {
      if (void 0 !== hC) return hC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module_or_path: CC
      } = CC) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zC = fC();
      ("string" === typeof CC || "function" === typeof Request && CC instanceof Request || "function" === typeof URL && CC instanceof URL) && (CC = fetch(CC));
      const {
        instance: ZC,
        module: QC
      } = await async function(CC, zC) {
        if ("function" === typeof Response && CC instanceof Response) {
          if (!CC.ok) throw new Error(`failed to fetch Wasm: ${CC.status} ${CC.statusText} fetching '${CC.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(CC, zC)
          } catch (ZC) {
            if (! function(CC) {
                switch (CC) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(CC.type) || "application/wasm" === CC.headers.get("Content-Type")) throw ZC;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZC)
          }
          const QC = await CC.arrayBuffer();
          return await WebAssembly.instantiate(QC, zC)
        } {
          const ZC = await WebAssembly.instantiate(CC, zC);
          return ZC instanceof WebAssembly.Instance ? {
            instance: ZC,
            module: CC
          } : ZC
        }
      }(await CC, zC);
      return YC(ZC, QC)
    }
    var HC = ZC(2856),
      EC = ZC(6616);
    class lC extends Error {
      stage;
      constructor(CC, zC) {
        super((0, HC.F)(CC, zC), {
          cause: zC
        }), this.name = "BloxdAnimWasmError", this.stage = CC
      }
    }
    let XC = null,
      cC = null;

    function uC() {
      if (cC) throw cC
    }
    async function rC(CC, zC, wC) {
      uC();
      const bC = await (XC ??= (async () => {
        let CC;
        try {
          CC = await (0, HC.I)(new ZC.U(ZC(42435)), (0, EC.e)("bloxd_wasm_anim"))
        } catch (zC) {
          throw new lC((0, HC.P)(zC), zC)
        }
        try {
          await mC({
            module_or_path: CC
          })
        } catch (zC) {
          throw new lC("instantiate", zC)
        }
        return QC
      })(), XC.catch((() => {
        XC = null
      })), XC);
      uC();
      try {
        return bC.hnC(Object.entries(CC).flat(), [...zC.mobTypes], [...zC.vehicleTypes], [...zC.mobAiStates], [...zC.playerPoses], "builtIns" in wC ? wC.builtIns : void 0)
      } catch (nC) {
        const CC = new lC("call", nC);
        throw nC instanceof WebAssembly.RuntimeError && (cC = CC), CC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);