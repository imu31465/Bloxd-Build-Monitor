export const id = 272;
export const ids = [272];
export const modules = {
  40909: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      playDocsSound: () => oU
    });
    var cU = zU(5378),
      yU = zU(37480),
      QU = zU(1203),
      AU = zU(37484);
    const FU = new Map;

    function oU(UU, XU, zU, oU, DU) {
      let EU, YU = 0;
      if (XU) EU = new cU.Howl({
        src: [`${QU.clientSideServerUrls.staticUrl}/sounds/music/${UU}.mp3`],
        html5: !0,
        volume: zU
      });
      else {
        const XU = (0, yU.y)(UU);
        YU = XU.ms / 1e3, EU = FU.get(UU), EU || (EU = new cU.Howl({
          src: [...XU.src],
          volume: 1
        }), FU.set(UU, EU))
      }
      const NU = XU ? EU.play() : EU.play(AU.d);
      EU.volume(zU, NU), oU > 0 && EU.seek(oU, NU);
      const IU = () => {
        const UU = EU.duration();
        return XU || UU > 0 ? UU : YU
      };
      let pU = !1;
      const aU = UU => {
          pU || (pU = !0, EU.off("play", tU, NU), EU.off("end", gU, NU), EU.off("loaderror", GU), EU.off("playerror", kU, NU), XU && EU.unload(), DU.onEnd(UU))
        },
        tU = () => {
          DU.onPlay(IU())
        },
        gU = () => {
          aU(!1)
        },
        kU = (XU, zU) => {
          console.error(`Could not play docs sound ${UU}`, zU), aU(!0)
        },
        GU = (zU, cU) => {
          XU || FU.get(UU) !== EU || (FU.delete(UU), EU.unload()), kU(zU, cU)
        };
      return EU.on("play", tU, NU), EU.once("end", gU, NU), EU.once("loaderror", GU), EU.once("playerror", kU, NU), {
        pause: () => {
          EU.pause(NU)
        },
        resume: () => {
          EU.play(NU)
        },
        seek: UU => {
          const XU = IU(),
            zU = Math.max(UU, 0);
          EU.seek(XU > 0 ? Math.min(zU, XU) : zU, NU)
        },
        wG: () => {
          const UU = EU.seek(NU);
          return "number" === typeof UU ? Math.max(0, UU) : 0
        },
        getDuration: IU,
        setVolume: UU => {
          EU.volume(UU, NU)
        },
        stop: () => {
          pU || (EU.stop(NU), aU(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);