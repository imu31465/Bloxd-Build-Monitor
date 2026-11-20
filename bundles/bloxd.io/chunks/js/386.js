export const id = 386;
export const ids = [386];
export const modules = {
  61331: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      rebuildScenePbrPipelines: () => pv,
      rebuildSceneRenderables: () => dv
    });
    var hv = Pv(41035),
      Sv = (vv, zv) => vv.order - zv.order,
      ev = 8,
      gv = vv => dv(vv);
    async function pv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Nv(vv, "pbr", zv)
    }
    async function dv(vv) {
      await Nv(vv, void 0, !1)
    }
    async function Nv(vv, zv, pv) {
      const dv = vv;
      if (!dv._built && !pv) return;
      const Nv = dv._lightListVersion ?? 0,
        lv = dv.surface.engine,
        Tv = vv => {
          dv._z ? vv.forEach((vv => vv())) : (0, hv.b)(lv, (() => vv.forEach((vv => vv()))))
        };
      let Wv = !1,
        wv = !1,
        av = !1,
        sv = !1;
      try {
        for (let vv = 1;; vv++) {
          if (void 0 !== zv) {
            await Cv();
            break
          }
          if (cv(dv), await Cv(), !iv(dv)) break;
          if (vv >= ev) {
            dv._rebuildHook = gv, sv = !0, wv = !0;
            break
          }
        }
        av = !0
      } finally {
        if (Wv && (dv._renderables.sort(Sv), dv._renderableVersion++, dv._materialEpoch++, dv._built && dv._frameGraph.build()), void 0 === zv && av && !wv && (dv._lightListVersion ?? 0) === Nv) {
          const vv = dv._pendingTopologyRetirements?.splice(0);
          vv?.length && Tv(vv), sv || (dv._rebuildHook = void 0)
        }
      }
      async function Cv() {
        for (const [vv, hv] of dv._groups) {
          if (void 0 !== zv && vv._materialFamily !== zv) continue;
          if (0 === hv.length) {
            (hv.o || hv.r) && (Gv(vv, hv), Wv = !0);
            continue
          }
          const Sv = dv._runtimeBuilds;
          await (Sv?.wait(hv));
          let ev = !1;
          const pv = async () => {
            const zv = dv._runtimeBuilds,
              Pv = [...hv].filter((zv => dv.meshes.includes(zv) && zv.material?._buildGroup === vv));
            if (0 === Pv.length) return void Gv(vv, hv);
            const gv = !!hv.r,
              pv = dv._disposables.length,
              Nv = new Map,
              lv = new Map(Pv.map((vv => [vv, vv.material])));
            for (const vv of Pv) {
              const Pv = dv._meshDisposables.get(vv);
              Pv && (Nv.set(vv, Pv), dv._meshDisposables.delete(vv), zv?.holdPendingDisposers(vv, Pv))
            }
            let Wv, wv;
            dv._p = vv => (wv = vv, !0);
            try {
              Wv = await vv(dv, Pv)
            } catch (fv) {
              wv?.[1]();
              for (const Sv of Pv) {
                const Pv = Nv.get(Sv),
                  ev = dv._meshDisposables.get(Sv);
                if (ev && ev !== Pv)
                  for (const vv of ev) vv();
                const gv = dv.meshes.includes(Sv) && Sv.material === lv.get(Sv) && Sv.material?._buildGroup === vv && hv.includes(Sv);
                Pv && gv ? dv._meshDisposables.set(Sv, Pv) : (dv._meshDisposables.delete(Sv), Pv && Tv(Pv)), Pv && zv?.releasePendingDisposers(Sv, Pv)
              }
              throw fv
            } finally {
              delete dv._p
            }
            if (dv._z || Sv?._d()) {
              wv?.[1]();
              for (const zv of Pv) {
                const vv = dv._meshDisposables.get(zv),
                  Pv = Nv.get(zv);
                if (vv && vv !== Pv)
                  for (const zv of vv) zv();
                dv._meshDisposables.delete(zv)
              }
              for (const zv of dv._disposables.splice(0)) zv();
              const vv = [...Nv.values()].flat();
              Tv(vv);
              for (const [Pv, hv] of Nv) zv?.releasePendingDisposers(Pv, hv);
              return
            }
            wv?.[0](), vv._rebuildSingle = Wv.rebuildSingle, hv.r = dv._runtimeBuilds?.base(vv, Wv.rebuildSingle) ?? Wv.rebuildSingle, "pbr" === vv._materialFamily && Wv._G && (hv._w = null), gv && mv(dv, pv);
            const av = new Set(Pv.filter((zv => dv.meshes.includes(zv) && zv.material === lv.get(zv) && zv.material?._buildGroup === vv && hv.includes(zv))));
            if (av.size !== Pv.length && Wv.renderables.some((vv => !vv.mesh))) {
              for (const vv of Pv) {
                const Pv = dv._meshDisposables.get(vv),
                  hv = Nv.get(vv);
                if (Pv && Pv !== hv)
                  for (const vv of Pv) vv();
                hv && dv.meshes.includes(vv) ? dv._meshDisposables.set(vv, hv) : (dv._meshDisposables.delete(vv), hv && Tv(hv)), hv && zv?.releasePendingDisposers(vv, hv)
              }
              return void(ev = !0)
            }
            const sv = new Set;
            for (const vv of Pv)
              if (av.has(vv)) sv.add(vv.material), dv._runtimeBuilds?.reset(vv);
              else {
                const Pv = Nv.get(vv),
                  hv = dv._meshDisposables.get(vv);
                if (hv && hv !== Pv)
                  for (const vv of hv) vv();
                Pv && dv.meshes.includes(vv) ? (dv._meshDisposables.set(vv, Pv), Nv.delete(vv), zv?.releasePendingDisposers(vv, Pv)) : dv._meshDisposables.delete(vv)
              } for (const vv of sv) vv._csmGen = (vv._csmGen ?? 0) + 1;
            const Cv = hv.o,
              iv = Cv?.length ? new Set(Cv) : null;
            for (let vv = dv._renderables.length - 1; vv >= 0; vv--) {
              const zv = dv._renderables[vv];
              (av.has(zv.mesh) || iv?.has(zv)) && dv._renderables.splice(vv, 1)
            }
            const cv = Wv.renderables.filter((vv => !vv.mesh || av.has(vv.mesh)));
            dv._renderables.push(...cv), hv.o = cv;
            const jv = [...Nv.values()].flat();
            Tv(jv);
            for (const [vv, hv] of Nv) zv?.releasePendingDisposers(vv, hv)
          }, {
            X: Nv
          } = await Promise.resolve().then((() => Pv(60696))), lv = 3;
          for (let zv = 1;; zv++) {
            if (ev = !1, await Nv(dv, vv, pv), dv._z || Sv?._d()) return void(wv = !0);
            if (!ev) break;
            if (zv >= lv) {
              Gv(vv, hv), dv._rebuildHook = gv, sv = !0, wv = !0;
              break
            }
          }
          ev ? Wv = !0 : Wv = !0
        }
      }

      function iv(vv) {
        for (const zv of vv.meshes) {
          const Pv = zv.material?._buildGroup;
          if (Pv && !vv._groups.get(Pv)?.includes(zv)) return !0
        }
        return !1
      }

      function cv(vv) {
        const zv = new Map;
        for (const Pv of vv.meshes) {
          const vv = Pv.material?._buildGroup;
          if (!vv) continue;
          const hv = zv.get(vv);
          hv ? hv.push(Pv) : zv.set(vv, [Pv])
        }
        for (const [Pv, hv] of vv._groups) {
          const vv = zv.get(Pv) ?? [];
          (hv.length !== vv.length || vv.some(((vv, zv) => hv[zv] !== vv))) && (hv.length = 0, hv.push(...vv)), zv.delete(Pv)
        }
        for (const [Pv, hv] of zv) {
          const zv = hv;
          vv._groups.set(Pv, zv)
        }
      }

      function Gv(vv, zv) {
        const Pv = zv.o;
        if (Pv?.length) {
          const vv = new Set(Pv);
          for (let zv = dv._renderables.length - 1; zv >= 0; zv--) vv.has(dv._renderables[zv]) && dv._renderables.splice(zv, 1)
        }
        zv.o = void 0, zv.r = void 0, dv._runtimeBuilds?.dropBase(vv), dv._rebuildHook = gv, sv = !0
      }

      function mv(vv, zv) {
        const Pv = new Set(vv._disposables.slice(0, zv));
        for (let hv = vv._disposables.length - 1; hv >= zv; hv--) Pv.has(vv._disposables[hv]) && vv._disposables.splice(hv, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);