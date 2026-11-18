export const id = 116;
export const ids = [116, 119, 120, 123];
export const modules = {
  5951: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.f,
      e: () => UJ,
      i: () => FJ.k
    });
    var FJ = ZJ(5934);
    const UJ = [!1, !0].flatMap((JJ => ["terrain", "liquid", "model"].map((cJ => ({
      strict: JJ,
      program: cJ
    })))))
  },
  39262: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => hJ,
      installListedShaderPack: () => YJ
    });
    var FJ = ZJ(5889),
      UJ = ZJ(5934),
      eJ = ZJ(1098),
      XJ = ZJ(5960),
      AJ = ZJ(5951),
      qJ = ZJ(5996),
      jJ = ZJ(5994);
    async function YJ(JJ) {
      const cJ = await (0, XJ.loadPageShaderPackCompiler)();
      if (null === cJ) return {
        kind: "failed",
        reason: "compiler"
      };
      const ZJ = await hJ(JJ, cJ);
      return "failed" === ZJ.kind ? ZJ : await (0, qJ.saveShaderPack)(ZJ.stored, cJ) ? ((0, qJ.markShaderPackChangePending)(), ZJ) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function hJ(JJ, cJ) {
      const ZJ = await async function(JJ) {
        let {
          packId: cJ,
          sourceHash: ZJ
        } = JJ;
        try {
          const JJ = await fetch(`${eJ.clientSideServerUrls.s3Url}/${(0,FJ.G)(cJ,ZJ)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!JJ.ok) return console.error(`Failed to download shader pack ${cJ} (${JJ.status})`), null;
          const UJ = await JJ.json();
          return "object" !== typeof UJ || null === UJ ? (console.error(`Shader pack ${cJ}'s source isn't an object`), null) : UJ
        } catch (UJ) {
          return console.error(`Failed to download shader pack ${cJ}`, UJ), null
        }
      }(JJ);
      if (null === ZJ) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, AJ.i)(ZJ.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const XJ = (0, UJ.l)(ZJ.files);
      if ("string" === typeof XJ) return console.error(`A listed shader pack breaks the pack rules: ${XJ}`), {
        kind: "failed",
        reason: "invalid"
      };
      const YJ = await (0, jJ.f)(cJ, XJ);
      if (!1 === (null === YJ || void 0 === YJ ? void 0 : YJ.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const hJ = {
        manifest: {
          apiVersion: ZJ.apiVersion,
          name: JJ.name,
          author: JJ.ownerName,
          description: JJ.description || null,
          keepCircleShadows: !0 === ZJ.keepCircleShadows
        },
        files: XJ
      };
      return {
        kind: "loaded",
        stored: (0, qJ.toStoredShaderPack)(hJ, YJ, {
          packId: JJ.packId,
          sourceHash: JJ.sourceHash
        })
      }
    }
  },
  39943: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      followListingUpdates: () => DJ
    });
    var FJ = ZJ(629),
      UJ = ZJ(13),
      eJ = ZJ(1389),
      XJ = ZJ(1028),
      AJ = ZJ(5960),
      qJ = ZJ(5951),
      jJ = ZJ(39262),
      YJ = ZJ(5996);
    const hJ = ["apiVersion", "invalid", "errors"];
    async function DJ(JJ, cJ) {
      const ZJ = await XJ.userContextManager.getCurrentUserContext(),
        DJ = await eJ.c.getShaderPackVersions(ZJ, [cJ.packId]),
        sJ = function(JJ, cJ, ZJ) {
          var FJ;
          if (void 0 === ZJ || "unlisted" === ZJ.status) return {
            kind: "none"
          };
          if ("banned" === ZJ.status) return {
            kind: "remove"
          };
          if (!(0, qJ.i)(ZJ.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: UJ,
            name: eJ,
            ownerName: XJ,
            description: AJ
          } = ZJ;
          return UJ !== cJ.sourceHash && UJ !== cJ.rejectedSourceHash ? {
            kind: "update",
            sourceHash: UJ,
            name: eJ,
            ownerName: XJ,
            description: AJ
          } : eJ !== JJ.manifest.name || XJ !== JJ.manifest.author || (AJ || null) !== (null !== (FJ = JJ.manifest.description) && void 0 !== FJ ? FJ : null) ? {
            kind: "rename",
            name: eJ,
            ownerName: XJ,
            description: AJ
          } : {
            kind: "none"
          }
        }(JJ, cJ, (0, FJ.b)(DJ, cJ.packId));
      if ("update" === sJ.kind && "landingPage" !== UJ.d.get("gameState")) return !1;
      const nJ = "update" === sJ.kind || "rename" === sJ.kind,
        GJ = nJ ? await (0, AJ.loadPageShaderPackCompiler)() : null;
      if (nJ && null === GJ) return console.warn(`Didn't follow shader pack ${cJ.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const fJ = await async function(JJ, cJ, ZJ, FJ) {
        switch (ZJ.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...JJ, manifest: {
                ...JJ.manifest,
                name: ZJ.name,
                author: ZJ.ownerName,
                description: ZJ.description || null
              }
            };
          case "update": {
            if (null === FJ) return;
            const {
              sourceHash: UJ,
              name: eJ,
              ownerName: XJ,
              description: AJ
            } = ZJ, qJ = await (0, jJ.b)({
              packId: cJ.packId,
              sourceHash: UJ,
              name: eJ,
              ownerName: XJ,
              description: AJ
            }, FJ);
            if ("loaded" === qJ.kind && null !== qJ.stored.validation) return qJ.stored;
            const YJ = "failed" === qJ.kind ? qJ.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${cJ.packId}: ${YJ}`), "failed" === qJ.kind && hJ.includes(qJ.reason) ? {
              ...JJ,
              listing: {
                ...cJ,
                rejectedSourceHash: UJ
              }
            } : void 0
          }
        }
      }(JJ, cJ, sJ, GJ);
      return void 0 === fJ || (await (0, YJ.replaceShaderPack)(JJ, fJ, GJ) ? (null !== fJ && fJ.files === JJ.files || (0, YJ.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  5996: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      forgetShaderPackActiveHint: () => MJ,
      isOtherApiVersion: () => KJ,
      isShaderPackActive: () => mJ,
      isShaderPackChangePending: () => VJ,
      markShaderPackChangePending: () => EJ,
      pageShaderPackValidationVersion: () => yJ,
      reconcileStoredShaderPackHint: () => IJ,
      removeShaderPack: () => vJ,
      replaceShaderPack: () => fJ,
      saveShaderPack: () => GJ,
      shaderPackNeedsCheck: () => SJ,
      storedPackOutcome: () => QJ,
      storedShaderPackFiles: () => DJ,
      toStoredShaderPack: () => hJ
    });
    var FJ = ZJ(5934),
      UJ = ZJ(5951),
      eJ = ZJ(29),
      XJ = ZJ(2938),
      AJ = ZJ(6004),
      qJ = ZJ(5977);
    const jJ = "shaderPackChangePending";
    let YJ = null;

    function hJ(JJ, cJ, ZJ) {
      return {
        manifest: JJ.manifest,
        files: (0, FJ.o)(JJ.files),
        validation: cJ,
        ...ZJ && {
          listing: ZJ
        }
      }
    }

    function DJ(JJ) {
      return Object.keys(JJ.files).map((cJ => ({
        path: cJ,
        source: JJ.files[cJ]
      })))
    }
    let sJ = Promise.resolve();

    function nJ(JJ) {
      const cJ = sJ.then(JJ);
      return sJ = cJ.catch((() => {})), cJ
    }

    function GJ(JJ, cJ) {
      return nJ((() => xJ(JJ, cJ)))
    }

    function fJ(JJ, cJ, ZJ) {
      return nJ((async () => JSON.stringify(await (0, AJ.f)()) === JSON.stringify(JJ) && (null === cJ ? (await rJ(), !0) : xJ(cJ, ZJ))))
    }
    async function xJ(JJ, cJ) {
      const ZJ = await eJ.g.setItem(AJ.e, JJ);
      return ZJ && bJ(JJ, cJ), ZJ
    }
    async function rJ() {
      await eJ.g.removeItem(AJ.e), eJ.j.removeItem(XJ.b)
    }

    function vJ() {
      return nJ(rJ)
    }

    function mJ(JJ, cJ) {
      return "active" === QJ(JJ, cJ).kind
    }

    function QJ(JJ, cJ) {
      var ZJ;
      return null === JJ ? {
        kind: "none",
        reason: "nothingStored"
      } : KJ(JJ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.ok) || JJ.validation.fromRecheck ? null === cJ ? {
        kind: "none",
        reason: "noCompiler"
      } : SJ(JJ, cJ) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : JJ.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function EJ() {
      eJ.k.setItem(jJ, performance.timeOrigin)
    }

    function VJ() {
      return eJ.k.getItem(jJ) === performance.timeOrigin
    }

    function KJ(JJ) {
      return !(0, UJ.i)(JJ.manifest.apiVersion)
    }

    function yJ(JJ) {
      return YJ ??= JJ.Uy((0, qJ.shaderPackTextures)()), YJ
    }

    function SJ(JJ, cJ) {
      var ZJ;
      return (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.headerVersion) !== yJ(cJ)
    }

    function IJ(JJ) {
      return nJ((async () => {
        bJ(await (0, AJ.f)(!0), JJ)
      }))
    }

    function MJ() {
      return nJ((async () => {
        eJ.j.removeItem(XJ.b)
      }))
    }

    function bJ(JJ, cJ) {
      mJ(JJ, cJ) ? eJ.j.setItem(XJ.b, !0) : eJ.j.removeItem(XJ.b)
    }
  },
  5977: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      loadShaderPackTextures: () => XJ,
      shaderPackTextures: () => AJ
    });
    var FJ = ZJ(5934);
    let UJ = null,
      eJ = null;

    function XJ() {
      return eJ ??= Promise.all([ZJ.e(64), ZJ.e(184)]).then((() => ZJ(39255))).then((JJ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: cJ,
          textureNameToIndex: ZJ,
          textureAnimationData: eJ
        } = JJ;
        return UJ ??= (0, FJ.g)(ZJ, eJ, cJ), UJ
      })), eJ
    }

    function AJ() {
      if (null === UJ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return UJ
    }
  },
  5994: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      f: () => AJ
    });
    var FJ = ZJ(5996),
      UJ = ZJ(5977),
      eJ = ZJ(95);
    const XJ = 100;
    async function AJ(JJ, cJ) {
      var ZJ;
      let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZJ = navigator.gpu) && void 0 !== ZJ ? ZJ : null;
      const XJ = JJ.W4(cJ, (0, UJ.shaderPackTextures)());
      if (XJ.errors.length > 0) return jJ(JJ, XJ.errors, XJ.offInStrict);
      const AJ = await async function(JJ) {
        if (!JJ) return null;
        try {
          const cJ = await (0, eJ.u)(JJ);
          return cJ ? await cJ.requestDevice() : null
        } catch (cJ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", cJ), null
        }
      }(FJ);
      if (!AJ) return null;
      let qJ = !1;
      AJ.lost.then((() => {
        qJ = !0
      }));
      try {
        const cJ = await Promise.all(XJ.validationModules.map((cJ => async function(JJ, cJ, ZJ) {
          cJ.pushErrorScope("validation");
          const FJ = cJ.createShaderModule({
              code: ZJ.code
            }),
            UJ = cJ.popErrorScope(),
            {
              messages: eJ
            } = await FJ.getCompilationInfo(),
            XJ = eJ.filter((JJ => "error" === JJ.type)).map((cJ => JJ.mapValidationMessage(ZJ, cJ))),
            AJ = await UJ;
          AJ && 0 === XJ.length && XJ.push({
            file: null,
            line: 0,
            message: AJ.message,
            variants: [ZJ.key]
          });
          return XJ
        }(JJ, AJ, cJ))));
        return qJ ? null : jJ(JJ, JJ.kZJ(cJ.flat()), XJ.offInStrict)
      } catch (YJ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", YJ), null
      } finally {
        AJ.destroy()
      }
    }
    async function qJ(JJ, cJ) {
      var ZJ;
      if (!(0, FJ.shaderPackNeedsCheck)(JJ, cJ) || (0, FJ.isOtherApiVersion)(JJ)) return JJ;
      const UJ = await AJ(cJ, (0, FJ.storedShaderPackFiles)(JJ));
      if (!UJ) return JJ;
      const eJ = !1 === (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.ok) && !JJ.validation.fromRecheck,
        XJ = {
          ...JJ,
          validation: eJ ? UJ : {
            ...UJ,
            fromRecheck: !0
          }
        };
      return await (0, FJ.replaceShaderPack)(JJ, XJ, cJ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), XJ
    }

    function jJ(JJ, cJ, ZJ) {
      return {
        headerVersion: (0, FJ.pageShaderPackValidationVersion)(JJ),
        ok: 0 === cJ.length,
        errors: cJ.slice(0, XJ),
        moreErrors: Math.max(0, cJ.length - XJ),
        offInStrict: ZJ
      }
    }
  },
  5889: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => FJ,
      C: () => DJ,
      E: () => YJ,
      G: () => vJ,
      I: () => hJ,
      L: () => jJ,
      b: () => sJ,
      f: () => GJ,
      i: () => nJ,
      j: () => rJ,
      l: () => QJ,
      n: () => qJ,
      o: () => UJ,
      q: () => mJ,
      t: () => eJ,
      u: () => AJ,
      x: () => XJ
    });
    const FJ = ["forest", "desert", "water", "night", "cave"];
    const UJ = {
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
      eJ = ["popular", "updated", "newest"],
      XJ = 3,
      AJ = 32,
      qJ = 300;

    function jJ(JJ, cJ) {
      return JJ.slice(0, cJ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const YJ = 64,
      hJ = 512,
      DJ = 18e5;
    const sJ = "Bloxdhub",
      nJ = "https://bloxdhub.com/shaders";

    function GJ(JJ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(JJ)}`
    }
    const fJ = "Screenshot generation failed.",
      xJ = "Its screenshots couldn't be generated:";

    function rJ(JJ) {
      var cJ;
      return JJ === fJ || null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.startsWith(xJ)) && void 0 !== cJ && cJ
    }

    function vJ(JJ, cJ) {
      return `shaderPacks/${JJ}/${cJ}.json`
    }

    function mJ(JJ, cJ, ZJ, FJ) {
      return null === cJ.renderId ? QJ(JJ, cJ.baselineVersion, ZJ, FJ) : `${JJ}/${function(JJ,cJ,ZJ,FJ){return`shaderPacks/${JJ}/${cJ}/${ZJ}-${FJ}.webp`}(cJ.packId,cJ.renderId,ZJ,FJ)}`
    }

    function QJ(JJ, cJ, ZJ, FJ) {
      return `${JJ}/${function(JJ,cJ,ZJ){return`shaderPacks/baseline/${JJ}/${cJ}-${ZJ}.webp`}(cJ,ZJ,FJ)}`
    }
  },
  5934: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      d: () => eJ,
      f: () => FJ,
      g: () => nJ,
      j: () => YJ,
      k: () => UJ,
      l: () => qJ,
      o: () => jJ,
      q: () => hJ
    });
    const FJ = 5;

    function UJ(JJ) {
      return JJ === FJ
    }
    const eJ = 262144,
      XJ = 256,
      AJ = 256;

    function qJ(JJ) {
      if ("object" !== typeof JJ || null === JJ || Array.isArray(JJ)) return "The pack has no files.";
      const cJ = [];
      for (const [ZJ, FJ] of Object.entries(JJ)) {
        if ("string" !== typeof FJ) return `${ZJ} isn't text.`;
        cJ.push({
          path: ZJ,
          source: FJ
        })
      }
      return cJ.sort(((JJ, cJ) => YJ(JJ.path, cJ.path))),
        function(JJ) {
          if (0 === JJ.length) return "The pack has no .wgsl files.";
          if (JJ.length > XJ) return `The pack has more than ${XJ} .wgsl files.`;
          const cJ = new Set;
          for (const {
              path: ZJ
            }
            of JJ) {
            const JJ = DJ(ZJ);
            if (null !== JJ) return JJ;
            if (cJ.has(ZJ)) return `The pack has two files at ${ZJ}.`;
            cJ.add(ZJ)
          }
          return hJ(JJ) > eJ ? `The pack's .wgsl files are over ${eJ/1024} KB in total.` : null
        }(cJ) ?? cJ
    }

    function jJ(JJ) {
      const cJ = {};
      for (const ZJ of JJ) cJ[ZJ.path] = ZJ.source;
      return cJ
    }

    function YJ(JJ, cJ) {
      return JJ < cJ ? -1 : JJ > cJ ? 1 : 0
    }

    function hJ(JJ) {
      const cJ = new TextEncoder;
      let ZJ = 0;
      for (const {
          source: FJ
        }
        of JJ) ZJ += cJ.encode(FJ).byteLength;
      return ZJ
    }

    function DJ(JJ) {
      if (!JJ.toLowerCase().endsWith(".wgsl")) return `${JJ} isn't a .wgsl file.`;
      if (JJ.length > AJ) return `A file path is over ${AJ} characters.`;
      if (JJ.includes("\\") || /[\u0000-\u001f]/.test(JJ)) return `${JJ} isn't a valid file path.`;
      return JJ.split("/").some((JJ => "" === JJ || "." === JJ || ".." === JJ)) ? `${JJ} isn't a valid file path.` : null
    }
    const sJ = /^(.*)\[rot\[([1-4])$/;

    function nJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const FJ = new Map;
      cJ.forEach(((JJ, cJ) => {
        let {
          numAnimStates: ZJ,
          animStartIdx: UJ
        } = JJ;
        for (let eJ = 1; eJ < ZJ; eJ++) FJ.set(UJ + eJ - 1, cJ)
      }));
      const UJ = Object.entries(JJ),
        eJ = new Map;
      for (const [GJ, fJ] of UJ) {
        const JJ = sJ.exec(GJ);
        "1" === JJ?.[2] && eJ.set(JJ[1], fJ + 1)
      }
      const XJ = JJ => {
          const cJ = sJ.exec(JJ);
          return cJ && eJ.has(cJ[1]) ? {
            root: cJ[1],
            rotation: Number(cJ[2]) - 1
          } : null
        },
        AJ = new Set(UJ.map((JJ => {
          let [cJ] = JJ;
          return XJ(cJ)?.root ?? cJ
        }))),
        qJ = (JJ, ZJ) => {
          const FJ = JJ.replace(/_?0$/, "");
          return (cJ[ZJ]?.numAnimStates ?? 0) > 1 && !AJ.has(FJ) ? FJ : JJ
        },
        jJ = new Map;
      for (const [sJ, GJ] of UJ) jJ.set(GJ, qJ(XJ(sJ)?.root ?? sJ, GJ));
      const YJ = UJ.reduce(((JJ, cJ) => {
          let [, ZJ] = cJ;
          return Math.max(JJ, ZJ + 1)
        }), 0),
        hJ = Array.from({
          length: YJ
        }, ((JJ, cJ) => ({
          id: cJ + 1,
          rotation: 0
        }))),
        DJ = new Map,
        nJ = new Map;
      for (const [sJ, GJ] of UJ) {
        const JJ = XJ(sJ),
          cJ = FJ.get(GJ);
        if (void 0 !== cJ) {
          const ZJ = jJ.get(cJ);
          nJ.set(sJ, {
            name: sJ,
            texture: ZJ,
            kind: "frame"
          }), JJ && !nJ.has(JJ.root) && nJ.set(JJ.root, {
            name: JJ.root,
            texture: ZJ,
            kind: "frame"
          });
          continue
        }
        const ZJ = jJ.get(GJ),
          UJ = JJ?.root ?? sJ;
        if (ZJ !== UJ && nJ.set(UJ, {
            name: UJ,
            texture: ZJ,
            kind: "frame"
          }), JJ) {
          const cJ = eJ.get(JJ.root);
          hJ[GJ] = {
            id: cJ,
            rotation: JJ.rotation
          }, DJ.set(ZJ, cJ), nJ.set(sJ, {
            name: sJ,
            texture: ZJ,
            kind: "rotation"
          })
        } else DJ.set(ZJ, GJ + 1)
      }
      for (const sJ of DJ.keys()) nJ.delete(sJ);
      for (const [sJ, GJ] of ZJ) {
        const JJ = DJ.get(GJ);
        void 0 === JJ || DJ.has(sJ) || (DJ.set(sJ, JJ), nJ.delete(sJ))
      }
      return {
        named: [...DJ].sort(((JJ, cJ) => {
          let [ZJ] = JJ, [FJ] = cJ;
          return ZJ < FJ ? -1 : ZJ > FJ ? 1 : 0
        })).map((JJ => {
          let [cJ, ZJ] = JJ;
          return {
            name: cJ,
            id: ZJ
          }
        })),
        aliases: [...nJ.values()],
        layers: hJ
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);