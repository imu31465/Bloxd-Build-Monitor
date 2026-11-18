export const id = 229;
export const ids = [229];
export const modules = {
  38603: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      playDocsSound: () => AJ
    });
    var FJ = ZJ(4259),
      UJ = ZJ(35789),
      eJ = ZJ(1098);
    const XJ = new Map;

    function AJ(JJ, cJ, ZJ, AJ, qJ) {
      let jJ, YJ = null,
        hJ = 0,
        DJ = 0;
      if (cJ) jJ = new FJ.Howl({
        src: [`${eJ.clientSideServerUrls.staticUrl}/sounds/music/${JJ}.mp3`],
        html5: !0,
        volume: ZJ
      });
      else {
        var sJ;
        YJ = (0, UJ.h)(JJ);
        const cJ = (0, UJ.g)(YJ),
          ZJ = null !== (sJ = cJ.sprite[JJ]) && void 0 !== sJ ? sJ : null;
        if (!ZJ) throw new Error(`Docs sound ${JJ} is not in sprite sheet ${YJ}`);
        hJ = ZJ[0] / 1e3, DJ = ZJ[1] / 1e3, jJ = XJ.get(YJ), jJ || (jJ = new FJ.Howl({
          ...cJ,
          volume: 1
        }), XJ.set(YJ, jJ))
      }
      const nJ = cJ ? jJ.play() : jJ.play(JJ);
      jJ.volume(ZJ, nJ), AJ > 0 && jJ.seek(hJ + AJ, nJ);
      const GJ = () => cJ ? jJ.duration() : DJ;
      let fJ = !1;
      const xJ = JJ => {
          fJ || (fJ = !0, jJ.off("play", rJ, nJ), jJ.off("end", vJ, nJ), jJ.off("loaderror", QJ), jJ.off("playerror", mJ, nJ), cJ && jJ.unload(), qJ.onEnd(JJ))
        },
        rJ = () => {
          qJ.onPlay(GJ())
        },
        vJ = () => {
          xJ(!1)
        },
        mJ = (cJ, ZJ) => {
          console.error(`Could not play docs sound ${JJ}`, ZJ), xJ(!0)
        },
        QJ = (JJ, cJ) => {
          null !== YJ && XJ.get(YJ) === jJ && (XJ.delete(YJ), jJ.unload()), mJ(JJ, cJ)
        };
      return jJ.on("play", rJ, nJ), jJ.once("end", vJ, nJ), jJ.once("loaderror", QJ), jJ.once("playerror", mJ, nJ), {
        pause: () => {
          jJ.pause(nJ)
        },
        resume: () => {
          jJ.play(nJ)
        },
        seek: JJ => {
          const cJ = GJ(),
            ZJ = Math.max(JJ, 0);
          jJ.seek(hJ + (cJ > 0 ? Math.min(ZJ, cJ) : ZJ), nJ)
        },
        Om: () => {
          const JJ = jJ.seek(nJ);
          return "number" === typeof JJ ? Math.max(0, JJ - hJ) : 0
        },
        getDuration: GJ,
        setVolume: JJ => {
          jJ.volume(JJ, nJ)
        },
        stop: () => {
          fJ || (jJ.stop(nJ), xJ(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);