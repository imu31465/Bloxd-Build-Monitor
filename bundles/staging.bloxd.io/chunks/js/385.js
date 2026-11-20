export const id = 385;
export const ids = [385];
export const modules = {
  61752: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      rebuildScenePbrPipelines: () => Ju,
      rebuildSceneRenderables: () => Nu
    });
    var Eu = yu(41315),
      Ku = (uu, Ru) => uu.order - Ru.order,
      Qu = 8,
      mu = uu => Nu(uu);
    async function Ju(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Xu(uu, "pbr", Ru)
    }
    async function Nu(uu) {
      await Xu(uu, void 0, !1)
    }
    async function Xu(uu, Ru, Ju) {
      const Nu = uu;
      if (!Nu._built && !Ju) return;
      const Xu = Nu._lightListVersion ?? 0,
        Vu = Nu.surface.engine,
        ru = uu => {
          Nu._z ? uu.forEach((uu => uu())) : (0, Eu.e)(Vu, (() => uu.forEach((uu => uu()))))
        };
      let Bu = !1,
        xu = !1,
        Su = !1,
        pu = !1;
      try {
        for (let uu = 1;; uu++) {
          if (void 0 !== Ru) {
            await Tu();
            break
          }
          if (ju(Nu), await Tu(), !Wu(Nu)) break;
          if (uu >= Qu) {
            Nu._rebuildHook = mu, pu = !0, xu = !0;
            break
          }
        }
        Su = !0
      } finally {
        if (Bu && (Nu._renderables.sort(Ku), Nu._renderableVersion++, Nu._materialEpoch++, Nu._built && Nu._frameGraph.build()), void 0 === Ru && Su && !xu && (Nu._lightListVersion ?? 0) === Xu) {
          const uu = Nu._pendingTopologyRetirements?.splice(0);
          uu?.length && ru(uu), pu || (Nu._rebuildHook = void 0)
        }
      }
      async function Tu() {
        for (const [uu, Eu] of Nu._groups) {
          if (void 0 !== Ru && uu._materialFamily !== Ru) continue;
          if (0 === Eu.length) {
            (Eu.o || Eu.r) && (Hu(uu, Eu), Bu = !0);
            continue
          }
          const Ku = Nu._runtimeBuilds;
          await (Ku?.wait(Eu));
          let Qu = !1;
          const Ju = async () => {
            const Ru = Nu._runtimeBuilds,
              yu = [...Eu].filter((Ru => Nu.meshes.includes(Ru) && Ru.material?._buildGroup === uu));
            if (0 === yu.length) return void Hu(uu, Eu);
            const mu = !!Eu.r,
              Ju = Nu._disposables.length,
              Xu = new Map,
              Vu = new Map(yu.map((uu => [uu, uu.material])));
            for (const uu of yu) {
              const yu = Nu._meshDisposables.get(uu);
              yu && (Xu.set(uu, yu), Nu._meshDisposables.delete(uu), Ru?.holdPendingDisposers(uu, yu))
            }
            let Bu, xu;
            Nu._p = uu => (xu = uu, !0);
            try {
              Bu = await uu(Nu, yu)
            } catch (Cu) {
              xu?.[1]();
              for (const Ku of yu) {
                const yu = Xu.get(Ku),
                  Qu = Nu._meshDisposables.get(Ku);
                if (Qu && Qu !== yu)
                  for (const uu of Qu) uu();
                const mu = Nu.meshes.includes(Ku) && Ku.material === Vu.get(Ku) && Ku.material?._buildGroup === uu && Eu.includes(Ku);
                yu && mu ? Nu._meshDisposables.set(Ku, yu) : (Nu._meshDisposables.delete(Ku), yu && ru(yu)), yu && Ru?.releasePendingDisposers(Ku, yu)
              }
              throw Cu
            } finally {
              delete Nu._p
            }
            if (Nu._z || Ku?._d()) {
              xu?.[1]();
              for (const Ru of yu) {
                const uu = Nu._meshDisposables.get(Ru),
                  yu = Xu.get(Ru);
                if (uu && uu !== yu)
                  for (const Ru of uu) Ru();
                Nu._meshDisposables.delete(Ru)
              }
              for (const Ru of Nu._disposables.splice(0)) Ru();
              const uu = [...Xu.values()].flat();
              ru(uu);
              for (const [yu, Eu] of Xu) Ru?.releasePendingDisposers(yu, Eu);
              return
            }
            xu?.[0](), uu._rebuildSingle = Bu.rebuildSingle, Eu.r = Nu._runtimeBuilds?.base(uu, Bu.rebuildSingle) ?? Bu.rebuildSingle, "pbr" === uu._materialFamily && Bu._G && (Eu._w = null), mu && du(Nu, Ju);
            const Su = new Set(yu.filter((Ru => Nu.meshes.includes(Ru) && Ru.material === Vu.get(Ru) && Ru.material?._buildGroup === uu && Eu.includes(Ru))));
            if (Su.size !== yu.length && Bu.renderables.some((uu => !uu.mesh))) {
              for (const uu of yu) {
                const yu = Nu._meshDisposables.get(uu),
                  Eu = Xu.get(uu);
                if (yu && yu !== Eu)
                  for (const uu of yu) uu();
                Eu && Nu.meshes.includes(uu) ? Nu._meshDisposables.set(uu, Eu) : (Nu._meshDisposables.delete(uu), Eu && ru(Eu)), Eu && Ru?.releasePendingDisposers(uu, Eu)
              }
              return void(Qu = !0)
            }
            const pu = new Set;
            for (const uu of yu)
              if (Su.has(uu)) pu.add(uu.material), Nu._runtimeBuilds?.reset(uu);
              else {
                const yu = Xu.get(uu),
                  Eu = Nu._meshDisposables.get(uu);
                if (Eu && Eu !== yu)
                  for (const uu of Eu) uu();
                yu && Nu.meshes.includes(uu) ? (Nu._meshDisposables.set(uu, yu), Xu.delete(uu), Ru?.releasePendingDisposers(uu, yu)) : Nu._meshDisposables.delete(uu)
              } for (const uu of pu) uu._csmGen = (uu._csmGen ?? 0) + 1;
            const Tu = Eu.o,
              Wu = Tu?.length ? new Set(Tu) : null;
            for (let uu = Nu._renderables.length - 1; uu >= 0; uu--) {
              const Ru = Nu._renderables[uu];
              (Su.has(Ru.mesh) || Wu?.has(Ru)) && Nu._renderables.splice(uu, 1)
            }
            const ju = Bu.renderables.filter((uu => !uu.mesh || Su.has(uu.mesh)));
            Nu._renderables.push(...ju), Eu.o = ju;
            const bu = [...Xu.values()].flat();
            ru(bu);
            for (const [uu, Eu] of Xu) Ru?.releasePendingDisposers(uu, Eu)
          }, {
            X: Xu
          } = await Promise.resolve().then((() => yu(61123))), Vu = 3;
          for (let Ru = 1;; Ru++) {
            if (Qu = !1, await Xu(Nu, uu, Ju), Nu._z || Ku?._d()) return void(xu = !0);
            if (!Qu) break;
            if (Ru >= Vu) {
              Hu(uu, Eu), Nu._rebuildHook = mu, pu = !0, xu = !0;
              break
            }
          }
          Qu ? Bu = !0 : Bu = !0
        }
      }

      function Wu(uu) {
        for (const Ru of uu.meshes) {
          const yu = Ru.material?._buildGroup;
          if (yu && !uu._groups.get(yu)?.includes(Ru)) return !0
        }
        return !1
      }

      function ju(uu) {
        const Ru = new Map;
        for (const yu of uu.meshes) {
          const uu = yu.material?._buildGroup;
          if (!uu) continue;
          const Eu = Ru.get(uu);
          Eu ? Eu.push(yu) : Ru.set(uu, [yu])
        }
        for (const [yu, Eu] of uu._groups) {
          const uu = Ru.get(yu) ?? [];
          (Eu.length !== uu.length || uu.some(((uu, Ru) => Eu[Ru] !== uu))) && (Eu.length = 0, Eu.push(...uu)), Ru.delete(yu)
        }
        for (const [yu, Eu] of Ru) {
          const Ru = Eu;
          uu._groups.set(yu, Ru)
        }
      }

      function Hu(uu, Ru) {
        const yu = Ru.o;
        if (yu?.length) {
          const uu = new Set(yu);
          for (let Ru = Nu._renderables.length - 1; Ru >= 0; Ru--) uu.has(Nu._renderables[Ru]) && Nu._renderables.splice(Ru, 1)
        }
        Ru.o = void 0, Ru.r = void 0, Nu._runtimeBuilds?.dropBase(uu), Nu._rebuildHook = mu, pu = !0
      }

      function du(uu, Ru) {
        const yu = new Set(uu._disposables.slice(0, Ru));
        for (let Eu = uu._disposables.length - 1; Eu >= Ru; Eu--) yu.has(uu._disposables[Eu]) && uu._disposables.splice(Eu, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);