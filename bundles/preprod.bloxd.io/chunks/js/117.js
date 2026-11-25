export const id = 117;
export const ids = [117, 120, 140, 141];
export const modules = {
  5394: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.i,
      c: () => qQ,
      g: () => wQ.n
    });
    var wQ = XQ(5396);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
      strict: QQ,
      program: WQ
    })))))
  },
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
  5396: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => zQ,
      i: () => wQ,
      l: () => BQ,
      m: () => JQ,
      n: () => qQ,
      r: () => TQ,
      t: () => PQ,
      w: () => gQ,
      z: () => rQ
    });
    const wQ = 5;

    function qQ(QQ) {
      return QQ === wQ
    }

    function TQ(QQ) {
      return [...QQ.features]
    }
    const zQ = 262144,
      sQ = 256,
      FQ = 256;

    function PQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const WQ = [];
      for (const [XQ, wQ] of Object.entries(QQ)) {
        if ("string" !== typeof wQ) return `${XQ} isn't text.`;
        WQ.push({
          path: XQ,
          source: wQ
        })
      }
      return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
          const WQ = new Set;
          for (const {
              path: XQ
            }
            of QQ) {
            const QQ = IQ(XQ);
            if (null !== QQ) return QQ;
            if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
            WQ.add(XQ)
          }
          return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
        }(WQ) ?? WQ
    }

    function gQ(QQ) {
      const WQ = {};
      for (const XQ of QQ) WQ[XQ.path] = XQ.source;
      return WQ
    }

    function JQ(QQ, WQ) {
      return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
    }

    function rQ(QQ) {
      const WQ = new TextEncoder;
      let XQ = 0;
      for (const {
          source: wQ
        }
        of QQ) XQ += WQ.encode(wQ).byteLength;
      return XQ
    }

    function IQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const jQ = /^(.*)\[rot\[([1-4])$/;

    function BQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wQ = new Map;
      WQ.forEach(((QQ, WQ) => {
        let {
          numAnimStates: XQ,
          animStartIdx: qQ
        } = QQ;
        for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
      }));
      const qQ = Object.entries(QQ),
        TQ = new Map;
      for (const [BQ, yQ] of qQ) {
        const QQ = jQ.exec(BQ);
        "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
      }
      const zQ = QQ => {
          const WQ = jQ.exec(QQ);
          return WQ && TQ.has(WQ[1]) ? {
            root: WQ[1],
            rotation: Number(WQ[2]) - 1
          } : null
        },
        sQ = new Set(qQ.map((QQ => {
          let [WQ] = QQ;
          return zQ(WQ)?.root ?? WQ
        }))),
        FQ = (QQ, XQ) => {
          const wQ = QQ.replace(/_?0$/, "");
          return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
        },
        PQ = new Map;
      for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
      const gQ = qQ.reduce(((QQ, WQ) => {
          let [, XQ] = WQ;
          return Math.max(QQ, XQ + 1)
        }), 0),
        JQ = Array.from({
          length: gQ
        }, ((QQ, WQ) => ({
          id: WQ + 1,
          rotation: 0
        }))),
        rQ = new Map,
        IQ = new Map;
      for (const [jQ, BQ] of qQ) {
        const QQ = zQ(jQ),
          WQ = wQ.get(BQ);
        if (void 0 !== WQ) {
          const XQ = PQ.get(WQ);
          IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "frame"
          }), QQ && !IQ.has(QQ.root) && IQ.set(QQ.root, {
            name: QQ.root,
            texture: XQ,
            kind: "frame"
          });
          continue
        }
        const XQ = PQ.get(BQ),
          qQ = QQ?.root ?? jQ;
        if (XQ !== qQ && IQ.set(qQ, {
            name: qQ,
            texture: XQ,
            kind: "frame"
          }), QQ) {
          const WQ = TQ.get(QQ.root);
          JQ[BQ] = {
            id: WQ,
            rotation: QQ.rotation
          }, rQ.set(XQ, WQ), IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "rotation"
          })
        } else rQ.set(XQ, BQ + 1)
      }
      for (const jQ of rQ.keys()) IQ.delete(jQ);
      for (const [jQ, BQ] of XQ) {
        const QQ = rQ.get(BQ);
        void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
      }
      return {
        named: [...rQ].sort(((QQ, WQ) => {
          let [XQ] = QQ, [wQ] = WQ;
          return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
        })).map((QQ => {
          let [WQ, XQ] = QQ;
          return {
            name: WQ,
            id: XQ
          }
        })),
        aliases: [...IQ.values()],
        layers: JQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);