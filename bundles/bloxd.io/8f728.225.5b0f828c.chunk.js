export const id = 225;
export const ids = [225];
export const modules = {
  37867: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      playDocsSound: () => sc
    });
    var Vc = nc(3907),
      Ic = nc(35371),
      rB = nc(1062);
    const uc = new Map;

    function sc(cB, Bc, nc, sc, Mc) {
      let Pc, qB = null,
        Oc = 0,
        Tc = 0;
      if (Bc) Pc = new Vc.Howl({
        src: [`${rB.clientSideServerUrls.staticUrl}/sounds/music/${cB}.mp3`],
        html5: !0,
        volume: nc
      });
      else {
        var fc;
        qB = (0, Ic.i)(cB);
        const Bc = (0, Ic.f)(qB),
          nc = null !== (fc = Bc.sprite[cB]) && void 0 !== fc ? fc : null;
        if (!nc) throw new Error(`Docs sound ${cB} is not in sprite sheet ${qB}`);
        Oc = nc[0] / 1e3, Tc = nc[1] / 1e3, Pc = uc.get(qB), Pc || (Pc = new Vc.Howl({
          ...Bc,
          volume: 1
        }), uc.set(qB, Pc))
      }
      const mB = Bc ? Pc.play() : Pc.play(cB);
      Pc.volume(nc, mB), sc > 0 && Pc.seek(Oc + sc, mB);
      const ec = () => Bc ? Pc.duration() : Tc;
      let tB = !1;
      const Sc = cB => {
          tB || (tB = !0, Pc.off("play", yB, mB), Pc.off("end", zB, mB), Pc.off("loaderror", hc), Pc.off("playerror", pc, mB), Bc && Pc.unload(), Mc.onEnd(cB))
        },
        yB = () => {
          Mc.onPlay(ec())
        },
        zB = () => {
          Sc(!1)
        },
        pc = (Bc, nc) => {
          console.error(`Could not play docs sound ${cB}`, nc), Sc(!0)
        },
        hc = (cB, Bc) => {
          null !== qB && uc.get(qB) === Pc && (uc.delete(qB), Pc.unload()), pc(cB, Bc)
        };
      return Pc.on("play", yB, mB), Pc.once("end", zB, mB), Pc.once("loaderror", hc), Pc.once("playerror", pc, mB), {
        pause: () => {
          Pc.pause(mB)
        },
        resume: () => {
          Pc.play(mB)
        },
        seek: cB => {
          const Bc = ec(),
            nc = Math.max(cB, 0);
          Pc.seek(Oc + (Bc > 0 ? Math.min(nc, Bc) : nc), mB)
        },
        rC: () => {
          const cB = Pc.seek(mB);
          return "number" === typeof cB ? Math.max(0, cB - Oc) : 0
        },
        getDuration: ec,
        setVolume: cB => {
          Pc.volume(cB, mB)
        },
        stop: () => {
          tB || (Pc.stop(mB), Sc(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);