export const id = 137;
export const ids = [137, 139, 159, 160];
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
  7848: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => pb
    });
    var eb = Mb(43);
    const Hb = "shaderPack";
    async function pb() {
      var bb;
      let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await eb.h.getItem(Hb, wb)) && void 0 !== bb ? bb : null
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