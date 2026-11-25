export const id = 253;
export const ids = [253];
export const modules = {
  40076: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      playDocsSound: () => lu
    });
    var su = ju(5026),
      Uu = ju(37151),
      Zu = ju(1255);
    const Xu = new Map;

    function lu(uu, Eu, ju, lu, qu) {
      let fu, Cu = null,
        bu = 0,
        cu = 0;
      if (Eu) fu = new su.Howl({
        src: [`${Zu.clientSideServerUrls.staticUrl}/sounds/music/${uu}.mp3`],
        html5: !0,
        volume: ju
      });
      else {
        var Nu;
        Cu = (0, Uu.j)(uu);
        const Eu = (0, Uu.g)(Cu),
          ju = null !== (Nu = Eu.sprite[uu]) && void 0 !== Nu ? Nu : null;
        if (!ju) throw new Error(`Docs sound ${uu} is not in sprite sheet ${Cu}`);
        bu = ju[0] / 1e3, cu = ju[1] / 1e3, fu = Xu.get(Cu), fu || (fu = new su.Howl({
          ...Eu,
          volume: 1
        }), Xu.set(Cu, fu))
      }
      const Ou = Eu ? fu.play() : fu.play(uu);
      fu.volume(ju, Ou), lu > 0 && fu.seek(bu + lu, Ou);
      const Yu = () => Eu ? fu.duration() : cu;
      let hu = !1;
      const Du = uu => {
          hu || (hu = !0, fu.off("play", gu, Ou), fu.off("end", Mu, Ou), fu.off("loaderror", Gu), fu.off("playerror", eu, Ou), Eu && fu.unload(), qu.onEnd(uu))
        },
        gu = () => {
          qu.onPlay(Yu())
        },
        Mu = () => {
          Du(!1)
        },
        eu = (Eu, ju) => {
          console.error(`Could not play docs sound ${uu}`, ju), Du(!0)
        },
        Gu = (uu, Eu) => {
          null !== Cu && Xu.get(Cu) === fu && (Xu.delete(Cu), fu.unload()), eu(uu, Eu)
        };
      return fu.on("play", gu, Ou), fu.once("end", Mu, Ou), fu.once("loaderror", Gu), fu.once("playerror", eu, Ou), {
        pause: () => {
          fu.pause(Ou)
        },
        resume: () => {
          fu.play(Ou)
        },
        seek: uu => {
          const Eu = Yu(),
            ju = Math.max(uu, 0);
          fu.seek(bu + (Eu > 0 ? Math.min(ju, Eu) : ju), Ou)
        },
        bM: () => {
          const uu = fu.seek(Ou);
          return "number" === typeof uu ? Math.max(0, uu - bu) : 0
        },
        getDuration: Yu,
        setVolume: uu => {
          fu.volume(uu, Ou)
        },
        stop: () => {
          hu || (fu.stop(Ou), Du(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);