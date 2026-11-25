export const id = 257;
export const ids = [257];
export const modules = {
  40071: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      playDocsSound: () => sQ
    });
    var wQ = XQ(5212),
      qQ = XQ(37049),
      TQ = XQ(1238);
    const zQ = new Map;

    function sQ(QQ, WQ, XQ, sQ, FQ) {
      let PQ, gQ = null,
        JQ = 0,
        rQ = 0;
      if (WQ) PQ = new wQ.Howl({
        src: [`${TQ.clientSideServerUrls.staticUrl}/sounds/music/${QQ}.mp3`],
        html5: !0,
        volume: XQ
      });
      else {
        var IQ;
        gQ = (0, qQ.l)(QQ);
        const WQ = (0, qQ.h)(gQ),
          XQ = null !== (IQ = WQ.sprite[QQ]) && void 0 !== IQ ? IQ : null;
        if (!XQ) throw new Error(`Docs sound ${QQ} is not in sprite sheet ${gQ}`);
        JQ = XQ[0] / 1e3, rQ = XQ[1] / 1e3, PQ = zQ.get(gQ), PQ || (PQ = new wQ.Howl({
          ...WQ,
          volume: 1
        }), zQ.set(gQ, PQ))
      }
      const jQ = WQ ? PQ.play() : PQ.play(QQ);
      PQ.volume(XQ, jQ), sQ > 0 && PQ.seek(JQ + sQ, jQ);
      const BQ = () => WQ ? PQ.duration() : rQ;
      let yQ = !1;
      const VQ = QQ => {
          yQ || (yQ = !0, PQ.off("play", DQ, jQ), PQ.off("end", pQ, jQ), PQ.off("loaderror", UQ), PQ.off("playerror", GQ, jQ), WQ && PQ.unload(), FQ.onEnd(QQ))
        },
        DQ = () => {
          FQ.onPlay(BQ())
        },
        pQ = () => {
          VQ(!1)
        },
        GQ = (WQ, XQ) => {
          console.error(`Could not play docs sound ${QQ}`, XQ), VQ(!0)
        },
        UQ = (QQ, WQ) => {
          null !== gQ && zQ.get(gQ) === PQ && (zQ.delete(gQ), PQ.unload()), GQ(QQ, WQ)
        };
      return PQ.on("play", DQ, jQ), PQ.once("end", pQ, jQ), PQ.once("loaderror", UQ), PQ.once("playerror", GQ, jQ), {
        pause: () => {
          PQ.pause(jQ)
        },
        resume: () => {
          PQ.play(jQ)
        },
        seek: QQ => {
          const WQ = BQ(),
            XQ = Math.max(QQ, 0);
          PQ.seek(JQ + (WQ > 0 ? Math.min(XQ, WQ) : XQ), jQ)
        },
        xV: () => {
          const QQ = PQ.seek(jQ);
          return "number" === typeof QQ ? Math.max(0, QQ - JQ) : 0
        },
        getDuration: BQ,
        setVolume: QQ => {
          PQ.volume(QQ, jQ)
        },
        stop: () => {
          yQ || (PQ.stop(jQ), VQ(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);