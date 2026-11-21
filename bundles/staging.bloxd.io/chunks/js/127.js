export const id = 127;
export const ids = [127, 128, 131];
export const modules = {
  6429: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ.h,
      i: () => qQ,
      m: () => LQ.m
    });
    var LQ = wQ(6414);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
      strict: QQ,
      program: FQ
    })))))
  },
  39921: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ,
      installListedShaderPack: () => uQ
    });
    var LQ = wQ(6374),
      qQ = wQ(6414),
      oQ = wQ(1213),
      DQ = wQ(6438),
      kQ = wQ(6429),
      vQ = wQ(6481),
      mQ = wQ(6476);
    async function uQ(QQ) {
      const FQ = await (0, DQ.loadPageShaderPackCompiler)();
      if (null === FQ) return {
        kind: "failed",
        reason: "compiler"
      };
      const wQ = await HQ(QQ, FQ);
      return "failed" === wQ.kind ? wQ : await (0, vQ.saveShaderPack)(wQ.stored, FQ) ? ((0, vQ.markShaderPackChangePending)(), wQ) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function HQ(QQ, FQ) {
      const wQ = await async function(QQ) {
        let {
          packId: FQ,
          sourceHash: wQ
        } = QQ;
        try {
          const QQ = await fetch(`${oQ.clientSideServerUrls.s3Url}/${(0,LQ.J)(FQ,wQ)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!QQ.ok) return console.error(`Failed to download shader pack ${FQ} (${QQ.status})`), null;
          const qQ = await QQ.json();
          return "object" !== typeof qQ || null === qQ ? (console.error(`Shader pack ${FQ}'s source isn't an object`), null) : qQ
        } catch (qQ) {
          return console.error(`Failed to download shader pack ${FQ}`, qQ), null
        }
      }(QQ);
      if (null === wQ) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, kQ.m)(wQ.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const DQ = (0, qQ.p)(wQ.files);
      if ("string" === typeof DQ) return console.error(`A listed shader pack breaks the pack rules: ${DQ}`), {
        kind: "failed",
        reason: "invalid"
      };
      const uQ = await (0, mQ.f)(FQ, DQ);
      if (!1 === (null === uQ || void 0 === uQ ? void 0 : uQ.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const HQ = {
        manifest: {
          apiVersion: wQ.apiVersion,
          name: QQ.name,
          author: QQ.ownerName,
          description: QQ.description || null,
          keepCircleShadows: !0 === wQ.keepCircleShadows
        },
        files: DQ
      };
      return {
        kind: "loaded",
        stored: (0, vQ.toStoredShaderPack)(HQ, uQ, {
          packId: QQ.packId,
          sourceHash: QQ.sourceHash
        })
      }
    }
  },
  6481: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      forgetShaderPackActiveHint: () => sQ,
      isOtherApiVersion: () => iQ,
      isShaderPackActive: () => pQ,
      isShaderPackChangePending: () => SQ,
      markShaderPackChangePending: () => CQ,
      pageShaderPackValidationVersion: () => WQ,
      reconcileStoredShaderPackHint: () => OQ,
      removeShaderPack: () => GQ,
      replaceShaderPack: () => tQ,
      saveShaderPack: () => AQ,
      shaderPackNeedsCheck: () => RQ,
      storedPackOutcome: () => cQ,
      storedShaderPackFiles: () => bQ,
      toStoredShaderPack: () => HQ
    });
    var LQ = wQ(6414),
      qQ = wQ(6429),
      oQ = wQ(27),
      DQ = wQ(3318),
      kQ = wQ(6485),
      vQ = wQ(6460);
    const mQ = "shaderPackChangePending";
    let uQ = null;

    function HQ(QQ, FQ, wQ) {
      return {
        manifest: QQ.manifest,
        files: (0, LQ.r)(QQ.files),
        validation: FQ,
        ...wQ && {
          listing: wQ
        }
      }
    }

    function bQ(QQ) {
      return Object.keys(QQ.files).map((FQ => ({
        path: FQ,
        source: QQ.files[FQ]
      })))
    }
    let YQ = Promise.resolve();

    function xQ(QQ) {
      const FQ = YQ.then(QQ);
      return YQ = FQ.catch((() => {})), FQ
    }

    function AQ(QQ, FQ) {
      return xQ((() => eQ(QQ, FQ)))
    }

    function tQ(QQ, FQ, wQ) {
      return xQ((async () => JSON.stringify(await (0, kQ.f)()) === JSON.stringify(QQ) && (null === FQ ? (await MQ(), !0) : eQ(FQ, wQ))))
    }
    async function eQ(QQ, FQ) {
      const wQ = await oQ.h.setItem(kQ.d, QQ);
      return wQ && rQ(QQ, FQ), wQ
    }
    async function MQ() {
      await oQ.h.removeItem(kQ.d), oQ.i.removeItem(DQ.d)
    }

    function GQ() {
      return xQ(MQ)
    }

    function pQ(QQ, FQ) {
      return "active" === cQ(QQ, FQ).kind
    }

    function cQ(QQ, FQ) {
      var wQ;
      return null === QQ ? {
        kind: "none",
        reason: "nothingStored"
      } : iQ(QQ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) || QQ.validation.fromRecheck ? null === FQ ? {
        kind: "none",
        reason: "noCompiler"
      } : RQ(QQ, FQ) ? {
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

    function CQ() {
      oQ.m.setItem(mQ, performance.timeOrigin)
    }

    function SQ() {
      return oQ.m.getItem(mQ) === performance.timeOrigin
    }

    function iQ(QQ) {
      return !(0, qQ.m)(QQ.manifest.apiVersion)
    }

    function WQ(QQ) {
      return uQ ??= QQ.kN((0, vQ.shaderPackTextures)()), uQ
    }

    function RQ(QQ, FQ) {
      var wQ;
      return (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.headerVersion) !== WQ(FQ)
    }

    function OQ(QQ) {
      return xQ((async () => {
        rQ(await (0, kQ.f)(!0), QQ)
      }))
    }

    function sQ() {
      return xQ((async () => {
        oQ.i.removeItem(DQ.d)
      }))
    }

    function rQ(QQ, FQ) {
      pQ(QQ, FQ) ? oQ.i.setItem(DQ.d, !0) : oQ.i.removeItem(DQ.d)
    }
  },
  6460: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      loadShaderPackTextures: () => DQ,
      shaderPackTextures: () => kQ
    });
    var LQ = wQ(6414);
    let qQ = null,
      oQ = null;

    function DQ() {
      return oQ ??= Promise.all([wQ.e(70), wQ.e(199)]).then((() => wQ(39913))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: FQ,
          textureNameToIndex: wQ,
          textureAnimationData: oQ
        } = QQ;
        return qQ ??= (0, LQ.i)(wQ, oQ, FQ), qQ
      })), oQ
    }

    function kQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  },
  6476: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      f: () => kQ
    });
    var LQ = wQ(6481),
      qQ = wQ(6460),
      oQ = wQ(118);
    const DQ = 100;
    async function kQ(QQ, FQ) {
      var wQ;
      let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wQ = navigator.gpu) && void 0 !== wQ ? wQ : null;
      const DQ = QQ.tQQ(FQ, (0, qQ.shaderPackTextures)());
      if (DQ.errors.length > 0) return mQ(QQ, DQ.errors, DQ.offInStrict);
      const kQ = await async function(QQ) {
        if (!QQ) return null;
        try {
          const FQ = await (0, oQ.w)(QQ);
          return FQ ? await FQ.requestDevice() : null
        } catch (FQ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", FQ), null
        }
      }(LQ);
      if (!kQ) return null;
      let vQ = !1;
      kQ.lost.then((() => {
        vQ = !0
      }));
      try {
        const FQ = await Promise.all(DQ.validationModules.map((FQ => async function(QQ, FQ, wQ) {
          FQ.pushErrorScope("validation");
          const LQ = FQ.createShaderModule({
              code: wQ.code
            }),
            qQ = FQ.popErrorScope(),
            {
              messages: oQ
            } = await LQ.getCompilationInfo(),
            DQ = oQ.filter((QQ => "error" === QQ.type)).map((FQ => QQ.mapValidationMessage(wQ, FQ))),
            kQ = await qQ;
          kQ && 0 === DQ.length && DQ.push({
            file: null,
            line: 0,
            message: kQ.message,
            variants: [wQ.key]
          });
          return DQ
        }(QQ, kQ, FQ))));
        return vQ ? null : mQ(QQ, QQ.uLQ(FQ.flat()), DQ.offInStrict)
      } catch (uQ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", uQ), null
      } finally {
        kQ.destroy()
      }
    }
    async function vQ(QQ, FQ) {
      var wQ;
      if (!(0, LQ.shaderPackNeedsCheck)(QQ, FQ) || (0, LQ.isOtherApiVersion)(QQ)) return QQ;
      const qQ = await kQ(FQ, (0, LQ.storedShaderPackFiles)(QQ));
      if (!qQ) return QQ;
      const oQ = !1 === (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) && !QQ.validation.fromRecheck,
        DQ = {
          ...QQ,
          validation: oQ ? qQ : {
            ...qQ,
            fromRecheck: !0
          }
        };
      return await (0, LQ.replaceShaderPack)(QQ, DQ, FQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), DQ
    }

    function mQ(QQ, FQ, wQ) {
      return {
        headerVersion: (0, LQ.pageShaderPackValidationVersion)(QQ),
        ok: 0 === FQ.length,
        errors: FQ.slice(0, DQ),
        moreErrors: Math.max(0, FQ.length - DQ),
        offInStrict: wQ
      }
    }
  },
  6414: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => oQ,
      h: () => LQ,
      i: () => xQ,
      k: () => uQ,
      m: () => qQ,
      p: () => vQ,
      r: () => mQ,
      v: () => HQ
    });
    const LQ = 5;

    function qQ(QQ) {
      return QQ === LQ
    }
    const oQ = 262144,
      DQ = 256,
      kQ = 256;

    function vQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const FQ = [];
      for (const [wQ, LQ] of Object.entries(QQ)) {
        if ("string" !== typeof LQ) return `${wQ} isn't text.`;
        FQ.push({
          path: wQ,
          source: LQ
        })
      }
      return FQ.sort(((QQ, FQ) => uQ(QQ.path, FQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > DQ) return `The pack has more than ${DQ} .wgsl files.`;
          const FQ = new Set;
          for (const {
              path: wQ
            }
            of QQ) {
            const QQ = bQ(wQ);
            if (null !== QQ) return QQ;
            if (FQ.has(wQ)) return `The pack has two files at ${wQ}.`;
            FQ.add(wQ)
          }
          return HQ(QQ) > oQ ? `The pack's .wgsl files are over ${oQ/1024} KB in total.` : null
        }(FQ) ?? FQ
    }

    function mQ(QQ) {
      const FQ = {};
      for (const wQ of QQ) FQ[wQ.path] = wQ.source;
      return FQ
    }

    function uQ(QQ, FQ) {
      return QQ < FQ ? -1 : QQ > FQ ? 1 : 0
    }

    function HQ(QQ) {
      const FQ = new TextEncoder;
      let wQ = 0;
      for (const {
          source: LQ
        }
        of QQ) wQ += FQ.encode(LQ).byteLength;
      return wQ
    }

    function bQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > kQ) return `A file path is over ${kQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const YQ = /^(.*)\[rot\[([1-4])$/;

    function xQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const LQ = new Map;
      FQ.forEach(((QQ, FQ) => {
        let {
          numAnimStates: wQ,
          animStartIdx: qQ
        } = QQ;
        for (let oQ = 1; oQ < wQ; oQ++) LQ.set(qQ + oQ - 1, FQ)
      }));
      const qQ = Object.entries(QQ),
        oQ = new Map;
      for (const [AQ, tQ] of qQ) {
        const QQ = YQ.exec(AQ);
        "1" === QQ?.[2] && oQ.set(QQ[1], tQ + 1)
      }
      const DQ = QQ => {
          const FQ = YQ.exec(QQ);
          return FQ && oQ.has(FQ[1]) ? {
            root: FQ[1],
            rotation: Number(FQ[2]) - 1
          } : null
        },
        kQ = new Set(qQ.map((QQ => {
          let [FQ] = QQ;
          return DQ(FQ)?.root ?? FQ
        }))),
        vQ = (QQ, wQ) => {
          const LQ = QQ.replace(/_?0$/, "");
          return (FQ[wQ]?.numAnimStates ?? 0) > 1 && !kQ.has(LQ) ? LQ : QQ
        },
        mQ = new Map;
      for (const [YQ, AQ] of qQ) mQ.set(AQ, vQ(DQ(YQ)?.root ?? YQ, AQ));
      const uQ = qQ.reduce(((QQ, FQ) => {
          let [, wQ] = FQ;
          return Math.max(QQ, wQ + 1)
        }), 0),
        HQ = Array.from({
          length: uQ
        }, ((QQ, FQ) => ({
          id: FQ + 1,
          rotation: 0
        }))),
        bQ = new Map,
        xQ = new Map;
      for (const [YQ, AQ] of qQ) {
        const QQ = DQ(YQ),
          FQ = LQ.get(AQ);
        if (void 0 !== FQ) {
          const wQ = mQ.get(FQ);
          xQ.set(YQ, {
            name: YQ,
            texture: wQ,
            kind: "frame"
          }), QQ && !xQ.has(QQ.root) && xQ.set(QQ.root, {
            name: QQ.root,
            texture: wQ,
            kind: "frame"
          });
          continue
        }
        const wQ = mQ.get(AQ),
          qQ = QQ?.root ?? YQ;
        if (wQ !== qQ && xQ.set(qQ, {
            name: qQ,
            texture: wQ,
            kind: "frame"
          }), QQ) {
          const FQ = oQ.get(QQ.root);
          HQ[AQ] = {
            id: FQ,
            rotation: QQ.rotation
          }, bQ.set(wQ, FQ), xQ.set(YQ, {
            name: YQ,
            texture: wQ,
            kind: "rotation"
          })
        } else bQ.set(wQ, AQ + 1)
      }
      for (const YQ of bQ.keys()) xQ.delete(YQ);
      for (const [YQ, AQ] of wQ) {
        const QQ = bQ.get(AQ);
        void 0 === QQ || bQ.has(YQ) || (bQ.set(YQ, QQ), xQ.delete(YQ))
      }
      return {
        named: [...bQ].sort(((QQ, FQ) => {
          let [wQ] = QQ, [LQ] = FQ;
          return wQ < LQ ? -1 : wQ > LQ ? 1 : 0
        })).map((QQ => {
          let [FQ, wQ] = QQ;
          return {
            name: FQ,
            id: wQ
          }
        })),
        aliases: [...xQ.values()],
        layers: HQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);