export const id = 385;
export const ids = [385];
export const modules = {
  61672: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      rebuildScenePbrPipelines: () => bk,
      rebuildSceneRenderables: () => wk
    });
    var Rk = Bk(41145),
      tk = (kk, Fk) => kk.order - Fk.order,
      ak = 8,
      Xk = kk => wk(kk);
    async function bk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await dk(kk, "pbr", Fk)
    }
    async function wk(kk) {
      await dk(kk, void 0, !1)
    }
    async function dk(kk, Fk, bk) {
      const wk = kk;
      if (!wk._built && !bk) return;
      const dk = wk._lightListVersion ?? 0,
        sk = wk.surface.engine,
        Vk = kk => {
          wk._z ? kk.forEach((kk => kk())) : (0, Rk.e)(sk, (() => kk.forEach((kk => kk()))))
        };
      let Jk = !1,
        Ak = !1,
        ek = !1,
        yk = !1;
      try {
        for (let kk = 1;; kk++) {
          if (void 0 !== Fk) {
            await fk();
            break
          }
          if (Wk(wk), await fk(), !mk(wk)) break;
          if (kk >= ak) {
            wk._rebuildHook = Xk, yk = !0, Ak = !0;
            break
          }
        }
        ek = !0
      } finally {
        if (Jk && (wk._renderables.sort(tk), wk._renderableVersion++, wk._materialEpoch++, wk._built && wk._frameGraph.build()), void 0 === Fk && ek && !Ak && (wk._lightListVersion ?? 0) === dk) {
          const kk = wk._pendingTopologyRetirements?.splice(0);
          kk?.length && Vk(kk), yk || (wk._rebuildHook = void 0)
        }
      }
      async function fk() {
        for (const [kk, Rk] of wk._groups) {
          if (void 0 !== Fk && kk._materialFamily !== Fk) continue;
          if (0 === Rk.length) {
            (Rk.o || Rk.r) && (vk(kk, Rk), Jk = !0);
            continue
          }
          const tk = wk._runtimeBuilds;
          await (tk?.wait(Rk));
          let ak = !1;
          const bk = async () => {
            const Fk = wk._runtimeBuilds,
              Bk = [...Rk].filter((Fk => wk.meshes.includes(Fk) && Fk.material?._buildGroup === kk));
            if (0 === Bk.length) return void vk(kk, Rk);
            const Xk = !!Rk.r,
              bk = wk._disposables.length,
              dk = new Map,
              sk = new Map(Bk.map((kk => [kk, kk.material])));
            for (const kk of Bk) {
              const Bk = wk._meshDisposables.get(kk);
              Bk && (dk.set(kk, Bk), wk._meshDisposables.delete(kk), Fk?.holdPendingDisposers(kk, Bk))
            }
            let Jk, Ak;
            wk._p = kk => (Ak = kk, !0);
            try {
              Jk = await kk(wk, Bk)
            } catch (Lk) {
              Ak?.[1]();
              for (const tk of Bk) {
                const Bk = dk.get(tk),
                  ak = wk._meshDisposables.get(tk);
                if (ak && ak !== Bk)
                  for (const kk of ak) kk();
                const Xk = wk.meshes.includes(tk) && tk.material === sk.get(tk) && tk.material?._buildGroup === kk && Rk.includes(tk);
                Bk && Xk ? wk._meshDisposables.set(tk, Bk) : (wk._meshDisposables.delete(tk), Bk && Vk(Bk)), Bk && Fk?.releasePendingDisposers(tk, Bk)
              }
              throw Lk
            } finally {
              delete wk._p
            }
            if (wk._z || tk?._d()) {
              Ak?.[1]();
              for (const Fk of Bk) {
                const kk = wk._meshDisposables.get(Fk),
                  Bk = dk.get(Fk);
                if (kk && kk !== Bk)
                  for (const Fk of kk) Fk();
                wk._meshDisposables.delete(Fk)
              }
              for (const Fk of wk._disposables.splice(0)) Fk();
              const kk = [...dk.values()].flat();
              Vk(kk);
              for (const [Bk, Rk] of dk) Fk?.releasePendingDisposers(Bk, Rk);
              return
            }
            Ak?.[0](), kk._rebuildSingle = Jk.rebuildSingle, Rk.r = wk._runtimeBuilds?.base(kk, Jk.rebuildSingle) ?? Jk.rebuildSingle, "pbr" === kk._materialFamily && Jk._G && (Rk._w = null), Xk && ik(wk, bk);
            const ek = new Set(Bk.filter((Fk => wk.meshes.includes(Fk) && Fk.material === sk.get(Fk) && Fk.material?._buildGroup === kk && Rk.includes(Fk))));
            if (ek.size !== Bk.length && Jk.renderables.some((kk => !kk.mesh))) {
              for (const kk of Bk) {
                const Bk = wk._meshDisposables.get(kk),
                  Rk = dk.get(kk);
                if (Bk && Bk !== Rk)
                  for (const kk of Bk) kk();
                Rk && wk.meshes.includes(kk) ? wk._meshDisposables.set(kk, Rk) : (wk._meshDisposables.delete(kk), Rk && Vk(Rk)), Rk && Fk?.releasePendingDisposers(kk, Rk)
              }
              return void(ak = !0)
            }
            const yk = new Set;
            for (const kk of Bk)
              if (ek.has(kk)) yk.add(kk.material), wk._runtimeBuilds?.reset(kk);
              else {
                const Bk = dk.get(kk),
                  Rk = wk._meshDisposables.get(kk);
                if (Rk && Rk !== Bk)
                  for (const kk of Rk) kk();
                Bk && wk.meshes.includes(kk) ? (wk._meshDisposables.set(kk, Bk), dk.delete(kk), Fk?.releasePendingDisposers(kk, Bk)) : wk._meshDisposables.delete(kk)
              } for (const kk of yk) kk._csmGen = (kk._csmGen ?? 0) + 1;
            const fk = Rk.o,
              mk = fk?.length ? new Set(fk) : null;
            for (let kk = wk._renderables.length - 1; kk >= 0; kk--) {
              const Fk = wk._renderables[kk];
              (ek.has(Fk.mesh) || mk?.has(Fk)) && wk._renderables.splice(kk, 1)
            }
            const Wk = Jk.renderables.filter((kk => !kk.mesh || ek.has(kk.mesh)));
            wk._renderables.push(...Wk), Rk.o = Wk;
            const Yk = [...dk.values()].flat();
            Vk(Yk);
            for (const [kk, Rk] of dk) Fk?.releasePendingDisposers(kk, Rk)
          }, {
            X: dk
          } = await Promise.resolve().then((() => Bk(61013))), sk = 3;
          for (let Fk = 1;; Fk++) {
            if (ak = !1, await dk(wk, kk, bk), wk._z || tk?._d()) return void(Ak = !0);
            if (!ak) break;
            if (Fk >= sk) {
              vk(kk, Rk), wk._rebuildHook = Xk, yk = !0, Ak = !0;
              break
            }
          }
          ak ? Jk = !0 : Jk = !0
        }
      }

      function mk(kk) {
        for (const Fk of kk.meshes) {
          const Bk = Fk.material?._buildGroup;
          if (Bk && !kk._groups.get(Bk)?.includes(Fk)) return !0
        }
        return !1
      }

      function Wk(kk) {
        const Fk = new Map;
        for (const Bk of kk.meshes) {
          const kk = Bk.material?._buildGroup;
          if (!kk) continue;
          const Rk = Fk.get(kk);
          Rk ? Rk.push(Bk) : Fk.set(kk, [Bk])
        }
        for (const [Bk, Rk] of kk._groups) {
          const kk = Fk.get(Bk) ?? [];
          (Rk.length !== kk.length || kk.some(((kk, Fk) => Rk[Fk] !== kk))) && (Rk.length = 0, Rk.push(...kk)), Fk.delete(Bk)
        }
        for (const [Bk, Rk] of Fk) {
          const Fk = Rk;
          kk._groups.set(Bk, Fk)
        }
      }

      function vk(kk, Fk) {
        const Bk = Fk.o;
        if (Bk?.length) {
          const kk = new Set(Bk);
          for (let Fk = wk._renderables.length - 1; Fk >= 0; Fk--) kk.has(wk._renderables[Fk]) && wk._renderables.splice(Fk, 1)
        }
        Fk.o = void 0, Fk.r = void 0, wk._runtimeBuilds?.dropBase(kk), wk._rebuildHook = Xk, yk = !0
      }

      function ik(kk, Fk) {
        const Bk = new Set(kk._disposables.slice(0, Fk));
        for (let Rk = kk._disposables.length - 1; Rk >= Fk; Rk--) Bk.has(kk._disposables[Rk]) && kk._disposables.splice(Rk, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);