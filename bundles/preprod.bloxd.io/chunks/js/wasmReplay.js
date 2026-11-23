export const id = 65;
export const ids = [65];
export const modules = {
  61130: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_replay_bg.8bfaf53c8e8524b439c6.wasm"
  },
  6616: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(2856);
    const wC = {
      bloxd_wasm: () => "64213eca4658377ef00b2e8eca80917f662fb244ea5072aa932d693e87ee34a4",
      bloxd_wasm_client: () => "fc3cf04d5b7854fba80fd4d4a48c70cd5cfa75bed057ae2631f2eac809bb72d6",
      bloxd_wasm_workers: () => "6e4d4a97778a79d3d1539bba135e452823879ae247a4075c185762ab01e74bb8",
      bloxd_wasm_models: () => "a9e6377967b2efe08bc1c2c1ba7803c68faf84b1979c48237b60c2a5371ef6f0",
      bloxd_wasm_webgpu: () => "0c329bbf92b5e8dc40c9c50de71fa16d3214efd01ed90e0c806f70cc5dc4a678",
      bloxd_wasm_webgl: () => "1a61f36acda217637aa35c038c864802f4a597fe34b899397ecb8b3f7a6010d4",
      bloxd_wasm_webgl1: () => "fa07e900fdcc5ea52a844349243c3504ebaca1ebb1ff15c9d66db4fcc37f2404",
      bloxd_wasm_replay: () => "37f9a110c636f28820cc4bb4d1a11de7ceaafb9c9325a7fee4fe688876d19d67",
      bloxd_wasm_recorder: () => "2775bc33cdba5c03f27ade88929e4fdaf4b4c582cc3952198fb551b59541422e",
      bloxd_wasm_anim: () => "70063f4837211665774447f408deefe4678a8f5e792ddcf5187eb1ba64be142f",
      bloxd_wasm_textures: () => "6b2065e443e650047a940883eaf075d2749daed9964ef622b7e96432f1c0c8b1",
      bloxd_wasm_shader_pack: () => "90a9cbfbe256edc10cec287ff1dfdba1125031ab0d4dcf3f4270800ba2f9cb4a"
    };
    var bC = ZC(4635);

    function nC(CC) {
      const zC = Object.prototype.hasOwnProperty.call(wC, CC) ? wC[CC]() : void 0;
      if (void 0 !== zC) return {
        sha256: zC,
        onMismatch: bC.w
      };
      throw new QC.h(`${CC} has no release digest, so this build refuses it`)
    }
  },
  61126: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BloxdReplayWasmError: () => EC,
      loadReplayModule: () => TC,
      markReplayTrapped: () => DC,
      replayMemoryBytes: () => tC,
      unloadReplayModule: () => aC
    });
    var QC = {};
    ZC.r(QC), ZC.d(QC, {
      twC: () => wC,
      mnC: () => dC,
      SW: () => bC,
      default: () => YC,
      initSync: () => KC,
      pW: () => nC,
      rwC: () => fC,
      jwC: () => oC
    });
    class wC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, FC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        vC.xrRM(CC, 0)
      }
      BwC(CC, zC, ZC, QC, wC, bC) {
        vC.KdKY(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC)
      }
      close() {
        vC.wrLW(this.__wbg_ptr)
      }
      crop(CC, zC) {
        vC.ZDzQ(this.__wbg_ptr, CC, zC)
      }
      VwC(CC, zC) {
        vC.kvUc(this.__wbg_ptr, CC, zC)
      }
      zbC() {
        return vC.q4Hw(this.__wbg_ptr) >>> 0
      }
      CbC() {
        return vC.nobd(this.__wbg_ptr) >>> 0
      }
      ZbC() {
        return vC.yOMY(this.__wbg_ptr) >>> 0
      }
      QbC() {
        return vC.qeLw(this.__wbg_ptr) >>> 0
      }
      kwC(CC, zC) {
        vC.eIEL(this.__wbg_ptr, CC, zC)
      }
      constructor() {
        const CC = vC.HkKj();
        return this.__wbg_ptr = CC, FC.register(this, this.__wbg_ptr, this), this
      }
      open() {
        vC.J9TI(this.__wbg_ptr)
      }
      lwC() {
        return vC.kwTZ(this.__wbg_ptr) >>> 0
      }
      pause() {
        vC.ceqs(this.__wbg_ptr)
      }
      play() {
        vC.YF2I(this.__wbg_ptr)
      }
      save() {
        return vC.D83F(this.__wbg_ptr) >>> 0
      }
      wbC() {
        vC.Azpy(this.__wbg_ptr)
      }
      seek(CC, zC) {
        vC.fEtK(this.__wbg_ptr, CC, zC)
      }
      nbC(CC) {
        vC.K2FN(this.__wbg_ptr, CC)
      }
      OwC(CC, zC) {
        const ZC = function(CC, zC) {
            const ZC = zC(8 * CC.length, 8) >>> 0;
            return function() {
              null !== NC && 0 !== NC.byteLength || (NC = new Float64Array(vC.memory.buffer));
              return NC
            }().set(CC, ZC / 8), eC = CC.length, ZC
          }(zC, vC.zSnJ),
          QC = eC;
        vC.Cpmw(this.__wbg_ptr, CC, ZC, QC)
      }
      UwC(CC, zC) {
        vC.RDuh(this.__wbg_ptr, CC, zC)
      }
      bbC(CC) {
        vC.nOb9(this.__wbg_ptr, CC)
      }
      stage(CC) {
        return vC.ZVCy(this.__wbg_ptr, CC) >>> 0
      }
      step(CC, zC) {
        return vC.CNja(this.__wbg_ptr, CC, zC) >>> 0
      }
    }

    function bC(CC, zC) {
      const ZC = function(CC, zC, ZC) {
          if (void 0 === ZC) {
            const ZC = JC.encode(CC),
              QC = zC(ZC.length, 1) >>> 0;
            return SC().subarray(QC, QC + ZC.length).set(ZC), eC = ZC.length, QC
          }
          let QC = CC.length,
            wC = zC(QC, 1) >>> 0;
          const bC = SC();
          let nC = 0;
          for (; nC < QC; nC++) {
            const zC = CC.charCodeAt(nC);
            if (zC > 127) break;
            bC[wC + nC] = zC
          }
          if (nC !== QC) {
            0 !== nC && (CC = CC.slice(nC)), wC = ZC(wC, QC, QC = nC + 3 * CC.length, 1) >>> 0;
            const zC = SC().subarray(wC + nC, wC + QC);
            nC += JC.encodeInto(CC, zC).written, wC = ZC(wC, QC, nC, 1) >>> 0
          }
          return eC = nC, wC
        }(CC, vC.zSnJ, vC.PhgO),
        QC = eC,
        wC = vC.XtWe(ZC, QC, zC);
      if (wC[1]) throw GC(wC[0])
    }

    function nC() {
      vC.o8pG()
    }

    function fC() {
      return vC.vdkB() >>> 0
    }

    function oC() {
      return GC(vC.t7ll())
    }

    function qC() {
      return {
        __proto__: null,
        L7Rl: {
          __proto__: null,
          Oecl: function(CC, zC) {
            return WC(Error(MC(CC, zC)))
          },
          n0JQ: function() {
            return WC(vC.memory)
          },
          cjDH: function(CC, zC) {
            throw new Error(MC(CC, zC))
          },
          mMFo: function(CC, zC) {
            console.error(MC(CC, zC))
          },
          XnKx: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (wC.prototype[Symbol.dispose] = wC.prototype.free);
    const FC = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((CC => vC?.__wbg_replaymodule_free(CC, 1)));

    function WC(CC) {
      PC === pC.length && pC.push(pC.length + 1);
      const zC = PC;
      return PC = pC[zC], pC[zC] = CC, zC
    }
    let NC = null;

    function MC(CC, zC) {
      return function(CC, zC) {
        xC += zC, xC >= AC && (RC = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), RC.decode(), xC = zC);
        return RC.decode(SC().subarray(CC, CC + zC))
      }(CC >>> 0, zC)
    }
    let gC = null;

    function SC() {
      return null !== gC && 0 !== gC.byteLength || (gC = new Uint8Array(vC.memory.buffer)), gC
    }
    let pC = new Array(1024).fill(void 0);
    pC.push(void 0, null, !0, !1);
    let PC = pC.length;

    function GC(CC) {
      const zC = function(CC) {
        return pC[CC]
      }(CC);
      return function(CC) {
        CC < 1028 || (pC[CC] = PC, PC = CC)
      }(CC), zC
    }
    let RC = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    RC.decode();
    const AC = 2146435072;
    let xC = 0;
    const JC = new TextEncoder;
    "encodeInto" in JC || (JC.encodeInto = function(CC, zC) {
      const ZC = JC.encode(CC);
      return zC.set(ZC), {
        read: CC.length,
        written: ZC.length
      }
    });
    let IC, iC, vC, eC = 0;

    function hC(CC, zC) {
      return iC = CC, vC = CC.exports, IC = zC, NC = null, gC = null, vC.yaCo(), vC
    }

    function KC(CC) {
      if (void 0 !== vC) return vC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module: CC
      } = CC) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zC = qC();
      CC instanceof WebAssembly.Module || (CC = new WebAssembly.Module(CC));
      return hC(new WebAssembly.Instance(CC, zC), CC)
    }
    async function YC(CC) {
      if (void 0 !== vC) return vC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module_or_path: CC
      } = CC) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zC = qC();
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
      return hC(ZC, QC)
    }

    function dC() {
      vC = void 0, iC = void 0, NC = null, gC = null, pC = new Array(1024).fill(void 0), pC.push(void 0, null, !0, !1), PC = pC.length
    }
    var mC = ZC(2856),
      HC = ZC(6616);
    class EC extends Error {
      stage;
      constructor(CC, zC) {
        super((0, mC.F)(CC, zC), {
          cause: zC
        }), this.name = "BloxdReplayWasmError", this.stage = CC
      }
    }
    let lC = null,
      XC = null,
      cC = Promise.resolve(),
      uC = 0,
      rC = null,
      sC = null;

    function TC() {
      if (sC) return Promise.reject(sC);
      if (XC) return XC;
      const CC = uC,
        zC = cC,
        wC = (async () => {
          let wC;
          await zC, lC ??= (0, mC.I)(new ZC.U(ZC(61130)), (0, HC.e)("bloxd_wasm_replay"));
          try {
            wC = await lC
          } catch (bC) {
            throw lC = null, new EC((0, mC.P)(bC), bC)
          }
          if (CC !== uC) throw new EC("instantiate", new Error("unloaded while loading"));
          try {
            await YC({
              module_or_path: wC
            })
          } catch (bC) {
            throw dC(), new EC("instantiate", bC)
          }
          if (CC !== uC) throw dC(), new EC("instantiate", new Error("unloaded while loading"));
          return rC = oC(), QC
        })();
      return XC = wC, cC = wC.catch((() => {})), wC.catch((() => {
        XC === wC && (XC = null)
      })), wC
    }

    function aC() {
      sC || jC()
    }

    function tC() {
      return rC?.buffer.byteLength ?? 0
    }

    function DC(CC) {
      return sC || (sC = new EC("call", CC), jC()), sC
    }

    function jC() {
      uC++, dC(), XC = null, rC = null
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);