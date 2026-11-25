export const id = 397;
export const ids = [397];
export const modules = {
  62126: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      rebuildScenePbrPipelines: () => lu,
      rebuildSceneRenderables: () => qu
    });
    var su = ju(41976),
      Uu = (uu, Eu) => uu.order - Eu.order,
      Zu = 8,
      Xu = uu => qu(uu);
    async function lu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await fu(uu, "pbr", Eu)
    }
    async function qu(uu) {
      await fu(uu, void 0, !1)
    }
    async function fu(uu, Eu, lu) {
      const qu = uu;
      if (!qu._built && !lu) return;
      const fu = qu._lightListVersion ?? 0,
        Cu = qu.surface.engine,
        bu = uu => {
          qu._z ? uu.forEach((uu => uu())) : (0, su.d)(Cu, (() => uu.forEach((uu => uu()))))
        };
      let cu = !1,
        Nu = !1,
        Ou = !1,
        Yu = !1;
      try {
        for (let uu = 1;; uu++) {
          if (void 0 !== Eu) {
            await hu();
            break
          }
          if (gu(qu), await hu(), !Du(qu)) break;
          if (uu >= Zu) {
            qu._rebuildHook = Xu, Yu = !0, Nu = !0;
            break
          }
        }
        Ou = !0
      } finally {
        if (cu && (qu._renderables.sort(Uu), qu._renderableVersion++, qu._materialEpoch++, qu._built && qu._frameGraph.build()), void 0 === Eu && Ou && !Nu && (qu._lightListVersion ?? 0) === fu) {
          const uu = qu._pendingTopologyRetirements?.splice(0);
          uu?.length && bu(uu), Yu || (qu._rebuildHook = void 0)
        }
      }
      async function hu() {
        for (const [uu, su] of qu._groups) {
          if (void 0 !== Eu && uu._materialFamily !== Eu) continue;
          if (0 === su.length) {
            (su.o || su.r) && (Mu(uu, su), cu = !0);
            continue
          }
          const Uu = qu._runtimeBuilds;
          await (Uu?.wait(su));
          let Zu = !1;
          const lu = async () => {
            const Eu = qu._runtimeBuilds,
              ju = [...su].filter((Eu => qu.meshes.includes(Eu) && Eu.material?._buildGroup === uu));
            if (0 === ju.length) return void Mu(uu, su);
            const Xu = !!su.r,
              lu = qu._disposables.length,
              fu = new Map,
              Cu = new Map(ju.map((uu => [uu, uu.material])));
            for (const uu of ju) {
              const ju = qu._meshDisposables.get(uu);
              ju && (fu.set(uu, ju), qu._meshDisposables.delete(uu), Eu?.holdPendingDisposers(uu, ju))
            }
            let cu, Nu;
            qu._p = uu => (Nu = uu, !0);
            try {
              cu = await uu(qu, ju)
            } catch (pu) {
              Nu?.[1]();
              for (const Uu of ju) {
                const ju = fu.get(Uu),
                  Zu = qu._meshDisposables.get(Uu);
                if (Zu && Zu !== ju)
                  for (const uu of Zu) uu();
                const Xu = qu.meshes.includes(Uu) && Uu.material === Cu.get(Uu) && Uu.material?._buildGroup === uu && su.includes(Uu);
                ju && Xu ? qu._meshDisposables.set(Uu, ju) : (qu._meshDisposables.delete(Uu), ju && bu(ju)), ju && Eu?.releasePendingDisposers(Uu, ju)
              }
              throw pu
            } finally {
              delete qu._p
            }
            if (qu._z || Uu?._d()) {
              Nu?.[1]();
              for (const Eu of ju) {
                const uu = qu._meshDisposables.get(Eu),
                  ju = fu.get(Eu);
                if (uu && uu !== ju)
                  for (const Eu of uu) Eu();
                qu._meshDisposables.delete(Eu)
              }
              for (const Eu of qu._disposables.splice(0)) Eu();
              const uu = [...fu.values()].flat();
              bu(uu);
              for (const [ju, su] of fu) Eu?.releasePendingDisposers(ju, su);
              return
            }
            Nu?.[0](), uu._rebuildSingle = cu.rebuildSingle, su.r = qu._runtimeBuilds?.base(uu, cu.rebuildSingle) ?? cu.rebuildSingle, "pbr" === uu._materialFamily && cu._G && (su._w = null), Xu && eu(qu, lu);
            const Ou = new Set(ju.filter((Eu => qu.meshes.includes(Eu) && Eu.material === Cu.get(Eu) && Eu.material?._buildGroup === uu && su.includes(Eu))));
            if (Ou.size !== ju.length && cu.renderables.some((uu => !uu.mesh))) {
              for (const uu of ju) {
                const ju = qu._meshDisposables.get(uu),
                  su = fu.get(uu);
                if (ju && ju !== su)
                  for (const uu of ju) uu();
                su && qu.meshes.includes(uu) ? qu._meshDisposables.set(uu, su) : (qu._meshDisposables.delete(uu), su && bu(su)), su && Eu?.releasePendingDisposers(uu, su)
              }
              return void(Zu = !0)
            }
            const Yu = new Set;
            for (const uu of ju)
              if (Ou.has(uu)) Yu.add(uu.material), qu._runtimeBuilds?.reset(uu);
              else {
                const ju = fu.get(uu),
                  su = qu._meshDisposables.get(uu);
                if (su && su !== ju)
                  for (const uu of su) uu();
                ju && qu.meshes.includes(uu) ? (qu._meshDisposables.set(uu, ju), fu.delete(uu), Eu?.releasePendingDisposers(uu, ju)) : qu._meshDisposables.delete(uu)
              } for (const uu of Yu) uu._csmGen = (uu._csmGen ?? 0) + 1;
            const hu = su.o,
              Du = hu?.length ? new Set(hu) : null;
            for (let uu = qu._renderables.length - 1; uu >= 0; uu--) {
              const Eu = qu._renderables[uu];
              (Ou.has(Eu.mesh) || Du?.has(Eu)) && qu._renderables.splice(uu, 1)
            }
            const gu = cu.renderables.filter((uu => !uu.mesh || Ou.has(uu.mesh)));
            qu._renderables.push(...gu), su.o = gu;
            const Gu = [...fu.values()].flat();
            bu(Gu);
            for (const [uu, su] of fu) Eu?.releasePendingDisposers(uu, su)
          }, {
            X: fu
          } = await Promise.resolve().then((() => ju(61601))), Cu = 3;
          for (let Eu = 1;; Eu++) {
            if (Zu = !1, await fu(qu, uu, lu), qu._z || Uu?._d()) return void(Nu = !0);
            if (!Zu) break;
            if (Eu >= Cu) {
              Mu(uu, su), qu._rebuildHook = Xu, Yu = !0, Nu = !0;
              break
            }
          }
          Zu ? cu = !0 : cu = !0
        }
      }

      function Du(uu) {
        for (const Eu of uu.meshes) {
          const ju = Eu.material?._buildGroup;
          if (ju && !uu._groups.get(ju)?.includes(Eu)) return !0
        }
        return !1
      }

      function gu(uu) {
        const Eu = new Map;
        for (const ju of uu.meshes) {
          const uu = ju.material?._buildGroup;
          if (!uu) continue;
          const su = Eu.get(uu);
          su ? su.push(ju) : Eu.set(uu, [ju])
        }
        for (const [ju, su] of uu._groups) {
          const uu = Eu.get(ju) ?? [];
          (su.length !== uu.length || uu.some(((uu, Eu) => su[Eu] !== uu))) && (su.length = 0, su.push(...uu)), Eu.delete(ju)
        }
        for (const [ju, su] of Eu) {
          const Eu = su;
          uu._groups.set(ju, Eu)
        }
      }

      function Mu(uu, Eu) {
        const ju = Eu.o;
        if (ju?.length) {
          const uu = new Set(ju);
          for (let Eu = qu._renderables.length - 1; Eu >= 0; Eu--) uu.has(qu._renderables[Eu]) && qu._renderables.splice(Eu, 1)
        }
        Eu.o = void 0, Eu.r = void 0, qu._runtimeBuilds?.dropBase(uu), qu._rebuildHook = Xu, Yu = !0
      }

      function eu(uu, Eu) {
        const ju = new Set(uu._disposables.slice(0, Eu));
        for (let su = uu._disposables.length - 1; su >= Eu; su--) ju.has(uu._disposables[su]) && uu._disposables.splice(su, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);