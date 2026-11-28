export const id = 285;
export const ids = [285];
export const modules = {
  41482: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      playDocsSound: () => lb
    });
    var eb = Mb(5766),
      Hb = Mb(37630),
      pb = Mb(1271),
      Vb = Mb(37634);
    const gb = new Map;

    function lb(bb, wb, Mb, lb, Lb) {
      let Ib, Ob = 0;
      if (wb) Ib = new eb.Howl({
        src: [`${pb.clientSideServerUrls.staticUrl}/sounds/music/${bb}.mp3`],
        html5: !0,
        volume: Mb
      });
      else {
        const wb = (0, Hb.v)(bb);
        Ob = wb.ms / 1e3, Ib = gb.get(bb), Ib || (Ib = new eb.Howl({
          src: [...wb.src],
          volume: 1
        }), gb.set(bb, Ib))
      }
      const Ub = wb ? Ib.play() : Ib.play(Vb.b);
      Ib.volume(Mb, Ub), lb > 0 && Ib.seek(lb, Ub);
      const tb = () => {
        const bb = Ib.duration();
        return wb || bb > 0 ? bb : Ob
      };
      let Cb = !1;
      const Eb = bb => {
          Cb || (Cb = !0, Ib.off("play", Fb, Ub), Ib.off("end", Bb, Ub), Ib.off("loaderror", mb), Ib.off("playerror", sb, Ub), wb && Ib.unload(), Lb.onEnd(bb))
        },
        Fb = () => {
          Lb.onPlay(tb())
        },
        Bb = () => {
          Eb(!1)
        },
        sb = (wb, Mb) => {
          console.error(`Could not play docs sound ${bb}`, Mb), Eb(!0)
        },
        mb = (Mb, eb) => {
          wb || gb.get(bb) !== Ib || (gb.delete(bb), Ib.unload()), sb(Mb, eb)
        };
      return Ib.on("play", Fb, Ub), Ib.once("end", Bb, Ub), Ib.once("loaderror", mb), Ib.once("playerror", sb, Ub), {
        pause: () => {
          Ib.pause(Ub)
        },
        resume: () => {
          Ib.play(Ub)
        },
        seek: bb => {
          const wb = tb(),
            Mb = Math.max(bb, 0);
          Ib.seek(wb > 0 ? Math.min(Mb, wb) : Mb, Ub)
        },
        Qm: () => {
          const bb = Ib.seek(Ub);
          return "number" === typeof bb ? Math.max(0, bb) : 0
        },
        getDuration: tb,
        setVolume: bb => {
          Ib.volume(bb, Ub)
        },
        stop: () => {
          Cb || (Ib.stop(Ub), Eb(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);