export const id = 340;
export const ids = [340];
export const modules = {
  59200: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      A: () => Pc,
      B: () => Oc,
      C: () => qB,
      X: () => Tc
    });
    var Vc = nc(39682),
      Ic = (cB, Bc) => cB.order - Bc.order;

    function rB(cB, Bc, nc) {
      cB.pendingDisposers.set(Bc, nc)
    }

    function uc(cB, Bc, nc) {
      nc && cB.pendingDisposers.get(Bc) === nc && cB.pendingDisposers.delete(Bc)
    }
    var sc = null,
      Mc = null;

    function Pc(cB, Bc, nc, Vc) {
      if (!Bc || nc.material !== Bc) return Vc ?? Promise.resolve();
      const Ic = Oc(cB, Bc._buildGroup, nc);
      return Vc ? Promise.all([Vc, Ic]).then((() => {})) : Ic
    }

    function qB(cB, Bc, nc) {
      let Vc = nc;
      for (const Ic of Bc) {
        const Bc = Array.isArray(Ic),
          nc = Bc ? Ic[0] : Ic;
        Vc = Pc(cB, Bc ? Ic[1] : nc.material, nc, Vc)
      }
      return (Vc ?? Promise.resolve()).catch((Bc => {
        cB._runtimeBuilds?._x(Bc)
      }))
    }

    function Oc(cB, Bc, Vc) {
      if (cB._z || !cB.meshes.includes(Vc)) return cB._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(cB, Bc, nc) {
          for (const [Ic, rB] of cB._groups)
            if (Ic !== Bc) {
              const cB = rB.indexOf(nc);
              cB >= 0 && rB.splice(cB, 1)
            } let Vc = cB._groups.get(Bc);
          Vc || (Vc = [], cB._groups.set(Bc, Vc));
          Vc.includes(nc) || Vc.push(nc)
        }(cB, Bc, Vc), "pbr" === Bc._materialFamily && (cB._built || cB._groups.get(Bc)?.r)) {
        const Bc = cB._runtimeBuilds ?? fc(cB),
          Vc = nc.e(370).then((() => nc(59796))).then((Bc => {
            let {
              rebuildScenePbrPipelines: nc
            } = Bc;
            return cB._z ? void 0 : nc(cB, !0)
          })).catch((Bc => {
            cB._runtimeBuilds?._x(Bc)
          }));
        return Bc.track(Vc)
      }
      return (cB._runtimeBuilds ?? fc(cB)).queue(Bc, Vc).catch((() => {}))
    }

    function Tc(cB, Bc, nc) {
      return cB._z ? Promise.resolve(void 0) : (cB._runtimeBuilds ?? fc(cB)).exclusive(Bc, nc)
    }

    function fc(cB) {
      const Bc = {
          CV: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        nc = cB,
        Pc = {
          queue: (nc, qB) => {
            const Oc = (Bc.generations.get(qB) ?? 0) + 1,
              Tc = qB.material;
            Bc.generations.set(qB, Oc);
            const fc = Bc.chains.get(qB),
              mB = [Bc.tail, sc?.get(nc)].filter((cB => !!cB));
            let ec = () => {};
            const zB = new Promise((cB => {
              ec = cB
            }));
            Bc.tail = zB, (sc ??= new WeakMap).set(nc, zB);
            const pc = (fc ? fc.catch((() => {})) : Promise.resolve()).then((() => Promise.all(mB))).then((() => async function(cB, Bc, nc, sc, Pc, qB) {
              if (!tB(cB, Bc, nc, sc, Pc, qB)) return;
              const Oc = cB._meshDisposables.get(sc);
              Oc && (cB._meshDisposables.delete(sc), rB(Bc, sc, Oc));
              const Tc = nc._rebuildSingle,
                fc = Mc?.get(nc)?.Xrc.get(cB) ?? cB._groups.get(nc)?.r,
                mB = !!cB._groups.get(nc)?.r,
                ec = cB._disposables.length,
                zB = cB,
                pc = zB._pbrGeomContext;
              let hc, aB;
              try {
                aB = await nc(cB, [sc]), hc = zB._pbrGeomContext
              } catch (Lc) {
                if (Sc(cB, Bc, sc, Oc), yB(cB, Bc), !tB(cB, Bc, nc, sc, Pc, qB)) return;
                throw Lc
              } finally {
                nc._rebuildSingle = Tc, "pbr" === nc._materialFamily && mB && (zB._pbrGeomContext = pc)
              }
              if (!tB(cB, Bc, nc, sc, Pc, qB)) return Sc(cB, Bc, sc, Oc), void yB(cB, Bc);
              for (let Vc = cB._renderables.length - 1; Vc >= 0; Vc--) cB._renderables[Vc].mesh === sc && cB._renderables.splice(Vc, 1);
              if (Oc) {
                for (const Bc of Oc) {
                  const nc = cB._disposables.indexOf(Bc);
                  nc >= 0 && cB._disposables.splice(nc, 1);
                  const Vc = Bc.p;
                  if (Vc) {
                    Vc._disposed = !0;
                    const cB = Vc._owner;
                    if (cB) {
                      const Bc = cB.indexOf(Vc);
                      Bc >= 0 && cB.splice(Bc, 1), Vc._owner = void 0, 0 === cB.length && Vc._onOwnerEmpty?.()
                    } else Vc._onOwnerEmpty?.();
                    Vc._onOwnerEmpty && (Vc._onOwnerEmpty = void 0)
                  }
                }(0, Vc.d)(cB.surface.engine, (() => {
                  for (const cB of Oc) cB()
                }))
              }
              uc(Bc, sc, Oc), cB._renderables.push(...aB.renderables);
              const lc = cB._groups.get(nc);
              lc && (lc.o = [...(lc.o ?? []).filter((cB => cB.mesh !== sc)), ...aB.renderables]);
              aB.updater && cB._uniformUpdaters.push(aB.updater);
              mB && function(cB, Bc) {
                const nc = new Set(cB._disposables.slice(0, Bc));
                for (let Vc = cB._disposables.length - 1; Vc >= Bc; Vc--) nc.has(cB._disposables[Vc]) && cB._disposables.splice(Vc, 1)
              }(cB, ec);
              "pbr" === nc._materialFamily && mB && hc && (zB._pbrMeshGeomContexts ??= new WeakMap).set(sc, hc);
              (function(cB, Bc, nc, Vc, Ic, rB) {
                let uc = Mc?.get(nc);
                if (!uc) {
                  const cB = new WeakMap,
                    Bc = new WeakMap,
                    Vc = (Vc, Ic, rB, uc) => {
                      const sc = cB.get(Vc)?.get(Ic);
                      if (sc) return sc(Vc, Ic, rB, uc);
                      const Mc = Bc.get(Vc) ?? Vc._groups.get(nc)?.r;
                      if (Mc) return Mc(Vc, Ic, rB, uc);
                      throw new Error("Material group has not completed its initial build")
                    };
                  uc = {
                    Xrc: Bc,
                    dispatch: Vc,
                    scenes: cB
                  }, (Mc ??= new WeakMap).set(nc, uc)
                }
                let sc = uc.scenes.get(cB);
                sc || (sc = new WeakMap, uc.scenes.set(cB, sc));
                sc.set(Vc, Ic), uc.Xrc.has(cB) || uc.Xrc.set(cB, rB ?? Ic);
                const Pc = cB._groups.get(nc);
                Pc && (Pc.r = uc.dispatch);
                let qB = Bc.installed.get(Vc);
                qB || (qB = new Set, Bc.installed.set(Vc, qB));
                qB.add(nc), Bc.installedMeshes.add(Vc)
              })(cB, Bc, nc, sc, aB.rebuildSingle, mB ? fc : aB.rebuildSingle), sc.material._csmGen = (sc.material._csmGen ?? 0) + 1;
              const Yc = cB._groups.get(nc);
              Yc && !mB && (Yc.r = aB.rebuildSingle);
              cB._renderables.sort(Ic), cB._renderableVersion++, cB._materialEpoch++
            }(cB, Bc, nc, qB, Tc, Oc))).catch((Vc => {
              throw tB(cB, Bc, nc, qB, Tc, Oc) && (Bc.error = Vc instanceof Error ? Vc : new Error("Runtime mesh build failed", {
                cause: Vc
              })), Vc
            })).finally((() => {
              ec(), Bc.tail === zB && (Bc.tail = null), sc?.get(nc) === zB && sc.delete(nc)
            })).finally((() => {
              Bc.chains.get(qB) === pc && Bc.chains.delete(qB)
            }));
            return Bc.chains.set(qB, pc), Pc.track(pc)
          },
          all: () => Promise.all(Bc.active).then((() => {})),
          track: cB => {
            const nc = cB.finally((() => Bc.active.delete(nc)));
            return Bc.active.add(nc), Promise.all(Bc.active).then((() => {}))
          },
          base: (Bc, nc) => {
            const Vc = Mc?.get(Bc);
            return Vc && Vc.Xrc.set(cB, nc), Vc?.dispatch ?? nc
          },
          get w() {
            return !!Bc.tail
          },
          pendingDisposers: cB => Bc.pendingDisposers.get(cB),
          holdPendingDisposers: (cB, nc) => rB(Bc, cB, nc),
          releasePendingDisposers: (cB, nc) => uc(Bc, cB, nc),
          reset: Vc => {
            ec(cB, Bc, Vc), nc._pbrMeshGeomContexts?.delete(Vc)
          },
          remove: Vc => {
            Bc.generations.set(Vc, (Bc.generations.get(Vc) ?? 0) + 1), Bc.chains.delete(Vc), mB(cB, Bc, Vc), nc._pbrMeshGeomContexts?.delete(Vc)
          },
          dropBase: Bc => {
            const nc = Mc?.get(Bc);
            nc && (nc.Xrc.delete(cB), nc.scenes.delete(cB))
          },
          wait: async cB => {
            const nc = new Set;
            for (const Vc of cB) {
              const cB = Bc.chains.get(Vc);
              cB && nc.add(cB)
            }
            await Promise.all(nc)
          },
          _e: function() {
            let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Bc.error) {
              const nc = Bc.error;
              throw cB && (Bc.error = null), nc
            }
          },
          _x: cB => {
            Bc.error = cB instanceof Error ? cB : new Error("Runtime mesh build failed", {
              cause: cB
            })
          },
          _d: () => Bc.CV,
          exclusive: (cB, nc) => {
            const Vc = [];
            Bc.tail && Vc.push(Bc.tail);
            const Ic = sc?.get(cB);
            Ic && Vc.push(Ic);
            const rB = Promise.all(Vc).then(nc),
              uc = rB.then((() => {}), (() => {}));
            return Bc.tail = uc, (sc ??= new WeakMap).set(cB, uc), uc.then((() => {
              Bc.tail === uc && (Bc.tail = null), sc?.get(cB) === uc && sc.delete(cB)
            })), rB
          }
        };
      return cB._runtimeBuilds = Pc, (cB._beforeRender ??= []).push((() => {
        Pc._e()
      })), cB._disposables.push((() => {
        Bc.CV = !0, Bc.active.clear();
        for (const nc of Bc.installedMeshes) ec(cB, Bc, nc);
        for (const Bc of cB._groups.keys()) Mc?.get(Bc)?.Xrc.delete(cB);
        cB._runtimeBuilds = void 0, nc._pbrMeshGeomContexts = void 0
      })), Pc
    }

    function mB(cB, Bc, nc) {
      const Vc = Bc.installed.get(nc);
      if (Vc) {
        for (const Bc of Vc) Mc?.get(Bc)?.scenes.get(cB)?.delete(nc);
        Bc.installed.delete(nc), Bc.installedMeshes.delete(nc)
      }
    }

    function ec(cB, Bc, nc) {
      mB(cB, Bc, nc)
    }

    function tB(cB, Bc, nc, Vc, Ic, rB) {
      return !Bc.CV && Bc.generations.get(Vc) === rB && cB.meshes.includes(Vc) && Vc.material === Ic && Ic._buildGroup === nc
    }

    function Sc(cB, Bc, nc, Ic) {
      const rB = cB._meshDisposables.get(nc);
      if (rB && rB !== Ic) {
        cB._meshDisposables.delete(nc);
        for (const cB of rB) cB()
      }
      if (Ic)
        if (cB.meshes.includes(nc)) cB._meshDisposables.set(nc, Ic);
        else if (Bc.CV)
        for (const Vc of Ic) Vc();
      else(0, Vc.d)(cB.surface.engine, (() => {
        for (const cB of Ic) cB()
      }));
      uc(Bc, nc, Ic)
    }

    function yB(cB, Bc) {
      if (!Bc.CV) return;
      const nc = cB._disposables.splice(0);
      for (const Vc of nc) Vc()
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);