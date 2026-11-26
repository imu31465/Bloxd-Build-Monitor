export const id = 77;
export const ids = [77];
export const modules = {
  64331: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_replay_bg.7b05f87968a9d1b3a3e5.wasm"
  },
  7172: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(3171);
    const rH = {
      bloxd_wasm: () => "1a9ca3a508835437adb51fd7003f50a214824ce5852e2706a91af532afe51adc",
      bloxd_wasm_client: () => "9f302fa35bb62365f9d32f95a5401b1d28709799cd2ce60e443d8f43994a3e3d",
      bloxd_wasm_workers: () => "fea049daed4444b474b0db1a8bf4826a6e48ef50100b13d23f4bea2aa2ef7dbb",
      bloxd_wasm_models: () => "dafa53585131db414c9c059dee3ad89ee833dbd1a487c182d99120934368408f",
      bloxd_wasm_webgpu: () => "f7305e0c5434bf6438e555b6ebd02438a4b33e9ec1a95ef795555746fdd24844",
      bloxd_wasm_webgl: () => "ee0b380f26fef18564acf325d228b72d1e1361881cb2e2f9686c33d7b9b28c2e",
      bloxd_wasm_webgl1: () => "0cfbcf815fae6493c502153cc3696123db8dd68ba708a3ebe5ed4c9bdf52dd9d",
      bloxd_wasm_replay: () => "00749a68df89480806d66c2caa0106222009fc9d980e99c298088093c5266723",
      bloxd_wasm_recorder: () => "fff4e7dd116ddac14614d11c6efe68b0beab86dd32f03cf09d2d291dd715dbc1",
      bloxd_wasm_anim: () => "e06ab9bfc1a83b6498470d65996c60a55117dc9e341e17cb44260cad0fe8d434",
      bloxd_wasm_textures: () => "bea12b411e2841e721547a8f34b2e2c8d67c134acf1aabfafa9f47d2dce32aca",
      bloxd_wasm_shader_pack: () => "153845fdc736fc7d3f35302c98089348c2e3d0550da1ed6cc5e35905a2a723c3"
    };
    var SH = LH(5143);

    function hH(HH) {
      const BH = Object.prototype.hasOwnProperty.call(rH, HH) ? rH[HH]() : void 0;
      if (void 0 !== BH) return {
        sha256: BH,
        onMismatch: SH.v
      };
      throw new AH.j(`${HH} has no release digest, so this build refuses it`)
    }
  },
  64329: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      BloxdReplayWasmError: () => cH,
      loadReplayModule: () => nH,
      markReplayTrapped: () => wH,
      replayMemoryBytes: () => DH,
      unloadReplayModule: () => FH
    });
    var AH = {};
    LH.r(AH), LH.d(AH, {
      rhH: () => rH,
      atH: () => fH,
      qt: () => SH,
      default: () => IH,
      initSync: () => oH,
      LC: () => hH,
      HhH: () => tH,
      ShH: () => zH
    });
    class rH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        bH.uYfo(HH, 0)
      }
      ChH(HH, BH, LH, AH, rH, SH) {
        bH.ChlV(this.__wbg_ptr, HH, BH, LH, AH, rH, SH)
      }
      close() {
        bH.vGp7(this.__wbg_ptr)
      }
      crop(HH, BH) {
        bH.syzB(this.__wbg_ptr, HH, BH)
      }
      GhH(HH, BH) {
        bH.HtU4(this.__wbg_ptr, HH, BH)
      }
      uhH() {
        return bH.fcpY(this.__wbg_ptr) >>> 0
      }
      YhH() {
        return bH.e7AK(this.__wbg_ptr) >>> 0
      }
      QhH() {
        return bH.dAr0(this.__wbg_ptr) >>> 0
      }
      WhH() {
        return bH.QpML(this.__wbg_ptr) >>> 0
      }
      XhH(HH, BH) {
        bH.uZuP(this.__wbg_ptr, HH, BH)
      }
      constructor() {
        const HH = bH.t841();
        return this.__wbg_ptr = HH, EH.register(this, this.__wbg_ptr, this), this
      }
      open() {
        bH.vxUJ(this.__wbg_ptr)
      }
      JSH() {
        return bH.qvo7(this.__wbg_ptr) >>> 0
      }
      pause() {
        bH.G69m(this.__wbg_ptr)
      }
      play() {
        bH.TQKh(this.__wbg_ptr)
      }
      save() {
        return bH.Izgx(this.__wbg_ptr) >>> 0
      }
      MhH() {
        bH.YBV0(this.__wbg_ptr)
      }
      seek(HH, BH) {
        bH.uw6a(this.__wbg_ptr, HH, BH)
      }
      vhH(HH) {
        bH.uzNn(this.__wbg_ptr, HH)
      }
      EhH(HH, BH) {
        const LH = function(HH, BH) {
            const LH = BH(8 * HH.length, 8) >>> 0;
            return function() {
              null !== GH && 0 !== GH.byteLength || (GH = new Float64Array(bH.memory.buffer));
              return GH
            }().set(HH, LH / 8), kH = HH.length, LH
          }(BH, bH.vA9o),
          AH = kH;
        bH.OE0P(this.__wbg_ptr, HH, LH, AH)
      }
      zhH(HH, BH) {
        bH.DO8t(this.__wbg_ptr, HH, BH)
      }
      xhH(HH) {
        bH.QGjB(this.__wbg_ptr, HH)
      }
      stage(HH) {
        return bH.l0st(this.__wbg_ptr, HH) >>> 0
      }
      step(HH, BH) {
        return bH.HCb4(this.__wbg_ptr, HH, BH) >>> 0
      }
    }

    function SH(HH, BH) {
      const LH = function(HH, BH, LH) {
          if (void 0 === LH) {
            const LH = UH.encode(HH),
              AH = BH(LH.length, 1) >>> 0;
            return QH().subarray(AH, AH + LH.length).set(LH), kH = LH.length, AH
          }
          let AH = HH.length,
            rH = BH(AH, 1) >>> 0;
          const SH = QH();
          let hH = 0;
          for (; hH < AH; hH++) {
            const BH = HH.charCodeAt(hH);
            if (BH > 127) break;
            SH[rH + hH] = BH
          }
          if (hH !== AH) {
            0 !== hH && (HH = HH.slice(hH)), rH = LH(rH, AH, AH = hH + 3 * HH.length, 1) >>> 0;
            const BH = QH().subarray(rH + hH, rH + AH);
            hH += UH.encodeInto(HH, BH).written, rH = LH(rH, AH, hH, 1) >>> 0
          }
          return kH = hH, rH
        }(HH, bH.vA9o, bH.VBCt),
        AH = kH,
        rH = bH.sVYH(LH, AH, BH);
      if (rH[1]) throw xH(rH[0])
    }

    function hH() {
      bH.YPsZ()
    }

    function tH() {
      return bH.oSB9() >>> 0
    }

    function zH() {
      return xH(bH.WBEv())
    }

    function CH() {
      return {
        __proto__: null,
        sJvs: {
          __proto__: null,
          B2RE: function(HH, BH) {
            return XH(Error(YH(HH, BH)))
          },
          sVN1: function() {
            return XH(bH.memory)
          },
          VXuo: function(HH, BH) {
            throw new Error(YH(HH, BH))
          },
          TpBp: function(HH, BH) {
            console.error(YH(HH, BH))
          },
          CFOr: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (rH.prototype[Symbol.dispose] = rH.prototype.free);
    const EH = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((HH => bH?.__wbg_replaymodule_free(HH, 1)));

    function XH(HH) {
      MH === WH.length && WH.push(WH.length + 1);
      const BH = MH;
      return MH = WH[BH], WH[BH] = HH, BH
    }
    let GH = null;

    function YH(HH, BH) {
      return function(HH, BH) {
        TH += BH, TH >= PH && (vH = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), vH.decode(), TH = BH);
        return vH.decode(QH().subarray(HH, HH + BH))
      }(HH >>> 0, BH)
    }
    let uH = null;

    function QH() {
      return null !== uH && 0 !== uH.byteLength || (uH = new Uint8Array(bH.memory.buffer)), uH
    }
    let WH = new Array(1024).fill(void 0);
    WH.push(void 0, null, !0, !1);
    let MH = WH.length;

    function xH(HH) {
      const BH = function(HH) {
        return WH[HH]
      }(HH);
      return function(HH) {
        HH < 1028 || (WH[HH] = MH, MH = HH)
      }(HH), BH
    }
    let vH = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    vH.decode();
    const PH = 2146435072;
    let TH = 0;
    const UH = new TextEncoder;
    "encodeInto" in UH || (UH.encodeInto = function(HH, BH) {
      const LH = UH.encode(HH);
      return BH.set(LH), {
        read: HH.length,
        written: LH.length
      }
    });
    let VH, OH, bH, kH = 0;

    function mH(HH, BH) {
      return OH = HH, bH = HH.exports, VH = BH, GH = null, uH = null, bH.gps0(), bH
    }

    function oH(HH) {
      if (void 0 !== bH) return bH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module: HH
      } = HH) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const BH = CH();
      HH instanceof WebAssembly.Module || (HH = new WebAssembly.Module(HH));
      return mH(new WebAssembly.Instance(HH, BH), HH)
    }
    async function IH(HH) {
      if (void 0 !== bH) return bH;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module_or_path: HH
      } = HH) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const BH = CH();
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
      return mH(LH, AH)
    }

    function fH() {
      bH = void 0, OH = void 0, GH = null, uH = null, WH = new Array(1024).fill(void 0), WH.push(void 0, null, !0, !1), MH = WH.length
    }
    var lH = LH(3171),
      KH = LH(7172);
    class cH extends Error {
      stage;
      constructor(HH, BH) {
        super((0, lH.F)(HH, BH), {
          cause: BH
        }), this.name = "BloxdReplayWasmError", this.stage = HH
      }
    }
    let eH = null,
      qH = null,
      gH = Promise.resolve(),
      NH = 0,
      RH = null,
      jH = null;

    function nH() {
      if (jH) return Promise.reject(jH);
      if (qH) return qH;
      const HH = NH,
        BH = gH,
        rH = (async () => {
          let rH;
          await BH, eH ??= (0, lH.J)(new LH.U(LH(64331)), (0, KH.c)("bloxd_wasm_replay"));
          try {
            rH = await eH
          } catch (SH) {
            throw eH = null, new cH((0, lH.O)(SH), SH)
          }
          if (HH !== NH) throw new cH("instantiate", new Error("unloaded while loading"));
          try {
            await IH({
              module_or_path: rH
            })
          } catch (SH) {
            throw fH(), new cH("instantiate", SH)
          }
          if (HH !== NH) throw fH(), new cH("instantiate", new Error("unloaded while loading"));
          return RH = zH(), AH
        })();
      return qH = rH, gH = rH.catch((() => {})), rH.catch((() => {
        qH === rH && (qH = null)
      })), rH
    }

    function FH() {
      jH || ZH()
    }

    function DH() {
      return RH?.buffer.byteLength ?? 0
    }

    function wH(HH) {
      return jH || (jH = new cH("call", HH), ZH()), jH
    }

    function ZH() {
      NH++, fH(), qH = null, RH = null
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);