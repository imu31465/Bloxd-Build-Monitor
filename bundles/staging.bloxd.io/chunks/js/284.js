export const id = 284;
export const ids = [284];
export const modules = {
  41339: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      playDocsSound: () => iR
    });
    var yR = GR(5742),
      tR = GR(37470),
      uR = GR(1282),
      ZR = GR(37479);
    const qR = new Map;

    function iR(RR, JR, GR, iR, fR) {
      let VR, KR = 0;
      if (JR) VR = new yR.Howl({
        src: [`${uR.clientSideServerUrls.staticUrl}/sounds/music/${RR}.mp3`],
        html5: !0,
        volume: GR
      });
      else {
        const JR = (0, tR.v)(RR);
        KR = JR.ms / 1e3, VR = qR.get(RR), VR || (VR = new yR.Howl({
          src: [...JR.src],
          volume: 1
        }), qR.set(RR, VR))
      }
      const wR = JR ? VR.play() : VR.play(ZR.d);
      VR.volume(GR, wR), iR > 0 && VR.seek(iR, wR);
      const rR = () => {
        const RR = VR.duration();
        return JR || RR > 0 ? RR : KR
      };
      let eR = !1;
      const aR = RR => {
          eR || (eR = !0, VR.off("play", LR, wR), VR.off("end", nR, wR), VR.off("loaderror", WR), VR.off("playerror", UR, wR), JR && VR.unload(), fR.onEnd(RR))
        },
        LR = () => {
          fR.onPlay(rR())
        },
        nR = () => {
          aR(!1)
        },
        UR = (JR, GR) => {
          console.error(`Could not play docs sound ${RR}`, GR), aR(!0)
        },
        WR = (GR, yR) => {
          JR || qR.get(RR) !== VR || (qR.delete(RR), VR.unload()), UR(GR, yR)
        };
      return VR.on("play", LR, wR), VR.once("end", nR, wR), VR.once("loaderror", WR), VR.once("playerror", UR, wR), {
        pause: () => {
          VR.pause(wR)
        },
        resume: () => {
          VR.play(wR)
        },
        seek: RR => {
          const JR = rR(),
            GR = Math.max(RR, 0);
          VR.seek(JR > 0 ? Math.min(GR, JR) : GR, wR)
        },
        vW: () => {
          const RR = VR.seek(wR);
          return "number" === typeof RR ? Math.max(0, RR) : 0
        },
        getDuration: rR,
        setVolume: RR => {
          VR.volume(RR, wR)
        },
        stop: () => {
          eR || (VR.stop(wR), aR(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);