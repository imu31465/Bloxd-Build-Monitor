export const id = 239;
export const ids = [239];
export const modules = {
  39218: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      playDocsSound: () => bk
    });
    var Rk = Bk(4575),
      tk = Bk(36445),
      ak = Bk(1154);
    const Xk = new Map;

    function bk(kk, Fk, Bk, bk, wk) {
      let dk, sk = null,
        Vk = 0,
        Jk = 0;
      if (Fk) dk = new Rk.Howl({
        src: [`${ak.clientSideServerUrls.staticUrl}/sounds/music/${kk}.mp3`],
        html5: !0,
        volume: Bk
      });
      else {
        var Ak;
        sk = (0, tk.g)(kk);
        const Fk = (0, tk.e)(sk),
          Bk = null !== (Ak = Fk.sprite[kk]) && void 0 !== Ak ? Ak : null;
        if (!Bk) throw new Error(`Docs sound ${kk} is not in sprite sheet ${sk}`);
        Vk = Bk[0] / 1e3, Jk = Bk[1] / 1e3, dk = Xk.get(sk), dk || (dk = new Rk.Howl({
          ...Fk,
          volume: 1
        }), Xk.set(sk, dk))
      }
      const ek = Fk ? dk.play() : dk.play(kk);
      dk.volume(Bk, ek), bk > 0 && dk.seek(Vk + bk, ek);
      const yk = () => Fk ? dk.duration() : Jk;
      let fk = !1;
      const mk = kk => {
          fk || (fk = !0, dk.off("play", Wk, ek), dk.off("end", vk, ek), dk.off("loaderror", Yk), dk.off("playerror", ik, ek), Fk && dk.unload(), wk.onEnd(kk))
        },
        Wk = () => {
          wk.onPlay(yk())
        },
        vk = () => {
          mk(!1)
        },
        ik = (Fk, Bk) => {
          console.error(`Could not play docs sound ${kk}`, Bk), mk(!0)
        },
        Yk = (kk, Fk) => {
          null !== sk && Xk.get(sk) === dk && (Xk.delete(sk), dk.unload()), ik(kk, Fk)
        };
      return dk.on("play", Wk, ek), dk.once("end", vk, ek), dk.once("loaderror", Yk), dk.once("playerror", ik, ek), {
        pause: () => {
          dk.pause(ek)
        },
        resume: () => {
          dk.play(ek)
        },
        seek: kk => {
          const Fk = yk(),
            Bk = Math.max(kk, 0);
          dk.seek(Vk + (Fk > 0 ? Math.min(Bk, Fk) : Bk), ek)
        },
        rW: () => {
          const kk = dk.seek(ek);
          return "number" === typeof kk ? Math.max(0, kk - Vk) : 0
        },
        getDuration: yk,
        setVolume: kk => {
          dk.volume(kk, ek)
        },
        stop: () => {
          fk || (dk.stop(ek), mk(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);