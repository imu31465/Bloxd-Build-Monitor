export const id = 55;
export const ids = [55];
export const modules = {
  33812: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      announceStoredTexturePack: () => fk.b,
      takeOneShotTexturePack: () => Dk.j
    });
    var Dk = ik(33819),
      fk = ik(33828)
  },
  33828: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      d: () => Sk
    });
    var Dk = ik(3218);

    function fk() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ek = new BroadcastChannel(Dk.m);
        ek.postMessage({
          stored: kk
        }), ek.close()
      } catch {
        return null
      }
      return kk
    }

    function Sk(kk) {
      const ek = "object" === typeof kk && null !== kk ? kk.stored : null;
      return "string" === typeof ek ? ek : null
    }
  },
  33819: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      f: () => fk,
      j: () => Sk
    });
    var Dk = ik(3218);
    async function fk(kk, ek, ik) {
      let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Sk = bk(await kk.getItem(Dk.f, ek));
      if (null === Sk || fk()) return null;
      const rk = await kk.getItem(Dk.i, ek);
      return fk() ? null : (await async function(kk) {
        await Promise.all([kk.removeItem(Dk.f), kk.removeItem(Dk.i)])
      }(kk).catch(ik), {
        pack: Sk,
        source: "string" === typeof rk ? rk : null
      })
    }

    function Sk(kk) {
      return (0, Dk.u)() ? Promise.resolve(null) : fk(kk, !1, (kk => {
        console.error("Error removing temporary texture pack: ", kk)
      }), Dk.u)
    }

    function bk(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const ek = kk.metaData;
      return "object" !== typeof ek || null === ek || "string" !== typeof ek.id ? null : kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);