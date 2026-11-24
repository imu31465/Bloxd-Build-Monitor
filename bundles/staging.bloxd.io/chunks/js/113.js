export const id = 113;
export const ids = [113, 116, 136, 137];
export const modules = {
  5212: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.h,
      i: () => bS,
      j: () => tS.n
    });
    var tS = gS(5221);
    const bS = [!1, !0].flatMap((SS => ["terrain", "liquid", "model"].map((HS => ({
      strict: SS,
      program: HS
    })))))
  },
  40531: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      installListedShaderPack: () => IS
    });
    var tS = gS(6760),
      bS = gS(5221),
      XS = gS(1286),
      xS = gS(6810),
      NS = gS(5212),
      qS = gS(6844),
      uS = gS(6839);
    async function IS(SS) {
      const HS = await (0, xS.loadPageShaderPackCompiler)();
      if (null === HS) return {
        kind: "failed",
        reason: "compiler"
      };
      const gS = await fS(SS, HS);
      return "failed" === gS.kind ? gS : await (0, qS.saveShaderPack)(gS.stored, HS) ? ((0, qS.markShaderPackChangePending)(), gS) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function fS(SS, HS) {
      const gS = await async function(SS) {
        let {
          packId: HS,
          sourceHash: gS
        } = SS;
        try {
          const SS = await fetch(`${XS.clientSideServerUrls.s3Url}/${(0,tS.R)(HS,gS)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!SS.ok) return console.error(`Failed to download shader pack ${HS} (${SS.status})`), null;
          const bS = await SS.json();
          return "object" !== typeof bS || null === bS ? (console.error(`Shader pack ${HS}'s source isn't an object`), null) : bS
        } catch (bS) {
          return console.error(`Failed to download shader pack ${HS}`, bS), null
        }
      }(SS);
      if (null === gS) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, NS.j)(gS.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const xS = (0, bS.u)(gS.files);
      if ("string" === typeof xS) return console.error(`A listed shader pack breaks the pack rules: ${xS}`), {
        kind: "failed",
        reason: "invalid"
      };
      const IS = await (0, uS.g)(HS, xS);
      if (!1 === (null === IS || void 0 === IS ? void 0 : IS.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const fS = {
        manifest: {
          apiVersion: gS.apiVersion,
          name: SS.name,
          author: SS.ownerName,
          description: SS.description || null,
          keepCircleShadows: !0 === gS.keepCircleShadows
        },
        files: xS
      };
      return {
        kind: "loaded",
        stored: (0, qS.toStoredShaderPack)(fS, IS, {
          packId: SS.packId,
          sourceHash: SS.sourceHash
        })
      }
    }
  },
  6844: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      forgetShaderPackActiveHint: () => cS,
      isOtherApiVersion: () => ZS,
      isShaderPackActive: () => QS,
      isShaderPackChangePending: () => hS,
      markShaderPackChangePending: () => wS,
      pageShaderPackValidationVersion: () => JS,
      reconcileStoredShaderPackHint: () => dS,
      removeShaderPack: () => PS,
      replaceShaderPack: () => GS,
      saveShaderPack: () => jS,
      shaderPackNeedsCheck: () => OS,
      storedPackOutcome: () => DS,
      storedShaderPackFiles: () => kS,
      toStoredShaderPack: () => fS
    });
    var tS = gS(5221),
      bS = gS(5212),
      XS = gS(45),
      xS = gS(3591),
      NS = gS(6848),
      qS = gS(6824);
    const uS = "shaderPackChangePending";
    let IS = null;

    function fS(SS, HS, gS) {
      return {
        manifest: SS.manifest,
        files: (0, tS.v)(SS.files),
        validation: HS,
        ...gS && {
          listing: gS
        }
      }
    }

    function kS(SS) {
      return Object.keys(SS.files).map((HS => ({
        path: HS,
        source: SS.files[HS]
      })))
    }
    let aS = Promise.resolve();

    function KS(SS) {
      const HS = aS.then(SS);
      return aS = HS.catch((() => {})), HS
    }

    function jS(SS, HS) {
      return KS((() => CS(SS, HS)))
    }

    function GS(SS, HS, gS) {
      return KS((async () => JSON.stringify(await (0, NS.f)()) === JSON.stringify(SS) && (null === HS ? (await nS(), !0) : CS(HS, gS))))
    }
    async function CS(SS, HS) {
      const gS = await XS.e.setItem(NS.d, SS);
      return gS && vS(SS, HS), gS
    }
    async function nS() {
      await XS.e.removeItem(NS.d), XS.g.removeItem(xS.d)
    }

    function PS() {
      return KS(nS)
    }

    function QS(SS, HS) {
      return "active" === DS(SS, HS).kind
    }

    function DS(SS, HS) {
      var gS;
      return null === SS ? {
        kind: "none",
        reason: "nothingStored"
      } : ZS(SS) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) || SS.validation.fromRecheck ? null === HS ? {
        kind: "none",
        reason: "noCompiler"
      } : OS(SS, HS) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : SS.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wS() {
      XS.h.setItem(uS, performance.timeOrigin)
    }

    function hS() {
      return XS.h.getItem(uS) === performance.timeOrigin
    }

    function ZS(SS) {
      return !(0, bS.j)(SS.manifest.apiVersion)
    }

    function JS(SS) {
      return IS ??= SS.dL((0, qS.shaderPackTextures)()), IS
    }

    function OS(SS, HS) {
      var gS;
      return (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.headerVersion) !== JS(HS)
    }

    function dS(SS) {
      return KS((async () => {
        vS(await (0, NS.f)(!0), SS)
      }))
    }

    function cS() {
      return KS((async () => {
        XS.g.removeItem(xS.d)
      }))
    }

    function vS(SS, HS) {
      QS(SS, HS) ? XS.g.setItem(xS.d, !0) : XS.g.removeItem(xS.d)
    }
  },
  6824: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadShaderPackTextures: () => xS,
      shaderPackTextures: () => NS
    });
    var tS = gS(5221);
    let bS = null,
      XS = null;

    function xS() {
      return XS ??= Promise.all([gS.e(72), gS.e(188)]).then((() => gS(40526))).then((SS => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: HS,
          textureNameToIndex: gS,
          textureAnimationData: XS
        } = SS;
        return bS ??= (0, tS.j)(gS, XS, HS), bS
      })), XS
    }

    function NS() {
      if (null === bS) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return bS
    }
  },
  6839: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS,
      g: () => NS
    });
    var tS = gS(6844),
      bS = gS(6824),
      XS = gS(122);
    const xS = 100;
    async function NS(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gS = navigator.gpu) && void 0 !== gS ? gS : null;
      const xS = SS.f6(HS, (0, bS.shaderPackTextures)());
      if (xS.errors.length > 0) return uS(SS, xS.errors, xS.offInStrict);
      const NS = await async function(SS) {
        if (!SS) return null;
        try {
          const HS = await (0, XS.x)(SS);
          return HS ? await HS.requestDevice() : null
        } catch (HS) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", HS), null
        }
      }(tS);
      if (!NS) return null;
      let qS = !1;
      NS.lost.then((() => {
        qS = !0
      }));
      try {
        const HS = await Promise.all(xS.validationModules.map((HS => async function(SS, HS, gS) {
          HS.pushErrorScope("validation");
          const tS = HS.createShaderModule({
              code: gS.code
            }),
            bS = HS.popErrorScope(),
            {
              messages: XS
            } = await tS.getCompilationInfo(),
            xS = XS.filter((SS => "error" === SS.type)).map((HS => SS.mapValidationMessage(gS, HS))),
            NS = await bS;
          NS && 0 === xS.length && xS.push({
            file: null,
            line: 0,
            message: NS.message,
            variants: [gS.key]
          });
          return xS
        }(SS, NS, HS))));
        return qS ? null : uS(SS, SS.VgS(HS.flat()), xS.offInStrict)
      } catch (IS) {
        return console.error("Couldn't validate the shader pack on WebGPU.", IS), null
      } finally {
        NS.destroy()
      }
    }
    async function qS(SS, HS) {
      var gS;
      if (!(0, tS.shaderPackNeedsCheck)(SS, HS) || (0, tS.isOtherApiVersion)(SS)) return SS;
      const bS = await NS(HS, (0, tS.storedShaderPackFiles)(SS));
      if (!bS) return SS;
      const XS = !1 === (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) && !SS.validation.fromRecheck,
        xS = {
          ...SS,
          validation: XS ? bS : {
            ...bS,
            fromRecheck: !0
          }
        };
      return await (0, tS.replaceShaderPack)(SS, xS, HS) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), xS
    }

    function uS(SS, HS, gS) {
      return {
        headerVersion: (0, tS.pageShaderPackValidationVersion)(SS),
        ok: 0 === HS.length,
        errors: HS.slice(0, xS),
        moreErrors: Math.max(0, HS.length - xS),
        offInStrict: gS
      }
    }
  },
  5221: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      h: () => tS,
      j: () => jS,
      m: () => fS,
      n: () => bS,
      r: () => XS,
      u: () => uS,
      v: () => IS,
      y: () => kS
    });
    const tS = 5;

    function bS(SS) {
      return SS === tS
    }

    function XS(SS) {
      return [...SS.features]
    }
    const xS = 262144,
      NS = 256,
      qS = 256;

    function uS(SS) {
      if ("object" !== typeof SS || null === SS || Array.isArray(SS)) return "The pack has no files.";
      const HS = [];
      for (const [gS, tS] of Object.entries(SS)) {
        if ("string" !== typeof tS) return `${gS} isn't text.`;
        HS.push({
          path: gS,
          source: tS
        })
      }
      return HS.sort(((SS, HS) => fS(SS.path, HS.path))),
        function(SS) {
          if (0 === SS.length) return "The pack has no .wgsl files.";
          if (SS.length > NS) return `The pack has more than ${NS} .wgsl files.`;
          const HS = new Set;
          for (const {
              path: gS
            }
            of SS) {
            const SS = aS(gS);
            if (null !== SS) return SS;
            if (HS.has(gS)) return `The pack has two files at ${gS}.`;
            HS.add(gS)
          }
          return kS(SS) > xS ? `The pack's .wgsl files are over ${xS/1024} KB in total.` : null
        }(HS) ?? HS
    }

    function IS(SS) {
      const HS = {};
      for (const gS of SS) HS[gS.path] = gS.source;
      return HS
    }

    function fS(SS, HS) {
      return SS < HS ? -1 : SS > HS ? 1 : 0
    }

    function kS(SS) {
      const HS = new TextEncoder;
      let gS = 0;
      for (const {
          source: tS
        }
        of SS) gS += HS.encode(tS).byteLength;
      return gS
    }

    function aS(SS) {
      if (!SS.toLowerCase().endsWith(".wgsl")) return `${SS} isn't a .wgsl file.`;
      if (SS.length > qS) return `A file path is over ${qS} characters.`;
      if (SS.includes("\\") || /[\u0000-\u001f]/.test(SS)) return `${SS} isn't a valid file path.`;
      return SS.split("/").some((SS => "" === SS || "." === SS || ".." === SS)) ? `${SS} isn't a valid file path.` : null
    }
    const KS = /^(.*)\[rot\[([1-4])$/;

    function jS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tS = new Map;
      HS.forEach(((SS, HS) => {
        let {
          numAnimStates: gS,
          animStartIdx: bS
        } = SS;
        for (let XS = 1; XS < gS; XS++) tS.set(bS + XS - 1, HS)
      }));
      const bS = Object.entries(SS),
        XS = new Map;
      for (const [jS, GS] of bS) {
        const SS = KS.exec(jS);
        "1" === SS?.[2] && XS.set(SS[1], GS + 1)
      }
      const xS = SS => {
          const HS = KS.exec(SS);
          return HS && XS.has(HS[1]) ? {
            root: HS[1],
            rotation: Number(HS[2]) - 1
          } : null
        },
        NS = new Set(bS.map((SS => {
          let [HS] = SS;
          return xS(HS)?.root ?? HS
        }))),
        qS = (SS, gS) => {
          const tS = SS.replace(/_?0$/, "");
          return (HS[gS]?.numAnimStates ?? 0) > 1 && !NS.has(tS) ? tS : SS
        },
        uS = new Map;
      for (const [KS, jS] of bS) uS.set(jS, qS(xS(KS)?.root ?? KS, jS));
      const IS = bS.reduce(((SS, HS) => {
          let [, gS] = HS;
          return Math.max(SS, gS + 1)
        }), 0),
        fS = Array.from({
          length: IS
        }, ((SS, HS) => ({
          id: HS + 1,
          rotation: 0
        }))),
        kS = new Map,
        aS = new Map;
      for (const [KS, jS] of bS) {
        const SS = xS(KS),
          HS = tS.get(jS);
        if (void 0 !== HS) {
          const gS = uS.get(HS);
          aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "frame"
          }), SS && !aS.has(SS.root) && aS.set(SS.root, {
            name: SS.root,
            texture: gS,
            kind: "frame"
          });
          continue
        }
        const gS = uS.get(jS),
          bS = SS?.root ?? KS;
        if (gS !== bS && aS.set(bS, {
            name: bS,
            texture: gS,
            kind: "frame"
          }), SS) {
          const HS = XS.get(SS.root);
          fS[jS] = {
            id: HS,
            rotation: SS.rotation
          }, kS.set(gS, HS), aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "rotation"
          })
        } else kS.set(gS, jS + 1)
      }
      for (const KS of kS.keys()) aS.delete(KS);
      for (const [KS, jS] of gS) {
        const SS = kS.get(jS);
        void 0 === SS || kS.has(KS) || (kS.set(KS, SS), aS.delete(KS))
      }
      return {
        named: [...kS].sort(((SS, HS) => {
          let [gS] = SS, [tS] = HS;
          return gS < tS ? -1 : gS > tS ? 1 : 0
        })).map((SS => {
          let [HS, gS] = SS;
          return {
            name: HS,
            id: gS
          }
        })),
        aliases: [...aS.values()],
        layers: fS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);