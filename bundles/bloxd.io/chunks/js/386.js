export const id = 386;
export const ids = [386];
export const modules = {
  61618: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      rebuildScenePbrPipelines: () => Zd,
      rebuildSceneRenderables: () => gd
    });
    var pd = kd(41690),
      Nd = (dd, Jd) => dd.order - Jd.order,
      Wd = 8,
      Pd = dd => gd(dd);
    async function Zd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Cd(dd, "pbr", Jd)
    }
    async function gd(dd) {
      await Cd(dd, void 0, !1)
    }
    async function Cd(dd, Jd, Zd) {
      const gd = dd;
      if (!gd._built && !Zd) return;
      const Cd = gd._lightListVersion ?? 0,
        Kd = gd.surface.engine,
        od = dd => {
          gd._z ? dd.forEach((dd => dd())) : (0, pd.c)(Kd, (() => dd.forEach((dd => dd()))))
        };
      let ld = !1,
        Qd = !1,
        Ld = !1,
        Od = !1;
      try {
        for (let dd = 1;; dd++) {
          if (void 0 !== Jd) {
            await ed();
            break
          }
          if (Id(gd), await ed(), !Rd(gd)) break;
          if (dd >= Wd) {
            gd._rebuildHook = Pd, Od = !0, Qd = !0;
            break
          }
        }
        Ld = !0
      } finally {
        if (ld && (gd._renderables.sort(Nd), gd._renderableVersion++, gd._materialEpoch++, gd._built && gd._frameGraph.build()), void 0 === Jd && Ld && !Qd && (gd._lightListVersion ?? 0) === Cd) {
          const dd = gd._pendingTopologyRetirements?.splice(0);
          dd?.length && od(dd), Od || (gd._rebuildHook = void 0)
        }
      }
      async function ed() {
        for (const [dd, pd] of gd._groups) {
          if (void 0 !== Jd && dd._materialFamily !== Jd) continue;
          if (0 === pd.length) {
            (pd.o || pd.r) && (Gd(dd, pd), ld = !0);
            continue
          }
          const Nd = gd._runtimeBuilds;
          await (Nd?.wait(pd));
          let Wd = !1;
          const Zd = async () => {
            const Jd = gd._runtimeBuilds,
              kd = [...pd].filter((Jd => gd.meshes.includes(Jd) && Jd.material?._buildGroup === dd));
            if (0 === kd.length) return void Gd(dd, pd);
            const Pd = !!pd.r,
              Zd = gd._disposables.length,
              Cd = new Map,
              Kd = new Map(kd.map((dd => [dd, dd.material])));
            for (const dd of kd) {
              const kd = gd._meshDisposables.get(dd);
              kd && (Cd.set(dd, kd), gd._meshDisposables.delete(dd), Jd?.holdPendingDisposers(dd, kd))
            }
            let ld, Qd;
            gd._p = dd => (Qd = dd, !0);
            try {
              ld = await dd(gd, kd)
            } catch (qd) {
              Qd?.[1]();
              for (const Nd of kd) {
                const kd = Cd.get(Nd),
                  Wd = gd._meshDisposables.get(Nd);
                if (Wd && Wd !== kd)
                  for (const dd of Wd) dd();
                const Pd = gd.meshes.includes(Nd) && Nd.material === Kd.get(Nd) && Nd.material?._buildGroup === dd && pd.includes(Nd);
                kd && Pd ? gd._meshDisposables.set(Nd, kd) : (gd._meshDisposables.delete(Nd), kd && od(kd)), kd && Jd?.releasePendingDisposers(Nd, kd)
              }
              throw qd
            } finally {
              delete gd._p
            }
            if (gd._z || Nd?._d()) {
              Qd?.[1]();
              for (const Jd of kd) {
                const dd = gd._meshDisposables.get(Jd),
                  kd = Cd.get(Jd);
                if (dd && dd !== kd)
                  for (const Jd of dd) Jd();
                gd._meshDisposables.delete(Jd)
              }
              for (const Jd of gd._disposables.splice(0)) Jd();
              const dd = [...Cd.values()].flat();
              od(dd);
              for (const [kd, pd] of Cd) Jd?.releasePendingDisposers(kd, pd);
              return
            }
            Qd?.[0](), dd._rebuildSingle = ld.rebuildSingle, pd.r = gd._runtimeBuilds?.base(dd, ld.rebuildSingle) ?? ld.rebuildSingle, "pbr" === dd._materialFamily && ld._G && (pd._w = null), Pd && vd(gd, Zd);
            const Ld = new Set(kd.filter((Jd => gd.meshes.includes(Jd) && Jd.material === Kd.get(Jd) && Jd.material?._buildGroup === dd && pd.includes(Jd))));
            if (Ld.size !== kd.length && ld.renderables.some((dd => !dd.mesh))) {
              for (const dd of kd) {
                const kd = gd._meshDisposables.get(dd),
                  pd = Cd.get(dd);
                if (kd && kd !== pd)
                  for (const dd of kd) dd();
                pd && gd.meshes.includes(dd) ? gd._meshDisposables.set(dd, pd) : (gd._meshDisposables.delete(dd), pd && od(pd)), pd && Jd?.releasePendingDisposers(dd, pd)
              }
              return void(Wd = !0)
            }
            const Od = new Set;
            for (const dd of kd)
              if (Ld.has(dd)) Od.add(dd.material), gd._runtimeBuilds?.reset(dd);
              else {
                const kd = Cd.get(dd),
                  pd = gd._meshDisposables.get(dd);
                if (pd && pd !== kd)
                  for (const dd of pd) dd();
                kd && gd.meshes.includes(dd) ? (gd._meshDisposables.set(dd, kd), Cd.delete(dd), Jd?.releasePendingDisposers(dd, kd)) : gd._meshDisposables.delete(dd)
              } for (const dd of Od) dd._csmGen = (dd._csmGen ?? 0) + 1;
            const ed = pd.o,
              Rd = ed?.length ? new Set(ed) : null;
            for (let dd = gd._renderables.length - 1; dd >= 0; dd--) {
              const Jd = gd._renderables[dd];
              (Ld.has(Jd.mesh) || Rd?.has(Jd)) && gd._renderables.splice(dd, 1)
            }
            const Id = ld.renderables.filter((dd => !dd.mesh || Ld.has(dd.mesh)));
            gd._renderables.push(...Id), pd.o = Id;
            const xd = [...Cd.values()].flat();
            od(xd);
            for (const [dd, pd] of Cd) Jd?.releasePendingDisposers(dd, pd)
          }, {
            X: Cd
          } = await Promise.resolve().then((() => kd(60981))), Kd = 3;
          for (let Jd = 1;; Jd++) {
            if (Wd = !1, await Cd(gd, dd, Zd), gd._z || Nd?._d()) return void(Qd = !0);
            if (!Wd) break;
            if (Jd >= Kd) {
              Gd(dd, pd), gd._rebuildHook = Pd, Od = !0, Qd = !0;
              break
            }
          }
          Wd ? ld = !0 : ld = !0
        }
      }

      function Rd(dd) {
        for (const Jd of dd.meshes) {
          const kd = Jd.material?._buildGroup;
          if (kd && !dd._groups.get(kd)?.includes(Jd)) return !0
        }
        return !1
      }

      function Id(dd) {
        const Jd = new Map;
        for (const kd of dd.meshes) {
          const dd = kd.material?._buildGroup;
          if (!dd) continue;
          const pd = Jd.get(dd);
          pd ? pd.push(kd) : Jd.set(dd, [kd])
        }
        for (const [kd, pd] of dd._groups) {
          const dd = Jd.get(kd) ?? [];
          (pd.length !== dd.length || dd.some(((dd, Jd) => pd[Jd] !== dd))) && (pd.length = 0, pd.push(...dd)), Jd.delete(kd)
        }
        for (const [kd, pd] of Jd) {
          const Jd = pd;
          dd._groups.set(kd, Jd)
        }
      }

      function Gd(dd, Jd) {
        const kd = Jd.o;
        if (kd?.length) {
          const dd = new Set(kd);
          for (let Jd = gd._renderables.length - 1; Jd >= 0; Jd--) dd.has(gd._renderables[Jd]) && gd._renderables.splice(Jd, 1)
        }
        Jd.o = void 0, Jd.r = void 0, gd._runtimeBuilds?.dropBase(dd), gd._rebuildHook = Pd, Od = !0
      }

      function vd(dd, Jd) {
        const kd = new Set(dd._disposables.slice(0, Jd));
        for (let pd = dd._disposables.length - 1; pd >= Jd; pd--) kd.has(dd._disposables[pd]) && dd._disposables.splice(pd, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);