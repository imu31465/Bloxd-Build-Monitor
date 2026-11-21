export const id = 355;
export const ids = [355];
export const modules = {
  60743: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      createShadowTask: () => oQ
    });
    var LQ = null;

    function qQ(QQ) {
      return LQ?.get(QQ)
    }

    function oQ(QQ, FQ) {
      const wQ = new Set;
      0;
      const LQ = {
        name: "EY",
        engine: QQ,
        lA: FQ,
        _passes: [],
        async _preload() {
          const QQ = [];
          for (const wQ of FQ.lights) {
            const FQ = wQ.shadowGenerator,
              LQ = FQ ? qQ(FQ) : null;
            FQ?._preloadShadowTask && LQ && QQ.push(DQ(FQ, LQ))
          }
          await Promise.all(QQ)
        },
        record() {
          LQ._passes.length = 0;
          for (const LQ of FQ.lights) {
            const oQ = LQ.shadowGenerator,
              DQ = oQ ? qQ(oQ) : null;
            if (oQ?._ensureShadowTaskState && DQ && !oQ._preloadPending) {
              wQ.add(oQ);
              const LQ = oQ._ensureShadowTaskState(QQ, FQ, DQ),
                qQ = FQ._renderableVersion;
              LQ._task.record(), LQ._recordedVersion = qQ
            }
          }
        },
        execute() {
          let LQ = 0;
          for (const oQ of FQ.lights) {
            const DQ = oQ.shadowGenerator,
              kQ = DQ ? qQ(DQ) : null;
            if (DQ?._ensureShadowTaskState && DQ._renderShadowMap && kQ && !DQ._preloadPending) {
              wQ.add(DQ);
              const qQ = DQ._shadowTaskState ?? null,
                oQ = DQ._ensureShadowTaskState(QQ, FQ, kQ);
              if (oQ !== qQ || oQ._recordedVersion !== FQ._renderableVersion) {
                const QQ = FQ._renderableVersion;
                oQ._task.record(), oQ._recordedVersion = QQ
              }
              LQ += DQ._renderShadowMap(QQ, oQ)
            }
          }
          return LQ
        },
        dispose() {
          LQ._passes.length = 0;
          for (const QQ of wQ) {
            const FQ = QQ._shadowTaskState;
            FQ && (FQ._task.dispose(), QQ._shadowTaskState = void 0)
          }
          wQ.clear()
        }
      };
      return LQ
    }
    async function DQ(QQ, FQ) {
      QQ._preloadPending = FQ, await (QQ._preloadShadowTask?.(FQ)), QQ._preloadPending === FQ && (QQ._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);