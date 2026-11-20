export const id = 239;
export const ids = [239];
export const modules = {
  39188: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      playDocsSound: () => TU
    });
    var tU = gU(4512),
      pU = gU(36311),
      EU = gU(1196);
    const PU = new Map;

    function TU(UU, RU, gU, TU, qU) {
      let KU, cU = null,
        GU = 0,
        jU = 0;
      if (RU) KU = new tU.Howl({
        src: [`${EU.clientSideServerUrls.staticUrl}/sounds/music/${UU}.mp3`],
        html5: !0,
        volume: gU
      });
      else {
        var uU;
        cU = (0, pU.g)(UU);
        const RU = (0, pU.e)(cU),
          gU = null !== (uU = RU.sprite[UU]) && void 0 !== uU ? uU : null;
        if (!gU) throw new Error(`Docs sound ${UU} is not in sprite sheet ${cU}`);
        GU = gU[0] / 1e3, jU = gU[1] / 1e3, KU = PU.get(cU), KU || (KU = new tU.Howl({
          ...RU,
          volume: 1
        }), PU.set(cU, KU))
      }
      const CU = RU ? KU.play() : KU.play(UU);
      KU.volume(gU, CU), TU > 0 && KU.seek(GU + TU, CU);
      const hU = () => RU ? KU.duration() : jU;
      let QU = !1;
      const eU = UU => {
          QU || (QU = !0, KU.off("play", WU, CU), KU.off("end", fU, CU), KU.off("loaderror", mU), KU.off("playerror", xU, CU), RU && KU.unload(), qU.onEnd(UU))
        },
        WU = () => {
          qU.onPlay(hU())
        },
        fU = () => {
          eU(!1)
        },
        xU = (RU, gU) => {
          console.error(`Could not play docs sound ${UU}`, gU), eU(!0)
        },
        mU = (UU, RU) => {
          null !== cU && PU.get(cU) === KU && (PU.delete(cU), KU.unload()), xU(UU, RU)
        };
      return KU.on("play", WU, CU), KU.once("end", fU, CU), KU.once("loaderror", mU), KU.once("playerror", xU, CU), {
        pause: () => {
          KU.pause(CU)
        },
        resume: () => {
          KU.play(CU)
        },
        seek: UU => {
          const RU = hU(),
            gU = Math.max(UU, 0);
          KU.seek(GU + (RU > 0 ? Math.min(gU, RU) : gU), CU)
        },
        Hx: () => {
          const UU = KU.seek(CU);
          return "number" === typeof UU ? Math.max(0, UU - GU) : 0
        },
        getDuration: hU,
        setVolume: UU => {
          KU.volume(UU, CU)
        },
        stop: () => {
          QU || (KU.stop(CU), eU(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);