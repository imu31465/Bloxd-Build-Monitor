export const id = 135;
export const ids = [135, 138, 139];
export const modules = {
  6801: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(5208),
      qt = Vt(1188);
    const Dt = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function mt(tt) {
      let {
        diagnostics: et,
        more: Vt = 0,
        t: mt
      } = tt;
      return (0, qt.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [et.map(((tt, et) => {
          const Vt = (0, Ot.f)(tt),
            dt = function(tt, et) {
              const Vt = (0, Ot.b)(null !== tt && void 0 !== tt ? tt : []);
              if (0 === Vt.length) return null;
              return Vt.map((tt => tt.map((tt => et(Dt[tt]))).join(", "))).join("; ")
            }(tt.variants, mt);
          return (0, qt.jsxs)("li", {
            children: [Vt && (0, qt.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Vt
            }), tt.message, dt && (0, qt.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: mt("shaderPack:onlyIn", {
                variants: dt
              })
            })]
          }, et)
        })), Vt > 0 && (0, qt.jsx)("li", {
          children: mt("shaderPack:moreErrors", {
            count: String(Vt)
          })
        })]
      })
    }
  },
  6810: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => ut,
      e: () => Kt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(5124),
      dt = Vt(1436),
      jt = Vt(1152),
      Ht = Vt(1286),
      Xt = Vt(5223),
      Qt = Vt(5216),
      lt = Vt(3223);
    const Et = 33554432,
      ft = 1024,
      wt = 65536;
    async function yt(tt) {
      const et = (0, lt.n)(tt);
      if (et) {
        if (et.size > Et) throw new lt.d("shaderPack:loadZipTooBig", {
          megabytes: String(Et / 1048576)
        });
        return async function(tt) {
          return Nt((0, lt.h)(tt, ft).map((et => ({
            path: et.path,
            read: Vt => (0, lt.m)(tt, et, Vt)
          }))))
        }(new Uint8Array(await et.arrayBuffer()))
      }
      return Nt(tt.map((tt => ({
        path: (0, lt.i)(tt),
        read: et => async function(tt, et) {
          return tt.size > et ? null : new Uint8Array(await tt.arrayBuffer())
        }(tt, et)
      }))))
    }
    async function Nt(tt) {
      const et = function(tt) {
          const et = tt.length > 0 ? tt[0].path.indexOf("/") : -1;
          if (-1 === et) return tt;
          const Vt = tt[0].path.slice(0, et + 1);
          if (!tt.every((tt => tt.path.startsWith(Vt)))) return tt;
          return tt.map((tt => ({
            ...tt,
            path: tt.path.slice(Vt.length)
          })))
        }(tt.filter((tt => !(0, lt.g)(tt.path)))),
        Vt = et.filter((tt => "pack.json" === tt.path.toLowerCase()));
      if (0 === Vt.length) throw new lt.d("shaderPack:loadNoManifest");
      if (Vt.length > 1) throw new lt.d("shaderPack:loadDuplicateManifest");
      const Ot = Vt[0],
        qt = await Ot.read(wt);
      if (null === qt) throw new lt.d("shaderPack:loadManifestTooBig", {
        kilobytes: String(wt / 1024)
      });
      const Dt = function(tt) {
          let et;
          try {
            et = JSON.parse(tt)
          } catch (dt) {
            throw new lt.d("shaderPack:loadManifestNotJson", {
              error: dt.message
            }, {
              cause: dt
            })
          }
          if ("object" !== typeof et || null === et || Array.isArray(et)) throw new lt.d("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Vt,
            name: Ot,
            author: qt,
            description: Dt,
            keepCircleShadows: mt
          } = et;
          if (void 0 === Vt) throw new lt.d("shaderPack:loadNoApiVersion", {
            version: String(Qt.d)
          });
          if (!(0, Qt.h)(Vt)) throw new lt.d("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Vt),
            version: String(Qt.d)
          });
          if ("string" !== typeof Ot || "" === Ot.trim()) throw new lt.d("shaderPack:loadNoName");
          if (void 0 !== qt && null !== qt && "string" !== typeof qt) throw new lt.d("shaderPack:loadAuthorNotString");
          if (void 0 !== Dt && null !== Dt && "string" !== typeof Dt) throw new lt.d("shaderPack:loadDescriptionNotString");
          if (void 0 !== mt && "boolean" !== typeof mt) throw new lt.d("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Vt,
            name: Ot,
            author: "string" === typeof qt ? qt : null,
            description: "string" === typeof Dt && "" !== Dt.trim() ? Dt : null,
            keepCircleShadows: !0 === mt
          }
        }(Mt(qt, Ot.path)),
        mt = et.filter((tt => tt.path.toLowerCase().endsWith(".wgsl"))).sort(((tt, et) => (0, Xt.p)(tt.path, et.path)));
      if (0 === mt.length) throw new lt.d("shaderPack:loadNoWgsl");
      if (mt.length > Xt.e) throw new lt.d("shaderPack:loadTooManyWgsl", {
        count: String(Xt.e)
      });
      const dt = mt.find(((tt, et) => et > 0 && tt.path === mt[et - 1].path));
      if (dt) throw new lt.d("shaderPack:loadDuplicatePath", {
        path: dt.path
      });
      const jt = [];
      let Ht = Xt.h;
      for (const Qt of mt) {
        const tt = await Qt.read(Ht);
        if (null === tt) throw new lt.d("shaderPack:loadSourceTooBig", {
          kilobytes: String(Xt.h / 1024)
        });
        Ht -= tt.byteLength, jt.push({
          path: Qt.path,
          source: Mt(tt, Qt.path)
        })
      }
      return {
        manifest: Dt,
        files: jt
      }
    }

    function Mt(tt, et) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(tt)
      } catch (Vt) {
        throw new lt.d("shaderPack:loadNotUtf8", {
          path: et
        }, {
          cause: Vt
        })
      }
    }
    var bt = Vt(5208),
      Jt = Vt(5228),
      Ct = Vt(1188);

    function ut(tt) {
      let {
        busy: et,
        disabled: Vt,
        onFiles: Ot
      } = tt;
      const {
        t: qt
      } = (0, Ht.H)(), {
        getRootProps: Xt,
        getInputProps: Qt,
        isDragActive: lt,
        open: Et
      } = (0, mt.e)({
        onDrop: Ot,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Vt
      });
      return (0, Ct.jsxs)("div", {
        ...Xt({
          className: Dt()("ShaderPackDropZone", {
            ActiveDrag: lt,
            Disabled: Vt
          })
        }),
        children: [(0, Ct.jsx)("input", {
          ...Qt({
            webkitdirectory: "true"
          })
        }), et && (0, Ct.jsx)(dt.b, {}), !et && (0, Ct.jsxs)(Ct.Fragment, {
          children: [(0, Ct.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Ct.jsx)(jt.b, {
              name: "up-from-bracket"
            })
          }), (0, Ct.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: qt((0, Jt.g)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Ct.jsx)(Jt.d, {
            disabled: Vt,
            openFolderPicker: Et,
            onFiles: Ot
          })]
        })]
      })
    }

    function Kt(tt) {
      const {
        t: et
      } = (0, Ht.H)(), [Vt, qt] = (0, Ot.useState)(!1), [Dt, mt] = (0, Ot.useState)(null), dt = (0, Ot.useRef)(!1);
      return {
        loading: Vt,
        error: Dt,
        setError: mt,
        onFiles: async function(Vt) {
          if (!dt.current) {
            dt.current = !0, qt(!0), mt(null);
            try {
              await tt(await yt(Vt))
            } catch (Ot) {
              Ot instanceof lt.d ? mt((0, bt.j)(et, Ot.translationKey, Ot.params)) : (console.error("Failed to load the shader pack", Ot), mt(et("shaderPack:unexpectedError")))
            } finally {
              dt.current = !1, qt(!1)
            }
          }
        }
      }
    }
  },
  6866: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      forgetShaderPackActiveHint: () => ct,
      isOtherApiVersion: () => ht,
      isShaderPackActive: () => Jt,
      isShaderPackChangePending: () => Kt,
      markShaderPackChangePending: () => ut,
      pageShaderPackValidationVersion: () => vt,
      reconcileStoredShaderPackHint: () => St,
      removeShaderPack: () => bt,
      replaceShaderPack: () => yt,
      saveShaderPack: () => wt,
      shaderPackNeedsCheck: () => Wt,
      storedPackOutcome: () => Ct,
      storedShaderPackFiles: () => lt,
      toStoredShaderPack: () => Qt
    });
    var Ot = Vt(5223),
      qt = Vt(5216),
      Dt = Vt(39),
      mt = Vt(3524),
      dt = Vt(6873),
      jt = Vt(6830);
    const Ht = "shaderPackChangePending";
    let Xt = null;

    function Qt(tt, et, Vt) {
      return {
        manifest: tt.manifest,
        files: (0, Ot.C)(tt.files),
        validation: et,
        ...Vt && {
          listing: Vt
        }
      }
    }

    function lt(tt) {
      return Object.keys(tt.files).map((et => ({
        path: et,
        source: tt.files[et]
      })))
    }
    let Et = Promise.resolve();

    function ft(tt) {
      const et = Et.then(tt);
      return Et = et.catch((() => {})), et
    }

    function wt(tt, et) {
      return ft((() => Nt(tt, et)))
    }

    function yt(tt, et, Vt) {
      return ft((async () => JSON.stringify(await (0, dt.g)()) === JSON.stringify(tt) && (null === et ? (await Mt(), !0) : Nt(et, Vt))))
    }
    async function Nt(tt, et) {
      const Vt = await Dt.c.setItem(dt.e, tt);
      return Vt && Rt(tt, et), Vt
    }
    async function Mt() {
      await Dt.c.removeItem(dt.e), Dt.e.removeItem(mt.e)
    }

    function bt() {
      return ft(Mt)
    }

    function Jt(tt, et) {
      return "active" === Ct(tt, et).kind
    }

    function Ct(tt, et) {
      var Vt;
      return null === tt ? {
        kind: "none",
        reason: "nothingStored"
      } : ht(tt) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) || tt.validation.fromRecheck ? null === et ? {
        kind: "none",
        reason: "noCompiler"
      } : Wt(tt, et) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : tt.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ut() {
      Dt.h.setItem(Ht, performance.timeOrigin)
    }

    function Kt() {
      return Dt.h.getItem(Ht) === performance.timeOrigin
    }

    function ht(tt) {
      return !(0, qt.h)(tt.manifest.apiVersion)
    }

    function vt(tt) {
      return Xt ??= tt.yI((0, jt.shaderPackTextures)()), Xt
    }

    function Wt(tt, et) {
      var Vt;
      return (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.headerVersion) !== vt(et)
    }

    function St(tt) {
      return ft((async () => {
        Rt(await (0, dt.g)(!0), tt)
      }))
    }

    function ct() {
      return ft((async () => {
        Dt.e.removeItem(mt.e)
      }))
    }

    function Rt(tt, et) {
      Jt(tt, et) ? Dt.e.setItem(mt.e, !0) : Dt.e.removeItem(mt.e)
    }
  },
  6830: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      loadShaderPackTextures: () => mt,
      shaderPackTextures: () => dt
    });
    var Ot = Vt(5223);
    let qt = null,
      Dt = null;

    function mt() {
      return Dt ??= Promise.all([Vt.e(73), Vt.e(190)]).then((() => Vt(40674))).then((tt => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: et,
          textureNameToIndex: Vt,
          textureAnimationData: Dt
        } = tt;
        return qt ??= (0, Ot.m)(Vt, Dt, et), qt
      })), Dt
    }

    function dt() {
      if (null === qt) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qt
    }
  },
  6857: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      f: () => dt
    });
    var Ot = Vt(6866),
      qt = Vt(6830),
      Dt = Vt(133);
    const mt = 100;
    async function dt(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Vt = navigator.gpu) && void 0 !== Vt ? Vt : null;
      const mt = tt.mtt(et, (0, qt.shaderPackTextures)());
      if (mt.errors.length > 0) return Ht(tt, mt.errors, mt.offInStrict);
      const dt = await async function(tt) {
        if (!tt) return null;
        try {
          const et = await (0, Dt.t)(tt);
          return et ? await et.requestDevice() : null
        } catch (et) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", et), null
        }
      }(Ot);
      if (!dt) return null;
      let jt = !1;
      dt.lost.then((() => {
        jt = !0
      }));
      try {
        const et = await Promise.all(mt.validationModules.map((et => async function(tt, et, Vt) {
          et.pushErrorScope("validation");
          const Ot = et.createShaderModule({
              code: Vt.code
            }),
            qt = et.popErrorScope(),
            {
              messages: Dt
            } = await Ot.getCompilationInfo(),
            mt = Dt.filter((tt => "error" === tt.type)).map((et => tt.mapValidationMessage(Vt, et))),
            dt = await qt;
          dt && 0 === mt.length && mt.push({
            file: null,
            line: 0,
            message: dt.message,
            variants: [Vt.key]
          });
          return mt
        }(tt, dt, et))));
        return jt ? null : Ht(tt, tt.uOt(et.flat()), mt.offInStrict)
      } catch (Xt) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Xt), null
      } finally {
        dt.destroy()
      }
    }
    async function jt(tt, et) {
      var Vt;
      if (!(0, Ot.shaderPackNeedsCheck)(tt, et) || (0, Ot.isOtherApiVersion)(tt)) return tt;
      const qt = await dt(et, (0, Ot.storedShaderPackFiles)(tt));
      if (!qt) return tt;
      const Dt = !1 === (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) && !tt.validation.fromRecheck,
        mt = {
          ...tt,
          validation: Dt ? qt : {
            ...qt,
            fromRecheck: !0
          }
        };
      return await (0, Ot.replaceShaderPack)(tt, mt, et) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mt
    }

    function Ht(tt, et, Vt) {
      return {
        headerVersion: (0, Ot.pageShaderPackValidationVersion)(tt),
        ok: 0 === et.length,
        errors: et.slice(0, mt),
        moreErrors: Math.max(0, et.length - mt),
        offInStrict: Vt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);