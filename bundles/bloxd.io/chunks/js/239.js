export const id = 239;
export const ids = [239];
export const modules = {
  38947: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      playDocsSound: () => bD
    });
    var ID = cD(4621),
      pD = cD(36122),
      iD = cD(1199);
    const fD = new Map;

    function bD(DD, CD, cD, bD, QD) {
      let wD, SD = null,
        BD = 0,
        yD = 0;
      if (CD) wD = new ID.Howl({
        src: [`${iD.clientSideServerUrls.staticUrl}/sounds/music/${DD}.mp3`],
        html5: !0,
        volume: cD
      });
      else {
        var MD;
        SD = (0, pD.i)(DD);
        const CD = (0, pD.g)(SD),
          cD = null !== (MD = CD.sprite[DD]) && void 0 !== MD ? MD : null;
        if (!cD) throw new Error(`Docs sound ${DD} is not in sprite sheet ${SD}`);
        BD = cD[0] / 1e3, yD = cD[1] / 1e3, wD = fD.get(SD), wD || (wD = new ID.Howl({
          ...CD,
          volume: 1
        }), fD.set(SD, wD))
      }
      const tD = CD ? wD.play() : wD.play(DD);
      wD.volume(cD, tD), bD > 0 && wD.seek(BD + bD, tD);
      const ZD = () => CD ? wD.duration() : yD;
      let oD = !1;
      const vD = DD => {
          oD || (oD = !0, wD.off("play", ND, tD), wD.off("end", gD, tD), wD.off("loaderror", mD), wD.off("playerror", XD, tD), CD && wD.unload(), QD.onEnd(DD))
        },
        ND = () => {
          QD.onPlay(ZD())
        },
        gD = () => {
          vD(!1)
        },
        XD = (CD, cD) => {
          console.error(`Could not play docs sound ${DD}`, cD), vD(!0)
        },
        mD = (DD, CD) => {
          null !== SD && fD.get(SD) === wD && (fD.delete(SD), wD.unload()), XD(DD, CD)
        };
      return wD.on("play", ND, tD), wD.once("end", gD, tD), wD.once("loaderror", mD), wD.once("playerror", XD, tD), {
        pause: () => {
          wD.pause(tD)
        },
        resume: () => {
          wD.play(tD)
        },
        seek: DD => {
          const CD = ZD(),
            cD = Math.max(DD, 0);
          wD.seek(BD + (CD > 0 ? Math.min(cD, CD) : cD), tD)
        },
        FX: () => {
          const DD = wD.seek(tD);
          return "number" === typeof DD ? Math.max(0, DD - BD) : 0
        },
        getDuration: ZD,
        setVolume: DD => {
          wD.volume(DD, tD)
        },
        stop: () => {
          oD || (wD.stop(tD), vD(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);