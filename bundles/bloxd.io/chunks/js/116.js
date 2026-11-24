export const id = 116;
export const ids = [116, 118, 138, 139];
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
  6606: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      h: () => dB
    });
    var QB = zB(41);
    const nB = "shaderPack";
    async function dB() {
      var BB;
      let jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await QB.g.getItem(nB, jB)) && void 0 !== BB ? BB : null
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