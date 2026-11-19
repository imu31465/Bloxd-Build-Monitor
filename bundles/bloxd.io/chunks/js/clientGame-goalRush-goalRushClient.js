export const id = 18;
export const ids = [18];
export const modules = {
  38798: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => nz
    });
    const Ez = .4,
      nz = function(zz, uz, bz, nz) {
        let iz, {
            localPlayerId: lz
          } = nz,
          Mz = !1,
          tz = null,
          Hz = null,
          Oz = null,
          pz = 1,
          dz = null,
          Fz = 0,
          Zz = 0;

        function Rz() {
          if (dz) {
            const zz = dz;
            zz.fade(zz.getVolume(), 0, 500), setTimeout((() => {
              zz.stop()
            }), 500), dz = null
          }
          Zz = 0
        }

        function Kz(zz) {
          var uz;
          if (!tz || Mz || null === Hz) return void(dz && Rz());
          const bz = Date.now();
          if (!dz || bz - Fz > 54e3) {
            if (dz) {
              const zz = dz;
              zz.fade(zz.getVolume(), 0, 2e3), setTimeout((() => {
                zz.stop()
              }), 2e3)
            }
            dz = iz.playSound(lz, "crowdAmbience", Ez, 1), Fz = bz, Zz = Ez
          }
          const nz = function() {
              if (null === Hz || null === Oz || !tz) return 0;
              const zz = iz.getPositionView(tz);
              if (!zz) return 0;
              const uz = Math.abs(zz[2] - Hz),
                bz = Math.abs(zz[2] - Oz),
                Ez = Math.min(uz, bz);
              return Math.max(0, 1 - Ez / pz)
            }(),
            Kz = zz / 1e3;
          Zz += (Ez + .6 * nz - Zz) * Math.min(1, 2 * Kz), null === (uz = dz) || void 0 === uz || uz.setRelativeVolume(Zz)
        }
        return {
          onCreate: zz => {
            iz = zz
          },
          onReceivedMessageFromServer: (zz, uz) => {
            var bz;
            "ballState" === zz ? (tz = null !== (bz = uz.eId) && void 0 !== bz ? bz : null, tz || Rz()) : "frozen" === zz ? Mz = uz.frozen : "pitchInfo" === zz && (Hz = uz.goalZRed, Oz = uz.goalZBlue, pz = Math.abs(Oz - Hz) / 2)
          },
          sd: zz => {
            Kz(zz)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);