export const id = 681;
export const ids = [681];
export const modules = {
  64722: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      A: () => Er,
      B: () => xr,
      C: () => pr,
      X: () => mr
    });
    var Zr = Qr(54245),
      Wr = (rr, Sr) => rr.order - Sr.order;

    function ar(rr, Sr, Qr) {
      rr.pendingDisposers.set(Sr, Qr)
    }

    function jr(rr, Sr, Qr) {
      Qr && rr.pendingDisposers.get(Sr) === Qr && rr.pendingDisposers.delete(Sr)
    }
    var Ir = null,
      fr = null;

    function Er(rr, Sr, Qr, Zr) {
      if (!Sr || Qr.material !== Sr) return Zr ?? Promise.resolve();
      const Wr = xr(rr, Sr._buildGroup, Qr);
      return Zr ? Promise.all([Zr, Wr]).then((() => {})) : Wr
    }

    function pr(rr, Sr, Qr) {
      let Zr = Qr;
      for (const Wr of Sr) {
        const Sr = Array.isArray(Wr),
          Qr = Sr ? Wr[0] : Wr;
        Zr = Er(rr, Sr ? Wr[1] : Qr.material, Qr, Zr)
      }
      return (Zr ?? Promise.resolve()).catch((Sr => {
        rr._runtimeBuilds?._x(Sr)
      }))
    }

    function xr(rr, Sr, Zr) {
      if (rr._z || !rr.meshes.includes(Zr)) return rr._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(rr, Sr, Qr) {
          for (const [Wr, ar] of rr._groups)
            if (Wr !== Sr) {
              const rr = ar.indexOf(Qr);
              rr >= 0 && ar.splice(rr, 1)
            } let Zr = rr._groups.get(Sr);
          Zr || (Zr = [], rr._groups.set(Sr, Zr));
          Zr.includes(Qr) || Zr.push(Qr)
        }(rr, Sr, Zr), "pbr" === Sr._materialFamily && (rr._built || rr._groups.get(Sr)?.r)) {
        const Sr = rr._runtimeBuilds ?? Nr(rr),
          Zr = Qr.e(711).then((() => Qr(65203))).then((Sr => {
            let {
              rebuildScenePbrPipelines: Qr
            } = Sr;
            return rr._z ? void 0 : Qr(rr, !0)
          })).catch((Sr => {
            rr._runtimeBuilds?._x(Sr)
          }));
        return Sr.track(Zr)
      }
      return (rr._runtimeBuilds ?? Nr(rr)).queue(Sr, Zr).catch((() => {}))
    }

    function mr(rr, Sr, Qr) {
      return rr._z ? Promise.resolve(void 0) : (rr._runtimeBuilds ?? Nr(rr)).exclusive(Sr, Qr)
    }

    function Nr(rr) {
      const Sr = {
          vU: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Qr = rr,
        Er = {
          queue: (Qr, pr) => {
            const xr = (Sr.generations.get(pr) ?? 0) + 1,
              mr = pr.material;
            Sr.generations.set(pr, xr);
            const Nr = Sr.chains.get(pr),
              Ur = [Sr.tail, Ir?.get(Qr)].filter((rr => !!rr));
            let tr = () => {};
            const nr = new Promise((rr => {
              tr = rr
            }));
            Sr.tail = nr, (Ir ??= new WeakMap).set(Qr, nr);
            const er = (Nr ? Nr.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Ur))).then((() => async function(rr, Sr, Qr, Ir, Er, pr) {
              if (!hr(rr, Sr, Qr, Ir, Er, pr)) return;
              const xr = rr._meshDisposables.get(Ir);
              xr && (rr._meshDisposables.delete(Ir), ar(Sr, Ir, xr));
              const mr = Qr._rebuildSingle,
                Nr = fr?.get(Qr)?.arr.get(rr) ?? rr._groups.get(Qr)?.r,
                Ur = !!rr._groups.get(Qr)?.r,
                tr = rr._disposables.length,
                nr = rr,
                er = nr._pbrGeomContext;
              let Kr, yr;
              try {
                yr = await Qr(rr, [Ir]), Kr = nr._pbrGeomContext
              } catch (vr) {
                if (zr(rr, Sr, Ir, xr), Yr(rr, Sr), !hr(rr, Sr, Qr, Ir, Er, pr)) return;
                throw vr
              } finally {
                Qr._rebuildSingle = mr, "pbr" === Qr._materialFamily && Ur && (nr._pbrGeomContext = er)
              }
              if (!hr(rr, Sr, Qr, Ir, Er, pr)) return zr(rr, Sr, Ir, xr), void Yr(rr, Sr);
              for (let Zr = rr._renderables.length - 1; Zr >= 0; Zr--) rr._renderables[Zr].mesh === Ir && rr._renderables.splice(Zr, 1);
              if (xr) {
                for (const Sr of xr) {
                  const Qr = rr._disposables.indexOf(Sr);
                  Qr >= 0 && rr._disposables.splice(Qr, 1);
                  const Zr = Sr.p;
                  if (Zr) {
                    Zr._disposed = !0;
                    const rr = Zr._owner;
                    if (rr) {
                      const Sr = rr.indexOf(Zr);
                      Sr >= 0 && rr.splice(Sr, 1), Zr._owner = void 0, 0 === rr.length && Zr._onOwnerEmpty?.()
                    } else Zr._onOwnerEmpty?.();
                    Zr._onOwnerEmpty && (Zr._onOwnerEmpty = void 0)
                  }
                }(0, Zr.f)(rr.surface.engine, (() => {
                  for (const rr of xr) rr()
                }))
              }
              jr(Sr, Ir, xr), rr._renderables.push(...yr.renderables);
              const Br = rr._groups.get(Qr);
              Br && (Br.o = [...(Br.o ?? []).filter((rr => rr.mesh !== Ir)), ...yr.renderables]);
              yr.updater && rr._uniformUpdaters.push(yr.updater);
              Ur && function(rr, Sr) {
                const Qr = new Set(rr._disposables.slice(0, Sr));
                for (let Zr = rr._disposables.length - 1; Zr >= Sr; Zr--) Qr.has(rr._disposables[Zr]) && rr._disposables.splice(Zr, 1)
              }(rr, tr);
              "pbr" === Qr._materialFamily && Ur && Kr && (nr._pbrMeshGeomContexts ??= new WeakMap).set(Ir, Kr);
              (function(rr, Sr, Qr, Zr, Wr, ar) {
                let jr = fr?.get(Qr);
                if (!jr) {
                  const rr = new WeakMap,
                    Sr = new WeakMap,
                    Zr = (Zr, Wr, ar, jr) => {
                      const Ir = rr.get(Zr)?.get(Wr);
                      if (Ir) return Ir(Zr, Wr, ar, jr);
                      const fr = Sr.get(Zr) ?? Zr._groups.get(Qr)?.r;
                      if (fr) return fr(Zr, Wr, ar, jr);
                      throw new Error("Material group has not completed its initial build")
                    };
                  jr = {
                    arr: Sr,
                    dispatch: Zr,
                    scenes: rr
                  }, (fr ??= new WeakMap).set(Qr, jr)
                }
                let Ir = jr.scenes.get(rr);
                Ir || (Ir = new WeakMap, jr.scenes.set(rr, Ir));
                Ir.set(Zr, Wr), jr.arr.has(rr) || jr.arr.set(rr, ar ?? Wr);
                const Er = rr._groups.get(Qr);
                Er && (Er.r = jr.dispatch);
                let pr = Sr.installed.get(Zr);
                pr || (pr = new Set, Sr.installed.set(Zr, pr));
                pr.add(Qr), Sr.installedMeshes.add(Zr)
              })(rr, Sr, Qr, Ir, yr.rebuildSingle, Ur ? Nr : yr.rebuildSingle), Ir.material._csmGen = (Ir.material._csmGen ?? 0) + 1;
              const Tr = rr._groups.get(Qr);
              Tr && !Ur && (Tr.r = yr.rebuildSingle);
              rr._renderables.sort(Wr), rr._renderableVersion++, rr._materialEpoch++
            }(rr, Sr, Qr, pr, mr, xr))).catch((Zr => {
              throw hr(rr, Sr, Qr, pr, mr, xr) && (Sr.error = Zr instanceof Error ? Zr : new Error("Runtime mesh build failed", {
                cause: Zr
              })), Zr
            })).finally((() => {
              tr(), Sr.tail === nr && (Sr.tail = null), Ir?.get(Qr) === nr && Ir.delete(Qr)
            })).finally((() => {
              Sr.chains.get(pr) === er && Sr.chains.delete(pr)
            }));
            return Sr.chains.set(pr, er), Er.track(er)
          },
          all: () => Promise.all(Sr.active).then((() => {})),
          track: rr => {
            const Qr = rr.finally((() => Sr.active.delete(Qr)));
            return Sr.active.add(Qr), Promise.all(Sr.active).then((() => {}))
          },
          base: (Sr, Qr) => {
            const Zr = fr?.get(Sr);
            return Zr && Zr.arr.set(rr, Qr), Zr?.dispatch ?? Qr
          },
          get w() {
            return !!Sr.tail
          },
          pendingDisposers: rr => Sr.pendingDisposers.get(rr),
          holdPendingDisposers: (rr, Qr) => ar(Sr, rr, Qr),
          releasePendingDisposers: (rr, Qr) => jr(Sr, rr, Qr),
          reset: Zr => {
            tr(rr, Sr, Zr), Qr._pbrMeshGeomContexts?.delete(Zr)
          },
          remove: Zr => {
            Sr.generations.set(Zr, (Sr.generations.get(Zr) ?? 0) + 1), Sr.chains.delete(Zr), Ur(rr, Sr, Zr), Qr._pbrMeshGeomContexts?.delete(Zr)
          },
          dropBase: Sr => {
            const Qr = fr?.get(Sr);
            Qr && (Qr.arr.delete(rr), Qr.scenes.delete(rr))
          },
          wait: async rr => {
            const Qr = new Set;
            for (const Zr of rr) {
              const rr = Sr.chains.get(Zr);
              rr && Qr.add(rr)
            }
            await Promise.all(Qr)
          },
          _e: function() {
            let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Sr.error) {
              const Qr = Sr.error;
              throw rr && (Sr.error = null), Qr
            }
          },
          _x: rr => {
            Sr.error = rr instanceof Error ? rr : new Error("Runtime mesh build failed", {
              cause: rr
            })
          },
          _d: () => Sr.vU,
          exclusive: (rr, Qr) => {
            const Zr = [];
            Sr.tail && Zr.push(Sr.tail);
            const Wr = Ir?.get(rr);
            Wr && Zr.push(Wr);
            const ar = Promise.all(Zr).then(Qr),
              jr = ar.then((() => {}), (() => {}));
            return Sr.tail = jr, (Ir ??= new WeakMap).set(rr, jr), jr.then((() => {
              Sr.tail === jr && (Sr.tail = null), Ir?.get(rr) === jr && Ir.delete(rr)
            })), ar
          }
        };
      return rr._runtimeBuilds = Er, (rr._beforeRender ??= []).push((() => {
        Er._e()
      })), rr._disposables.push((() => {
        Sr.vU = !0, Sr.active.clear();
        for (const Qr of Sr.installedMeshes) tr(rr, Sr, Qr);
        for (const Sr of rr._groups.keys()) fr?.get(Sr)?.arr.delete(rr);
        rr._runtimeBuilds = void 0, Qr._pbrMeshGeomContexts = void 0
      })), Er
    }

    function Ur(rr, Sr, Qr) {
      const Zr = Sr.installed.get(Qr);
      if (Zr) {
        for (const Sr of Zr) fr?.get(Sr)?.scenes.get(rr)?.delete(Qr);
        Sr.installed.delete(Qr), Sr.installedMeshes.delete(Qr)
      }
    }

    function tr(rr, Sr, Qr) {
      Ur(rr, Sr, Qr)
    }

    function hr(rr, Sr, Qr, Zr, Wr, ar) {
      return !Sr.vU && Sr.generations.get(Zr) === ar && rr.meshes.includes(Zr) && Zr.material === Wr && Wr._buildGroup === Qr
    }

    function zr(rr, Sr, Qr, Wr) {
      const ar = rr._meshDisposables.get(Qr);
      if (ar && ar !== Wr) {
        rr._meshDisposables.delete(Qr);
        for (const rr of ar) rr()
      }
      if (Wr)
        if (rr.meshes.includes(Qr)) rr._meshDisposables.set(Qr, Wr);
        else if (Sr.vU)
        for (const Zr of Wr) Zr();
      else(0, Zr.f)(rr.surface.engine, (() => {
        for (const rr of Wr) rr()
      }));
      jr(Sr, Qr, Wr)
    }

    function Yr(rr, Sr) {
      if (!Sr.vU) return;
      const Qr = rr._disposables.splice(0);
      for (const Zr of Qr) Zr()
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);