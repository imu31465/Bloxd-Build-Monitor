export const id = 136;
export const ids = [136, 139, 159, 160];
export const modules = {
  6080: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.f,
      g: () => tR,
      i: () => yR.o
    });
    var yR = GR(6084);
    const tR = [!1, !0].flatMap((RR => ["terrain", "liquid", "model"].map((JR => ({
      strict: RR,
      program: JR
    })))))
  },
  42033: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => KR,
      installListedShaderPack: () => VR
    });
    var yR = GR(7702),
      tR = GR(6084),
      uR = GR(1282),
      ZR = GR(7756),
      qR = GR(6080),
      iR = GR(7800),
      fR = GR(7792);
    async function VR(RR) {
      const JR = await (0, ZR.loadPageShaderPackCompiler)();
      if (null === JR) return {
        kind: "failed",
        reason: "compiler"
      };
      const GR = await KR(RR, JR);
      return "failed" === GR.kind ? GR : await (0, iR.saveShaderPack)(GR.stored, JR) ? ((0, iR.markShaderPackChangePending)(), GR) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function KR(RR, JR) {
      const GR = await async function(RR) {
        let {
          packId: JR,
          sourceHash: GR
        } = RR;
        try {
          const RR = await fetch(`${uR.clientSideServerUrls.s3Url}/${(0,yR.I)(JR,GR)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!RR.ok) return console.error(`Failed to download shader pack ${JR} (${RR.status})`), null;
          const tR = await RR.json();
          return "object" !== typeof tR || null === tR ? (console.error(`Shader pack ${JR}'s source isn't an object`), null) : tR
        } catch (tR) {
          return console.error(`Failed to download shader pack ${JR}`, tR), null
        }
      }(RR);
      if (null === GR) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, qR.i)(GR.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const ZR = (0, tR.t)(GR.files);
      if ("string" === typeof ZR) return console.error(`A listed shader pack breaks the pack rules: ${ZR}`), {
        kind: "failed",
        reason: "invalid"
      };
      const VR = await (0, fR.h)(JR, ZR);
      if (!1 === (null === VR || void 0 === VR ? void 0 : VR.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const KR = {
        manifest: {
          apiVersion: GR.apiVersion,
          name: RR.name,
          author: RR.ownerName,
          description: RR.description || null,
          keepCircleShadows: !0 === GR.keepCircleShadows
        },
        files: ZR
      };
      return {
        kind: "loaded",
        stored: (0, iR.toStoredShaderPack)(KR, VR, {
          packId: RR.packId,
          sourceHash: RR.sourceHash
        })
      }
    }
  },
  7800: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      forgetShaderPackActiveHint: () => bR,
      isOtherApiVersion: () => BR,
      isShaderPackActive: () => AR,
      isShaderPackChangePending: () => MR,
      markShaderPackChangePending: () => XR,
      pageShaderPackValidationVersion: () => lR,
      reconcileStoredShaderPackHint: () => gR,
      removeShaderPack: () => WR,
      replaceShaderPack: () => LR,
      saveShaderPack: () => aR,
      shaderPackNeedsCheck: () => pR,
      storedPackOutcome: () => CR,
      storedShaderPackFiles: () => wR,
      toStoredShaderPack: () => KR
    });
    var yR = GR(6084),
      tR = GR(6080),
      uR = GR(46),
      ZR = GR(4776),
      qR = GR(7802),
      iR = GR(7773);
    const fR = "shaderPackChangePending";
    let VR = null;

    function KR(RR, JR, GR) {
      return {
        manifest: RR.manifest,
        files: (0, yR.x)(RR.files),
        validation: JR,
        ...GR && {
          listing: GR
        }
      }
    }

    function wR(RR) {
      return Object.keys(RR.files).map((JR => ({
        path: JR,
        source: RR.files[JR]
      })))
    }
    let rR = Promise.resolve();

    function eR(RR) {
      const JR = rR.then(RR);
      return rR = JR.catch((() => {})), JR
    }

    function aR(RR, JR) {
      return eR((() => nR(RR, JR)))
    }

    function LR(RR, JR, GR) {
      return eR((async () => JSON.stringify(await (0, qR.d)()) === JSON.stringify(RR) && (null === JR ? (await UR(), !0) : nR(JR, GR))))
    }
    async function nR(RR, JR) {
      const GR = await uR.g.setItem(qR.c, RR);
      return GR && vR(RR, JR), GR
    }
    async function UR() {
      await uR.g.removeItem(qR.c), uR.i.removeItem(ZR.e)
    }

    function WR() {
      return eR(UR)
    }

    function AR(RR, JR) {
      return "active" === CR(RR, JR).kind
    }

    function CR(RR, JR) {
      var GR;
      return null === RR ? {
        kind: "none",
        reason: "nothingStored"
      } : BR(RR) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.ok) || RR.validation.fromRecheck ? null === JR ? {
        kind: "none",
        reason: "noCompiler"
      } : pR(RR, JR) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : RR.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XR() {
      uR.k.setItem(fR, performance.timeOrigin)
    }

    function MR() {
      return uR.k.getItem(fR) === performance.timeOrigin
    }

    function BR(RR) {
      return !(0, tR.i)(RR.manifest.apiVersion)
    }

    function lR(RR) {
      return VR ??= RR.iH((0, iR.shaderPackTextures)()), VR
    }

    function pR(RR, JR) {
      var GR;
      return (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.headerVersion) !== lR(JR)
    }

    function gR(RR) {
      return eR((async () => {
        vR(await (0, qR.d)(!0), RR)
      }))
    }

    function bR() {
      return eR((async () => {
        uR.i.removeItem(ZR.e)
      }))
    }

    function vR(RR, JR) {
      AR(RR, JR) ? uR.i.setItem(ZR.e, !0) : uR.i.removeItem(ZR.e)
    }
  },
  7773: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      loadShaderPackTextures: () => ZR,
      shaderPackTextures: () => qR
    });
    var yR = GR(6084);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= Promise.all([GR.e(85), GR.e(126)]).then((() => GR(42031))).then((RR => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: JR,
          textureNameToIndex: GR,
          textureAnimationData: uR
        } = RR;
        return tR ??= (0, yR.j)(GR, uR, JR), tR
      })), uR
    }

    function qR() {
      if (null === tR) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tR
    }
  },
  7792: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      h: () => qR
    });
    var yR = GR(7800),
      tR = GR(7773),
      uR = GR(123);
    const ZR = 100;
    async function qR(RR, JR) {
      var GR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GR = navigator.gpu) && void 0 !== GR ? GR : null;
      const ZR = RR.UJR(JR, (0, tR.shaderPackTextures)());
      if (ZR.errors.length > 0) return fR(RR, ZR.errors, ZR.offInStrict);
      const qR = await async function(RR) {
        if (!RR) return null;
        try {
          const JR = await (0, uR.y)(RR);
          return JR ? await JR.requestDevice() : null
        } catch (JR) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", JR), null
        }
      }(yR);
      if (!qR) return null;
      let iR = !1;
      qR.lost.then((() => {
        iR = !0
      }));
      try {
        const JR = await Promise.all(ZR.validationModules.map((JR => async function(RR, JR, GR) {
          JR.pushErrorScope("validation");
          const yR = JR.createShaderModule({
              code: GR.code
            }),
            tR = JR.popErrorScope(),
            {
              messages: uR
            } = await yR.getCompilationInfo(),
            ZR = uR.filter((RR => "error" === RR.type)).map((JR => RR.mapValidationMessage(GR, JR))),
            qR = await tR;
          qR && 0 === ZR.length && ZR.push({
            file: null,
            line: 0,
            message: qR.message,
            variants: [GR.key]
          });
          return ZR
        }(RR, qR, JR))));
        return iR ? null : fR(RR, RR.ZtR(JR.flat()), ZR.offInStrict)
      } catch (VR) {
        return console.error("Couldn't validate the shader pack on WebGPU.", VR), null
      } finally {
        qR.destroy()
      }
    }
    async function iR(RR, JR) {
      var GR;
      if (!(0, yR.shaderPackNeedsCheck)(RR, JR) || (0, yR.isOtherApiVersion)(RR)) return RR;
      const tR = await qR(JR, (0, yR.storedShaderPackFiles)(RR));
      if (!tR) return RR;
      const uR = !1 === (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.ok) && !RR.validation.fromRecheck,
        ZR = {
          ...RR,
          validation: uR ? tR : {
            ...tR,
            fromRecheck: !0
          }
        };
      return await (0, yR.replaceShaderPack)(RR, ZR, JR) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), ZR
    }

    function fR(RR, JR, GR) {
      return {
        headerVersion: (0, yR.pageShaderPackValidationVersion)(RR),
        ok: 0 === JR.length,
        errors: JR.slice(0, ZR),
        moreErrors: Math.max(0, JR.length - ZR),
        offInStrict: GR
      }
    }
  },
  6084: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      e: () => ZR,
      f: () => yR,
      j: () => aR,
      l: () => KR,
      o: () => tR,
      r: () => uR,
      t: () => fR,
      x: () => VR,
      z: () => wR
    });
    const yR = 5;

    function tR(RR) {
      return RR === yR
    }

    function uR(RR) {
      return [...RR.features]
    }
    const ZR = 262144,
      qR = 256,
      iR = 256;

    function fR(RR) {
      if ("object" !== typeof RR || null === RR || Array.isArray(RR)) return "The pack has no files.";
      const JR = [];
      for (const [GR, yR] of Object.entries(RR)) {
        if ("string" !== typeof yR) return `${GR} isn't text.`;
        JR.push({
          path: GR,
          source: yR
        })
      }
      return JR.sort(((RR, JR) => KR(RR.path, JR.path))),
        function(RR) {
          if (0 === RR.length) return "The pack has no .wgsl files.";
          if (RR.length > qR) return `The pack has more than ${qR} .wgsl files.`;
          const JR = new Set;
          for (const {
              path: GR
            }
            of RR) {
            const RR = rR(GR);
            if (null !== RR) return RR;
            if (JR.has(GR)) return `The pack has two files at ${GR}.`;
            JR.add(GR)
          }
          return wR(RR) > ZR ? `The pack's .wgsl files are over ${ZR/1024} KB in total.` : null
        }(JR) ?? JR
    }

    function VR(RR) {
      const JR = {};
      for (const GR of RR) JR[GR.path] = GR.source;
      return JR
    }

    function KR(RR, JR) {
      return RR < JR ? -1 : RR > JR ? 1 : 0
    }

    function wR(RR) {
      const JR = new TextEncoder;
      let GR = 0;
      for (const {
          source: yR
        }
        of RR) GR += JR.encode(yR).byteLength;
      return GR
    }

    function rR(RR) {
      if (!RR.toLowerCase().endsWith(".wgsl")) return `${RR} isn't a .wgsl file.`;
      if (RR.length > iR) return `A file path is over ${iR} characters.`;
      if (RR.includes("\\") || /[\u0000-\u001f]/.test(RR)) return `${RR} isn't a valid file path.`;
      return RR.split("/").some((RR => "" === RR || "." === RR || ".." === RR)) ? `${RR} isn't a valid file path.` : null
    }
    const eR = /^(.*)\[rot\[([1-4])$/;

    function aR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const yR = new Map;
      JR.forEach(((RR, JR) => {
        let {
          numAnimStates: GR,
          animStartIdx: tR
        } = RR;
        for (let uR = 1; uR < GR; uR++) yR.set(tR + uR - 1, JR)
      }));
      const tR = Object.entries(RR),
        uR = new Map;
      for (const [aR, LR] of tR) {
        const RR = eR.exec(aR);
        "1" === RR?.[2] && uR.set(RR[1], LR + 1)
      }
      const ZR = RR => {
          const JR = eR.exec(RR);
          return JR && uR.has(JR[1]) ? {
            root: JR[1],
            rotation: Number(JR[2]) - 1
          } : null
        },
        qR = new Set(tR.map((RR => {
          let [JR] = RR;
          return ZR(JR)?.root ?? JR
        }))),
        iR = (RR, GR) => {
          const yR = RR.replace(/_?0$/, "");
          return (JR[GR]?.numAnimStates ?? 0) > 1 && !qR.has(yR) ? yR : RR
        },
        fR = new Map;
      for (const [eR, aR] of tR) fR.set(aR, iR(ZR(eR)?.root ?? eR, aR));
      const VR = tR.reduce(((RR, JR) => {
          let [, GR] = JR;
          return Math.max(RR, GR + 1)
        }), 0),
        KR = Array.from({
          length: VR
        }, ((RR, JR) => ({
          id: JR + 1,
          rotation: 0
        }))),
        wR = new Map,
        rR = new Map;
      for (const [eR, aR] of tR) {
        const RR = ZR(eR),
          JR = yR.get(aR);
        if (void 0 !== JR) {
          const GR = fR.get(JR);
          rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "frame"
          }), RR && !rR.has(RR.root) && rR.set(RR.root, {
            name: RR.root,
            texture: GR,
            kind: "frame"
          });
          continue
        }
        const GR = fR.get(aR),
          tR = RR?.root ?? eR;
        if (GR !== tR && rR.set(tR, {
            name: tR,
            texture: GR,
            kind: "frame"
          }), RR) {
          const JR = uR.get(RR.root);
          KR[aR] = {
            id: JR,
            rotation: RR.rotation
          }, wR.set(GR, JR), rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "rotation"
          })
        } else wR.set(GR, aR + 1)
      }
      for (const eR of wR.keys()) rR.delete(eR);
      for (const [eR, aR] of GR) {
        const RR = wR.get(aR);
        void 0 === RR || wR.has(eR) || (wR.set(eR, RR), rR.delete(eR))
      }
      return {
        named: [...wR].sort(((RR, JR) => {
          let [GR] = RR, [yR] = JR;
          return GR < yR ? -1 : GR > yR ? 1 : 0
        })).map((RR => {
          let [JR, GR] = RR;
          return {
            name: JR,
            id: GR
          }
        })),
        aliases: [...rR.values()],
        layers: KR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);