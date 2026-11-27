export const id = 679;
export const ids = [679];
export const modules = {
  64239: (RR, JR, GR) => {
    GR.d(JR, {
      createShadowTask: () => uR
    });
    var yR = null;

    function tR(RR) {
      return yR?.get(RR)
    }

    function uR(RR, JR) {
      const GR = new Set;
      0;
      const yR = {
        name: "vK",
        engine: RR,
        tL: JR,
        _passes: [],
        async _preload() {
          const RR = [];
          for (const GR of JR.lights) {
            const JR = GR.shadowGenerator,
              yR = JR ? tR(JR) : null;
            JR?._preloadShadowTask && yR && RR.push(ZR(JR, yR))
          }
          await Promise.all(RR)
        },
        record() {
          yR._passes.length = 0;
          for (const yR of JR.lights) {
            const uR = yR.shadowGenerator,
              ZR = uR ? tR(uR) : null;
            if (uR?._ensureShadowTaskState && ZR && !uR._preloadPending) {
              GR.add(uR);
              const yR = uR._ensureShadowTaskState(RR, JR, ZR),
                tR = JR._renderableVersion;
              yR._task.record(), yR._recordedVersion = tR
            }
          }
        },
        execute() {
          let yR = 0;
          for (const uR of JR.lights) {
            const ZR = uR.shadowGenerator,
              qR = ZR ? tR(ZR) : null;
            if (ZR?._ensureShadowTaskState && ZR._renderShadowMap && qR && !ZR._preloadPending) {
              GR.add(ZR);
              const tR = ZR._shadowTaskState ?? null,
                uR = ZR._ensureShadowTaskState(RR, JR, qR);
              if (uR !== tR || uR._recordedVersion !== JR._renderableVersion) {
                const RR = JR._renderableVersion;
                uR._task.record(), uR._recordedVersion = RR
              }
              yR += ZR._renderShadowMap(RR, uR)
            }
          }
          return yR
        },
        dispose() {
          yR._passes.length = 0;
          for (const RR of GR) {
            const JR = RR._shadowTaskState;
            JR && (JR._task.dispose(), RR._shadowTaskState = void 0)
          }
          GR.clear()
        }
      };
      return yR
    }
    async function ZR(RR, JR) {
      RR._preloadPending = JR, await (RR._preloadShadowTask?.(JR)), RR._preloadPending === JR && (RR._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);