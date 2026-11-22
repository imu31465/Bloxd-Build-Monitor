export const id = 245;
export const ids = [245];
export const modules = {
  39359: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      playDocsSound: () => rk
    });
    var Dk = ik(4799),
      fk = ik(36341),
      Sk = ik(1177);
    const bk = new Map;

    function rk(kk, ek, ik, rk, Pk) {
      let mk, Mk = null,
        Kk = 0,
        xk = 0;
      if (ek) mk = new Dk.Howl({
        src: [`${Sk.clientSideServerUrls.staticUrl}/sounds/music/${kk}.mp3`],
        html5: !0,
        volume: ik
      });
      else {
        var nk;
        Mk = (0, fk.n)(kk);
        const ek = (0, fk.j)(Mk),
          ik = null !== (nk = ek.sprite[kk]) && void 0 !== nk ? nk : null;
        if (!ik) throw new Error(`Docs sound ${kk} is not in sprite sheet ${Mk}`);
        Kk = ik[0] / 1e3, xk = ik[1] / 1e3, mk = bk.get(Mk), mk || (mk = new Dk.Howl({
          ...ek,
          volume: 1
        }), bk.set(Mk, mk))
      }
      const Uk = ek ? mk.play() : mk.play(kk);
      mk.volume(ik, Uk), rk > 0 && mk.seek(Kk + rk, Uk);
      const Hk = () => ek ? mk.duration() : xk;
      let wk = !1;
      const lk = kk => {
          wk || (wk = !0, mk.off("play", pk, Uk), mk.off("end", yk, Uk), mk.off("loaderror", Lk), mk.off("playerror", Yk, Uk), ek && mk.unload(), Pk.onEnd(kk))
        },
        pk = () => {
          Pk.onPlay(Hk())
        },
        yk = () => {
          lk(!1)
        },
        Yk = (ek, ik) => {
          console.error(`Could not play docs sound ${kk}`, ik), lk(!0)
        },
        Lk = (kk, ek) => {
          null !== Mk && bk.get(Mk) === mk && (bk.delete(Mk), mk.unload()), Yk(kk, ek)
        };
      return mk.on("play", pk, Uk), mk.once("end", yk, Uk), mk.once("loaderror", Lk), mk.once("playerror", Yk, Uk), {
        pause: () => {
          mk.pause(Uk)
        },
        resume: () => {
          mk.play(Uk)
        },
        seek: kk => {
          const ek = Hk(),
            ik = Math.max(kk, 0);
          mk.seek(Kk + (ek > 0 ? Math.min(ik, ek) : ik), Uk)
        },
        vy: () => {
          const kk = mk.seek(Uk);
          return "number" === typeof kk ? Math.max(0, kk - Kk) : 0
        },
        getDuration: Hk,
        setVolume: kk => {
          mk.volume(kk, Uk)
        },
        stop: () => {
          wk || (mk.stop(Uk), lk(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);