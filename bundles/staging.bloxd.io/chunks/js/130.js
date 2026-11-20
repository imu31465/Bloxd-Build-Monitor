export const id = 130;
export const ids = [130];
export const modules = {
  6340: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      loadShaderPackTextures: () => Xk,
      shaderPackTextures: () => bk
    });
    var Rk = Bk(6289);
    let tk = null,
      ak = null;

    function Xk() {
      return ak ??= Promise.all([Bk.e(69), Bk.e(198)]).then((() => Bk(39906))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Bk,
          textureAnimationData: ak
        } = kk;
        return tk ??= (0, Rk.i)(Bk, ak, Fk), tk
      })), ak
    }

    function bk() {
      if (null === tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tk
    }
  },
  6289: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      d: () => ak,
      h: () => Rk,
      i: () => ek,
      k: () => sk,
      m: () => tk,
      q: () => wk,
      s: () => dk,
      w: () => Vk
    });
    const Rk = 5;

    function tk(kk) {
      return kk === Rk
    }
    const ak = 262144,
      Xk = 256,
      bk = 256;

    function wk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Bk, Rk] of Object.entries(kk)) {
        if ("string" !== typeof Rk) return `${Bk} isn't text.`;
        Fk.push({
          path: Bk,
          source: Rk
        })
      }
      return Fk.sort(((kk, Fk) => sk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > Xk) return `The pack has more than ${Xk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Bk
            }
            of kk) {
            const kk = Jk(Bk);
            if (null !== kk) return kk;
            if (Fk.has(Bk)) return `The pack has two files at ${Bk}.`;
            Fk.add(Bk)
          }
          return Vk(kk) > ak ? `The pack's .wgsl files are over ${ak/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function dk(kk) {
      const Fk = {};
      for (const Bk of kk) Fk[Bk.path] = Bk.source;
      return Fk
    }

    function sk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Vk(kk) {
      const Fk = new TextEncoder;
      let Bk = 0;
      for (const {
          source: Rk
        }
        of kk) Bk += Fk.encode(Rk).byteLength;
      return Bk
    }

    function Jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > bk) return `A file path is over ${bk} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const Ak = /^(.*)\[rot\[([1-4])$/;

    function ek(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Rk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Bk,
          animStartIdx: tk
        } = kk;
        for (let ak = 1; ak < Bk; ak++) Rk.set(tk + ak - 1, Fk)
      }));
      const tk = Object.entries(kk),
        ak = new Map;
      for (const [yk, fk] of tk) {
        const kk = Ak.exec(yk);
        "1" === kk?.[2] && ak.set(kk[1], fk + 1)
      }
      const Xk = kk => {
          const Fk = Ak.exec(kk);
          return Fk && ak.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        bk = new Set(tk.map((kk => {
          let [Fk] = kk;
          return Xk(Fk)?.root ?? Fk
        }))),
        wk = (kk, Bk) => {
          const Rk = kk.replace(/_?0$/, "");
          return (Fk[Bk]?.numAnimStates ?? 0) > 1 && !bk.has(Rk) ? Rk : kk
        },
        dk = new Map;
      for (const [Ak, yk] of tk) dk.set(yk, wk(Xk(Ak)?.root ?? Ak, yk));
      const sk = tk.reduce(((kk, Fk) => {
          let [, Bk] = Fk;
          return Math.max(kk, Bk + 1)
        }), 0),
        Vk = Array.from({
          length: sk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Jk = new Map,
        ek = new Map;
      for (const [Ak, yk] of tk) {
        const kk = Xk(Ak),
          Fk = Rk.get(yk);
        if (void 0 !== Fk) {
          const Bk = dk.get(Fk);
          ek.set(Ak, {
            name: Ak,
            texture: Bk,
            kind: "frame"
          }), kk && !ek.has(kk.root) && ek.set(kk.root, {
            name: kk.root,
            texture: Bk,
            kind: "frame"
          });
          continue
        }
        const Bk = dk.get(yk),
          tk = kk?.root ?? Ak;
        if (Bk !== tk && ek.set(tk, {
            name: tk,
            texture: Bk,
            kind: "frame"
          }), kk) {
          const Fk = ak.get(kk.root);
          Vk[yk] = {
            id: Fk,
            rotation: kk.rotation
          }, Jk.set(Bk, Fk), ek.set(Ak, {
            name: Ak,
            texture: Bk,
            kind: "rotation"
          })
        } else Jk.set(Bk, yk + 1)
      }
      for (const Ak of Jk.keys()) ek.delete(Ak);
      for (const [Ak, yk] of Bk) {
        const kk = Jk.get(yk);
        void 0 === kk || Jk.has(Ak) || (Jk.set(Ak, kk), ek.delete(Ak))
      }
      return {
        named: [...Jk].sort(((kk, Fk) => {
          let [Bk] = kk, [Rk] = Fk;
          return Bk < Rk ? -1 : Bk > Rk ? 1 : 0
        })).map((kk => {
          let [Fk, Bk] = kk;
          return {
            name: Fk,
            id: Bk
          }
        })),
        aliases: [...ek.values()],
        layers: Vk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);