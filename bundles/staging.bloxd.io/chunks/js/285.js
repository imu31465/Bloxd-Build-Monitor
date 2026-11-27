export const id = 285;
export const ids = [285];
export const modules = {
  41704: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      playDocsSound: () => fr
    });
    var Zr = Qr(5681),
      Wr = Qr(37851),
      ar = Qr(1262),
      jr = Qr(37853);
    const Ir = new Map;

    function fr(rr, Sr, Qr, fr, Er) {
      let pr, xr = 0;
      if (Sr) pr = new Zr.Howl({
        src: [`${ar.clientSideServerUrls.staticUrl}/sounds/music/${rr}.mp3`],
        html5: !0,
        volume: Qr
      });
      else {
        const Sr = (0, Wr.r)(rr);
        xr = Sr.ms / 1e3, pr = Ir.get(rr), pr || (pr = new Zr.Howl({
          src: [...Sr.src],
          volume: 1
        }), Ir.set(rr, pr))
      }
      const mr = Sr ? pr.play() : pr.play(jr.e);
      pr.volume(Qr, mr), fr > 0 && pr.seek(fr, mr);
      const Nr = () => {
        const rr = pr.duration();
        return Sr || rr > 0 ? rr : xr
      };
      let Ur = !1;
      const tr = rr => {
          Ur || (Ur = !0, pr.off("play", hr, mr), pr.off("end", zr, mr), pr.off("loaderror", nr), pr.off("playerror", Yr, mr), Sr && pr.unload(), Er.onEnd(rr))
        },
        hr = () => {
          Er.onPlay(Nr())
        },
        zr = () => {
          tr(!1)
        },
        Yr = (Sr, Qr) => {
          console.error(`Could not play docs sound ${rr}`, Qr), tr(!0)
        },
        nr = (Qr, Zr) => {
          Sr || Ir.get(rr) !== pr || (Ir.delete(rr), pr.unload()), Yr(Qr, Zr)
        };
      return pr.on("play", hr, mr), pr.once("end", zr, mr), pr.once("loaderror", nr), pr.once("playerror", Yr, mr), {
        pause: () => {
          pr.pause(mr)
        },
        resume: () => {
          pr.play(mr)
        },
        seek: rr => {
          const Sr = Nr(),
            Qr = Math.max(rr, 0);
          pr.seek(Sr > 0 ? Math.min(Qr, Sr) : Qr, mr)
        },
        JY: () => {
          const rr = pr.seek(mr);
          return "number" === typeof rr ? Math.max(0, rr) : 0
        },
        getDuration: Nr,
        setVolume: rr => {
          pr.volume(rr, mr)
        },
        stop: () => {
          Ur || (pr.stop(mr), tr(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);