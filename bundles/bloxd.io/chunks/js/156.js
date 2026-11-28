export const id = 156;
export const ids = [156, 159, 160];
export const modules = {
  7787: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(6098),
      Hb = Mb(1364);
    const pb = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Vb(bb) {
      let {
        diagnostics: wb,
        more: Mb = 0,
        t: Vb
      } = bb;
      return (0, Hb.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [wb.map(((bb, wb) => {
          const Mb = (0, eb.h)(bb),
            gb = function(bb, wb) {
              const Mb = (0, eb.d)(null !== bb && void 0 !== bb ? bb : []);
              if (0 === Mb.length) return null;
              return Mb.map((bb => bb.map((bb => wb(pb[bb]))).join(", "))).join("; ")
            }(bb.variants, Vb);
          return (0, Hb.jsxs)("li", {
            children: [Mb && (0, Hb.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Mb
            }), bb.message, gb && (0, Hb.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Vb("shaderPack:onlyIn", {
                variants: gb
              })
            })]
          }, wb)
        })), Mb > 0 && (0, Hb.jsx)("li", {
          children: Vb("shaderPack:moreErrors", {
            count: String(Mb)
          })
        })]
      })
    }
  },
  7795: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Xb,
      f: () => xb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(6014),
      gb = Mb(1468),
      lb = Mb(1475),
      Lb = Mb(1259),
      Ib = Mb(6110),
      Ob = Mb(6105),
      Ub = Mb(4536);
    const tb = 33554432,
      Cb = 1024,
      Eb = 65536;
    async function Fb(bb) {
      const wb = (0, Ub.r)(bb);
      if (wb) {
        if (wb.size > tb) throw new Ub.d("shaderPack:loadZipTooBig", {
          megabytes: String(tb / 1048576)
        });
        return async function(bb) {
          return Bb((0, Ub.k)(bb, Cb).map((wb => ({
            path: wb.path,
            read: Mb => (0, Ub.n)(bb, wb, Mb)
          }))))
        }(new Uint8Array(await wb.arrayBuffer()))
      }
      return Bb(bb.map((bb => ({
        path: (0, Ub.m)(bb),
        read: wb => async function(bb, wb) {
          return bb.size > wb ? null : new Uint8Array(await bb.arrayBuffer())
        }(bb, wb)
      }))))
    }
    async function Bb(bb) {
      const wb = function(bb) {
          const wb = bb.length > 0 ? bb[0].path.indexOf("/") : -1;
          if (-1 === wb) return bb;
          const Mb = bb[0].path.slice(0, wb + 1);
          if (!bb.every((bb => bb.path.startsWith(Mb)))) return bb;
          return bb.map((bb => ({
            ...bb,
            path: bb.path.slice(Mb.length)
          })))
        }(bb.filter((bb => !(0, Ub.h)(bb.path)))),
        Mb = wb.filter((bb => "pack.json" === bb.path.toLowerCase()));
      if (0 === Mb.length) throw new Ub.d("shaderPack:loadNoManifest");
      if (Mb.length > 1) throw new Ub.d("shaderPack:loadDuplicateManifest");
      const eb = Mb[0],
        Hb = await eb.read(Eb);
      if (null === Hb) throw new Ub.d("shaderPack:loadManifestTooBig", {
        kilobytes: String(Eb / 1024)
      });
      const pb = function(bb) {
          let wb;
          try {
            wb = JSON.parse(bb)
          } catch (gb) {
            throw new Ub.d("shaderPack:loadManifestNotJson", {
              error: gb.message
            }, {
              cause: gb
            })
          }
          if ("object" !== typeof wb || null === wb || Array.isArray(wb)) throw new Ub.d("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Mb,
            name: eb,
            author: Hb,
            description: pb,
            keepCircleShadows: Vb
          } = wb;
          if (void 0 === Mb) throw new Ub.d("shaderPack:loadNoApiVersion", {
            version: String(Ob.b)
          });
          if (!(0, Ob.h)(Mb)) throw new Ub.d("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Mb),
            version: String(Ob.b)
          });
          if ("string" !== typeof eb || "" === eb.trim()) throw new Ub.d("shaderPack:loadNoName");
          if (void 0 !== Hb && null !== Hb && "string" !== typeof Hb) throw new Ub.d("shaderPack:loadAuthorNotString");
          if (void 0 !== pb && null !== pb && "string" !== typeof pb) throw new Ub.d("shaderPack:loadDescriptionNotString");
          if (void 0 !== Vb && "boolean" !== typeof Vb) throw new Ub.d("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Mb,
            name: eb,
            author: "string" === typeof Hb ? Hb : null,
            description: "string" === typeof pb && "" !== pb.trim() ? pb : null,
            keepCircleShadows: !0 === Vb
          }
        }(sb(Hb, eb.path)),
        Vb = wb.filter((bb => bb.path.toLowerCase().endsWith(".wgsl"))).sort(((bb, wb) => (0, Ib.i)(bb.path, wb.path)));
      if (0 === Vb.length) throw new Ub.d("shaderPack:loadNoWgsl");
      if (Vb.length > Ib.b) throw new Ub.d("shaderPack:loadTooManyWgsl", {
        count: String(Ib.b)
      });
      const gb = Vb.find(((bb, wb) => wb > 0 && bb.path === Vb[wb - 1].path));
      if (gb) throw new Ub.d("shaderPack:loadDuplicatePath", {
        path: gb.path
      });
      const lb = [];
      let Lb = Ib.e;
      for (const Ob of Vb) {
        const bb = await Ob.read(Lb);
        if (null === bb) throw new Ub.d("shaderPack:loadSourceTooBig", {
          kilobytes: String(Ib.e / 1024)
        });
        Lb -= bb.byteLength, lb.push({
          path: Ob.path,
          source: sb(bb, Ob.path)
        })
      }
      return {
        manifest: pb,
        files: lb
      }
    }

    function sb(bb, wb) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(bb)
      } catch (Mb) {
        throw new Ub.d("shaderPack:loadNotUtf8", {
          path: wb
        }, {
          cause: Mb
        })
      }
    }
    var mb = Mb(6098),
      hb = Mb(6116),
      zb = Mb(1364);

    function Xb(bb) {
      let {
        busy: wb,
        disabled: Mb,
        onFiles: eb
      } = bb;
      const {
        t: Hb
      } = (0, Lb.C)(), {
        getRootProps: Ib,
        getInputProps: Ob,
        isDragActive: Ub,
        open: tb
      } = (0, Vb.c)({
        onDrop: eb,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Mb
      });
      return (0, zb.jsxs)("div", {
        ...Ib({
          className: pb()("ShaderPackDropZone", {
            ActiveDrag: Ub,
            Disabled: Mb
          })
        }),
        children: [(0, zb.jsx)("input", {
          ...Ob({
            webkitdirectory: "true"
          })
        }), wb && (0, zb.jsx)(gb.c, {}), !wb && (0, zb.jsxs)(zb.Fragment, {
          children: [(0, zb.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, zb.jsx)(lb.b, {
              name: "up-from-bracket"
            })
          }), (0, zb.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Hb((0, hb.g)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, zb.jsx)(hb.d, {
            disabled: Mb,
            openFolderPicker: tb,
            onFiles: eb
          })]
        })]
      })
    }

    function xb(bb) {
      const {
        t: wb
      } = (0, Lb.C)(), [Mb, Hb] = (0, eb.useState)(!1), [pb, Vb] = (0, eb.useState)(null), gb = (0, eb.useRef)(!1);
      return {
        loading: Mb,
        error: pb,
        setError: Vb,
        onFiles: async function(Mb) {
          if (!gb.current) {
            gb.current = !0, Hb(!0), Vb(null);
            try {
              await bb(await Fb(Mb))
            } catch (eb) {
              eb instanceof Ub.d ? Vb((0, mb.i)(wb, eb.translationKey, eb.params)) : (console.error("Failed to load the shader pack", eb), Vb(wb("shaderPack:unexpectedError")))
            } finally {
              gb.current = !1, Hb(!1)
            }
          }
        }
      }
    }
  },
  7840: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      forgetShaderPackActiveHint: () => Db,
      isOtherApiVersion: () => jb,
      isShaderPackActive: () => hb,
      isShaderPackChangePending: () => xb,
      markShaderPackChangePending: () => Xb,
      pageShaderPackValidationVersion: () => Kb,
      reconcileStoredShaderPackHint: () => Rb,
      removeShaderPack: () => mb,
      replaceShaderPack: () => Fb,
      saveShaderPack: () => Eb,
      shaderPackNeedsCheck: () => rb,
      storedPackOutcome: () => zb,
      storedShaderPackFiles: () => Ub,
      toStoredShaderPack: () => Ob
    });
    var eb = Mb(6110),
      Hb = Mb(6105),
      pb = Mb(43),
      Vb = Mb(4843),
      gb = Mb(7848),
      lb = Mb(7819);
    const Lb = "shaderPackChangePending";
    let Ib = null;

    function Ob(bb, wb, Mb) {
      return {
        manifest: bb.manifest,
        files: (0, eb.t)(bb.files),
        validation: wb,
        ...Mb && {
          listing: Mb
        }
      }
    }

    function Ub(bb) {
      return Object.keys(bb.files).map((wb => ({
        path: wb,
        source: bb.files[wb]
      })))
    }
    let tb = Promise.resolve();

    function Cb(bb) {
      const wb = tb.then(bb);
      return tb = wb.catch((() => {})), wb
    }

    function Eb(bb, wb) {
      return Cb((() => Bb(bb, wb)))
    }

    function Fb(bb, wb, Mb) {
      return Cb((async () => JSON.stringify(await (0, gb.g)()) === JSON.stringify(bb) && (null === wb ? (await sb(), !0) : Bb(wb, Mb))))
    }
    async function Bb(bb, wb) {
      const Mb = await pb.h.setItem(gb.c, bb);
      return Mb && cb(bb, wb), Mb
    }
    async function sb() {
      await pb.h.removeItem(gb.c), pb.i.removeItem(Vb.d)
    }

    function mb() {
      return Cb(sb)
    }

    function hb(bb, wb) {
      return "active" === zb(bb, wb).kind
    }

    function zb(bb, wb) {
      var Mb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : jb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Mb = bb.validation) || void 0 === Mb ? void 0 : Mb.ok) || bb.validation.fromRecheck ? null === wb ? {
        kind: "none",
        reason: "noCompiler"
      } : rb(bb, wb) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : bb.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Xb() {
      pb.j.setItem(Lb, performance.timeOrigin)
    }

    function xb() {
      return pb.j.getItem(Lb) === performance.timeOrigin
    }

    function jb(bb) {
      return !(0, Hb.h)(bb.manifest.apiVersion)
    }

    function Kb(bb) {
      return Ib ??= bb.MJ((0, lb.shaderPackTextures)()), Ib
    }

    function rb(bb, wb) {
      var Mb;
      return (null === (Mb = bb.validation) || void 0 === Mb ? void 0 : Mb.headerVersion) !== Kb(wb)
    }

    function Rb(bb) {
      return Cb((async () => {
        cb(await (0, gb.g)(!0), bb)
      }))
    }

    function Db() {
      return Cb((async () => {
        pb.i.removeItem(Vb.d)
      }))
    }

    function cb(bb, wb) {
      hb(bb, wb) ? pb.i.setItem(Vb.d, !0) : pb.i.removeItem(Vb.d)
    }
  },
  7819: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      loadShaderPackTextures: () => Vb,
      shaderPackTextures: () => gb
    });
    var eb = Mb(6110);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Promise.all([Mb.e(85), Mb.e(126)]).then((() => Mb(42174))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: wb,
          textureNameToIndex: Mb,
          textureAnimationData: pb
        } = bb;
        return Hb ??= (0, eb.h)(Mb, pb, wb), Hb
      })), pb
    }

    function gb() {
      if (null === Hb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Hb
    }
  },
  7833: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      d: () => gb
    });
    var eb = Mb(7840),
      Hb = Mb(7819),
      pb = Mb(135);
    const Vb = 100;
    async function gb(bb, wb) {
      var Mb;
      let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Mb = navigator.gpu) && void 0 !== Mb ? Mb : null;
      const Vb = bb.Xwb(wb, (0, Hb.shaderPackTextures)());
      if (Vb.errors.length > 0) return Lb(bb, Vb.errors, Vb.offInStrict);
      const gb = await async function(bb) {
        if (!bb) return null;
        try {
          const wb = await (0, pb.w)(bb);
          return wb ? await wb.requestDevice() : null
        } catch (wb) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", wb), null
        }
      }(eb);
      if (!gb) return null;
      let lb = !1;
      gb.lost.then((() => {
        lb = !0
      }));
      try {
        const wb = await Promise.all(Vb.validationModules.map((wb => async function(bb, wb, Mb) {
          wb.pushErrorScope("validation");
          const eb = wb.createShaderModule({
              code: Mb.code
            }),
            Hb = wb.popErrorScope(),
            {
              messages: pb
            } = await eb.getCompilationInfo(),
            Vb = pb.filter((bb => "error" === bb.type)).map((wb => bb.mapValidationMessage(Mb, wb))),
            gb = await Hb;
          gb && 0 === Vb.length && Vb.push({
            file: null,
            line: 0,
            message: gb.message,
            variants: [Mb.key]
          });
          return Vb
        }(bb, gb, wb))));
        return lb ? null : Lb(bb, bb.FHb(wb.flat()), Vb.offInStrict)
      } catch (Ib) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Ib), null
      } finally {
        gb.destroy()
      }
    }
    async function lb(bb, wb) {
      var Mb;
      if (!(0, eb.shaderPackNeedsCheck)(bb, wb) || (0, eb.isOtherApiVersion)(bb)) return bb;
      const Hb = await gb(wb, (0, eb.storedShaderPackFiles)(bb));
      if (!Hb) return bb;
      const pb = !1 === (null === (Mb = bb.validation) || void 0 === Mb ? void 0 : Mb.ok) && !bb.validation.fromRecheck,
        Vb = {
          ...bb,
          validation: pb ? Hb : {
            ...Hb,
            fromRecheck: !0
          }
        };
      return await (0, eb.replaceShaderPack)(bb, Vb, wb) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Vb
    }

    function Lb(bb, wb, Mb) {
      return {
        headerVersion: (0, eb.pageShaderPackValidationVersion)(bb),
        ok: 0 === wb.length,
        errors: wb.slice(0, Vb),
        moreErrors: Math.max(0, wb.length - Vb),
        offInStrict: Mb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);