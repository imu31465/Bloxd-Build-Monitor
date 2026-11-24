export const id = 249;
export const ids = [249];
export const modules = {
  39909: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      playDocsSound: () => wm
    });
    var hm = fm(4800),
      Am = fm(36846),
      am = fm(1214);
    const xm = new Map;

    function wm(mm, Tm, fm, wm, Dm) {
      let im, Rm = null,
        pm = 0,
        Em = 0;
      if (Tm) im = new hm.Howl({
        src: [`${am.clientSideServerUrls.staticUrl}/sounds/music/${mm}.mp3`],
        html5: !0,
        volume: fm
      });
      else {
        var om;
        Rm = (0, Am.j)(mm);
        const Tm = (0, Am.h)(Rm),
          fm = null !== (om = Tm.sprite[mm]) && void 0 !== om ? om : null;
        if (!fm) throw new Error(`Docs sound ${mm} is not in sprite sheet ${Rm}`);
        pm = fm[0] / 1e3, Em = fm[1] / 1e3, im = xm.get(Rm), im || (im = new hm.Howl({
          ...Tm,
          volume: 1
        }), xm.set(Rm, im))
      }
      const Om = Tm ? im.play() : im.play(mm);
      im.volume(fm, Om), wm > 0 && im.seek(pm + wm, Om);
      const Ym = () => Tm ? im.duration() : Em;
      let qm = !1;
      const jm = mm => {
          qm || (qm = !0, im.off("play", Vm, Om), im.off("end", Im, Om), im.off("loaderror", Qm), im.off("playerror", Km, Om), Tm && im.unload(), Dm.onEnd(mm))
        },
        Vm = () => {
          Dm.onPlay(Ym())
        },
        Im = () => {
          jm(!1)
        },
        Km = (Tm, fm) => {
          console.error(`Could not play docs sound ${mm}`, fm), jm(!0)
        },
        Qm = (mm, Tm) => {
          null !== Rm && xm.get(Rm) === im && (xm.delete(Rm), im.unload()), Km(mm, Tm)
        };
      return im.on("play", Vm, Om), im.once("end", Im, Om), im.once("loaderror", Qm), im.once("playerror", Km, Om), {
        pause: () => {
          im.pause(Om)
        },
        resume: () => {
          im.play(Om)
        },
        seek: mm => {
          const Tm = Ym(),
            fm = Math.max(mm, 0);
          im.seek(pm + (Tm > 0 ? Math.min(fm, Tm) : fm), Om)
        },
        rV: () => {
          const mm = im.seek(Om);
          return "number" === typeof mm ? Math.max(0, mm - pm) : 0
        },
        getDuration: Ym,
        setVolume: mm => {
          im.volume(mm, Om)
        },
        stop: () => {
          qm || (im.stop(Om), jm(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);