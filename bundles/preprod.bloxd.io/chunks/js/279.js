export const id = 279;
export const ids = [279];
export const modules = {
  41128: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      h: () => TQ,
      j: () => sQ
    });
    let wQ = null,
      qQ = null;

    function TQ(QQ, WQ) {
      return wQ = QQ, qQ = null, sQ(WQ), () => {
        wQ === QQ && (wQ = null, qQ = null)
      }
    }

    function zQ() {
      return null === qQ ? null : {
        ...qQ
      }
    }

    function sQ(QQ) {
      var WQ;
      null !== (WQ = wQ) && void 0 !== WQ && WQ(QQ) && (qQ = {
        ...QQ
      })
    }
  },
  41139: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      g: () => TQ
    });
    let wQ = null;

    function qQ(QQ, WQ) {
      wQ = {
        conn: QQ,
        reason: WQ
      }
    }

    function TQ(QQ) {
      var WQ;
      const XQ = (null === (WQ = wQ) || void 0 === WQ ? void 0 : WQ.conn) === QQ ? wQ.reason : null;
      return wQ = null, XQ
    }
  },
  41195: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      d: () => qQ
    });
    let wQ = {
      fire: () => {},
      close: () => {}
    };

    function qQ(QQ) {
      wQ = QQ
    }

    function TQ() {
      return wQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);