export const id = 221;
export const ids = [221];
export const modules = {
  36479: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      f: () => Fz,
      i: () => Wz
    });
    const Fz = 1 / 2.2,
      Wz = 2.2;
    Math.sqrt(5);
    let Xz = .001
  },
  36507: (zz, tz, sz) => {
    function Fz(zz) {
      return parseInt(zz.toString().replace(/\W/g, ""))
    }

    function Wz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(zz - tz) <= sz
    }

    function Xz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return zz < tz - Fz || zz > sz + Fz
    }

    function Oz(zz, tz) {
      return zz === tz ? zz : Math.random() * (tz - zz) + zz
    }

    function oz(zz, tz, sz) {
      return zz + (tz - zz) * sz
    }

    function vz(zz, tz, sz) {
      let Fz = gz(tz - zz, 360);
      return Fz > 180 && (Fz -= 360), zz + Fz * Nz(sz)
    }

    function Uz(zz, tz, sz) {
      let Fz;
      return Fz = zz != tz ? Nz((sz - zz) / (tz - zz)) : 0, Fz
    }

    function Kz(zz, tz, sz, Fz, Wz) {
      const Xz = Wz * Wz,
        Oz = Wz * Xz;
      return zz * (2 * Oz - 3 * Xz + 1) + sz * (-2 * Oz + 3 * Xz) + tz * (Oz - 2 * Xz + Wz) + Fz * (Oz - Xz)
    }

    function uz(zz, tz, sz, Fz, Wz) {
      const Xz = Wz * Wz;
      return 6 * (Xz - Wz) * zz + (3 * Xz - 4 * Wz + 1) * tz + 6 * (-Xz + Wz) * sz + (3 * Xz - 2 * Wz) * Fz
    }

    function Nz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(sz, Math.max(tz, zz))
    }

    function bz(zz) {
      return zz -= 2 * Math.PI * Math.floor((zz + Math.PI) / (2 * Math.PI))
    }

    function wz(zz) {
      const tz = zz.toString(16);
      return zz <= 15 ? ("0" + tz).toUpperCase() : tz.toUpperCase()
    }

    function Dz(zz) {
      if (Math.log2) return Math.floor(Math.log2(zz));
      if (zz < 0) return NaN;
      if (0 === zz) return -1 / 0;
      let tz = 0;
      if (zz < 1) {
        for (; zz < 1;) tz++, zz *= 2;
        tz = -tz
      } else if (zz > 1)
        for (; zz > 1;) tz++, zz = Math.floor(zz / 2);
      return tz
    }

    function gz(zz, tz) {
      return zz - Math.floor(zz / tz) * tz
    }

    function Hz(zz, tz, sz) {
      return (zz - tz) / (sz - tz)
    }

    function Bz(zz, tz, sz) {
      return zz * (sz - tz) + tz
    }

    function Pz(zz, tz) {
      let sz = gz(tz - zz, 360);
      return sz > 180 && (sz -= 360), sz
    }

    function rz(zz, tz) {
      const sz = gz(zz, 2 * tz);
      return tz - Math.abs(sz - tz)
    }

    function Yz(zz, tz, sz) {
      let Fz = Nz(sz);
      return Fz = -2 * Fz * Fz * Fz + 3 * Fz * Fz, tz * Fz + zz * (1 - Fz)
    }

    function xz(zz, tz, sz) {
      let Fz;
      return Fz = Math.abs(tz - zz) <= sz ? tz : zz + Math.sign(tz - zz) * sz, Fz
    }

    function mz(zz, tz, sz) {
      const Fz = Pz(zz, tz);
      let Wz;
      return Wz = -sz < Fz && Fz < sz ? tz : xz(zz, tz = zz + Fz, sz), Wz
    }

    function Jz(zz, tz, sz) {
      return (zz - tz) / (sz - tz)
    }

    function Iz(zz, tz, sz) {
      return (sz - tz) * zz + tz
    }

    function Cz(zz, tz) {
      const sz = zz % tz;
      return 0 === sz ? tz : Cz(tz, sz)
    }
    sz.r(tz), sz.d(tz, {
      Clamp: () => Nz,
      DeltaAngle: () => Pz,
      Denormalize: () => Bz,
      ExtractAsInt: () => Fz,
      Hermite: () => Kz,
      Hermite1stDerivative: () => uz,
      HighestCommonFactor: () => Cz,
      ILog2: () => Dz,
      InverseLerp: () => Uz,
      Lerp: () => oz,
      LerpAngle: () => vz,
      MoveTowards: () => xz,
      MoveTowardsAngle: () => mz,
      Normalize: () => Hz,
      NormalizeRadians: () => bz,
      OutsideRange: () => Xz,
      PercentToRange: () => Iz,
      PingPong: () => rz,
      RandomRange: () => Oz,
      RangeToPercent: () => Jz,
      Repeat: () => gz,
      SmoothStep: () => Yz,
      ToHex: () => wz,
      WithinEpsilon: () => Wz
    })
  },
  36473: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Matrix: () => Fz.e,
      Quaternion: () => Fz.h,
      RegisterMathVector: () => Fz.k,
      TmpVectors: () => Fz.m,
      Vector2: () => Fz.n,
      XD: () => Fz.p,
      Vector4: () => Fz.q
    });
    var Fz = sz(36475);
    (0, Fz.k)()
  },
  36487: (zz, tz, sz) => {
    function Fz(zz, tz) {
      const sz = [];
      for (let Fz = 0; Fz < zz; ++Fz) sz.push(tz());
      return sz
    }

    function Wz(zz, tz) {
      return Fz(zz, tz)
    }
    sz.d(tz, {
      c: () => Fz,
      d: () => Wz,
      f: () => Oz
    });
    const Xz = ["push", "splice", "pop", "shift", "unshift"];

    function Oz(zz, tz) {
      const sz = Xz.map((sz => function(zz, tz, sz) {
        const Fz = zz[tz];
        if ("function" !== typeof Fz) return null;
        const Wz = function() {
          const Fz = zz.length,
            Xz = Wz.previous.apply(zz, arguments);
          return sz(tz, Fz), Xz
        };
        return Fz.next = Wz, Wz.previous = Fz, zz[tz] = Wz, () => {
          const sz = Wz.previous;
          if (!sz) return;
          const Fz = Wz.next;
          Fz ? (sz.next = Fz, Fz.previous = sz) : (sz.next = void 0, zz[tz] = sz), Wz.next = void 0, Wz.previous = void 0
        }
      }(zz, sz, tz)));
      return () => {
        for (const zz of sz) zz?.()
      }
    }
  },
  36518: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Wz
    });
    const Fz = {};

    function Wz(zz, tz) {
      Fz[zz] = tz
    }

    function Xz(zz) {
      return Fz[zz]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);