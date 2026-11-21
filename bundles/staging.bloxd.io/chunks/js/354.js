export const id = 354;
export const ids = [354];
export const modules = {
  60738: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      for (const wQ of QQ._frameGraph._tasks)
        if (wQ?._config && wQ._colorAttachment && (wQ._config.rt === FQ.scRT || wQ._config.rst === FQ.scRT)) return wQ
    }

    function qQ(QQ, FQ) {
      const wQ = QQ._renderingContexts[QQ._renderingContexts.length - 1];
      if (!wQ?._frameGraph) return;
      const qQ = LQ(FQ, QQ);
      if (!qQ) return;
      if (1 === QQ.msaaSamples) return void(qQ._config.clr = !1);
      const oQ = qQ.enabled;
      qQ._config.clr = !0, qQ.enabled = !1, FQ._beforeRender.unshift((() => {
        const FQ = LQ(wQ, QQ),
          DQ = FQ?._config.rst === QQ.scRT && FQ._config.rt._colorView;
        qQ.enabled = !!DQ && oQ, qQ._config.clr = !DQ, DQ && (qQ._colorAttachment.view = DQ)
      }))
    }
    wQ.r(FQ), wQ.d(FQ, {
      configureSwapchainOverlayScene: () => qQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);