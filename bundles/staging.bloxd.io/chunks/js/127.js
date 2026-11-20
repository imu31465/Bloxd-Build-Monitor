export const id = 127;
export const ids = [127, 128, 131];
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
  39950: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Hb,
      installListedShaderPack: () => ab
    });
    var Bb = hb(6281),
      Ob = hb(6324),
      Gb = hb(1103),
      Ub = hb(6350),
      Lb = hb(6344),
      Yb = hb(6388),
      Sb = hb(6384);
    async function ab(bb) {
      const ub = await (0, Ub.loadPageShaderPackCompiler)();
      if (null === ub) return {
        kind: "failed",
        reason: "compiler"
      };
      const hb = await Hb(bb, ub);
      return "failed" === hb.kind ? hb : await (0, Yb.saveShaderPack)(hb.stored, ub) ? ((0, Yb.markShaderPackChangePending)(), hb) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Hb(bb, ub) {
      const hb = await async function(bb) {
        let {
          packId: ub,
          sourceHash: hb
        } = bb;
        try {
          const bb = await fetch(`${Gb.clientSideServerUrls.s3Url}/${(0,Bb.G)(ub,hb)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!bb.ok) return console.error(`Failed to download shader pack ${ub} (${bb.status})`), null;
          const Ob = await bb.json();
          return "object" !== typeof Ob || null === Ob ? (console.error(`Shader pack ${ub}'s source isn't an object`), null) : Ob
        } catch (Ob) {
          return console.error(`Failed to download shader pack ${ub}`, Ob), null
        }
      }(bb);
      if (null === hb) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Lb.i)(hb.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Ub = (0, Ob.t)(hb.files);
      if ("string" === typeof Ub) return console.error(`A listed shader pack breaks the pack rules: ${Ub}`), {
        kind: "failed",
        reason: "invalid"
      };
      const ab = await (0, Sb.d)(ub, Ub);
      if (!1 === (null === ab || void 0 === ab ? void 0 : ab.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Hb = {
        manifest: {
          apiVersion: hb.apiVersion,
          name: bb.name,
          author: bb.ownerName,
          description: bb.description || null,
          keepCircleShadows: !0 === hb.keepCircleShadows
        },
        files: Ub
      };
      return {
        kind: "loaded",
        stored: (0, Yb.toStoredShaderPack)(Hb, ab, {
          packId: bb.packId,
          sourceHash: bb.sourceHash
        })
      }
    }
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
  6384: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      d: () => Lb
    });
    var Bb = hb(6388),
      Ob = hb(6365),
      Gb = hb(104);
    const Ub = 100;
    async function Lb(bb, ub) {
      var hb;
      let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (hb = navigator.gpu) && void 0 !== hb ? hb : null;
      const Ub = bb.k_(ub, (0, Ob.shaderPackTextures)());
      if (Ub.errors.length > 0) return Sb(bb, Ub.errors, Ub.offInStrict);
      const Lb = await async function(bb) {
        if (!bb) return null;
        try {
          const ub = await (0, Gb.x)(bb);
          return ub ? await ub.requestDevice() : null
        } catch (ub) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ub), null
        }
      }(Bb);
      if (!Lb) return null;
      let Yb = !1;
      Lb.lost.then((() => {
        Yb = !0
      }));
      try {
        const ub = await Promise.all(Ub.validationModules.map((ub => async function(bb, ub, hb) {
          ub.pushErrorScope("validation");
          const Bb = ub.createShaderModule({
              code: hb.code
            }),
            Ob = ub.popErrorScope(),
            {
              messages: Gb
            } = await Bb.getCompilationInfo(),
            Ub = Gb.filter((bb => "error" === bb.type)).map((ub => bb.mapValidationMessage(hb, ub))),
            Lb = await Ob;
          Lb && 0 === Ub.length && Ub.push({
            file: null,
            line: 0,
            message: Lb.message,
            variants: [hb.key]
          });
          return Ub
        }(bb, Lb, ub))));
        return Yb ? null : Sb(bb, bb.Rhb(ub.flat()), Ub.offInStrict)
      } catch (ab) {
        return console.error("Couldn't validate the shader pack on WebGPU.", ab), null
      } finally {
        Lb.destroy()
      }
    }
    async function Yb(bb, ub) {
      var hb;
      if (!(0, Bb.shaderPackNeedsCheck)(bb, ub) || (0, Bb.isOtherApiVersion)(bb)) return bb;
      const Ob = await Lb(ub, (0, Bb.storedShaderPackFiles)(bb));
      if (!Ob) return bb;
      const Gb = !1 === (null === (hb = bb.validation) || void 0 === hb ? void 0 : hb.ok) && !bb.validation.fromRecheck,
        Ub = {
          ...bb,
          validation: Gb ? Ob : {
            ...Ob,
            fromRecheck: !0
          }
        };
      return await (0, Bb.replaceShaderPack)(bb, Ub, ub) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ub
    }

    function Sb(bb, ub, hb) {
      return {
        headerVersion: (0, Bb.pageShaderPackValidationVersion)(bb),
        ok: 0 === ub.length,
        errors: ub.slice(0, Ub),
        moreErrors: Math.max(0, ub.length - Ub),
        offInStrict: hb
      }
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