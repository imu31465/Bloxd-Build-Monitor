export const id = 18;
export const ids = [18];
export const modules = {
  38790: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Wz
    });
    const Fz = .4,
      Wz = function(zz, tz, sz, Wz) {
        let Xz, {
            localPlayerId: Oz
          } = Wz,
          oz = !1,
          vz = null,
          Uz = null,
          Kz = null,
          uz = 1,
          Nz = null,
          bz = 0,
          wz = 0;

        function Dz() {
          if (Nz) {
            const zz = Nz;
            zz.fade(zz.getVolume(), 0, 500), setTimeout((() => {
              zz.stop()
            }), 500), Nz = null
          }
          wz = 0
        }

        function gz(zz) {
          var tz;
          if (!vz || oz || null === Uz) return void(Nz && Dz());
          const sz = Date.now();
          if (!Nz || sz - bz > 54e3) {
            if (Nz) {
              const zz = Nz;
              zz.fade(zz.getVolume(), 0, 2e3), setTimeout((() => {
                zz.stop()
              }), 2e3)
            }
            Nz = Xz.playSound(Oz, "crowdAmbience", Fz, 1), bz = sz, wz = Fz
          }
          const Wz = function() {
              if (null === Uz || null === Kz || !vz) return 0;
              const zz = Xz.getPositionView(vz);
              if (!zz) return 0;
              const tz = Math.abs(zz[2] - Uz),
                sz = Math.abs(zz[2] - Kz),
                Fz = Math.min(tz, sz);
              return Math.max(0, 1 - Fz / uz)
            }(),
            gz = zz / 1e3;
          wz += (Fz + .6 * Wz - wz) * Math.min(1, 2 * gz), null === (tz = Nz) || void 0 === tz || tz.setRelativeVolume(wz)
        }
        return {
          onCreate: zz => {
            Xz = zz
          },
          onReceivedMessageFromServer: (zz, tz) => {
            var sz;
            "ballState" === zz ? (vz = null !== (sz = tz.eId) && void 0 !== sz ? sz : null, vz || Dz()) : "frozen" === zz ? oz = tz.frozen : "pitchInfo" === zz && (Uz = tz.goalZRed, Kz = tz.goalZBlue, uz = Math.abs(Kz - Uz) / 2)
          },
          wN: zz => {
            gz(zz)
          }
        }
      }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);