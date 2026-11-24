export const id = 249;
export const ids = [249];
export const modules = {
  39736: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      playDocsSound: () => LD
    });
    var pD = wD(4875),
      sD = wD(36719),
      KD = wD(1211);
    const rD = new Map;

    function LD(DD, zD, wD, LD, cD) {
      let gD, RD = null,
        AD = 0,
        UD = 0;
      if (zD) gD = new pD.Howl({
        src: [`${KD.clientSideServerUrls.staticUrl}/sounds/music/${DD}.mp3`],
        html5: !0,
        volume: wD
      });
      else {
        var fD;
        RD = (0, sD.l)(DD);
        const zD = (0, sD.i)(RD),
          wD = null !== (fD = zD.sprite[DD]) && void 0 !== fD ? fD : null;
        if (!wD) throw new Error(`Docs sound ${DD} is not in sprite sheet ${RD}`);
        AD = wD[0] / 1e3, UD = wD[1] / 1e3, gD = rD.get(RD), gD || (gD = new pD.Howl({
          ...zD,
          volume: 1
        }), rD.set(RD, gD))
      }
      const ID = zD ? gD.play() : gD.play(DD);
      gD.volume(wD, ID), LD > 0 && gD.seek(AD + LD, ID);
      const BD = () => zD ? gD.duration() : UD;
      let GD = !1;
      const hD = DD => {
          GD || (GD = !0, gD.off("play", nD, ID), gD.off("end", MD, ID), gD.off("loaderror", JD), gD.off("playerror", OD, ID), zD && gD.unload(), cD.onEnd(DD))
        },
        nD = () => {
          cD.onPlay(BD())
        },
        MD = () => {
          hD(!1)
        },
        OD = (zD, wD) => {
          console.error(`Could not play docs sound ${DD}`, wD), hD(!0)
        },
        JD = (DD, zD) => {
          null !== RD && rD.get(RD) === gD && (rD.delete(RD), gD.unload()), OD(DD, zD)
        };
      return gD.on("play", nD, ID), gD.once("end", MD, ID), gD.once("loaderror", JD), gD.once("playerror", OD, ID), {
        pause: () => {
          gD.pause(ID)
        },
        resume: () => {
          gD.play(ID)
        },
        seek: DD => {
          const zD = BD(),
            wD = Math.max(DD, 0);
          gD.seek(AD + (zD > 0 ? Math.min(wD, zD) : wD), ID)
        },
        PJ: () => {
          const DD = gD.seek(ID);
          return "number" === typeof DD ? Math.max(0, DD - AD) : 0
        },
        getDuration: BD,
        setVolume: DD => {
          gD.volume(DD, ID)
        },
        stop: () => {
          GD || (gD.stop(ID), hD(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);