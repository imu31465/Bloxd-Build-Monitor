export const id = 285;
export const ids = [285];
export const modules = {
  41740: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      playDocsSound: () => hd
    });
    var Wd = md(5641),
      Fd = md(37942),
      Rd = md(1253),
      Xd = md(37948);
    const Kd = new Map;

    function hd(dd, Od, md, hd, vd) {
      let Qd, td = 0;
      if (Od) Qd = new Wd.Howl({
        src: [`${Rd.clientSideServerUrls.staticUrl}/sounds/music/${dd}.mp3`],
        html5: !0,
        volume: md
      });
      else {
        const Od = (0, Fd.t)(dd);
        td = Od.ms / 1e3, Qd = Kd.get(dd), Qd || (Qd = new Wd.Howl({
          src: [...Od.src],
          volume: 1
        }), Kd.set(dd, Qd))
      }
      const od = Od ? Qd.play() : Qd.play(Xd.b);
      Qd.volume(md, od), hd > 0 && Qd.seek(hd, od);
      const Nd = () => {
        const dd = Qd.duration();
        return Od || dd > 0 ? dd : td
      };
      let qd = !1;
      const Hd = dd => {
          qd || (qd = !0, Qd.off("play", yd, od), Qd.off("end", bd, od), Qd.off("loaderror", pd), Qd.off("playerror", Td, od), Od && Qd.unload(), vd.onEnd(dd))
        },
        yd = () => {
          vd.onPlay(Nd())
        },
        bd = () => {
          Hd(!1)
        },
        Td = (Od, md) => {
          console.error(`Could not play docs sound ${dd}`, md), Hd(!0)
        },
        pd = (md, Wd) => {
          Od || Kd.get(dd) !== Qd || (Kd.delete(dd), Qd.unload()), Td(md, Wd)
        };
      return Qd.on("play", yd, od), Qd.once("end", bd, od), Qd.once("loaderror", pd), Qd.once("playerror", Td, od), {
        pause: () => {
          Qd.pause(od)
        },
        resume: () => {
          Qd.play(od)
        },
        seek: dd => {
          const Od = Nd(),
            md = Math.max(dd, 0);
          Qd.seek(Od > 0 ? Math.min(md, Od) : md, od)
        },
        hY: () => {
          const dd = Qd.seek(od);
          return "number" === typeof dd ? Math.max(0, dd) : 0
        },
        getDuration: Nd,
        setVolume: dd => {
          Qd.volume(dd, od)
        },
        stop: () => {
          qd || (Qd.stop(od), Hd(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);