export const id = 121;
export const ids = [120, 121, 123];
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
  6004: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    var FJ = ZJ(29);
    const UJ = "shaderPack";
    async function eJ() {
      var JJ;
      let cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (JJ = await FJ.g.getItem(UJ, cJ)) && void 0 !== JJ ? JJ : null
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