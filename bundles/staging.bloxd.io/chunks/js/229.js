export const id = 229;
export const ids = [229];
export const modules = {
  38545: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      playDocsSound: () => JB
    });
    var VB = dB(4258),
      yB = dB(35732),
      pB = dB(1089);
    const lB = new Map;

    function JB(BB, TB, dB, JB, YB) {
      let gB, oB = null,
        kB = 0,
        LB = 0;
      if (TB) gB = new VB.Howl({
        src: [`${pB.clientSideServerUrls.staticUrl}/sounds/music/${BB}.mp3`],
        html5: !0,
        volume: dB
      });
      else {
        var OB;
        oB = (0, yB.h)(BB);
        const TB = (0, yB.g)(oB),
          dB = null !== (OB = TB.sprite[BB]) && void 0 !== OB ? OB : null;
        if (!dB) throw new Error(`Docs sound ${BB} is not in sprite sheet ${oB}`);
        kB = dB[0] / 1e3, LB = dB[1] / 1e3, gB = lB.get(oB), gB || (gB = new VB.Howl({
          ...TB,
          volume: 1
        }), lB.set(oB, gB))
      }
      const DB = TB ? gB.play() : gB.play(BB);
      gB.volume(dB, DB), JB > 0 && gB.seek(kB + JB, DB);
      const uB = () => TB ? gB.duration() : LB;
      let HB = !1;
      const EB = BB => {
          HB || (HB = !0, gB.off("play", vB, DB), gB.off("end", mB, DB), gB.off("loaderror", NB), gB.off("playerror", iB, DB), TB && gB.unload(), YB.onEnd(BB))
        },
        vB = () => {
          YB.onPlay(uB())
        },
        mB = () => {
          EB(!1)
        },
        iB = (TB, dB) => {
          console.error(`Could not play docs sound ${BB}`, dB), EB(!0)
        },
        NB = (BB, TB) => {
          null !== oB && lB.get(oB) === gB && (lB.delete(oB), gB.unload()), iB(BB, TB)
        };
      return gB.on("play", vB, DB), gB.once("end", mB, DB), gB.once("loaderror", NB), gB.once("playerror", iB, DB), {
        pause: () => {
          gB.pause(DB)
        },
        resume: () => {
          gB.play(DB)
        },
        seek: BB => {
          const TB = uB(),
            dB = Math.max(BB, 0);
          gB.seek(kB + (TB > 0 ? Math.min(dB, TB) : dB), DB)
        },
        Dv: () => {
          const BB = gB.seek(DB);
          return "number" === typeof BB ? Math.max(0, BB - kB) : 0
        },
        getDuration: uB,
        setVolume: BB => {
          gB.volume(BB, DB)
        },
        stop: () => {
          HB || (gB.stop(DB), EB(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);