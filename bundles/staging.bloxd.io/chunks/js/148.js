export const id = 148;
export const ids = [148, 152, 153];
export const modules = {
  7242: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(5557),
      be = He(1228);
    const Me = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Ke(ee) {
      let {
        diagnostics: ie,
        more: He = 0,
        t: Ke
      } = ee;
      return (0, be.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [ie.map(((ee, ie) => {
          const He = (0, ye.e)(ee),
            Ue = function(ee, ie) {
              const He = (0, ye.d)(null !== ee && void 0 !== ee ? ee : []);
              if (0 === He.length) return null;
              return He.map((ee => ee.map((ee => ie(Me[ee]))).join(", "))).join("; ")
            }(ee.variants, Ke);
          return (0, be.jsxs)("li", {
            children: [He && (0, be.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: He
            }), ee.message, Ue && (0, be.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Ke("shaderPack:onlyIn", {
                variants: Ue
              })
            })]
          }, ie)
        })), He > 0 && (0, be.jsx)("li", {
          children: Ke("shaderPack:moreErrors", {
            count: String(He)
          })
        })]
      })
    }
  },
  7247: (ee, ie, He) => {
    He.d(ie, {
      b: () => Oe,
      f: () => de
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(5454),
      Ue = He(1320),
      Fe = He(1323),
      Je = He(1127),
      oe = He(5570),
      Re = He(5563),
      ke = He(3482);
    const qe = 33554432,
      fe = 1024,
      Te = 65536;
    async function pe(ee) {
      const ie = (0, ke.l)(ee);
      if (ie) {
        if (ie.size > qe) throw new ke.b("shaderPack:loadZipTooBig", {
          megabytes: String(qe / 1048576)
        });
        return async function(ee) {
          return Xe((0, ke.f)(ee, fe).map((ie => ({
            path: ie.path,
            read: He => (0, ke.k)(ee, ie, He)
          }))))
        }(new Uint8Array(await ie.arrayBuffer()))
      }
      return Xe(ee.map((ee => ({
        path: (0, ke.g)(ee),
        read: ie => async function(ee, ie) {
          return ee.size > ie ? null : new Uint8Array(await ee.arrayBuffer())
        }(ee, ie)
      }))))
    }
    async function Xe(ee) {
      const ie = function(ee) {
          const ie = ee.length > 0 ? ee[0].path.indexOf("/") : -1;
          if (-1 === ie) return ee;
          const He = ee[0].path.slice(0, ie + 1);
          if (!ee.every((ee => ee.path.startsWith(He)))) return ee;
          return ee.map((ee => ({
            ...ee,
            path: ee.path.slice(He.length)
          })))
        }(ee.filter((ee => !(0, ke.d)(ee.path)))),
        He = ie.filter((ee => "pack.json" === ee.path.toLowerCase()));
      if (0 === He.length) throw new ke.b("shaderPack:loadNoManifest");
      if (He.length > 1) throw new ke.b("shaderPack:loadDuplicateManifest");
      const ye = He[0],
        be = await ye.read(Te);
      if (null === be) throw new ke.b("shaderPack:loadManifestTooBig", {
        kilobytes: String(Te / 1024)
      });
      const Me = function(ee) {
          let ie;
          try {
            ie = JSON.parse(ee)
          } catch (Ue) {
            throw new ke.b("shaderPack:loadManifestNotJson", {
              error: Ue.message
            }, {
              cause: Ue
            })
          }
          if ("object" !== typeof ie || null === ie || Array.isArray(ie)) throw new ke.b("shaderPack:loadManifestNotObject");
          const {
            apiVersion: He,
            name: ye,
            author: be,
            description: Me,
            keepCircleShadows: Ke
          } = ie;
          if (void 0 === He) throw new ke.b("shaderPack:loadNoApiVersion", {
            version: String(Re.c)
          });
          if (!(0, Re.h)(He)) throw new ke.b("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(He),
            version: String(Re.c)
          });
          if ("string" !== typeof ye || "" === ye.trim()) throw new ke.b("shaderPack:loadNoName");
          if (void 0 !== be && null !== be && "string" !== typeof be) throw new ke.b("shaderPack:loadAuthorNotString");
          if (void 0 !== Me && null !== Me && "string" !== typeof Me) throw new ke.b("shaderPack:loadDescriptionNotString");
          if (void 0 !== Ke && "boolean" !== typeof Ke) throw new ke.b("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: He,
            name: ye,
            author: "string" === typeof be ? be : null,
            description: "string" === typeof Me && "" !== Me.trim() ? Me : null,
            keepCircleShadows: !0 === Ke
          }
        }(ze(be, ye.path)),
        Ke = ie.filter((ee => ee.path.toLowerCase().endsWith(".wgsl"))).sort(((ee, ie) => (0, oe.k)(ee.path, ie.path)));
      if (0 === Ke.length) throw new ke.b("shaderPack:loadNoWgsl");
      if (Ke.length > oe.b) throw new ke.b("shaderPack:loadTooManyWgsl", {
        count: String(oe.b)
      });
      const Ue = Ke.find(((ee, ie) => ie > 0 && ee.path === Ke[ie - 1].path));
      if (Ue) throw new ke.b("shaderPack:loadDuplicatePath", {
        path: Ue.path
      });
      const Fe = [];
      let Je = oe.d;
      for (const Re of Ke) {
        const ee = await Re.read(Je);
        if (null === ee) throw new ke.b("shaderPack:loadSourceTooBig", {
          kilobytes: String(oe.d / 1024)
        });
        Je -= ee.byteLength, Fe.push({
          path: Re.path,
          source: ze(ee, Re.path)
        })
      }
      return {
        manifest: Me,
        files: Fe
      }
    }

    function ze(ee, ie) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(ee)
      } catch (He) {
        throw new ke.b("shaderPack:loadNotUtf8", {
          path: ie
        }, {
          cause: He
        })
      }
    }
    var Be = He(5557),
      Ee = He(5578),
      ge = He(1228);

    function Oe(ee) {
      let {
        busy: ie,
        disabled: He,
        onFiles: ye
      } = ee;
      const {
        t: be
      } = (0, Je.v)(), {
        getRootProps: oe,
        getInputProps: Re,
        isDragActive: ke,
        open: qe
      } = (0, Ke.d)({
        onDrop: ye,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: He
      });
      return (0, ge.jsxs)("div", {
        ...oe({
          className: Me()("ShaderPackDropZone", {
            ActiveDrag: ke,
            Disabled: He
          })
        }),
        children: [(0, ge.jsx)("input", {
          ...Re({
            webkitdirectory: "true"
          })
        }), ie && (0, ge.jsx)(Ue.b, {}), !ie && (0, ge.jsxs)(ge.Fragment, {
          children: [(0, ge.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, ge.jsx)(Fe.e, {
              name: "up-from-bracket"
            })
          }), (0, ge.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: be((0, Ee.f)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, ge.jsx)(Ee.e, {
            disabled: He,
            openFolderPicker: qe,
            onFiles: ye
          })]
        })]
      })
    }

    function de(ee) {
      const {
        t: ie
      } = (0, Je.v)(), [He, be] = (0, ye.useState)(!1), [Me, Ke] = (0, ye.useState)(null), Ue = (0, ye.useRef)(!1);
      return {
        loading: He,
        error: Me,
        setError: Ke,
        onFiles: async function(He) {
          if (!Ue.current) {
            Ue.current = !0, be(!0), Ke(null);
            try {
              await ee(await pe(He))
            } catch (ye) {
              ye instanceof ke.b ? Ke((0, Be.i)(ie, ye.translationKey, ye.params)) : (console.error("Failed to load the shader pack", ye), Ke(ie("shaderPack:unexpectedError")))
            } finally {
              Ue.current = !1, be(!1)
            }
          }
        }
      }
    }
  },
  7290: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      forgetShaderPackActiveHint: () => De,
      isOtherApiVersion: () => We,
      isShaderPackActive: () => Ee,
      isShaderPackChangePending: () => de,
      markShaderPackChangePending: () => Oe,
      pageShaderPackValidationVersion: () => te,
      reconcileStoredShaderPackHint: () => we,
      removeShaderPack: () => Be,
      replaceShaderPack: () => pe,
      saveShaderPack: () => Te,
      shaderPackNeedsCheck: () => Ze,
      storedPackOutcome: () => ge,
      storedShaderPackFiles: () => ke,
      toStoredShaderPack: () => Re
    });
    var ye = He(5570),
      be = He(5563),
      Me = He(35),
      Ke = He(3808),
      Ue = He(7296),
      Fe = He(7262);
    const Je = "shaderPackChangePending";
    let oe = null;

    function Re(ee, ie, He) {
      return {
        manifest: ee.manifest,
        files: (0, ye.s)(ee.files),
        validation: ie,
        ...He && {
          listing: He
        }
      }
    }

    function ke(ee) {
      return Object.keys(ee.files).map((ie => ({
        path: ie,
        source: ee.files[ie]
      })))
    }
    let qe = Promise.resolve();

    function fe(ee) {
      const ie = qe.then(ee);
      return qe = ie.catch((() => {})), ie
    }

    function Te(ee, ie) {
      return fe((() => Xe(ee, ie)))
    }

    function pe(ee, ie, He) {
      return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
    }
    async function Xe(ee, ie) {
      const He = await Me.e.setItem(Ue.e, ee);
      return He && Pe(ee, ie), He
    }
    async function ze() {
      await Me.e.removeItem(Ue.e), Me.i.removeItem(Ke.b)
    }

    function Be() {
      return fe(ze)
    }

    function Ee(ee, ie) {
      return "active" === ge(ee, ie).kind
    }

    function ge(ee, ie) {
      var He;
      return null === ee ? {
        kind: "none",
        reason: "nothingStored"
      } : We(ee) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) || ee.validation.fromRecheck ? null === ie ? {
        kind: "none",
        reason: "noCompiler"
      } : Ze(ee, ie) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : ee.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Oe() {
      Me.m.setItem(Je, performance.timeOrigin)
    }

    function de() {
      return Me.m.getItem(Je) === performance.timeOrigin
    }

    function We(ee) {
      return !(0, be.h)(ee.manifest.apiVersion)
    }

    function te(ee) {
      return oe ??= ee.cV((0, Fe.shaderPackTextures)()), oe
    }

    function Ze(ee, ie) {
      var He;
      return (null === (He = ee.validation) || void 0 === He ? void 0 : He.headerVersion) !== te(ie)
    }

    function we(ee) {
      return fe((async () => {
        Pe(await (0, Ue.h)(!0), ee)
      }))
    }

    function De() {
      return fe((async () => {
        Me.i.removeItem(Ke.b)
      }))
    }

    function Pe(ee, ie) {
      Ee(ee, ie) ? Me.i.setItem(Ke.b, !0) : Me.i.removeItem(Ke.b)
    }
  },
  7262: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadShaderPackTextures: () => Ke,
      shaderPackTextures: () => Ue
    });
    var ye = He(5570);
    let be = null,
      Me = null;

    function Ke() {
      return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ie,
          textureNameToIndex: He,
          textureAnimationData: Me
        } = ee;
        return be ??= (0, ye.h)(He, Me, ie), be
      })), Me
    }

    function Ue() {
      if (null === be) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return be
    }
  },
  7283: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      g: () => Ue
    });
    var ye = He(7290),
      be = He(7262),
      Me = He(115);
    const Ke = 100;
    async function Ue(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (He = navigator.gpu) && void 0 !== He ? He : null;
      const Ke = ee.vie(ie, (0, be.shaderPackTextures)());
      if (Ke.errors.length > 0) return Je(ee, Ke.errors, Ke.offInStrict);
      const Ue = await async function(ee) {
        if (!ee) return null;
        try {
          const ie = await (0, Me.v)(ee);
          return ie ? await ie.requestDevice() : null
        } catch (ie) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ie), null
        }
      }(ye);
      if (!Ue) return null;
      let Fe = !1;
      Ue.lost.then((() => {
        Fe = !0
      }));
      try {
        const ie = await Promise.all(Ke.validationModules.map((ie => async function(ee, ie, He) {
          ie.pushErrorScope("validation");
          const ye = ie.createShaderModule({
              code: He.code
            }),
            be = ie.popErrorScope(),
            {
              messages: Me
            } = await ye.getCompilationInfo(),
            Ke = Me.filter((ee => "error" === ee.type)).map((ie => ee.mapValidationMessage(He, ie))),
            Ue = await be;
          Ue && 0 === Ke.length && Ke.push({
            file: null,
            line: 0,
            message: Ue.message,
            variants: [He.key]
          });
          return Ke
        }(ee, Ue, ie))));
        return Fe ? null : Je(ee, ee.Lbe(ie.flat()), Ke.offInStrict)
      } catch (oe) {
        return console.error("Couldn't validate the shader pack on WebGPU.", oe), null
      } finally {
        Ue.destroy()
      }
    }
    async function Fe(ee, ie) {
      var He;
      if (!(0, ye.shaderPackNeedsCheck)(ee, ie) || (0, ye.isOtherApiVersion)(ee)) return ee;
      const be = await Ue(ie, (0, ye.storedShaderPackFiles)(ee));
      if (!be) return ee;
      const Me = !1 === (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) && !ee.validation.fromRecheck,
        Ke = {
          ...ee,
          validation: Me ? be : {
            ...be,
            fromRecheck: !0
          }
        };
      return await (0, ye.replaceShaderPack)(ee, Ke, ie) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ke
    }

    function Je(ee, ie, He) {
      return {
        headerVersion: (0, ye.pageShaderPackValidationVersion)(ee),
        ok: 0 === ie.length,
        errors: ie.slice(0, Ke),
        moreErrors: Math.max(0, ie.length - Ke),
        offInStrict: He
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);