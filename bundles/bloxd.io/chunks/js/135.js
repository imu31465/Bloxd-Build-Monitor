export const id = 135;
export const ids = [135, 138, 139];
export const modules = {
  6750: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(5156),
      op = cp(1112);
    const Ip = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Sp(pp) {
      let {
        diagnostics: ip,
        more: cp = 0,
        t: Sp
      } = pp;
      return (0, op.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [ip.map(((pp, ip) => {
          const cp = (0, Op.e)(pp),
            xp = function(pp, ip) {
              const cp = (0, Op.b)(null !== pp && void 0 !== pp ? pp : []);
              if (0 === cp.length) return null;
              return cp.map((pp => pp.map((pp => ip(Ip[pp]))).join(", "))).join("; ")
            }(pp.variants, Sp);
          return (0, op.jsxs)("li", {
            children: [cp && (0, op.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: cp
            }), pp.message, xp && (0, op.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Sp("shaderPack:onlyIn", {
                variants: xp
              })
            })]
          }, ip)
        })), cp > 0 && (0, op.jsx)("li", {
          children: Sp("shaderPack:moreErrors", {
            count: String(cp)
          })
        })]
      })
    }
  },
  6752: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => jp,
      f: () => kp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(5076),
      xp = cp(1361),
      Lp = cp(1060),
      Yp = cp(1201),
      Dp = cp(5167),
      Ap = cp(5159),
      Pp = cp(3259);
    const Wp = 33554432,
      yp = 1024,
      Up = 65536;
    async function wp(pp) {
      const ip = (0, Pp.r)(pp);
      if (ip) {
        if (ip.size > Wp) throw new Pp.b("shaderPack:loadZipTooBig", {
          megabytes: String(Wp / 1048576)
        });
        return async function(pp) {
          return vp((0, Pp.i)(pp, yp).map((ip => ({
            path: ip.path,
            read: cp => (0, Pp.n)(pp, ip, cp)
          }))))
        }(new Uint8Array(await ip.arrayBuffer()))
      }
      return vp(pp.map((pp => ({
        path: (0, Pp.j)(pp),
        read: ip => async function(pp, ip) {
          return pp.size > ip ? null : new Uint8Array(await pp.arrayBuffer())
        }(pp, ip)
      }))))
    }
    async function vp(pp) {
      const ip = function(pp) {
          const ip = pp.length > 0 ? pp[0].path.indexOf("/") : -1;
          if (-1 === ip) return pp;
          const cp = pp[0].path.slice(0, ip + 1);
          if (!pp.every((pp => pp.path.startsWith(cp)))) return pp;
          return pp.map((pp => ({
            ...pp,
            path: pp.path.slice(cp.length)
          })))
        }(pp.filter((pp => !(0, Pp.e)(pp.path)))),
        cp = ip.filter((pp => "pack.json" === pp.path.toLowerCase()));
      if (0 === cp.length) throw new Pp.b("shaderPack:loadNoManifest");
      if (cp.length > 1) throw new Pp.b("shaderPack:loadDuplicateManifest");
      const Op = cp[0],
        op = await Op.read(Up);
      if (null === op) throw new Pp.b("shaderPack:loadManifestTooBig", {
        kilobytes: String(Up / 1024)
      });
      const Ip = function(pp) {
          let ip;
          try {
            ip = JSON.parse(pp)
          } catch (xp) {
            throw new Pp.b("shaderPack:loadManifestNotJson", {
              error: xp.message
            }, {
              cause: xp
            })
          }
          if ("object" !== typeof ip || null === ip || Array.isArray(ip)) throw new Pp.b("shaderPack:loadManifestNotObject");
          const {
            apiVersion: cp,
            name: Op,
            author: op,
            description: Ip,
            keepCircleShadows: Sp
          } = ip;
          if (void 0 === cp) throw new Pp.b("shaderPack:loadNoApiVersion", {
            version: String(Ap.e)
          });
          if (!(0, Ap.k)(cp)) throw new Pp.b("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(cp),
            version: String(Ap.e)
          });
          if ("string" !== typeof Op || "" === Op.trim()) throw new Pp.b("shaderPack:loadNoName");
          if (void 0 !== op && null !== op && "string" !== typeof op) throw new Pp.b("shaderPack:loadAuthorNotString");
          if (void 0 !== Ip && null !== Ip && "string" !== typeof Ip) throw new Pp.b("shaderPack:loadDescriptionNotString");
          if (void 0 !== Sp && "boolean" !== typeof Sp) throw new Pp.b("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: cp,
            name: Op,
            author: "string" === typeof op ? op : null,
            description: "string" === typeof Ip && "" !== Ip.trim() ? Ip : null,
            keepCircleShadows: !0 === Sp
          }
        }(tp(op, Op.path)),
        Sp = ip.filter((pp => pp.path.toLowerCase().endsWith(".wgsl"))).sort(((pp, ip) => (0, Dp.m)(pp.path, ip.path)));
      if (0 === Sp.length) throw new Pp.b("shaderPack:loadNoWgsl");
      if (Sp.length > Dp.c) throw new Pp.b("shaderPack:loadTooManyWgsl", {
        count: String(Dp.c)
      });
      const xp = Sp.find(((pp, ip) => ip > 0 && pp.path === Sp[ip - 1].path));
      if (xp) throw new Pp.b("shaderPack:loadDuplicatePath", {
        path: xp.path
      });
      const Lp = [];
      let Yp = Dp.e;
      for (const Ap of Sp) {
        const pp = await Ap.read(Yp);
        if (null === pp) throw new Pp.b("shaderPack:loadSourceTooBig", {
          kilobytes: String(Dp.e / 1024)
        });
        Yp -= pp.byteLength, Lp.push({
          path: Ap.path,
          source: tp(pp, Ap.path)
        })
      }
      return {
        manifest: Ip,
        files: Lp
      }
    }

    function tp(pp, ip) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(pp)
      } catch (cp) {
        throw new Pp.b("shaderPack:loadNotUtf8", {
          path: ip
        }, {
          cause: cp
        })
      }
    }
    var Hp = cp(5156),
      dp = cp(5173),
      ep = cp(1112);

    function jp(pp) {
      let {
        busy: ip,
        disabled: cp,
        onFiles: Op
      } = pp;
      const {
        t: op
      } = (0, Yp.H)(), {
        getRootProps: Dp,
        getInputProps: Ap,
        isDragActive: Pp,
        open: Wp
      } = (0, Sp.c)({
        onDrop: Op,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: cp
      });
      return (0, ep.jsxs)("div", {
        ...Dp({
          className: Ip()("ShaderPackDropZone", {
            ActiveDrag: Pp,
            Disabled: cp
          })
        }),
        children: [(0, ep.jsx)("input", {
          ...Ap({
            webkitdirectory: "true"
          })
        }), ip && (0, ep.jsx)(xp.c, {}), !ip && (0, ep.jsxs)(ep.Fragment, {
          children: [(0, ep.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, ep.jsx)(Lp.d, {
              name: "up-from-bracket"
            })
          }), (0, ep.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: op((0, dp.e)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, ep.jsx)(dp.d, {
            disabled: cp,
            openFolderPicker: Wp,
            onFiles: Op
          })]
        })]
      })
    }

    function kp(pp) {
      const {
        t: ip
      } = (0, Yp.H)(), [cp, op] = (0, Op.useState)(!1), [Ip, Sp] = (0, Op.useState)(null), xp = (0, Op.useRef)(!1);
      return {
        loading: cp,
        error: Ip,
        setError: Sp,
        onFiles: async function(cp) {
          if (!xp.current) {
            xp.current = !0, op(!0), Sp(null);
            try {
              await pp(await wp(cp))
            } catch (Op) {
              Op instanceof Pp.b ? Sp((0, Hp.f)(ip, Op.translationKey, Op.params)) : (console.error("Failed to load the shader pack", Op), Sp(ip("shaderPack:unexpectedError")))
            } finally {
              xp.current = !1, op(!1)
            }
          }
        }
      }
    }
  },
  6798: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      forgetShaderPackActiveHint: () => Cp,
      isOtherApiVersion: () => mp,
      isShaderPackActive: () => dp,
      isShaderPackChangePending: () => kp,
      markShaderPackChangePending: () => jp,
      pageShaderPackValidationVersion: () => Rp,
      reconcileStoredShaderPackHint: () => Mp,
      removeShaderPack: () => Hp,
      replaceShaderPack: () => wp,
      saveShaderPack: () => Up,
      shaderPackNeedsCheck: () => qp,
      storedPackOutcome: () => ep,
      storedShaderPackFiles: () => Pp,
      toStoredShaderPack: () => Ap
    });
    var Op = cp(5167),
      op = cp(5159),
      Ip = cp(44),
      Sp = cp(3564),
      xp = cp(6804),
      Lp = cp(6772);
    const Yp = "shaderPackChangePending";
    let Dp = null;

    function Ap(pp, ip, cp) {
      return {
        manifest: pp.manifest,
        files: (0, Op.v)(pp.files),
        validation: ip,
        ...cp && {
          listing: cp
        }
      }
    }

    function Pp(pp) {
      return Object.keys(pp.files).map((ip => ({
        path: ip,
        source: pp.files[ip]
      })))
    }
    let Wp = Promise.resolve();

    function yp(pp) {
      const ip = Wp.then(pp);
      return Wp = ip.catch((() => {})), ip
    }

    function Up(pp, ip) {
      return yp((() => vp(pp, ip)))
    }

    function wp(pp, ip, cp) {
      return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
    }
    async function vp(pp, ip) {
      const cp = await Ip.g.setItem(xp.e, pp);
      return cp && Ep(pp, ip), cp
    }
    async function tp() {
      await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
    }

    function Hp() {
      return yp(tp)
    }

    function dp(pp, ip) {
      return "active" === ep(pp, ip).kind
    }

    function ep(pp, ip) {
      var cp;
      return null === pp ? {
        kind: "none",
        reason: "nothingStored"
      } : mp(pp) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
        kind: "none",
        reason: "noCompiler"
      } : qp(pp, ip) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : pp.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function jp() {
      Ip.l.setItem(Yp, performance.timeOrigin)
    }

    function kp() {
      return Ip.l.getItem(Yp) === performance.timeOrigin
    }

    function mp(pp) {
      return !(0, op.k)(pp.manifest.apiVersion)
    }

    function Rp(pp) {
      return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
    }

    function qp(pp, ip) {
      var cp;
      return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
    }

    function Mp(pp) {
      return yp((async () => {
        Ep(await (0, xp.f)(!0), pp)
      }))
    }

    function Cp() {
      return yp((async () => {
        Ip.h.removeItem(Sp.d)
      }))
    }

    function Ep(pp, ip) {
      dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
    }
  },
  6772: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      loadShaderPackTextures: () => Sp,
      shaderPackTextures: () => xp
    });
    var Op = cp(5167);
    let op = null,
      Ip = null;

    function Sp() {
      return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ip,
          textureNameToIndex: cp,
          textureAnimationData: Ip
        } = pp;
        return op ??= (0, Op.j)(cp, Ip, ip), op
      })), Ip
    }

    function xp() {
      if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return op
    }
  },
  6792: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp,
      h: () => xp
    });
    var Op = cp(6798),
      op = cp(6772),
      Ip = cp(118);
    const Sp = 100;
    async function xp(pp, ip) {
      var cp;
      let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
      const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
      if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
      const xp = await async function(pp) {
        if (!pp) return null;
        try {
          const ip = await (0, Ip.s)(pp);
          return ip ? await ip.requestDevice() : null
        } catch (ip) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ip), null
        }
      }(Op);
      if (!xp) return null;
      let Lp = !1;
      xp.lost.then((() => {
        Lp = !0
      }));
      try {
        const ip = await Promise.all(Sp.validationModules.map((ip => async function(pp, ip, cp) {
          ip.pushErrorScope("validation");
          const Op = ip.createShaderModule({
              code: cp.code
            }),
            op = ip.popErrorScope(),
            {
              messages: Ip
            } = await Op.getCompilationInfo(),
            Sp = Ip.filter((pp => "error" === pp.type)).map((ip => pp.mapValidationMessage(cp, ip))),
            xp = await op;
          xp && 0 === Sp.length && Sp.push({
            file: null,
            line: 0,
            message: xp.message,
            variants: [cp.key]
          });
          return Sp
        }(pp, xp, ip))));
        return Lp ? null : Yp(pp, pp.eOp(ip.flat()), Sp.offInStrict)
      } catch (Dp) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Dp), null
      } finally {
        xp.destroy()
      }
    }
    async function Lp(pp, ip) {
      var cp;
      if (!(0, Op.shaderPackNeedsCheck)(pp, ip) || (0, Op.isOtherApiVersion)(pp)) return pp;
      const op = await xp(ip, (0, Op.storedShaderPackFiles)(pp));
      if (!op) return pp;
      const Ip = !1 === (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) && !pp.validation.fromRecheck,
        Sp = {
          ...pp,
          validation: Ip ? op : {
            ...op,
            fromRecheck: !0
          }
        };
      return await (0, Op.replaceShaderPack)(pp, Sp, ip) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Sp
    }

    function Yp(pp, ip, cp) {
      return {
        headerVersion: (0, Op.pageShaderPackValidationVersion)(pp),
        ok: 0 === ip.length,
        errors: ip.slice(0, Sp),
        moreErrors: Math.max(0, ip.length - Sp),
        offInStrict: cp
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);