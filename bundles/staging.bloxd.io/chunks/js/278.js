export const id = 278;
export const ids = [278];
export const modules = {
  40891: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      playDocsSound: () => Fe
    });
    var ye = He(5338),
      be = He(37578),
      Me = He(1141),
      Ke = He(37584);
    const Ue = new Map;

    function Fe(ee, ie, He, Fe, Je) {
      let oe, Re = 0;
      if (ie) oe = new ye.Howl({
        src: [`${Me.clientSideServerUrls.staticUrl}/sounds/music/${ee}.mp3`],
        html5: !0,
        volume: He
      });
      else {
        const ie = (0, be.s)(ee);
        Re = ie.ms / 1e3, oe = Ue.get(ee), oe || (oe = new ye.Howl({
          src: [...ie.src],
          volume: 1
        }), Ue.set(ee, oe))
      }
      const ke = ie ? oe.play() : oe.play(Ke.b);
      oe.volume(He, ke), Fe > 0 && oe.seek(Fe, ke);
      const qe = () => {
        const ee = oe.duration();
        return ie || ee > 0 ? ee : Re
      };
      let fe = !1;
      const Te = ee => {
          fe || (fe = !0, oe.off("play", pe, ke), oe.off("end", Xe, ke), oe.off("loaderror", Be), oe.off("playerror", ze, ke), ie && oe.unload(), Je.onEnd(ee))
        },
        pe = () => {
          Je.onPlay(qe())
        },
        Xe = () => {
          Te(!1)
        },
        ze = (ie, He) => {
          console.error(`Could not play docs sound ${ee}`, He), Te(!0)
        },
        Be = (He, ye) => {
          ie || Ue.get(ee) !== oe || (Ue.delete(ee), oe.unload()), ze(He, ye)
        };
      return oe.on("play", pe, ke), oe.once("end", Xe, ke), oe.once("loaderror", Be), oe.once("playerror", ze, ke), {
        pause: () => {
          oe.pause(ke)
        },
        resume: () => {
          oe.play(ke)
        },
        seek: ee => {
          const ie = qe(),
            He = Math.max(ee, 0);
          oe.seek(ie > 0 ? Math.min(He, ie) : He, ke)
        },
        pE: () => {
          const ee = oe.seek(ke);
          return "number" === typeof ee ? Math.max(0, ee) : 0
        },
        getDuration: qe,
        setVolume: ee => {
          oe.volume(ee, ke)
        },
        stop: () => {
          fe || (oe.stop(ke), Te(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);