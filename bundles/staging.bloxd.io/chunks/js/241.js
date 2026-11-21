export const id = 241;
export const ids = [241];
export const modules = {
  39195: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      playDocsSound: () => kQ
    });
    var LQ = wQ(4694),
      qQ = wQ(36388),
      oQ = wQ(1213);
    const DQ = new Map;

    function kQ(QQ, FQ, wQ, kQ, vQ) {
      let mQ, uQ = null,
        HQ = 0,
        bQ = 0;
      if (FQ) mQ = new LQ.Howl({
        src: [`${oQ.clientSideServerUrls.staticUrl}/sounds/music/${QQ}.mp3`],
        html5: !0,
        volume: wQ
      });
      else {
        var YQ;
        uQ = (0, qQ.h)(QQ);
        const FQ = (0, qQ.e)(uQ),
          wQ = null !== (YQ = FQ.sprite[QQ]) && void 0 !== YQ ? YQ : null;
        if (!wQ) throw new Error(`Docs sound ${QQ} is not in sprite sheet ${uQ}`);
        HQ = wQ[0] / 1e3, bQ = wQ[1] / 1e3, mQ = DQ.get(uQ), mQ || (mQ = new LQ.Howl({
          ...FQ,
          volume: 1
        }), DQ.set(uQ, mQ))
      }
      const xQ = FQ ? mQ.play() : mQ.play(QQ);
      mQ.volume(wQ, xQ), kQ > 0 && mQ.seek(HQ + kQ, xQ);
      const AQ = () => FQ ? mQ.duration() : bQ;
      let tQ = !1;
      const eQ = QQ => {
          tQ || (tQ = !0, mQ.off("play", MQ, xQ), mQ.off("end", GQ, xQ), mQ.off("loaderror", cQ), mQ.off("playerror", pQ, xQ), FQ && mQ.unload(), vQ.onEnd(QQ))
        },
        MQ = () => {
          vQ.onPlay(AQ())
        },
        GQ = () => {
          eQ(!1)
        },
        pQ = (FQ, wQ) => {
          console.error(`Could not play docs sound ${QQ}`, wQ), eQ(!0)
        },
        cQ = (QQ, FQ) => {
          null !== uQ && DQ.get(uQ) === mQ && (DQ.delete(uQ), mQ.unload()), pQ(QQ, FQ)
        };
      return mQ.on("play", MQ, xQ), mQ.once("end", GQ, xQ), mQ.once("loaderror", cQ), mQ.once("playerror", pQ, xQ), {
        pause: () => {
          mQ.pause(xQ)
        },
        resume: () => {
          mQ.play(xQ)
        },
        seek: QQ => {
          const FQ = AQ(),
            wQ = Math.max(QQ, 0);
          mQ.seek(HQ + (FQ > 0 ? Math.min(wQ, FQ) : wQ), xQ)
        },
        Qp: () => {
          const QQ = mQ.seek(xQ);
          return "number" === typeof QQ ? Math.max(0, QQ - HQ) : 0
        },
        getDuration: AQ,
        setVolume: QQ => {
          mQ.volume(QQ, xQ)
        },
        stop: () => {
          tQ || (mQ.stop(xQ), eQ(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);