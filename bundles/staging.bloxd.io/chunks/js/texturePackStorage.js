export const id = 68;
export const ids = [68];
export const modules = {
  35543: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      announceStoredTexturePack: () => Wr.b,
      takeOneShotTexturePack: () => Zr.h
    });
    var Zr = Qr(35551),
      Wr = Qr(35559)
  },
  35559: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => ar
    });
    var Zr = Qr(4454);

    function Wr() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const rr = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Sr = new BroadcastChannel(Zr.j);
        Sr.postMessage({
          stored: rr
        }), Sr.close()
      } catch {
        return null
      }
      return rr
    }

    function ar(rr) {
      const Sr = "object" === typeof rr && null !== rr ? rr.stored : null;
      return "string" === typeof Sr ? Sr : null
    }
  },
  35551: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      e: () => Wr,
      h: () => ar
    });
    var Zr = Qr(4454);
    async function Wr(rr, Sr, Qr) {
      let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ar = jr(await rr.getItem(Zr.e, Sr));
      if (null === ar || Wr()) return null;
      const Ir = await rr.getItem(Zr.f, Sr);
      return Wr() ? null : (await async function(rr) {
        await Promise.all([rr.removeItem(Zr.e), rr.removeItem(Zr.f)])
      }(rr).catch(Qr), {
        pack: ar,
        source: "string" === typeof Ir ? Ir : null
      })
    }

    function ar(rr) {
      return (0, Zr.p)() ? Promise.resolve(null) : Wr(rr, !1, (rr => {
        console.error("Error removing temporary texture pack: ", rr)
      }), Zr.p)
    }

    function jr(rr) {
      if ("object" !== typeof rr || null === rr) return null;
      const Sr = rr.metaData;
      return "object" !== typeof Sr || null === Sr || "string" !== typeof Sr.id ? null : rr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);