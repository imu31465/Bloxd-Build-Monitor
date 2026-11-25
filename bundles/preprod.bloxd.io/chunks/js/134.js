export const id = 134;
export const ids = [134, 140, 141];
export const modules = {
  40743: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ,
      installListedShaderPack: () => gQ
    });
    var wQ = XQ(6952),
      qQ = XQ(5396),
      TQ = XQ(1238),
      zQ = XQ(6984),
      sQ = XQ(5394),
      FQ = XQ(7024),
      PQ = XQ(7018);
    async function gQ(QQ) {
      const WQ = await (0, zQ.loadPageShaderPackCompiler)();
      if (null === WQ) return {
        kind: "failed",
        reason: "compiler"
      };
      const XQ = await JQ(QQ, WQ);
      return "failed" === XQ.kind ? XQ : await (0, FQ.saveShaderPack)(XQ.stored, WQ) ? ((0, FQ.markShaderPackChangePending)(), XQ) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function JQ(QQ, WQ) {
      const XQ = await async function(QQ) {
        let {
          packId: WQ,
          sourceHash: XQ
        } = QQ;
        try {
          const QQ = await fetch(`${TQ.clientSideServerUrls.s3Url}/${(0,wQ.J)(WQ,XQ)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!QQ.ok) return console.error(`Failed to download shader pack ${WQ} (${QQ.status})`), null;
          const qQ = await QQ.json();
          return "object" !== typeof qQ || null === qQ ? (console.error(`Shader pack ${WQ}'s source isn't an object`), null) : qQ
        } catch (qQ) {
          return console.error(`Failed to download shader pack ${WQ}`, qQ), null
        }
      }(QQ);
      if (null === XQ) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, sQ.g)(XQ.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const zQ = (0, qQ.t)(XQ.files);
      if ("string" === typeof zQ) return console.error(`A listed shader pack breaks the pack rules: ${zQ}`), {
        kind: "failed",
        reason: "invalid"
      };
      const gQ = await (0, PQ.g)(WQ, zQ);
      if (!1 === (null === gQ || void 0 === gQ ? void 0 : gQ.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const JQ = {
        manifest: {
          apiVersion: XQ.apiVersion,
          name: QQ.name,
          author: QQ.ownerName,
          description: QQ.description || null,
          keepCircleShadows: !0 === XQ.keepCircleShadows
        },
        files: zQ
      };
      return {
        kind: "loaded",
        stored: (0, FQ.toStoredShaderPack)(JQ, gQ, {
          packId: QQ.packId,
          sourceHash: QQ.sourceHash
        })
      }
    }
  },
  41527: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      followListingUpdates: () => rQ
    });
    var wQ = XQ(243),
      qQ = XQ(26),
      TQ = XQ(1548),
      zQ = XQ(1165),
      sQ = XQ(6984),
      FQ = XQ(5394),
      PQ = XQ(40743),
      gQ = XQ(7024);
    const JQ = ["apiVersion", "invalid", "errors"];
    async function rQ(QQ, WQ) {
      const XQ = await zQ.userContextManager.getCurrentUserContext(),
        rQ = await TQ.e.getShaderPackVersions(XQ, [WQ.packId]),
        IQ = function(QQ, WQ, XQ) {
          var wQ;
          if (void 0 === XQ || "unlisted" === XQ.status) return {
            kind: "none"
          };
          if ("banned" === XQ.status) return {
            kind: "remove"
          };
          if (!(0, FQ.g)(XQ.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: qQ,
            name: TQ,
            ownerName: zQ,
            description: sQ
          } = XQ;
          return qQ !== WQ.sourceHash && qQ !== WQ.rejectedSourceHash ? {
            kind: "update",
            sourceHash: qQ,
            name: TQ,
            ownerName: zQ,
            description: sQ
          } : TQ !== QQ.manifest.name || zQ !== QQ.manifest.author || (sQ || null) !== (null !== (wQ = QQ.manifest.description) && void 0 !== wQ ? wQ : null) ? {
            kind: "rename",
            name: TQ,
            ownerName: zQ,
            description: sQ
          } : {
            kind: "none"
          }
        }(QQ, WQ, (0, wQ.e)(rQ, WQ.packId));
      if ("update" === IQ.kind && "landingPage" !== qQ.b.get("gameState")) return !1;
      const jQ = "update" === IQ.kind || "rename" === IQ.kind,
        BQ = jQ ? await (0, sQ.loadPageShaderPackCompiler)() : null;
      if (jQ && null === BQ) return console.warn(`Didn't follow shader pack ${WQ.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const yQ = await async function(QQ, WQ, XQ, wQ) {
        switch (XQ.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...QQ, manifest: {
                ...QQ.manifest,
                name: XQ.name,
                author: XQ.ownerName,
                description: XQ.description || null
              }
            };
          case "update": {
            if (null === wQ) return;
            const {
              sourceHash: qQ,
              name: TQ,
              ownerName: zQ,
              description: sQ
            } = XQ, FQ = await (0, PQ.b)({
              packId: WQ.packId,
              sourceHash: qQ,
              name: TQ,
              ownerName: zQ,
              description: sQ
            }, wQ);
            if ("loaded" === FQ.kind && null !== FQ.stored.validation) return FQ.stored;
            const gQ = "failed" === FQ.kind ? FQ.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${WQ.packId}: ${gQ}`), "failed" === FQ.kind && JQ.includes(FQ.reason) ? {
              ...QQ,
              listing: {
                ...WQ,
                rejectedSourceHash: qQ
              }
            } : void 0
          }
        }
      }(QQ, WQ, IQ, BQ);
      return void 0 === yQ || (await (0, gQ.replaceShaderPack)(QQ, yQ, BQ) ? (null !== yQ && yQ.files === QQ.files || (0, gQ.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7024: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      forgetShaderPackActiveHint: () => hQ,
      isOtherApiVersion: () => dQ,
      isShaderPackActive: () => GQ,
      isShaderPackChangePending: () => vQ,
      markShaderPackChangePending: () => bQ,
      pageShaderPackValidationVersion: () => HQ,
      reconcileStoredShaderPackHint: () => lQ,
      removeShaderPack: () => pQ,
      replaceShaderPack: () => yQ,
      saveShaderPack: () => BQ,
      shaderPackNeedsCheck: () => aQ,
      storedPackOutcome: () => UQ,
      storedShaderPackFiles: () => rQ,
      toStoredShaderPack: () => JQ
    });
    var wQ = XQ(5396),
      qQ = XQ(5394),
      TQ = XQ(43),
      zQ = XQ(3716),
      sQ = XQ(7026),
      FQ = XQ(7002);
    const PQ = "shaderPackChangePending";
    let gQ = null;

    function JQ(QQ, WQ, XQ) {
      return {
        manifest: QQ.manifest,
        files: (0, wQ.w)(QQ.files),
        validation: WQ,
        ...XQ && {
          listing: XQ
        }
      }
    }

    function rQ(QQ) {
      return Object.keys(QQ.files).map((WQ => ({
        path: WQ,
        source: QQ.files[WQ]
      })))
    }
    let IQ = Promise.resolve();

    function jQ(QQ) {
      const WQ = IQ.then(QQ);
      return IQ = WQ.catch((() => {})), WQ
    }

    function BQ(QQ, WQ) {
      return jQ((() => VQ(QQ, WQ)))
    }

    function yQ(QQ, WQ, XQ) {
      return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
    }
    async function VQ(QQ, WQ) {
      const XQ = await TQ.f.setItem(sQ.b, QQ);
      return XQ && iQ(QQ, WQ), XQ
    }
    async function DQ() {
      await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
    }

    function pQ() {
      return jQ(DQ)
    }

    function GQ(QQ, WQ) {
      return "active" === UQ(QQ, WQ).kind
    }

    function UQ(QQ, WQ) {
      var XQ;
      return null === QQ ? {
        kind: "none",
        reason: "nothingStored"
      } : dQ(QQ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
        kind: "none",
        reason: "noCompiler"
      } : aQ(QQ, WQ) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : QQ.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function bQ() {
      TQ.m.setItem(PQ, performance.timeOrigin)
    }

    function vQ() {
      return TQ.m.getItem(PQ) === performance.timeOrigin
    }

    function dQ(QQ) {
      return !(0, qQ.g)(QQ.manifest.apiVersion)
    }

    function HQ(QQ) {
      return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
    }

    function aQ(QQ, WQ) {
      var XQ;
      return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
    }

    function lQ(QQ) {
      return jQ((async () => {
        iQ(await (0, sQ.f)(!0), QQ)
      }))
    }

    function hQ() {
      return jQ((async () => {
        TQ.i.removeItem(zQ.c)
      }))
    }

    function iQ(QQ, WQ) {
      GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
    }
  },
  7002: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadShaderPackTextures: () => zQ,
      shaderPackTextures: () => sQ
    });
    var wQ = XQ(5396);
    let qQ = null,
      TQ = null;

    function zQ() {
      return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: WQ,
          textureNameToIndex: XQ,
          textureAnimationData: TQ
        } = QQ;
        return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
      })), TQ
    }

    function sQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  },
  7018: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      g: () => sQ
    });
    var wQ = XQ(7024),
      qQ = XQ(7002),
      TQ = XQ(134);
    const zQ = 100;
    async function sQ(QQ, WQ) {
      var XQ;
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (XQ = navigator.gpu) && void 0 !== XQ ? XQ : null;
      const zQ = QQ.JQQ(WQ, (0, qQ.shaderPackTextures)());
      if (zQ.errors.length > 0) return PQ(QQ, zQ.errors, zQ.offInStrict);
      const sQ = await async function(QQ) {
        if (!QQ) return null;
        try {
          const WQ = await (0, TQ.q)(QQ);
          return WQ ? await WQ.requestDevice() : null
        } catch (WQ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", WQ), null
        }
      }(wQ);
      if (!sQ) return null;
      let FQ = !1;
      sQ.lost.then((() => {
        FQ = !0
      }));
      try {
        const WQ = await Promise.all(zQ.validationModules.map((WQ => async function(QQ, WQ, XQ) {
          WQ.pushErrorScope("validation");
          const wQ = WQ.createShaderModule({
              code: XQ.code
            }),
            qQ = WQ.popErrorScope(),
            {
              messages: TQ
            } = await wQ.getCompilationInfo(),
            zQ = TQ.filter((QQ => "error" === QQ.type)).map((WQ => QQ.mapValidationMessage(XQ, WQ))),
            sQ = await qQ;
          sQ && 0 === zQ.length && zQ.push({
            file: null,
            line: 0,
            message: sQ.message,
            variants: [XQ.key]
          });
          return zQ
        }(QQ, sQ, WQ))));
        return FQ ? null : PQ(QQ, QQ.gwQ(WQ.flat()), zQ.offInStrict)
      } catch (gQ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", gQ), null
      } finally {
        sQ.destroy()
      }
    }
    async function FQ(QQ, WQ) {
      var XQ;
      if (!(0, wQ.shaderPackNeedsCheck)(QQ, WQ) || (0, wQ.isOtherApiVersion)(QQ)) return QQ;
      const qQ = await sQ(WQ, (0, wQ.storedShaderPackFiles)(QQ));
      if (!qQ) return QQ;
      const TQ = !1 === (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) && !QQ.validation.fromRecheck,
        zQ = {
          ...QQ,
          validation: TQ ? qQ : {
            ...qQ,
            fromRecheck: !0
          }
        };
      return await (0, wQ.replaceShaderPack)(QQ, zQ, WQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), zQ
    }

    function PQ(QQ, WQ, XQ) {
      return {
        headerVersion: (0, wQ.pageShaderPackValidationVersion)(QQ),
        ok: 0 === WQ.length,
        errors: WQ.slice(0, zQ),
        moreErrors: Math.max(0, WQ.length - zQ),
        offInStrict: XQ
      }
    }
  },
  6952: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => wQ,
      E: () => rQ,
      G: () => gQ,
      J: () => GQ,
      K: () => JQ,
      M: () => PQ,
      c: () => jQ,
      f: () => yQ,
      i: () => BQ,
      j: () => IQ,
      l: () => pQ,
      m: () => bQ,
      o: () => FQ,
      p: () => qQ,
      r: () => UQ,
      u: () => TQ,
      w: () => sQ,
      z: () => zQ
    });
    const wQ = ["forest", "desert", "water", "night", "cave"];
    const qQ = {
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
      TQ = ["popular", "updated", "newest"],
      zQ = 3,
      sQ = 32,
      FQ = 300;

    function PQ(QQ, WQ) {
      return QQ.slice(0, WQ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const gQ = 64,
      JQ = 512,
      rQ = 18e5;

    function IQ(QQ) {
      const WQ = QQ,
        XQ = null === WQ || void 0 === WQ ? void 0 : WQ.files;
      return "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.apiVersion) && "string" === typeof WQ.name && (null === WQ.author || "string" === typeof WQ.author) && (void 0 === WQ.keepCircleShadows || "boolean" === typeof WQ.keepCircleShadows) && "object" === typeof XQ && null !== XQ && Object.values(XQ).every((QQ => "string" === typeof QQ))
    }
    const jQ = "Bloxdhub",
      BQ = "https://bloxdhub.com/shaders";

    function yQ(QQ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
    }
    const VQ = "Screenshot generation failed.",
      DQ = "Its screenshots couldn't be generated:";

    function pQ(QQ) {
      var WQ;
      return QQ === VQ || null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(DQ)) && void 0 !== WQ && WQ
    }

    function GQ(QQ, WQ) {
      return `shaderPacks/${QQ}/${WQ}.json`
    }

    function UQ(QQ, WQ, XQ, wQ) {
      return null === WQ.renderId ? bQ(QQ, WQ.baselineVersion, XQ, wQ) : `${QQ}/${function(QQ,WQ,XQ,wQ){return`shaderPacks/${QQ}/${WQ}/${XQ}-${wQ}.webp`}(WQ.packId,WQ.renderId,XQ,wQ)}`
    }

    function bQ(QQ, WQ, XQ, wQ) {
      return `${QQ}/${function(QQ,WQ,XQ){return`shaderPacks/baseline/${QQ}/${WQ}-${XQ}.webp`}(WQ,XQ,wQ)}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);