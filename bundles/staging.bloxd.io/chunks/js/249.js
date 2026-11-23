export const id = 249;
export const ids = [249];
export const modules = {
  39621: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      playDocsSound: () => fC
    });
    var QC = ZC(4797),
      wC = ZC(36641),
      bC = ZC(1149);
    const nC = new Map;

    function fC(CC, zC, ZC, fC, oC) {
      let qC, FC = null,
        WC = 0,
        NC = 0;
      if (zC) qC = new QC.Howl({
        src: [`${bC.clientSideServerUrls.staticUrl}/sounds/music/${CC}.mp3`],
        html5: !0,
        volume: ZC
      });
      else {
        var MC;
        FC = (0, wC.k)(CC);
        const zC = (0, wC.j)(FC),
          ZC = null !== (MC = zC.sprite[CC]) && void 0 !== MC ? MC : null;
        if (!ZC) throw new Error(`Docs sound ${CC} is not in sprite sheet ${FC}`);
        WC = ZC[0] / 1e3, NC = ZC[1] / 1e3, qC = nC.get(FC), qC || (qC = new QC.Howl({
          ...zC,
          volume: 1
        }), nC.set(FC, qC))
      }
      const gC = zC ? qC.play() : qC.play(CC);
      qC.volume(ZC, gC), fC > 0 && qC.seek(WC + fC, gC);
      const SC = () => zC ? qC.duration() : NC;
      let pC = !1;
      const PC = CC => {
          pC || (pC = !0, qC.off("play", GC, gC), qC.off("end", RC, gC), qC.off("loaderror", xC), qC.off("playerror", AC, gC), zC && qC.unload(), oC.onEnd(CC))
        },
        GC = () => {
          oC.onPlay(SC())
        },
        RC = () => {
          PC(!1)
        },
        AC = (zC, ZC) => {
          console.error(`Could not play docs sound ${CC}`, ZC), PC(!0)
        },
        xC = (CC, zC) => {
          null !== FC && nC.get(FC) === qC && (nC.delete(FC), qC.unload()), AC(CC, zC)
        };
      return qC.on("play", GC, gC), qC.once("end", RC, gC), qC.once("loaderror", xC), qC.once("playerror", AC, gC), {
        pause: () => {
          qC.pause(gC)
        },
        resume: () => {
          qC.play(gC)
        },
        seek: CC => {
          const zC = SC(),
            ZC = Math.max(CC, 0);
          qC.seek(WC + (zC > 0 ? Math.min(ZC, zC) : ZC), gC)
        },
        yG: () => {
          const CC = qC.seek(gC);
          return "number" === typeof CC ? Math.max(0, CC - WC) : 0
        },
        getDuration: SC,
        setVolume: CC => {
          qC.volume(CC, gC)
        },
        stop: () => {
          pC || (qC.stop(gC), PC(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);