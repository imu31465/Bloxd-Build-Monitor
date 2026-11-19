export const id = 238;
export const ids = [238];
export const modules = {
  38946: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      playDocsSound: () => OY
    });
    var FY = DY(4434),
      AY = DY(36151),
      IY = DY(1222);
    const RY = new Map;

    function OY(YY, rY, DY, OY, gY) {
      let aY, vY = null,
        uY = 0,
        sY = 0;
      if (rY) aY = new FY.Howl({
        src: [`${IY.clientSideServerUrls.staticUrl}/sounds/music/${YY}.mp3`],
        html5: !0,
        volume: DY
      });
      else {
        var iY;
        vY = (0, AY.k)(YY);
        const rY = (0, AY.g)(vY),
          DY = null !== (iY = rY.sprite[YY]) && void 0 !== iY ? iY : null;
        if (!DY) throw new Error(`Docs sound ${YY} is not in sprite sheet ${vY}`);
        uY = DY[0] / 1e3, sY = DY[1] / 1e3, aY = RY.get(vY), aY || (aY = new FY.Howl({
          ...rY,
          volume: 1
        }), RY.set(vY, aY))
      }
      const yY = rY ? aY.play() : aY.play(YY);
      aY.volume(DY, yY), OY > 0 && aY.seek(uY + OY, yY);
      const QY = () => rY ? aY.duration() : sY;
      let oY = !1;
      const WY = YY => {
          oY || (oY = !0, aY.off("play", EY, yY), aY.off("end", mY, yY), aY.off("loaderror", SY), aY.off("playerror", VY, yY), rY && aY.unload(), gY.onEnd(YY))
        },
        EY = () => {
          gY.onPlay(QY())
        },
        mY = () => {
          WY(!1)
        },
        VY = (rY, DY) => {
          console.error(`Could not play docs sound ${YY}`, DY), WY(!0)
        },
        SY = (YY, rY) => {
          null !== vY && RY.get(vY) === aY && (RY.delete(vY), aY.unload()), VY(YY, rY)
        };
      return aY.on("play", EY, yY), aY.once("end", mY, yY), aY.once("loaderror", SY), aY.once("playerror", VY, yY), {
        pause: () => {
          aY.pause(yY)
        },
        resume: () => {
          aY.play(yY)
        },
        seek: YY => {
          const rY = QY(),
            DY = Math.max(YY, 0);
          aY.seek(uY + (rY > 0 ? Math.min(DY, rY) : DY), yY)
        },
        lE: () => {
          const YY = aY.seek(yY);
          return "number" === typeof YY ? Math.max(0, YY - uY) : 0
        },
        getDuration: QY,
        setVolume: YY => {
          aY.volume(YY, yY)
        },
        stop: () => {
          oY || (aY.stop(yY), WY(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);