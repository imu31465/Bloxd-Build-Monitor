export const id = 239;
export const ids = [239];
export const modules = {
  39221: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      playDocsSound: () => Ub
    });
    var kb = sb(4579),
      Wb = sb(36359),
      ab = sb(1208);
    const Tb = new Map;

    function Ub(bb, cb, sb, Ub, Ib) {
      let Hb, fb = null,
        Mb = 0,
        Xb = 0;
      if (cb) Hb = new kb.Howl({
        src: [`${ab.clientSideServerUrls.staticUrl}/sounds/music/${bb}.mp3`],
        html5: !0,
        volume: sb
      });
      else {
        var nb;
        fb = (0, Wb.g)(bb);
        const cb = (0, Wb.f)(fb),
          sb = null !== (nb = cb.sprite[bb]) && void 0 !== nb ? nb : null;
        if (!sb) throw new Error(`Docs sound ${bb} is not in sprite sheet ${fb}`);
        Mb = sb[0] / 1e3, Xb = sb[1] / 1e3, Hb = Tb.get(fb), Hb || (Hb = new kb.Howl({
          ...cb,
          volume: 1
        }), Tb.set(fb, Hb))
      }
      const mb = cb ? Hb.play() : Hb.play(bb);
      Hb.volume(sb, mb), Ub > 0 && Hb.seek(Mb + Ub, mb);
      const lb = () => cb ? Hb.duration() : Xb;
      let Qb = !1;
      const eb = bb => {
          Qb || (Qb = !0, Hb.off("play", Cb, mb), Hb.off("end", Nb, mb), Hb.off("loaderror", Lb), Hb.off("playerror", Vb, mb), cb && Hb.unload(), Ib.onEnd(bb))
        },
        Cb = () => {
          Ib.onPlay(lb())
        },
        Nb = () => {
          eb(!1)
        },
        Vb = (cb, sb) => {
          console.error(`Could not play docs sound ${bb}`, sb), eb(!0)
        },
        Lb = (bb, cb) => {
          null !== fb && Tb.get(fb) === Hb && (Tb.delete(fb), Hb.unload()), Vb(bb, cb)
        };
      return Hb.on("play", Cb, mb), Hb.once("end", Nb, mb), Hb.once("loaderror", Lb), Hb.once("playerror", Vb, mb), {
        pause: () => {
          Hb.pause(mb)
        },
        resume: () => {
          Hb.play(mb)
        },
        seek: bb => {
          const cb = lb(),
            sb = Math.max(bb, 0);
          Hb.seek(Mb + (cb > 0 ? Math.min(sb, cb) : sb), mb)
        },
        aN: () => {
          const bb = Hb.seek(mb);
          return "number" === typeof bb ? Math.max(0, bb - Mb) : 0
        },
        getDuration: lb,
        setVolume: bb => {
          Hb.volume(bb, mb)
        },
        stop: () => {
          Qb || (Hb.stop(mb), eb(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);