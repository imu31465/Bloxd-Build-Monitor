export const id = 238;
export const ids = [238];
export const modules = {
  38577: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      playDocsSound: () => XT
    });
    var iT = IT(4341),
      zT = IT(35713),
      kT = IT(1183);
    const WT = new Map;

    function XT(TT, oT, IT, XT, BT) {
      let FT, ST = null,
        DT = 0,
        LT = 0;
      if (oT) FT = new iT.Howl({
        src: [`${kT.clientSideServerUrls.staticUrl}/sounds/music/${TT}.mp3`],
        html5: !0,
        volume: IT
      });
      else {
        var xT;
        ST = (0, zT.h)(TT);
        const oT = (0, zT.f)(ST),
          IT = null !== (xT = oT.sprite[TT]) && void 0 !== xT ? xT : null;
        if (!IT) throw new Error(`Docs sound ${TT} is not in sprite sheet ${ST}`);
        DT = IT[0] / 1e3, LT = IT[1] / 1e3, FT = WT.get(ST), FT || (FT = new iT.Howl({
          ...oT,
          volume: 1
        }), WT.set(ST, FT))
      }
      const cT = oT ? FT.play() : FT.play(TT);
      FT.volume(IT, cT), XT > 0 && FT.seek(DT + XT, cT);
      const KT = () => oT ? FT.duration() : LT;
      let MT = !1;
      const rT = TT => {
          MT || (MT = !0, FT.off("play", AT, cT), FT.off("end", gT, cT), FT.off("loaderror", wT), FT.off("playerror", hT, cT), oT && FT.unload(), BT.onEnd(TT))
        },
        AT = () => {
          BT.onPlay(KT())
        },
        gT = () => {
          rT(!1)
        },
        hT = (oT, IT) => {
          console.error(`Could not play docs sound ${TT}`, IT), rT(!0)
        },
        wT = (TT, oT) => {
          null !== ST && WT.get(ST) === FT && (WT.delete(ST), FT.unload()), hT(TT, oT)
        };
      return FT.on("play", AT, cT), FT.once("end", gT, cT), FT.once("loaderror", wT), FT.once("playerror", hT, cT), {
        pause: () => {
          FT.pause(cT)
        },
        resume: () => {
          FT.play(cT)
        },
        seek: TT => {
          const oT = KT(),
            IT = Math.max(TT, 0);
          FT.seek(DT + (oT > 0 ? Math.min(IT, oT) : IT), cT)
        },
        Wm: () => {
          const TT = FT.seek(cT);
          return "number" === typeof TT ? Math.max(0, TT - DT) : 0
        },
        getDuration: KT,
        setVolume: TT => {
          FT.volume(TT, cT)
        },
        stop: () => {
          MT || (FT.stop(cT), rT(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);