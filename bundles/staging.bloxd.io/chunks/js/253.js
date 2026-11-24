export const id = 253;
export const ids = [253];
export const modules = {
  39882: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      playDocsSound: () => NB
    });
    var QB = zB(4950),
      nB = zB(36830),
      dB = zB(1244);
    const IB = new Map;

    function NB(BB, jB, zB, NB, uB) {
      let UB, aB = null,
        pB = 0,
        rB = 0;
      if (jB) UB = new QB.Howl({
        src: [`${dB.clientSideServerUrls.staticUrl}/sounds/music/${BB}.mp3`],
        html5: !0,
        volume: zB
      });
      else {
        var sB;
        aB = (0, nB.k)(BB);
        const jB = (0, nB.g)(aB),
          zB = null !== (sB = jB.sprite[BB]) && void 0 !== sB ? sB : null;
        if (!zB) throw new Error(`Docs sound ${BB} is not in sprite sheet ${aB}`);
        pB = zB[0] / 1e3, rB = zB[1] / 1e3, UB = IB.get(aB), UB || (UB = new QB.Howl({
          ...jB,
          volume: 1
        }), IB.set(aB, UB))
      }
      const JB = jB ? UB.play() : UB.play(BB);
      UB.volume(zB, JB), NB > 0 && UB.seek(pB + NB, JB);
      const mB = () => jB ? UB.duration() : rB;
      let yB = !1;
      const kB = BB => {
          yB || (yB = !0, UB.off("play", GB, JB), UB.off("end", LB, JB), UB.off("loaderror", tB), UB.off("playerror", gB, JB), jB && UB.unload(), uB.onEnd(BB))
        },
        GB = () => {
          uB.onPlay(mB())
        },
        LB = () => {
          kB(!1)
        },
        gB = (jB, zB) => {
          console.error(`Could not play docs sound ${BB}`, zB), kB(!0)
        },
        tB = (BB, jB) => {
          null !== aB && IB.get(aB) === UB && (IB.delete(aB), UB.unload()), gB(BB, jB)
        };
      return UB.on("play", GB, JB), UB.once("end", LB, JB), UB.once("loaderror", tB), UB.once("playerror", gB, JB), {
        pause: () => {
          UB.pause(JB)
        },
        resume: () => {
          UB.play(JB)
        },
        seek: BB => {
          const jB = mB(),
            zB = Math.max(BB, 0);
          UB.seek(pB + (jB > 0 ? Math.min(zB, jB) : zB), JB)
        },
        iG: () => {
          const BB = UB.seek(JB);
          return "number" === typeof BB ? Math.max(0, BB - pB) : 0
        },
        getDuration: mB,
        setVolume: BB => {
          UB.volume(BB, JB)
        },
        stop: () => {
          yB || (UB.stop(JB), kB(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);