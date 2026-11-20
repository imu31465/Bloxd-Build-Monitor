export const id = 241;
export const ids = [241];
export const modules = {
  39569: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      playDocsSound: () => xq
    });
    var Yq = gq(4684),
      lq = gq(36796),
      Oq = gq(1195);
    const mq = new Map;

    function xq(qq, Eq, gq, xq, Aq) {
      let cq, uq = null,
        Bq = 0,
        Wq = 0;
      if (Eq) cq = new Yq.Howl({
        src: [`${Oq.clientSideServerUrls.staticUrl}/sounds/music/${qq}.mp3`],
        html5: !0,
        volume: gq
      });
      else {
        var Nq;
        uq = (0, lq.k)(qq);
        const Eq = (0, lq.g)(uq),
          gq = null !== (Nq = Eq.sprite[qq]) && void 0 !== Nq ? Nq : null;
        if (!gq) throw new Error(`Docs sound ${qq} is not in sprite sheet ${uq}`);
        Bq = gq[0] / 1e3, Wq = gq[1] / 1e3, cq = mq.get(uq), cq || (cq = new Yq.Howl({
          ...Eq,
          volume: 1
        }), mq.set(uq, cq))
      }
      const aq = Eq ? cq.play() : cq.play(qq);
      cq.volume(gq, aq), xq > 0 && cq.seek(Bq + xq, aq);
      const Vq = () => Eq ? cq.duration() : Wq;
      let dq = !1;
      const jq = qq => {
          dq || (dq = !0, cq.off("play", Hq, aq), cq.off("end", oq, aq), cq.off("loaderror", Qq), cq.off("playerror", Pq, aq), Eq && cq.unload(), Aq.onEnd(qq))
        },
        Hq = () => {
          Aq.onPlay(Vq())
        },
        oq = () => {
          jq(!1)
        },
        Pq = (Eq, gq) => {
          console.error(`Could not play docs sound ${qq}`, gq), jq(!0)
        },
        Qq = (qq, Eq) => {
          null !== uq && mq.get(uq) === cq && (mq.delete(uq), cq.unload()), Pq(qq, Eq)
        };
      return cq.on("play", Hq, aq), cq.once("end", oq, aq), cq.once("loaderror", Qq), cq.once("playerror", Pq, aq), {
        pause: () => {
          cq.pause(aq)
        },
        resume: () => {
          cq.play(aq)
        },
        seek: qq => {
          const Eq = Vq(),
            gq = Math.max(qq, 0);
          cq.seek(Bq + (Eq > 0 ? Math.min(gq, Eq) : gq), aq)
        },
        Py: () => {
          const qq = cq.seek(aq);
          return "number" === typeof qq ? Math.max(0, qq - Bq) : 0
        },
        getDuration: Vq,
        setVolume: qq => {
          cq.volume(qq, aq)
        },
        stop: () => {
          dq || (cq.stop(aq), jq(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);