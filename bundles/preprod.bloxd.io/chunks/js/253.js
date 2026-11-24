export const id = 253;
export const ids = [253];
export const modules = {
  40003: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      playDocsSound: () => xp
    });
    var Op = cp(4974),
      op = cp(36948),
      Ip = cp(1211);
    const Sp = new Map;

    function xp(pp, ip, cp, xp, Lp) {
      let Yp, Dp = null,
        Ap = 0,
        Pp = 0;
      if (ip) Yp = new Op.Howl({
        src: [`${Ip.clientSideServerUrls.staticUrl}/sounds/music/${pp}.mp3`],
        html5: !0,
        volume: cp
      });
      else {
        var Wp;
        Dp = (0, op.i)(pp);
        const ip = (0, op.e)(Dp),
          cp = null !== (Wp = ip.sprite[pp]) && void 0 !== Wp ? Wp : null;
        if (!cp) throw new Error(`Docs sound ${pp} is not in sprite sheet ${Dp}`);
        Ap = cp[0] / 1e3, Pp = cp[1] / 1e3, Yp = Sp.get(Dp), Yp || (Yp = new Op.Howl({
          ...ip,
          volume: 1
        }), Sp.set(Dp, Yp))
      }
      const yp = ip ? Yp.play() : Yp.play(pp);
      Yp.volume(cp, yp), xp > 0 && Yp.seek(Ap + xp, yp);
      const Up = () => ip ? Yp.duration() : Pp;
      let wp = !1;
      const vp = pp => {
          wp || (wp = !0, Yp.off("play", tp, yp), Yp.off("end", Hp, yp), Yp.off("loaderror", ep), Yp.off("playerror", dp, yp), ip && Yp.unload(), Lp.onEnd(pp))
        },
        tp = () => {
          Lp.onPlay(Up())
        },
        Hp = () => {
          vp(!1)
        },
        dp = (ip, cp) => {
          console.error(`Could not play docs sound ${pp}`, cp), vp(!0)
        },
        ep = (pp, ip) => {
          null !== Dp && Sp.get(Dp) === Yp && (Sp.delete(Dp), Yp.unload()), dp(pp, ip)
        };
      return Yp.on("play", tp, yp), Yp.once("end", Hp, yp), Yp.once("loaderror", ep), Yp.once("playerror", dp, yp), {
        pause: () => {
          Yp.pause(yp)
        },
        resume: () => {
          Yp.play(yp)
        },
        seek: pp => {
          const ip = Up(),
            cp = Math.max(pp, 0);
          Yp.seek(Ap + (ip > 0 ? Math.min(cp, ip) : cp), yp)
        },
        sH: () => {
          const pp = Yp.seek(yp);
          return "number" === typeof pp ? Math.max(0, pp - Ap) : 0
        },
        getDuration: Up,
        setVolume: pp => {
          Yp.volume(pp, yp)
        },
        stop: () => {
          wp || (Yp.stop(yp), vp(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);