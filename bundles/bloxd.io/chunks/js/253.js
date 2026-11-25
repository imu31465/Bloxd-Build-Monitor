export const id = 253;
export const ids = [253];
export const modules = {
  39861: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      playDocsSound: () => vB
    });
    var TB = ZB(5028),
      JB = ZB(36783),
      oB = ZB(1258);
    const GB = new Map;

    function vB(BB, IB, ZB, vB, kB) {
      let cB, nB = null,
        hB = 0,
        zB = 0;
      if (IB) cB = new TB.Howl({
        src: [`${oB.clientSideServerUrls.staticUrl}/sounds/music/${BB}.mp3`],
        html5: !0,
        volume: ZB
      });
      else {
        var FB;
        nB = (0, JB.j)(BB);
        const IB = (0, JB.g)(nB),
          ZB = null !== (FB = IB.sprite[BB]) && void 0 !== FB ? FB : null;
        if (!ZB) throw new Error(`Docs sound ${BB} is not in sprite sheet ${nB}`);
        hB = ZB[0] / 1e3, zB = ZB[1] / 1e3, cB = GB.get(nB), cB || (cB = new TB.Howl({
          ...IB,
          volume: 1
        }), GB.set(nB, cB))
      }
      const NB = IB ? cB.play() : cB.play(BB);
      cB.volume(ZB, NB), vB > 0 && cB.seek(hB + vB, NB);
      const gB = () => IB ? cB.duration() : zB;
      let qB = !1;
      const yB = BB => {
          qB || (qB = !0, cB.off("play", UB, NB), cB.off("end", WB, NB), cB.off("loaderror", CB), cB.off("playerror", dB, NB), IB && cB.unload(), kB.onEnd(BB))
        },
        UB = () => {
          kB.onPlay(gB())
        },
        WB = () => {
          yB(!1)
        },
        dB = (IB, ZB) => {
          console.error(`Could not play docs sound ${BB}`, ZB), yB(!0)
        },
        CB = (BB, IB) => {
          null !== nB && GB.get(nB) === cB && (GB.delete(nB), cB.unload()), dB(BB, IB)
        };
      return cB.on("play", UB, NB), cB.once("end", WB, NB), cB.once("loaderror", CB), cB.once("playerror", dB, NB), {
        pause: () => {
          cB.pause(NB)
        },
        resume: () => {
          cB.play(NB)
        },
        seek: BB => {
          const IB = gB(),
            ZB = Math.max(BB, 0);
          cB.seek(hB + (IB > 0 ? Math.min(ZB, IB) : ZB), NB)
        },
        aU: () => {
          const BB = cB.seek(NB);
          return "number" === typeof BB ? Math.max(0, BB - hB) : 0
        },
        getDuration: gB,
        setVolume: BB => {
          cB.volume(BB, NB)
        },
        stop: () => {
          qB || (cB.stop(NB), yB(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);