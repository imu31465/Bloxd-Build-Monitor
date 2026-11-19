export const id = 131;
export const ids = [131];
export const modules = {
  6366: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadPageShaderPackCompiler: () => yC
    });
    var ID = {};
    cD.r(ID), cD.d(ID, {
      KID: () => pD,
      R6: () => iD,
      default: () => WD,
      aID: () => fD,
      VID: () => bD,
      initSync: () => YD,
      gB: () => QD,
      icD: () => wD,
      zID: () => SD,
      jID: () => BD,
      lq: () => yD,
      lID: () => MD,
      zq: () => tD,
      LID: () => ZD
    });
    class pD {
      static __wrap(DD) {
        const CD = Object.create(pD.prototype);
        return CD.__wbg_ptr = DD, vD.register(CD, CD.__wbg_ptr, CD), CD
      }
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        RD.BDuL(DD, 0)
      }
      get errorsJson() {
        let DD, CD;
        try {
          const cD = RD.IMI5(this.__wbg_ptr);
          return DD = cD[0], CD = cD[1], OD(cD[0], cD[1])
        } finally {
          RD.FVvI(DD, CD, 1)
        }
      }
      get features() {
        const DD = RD.Jga4(this.__wbg_ptr);
        var CD = gD(DD[0], DD[1]);
        return RD.FVvI(DD[0], 4 * DD[1], 4), CD
      }
      get hooks() {
        const DD = RD.I2GM(this.__wbg_ptr);
        var CD = XD(DD[0], DD[1]).slice();
        return RD.FVvI(DD[0], 1 * DD[1], 1), CD
      }
      mapValidationMessage(DD, CD, cD, ID, pD) {
        let iD, fD;
        try {
          const wD = RD.fWKt(this.__wbg_ptr, DD, CD, cD, ND(ID), ND(pD));
          var bD = wD[0],
            QD = wD[1];
          if (wD[3]) throw bD = 0, QD = 0, VD(wD[2]);
          return iD = bD, fD = QD, OD(bD, QD)
        } finally {
          RD.FVvI(iD, fD, 1)
        }
      }
      get moduleCodes() {
        const DD = RD.ozSI(this.__wbg_ptr);
        var CD = gD(DD[0], DD[1]);
        return RD.FVvI(DD[0], 4 * DD[1], 4), CD
      }
      get offInStrictJson() {
        let DD, CD;
        try {
          const cD = RD.E9Yj(this.__wbg_ptr);
          return DD = cD[0], CD = cD[1], OD(cD[0], cD[1])
        } finally {
          RD.FVvI(DD, CD, 1)
        }
      }
      get reads() {
        const DD = RD.uGZk(this.__wbg_ptr);
        var CD = gD(DD[0], DD[1]);
        return RD.FVvI(DD[0], 4 * DD[1], 4), CD
      }
      get validationModuleCodes() {
        const DD = RD.DVaO(this.__wbg_ptr);
        var CD = gD(DD[0], DD[1]);
        return RD.FVvI(DD[0], 4 * DD[1], 4), CD
      }
      get validationModuleKeys() {
        const DD = RD.zwxV(this.__wbg_ptr);
        var CD = XD(DD[0], DD[1]).slice();
        return RD.FVvI(DD[0], 1 * DD[1], 1), CD
      }
      get variantFlags() {
        const DD = RD.hrM2(this.__wbg_ptr);
        var CD = XD(DD[0], DD[1]).slice();
        return RD.FVvI(DD[0], 1 * DD[1], 1), CD
      }
    }

    function iD(DD, CD, cD, ID, iD, fD, bD) {
      const QD = aD(DD, RD.TnFI),
        wD = kD,
        SD = aD(CD, RD.TnFI),
        BD = kD,
        yD = aD(cD, RD.TnFI),
        MD = kD,
        tD = KD(ID, RD.TnFI),
        ZD = kD,
        oD = aD(iD, RD.TnFI),
        vD = kD,
        ND = aD(fD, RD.TnFI),
        gD = kD,
        XD = aD(bD, RD.TnFI),
        mD = kD,
        nD = RD.BA97(QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD);
      if (nD[2]) throw VD(nD[1]);
      return pD.__wrap(nD[0])
    }

    function fD() {
      const DD = RD.Q2gy();
      var CD = gD(DD[0], DD[1]);
      return RD.FVvI(DD[0], 4 * DD[1], 4), CD
    }

    function bD() {
      const DD = RD.c1gs();
      var CD = gD(DD[0], DD[1]);
      return RD.FVvI(DD[0], 4 * DD[1], 4), CD
    }

    function QD() {
      RD.Xikd()
    }

    function wD(DD, CD, cD, ID, pD) {
      let iD, fD;
      try {
        const wD = aD(DD, RD.TnFI),
          SD = kD,
          BD = KD(CD, RD.TnFI),
          yD = kD,
          MD = aD(cD, RD.TnFI),
          tD = kD,
          ZD = KD(ID, RD.TnFI),
          oD = kD,
          vD = function(DD, CD) {
            const cD = CD(1 * DD.length, 1) >>> 0;
            return UD().set(DD, cD / 1), kD = DD.length, cD
          }(pD, RD.TnFI),
          ND = kD,
          gD = RD.fKbi(wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND);
        var bD = gD[0],
          QD = gD[1];
        if (gD[3]) throw bD = 0, QD = 0, VD(gD[2]);
        return iD = bD, fD = QD, OD(bD, QD)
      } finally {
        RD.FVvI(iD, fD, 1)
      }
    }

    function SD() {
      let DD, CD;
      try {
        const cD = RD.v7XO();
        return DD = cD[0], CD = cD[1], OD(cD[0], cD[1])
      } finally {
        RD.FVvI(DD, CD, 1)
      }
    }

    function BD(DD) {
      let CD, cD;
      try {
        const iD = RD.w609(DD);
        var ID = iD[0],
          pD = iD[1];
        if (iD[3]) throw ID = 0, pD = 0, VD(iD[2]);
        return CD = ID, cD = pD, OD(ID, pD)
      } finally {
        RD.FVvI(CD, cD, 1)
      }
    }

    function yD() {
      return RD.KTo5() >>> 0
    }

    function MD() {
      let DD, CD;
      try {
        const cD = RD.gSYQ();
        return DD = cD[0], CD = cD[1], OD(cD[0], cD[1])
      } finally {
        RD.FVvI(DD, CD, 1)
      }
    }

    function tD(DD, CD) {
      let cD, ID;
      try {
        const fD = aD(DD, RD.TnFI),
          bD = kD,
          QD = KD(CD, RD.TnFI),
          wD = kD,
          SD = RD.CH8L(fD, bD, QD, wD);
        var pD = SD[0],
          iD = SD[1];
        if (SD[3]) throw pD = 0, iD = 0, VD(SD[2]);
        return cD = pD, ID = iD, OD(pD, iD)
      } finally {
        RD.FVvI(cD, ID, 1)
      }
    }

    function ZD(DD) {
      let CD, cD;
      try {
        const iD = RD.wSQR(ND(DD));
        var ID = iD[0],
          pD = iD[1];
        if (iD[3]) throw ID = 0, pD = 0, VD(iD[2]);
        return CD = ID, cD = pD, OD(ID, pD)
      } finally {
        RD.FVvI(CD, cD, 1)
      }
    }

    function oD() {
      return {
        __proto__: null,
        b1Va: {
          __proto__: null,
          yMpD: function(DD, CD) {
            return ND(Error(OD(DD, CD)))
          },
          ORU6: function(DD) {
            return null === xD(DD)
          },
          rv5e: function(DD) {
            return "string" === typeof xD(DD)
          },
          VUKR: function(DD, CD) {
            const cD = xD(CD),
              ID = "string" === typeof cD ? cD : void 0;
            var pD, iD = void 0 === (pD = ID) || null === pD ? 0 : function(DD, CD, cD) {
                if (void 0 === cD) {
                  const cD = LD.encode(DD),
                    ID = CD(cD.length, 1) >>> 0;
                  return UD().subarray(ID, ID + cD.length).set(cD), kD = cD.length, ID
                }
                let ID = DD.length,
                  pD = CD(ID, 1) >>> 0;
                const iD = UD();
                let fD = 0;
                for (; fD < ID; fD++) {
                  const CD = DD.charCodeAt(fD);
                  if (CD > 127) break;
                  iD[pD + fD] = CD
                }
                if (fD !== ID) {
                  0 !== fD && (DD = DD.slice(fD)), pD = cD(pD, ID, ID = fD + 3 * DD.length, 1) >>> 0;
                  const CD = UD().subarray(pD + fD, pD + ID);
                  fD += LD.encodeInto(DD, CD).written, pD = cD(pD, ID, fD, 1) >>> 0
                }
                return kD = fD, pD
              }(ID, RD.TnFI, RD.IUZo),
              fD = kD;
            nD().setInt32(DD + 4, fD, !0), nD().setInt32(DD + 0, iD, !0)
          },
          Ic88: function(DD, CD) {
            throw new Error(OD(DD, CD))
          },
          JCI2: function(DD, CD) {
            return xD(DD).charCodeAt(CD >>> 0)
          },
          mUbW: function(DD, CD) {
            console.error(OD(DD, CD))
          },
          pqF8: function(DD) {
            return xD(DD).length
          },
          RAzn: function(DD, CD) {
            return ND(OD(DD, CD))
          },
          rSZd: function(DD) {
            VD(DD)
          }
        }
      }
    }
    Symbol.dispose && (pD.prototype[Symbol.dispose] = pD.prototype.free);
    const vD = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => RD.BDuL(DD, 1)));

    function ND(DD) {
      JD === qD.length && qD.push(qD.length + 1);
      const CD = JD;
      return JD = qD[CD], qD[CD] = DD, CD
    }

    function gD(DD, CD) {
      DD >>>= 0;
      const cD = nD(),
        ID = [];
      for (let pD = DD; pD < DD + 4 * CD; pD += 4) ID.push(VD(cD.getUint32(pD, !0)));
      return ID
    }

    function XD(DD, CD) {
      return DD >>>= 0, UD().subarray(DD / 1, DD / 1 + CD)
    }
    let mD = null;

    function nD() {
      return (null === mD || !0 === mD.buffer.detached || void 0 === mD.buffer.detached && mD.buffer !== RD.memory.buffer) && (mD = new DataView(RD.memory.buffer)), mD
    }

    function OD(DD, CD) {
      return function(DD, CD) {
        lD += CD, lD >= jD && (zD = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), zD.decode(), lD = CD);
        return zD.decode(UD().subarray(DD, DD + CD))
      }(DD >>> 0, CD)
    }
    let PD = null;
    let HD = null;

    function UD() {
      return null !== HD && 0 !== HD.byteLength || (HD = new Uint8Array(RD.memory.buffer)), HD
    }

    function xD(DD) {
      return qD[DD]
    }
    let qD = new Array(1024).fill(void 0);
    qD.push(void 0, null, !0, !1);
    let JD = qD.length;

    function KD(DD, CD) {
      const cD = CD(4 * DD.length, 4) >>> 0;
      return (null !== PD && 0 !== PD.byteLength || (PD = new Uint32Array(RD.memory.buffer)), PD).set(DD, cD / 4), kD = DD.length, cD
    }

    function aD(DD, CD) {
      const cD = CD(4 * DD.length, 4) >>> 0,
        ID = nD();
      for (let pD = 0; pD < DD.length; pD++) ID.setUint32(cD + 4 * pD, ND(DD[pD]), !0);
      return kD = DD.length, cD
    }

    function VD(DD) {
      const CD = xD(DD);
      return function(DD) {
        DD < 1028 || (qD[DD] = JD, JD = DD)
      }(DD), CD
    }
    let zD = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    zD.decode();
    const jD = 2146435072;
    let lD = 0;
    const LD = new TextEncoder;
    "encodeInto" in LD || (LD.encodeInto = function(DD, CD) {
      const cD = LD.encode(DD);
      return CD.set(cD), {
        read: DD.length,
        written: cD.length
      }
    });
    let TD, GD, RD, kD = 0;

    function dD(DD, CD) {
      return GD = DD, RD = DD.exports, TD = CD, mD = null, PD = null, HD = null, RD.h4Nj(), RD
    }

    function YD(DD) {
      if (void 0 !== RD) return RD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const CD = oD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return dD(new WebAssembly.Instance(DD, CD), DD)
    }
    async function WD(DD) {
      if (void 0 !== RD) return RD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const CD = oD();
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
      return dD(cD, ID)
    }
    var sD = cD(3529),
      ED = cD(6372);
    class eD extends Error {
      stage;
      constructor(DD, CD) {
        super((0, sD.D)(DD, CD), {
          cause: CD
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = DD
      }
    }
    let uD = null,
      hD = null;

    function rD() {
      return uD ? Promise.resolve(uD) : (hD || (hD = async function() {
        let DD;
        try {
          DD = await (0, sD.H)(new cD.U(cD(6376)), (0, ED.e)("bloxd_wasm_shader_pack"))
        } catch (CD) {
          throw new eD((0, sD.L)(CD), CD)
        }
        try {
          await WD({
            module_or_path: DD
          })
        } catch (CD) {
          throw new eD("instantiate", CD)
        }
        return uD = ID, uD
      }(), hD.then(void 0, (() => {
        hD = null
      }))), hD)
    }
    var AD = cD(6384);

    function FD(DD) {
      let [CD, cD, ID, pD] = DD;
      const iD = {
        file: CD,
        line: cD,
        message: ID
      };
      return pD && (iD.variants = pD.map(AD.k)), iD
    }

    function DC(DD) {
      return JSON.parse(DD).map(FD)
    }

    function CC(DD, CD) {
      if (!Number.isInteger(DD) || DD < 0 || DD > 4294967295) throw new Error(`${CD} ${DD} is not a whole number from 0 to 4294967295`);
      return DD
    }

    function cC(DD) {
      return [DD.named.map((DD => DD.name)), Uint32Array.from(DD.named, (DD => CC(DD.id, "Texture ID")))]
    }
    const IC = new WeakMap;
    const pC = new WeakMap,
      iC = new WeakSet;

    function fC(DD, CD) {
      if (iC.has(DD)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return CD()
      } catch (cD) {
        throw cD instanceof WebAssembly.RuntimeError && iC.add(DD), cD
      }
    }

    function bC(DD) {
      let CD = pC.get(DD);
      if (!CD) {
        let cD, ID;
        CD = {
          R6: (CD, cD) => fC(DD, (() => function(DD, CD, cD) {
            const ID = DD.R6(CD.map((DD => DD.path)), CD.map((DD => DD.source)), ...cC(cD), cD.aliases.map((DD => DD.name)), cD.aliases.map((DD => DD.texture)), cD.aliases.map((DD => DD.kind)));
            let pD = !1;
            try {
              const DD = ID.validationModuleCodes,
                CD = Array.from(ID.validationModuleKeys, ((CD, cD) => ({
                  key: (0, AD.k)(CD),
                  code: DD[cD]
                }))),
                cD = {
                  errors: DC(ID.errorsJson),
                  offInStrict: DC(ID.offInStrictJson),
                  variants: (0, AD.g)(ID),
                  validationModules: CD,
                  features: ID.features
                };
              return CD.forEach(((DD, CD) => {
                IC.set(DD, {
                  pack: ID,
                  index: CD
                })
              })), pD = CD.length > 0, cD
            } finally {
              pD || ID.free()
            }
          }(DD, CD, cD))),
          mapValidationMessage: (CD, cD) => {
            const ID = IC.get(CD);
            if (!ID) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return FD(JSON.parse(fC(DD, (() => ID.pack.mapValidationMessage(ID.index, cD.lineNum, cD.linePos, cD.message, cD.type)))))
          },
          icD: CD => fC(DD, (() => function(DD, CD) {
            const cD = new Int32Array(CD.length),
              ID = [];
            return CD.forEach(((DD, CD) => {
              cD[CD] = DD.variants ? DD.variants.length : -1;
              for (const cD of DD.variants ?? []) ID.push((0, AD.i)(cD))
            })), DC(DD.icD(CD.map((DD => DD.file)), Uint32Array.from(CD, (DD => CC(DD.line, "Diagnostic line"))), CD.map((DD => DD.message)), cD, Uint8Array.from(ID)))
          }(DD, CD))),
          zq: CD => fC(DD, (() => DD.zq(...cC(CD)))),
          get SHADER_PACK_HEADER_VERSION() {
            return cD ??= fC(DD, (() => DD.lID())), cD
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return ID ??= fC(DD, (() => {
              const CD = DD.VID();
              return DD.aID().map(((DD, cD) => ({
                path: DD,
                source: CD[cD]
              })))
            })), ID
          },
          LID: CD => fC(DD, (() => DD.LID(CD))),
          resolveHeader: CD => fC(DD, (() => DD.jID((0, AD.i)(CD)))),
          zID: () => fC(DD, (() => DD.zID()))
        }, pC.set(DD, CD)
      }
      return CD
    }
    var QC = cD(3026),
      wC = cD(6379);
    const SC = "bloxdShaderPackWasmFailureReported";
    let BC = null;

    function yC() {
      return BC ??= async function() {
        if ("undefined" === typeof WebAssembly) return MC("unsupported", "This browser has no WebAssembly"), null;
        const DD = (0, wC.loadShaderPackTextures)().then((() => !0), (DD => (console.error("Could not load the shader pack textures, so shader packs can't run", DD), !1)));
        try {
          const CD = await async function() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD;
            return bC(await DD())
          }();
          return await DD ? CD : null
        } catch (CD) {
          const DD = CD instanceof Error ? CD.message : String(CD);
          return MC(QC.b[CD instanceof eD ? CD.stage : "instantiate"], DD), null
        }
      }(), BC
    }

    function MC(DD, CD) {
      (0, QC.i)(SC, `Shader pack wasm ${DD}, so shader packs can't run: ${CD}`, CD, `shader_pack_${DD}`)
    }
  },
  6376: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_shader_pack_bg.965c5f220de4afeacb1b.wasm"
  },
  6372: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(3529);
    const pD = {
      bloxd_wasm: () => "0d17f541f551a53f4dab724907dfd17c2f5e497131bb2f0746463cf7a85b45bd",
      bloxd_wasm_client: () => "d6e226c9d75d445b020168abe06f72e7048eeb030e81e1c51b07a85852e3609f",
      bloxd_wasm_workers: () => "a532339ee7770d546b5211eae4811431c5af4bef0f6bb1f1bd9d9cedfe642720",
      bloxd_wasm_models: () => "5831b416c1ed8d38d5851a3544f33f1dbf9ce134ab804da19046d201729a0e57",
      bloxd_wasm_webgpu: () => "f931d06e251abe5711fda5efd0c8f6b13c28366b4ac2d5d8847dd6de0a7c2502",
      bloxd_wasm_webgl: () => "76d7d6a654e5f0a7055ecf5f60b4be1c5fa941239d1fc25cad0eeb9117a9d50d",
      bloxd_wasm_webgl1: () => "bbb62056b165fcb2da03a0e26b34e721e5d1836ef01440ade5fd39a17ef2351f",
      bloxd_wasm_replay: () => "ab1e675b3f2654cebc6cb9fcc2eb625d7e3becf9545d6aaec6d35e28d2b68a56",
      bloxd_wasm_recorder: () => "191548def26c8771cc0d55137afcbedfc047ac41e34a07f34acfc4a9c88d9352",
      bloxd_wasm_anim: () => "8df2ff23aed1fe182321a7874775d9d81cd1a481ed48f89ab986aeb54b6aba72",
      bloxd_wasm_textures: () => "24200f89bea0ac9a6bb6d6c36427b0a05df327d7b83abe32fb2d1e0b136a1861",
      bloxd_wasm_shader_pack: () => "7e7c31d2eef819d6f78ae283bdf7f325715093016c9b3415b5500d163bb24552"
    };
    var iD = cD(4495);

    function fD(DD) {
      const CD = Object.prototype.hasOwnProperty.call(pD, DD) ? pD[DD]() : void 0;
      if (void 0 !== CD) return {
        sha256: CD,
        onMismatch: iD.y
      };
      throw new ID.h(`${DD} has no release digest, so this build refuses it`)
    }
  },
  6384: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => XD,
      g: () => mD,
      i: () => ND,
      k: () => vD
    });
    var ID = cD(6393);
    const pD = 6,
      iD = 3,
      fD = 1,
      bD = 2,
      QD = 4,
      wD = 8,
      SD = 16,
      BD = 32,
      yD = 64,
      MD = 128,
      tD = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ZD(DD) {
      if (!DD) return 0;
      const CD = tD.indexOf(DD);
      if (CD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
      return CD
    }

    function oD(DD) {
      if (0 === DD) return null;
      const CD = tD[DD];
      if (void 0 === CD) throw new Error(`${DD} is not a shader pack hook function id`);
      return CD
    }

    function vD(DD) {
      const CD = ID.c.length;
      return {
        strict: DD >= CD,
        program: ID.c[DD % CD]
      }
    }

    function ND(DD) {
      return Number(DD.strict) * ID.c.length + ID.c.indexOf(DD.program)
    }

    function gD(DD) {
      return "" === DD ? [] : DD.split(" ")
    }

    function XD(DD) {
      const CD = {
        variantFlags: new Uint8Array(pD),
        hooks: new Uint8Array(pD * iD),
        moduleCodes: Array(pD).fill(""),
        reads: Array(2 * pD).fill("")
      };
      for (const cD of DD) {
        const DD = ND(cD.key),
          ID = (DD, CD) => null === cD.hooks.surface || cD.reads.fragment.includes(DD) ? 0 : CD;
        CD.variantFlags[DD] = (cD.sceneDepth ? fD : 0) | (cD.movesVertices ? bD : 0) | (cD.sunShadow ? QD : 0) | (cD.airShadow ? wD : 0) | (cD.discards ? SD : 0) | ID("localPosition", BD) | ID("enchantSpeed", yD) | ID("enchantTier", MD), CD.hooks[DD * iD] = ZD(cD.hooks.vertex), CD.hooks[DD * iD + 1] = ZD(cD.hooks.surface), CD.hooks[DD * iD + 2] = ZD(cD.hooks.light), CD.moduleCodes[DD] = cD.moduleCode, CD.reads[2 * DD] = cD.reads.vertex.join(" "), CD.reads[2 * DD + 1] = cD.reads.fragment.join(" ")
      }
      return CD
    }

    function mD(DD) {
      const {
        hooks: CD,
        moduleCodes: cD,
        reads: ID
      } = DD;
      return Array.from(DD.variantFlags, ((DD, pD) => {
        const BD = pD * iD;
        return {
          key: vD(pD),
          hooks: {
            vertex: oD(CD[BD]),
            surface: oD(CD[BD + 1]),
            light: oD(CD[BD + 2])
          },
          moduleCode: cD[pD],
          sceneDepth: 0 !== (DD & fD),
          sunShadow: 0 !== (DD & QD),
          airShadow: 0 !== (DD & wD),
          movesVertices: 0 !== (DD & bD),
          discards: 0 !== (DD & SD),
          reads: {
            vertex: gD(ID[2 * pD]),
            fragment: gD(ID[2 * pD + 1])
          }
        }
      }))
    }
  },
  6393: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      f: () => fD,
      h: () => bD,
      i: () => pD,
      k: () => iD
    });
    const ID = ["terrain", "liquid", "model"];

    function pD() {
      const DD = [];
      for (const CD of [!1, !0])
        for (const cD of ID) DD.push({
          strict: CD,
          program: cD
        });
      return DD
    }

    function iD(DD) {
      return `${DD.strict?"strict":"allow"}.${DD.program}`
    }

    function fD(DD) {
      return !DD.hooks.vertex && !DD.hooks.surface && !DD.hooks.light
    }

    function bD(DD, CD) {
      return "off" !== CD && (null === DD || DD.some((DD => DD.key.strict === ("strict" === CD) && !fD(DD))))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);