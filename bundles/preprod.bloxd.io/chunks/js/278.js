export const id = 278;
export const ids = [278];
export const modules = {
  40812: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      playDocsSound: () => yB
    });
    var YB = GB(5353),
      DB = GB(37436),
      QB = GB(1186),
      oB = GB(37443);
    const jB = new Map;

    function yB(BB, OB, GB, yB, JB) {
      let MB, PB = 0;
      if (OB) MB = new YB.Howl({
        src: [`${QB.clientSideServerUrls.staticUrl}/sounds/music/${BB}.mp3`],
        html5: !0,
        volume: GB
      });
      else {
        const OB = (0, DB.t)(BB);
        PB = OB.ms / 1e3, MB = jB.get(BB), MB || (MB = new YB.Howl({
          src: [...OB.src],
          volume: 1
        }), jB.set(BB, MB))
      }
      const zB = OB ? MB.play() : MB.play(oB.d);
      MB.volume(GB, zB), yB > 0 && MB.seek(yB, zB);
      const lB = () => {
        const BB = MB.duration();
        return OB || BB > 0 ? BB : PB
      };
      let pB = !1;
      const qB = BB => {
          pB || (pB = !0, MB.off("play", ZB, zB), MB.off("end", NB, zB), MB.off("loaderror", WB), MB.off("playerror", RB, zB), OB && MB.unload(), JB.onEnd(BB))
        },
        ZB = () => {
          JB.onPlay(lB())
        },
        NB = () => {
          qB(!1)
        },
        RB = (OB, GB) => {
          console.error(`Could not play docs sound ${BB}`, GB), qB(!0)
        },
        WB = (GB, YB) => {
          OB || jB.get(BB) !== MB || (jB.delete(BB), MB.unload()), RB(GB, YB)
        };
      return MB.on("play", ZB, zB), MB.once("end", NB, zB), MB.once("loaderror", WB), MB.once("playerror", RB, zB), {
        pause: () => {
          MB.pause(zB)
        },
        resume: () => {
          MB.play(zB)
        },
        seek: BB => {
          const OB = lB(),
            GB = Math.max(BB, 0);
          MB.seek(OB > 0 ? Math.min(GB, OB) : GB, zB)
        },
        pR: () => {
          const BB = MB.seek(zB);
          return "number" === typeof BB ? Math.max(0, BB) : 0
        },
        getDuration: lB,
        setVolume: BB => {
          MB.volume(BB, zB)
        },
        stop: () => {
          pB || (MB.stop(zB), qB(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);