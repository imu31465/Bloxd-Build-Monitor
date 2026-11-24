export const id = 135;
export const ids = [135, 138, 139];
export const modules = {
  6674: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(5136),
      zT = mT(1188);
    const MT = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function gT(TT) {
      let {
        diagnostics: UT,
        more: mT = 0,
        t: gT
      } = TT;
      return (0, zT.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [UT.map(((TT, UT) => {
          const mT = (0, WT.c)(TT),
            nT = function(TT, UT) {
              const mT = (0, WT.b)(null !== TT && void 0 !== TT ? TT : []);
              if (0 === mT.length) return null;
              return mT.map((TT => TT.map((TT => UT(MT[TT]))).join(", "))).join("; ")
            }(TT.variants, gT);
          return (0, zT.jsxs)("li", {
            children: [mT && (0, zT.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: mT
            }), TT.message, nT && (0, zT.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: gT("shaderPack:onlyIn", {
                variants: nT
              })
            })]
          }, UT)
        })), mT > 0 && (0, zT.jsx)("li", {
          children: gT("shaderPack:moreErrors", {
            count: String(mT)
          })
        })]
      })
    }
  },
  6680: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => OT,
      d: () => eT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(5057),
      nT = mT(1446),
      HT = mT(1135),
      kT = mT(1288),
      jT = mT(5142),
      lT = mT(5139),
      LT = mT(3295);
    const pT = 33554432,
      BT = 1024,
      ZT = 65536;
    async function cT(TT) {
      const UT = (0, LT.n)(TT);
      if (UT) {
        if (UT.size > pT) throw new LT.e("shaderPack:loadZipTooBig", {
          megabytes: String(pT / 1048576)
        });
        return async function(TT) {
          return vT((0, LT.j)(TT, BT).map((UT => ({
            path: UT.path,
            read: mT => (0, LT.l)(TT, UT, mT)
          }))))
        }(new Uint8Array(await UT.arrayBuffer()))
      }
      return vT(TT.map((TT => ({
        path: (0, LT.k)(TT),
        read: UT => async function(TT, UT) {
          return TT.size > UT ? null : new Uint8Array(await TT.arrayBuffer())
        }(TT, UT)
      }))))
    }
    async function vT(TT) {
      const UT = function(TT) {
          const UT = TT.length > 0 ? TT[0].path.indexOf("/") : -1;
          if (-1 === UT) return TT;
          const mT = TT[0].path.slice(0, UT + 1);
          if (!TT.every((TT => TT.path.startsWith(mT)))) return TT;
          return TT.map((TT => ({
            ...TT,
            path: TT.path.slice(mT.length)
          })))
        }(TT.filter((TT => !(0, LT.f)(TT.path)))),
        mT = UT.filter((TT => "pack.json" === TT.path.toLowerCase()));
      if (0 === mT.length) throw new LT.e("shaderPack:loadNoManifest");
      if (mT.length > 1) throw new LT.e("shaderPack:loadDuplicateManifest");
      const WT = mT[0],
        zT = await WT.read(ZT);
      if (null === zT) throw new LT.e("shaderPack:loadManifestTooBig", {
        kilobytes: String(ZT / 1024)
      });
      const MT = function(TT) {
          let UT;
          try {
            UT = JSON.parse(TT)
          } catch (nT) {
            throw new LT.e("shaderPack:loadManifestNotJson", {
              error: nT.message
            }, {
              cause: nT
            })
          }
          if ("object" !== typeof UT || null === UT || Array.isArray(UT)) throw new LT.e("shaderPack:loadManifestNotObject");
          const {
            apiVersion: mT,
            name: WT,
            author: zT,
            description: MT,
            keepCircleShadows: gT
          } = UT;
          if (void 0 === mT) throw new LT.e("shaderPack:loadNoApiVersion", {
            version: String(lT.b)
          });
          if (!(0, lT.f)(mT)) throw new LT.e("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(mT),
            version: String(lT.b)
          });
          if ("string" !== typeof WT || "" === WT.trim()) throw new LT.e("shaderPack:loadNoName");
          if (void 0 !== zT && null !== zT && "string" !== typeof zT) throw new LT.e("shaderPack:loadAuthorNotString");
          if (void 0 !== MT && null !== MT && "string" !== typeof MT) throw new LT.e("shaderPack:loadDescriptionNotString");
          if (void 0 !== gT && "boolean" !== typeof gT) throw new LT.e("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: mT,
            name: WT,
            author: "string" === typeof zT ? zT : null,
            description: "string" === typeof MT && "" !== MT.trim() ? MT : null,
            keepCircleShadows: !0 === gT
          }
        }(fT(zT, WT.path)),
        gT = UT.filter((TT => TT.path.toLowerCase().endsWith(".wgsl"))).sort(((TT, UT) => (0, jT.o)(TT.path, UT.path)));
      if (0 === gT.length) throw new LT.e("shaderPack:loadNoWgsl");
      if (gT.length > jT.b) throw new LT.e("shaderPack:loadTooManyWgsl", {
        count: String(jT.b)
      });
      const nT = gT.find(((TT, UT) => UT > 0 && TT.path === gT[UT - 1].path));
      if (nT) throw new LT.e("shaderPack:loadDuplicatePath", {
        path: nT.path
      });
      const HT = [];
      let kT = jT.f;
      for (const lT of gT) {
        const TT = await lT.read(kT);
        if (null === TT) throw new LT.e("shaderPack:loadSourceTooBig", {
          kilobytes: String(jT.f / 1024)
        });
        kT -= TT.byteLength, HT.push({
          path: lT.path,
          source: fT(TT, lT.path)
        })
      }
      return {
        manifest: MT,
        files: HT
      }
    }

    function fT(TT, UT) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(TT)
      } catch (mT) {
        throw new LT.e("shaderPack:loadNotUtf8", {
          path: UT
        }, {
          cause: mT
        })
      }
    }
    var qT = mT(5136),
      iT = mT(5151),
      bT = mT(1188);

    function OT(TT) {
      let {
        busy: UT,
        disabled: mT,
        onFiles: WT
      } = TT;
      const {
        t: zT
      } = (0, kT.z)(), {
        getRootProps: jT,
        getInputProps: lT,
        isDragActive: LT,
        open: pT
      } = (0, gT.b)({
        onDrop: WT,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: mT
      });
      return (0, bT.jsxs)("div", {
        ...jT({
          className: MT()("ShaderPackDropZone", {
            ActiveDrag: LT,
            Disabled: mT
          })
        }),
        children: [(0, bT.jsx)("input", {
          ...lT({
            webkitdirectory: "true"
          })
        }), UT && (0, bT.jsx)(nT.c, {}), !UT && (0, bT.jsxs)(bT.Fragment, {
          children: [(0, bT.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, bT.jsx)(HT.c, {
              name: "up-from-bracket"
            })
          }), (0, bT.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: zT((0, iT.i)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, bT.jsx)(iT.e, {
            disabled: mT,
            openFolderPicker: pT,
            onFiles: WT
          })]
        })]
      })
    }

    function eT(TT) {
      const {
        t: UT
      } = (0, kT.z)(), [mT, zT] = (0, WT.useState)(!1), [MT, gT] = (0, WT.useState)(null), nT = (0, WT.useRef)(!1);
      return {
        loading: mT,
        error: MT,
        setError: gT,
        onFiles: async function(mT) {
          if (!nT.current) {
            nT.current = !0, zT(!0), gT(null);
            try {
              await TT(await cT(mT))
            } catch (WT) {
              WT instanceof LT.e ? gT((0, qT.f)(UT, WT.translationKey, WT.params)) : (console.error("Failed to load the shader pack", WT), gT(UT("shaderPack:unexpectedError")))
            } finally {
              nT.current = !1, zT(!1)
            }
          }
        }
      }
    }
  },
  6719: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      forgetShaderPackActiveHint: () => wT,
      isOtherApiVersion: () => YT,
      isShaderPackActive: () => iT,
      isShaderPackChangePending: () => eT,
      markShaderPackChangePending: () => OT,
      pageShaderPackValidationVersion: () => JT,
      reconcileStoredShaderPackHint: () => dT,
      removeShaderPack: () => qT,
      replaceShaderPack: () => cT,
      saveShaderPack: () => ZT,
      shaderPackNeedsCheck: () => xT,
      storedPackOutcome: () => bT,
      storedShaderPackFiles: () => LT,
      toStoredShaderPack: () => lT
    });
    var WT = mT(5142),
      zT = mT(5139),
      MT = mT(44),
      gT = mT(3551),
      nT = mT(6723),
      HT = mT(6698);
    const kT = "shaderPackChangePending";
    let jT = null;

    function lT(TT, UT, mT) {
      return {
        manifest: TT.manifest,
        files: (0, WT.w)(TT.files),
        validation: UT,
        ...mT && {
          listing: mT
        }
      }
    }

    function LT(TT) {
      return Object.keys(TT.files).map((UT => ({
        path: UT,
        source: TT.files[UT]
      })))
    }
    let pT = Promise.resolve();

    function BT(TT) {
      const UT = pT.then(TT);
      return pT = UT.catch((() => {})), UT
    }

    function ZT(TT, UT) {
      return BT((() => vT(TT, UT)))
    }

    function cT(TT, UT, mT) {
      return BT((async () => JSON.stringify(await (0, nT.h)()) === JSON.stringify(TT) && (null === UT ? (await fT(), !0) : vT(UT, mT))))
    }
    async function vT(TT, UT) {
      const mT = await MT.h.setItem(nT.d, TT);
      return mT && tT(TT, UT), mT
    }
    async function fT() {
      await MT.h.removeItem(nT.d), MT.l.removeItem(gT.e)
    }

    function qT() {
      return BT(fT)
    }

    function iT(TT, UT) {
      return "active" === bT(TT, UT).kind
    }

    function bT(TT, UT) {
      var mT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : YT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.ok) || TT.validation.fromRecheck ? null === UT ? {
        kind: "none",
        reason: "noCompiler"
      } : xT(TT, UT) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : TT.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function OT() {
      MT.m.setItem(kT, performance.timeOrigin)
    }

    function eT() {
      return MT.m.getItem(kT) === performance.timeOrigin
    }

    function YT(TT) {
      return !(0, zT.f)(TT.manifest.apiVersion)
    }

    function JT(TT) {
      return jT ??= TT.JF((0, HT.shaderPackTextures)()), jT
    }

    function xT(TT, UT) {
      var mT;
      return (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.headerVersion) !== JT(UT)
    }

    function dT(TT) {
      return BT((async () => {
        tT(await (0, nT.h)(!0), TT)
      }))
    }

    function wT() {
      return BT((async () => {
        MT.l.removeItem(gT.e)
      }))
    }

    function tT(TT, UT) {
      iT(TT, UT) ? MT.l.setItem(gT.e, !0) : MT.l.removeItem(gT.e)
    }
  },
  6698: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      loadShaderPackTextures: () => gT,
      shaderPackTextures: () => nT
    });
    var WT = mT(5142);
    let zT = null,
      MT = null;

    function gT() {
      return MT ??= Promise.all([mT.e(73), mT.e(190)]).then((() => mT(40614))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: UT,
          textureNameToIndex: mT,
          textureAnimationData: MT
        } = TT;
        return zT ??= (0, WT.l)(mT, MT, UT), zT
      })), MT
    }

    function nT() {
      if (null === zT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return zT
    }
  },
  6716: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => HT,
      f: () => nT
    });
    var WT = mT(6719),
      zT = mT(6698),
      MT = mT(117);
    const gT = 100;
    async function nT(TT, UT) {
      var mT;
      let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (mT = navigator.gpu) && void 0 !== mT ? mT : null;
      const gT = TT.mTT(UT, (0, zT.shaderPackTextures)());
      if (gT.errors.length > 0) return kT(TT, gT.errors, gT.offInStrict);
      const nT = await async function(TT) {
        if (!TT) return null;
        try {
          const UT = await (0, MT.s)(TT);
          return UT ? await UT.requestDevice() : null
        } catch (UT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", UT), null
        }
      }(WT);
      if (!nT) return null;
      let HT = !1;
      nT.lost.then((() => {
        HT = !0
      }));
      try {
        const UT = await Promise.all(gT.validationModules.map((UT => async function(TT, UT, mT) {
          UT.pushErrorScope("validation");
          const WT = UT.createShaderModule({
              code: mT.code
            }),
            zT = UT.popErrorScope(),
            {
              messages: MT
            } = await WT.getCompilationInfo(),
            gT = MT.filter((TT => "error" === TT.type)).map((UT => TT.mapValidationMessage(mT, UT))),
            nT = await zT;
          nT && 0 === gT.length && gT.push({
            file: null,
            line: 0,
            message: nT.message,
            variants: [mT.key]
          });
          return gT
        }(TT, nT, UT))));
        return HT ? null : kT(TT, TT.mWT(UT.flat()), gT.offInStrict)
      } catch (jT) {
        return console.error("Couldn't validate the shader pack on WebGPU.", jT), null
      } finally {
        nT.destroy()
      }
    }
    async function HT(TT, UT) {
      var mT;
      if (!(0, WT.shaderPackNeedsCheck)(TT, UT) || (0, WT.isOtherApiVersion)(TT)) return TT;
      const zT = await nT(UT, (0, WT.storedShaderPackFiles)(TT));
      if (!zT) return TT;
      const MT = !1 === (null === (mT = TT.validation) || void 0 === mT ? void 0 : mT.ok) && !TT.validation.fromRecheck,
        gT = {
          ...TT,
          validation: MT ? zT : {
            ...zT,
            fromRecheck: !0
          }
        };
      return await (0, WT.replaceShaderPack)(TT, gT, UT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), gT
    }

    function kT(TT, UT, mT) {
      return {
        headerVersion: (0, WT.pageShaderPackValidationVersion)(TT),
        ok: 0 === UT.length,
        errors: UT.slice(0, gT),
        moreErrors: Math.max(0, UT.length - gT),
        offInStrict: mT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);