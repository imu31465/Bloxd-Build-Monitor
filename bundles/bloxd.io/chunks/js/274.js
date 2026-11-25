export const id = 274;
export const ids = [274];
export const modules = {
  40915: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      playDocsSound: () => nM
    });
    var OM = iM(5265),
      SM = iM(37705),
      jM = iM(1202),
      aM = iM(37713);
    const PM = new Map;

    function nM(MM, rM, iM, nM, QM) {
      let zM, LM = 0;
      if (rM) zM = new OM.Howl({
        src: [`${jM.clientSideServerUrls.staticUrl}/sounds/music/${MM}.mp3`],
        html5: !0,
        volume: iM
      });
      else {
        const rM = (0, SM.r)(MM);
        LM = rM.ms / 1e3, zM = PM.get(MM), zM || (zM = new OM.Howl({
          src: [...rM.src],
          volume: 1
        }), PM.set(MM, zM))
      }
      const mM = rM ? zM.play() : zM.play(aM.e);
      zM.volume(iM, mM), nM > 0 && zM.seek(nM, mM);
      const HM = () => {
        const MM = zM.duration();
        return rM || MM > 0 ? MM : LM
      };
      let hM = !1;
      const JM = MM => {
          hM || (hM = !0, zM.off("play", dM, mM), zM.off("end", yM, mM), zM.off("loaderror", EM), zM.off("playerror", lM, mM), rM && zM.unload(), QM.onEnd(MM))
        },
        dM = () => {
          QM.onPlay(HM())
        },
        yM = () => {
          JM(!1)
        },
        lM = (rM, iM) => {
          console.error(`Could not play docs sound ${MM}`, iM), JM(!0)
        },
        EM = (iM, OM) => {
          rM || PM.get(MM) !== zM || (PM.delete(MM), zM.unload()), lM(iM, OM)
        };
      return zM.on("play", dM, mM), zM.once("end", yM, mM), zM.once("loaderror", EM), zM.once("playerror", lM, mM), {
        pause: () => {
          zM.pause(mM)
        },
        resume: () => {
          zM.play(mM)
        },
        seek: MM => {
          const rM = HM(),
            iM = Math.max(MM, 0);
          zM.seek(rM > 0 ? Math.min(iM, rM) : iM, mM)
        },
        XE: () => {
          const MM = zM.seek(mM);
          return "number" === typeof MM ? Math.max(0, MM) : 0
        },
        getDuration: HM,
        setVolume: MM => {
          zM.volume(MM, mM)
        },
        stop: () => {
          hM || (zM.stop(mM), JM(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);