export const id = 363;
export const ids = [363];
export const modules = {
  61371: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      A: () => qk,
      B: () => tk,
      C: () => Lk,
      X: () => Zk
    });
    var Xk = Ik(41723),
      Tk = (kk, Fk) => kk.order - Fk.order;

    function ik(kk, Fk, Ik) {
      kk.pendingDisposers.set(Fk, Ik)
    }

    function yk(kk, Fk, Ik) {
      Ik && kk.pendingDisposers.get(Fk) === Ik && kk.pendingDisposers.delete(Fk)
    }
    var lk = null,
      ak = null;

    function qk(kk, Fk, Ik, Xk) {
      if (!Fk || Ik.material !== Fk) return Xk ?? Promise.resolve();
      const Tk = tk(kk, Fk._buildGroup, Ik);
      return Xk ? Promise.all([Xk, Tk]).then((() => {})) : Tk
    }

    function Lk(kk, Fk, Ik) {
      let Xk = Ik;
      for (const Tk of Fk) {
        const Fk = Array.isArray(Tk),
          Ik = Fk ? Tk[0] : Tk;
        Xk = qk(kk, Fk ? Tk[1] : Ik.material, Ik, Xk)
      }
      return (Xk ?? Promise.resolve()).catch((Fk => {
        kk._runtimeBuilds?._x(Fk)
      }))
    }

    function tk(kk, Fk, Xk) {
      if (kk._z || !kk.meshes.includes(Xk)) return kk._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(kk, Fk, Ik) {
          for (const [Tk, ik] of kk._groups)
            if (Tk !== Fk) {
              const kk = ik.indexOf(Ik);
              kk >= 0 && ik.splice(kk, 1)
            } let Xk = kk._groups.get(Fk);
          Xk || (Xk = [], kk._groups.set(Fk, Xk));
          Xk.includes(Ik) || Xk.push(Ik)
        }(kk, Fk, Xk), "pbr" === Fk._materialFamily && (kk._built || kk._groups.get(Fk)?.r)) {
        const Fk = kk._runtimeBuilds ?? jk(kk),
          Xk = Ik.e(393).then((() => Ik(61874))).then((Fk => {
            let {
              rebuildScenePbrPipelines: Ik
            } = Fk;
            return kk._z ? void 0 : Ik(kk, !0)
          })).catch((Fk => {
            kk._runtimeBuilds?._x(Fk)
          }));
        return Fk.track(Xk)
      }
      return (kk._runtimeBuilds ?? jk(kk)).queue(Fk, Xk).catch((() => {}))
    }

    function Zk(kk, Fk, Ik) {
      return kk._z ? Promise.resolve(void 0) : (kk._runtimeBuilds ?? jk(kk)).exclusive(Fk, Ik)
    }

    function jk(kk) {
      const Fk = {
          ee: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Ik = kk,
        qk = {
          queue: (Ik, Lk) => {
            const tk = (Fk.generations.get(Lk) ?? 0) + 1,
              Zk = Lk.material;
            Fk.generations.set(Lk, tk);
            const jk = Fk.chains.get(Lk),
              ek = [Fk.tail, lk?.get(Ik)].filter((kk => !!kk));
            let wk = () => {};
            const Pk = new Promise((kk => {
              wk = kk
            }));
            Fk.tail = Pk, (lk ??= new WeakMap).set(Ik, Pk);
            const Kk = (jk ? jk.catch((() => {})) : Promise.resolve()).then((() => Promise.all(ek))).then((() => async function(kk, Fk, Ik, lk, qk, Lk) {
              if (!Hk(kk, Fk, Ik, lk, qk, Lk)) return;
              const tk = kk._meshDisposables.get(lk);
              tk && (kk._meshDisposables.delete(lk), ik(Fk, lk, tk));
              const Zk = Ik._rebuildSingle,
                jk = ak?.get(Ik)?.w6.get(kk) ?? kk._groups.get(Ik)?.r,
                ek = !!kk._groups.get(Ik)?.r,
                wk = kk._disposables.length,
                Pk = kk,
                Kk = Pk._pbrGeomContext;
              let Qk, sk;
              try {
                sk = await Ik(kk, [lk]), Qk = Pk._pbrGeomContext
              } catch (Sk) {
                if (Jk(kk, Fk, lk, tk), xk(kk, Fk), !Hk(kk, Fk, Ik, lk, qk, Lk)) return;
                throw Sk
              } finally {
                Ik._rebuildSingle = Zk, "pbr" === Ik._materialFamily && ek && (Pk._pbrGeomContext = Kk)
              }
              if (!Hk(kk, Fk, Ik, lk, qk, Lk)) return Jk(kk, Fk, lk, tk), void xk(kk, Fk);
              for (let Xk = kk._renderables.length - 1; Xk >= 0; Xk--) kk._renderables[Xk].mesh === lk && kk._renderables.splice(Xk, 1);
              if (tk) {
                for (const Fk of tk) {
                  const Ik = kk._disposables.indexOf(Fk);
                  Ik >= 0 && kk._disposables.splice(Ik, 1);
                  const Xk = Fk.p;
                  if (Xk) {
                    Xk._disposed = !0;
                    const kk = Xk._owner;
                    if (kk) {
                      const Fk = kk.indexOf(Xk);
                      Fk >= 0 && kk.splice(Fk, 1), Xk._owner = void 0, 0 === kk.length && Xk._onOwnerEmpty?.()
                    } else Xk._onOwnerEmpty?.();
                    Xk._onOwnerEmpty && (Xk._onOwnerEmpty = void 0)
                  }
                }(0, Xk.b)(kk.surface.engine, (() => {
                  for (const kk of tk) kk()
                }))
              }
              yk(Fk, lk, tk), kk._renderables.push(...sk.renderables);
              const Vk = kk._groups.get(Ik);
              Vk && (Vk.o = [...(Vk.o ?? []).filter((kk => kk.mesh !== lk)), ...sk.renderables]);
              sk.updater && kk._uniformUpdaters.push(sk.updater);
              ek && function(kk, Fk) {
                const Ik = new Set(kk._disposables.slice(0, Fk));
                for (let Xk = kk._disposables.length - 1; Xk >= Fk; Xk--) Ik.has(kk._disposables[Xk]) && kk._disposables.splice(Xk, 1)
              }(kk, wk);
              "pbr" === Ik._materialFamily && ek && Qk && (Pk._pbrMeshGeomContexts ??= new WeakMap).set(lk, Qk);
              (function(kk, Fk, Ik, Xk, Tk, ik) {
                let yk = ak?.get(Ik);
                if (!yk) {
                  const kk = new WeakMap,
                    Fk = new WeakMap,
                    Xk = (Xk, Tk, ik, yk) => {
                      const lk = kk.get(Xk)?.get(Tk);
                      if (lk) return lk(Xk, Tk, ik, yk);
                      const ak = Fk.get(Xk) ?? Xk._groups.get(Ik)?.r;
                      if (ak) return ak(Xk, Tk, ik, yk);
                      throw new Error("Material group has not completed its initial build")
                    };
                  yk = {
                    w6: Fk,
                    dispatch: Xk,
                    scenes: kk
                  }, (ak ??= new WeakMap).set(Ik, yk)
                }
                let lk = yk.scenes.get(kk);
                lk || (lk = new WeakMap, yk.scenes.set(kk, lk));
                lk.set(Xk, Tk), yk.w6.has(kk) || yk.w6.set(kk, ik ?? Tk);
                const qk = kk._groups.get(Ik);
                qk && (qk.r = yk.dispatch);
                let Lk = Fk.installed.get(Xk);
                Lk || (Lk = new Set, Fk.installed.set(Xk, Lk));
                Lk.add(Ik), Fk.installedMeshes.add(Xk)
              })(kk, Fk, Ik, lk, sk.rebuildSingle, ek ? jk : sk.rebuildSingle), lk.material._csmGen = (lk.material._csmGen ?? 0) + 1;
              const zk = kk._groups.get(Ik);
              zk && !ek && (zk.r = sk.rebuildSingle);
              kk._renderables.sort(Tk), kk._renderableVersion++, kk._materialEpoch++
            }(kk, Fk, Ik, Lk, Zk, tk))).catch((Xk => {
              throw Hk(kk, Fk, Ik, Lk, Zk, tk) && (Fk.error = Xk instanceof Error ? Xk : new Error("Runtime mesh build failed", {
                cause: Xk
              })), Xk
            })).finally((() => {
              wk(), Fk.tail === Pk && (Fk.tail = null), lk?.get(Ik) === Pk && lk.delete(Ik)
            })).finally((() => {
              Fk.chains.get(Lk) === Kk && Fk.chains.delete(Lk)
            }));
            return Fk.chains.set(Lk, Kk), qk.track(Kk)
          },
          all: () => Promise.all(Fk.active).then((() => {})),
          track: kk => {
            const Ik = kk.finally((() => Fk.active.delete(Ik)));
            return Fk.active.add(Ik), Promise.all(Fk.active).then((() => {}))
          },
          base: (Fk, Ik) => {
            const Xk = ak?.get(Fk);
            return Xk && Xk.w6.set(kk, Ik), Xk?.dispatch ?? Ik
          },
          get w() {
            return !!Fk.tail
          },
          pendingDisposers: kk => Fk.pendingDisposers.get(kk),
          holdPendingDisposers: (kk, Ik) => ik(Fk, kk, Ik),
          releasePendingDisposers: (kk, Ik) => yk(Fk, kk, Ik),
          reset: Xk => {
            wk(kk, Fk, Xk), Ik._pbrMeshGeomContexts?.delete(Xk)
          },
          remove: Xk => {
            Fk.generations.set(Xk, (Fk.generations.get(Xk) ?? 0) + 1), Fk.chains.delete(Xk), ek(kk, Fk, Xk), Ik._pbrMeshGeomContexts?.delete(Xk)
          },
          dropBase: Fk => {
            const Ik = ak?.get(Fk);
            Ik && (Ik.w6.delete(kk), Ik.scenes.delete(kk))
          },
          wait: async kk => {
            const Ik = new Set;
            for (const Xk of kk) {
              const kk = Fk.chains.get(Xk);
              kk && Ik.add(kk)
            }
            await Promise.all(Ik)
          },
          _e: function() {
            let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Fk.error) {
              const Ik = Fk.error;
              throw kk && (Fk.error = null), Ik
            }
          },
          _x: kk => {
            Fk.error = kk instanceof Error ? kk : new Error("Runtime mesh build failed", {
              cause: kk
            })
          },
          _d: () => Fk.ee,
          exclusive: (kk, Ik) => {
            const Xk = [];
            Fk.tail && Xk.push(Fk.tail);
            const Tk = lk?.get(kk);
            Tk && Xk.push(Tk);
            const ik = Promise.all(Xk).then(Ik),
              yk = ik.then((() => {}), (() => {}));
            return Fk.tail = yk, (lk ??= new WeakMap).set(kk, yk), yk.then((() => {
              Fk.tail === yk && (Fk.tail = null), lk?.get(kk) === yk && lk.delete(kk)
            })), ik
          }
        };
      return kk._runtimeBuilds = qk, (kk._beforeRender ??= []).push((() => {
        qk._e()
      })), kk._disposables.push((() => {
        Fk.ee = !0, Fk.active.clear();
        for (const Ik of Fk.installedMeshes) wk(kk, Fk, Ik);
        for (const Fk of kk._groups.keys()) ak?.get(Fk)?.w6.delete(kk);
        kk._runtimeBuilds = void 0, Ik._pbrMeshGeomContexts = void 0
      })), qk
    }

    function ek(kk, Fk, Ik) {
      const Xk = Fk.installed.get(Ik);
      if (Xk) {
        for (const Fk of Xk) ak?.get(Fk)?.scenes.get(kk)?.delete(Ik);
        Fk.installed.delete(Ik), Fk.installedMeshes.delete(Ik)
      }
    }

    function wk(kk, Fk, Ik) {
      ek(kk, Fk, Ik)
    }

    function Hk(kk, Fk, Ik, Xk, Tk, ik) {
      return !Fk.ee && Fk.generations.get(Xk) === ik && kk.meshes.includes(Xk) && Xk.material === Tk && Tk._buildGroup === Ik
    }

    function Jk(kk, Fk, Ik, Tk) {
      const ik = kk._meshDisposables.get(Ik);
      if (ik && ik !== Tk) {
        kk._meshDisposables.delete(Ik);
        for (const kk of ik) kk()
      }
      if (Tk)
        if (kk.meshes.includes(Ik)) kk._meshDisposables.set(Ik, Tk);
        else if (Fk.ee)
        for (const Xk of Tk) Xk();
      else(0, Xk.b)(kk.surface.engine, (() => {
        for (const kk of Tk) kk()
      }));
      yk(Fk, Ik, Tk)
    }

    function xk(kk, Fk) {
      if (!Fk.ee) return;
      const Ik = kk._disposables.splice(0);
      for (const Xk of Ik) Xk()
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);