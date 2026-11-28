export const id = 156;
export const ids = [156, 159, 160];
export const modules = {
  7558: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(5947),
      Fd = md(1341);
    const Rd = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Xd(dd) {
      let {
        diagnostics: Od,
        more: md = 0,
        t: Xd
      } = dd;
      return (0, Fd.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Od.map(((dd, Od) => {
          const md = (0, Wd.h)(dd),
            Kd = function(dd, Od) {
              const md = (0, Wd.d)(null !== dd && void 0 !== dd ? dd : []);
              if (0 === md.length) return null;
              return md.map((dd => dd.map((dd => Od(Rd[dd]))).join(", "))).join("; ")
            }(dd.variants, Xd);
          return (0, Fd.jsxs)("li", {
            children: [md && (0, Fd.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: md
            }), dd.message, Kd && (0, Fd.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Xd("shaderPack:onlyIn", {
                variants: Kd
              })
            })]
          }, Od)
        })), md > 0 && (0, Fd.jsx)("li", {
          children: Xd("shaderPack:moreErrors", {
            count: String(md)
          })
        })]
      })
    }
  },
  7561: (dd, Od, md) => {
    md.d(Od, {
      b: () => wd,
      c: () => Ed
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(5861),
      Kd = md(1436),
      hd = md(1443),
      vd = md(1238),
      Qd = md(5954),
      td = md(5951),
      od = md(4378);
    const Nd = 33554432,
      qd = 1024,
      Hd = 65536;
    async function yd(dd) {
      const Od = (0, od.p)(dd);
      if (Od) {
        if (Od.size > Nd) throw new od.b("shaderPack:loadZipTooBig", {
          megabytes: String(Nd / 1048576)
        });
        return async function(dd) {
          return bd((0, od.i)(dd, qd).map((Od => ({
            path: Od.path,
            read: md => (0, od.m)(dd, Od, md)
          }))))
        }(new Uint8Array(await Od.arrayBuffer()))
      }
      return bd(dd.map((dd => ({
        path: (0, od.j)(dd),
        read: Od => async function(dd, Od) {
          return dd.size > Od ? null : new Uint8Array(await dd.arrayBuffer())
        }(dd, Od)
      }))))
    }
    async function bd(dd) {
      const Od = function(dd) {
          const Od = dd.length > 0 ? dd[0].path.indexOf("/") : -1;
          if (-1 === Od) return dd;
          const md = dd[0].path.slice(0, Od + 1);
          if (!dd.every((dd => dd.path.startsWith(md)))) return dd;
          return dd.map((dd => ({
            ...dd,
            path: dd.path.slice(md.length)
          })))
        }(dd.filter((dd => !(0, od.f)(dd.path)))),
        md = Od.filter((dd => "pack.json" === dd.path.toLowerCase()));
      if (0 === md.length) throw new od.b("shaderPack:loadNoManifest");
      if (md.length > 1) throw new od.b("shaderPack:loadDuplicateManifest");
      const Wd = md[0],
        Fd = await Wd.read(Hd);
      if (null === Fd) throw new od.b("shaderPack:loadManifestTooBig", {
        kilobytes: String(Hd / 1024)
      });
      const Rd = function(dd) {
          let Od;
          try {
            Od = JSON.parse(dd)
          } catch (Kd) {
            throw new od.b("shaderPack:loadManifestNotJson", {
              error: Kd.message
            }, {
              cause: Kd
            })
          }
          if ("object" !== typeof Od || null === Od || Array.isArray(Od)) throw new od.b("shaderPack:loadManifestNotObject");
          const {
            apiVersion: md,
            name: Wd,
            author: Fd,
            description: Rd,
            keepCircleShadows: Xd
          } = Od;
          if (void 0 === md) throw new od.b("shaderPack:loadNoApiVersion", {
            version: String(td.c)
          });
          if (!(0, td.k)(md)) throw new od.b("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(md),
            version: String(td.c)
          });
          if ("string" !== typeof Wd || "" === Wd.trim()) throw new od.b("shaderPack:loadNoName");
          if (void 0 !== Fd && null !== Fd && "string" !== typeof Fd) throw new od.b("shaderPack:loadAuthorNotString");
          if (void 0 !== Rd && null !== Rd && "string" !== typeof Rd) throw new od.b("shaderPack:loadDescriptionNotString");
          if (void 0 !== Xd && "boolean" !== typeof Xd) throw new od.b("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: md,
            name: Wd,
            author: "string" === typeof Fd ? Fd : null,
            description: "string" === typeof Rd && "" !== Rd.trim() ? Rd : null,
            keepCircleShadows: !0 === Xd
          }
        }(Td(Fd, Wd.path)),
        Xd = Od.filter((dd => dd.path.toLowerCase().endsWith(".wgsl"))).sort(((dd, Od) => (0, Qd.l)(dd.path, Od.path)));
      if (0 === Xd.length) throw new od.b("shaderPack:loadNoWgsl");
      if (Xd.length > Qd.c) throw new od.b("shaderPack:loadTooManyWgsl", {
        count: String(Qd.c)
      });
      const Kd = Xd.find(((dd, Od) => Od > 0 && dd.path === Xd[Od - 1].path));
      if (Kd) throw new od.b("shaderPack:loadDuplicatePath", {
        path: Kd.path
      });
      const hd = [];
      let vd = Qd.e;
      for (const td of Xd) {
        const dd = await td.read(vd);
        if (null === dd) throw new od.b("shaderPack:loadSourceTooBig", {
          kilobytes: String(Qd.e / 1024)
        });
        vd -= dd.byteLength, hd.push({
          path: td.path,
          source: Td(dd, td.path)
        })
      }
      return {
        manifest: Rd,
        files: hd
      }
    }

    function Td(dd, Od) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(dd)
      } catch (md) {
        throw new od.b("shaderPack:loadNotUtf8", {
          path: Od
        }, {
          cause: md
        })
      }
    }
    var pd = md(5947),
      Yd = md(5958),
      gd = md(1341);

    function wd(dd) {
      let {
        busy: Od,
        disabled: md,
        onFiles: Wd
      } = dd;
      const {
        t: Fd
      } = (0, vd.G)(), {
        getRootProps: Qd,
        getInputProps: td,
        isDragActive: od,
        open: Nd
      } = (0, Xd.b)({
        onDrop: Wd,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: md
      });
      return (0, gd.jsxs)("div", {
        ...Qd({
          className: Rd()("ShaderPackDropZone", {
            ActiveDrag: od,
            Disabled: md
          })
        }),
        children: [(0, gd.jsx)("input", {
          ...td({
            webkitdirectory: "true"
          })
        }), Od && (0, gd.jsx)(Kd.c, {}), !Od && (0, gd.jsxs)(gd.Fragment, {
          children: [(0, gd.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, gd.jsx)(hd.c, {
              name: "up-from-bracket"
            })
          }), (0, gd.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Fd((0, Yd.g)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, gd.jsx)(Yd.e, {
            disabled: md,
            openFolderPicker: Nd,
            onFiles: Wd
          })]
        })]
      })
    }

    function Ed(dd) {
      const {
        t: Od
      } = (0, vd.G)(), [md, Fd] = (0, Wd.useState)(!1), [Rd, Xd] = (0, Wd.useState)(null), Kd = (0, Wd.useRef)(!1);
      return {
        loading: md,
        error: Rd,
        setError: Xd,
        onFiles: async function(md) {
          if (!Kd.current) {
            Kd.current = !0, Fd(!0), Xd(null);
            try {
              await dd(await yd(md))
            } catch (Wd) {
              Wd instanceof od.b ? Xd((0, pd.i)(Od, Wd.translationKey, Wd.params)) : (console.error("Failed to load the shader pack", Wd), Xd(Od("shaderPack:unexpectedError")))
            } finally {
              Kd.current = !1, Fd(!1)
            }
          }
        }
      }
    }
  },
  7598: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      forgetShaderPackActiveHint: () => Sd,
      isOtherApiVersion: () => Jd,
      isShaderPackActive: () => Yd,
      isShaderPackChangePending: () => Ed,
      markShaderPackChangePending: () => wd,
      pageShaderPackValidationVersion: () => Ud,
      reconcileStoredShaderPackHint: () => Bd,
      removeShaderPack: () => pd,
      replaceShaderPack: () => yd,
      saveShaderPack: () => Hd,
      shaderPackNeedsCheck: () => xd,
      storedPackOutcome: () => gd,
      storedShaderPackFiles: () => od,
      toStoredShaderPack: () => td
    });
    var Wd = md(5954),
      Fd = md(5951),
      Rd = md(46),
      Xd = md(4674),
      Kd = md(7602),
      hd = md(7583);
    const vd = "shaderPackChangePending";
    let Qd = null;

    function td(dd, Od, md) {
      return {
        manifest: dd.manifest,
        files: (0, Wd.v)(dd.files),
        validation: Od,
        ...md && {
          listing: md
        }
      }
    }

    function od(dd) {
      return Object.keys(dd.files).map((Od => ({
        path: Od,
        source: dd.files[Od]
      })))
    }
    let Nd = Promise.resolve();

    function qd(dd) {
      const Od = Nd.then(dd);
      return Nd = Od.catch((() => {})), Od
    }

    function Hd(dd, Od) {
      return qd((() => bd(dd, Od)))
    }

    function yd(dd, Od, md) {
      return qd((async () => JSON.stringify(await (0, Kd.g)()) === JSON.stringify(dd) && (null === Od ? (await Td(), !0) : bd(Od, md))))
    }
    async function bd(dd, Od) {
      const md = await Rd.h.setItem(Kd.e, dd);
      return md && sd(dd, Od), md
    }
    async function Td() {
      await Rd.h.removeItem(Kd.e), Rd.k.removeItem(Xd.d)
    }

    function pd() {
      return qd(Td)
    }

    function Yd(dd, Od) {
      return "active" === gd(dd, Od).kind
    }

    function gd(dd, Od) {
      var md;
      return null === dd ? {
        kind: "none",
        reason: "nothingStored"
      } : Jd(dd) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (md = dd.validation) || void 0 === md ? void 0 : md.ok) || dd.validation.fromRecheck ? null === Od ? {
        kind: "none",
        reason: "noCompiler"
      } : xd(dd, Od) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : dd.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wd() {
      Rd.o.setItem(vd, performance.timeOrigin)
    }

    function Ed() {
      return Rd.o.getItem(vd) === performance.timeOrigin
    }

    function Jd(dd) {
      return !(0, Fd.k)(dd.manifest.apiVersion)
    }

    function Ud(dd) {
      return Qd ??= dd.HV((0, hd.shaderPackTextures)()), Qd
    }

    function xd(dd, Od) {
      var md;
      return (null === (md = dd.validation) || void 0 === md ? void 0 : md.headerVersion) !== Ud(Od)
    }

    function Bd(dd) {
      return qd((async () => {
        sd(await (0, Kd.g)(!0), dd)
      }))
    }

    function Sd() {
      return qd((async () => {
        Rd.k.removeItem(Xd.d)
      }))
    }

    function sd(dd, Od) {
      Yd(dd, Od) ? Rd.k.setItem(Xd.d, !0) : Rd.k.removeItem(Xd.d)
    }
  },
  7583: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      loadShaderPackTextures: () => Xd,
      shaderPackTextures: () => Kd
    });
    var Wd = md(5954);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= Promise.all([md.e(85), md.e(126)]).then((() => md(42438))).then((dd => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Od,
          textureNameToIndex: md,
          textureAnimationData: Rd
        } = dd;
        return Fd ??= (0, Wd.h)(md, Rd, Od), Fd
      })), Rd
    }

    function Kd() {
      if (null === Fd) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Fd
    }
  },
  7595: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => Kd
    });
    var Wd = md(7598),
      Fd = md(7583),
      Rd = md(132);
    const Xd = 100;
    async function Kd(dd, Od) {
      var md;
      let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (md = navigator.gpu) && void 0 !== md ? md : null;
      const Xd = dd.HOd(Od, (0, Fd.shaderPackTextures)());
      if (Xd.errors.length > 0) return vd(dd, Xd.errors, Xd.offInStrict);
      const Kd = await async function(dd) {
        if (!dd) return null;
        try {
          const Od = await (0, Rd.v)(dd);
          return Od ? await Od.requestDevice() : null
        } catch (Od) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Od), null
        }
      }(Wd);
      if (!Kd) return null;
      let hd = !1;
      Kd.lost.then((() => {
        hd = !0
      }));
      try {
        const Od = await Promise.all(Xd.validationModules.map((Od => async function(dd, Od, md) {
          Od.pushErrorScope("validation");
          const Wd = Od.createShaderModule({
              code: md.code
            }),
            Fd = Od.popErrorScope(),
            {
              messages: Rd
            } = await Wd.getCompilationInfo(),
            Xd = Rd.filter((dd => "error" === dd.type)).map((Od => dd.mapValidationMessage(md, Od))),
            Kd = await Fd;
          Kd && 0 === Xd.length && Xd.push({
            file: null,
            line: 0,
            message: Kd.message,
            variants: [md.key]
          });
          return Xd
        }(dd, Kd, Od))));
        return hd ? null : vd(dd, dd.HFd(Od.flat()), Xd.offInStrict)
      } catch (Qd) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Qd), null
      } finally {
        Kd.destroy()
      }
    }
    async function hd(dd, Od) {
      var md;
      if (!(0, Wd.shaderPackNeedsCheck)(dd, Od) || (0, Wd.isOtherApiVersion)(dd)) return dd;
      const Fd = await Kd(Od, (0, Wd.storedShaderPackFiles)(dd));
      if (!Fd) return dd;
      const Rd = !1 === (null === (md = dd.validation) || void 0 === md ? void 0 : md.ok) && !dd.validation.fromRecheck,
        Xd = {
          ...dd,
          validation: Rd ? Fd : {
            ...Fd,
            fromRecheck: !0
          }
        };
      return await (0, Wd.replaceShaderPack)(dd, Xd, Od) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xd
    }

    function vd(dd, Od, md) {
      return {
        headerVersion: (0, Wd.pageShaderPackValidationVersion)(dd),
        ok: 0 === Od.length,
        errors: Od.slice(0, Xd),
        moreErrors: Math.max(0, Od.length - Xd),
        offInStrict: md
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);