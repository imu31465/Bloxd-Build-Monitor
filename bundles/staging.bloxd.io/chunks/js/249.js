export const id = 249;
export const ids = [249];
export const modules = {
  39847: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      playDocsSound: () => NS
    });
    var tS = gS(5005),
      bS = gS(36773),
      XS = gS(1286);
    const xS = new Map;

    function NS(SS, HS, gS, NS, qS) {
      let uS, IS = null,
        fS = 0,
        kS = 0;
      if (HS) uS = new tS.Howl({
        src: [`${XS.clientSideServerUrls.staticUrl}/sounds/music/${SS}.mp3`],
        html5: !0,
        volume: gS
      });
      else {
        var aS;
        IS = (0, bS.l)(SS);
        const HS = (0, bS.i)(IS),
          gS = null !== (aS = HS.sprite[SS]) && void 0 !== aS ? aS : null;
        if (!gS) throw new Error(`Docs sound ${SS} is not in sprite sheet ${IS}`);
        fS = gS[0] / 1e3, kS = gS[1] / 1e3, uS = xS.get(IS), uS || (uS = new tS.Howl({
          ...HS,
          volume: 1
        }), xS.set(IS, uS))
      }
      const KS = HS ? uS.play() : uS.play(SS);
      uS.volume(gS, KS), NS > 0 && uS.seek(fS + NS, KS);
      const jS = () => HS ? uS.duration() : kS;
      let GS = !1;
      const CS = SS => {
          GS || (GS = !0, uS.off("play", nS, KS), uS.off("end", PS, KS), uS.off("loaderror", DS), uS.off("playerror", QS, KS), HS && uS.unload(), qS.onEnd(SS))
        },
        nS = () => {
          qS.onPlay(jS())
        },
        PS = () => {
          CS(!1)
        },
        QS = (HS, gS) => {
          console.error(`Could not play docs sound ${SS}`, gS), CS(!0)
        },
        DS = (SS, HS) => {
          null !== IS && xS.get(IS) === uS && (xS.delete(IS), uS.unload()), QS(SS, HS)
        };
      return uS.on("play", nS, KS), uS.once("end", PS, KS), uS.once("loaderror", DS), uS.once("playerror", QS, KS), {
        pause: () => {
          uS.pause(KS)
        },
        resume: () => {
          uS.play(KS)
        },
        seek: SS => {
          const HS = jS(),
            gS = Math.max(SS, 0);
          uS.seek(fS + (HS > 0 ? Math.min(gS, HS) : gS), KS)
        },
        lC: () => {
          const SS = uS.seek(KS);
          return "number" === typeof SS ? Math.max(0, SS - fS) : 0
        },
        getDuration: jS,
        setVolume: SS => {
          uS.volume(SS, KS)
        },
        stop: () => {
          GS || (uS.stop(KS), CS(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);