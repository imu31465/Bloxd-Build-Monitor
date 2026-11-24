export const id = 397;
export const ids = [397];
export const modules = {
  62136: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      rebuildScenePbrPipelines: () => dt,
      rebuildSceneRenderables: () => jt
    });
    var Ot = Vt(41967),
      qt = (tt, et) => tt.order - et.order,
      Dt = 8,
      mt = tt => jt(tt);
    async function dt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Ht(tt, "pbr", et)
    }
    async function jt(tt) {
      await Ht(tt, void 0, !1)
    }
    async function Ht(tt, et, dt) {
      const jt = tt;
      if (!jt._built && !dt) return;
      const Ht = jt._lightListVersion ?? 0,
        Xt = jt.surface.engine,
        Qt = tt => {
          jt._z ? tt.forEach((tt => tt())) : (0, Ot.f)(Xt, (() => tt.forEach((tt => tt()))))
        };
      let lt = !1,
        Et = !1,
        ft = !1,
        wt = !1;
      try {
        for (let tt = 1;; tt++) {
          if (void 0 !== et) {
            await yt();
            break
          }
          if (Mt(jt), await yt(), !Nt(jt)) break;
          if (tt >= Dt) {
            jt._rebuildHook = mt, wt = !0, Et = !0;
            break
          }
        }
        ft = !0
      } finally {
        if (lt && (jt._renderables.sort(qt), jt._renderableVersion++, jt._materialEpoch++, jt._built && jt._frameGraph.build()), void 0 === et && ft && !Et && (jt._lightListVersion ?? 0) === Ht) {
          const tt = jt._pendingTopologyRetirements?.splice(0);
          tt?.length && Qt(tt), wt || (jt._rebuildHook = void 0)
        }
      }
      async function yt() {
        for (const [tt, Ot] of jt._groups) {
          if (void 0 !== et && tt._materialFamily !== et) continue;
          if (0 === Ot.length) {
            (Ot.o || Ot.r) && (bt(tt, Ot), lt = !0);
            continue
          }
          const qt = jt._runtimeBuilds;
          await (qt?.wait(Ot));
          let Dt = !1;
          const dt = async () => {
            const et = jt._runtimeBuilds,
              Vt = [...Ot].filter((et => jt.meshes.includes(et) && et.material?._buildGroup === tt));
            if (0 === Vt.length) return void bt(tt, Ot);
            const mt = !!Ot.r,
              dt = jt._disposables.length,
              Ht = new Map,
              Xt = new Map(Vt.map((tt => [tt, tt.material])));
            for (const tt of Vt) {
              const Vt = jt._meshDisposables.get(tt);
              Vt && (Ht.set(tt, Vt), jt._meshDisposables.delete(tt), et?.holdPendingDisposers(tt, Vt))
            }
            let lt, Et;
            jt._p = tt => (Et = tt, !0);
            try {
              lt = await tt(jt, Vt)
            } catch (ut) {
              Et?.[1]();
              for (const qt of Vt) {
                const Vt = Ht.get(qt),
                  Dt = jt._meshDisposables.get(qt);
                if (Dt && Dt !== Vt)
                  for (const tt of Dt) tt();
                const mt = jt.meshes.includes(qt) && qt.material === Xt.get(qt) && qt.material?._buildGroup === tt && Ot.includes(qt);
                Vt && mt ? jt._meshDisposables.set(qt, Vt) : (jt._meshDisposables.delete(qt), Vt && Qt(Vt)), Vt && et?.releasePendingDisposers(qt, Vt)
              }
              throw ut
            } finally {
              delete jt._p
            }
            if (jt._z || qt?._d()) {
              Et?.[1]();
              for (const et of Vt) {
                const tt = jt._meshDisposables.get(et),
                  Vt = Ht.get(et);
                if (tt && tt !== Vt)
                  for (const et of tt) et();
                jt._meshDisposables.delete(et)
              }
              for (const et of jt._disposables.splice(0)) et();
              const tt = [...Ht.values()].flat();
              Qt(tt);
              for (const [Vt, Ot] of Ht) et?.releasePendingDisposers(Vt, Ot);
              return
            }
            Et?.[0](), tt._rebuildSingle = lt.rebuildSingle, Ot.r = jt._runtimeBuilds?.base(tt, lt.rebuildSingle) ?? lt.rebuildSingle, "pbr" === tt._materialFamily && lt._G && (Ot._w = null), mt && Jt(jt, dt);
            const ft = new Set(Vt.filter((et => jt.meshes.includes(et) && et.material === Xt.get(et) && et.material?._buildGroup === tt && Ot.includes(et))));
            if (ft.size !== Vt.length && lt.renderables.some((tt => !tt.mesh))) {
              for (const tt of Vt) {
                const Vt = jt._meshDisposables.get(tt),
                  Ot = Ht.get(tt);
                if (Vt && Vt !== Ot)
                  for (const tt of Vt) tt();
                Ot && jt.meshes.includes(tt) ? jt._meshDisposables.set(tt, Ot) : (jt._meshDisposables.delete(tt), Ot && Qt(Ot)), Ot && et?.releasePendingDisposers(tt, Ot)
              }
              return void(Dt = !0)
            }
            const wt = new Set;
            for (const tt of Vt)
              if (ft.has(tt)) wt.add(tt.material), jt._runtimeBuilds?.reset(tt);
              else {
                const Vt = Ht.get(tt),
                  Ot = jt._meshDisposables.get(tt);
                if (Ot && Ot !== Vt)
                  for (const tt of Ot) tt();
                Vt && jt.meshes.includes(tt) ? (jt._meshDisposables.set(tt, Vt), Ht.delete(tt), et?.releasePendingDisposers(tt, Vt)) : jt._meshDisposables.delete(tt)
              } for (const tt of wt) tt._csmGen = (tt._csmGen ?? 0) + 1;
            const yt = Ot.o,
              Nt = yt?.length ? new Set(yt) : null;
            for (let tt = jt._renderables.length - 1; tt >= 0; tt--) {
              const et = jt._renderables[tt];
              (ft.has(et.mesh) || Nt?.has(et)) && jt._renderables.splice(tt, 1)
            }
            const Mt = lt.renderables.filter((tt => !tt.mesh || ft.has(tt.mesh)));
            jt._renderables.push(...Mt), Ot.o = Mt;
            const Ct = [...Ht.values()].flat();
            Qt(Ct);
            for (const [tt, Ot] of Ht) et?.releasePendingDisposers(tt, Ot)
          }, {
            X: Ht
          } = await Promise.resolve().then((() => Vt(61634))), Xt = 3;
          for (let et = 1;; et++) {
            if (Dt = !1, await Ht(jt, tt, dt), jt._z || qt?._d()) return void(Et = !0);
            if (!Dt) break;
            if (et >= Xt) {
              bt(tt, Ot), jt._rebuildHook = mt, wt = !0, Et = !0;
              break
            }
          }
          Dt ? lt = !0 : lt = !0
        }
      }

      function Nt(tt) {
        for (const et of tt.meshes) {
          const Vt = et.material?._buildGroup;
          if (Vt && !tt._groups.get(Vt)?.includes(et)) return !0
        }
        return !1
      }

      function Mt(tt) {
        const et = new Map;
        for (const Vt of tt.meshes) {
          const tt = Vt.material?._buildGroup;
          if (!tt) continue;
          const Ot = et.get(tt);
          Ot ? Ot.push(Vt) : et.set(tt, [Vt])
        }
        for (const [Vt, Ot] of tt._groups) {
          const tt = et.get(Vt) ?? [];
          (Ot.length !== tt.length || tt.some(((tt, et) => Ot[et] !== tt))) && (Ot.length = 0, Ot.push(...tt)), et.delete(Vt)
        }
        for (const [Vt, Ot] of et) {
          const et = Ot;
          tt._groups.set(Vt, et)
        }
      }

      function bt(tt, et) {
        const Vt = et.o;
        if (Vt?.length) {
          const tt = new Set(Vt);
          for (let et = jt._renderables.length - 1; et >= 0; et--) tt.has(jt._renderables[et]) && jt._renderables.splice(et, 1)
        }
        et.o = void 0, et.r = void 0, jt._runtimeBuilds?.dropBase(tt), jt._rebuildHook = mt, wt = !0
      }

      function Jt(tt, et) {
        const Vt = new Set(tt._disposables.slice(0, et));
        for (let Ot = tt._disposables.length - 1; Ot >= et; Ot--) Vt.has(tt._disposables[Ot]) && tt._disposables.splice(Ot, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);