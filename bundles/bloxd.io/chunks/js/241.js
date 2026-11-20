export const id = 241;
export const ids = [241];
export const modules = {
  39115: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      playDocsSound: () => pv
    });
    var hv = Pv(4603),
      Sv = Pv(36271),
      ev = Pv(1184);
    const gv = new Map;

    function pv(vv, zv, Pv, pv, dv) {
      let Nv, lv = null,
        Tv = 0,
        Wv = 0;
      if (zv) Nv = new hv.Howl({
        src: [`${ev.clientSideServerUrls.staticUrl}/sounds/music/${vv}.mp3`],
        html5: !0,
        volume: Pv
      });
      else {
        var wv;
        lv = (0, Sv.i)(vv);
        const zv = (0, Sv.f)(lv),
          Pv = null !== (wv = zv.sprite[vv]) && void 0 !== wv ? wv : null;
        if (!Pv) throw new Error(`Docs sound ${vv} is not in sprite sheet ${lv}`);
        Tv = Pv[0] / 1e3, Wv = Pv[1] / 1e3, Nv = gv.get(lv), Nv || (Nv = new hv.Howl({
          ...zv,
          volume: 1
        }), gv.set(lv, Nv))
      }
      const av = zv ? Nv.play() : Nv.play(vv);
      Nv.volume(Pv, av), pv > 0 && Nv.seek(Tv + pv, av);
      const sv = () => zv ? Nv.duration() : Wv;
      let Cv = !1;
      const iv = vv => {
          Cv || (Cv = !0, Nv.off("play", cv, av), Nv.off("end", Gv, av), Nv.off("loaderror", jv), Nv.off("playerror", mv, av), zv && Nv.unload(), dv.onEnd(vv))
        },
        cv = () => {
          dv.onPlay(sv())
        },
        Gv = () => {
          iv(!1)
        },
        mv = (zv, Pv) => {
          console.error(`Could not play docs sound ${vv}`, Pv), iv(!0)
        },
        jv = (vv, zv) => {
          null !== lv && gv.get(lv) === Nv && (gv.delete(lv), Nv.unload()), mv(vv, zv)
        };
      return Nv.on("play", cv, av), Nv.once("end", Gv, av), Nv.once("loaderror", jv), Nv.once("playerror", mv, av), {
        pause: () => {
          Nv.pause(av)
        },
        resume: () => {
          Nv.play(av)
        },
        seek: vv => {
          const zv = sv(),
            Pv = Math.max(vv, 0);
          Nv.seek(Tv + (zv > 0 ? Math.min(Pv, zv) : Pv), av)
        },
        yG: () => {
          const vv = Nv.seek(av);
          return "number" === typeof vv ? Math.max(0, vv - Tv) : 0
        },
        getDuration: sv,
        setVolume: vv => {
          Nv.volume(vv, av)
        },
        stop: () => {
          Cv || (Nv.stop(av), iv(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);