export const id = 284;
export const ids = [284];
export const modules = {
  41336: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      playDocsSound: () => cW
    });
    var mW = OW(5615),
      EW = OW(37559),
      NW = OW(1185),
      PW = OW(37563);
    const LW = new Map;

    function cW(WW, iW, OW, cW, wW) {
      let tW, ZW = 0;
      if (iW) tW = new mW.Howl({
        src: [`${NW.clientSideServerUrls.staticUrl}/sounds/music/${WW}.mp3`],
        html5: !0,
        volume: OW
      });
      else {
        const iW = (0, EW.u)(WW);
        ZW = iW.ms / 1e3, tW = LW.get(WW), tW || (tW = new mW.Howl({
          src: [...iW.src],
          volume: 1
        }), LW.set(WW, tW))
      }
      const xW = iW ? tW.play() : tW.play(PW.d);
      tW.volume(OW, xW), cW > 0 && tW.seek(cW, xW);
      const lW = () => {
        const WW = tW.duration();
        return iW || WW > 0 ? WW : ZW
      };
      let AW = !1;
      const bW = WW => {
          AW || (AW = !0, tW.off("play", jW, xW), tW.off("end", UW, xW), tW.off("loaderror", sW), tW.off("playerror", kW, xW), iW && tW.unload(), wW.onEnd(WW))
        },
        jW = () => {
          wW.onPlay(lW())
        },
        UW = () => {
          bW(!1)
        },
        kW = (iW, OW) => {
          console.error(`Could not play docs sound ${WW}`, OW), bW(!0)
        },
        sW = (OW, mW) => {
          iW || LW.get(WW) !== tW || (LW.delete(WW), tW.unload()), kW(OW, mW)
        };
      return tW.on("play", jW, xW), tW.once("end", UW, xW), tW.once("loaderror", sW), tW.once("playerror", kW, xW), {
        pause: () => {
          tW.pause(xW)
        },
        resume: () => {
          tW.play(xW)
        },
        seek: WW => {
          const iW = lW(),
            OW = Math.max(WW, 0);
          tW.seek(iW > 0 ? Math.min(OW, iW) : OW, xW)
        },
        Vk: () => {
          const WW = tW.seek(xW);
          return "number" === typeof WW ? Math.max(0, WW) : 0
        },
        getDuration: lW,
        setVolume: WW => {
          tW.volume(WW, xW)
        },
        stop: () => {
          AW || (tW.stop(xW), bW(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);