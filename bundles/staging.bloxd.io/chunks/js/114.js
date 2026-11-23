export const id = 114;
export const ids = [114, 116, 136, 137];
export const modules = {
  5047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk.d,
      e: () => Tk,
      i: () => Xk.m
    });
    var Xk = Ik(5053);
    const Tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
  6639: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      forgetShaderPackActiveHint: () => Ok,
      isOtherApiVersion: () => zk,
      isShaderPackActive: () => Kk,
      isShaderPackChangePending: () => Vk,
      markShaderPackChangePending: () => sk,
      pageShaderPackValidationVersion: () => Sk,
      reconcileStoredShaderPackHint: () => Ek,
      removeShaderPack: () => Pk,
      replaceShaderPack: () => Hk,
      saveShaderPack: () => wk,
      shaderPackNeedsCheck: () => vk,
      storedPackOutcome: () => Qk,
      storedShaderPackFiles: () => Zk,
      toStoredShaderPack: () => tk
    });
    var Xk = Ik(5053),
      Tk = Ik(5047),
      ik = Ik(41),
      yk = Ik(3396),
      lk = Ik(6644),
      ak = Ik(6611);
    const qk = "shaderPackChangePending";
    let Lk = null;

    function tk(kk, Fk, Ik) {
      return {
        manifest: kk.manifest,
        files: (0, Xk.w)(kk.files),
        validation: Fk,
        ...Ik && {
          listing: Ik
        }
      }
    }

    function Zk(kk) {
      return Object.keys(kk.files).map((Fk => ({
        path: Fk,
        source: kk.files[Fk]
      })))
    }
    let jk = Promise.resolve();

    function ek(kk) {
      const Fk = jk.then(kk);
      return jk = Fk.catch((() => {})), Fk
    }

    function wk(kk, Fk) {
      return ek((() => Jk(kk, Fk)))
    }

    function Hk(kk, Fk, Ik) {
      return ek((async () => JSON.stringify(await (0, lk.i)()) === JSON.stringify(kk) && (null === Fk ? (await xk(), !0) : Jk(Fk, Ik))))
    }
    async function Jk(kk, Fk) {
      const Ik = await ik.g.setItem(lk.e, kk);
      return Ik && nk(kk, Fk), Ik
    }
    async function xk() {
      await ik.g.removeItem(lk.e), ik.j.removeItem(yk.e)
    }

    function Pk() {
      return ek(xk)
    }

    function Kk(kk, Fk) {
      return "active" === Qk(kk, Fk).kind
    }

    function Qk(kk, Fk) {
      var Ik;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : zk(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.ok) || kk.validation.fromRecheck ? null === Fk ? {
        kind: "none",
        reason: "noCompiler"
      } : vk(kk, Fk) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : kk.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function sk() {
      ik.m.setItem(qk, performance.timeOrigin)
    }

    function Vk() {
      return ik.m.getItem(qk) === performance.timeOrigin
    }

    function zk(kk) {
      return !(0, Tk.i)(kk.manifest.apiVersion)
    }

    function Sk(kk) {
      return Lk ??= kk.nG((0, ak.shaderPackTextures)()), Lk
    }

    function vk(kk, Fk) {
      var Ik;
      return (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.headerVersion) !== Sk(Fk)
    }

    function Ek(kk) {
      return ek((async () => {
        nk(await (0, lk.i)(!0), kk)
      }))
    }

    function Ok() {
      return ek((async () => {
        ik.j.removeItem(yk.e)
      }))
    }

    function nk(kk, Fk) {
      Kk(kk, Fk) ? ik.j.setItem(yk.e, !0) : ik.j.removeItem(yk.e)
    }
  },
  6644: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik
    });
    var Xk = Ik(41);
    const Tk = "shaderPack";
    async function ik() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  6611: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadShaderPackTextures: () => yk,
      shaderPackTextures: () => lk
    });
    var Xk = Ik(5053);
    let Tk = null,
      ik = null;

    function yk() {
      return ik ??= Promise.all([Ik.e(72), Ik.e(188)]).then((() => Ik(40500))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Ik,
          textureAnimationData: ik
        } = kk;
        return Tk ??= (0, Xk.g)(Ik, ik, Fk), Tk
      })), ik
    }

    function lk() {
      if (null === Tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Tk
    }
  },
  5053: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => yk,
      d: () => Xk,
      g: () => wk,
      k: () => tk,
      m: () => Tk,
      p: () => ik,
      t: () => qk,
      w: () => Lk,
      x: () => Zk
    });
    const Xk = 5;

    function Tk(kk) {
      return kk === Xk
    }

    function ik(kk) {
      return [...kk.features]
    }
    const yk = 262144,
      lk = 256,
      ak = 256;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Ik, Xk] of Object.entries(kk)) {
        if ("string" !== typeof Xk) return `${Ik} isn't text.`;
        Fk.push({
          path: Ik,
          source: Xk
        })
      }
      return Fk.sort(((kk, Fk) => tk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Ik
            }
            of kk) {
            const kk = jk(Ik);
            if (null !== kk) return kk;
            if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
            Fk.add(Ik)
          }
          return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function Lk(kk) {
      const Fk = {};
      for (const Ik of kk) Fk[Ik.path] = Ik.source;
      return Fk
    }

    function tk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Zk(kk) {
      const Fk = new TextEncoder;
      let Ik = 0;
      for (const {
          source: Xk
        }
        of kk) Ik += Fk.encode(Xk).byteLength;
      return Ik
    }

    function jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > ak) return `A file path is over ${ak} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const ek = /^(.*)\[rot\[([1-4])$/;

    function wk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Xk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Ik,
          animStartIdx: Tk
        } = kk;
        for (let ik = 1; ik < Ik; ik++) Xk.set(Tk + ik - 1, Fk)
      }));
      const Tk = Object.entries(kk),
        ik = new Map;
      for (const [wk, Hk] of Tk) {
        const kk = ek.exec(wk);
        "1" === kk?.[2] && ik.set(kk[1], Hk + 1)
      }
      const yk = kk => {
          const Fk = ek.exec(kk);
          return Fk && ik.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        lk = new Set(Tk.map((kk => {
          let [Fk] = kk;
          return yk(Fk)?.root ?? Fk
        }))),
        ak = (kk, Ik) => {
          const Xk = kk.replace(/_?0$/, "");
          return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
        },
        qk = new Map;
      for (const [ek, wk] of Tk) qk.set(wk, ak(yk(ek)?.root ?? ek, wk));
      const Lk = Tk.reduce(((kk, Fk) => {
          let [, Ik] = Fk;
          return Math.max(kk, Ik + 1)
        }), 0),
        tk = Array.from({
          length: Lk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Zk = new Map,
        jk = new Map;
      for (const [ek, wk] of Tk) {
        const kk = yk(ek),
          Fk = Xk.get(wk);
        if (void 0 !== Fk) {
          const Ik = qk.get(Fk);
          jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "frame"
          }), kk && !jk.has(kk.root) && jk.set(kk.root, {
            name: kk.root,
            texture: Ik,
            kind: "frame"
          });
          continue
        }
        const Ik = qk.get(wk),
          Tk = kk?.root ?? ek;
        if (Ik !== Tk && jk.set(Tk, {
            name: Tk,
            texture: Ik,
            kind: "frame"
          }), kk) {
          const Fk = ik.get(kk.root);
          tk[wk] = {
            id: Fk,
            rotation: kk.rotation
          }, Zk.set(Ik, Fk), jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "rotation"
          })
        } else Zk.set(Ik, wk + 1)
      }
      for (const ek of Zk.keys()) jk.delete(ek);
      for (const [ek, wk] of Ik) {
        const kk = Zk.get(wk);
        void 0 === kk || Zk.has(ek) || (Zk.set(ek, kk), jk.delete(ek))
      }
      return {
        named: [...Zk].sort(((kk, Fk) => {
          let [Ik] = kk, [Xk] = Fk;
          return Ik < Xk ? -1 : Ik > Xk ? 1 : 0
        })).map((kk => {
          let [Fk, Ik] = kk;
          return {
            name: Fk,
            id: Ik
          }
        })),
        aliases: [...jk.values()],
        layers: tk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);