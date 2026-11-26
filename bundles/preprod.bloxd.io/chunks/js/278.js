export const id = 278;
export const ids = [278];
export const modules = {
  41086: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      playDocsSound: () => zH
    });
    var AH = LH(5335),
      rH = LH(37617),
      SH = LH(1131),
      hH = LH(37626);
    const tH = new Map;

    function zH(HH, BH, LH, zH, CH) {
      let EH, XH = 0;
      if (BH) EH = new AH.Howl({
        src: [`${SH.clientSideServerUrls.staticUrl}/sounds/music/${HH}.mp3`],
        html5: !0,
        volume: LH
      });
      else {
        const BH = (0, rH.v)(HH);
        XH = BH.ms / 1e3, EH = tH.get(HH), EH || (EH = new AH.Howl({
          src: [...BH.src],
          volume: 1
        }), tH.set(HH, EH))
      }
      const GH = BH ? EH.play() : EH.play(hH.b);
      EH.volume(LH, GH), zH > 0 && EH.seek(zH, GH);
      const YH = () => {
        const HH = EH.duration();
        return BH || HH > 0 ? HH : XH
      };
      let uH = !1;
      const QH = HH => {
          uH || (uH = !0, EH.off("play", WH, GH), EH.off("end", MH, GH), EH.off("loaderror", vH), EH.off("playerror", xH, GH), BH && EH.unload(), CH.onEnd(HH))
        },
        WH = () => {
          CH.onPlay(YH())
        },
        MH = () => {
          QH(!1)
        },
        xH = (BH, LH) => {
          console.error(`Could not play docs sound ${HH}`, LH), QH(!0)
        },
        vH = (LH, AH) => {
          BH || tH.get(HH) !== EH || (tH.delete(HH), EH.unload()), xH(LH, AH)
        };
      return EH.on("play", WH, GH), EH.once("end", MH, GH), EH.once("loaderror", vH), EH.once("playerror", xH, GH), {
        pause: () => {
          EH.pause(GH)
        },
        resume: () => {
          EH.play(GH)
        },
        seek: HH => {
          const BH = YH(),
            LH = Math.max(HH, 0);
          EH.seek(BH > 0 ? Math.min(LH, BH) : LH, GH)
        },
        hT: () => {
          const HH = EH.seek(GH);
          return "number" === typeof HH ? Math.max(0, HH) : 0
        },
        getDuration: YH,
        setVolume: HH => {
          EH.volume(HH, GH)
        },
        stop: () => {
          uH || (EH.stop(GH), QH(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);