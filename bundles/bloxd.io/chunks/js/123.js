export const id = 123;
export const ids = [123, 126, 127, 130];
export const modules = {
  6597: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.e,
      d: () => MT,
      f: () => lT.l
    });
    var lT = cT(6581);
    const MT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((kT => ({
      strict: TT,
      program: kT
    })))))
  },
  40126: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT,
      installListedShaderPack: () => IT
    });
    var lT = cT(6550),
      MT = cT(6581),
      KT = cT(1202),
      OT = cT(6607),
      yT = cT(6597),
      fT = cT(6641),
      xT = cT(6636);
    async function IT(TT) {
      const kT = await (0, OT.loadPageShaderPackCompiler)();
      if (null === kT) return {
        kind: "failed",
        reason: "compiler"
      };
      const cT = await AT(TT, kT);
      return "failed" === cT.kind ? cT : await (0, fT.saveShaderPack)(cT.stored, kT) ? ((0, fT.markShaderPackChangePending)(), cT) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function AT(TT, kT) {
      const cT = await async function(TT) {
        let {
          packId: kT,
          sourceHash: cT
        } = TT;
        try {
          const TT = await fetch(`${KT.clientSideServerUrls.s3Url}/${(0,lT.D)(kT,cT)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!TT.ok) return console.error(`Failed to download shader pack ${kT} (${TT.status})`), null;
          const MT = await TT.json();
          return "object" !== typeof MT || null === MT ? (console.error(`Shader pack ${kT}'s source isn't an object`), null) : MT
        } catch (MT) {
          return console.error(`Failed to download shader pack ${kT}`, MT), null
        }
      }(TT);
      if (null === cT) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, yT.f)(cT.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const OT = (0, MT.p)(cT.files);
      if ("string" === typeof OT) return console.error(`A listed shader pack breaks the pack rules: ${OT}`), {
        kind: "failed",
        reason: "invalid"
      };
      const IT = await (0, xT.h)(kT, OT);
      if (!1 === (null === IT || void 0 === IT ? void 0 : IT.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const AT = {
        manifest: {
          apiVersion: cT.apiVersion,
          name: TT.name,
          author: TT.ownerName,
          description: TT.description || null,
          keepCircleShadows: !0 === cT.keepCircleShadows
        },
        files: OT
      };
      return {
        kind: "loaded",
        stored: (0, fT.toStoredShaderPack)(AT, IT, {
          packId: TT.packId,
          sourceHash: TT.sourceHash
        })
      }
    }
  },
  40926: (TT, kT, cT) => {
    cT.d(kT, {
      followListingUpdates: () => CT
    });
    var lT = cT(229),
      MT = cT(31),
      KT = cT(1518),
      OT = cT(1136),
      yT = cT(6607),
      fT = cT(6597),
      xT = cT(40126),
      IT = cT(6641);
    const AT = ["apiVersion", "invalid", "errors"];
    async function CT(TT, kT) {
      const cT = await OT.userContextManager.getCurrentUserContext(),
        CT = await KT.d.getShaderPackVersions(cT, [kT.packId]),
        jT = function(TT, kT, cT) {
          var lT;
          if (void 0 === cT || "unlisted" === cT.status) return {
            kind: "none"
          };
          if ("banned" === cT.status) return {
            kind: "remove"
          };
          if (!(0, fT.f)(cT.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: MT,
            name: KT,
            ownerName: OT,
            description: yT
          } = cT;
          return MT !== kT.sourceHash && MT !== kT.rejectedSourceHash ? {
            kind: "update",
            sourceHash: MT,
            name: KT,
            ownerName: OT,
            description: yT
          } : KT !== TT.manifest.name || OT !== TT.manifest.author || (yT || null) !== (null !== (lT = TT.manifest.description) && void 0 !== lT ? lT : null) ? {
            kind: "rename",
            name: KT,
            ownerName: OT,
            description: yT
          } : {
            kind: "none"
          }
        }(TT, kT, (0, lT.d)(CT, kT.packId));
      if ("update" === jT.kind && "landingPage" !== MT.e.get("gameState")) return !1;
      const vT = "update" === jT.kind || "rename" === jT.kind,
        tT = vT ? await (0, yT.loadPageShaderPackCompiler)() : null;
      if (vT && null === tT) return console.warn(`Didn't follow shader pack ${kT.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const hT = await async function(TT, kT, cT, lT) {
        switch (cT.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...TT, manifest: {
                ...TT.manifest,
                name: cT.name,
                author: cT.ownerName,
                description: cT.description || null
              }
            };
          case "update": {
            if (null === lT) return;
            const {
              sourceHash: MT,
              name: KT,
              ownerName: OT,
              description: yT
            } = cT, fT = await (0, xT.b)({
              packId: kT.packId,
              sourceHash: MT,
              name: KT,
              ownerName: OT,
              description: yT
            }, lT);
            if ("loaded" === fT.kind && null !== fT.stored.validation) return fT.stored;
            const IT = "failed" === fT.kind ? fT.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${kT.packId}: ${IT}`), "failed" === fT.kind && AT.includes(fT.reason) ? {
              ...TT,
              listing: {
                ...kT,
                rejectedSourceHash: MT
              }
            } : void 0
          }
        }
      }(TT, kT, jT, tT);
      return void 0 === hT || (await (0, IT.replaceShaderPack)(TT, hT, tT) ? (null !== hT && hT.files === TT.files || (0, IT.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6641: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      forgetShaderPackActiveHint: () => zT,
      isOtherApiVersion: () => PT,
      isShaderPackActive: () => DT,
      isShaderPackChangePending: () => rT,
      markShaderPackChangePending: () => FT,
      pageShaderPackValidationVersion: () => wT,
      reconcileStoredShaderPackHint: () => bT,
      removeShaderPack: () => ST,
      replaceShaderPack: () => hT,
      saveShaderPack: () => tT,
      shaderPackNeedsCheck: () => mT,
      storedPackOutcome: () => aT,
      storedShaderPackFiles: () => CT,
      toStoredShaderPack: () => AT
    });
    var lT = cT(6581),
      MT = cT(6597),
      KT = cT(47),
      OT = cT(3383),
      yT = cT(6647),
      fT = cT(6623);
    const xT = "shaderPackChangePending";
    let IT = null;

    function AT(TT, kT, cT) {
      return {
        manifest: TT.manifest,
        files: (0, lT.s)(TT.files),
        validation: kT,
        ...cT && {
          listing: cT
        }
      }
    }

    function CT(TT) {
      return Object.keys(TT.files).map((kT => ({
        path: kT,
        source: TT.files[kT]
      })))
    }
    let jT = Promise.resolve();

    function vT(TT) {
      const kT = jT.then(TT);
      return jT = kT.catch((() => {})), kT
    }

    function tT(TT, kT) {
      return vT((() => NT(TT, kT)))
    }

    function hT(TT, kT, cT) {
      return vT((async () => JSON.stringify(await (0, yT.e)()) === JSON.stringify(TT) && (null === kT ? (await QT(), !0) : NT(kT, cT))))
    }
    async function NT(TT, kT) {
      const cT = await KT.d.setItem(yT.b, TT);
      return cT && JT(TT, kT), cT
    }
    async function QT() {
      await KT.d.removeItem(yT.b), KT.e.removeItem(OT.d)
    }

    function ST() {
      return vT(QT)
    }

    function DT(TT, kT) {
      return "active" === aT(TT, kT).kind
    }

    function aT(TT, kT) {
      var cT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : PT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.ok) || TT.validation.fromRecheck ? null === kT ? {
        kind: "none",
        reason: "noCompiler"
      } : mT(TT, kT) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : TT.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function FT() {
      KT.g.setItem(xT, performance.timeOrigin)
    }

    function rT() {
      return KT.g.getItem(xT) === performance.timeOrigin
    }

    function PT(TT) {
      return !(0, MT.f)(TT.manifest.apiVersion)
    }

    function wT(TT) {
      return IT ??= TT.OJ((0, fT.shaderPackTextures)()), IT
    }

    function mT(TT, kT) {
      var cT;
      return (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.headerVersion) !== wT(kT)
    }

    function bT(TT) {
      return vT((async () => {
        JT(await (0, yT.e)(!0), TT)
      }))
    }

    function zT() {
      return vT((async () => {
        KT.e.removeItem(OT.d)
      }))
    }

    function JT(TT, kT) {
      DT(TT, kT) ? KT.e.setItem(OT.d, !0) : KT.e.removeItem(OT.d)
    }
  },
  6623: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      loadShaderPackTextures: () => OT,
      shaderPackTextures: () => yT
    });
    var lT = cT(6581);
    let MT = null,
      KT = null;

    function OT() {
      return KT ??= Promise.all([cT.e(70), cT.e(198)]).then((() => cT(40123))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: kT,
          textureNameToIndex: cT,
          textureAnimationData: KT
        } = TT;
        return MT ??= (0, lT.i)(cT, KT, kT), MT
      })), KT
    }

    function yT() {
      if (null === MT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return MT
    }
  },
  6636: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT,
      h: () => yT
    });
    var lT = cT(6641),
      MT = cT(6623),
      KT = cT(141);
    const OT = 100;
    async function yT(TT, kT) {
      var cT;
      let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cT = navigator.gpu) && void 0 !== cT ? cT : null;
      const OT = TT.k_(kT, (0, MT.shaderPackTextures)());
      if (OT.errors.length > 0) return xT(TT, OT.errors, OT.offInStrict);
      const yT = await async function(TT) {
        if (!TT) return null;
        try {
          const kT = await (0, KT.w)(TT);
          return kT ? await kT.requestDevice() : null
        } catch (kT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", kT), null
        }
      }(lT);
      if (!yT) return null;
      let fT = !1;
      yT.lost.then((() => {
        fT = !0
      }));
      try {
        const kT = await Promise.all(OT.validationModules.map((kT => async function(TT, kT, cT) {
          kT.pushErrorScope("validation");
          const lT = kT.createShaderModule({
              code: cT.code
            }),
            MT = kT.popErrorScope(),
            {
              messages: KT
            } = await lT.getCompilationInfo(),
            OT = KT.filter((TT => "error" === TT.type)).map((kT => TT.mapValidationMessage(cT, kT))),
            yT = await MT;
          yT && 0 === OT.length && OT.push({
            file: null,
            line: 0,
            message: yT.message,
            variants: [cT.key]
          });
          return OT
        }(TT, yT, kT))));
        return fT ? null : xT(TT, TT.OcT(kT.flat()), OT.offInStrict)
      } catch (IT) {
        return console.error("Couldn't validate the shader pack on WebGPU.", IT), null
      } finally {
        yT.destroy()
      }
    }
    async function fT(TT, kT) {
      var cT;
      if (!(0, lT.shaderPackNeedsCheck)(TT, kT) || (0, lT.isOtherApiVersion)(TT)) return TT;
      const MT = await yT(kT, (0, lT.storedShaderPackFiles)(TT));
      if (!MT) return TT;
      const KT = !1 === (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.ok) && !TT.validation.fromRecheck,
        OT = {
          ...TT,
          validation: KT ? MT : {
            ...MT,
            fromRecheck: !0
          }
        };
      return await (0, lT.replaceShaderPack)(TT, OT, kT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), OT
    }

    function xT(TT, kT, cT) {
      return {
        headerVersion: (0, lT.pageShaderPackValidationVersion)(TT),
        ok: 0 === kT.length,
        errors: kT.slice(0, OT),
        moreErrors: Math.max(0, kT.length - OT),
        offInStrict: cT
      }
    }
  },
  6550: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => CT,
      C: () => IT,
      D: () => ST,
      H: () => AT,
      L: () => xT,
      b: () => jT,
      c: () => tT,
      e: () => vT,
      f: () => QT,
      i: () => aT,
      m: () => fT,
      o: () => MT,
      q: () => DT,
      r: () => KT,
      v: () => yT,
      w: () => OT,
      z: () => lT
    });
    const lT = ["forest", "desert", "water", "night", "cave"];
    const MT = {
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
      KT = ["popular", "updated", "newest"],
      OT = 3,
      yT = 32,
      fT = 300;

    function xT(TT, kT) {
      return TT.slice(0, kT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const IT = 64,
      AT = 512,
      CT = 18e5;
    const jT = "Bloxdhub",
      vT = "https://bloxdhub.com/shaders";

    function tT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const hT = "Screenshot generation failed.",
      NT = "Its screenshots couldn't be generated:";

    function QT(TT) {
      var kT;
      return TT === hT || null !== (kT = null === TT || void 0 === TT ? void 0 : TT.startsWith(NT)) && void 0 !== kT && kT
    }

    function ST(TT, kT) {
      return `shaderPacks/${TT}/${kT}.json`
    }

    function DT(TT, kT, cT, lT) {
      return null === kT.renderId ? aT(TT, kT.baselineVersion, cT, lT) : `${TT}/${function(TT,kT,cT,lT){return`shaderPacks/${TT}/${kT}/${cT}-${lT}.webp`}(kT.packId,kT.renderId,cT,lT)}`
    }

    function aT(TT, kT, cT, lT) {
      return `${TT}/${function(TT,kT,cT){return`shaderPacks/baseline/${TT}/${kT}-${cT}.webp`}(kT,cT,lT)}`
    }
  },
  6581: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      c: () => KT,
      e: () => lT,
      i: () => vT,
      j: () => IT,
      l: () => MT,
      p: () => fT,
      s: () => xT,
      u: () => AT
    });
    const lT = 5;

    function MT(TT) {
      return TT === lT
    }
    const KT = 262144,
      OT = 256,
      yT = 256;

    function fT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const kT = [];
      for (const [cT, lT] of Object.entries(TT)) {
        if ("string" !== typeof lT) return `${cT} isn't text.`;
        kT.push({
          path: cT,
          source: lT
        })
      }
      return kT.sort(((TT, kT) => IT(TT.path, kT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > OT) return `The pack has more than ${OT} .wgsl files.`;
          const kT = new Set;
          for (const {
              path: cT
            }
            of TT) {
            const TT = CT(cT);
            if (null !== TT) return TT;
            if (kT.has(cT)) return `The pack has two files at ${cT}.`;
            kT.add(cT)
          }
          return AT(TT) > KT ? `The pack's .wgsl files are over ${KT/1024} KB in total.` : null
        }(kT) ?? kT
    }

    function xT(TT) {
      const kT = {};
      for (const cT of TT) kT[cT.path] = cT.source;
      return kT
    }

    function IT(TT, kT) {
      return TT < kT ? -1 : TT > kT ? 1 : 0
    }

    function AT(TT) {
      const kT = new TextEncoder;
      let cT = 0;
      for (const {
          source: lT
        }
        of TT) cT += kT.encode(lT).byteLength;
      return cT
    }

    function CT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > yT) return `A file path is over ${yT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const jT = /^(.*)\[rot\[([1-4])$/;

    function vT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const lT = new Map;
      kT.forEach(((TT, kT) => {
        let {
          numAnimStates: cT,
          animStartIdx: MT
        } = TT;
        for (let KT = 1; KT < cT; KT++) lT.set(MT + KT - 1, kT)
      }));
      const MT = Object.entries(TT),
        KT = new Map;
      for (const [tT, hT] of MT) {
        const TT = jT.exec(tT);
        "1" === TT?.[2] && KT.set(TT[1], hT + 1)
      }
      const OT = TT => {
          const kT = jT.exec(TT);
          return kT && KT.has(kT[1]) ? {
            root: kT[1],
            rotation: Number(kT[2]) - 1
          } : null
        },
        yT = new Set(MT.map((TT => {
          let [kT] = TT;
          return OT(kT)?.root ?? kT
        }))),
        fT = (TT, cT) => {
          const lT = TT.replace(/_?0$/, "");
          return (kT[cT]?.numAnimStates ?? 0) > 1 && !yT.has(lT) ? lT : TT
        },
        xT = new Map;
      for (const [jT, tT] of MT) xT.set(tT, fT(OT(jT)?.root ?? jT, tT));
      const IT = MT.reduce(((TT, kT) => {
          let [, cT] = kT;
          return Math.max(TT, cT + 1)
        }), 0),
        AT = Array.from({
          length: IT
        }, ((TT, kT) => ({
          id: kT + 1,
          rotation: 0
        }))),
        CT = new Map,
        vT = new Map;
      for (const [jT, tT] of MT) {
        const TT = OT(jT),
          kT = lT.get(tT);
        if (void 0 !== kT) {
          const cT = xT.get(kT);
          vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "frame"
          }), TT && !vT.has(TT.root) && vT.set(TT.root, {
            name: TT.root,
            texture: cT,
            kind: "frame"
          });
          continue
        }
        const cT = xT.get(tT),
          MT = TT?.root ?? jT;
        if (cT !== MT && vT.set(MT, {
            name: MT,
            texture: cT,
            kind: "frame"
          }), TT) {
          const kT = KT.get(TT.root);
          AT[tT] = {
            id: kT,
            rotation: TT.rotation
          }, CT.set(cT, kT), vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "rotation"
          })
        } else CT.set(cT, tT + 1)
      }
      for (const jT of CT.keys()) vT.delete(jT);
      for (const [jT, tT] of cT) {
        const TT = CT.get(tT);
        void 0 === TT || CT.has(jT) || (CT.set(jT, TT), vT.delete(jT))
      }
      return {
        named: [...CT].sort(((TT, kT) => {
          let [cT] = TT, [lT] = kT;
          return cT < lT ? -1 : cT > lT ? 1 : 0
        })).map((TT => {
          let [kT, cT] = TT;
          return {
            name: kT,
            id: cT
          }
        })),
        aliases: [...vT.values()],
        layers: AT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);