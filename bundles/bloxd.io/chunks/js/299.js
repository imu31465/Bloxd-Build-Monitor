export const id = 299;
export const ids = [299];
export const modules = {
  40878: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      _IESTextureLoader: () => oz
    });
    var Fz = sz(36507);

    function Wz(zz) {
      return zz.split(" ").filter((zz => "" !== zz)).map((zz => parseFloat(zz)))
    }

    function Xz(zz, tz, sz) {
      for (; sz.length !== tz;) {
        const tz = Wz(zz.lines[zz.index++]);
        sz.push(...tz)
      }
    }

    function Oz(zz, tz, sz) {
      let Wz = 0,
        Xz = 0,
        Oz = 0,
        oz = 0,
        vz = 0,
        Uz = 0;
      for (let Fz = 0; Fz < zz.numberOfHorizontalAngles - 1; Fz++)
        if (sz < zz.horizontalAngles[Fz + 1] || Fz === zz.numberOfHorizontalAngles - 2) {
          Xz = Fz, Oz = zz.horizontalAngles[Fz], oz = zz.horizontalAngles[Fz + 1];
          break
        } for (let Fz = 0; Fz < zz.numberOfVerticalAngles - 1; Fz++)
        if (tz < zz.verticalAngles[Fz + 1] || Fz === zz.numberOfVerticalAngles - 2) {
          Wz = Fz, vz = zz.verticalAngles[Fz], Uz = zz.verticalAngles[Fz + 1];
          break
        } const Kz = oz - Oz,
        uz = Uz - vz;
      if (0 === uz) return 0;
      const Nz = 0 === Kz ? 0 : (sz - Oz) / Kz,
        bz = (tz - vz) / uz,
        wz = 0 === Kz ? Xz : Xz + 1,
        Dz = (0, Fz.Lerp)(zz.candelaValues[Xz][Wz], zz.candelaValues[wz][Wz], Nz),
        gz = (0, Fz.Lerp)(zz.candelaValues[Xz][Wz + 1], zz.candelaValues[wz][Wz + 1], Nz);
      return (0, Fz.Lerp)(Dz, gz, bz)
    }
    class oz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(zz, tz, sz) {
        const Fz = function(zz) {
          const tz = {
              lines: new TextDecoder("utf-8").decode(zz).split("\n"),
              index: 0
            },
            sz = {
              version: tz.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (tz.index = 1; tz.lines.length > 0 && !tz.lines[tz.index].includes("TILT=");) tz.index++;
          tz.lines[tz.index].includes("INCLUDE"), tz.index++;
          const Fz = Wz(tz.lines[tz.index++]);
          sz.numberOfLights = Fz[0], sz.lumensPerLamp = Fz[1], sz.numberOfVerticalAngles = Fz[3], sz.numberOfHorizontalAngles = Fz[4], sz.photometricType = Fz[5], sz.unitsType = Fz[6], sz.width = Fz[7], sz.length = Fz[8], sz.height = Fz[9], tz.index++;
          for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++) sz.candelaValues[Wz] = [];
          Xz(tz, sz.numberOfVerticalAngles, sz.verticalAngles), Xz(tz, sz.numberOfHorizontalAngles, sz.horizontalAngles);
          for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++) Xz(tz, sz.numberOfVerticalAngles, sz.candelaValues[Wz]);
          let oz = -1;
          for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++)
            for (let zz = 0; zz < sz.numberOfVerticalAngles; zz++) oz = Math.max(oz, sz.candelaValues[Wz][zz]);
          if (oz > 0)
            for (let Wz = 0; Wz < sz.numberOfHorizontalAngles; Wz++)
              for (let zz = 0; zz < sz.numberOfVerticalAngles; zz++) sz.candelaValues[Wz][zz] /= oz;
          const vz = 180,
            Uz = 360,
            Kz = new Float32Array(64800),
            uz = sz.horizontalAngles[0],
            Nz = sz.horizontalAngles[sz.numberOfHorizontalAngles - 1];
          for (let Wz = 0; Wz < 64800; Wz++) {
            let zz = Wz % Uz;
            const tz = Math.floor(Wz / Uz);
            Nz - uz !== 0 && (zz < uz || zz >= Nz) && (zz %= 2 * Nz, zz > Nz && (zz = 2 * Nz - zz)), Kz[tz + zz * vz] = Oz(sz, tz, zz)
          }
          return {
            width: 180,
            height: 1,
            data: Kz
          }
        }(new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength));
        sz(Fz.width, Fz.height, !!tz.useMipMaps, !1, (() => {
          const zz = tz.FD();
          tz.type = 1, tz.format = 6, tz._gammaSpace = !1, zz._uploadDataToTextureDirectly(tz, Fz.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);