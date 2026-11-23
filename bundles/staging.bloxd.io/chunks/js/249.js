export const id = 249;
export const ids = [249];
export const modules = {
  39792: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      playDocsSound: () => lk
    });
    var Xk = Ik(4857),
      Tk = Ik(36772),
      ik = Ik(1194);
    const yk = new Map;

    function lk(kk, Fk, Ik, lk, ak) {
      let qk, Lk = null,
        tk = 0,
        Zk = 0;
      if (Fk) qk = new Xk.Howl({
        src: [`${ik.clientSideServerUrls.staticUrl}/sounds/music/${kk}.mp3`],
        html5: !0,
        volume: Ik
      });
      else {
        var jk;
        Lk = (0, Tk.j)(kk);
        const Fk = (0, Tk.g)(Lk),
          Ik = null !== (jk = Fk.sprite[kk]) && void 0 !== jk ? jk : null;
        if (!Ik) throw new Error(`Docs sound ${kk} is not in sprite sheet ${Lk}`);
        tk = Ik[0] / 1e3, Zk = Ik[1] / 1e3, qk = yk.get(Lk), qk || (qk = new Xk.Howl({
          ...Fk,
          volume: 1
        }), yk.set(Lk, qk))
      }
      const ek = Fk ? qk.play() : qk.play(kk);
      qk.volume(Ik, ek), lk > 0 && qk.seek(tk + lk, ek);
      const wk = () => Fk ? qk.duration() : Zk;
      let Hk = !1;
      const Jk = kk => {
          Hk || (Hk = !0, qk.off("play", xk, ek), qk.off("end", Pk, ek), qk.off("loaderror", Qk), qk.off("playerror", Kk, ek), Fk && qk.unload(), ak.onEnd(kk))
        },
        xk = () => {
          ak.onPlay(wk())
        },
        Pk = () => {
          Jk(!1)
        },
        Kk = (Fk, Ik) => {
          console.error(`Could not play docs sound ${kk}`, Ik), Jk(!0)
        },
        Qk = (kk, Fk) => {
          null !== Lk && yk.get(Lk) === qk && (yk.delete(Lk), qk.unload()), Kk(kk, Fk)
        };
      return qk.on("play", xk, ek), qk.once("end", Pk, ek), qk.once("loaderror", Qk), qk.once("playerror", Kk, ek), {
        pause: () => {
          qk.pause(ek)
        },
        resume: () => {
          qk.play(ek)
        },
        seek: kk => {
          const Fk = wk(),
            Ik = Math.max(kk, 0);
          qk.seek(tk + (Fk > 0 ? Math.min(Ik, Fk) : Ik), ek)
        },
        OJ: () => {
          const kk = qk.seek(ek);
          return "number" === typeof kk ? Math.max(0, kk - tk) : 0
        },
        getDuration: wk,
        setVolume: kk => {
          qk.volume(kk, ek)
        },
        stop: () => {
          Hk || (qk.stop(ek), Jk(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);