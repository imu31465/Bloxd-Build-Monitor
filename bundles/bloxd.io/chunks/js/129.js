export const id = 129;
export const ids = [128, 129, 131];
export const modules = {
  6344: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.i,
      f: () => Ob,
      i: () => Bb.q
    });
    var Bb = hb(6324);
    const Ob = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((ub => ({
      strict: bb,
      program: ub
    })))))
  },
  6388: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      forgetShaderPackActiveHint: () => zb,
      isOtherApiVersion: () => jb,
      isShaderPackActive: () => Wb,
      isShaderPackChangePending: () => rb,
      markShaderPackChangePending: () => db,
      pageShaderPackValidationVersion: () => nb,
      reconcileStoredShaderPackHint: () => xb,
      removeShaderPack: () => Kb,
      replaceShaderPack: () => ob,
      saveShaderPack: () => pb,
      shaderPackNeedsCheck: () => Db,
      storedPackOutcome: () => Cb,
      storedShaderPackFiles: () => wb,
      toStoredShaderPack: () => Hb
    });
    var Bb = hb(6324),
      Ob = hb(6344),
      Gb = hb(29),
      Ub = hb(3237),
      Lb = hb(6394),
      Yb = hb(6365);
    const Sb = "shaderPackChangePending";
    let ab = null;

    function Hb(bb, ub, hb) {
      return {
        manifest: bb.manifest,
        files: (0, Bb.v)(bb.files),
        validation: ub,
        ...hb && {
          listing: hb
        }
      }
    }

    function wb(bb) {
      return Object.keys(bb.files).map((ub => ({
        path: ub,
        source: bb.files[ub]
      })))
    }
    let Zb = Promise.resolve();

    function Xb(bb) {
      const ub = Zb.then(bb);
      return Zb = ub.catch((() => {})), ub
    }

    function pb(bb, ub) {
      return Xb((() => Ab(bb, ub)))
    }

    function ob(bb, ub, hb) {
      return Xb((async () => JSON.stringify(await (0, Lb.g)()) === JSON.stringify(bb) && (null === ub ? (await lb(), !0) : Ab(ub, hb))))
    }
    async function Ab(bb, ub) {
      const hb = await Gb.f.setItem(Lb.d, bb);
      return hb && gb(bb, ub), hb
    }
    async function lb() {
      await Gb.f.removeItem(Lb.d), Gb.j.removeItem(Ub.d)
    }

    function Kb() {
      return Xb(lb)
    }

    function Wb(bb, ub) {
      return "active" === Cb(bb, ub).kind
    }

    function Cb(bb, ub) {
      var hb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : jb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.ok) || bb.validation.fromRecheck ? null === ub ? {
        kind: "none",
        reason: "noCompiler"
      } : Db(bb, ub) ? {
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

    function db() {
      Gb.m.setItem(Sb, performance.timeOrigin)
    }

    function rb() {
      return Gb.m.getItem(Sb) === performance.timeOrigin
    }

    function jb(bb) {
      return !(0, Ob.i)(bb.manifest.apiVersion)
    }

    function nb(bb) {
      return ab ??= bb.VJ((0, Yb.shaderPackTextures)()), ab
    }

    function Db(bb, ub) {
      var hb;
      return (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.headerVersion) !== nb(ub)
    }

    function xb(bb) {
      return Xb((async () => {
        gb(await (0, Lb.g)(!0), bb)
      }))
    }

    function zb() {
      return Xb((async () => {
        Gb.j.removeItem(Ub.d)
      }))
    }

    function gb(bb, ub) {
      Wb(bb, ub) ? Gb.j.setItem(Ub.d, !0) : Gb.j.removeItem(Ub.d)
    }
  },
  6394: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      g: () => Gb
    });
    var Bb = hb(29);
    const Ob = "shaderPack";
    async function Gb() {
      var bb;
      let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Bb.f.getItem(Ob, ub)) && void 0 !== bb ? bb : null
    }
  },
  6365: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      loadShaderPackTextures: () => Ub,
      shaderPackTextures: () => Lb
    });
    var Bb = hb(6324);
    let Ob = null,
      Gb = null;

    function Ub() {
      return Gb ??= Promise.all([hb.e(70), hb.e(199)]).then((() => hb(39946))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ub,
          textureNameToIndex: hb,
          textureAnimationData: Gb
        } = bb;
        return Ob ??= (0, Bb.j)(hb, Gb, ub), Ob
      })), Gb
    }

    function Lb() {
      if (null === Ob) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ob
    }
  },
  6324: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Gb,
      i: () => Bb,
      j: () => Xb,
      n: () => ab,
      q: () => Ob,
      t: () => Yb,
      v: () => Sb,
      z: () => Hb
    });
    const Bb = 5;

    function Ob(bb) {
      return bb === Bb
    }
    const Gb = 262144,
      Ub = 256,
      Lb = 256;

    function Yb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const ub = [];
      for (const [hb, Bb] of Object.entries(bb)) {
        if ("string" !== typeof Bb) return `${hb} isn't text.`;
        ub.push({
          path: hb,
          source: Bb
        })
      }
      return ub.sort(((bb, ub) => ab(bb.path, ub.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Ub) return `The pack has more than ${Ub} .wgsl files.`;
          const ub = new Set;
          for (const {
              path: hb
            }
            of bb) {
            const bb = wb(hb);
            if (null !== bb) return bb;
            if (ub.has(hb)) return `The pack has two files at ${hb}.`;
            ub.add(hb)
          }
          return Hb(bb) > Gb ? `The pack's .wgsl files are over ${Gb/1024} KB in total.` : null
        }(ub) ?? ub
    }

    function Sb(bb) {
      const ub = {};
      for (const hb of bb) ub[hb.path] = hb.source;
      return ub
    }

    function ab(bb, ub) {
      return bb < ub ? -1 : bb > ub ? 1 : 0
    }

    function Hb(bb) {
      const ub = new TextEncoder;
      let hb = 0;
      for (const {
          source: Bb
        }
        of bb) hb += ub.encode(Bb).byteLength;
      return hb
    }

    function wb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Lb) return `A file path is over ${Lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Zb = /^(.*)\[rot\[([1-4])$/;

    function Xb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Bb = new Map;
      ub.forEach(((bb, ub) => {
        let {
          numAnimStates: hb,
          animStartIdx: Ob
        } = bb;
        for (let Gb = 1; Gb < hb; Gb++) Bb.set(Ob + Gb - 1, ub)
      }));
      const Ob = Object.entries(bb),
        Gb = new Map;
      for (const [pb, ob] of Ob) {
        const bb = Zb.exec(pb);
        "1" === bb?.[2] && Gb.set(bb[1], ob + 1)
      }
      const Ub = bb => {
          const ub = Zb.exec(bb);
          return ub && Gb.has(ub[1]) ? {
            root: ub[1],
            rotation: Number(ub[2]) - 1
          } : null
        },
        Lb = new Set(Ob.map((bb => {
          let [ub] = bb;
          return Ub(ub)?.root ?? ub
        }))),
        Yb = (bb, hb) => {
          const Bb = bb.replace(/_?0$/, "");
          return (ub[hb]?.numAnimStates ?? 0) > 1 && !Lb.has(Bb) ? Bb : bb
        },
        Sb = new Map;
      for (const [Zb, pb] of Ob) Sb.set(pb, Yb(Ub(Zb)?.root ?? Zb, pb));
      const ab = Ob.reduce(((bb, ub) => {
          let [, hb] = ub;
          return Math.max(bb, hb + 1)
        }), 0),
        Hb = Array.from({
          length: ab
        }, ((bb, ub) => ({
          id: ub + 1,
          rotation: 0
        }))),
        wb = new Map,
        Xb = new Map;
      for (const [Zb, pb] of Ob) {
        const bb = Ub(Zb),
          ub = Bb.get(pb);
        if (void 0 !== ub) {
          const hb = Sb.get(ub);
          Xb.set(Zb, {
            name: Zb,
            texture: hb,
            kind: "frame"
          }), bb && !Xb.has(bb.root) && Xb.set(bb.root, {
            name: bb.root,
            texture: hb,
            kind: "frame"
          });
          continue
        }
        const hb = Sb.get(pb),
          Ob = bb?.root ?? Zb;
        if (hb !== Ob && Xb.set(Ob, {
            name: Ob,
            texture: hb,
            kind: "frame"
          }), bb) {
          const ub = Gb.get(bb.root);
          Hb[pb] = {
            id: ub,
            rotation: bb.rotation
          }, wb.set(hb, ub), Xb.set(Zb, {
            name: Zb,
            texture: hb,
            kind: "rotation"
          })
        } else wb.set(hb, pb + 1)
      }
      for (const Zb of wb.keys()) Xb.delete(Zb);
      for (const [Zb, pb] of hb) {
        const bb = wb.get(pb);
        void 0 === bb || wb.has(Zb) || (wb.set(Zb, bb), Xb.delete(Zb))
      }
      return {
        named: [...wb].sort(((bb, ub) => {
          let [hb] = bb, [Bb] = ub;
          return hb < Bb ? -1 : hb > Bb ? 1 : 0
        })).map((bb => {
          let [ub, hb] = bb;
          return {
            name: ub,
            id: hb
          }
        })),
        aliases: [...Xb.values()],
        layers: Hb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);