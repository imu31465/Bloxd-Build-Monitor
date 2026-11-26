export const id = 5;
export const ids = [5];
export const modules = {
  54523: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_anim_bg.e5e945593b3735e46b1d.wasm"
  },
  54514: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BloxdAnimWasmError: () => eH,
      compileAnimationPackInWasm: () => RH
    });
    var AH = {};

    function rH(HH, BH, LH, AH, rH, SH) {
      const hH = xH(HH, mH.fj4T),
        tH = oH,
        zH = xH(BH, mH.fj4T),
        CH = oH,
        EH = xH(LH, mH.fj4T),
        XH = oH,
        GH = xH(AH, mH.fj4T),
        uH = oH,
        QH = xH(rH, mH.fj4T),
        WH = oH;
      var vH = MH(SH) ? 0 : function(HH, BH) {
          const LH = BH(1 * HH.length, 1) >>> 0;
          return YH().set(HH, LH / 1), oH = HH.length, LH
        }(SH, mH.fj4T),
        TH = oH;
      const UH = mH.Qfkv(hH, tH, zH, CH, EH, XH, GH, uH, QH, WH, vH, TH);
      if (UH[3]) throw PH(UH[2]);
      var VH, OH, bH = (VH = UH[0], OH = UH[1], VH >>>= 0, YH().subarray(VH / 1, VH / 1 + OH)).slice();
      return mH.VmYL(UH[0], 1 * UH[1], 1), bH
    }

    function SH(HH, BH) {
      const LH = vH(HH, mH.fj4T, mH.QyXH),
        AH = oH,
        rH = mH.orv7(LH, AH, BH);
      if (rH[1]) throw PH(rH[0])
    }

    function hH() {
      mH.fUtg()
    }

    function tH() {
      return {
        __proto__: null,
        phGC: {
          __proto__: null,
          ZrJ5: function(HH, BH) {
            return zH(Error(XH(HH, BH)))
          },
          N2Ik: function(HH, BH) {
            const LH = uH(BH),
              AH = "string" === typeof LH ? LH : void 0;
            var rH = MH(AH) ? 0 : vH(AH, mH.fj4T, mH.QyXH),
              SH = oH;
            EH().setInt32(HH + 4, SH, !0), EH().setInt32(HH + 0, rH, !0)
          },
          v7cC: function(HH, BH) {
            throw new Error(XH(HH, BH))
          },
          tMGH: function(HH, BH) {
            console.error(XH(HH, BH))
          },
          NyhK: function(HH) {
            PH(HH)
          }
        }
      }
    }

    function zH(HH) {
      WH === QH.length && QH.push(QH.length + 1);
      const BH = WH;
      return WH = QH[BH], QH[BH] = HH, BH
    }
    LH.r(AH), LH.d(AH, {
      DtH: () => rH,
      qt: () => SH,
      default: () => lH,
      initSync: () => fH,
      LC: () => hH
    });
    let CH = null;

    function EH() {
      return null !== CH && CH.buffer === mH.memory.buffer || (CH = new DataView(mH.memory.buffer)), CH
    }

    function XH(HH, BH) {
      return function(HH, BH) {
        VH += BH, VH >= UH && (TH = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), TH.decode(), VH = BH);
        return TH.decode(YH().subarray(HH, HH + BH))
      }(HH >>> 0, BH)
    }
    let GH = null;

    function YH() {
      return null !== GH && 0 !== GH.byteLength || (GH = new Uint8Array(mH.memory.buffer)), GH
    }

    function uH(HH) {
      return QH[HH]
    }
    let QH = new Array(1024).fill(void 0);
    QH.push(void 0, null, !0, !1);
    let WH = QH.length;

    function MH(HH) {
      return void 0 === HH || null === HH
    }

    function xH(HH, BH) {
      const LH = BH(4 * HH.length, 4) >>> 0,
        AH = EH();
      for (let rH = 0; rH < HH.length; rH++) AH.setUint32(LH + 4 * rH, zH(HH[rH]), !0);
      return oH = HH.length, LH
    }

    function vH(HH, BH, LH) {
      if (void 0 === LH) {
        const LH = OH.encode(HH),
          AH = BH(LH.length, 1) >>> 0;
        return YH().subarray(AH, AH + LH.length).set(LH), oH = LH.length, AH
      }
      let AH = HH.length,
        rH = BH(AH, 1) >>> 0;
      const SH = YH();
      let hH = 0;
      for (; hH < AH; hH++) {
        const BH = HH.charCodeAt(hH);
        if (BH > 127) break;
        SH[rH + hH] = BH
      }
      if (hH !== AH) {
        0 !== hH && (HH = HH.slice(hH)), rH = LH(rH, AH, AH = hH + 3 * HH.length, 1) >>> 0;
        const BH = YH().subarray(rH + hH, rH + AH);
        hH += OH.encodeInto(HH, BH).written, rH = LH(rH, AH, hH, 1) >>> 0
      }
      return oH = hH, rH
    }

    function PH(HH) {
      const BH = uH(HH);
      return function(HH) {
        HH < 1028 || (QH[HH] = WH, WH = HH)
      }(HH), BH
    }
    let TH = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    TH.decode();
    const UH = 2146435072;
    let VH = 0;
    const OH = new TextEncoder;
    "encodeInto" in OH || (OH.encodeInto = function(HH, BH) {
      const LH = OH.encode(HH);
      return BH.set(LH), {
        read: HH.length,
        written: LH.length
      }
    });
    let bH, kH, mH, oH = 0;

    function IH(HH, BH) {
      return kH = HH, mH = HH.exports, bH = BH, CH = null, GH = null, mH.UarT(), mH
    }

    function fH(HH) {
      if (void 0 !== mH) return mH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module: HH
      } = HH) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const BH = tH();
      HH instanceof WebAssembly.Module || (HH = new WebAssembly.Module(HH));
      return IH(new WebAssembly.Instance(HH, BH), HH)
    }
    async function lH(HH) {
      if (void 0 !== mH) return mH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module_or_path: HH
      } = HH) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const BH = tH();
      ("string" === typeof HH || "function" === typeof Request && HH instanceof Request || "function" === typeof URL && HH instanceof URL) && (HH = fetch(HH));
      const {
        instance: LH,
        module: AH
      } = await async function(HH, BH) {
        if ("function" === typeof Response && HH instanceof Response) {
          if (!HH.ok) throw new Error(`failed to fetch Wasm: ${HH.status} ${HH.statusText} fetching '${HH.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(HH, BH)
          } catch (LH) {
            if (! function(HH) {
                switch (HH) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(HH.type) || "application/wasm" === HH.headers.get("Content-Type")) throw LH;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", LH)
          }
          const AH = await HH.arrayBuffer();
          return await WebAssembly.instantiate(AH, BH)
        } {
          const LH = await WebAssembly.instantiate(HH, BH);
          return LH instanceof WebAssembly.Instance ? {
            instance: LH,
            module: HH
          } : LH
        }
      }(await HH, BH);
      return IH(LH, AH)
    }
    var KH = LH(3171),
      cH = LH(7172);
    class eH extends Error {
      stage;
      constructor(HH, BH) {
        super((0, KH.F)(HH, BH), {
          cause: BH
        }), this.name = "BloxdAnimWasmError", this.stage = HH
      }
    }
    let qH = null,
      gH = null;

    function NH() {
      if (gH) throw gH
    }
    async function RH(HH, BH, rH) {
      NH();
      const SH = await (qH ??= (async () => {
        let HH;
        try {
          HH = await (0, KH.J)(new LH.U(LH(54523)), (0, cH.c)("bloxd_wasm_anim"))
        } catch (BH) {
          throw new eH((0, KH.O)(BH), BH)
        }
        try {
          await lH({
            module_or_path: HH
          })
        } catch (BH) {
          throw new eH("instantiate", BH)
        }
        return AH
      })(), qH.catch((() => {
        qH = null
      })), qH);
      NH();
      try {
        return SH.DtH(Object.entries(HH).flat(), [...BH.mobTypes], [...BH.vehicleTypes], [...BH.mobAiStates], [...BH.playerPoses], "builtIns" in rH ? rH.builtIns : void 0)
      } catch (hH) {
        const HH = new eH("call", hH);
        throw hH instanceof WebAssembly.RuntimeError && (gH = HH), HH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);