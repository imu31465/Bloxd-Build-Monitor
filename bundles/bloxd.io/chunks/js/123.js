export const id = 123;
export const ids = [123, 126, 127, 130];
export const modules = {
  6233: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab.g,
      f: () => Mb,
      i: () => Ab.q
    });
    var Ab = Ub(6212);
    const Mb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((ab => ({
      strict: bb,
      program: ab
    })))))
  },
  39622: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb,
      installListedShaderPack: () => vb
    });
    var Ab = Ub(6167),
      Mb = Ub(6212),
      Tb = Ub(1142),
      Eb = Ub(6244),
      Yb = Ub(6233),
      Bb = Ub(6285),
      eb = Ub(6281);
    async function vb(bb) {
      const ab = await (0, Eb.loadPageShaderPackCompiler)();
      if (null === ab) return {
        kind: "failed",
        reason: "compiler"
      };
      const Ub = await Lb(bb, ab);
      return "failed" === Ub.kind ? Ub : await (0, Bb.saveShaderPack)(Ub.stored, ab) ? ((0, Bb.markShaderPackChangePending)(), Ub) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Lb(bb, ab) {
      const Ub = await async function(bb) {
        let {
          packId: ab,
          sourceHash: Ub
        } = bb;
        try {
          const bb = await fetch(`${Tb.clientSideServerUrls.s3Url}/${(0,Ab.P)(ab,Ub)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!bb.ok) return console.error(`Failed to download shader pack ${ab} (${bb.status})`), null;
          const Mb = await bb.json();
          return "object" !== typeof Mb || null === Mb ? (console.error(`Shader pack ${ab}'s source isn't an object`), null) : Mb
        } catch (Mb) {
          return console.error(`Failed to download shader pack ${ab}`, Mb), null
        }
      }(bb);
      if (null === Ub) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Yb.i)(Ub.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Eb = (0, Mb.u)(Ub.files);
      if ("string" === typeof Eb) return console.error(`A listed shader pack breaks the pack rules: ${Eb}`), {
        kind: "failed",
        reason: "invalid"
      };
      const vb = await (0, eb.d)(ab, Eb);
      if (!1 === (null === vb || void 0 === vb ? void 0 : vb.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Lb = {
        manifest: {
          apiVersion: Ub.apiVersion,
          name: bb.name,
          author: bb.ownerName,
          description: bb.description || null,
          keepCircleShadows: !0 === Ub.keepCircleShadows
        },
        files: Eb
      };
      return {
        kind: "loaded",
        stored: (0, Bb.toStoredShaderPack)(Lb, vb, {
          packId: bb.packId,
          sourceHash: bb.sourceHash
        })
      }
    }
  },
  40400: (bb, ab, Ub) => {
    Ub.d(ab, {
      followListingUpdates: () => Pb
    });
    var Ab = Ub(212),
      Mb = Ub(19),
      Tb = Ub(1413),
      Eb = Ub(1065),
      Yb = Ub(6244),
      Bb = Ub(6233),
      eb = Ub(39622),
      vb = Ub(6285);
    const Lb = ["apiVersion", "invalid", "errors"];
    async function Pb(bb, ab) {
      const Ub = await Eb.userContextManager.getCurrentUserContext(),
        Pb = await Tb.b.getShaderPackVersions(Ub, [ab.packId]),
        Xb = function(bb, ab, Ub) {
          var Ab;
          if (void 0 === Ub || "unlisted" === Ub.status) return {
            kind: "none"
          };
          if ("banned" === Ub.status) return {
            kind: "remove"
          };
          if (!(0, Bb.i)(Ub.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Mb,
            name: Tb,
            ownerName: Eb,
            description: Yb
          } = Ub;
          return Mb !== ab.sourceHash && Mb !== ab.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Mb,
            name: Tb,
            ownerName: Eb,
            description: Yb
          } : Tb !== bb.manifest.name || Eb !== bb.manifest.author || (Yb || null) !== (null !== (Ab = bb.manifest.description) && void 0 !== Ab ? Ab : null) ? {
            kind: "rename",
            name: Tb,
            ownerName: Eb,
            description: Yb
          } : {
            kind: "none"
          }
        }(bb, ab, (0, Ab.c)(Pb, ab.packId));
      if ("update" === Xb.kind && "landingPage" !== Mb.c.get("gameState")) return !1;
      const jb = "update" === Xb.kind || "rename" === Xb.kind,
        Rb = jb ? await (0, Yb.loadPageShaderPackCompiler)() : null;
      if (jb && null === Rb) return console.warn(`Didn't follow shader pack ${ab.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const kb = await async function(bb, ab, Ub, Ab) {
        switch (Ub.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...bb, manifest: {
                ...bb.manifest,
                name: Ub.name,
                author: Ub.ownerName,
                description: Ub.description || null
              }
            };
          case "update": {
            if (null === Ab) return;
            const {
              sourceHash: Mb,
              name: Tb,
              ownerName: Eb,
              description: Yb
            } = Ub, Bb = await (0, eb.c)({
              packId: ab.packId,
              sourceHash: Mb,
              name: Tb,
              ownerName: Eb,
              description: Yb
            }, Ab);
            if ("loaded" === Bb.kind && null !== Bb.stored.validation) return Bb.stored;
            const vb = "failed" === Bb.kind ? Bb.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${ab.packId}: ${vb}`), "failed" === Bb.kind && Lb.includes(Bb.reason) ? {
              ...bb,
              listing: {
                ...ab,
                rejectedSourceHash: Mb
              }
            } : void 0
          }
        }
      }(bb, ab, Xb, Rb);
      return void 0 === kb || (await (0, vb.replaceShaderPack)(bb, kb, Rb) ? (null !== kb && kb.files === bb.files || (0, vb.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6285: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      forgetShaderPackActiveHint: () => Hb,
      isOtherApiVersion: () => mb,
      isShaderPackActive: () => zb,
      isShaderPackChangePending: () => fb,
      markShaderPackChangePending: () => ib,
      pageShaderPackValidationVersion: () => pb,
      reconcileStoredShaderPackHint: () => Wb,
      removeShaderPack: () => Db,
      replaceShaderPack: () => kb,
      saveShaderPack: () => Rb,
      shaderPackNeedsCheck: () => Nb,
      storedPackOutcome: () => xb,
      storedShaderPackFiles: () => Pb,
      toStoredShaderPack: () => Lb
    });
    var Ab = Ub(6212),
      Mb = Ub(6233),
      Tb = Ub(31),
      Eb = Ub(3132),
      Yb = Ub(6294),
      Bb = Ub(6262);
    const eb = "shaderPackChangePending";
    let vb = null;

    function Lb(bb, ab, Ub) {
      return {
        manifest: bb.manifest,
        files: (0, Ab.w)(bb.files),
        validation: ab,
        ...Ub && {
          listing: Ub
        }
      }
    }

    function Pb(bb) {
      return Object.keys(bb.files).map((ab => ({
        path: ab,
        source: bb.files[ab]
      })))
    }
    let Xb = Promise.resolve();

    function jb(bb) {
      const ab = Xb.then(bb);
      return Xb = ab.catch((() => {})), ab
    }

    function Rb(bb, ab) {
      return jb((() => yb(bb, ab)))
    }

    function kb(bb, ab, Ub) {
      return jb((async () => JSON.stringify(await (0, Yb.f)()) === JSON.stringify(bb) && (null === ab ? (await Zb(), !0) : yb(ab, Ub))))
    }
    async function yb(bb, ab) {
      const Ub = await Tb.c.setItem(Yb.b, bb);
      return Ub && Ib(bb, ab), Ub
    }
    async function Zb() {
      await Tb.c.removeItem(Yb.b), Tb.f.removeItem(Eb.d)
    }

    function Db() {
      return jb(Zb)
    }

    function zb(bb, ab) {
      return "active" === xb(bb, ab).kind
    }

    function xb(bb, ab) {
      var Ub;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : mb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.ok) || bb.validation.fromRecheck ? null === ab ? {
        kind: "none",
        reason: "noCompiler"
      } : Nb(bb, ab) ? {
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

    function ib() {
      Tb.j.setItem(eb, performance.timeOrigin)
    }

    function fb() {
      return Tb.j.getItem(eb) === performance.timeOrigin
    }

    function mb(bb) {
      return !(0, Mb.i)(bb.manifest.apiVersion)
    }

    function pb(bb) {
      return vb ??= bb.mN((0, Bb.shaderPackTextures)()), vb
    }

    function Nb(bb, ab) {
      var Ub;
      return (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.headerVersion) !== pb(ab)
    }

    function Wb(bb) {
      return jb((async () => {
        Ib(await (0, Yb.f)(!0), bb)
      }))
    }

    function Hb() {
      return jb((async () => {
        Tb.f.removeItem(Eb.d)
      }))
    }

    function Ib(bb, ab) {
      zb(bb, ab) ? Tb.f.setItem(Eb.d, !0) : Tb.f.removeItem(Eb.d)
    }
  },
  6262: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      loadShaderPackTextures: () => Eb,
      shaderPackTextures: () => Yb
    });
    var Ab = Ub(6212);
    let Mb = null,
      Tb = null;

    function Eb() {
      return Tb ??= Promise.all([Ub.e(69), Ub.e(198)]).then((() => Ub(39620))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ab,
          textureNameToIndex: Ub,
          textureAnimationData: Tb
        } = bb;
        return Mb ??= (0, Ab.i)(Ub, Tb, ab), Mb
      })), Tb
    }

    function Yb() {
      if (null === Mb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Mb
    }
  },
  6281: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb,
      d: () => Yb
    });
    var Ab = Ub(6285),
      Mb = Ub(6262),
      Tb = Ub(119);
    const Eb = 100;
    async function Yb(bb, ab) {
      var Ub;
      let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Ub = navigator.gpu) && void 0 !== Ub ? Ub : null;
      const Eb = bb.i6(ab, (0, Mb.shaderPackTextures)());
      if (Eb.errors.length > 0) return eb(bb, Eb.errors, Eb.offInStrict);
      const Yb = await async function(bb) {
        if (!bb) return null;
        try {
          const ab = await (0, Tb.y)(bb);
          return ab ? await ab.requestDevice() : null
        } catch (ab) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ab), null
        }
      }(Ab);
      if (!Yb) return null;
      let Bb = !1;
      Yb.lost.then((() => {
        Bb = !0
      }));
      try {
        const ab = await Promise.all(Eb.validationModules.map((ab => async function(bb, ab, Ub) {
          ab.pushErrorScope("validation");
          const Ab = ab.createShaderModule({
              code: Ub.code
            }),
            Mb = ab.popErrorScope(),
            {
              messages: Tb
            } = await Ab.getCompilationInfo(),
            Eb = Tb.filter((bb => "error" === bb.type)).map((ab => bb.mapValidationMessage(Ub, ab))),
            Yb = await Mb;
          Yb && 0 === Eb.length && Eb.push({
            file: null,
            line: 0,
            message: Yb.message,
            variants: [Ub.key]
          });
          return Eb
        }(bb, Yb, ab))));
        return Bb ? null : eb(bb, bb.xUb(ab.flat()), Eb.offInStrict)
      } catch (vb) {
        return console.error("Couldn't validate the shader pack on WebGPU.", vb), null
      } finally {
        Yb.destroy()
      }
    }
    async function Bb(bb, ab) {
      var Ub;
      if (!(0, Ab.shaderPackNeedsCheck)(bb, ab) || (0, Ab.isOtherApiVersion)(bb)) return bb;
      const Mb = await Yb(ab, (0, Ab.storedShaderPackFiles)(bb));
      if (!Mb) return bb;
      const Tb = !1 === (null === (Ub = bb.validation) || void 0 === Ub ? void 0 : Ub.ok) && !bb.validation.fromRecheck,
        Eb = {
          ...bb,
          validation: Tb ? Mb : {
            ...Mb,
            fromRecheck: !0
          }
        };
      return await (0, Ab.replaceShaderPack)(bb, Eb, ab) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Eb
    }

    function eb(bb, ab, Ub) {
      return {
        headerVersion: (0, Ab.pageShaderPackValidationVersion)(bb),
        ok: 0 === ab.length,
        errors: ab.slice(0, Eb),
        moreErrors: Math.max(0, ab.length - Eb),
        offInStrict: Ub
      }
    }
  },
  6167: (bb, ab, Ub) => {
    Ub.d(ab, {
      C: () => Yb,
      E: () => Eb,
      G: () => Ab,
      I: () => Pb,
      M: () => vb,
      P: () => Db,
      R: () => Lb,
      T: () => eb,
      e: () => Xb,
      f: () => Rb,
      j: () => jb,
      l: () => Zb,
      m: () => xb,
      o: () => Bb,
      s: () => Mb,
      w: () => zb,
      z: () => Tb
    });
    const Ab = ["forest", "desert", "water", "night", "cave"];
    const Mb = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      Tb = ["popular", "updated", "newest"],
      Eb = 3,
      Yb = 32,
      Bb = 300;

    function eb(bb, ab) {
      return bb.slice(0, ab).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vb = 64,
      Lb = 512,
      Pb = 18e5;
    const Xb = "Bloxdhub",
      jb = "https://bloxdhub.com/shaders";

    function Rb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const kb = "Screenshot generation failed.",
      yb = "Its screenshots couldn't be generated:";

    function Zb(bb) {
      var ab;
      return bb === kb || null !== (ab = null === bb || void 0 === bb ? void 0 : bb.startsWith(yb)) && void 0 !== ab && ab
    }

    function Db(bb, ab) {
      return `shaderPacks/${bb}/${ab}.json`
    }

    function zb(bb, ab, Ub, Ab) {
      return null === ab.renderId ? xb(bb, ab.baselineVersion, Ub, Ab) : `${bb}/${function(bb,ab,Ub,Ab){return`shaderPacks/${bb}/${ab}/${Ub}-${Ab}.webp`}(ab.packId,ab.renderId,Ub,Ab)}`
    }

    function xb(bb, ab, Ub, Ab) {
      return `${bb}/${function(bb,ab,Ub){return`shaderPacks/baseline/${bb}/${ab}-${Ub}.webp`}(ab,Ub,Ab)}`
    }
  },
  6212: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      f: () => Tb,
      g: () => Ab,
      i: () => jb,
      m: () => vb,
      q: () => Mb,
      u: () => Bb,
      w: () => eb,
      y: () => Lb
    });
    const Ab = 5;

    function Mb(bb) {
      return bb === Ab
    }
    const Tb = 262144,
      Eb = 256,
      Yb = 256;

    function Bb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const ab = [];
      for (const [Ub, Ab] of Object.entries(bb)) {
        if ("string" !== typeof Ab) return `${Ub} isn't text.`;
        ab.push({
          path: Ub,
          source: Ab
        })
      }
      return ab.sort(((bb, ab) => vb(bb.path, ab.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > Eb) return `The pack has more than ${Eb} .wgsl files.`;
          const ab = new Set;
          for (const {
              path: Ub
            }
            of bb) {
            const bb = Pb(Ub);
            if (null !== bb) return bb;
            if (ab.has(Ub)) return `The pack has two files at ${Ub}.`;
            ab.add(Ub)
          }
          return Lb(bb) > Tb ? `The pack's .wgsl files are over ${Tb/1024} KB in total.` : null
        }(ab) ?? ab
    }

    function eb(bb) {
      const ab = {};
      for (const Ub of bb) ab[Ub.path] = Ub.source;
      return ab
    }

    function vb(bb, ab) {
      return bb < ab ? -1 : bb > ab ? 1 : 0
    }

    function Lb(bb) {
      const ab = new TextEncoder;
      let Ub = 0;
      for (const {
          source: Ab
        }
        of bb) Ub += ab.encode(Ab).byteLength;
      return Ub
    }

    function Pb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > Yb) return `A file path is over ${Yb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Xb = /^(.*)\[rot\[([1-4])$/;

    function jb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ab = new Map;
      ab.forEach(((bb, ab) => {
        let {
          numAnimStates: Ub,
          animStartIdx: Mb
        } = bb;
        for (let Tb = 1; Tb < Ub; Tb++) Ab.set(Mb + Tb - 1, ab)
      }));
      const Mb = Object.entries(bb),
        Tb = new Map;
      for (const [Rb, kb] of Mb) {
        const bb = Xb.exec(Rb);
        "1" === bb?.[2] && Tb.set(bb[1], kb + 1)
      }
      const Eb = bb => {
          const ab = Xb.exec(bb);
          return ab && Tb.has(ab[1]) ? {
            root: ab[1],
            rotation: Number(ab[2]) - 1
          } : null
        },
        Yb = new Set(Mb.map((bb => {
          let [ab] = bb;
          return Eb(ab)?.root ?? ab
        }))),
        Bb = (bb, Ub) => {
          const Ab = bb.replace(/_?0$/, "");
          return (ab[Ub]?.numAnimStates ?? 0) > 1 && !Yb.has(Ab) ? Ab : bb
        },
        eb = new Map;
      for (const [Xb, Rb] of Mb) eb.set(Rb, Bb(Eb(Xb)?.root ?? Xb, Rb));
      const vb = Mb.reduce(((bb, ab) => {
          let [, Ub] = ab;
          return Math.max(bb, Ub + 1)
        }), 0),
        Lb = Array.from({
          length: vb
        }, ((bb, ab) => ({
          id: ab + 1,
          rotation: 0
        }))),
        Pb = new Map,
        jb = new Map;
      for (const [Xb, Rb] of Mb) {
        const bb = Eb(Xb),
          ab = Ab.get(Rb);
        if (void 0 !== ab) {
          const Ub = eb.get(ab);
          jb.set(Xb, {
            name: Xb,
            texture: Ub,
            kind: "frame"
          }), bb && !jb.has(bb.root) && jb.set(bb.root, {
            name: bb.root,
            texture: Ub,
            kind: "frame"
          });
          continue
        }
        const Ub = eb.get(Rb),
          Mb = bb?.root ?? Xb;
        if (Ub !== Mb && jb.set(Mb, {
            name: Mb,
            texture: Ub,
            kind: "frame"
          }), bb) {
          const ab = Tb.get(bb.root);
          Lb[Rb] = {
            id: ab,
            rotation: bb.rotation
          }, Pb.set(Ub, ab), jb.set(Xb, {
            name: Xb,
            texture: Ub,
            kind: "rotation"
          })
        } else Pb.set(Ub, Rb + 1)
      }
      for (const Xb of Pb.keys()) jb.delete(Xb);
      for (const [Xb, Rb] of Ub) {
        const bb = Pb.get(Rb);
        void 0 === bb || Pb.has(Xb) || (Pb.set(Xb, bb), jb.delete(Xb))
      }
      return {
        named: [...Pb].sort(((bb, ab) => {
          let [Ub] = bb, [Ab] = ab;
          return Ub < Ab ? -1 : Ub > Ab ? 1 : 0
        })).map((bb => {
          let [ab, Ub] = bb;
          return {
            name: ab,
            id: Ub
          }
        })),
        aliases: [...jb.values()],
        layers: Lb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);