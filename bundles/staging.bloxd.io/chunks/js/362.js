export const id = 362;
export const ids = [362];
export const modules = {
  61031: (CC, zC, ZC) => {
    ZC.d(zC, {
      createShadowTask: () => bC
    });
    var QC = null;

    function wC(CC) {
      return QC?.get(CC)
    }

    function bC(CC, zC) {
      const ZC = new Set;
      0;
      const QC = {
        name: "Zg",
        engine: CC,
        sS: zC,
        _passes: [],
        async _preload() {
          const CC = [];
          for (const ZC of zC.lights) {
            const zC = ZC.shadowGenerator,
              QC = zC ? wC(zC) : null;
            zC?._preloadShadowTask && QC && CC.push(nC(zC, QC))
          }
          await Promise.all(CC)
        },
        record() {
          QC._passes.length = 0;
          for (const QC of zC.lights) {
            const bC = QC.shadowGenerator,
              nC = bC ? wC(bC) : null;
            if (bC?._ensureShadowTaskState && nC && !bC._preloadPending) {
              ZC.add(bC);
              const QC = bC._ensureShadowTaskState(CC, zC, nC),
                wC = zC._renderableVersion;
              QC._task.record(), QC._recordedVersion = wC
            }
          }
        },
        execute() {
          let QC = 0;
          for (const bC of zC.lights) {
            const nC = bC.shadowGenerator,
              fC = nC ? wC(nC) : null;
            if (nC?._ensureShadowTaskState && nC._renderShadowMap && fC && !nC._preloadPending) {
              ZC.add(nC);
              const wC = nC._shadowTaskState ?? null,
                bC = nC._ensureShadowTaskState(CC, zC, fC);
              if (bC !== wC || bC._recordedVersion !== zC._renderableVersion) {
                const CC = zC._renderableVersion;
                bC._task.record(), bC._recordedVersion = CC
              }
              QC += nC._renderShadowMap(CC, bC)
            }
          }
          return QC
        },
        dispose() {
          QC._passes.length = 0;
          for (const CC of ZC) {
            const zC = CC._shadowTaskState;
            zC && (zC._task.dispose(), CC._shadowTaskState = void 0)
          }
          ZC.clear()
        }
      };
      return QC
    }
    async function nC(CC, zC) {
      CC._preloadPending = zC, await (CC._preloadShadowTask?.(zC)), CC._preloadPending === zC && (CC._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);