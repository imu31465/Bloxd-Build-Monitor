export const id = 53;
export const ids = [53];
export const modules = {
  9157: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      announceStoredTexturePack: () => qQ.e,
      takeOneShotTexturePack: () => LQ.h
    });
    var LQ = wQ(9165),
      qQ = wQ(9170)
  },
  9170: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(3139);

    function qQ() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const QQ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const FQ = new BroadcastChannel(LQ.f);
        FQ.postMessage({
          stored: QQ
        }), FQ.close()
      } catch {
        return null
      }
      return QQ
    }

    function oQ(QQ) {
      const FQ = "object" === typeof QQ && null !== QQ ? QQ.stored : null;
      return "string" === typeof FQ ? FQ : null
    }
  },
  9165: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      f: () => qQ,
      h: () => oQ
    });
    var LQ = wQ(3139);
    async function qQ(QQ, FQ, wQ) {
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const oQ = DQ(await QQ.getItem(LQ.c, FQ));
      if (null === oQ || qQ()) return null;
      const kQ = await QQ.getItem(LQ.d, FQ);
      return qQ() ? null : (await async function(QQ) {
        await Promise.all([QQ.removeItem(LQ.c), QQ.removeItem(LQ.d)])
      }(QQ).catch(wQ), {
        pack: oQ,
        source: "string" === typeof kQ ? kQ : null
      })
    }

    function oQ(QQ) {
      return (0, LQ.m)() ? Promise.resolve(null) : qQ(QQ, !1, (QQ => {
        console.error("Error removing temporary texture pack: ", QQ)
      }), LQ.m)
    }

    function DQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return null;
      const FQ = QQ.metaData;
      return "object" !== typeof FQ || null === FQ || "string" !== typeof FQ.id ? null : QQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);