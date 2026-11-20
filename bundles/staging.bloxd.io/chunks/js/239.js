export const id = 239;
export const ids = [239];
export const modules = {
  38880: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      playDocsSound: () => Yb
    });
    var Ab = Ub(4546),
      Mb = Ub(36108),
      Tb = Ub(1142);
    const Eb = new Map;

    function Yb(bb, ab, Ub, Yb, Bb) {
      let eb, vb = null,
        Lb = 0,
        Pb = 0;
      if (ab) eb = new Ab.Howl({
        src: [`${Tb.clientSideServerUrls.staticUrl}/sounds/music/${bb}.mp3`],
        html5: !0,
        volume: Ub
      });
      else {
        var Xb;
        vb = (0, Mb.k)(bb);
        const ab = (0, Mb.i)(vb),
          Ub = null !== (Xb = ab.sprite[bb]) && void 0 !== Xb ? Xb : null;
        if (!Ub) throw new Error(`Docs sound ${bb} is not in sprite sheet ${vb}`);
        Lb = Ub[0] / 1e3, Pb = Ub[1] / 1e3, eb = Eb.get(vb), eb || (eb = new Ab.Howl({
          ...ab,
          volume: 1
        }), Eb.set(vb, eb))
      }
      const jb = ab ? eb.play() : eb.play(bb);
      eb.volume(Ub, jb), Yb > 0 && eb.seek(Lb + Yb, jb);
      const Rb = () => ab ? eb.duration() : Pb;
      let kb = !1;
      const yb = bb => {
          kb || (kb = !0, eb.off("play", Zb, jb), eb.off("end", Db, jb), eb.off("loaderror", xb), eb.off("playerror", zb, jb), ab && eb.unload(), Bb.onEnd(bb))
        },
        Zb = () => {
          Bb.onPlay(Rb())
        },
        Db = () => {
          yb(!1)
        },
        zb = (ab, Ub) => {
          console.error(`Could not play docs sound ${bb}`, Ub), yb(!0)
        },
        xb = (bb, ab) => {
          null !== vb && Eb.get(vb) === eb && (Eb.delete(vb), eb.unload()), zb(bb, ab)
        };
      return eb.on("play", Zb, jb), eb.once("end", Db, jb), eb.once("loaderror", xb), eb.once("playerror", zb, jb), {
        pause: () => {
          eb.pause(jb)
        },
        resume: () => {
          eb.play(jb)
        },
        seek: bb => {
          const ab = Rb(),
            Ub = Math.max(bb, 0);
          eb.seek(Lb + (ab > 0 ? Math.min(Ub, ab) : Ub), jb)
        },
        eZ: () => {
          const bb = eb.seek(jb);
          return "number" === typeof bb ? Math.max(0, bb - Lb) : 0
        },
        getDuration: Rb,
        setVolume: bb => {
          eb.volume(bb, jb)
        },
        stop: () => {
          kb || (eb.stop(jb), yb(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);