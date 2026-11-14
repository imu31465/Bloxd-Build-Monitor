export const id = 219;
export const ids = [219];
export const modules = {
  37767: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      playDocsSound: () => bW
    });
    var CF = SF(3855),
      AF = SF(35247),
      uF = SF(1056);
    const hF = new Map;

    function bW(FF, WF, SF, bW, dF) {
      let PF, RF = null,
        iW = 0,
        eF = 0;
      if (WF) PF = new CF.Howl({
        src: [`${uF.clientSideServerUrls.staticUrl}/sounds/music/${FF}.mp3`],
        html5: !0,
        volume: SF
      });
      else {
        var EF;
        RF = (0, AF.h)(FF);
        const WF = (0, AF.f)(RF),
          SF = null !== (EF = WF.sprite[FF]) && void 0 !== EF ? EF : null;
        if (!SF) throw new Error(`Docs sound ${FF} is not in sprite sheet ${RF}`);
        iW = SF[0] / 1e3, eF = SF[1] / 1e3, PF = hF.get(RF), PF || (PF = new CF.Howl({
          ...WF,
          volume: 1
        }), hF.set(RF, PF))
      }
      const QF = WF ? PF.play() : PF.play(FF);
      PF.volume(SF, QF), bW > 0 && PF.seek(iW + bW, QF);
      const rW = () => WF ? PF.duration() : eF;
      let gW = !1;
      const tW = FF => {
          gW || (gW = !0, PF.off("play", TF, QF), PF.off("end", aW, QF), PF.off("loaderror", qW), PF.off("playerror", kW, QF), WF && PF.unload(), dF.onEnd(FF))
        },
        TF = () => {
          dF.onPlay(rW())
        },
        aW = () => {
          tW(!1)
        },
        kW = (WF, SF) => {
          console.error(`Could not play docs sound ${FF}`, SF), tW(!0)
        },
        qW = (FF, WF) => {
          null !== RF && hF.get(RF) === PF && (hF.delete(RF), PF.unload()), kW(FF, WF)
        };
      return PF.on("play", TF, QF), PF.once("end", aW, QF), PF.once("loaderror", qW), PF.once("playerror", kW, QF), {
        pause: () => {
          PF.pause(QF)
        },
        resume: () => {
          PF.play(QF)
        },
        seek: FF => {
          const WF = rW(),
            SF = Math.max(FF, 0);
          PF.seek(iW + (WF > 0 ? Math.min(SF, WF) : SF), QF)
        },
        fD: () => {
          const FF = PF.seek(QF);
          return "number" === typeof FF ? Math.max(0, FF - iW) : 0
        },
        getDuration: rW,
        setVolume: FF => {
          PF.volume(FF, QF)
        },
        stop: () => {
          gW || (PF.stop(QF), tW(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);