export const id = 239;
export const ids = [239];
export const modules = {
  39361: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      playDocsSound: () => Ju
    });
    var Eu = yu(4630),
      Ku = yu(36549),
      Qu = yu(1176);
    const mu = new Map;

    function Ju(uu, Ru, yu, Ju, Nu) {
      let Xu, Vu = null,
        ru = 0,
        Bu = 0;
      if (Ru) Xu = new Eu.Howl({
        src: [`${Qu.clientSideServerUrls.staticUrl}/sounds/music/${uu}.mp3`],
        html5: !0,
        volume: yu
      });
      else {
        var xu;
        Vu = (0, Ku.j)(uu);
        const Ru = (0, Ku.h)(Vu),
          yu = null !== (xu = Ru.sprite[uu]) && void 0 !== xu ? xu : null;
        if (!yu) throw new Error(`Docs sound ${uu} is not in sprite sheet ${Vu}`);
        ru = yu[0] / 1e3, Bu = yu[1] / 1e3, Xu = mu.get(Vu), Xu || (Xu = new Eu.Howl({
          ...Ru,
          volume: 1
        }), mu.set(Vu, Xu))
      }
      const Su = Ru ? Xu.play() : Xu.play(uu);
      Xu.volume(yu, Su), Ju > 0 && Xu.seek(ru + Ju, Su);
      const pu = () => Ru ? Xu.duration() : Bu;
      let Tu = !1;
      const Wu = uu => {
          Tu || (Tu = !0, Xu.off("play", ju, Su), Xu.off("end", Hu, Su), Xu.off("loaderror", bu), Xu.off("playerror", du, Su), Ru && Xu.unload(), Nu.onEnd(uu))
        },
        ju = () => {
          Nu.onPlay(pu())
        },
        Hu = () => {
          Wu(!1)
        },
        du = (Ru, yu) => {
          console.error(`Could not play docs sound ${uu}`, yu), Wu(!0)
        },
        bu = (uu, Ru) => {
          null !== Vu && mu.get(Vu) === Xu && (mu.delete(Vu), Xu.unload()), du(uu, Ru)
        };
      return Xu.on("play", ju, Su), Xu.once("end", Hu, Su), Xu.once("loaderror", bu), Xu.once("playerror", du, Su), {
        pause: () => {
          Xu.pause(Su)
        },
        resume: () => {
          Xu.play(Su)
        },
        seek: uu => {
          const Ru = pu(),
            yu = Math.max(uu, 0);
          Xu.seek(ru + (Ru > 0 ? Math.min(yu, Ru) : yu), Su)
        },
        mH: () => {
          const uu = Xu.seek(Su);
          return "number" === typeof uu ? Math.max(0, uu - ru) : 0
        },
        getDuration: pu,
        setVolume: uu => {
          Xu.volume(uu, Su)
        },
        stop: () => {
          Tu || (Xu.stop(Su), Wu(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);