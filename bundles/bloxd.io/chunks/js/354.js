export const id = 354;
export const ids = [354];
export const modules = {
  60318: (YY, rY, DY) => {
    DY.d(rY, {
      createShadowTask: () => IY
    });
    var FY = null;

    function AY(YY) {
      return FY?.get(YY)
    }

    function IY(YY, rY) {
      const DY = new Set;
      0;
      const FY = {
        name: "sy",
        engine: YY,
        LQ: rY,
        _passes: [],
        async _preload() {
          const YY = [];
          for (const DY of rY.lights) {
            const rY = DY.shadowGenerator,
              FY = rY ? AY(rY) : null;
            rY?._preloadShadowTask && FY && YY.push(RY(rY, FY))
          }
          await Promise.all(YY)
        },
        record() {
          FY._passes.length = 0;
          for (const FY of rY.lights) {
            const IY = FY.shadowGenerator,
              RY = IY ? AY(IY) : null;
            if (IY?._ensureShadowTaskState && RY && !IY._preloadPending) {
              DY.add(IY);
              const FY = IY._ensureShadowTaskState(YY, rY, RY),
                AY = rY._renderableVersion;
              FY._task.record(), FY._recordedVersion = AY
            }
          }
        },
        execute() {
          let FY = 0;
          for (const IY of rY.lights) {
            const RY = IY.shadowGenerator,
              OY = RY ? AY(RY) : null;
            if (RY?._ensureShadowTaskState && RY._renderShadowMap && OY && !RY._preloadPending) {
              DY.add(RY);
              const AY = RY._shadowTaskState ?? null,
                IY = RY._ensureShadowTaskState(YY, rY, OY);
              if (IY !== AY || IY._recordedVersion !== rY._renderableVersion) {
                const YY = rY._renderableVersion;
                IY._task.record(), IY._recordedVersion = YY
              }
              FY += RY._renderShadowMap(YY, IY)
            }
          }
          return FY
        },
        dispose() {
          FY._passes.length = 0;
          for (const YY of DY) {
            const rY = YY._shadowTaskState;
            rY && (rY._task.dispose(), YY._shadowTaskState = void 0)
          }
          DY.clear()
        }
      };
      return FY
    }
    async function RY(YY, rY) {
      YY._preloadPending = rY, await (YY._preloadShadowTask?.(rY)), YY._preloadPending === rY && (YY._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);