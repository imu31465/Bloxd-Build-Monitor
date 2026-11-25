export const id = 253;
export const ids = [253];
export const modules = {
  40183: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      playDocsSound: () => kG
    });
    var wG = ZG(4883),
      SG = ZG(37105),
      LG = ZG(1163);
    const yG = new Map;

    function kG(GG, bG, ZG, kG, UG) {
      let YG, VG = null,
        pG = 0,
        fG = 0;
      if (bG) YG = new wG.Howl({
        src: [`${LG.clientSideServerUrls.staticUrl}/sounds/music/${GG}.mp3`],
        html5: !0,
        volume: ZG
      });
      else {
        var QG;
        VG = (0, SG.j)(GG);
        const bG = (0, SG.i)(VG),
          ZG = null !== (QG = bG.sprite[GG]) && void 0 !== QG ? QG : null;
        if (!ZG) throw new Error(`Docs sound ${GG} is not in sprite sheet ${VG}`);
        pG = ZG[0] / 1e3, fG = ZG[1] / 1e3, YG = yG.get(VG), YG || (YG = new wG.Howl({
          ...bG,
          volume: 1
        }), yG.set(VG, YG))
      }
      const KG = bG ? YG.play() : YG.play(GG);
      YG.volume(ZG, KG), kG > 0 && YG.seek(pG + kG, KG);
      const hG = () => bG ? YG.duration() : fG;
      let dG = !1;
      const JG = GG => {
          dG || (dG = !0, YG.off("play", rG, KG), YG.off("end", zG, KG), YG.off("loaderror", oG), YG.off("playerror", EG, KG), bG && YG.unload(), UG.onEnd(GG))
        },
        rG = () => {
          UG.onPlay(hG())
        },
        zG = () => {
          JG(!1)
        },
        EG = (bG, ZG) => {
          console.error(`Could not play docs sound ${GG}`, ZG), JG(!0)
        },
        oG = (GG, bG) => {
          null !== VG && yG.get(VG) === YG && (yG.delete(VG), YG.unload()), EG(GG, bG)
        };
      return YG.on("play", rG, KG), YG.once("end", zG, KG), YG.once("loaderror", oG), YG.once("playerror", EG, KG), {
        pause: () => {
          YG.pause(KG)
        },
        resume: () => {
          YG.play(KG)
        },
        seek: GG => {
          const bG = hG(),
            ZG = Math.max(GG, 0);
          YG.seek(pG + (bG > 0 ? Math.min(ZG, bG) : ZG), KG)
        },
        HJ: () => {
          const GG = YG.seek(KG);
          return "number" === typeof GG ? Math.max(0, GG - pG) : 0
        },
        getDuration: hG,
        setVolume: GG => {
          YG.volume(GG, KG)
        },
        stop: () => {
          dG || (YG.stop(KG), JG(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);