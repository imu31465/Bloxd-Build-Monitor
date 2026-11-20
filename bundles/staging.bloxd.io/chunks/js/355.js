export const id = 355;
export const ids = [355];
export const modules = {
  61234: (qq, Eq, gq) => {
    gq.d(Eq, {
      createShadowTask: () => Oq
    });
    var Yq = null;

    function lq(qq) {
      return Yq?.get(qq)
    }

    function Oq(qq, Eq) {
      const gq = new Set;
      0;
      const Yq = {
        name: "GN",
        engine: qq,
        PV: Eq,
        _passes: [],
        async _preload() {
          const qq = [];
          for (const gq of Eq.lights) {
            const Eq = gq.shadowGenerator,
              Yq = Eq ? lq(Eq) : null;
            Eq?._preloadShadowTask && Yq && qq.push(mq(Eq, Yq))
          }
          await Promise.all(qq)
        },
        record() {
          Yq._passes.length = 0;
          for (const Yq of Eq.lights) {
            const Oq = Yq.shadowGenerator,
              mq = Oq ? lq(Oq) : null;
            if (Oq?._ensureShadowTaskState && mq && !Oq._preloadPending) {
              gq.add(Oq);
              const Yq = Oq._ensureShadowTaskState(qq, Eq, mq),
                lq = Eq._renderableVersion;
              Yq._task.record(), Yq._recordedVersion = lq
            }
          }
        },
        execute() {
          let Yq = 0;
          for (const Oq of Eq.lights) {
            const mq = Oq.shadowGenerator,
              xq = mq ? lq(mq) : null;
            if (mq?._ensureShadowTaskState && mq._renderShadowMap && xq && !mq._preloadPending) {
              gq.add(mq);
              const lq = mq._shadowTaskState ?? null,
                Oq = mq._ensureShadowTaskState(qq, Eq, xq);
              if (Oq !== lq || Oq._recordedVersion !== Eq._renderableVersion) {
                const qq = Eq._renderableVersion;
                Oq._task.record(), Oq._recordedVersion = qq
              }
              Yq += mq._renderShadowMap(qq, Oq)
            }
          }
          return Yq
        },
        dispose() {
          Yq._passes.length = 0;
          for (const qq of gq) {
            const Eq = qq._shadowTaskState;
            Eq && (Eq._task.dispose(), qq._shadowTaskState = void 0)
          }
          gq.clear()
        }
      };
      return Yq
    }
    async function mq(qq, Eq) {
      qq._preloadPending = Eq, await (qq._preloadShadowTask?.(Eq)), qq._preloadPending === Eq && (qq._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);