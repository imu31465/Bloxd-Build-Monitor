export const id = 156;
export const ids = [156, 159, 160];
export const modules = {
  7567: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr
    });
    var Zr = Qr(5998),
      Wr = Qr(1338);
    const ar = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function jr(rr) {
      let {
        diagnostics: Sr,
        more: Qr = 0,
        t: jr
      } = rr;
      return (0, Wr.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Sr.map(((rr, Sr) => {
          const Qr = (0, Zr.f)(rr),
            Ir = function(rr, Sr) {
              const Qr = (0, Zr.b)(null !== rr && void 0 !== rr ? rr : []);
              if (0 === Qr.length) return null;
              return Qr.map((rr => rr.map((rr => Sr(ar[rr]))).join(", "))).join("; ")
            }(rr.variants, jr);
          return (0, Wr.jsxs)("li", {
            children: [Qr && (0, Wr.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Qr
            }), rr.message, Ir && (0, Wr.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: jr("shaderPack:onlyIn", {
                variants: Ir
              })
            })]
          }, Sr)
        })), Qr > 0 && (0, Wr.jsx)("li", {
          children: jr("shaderPack:moreErrors", {
            count: String(Qr)
          })
        })]
      })
    }
  },
  7573: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => yr,
      e: () => Br
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(5919),
      Ir = Qr(1444),
      fr = Qr(1448),
      Er = Qr(1251),
      pr = Qr(6007),
      xr = Qr(6005),
      mr = Qr(4371);
    const Nr = 33554432,
      Ur = 1024,
      tr = 65536;
    async function hr(rr) {
      const Sr = (0, mr.r)(rr);
      if (Sr) {
        if (Sr.size > Nr) throw new mr.b("shaderPack:loadZipTooBig", {
          megabytes: String(Nr / 1048576)
        });
        return async function(rr) {
          return zr((0, mr.g)(rr, Ur).map((Sr => ({
            path: Sr.path,
            read: Qr => (0, mr.n)(rr, Sr, Qr)
          }))))
        }(new Uint8Array(await Sr.arrayBuffer()))
      }
      return zr(rr.map((rr => ({
        path: (0, mr.j)(rr),
        read: Sr => async function(rr, Sr) {
          return rr.size > Sr ? null : new Uint8Array(await rr.arrayBuffer())
        }(rr, Sr)
      }))))
    }
    async function zr(rr) {
      const Sr = function(rr) {
          const Sr = rr.length > 0 ? rr[0].path.indexOf("/") : -1;
          if (-1 === Sr) return rr;
          const Qr = rr[0].path.slice(0, Sr + 1);
          if (!rr.every((rr => rr.path.startsWith(Qr)))) return rr;
          return rr.map((rr => ({
            ...rr,
            path: rr.path.slice(Qr.length)
          })))
        }(rr.filter((rr => !(0, mr.e)(rr.path)))),
        Qr = Sr.filter((rr => "pack.json" === rr.path.toLowerCase()));
      if (0 === Qr.length) throw new mr.b("shaderPack:loadNoManifest");
      if (Qr.length > 1) throw new mr.b("shaderPack:loadDuplicateManifest");
      const Zr = Qr[0],
        Wr = await Zr.read(tr);
      if (null === Wr) throw new mr.b("shaderPack:loadManifestTooBig", {
        kilobytes: String(tr / 1024)
      });
      const ar = function(rr) {
          let Sr;
          try {
            Sr = JSON.parse(rr)
          } catch (Ir) {
            throw new mr.b("shaderPack:loadManifestNotJson", {
              error: Ir.message
            }, {
              cause: Ir
            })
          }
          if ("object" !== typeof Sr || null === Sr || Array.isArray(Sr)) throw new mr.b("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Qr,
            name: Zr,
            author: Wr,
            description: ar,
            keepCircleShadows: jr
          } = Sr;
          if (void 0 === Qr) throw new mr.b("shaderPack:loadNoApiVersion", {
            version: String(xr.d)
          });
          if (!(0, xr.i)(Qr)) throw new mr.b("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Qr),
            version: String(xr.d)
          });
          if ("string" !== typeof Zr || "" === Zr.trim()) throw new mr.b("shaderPack:loadNoName");
          if (void 0 !== Wr && null !== Wr && "string" !== typeof Wr) throw new mr.b("shaderPack:loadAuthorNotString");
          if (void 0 !== ar && null !== ar && "string" !== typeof ar) throw new mr.b("shaderPack:loadDescriptionNotString");
          if (void 0 !== jr && "boolean" !== typeof jr) throw new mr.b("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Qr,
            name: Zr,
            author: "string" === typeof Wr ? Wr : null,
            description: "string" === typeof ar && "" !== ar.trim() ? ar : null,
            keepCircleShadows: !0 === jr
          }
        }(Yr(Wr, Zr.path)),
        jr = Sr.filter((rr => rr.path.toLowerCase().endsWith(".wgsl"))).sort(((rr, Sr) => (0, pr.n)(rr.path, Sr.path)));
      if (0 === jr.length) throw new mr.b("shaderPack:loadNoWgsl");
      if (jr.length > pr.c) throw new mr.b("shaderPack:loadTooManyWgsl", {
        count: String(pr.c)
      });
      const Ir = jr.find(((rr, Sr) => Sr > 0 && rr.path === jr[Sr - 1].path));
      if (Ir) throw new mr.b("shaderPack:loadDuplicatePath", {
        path: Ir.path
      });
      const fr = [];
      let Er = pr.g;
      for (const xr of jr) {
        const rr = await xr.read(Er);
        if (null === rr) throw new mr.b("shaderPack:loadSourceTooBig", {
          kilobytes: String(pr.g / 1024)
        });
        Er -= rr.byteLength, fr.push({
          path: xr.path,
          source: Yr(rr, xr.path)
        })
      }
      return {
        manifest: ar,
        files: fr
      }
    }

    function Yr(rr, Sr) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(rr)
      } catch (Qr) {
        throw new mr.b("shaderPack:loadNotUtf8", {
          path: Sr
        }, {
          cause: Qr
        })
      }
    }
    var nr = Qr(5998),
      er = Qr(6010),
      Kr = Qr(1338);

    function yr(rr) {
      let {
        busy: Sr,
        disabled: Qr,
        onFiles: Zr
      } = rr;
      const {
        t: Wr
      } = (0, Er.E)(), {
        getRootProps: pr,
        getInputProps: xr,
        isDragActive: mr,
        open: Nr
      } = (0, jr.b)({
        onDrop: Zr,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Qr
      });
      return (0, Kr.jsxs)("div", {
        ...pr({
          className: ar()("ShaderPackDropZone", {
            ActiveDrag: mr,
            Disabled: Qr
          })
        }),
        children: [(0, Kr.jsx)("input", {
          ...xr({
            webkitdirectory: "true"
          })
        }), Sr && (0, Kr.jsx)(Ir.c, {}), !Sr && (0, Kr.jsxs)(Kr.Fragment, {
          children: [(0, Kr.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Kr.jsx)(fr.c, {
              name: "up-from-bracket"
            })
          }), (0, Kr.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Wr((0, er.d)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Kr.jsx)(er.c, {
            disabled: Qr,
            openFolderPicker: Nr,
            onFiles: Zr
          })]
        })]
      })
    }

    function Br(rr) {
      const {
        t: Sr
      } = (0, Er.E)(), [Qr, Wr] = (0, Zr.useState)(!1), [ar, jr] = (0, Zr.useState)(null), Ir = (0, Zr.useRef)(!1);
      return {
        loading: Qr,
        error: ar,
        setError: jr,
        onFiles: async function(Qr) {
          if (!Ir.current) {
            Ir.current = !0, Wr(!0), jr(null);
            try {
              await rr(await hr(Qr))
            } catch (Zr) {
              Zr instanceof mr.b ? jr((0, nr.g)(Sr, Zr.translationKey, Zr.params)) : (console.error("Failed to load the shader pack", Zr), jr(Sr("shaderPack:unexpectedError")))
            } finally {
              Ir.current = !1, Wr(!1)
            }
          }
        }
      }
    }
  },
  7615: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      forgetShaderPackActiveHint: () => lr,
      isOtherApiVersion: () => Tr,
      isShaderPackActive: () => er,
      isShaderPackChangePending: () => Br,
      markShaderPackChangePending: () => yr,
      pageShaderPackValidationVersion: () => vr,
      reconcileStoredShaderPackHint: () => Lr,
      removeShaderPack: () => nr,
      replaceShaderPack: () => hr,
      saveShaderPack: () => tr,
      shaderPackNeedsCheck: () => Or,
      storedPackOutcome: () => Kr,
      storedShaderPackFiles: () => mr,
      toStoredShaderPack: () => xr
    });
    var Zr = Qr(6007),
      Wr = Qr(6005),
      ar = Qr(43),
      jr = Qr(4690),
      Ir = Qr(7617),
      fr = Qr(7588);
    const Er = "shaderPackChangePending";
    let pr = null;

    function xr(rr, Sr, Qr) {
      return {
        manifest: rr.manifest,
        files: (0, Zr.w)(rr.files),
        validation: Sr,
        ...Qr && {
          listing: Qr
        }
      }
    }

    function mr(rr) {
      return Object.keys(rr.files).map((Sr => ({
        path: Sr,
        source: rr.files[Sr]
      })))
    }
    let Nr = Promise.resolve();

    function Ur(rr) {
      const Sr = Nr.then(rr);
      return Nr = Sr.catch((() => {})), Sr
    }

    function tr(rr, Sr) {
      return Ur((() => zr(rr, Sr)))
    }

    function hr(rr, Sr, Qr) {
      return Ur((async () => JSON.stringify(await (0, Ir.e)()) === JSON.stringify(rr) && (null === Sr ? (await Yr(), !0) : zr(Sr, Qr))))
    }
    async function zr(rr, Sr) {
      const Qr = await ar.h.setItem(Ir.b, rr);
      return Qr && Xr(rr, Sr), Qr
    }
    async function Yr() {
      await ar.h.removeItem(Ir.b), ar.j.removeItem(jr.b)
    }

    function nr() {
      return Ur(Yr)
    }

    function er(rr, Sr) {
      return "active" === Kr(rr, Sr).kind
    }

    function Kr(rr, Sr) {
      var Qr;
      return null === rr ? {
        kind: "none",
        reason: "nothingStored"
      } : Tr(rr) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) || rr.validation.fromRecheck ? null === Sr ? {
        kind: "none",
        reason: "noCompiler"
      } : Or(rr, Sr) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : rr.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yr() {
      ar.n.setItem(Er, performance.timeOrigin)
    }

    function Br() {
      return ar.n.getItem(Er) === performance.timeOrigin
    }

    function Tr(rr) {
      return !(0, Wr.i)(rr.manifest.apiVersion)
    }

    function vr(rr) {
      return pr ??= rr.rC((0, fr.shaderPackTextures)()), pr
    }

    function Or(rr, Sr) {
      var Qr;
      return (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.headerVersion) !== vr(Sr)
    }

    function Lr(rr) {
      return Ur((async () => {
        Xr(await (0, Ir.e)(!0), rr)
      }))
    }

    function lr() {
      return Ur((async () => {
        ar.j.removeItem(jr.b)
      }))
    }

    function Xr(rr, Sr) {
      er(rr, Sr) ? ar.j.setItem(jr.b, !0) : ar.j.removeItem(jr.b)
    }
  },
  7588: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadShaderPackTextures: () => jr,
      shaderPackTextures: () => Ir
    });
    var Zr = Qr(6007);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Promise.all([Qr.e(85), Qr.e(126)]).then((() => Qr(42330))).then((rr => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Sr,
          textureNameToIndex: Qr,
          textureAnimationData: ar
        } = rr;
        return Wr ??= (0, Zr.k)(Qr, ar, Sr), Wr
      })), ar
    }

    function Ir() {
      if (null === Wr) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wr
    }
  },
  7610: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      e: () => Ir
    });
    var Zr = Qr(7615),
      Wr = Qr(7588),
      ar = Qr(127);
    const jr = 100;
    async function Ir(rr, Sr) {
      var Qr;
      let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Qr = navigator.gpu) && void 0 !== Qr ? Qr : null;
      const jr = rr.Vrr(Sr, (0, Wr.shaderPackTextures)());
      if (jr.errors.length > 0) return Er(rr, jr.errors, jr.offInStrict);
      const Ir = await async function(rr) {
        if (!rr) return null;
        try {
          const Sr = await (0, ar.t)(rr);
          return Sr ? await Sr.requestDevice() : null
        } catch (Sr) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Sr), null
        }
      }(Zr);
      if (!Ir) return null;
      let fr = !1;
      Ir.lost.then((() => {
        fr = !0
      }));
      try {
        const Sr = await Promise.all(jr.validationModules.map((Sr => async function(rr, Sr, Qr) {
          Sr.pushErrorScope("validation");
          const Zr = Sr.createShaderModule({
              code: Qr.code
            }),
            Wr = Sr.popErrorScope(),
            {
              messages: ar
            } = await Zr.getCompilationInfo(),
            jr = ar.filter((rr => "error" === rr.type)).map((Sr => rr.mapValidationMessage(Qr, Sr))),
            Ir = await Wr;
          Ir && 0 === jr.length && jr.push({
            file: null,
            line: 0,
            message: Ir.message,
            variants: [Qr.key]
          });
          return jr
        }(rr, Ir, Sr))));
        return fr ? null : Er(rr, rr.RZr(Sr.flat()), jr.offInStrict)
      } catch (pr) {
        return console.error("Couldn't validate the shader pack on WebGPU.", pr), null
      } finally {
        Ir.destroy()
      }
    }
    async function fr(rr, Sr) {
      var Qr;
      if (!(0, Zr.shaderPackNeedsCheck)(rr, Sr) || (0, Zr.isOtherApiVersion)(rr)) return rr;
      const Wr = await Ir(Sr, (0, Zr.storedShaderPackFiles)(rr));
      if (!Wr) return rr;
      const ar = !1 === (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) && !rr.validation.fromRecheck,
        jr = {
          ...rr,
          validation: ar ? Wr : {
            ...Wr,
            fromRecheck: !0
          }
        };
      return await (0, Zr.replaceShaderPack)(rr, jr, Sr) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), jr
    }

    function Er(rr, Sr, Qr) {
      return {
        headerVersion: (0, Zr.pageShaderPackValidationVersion)(rr),
        ok: 0 === Sr.length,
        errors: Sr.slice(0, jr),
        moreErrors: Math.max(0, Sr.length - jr),
        offInStrict: Qr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);