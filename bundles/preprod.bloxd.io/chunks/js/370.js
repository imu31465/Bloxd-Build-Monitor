export const id = 370;
export const ids = [370];
export const modules = {
  61636: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      createShadowTask: () => TQ
    });
    var wQ = null;

    function qQ(QQ) {
      return wQ?.get(QQ)
    }

    function TQ(QQ, WQ) {
      const XQ = new Set;
      0;
      const wQ = {
        name: "YI",
        engine: QQ,
        cB: WQ,
        _passes: [],
        async _preload() {
          const QQ = [];
          for (const XQ of WQ.lights) {
            const WQ = XQ.shadowGenerator,
              wQ = WQ ? qQ(WQ) : null;
            WQ?._preloadShadowTask && wQ && QQ.push(zQ(WQ, wQ))
          }
          await Promise.all(QQ)
        },
        record() {
          wQ._passes.length = 0;
          for (const wQ of WQ.lights) {
            const TQ = wQ.shadowGenerator,
              zQ = TQ ? qQ(TQ) : null;
            if (TQ?._ensureShadowTaskState && zQ && !TQ._preloadPending) {
              XQ.add(TQ);
              const wQ = TQ._ensureShadowTaskState(QQ, WQ, zQ),
                qQ = WQ._renderableVersion;
              wQ._task.record(), wQ._recordedVersion = qQ
            }
          }
        },
        execute() {
          let wQ = 0;
          for (const TQ of WQ.lights) {
            const zQ = TQ.shadowGenerator,
              sQ = zQ ? qQ(zQ) : null;
            if (zQ?._ensureShadowTaskState && zQ._renderShadowMap && sQ && !zQ._preloadPending) {
              XQ.add(zQ);
              const qQ = zQ._shadowTaskState ?? null,
                TQ = zQ._ensureShadowTaskState(QQ, WQ, sQ);
              if (TQ !== qQ || TQ._recordedVersion !== WQ._renderableVersion) {
                const QQ = WQ._renderableVersion;
                TQ._task.record(), TQ._recordedVersion = QQ
              }
              wQ += zQ._renderShadowMap(QQ, TQ)
            }
          }
          return wQ
        },
        dispose() {
          wQ._passes.length = 0;
          for (const QQ of XQ) {
            const WQ = QQ._shadowTaskState;
            WQ && (WQ._task.dispose(), QQ._shadowTaskState = void 0)
          }
          XQ.clear()
        }
      };
      return wQ
    }
    async function zQ(QQ, WQ) {
      QQ._preloadPending = WQ, await (QQ._preloadShadowTask?.(WQ)), QQ._preloadPending === WQ && (QQ._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);