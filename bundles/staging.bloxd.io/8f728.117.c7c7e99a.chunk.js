export const id = 117;
export const ids = [116, 117, 119, 125];
export const modules = {
  5570: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc.k,
      h: () => Ic,
      k: () => Vc.q
    });
    var Vc = nc(5561);
    const Ic = [!1, !0].flatMap((cB => ["terrain", "liquid", "model"].map((Bc => ({
      strict: cB,
      program: Bc
    })))))
  },
  5624: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      forgetShaderPackActiveHint: () => bB,
      isOtherApiVersion: () => Yc,
      isShaderPackActive: () => pc,
      isShaderPackChangePending: () => lc,
      markShaderPackChangePending: () => aB,
      pageShaderPackValidationVersion: () => Lc,
      reconcileStoredShaderPackHint: () => Uc,
      removeShaderPack: () => zB,
      replaceShaderPack: () => tB,
      saveShaderPack: () => ec,
      shaderPackNeedsCheck: () => gB,
      storedPackOutcome: () => hc,
      storedShaderPackFiles: () => Tc,
      toStoredShaderPack: () => Oc
    });
    var Vc = nc(5561),
      Ic = nc(5570),
      rB = nc(51),
      uc = nc(2585),
      sc = nc(5626),
      Mc = nc(5608);
    const Pc = "shaderPackChangePending";
    let qB = null;

    function Oc(cB, Bc, nc) {
      return {
        manifest: cB.manifest,
        files: (0, Vc.u)(cB.files),
        validation: Bc,
        ...nc && {
          listing: nc
        }
      }
    }

    function Tc(cB) {
      return Object.keys(cB.files).map((Bc => ({
        path: Bc,
        source: cB.files[Bc]
      })))
    }
    let fc = Promise.resolve();

    function mB(cB) {
      const Bc = fc.then(cB);
      return fc = Bc.catch((() => {})), Bc
    }

    function ec(cB, Bc) {
      return mB((() => Sc(cB, Bc)))
    }

    function tB(cB, Bc, nc) {
      return mB((async () => JSON.stringify(await (0, sc.e)()) === JSON.stringify(cB) && (null === Bc ? (await yB(), !0) : Sc(Bc, nc))))
    }
    async function Sc(cB, Bc) {
      const nc = await rB.d.setItem(sc.c, cB);
      return nc && Zc(cB, Bc), nc
    }
    async function yB() {
      await rB.d.removeItem(sc.c), rB.h.removeItem(uc.b)
    }

    function zB() {
      return mB(yB)
    }

    function pc(cB, Bc) {
      return "active" === hc(cB, Bc).kind
    }

    function hc(cB, Bc) {
      var nc;
      return null === cB ? {
        kind: "none",
        reason: "nothingStored"
      } : Yc(cB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.ok) || cB.validation.fromRecheck ? null === Bc ? {
        kind: "none",
        reason: "noCompiler"
      } : gB(cB, Bc) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : cB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function aB() {
      rB.i.setItem(Pc, performance.timeOrigin)
    }

    function lc() {
      return rB.i.getItem(Pc) === performance.timeOrigin
    }

    function Yc(cB) {
      return !(0, Ic.k)(cB.manifest.apiVersion)
    }

    function Lc(cB) {
      return qB ??= cB.EBc((0, Mc.shaderPackTextures)()), qB
    }

    function gB(cB, Bc) {
      var nc;
      return (null === (nc = cB.validation) || void 0 === nc ? void 0 : nc.headerVersion) !== Lc(Bc)
    }

    function Uc(cB) {
      return mB((async () => {
        Zc(await (0, sc.e)(!0), cB)
      }))
    }

    function bB() {
      return mB((async () => {
        rB.h.removeItem(uc.b)
      }))
    }

    function Zc(cB, Bc) {
      pc(cB, Bc) ? rB.h.setItem(uc.b, !0) : rB.h.removeItem(uc.b)
    }
  },
  5626: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => rB
    });
    var Vc = nc(51);
    const Ic = "shaderPack";
    async function rB() {
      var cB;
      let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (cB = await Vc.d.getItem(Ic, Bc)) && void 0 !== cB ? cB : null
    }
  },
  5608: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadShaderPackTextures: () => uc,
      shaderPackTextures: () => sc
    });
    var Vc = nc(5561);
    let Ic = null,
      rB = null;

    function uc() {
      return rB ??= Promise.all([nc.e(60), nc.e(180)]).then((() => nc(38499))).then((cB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Bc,
          textureNameToIndex: nc,
          textureAnimationData: rB
        } = cB;
        return Ic ??= (0, Vc.l)(nc, rB, Bc), Ic
      })), rB
    }

    function sc() {
      if (null === Ic) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ic
    }
  },
  5561: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      g: () => rB,
      k: () => Vc,
      l: () => mB,
      p: () => qB,
      q: () => Ic,
      r: () => Mc,
      u: () => Pc,
      x: () => Oc
    });
    const Vc = 5;

    function Ic(cB) {
      return cB === Vc
    }
    const rB = 262144,
      uc = 256,
      sc = 256;

    function Mc(cB) {
      if ("object" !== typeof cB || null === cB || Array.isArray(cB)) return "The pack has no files.";
      const Bc = [];
      for (const [nc, Vc] of Object.entries(cB)) {
        if ("string" !== typeof Vc) return `${nc} isn't text.`;
        Bc.push({
          path: nc,
          source: Vc
        })
      }
      return Bc.sort(((cB, Bc) => qB(cB.path, Bc.path))),
        function(cB) {
          if (0 === cB.length) return "The pack has no .wgsl files.";
          if (cB.length > uc) return `The pack has more than ${uc} .wgsl files.`;
          const Bc = new Set;
          for (const {
              path: nc
            }
            of cB) {
            const cB = Tc(nc);
            if (null !== cB) return cB;
            if (Bc.has(nc)) return `The pack has two files at ${nc}.`;
            Bc.add(nc)
          }
          return Oc(cB) > rB ? `The pack's .wgsl files are over ${rB/1024} KB in total.` : null
        }(Bc) ?? Bc
    }

    function Pc(cB) {
      const Bc = {};
      for (const nc of cB) Bc[nc.path] = nc.source;
      return Bc
    }

    function qB(cB, Bc) {
      return cB < Bc ? -1 : cB > Bc ? 1 : 0
    }

    function Oc(cB) {
      const Bc = new TextEncoder;
      let nc = 0;
      for (const {
          source: Vc
        }
        of cB) nc += Bc.encode(Vc).byteLength;
      return nc
    }

    function Tc(cB) {
      if (!cB.toLowerCase().endsWith(".wgsl")) return `${cB} isn't a .wgsl file.`;
      if (cB.length > sc) return `A file path is over ${sc} characters.`;
      if (cB.includes("\\") || /[\u0000-\u001f]/.test(cB)) return `${cB} isn't a valid file path.`;
      return cB.split("/").some((cB => "" === cB || "." === cB || ".." === cB)) ? `${cB} isn't a valid file path.` : null
    }
    const fc = /^(.*)\[rot\[([1-4])$/;

    function mB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Vc = new Map;
      Bc.forEach(((cB, Bc) => {
        let {
          numAnimStates: nc,
          animStartIdx: Ic
        } = cB;
        for (let rB = 1; rB < nc; rB++) Vc.set(Ic + rB - 1, Bc)
      }));
      const Ic = Object.entries(cB),
        rB = new Map;
      for (const [ec, tB] of Ic) {
        const cB = fc.exec(ec);
        "1" === cB?.[2] && rB.set(cB[1], tB + 1)
      }
      const uc = cB => {
          const Bc = fc.exec(cB);
          return Bc && rB.has(Bc[1]) ? {
            root: Bc[1],
            rotation: Number(Bc[2]) - 1
          } : null
        },
        sc = new Set(Ic.map((cB => {
          let [Bc] = cB;
          return uc(Bc)?.root ?? Bc
        }))),
        Mc = (cB, nc) => {
          const Vc = cB.replace(/_?0$/, "");
          return (Bc[nc]?.numAnimStates ?? 0) > 1 && !sc.has(Vc) ? Vc : cB
        },
        Pc = new Map;
      for (const [fc, ec] of Ic) Pc.set(ec, Mc(uc(fc)?.root ?? fc, ec));
      const qB = Ic.reduce(((cB, Bc) => {
          let [, nc] = Bc;
          return Math.max(cB, nc + 1)
        }), 0),
        Oc = Array.from({
          length: qB
        }, ((cB, Bc) => ({
          id: Bc + 1,
          rotation: 0
        }))),
        Tc = new Map,
        mB = new Map;
      for (const [fc, ec] of Ic) {
        const cB = uc(fc),
          Bc = Vc.get(ec);
        if (void 0 !== Bc) {
          const nc = Pc.get(Bc);
          mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "frame"
          }), cB && !mB.has(cB.root) && mB.set(cB.root, {
            name: cB.root,
            texture: nc,
            kind: "frame"
          });
          continue
        }
        const nc = Pc.get(ec),
          Ic = cB?.root ?? fc;
        if (nc !== Ic && mB.set(Ic, {
            name: Ic,
            texture: nc,
            kind: "frame"
          }), cB) {
          const Bc = rB.get(cB.root);
          Oc[ec] = {
            id: Bc,
            rotation: cB.rotation
          }, Tc.set(nc, Bc), mB.set(fc, {
            name: fc,
            texture: nc,
            kind: "rotation"
          })
        } else Tc.set(nc, ec + 1)
      }
      for (const fc of Tc.keys()) mB.delete(fc);
      for (const [fc, ec] of nc) {
        const cB = Tc.get(ec);
        void 0 === cB || Tc.has(fc) || (Tc.set(fc, cB), mB.delete(fc))
      }
      return {
        named: [...Tc].sort(((cB, Bc) => {
          let [nc] = cB, [Vc] = Bc;
          return nc < Vc ? -1 : nc > Vc ? 1 : 0
        })).map((cB => {
          let [Bc, nc] = cB;
          return {
            name: Bc,
            id: nc
          }
        })),
        aliases: [...mB.values()],
        layers: Oc
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);