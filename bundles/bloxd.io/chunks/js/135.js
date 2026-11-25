export const id = 135;
export const ids = [135, 138, 139];
export const modules = {
  6800: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(5197),
      Uu = ju(1154);
    const Zu = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Xu(uu) {
      let {
        diagnostics: Eu,
        more: ju = 0,
        t: Xu
      } = uu;
      return (0, Uu.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Eu.map(((uu, Eu) => {
          const ju = (0, su.f)(uu),
            lu = function(uu, Eu) {
              const ju = (0, su.e)(null !== uu && void 0 !== uu ? uu : []);
              if (0 === ju.length) return null;
              return ju.map((uu => uu.map((uu => Eu(Zu[uu]))).join(", "))).join("; ")
            }(uu.variants, Xu);
          return (0, Uu.jsxs)("li", {
            children: [ju && (0, Uu.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: ju
            }), uu.message, lu && (0, Uu.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Xu("shaderPack:onlyIn", {
                variants: lu
              })
            })]
          }, Eu)
        })), ju > 0 && (0, Uu.jsx)("li", {
          children: Xu("shaderPack:moreErrors", {
            count: String(ju)
          })
        })]
      })
    }
  },
  6806: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => pu,
      g: () => wu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(5120),
      lu = ju(1393),
      qu = ju(1116),
      fu = ju(1244),
      Cu = ju(5209),
      bu = ju(5206),
      cu = ju(3343);
    const Nu = 33554432,
      Ou = 1024,
      Yu = 65536;
    async function hu(uu) {
      const Eu = (0, cu.p)(uu);
      if (Eu) {
        if (Eu.size > Nu) throw new cu.d("shaderPack:loadZipTooBig", {
          megabytes: String(Nu / 1048576)
        });
        return async function(uu) {
          return Du((0, cu.h)(uu, Ou).map((Eu => ({
            path: Eu.path,
            read: ju => (0, cu.l)(uu, Eu, ju)
          }))))
        }(new Uint8Array(await Eu.arrayBuffer()))
      }
      return Du(uu.map((uu => ({
        path: (0, cu.j)(uu),
        read: Eu => async function(uu, Eu) {
          return uu.size > Eu ? null : new Uint8Array(await uu.arrayBuffer())
        }(uu, Eu)
      }))))
    }
    async function Du(uu) {
      const Eu = function(uu) {
          const Eu = uu.length > 0 ? uu[0].path.indexOf("/") : -1;
          if (-1 === Eu) return uu;
          const ju = uu[0].path.slice(0, Eu + 1);
          if (!uu.every((uu => uu.path.startsWith(ju)))) return uu;
          return uu.map((uu => ({
            ...uu,
            path: uu.path.slice(ju.length)
          })))
        }(uu.filter((uu => !(0, cu.f)(uu.path)))),
        ju = Eu.filter((uu => "pack.json" === uu.path.toLowerCase()));
      if (0 === ju.length) throw new cu.d("shaderPack:loadNoManifest");
      if (ju.length > 1) throw new cu.d("shaderPack:loadDuplicateManifest");
      const su = ju[0],
        Uu = await su.read(Yu);
      if (null === Uu) throw new cu.d("shaderPack:loadManifestTooBig", {
        kilobytes: String(Yu / 1024)
      });
      const Zu = function(uu) {
          let Eu;
          try {
            Eu = JSON.parse(uu)
          } catch (lu) {
            throw new cu.d("shaderPack:loadManifestNotJson", {
              error: lu.message
            }, {
              cause: lu
            })
          }
          if ("object" !== typeof Eu || null === Eu || Array.isArray(Eu)) throw new cu.d("shaderPack:loadManifestNotObject");
          const {
            apiVersion: ju,
            name: su,
            author: Uu,
            description: Zu,
            keepCircleShadows: Xu
          } = Eu;
          if (void 0 === ju) throw new cu.d("shaderPack:loadNoApiVersion", {
            version: String(bu.d)
          });
          if (!(0, bu.k)(ju)) throw new cu.d("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(ju),
            version: String(bu.d)
          });
          if ("string" !== typeof su || "" === su.trim()) throw new cu.d("shaderPack:loadNoName");
          if (void 0 !== Uu && null !== Uu && "string" !== typeof Uu) throw new cu.d("shaderPack:loadAuthorNotString");
          if (void 0 !== Zu && null !== Zu && "string" !== typeof Zu) throw new cu.d("shaderPack:loadDescriptionNotString");
          if (void 0 !== Xu && "boolean" !== typeof Xu) throw new cu.d("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: ju,
            name: su,
            author: "string" === typeof Uu ? Uu : null,
            description: "string" === typeof Zu && "" !== Zu.trim() ? Zu : null,
            keepCircleShadows: !0 === Xu
          }
        }(gu(Uu, su.path)),
        Xu = Eu.filter((uu => uu.path.toLowerCase().endsWith(".wgsl"))).sort(((uu, Eu) => (0, Cu.k)(uu.path, Eu.path)));
      if (0 === Xu.length) throw new cu.d("shaderPack:loadNoWgsl");
      if (Xu.length > Cu.c) throw new cu.d("shaderPack:loadTooManyWgsl", {
        count: String(Cu.c)
      });
      const lu = Xu.find(((uu, Eu) => Eu > 0 && uu.path === Xu[Eu - 1].path));
      if (lu) throw new cu.d("shaderPack:loadDuplicatePath", {
        path: lu.path
      });
      const qu = [];
      let fu = Cu.e;
      for (const bu of Xu) {
        const uu = await bu.read(fu);
        if (null === uu) throw new cu.d("shaderPack:loadSourceTooBig", {
          kilobytes: String(Cu.e / 1024)
        });
        fu -= uu.byteLength, qu.push({
          path: bu.path,
          source: gu(uu, bu.path)
        })
      }
      return {
        manifest: Zu,
        files: qu
      }
    }

    function gu(uu, Eu) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(uu)
      } catch (ju) {
        throw new cu.d("shaderPack:loadNotUtf8", {
          path: Eu
        }, {
          cause: ju
        })
      }
    }
    var Mu = ju(5197),
      eu = ju(5216),
      Gu = ju(1154);

    function pu(uu) {
      let {
        busy: Eu,
        disabled: ju,
        onFiles: su
      } = uu;
      const {
        t: Uu
      } = (0, fu.A)(), {
        getRootProps: Cu,
        getInputProps: bu,
        isDragActive: cu,
        open: Nu
      } = (0, Xu.c)({
        onDrop: su,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: ju
      });
      return (0, Gu.jsxs)("div", {
        ...Cu({
          className: Zu()("ShaderPackDropZone", {
            ActiveDrag: cu,
            Disabled: ju
          })
        }),
        children: [(0, Gu.jsx)("input", {
          ...bu({
            webkitdirectory: "true"
          })
        }), Eu && (0, Gu.jsx)(lu.b, {}), !Eu && (0, Gu.jsxs)(Gu.Fragment, {
          children: [(0, Gu.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Gu.jsx)(qu.e, {
              name: "up-from-bracket"
            })
          }), (0, Gu.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Uu((0, eu.h)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Gu.jsx)(eu.d, {
            disabled: ju,
            openFolderPicker: Nu,
            onFiles: su
          })]
        })]
      })
    }

    function wu(uu) {
      const {
        t: Eu
      } = (0, fu.A)(), [ju, Uu] = (0, su.useState)(!1), [Zu, Xu] = (0, su.useState)(null), lu = (0, su.useRef)(!1);
      return {
        loading: ju,
        error: Zu,
        setError: Xu,
        onFiles: async function(ju) {
          if (!lu.current) {
            lu.current = !0, Uu(!0), Xu(null);
            try {
              await uu(await hu(ju))
            } catch (su) {
              su instanceof cu.d ? Xu((0, Mu.g)(Eu, su.translationKey, su.params)) : (console.error("Failed to load the shader pack", su), Xu(Eu("shaderPack:unexpectedError")))
            } finally {
              lu.current = !1, Uu(!1)
            }
          }
        }
      }
    }
  },
  6851: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      forgetShaderPackActiveHint: () => ou,
      isOtherApiVersion: () => Ju,
      isShaderPackActive: () => eu,
      isShaderPackChangePending: () => wu,
      markShaderPackChangePending: () => pu,
      pageShaderPackValidationVersion: () => du,
      reconcileStoredShaderPackHint: () => Pu,
      removeShaderPack: () => Mu,
      replaceShaderPack: () => hu,
      saveShaderPack: () => Yu,
      shaderPackNeedsCheck: () => au,
      storedPackOutcome: () => Gu,
      storedShaderPackFiles: () => cu,
      toStoredShaderPack: () => bu
    });
    var su = ju(5209),
      Uu = ju(5206),
      Zu = ju(31),
      Xu = ju(3651),
      lu = ju(6854),
      qu = ju(6827);
    const fu = "shaderPackChangePending";
    let Cu = null;

    function bu(uu, Eu, ju) {
      return {
        manifest: uu.manifest,
        files: (0, su.w)(uu.files),
        validation: Eu,
        ...ju && {
          listing: ju
        }
      }
    }

    function cu(uu) {
      return Object.keys(uu.files).map((Eu => ({
        path: Eu,
        source: uu.files[Eu]
      })))
    }
    let Nu = Promise.resolve();

    function Ou(uu) {
      const Eu = Nu.then(uu);
      return Nu = Eu.catch((() => {})), Eu
    }

    function Yu(uu, Eu) {
      return Ou((() => Du(uu, Eu)))
    }

    function hu(uu, Eu, ju) {
      return Ou((async () => JSON.stringify(await (0, lu.e)()) === JSON.stringify(uu) && (null === Eu ? (await gu(), !0) : Du(Eu, ju))))
    }
    async function Du(uu, Eu) {
      const ju = await Zu.h.setItem(lu.b, uu);
      return ju && ku(uu, Eu), ju
    }
    async function gu() {
      await Zu.h.removeItem(lu.b), Zu.k.removeItem(Xu.c)
    }

    function Mu() {
      return Ou(gu)
    }

    function eu(uu, Eu) {
      return "active" === Gu(uu, Eu).kind
    }

    function Gu(uu, Eu) {
      var ju;
      return null === uu ? {
        kind: "none",
        reason: "nothingStored"
      } : Ju(uu) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.ok) || uu.validation.fromRecheck ? null === Eu ? {
        kind: "none",
        reason: "noCompiler"
      } : au(uu, Eu) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : uu.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function pu() {
      Zu.l.setItem(fu, performance.timeOrigin)
    }

    function wu() {
      return Zu.l.getItem(fu) === performance.timeOrigin
    }

    function Ju(uu) {
      return !(0, Uu.k)(uu.manifest.apiVersion)
    }

    function du(uu) {
      return Cu ??= uu.fV((0, qu.shaderPackTextures)()), Cu
    }

    function au(uu, Eu) {
      var ju;
      return (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.headerVersion) !== du(Eu)
    }

    function Pu(uu) {
      return Ou((async () => {
        ku(await (0, lu.e)(!0), uu)
      }))
    }

    function ou() {
      return Ou((async () => {
        Zu.k.removeItem(Xu.c)
      }))
    }

    function ku(uu, Eu) {
      eu(uu, Eu) ? Zu.k.setItem(Xu.c, !0) : Zu.k.removeItem(Xu.c)
    }
  },
  6827: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      loadShaderPackTextures: () => Xu,
      shaderPackTextures: () => lu
    });
    var su = ju(5209);
    let Uu = null,
      Zu = null;

    function Xu() {
      return Zu ??= Promise.all([ju.e(73), ju.e(190)]).then((() => ju(40746))).then((uu => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Eu,
          textureNameToIndex: ju,
          textureAnimationData: Zu
        } = uu;
        return Uu ??= (0, su.j)(ju, Zu, Eu), Uu
      })), Zu
    }

    function lu() {
      if (null === Uu) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Uu
    }
  },
  6849: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      e: () => lu
    });
    var su = ju(6851),
      Uu = ju(6827),
      Zu = ju(115);
    const Xu = 100;
    async function lu(uu, Eu) {
      var ju;
      let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ju = navigator.gpu) && void 0 !== ju ? ju : null;
      const Xu = uu.luu(Eu, (0, Uu.shaderPackTextures)());
      if (Xu.errors.length > 0) return fu(uu, Xu.errors, Xu.offInStrict);
      const lu = await async function(uu) {
        if (!uu) return null;
        try {
          const Eu = await (0, Zu.v)(uu);
          return Eu ? await Eu.requestDevice() : null
        } catch (Eu) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Eu), null
        }
      }(su);
      if (!lu) return null;
      let qu = !1;
      lu.lost.then((() => {
        qu = !0
      }));
      try {
        const Eu = await Promise.all(Xu.validationModules.map((Eu => async function(uu, Eu, ju) {
          Eu.pushErrorScope("validation");
          const su = Eu.createShaderModule({
              code: ju.code
            }),
            Uu = Eu.popErrorScope(),
            {
              messages: Zu
            } = await su.getCompilationInfo(),
            Xu = Zu.filter((uu => "error" === uu.type)).map((Eu => uu.mapValidationMessage(ju, Eu))),
            lu = await Uu;
          lu && 0 === Xu.length && Xu.push({
            file: null,
            line: 0,
            message: lu.message,
            variants: [ju.key]
          });
          return Xu
        }(uu, lu, Eu))));
        return qu ? null : fu(uu, uu.Rju(Eu.flat()), Xu.offInStrict)
      } catch (Cu) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Cu), null
      } finally {
        lu.destroy()
      }
    }
    async function qu(uu, Eu) {
      var ju;
      if (!(0, su.shaderPackNeedsCheck)(uu, Eu) || (0, su.isOtherApiVersion)(uu)) return uu;
      const Uu = await lu(Eu, (0, su.storedShaderPackFiles)(uu));
      if (!Uu) return uu;
      const Zu = !1 === (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.ok) && !uu.validation.fromRecheck,
        Xu = {
          ...uu,
          validation: Zu ? Uu : {
            ...Uu,
            fromRecheck: !0
          }
        };
      return await (0, su.replaceShaderPack)(uu, Xu, Eu) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xu
    }

    function fu(uu, Eu, ju) {
      return {
        headerVersion: (0, su.pageShaderPackValidationVersion)(uu),
        ok: 0 === Eu.length,
        errors: Eu.slice(0, Xu),
        moreErrors: Math.max(0, Eu.length - Xu),
        offInStrict: ju
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);