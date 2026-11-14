export const id = 219;
export const ids = [219];
export const modules = {
  37398: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      playDocsSound: () => bR
    });
    var wW = MW(3835),
      CW = MW(34960),
      zR = MW(1033);
    const AW = new Map;

    function bR(WW, RW, MW, bR, yR) {
      let NW, eW = null,
        BW = 0,
        tR = 0;
      if (RW) NW = new wW.Howl({
        src: [`${zR.clientSideServerUrls.staticUrl}/sounds/music/${WW}.mp3`],
        html5: !0,
        volume: MW
      });
      else {
        var TW;
        eW = (0, CW.l)(WW);
        const RW = (0, CW.i)(eW),
          MW = null !== (TW = RW.sprite[WW]) && void 0 !== TW ? TW : null;
        if (!MW) throw new Error(`Docs sound ${WW} is not in sprite sheet ${eW}`);
        BW = MW[0] / 1e3, tR = MW[1] / 1e3, NW = AW.get(eW), NW || (NW = new wW.Howl({
          ...RW,
          volume: 1
        }), AW.set(eW, NW))
      }
      const gR = RW ? NW.play() : NW.play(WW);
      NW.volume(MW, gR), bR > 0 && NW.seek(BW + bR, gR);
      const iR = () => RW ? NW.duration() : tR;
      let YW = !1;
      const JW = WW => {
          YW || (YW = !0, NW.off("play", PW, gR), NW.off("end", IW, gR), NW.off("loaderror", lW), NW.off("playerror", oW, gR), RW && NW.unload(), yR.onEnd(WW))
        },
        PW = () => {
          yR.onPlay(iR())
        },
        IW = () => {
          JW(!1)
        },
        oW = (RW, MW) => {
          console.error(`Could not play docs sound ${WW}`, MW), JW(!0)
        },
        lW = (WW, RW) => {
          null !== eW && AW.get(eW) === NW && (AW.delete(eW), NW.unload()), oW(WW, RW)
        };
      return NW.on("play", PW, gR), NW.once("end", IW, gR), NW.once("loaderror", lW), NW.once("playerror", oW, gR), {
        pause: () => {
          NW.pause(gR)
        },
        resume: () => {
          NW.play(gR)
        },
        seek: WW => {
          const RW = iR(),
            MW = Math.max(WW, 0);
          NW.seek(BW + (RW > 0 ? Math.min(MW, RW) : MW), gR)
        },
        yX: () => {
          const WW = NW.seek(gR);
          return "number" === typeof WW ? Math.max(0, WW - BW) : 0
        },
        getDuration: iR,
        setVolume: WW => {
          NW.volume(WW, gR)
        },
        stop: () => {
          YW || (NW.stop(gR), JW(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);