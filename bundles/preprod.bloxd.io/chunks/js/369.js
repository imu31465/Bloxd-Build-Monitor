export const id = 369;
export const ids = [369];
export const modules = {
  61633: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      for (const XQ of QQ._frameGraph._tasks)
        if (XQ?._config && XQ._colorAttachment && (XQ._config.rt === WQ.scRT || XQ._config.rst === WQ.scRT)) return XQ
    }

    function qQ(QQ, WQ) {
      const XQ = QQ._renderingContexts[QQ._renderingContexts.length - 1];
      if (!XQ?._frameGraph) return;
      const qQ = wQ(WQ, QQ);
      if (!qQ) return;
      if (1 === QQ.msaaSamples) return void(qQ._config.clr = !1);
      const TQ = qQ.enabled;
      qQ._config.clr = !0, qQ.enabled = !1, WQ._beforeRender.unshift((() => {
        const WQ = wQ(XQ, QQ),
          zQ = WQ?._config.rst === QQ.scRT && WQ._config.rt._colorView;
        qQ.enabled = !!zQ && TQ, qQ._config.clr = !zQ, zQ && (qQ._colorAttachment.view = zQ)
      }))
    }
    XQ.r(WQ), XQ.d(WQ, {
      configureSwapchainOverlayScene: () => qQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);