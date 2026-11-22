export const id = 362;
export const ids = [362];
export const modules = {
  60780: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      A: () => mk,
      B: () => Kk,
      C: () => Mk,
      X: () => xk
    });
    var Dk = ik(41307),
      fk = (kk, ek) => kk.order - ek.order;

    function Sk(kk, ek, ik) {
      kk.pendingDisposers.set(ek, ik)
    }

    function bk(kk, ek, ik) {
      ik && kk.pendingDisposers.get(ek) === ik && kk.pendingDisposers.delete(ek)
    }
    var rk = null,
      Pk = null;

    function mk(kk, ek, ik, Dk) {
      if (!ek || ik.material !== ek) return Dk ?? Promise.resolve();
      const fk = Kk(kk, ek._buildGroup, ik);
      return Dk ? Promise.all([Dk, fk]).then((() => {})) : fk
    }

    function Mk(kk, ek, ik) {
      let Dk = ik;
      for (const fk of ek) {
        const ek = Array.isArray(fk),
          ik = ek ? fk[0] : fk;
        Dk = mk(kk, ek ? fk[1] : ik.material, ik, Dk)
      }
      return (Dk ?? Promise.resolve()).catch((ek => {
        kk._runtimeBuilds?._x(ek)
      }))
    }

    function Kk(kk, ek, Dk) {
      if (kk._z || !kk.meshes.includes(Dk)) return kk._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(kk, ek, ik) {
          for (const [fk, Sk] of kk._groups)
            if (fk !== ek) {
              const kk = Sk.indexOf(ik);
              kk >= 0 && Sk.splice(kk, 1)
            } let Dk = kk._groups.get(ek);
          Dk || (Dk = [], kk._groups.set(ek, Dk));
          Dk.includes(ik) || Dk.push(ik)
        }(kk, ek, Dk), "pbr" === ek._materialFamily && (kk._built || kk._groups.get(ek)?.r)) {
        const ek = kk._runtimeBuilds ?? nk(kk),
          Dk = ik.e(392).then((() => ik(61323))).then((ek => {
            let {
              rebuildScenePbrPipelines: ik
            } = ek;
            return kk._z ? void 0 : ik(kk, !0)
          })).catch((ek => {
            kk._runtimeBuilds?._x(ek)
          }));
        return ek.track(Dk)
      }
      return (kk._runtimeBuilds ?? nk(kk)).queue(ek, Dk).catch((() => {}))
    }

    function xk(kk, ek, ik) {
      return kk._z ? Promise.resolve(void 0) : (kk._runtimeBuilds ?? nk(kk)).exclusive(ek, ik)
    }

    function nk(kk) {
      const ek = {
          aU: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        ik = kk,
        mk = {
          queue: (ik, Mk) => {
            const Kk = (ek.generations.get(Mk) ?? 0) + 1,
              xk = Mk.material;
            ek.generations.set(Mk, Kk);
            const nk = ek.chains.get(Mk),
              Uk = [ek.tail, rk?.get(ik)].filter((kk => !!kk));
            let Hk = () => {};
            const yk = new Promise((kk => {
              Hk = kk
            }));
            ek.tail = yk, (rk ??= new WeakMap).set(ik, yk);
            const Yk = (nk ? nk.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Uk))).then((() => async function(kk, ek, ik, rk, mk, Mk) {
              if (!wk(kk, ek, ik, rk, mk, Mk)) return;
              const Kk = kk._meshDisposables.get(rk);
              Kk && (kk._meshDisposables.delete(rk), Sk(ek, rk, Kk));
              const xk = ik._rebuildSingle,
                nk = Pk?.get(ik)?.Q_.get(kk) ?? kk._groups.get(ik)?.r,
                Uk = !!kk._groups.get(ik)?.r,
                Hk = kk._disposables.length,
                yk = kk,
                Yk = yk._pbrGeomContext;
              let Lk, Ck;
              try {
                Ck = await ik(kk, [rk]), Lk = yk._pbrGeomContext
              } catch (sk) {
                if (lk(kk, ek, rk, Kk), pk(kk, ek), !wk(kk, ek, ik, rk, mk, Mk)) return;
                throw sk
              } finally {
                ik._rebuildSingle = xk, "pbr" === ik._materialFamily && Uk && (yk._pbrGeomContext = Yk)
              }
              if (!wk(kk, ek, ik, rk, mk, Mk)) return lk(kk, ek, rk, Kk), void pk(kk, ek);
              for (let Dk = kk._renderables.length - 1; Dk >= 0; Dk--) kk._renderables[Dk].mesh === rk && kk._renderables.splice(Dk, 1);
              if (Kk) {
                for (const ek of Kk) {
                  const ik = kk._disposables.indexOf(ek);
                  ik >= 0 && kk._disposables.splice(ik, 1);
                  const Dk = ek.p;
                  if (Dk) {
                    Dk._disposed = !0;
                    const kk = Dk._owner;
                    if (kk) {
                      const ek = kk.indexOf(Dk);
                      ek >= 0 && kk.splice(ek, 1), Dk._owner = void 0, 0 === kk.length && Dk._onOwnerEmpty?.()
                    } else Dk._onOwnerEmpty?.();
                    Dk._onOwnerEmpty && (Dk._onOwnerEmpty = void 0)
                  }
                }(0, Dk.e)(kk.surface.engine, (() => {
                  for (const kk of Kk) kk()
                }))
              }
              bk(ek, rk, Kk), kk._renderables.push(...Ck.renderables);
              const Ak = kk._groups.get(ik);
              Ak && (Ak.o = [...(Ak.o ?? []).filter((kk => kk.mesh !== rk)), ...Ck.renderables]);
              Ck.updater && kk._uniformUpdaters.push(Ck.updater);
              Uk && function(kk, ek) {
                const ik = new Set(kk._disposables.slice(0, ek));
                for (let Dk = kk._disposables.length - 1; Dk >= ek; Dk--) ik.has(kk._disposables[Dk]) && kk._disposables.splice(Dk, 1)
              }(kk, Hk);
              "pbr" === ik._materialFamily && Uk && Lk && (yk._pbrMeshGeomContexts ??= new WeakMap).set(rk, Lk);
              (function(kk, ek, ik, Dk, fk, Sk) {
                let bk = Pk?.get(ik);
                if (!bk) {
                  const kk = new WeakMap,
                    ek = new WeakMap,
                    Dk = (Dk, fk, Sk, bk) => {
                      const rk = kk.get(Dk)?.get(fk);
                      if (rk) return rk(Dk, fk, Sk, bk);
                      const Pk = ek.get(Dk) ?? Dk._groups.get(ik)?.r;
                      if (Pk) return Pk(Dk, fk, Sk, bk);
                      throw new Error("Material group has not completed its initial build")
                    };
                  bk = {
                    Q_: ek,
                    dispatch: Dk,
                    scenes: kk
                  }, (Pk ??= new WeakMap).set(ik, bk)
                }
                let rk = bk.scenes.get(kk);
                rk || (rk = new WeakMap, bk.scenes.set(kk, rk));
                rk.set(Dk, fk), bk.Q_.has(kk) || bk.Q_.set(kk, Sk ?? fk);
                const mk = kk._groups.get(ik);
                mk && (mk.r = bk.dispatch);
                let Mk = ek.installed.get(Dk);
                Mk || (Mk = new Set, ek.installed.set(Dk, Mk));
                Mk.add(ik), ek.installedMeshes.add(Dk)
              })(kk, ek, ik, rk, Ck.rebuildSingle, Uk ? nk : Ck.rebuildSingle), rk.material._csmGen = (rk.material._csmGen ?? 0) + 1;
              const jk = kk._groups.get(ik);
              jk && !Uk && (jk.r = Ck.rebuildSingle);
              kk._renderables.sort(fk), kk._renderableVersion++, kk._materialEpoch++
            }(kk, ek, ik, Mk, xk, Kk))).catch((Dk => {
              throw wk(kk, ek, ik, Mk, xk, Kk) && (ek.error = Dk instanceof Error ? Dk : new Error("Runtime mesh build failed", {
                cause: Dk
              })), Dk
            })).finally((() => {
              Hk(), ek.tail === yk && (ek.tail = null), rk?.get(ik) === yk && rk.delete(ik)
            })).finally((() => {
              ek.chains.get(Mk) === Yk && ek.chains.delete(Mk)
            }));
            return ek.chains.set(Mk, Yk), mk.track(Yk)
          },
          all: () => Promise.all(ek.active).then((() => {})),
          track: kk => {
            const ik = kk.finally((() => ek.active.delete(ik)));
            return ek.active.add(ik), Promise.all(ek.active).then((() => {}))
          },
          base: (ek, ik) => {
            const Dk = Pk?.get(ek);
            return Dk && Dk.Q_.set(kk, ik), Dk?.dispatch ?? ik
          },
          get w() {
            return !!ek.tail
          },
          pendingDisposers: kk => ek.pendingDisposers.get(kk),
          holdPendingDisposers: (kk, ik) => Sk(ek, kk, ik),
          releasePendingDisposers: (kk, ik) => bk(ek, kk, ik),
          reset: Dk => {
            Hk(kk, ek, Dk), ik._pbrMeshGeomContexts?.delete(Dk)
          },
          remove: Dk => {
            ek.generations.set(Dk, (ek.generations.get(Dk) ?? 0) + 1), ek.chains.delete(Dk), Uk(kk, ek, Dk), ik._pbrMeshGeomContexts?.delete(Dk)
          },
          dropBase: ek => {
            const ik = Pk?.get(ek);
            ik && (ik.Q_.delete(kk), ik.scenes.delete(kk))
          },
          wait: async kk => {
            const ik = new Set;
            for (const Dk of kk) {
              const kk = ek.chains.get(Dk);
              kk && ik.add(kk)
            }
            await Promise.all(ik)
          },
          _e: function() {
            let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (ek.error) {
              const ik = ek.error;
              throw kk && (ek.error = null), ik
            }
          },
          _x: kk => {
            ek.error = kk instanceof Error ? kk : new Error("Runtime mesh build failed", {
              cause: kk
            })
          },
          _d: () => ek.aU,
          exclusive: (kk, ik) => {
            const Dk = [];
            ek.tail && Dk.push(ek.tail);
            const fk = rk?.get(kk);
            fk && Dk.push(fk);
            const Sk = Promise.all(Dk).then(ik),
              bk = Sk.then((() => {}), (() => {}));
            return ek.tail = bk, (rk ??= new WeakMap).set(kk, bk), bk.then((() => {
              ek.tail === bk && (ek.tail = null), rk?.get(kk) === bk && rk.delete(kk)
            })), Sk
          }
        };
      return kk._runtimeBuilds = mk, (kk._beforeRender ??= []).push((() => {
        mk._e()
      })), kk._disposables.push((() => {
        ek.aU = !0, ek.active.clear();
        for (const ik of ek.installedMeshes) Hk(kk, ek, ik);
        for (const ek of kk._groups.keys()) Pk?.get(ek)?.Q_.delete(kk);
        kk._runtimeBuilds = void 0, ik._pbrMeshGeomContexts = void 0
      })), mk
    }

    function Uk(kk, ek, ik) {
      const Dk = ek.installed.get(ik);
      if (Dk) {
        for (const ek of Dk) Pk?.get(ek)?.scenes.get(kk)?.delete(ik);
        ek.installed.delete(ik), ek.installedMeshes.delete(ik)
      }
    }

    function Hk(kk, ek, ik) {
      Uk(kk, ek, ik)
    }

    function wk(kk, ek, ik, Dk, fk, Sk) {
      return !ek.aU && ek.generations.get(Dk) === Sk && kk.meshes.includes(Dk) && Dk.material === fk && fk._buildGroup === ik
    }

    function lk(kk, ek, ik, fk) {
      const Sk = kk._meshDisposables.get(ik);
      if (Sk && Sk !== fk) {
        kk._meshDisposables.delete(ik);
        for (const kk of Sk) kk()
      }
      if (fk)
        if (kk.meshes.includes(ik)) kk._meshDisposables.set(ik, fk);
        else if (ek.aU)
        for (const Dk of fk) Dk();
      else(0, Dk.e)(kk.surface.engine, (() => {
        for (const kk of fk) kk()
      }));
      bk(ek, ik, fk)
    }

    function pk(kk, ek) {
      if (!ek.aU) return;
      const ik = kk._disposables.splice(0);
      for (const Dk of ik) Dk()
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);