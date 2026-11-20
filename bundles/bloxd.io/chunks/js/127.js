export const id = 127;
export const ids = [127, 130];
export const modules = {
  6269: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb.j,
      h: () => Wb,
      k: () => kb.p
    });
    var kb = sb(6250);
    const Wb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((cb => ({
      strict: bb,
      program: cb
    })))))
  },
  6321: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      forgetShaderPackActiveHint: () => tb,
      isOtherApiVersion: () => hb,
      isShaderPackActive: () => Vb,
      isShaderPackChangePending: () => Yb,
      markShaderPackChangePending: () => ub,
      pageShaderPackValidationVersion: () => Jb,
      reconcileStoredShaderPackHint: () => Bb,
      removeShaderPack: () => Nb,
      replaceShaderPack: () => Qb,
      saveShaderPack: () => lb,
      shaderPackNeedsCheck: () => gb,
      storedPackOutcome: () => Lb,
      storedShaderPackFiles: () => Xb,
      toStoredShaderPack: () => Mb
    });
    var kb = sb(6250),
      Wb = sb(6269),
      ab = sb(37),
      Tb = sb(3222),
      Ub = sb(6328),
      Ib = sb(6301);
    const Hb = "shaderPackChangePending";
    let fb = null;

    function Mb(bb, cb, sb) {
      return {
        manifest: bb.manifest,
        files: (0, kb.u)(bb.files),
        validation: cb,
        ...sb && {
          listing: sb
        }
      }
    }

    function Xb(bb) {
      return Object.keys(bb.files).map((cb => ({
        path: cb,
        source: bb.files[cb]
      })))
    }
    let nb = Promise.resolve();

    function mb(bb) {
      const cb = nb.then(bb);
      return nb = cb.catch((() => {})), cb
    }

    function lb(bb, cb) {
      return mb((() => eb(bb, cb)))
    }

    function Qb(bb, cb, sb) {
      return mb((async () => JSON.stringify(await (0, Ub.d)()) === JSON.stringify(bb) && (null === cb ? (await Cb(), !0) : eb(cb, sb))))
    }
    async function eb(bb, cb) {
      const sb = await ab.d.setItem(Ub.b, bb);
      return sb && yb(bb, cb), sb
    }
    async function Cb() {
      await ab.d.removeItem(Ub.b), ab.h.removeItem(Tb.c)
    }

    function Nb() {
      return mb(Cb)
    }

    function Vb(bb, cb) {
      return "active" === Lb(bb, cb).kind
    }

    function Lb(bb, cb) {
      var sb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : hb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.ok) || bb.validation.fromRecheck ? null === cb ? {
        kind: "none",
        reason: "noCompiler"
      } : gb(bb, cb) ? {
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

    function ub() {
      ab.i.setItem(Hb, performance.timeOrigin)
    }

    function Yb() {
      return ab.i.getItem(Hb) === performance.timeOrigin
    }

    function hb(bb) {
      return !(0, Wb.k)(bb.manifest.apiVersion)
    }

    function Jb(bb) {
      return fb ??= bb.lY((0, Ib.shaderPackTextures)()), fb
    }

    function gb(bb, cb) {
      var sb;
      return (null === (sb = bb.validation) || void 0 === sb ? void 0 : sb.headerVersion) !== Jb(cb)
    }

    function Bb(bb) {
      return mb((async () => {
        yb(await (0, Ub.d)(!0), bb)
      }))
    }

    function tb() {
      return mb((async () => {
        ab.h.removeItem(Tb.c)
      }))
    }

    function yb(bb, cb) {
      Vb(bb, cb) ? ab.h.setItem(Tb.c, !0) : ab.h.removeItem(Tb.c)
    }
  },
  6301: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      loadShaderPackTextures: () => Tb,
      shaderPackTextures: () => Ub
    });
    var kb = sb(6250);
    let Wb = null,
      ab = null;

    function Tb() {
      return ab ??= Promise.all([sb.e(69), sb.e(198)]).then((() => sb(39908))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: cb,
          textureNameToIndex: sb,
          textureAnimationData: ab
        } = bb;
        return Wb ??= (0, kb.l)(sb, ab, cb), Wb
      })), ab
    }

    function Ub() {
      if (null === Wb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wb
    }
  },
  6250: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      h: () => ab,
      j: () => kb,
      l: () => mb,
      o: () => fb,
      p: () => Wb,
      t: () => Ib,
      u: () => Hb,
      w: () => Mb
    });
    const kb = 5;

    function Wb(bb) {
      return bb === kb
    }
    const ab = 262144,
      Tb = 256,
      Ub = 256;

    function Ib(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const cb = [];
      for (const [sb, kb] of Object.entries(bb)) {
        if ("string" !== typeof kb) return `${sb} isn't text.`;
        cb.push({
          path: sb,
          source: kb
        })
      }
      return cb.sort(((bb, cb) => fb(bb.path, cb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Tb) return `The pack has more than ${Tb} .wgsl files.`;
          const cb = new Set;
          for (const {
              path: sb
            }
            of bb) {
            const bb = Xb(sb);
            if (null !== bb) return bb;
            if (cb.has(sb)) return `The pack has two files at ${sb}.`;
            cb.add(sb)
          }
          return Mb(bb) > ab ? `The pack's .wgsl files are over ${ab/1024} KB in total.` : null
        }(cb) ?? cb
    }

    function Hb(bb) {
      const cb = {};
      for (const sb of bb) cb[sb.path] = sb.source;
      return cb
    }

    function fb(bb, cb) {
      return bb < cb ? -1 : bb > cb ? 1 : 0
    }

    function Mb(bb) {
      const cb = new TextEncoder;
      let sb = 0;
      for (const {
          source: kb
        }
        of bb) sb += cb.encode(kb).byteLength;
      return sb
    }

    function Xb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Ub) return `A file path is over ${Ub} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const nb = /^(.*)\[rot\[([1-4])$/;

    function mb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const kb = new Map;
      cb.forEach(((bb, cb) => {
        let {
          numAnimStates: sb,
          animStartIdx: Wb
        } = bb;
        for (let ab = 1; ab < sb; ab++) kb.set(Wb + ab - 1, cb)
      }));
      const Wb = Object.entries(bb),
        ab = new Map;
      for (const [lb, Qb] of Wb) {
        const bb = nb.exec(lb);
        "1" === bb?.[2] && ab.set(bb[1], Qb + 1)
      }
      const Tb = bb => {
          const cb = nb.exec(bb);
          return cb && ab.has(cb[1]) ? {
            root: cb[1],
            rotation: Number(cb[2]) - 1
          } : null
        },
        Ub = new Set(Wb.map((bb => {
          let [cb] = bb;
          return Tb(cb)?.root ?? cb
        }))),
        Ib = (bb, sb) => {
          const kb = bb.replace(/_?0$/, "");
          return (cb[sb]?.numAnimStates ?? 0) > 1 && !Ub.has(kb) ? kb : bb
        },
        Hb = new Map;
      for (const [nb, lb] of Wb) Hb.set(lb, Ib(Tb(nb)?.root ?? nb, lb));
      const fb = Wb.reduce(((bb, cb) => {
          let [, sb] = cb;
          return Math.max(bb, sb + 1)
        }), 0),
        Mb = Array.from({
          length: fb
        }, ((bb, cb) => ({
          id: cb + 1,
          rotation: 0
        }))),
        Xb = new Map,
        mb = new Map;
      for (const [nb, lb] of Wb) {
        const bb = Tb(nb),
          cb = kb.get(lb);
        if (void 0 !== cb) {
          const sb = Hb.get(cb);
          mb.set(nb, {
            name: nb,
            texture: sb,
            kind: "frame"
          }), bb && !mb.has(bb.root) && mb.set(bb.root, {
            name: bb.root,
            texture: sb,
            kind: "frame"
          });
          continue
        }
        const sb = Hb.get(lb),
          Wb = bb?.root ?? nb;
        if (sb !== Wb && mb.set(Wb, {
            name: Wb,
            texture: sb,
            kind: "frame"
          }), bb) {
          const cb = ab.get(bb.root);
          Mb[lb] = {
            id: cb,
            rotation: bb.rotation
          }, Xb.set(sb, cb), mb.set(nb, {
            name: nb,
            texture: sb,
            kind: "rotation"
          })
        } else Xb.set(sb, lb + 1)
      }
      for (const nb of Xb.keys()) mb.delete(nb);
      for (const [nb, lb] of sb) {
        const bb = Xb.get(lb);
        void 0 === bb || Xb.has(nb) || (Xb.set(nb, bb), mb.delete(nb))
      }
      return {
        named: [...Xb].sort(((bb, cb) => {
          let [sb] = bb, [kb] = cb;
          return sb < kb ? -1 : sb > kb ? 1 : 0
        })).map((bb => {
          let [cb, sb] = bb;
          return {
            name: cb,
            id: sb
          }
        })),
        aliases: [...mb.values()],
        layers: Mb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);