export const id = 115;
export const ids = [115, 118, 138, 139];
export const modules = {
  5115: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.f,
      g: () => nB,
      k: () => QB.n
    });
    var QB = zB(5120);
    const nB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((jB => ({
      strict: BB,
      program: jB
    })))))
  },
  40590: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB,
      installListedShaderPack: () => aB
    });
    var QB = zB(6523),
      nB = zB(5120),
      dB = zB(1244),
      IB = zB(6574),
      NB = zB(5115),
      uB = zB(6601),
      UB = zB(6598);
    async function aB(BB) {
      const jB = await (0, IB.loadPageShaderPackCompiler)();
      if (null === jB) return {
        kind: "failed",
        reason: "compiler"
      };
      const zB = await pB(BB, jB);
      return "failed" === zB.kind ? zB : await (0, uB.saveShaderPack)(zB.stored, jB) ? ((0, uB.markShaderPackChangePending)(), zB) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function pB(BB, jB) {
      const zB = await async function(BB) {
        let {
          packId: jB,
          sourceHash: zB
        } = BB;
        try {
          const BB = await fetch(`${dB.clientSideServerUrls.s3Url}/${(0,QB.P)(jB,zB)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!BB.ok) return console.error(`Failed to download shader pack ${jB} (${BB.status})`), null;
          const nB = await BB.json();
          return "object" !== typeof nB || null === nB ? (console.error(`Shader pack ${jB}'s source isn't an object`), null) : nB
        } catch (nB) {
          return console.error(`Failed to download shader pack ${jB}`, nB), null
        }
      }(BB);
      if (null === zB) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, NB.k)(zB.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const IB = (0, nB.s)(zB.files);
      if ("string" === typeof IB) return console.error(`A listed shader pack breaks the pack rules: ${IB}`), {
        kind: "failed",
        reason: "invalid"
      };
      const aB = await (0, UB.f)(jB, IB);
      if (!1 === (null === aB || void 0 === aB ? void 0 : aB.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const pB = {
        manifest: {
          apiVersion: zB.apiVersion,
          name: BB.name,
          author: BB.ownerName,
          description: BB.description || null,
          keepCircleShadows: !0 === zB.keepCircleShadows
        },
        files: IB
      };
      return {
        kind: "loaded",
        stored: (0, uB.toStoredShaderPack)(pB, aB, {
          packId: BB.packId,
          sourceHash: BB.sourceHash
        })
      }
    }
  },
  6601: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      forgetShaderPackActiveHint: () => oB,
      isOtherApiVersion: () => EB,
      isShaderPackActive: () => gB,
      isShaderPackChangePending: () => MB,
      markShaderPackChangePending: () => SB,
      pageShaderPackValidationVersion: () => iB,
      reconcileStoredShaderPackHint: () => fB,
      removeShaderPack: () => LB,
      replaceShaderPack: () => yB,
      saveShaderPack: () => mB,
      shaderPackNeedsCheck: () => qB,
      storedPackOutcome: () => tB,
      storedShaderPackFiles: () => rB,
      toStoredShaderPack: () => pB
    });
    var QB = zB(5120),
      nB = zB(5115),
      dB = zB(41),
      IB = zB(3572),
      NB = zB(6606),
      uB = zB(6585);
    const UB = "shaderPackChangePending";
    let aB = null;

    function pB(BB, jB, zB) {
      return {
        manifest: BB.manifest,
        files: (0, QB.w)(BB.files),
        validation: jB,
        ...zB && {
          listing: zB
        }
      }
    }

    function rB(BB) {
      return Object.keys(BB.files).map((jB => ({
        path: jB,
        source: BB.files[jB]
      })))
    }
    let sB = Promise.resolve();

    function JB(BB) {
      const jB = sB.then(BB);
      return sB = jB.catch((() => {})), jB
    }

    function mB(BB, jB) {
      return JB((() => kB(BB, jB)))
    }

    function yB(BB, jB, zB) {
      return JB((async () => JSON.stringify(await (0, NB.h)()) === JSON.stringify(BB) && (null === jB ? (await GB(), !0) : kB(jB, zB))))
    }
    async function kB(BB, jB) {
      const zB = await dB.g.setItem(NB.d, BB);
      return zB && HB(BB, jB), zB
    }
    async function GB() {
      await dB.g.removeItem(NB.d), dB.j.removeItem(IB.e)
    }

    function LB() {
      return JB(GB)
    }

    function gB(BB, jB) {
      return "active" === tB(BB, jB).kind
    }

    function tB(BB, jB) {
      var zB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : EB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.ok) || BB.validation.fromRecheck ? null === jB ? {
        kind: "none",
        reason: "noCompiler"
      } : qB(BB, jB) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : BB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function SB() {
      dB.k.setItem(UB, performance.timeOrigin)
    }

    function MB() {
      return dB.k.getItem(UB) === performance.timeOrigin
    }

    function EB(BB) {
      return !(0, nB.k)(BB.manifest.apiVersion)
    }

    function iB(BB) {
      return aB ??= BB.ZF((0, uB.shaderPackTextures)()), aB
    }

    function qB(BB, jB) {
      var zB;
      return (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.headerVersion) !== iB(jB)
    }

    function fB(BB) {
      return JB((async () => {
        HB(await (0, NB.h)(!0), BB)
      }))
    }

    function oB() {
      return JB((async () => {
        dB.j.removeItem(IB.e)
      }))
    }

    function HB(BB, jB) {
      gB(BB, jB) ? dB.j.setItem(IB.e, !0) : dB.j.removeItem(IB.e)
    }
  },
  6585: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      loadShaderPackTextures: () => IB,
      shaderPackTextures: () => NB
    });
    var QB = zB(5120);
    let nB = null,
      dB = null;

    function IB() {
      return dB ??= Promise.all([zB.e(73), zB.e(190)]).then((() => zB(40588))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: jB,
          textureNameToIndex: zB,
          textureAnimationData: dB
        } = BB;
        return nB ??= (0, QB.j)(zB, dB, jB), nB
      })), dB
    }

    function NB() {
      if (null === nB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return nB
    }
  },
  6598: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      f: () => NB
    });
    var QB = zB(6601),
      nB = zB(6585),
      dB = zB(128);
    const IB = 100;
    async function NB(BB, jB) {
      var zB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zB = navigator.gpu) && void 0 !== zB ? zB : null;
      const IB = BB.O4(jB, (0, nB.shaderPackTextures)());
      if (IB.errors.length > 0) return UB(BB, IB.errors, IB.offInStrict);
      const NB = await async function(BB) {
        if (!BB) return null;
        try {
          const jB = await (0, dB.x)(BB);
          return jB ? await jB.requestDevice() : null
        } catch (jB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", jB), null
        }
      }(QB);
      if (!NB) return null;
      let uB = !1;
      NB.lost.then((() => {
        uB = !0
      }));
      try {
        const jB = await Promise.all(IB.validationModules.map((jB => async function(BB, jB, zB) {
          jB.pushErrorScope("validation");
          const QB = jB.createShaderModule({
              code: zB.code
            }),
            nB = jB.popErrorScope(),
            {
              messages: dB
            } = await QB.getCompilationInfo(),
            IB = dB.filter((BB => "error" === BB.type)).map((jB => BB.mapValidationMessage(zB, jB))),
            NB = await nB;
          NB && 0 === IB.length && IB.push({
            file: null,
            line: 0,
            message: NB.message,
            variants: [zB.key]
          });
          return IB
        }(BB, NB, jB))));
        return uB ? null : UB(BB, BB.lzB(jB.flat()), IB.offInStrict)
      } catch (aB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", aB), null
      } finally {
        NB.destroy()
      }
    }
    async function uB(BB, jB) {
      var zB;
      if (!(0, QB.shaderPackNeedsCheck)(BB, jB) || (0, QB.isOtherApiVersion)(BB)) return BB;
      const nB = await NB(jB, (0, QB.storedShaderPackFiles)(BB));
      if (!nB) return BB;
      const dB = !1 === (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.ok) && !BB.validation.fromRecheck,
        IB = {
          ...BB,
          validation: dB ? nB : {
            ...nB,
            fromRecheck: !0
          }
        };
      return await (0, QB.replaceShaderPack)(BB, IB, jB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), IB
    }

    function UB(BB, jB, zB) {
      return {
        headerVersion: (0, QB.pageShaderPackValidationVersion)(BB),
        ok: 0 === jB.length,
        errors: jB.slice(0, IB),
        moreErrors: Math.max(0, jB.length - IB),
        offInStrict: zB
      }
    }
  },
  5120: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      e: () => IB,
      f: () => QB,
      j: () => mB,
      m: () => pB,
      n: () => nB,
      o: () => dB,
      s: () => UB,
      w: () => aB,
      z: () => rB
    });
    const QB = 5;

    function nB(BB) {
      return BB === QB
    }

    function dB(BB) {
      return [...BB.features]
    }
    const IB = 262144,
      NB = 256,
      uB = 256;

    function UB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const jB = [];
      for (const [zB, QB] of Object.entries(BB)) {
        if ("string" !== typeof QB) return `${zB} isn't text.`;
        jB.push({
          path: zB,
          source: QB
        })
      }
      return jB.sort(((BB, jB) => pB(BB.path, jB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > NB) return `The pack has more than ${NB} .wgsl files.`;
          const jB = new Set;
          for (const {
              path: zB
            }
            of BB) {
            const BB = sB(zB);
            if (null !== BB) return BB;
            if (jB.has(zB)) return `The pack has two files at ${zB}.`;
            jB.add(zB)
          }
          return rB(BB) > IB ? `The pack's .wgsl files are over ${IB/1024} KB in total.` : null
        }(jB) ?? jB
    }

    function aB(BB) {
      const jB = {};
      for (const zB of BB) jB[zB.path] = zB.source;
      return jB
    }

    function pB(BB, jB) {
      return BB < jB ? -1 : BB > jB ? 1 : 0
    }

    function rB(BB) {
      const jB = new TextEncoder;
      let zB = 0;
      for (const {
          source: QB
        }
        of BB) zB += jB.encode(QB).byteLength;
      return zB
    }

    function sB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > uB) return `A file path is over ${uB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const JB = /^(.*)\[rot\[([1-4])$/;

    function mB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QB = new Map;
      jB.forEach(((BB, jB) => {
        let {
          numAnimStates: zB,
          animStartIdx: nB
        } = BB;
        for (let dB = 1; dB < zB; dB++) QB.set(nB + dB - 1, jB)
      }));
      const nB = Object.entries(BB),
        dB = new Map;
      for (const [mB, yB] of nB) {
        const BB = JB.exec(mB);
        "1" === BB?.[2] && dB.set(BB[1], yB + 1)
      }
      const IB = BB => {
          const jB = JB.exec(BB);
          return jB && dB.has(jB[1]) ? {
            root: jB[1],
            rotation: Number(jB[2]) - 1
          } : null
        },
        NB = new Set(nB.map((BB => {
          let [jB] = BB;
          return IB(jB)?.root ?? jB
        }))),
        uB = (BB, zB) => {
          const QB = BB.replace(/_?0$/, "");
          return (jB[zB]?.numAnimStates ?? 0) > 1 && !NB.has(QB) ? QB : BB
        },
        UB = new Map;
      for (const [JB, mB] of nB) UB.set(mB, uB(IB(JB)?.root ?? JB, mB));
      const aB = nB.reduce(((BB, jB) => {
          let [, zB] = jB;
          return Math.max(BB, zB + 1)
        }), 0),
        pB = Array.from({
          length: aB
        }, ((BB, jB) => ({
          id: jB + 1,
          rotation: 0
        }))),
        rB = new Map,
        sB = new Map;
      for (const [JB, mB] of nB) {
        const BB = IB(JB),
          jB = QB.get(mB);
        if (void 0 !== jB) {
          const zB = UB.get(jB);
          sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "frame"
          }), BB && !sB.has(BB.root) && sB.set(BB.root, {
            name: BB.root,
            texture: zB,
            kind: "frame"
          });
          continue
        }
        const zB = UB.get(mB),
          nB = BB?.root ?? JB;
        if (zB !== nB && sB.set(nB, {
            name: nB,
            texture: zB,
            kind: "frame"
          }), BB) {
          const jB = dB.get(BB.root);
          pB[mB] = {
            id: jB,
            rotation: BB.rotation
          }, rB.set(zB, jB), sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "rotation"
          })
        } else rB.set(zB, mB + 1)
      }
      for (const JB of rB.keys()) sB.delete(JB);
      for (const [JB, mB] of zB) {
        const BB = rB.get(mB);
        void 0 === BB || rB.has(JB) || (rB.set(JB, BB), sB.delete(JB))
      }
      return {
        named: [...rB].sort(((BB, jB) => {
          let [zB] = BB, [QB] = jB;
          return zB < QB ? -1 : zB > QB ? 1 : 0
        })).map((BB => {
          let [jB, zB] = BB;
          return {
            name: jB,
            id: zB
          }
        })),
        aliases: [...sB.values()],
        layers: pB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);