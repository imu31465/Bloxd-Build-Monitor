export const id = 274;
export const ids = [274];
export const modules = {
  41053: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      playDocsSound: () => QV
    });
    var JV = xV(5353),
      YV = xV(37930),
      UV = xV(1230),
      yV = xV(37935);
    const pV = new Map;

    function QV(VV, eV, xV, QV, nV) {
      let wV, ZV = 0;
      if (eV) wV = new JV.Howl({
        src: [`${UV.clientSideServerUrls.staticUrl}/sounds/music/${VV}.mp3`],
        html5: !0,
        volume: xV
      });
      else {
        const eV = (0, YV.w)(VV);
        ZV = eV.ms / 1e3, wV = pV.get(VV), wV || (wV = new JV.Howl({
          src: [...eV.src],
          volume: 1
        }), pV.set(VV, wV))
      }
      const vV = eV ? wV.play() : wV.play(yV.e);
      wV.volume(xV, vV), QV > 0 && wV.seek(QV, vV);
      const rV = () => {
        const VV = wV.duration();
        return eV || VV > 0 ? VV : ZV
      };
      let kV = !1;
      const bV = VV => {
          kV || (kV = !0, wV.off("play", EV, vV), wV.off("end", BV, vV), wV.off("loaderror", qV), wV.off("playerror", jV, vV), eV && wV.unload(), nV.onEnd(VV))
        },
        EV = () => {
          nV.onPlay(rV())
        },
        BV = () => {
          bV(!1)
        },
        jV = (eV, xV) => {
          console.error(`Could not play docs sound ${VV}`, xV), bV(!0)
        },
        qV = (xV, JV) => {
          eV || pV.get(VV) !== wV || (pV.delete(VV), wV.unload()), jV(xV, JV)
        };
      return wV.on("play", EV, vV), wV.once("end", BV, vV), wV.once("loaderror", qV), wV.once("playerror", jV, vV), {
        pause: () => {
          wV.pause(vV)
        },
        resume: () => {
          wV.play(vV)
        },
        seek: VV => {
          const eV = rV(),
            xV = Math.max(VV, 0);
          wV.seek(eV > 0 ? Math.min(xV, eV) : xV, vV)
        },
        YF: () => {
          const VV = wV.seek(vV);
          return "number" === typeof VV ? Math.max(0, VV) : 0
        },
        getDuration: rV,
        setVolume: VV => {
          wV.volume(VV, vV)
        },
        stop: () => {
          kV || (wV.stop(vV), bV(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);