export const id = 253;
export const ids = [253];
export const modules = {
  40008: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      playDocsSound: () => dt
    });
    var Ot = Vt(5030),
      qt = Vt(36996),
      Dt = Vt(1293);
    const mt = new Map;

    function dt(tt, et, Vt, dt, jt) {
      let Ht, Xt = null,
        Qt = 0,
        lt = 0;
      if (et) Ht = new Ot.Howl({
        src: [`${Dt.clientSideServerUrls.staticUrl}/sounds/music/${tt}.mp3`],
        html5: !0,
        volume: Vt
      });
      else {
        var Et;
        Xt = (0, qt.o)(tt);
        const et = (0, qt.k)(Xt),
          Vt = null !== (Et = et.sprite[tt]) && void 0 !== Et ? Et : null;
        if (!Vt) throw new Error(`Docs sound ${tt} is not in sprite sheet ${Xt}`);
        Qt = Vt[0] / 1e3, lt = Vt[1] / 1e3, Ht = mt.get(Xt), Ht || (Ht = new Ot.Howl({
          ...et,
          volume: 1
        }), mt.set(Xt, Ht))
      }
      const ft = et ? Ht.play() : Ht.play(tt);
      Ht.volume(Vt, ft), dt > 0 && Ht.seek(Qt + dt, ft);
      const wt = () => et ? Ht.duration() : lt;
      let yt = !1;
      const Nt = tt => {
          yt || (yt = !0, Ht.off("play", Mt, ft), Ht.off("end", bt, ft), Ht.off("loaderror", Ct), Ht.off("playerror", Jt, ft), et && Ht.unload(), jt.onEnd(tt))
        },
        Mt = () => {
          jt.onPlay(wt())
        },
        bt = () => {
          Nt(!1)
        },
        Jt = (et, Vt) => {
          console.error(`Could not play docs sound ${tt}`, Vt), Nt(!0)
        },
        Ct = (tt, et) => {
          null !== Xt && mt.get(Xt) === Ht && (mt.delete(Xt), Ht.unload()), Jt(tt, et)
        };
      return Ht.on("play", Mt, ft), Ht.once("end", bt, ft), Ht.once("loaderror", Ct), Ht.once("playerror", Jt, ft), {
        pause: () => {
          Ht.pause(ft)
        },
        resume: () => {
          Ht.play(ft)
        },
        seek: tt => {
          const et = wt(),
            Vt = Math.max(tt, 0);
          Ht.seek(Qt + (et > 0 ? Math.min(Vt, et) : Vt), ft)
        },
        YM: () => {
          const tt = Ht.seek(ft);
          return "number" === typeof tt ? Math.max(0, tt - Qt) : 0
        },
        getDuration: wt,
        setVolume: tt => {
          Ht.volume(tt, ft)
        },
        stop: () => {
          yt || (Ht.stop(ft), Nt(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);