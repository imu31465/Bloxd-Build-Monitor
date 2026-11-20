export const id = 239;
export const ids = [239];
export const modules = {
  38990: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      playDocsSound: () => oz
    });
    var Fz = sz(4488),
      Wz = sz(36199),
      Xz = sz(1191);
    const Oz = new Map;

    function oz(zz, tz, sz, oz, vz) {
      let Uz, Kz = null,
        uz = 0,
        Nz = 0;
      if (tz) Uz = new Fz.Howl({
        src: [`${Xz.clientSideServerUrls.staticUrl}/sounds/music/${zz}.mp3`],
        html5: !0,
        volume: sz
      });
      else {
        var bz;
        Kz = (0, Wz.h)(zz);
        const tz = (0, Wz.e)(Kz),
          sz = null !== (bz = tz.sprite[zz]) && void 0 !== bz ? bz : null;
        if (!sz) throw new Error(`Docs sound ${zz} is not in sprite sheet ${Kz}`);
        uz = sz[0] / 1e3, Nz = sz[1] / 1e3, Uz = Oz.get(Kz), Uz || (Uz = new Fz.Howl({
          ...tz,
          volume: 1
        }), Oz.set(Kz, Uz))
      }
      const wz = tz ? Uz.play() : Uz.play(zz);
      Uz.volume(sz, wz), oz > 0 && Uz.seek(uz + oz, wz);
      const Dz = () => tz ? Uz.duration() : Nz;
      let gz = !1;
      const Hz = zz => {
          gz || (gz = !0, Uz.off("play", Bz, wz), Uz.off("end", Pz, wz), Uz.off("loaderror", Yz), Uz.off("playerror", rz, wz), tz && Uz.unload(), vz.onEnd(zz))
        },
        Bz = () => {
          vz.onPlay(Dz())
        },
        Pz = () => {
          Hz(!1)
        },
        rz = (tz, sz) => {
          console.error(`Could not play docs sound ${zz}`, sz), Hz(!0)
        },
        Yz = (zz, tz) => {
          null !== Kz && Oz.get(Kz) === Uz && (Oz.delete(Kz), Uz.unload()), rz(zz, tz)
        };
      return Uz.on("play", Bz, wz), Uz.once("end", Pz, wz), Uz.once("loaderror", Yz), Uz.once("playerror", rz, wz), {
        pause: () => {
          Uz.pause(wz)
        },
        resume: () => {
          Uz.play(wz)
        },
        seek: zz => {
          const tz = Dz(),
            sz = Math.max(zz, 0);
          Uz.seek(uz + (tz > 0 ? Math.min(sz, tz) : sz), wz)
        },
        yB: () => {
          const zz = Uz.seek(wz);
          return "number" === typeof zz ? Math.max(0, zz - uz) : 0
        },
        getDuration: Dz,
        setVolume: zz => {
          Uz.volume(zz, wz)
        },
        stop: () => {
          gz || (Uz.stop(wz), Hz(!1))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);