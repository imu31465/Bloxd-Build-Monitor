export const id = 124;
export const ids = [124, 127, 128, 131];
export const modules = {
  6168: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.j,
      f: () => AY,
      j: () => FY.t
    });
    var FY = DY(6150);
    const AY = [!1, !0].flatMap((YY => ["terrain", "liquid", "model"].map((rY => ({
      strict: YY,
      program: rY
    })))))
  },
  39614: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY,
      installListedShaderPack: () => vY
    });
    var FY = DY(6112),
      AY = DY(6150),
      IY = DY(1222),
      RY = DY(6182),
      OY = DY(6168),
      gY = DY(6221),
      aY = DY(6212);
    async function vY(YY) {
      const rY = await (0, RY.loadPageShaderPackCompiler)();
      if (null === rY) return {
        kind: "failed",
        reason: "compiler"
      };
      const DY = await uY(YY, rY);
      return "failed" === DY.kind ? DY : await (0, gY.saveShaderPack)(DY.stored, rY) ? ((0, gY.markShaderPackChangePending)(), DY) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function uY(YY, rY) {
      const DY = await async function(YY) {
        let {
          packId: rY,
          sourceHash: DY
        } = YY;
        try {
          const YY = await fetch(`${IY.clientSideServerUrls.s3Url}/${(0,FY.P)(rY,DY)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!YY.ok) return console.error(`Failed to download shader pack ${rY} (${YY.status})`), null;
          const AY = await YY.json();
          return "object" !== typeof AY || null === AY ? (console.error(`Shader pack ${rY}'s source isn't an object`), null) : AY
        } catch (AY) {
          return console.error(`Failed to download shader pack ${rY}`, AY), null
        }
      }(YY);
      if (null === DY) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, OY.j)(DY.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const RY = (0, AY.w)(DY.files);
      if ("string" === typeof RY) return console.error(`A listed shader pack breaks the pack rules: ${RY}`), {
        kind: "failed",
        reason: "invalid"
      };
      const vY = await (0, aY.g)(rY, RY);
      if (!1 === (null === vY || void 0 === vY ? void 0 : vY.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const uY = {
        manifest: {
          apiVersion: DY.apiVersion,
          name: YY.name,
          author: YY.ownerName,
          description: YY.description || null,
          keepCircleShadows: !0 === DY.keepCircleShadows
        },
        files: RY
      };
      return {
        kind: "loaded",
        stored: (0, gY.toStoredShaderPack)(uY, vY, {
          packId: YY.packId,
          sourceHash: YY.sourceHash
        })
      }
    }
  },
  40280: (YY, rY, DY) => {
    DY.d(rY, {
      followListingUpdates: () => sY
    });
    var FY = DY(229),
      AY = DY(19),
      IY = DY(1471),
      RY = DY(1159),
      OY = DY(6182),
      gY = DY(6168),
      aY = DY(39614),
      vY = DY(6221);
    const uY = ["apiVersion", "invalid", "errors"];
    async function sY(YY, rY) {
      const DY = await RY.userContextManager.getCurrentUserContext(),
        sY = await IY.e.getShaderPackVersions(DY, [rY.packId]),
        iY = function(YY, rY, DY) {
          var FY;
          if (void 0 === DY || "unlisted" === DY.status) return {
            kind: "none"
          };
          if ("banned" === DY.status) return {
            kind: "remove"
          };
          if (!(0, gY.j)(DY.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: AY,
            name: IY,
            ownerName: RY,
            description: OY
          } = DY;
          return AY !== rY.sourceHash && AY !== rY.rejectedSourceHash ? {
            kind: "update",
            sourceHash: AY,
            name: IY,
            ownerName: RY,
            description: OY
          } : IY !== YY.manifest.name || RY !== YY.manifest.author || (OY || null) !== (null !== (FY = YY.manifest.description) && void 0 !== FY ? FY : null) ? {
            kind: "rename",
            name: IY,
            ownerName: RY,
            description: OY
          } : {
            kind: "none"
          }
        }(YY, rY, (0, FY.c)(sY, rY.packId));
      if ("update" === iY.kind && "landingPage" !== AY.b.get("gameState")) return !1;
      const yY = "update" === iY.kind || "rename" === iY.kind,
        QY = yY ? await (0, OY.loadPageShaderPackCompiler)() : null;
      if (yY && null === QY) return console.warn(`Didn't follow shader pack ${rY.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const oY = await async function(YY, rY, DY, FY) {
        switch (DY.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...YY, manifest: {
                ...YY.manifest,
                name: DY.name,
                author: DY.ownerName,
                description: DY.description || null
              }
            };
          case "update": {
            if (null === FY) return;
            const {
              sourceHash: AY,
              name: IY,
              ownerName: RY,
              description: OY
            } = DY, gY = await (0, aY.b)({
              packId: rY.packId,
              sourceHash: AY,
              name: IY,
              ownerName: RY,
              description: OY
            }, FY);
            if ("loaded" === gY.kind && null !== gY.stored.validation) return gY.stored;
            const vY = "failed" === gY.kind ? gY.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${rY.packId}: ${vY}`), "failed" === gY.kind && uY.includes(gY.reason) ? {
              ...YY,
              listing: {
                ...rY,
                rejectedSourceHash: AY
              }
            } : void 0
          }
        }
      }(YY, rY, iY, QY);
      return void 0 === oY || (await (0, vY.replaceShaderPack)(YY, oY, QY) ? (null !== oY && oY.files === YY.files || (0, vY.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6221: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      forgetShaderPackActiveHint: () => KY,
      isOtherApiVersion: () => eY,
      isShaderPackActive: () => VY,
      isShaderPackChangePending: () => TY,
      markShaderPackChangePending: () => lY,
      pageShaderPackValidationVersion: () => NY,
      reconcileStoredShaderPackHint: () => cY,
      removeShaderPack: () => mY,
      replaceShaderPack: () => oY,
      saveShaderPack: () => QY,
      shaderPackNeedsCheck: () => BY,
      storedPackOutcome: () => SY,
      storedShaderPackFiles: () => sY,
      toStoredShaderPack: () => uY
    });
    var FY = DY(6150),
      AY = DY(6168),
      IY = DY(40),
      RY = DY(3015),
      OY = DY(6230),
      gY = DY(6194);
    const aY = "shaderPackChangePending";
    let vY = null;

    function uY(YY, rY, DY) {
      return {
        manifest: YY.manifest,
        files: (0, FY.z)(YY.files),
        validation: rY,
        ...DY && {
          listing: DY
        }
      }
    }

    function sY(YY) {
      return Object.keys(YY.files).map((rY => ({
        path: rY,
        source: YY.files[rY]
      })))
    }
    let iY = Promise.resolve();

    function yY(YY) {
      const rY = iY.then(YY);
      return iY = rY.catch((() => {})), rY
    }

    function QY(YY, rY) {
      return yY((() => WY(YY, rY)))
    }

    function oY(YY, rY, DY) {
      return yY((async () => JSON.stringify(await (0, OY.e)()) === JSON.stringify(YY) && (null === rY ? (await EY(), !0) : WY(rY, DY))))
    }
    async function WY(YY, rY) {
      const DY = await IY.i.setItem(OY.c, YY);
      return DY && HY(YY, rY), DY
    }
    async function EY() {
      await IY.i.removeItem(OY.c), IY.m.removeItem(RY.b)
    }

    function mY() {
      return yY(EY)
    }

    function VY(YY, rY) {
      return "active" === SY(YY, rY).kind
    }

    function SY(YY, rY) {
      var DY;
      return null === YY ? {
        kind: "none",
        reason: "nothingStored"
      } : eY(YY) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.ok) || YY.validation.fromRecheck ? null === rY ? {
        kind: "none",
        reason: "noCompiler"
      } : BY(YY, rY) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : YY.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function lY() {
      IY.q.setItem(aY, performance.timeOrigin)
    }

    function TY() {
      return IY.q.getItem(aY) === performance.timeOrigin
    }

    function eY(YY) {
      return !(0, AY.j)(YY.manifest.apiVersion)
    }

    function NY(YY) {
      return vY ??= YY.aT((0, gY.shaderPackTextures)()), vY
    }

    function BY(YY, rY) {
      var DY;
      return (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.headerVersion) !== NY(rY)
    }

    function cY(YY) {
      return yY((async () => {
        HY(await (0, OY.e)(!0), YY)
      }))
    }

    function KY() {
      return yY((async () => {
        IY.m.removeItem(RY.b)
      }))
    }

    function HY(YY, rY) {
      VY(YY, rY) ? IY.m.setItem(RY.b, !0) : IY.m.removeItem(RY.b)
    }
  },
  6194: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      loadShaderPackTextures: () => RY,
      shaderPackTextures: () => OY
    });
    var FY = DY(6150);
    let AY = null,
      IY = null;

    function RY() {
      return IY ??= Promise.all([DY.e(69), DY.e(193)]).then((() => DY(39609))).then((YY => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rY,
          textureNameToIndex: DY,
          textureAnimationData: IY
        } = YY;
        return AY ??= (0, FY.n)(DY, IY, rY), AY
      })), IY
    }

    function OY() {
      if (null === AY) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return AY
    }
  },
  6212: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      g: () => OY
    });
    var FY = DY(6221),
      AY = DY(6194),
      IY = DY(121);
    const RY = 100;
    async function OY(YY, rY) {
      var DY;
      let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (DY = navigator.gpu) && void 0 !== DY ? DY : null;
      const RY = YY.I6(rY, (0, AY.shaderPackTextures)());
      if (RY.errors.length > 0) return aY(YY, RY.errors, RY.offInStrict);
      const OY = await async function(YY) {
        if (!YY) return null;
        try {
          const rY = await (0, IY.B)(YY);
          return rY ? await rY.requestDevice() : null
        } catch (rY) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", rY), null
        }
      }(FY);
      if (!OY) return null;
      let gY = !1;
      OY.lost.then((() => {
        gY = !0
      }));
      try {
        const rY = await Promise.all(RY.validationModules.map((rY => async function(YY, rY, DY) {
          rY.pushErrorScope("validation");
          const FY = rY.createShaderModule({
              code: DY.code
            }),
            AY = rY.popErrorScope(),
            {
              messages: IY
            } = await FY.getCompilationInfo(),
            RY = IY.filter((YY => "error" === YY.type)).map((rY => YY.mapValidationMessage(DY, rY))),
            OY = await AY;
          OY && 0 === RY.length && RY.push({
            file: null,
            line: 0,
            message: OY.message,
            variants: [DY.key]
          });
          return RY
        }(YY, OY, rY))));
        return gY ? null : aY(YY, YY.FDY(rY.flat()), RY.offInStrict)
      } catch (vY) {
        return console.error("Couldn't validate the shader pack on WebGPU.", vY), null
      } finally {
        OY.destroy()
      }
    }
    async function gY(YY, rY) {
      var DY;
      if (!(0, FY.shaderPackNeedsCheck)(YY, rY) || (0, FY.isOtherApiVersion)(YY)) return YY;
      const AY = await OY(rY, (0, FY.storedShaderPackFiles)(YY));
      if (!AY) return YY;
      const IY = !1 === (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.ok) && !YY.validation.fromRecheck,
        RY = {
          ...YY,
          validation: IY ? AY : {
            ...AY,
            fromRecheck: !0
          }
        };
      return await (0, FY.replaceShaderPack)(YY, RY, rY) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), RY
    }

    function aY(YY, rY, DY) {
      return {
        headerVersion: (0, FY.pageShaderPackValidationVersion)(YY),
        ok: 0 === rY.length,
        errors: rY.slice(0, RY),
        moreErrors: Math.max(0, rY.length - RY),
        offInStrict: DY
      }
    }
  },
  6112: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => IY,
      D: () => OY,
      G: () => RY,
      J: () => FY,
      K: () => sY,
      L: () => vY,
      P: () => mY,
      S: () => uY,
      V: () => aY,
      d: () => iY,
      e: () => QY,
      i: () => yY,
      m: () => EY,
      q: () => SY,
      t: () => gY,
      u: () => AY,
      x: () => VY
    });
    const FY = ["forest", "desert", "water", "night", "cave"];
    const AY = {
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
      IY = ["popular", "updated", "newest"],
      RY = 3,
      OY = 32,
      gY = 300;

    function aY(YY, rY) {
      return YY.slice(0, rY).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vY = 64,
      uY = 512,
      sY = 18e5;
    const iY = "Bloxdhub",
      yY = "https://bloxdhub.com/shaders";

    function QY(YY) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(YY)}`
    }
    const oY = "Screenshot generation failed.",
      WY = "Its screenshots couldn't be generated:";

    function EY(YY) {
      var rY;
      return YY === oY || null !== (rY = null === YY || void 0 === YY ? void 0 : YY.startsWith(WY)) && void 0 !== rY && rY
    }

    function mY(YY, rY) {
      return `shaderPacks/${YY}/${rY}.json`
    }

    function VY(YY, rY, DY, FY) {
      return null === rY.renderId ? SY(YY, rY.baselineVersion, DY, FY) : `${YY}/${function(YY,rY,DY,FY){return`shaderPacks/${YY}/${rY}/${DY}-${FY}.webp`}(rY.packId,rY.renderId,DY,FY)}`
    }

    function SY(YY, rY, DY, FY) {
      return `${YY}/${function(YY,rY,DY){return`shaderPacks/baseline/${YY}/${rY}-${DY}.webp`}(rY,DY,FY)}`
    }
  },
  6150: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => uY,
      b: () => RY,
      f: () => IY,
      j: () => FY,
      n: () => yY,
      r: () => vY,
      t: () => AY,
      w: () => gY,
      z: () => aY
    });
    const FY = 5;

    function AY(YY) {
      return YY === FY
    }
    const IY = 262144,
      RY = 256,
      OY = 256;

    function gY(YY) {
      if ("object" !== typeof YY || null === YY || Array.isArray(YY)) return "The pack has no files.";
      const rY = [];
      for (const [DY, FY] of Object.entries(YY)) {
        if ("string" !== typeof FY) return `${DY} isn't text.`;
        rY.push({
          path: DY,
          source: FY
        })
      }
      return rY.sort(((YY, rY) => vY(YY.path, rY.path))),
        function(YY) {
          if (0 === YY.length) return "The pack has no .wgsl files.";
          if (YY.length > RY) return `The pack has more than ${RY} .wgsl files.`;
          const rY = new Set;
          for (const {
              path: DY
            }
            of YY) {
            const YY = sY(DY);
            if (null !== YY) return YY;
            if (rY.has(DY)) return `The pack has two files at ${DY}.`;
            rY.add(DY)
          }
          return uY(YY) > IY ? `The pack's .wgsl files are over ${IY/1024} KB in total.` : null
        }(rY) ?? rY
    }

    function aY(YY) {
      const rY = {};
      for (const DY of YY) rY[DY.path] = DY.source;
      return rY
    }

    function vY(YY, rY) {
      return YY < rY ? -1 : YY > rY ? 1 : 0
    }

    function uY(YY) {
      const rY = new TextEncoder;
      let DY = 0;
      for (const {
          source: FY
        }
        of YY) DY += rY.encode(FY).byteLength;
      return DY
    }

    function sY(YY) {
      if (!YY.toLowerCase().endsWith(".wgsl")) return `${YY} isn't a .wgsl file.`;
      if (YY.length > OY) return `A file path is over ${OY} characters.`;
      if (YY.includes("\\") || /[\u0000-\u001f]/.test(YY)) return `${YY} isn't a valid file path.`;
      return YY.split("/").some((YY => "" === YY || "." === YY || ".." === YY)) ? `${YY} isn't a valid file path.` : null
    }
    const iY = /^(.*)\[rot\[([1-4])$/;

    function yY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const FY = new Map;
      rY.forEach(((YY, rY) => {
        let {
          numAnimStates: DY,
          animStartIdx: AY
        } = YY;
        for (let IY = 1; IY < DY; IY++) FY.set(AY + IY - 1, rY)
      }));
      const AY = Object.entries(YY),
        IY = new Map;
      for (const [QY, oY] of AY) {
        const YY = iY.exec(QY);
        "1" === YY?.[2] && IY.set(YY[1], oY + 1)
      }
      const RY = YY => {
          const rY = iY.exec(YY);
          return rY && IY.has(rY[1]) ? {
            root: rY[1],
            rotation: Number(rY[2]) - 1
          } : null
        },
        OY = new Set(AY.map((YY => {
          let [rY] = YY;
          return RY(rY)?.root ?? rY
        }))),
        gY = (YY, DY) => {
          const FY = YY.replace(/_?0$/, "");
          return (rY[DY]?.numAnimStates ?? 0) > 1 && !OY.has(FY) ? FY : YY
        },
        aY = new Map;
      for (const [iY, QY] of AY) aY.set(QY, gY(RY(iY)?.root ?? iY, QY));
      const vY = AY.reduce(((YY, rY) => {
          let [, DY] = rY;
          return Math.max(YY, DY + 1)
        }), 0),
        uY = Array.from({
          length: vY
        }, ((YY, rY) => ({
          id: rY + 1,
          rotation: 0
        }))),
        sY = new Map,
        yY = new Map;
      for (const [iY, QY] of AY) {
        const YY = RY(iY),
          rY = FY.get(QY);
        if (void 0 !== rY) {
          const DY = aY.get(rY);
          yY.set(iY, {
            name: iY,
            texture: DY,
            kind: "frame"
          }), YY && !yY.has(YY.root) && yY.set(YY.root, {
            name: YY.root,
            texture: DY,
            kind: "frame"
          });
          continue
        }
        const DY = aY.get(QY),
          AY = YY?.root ?? iY;
        if (DY !== AY && yY.set(AY, {
            name: AY,
            texture: DY,
            kind: "frame"
          }), YY) {
          const rY = IY.get(YY.root);
          uY[QY] = {
            id: rY,
            rotation: YY.rotation
          }, sY.set(DY, rY), yY.set(iY, {
            name: iY,
            texture: DY,
            kind: "rotation"
          })
        } else sY.set(DY, QY + 1)
      }
      for (const iY of sY.keys()) yY.delete(iY);
      for (const [iY, QY] of DY) {
        const YY = sY.get(QY);
        void 0 === YY || sY.has(iY) || (sY.set(iY, YY), yY.delete(iY))
      }
      return {
        named: [...sY].sort(((YY, rY) => {
          let [DY] = YY, [FY] = rY;
          return DY < FY ? -1 : DY > FY ? 1 : 0
        })).map((YY => {
          let [rY, DY] = YY;
          return {
            name: rY,
            id: DY
          }
        })),
        aliases: [...yY.values()],
        layers: uY
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);