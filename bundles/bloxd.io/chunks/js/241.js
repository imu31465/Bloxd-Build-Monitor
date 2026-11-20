export const id = 241;
export const ids = [241];
export const modules = {
  39432: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      playDocsSound: () => yT
    });
    var lT = cT(4820),
      MT = cT(36580),
      KT = cT(1202);
    const OT = new Map;

    function yT(TT, kT, cT, yT, fT) {
      let xT, IT = null,
        AT = 0,
        CT = 0;
      if (kT) xT = new lT.Howl({
        src: [`${KT.clientSideServerUrls.staticUrl}/sounds/music/${TT}.mp3`],
        html5: !0,
        volume: cT
      });
      else {
        var jT;
        IT = (0, MT.m)(TT);
        const kT = (0, MT.l)(IT),
          cT = null !== (jT = kT.sprite[TT]) && void 0 !== jT ? jT : null;
        if (!cT) throw new Error(`Docs sound ${TT} is not in sprite sheet ${IT}`);
        AT = cT[0] / 1e3, CT = cT[1] / 1e3, xT = OT.get(IT), xT || (xT = new lT.Howl({
          ...kT,
          volume: 1
        }), OT.set(IT, xT))
      }
      const vT = kT ? xT.play() : xT.play(TT);
      xT.volume(cT, vT), yT > 0 && xT.seek(AT + yT, vT);
      const tT = () => kT ? xT.duration() : CT;
      let hT = !1;
      const NT = TT => {
          hT || (hT = !0, xT.off("play", QT, vT), xT.off("end", ST, vT), xT.off("loaderror", aT), xT.off("playerror", DT, vT), kT && xT.unload(), fT.onEnd(TT))
        },
        QT = () => {
          fT.onPlay(tT())
        },
        ST = () => {
          NT(!1)
        },
        DT = (kT, cT) => {
          console.error(`Could not play docs sound ${TT}`, cT), NT(!0)
        },
        aT = (TT, kT) => {
          null !== IT && OT.get(IT) === xT && (OT.delete(IT), xT.unload()), DT(TT, kT)
        };
      return xT.on("play", QT, vT), xT.once("end", ST, vT), xT.once("loaderror", aT), xT.once("playerror", DT, vT), {
        pause: () => {
          xT.pause(vT)
        },
        resume: () => {
          xT.play(vT)
        },
        seek: TT => {
          const kT = tT(),
            cT = Math.max(TT, 0);
          xT.seek(AT + (kT > 0 ? Math.min(cT, kT) : cT), vT)
        },
        kN: () => {
          const TT = xT.seek(vT);
          return "number" === typeof TT ? Math.max(0, TT - AT) : 0
        },
        getDuration: tT,
        setVolume: TT => {
          xT.volume(TT, vT)
        },
        stop: () => {
          hT || (xT.stop(vT), NT(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);