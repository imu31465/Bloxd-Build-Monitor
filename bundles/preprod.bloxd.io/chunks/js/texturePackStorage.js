export const id = 58;
export const ids = [58];
export const modules = {
  34576: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      announceStoredTexturePack: () => qQ.c,
      takeOneShotTexturePack: () => wQ.f
    });
    var wQ = XQ(34583),
      qQ = XQ(34587)
  },
  34587: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      d: () => TQ
    });
    var wQ = XQ(3523);

    function qQ() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const QQ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const WQ = new BroadcastChannel(wQ.k);
        WQ.postMessage({
          stored: QQ
        }), WQ.close()
      } catch {
        return null
      }
      return QQ
    }

    function TQ(QQ) {
      const WQ = "object" === typeof QQ && null !== QQ ? QQ.stored : null;
      return "string" === typeof WQ ? WQ : null
    }
  },
  34583: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      e: () => qQ,
      f: () => TQ
    });
    var wQ = XQ(3523);
    async function qQ(QQ, WQ, XQ) {
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const TQ = zQ(await QQ.getItem(wQ.f, WQ));
      if (null === TQ || qQ()) return null;
      const sQ = await QQ.getItem(wQ.g, WQ);
      return qQ() ? null : (await async function(QQ) {
        await Promise.all([QQ.removeItem(wQ.f), QQ.removeItem(wQ.g)])
      }(QQ).catch(XQ), {
        pack: TQ,
        source: "string" === typeof sQ ? sQ : null
      })
    }

    function TQ(QQ) {
      return (0, wQ.r)() ? Promise.resolve(null) : qQ(QQ, !1, (QQ => {
        console.error("Error removing temporary texture pack: ", QQ)
      }), wQ.r)
    }

    function zQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return null;
      const WQ = QQ.metaData;
      return "object" !== typeof WQ || null === WQ || "string" !== typeof WQ.id ? null : QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);