export const id = 711;
export const ids = [711];
export const modules = {
  65378: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      rebuildScenePbrPipelines: () => Kd,
      rebuildSceneRenderables: () => hd
    });
    var Wd = md(54139),
      Fd = (dd, Od) => dd.order - Od.order,
      Rd = 8,
      Xd = dd => hd(dd);
    async function Kd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await vd(dd, "pbr", Od)
    }
    async function hd(dd) {
      await vd(dd, void 0, !1)
    }
    async function vd(dd, Od, Kd) {
      const hd = dd;
      if (!hd._built && !Kd) return;
      const vd = hd._lightListVersion ?? 0,
        Qd = hd.surface.engine,
        td = dd => {
          hd._z ? dd.forEach((dd => dd())) : (0, Wd.d)(Qd, (() => dd.forEach((dd => dd()))))
        };
      let od = !1,
        Nd = !1,
        qd = !1,
        Hd = !1;
      try {
        for (let dd = 1;; dd++) {
          if (void 0 !== Od) {
            await yd();
            break
          }
          if (Td(hd), await yd(), !bd(hd)) break;
          if (dd >= Rd) {
            hd._rebuildHook = Xd, Hd = !0, Nd = !0;
            break
          }
        }
        qd = !0
      } finally {
        if (od && (hd._renderables.sort(Fd), hd._renderableVersion++, hd._materialEpoch++, hd._built && hd._frameGraph.build()), void 0 === Od && qd && !Nd && (hd._lightListVersion ?? 0) === vd) {
          const dd = hd._pendingTopologyRetirements?.splice(0);
          dd?.length && td(dd), Hd || (hd._rebuildHook = void 0)
        }
      }
      async function yd() {
        for (const [dd, Wd] of hd._groups) {
          if (void 0 !== Od && dd._materialFamily !== Od) continue;
          if (0 === Wd.length) {
            (Wd.o || Wd.r) && (pd(dd, Wd), od = !0);
            continue
          }
          const Fd = hd._runtimeBuilds;
          await (Fd?.wait(Wd));
          let Rd = !1;
          const Kd = async () => {
            const Od = hd._runtimeBuilds,
              md = [...Wd].filter((Od => hd.meshes.includes(Od) && Od.material?._buildGroup === dd));
            if (0 === md.length) return void pd(dd, Wd);
            const Xd = !!Wd.r,
              Kd = hd._disposables.length,
              vd = new Map,
              Qd = new Map(md.map((dd => [dd, dd.material])));
            for (const dd of md) {
              const md = hd._meshDisposables.get(dd);
              md && (vd.set(dd, md), hd._meshDisposables.delete(dd), Od?.holdPendingDisposers(dd, md))
            }
            let od, Nd;
            hd._p = dd => (Nd = dd, !0);
            try {
              od = await dd(hd, md)
            } catch (wd) {
              Nd?.[1]();
              for (const Fd of md) {
                const md = vd.get(Fd),
                  Rd = hd._meshDisposables.get(Fd);
                if (Rd && Rd !== md)
                  for (const dd of Rd) dd();
                const Xd = hd.meshes.includes(Fd) && Fd.material === Qd.get(Fd) && Fd.material?._buildGroup === dd && Wd.includes(Fd);
                md && Xd ? hd._meshDisposables.set(Fd, md) : (hd._meshDisposables.delete(Fd), md && td(md)), md && Od?.releasePendingDisposers(Fd, md)
              }
              throw wd
            } finally {
              delete hd._p
            }
            if (hd._z || Fd?._d()) {
              Nd?.[1]();
              for (const Od of md) {
                const dd = hd._meshDisposables.get(Od),
                  md = vd.get(Od);
                if (dd && dd !== md)
                  for (const Od of dd) Od();
                hd._meshDisposables.delete(Od)
              }
              for (const Od of hd._disposables.splice(0)) Od();
              const dd = [...vd.values()].flat();
              td(dd);
              for (const [md, Wd] of vd) Od?.releasePendingDisposers(md, Wd);
              return
            }
            Nd?.[0](), dd._rebuildSingle = od.rebuildSingle, Wd.r = hd._runtimeBuilds?.base(dd, od.rebuildSingle) ?? od.rebuildSingle, "pbr" === dd._materialFamily && od._G && (Wd._w = null), Xd && Yd(hd, Kd);
            const qd = new Set(md.filter((Od => hd.meshes.includes(Od) && Od.material === Qd.get(Od) && Od.material?._buildGroup === dd && Wd.includes(Od))));
            if (qd.size !== md.length && od.renderables.some((dd => !dd.mesh))) {
              for (const dd of md) {
                const md = hd._meshDisposables.get(dd),
                  Wd = vd.get(dd);
                if (md && md !== Wd)
                  for (const dd of md) dd();
                Wd && hd.meshes.includes(dd) ? hd._meshDisposables.set(dd, Wd) : (hd._meshDisposables.delete(dd), Wd && td(Wd)), Wd && Od?.releasePendingDisposers(dd, Wd)
              }
              return void(Rd = !0)
            }
            const Hd = new Set;
            for (const dd of md)
              if (qd.has(dd)) Hd.add(dd.material), hd._runtimeBuilds?.reset(dd);
              else {
                const md = vd.get(dd),
                  Wd = hd._meshDisposables.get(dd);
                if (Wd && Wd !== md)
                  for (const dd of Wd) dd();
                md && hd.meshes.includes(dd) ? (hd._meshDisposables.set(dd, md), vd.delete(dd), Od?.releasePendingDisposers(dd, md)) : hd._meshDisposables.delete(dd)
              } for (const dd of Hd) dd._csmGen = (dd._csmGen ?? 0) + 1;
            const yd = Wd.o,
              bd = yd?.length ? new Set(yd) : null;
            for (let dd = hd._renderables.length - 1; dd >= 0; dd--) {
              const Od = hd._renderables[dd];
              (qd.has(Od.mesh) || bd?.has(Od)) && hd._renderables.splice(dd, 1)
            }
            const Td = od.renderables.filter((dd => !dd.mesh || qd.has(dd.mesh)));
            hd._renderables.push(...Td), Wd.o = Td;
            const gd = [...vd.values()].flat();
            td(gd);
            for (const [dd, Wd] of vd) Od?.releasePendingDisposers(dd, Wd)
          }, {
            X: vd
          } = await Promise.resolve().then((() => md(64881))), Qd = 3;
          for (let Od = 1;; Od++) {
            if (Rd = !1, await vd(hd, dd, Kd), hd._z || Fd?._d()) return void(Nd = !0);
            if (!Rd) break;
            if (Od >= Qd) {
              pd(dd, Wd), hd._rebuildHook = Xd, Hd = !0, Nd = !0;
              break
            }
          }
          Rd ? od = !0 : od = !0
        }
      }

      function bd(dd) {
        for (const Od of dd.meshes) {
          const md = Od.material?._buildGroup;
          if (md && !dd._groups.get(md)?.includes(Od)) return !0
        }
        return !1
      }

      function Td(dd) {
        const Od = new Map;
        for (const md of dd.meshes) {
          const dd = md.material?._buildGroup;
          if (!dd) continue;
          const Wd = Od.get(dd);
          Wd ? Wd.push(md) : Od.set(dd, [md])
        }
        for (const [md, Wd] of dd._groups) {
          const dd = Od.get(md) ?? [];
          (Wd.length !== dd.length || dd.some(((dd, Od) => Wd[Od] !== dd))) && (Wd.length = 0, Wd.push(...dd)), Od.delete(md)
        }
        for (const [md, Wd] of Od) {
          const Od = Wd;
          dd._groups.set(md, Od)
        }
      }

      function pd(dd, Od) {
        const md = Od.o;
        if (md?.length) {
          const dd = new Set(md);
          for (let Od = hd._renderables.length - 1; Od >= 0; Od--) dd.has(hd._renderables[Od]) && hd._renderables.splice(Od, 1)
        }
        Od.o = void 0, Od.r = void 0, hd._runtimeBuilds?.dropBase(dd), hd._rebuildHook = Xd, Hd = !0
      }

      function Yd(dd, Od) {
        const md = new Set(dd._disposables.slice(0, Od));
        for (let Wd = dd._disposables.length - 1; Wd >= Od; Wd--) md.has(dd._disposables[Wd]) && dd._disposables.splice(Wd, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);