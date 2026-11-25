export const id = 366;
export const ids = [366];
export const modules = {
  61598: (uu, Eu, ju) => {
    ju.d(Eu, {
      createShadowTask: () => Zu
    });
    var su = null;

    function Uu(uu) {
      return su?.get(uu)
    }

    function Zu(uu, Eu) {
      const ju = new Set;
      0;
      const su = {
        name: "nN",
        engine: uu,
        vY: Eu,
        _passes: [],
        async _preload() {
          const uu = [];
          for (const ju of Eu.lights) {
            const Eu = ju.shadowGenerator,
              su = Eu ? Uu(Eu) : null;
            Eu?._preloadShadowTask && su && uu.push(Xu(Eu, su))
          }
          await Promise.all(uu)
        },
        record() {
          su._passes.length = 0;
          for (const su of Eu.lights) {
            const Zu = su.shadowGenerator,
              Xu = Zu ? Uu(Zu) : null;
            if (Zu?._ensureShadowTaskState && Xu && !Zu._preloadPending) {
              ju.add(Zu);
              const su = Zu._ensureShadowTaskState(uu, Eu, Xu),
                Uu = Eu._renderableVersion;
              su._task.record(), su._recordedVersion = Uu
            }
          }
        },
        execute() {
          let su = 0;
          for (const Zu of Eu.lights) {
            const Xu = Zu.shadowGenerator,
              lu = Xu ? Uu(Xu) : null;
            if (Xu?._ensureShadowTaskState && Xu._renderShadowMap && lu && !Xu._preloadPending) {
              ju.add(Xu);
              const Uu = Xu._shadowTaskState ?? null,
                Zu = Xu._ensureShadowTaskState(uu, Eu, lu);
              if (Zu !== Uu || Zu._recordedVersion !== Eu._renderableVersion) {
                const uu = Eu._renderableVersion;
                Zu._task.record(), Zu._recordedVersion = uu
              }
              su += Xu._renderShadowMap(uu, Zu)
            }
          }
          return su
        },
        dispose() {
          su._passes.length = 0;
          for (const uu of ju) {
            const Eu = uu._shadowTaskState;
            Eu && (Eu._task.dispose(), uu._shadowTaskState = void 0)
          }
          ju.clear()
        }
      };
      return su
    }
    async function Xu(uu, Eu) {
      uu._preloadPending = Eu, await (uu._preloadShadowTask?.(Eu)), uu._preloadPending === Eu && (uu._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);