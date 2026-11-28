export const id = 136;
export const ids = [136, 139, 159, 160];
export const modules = {
  6105: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.g,
      f: () => Hb,
      h: () => eb.j
    });
    var eb = Mb(6110);
    const Hb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((wb => ({
      strict: bb,
      program: wb
    })))))
  },
  42181: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      installListedShaderPack: () => Ib
    });
    var eb = Mb(7760),
      Hb = Mb(6110),
      pb = Mb(1271),
      Vb = Mb(7798),
      gb = Mb(6105),
      lb = Mb(7840),
      Lb = Mb(7833);
    async function Ib(bb) {
      const wb = await (0, Vb.loadPageShaderPackCompiler)();
      if (null === wb) return {
        kind: "failed",
        reason: "compiler"
      };
      const Mb = await Ob(bb, wb);
      return "failed" === Mb.kind ? Mb : await (0, lb.saveShaderPack)(Mb.stored, wb) ? ((0, lb.markShaderPackChangePending)(), Mb) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Ob(bb, wb) {
      const Mb = await async function(bb) {
        let {
          packId: wb,
          sourceHash: Mb
        } = bb;
        try {
          const bb = await fetch(`${pb.clientSideServerUrls.s3Url}/${(0,eb.O)(wb,Mb)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!bb.ok) return console.error(`Failed to download shader pack ${wb} (${bb.status})`), null;
          const Hb = await bb.json();
          return "object" !== typeof Hb || null === Hb ? (console.error(`Shader pack ${wb}'s source isn't an object`), null) : Hb
        } catch (Hb) {
          return console.error(`Failed to download shader pack ${wb}`, Hb), null
        }
      }(bb);
      if (null === Mb) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, gb.h)(Mb.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Vb = (0, Hb.p)(Mb.files);
      if ("string" === typeof Vb) return console.error(`A listed shader pack breaks the pack rules: ${Vb}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Ib = await (0, Lb.d)(wb, Vb);
      if (!1 === (null === Ib || void 0 === Ib ? void 0 : Ib.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Ob = {
        manifest: {
          apiVersion: Mb.apiVersion,
          name: bb.name,
          author: bb.ownerName,
          description: bb.description || null,
          keepCircleShadows: !0 === Mb.keepCircleShadows
        },
        files: Vb
      };
      return {
        kind: "loaded",
        stored: (0, lb.toStoredShaderPack)(Ob, Ib, {
          packId: bb.packId,
          sourceHash: bb.sourceHash
        })
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
  },
  6110: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => Vb,
      g: () => eb,
      h: () => Eb,
      i: () => Ob,
      j: () => Hb,
      l: () => pb,
      p: () => Lb,
      t: () => Ib,
      x: () => Ub
    });
    const eb = 5;

    function Hb(bb) {
      return bb === eb
    }

    function pb(bb) {
      return [...bb.features]
    }
    const Vb = 262144,
      gb = 256,
      lb = 256;

    function Lb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const wb = [];
      for (const [Mb, eb] of Object.entries(bb)) {
        if ("string" !== typeof eb) return `${Mb} isn't text.`;
        wb.push({
          path: Mb,
          source: eb
        })
      }
      return wb.sort(((bb, wb) => Ob(bb.path, wb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > gb) return `The pack has more than ${gb} .wgsl files.`;
          const wb = new Set;
          for (const {
              path: Mb
            }
            of bb) {
            const bb = tb(Mb);
            if (null !== bb) return bb;
            if (wb.has(Mb)) return `The pack has two files at ${Mb}.`;
            wb.add(Mb)
          }
          return Ub(bb) > Vb ? `The pack's .wgsl files are over ${Vb/1024} KB in total.` : null
        }(wb) ?? wb
    }

    function Ib(bb) {
      const wb = {};
      for (const Mb of bb) wb[Mb.path] = Mb.source;
      return wb
    }

    function Ob(bb, wb) {
      return bb < wb ? -1 : bb > wb ? 1 : 0
    }

    function Ub(bb) {
      const wb = new TextEncoder;
      let Mb = 0;
      for (const {
          source: eb
        }
        of bb) Mb += wb.encode(eb).byteLength;
      return Mb
    }

    function tb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > lb) return `A file path is over ${lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Cb = /^(.*)\[rot\[([1-4])$/;

    function Eb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const eb = new Map;
      wb.forEach(((bb, wb) => {
        let {
          numAnimStates: Mb,
          animStartIdx: Hb
        } = bb;
        for (let pb = 1; pb < Mb; pb++) eb.set(Hb + pb - 1, wb)
      }));
      const Hb = Object.entries(bb),
        pb = new Map;
      for (const [Eb, Fb] of Hb) {
        const bb = Cb.exec(Eb);
        "1" === bb?.[2] && pb.set(bb[1], Fb + 1)
      }
      const Vb = bb => {
          const wb = Cb.exec(bb);
          return wb && pb.has(wb[1]) ? {
            root: wb[1],
            rotation: Number(wb[2]) - 1
          } : null
        },
        gb = new Set(Hb.map((bb => {
          let [wb] = bb;
          return Vb(wb)?.root ?? wb
        }))),
        lb = (bb, Mb) => {
          const eb = bb.replace(/_?0$/, "");
          return (wb[Mb]?.numAnimStates ?? 0) > 1 && !gb.has(eb) ? eb : bb
        },
        Lb = new Map;
      for (const [Cb, Eb] of Hb) Lb.set(Eb, lb(Vb(Cb)?.root ?? Cb, Eb));
      const Ib = Hb.reduce(((bb, wb) => {
          let [, Mb] = wb;
          return Math.max(bb, Mb + 1)
        }), 0),
        Ob = Array.from({
          length: Ib
        }, ((bb, wb) => ({
          id: wb + 1,
          rotation: 0
        }))),
        Ub = new Map,
        tb = new Map;
      for (const [Cb, Eb] of Hb) {
        const bb = Vb(Cb),
          wb = eb.get(Eb);
        if (void 0 !== wb) {
          const Mb = Lb.get(wb);
          tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "frame"
          }), bb && !tb.has(bb.root) && tb.set(bb.root, {
            name: bb.root,
            texture: Mb,
            kind: "frame"
          });
          continue
        }
        const Mb = Lb.get(Eb),
          Hb = bb?.root ?? Cb;
        if (Mb !== Hb && tb.set(Hb, {
            name: Hb,
            texture: Mb,
            kind: "frame"
          }), bb) {
          const wb = pb.get(bb.root);
          Ob[Eb] = {
            id: wb,
            rotation: bb.rotation
          }, Ub.set(Mb, wb), tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "rotation"
          })
        } else Ub.set(Mb, Eb + 1)
      }
      for (const Cb of Ub.keys()) tb.delete(Cb);
      for (const [Cb, Eb] of Mb) {
        const bb = Ub.get(Eb);
        void 0 === bb || Ub.has(Cb) || (Ub.set(Cb, bb), tb.delete(Cb))
      }
      return {
        named: [...Ub].sort(((bb, wb) => {
          let [Mb] = bb, [eb] = wb;
          return Mb < eb ? -1 : Mb > eb ? 1 : 0
        })).map((bb => {
          let [wb, Mb] = bb;
          return {
            name: wb,
            id: Mb
          }
        })),
        aliases: [...tb.values()],
        layers: Ob
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);