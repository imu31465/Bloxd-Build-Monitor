export const id = 241;
export const ids = [241];
export const modules = {
  39770: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      playDocsSound: () => Zd
    });
    var pd = kd(4743),
      Nd = kd(36933),
      Wd = kd(1220);
    const Pd = new Map;

    function Zd(dd, Jd, kd, Zd, gd) {
      let Cd, Kd = null,
        od = 0,
        ld = 0;
      if (Jd) Cd = new pd.Howl({
        src: [`${Wd.clientSideServerUrls.staticUrl}/sounds/music/${dd}.mp3`],
        html5: !0,
        volume: kd
      });
      else {
        var Qd;
        Kd = (0, Nd.m)(dd);
        const Jd = (0, Nd.k)(Kd),
          kd = null !== (Qd = Jd.sprite[dd]) && void 0 !== Qd ? Qd : null;
        if (!kd) throw new Error(`Docs sound ${dd} is not in sprite sheet ${Kd}`);
        od = kd[0] / 1e3, ld = kd[1] / 1e3, Cd = Pd.get(Kd), Cd || (Cd = new pd.Howl({
          ...Jd,
          volume: 1
        }), Pd.set(Kd, Cd))
      }
      const Ld = Jd ? Cd.play() : Cd.play(dd);
      Cd.volume(kd, Ld), Zd > 0 && Cd.seek(od + Zd, Ld);
      const Od = () => Jd ? Cd.duration() : ld;
      let ed = !1;
      const Rd = dd => {
          ed || (ed = !0, Cd.off("play", Id, Ld), Cd.off("end", Gd, Ld), Cd.off("loaderror", xd), Cd.off("playerror", vd, Ld), Jd && Cd.unload(), gd.onEnd(dd))
        },
        Id = () => {
          gd.onPlay(Od())
        },
        Gd = () => {
          Rd(!1)
        },
        vd = (Jd, kd) => {
          console.error(`Could not play docs sound ${dd}`, kd), Rd(!0)
        },
        xd = (dd, Jd) => {
          null !== Kd && Pd.get(Kd) === Cd && (Pd.delete(Kd), Cd.unload()), vd(dd, Jd)
        };
      return Cd.on("play", Id, Ld), Cd.once("end", Gd, Ld), Cd.once("loaderror", xd), Cd.once("playerror", vd, Ld), {
        pause: () => {
          Cd.pause(Ld)
        },
        resume: () => {
          Cd.play(Ld)
        },
        seek: dd => {
          const Jd = Od(),
            kd = Math.max(dd, 0);
          Cd.seek(od + (Jd > 0 ? Math.min(kd, Jd) : kd), Ld)
        },
        yI: () => {
          const dd = Cd.seek(Ld);
          return "number" === typeof dd ? Math.max(0, dd - od) : 0
        },
        getDuration: Od,
        setVolume: dd => {
          Cd.volume(dd, Ld)
        },
        stop: () => {
          ed || (Cd.stop(Ld), Rd(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);