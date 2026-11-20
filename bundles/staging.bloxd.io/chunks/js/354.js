export const id = 354;
export const ids = [354];
export const modules = {
  61115: (uu, Ru, yu) => {
    yu.d(Ru, {
      createShadowTask: () => Qu
    });
    var Eu = null;

    function Ku(uu) {
      return Eu?.get(uu)
    }

    function Qu(uu, Ru) {
      const yu = new Set;
      0;
      const Eu = {
        name: "Yx",
        engine: uu,
        cp: Ru,
        _passes: [],
        async _preload() {
          const uu = [];
          for (const yu of Ru.lights) {
            const Ru = yu.shadowGenerator,
              Eu = Ru ? Ku(Ru) : null;
            Ru?._preloadShadowTask && Eu && uu.push(mu(Ru, Eu))
          }
          await Promise.all(uu)
        },
        record() {
          Eu._passes.length = 0;
          for (const Eu of Ru.lights) {
            const Qu = Eu.shadowGenerator,
              mu = Qu ? Ku(Qu) : null;
            if (Qu?._ensureShadowTaskState && mu && !Qu._preloadPending) {
              yu.add(Qu);
              const Eu = Qu._ensureShadowTaskState(uu, Ru, mu),
                Ku = Ru._renderableVersion;
              Eu._task.record(), Eu._recordedVersion = Ku
            }
          }
        },
        execute() {
          let Eu = 0;
          for (const Qu of Ru.lights) {
            const mu = Qu.shadowGenerator,
              Ju = mu ? Ku(mu) : null;
            if (mu?._ensureShadowTaskState && mu._renderShadowMap && Ju && !mu._preloadPending) {
              yu.add(mu);
              const Ku = mu._shadowTaskState ?? null,
                Qu = mu._ensureShadowTaskState(uu, Ru, Ju);
              if (Qu !== Ku || Qu._recordedVersion !== Ru._renderableVersion) {
                const uu = Ru._renderableVersion;
                Qu._task.record(), Qu._recordedVersion = uu
              }
              Eu += mu._renderShadowMap(uu, Qu)
            }
          }
          return Eu
        },
        dispose() {
          Eu._passes.length = 0;
          for (const uu of yu) {
            const Ru = uu._shadowTaskState;
            Ru && (Ru._task.dispose(), uu._shadowTaskState = void 0)
          }
          yu.clear()
        }
      };
      return Eu
    }
    async function mu(uu, Ru) {
      uu._preloadPending = Ru, await (uu._preloadShadowTask?.(Ru)), uu._preloadPending === Ru && (uu._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);