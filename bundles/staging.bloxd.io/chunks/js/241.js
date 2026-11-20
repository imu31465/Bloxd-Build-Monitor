export const id = 241;
export const ids = [241];
export const modules = {
  39254: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      playDocsSound: () => Lb
    });
    var Bb = hb(4626),
      Ob = hb(36393),
      Gb = hb(1103);
    const Ub = new Map;

    function Lb(bb, ub, hb, Lb, Yb) {
      let Sb, ab = null,
        Hb = 0,
        wb = 0;
      if (ub) Sb = new Bb.Howl({
        src: [`${Gb.clientSideServerUrls.staticUrl}/sounds/music/${bb}.mp3`],
        html5: !0,
        volume: hb
      });
      else {
        var Zb;
        ab = (0, Ob.m)(bb);
        const ub = (0, Ob.k)(ab),
          hb = null !== (Zb = ub.sprite[bb]) && void 0 !== Zb ? Zb : null;
        if (!hb) throw new Error(`Docs sound ${bb} is not in sprite sheet ${ab}`);
        Hb = hb[0] / 1e3, wb = hb[1] / 1e3, Sb = Ub.get(ab), Sb || (Sb = new Bb.Howl({
          ...ub,
          volume: 1
        }), Ub.set(ab, Sb))
      }
      const Xb = ub ? Sb.play() : Sb.play(bb);
      Sb.volume(hb, Xb), Lb > 0 && Sb.seek(Hb + Lb, Xb);
      const pb = () => ub ? Sb.duration() : wb;
      let ob = !1;
      const Ab = bb => {
          ob || (ob = !0, Sb.off("play", lb, Xb), Sb.off("end", Kb, Xb), Sb.off("loaderror", Cb), Sb.off("playerror", Wb, Xb), ub && Sb.unload(), Yb.onEnd(bb))
        },
        lb = () => {
          Yb.onPlay(pb())
        },
        Kb = () => {
          Ab(!1)
        },
        Wb = (ub, hb) => {
          console.error(`Could not play docs sound ${bb}`, hb), Ab(!0)
        },
        Cb = (bb, ub) => {
          null !== ab && Ub.get(ab) === Sb && (Ub.delete(ab), Sb.unload()), Wb(bb, ub)
        };
      return Sb.on("play", lb, Xb), Sb.once("end", Kb, Xb), Sb.once("loaderror", Cb), Sb.once("playerror", Wb, Xb), {
        pause: () => {
          Sb.pause(Xb)
        },
        resume: () => {
          Sb.play(Xb)
        },
        seek: bb => {
          const ub = pb(),
            hb = Math.max(bb, 0);
          Sb.seek(Hb + (ub > 0 ? Math.min(hb, ub) : hb), Xb)
        },
        iK: () => {
          const bb = Sb.seek(Xb);
          return "number" === typeof bb ? Math.max(0, bb - Hb) : 0
        },
        getDuration: pb,
        setVolume: bb => {
          Sb.volume(bb, Xb)
        },
        stop: () => {
          ob || (Sb.stop(Xb), Ab(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);