export const id = 228;
export const ids = [228];
export const modules = {
  38258: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      playDocsSound: () => cb
    });
    var Uy = Wy(4068),
      hy = Wy(35521),
      fy = Wy(1052);
    const Zy = new Map;

    function cb(yb, bb, Wy, cb, Py) {
      let oy, By = null,
        Ky = 0,
        ey = 0;
      if (bb) oy = new Uy.Howl({
        src: [`${fy.clientSideServerUrls.staticUrl}/sounds/music/${yb}.mp3`],
        html5: !0,
        volume: Wy
      });
      else {
        var qb;
        By = (0, hy.k)(yb);
        const bb = (0, hy.g)(By),
          Wy = null !== (qb = bb.sprite[yb]) && void 0 !== qb ? qb : null;
        if (!Wy) throw new Error(`Docs sound ${yb} is not in sprite sheet ${By}`);
        Ky = Wy[0] / 1e3, ey = Wy[1] / 1e3, oy = Zy.get(By), oy || (oy = new Uy.Howl({
          ...bb,
          volume: 1
        }), Zy.set(By, oy))
      }
      const sy = bb ? oy.play() : oy.play(yb);
      oy.volume(Wy, sy), cb > 0 && oy.seek(Ky + cb, sy);
      const Sy = () => bb ? oy.duration() : ey;
      let Ey = !1;
      const ly = yb => {
          Ey || (Ey = !0, oy.off("play", mb, sy), oy.off("end", Cy, sy), oy.off("loaderror", Vy), oy.off("playerror", Ty, sy), bb && oy.unload(), Py.onEnd(yb))
        },
        mb = () => {
          Py.onPlay(Sy())
        },
        Cy = () => {
          ly(!1)
        },
        Ty = (bb, Wy) => {
          console.error(`Could not play docs sound ${yb}`, Wy), ly(!0)
        },
        Vy = (yb, bb) => {
          null !== By && Zy.get(By) === oy && (Zy.delete(By), oy.unload()), Ty(yb, bb)
        };
      return oy.on("play", mb, sy), oy.once("end", Cy, sy), oy.once("loaderror", Vy), oy.once("playerror", Ty, sy), {
        pause: () => {
          oy.pause(sy)
        },
        resume: () => {
          oy.play(sy)
        },
        seek: yb => {
          const bb = Sy(),
            Wy = Math.max(yb, 0);
          oy.seek(Ky + (bb > 0 ? Math.min(Wy, bb) : Wy), sy)
        },
        Tl: () => {
          const yb = oy.seek(sy);
          return "number" === typeof yb ? Math.max(0, yb - Ky) : 0
        },
        getDuration: Sy,
        setVolume: yb => {
          oy.volume(yb, sy)
        },
        stop: () => {
          Ey || (oy.stop(sy), ly(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);