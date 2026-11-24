export const id = 253;
export const ids = [253];
export const modules = {
  39890: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      playDocsSound: () => nT
    });
    var WT = mT(4959),
      zT = mT(36855),
      MT = mT(1302);
    const gT = new Map;

    function nT(TT, UT, mT, nT, HT) {
      let kT, jT = null,
        lT = 0,
        LT = 0;
      if (UT) kT = new WT.Howl({
        src: [`${MT.clientSideServerUrls.staticUrl}/sounds/music/${TT}.mp3`],
        html5: !0,
        volume: mT
      });
      else {
        var pT;
        jT = (0, zT.i)(TT);
        const UT = (0, zT.h)(jT),
          mT = null !== (pT = UT.sprite[TT]) && void 0 !== pT ? pT : null;
        if (!mT) throw new Error(`Docs sound ${TT} is not in sprite sheet ${jT}`);
        lT = mT[0] / 1e3, LT = mT[1] / 1e3, kT = gT.get(jT), kT || (kT = new WT.Howl({
          ...UT,
          volume: 1
        }), gT.set(jT, kT))
      }
      const BT = UT ? kT.play() : kT.play(TT);
      kT.volume(mT, BT), nT > 0 && kT.seek(lT + nT, BT);
      const ZT = () => UT ? kT.duration() : LT;
      let cT = !1;
      const vT = TT => {
          cT || (cT = !0, kT.off("play", fT, BT), kT.off("end", qT, BT), kT.off("loaderror", bT), kT.off("playerror", iT, BT), UT && kT.unload(), HT.onEnd(TT))
        },
        fT = () => {
          HT.onPlay(ZT())
        },
        qT = () => {
          vT(!1)
        },
        iT = (UT, mT) => {
          console.error(`Could not play docs sound ${TT}`, mT), vT(!0)
        },
        bT = (TT, UT) => {
          null !== jT && gT.get(jT) === kT && (gT.delete(jT), kT.unload()), iT(TT, UT)
        };
      return kT.on("play", fT, BT), kT.once("end", qT, BT), kT.once("loaderror", bT), kT.once("playerror", iT, BT), {
        pause: () => {
          kT.pause(BT)
        },
        resume: () => {
          kT.play(BT)
        },
        seek: TT => {
          const UT = ZT(),
            mT = Math.max(TT, 0);
          kT.seek(lT + (UT > 0 ? Math.min(mT, UT) : mT), BT)
        },
        Aq: () => {
          const TT = kT.seek(BT);
          return "number" === typeof TT ? Math.max(0, TT - lT) : 0
        },
        getDuration: ZT,
        setVolume: TT => {
          kT.volume(TT, BT)
        },
        stop: () => {
          cT || (kT.stop(BT), vT(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);