export const id = 157;
export const ids = [157];
export const modules = {
  7756: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      loadPageShaderPackCompiler: () => rJ
    });
    var yR = {};
    GR.r(yR), GR.d(yR, {
      SuR: () => tR,
      UJR: () => uR,
      default: () => dR,
      juR: () => ZR,
      duR: () => qR,
      initSync: () => jR,
      oK: () => iR,
      ZtR: () => fR,
      EuR: () => VR,
      YuR: () => KR,
      nH: () => wR,
      kuR: () => rR,
      iH: () => eR,
      QuR: () => aR
    });
    class tR {
      static __wrap(RR) {
        const JR = Object.create(tR.prototype);
        return JR.__wbg_ptr = RR, nR.register(JR, JR.__wbg_ptr, JR), JR
      }
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        mR.o2j9(RR, 0)
      }
      get FuR() {
        let RR, JR;
        try {
          const GR = mR.ZqTf(this.__wbg_ptr);
          return RR = GR[0], JR = GR[1], MR(GR[0], GR[1])
        } finally {
          mR.Vmxh(RR, JR, 1)
        }
      }
      get features() {
        const RR = mR.V2A4(this.__wbg_ptr);
        var JR = WR(RR[0], RR[1]);
        return mR.Vmxh(RR[0], 4 * RR[1], 4), JR
      }
      get hooks() {
        const RR = mR.PMyy(this.__wbg_ptr);
        var JR = AR(RR[0], RR[1]).slice();
        return mR.Vmxh(RR[0], 1 * RR[1], 1), JR
      }
      mapValidationMessage(RR, JR, GR, yR, tR) {
        let uR, ZR;
        try {
          const fR = mR.QRQU(this.__wbg_ptr, RR, JR, GR, UR(yR), UR(tR));
          var qR = fR[0],
            iR = fR[1];
          if (fR[3]) throw qR = 0, iR = 0, NR(fR[2]);
          return uR = qR, ZR = iR, MR(qR, iR)
        } finally {
          mR.Vmxh(uR, ZR, 1)
        }
      }
      get moduleCodes() {
        const RR = mR.zPGo(this.__wbg_ptr);
        var JR = WR(RR[0], RR[1]);
        return mR.Vmxh(RR[0], 4 * RR[1], 4), JR
      }
      get TuR() {
        let RR, JR;
        try {
          const GR = mR.SzP2(this.__wbg_ptr);
          return RR = GR[0], JR = GR[1], MR(GR[0], GR[1])
        } finally {
          mR.Vmxh(RR, JR, 1)
        }
      }
      get reads() {
        const RR = mR.J4cM(this.__wbg_ptr);
        var JR = WR(RR[0], RR[1]);
        return mR.Vmxh(RR[0], 4 * RR[1], 4), JR
      }
      get validationModuleCodes() {
        const RR = mR.biKv(this.__wbg_ptr);
        var JR = WR(RR[0], RR[1]);
        return mR.Vmxh(RR[0], 4 * RR[1], 4), JR
      }
      get validationModuleKeys() {
        const RR = mR.EMMt(this.__wbg_ptr);
        var JR = AR(RR[0], RR[1]).slice();
        return mR.Vmxh(RR[0], 1 * RR[1], 1), JR
      }
      get variantFlags() {
        const RR = mR.Gd1S(this.__wbg_ptr);
        var JR = AR(RR[0], RR[1]).slice();
        return mR.Vmxh(RR[0], 1 * RR[1], 1), JR
      }
    }

    function uR(RR, JR, GR, yR, uR, ZR, qR) {
      const iR = xR(RR, mR.AwQI),
        fR = zR,
        VR = xR(JR, mR.AwQI),
        KR = zR,
        wR = xR(GR, mR.AwQI),
        rR = zR,
        eR = OR(yR, mR.AwQI),
        aR = zR,
        LR = xR(uR, mR.AwQI),
        nR = zR,
        UR = xR(ZR, mR.AwQI),
        WR = zR,
        AR = xR(qR, mR.AwQI),
        CR = zR,
        XR = mR.Psuk(iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR);
      if (XR[2]) throw NR(XR[1]);
      return tR.__wrap(XR[0])
    }

    function ZR() {
      const RR = mR.OSok();
      var JR = WR(RR[0], RR[1]);
      return mR.Vmxh(RR[0], 4 * RR[1], 4), JR
    }

    function qR() {
      const RR = mR.ib0g();
      var JR = WR(RR[0], RR[1]);
      return mR.Vmxh(RR[0], 4 * RR[1], 4), JR
    }

    function iR() {
      mR.bChn()
    }

    function fR(RR, JR, GR, yR, tR) {
      let uR, ZR;
      try {
        const fR = xR(RR, mR.AwQI),
          VR = zR,
          KR = OR(JR, mR.AwQI),
          wR = zR,
          rR = xR(GR, mR.AwQI),
          eR = zR,
          aR = OR(yR, mR.AwQI),
          LR = zR,
          nR = function(RR, JR) {
            const GR = JR(1 * RR.length, 1) >>> 0;
            return pR().set(RR, GR / 1), zR = RR.length, GR
          }(tR, mR.AwQI),
          UR = zR,
          WR = mR.KkhN(fR, VR, KR, wR, rR, eR, aR, LR, nR, UR);
        var qR = WR[0],
          iR = WR[1];
        if (WR[3]) throw qR = 0, iR = 0, NR(WR[2]);
        return uR = qR, ZR = iR, MR(qR, iR)
      } finally {
        mR.Vmxh(uR, ZR, 1)
      }
    }

    function VR() {
      let RR, JR;
      try {
        const GR = mR.wdHH();
        return RR = GR[0], JR = GR[1], MR(GR[0], GR[1])
      } finally {
        mR.Vmxh(RR, JR, 1)
      }
    }

    function KR(RR) {
      let JR, GR;
      try {
        const uR = mR.OIS6(RR);
        var yR = uR[0],
          tR = uR[1];
        if (uR[3]) throw yR = 0, tR = 0, NR(uR[2]);
        return JR = yR, GR = tR, MR(yR, tR)
      } finally {
        mR.Vmxh(JR, GR, 1)
      }
    }

    function wR() {
      return mR.Wt9S() >>> 0
    }

    function rR() {
      let RR, JR;
      try {
        const GR = mR.GAMP();
        return RR = GR[0], JR = GR[1], MR(GR[0], GR[1])
      } finally {
        mR.Vmxh(RR, JR, 1)
      }
    }

    function eR(RR, JR) {
      let GR, yR;
      try {
        const ZR = xR(RR, mR.AwQI),
          qR = zR,
          iR = OR(JR, mR.AwQI),
          fR = zR,
          VR = mR.MRn1(ZR, qR, iR, fR);
        var tR = VR[0],
          uR = VR[1];
        if (VR[3]) throw tR = 0, uR = 0, NR(VR[2]);
        return GR = tR, yR = uR, MR(tR, uR)
      } finally {
        mR.Vmxh(GR, yR, 1)
      }
    }

    function aR(RR) {
      let JR, GR;
      try {
        const uR = mR.iaDq(UR(RR));
        var yR = uR[0],
          tR = uR[1];
        if (uR[3]) throw yR = 0, tR = 0, NR(uR[2]);
        return JR = yR, GR = tR, MR(yR, tR)
      } finally {
        mR.Vmxh(JR, GR, 1)
      }
    }

    function LR() {
      return {
        __proto__: null,
        rBHD: {
          __proto__: null,
          sckj: function(RR, JR) {
            return UR(Error(MR(RR, JR)))
          },
          rAgP: function(RR) {
            return null === gR(RR)
          },
          nyjJ: function(RR) {
            return "string" === typeof gR(RR)
          },
          mXDX: function(RR, JR) {
            const GR = gR(JR),
              yR = "string" === typeof GR ? GR : void 0;
            var tR, uR = void 0 === (tR = yR) || null === tR ? 0 : function(RR, JR, GR) {
                if (void 0 === GR) {
                  const GR = cR.encode(RR),
                    yR = JR(GR.length, 1) >>> 0;
                  return pR().subarray(yR, yR + GR.length).set(GR), zR = GR.length, yR
                }
                let yR = RR.length,
                  tR = JR(yR, 1) >>> 0;
                const uR = pR();
                let ZR = 0;
                for (; ZR < yR; ZR++) {
                  const JR = RR.charCodeAt(ZR);
                  if (JR > 127) break;
                  uR[tR + ZR] = JR
                }
                if (ZR !== yR) {
                  0 !== ZR && (RR = RR.slice(ZR)), tR = GR(tR, yR, yR = ZR + 3 * RR.length, 1) >>> 0;
                  const JR = pR().subarray(tR + ZR, tR + yR);
                  ZR += cR.encodeInto(RR, JR).written, tR = GR(tR, yR, ZR, 1) >>> 0
                }
                return zR = ZR, tR
              }(yR, mR.AwQI, mR.mELj),
              ZR = zR;
            XR().setInt32(RR + 4, ZR, !0), XR().setInt32(RR + 0, uR, !0)
          },
          gFnX: function(RR, JR) {
            throw new Error(MR(RR, JR))
          },
          GTsM: function(RR, JR) {
            return gR(RR).charCodeAt(JR >>> 0)
          },
          ZKep: function(RR, JR) {
            console.error(MR(RR, JR))
          },
          BQTi: function(RR) {
            return gR(RR).length
          },
          ur3M: function(RR, JR) {
            return UR(MR(RR, JR))
          },
          B5s5: function(RR) {
            NR(RR)
          }
        }
      }
    }
    Symbol.dispose && (tR.prototype[Symbol.dispose] = tR.prototype.free);
    const nR = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((RR => mR.o2j9(RR, 1)));

    function UR(RR) {
      vR === bR.length && bR.push(bR.length + 1);
      const JR = vR;
      return vR = bR[JR], bR[JR] = RR, JR
    }

    function WR(RR, JR) {
      RR >>>= 0;
      const GR = XR(),
        yR = [];
      for (let tR = RR; tR < RR + 4 * JR; tR += 4) yR.push(NR(GR.getUint32(tR, !0)));
      return yR
    }

    function AR(RR, JR) {
      return RR >>>= 0, pR().subarray(RR / 1, RR / 1 + JR)
    }
    let CR = null;

    function XR() {
      return null !== CR && CR.buffer === mR.memory.buffer || (CR = new DataView(mR.memory.buffer)), CR
    }

    function MR(RR, JR) {
      return function(RR, JR) {
        oR += JR, oR >= HR && (DR = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), DR.decode(), oR = JR);
        return DR.decode(pR().subarray(RR, RR + JR))
      }(RR >>> 0, JR)
    }
    let BR = null;
    let lR = null;

    function pR() {
      return null !== lR && 0 !== lR.byteLength || (lR = new Uint8Array(mR.memory.buffer)), lR
    }

    function gR(RR) {
      return bR[RR]
    }
    let bR = new Array(1024).fill(void 0);
    bR.push(void 0, null, !0, !1);
    let vR = bR.length;

    function OR(RR, JR) {
      const GR = JR(4 * RR.length, 4) >>> 0;
      return (null !== BR && 0 !== BR.byteLength || (BR = new Uint32Array(mR.memory.buffer)), BR).set(RR, GR / 4), zR = RR.length, GR
    }

    function xR(RR, JR) {
      const GR = JR(4 * RR.length, 4) >>> 0,
        yR = XR();
      for (let tR = 0; tR < RR.length; tR++) yR.setUint32(GR + 4 * tR, UR(RR[tR]), !0);
      return zR = RR.length, GR
    }

    function NR(RR) {
      const JR = gR(RR);
      return function(RR) {
        RR < 1028 || (bR[RR] = vR, vR = RR)
      }(RR), JR
    }
    let DR = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    DR.decode();
    const HR = 2146435072;
    let oR = 0;
    const cR = new TextEncoder;
    "encodeInto" in cR || (cR.encodeInto = function(RR, JR) {
      const GR = cR.encode(RR);
      return JR.set(GR), {
        read: RR.length,
        written: GR.length
      }
    });
    let PR, IR, mR, zR = 0;

    function SR(RR, JR) {
      return IR = RR, mR = RR.exports, PR = JR, CR = null, BR = null, lR = null, mR.aSaB(), mR
    }

    function jR(RR) {
      if (void 0 !== mR) return mR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module: RR
      } = RR) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const JR = LR();
      RR instanceof WebAssembly.Module || (RR = new WebAssembly.Module(RR));
      return SR(new WebAssembly.Instance(RR, JR), RR)
    }
    async function dR(RR) {
      if (void 0 !== mR) return mR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module_or_path: RR
      } = RR) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const JR = LR();
      ("string" === typeof RR || "function" === typeof Request && RR instanceof Request || "function" === typeof URL && RR instanceof URL) && (RR = fetch(RR));
      const {
        instance: GR,
        module: yR
      } = await async function(RR, JR) {
        if ("function" === typeof Response && RR instanceof Response) {
          if (!RR.ok) throw new Error(`failed to fetch Wasm: ${RR.status} ${RR.statusText} fetching '${RR.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(RR, JR)
          } catch (GR) {
            if (! function(RR) {
                switch (RR) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(RR.type) || "application/wasm" === RR.headers.get("Content-Type")) throw GR;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GR)
          }
          const yR = await RR.arrayBuffer();
          return await WebAssembly.instantiate(yR, JR)
        } {
          const GR = await WebAssembly.instantiate(RR, JR);
          return GR instanceof WebAssembly.Instance ? {
            instance: GR,
            module: RR
          } : GR
        }
      }(await RR, JR);
      return SR(GR, yR)
    }
    var ER = GR(2457),
      YR = GR(7762);
    class kR extends Error {
      stage;
      constructor(RR, JR) {
        super((0, ER.z)(RR, JR), {
          cause: JR
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = RR
      }
    }
    let QR = null,
      FR = null;

    function TR() {
      return QR ? Promise.resolve(QR) : (FR || (FR = async function() {
        let RR;
        try {
          RR = await (0, ER.A)(new GR.U(GR(7764)), (0, YR.c)("bloxd_wasm_shader_pack"))
        } catch (JR) {
          throw new kR((0, ER.E)(JR), JR)
        }
        try {
          await dR({
            module_or_path: RR
          })
        } catch (JR) {
          throw new kR("instantiate", JR)
        }
        return QR = yR, QR
      }(), FR.then(void 0, (() => {
        FR = null
      }))), FR)
    }
    var sR = GR(7777);

    function hR(RR) {
      let [JR, GR, yR, tR] = RR;
      const uR = {
        file: JR,
        line: GR,
        message: yR
      };
      return tR && (uR.variants = tR.map(sR.i)), uR
    }

    function RJ(RR) {
      return JSON.parse(RR).map(hR)
    }

    function JJ(RR, JR) {
      if (!Number.isInteger(RR) || RR < 0 || RR > 4294967295) throw new Error(`${JR} ${RR} is not a whole number from 0 to 4294967295`);
      return RR
    }

    function GJ(RR) {
      return [RR.named.map((RR => RR.name)), Uint32Array.from(RR.named, (RR => JJ(RR.id, "Texture ID")))]
    }
    const yJ = new WeakMap;
    const tJ = new WeakMap,
      uJ = new WeakSet;

    function ZJ(RR, JR) {
      if (uJ.has(RR)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return JR()
      } catch (GR) {
        throw GR instanceof WebAssembly.RuntimeError && uJ.add(RR), GR
      }
    }

    function qJ(RR) {
      let JR = tJ.get(RR);
      if (!JR) {
        let GR, yR;
        JR = {
          UJR: (JR, GR) => ZJ(RR, (() => function(RR, JR, GR) {
            const yR = RR.UJR(JR.map((RR => RR.path)), JR.map((RR => RR.source)), ...GJ(GR), GR.aliases.map((RR => RR.name)), GR.aliases.map((RR => RR.texture)), GR.aliases.map((RR => RR.kind)));
            let tR = !1;
            try {
              const RR = yR.validationModuleCodes,
                JR = Array.from(yR.validationModuleKeys, ((JR, GR) => ({
                  key: (0, sR.i)(JR),
                  code: RR[GR]
                }))),
                GR = {
                  errors: RJ(yR.FuR),
                  offInStrict: RJ(yR.TuR),
                  variants: (0, sR.e)(yR),
                  validationModules: JR,
                  features: yR.features
                };
              return JR.forEach(((RR, JR) => {
                yJ.set(RR, {
                  pack: yR,
                  index: JR
                })
              })), tR = JR.length > 0, GR
            } finally {
              tR || yR.free()
            }
          }(RR, JR, GR))),
          mapValidationMessage: (JR, GR) => {
            const yR = yJ.get(JR);
            if (!yR) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return hR(JSON.parse(ZJ(RR, (() => yR.pack.mapValidationMessage(yR.index, GR.lineNum, GR.linePos, GR.message, GR.type)))))
          },
          ZtR: JR => ZJ(RR, (() => function(RR, JR) {
            const GR = new Int32Array(JR.length),
              yR = [];
            return JR.forEach(((RR, JR) => {
              GR[JR] = RR.variants ? RR.variants.length : -1;
              for (const GR of RR.variants ?? []) yR.push((0, sR.h)(GR))
            })), RJ(RR.ZtR(JR.map((RR => RR.file)), Uint32Array.from(JR, (RR => JJ(RR.line, "Diagnostic line"))), JR.map((RR => RR.message)), GR, Uint8Array.from(yR)))
          }(RR, JR))),
          iH: JR => ZJ(RR, (() => RR.iH(...GJ(JR)))),
          get SHADER_PACK_HEADER_VERSION() {
            return GR ??= ZJ(RR, (() => RR.kuR())), GR
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return yR ??= ZJ(RR, (() => {
              const JR = RR.duR();
              return RR.juR().map(((RR, GR) => ({
                path: RR,
                source: JR[GR]
              })))
            })), yR
          },
          QuR: JR => ZJ(RR, (() => RR.QuR(JR))),
          resolveHeader: JR => ZJ(RR, (() => RR.YuR((0, sR.h)(JR)))),
          EuR: () => ZJ(RR, (() => RR.EuR()))
        }, tJ.set(RR, JR)
      }
      return JR
    }
    var iJ = GR(4491),
      fJ = GR(327),
      VJ = GR(7773);
    const KJ = "bloxdShaderPackWasmFailureReported";
    let wJ = null;

    function rJ() {
      return wJ ??= async function() {
        if ("undefined" === typeof WebAssembly) return eJ("unsupported", "This browser has no WebAssembly"), null;
        const RR = (0, VJ.loadShaderPackTextures)().then((() => !0), (RR => (console.error("Could not load the shader pack textures, so shader packs can't run", RR), !1)));
        try {
          await (0, fJ.k)();
          const JR = await async function() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TR;
            return qJ(await RR())
          }();
          return await RR ? JR : null
        } catch (JR) {
          const RR = JR instanceof Error ? JR.message : String(JR);
          return eJ(iJ.d[JR instanceof kR ? JR.stage : "instantiate"], RR), null
        }
      }(), wJ
    }

    function eJ(RR, JR) {
      (0, iJ.j)(KJ, `Shader pack wasm ${RR}, so shader packs can't run: ${JR}`, JR, `shader_pack_${RR}`)
    }
  },
  7764: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_shader_pack_bg.29ad9a715cf58b4595c2.wasm"
  },
  7762: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(2457);
    const tR = {
      bloxd_wasm: () => "31dc7d689c00e0ba537ee7f626a34d0004a848135d46f08eb518035abee4bd78",
      bloxd_wasm_client: () => "3b6f626c672c16835e48be6eda2b8710ce7ef029c244b4a5763ca9c72afd1b15",
      bloxd_wasm_workers: () => "57abc294db658237bc7d99b35bd3f29743c220eedebc8ac3f7feffe93ef605d9",
      bloxd_wasm_models: () => "91848043cbb1596bc2da50dc271a4cd1d5748938f8eaa4bb6e2a97c3115313e3",
      bloxd_wasm_webgpu: () => "f945f7dfcd84e1c2443e02ed24bd7fc26f3a25462a20b367dbcf6b52367ae837",
      bloxd_wasm_webgl: () => "9fbafd6231ee584775c304827d74014f8c15cff0854a0975bc3b6d00259cb13b",
      bloxd_wasm_webgl1: () => "23c52ed9fe5a4512122e2f73d5ee88fdaeeb108903994541446badd1fee1bb4c",
      bloxd_wasm_replay: () => "972e1c6128c0d1cd8598ec680bedb57345cf87b953e82efa23119df1c888426d",
      bloxd_wasm_recorder: () => "c168224dbeb3a34221482e3a0ad41a3c0ebe14db31539da9b26d296033e9fb3d",
      bloxd_wasm_anim: () => "3cc08cf0d193225c4efab3299a0dd42815a95a9b8b44e2d5957de0a151ae7db3",
      bloxd_wasm_textures: () => "78779f7faa55b7ab66454ef9cac79a3b6156f91b60fc795d24d615f3dca40e19",
      bloxd_wasm_shader_pack: () => "2aca035dd9675be55a94be3cc38a846b93983e04d5e35b062d6e7f0e268c5303"
    };
    var uR = GR(5554);

    function ZR(RR) {
      const JR = Object.prototype.hasOwnProperty.call(tR, RR) ? tR[RR]() : void 0;
      if (void 0 !== JR) return {
        sha256: JR,
        onMismatch: uR.E
      };
      throw new yR.g(`${RR} has no release digest, so this build refuses it`)
    }
  },
  7777: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => AR,
      e: () => CR,
      h: () => UR,
      i: () => nR
    });
    var yR = GR(7786);
    const tR = 6,
      uR = 3,
      ZR = 1,
      qR = 2,
      iR = 4,
      fR = 8,
      VR = 16,
      KR = 32,
      wR = 64,
      rR = 128,
      eR = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function aR(RR) {
      if (!RR) return 0;
      const JR = eR.indexOf(RR);
      if (JR <= 0) throw new Error(`"${RR}" is not a shader pack hook function`);
      return JR
    }

    function LR(RR) {
      if (0 === RR) return null;
      const JR = eR[RR];
      if (void 0 === JR) throw new Error(`${RR} is not a shader pack hook function id`);
      return JR
    }

    function nR(RR) {
      const JR = yR.c.length;
      return {
        strict: RR >= JR,
        program: yR.c[RR % JR]
      }
    }

    function UR(RR) {
      return Number(RR.strict) * yR.c.length + yR.c.indexOf(RR.program)
    }

    function WR(RR) {
      return "" === RR ? [] : RR.split(" ")
    }

    function AR(RR) {
      const JR = {
        variantFlags: new Uint8Array(tR),
        hooks: new Uint8Array(tR * uR),
        moduleCodes: Array(tR).fill(""),
        reads: Array(2 * tR).fill("")
      };
      for (const GR of RR) {
        const RR = UR(GR.key),
          yR = (RR, JR) => null === GR.hooks.surface || GR.reads.fragment.includes(RR) ? 0 : JR;
        JR.variantFlags[RR] = (GR.sceneDepth ? ZR : 0) | (GR.movesVertices ? qR : 0) | (GR.sunShadow ? iR : 0) | (GR.airShadow ? fR : 0) | (GR.discards ? VR : 0) | yR("localPosition", KR) | yR("enchantSpeed", wR) | yR("enchantTier", rR), JR.hooks[RR * uR] = aR(GR.hooks.vertex), JR.hooks[RR * uR + 1] = aR(GR.hooks.surface), JR.hooks[RR * uR + 2] = aR(GR.hooks.light), JR.moduleCodes[RR] = GR.moduleCode, JR.reads[2 * RR] = GR.reads.vertex.join(" "), JR.reads[2 * RR + 1] = GR.reads.fragment.join(" ")
      }
      return JR
    }

    function CR(RR) {
      const {
        hooks: JR,
        moduleCodes: GR,
        reads: yR
      } = RR;
      return Array.from(RR.variantFlags, ((RR, tR) => {
        const KR = tR * uR;
        return {
          key: nR(tR),
          hooks: {
            vertex: LR(JR[KR]),
            surface: LR(JR[KR + 1]),
            light: LR(JR[KR + 2])
          },
          moduleCode: GR[tR],
          sceneDepth: 0 !== (RR & ZR),
          sunShadow: 0 !== (RR & iR),
          airShadow: 0 !== (RR & fR),
          movesVertices: 0 !== (RR & qR),
          discards: 0 !== (RR & VR),
          reads: {
            vertex: WR(yR[2 * tR]),
            fragment: WR(yR[2 * tR + 1])
          }
        }
      }))
    }
  },
  7786: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      e: () => ZR,
      i: () => qR,
      l: () => tR,
      n: () => uR
    });
    const yR = ["terrain", "liquid", "model"];

    function tR() {
      const RR = [];
      for (const JR of [!1, !0])
        for (const GR of yR) RR.push({
          strict: JR,
          program: GR
        });
      return RR
    }

    function uR(RR) {
      return `${RR.strict?"strict":"allow"}.${RR.program}`
    }

    function ZR(RR) {
      return !RR.hooks.vertex && !RR.hooks.surface && !RR.hooks.light
    }

    function qR(RR, JR) {
      return "off" !== JR && (null === RR || RR.some((RR => RR.key.strict === ("strict" === JR) && !ZR(RR))))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);