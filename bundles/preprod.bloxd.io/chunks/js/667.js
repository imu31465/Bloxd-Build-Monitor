export const id = 667;
export const ids = [667];
export const modules = {
  64039: (UU, XU, zU) => {
    zU.d(XU, {
      createShadowTask: () => QU
    });
    var cU = null;

    function yU(UU) {
      return cU?.get(UU)
    }

    function QU(UU, XU) {
      const zU = new Set;
      0;
      const cU = {
        name: "CY",
        engine: UU,
        sa: XU,
        _passes: [],
        async _preload() {
          const UU = [];
          for (const zU of XU.lights) {
            const XU = zU.shadowGenerator,
              cU = XU ? yU(XU) : null;
            XU?._preloadShadowTask && cU && UU.push(AU(XU, cU))
          }
          await Promise.all(UU)
        },
        record() {
          cU._passes.length = 0;
          for (const cU of XU.lights) {
            const QU = cU.shadowGenerator,
              AU = QU ? yU(QU) : null;
            if (QU?._ensureShadowTaskState && AU && !QU._preloadPending) {
              zU.add(QU);
              const cU = QU._ensureShadowTaskState(UU, XU, AU),
                yU = XU._renderableVersion;
              cU._task.record(), cU._recordedVersion = yU
            }
          }
        },
        execute() {
          let cU = 0;
          for (const QU of XU.lights) {
            const AU = QU.shadowGenerator,
              FU = AU ? yU(AU) : null;
            if (AU?._ensureShadowTaskState && AU._renderShadowMap && FU && !AU._preloadPending) {
              zU.add(AU);
              const yU = AU._shadowTaskState ?? null,
                QU = AU._ensureShadowTaskState(UU, XU, FU);
              if (QU !== yU || QU._recordedVersion !== XU._renderableVersion) {
                const UU = XU._renderableVersion;
                QU._task.record(), QU._recordedVersion = UU
              }
              cU += AU._renderShadowMap(UU, QU)
            }
          }
          return cU
        },
        dispose() {
          cU._passes.length = 0;
          for (const UU of zU) {
            const XU = UU._shadowTaskState;
            XU && (XU._task.dispose(), UU._shadowTaskState = void 0)
          }
          zU.clear()
        }
      };
      return cU
    }
    async function AU(UU, XU) {
      UU._preloadPending = XU, await (UU._preloadShadowTask?.(XU)), UU._preloadPending === XU && (UU._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);