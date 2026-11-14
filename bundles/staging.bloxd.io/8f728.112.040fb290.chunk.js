export const id = 112;
export const ids = [112, 115, 116, 119];
export const modules = {
  5570: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc.k,
      h: () => Ic,
      k: () => Vc.q
    });
    var Vc = nc(5561);
    const Ic = [!1, !0].flatMap((cB => ["terrain", "liquid", "model"].map((Bc => ({
      strict: cB,
      program: Bc
    })))))
  },
  38502: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Oc,
      installListedShaderPack: () => qB
    });
    var Vc = nc(5523),
      Ic = nc(5561),
      rB = nc(1062),
      uc = nc(5583),
      sc = nc(5570),
      Mc = nc(5624),
      Pc = nc(5618);
    async function qB(cB) {
      const Bc = await (0, uc.loadPageShaderPackCompiler)();
      if (null === Bc) return {
        kind: "failed",
        reason: "compiler"
      };
      const nc = await Oc(cB, Bc);
      return "failed" === nc.kind ? nc : await (0, Mc.saveShaderPack)(nc.stored, Bc) ? ((0, Mc.markShaderPackChangePending)(), nc) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Oc(cB, Bc) {
      const nc = await async function(cB) {
        let {
          packId: Bc,
          sourceHash: nc
        } = cB;
        try {
          const cB = await fetch(`${rB.clientSideServerUrls.s3Url}/${(0,Vc.O)(Bc,nc)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!cB.ok) return console.error(`Failed to download shader pack ${Bc} (${cB.status})`), null;
          const Ic = await cB.json();
          return "object" !== typeof Ic || null === Ic ? (console.error(`Shader pack ${Bc}'s source isn't an object`), null) : Ic
        } catch (Ic) {
          return console.error(`Failed to download shader pack ${Bc}`, Ic), null
        }
      }(cB);
      if (null === nc) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, sc.k)(nc.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const uc = (0, Ic.r)(nc.files);
      if ("string" === typeof uc) return console.error(`A listed shader pack breaks the pack rules: ${uc}`), {
        kind: "failed",
        reason: "invalid"
      };
      const qB = await (0, Pc.h)(Bc, uc);
      if (!1 === (null === qB || void 0 === qB ? void 0 : qB.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Oc = {
        manifest: {
          apiVersion: nc.apiVersion,
          name: cB.name,
          author: cB.ownerName,
          description: cB.description || null,
          keepCircleShadows: !0 === nc.keepCircleShadows
        },
        files: uc
      };
      return {
        kind: "loaded",
        stored: (0, Mc.toStoredShaderPack)(Oc, qB, {
          packId: cB.packId,
          sourceHash: cB.sourceHash
        })
      }
    }
  },
  39158: (cB, Bc, nc) => {
    nc.d(Bc, {
      followListingUpdates: () => Tc
    });
    var Vc = nc(626),
      Ic = nc(27),
      rB = nc(1314),
      uc = nc(988),
      sc = nc(5583),
      Mc = nc(5570),
      Pc = nc(38502),
      qB = nc(5624);
    const Oc = ["apiVersion", "invalid", "errors"];
    async function Tc(cB, Bc) {
      const nc = await uc.userContextManager.getCurrentUserContext(),
        Tc = await rB.e.getShaderPackVersions(nc, [Bc.packId]),
        fc = function(cB, Bc, nc) {
          var Vc;
          if (void 0 === nc || "unlisted" === nc.status) return {
            kind: "none"
          };
          if ("banned" === nc.status) return {
            kind: "remove"
          };
          if (!(0, Mc.k)(nc.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Ic,
            name: rB,
            ownerName: uc,
            description: sc
          } = nc;
          return Ic !== Bc.sourceHash && Ic !== Bc.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Ic,
            name: rB,
            ownerName: uc,
            description: sc
          } : rB !== cB.manifest.name || uc !== cB.manifest.author || (sc || null) !== (null !== (Vc = cB.manifest.description) && void 0 !== Vc ? Vc : null) ? {
            kind: "rename",
            name: rB,
            ownerName: uc,
            description: sc
          } : {
            kind: "none"
          }
        }(cB, Bc, (0, Vc.c)(Tc, Bc.packId));
      if ("update" === fc.kind && "landingPage" !== Ic.d.get("gameState")) return !1;
      const mB = "update" === fc.kind || "rename" === fc.kind,
        ec = mB ? await (0, sc.loadPageShaderPackCompiler)() : null;
      if (mB && null === ec) return console.warn(`Didn't follow shader pack ${Bc.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const tB = await async function(cB, Bc, nc, Vc) {
        switch (nc.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...cB, manifest: {
                ...cB.manifest,
                name: nc.name,
                author: nc.ownerName,
                description: nc.description || null
              }
            };
          case "update": {
            if (null === Vc) return;
            const {
              sourceHash: Ic,
              name: rB,
              ownerName: uc,
              description: sc
            } = nc, Mc = await (0, Pc.b)({
              packId: Bc.packId,
              sourceHash: Ic,
              name: rB,
              ownerName: uc,
              description: sc
            }, Vc);
            if ("loaded" === Mc.kind && null !== Mc.stored.validation) return Mc.stored;
            const qB = "failed" === Mc.kind ? Mc.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Bc.packId}: ${qB}`), "failed" === Mc.kind && Oc.includes(Mc.reason) ? {
              ...cB,
              listing: {
                ...Bc,
                rejectedSourceHash: Ic
              }
            } : void 0
          }
        }
      }(cB, Bc, fc, ec);
      return void 0 === tB || (await (0, qB.replaceShaderPack)(cB, tB, ec) ? (null !== tB && tB.files === cB.files || (0, qB.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  5624: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      forgetShaderPackActiveHint: () => bB,
      isOtherApiVersion: () => Yc,
      isShaderPackActive: () => pc,
      isShaderPackChangePending: () => lc,
      markShaderPackChangePending: () => aB,
      pageShaderPackValidationVersion: () => Lc,
      reconcileStoredShaderPackHint: () => Uc,
      removeShaderPack: () => zB,
      replaceShaderPack: () => tB,
      saveShaderPack: () => ec,
      shaderPackNeedsCheck: () => gB,
      storedPackOutcome: () => hc,
      storedShaderPackFiles: () => Tc,
      toStoredShaderPack: () => Oc
    });
    var Vc = nc(5561),
      Ic = nc(5570),
      rB = nc(51),
      uc = nc(2585),
      sc = nc(5626),
      Mc = nc(5608);
    const Pc = "shaderPackChangePending";
    let qB = null;

    function Oc(cB, Bc, nc) {
      return {
        manifest: cB.manifest,
        files: (0, Vc.u)(cB.files),
        validation: Bc,
        ...nc && {
          listing: nc
        }
      }
    }

    function Tc(cB) {
      return Object.keys(cB.files).map((Bc => ({
        path: Bc,
        source: cB.files[Bc]
      })))
    }
    let fc = Promise.resolve();

    function mB(cB) {
      const Bc = fc.then(cB);
      return fc = Bc.catch((() => {})), Bc
    }

    function ec(cB, Bc) {
      return mB((() => Sc(cB, Bc)))
    }

    function tB(cB, Bc, nc) {
      return mB((async () => JSON.stringify(await (0, sc.e)()) === JSON.stringify(cB) && (null === Bc ? (await yB(), !0) : Sc(Bc, nc))))
    }
    async function Sc(cB, Bc) {
      const nc = await rB.d.setItem(sc.c, cB);
      return nc && Zc(cB, Bc), nc
    }
    async function yB() {
      await rB.d.removeItem(sc.c), rB.h.removeItem(uc.b)
    }

    function zB() {
      return mB(yB)
    }

    function pc(cB, Bc) {
      return "active" === hc(cB, Bc).kind
    }

    function hc(cB, Bc) {
      var nc;
      return null === cB ? {
        kind: "none",
        reason: "nothingStored"
      } : Yc(cB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.ok) || cB.validation.fromRecheck ? null === Bc ? {
        kind: "none",
        reason: "noCompiler"
      } : gB(cB, Bc) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : cB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function aB() {
      rB.i.setItem(Pc, performance.timeOrigin)
    }

    function lc() {
      return rB.i.getItem(Pc) === performance.timeOrigin
    }

    function Yc(cB) {
      return !(0, Ic.k)(cB.manifest.apiVersion)
    }

    function Lc(cB) {
      return qB ??= cB.EBc((0, Mc.shaderPackTextures)()), qB
    }

    function gB(cB, Bc) {
      var nc;
      return (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.headerVersion) !== Lc(Bc)
    }

    function Uc(cB) {
      return mB((async () => {
        Zc(await (0, sc.e)(!0), cB)
      }))
    }

    function bB() {
      return mB((async () => {
        rB.h.removeItem(uc.b)
      }))
    }

    function Zc(cB, Bc) {
      pc(cB, Bc) ? rB.h.setItem(uc.b, !0) : rB.h.removeItem(uc.b)
    }
  },
  5608: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadShaderPackTextures: () => uc,
      shaderPackTextures: () => sc
    });
    var Vc = nc(5561);
    let Ic = null,
      rB = null;

    function uc() {
      return rB ??= Promise.all([nc.e(60), nc.e(180)]).then((() => nc(38499))).then((cB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Bc,
          textureNameToIndex: nc,
          textureAnimationData: rB
        } = cB;
        return Ic ??= (0, Vc.l)(nc, rB, Bc), Ic
      })), rB
    }

    function sc() {
      if (null === Ic) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ic
    }
  },
  5618: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Mc,
      h: () => sc
    });
    var Vc = nc(5624),
      Ic = nc(5608),
      rB = nc(134);
    const uc = 100;
    async function sc(cB, Bc) {
      var nc;
      let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (nc = navigator.gpu) && void 0 !== nc ? nc : null;
      const uc = cB.Cuc(Bc, (0, Ic.shaderPackTextures)());
      if (uc.errors.length > 0) return Pc(cB, uc.errors, uc.offInStrict);
      const sc = await async function(cB) {
        if (!cB) return null;
        try {
          const Bc = await (0, rB.s)(cB);
          return Bc ? await Bc.requestDevice() : null
        } catch (Bc) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Bc), null
        }
      }(Vc);
      if (!sc) return null;
      let Mc = !1;
      sc.lost.then((() => {
        Mc = !0
      }));
      try {
        const Bc = await Promise.all(uc.validationModules.map((Bc => async function(cB, Bc, nc) {
          Bc.pushErrorScope("validation");
          const Vc = Bc.createShaderModule({
              code: nc.code
            }),
            Ic = Bc.popErrorScope(),
            {
              messages: rB
            } = await Vc.getCompilationInfo(),
            uc = rB.filter((cB => "error" === cB.type)).map((Bc => cB.mapValidationMessage(nc, Bc))),
            sc = await Ic;
          sc && 0 === uc.length && uc.push({
            file: null,
            line: 0,
            message: sc.message,
            variants: [nc.key]
          });
          return uc
        }(cB, sc, Bc))));
        return Mc ? null : Pc(cB, cB.UPc(Bc.flat()), uc.offInStrict)
      } catch (qB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", qB), null
      } finally {
        sc.destroy()
      }
    }
    async function Mc(cB, Bc) {
      var nc;
      if (!(0, Vc.shaderPackNeedsCheck)(cB, Bc) || (0, Vc.isOtherApiVersion)(cB)) return cB;
      const Ic = await sc(Bc, (0, Vc.storedShaderPackFiles)(cB));
      if (!Ic) return cB;
      const rB = !1 === (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.ok) && !cB.validation.fromRecheck,
        uc = {
          ...cB,
          validation: rB ? Ic : {
            ...Ic,
            fromRecheck: !0
          }
        };
      return await (0, Vc.replaceShaderPack)(cB, uc, Bc) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), uc
    }

    function Pc(cB, Bc, nc) {
      return {
        headerVersion: (0, Vc.pageShaderPackValidationVersion)(cB),
        ok: 0 === Bc.length,
        errors: Bc.slice(0, uc),
        moreErrors: Math.max(0, Bc.length - uc),
        offInStrict: nc
      }
    }
  },
  5523: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => uc,
      E: () => Vc,
      I: () => Tc,
      L: () => qB,
      O: () => zB,
      P: () => Oc,
      T: () => Pc,
      c: () => fc,
      d: () => ec,
      f: () => mB,
      i: () => yB,
      l: () => hc,
      p: () => Mc,
      q: () => Ic,
      t: () => pc,
      w: () => rB,
      z: () => sc
    });
    const Vc = ["forest", "desert", "water", "night", "cave"];
    const Ic = {
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
      rB = ["popular", "updated", "newest"],
      uc = 3,
      sc = 32,
      Mc = 300;

    function Pc(cB, Bc) {
      return cB.slice(0, Bc).replace(/[\uD800-\uDBFF]$/, "")
    }
    const qB = 64,
      Oc = 512,
      Tc = 18e5;
    const fc = "Bloxdhub",
      mB = "https://bloxdhub.com/shaders";

    function ec(cB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(cB)}`
    }
    const tB = "Screenshot generation failed.",
      Sc = "Its screenshots couldn't be generated:";

    function yB(cB) {
      var Bc;
      return cB === tB || null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.startsWith(Sc)) && void 0 !== Bc && Bc
    }

    function zB(cB, Bc) {
      return `shaderPacks/${cB}/${Bc}.json`
    }

    function pc(cB, Bc, nc, Vc) {
      return null === Bc.renderId ? hc(cB, Bc.baselineVersion, nc, Vc) : `${cB}/${function(cB,Bc,nc,Vc){return`shaderPacks/${cB}/${Bc}/${nc}-${Vc}.webp`}(Bc.packId,Bc.renderId,nc,Vc)}`
    }

    function hc(cB, Bc, nc, Vc) {
      return `${cB}/${function(cB,Bc,nc){return`shaderPacks/baseline/${cB}/${Bc}-${nc}.webp`}(Bc,nc,Vc)}`
    }
  },
  5561: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => rB,
      k: () => Vc,
      l: () => mB,
      p: () => qB,
      q: () => Ic,
      r: () => Mc,
      u: () => Pc,
      x: () => Oc
    });
    const Vc = 5;

    function Ic(cB) {
      return cB === Vc
    }
    const rB = 262144,
      uc = 256,
      sc = 256;

    function Mc(cB) {
      if ("object" !== typeof cB || null === cB || Array.isArray(cB)) return "The pack has no files.";
      const Bc = [];
      for (const [nc, Vc] of Object.entries(cB)) {
        if ("string" !== typeof Vc) return `${nc} isn't text.`;
        Bc.push({
          path: nc,
          source: Vc
        })
      }
      return Bc.sort(((cB, Bc) => qB(cB.path, Bc.path))),
        function(cB) {
          if (0 === cB.length) return "The pack has no .wgsl files.";
          if (cB.length > uc) return `The pack has more than ${uc} .wgsl files.`;
          const Bc = new Set;
          for (const {
              path: nc
            }
            of cB) {
            const cB = Tc(nc);
            if (null !== cB) return cB;
            if (Bc.has(nc)) return `The pack has two files at ${nc}.`;
            Bc.add(nc)
          }
          return Oc(cB) > rB ? `The pack's .wgsl files are over ${rB/1024} KB in total.` : null
        }(Bc) ?? Bc
    }

    function Pc(cB) {
      const Bc = {};
      for (const nc of cB) Bc[nc.path] = nc.source;
      return Bc
    }

    function qB(cB, Bc) {
      return cB < Bc ? -1 : cB > Bc ? 1 : 0
    }

    function Oc(cB) {
      const Bc = new TextEncoder;
      let nc = 0;
      for (const {
          source: Vc
        }
        of cB) nc += Bc.encode(Vc).byteLength;
      return nc
    }

    function Tc(cB) {
      if (!cB.toLowerCase().endsWith(".wgsl")) return `${cB} isn't a .wgsl file.`;
      if (cB.length > sc) return `A file path is over ${sc} characters.`;
      if (cB.includes("\\") || /[\u0000-\u001f]/.test(cB)) return `${cB} isn't a valid file path.`;
      return cB.split("/").some((cB => "" === cB || "." === cB || ".." === cB)) ? `${cB} isn't a valid file path.` : null
    }
    const fc = /^(.*)\[rot\[([1-4])$/;

    function mB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Vc = new Map;
      Bc.forEach(((cB, Bc) => {
        let {
          numAnimStates: nc,
          animStartIdx: Ic
        } = cB;
        for (let rB = 1; rB < nc; rB++) Vc.set(Ic + rB - 1, Bc)
      }));
      const Ic = Object.entries(cB),
        rB = new Map;
      for (const [ec, tB] of Ic) {
        const cB = fc.exec(ec);
        "1" === cB?.[2] && rB.set(cB[1], tB + 1)
      }
      const uc = cB => {
          const Bc = fc.exec(cB);
          return Bc && rB.has(Bc[1]) ? {
            root: Bc[1],
            rotation: Number(Bc[2]) - 1
          } : null
        },
        sc = new Set(Ic.map((cB => {
          let [Bc] = cB;
          return uc(Bc)?.root ?? Bc
        }))),
        Mc = (cB, nc) => {
          const Vc = cB.replace(/_?0$/, "");
          return (Bc[nc]?.numAnimStates ?? 0) > 1 && !sc.has(Vc) ? Vc : cB
        },
        Pc = new Map;
      for (const [fc, ec] of Ic) Pc.set(ec, Mc(uc(fc)?.root ?? fc, ec));
      const qB = Ic.reduce(((cB, Bc) => {
          let [, nc] = Bc;
          return Math.max(cB, nc + 1)
        }), 0),
        Oc = Array.from({
          length: qB
        }, ((cB, Bc) => ({
          id: Bc + 1,
          rotation: 0
        }))),
        Tc = new Map,
        mB = new Map;
      for (const [fc, ec] of Ic) {
        const cB = uc(fc),
          Bc = Vc.get(ec);
        if (void 0 !== Bc) {
          const nc = Pc.get(Bc);
          mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "frame"
          }), cB && !mB.has(cB.root) && mB.set(cB.root, {
            name: cB.root,
            texture: nc,
            kind: "frame"
          });
          continue
        }
        const nc = Pc.get(ec),
          Ic = cB?.root ?? fc;
        if (nc !== Ic && mB.set(Ic, {
            name: Ic,
            texture: nc,
            kind: "frame"
          }), cB) {
          const Bc = rB.get(cB.root);
          Oc[ec] = {
            id: Bc,
            rotation: cB.rotation
          }, Tc.set(nc, Bc), mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "rotation"
          })
        } else Tc.set(nc, ec + 1)
      }
      for (const fc of Tc.keys()) mB.delete(fc);
      for (const [fc, ec] of nc) {
        const cB = Tc.get(ec);
        void 0 === cB || Tc.has(fc) || (Tc.set(fc, cB), mB.delete(fc))
      }
      return {
        named: [...Tc].sort(((cB, Bc) => {
          let [nc] = cB, [Vc] = Bc;
          return nc < Vc ? -1 : nc > Vc ? 1 : 0
        })).map((cB => {
          let [Bc, nc] = cB;
          return {
            name: Bc,
            id: nc
          }
        })),
        aliases: [...mB.values()],
        layers: Oc
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);