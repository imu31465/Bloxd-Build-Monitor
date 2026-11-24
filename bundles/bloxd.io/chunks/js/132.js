export const id = 132;
export const ids = [132, 136, 137];
export const modules = {
  6552: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(4980),
      Am = fm(1135);
    const am = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function xm(mm) {
      let {
        diagnostics: Tm,
        more: fm = 0,
        t: xm
      } = mm;
      return (0, Am.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Tm.map(((mm, Tm) => {
          const fm = (0, hm.f)(mm),
            wm = function(mm, Tm) {
              const fm = (0, hm.c)(null !== mm && void 0 !== mm ? mm : []);
              if (0 === fm.length) return null;
              return fm.map((mm => mm.map((mm => Tm(am[mm]))).join(", "))).join("; ")
            }(mm.variants, xm);
          return (0, Am.jsxs)("li", {
            children: [fm && (0, Am.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: fm
            }), mm.message, wm && (0, Am.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: xm("shaderPack:onlyIn", {
                variants: wm
              })
            })]
          }, Tm)
        })), fm > 0 && (0, Am.jsx)("li", {
          children: xm("shaderPack:moreErrors", {
            count: String(fm)
          })
        })]
      })
    }
  },
  6555: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => nm,
      f: () => Jm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(4904),
      wm = fm(1345),
      Dm = fm(1089),
      im = fm(1208),
      Rm = fm(4989),
      pm = fm(4985),
      Em = fm(3158);
    const om = 33554432,
      Om = 1024,
      Ym = 65536;
    async function qm(mm) {
      const Tm = (0, Em.k)(mm);
      if (Tm) {
        if (Tm.size > om) throw new Em.c("shaderPack:loadZipTooBig", {
          megabytes: String(om / 1048576)
        });
        return async function(mm) {
          return jm((0, Em.g)(mm, Om).map((Tm => ({
            path: Tm.path,
            read: fm => (0, Em.j)(mm, Tm, fm)
          }))))
        }(new Uint8Array(await Tm.arrayBuffer()))
      }
      return jm(mm.map((mm => ({
        path: (0, Em.h)(mm),
        read: Tm => async function(mm, Tm) {
          return mm.size > Tm ? null : new Uint8Array(await mm.arrayBuffer())
        }(mm, Tm)
      }))))
    }
    async function jm(mm) {
      const Tm = function(mm) {
          const Tm = mm.length > 0 ? mm[0].path.indexOf("/") : -1;
          if (-1 === Tm) return mm;
          const fm = mm[0].path.slice(0, Tm + 1);
          if (!mm.every((mm => mm.path.startsWith(fm)))) return mm;
          return mm.map((mm => ({
            ...mm,
            path: mm.path.slice(fm.length)
          })))
        }(mm.filter((mm => !(0, Em.f)(mm.path)))),
        fm = Tm.filter((mm => "pack.json" === mm.path.toLowerCase()));
      if (0 === fm.length) throw new Em.c("shaderPack:loadNoManifest");
      if (fm.length > 1) throw new Em.c("shaderPack:loadDuplicateManifest");
      const hm = fm[0],
        Am = await hm.read(Ym);
      if (null === Am) throw new Em.c("shaderPack:loadManifestTooBig", {
        kilobytes: String(Ym / 1024)
      });
      const am = function(mm) {
          let Tm;
          try {
            Tm = JSON.parse(mm)
          } catch (wm) {
            throw new Em.c("shaderPack:loadManifestNotJson", {
              error: wm.message
            }, {
              cause: wm
            })
          }
          if ("object" !== typeof Tm || null === Tm || Array.isArray(Tm)) throw new Em.c("shaderPack:loadManifestNotObject");
          const {
            apiVersion: fm,
            name: hm,
            author: Am,
            description: am,
            keepCircleShadows: xm
          } = Tm;
          if (void 0 === fm) throw new Em.c("shaderPack:loadNoApiVersion", {
            version: String(pm.c)
          });
          if (!(0, pm.e)(fm)) throw new Em.c("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(fm),
            version: String(pm.c)
          });
          if ("string" !== typeof hm || "" === hm.trim()) throw new Em.c("shaderPack:loadNoName");
          if (void 0 !== Am && null !== Am && "string" !== typeof Am) throw new Em.c("shaderPack:loadAuthorNotString");
          if (void 0 !== am && null !== am && "string" !== typeof am) throw new Em.c("shaderPack:loadDescriptionNotString");
          if (void 0 !== xm && "boolean" !== typeof xm) throw new Em.c("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: fm,
            name: hm,
            author: "string" === typeof Am ? Am : null,
            description: "string" === typeof am && "" !== am.trim() ? am : null,
            keepCircleShadows: !0 === xm
          }
        }(Vm(Am, hm.path)),
        xm = Tm.filter((mm => mm.path.toLowerCase().endsWith(".wgsl"))).sort(((mm, Tm) => (0, Rm.i)(mm.path, Tm.path)));
      if (0 === xm.length) throw new Em.c("shaderPack:loadNoWgsl");
      if (xm.length > Rm.b) throw new Em.c("shaderPack:loadTooManyWgsl", {
        count: String(Rm.b)
      });
      const wm = xm.find(((mm, Tm) => Tm > 0 && mm.path === xm[Tm - 1].path));
      if (wm) throw new Em.c("shaderPack:loadDuplicatePath", {
        path: wm.path
      });
      const Dm = [];
      let im = Rm.c;
      for (const pm of xm) {
        const mm = await pm.read(im);
        if (null === mm) throw new Em.c("shaderPack:loadSourceTooBig", {
          kilobytes: String(Rm.c / 1024)
        });
        im -= mm.byteLength, Dm.push({
          path: pm.path,
          source: Vm(mm, pm.path)
        })
      }
      return {
        manifest: am,
        files: Dm
      }
    }

    function Vm(mm, Tm) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(mm)
      } catch (fm) {
        throw new Em.c("shaderPack:loadNotUtf8", {
          path: Tm
        }, {
          cause: fm
        })
      }
    }
    var Im = fm(4980),
      Km = fm(4993),
      Qm = fm(1135);

    function nm(mm) {
      let {
        busy: Tm,
        disabled: fm,
        onFiles: hm
      } = mm;
      const {
        t: Am
      } = (0, im.A)(), {
        getRootProps: Rm,
        getInputProps: pm,
        isDragActive: Em,
        open: om
      } = (0, xm.e)({
        onDrop: hm,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: fm
      });
      return (0, Qm.jsxs)("div", {
        ...Rm({
          className: am()("ShaderPackDropZone", {
            ActiveDrag: Em,
            Disabled: fm
          })
        }),
        children: [(0, Qm.jsx)("input", {
          ...pm({
            webkitdirectory: "true"
          })
        }), Tm && (0, Qm.jsx)(wm.c, {}), !Tm && (0, Qm.jsxs)(Qm.Fragment, {
          children: [(0, Qm.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Qm.jsx)(Dm.c, {
              name: "up-from-bracket"
            })
          }), (0, Qm.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Am((0, Km.h)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Qm.jsx)(Km.e, {
            disabled: fm,
            openFolderPicker: om,
            onFiles: hm
          })]
        })]
      })
    }

    function Jm(mm) {
      const {
        t: Tm
      } = (0, im.A)(), [fm, Am] = (0, hm.useState)(!1), [am, xm] = (0, hm.useState)(null), wm = (0, hm.useRef)(!1);
      return {
        loading: fm,
        error: am,
        setError: xm,
        onFiles: async function(fm) {
          if (!wm.current) {
            wm.current = !0, Am(!0), xm(null);
            try {
              await mm(await qm(fm))
            } catch (hm) {
              hm instanceof Em.c ? xm((0, Im.j)(Tm, hm.translationKey, hm.params)) : (console.error("Failed to load the shader pack", hm), xm(Tm("shaderPack:unexpectedError")))
            } finally {
              wm.current = !1, Am(!1)
            }
          }
        }
      }
    }
  },
  6600: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      forgetShaderPackActiveHint: () => bm,
      isOtherApiVersion: () => cm,
      isShaderPackActive: () => Km,
      isShaderPackChangePending: () => Jm,
      markShaderPackChangePending: () => nm,
      pageShaderPackValidationVersion: () => zm,
      reconcileStoredShaderPackHint: () => km,
      removeShaderPack: () => Im,
      replaceShaderPack: () => qm,
      saveShaderPack: () => Ym,
      shaderPackNeedsCheck: () => Zm,
      storedPackOutcome: () => Qm,
      storedShaderPackFiles: () => Em,
      toStoredShaderPack: () => pm
    });
    var hm = fm(4989),
      Am = fm(4985),
      am = fm(37),
      xm = fm(3461),
      wm = fm(6609),
      Dm = fm(6578);
    const im = "shaderPackChangePending";
    let Rm = null;

    function pm(mm, Tm, fm) {
      return {
        manifest: mm.manifest,
        files: (0, hm.r)(mm.files),
        validation: Tm,
        ...fm && {
          listing: fm
        }
      }
    }

    function Em(mm) {
      return Object.keys(mm.files).map((Tm => ({
        path: Tm,
        source: mm.files[Tm]
      })))
    }
    let om = Promise.resolve();

    function Om(mm) {
      const Tm = om.then(mm);
      return om = Tm.catch((() => {})), Tm
    }

    function Ym(mm, Tm) {
      return Om((() => jm(mm, Tm)))
    }

    function qm(mm, Tm, fm) {
      return Om((async () => JSON.stringify(await (0, wm.e)()) === JSON.stringify(mm) && (null === Tm ? (await Vm(), !0) : jm(Tm, fm))))
    }
    async function jm(mm, Tm) {
      const fm = await am.e.setItem(wm.c, mm);
      return fm && Sm(mm, Tm), fm
    }
    async function Vm() {
      await am.e.removeItem(wm.c), am.g.removeItem(xm.b)
    }

    function Im() {
      return Om(Vm)
    }

    function Km(mm, Tm) {
      return "active" === Qm(mm, Tm).kind
    }

    function Qm(mm, Tm) {
      var fm;
      return null === mm ? {
        kind: "none",
        reason: "nothingStored"
      } : cm(mm) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.ok) || mm.validation.fromRecheck ? null === Tm ? {
        kind: "none",
        reason: "noCompiler"
      } : Zm(mm, Tm) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : mm.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function nm() {
      am.k.setItem(im, performance.timeOrigin)
    }

    function Jm() {
      return am.k.getItem(im) === performance.timeOrigin
    }

    function cm(mm) {
      return !(0, Am.e)(mm.manifest.apiVersion)
    }

    function zm(mm) {
      return Rm ??= mm.mG((0, Dm.shaderPackTextures)()), Rm
    }

    function Zm(mm, Tm) {
      var fm;
      return (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.headerVersion) !== zm(Tm)
    }

    function km(mm) {
      return Om((async () => {
        Sm(await (0, wm.e)(!0), mm)
      }))
    }

    function bm() {
      return Om((async () => {
        am.g.removeItem(xm.b)
      }))
    }

    function Sm(mm, Tm) {
      Km(mm, Tm) ? am.g.setItem(xm.b, !0) : am.g.removeItem(xm.b)
    }
  },
  6578: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      loadShaderPackTextures: () => xm,
      shaderPackTextures: () => wm
    });
    var hm = fm(4989);
    let Am = null,
      am = null;

    function xm() {
      return am ??= Promise.all([fm.e(72), fm.e(188)]).then((() => fm(40597))).then((mm => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Tm,
          textureNameToIndex: fm,
          textureAnimationData: am
        } = mm;
        return Am ??= (0, hm.g)(fm, am, Tm), Am
      })), am
    }

    function wm() {
      if (null === Am) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Am
    }
  },
  6595: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      f: () => wm
    });
    var hm = fm(6600),
      Am = fm(6578),
      am = fm(118);
    const xm = 100;
    async function wm(mm, Tm) {
      var fm;
      let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (fm = navigator.gpu) && void 0 !== fm ? fm : null;
      const xm = mm.Z6(Tm, (0, Am.shaderPackTextures)());
      if (xm.errors.length > 0) return im(mm, xm.errors, xm.offInStrict);
      const wm = await async function(mm) {
        if (!mm) return null;
        try {
          const Tm = await (0, am.v)(mm);
          return Tm ? await Tm.requestDevice() : null
        } catch (Tm) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Tm), null
        }
      }(hm);
      if (!wm) return null;
      let Dm = !1;
      wm.lost.then((() => {
        Dm = !0
      }));
      try {
        const Tm = await Promise.all(xm.validationModules.map((Tm => async function(mm, Tm, fm) {
          Tm.pushErrorScope("validation");
          const hm = Tm.createShaderModule({
              code: fm.code
            }),
            Am = Tm.popErrorScope(),
            {
              messages: am
            } = await hm.getCompilationInfo(),
            xm = am.filter((mm => "error" === mm.type)).map((Tm => mm.mapValidationMessage(fm, Tm))),
            wm = await Am;
          wm && 0 === xm.length && xm.push({
            file: null,
            line: 0,
            message: wm.message,
            variants: [fm.key]
          });
          return xm
        }(mm, wm, Tm))));
        return Dm ? null : im(mm, mm.Lfm(Tm.flat()), xm.offInStrict)
      } catch (Rm) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Rm), null
      } finally {
        wm.destroy()
      }
    }
    async function Dm(mm, Tm) {
      var fm;
      if (!(0, hm.shaderPackNeedsCheck)(mm, Tm) || (0, hm.isOtherApiVersion)(mm)) return mm;
      const Am = await wm(Tm, (0, hm.storedShaderPackFiles)(mm));
      if (!Am) return mm;
      const am = !1 === (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.ok) && !mm.validation.fromRecheck,
        xm = {
          ...mm,
          validation: am ? Am : {
            ...Am,
            fromRecheck: !0
          }
        };
      return await (0, hm.replaceShaderPack)(mm, xm, Tm) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), xm
    }

    function im(mm, Tm, fm) {
      return {
        headerVersion: (0, hm.pageShaderPackValidationVersion)(mm),
        ok: 0 === Tm.length,
        errors: Tm.slice(0, xm),
        moreErrors: Math.max(0, Tm.length - xm),
        offInStrict: fm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);