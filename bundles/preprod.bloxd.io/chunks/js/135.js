export const id = 135;
export const ids = [135];
export const modules = {
  41999: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      startHarnessShaderPack: () => JQ
    });
    var wQ = XQ(6952),
      qQ = XQ(5396),
      TQ = XQ(7015),
      zQ = XQ(6984),
      sQ = XQ(5394),
      FQ = XQ(39494),
      PQ = XQ(7002),
      gQ = XQ(7018);
    async function JQ(QQ, WQ) {
      const {
        stored: XQ,
        info: JQ
      } = await async function(QQ, WQ) {
        const XQ = await async function(QQ) {
          const WQ = await fetch(QQ);
          if (!WQ.ok) throw new Error(`Couldn't fetch the shader pack at ${QQ}: HTTP ${WQ.status}`);
          const XQ = await WQ.json();
          if (!(0, wQ.j)(XQ)) throw new Error(`The shader pack at ${QQ} isn't a shader pack listing source`);
          return XQ
        }(QQ);
        if (!(0, sQ.g)(XQ.apiVersion)) throw new Error(`The pack is for shader pack API version ${XQ.apiVersion}; this build runs version ${sQ.b}`);
        const FQ = {
            manifest: {
              apiVersion: XQ.apiVersion,
              name: XQ.name,
              author: XQ.author,
              description: null,
              keepCircleShadows: !0 === XQ.keepCircleShadows
            },
            files: XQ.files,
            validation: null
          },
          JQ = {
            url: QQ,
            name: XQ.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          rQ = (0, qQ.t)(XQ.files);
        if ("string" === typeof rQ) return JQ.errors = [{
          file: null,
          line: 0,
          message: rQ
        }], {
          stored: FQ,
          info: JQ
        };
        const IQ = await (0, zQ.loadPageShaderPackCompiler)();
        if (!IQ) throw new Error("The shader pack compiler couldn't load");
        const jQ = await (0, gQ.g)(IQ, rQ);
        if (!jQ) throw new Error("No WebGPU device could validate the shader pack");
        if (JQ.errors = [...jQ.errors], jQ.ok) {
          const QQ = IQ.JQQ(rQ, (0, PQ.shaderPackTextures)());
          JQ.features = (0, qQ.r)(QQ), JQ.runsInMode = (0, TQ.i)(QQ.variants, WQ)
        }
        return {
          stored: {
            ...FQ,
            validation: jQ
          },
          info: JQ
        }
      }(QQ, WQ), [rQ] = JQ.errors;
      if (rQ) {
        const QQ = null === rQ.file ? "" : `${rQ.file}:${rQ.line}: `,
          WQ = JQ.errors.length > 1 ? ` (${JQ.errors.length-1} more)` : "";
        return {
          info: JQ,
          problem: `The shader pack doesn't compile: ${QQ}${rQ.message}${WQ}`
        }
      }
      return JQ.runsInMode ? ((0, FQ.setHarnessUrlShaderPack)(XQ, WQ), {
        info: JQ,
        problem: null
      }) : {
        info: JQ,
        problem: `The shader pack runs nothing in ${WQ} mode`
      }
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