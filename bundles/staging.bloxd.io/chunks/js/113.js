export const id = 113;
export const ids = [113, 116, 136, 137];
export const modules = {
  4998: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC.j,
      f: () => wC,
      i: () => QC.q
    });
    var QC = ZC(5002);
    const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
      strict: CC,
      program: zC
    })))))
  },
  40318: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => WC,
      installListedShaderPack: () => FC
    });
    var QC = ZC(6560),
      wC = ZC(5002),
      bC = ZC(1149),
      nC = ZC(6609),
      fC = ZC(4998),
      oC = ZC(6658),
      qC = ZC(6651);
    async function FC(CC) {
      const zC = await (0, nC.loadPageShaderPackCompiler)();
      if (null === zC) return {
        kind: "failed",
        reason: "compiler"
      };
      const ZC = await WC(CC, zC);
      return "failed" === ZC.kind ? ZC : await (0, oC.saveShaderPack)(ZC.stored, zC) ? ((0, oC.markShaderPackChangePending)(), ZC) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function WC(CC, zC) {
      const ZC = await async function(CC) {
        let {
          packId: zC,
          sourceHash: ZC
        } = CC;
        try {
          const CC = await fetch(`${bC.clientSideServerUrls.s3Url}/${(0,QC.J)(zC,ZC)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!CC.ok) return console.error(`Failed to download shader pack ${zC} (${CC.status})`), null;
          const wC = await CC.json();
          return "object" !== typeof wC || null === wC ? (console.error(`Shader pack ${zC}'s source isn't an object`), null) : wC
        } catch (wC) {
          return console.error(`Failed to download shader pack ${zC}`, wC), null
        }
      }(CC);
      if (null === ZC) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, fC.i)(ZC.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const nC = (0, wC.s)(ZC.files);
      if ("string" === typeof nC) return console.error(`A listed shader pack breaks the pack rules: ${nC}`), {
        kind: "failed",
        reason: "invalid"
      };
      const FC = await (0, qC.c)(zC, nC);
      if (!1 === (null === FC || void 0 === FC ? void 0 : FC.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const WC = {
        manifest: {
          apiVersion: ZC.apiVersion,
          name: CC.name,
          author: CC.ownerName,
          description: CC.description || null,
          keepCircleShadows: !0 === ZC.keepCircleShadows
        },
        files: nC
      };
      return {
        kind: "loaded",
        stored: (0, oC.toStoredShaderPack)(WC, FC, {
          packId: CC.packId,
          sourceHash: CC.sourceHash
        })
      }
    }
  },
  6658: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      forgetShaderPackActiveHint: () => KC,
      isOtherApiVersion: () => iC,
      isShaderPackActive: () => AC,
      isShaderPackChangePending: () => IC,
      markShaderPackChangePending: () => JC,
      pageShaderPackValidationVersion: () => vC,
      reconcileStoredShaderPackHint: () => hC,
      removeShaderPack: () => RC,
      replaceShaderPack: () => pC,
      saveShaderPack: () => SC,
      shaderPackNeedsCheck: () => eC,
      storedPackOutcome: () => xC,
      storedShaderPackFiles: () => NC,
      toStoredShaderPack: () => WC
    });
    var QC = ZC(5002),
      wC = ZC(4998),
      bC = ZC(38),
      nC = ZC(3432),
      fC = ZC(6660),
      oC = ZC(6630);
    const qC = "shaderPackChangePending";
    let FC = null;

    function WC(CC, zC, ZC) {
      return {
        manifest: CC.manifest,
        files: (0, QC.w)(CC.files),
        validation: zC,
        ...ZC && {
          listing: ZC
        }
      }
    }

    function NC(CC) {
      return Object.keys(CC.files).map((zC => ({
        path: zC,
        source: CC.files[zC]
      })))
    }
    let MC = Promise.resolve();

    function gC(CC) {
      const zC = MC.then(CC);
      return MC = zC.catch((() => {})), zC
    }

    function SC(CC, zC) {
      return gC((() => PC(CC, zC)))
    }

    function pC(CC, zC, ZC) {
      return gC((async () => JSON.stringify(await (0, fC.e)()) === JSON.stringify(CC) && (null === zC ? (await GC(), !0) : PC(zC, ZC))))
    }
    async function PC(CC, zC) {
      const ZC = await bC.g.setItem(fC.c, CC);
      return ZC && YC(CC, zC), ZC
    }
    async function GC() {
      await bC.g.removeItem(fC.c), bC.i.removeItem(nC.b)
    }

    function RC() {
      return gC(GC)
    }

    function AC(CC, zC) {
      return "active" === xC(CC, zC).kind
    }

    function xC(CC, zC) {
      var ZC;
      return null === CC ? {
        kind: "none",
        reason: "nothingStored"
      } : iC(CC) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) || CC.validation.fromRecheck ? null === zC ? {
        kind: "none",
        reason: "noCompiler"
      } : eC(CC, zC) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : CC.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function JC() {
      bC.k.setItem(qC, performance.timeOrigin)
    }

    function IC() {
      return bC.k.getItem(qC) === performance.timeOrigin
    }

    function iC(CC) {
      return !(0, wC.i)(CC.manifest.apiVersion)
    }

    function vC(CC) {
      return FC ??= CC.Rm((0, oC.shaderPackTextures)()), FC
    }

    function eC(CC, zC) {
      var ZC;
      return (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.headerVersion) !== vC(zC)
    }

    function hC(CC) {
      return gC((async () => {
        YC(await (0, fC.e)(!0), CC)
      }))
    }

    function KC() {
      return gC((async () => {
        bC.i.removeItem(nC.b)
      }))
    }

    function YC(CC, zC) {
      AC(CC, zC) ? bC.i.setItem(nC.b, !0) : bC.i.removeItem(nC.b)
    }
  },
  6630: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadShaderPackTextures: () => nC,
      shaderPackTextures: () => fC
    });
    var QC = ZC(5002);
    let wC = null,
      bC = null;

    function nC() {
      return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zC,
          textureNameToIndex: ZC,
          textureAnimationData: bC
        } = CC;
        return wC ??= (0, QC.k)(ZC, bC, zC), wC
      })), bC
    }

    function fC() {
      if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return wC
    }
  },
  6651: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC,
      c: () => fC
    });
    var QC = ZC(6658),
      wC = ZC(6630),
      bC = ZC(94);
    const nC = 100;
    async function fC(CC, zC) {
      var ZC;
      let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZC = navigator.gpu) && void 0 !== ZC ? ZC : null;
      const nC = CC.K3(zC, (0, wC.shaderPackTextures)());
      if (nC.errors.length > 0) return qC(CC, nC.errors, nC.offInStrict);
      const fC = await async function(CC) {
        if (!CC) return null;
        try {
          const zC = await (0, bC.z)(CC);
          return zC ? await zC.requestDevice() : null
        } catch (zC) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zC), null
        }
      }(QC);
      if (!fC) return null;
      let oC = !1;
      fC.lost.then((() => {
        oC = !0
      }));
      try {
        const zC = await Promise.all(nC.validationModules.map((zC => async function(CC, zC, ZC) {
          zC.pushErrorScope("validation");
          const QC = zC.createShaderModule({
              code: ZC.code
            }),
            wC = zC.popErrorScope(),
            {
              messages: bC
            } = await QC.getCompilationInfo(),
            nC = bC.filter((CC => "error" === CC.type)).map((zC => CC.mapValidationMessage(ZC, zC))),
            fC = await wC;
          fC && 0 === nC.length && nC.push({
            file: null,
            line: 0,
            message: fC.message,
            variants: [ZC.key]
          });
          return nC
        }(CC, fC, zC))));
        return oC ? null : qC(CC, CC.rZC(zC.flat()), nC.offInStrict)
      } catch (FC) {
        return console.error("Couldn't validate the shader pack on WebGPU.", FC), null
      } finally {
        fC.destroy()
      }
    }
    async function oC(CC, zC) {
      var ZC;
      if (!(0, QC.shaderPackNeedsCheck)(CC, zC) || (0, QC.isOtherApiVersion)(CC)) return CC;
      const wC = await fC(zC, (0, QC.storedShaderPackFiles)(CC));
      if (!wC) return CC;
      const bC = !1 === (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) && !CC.validation.fromRecheck,
        nC = {
          ...CC,
          validation: bC ? wC : {
            ...wC,
            fromRecheck: !0
          }
        };
      return await (0, QC.replaceShaderPack)(CC, nC, zC) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), nC
    }

    function qC(CC, zC, ZC) {
      return {
        headerVersion: (0, QC.pageShaderPackValidationVersion)(CC),
        ok: 0 === zC.length,
        errors: zC.slice(0, nC),
        moreErrors: Math.max(0, zC.length - nC),
        offInStrict: ZC
      }
    }
  },
  5002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      g: () => nC,
      j: () => QC,
      k: () => SC,
      m: () => WC,
      q: () => wC,
      r: () => bC,
      s: () => qC,
      w: () => FC,
      y: () => NC
    });
    const QC = 5;

    function wC(CC) {
      return CC === QC
    }

    function bC(CC) {
      return [...CC.features]
    }
    const nC = 262144,
      fC = 256,
      oC = 256;

    function qC(CC) {
      if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
      const zC = [];
      for (const [ZC, QC] of Object.entries(CC)) {
        if ("string" !== typeof QC) return `${ZC} isn't text.`;
        zC.push({
          path: ZC,
          source: QC
        })
      }
      return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
        function(CC) {
          if (0 === CC.length) return "The pack has no .wgsl files.";
          if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
          const zC = new Set;
          for (const {
              path: ZC
            }
            of CC) {
            const CC = MC(ZC);
            if (null !== CC) return CC;
            if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
            zC.add(ZC)
          }
          return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
        }(zC) ?? zC
    }

    function FC(CC) {
      const zC = {};
      for (const ZC of CC) zC[ZC.path] = ZC.source;
      return zC
    }

    function WC(CC, zC) {
      return CC < zC ? -1 : CC > zC ? 1 : 0
    }

    function NC(CC) {
      const zC = new TextEncoder;
      let ZC = 0;
      for (const {
          source: QC
        }
        of CC) ZC += zC.encode(QC).byteLength;
      return ZC
    }

    function MC(CC) {
      if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
      if (CC.length > oC) return `A file path is over ${oC} characters.`;
      if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
      return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
    }
    const gC = /^(.*)\[rot\[([1-4])$/;

    function SC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QC = new Map;
      zC.forEach(((CC, zC) => {
        let {
          numAnimStates: ZC,
          animStartIdx: wC
        } = CC;
        for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
      }));
      const wC = Object.entries(CC),
        bC = new Map;
      for (const [SC, pC] of wC) {
        const CC = gC.exec(SC);
        "1" === CC?.[2] && bC.set(CC[1], pC + 1)
      }
      const nC = CC => {
          const zC = gC.exec(CC);
          return zC && bC.has(zC[1]) ? {
            root: zC[1],
            rotation: Number(zC[2]) - 1
          } : null
        },
        fC = new Set(wC.map((CC => {
          let [zC] = CC;
          return nC(zC)?.root ?? zC
        }))),
        oC = (CC, ZC) => {
          const QC = CC.replace(/_?0$/, "");
          return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
        },
        qC = new Map;
      for (const [gC, SC] of wC) qC.set(SC, oC(nC(gC)?.root ?? gC, SC));
      const FC = wC.reduce(((CC, zC) => {
          let [, ZC] = zC;
          return Math.max(CC, ZC + 1)
        }), 0),
        WC = Array.from({
          length: FC
        }, ((CC, zC) => ({
          id: zC + 1,
          rotation: 0
        }))),
        NC = new Map,
        MC = new Map;
      for (const [gC, SC] of wC) {
        const CC = nC(gC),
          zC = QC.get(SC);
        if (void 0 !== zC) {
          const ZC = qC.get(zC);
          MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "frame"
          }), CC && !MC.has(CC.root) && MC.set(CC.root, {
            name: CC.root,
            texture: ZC,
            kind: "frame"
          });
          continue
        }
        const ZC = qC.get(SC),
          wC = CC?.root ?? gC;
        if (ZC !== wC && MC.set(wC, {
            name: wC,
            texture: ZC,
            kind: "frame"
          }), CC) {
          const zC = bC.get(CC.root);
          WC[SC] = {
            id: zC,
            rotation: CC.rotation
          }, NC.set(ZC, zC), MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "rotation"
          })
        } else NC.set(ZC, SC + 1)
      }
      for (const gC of NC.keys()) MC.delete(gC);
      for (const [gC, SC] of ZC) {
        const CC = NC.get(SC);
        void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
      }
      return {
        named: [...NC].sort(((CC, zC) => {
          let [ZC] = CC, [QC] = zC;
          return ZC < QC ? -1 : ZC > QC ? 1 : 0
        })).map((CC => {
          let [zC, ZC] = CC;
          return {
            name: zC,
            id: ZC
          }
        })),
        aliases: [...MC.values()],
        layers: WC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);