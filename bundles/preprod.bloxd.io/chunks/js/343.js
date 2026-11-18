export const id = 343;
export const ids = [343];
export const modules = {
  59806: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      A: () => oy,
      B: () => Ky,
      C: () => By,
      X: () => ey
    });
    var Uy = Wy(40204),
      hy = (yb, bb) => yb.order - bb.order;

    function fy(yb, bb, Wy) {
      yb.pendingDisposers.set(bb, Wy)
    }

    function Zy(yb, bb, Wy) {
      Wy && yb.pendingDisposers.get(bb) === Wy && yb.pendingDisposers.delete(bb)
    }
    var cb = null,
      Py = null;

    function oy(yb, bb, Wy, Uy) {
      if (!bb || Wy.material !== bb) return Uy ?? Promise.resolve();
      const hy = Ky(yb, bb._buildGroup, Wy);
      return Uy ? Promise.all([Uy, hy]).then((() => {})) : hy
    }

    function By(yb, bb, Wy) {
      let Uy = Wy;
      for (const hy of bb) {
        const bb = Array.isArray(hy),
          Wy = bb ? hy[0] : hy;
        Uy = oy(yb, bb ? hy[1] : Wy.material, Wy, Uy)
      }
      return (Uy ?? Promise.resolve()).catch((bb => {
        yb._runtimeBuilds?._x(bb)
      }))
    }

    function Ky(yb, bb, Uy) {
      if (yb._z || !yb.meshes.includes(Uy)) return yb._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(yb, bb, Wy) {
          for (const [hy, fy] of yb._groups)
            if (hy !== bb) {
              const yb = fy.indexOf(Wy);
              yb >= 0 && fy.splice(yb, 1)
            } let Uy = yb._groups.get(bb);
          Uy || (Uy = [], yb._groups.set(bb, Uy));
          Uy.includes(Wy) || Uy.push(Wy)
        }(yb, bb, Uy), "pbr" === bb._materialFamily && (yb._built || yb._groups.get(bb)?.r)) {
        const bb = yb._runtimeBuilds ?? qb(yb),
          Uy = Wy.e(373).then((() => Wy(60493))).then((bb => {
            let {
              rebuildScenePbrPipelines: Wy
            } = bb;
            return yb._z ? void 0 : Wy(yb, !0)
          })).catch((bb => {
            yb._runtimeBuilds?._x(bb)
          }));
        return bb.track(Uy)
      }
      return (yb._runtimeBuilds ?? qb(yb)).queue(bb, Uy).catch((() => {}))
    }

    function ey(yb, bb, Wy) {
      return yb._z ? Promise.resolve(void 0) : (yb._runtimeBuilds ?? qb(yb)).exclusive(bb, Wy)
    }

    function qb(yb) {
      const bb = {
          rh: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Wy = yb,
        oy = {
          queue: (Wy, By) => {
            const Ky = (bb.generations.get(By) ?? 0) + 1,
              ey = By.material;
            bb.generations.set(By, Ky);
            const qb = bb.chains.get(By),
              sy = [bb.tail, cb?.get(Wy)].filter((yb => !!yb));
            let Sy = () => {};
            const Cy = new Promise((yb => {
              Sy = yb
            }));
            bb.tail = Cy, (cb ??= new WeakMap).set(Wy, Cy);
            const Ty = (qb ? qb.catch((() => {})) : Promise.resolve()).then((() => Promise.all(sy))).then((() => async function(yb, bb, Wy, cb, oy, By) {
              if (!Ey(yb, bb, Wy, cb, oy, By)) return;
              const Ky = yb._meshDisposables.get(cb);
              Ky && (yb._meshDisposables.delete(cb), fy(bb, cb, Ky));
              const ey = Wy._rebuildSingle,
                qb = Py?.get(Wy)?.UZy.get(yb) ?? yb._groups.get(Wy)?.r,
                sy = !!yb._groups.get(Wy)?.r,
                Sy = yb._disposables.length,
                Cy = yb,
                Ty = Cy._pbrGeomContext;
              let Vy, Jy;
              try {
                Jy = await Wy(yb, [cb]), Vy = Cy._pbrGeomContext
              } catch (Oy) {
                if (ly(yb, bb, cb, Ky), mb(yb, bb), !Ey(yb, bb, Wy, cb, oy, By)) return;
                throw Oy
              } finally {
                Wy._rebuildSingle = ey, "pbr" === Wy._materialFamily && sy && (Cy._pbrGeomContext = Ty)
              }
              if (!Ey(yb, bb, Wy, cb, oy, By)) return ly(yb, bb, cb, Ky), void mb(yb, bb);
              for (let Uy = yb._renderables.length - 1; Uy >= 0; Uy--) yb._renderables[Uy].mesh === cb && yb._renderables.splice(Uy, 1);
              if (Ky) {
                for (const bb of Ky) {
                  const Wy = yb._disposables.indexOf(bb);
                  Wy >= 0 && yb._disposables.splice(Wy, 1);
                  const Uy = bb.p;
                  if (Uy) {
                    Uy._disposed = !0;
                    const yb = Uy._owner;
                    if (yb) {
                      const bb = yb.indexOf(Uy);
                      bb >= 0 && yb.splice(bb, 1), Uy._owner = void 0, 0 === yb.length && Uy._onOwnerEmpty?.()
                    } else Uy._onOwnerEmpty?.();
                    Uy._onOwnerEmpty && (Uy._onOwnerEmpty = void 0)
                  }
                }(0, Uy.b)(yb.surface.engine, (() => {
                  for (const yb of Ky) yb()
                }))
              }
              Zy(bb, cb, Ky), yb._renderables.push(...Jy.renderables);
              const gb = yb._groups.get(Wy);
              gb && (gb.o = [...(gb.o ?? []).filter((yb => yb.mesh !== cb)), ...Jy.renderables]);
              Jy.updater && yb._uniformUpdaters.push(Jy.updater);
              sy && function(yb, bb) {
                const Wy = new Set(yb._disposables.slice(0, bb));
                for (let Uy = yb._disposables.length - 1; Uy >= bb; Uy--) Wy.has(yb._disposables[Uy]) && yb._disposables.splice(Uy, 1)
              }(yb, Sy);
              "pbr" === Wy._materialFamily && sy && Vy && (Cy._pbrMeshGeomContexts ??= new WeakMap).set(cb, Vy);
              (function(yb, bb, Wy, Uy, hy, fy) {
                let Zy = Py?.get(Wy);
                if (!Zy) {
                  const yb = new WeakMap,
                    bb = new WeakMap,
                    Uy = (Uy, hy, fy, Zy) => {
                      const cb = yb.get(Uy)?.get(hy);
                      if (cb) return cb(Uy, hy, fy, Zy);
                      const Py = bb.get(Uy) ?? Uy._groups.get(Wy)?.r;
                      if (Py) return Py(Uy, hy, fy, Zy);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Zy = {
                    UZy: bb,
                    dispatch: Uy,
                    scenes: yb
                  }, (Py ??= new WeakMap).set(Wy, Zy)
                }
                let cb = Zy.scenes.get(yb);
                cb || (cb = new WeakMap, Zy.scenes.set(yb, cb));
                cb.set(Uy, hy), Zy.UZy.has(yb) || Zy.UZy.set(yb, fy ?? hy);
                const oy = yb._groups.get(Wy);
                oy && (oy.r = Zy.dispatch);
                let By = bb.installed.get(Uy);
                By || (By = new Set, bb.installed.set(Uy, By));
                By.add(Wy), bb.installedMeshes.add(Uy)
              })(yb, bb, Wy, cb, Jy.rebuildSingle, sy ? qb : Jy.rebuildSingle), cb.material._csmGen = (cb.material._csmGen ?? 0) + 1;
              const Gy = yb._groups.get(Wy);
              Gy && !sy && (Gy.r = Jy.rebuildSingle);
              yb._renderables.sort(hy), yb._renderableVersion++, yb._materialEpoch++
            }(yb, bb, Wy, By, ey, Ky))).catch((Uy => {
              throw Ey(yb, bb, Wy, By, ey, Ky) && (bb.error = Uy instanceof Error ? Uy : new Error("Runtime mesh build failed", {
                cause: Uy
              })), Uy
            })).finally((() => {
              Sy(), bb.tail === Cy && (bb.tail = null), cb?.get(Wy) === Cy && cb.delete(Wy)
            })).finally((() => {
              bb.chains.get(By) === Ty && bb.chains.delete(By)
            }));
            return bb.chains.set(By, Ty), oy.track(Ty)
          },
          all: () => Promise.all(bb.active).then((() => {})),
          track: yb => {
            const Wy = yb.finally((() => bb.active.delete(Wy)));
            return bb.active.add(Wy), Promise.all(bb.active).then((() => {}))
          },
          base: (bb, Wy) => {
            const Uy = Py?.get(bb);
            return Uy && Uy.UZy.set(yb, Wy), Uy?.dispatch ?? Wy
          },
          get w() {
            return !!bb.tail
          },
          pendingDisposers: yb => bb.pendingDisposers.get(yb),
          holdPendingDisposers: (yb, Wy) => fy(bb, yb, Wy),
          releasePendingDisposers: (yb, Wy) => Zy(bb, yb, Wy),
          reset: Uy => {
            Sy(yb, bb, Uy), Wy._pbrMeshGeomContexts?.delete(Uy)
          },
          remove: Uy => {
            bb.generations.set(Uy, (bb.generations.get(Uy) ?? 0) + 1), bb.chains.delete(Uy), sy(yb, bb, Uy), Wy._pbrMeshGeomContexts?.delete(Uy)
          },
          dropBase: bb => {
            const Wy = Py?.get(bb);
            Wy && (Wy.UZy.delete(yb), Wy.scenes.delete(yb))
          },
          wait: async yb => {
            const Wy = new Set;
            for (const Uy of yb) {
              const yb = bb.chains.get(Uy);
              yb && Wy.add(yb)
            }
            await Promise.all(Wy)
          },
          _e: function() {
            let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (bb.error) {
              const Wy = bb.error;
              throw yb && (bb.error = null), Wy
            }
          },
          _x: yb => {
            bb.error = yb instanceof Error ? yb : new Error("Runtime mesh build failed", {
              cause: yb
            })
          },
          _d: () => bb.rh,
          exclusive: (yb, Wy) => {
            const Uy = [];
            bb.tail && Uy.push(bb.tail);
            const hy = cb?.get(yb);
            hy && Uy.push(hy);
            const fy = Promise.all(Uy).then(Wy),
              Zy = fy.then((() => {}), (() => {}));
            return bb.tail = Zy, (cb ??= new WeakMap).set(yb, Zy), Zy.then((() => {
              bb.tail === Zy && (bb.tail = null), cb?.get(yb) === Zy && cb.delete(yb)
            })), fy
          }
        };
      return yb._runtimeBuilds = oy, (yb._beforeRender ??= []).push((() => {
        oy._e()
      })), yb._disposables.push((() => {
        bb.rh = !0, bb.active.clear();
        for (const Wy of bb.installedMeshes) Sy(yb, bb, Wy);
        for (const bb of yb._groups.keys()) Py?.get(bb)?.UZy.delete(yb);
        yb._runtimeBuilds = void 0, Wy._pbrMeshGeomContexts = void 0
      })), oy
    }

    function sy(yb, bb, Wy) {
      const Uy = bb.installed.get(Wy);
      if (Uy) {
        for (const bb of Uy) Py?.get(bb)?.scenes.get(yb)?.delete(Wy);
        bb.installed.delete(Wy), bb.installedMeshes.delete(Wy)
      }
    }

    function Sy(yb, bb, Wy) {
      sy(yb, bb, Wy)
    }

    function Ey(yb, bb, Wy, Uy, hy, fy) {
      return !bb.rh && bb.generations.get(Uy) === fy && yb.meshes.includes(Uy) && Uy.material === hy && hy._buildGroup === Wy
    }

    function ly(yb, bb, Wy, hy) {
      const fy = yb._meshDisposables.get(Wy);
      if (fy && fy !== hy) {
        yb._meshDisposables.delete(Wy);
        for (const yb of fy) yb()
      }
      if (hy)
        if (yb.meshes.includes(Wy)) yb._meshDisposables.set(Wy, hy);
        else if (bb.rh)
        for (const Uy of hy) Uy();
      else(0, Uy.b)(yb.surface.engine, (() => {
        for (const yb of hy) yb()
      }));
      Zy(bb, Wy, hy)
    }

    function mb(yb, bb) {
      if (!bb.rh) return;
      const Wy = yb._disposables.splice(0);
      for (const Uy of Wy) Uy()
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);