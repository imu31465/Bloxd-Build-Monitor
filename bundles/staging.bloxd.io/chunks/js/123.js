export const id = 123;
export const ids = [123, 126, 127, 130];
export const modules = {
  6284: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU.h,
      e: () => pU,
      i: () => tU.n
    });
    var tU = gU(6265);
    const pU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((RU => ({
      strict: UU,
      program: RU
    })))))
  },
  39874: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU,
      installListedShaderPack: () => cU
    });
    var tU = gU(6222),
      pU = gU(6265),
      EU = gU(1196),
      PU = gU(6295),
      TU = gU(6284),
      qU = gU(6330),
      KU = gU(6321);
    async function cU(UU) {
      const RU = await (0, PU.loadPageShaderPackCompiler)();
      if (null === RU) return {
        kind: "failed",
        reason: "compiler"
      };
      const gU = await GU(UU, RU);
      return "failed" === gU.kind ? gU : await (0, qU.saveShaderPack)(gU.stored, RU) ? ((0, qU.markShaderPackChangePending)(), gU) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function GU(UU, RU) {
      const gU = await async function(UU) {
        let {
          packId: RU,
          sourceHash: gU
        } = UU;
        try {
          const UU = await fetch(`${EU.clientSideServerUrls.s3Url}/${(0,tU.M)(RU,gU)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!UU.ok) return console.error(`Failed to download shader pack ${RU} (${UU.status})`), null;
          const pU = await UU.json();
          return "object" !== typeof pU || null === pU ? (console.error(`Shader pack ${RU}'s source isn't an object`), null) : pU
        } catch (pU) {
          return console.error(`Failed to download shader pack ${RU}`, pU), null
        }
      }(UU);
      if (null === gU) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, TU.i)(gU.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const PU = (0, pU.r)(gU.files);
      if ("string" === typeof PU) return console.error(`A listed shader pack breaks the pack rules: ${PU}`), {
        kind: "failed",
        reason: "invalid"
      };
      const cU = await (0, KU.f)(RU, PU);
      if (!1 === (null === cU || void 0 === cU ? void 0 : cU.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const GU = {
        manifest: {
          apiVersion: gU.apiVersion,
          name: UU.name,
          author: UU.ownerName,
          description: UU.description || null,
          keepCircleShadows: !0 === gU.keepCircleShadows
        },
        files: PU
      };
      return {
        kind: "loaded",
        stored: (0, qU.toStoredShaderPack)(GU, cU, {
          packId: UU.packId,
          sourceHash: UU.sourceHash
        })
      }
    }
  },
  40679: (UU, RU, gU) => {
    gU.d(RU, {
      followListingUpdates: () => jU
    });
    var tU = gU(201),
      pU = gU(21),
      EU = gU(1461),
      PU = gU(1120),
      TU = gU(6295),
      qU = gU(6284),
      KU = gU(39874),
      cU = gU(6330);
    const GU = ["apiVersion", "invalid", "errors"];
    async function jU(UU, RU) {
      const gU = await PU.userContextManager.getCurrentUserContext(),
        jU = await EU.c.getShaderPackVersions(gU, [RU.packId]),
        uU = function(UU, RU, gU) {
          var tU;
          if (void 0 === gU || "unlisted" === gU.status) return {
            kind: "none"
          };
          if ("banned" === gU.status) return {
            kind: "remove"
          };
          if (!(0, qU.i)(gU.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: pU,
            name: EU,
            ownerName: PU,
            description: TU
          } = gU;
          return pU !== RU.sourceHash && pU !== RU.rejectedSourceHash ? {
            kind: "update",
            sourceHash: pU,
            name: EU,
            ownerName: PU,
            description: TU
          } : EU !== UU.manifest.name || PU !== UU.manifest.author || (TU || null) !== (null !== (tU = UU.manifest.description) && void 0 !== tU ? tU : null) ? {
            kind: "rename",
            name: EU,
            ownerName: PU,
            description: TU
          } : {
            kind: "none"
          }
        }(UU, RU, (0, tU.b)(jU, RU.packId));
      if ("update" === uU.kind && "landingPage" !== pU.b.get("gameState")) return !1;
      const CU = "update" === uU.kind || "rename" === uU.kind,
        hU = CU ? await (0, TU.loadPageShaderPackCompiler)() : null;
      if (CU && null === hU) return console.warn(`Didn't follow shader pack ${RU.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const QU = await async function(UU, RU, gU, tU) {
        switch (gU.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...UU, manifest: {
                ...UU.manifest,
                name: gU.name,
                author: gU.ownerName,
                description: gU.description || null
              }
            };
          case "update": {
            if (null === tU) return;
            const {
              sourceHash: pU,
              name: EU,
              ownerName: PU,
              description: TU
            } = gU, qU = await (0, KU.d)({
              packId: RU.packId,
              sourceHash: pU,
              name: EU,
              ownerName: PU,
              description: TU
            }, tU);
            if ("loaded" === qU.kind && null !== qU.stored.validation) return qU.stored;
            const cU = "failed" === qU.kind ? qU.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${RU.packId}: ${cU}`), "failed" === qU.kind && GU.includes(qU.reason) ? {
              ...UU,
              listing: {
                ...RU,
                rejectedSourceHash: pU
              }
            } : void 0
          }
        }
      }(UU, RU, uU, hU);
      return void 0 === QU || (await (0, cU.replaceShaderPack)(UU, QU, hU) ? (null !== QU && QU.files === UU.files || (0, cU.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6330: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      forgetShaderPackActiveHint: () => ZU,
      isOtherApiVersion: () => wU,
      isShaderPackActive: () => xU,
      isShaderPackChangePending: () => JU,
      markShaderPackChangePending: () => IU,
      pageShaderPackValidationVersion: () => nU,
      reconcileStoredShaderPackHint: () => oU,
      removeShaderPack: () => fU,
      replaceShaderPack: () => QU,
      saveShaderPack: () => hU,
      shaderPackNeedsCheck: () => bU,
      storedPackOutcome: () => mU,
      storedShaderPackFiles: () => jU,
      toStoredShaderPack: () => GU
    });
    var tU = gU(6265),
      pU = gU(6284),
      EU = gU(34),
      PU = gU(3151),
      TU = gU(6339),
      qU = gU(6306);
    const KU = "shaderPackChangePending";
    let cU = null;

    function GU(UU, RU, gU) {
      return {
        manifest: UU.manifest,
        files: (0, tU.t)(UU.files),
        validation: RU,
        ...gU && {
          listing: gU
        }
      }
    }

    function jU(UU) {
      return Object.keys(UU.files).map((RU => ({
        path: RU,
        source: UU.files[RU]
      })))
    }
    let uU = Promise.resolve();

    function CU(UU) {
      const RU = uU.then(UU);
      return uU = RU.catch((() => {})), RU
    }

    function hU(UU, RU) {
      return CU((() => eU(UU, RU)))
    }

    function QU(UU, RU, gU) {
      return CU((async () => JSON.stringify(await (0, TU.e)()) === JSON.stringify(UU) && (null === RU ? (await WU(), !0) : eU(RU, gU))))
    }
    async function eU(UU, RU) {
      const gU = await EU.g.setItem(TU.b, UU);
      return gU && aU(UU, RU), gU
    }
    async function WU() {
      await EU.g.removeItem(TU.b), EU.k.removeItem(PU.b)
    }

    function fU() {
      return CU(WU)
    }

    function xU(UU, RU) {
      return "active" === mU(UU, RU).kind
    }

    function mU(UU, RU) {
      var gU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : wU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.ok) || UU.validation.fromRecheck ? null === RU ? {
        kind: "none",
        reason: "noCompiler"
      } : bU(UU, RU) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : UU.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function IU() {
      EU.l.setItem(KU, performance.timeOrigin)
    }

    function JU() {
      return EU.l.getItem(KU) === performance.timeOrigin
    }

    function wU(UU) {
      return !(0, pU.i)(UU.manifest.apiVersion)
    }

    function nU(UU) {
      return cU ??= UU.xZ((0, qU.shaderPackTextures)()), cU
    }

    function bU(UU, RU) {
      var gU;
      return (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.headerVersion) !== nU(RU)
    }

    function oU(UU) {
      return CU((async () => {
        aU(await (0, TU.e)(!0), UU)
      }))
    }

    function ZU() {
      return CU((async () => {
        EU.k.removeItem(PU.b)
      }))
    }

    function aU(UU, RU) {
      xU(UU, RU) ? EU.k.setItem(PU.b, !0) : EU.k.removeItem(PU.b)
    }
  },
  6306: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      loadShaderPackTextures: () => PU,
      shaderPackTextures: () => TU
    });
    var tU = gU(6265);
    let pU = null,
      EU = null;

    function PU() {
      return EU ??= Promise.all([gU.e(69), gU.e(198)]).then((() => gU(39871))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: RU,
          textureNameToIndex: gU,
          textureAnimationData: EU
        } = UU;
        return pU ??= (0, tU.i)(gU, EU, RU), pU
      })), EU
    }

    function TU() {
      if (null === pU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return pU
    }
  },
  6321: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      f: () => TU
    });
    var tU = gU(6330),
      pU = gU(6306),
      EU = gU(122);
    const PU = 100;
    async function TU(UU, RU) {
      var gU;
      let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gU = navigator.gpu) && void 0 !== gU ? gU : null;
      const PU = UU.i_(RU, (0, pU.shaderPackTextures)());
      if (PU.errors.length > 0) return KU(UU, PU.errors, PU.offInStrict);
      const TU = await async function(UU) {
        if (!UU) return null;
        try {
          const RU = await (0, EU.v)(UU);
          return RU ? await RU.requestDevice() : null
        } catch (RU) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", RU), null
        }
      }(tU);
      if (!TU) return null;
      let qU = !1;
      TU.lost.then((() => {
        qU = !0
      }));
      try {
        const RU = await Promise.all(PU.validationModules.map((RU => async function(UU, RU, gU) {
          RU.pushErrorScope("validation");
          const tU = RU.createShaderModule({
              code: gU.code
            }),
            pU = RU.popErrorScope(),
            {
              messages: EU
            } = await tU.getCompilationInfo(),
            PU = EU.filter((UU => "error" === UU.type)).map((RU => UU.mapValidationMessage(gU, RU))),
            TU = await pU;
          TU && 0 === PU.length && PU.push({
            file: null,
            line: 0,
            message: TU.message,
            variants: [gU.key]
          });
          return PU
        }(UU, TU, RU))));
        return qU ? null : KU(UU, UU.mgU(RU.flat()), PU.offInStrict)
      } catch (cU) {
        return console.error("Couldn't validate the shader pack on WebGPU.", cU), null
      } finally {
        TU.destroy()
      }
    }
    async function qU(UU, RU) {
      var gU;
      if (!(0, tU.shaderPackNeedsCheck)(UU, RU) || (0, tU.isOtherApiVersion)(UU)) return UU;
      const pU = await TU(RU, (0, tU.storedShaderPackFiles)(UU));
      if (!pU) return UU;
      const EU = !1 === (null === (gU = UU.validation) || void 0 === gU ? void 0 : gU.ok) && !UU.validation.fromRecheck,
        PU = {
          ...UU,
          validation: EU ? pU : {
            ...pU,
            fromRecheck: !0
          }
        };
      return await (0, tU.replaceShaderPack)(UU, PU, RU) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PU
    }

    function KU(UU, RU, gU) {
      return {
        headerVersion: (0, tU.pageShaderPackValidationVersion)(UU),
        ok: 0 === RU.length,
        errors: RU.slice(0, PU),
        moreErrors: Math.max(0, RU.length - PU),
        offInStrict: gU
      }
    }
  },
  6222: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => PU,
      E: () => tU,
      I: () => jU,
      L: () => cU,
      M: () => fU,
      O: () => GU,
      P: () => KU,
      e: () => uU,
      h: () => hU,
      k: () => CU,
      m: () => WU,
      q: () => mU,
      r: () => qU,
      s: () => pU,
      v: () => xU,
      x: () => EU,
      z: () => TU
    });
    const tU = ["forest", "desert", "water", "night", "cave"];
    const pU = {
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
      EU = ["popular", "updated", "newest"],
      PU = 3,
      TU = 32,
      qU = 300;

    function KU(UU, RU) {
      return UU.slice(0, RU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const cU = 64,
      GU = 512,
      jU = 18e5;
    const uU = "Bloxdhub",
      CU = "https://bloxdhub.com/shaders";

    function hU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const QU = "Screenshot generation failed.",
      eU = "Its screenshots couldn't be generated:";

    function WU(UU) {
      var RU;
      return UU === QU || null !== (RU = null === UU || void 0 === UU ? void 0 : UU.startsWith(eU)) && void 0 !== RU && RU
    }

    function fU(UU, RU) {
      return `shaderPacks/${UU}/${RU}.json`
    }

    function xU(UU, RU, gU, tU) {
      return null === RU.renderId ? mU(UU, RU.baselineVersion, gU, tU) : `${UU}/${function(UU,RU,gU,tU){return`shaderPacks/${UU}/${RU}/${gU}-${tU}.webp`}(RU.packId,RU.renderId,gU,tU)}`
    }

    function mU(UU, RU, gU, tU) {
      return `${UU}/${function(UU,RU,gU){return`shaderPacks/baseline/${UU}/${RU}-${gU}.webp`}(RU,gU,tU)}`
    }
  },
  6265: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      e: () => EU,
      h: () => tU,
      i: () => CU,
      k: () => cU,
      n: () => pU,
      r: () => qU,
      t: () => KU,
      x: () => GU
    });
    const tU = 5;

    function pU(UU) {
      return UU === tU
    }
    const EU = 262144,
      PU = 256,
      TU = 256;

    function qU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const RU = [];
      for (const [gU, tU] of Object.entries(UU)) {
        if ("string" !== typeof tU) return `${gU} isn't text.`;
        RU.push({
          path: gU,
          source: tU
        })
      }
      return RU.sort(((UU, RU) => cU(UU.path, RU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > PU) return `The pack has more than ${PU} .wgsl files.`;
          const RU = new Set;
          for (const {
              path: gU
            }
            of UU) {
            const UU = jU(gU);
            if (null !== UU) return UU;
            if (RU.has(gU)) return `The pack has two files at ${gU}.`;
            RU.add(gU)
          }
          return GU(UU) > EU ? `The pack's .wgsl files are over ${EU/1024} KB in total.` : null
        }(RU) ?? RU
    }

    function KU(UU) {
      const RU = {};
      for (const gU of UU) RU[gU.path] = gU.source;
      return RU
    }

    function cU(UU, RU) {
      return UU < RU ? -1 : UU > RU ? 1 : 0
    }

    function GU(UU) {
      const RU = new TextEncoder;
      let gU = 0;
      for (const {
          source: tU
        }
        of UU) gU += RU.encode(tU).byteLength;
      return gU
    }

    function jU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > TU) return `A file path is over ${TU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const uU = /^(.*)\[rot\[([1-4])$/;

    function CU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tU = new Map;
      RU.forEach(((UU, RU) => {
        let {
          numAnimStates: gU,
          animStartIdx: pU
        } = UU;
        for (let EU = 1; EU < gU; EU++) tU.set(pU + EU - 1, RU)
      }));
      const pU = Object.entries(UU),
        EU = new Map;
      for (const [hU, QU] of pU) {
        const UU = uU.exec(hU);
        "1" === UU?.[2] && EU.set(UU[1], QU + 1)
      }
      const PU = UU => {
          const RU = uU.exec(UU);
          return RU && EU.has(RU[1]) ? {
            root: RU[1],
            rotation: Number(RU[2]) - 1
          } : null
        },
        TU = new Set(pU.map((UU => {
          let [RU] = UU;
          return PU(RU)?.root ?? RU
        }))),
        qU = (UU, gU) => {
          const tU = UU.replace(/_?0$/, "");
          return (RU[gU]?.numAnimStates ?? 0) > 1 && !TU.has(tU) ? tU : UU
        },
        KU = new Map;
      for (const [uU, hU] of pU) KU.set(hU, qU(PU(uU)?.root ?? uU, hU));
      const cU = pU.reduce(((UU, RU) => {
          let [, gU] = RU;
          return Math.max(UU, gU + 1)
        }), 0),
        GU = Array.from({
          length: cU
        }, ((UU, RU) => ({
          id: RU + 1,
          rotation: 0
        }))),
        jU = new Map,
        CU = new Map;
      for (const [uU, hU] of pU) {
        const UU = PU(uU),
          RU = tU.get(hU);
        if (void 0 !== RU) {
          const gU = KU.get(RU);
          CU.set(uU, {
            name: uU,
            texture: gU,
            kind: "frame"
          }), UU && !CU.has(UU.root) && CU.set(UU.root, {
            name: UU.root,
            texture: gU,
            kind: "frame"
          });
          continue
        }
        const gU = KU.get(hU),
          pU = UU?.root ?? uU;
        if (gU !== pU && CU.set(pU, {
            name: pU,
            texture: gU,
            kind: "frame"
          }), UU) {
          const RU = EU.get(UU.root);
          GU[hU] = {
            id: RU,
            rotation: UU.rotation
          }, jU.set(gU, RU), CU.set(uU, {
            name: uU,
            texture: gU,
            kind: "rotation"
          })
        } else jU.set(gU, hU + 1)
      }
      for (const uU of jU.keys()) CU.delete(uU);
      for (const [uU, hU] of gU) {
        const UU = jU.get(hU);
        void 0 === UU || jU.has(uU) || (jU.set(uU, UU), CU.delete(uU))
      }
      return {
        named: [...jU].sort(((UU, RU) => {
          let [gU] = UU, [tU] = RU;
          return gU < tU ? -1 : gU > tU ? 1 : 0
        })).map((UU => {
          let [RU, gU] = UU;
          return {
            name: RU,
            id: gU
          }
        })),
        aliases: [...CU.values()],
        layers: GU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);