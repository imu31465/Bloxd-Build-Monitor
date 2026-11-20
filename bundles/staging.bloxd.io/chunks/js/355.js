export const id = 355;
export const ids = [355];
export const modules = {
  61013: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      A: () => dk,
      B: () => Vk,
      C: () => sk,
      X: () => Jk
    });
    var Rk = Bk(41145),
      tk = (kk, Fk) => kk.order - Fk.order;

    function ak(kk, Fk, Bk) {
      kk.pendingDisposers.set(Fk, Bk)
    }

    function Xk(kk, Fk, Bk) {
      Bk && kk.pendingDisposers.get(Fk) === Bk && kk.pendingDisposers.delete(Fk)
    }
    var bk = null,
      wk = null;

    function dk(kk, Fk, Bk, Rk) {
      if (!Fk || Bk.material !== Fk) return Rk ?? Promise.resolve();
      const tk = Vk(kk, Fk._buildGroup, Bk);
      return Rk ? Promise.all([Rk, tk]).then((() => {})) : tk
    }

    function sk(kk, Fk, Bk) {
      let Rk = Bk;
      for (const tk of Fk) {
        const Fk = Array.isArray(tk),
          Bk = Fk ? tk[0] : tk;
        Rk = dk(kk, Fk ? tk[1] : Bk.material, Bk, Rk)
      }
      return (Rk ?? Promise.resolve()).catch((Fk => {
        kk._runtimeBuilds?._x(Fk)
      }))
    }

    function Vk(kk, Fk, Rk) {
      if (kk._z || !kk.meshes.includes(Rk)) return kk._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(kk, Fk, Bk) {
          for (const [tk, ak] of kk._groups)
            if (tk !== Fk) {
              const kk = ak.indexOf(Bk);
              kk >= 0 && ak.splice(kk, 1)
            } let Rk = kk._groups.get(Fk);
          Rk || (Rk = [], kk._groups.set(Fk, Rk));
          Rk.includes(Bk) || Rk.push(Bk)
        }(kk, Fk, Rk), "pbr" === Fk._materialFamily && (kk._built || kk._groups.get(Fk)?.r)) {
        const Fk = kk._runtimeBuilds ?? Ak(kk),
          Rk = Bk.e(385).then((() => Bk(61672))).then((Fk => {
            let {
              rebuildScenePbrPipelines: Bk
            } = Fk;
            return kk._z ? void 0 : Bk(kk, !0)
          })).catch((Fk => {
            kk._runtimeBuilds?._x(Fk)
          }));
        return Fk.track(Rk)
      }
      return (kk._runtimeBuilds ?? Ak(kk)).queue(Fk, Rk).catch((() => {}))
    }

    function Jk(kk, Fk, Bk) {
      return kk._z ? Promise.resolve(void 0) : (kk._runtimeBuilds ?? Ak(kk)).exclusive(Fk, Bk)
    }

    function Ak(kk) {
      const Fk = {
          Te: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Bk = kk,
        dk = {
          queue: (Bk, sk) => {
            const Vk = (Fk.generations.get(sk) ?? 0) + 1,
              Jk = sk.material;
            Fk.generations.set(sk, Vk);
            const Ak = Fk.chains.get(sk),
              ek = [Fk.tail, bk?.get(Bk)].filter((kk => !!kk));
            let yk = () => {};
            const vk = new Promise((kk => {
              yk = kk
            }));
            Fk.tail = vk, (bk ??= new WeakMap).set(Bk, vk);
            const ik = (Ak ? Ak.catch((() => {})) : Promise.resolve()).then((() => Promise.all(ek))).then((() => async function(kk, Fk, Bk, bk, dk, sk) {
              if (!fk(kk, Fk, Bk, bk, dk, sk)) return;
              const Vk = kk._meshDisposables.get(bk);
              Vk && (kk._meshDisposables.delete(bk), ak(Fk, bk, Vk));
              const Jk = Bk._rebuildSingle,
                Ak = wk?.get(Bk)?.f_.get(kk) ?? kk._groups.get(Bk)?.r,
                ek = !!kk._groups.get(Bk)?.r,
                yk = kk._disposables.length,
                vk = kk,
                ik = vk._pbrGeomContext;
              let Yk, Lk;
              try {
                Lk = await Bk(kk, [bk]), Yk = vk._pbrGeomContext
              } catch (Sk) {
                if (mk(kk, Fk, bk, Vk), Wk(kk, Fk), !fk(kk, Fk, Bk, bk, dk, sk)) return;
                throw Sk
              } finally {
                Bk._rebuildSingle = Jk, "pbr" === Bk._materialFamily && ek && (vk._pbrGeomContext = ik)
              }
              if (!fk(kk, Fk, Bk, bk, dk, sk)) return mk(kk, Fk, bk, Vk), void Wk(kk, Fk);
              for (let Rk = kk._renderables.length - 1; Rk >= 0; Rk--) kk._renderables[Rk].mesh === bk && kk._renderables.splice(Rk, 1);
              if (Vk) {
                for (const Fk of Vk) {
                  const Bk = kk._disposables.indexOf(Fk);
                  Bk >= 0 && kk._disposables.splice(Bk, 1);
                  const Rk = Fk.p;
                  if (Rk) {
                    Rk._disposed = !0;
                    const kk = Rk._owner;
                    if (kk) {
                      const Fk = kk.indexOf(Rk);
                      Fk >= 0 && kk.splice(Fk, 1), Rk._owner = void 0, 0 === kk.length && Rk._onOwnerEmpty?.()
                    } else Rk._onOwnerEmpty?.();
                    Rk._onOwnerEmpty && (Rk._onOwnerEmpty = void 0)
                  }
                }(0, Rk.e)(kk.surface.engine, (() => {
                  for (const kk of Vk) kk()
                }))
              }
              Xk(Fk, bk, Vk), kk._renderables.push(...Lk.renderables);
              const Ok = kk._groups.get(Bk);
              Ok && (Ok.o = [...(Ok.o ?? []).filter((kk => kk.mesh !== bk)), ...Lk.renderables]);
              Lk.updater && kk._uniformUpdaters.push(Lk.updater);
              ek && function(kk, Fk) {
                const Bk = new Set(kk._disposables.slice(0, Fk));
                for (let Rk = kk._disposables.length - 1; Rk >= Fk; Rk--) Bk.has(kk._disposables[Rk]) && kk._disposables.splice(Rk, 1)
              }(kk, yk);
              "pbr" === Bk._materialFamily && ek && Yk && (vk._pbrMeshGeomContexts ??= new WeakMap).set(bk, Yk);
              (function(kk, Fk, Bk, Rk, tk, ak) {
                let Xk = wk?.get(Bk);
                if (!Xk) {
                  const kk = new WeakMap,
                    Fk = new WeakMap,
                    Rk = (Rk, tk, ak, Xk) => {
                      const bk = kk.get(Rk)?.get(tk);
                      if (bk) return bk(Rk, tk, ak, Xk);
                      const wk = Fk.get(Rk) ?? Rk._groups.get(Bk)?.r;
                      if (wk) return wk(Rk, tk, ak, Xk);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Xk = {
                    f_: Fk,
                    dispatch: Rk,
                    scenes: kk
                  }, (wk ??= new WeakMap).set(Bk, Xk)
                }
                let bk = Xk.scenes.get(kk);
                bk || (bk = new WeakMap, Xk.scenes.set(kk, bk));
                bk.set(Rk, tk), Xk.f_.has(kk) || Xk.f_.set(kk, ak ?? tk);
                const dk = kk._groups.get(Bk);
                dk && (dk.r = Xk.dispatch);
                let sk = Fk.installed.get(Rk);
                sk || (sk = new Set, Fk.installed.set(Rk, sk));
                sk.add(Bk), Fk.installedMeshes.add(Rk)
              })(kk, Fk, Bk, bk, Lk.rebuildSingle, ek ? Ak : Lk.rebuildSingle), bk.material._csmGen = (bk.material._csmGen ?? 0) + 1;
              const Ek = kk._groups.get(Bk);
              Ek && !ek && (Ek.r = Lk.rebuildSingle);
              kk._renderables.sort(tk), kk._renderableVersion++, kk._materialEpoch++
            }(kk, Fk, Bk, sk, Jk, Vk))).catch((Rk => {
              throw fk(kk, Fk, Bk, sk, Jk, Vk) && (Fk.error = Rk instanceof Error ? Rk : new Error("Runtime mesh build failed", {
                cause: Rk
              })), Rk
            })).finally((() => {
              yk(), Fk.tail === vk && (Fk.tail = null), bk?.get(Bk) === vk && bk.delete(Bk)
            })).finally((() => {
              Fk.chains.get(sk) === ik && Fk.chains.delete(sk)
            }));
            return Fk.chains.set(sk, ik), dk.track(ik)
          },
          all: () => Promise.all(Fk.active).then((() => {})),
          track: kk => {
            const Bk = kk.finally((() => Fk.active.delete(Bk)));
            return Fk.active.add(Bk), Promise.all(Fk.active).then((() => {}))
          },
          base: (Fk, Bk) => {
            const Rk = wk?.get(Fk);
            return Rk && Rk.f_.set(kk, Bk), Rk?.dispatch ?? Bk
          },
          get w() {
            return !!Fk.tail
          },
          pendingDisposers: kk => Fk.pendingDisposers.get(kk),
          holdPendingDisposers: (kk, Bk) => ak(Fk, kk, Bk),
          releasePendingDisposers: (kk, Bk) => Xk(Fk, kk, Bk),
          reset: Rk => {
            yk(kk, Fk, Rk), Bk._pbrMeshGeomContexts?.delete(Rk)
          },
          remove: Rk => {
            Fk.generations.set(Rk, (Fk.generations.get(Rk) ?? 0) + 1), Fk.chains.delete(Rk), ek(kk, Fk, Rk), Bk._pbrMeshGeomContexts?.delete(Rk)
          },
          dropBase: Fk => {
            const Bk = wk?.get(Fk);
            Bk && (Bk.f_.delete(kk), Bk.scenes.delete(kk))
          },
          wait: async kk => {
            const Bk = new Set;
            for (const Rk of kk) {
              const kk = Fk.chains.get(Rk);
              kk && Bk.add(kk)
            }
            await Promise.all(Bk)
          },
          _e: function() {
            let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Fk.error) {
              const Bk = Fk.error;
              throw kk && (Fk.error = null), Bk
            }
          },
          _x: kk => {
            Fk.error = kk instanceof Error ? kk : new Error("Runtime mesh build failed", {
              cause: kk
            })
          },
          _d: () => Fk.Te,
          exclusive: (kk, Bk) => {
            const Rk = [];
            Fk.tail && Rk.push(Fk.tail);
            const tk = bk?.get(kk);
            tk && Rk.push(tk);
            const ak = Promise.all(Rk).then(Bk),
              Xk = ak.then((() => {}), (() => {}));
            return Fk.tail = Xk, (bk ??= new WeakMap).set(kk, Xk), Xk.then((() => {
              Fk.tail === Xk && (Fk.tail = null), bk?.get(kk) === Xk && bk.delete(kk)
            })), ak
          }
        };
      return kk._runtimeBuilds = dk, (kk._beforeRender ??= []).push((() => {
        dk._e()
      })), kk._disposables.push((() => {
        Fk.Te = !0, Fk.active.clear();
        for (const Bk of Fk.installedMeshes) yk(kk, Fk, Bk);
        for (const Fk of kk._groups.keys()) wk?.get(Fk)?.f_.delete(kk);
        kk._runtimeBuilds = void 0, Bk._pbrMeshGeomContexts = void 0
      })), dk
    }

    function ek(kk, Fk, Bk) {
      const Rk = Fk.installed.get(Bk);
      if (Rk) {
        for (const Fk of Rk) wk?.get(Fk)?.scenes.get(kk)?.delete(Bk);
        Fk.installed.delete(Bk), Fk.installedMeshes.delete(Bk)
      }
    }

    function yk(kk, Fk, Bk) {
      ek(kk, Fk, Bk)
    }

    function fk(kk, Fk, Bk, Rk, tk, ak) {
      return !Fk.Te && Fk.generations.get(Rk) === ak && kk.meshes.includes(Rk) && Rk.material === tk && tk._buildGroup === Bk
    }

    function mk(kk, Fk, Bk, tk) {
      const ak = kk._meshDisposables.get(Bk);
      if (ak && ak !== tk) {
        kk._meshDisposables.delete(Bk);
        for (const kk of ak) kk()
      }
      if (tk)
        if (kk.meshes.includes(Bk)) kk._meshDisposables.set(Bk, tk);
        else if (Fk.Te)
        for (const Rk of tk) Rk();
      else(0, Rk.e)(kk.surface.engine, (() => {
        for (const kk of tk) kk()
      }));
      Xk(Fk, Bk, tk)
    }

    function Wk(kk, Fk) {
      if (!Fk.Te) return;
      const Bk = kk._disposables.splice(0);
      for (const Rk of Bk) Rk()
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);