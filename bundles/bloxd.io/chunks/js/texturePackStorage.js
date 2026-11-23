export const id = 55;
export const ids = [55];
export const modules = {
  34239: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      announceStoredTexturePack: () => Tk.b,
      takeOneShotTexturePack: () => Xk.g
    });
    var Xk = Ik(34245),
      Tk = Ik(34248)
  },
  34248: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      d: () => ik
    });
    var Xk = Ik(3175);

    function Tk() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Fk = new BroadcastChannel(Xk.j);
        Fk.postMessage({
          stored: kk
        }), Fk.close()
      } catch {
        return null
      }
      return kk
    }

    function ik(kk) {
      const Fk = "object" === typeof kk && null !== kk ? kk.stored : null;
      return "string" === typeof Fk ? Fk : null
    }
  },
  34245: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => Tk,
      g: () => ik
    });
    var Xk = Ik(3175);
    async function Tk(kk, Fk, Ik) {
      let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ik = yk(await kk.getItem(Xk.f, Fk));
      if (null === ik || Tk()) return null;
      const lk = await kk.getItem(Xk.i, Fk);
      return Tk() ? null : (await async function(kk) {
        await Promise.all([kk.removeItem(Xk.f), kk.removeItem(Xk.i)])
      }(kk).catch(Ik), {
        pack: ik,
        source: "string" === typeof lk ? lk : null
      })
    }

    function ik(kk) {
      return (0, Xk.s)() ? Promise.resolve(null) : Tk(kk, !1, (kk => {
        console.error("Error removing temporary texture pack: ", kk)
      }), Xk.s)
    }

    function yk(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const Fk = kk.metaData;
      return "object" !== typeof Fk || null === Fk || "string" !== typeof Fk.id ? null : kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);