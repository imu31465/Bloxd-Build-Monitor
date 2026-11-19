export const id = 239;
export const ids = [239];
export const modules = {
  38987: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      playDocsSound: () => Mz
    });
    var Ez = bz(4616),
      nz = bz(36191),
      iz = bz(1195);
    const lz = new Map;

    function Mz(zz, uz, bz, Mz, tz) {
      let Hz, Oz = null,
        pz = 0,
        dz = 0;
      if (uz) Hz = new Ez.Howl({
        src: [`${iz.clientSideServerUrls.staticUrl}/sounds/music/${zz}.mp3`],
        html5: !0,
        volume: bz
      });
      else {
        var Fz;
        Oz = (0, nz.f)(zz);
        const uz = (0, nz.e)(Oz),
          bz = null !== (Fz = uz.sprite[zz]) && void 0 !== Fz ? Fz : null;
        if (!bz) throw new Error(`Docs sound ${zz} is not in sprite sheet ${Oz}`);
        pz = bz[0] / 1e3, dz = bz[1] / 1e3, Hz = lz.get(Oz), Hz || (Hz = new Ez.Howl({
          ...uz,
          volume: 1
        }), lz.set(Oz, Hz))
      }
      const Zz = uz ? Hz.play() : Hz.play(zz);
      Hz.volume(bz, Zz), Mz > 0 && Hz.seek(pz + Mz, Zz);
      const Rz = () => uz ? Hz.duration() : dz;
      let Kz = !1;
      const wz = zz => {
          Kz || (Kz = !0, Hz.off("play", Xz, Zz), Hz.off("end", fz, Zz), Hz.off("loaderror", rz), Hz.off("playerror", sz, Zz), uz && Hz.unload(), tz.onEnd(zz))
        },
        Xz = () => {
          tz.onPlay(Rz())
        },
        fz = () => {
          wz(!1)
        },
        sz = (uz, bz) => {
          console.error(`Could not play docs sound ${zz}`, bz), wz(!0)
        },
        rz = (zz, uz) => {
          null !== Oz && lz.get(Oz) === Hz && (lz.delete(Oz), Hz.unload()), sz(zz, uz)
        };
      return Hz.on("play", Xz, Zz), Hz.once("end", fz, Zz), Hz.once("loaderror", rz), Hz.once("playerror", sz, Zz), {
        pause: () => {
          Hz.pause(Zz)
        },
        resume: () => {
          Hz.play(Zz)
        },
        seek: zz => {
          const uz = Rz(),
            bz = Math.max(zz, 0);
          Hz.seek(pz + (uz > 0 ? Math.min(bz, uz) : bz), Zz)
        },
        Gs: () => {
          const zz = Hz.seek(Zz);
          return "number" === typeof zz ? Math.max(0, zz - pz) : 0
        },
        getDuration: Rz,
        setVolume: zz => {
          Hz.volume(zz, Zz)
        },
        stop: () => {
          Kz || (Hz.stop(Zz), wz(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);