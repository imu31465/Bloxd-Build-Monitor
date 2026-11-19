export const id = 221;
export const ids = [221];
export const modules = {
  36526: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => Ez,
      i: () => nz
    });
    const Ez = 1 / 2.2,
      nz = 2.2;
    Math.sqrt(5);
    let iz = .001
  },
  36553: (zz, uz, bz) => {
    function Ez(zz) {
      return parseInt(zz.toString().replace(/\W/g, ""))
    }

    function nz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(zz - uz) <= bz
    }

    function iz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return zz < uz - Ez || zz > bz + Ez
    }

    function lz(zz, uz) {
      return zz === uz ? zz : Math.random() * (uz - zz) + zz
    }

    function Mz(zz, uz, bz) {
      return zz + (uz - zz) * bz
    }

    function tz(zz, uz, bz) {
      let Ez = Kz(uz - zz, 360);
      return Ez > 180 && (Ez -= 360), zz + Ez * dz(bz)
    }

    function Hz(zz, uz, bz) {
      let Ez;
      return Ez = zz != uz ? dz((bz - zz) / (uz - zz)) : 0, Ez
    }

    function Oz(zz, uz, bz, Ez, nz) {
      const iz = nz * nz,
        lz = nz * iz;
      return zz * (2 * lz - 3 * iz + 1) + bz * (-2 * lz + 3 * iz) + uz * (lz - 2 * iz + nz) + Ez * (lz - iz)
    }

    function pz(zz, uz, bz, Ez, nz) {
      const iz = nz * nz;
      return 6 * (iz - nz) * zz + (3 * iz - 4 * nz + 1) * uz + 6 * (-iz + nz) * bz + (3 * iz - 2 * nz) * Ez
    }

    function dz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(bz, Math.max(uz, zz))
    }

    function Fz(zz) {
      return zz -= 2 * Math.PI * Math.floor((zz + Math.PI) / (2 * Math.PI))
    }

    function Zz(zz) {
      const uz = zz.toString(16);
      return zz <= 15 ? ("0" + uz).toUpperCase() : uz.toUpperCase()
    }

    function Rz(zz) {
      if (Math.log2) return Math.floor(Math.log2(zz));
      if (zz < 0) return NaN;
      if (0 === zz) return -1 / 0;
      let uz = 0;
      if (zz < 1) {
        for (; zz < 1;) uz++, zz *= 2;
        uz = -uz
      } else if (zz > 1)
        for (; zz > 1;) uz++, zz = Math.floor(zz / 2);
      return uz
    }

    function Kz(zz, uz) {
      return zz - Math.floor(zz / uz) * uz
    }

    function wz(zz, uz, bz) {
      return (zz - uz) / (bz - uz)
    }

    function Xz(zz, uz, bz) {
      return zz * (bz - uz) + uz
    }

    function fz(zz, uz) {
      let bz = Kz(uz - zz, 360);
      return bz > 180 && (bz -= 360), bz
    }

    function sz(zz, uz) {
      const bz = Kz(zz, 2 * uz);
      return uz - Math.abs(bz - uz)
    }

    function rz(zz, uz, bz) {
      let Ez = dz(bz);
      return Ez = -2 * Ez * Ez * Ez + 3 * Ez * Ez, uz * Ez + zz * (1 - Ez)
    }

    function oz(zz, uz, bz) {
      let Ez;
      return Ez = Math.abs(uz - zz) <= bz ? uz : zz + Math.sign(uz - zz) * bz, Ez
    }

    function Nz(zz, uz, bz) {
      const Ez = fz(zz, uz);
      let nz;
      return nz = -bz < Ez && Ez < bz ? uz : oz(zz, uz = zz + Ez, bz), nz
    }

    function vz(zz, uz, bz) {
      return (zz - uz) / (bz - uz)
    }

    function xz(zz, uz, bz) {
      return (bz - uz) * zz + uz
    }

    function Jz(zz, uz) {
      const bz = zz % uz;
      return 0 === bz ? uz : Jz(uz, bz)
    }
    bz.r(uz), bz.d(uz, {
      Clamp: () => dz,
      DeltaAngle: () => fz,
      Denormalize: () => Xz,
      ExtractAsInt: () => Ez,
      Hermite: () => Oz,
      Hermite1stDerivative: () => pz,
      HighestCommonFactor: () => Jz,
      ILog2: () => Rz,
      InverseLerp: () => Hz,
      Lerp: () => Mz,
      LerpAngle: () => tz,
      MoveTowards: () => oz,
      MoveTowardsAngle: () => Nz,
      Normalize: () => wz,
      NormalizeRadians: () => Fz,
      OutsideRange: () => iz,
      PercentToRange: () => xz,
      PingPong: () => sz,
      RandomRange: () => lz,
      RangeToPercent: () => vz,
      Repeat: () => Kz,
      SmoothStep: () => rz,
      ToHex: () => Zz,
      WithinEpsilon: () => nz
    })
  },
  36514: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Matrix: () => Ez.d,
      Quaternion: () => Ez.h,
      RegisterMathVector: () => Ez.j,
      TmpVectors: () => Ez.l,
      Vector2: () => Ez.m,
      ER: () => Ez.n,
      Vector4: () => Ez.r
    });
    var Ez = bz(36519);
    (0, Ez.j)()
  },
  36528: (zz, uz, bz) => {
    function Ez(zz, uz) {
      const bz = [];
      for (let Ez = 0; Ez < zz; ++Ez) bz.push(uz());
      return bz
    }

    function nz(zz, uz) {
      return Ez(zz, uz)
    }
    bz.d(uz, {
      d: () => Ez,
      g: () => nz,
      h: () => lz
    });
    const iz = ["push", "splice", "pop", "shift", "unshift"];

    function lz(zz, uz) {
      const bz = iz.map((bz => function(zz, uz, bz) {
        const Ez = zz[uz];
        if ("function" !== typeof Ez) return null;
        const nz = function() {
          const Ez = zz.length,
            iz = nz.previous.apply(zz, arguments);
          return bz(uz, Ez), iz
        };
        return Ez.next = nz, nz.previous = Ez, zz[uz] = nz, () => {
          const bz = nz.previous;
          if (!bz) return;
          const Ez = nz.next;
          Ez ? (bz.next = Ez, Ez.previous = bz) : (bz.next = void 0, zz[uz] = bz), nz.next = void 0, nz.previous = void 0
        }
      }(zz, bz, uz)));
      return () => {
        for (const zz of bz) zz?.()
      }
    }
  },
  36564: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      c: () => nz
    });
    const Ez = {};

    function nz(zz, uz) {
      Ez[zz] = uz
    }

    function iz(zz) {
      return Ez[zz]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);