export const id = 299;
export const ids = [299];
export const modules = {
  40979: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      _IESTextureLoader: () => Mz
    });
    var Ez = bz(36553);

    function nz(zz) {
      return zz.split(" ").filter((zz => "" !== zz)).map((zz => parseFloat(zz)))
    }

    function iz(zz, uz, bz) {
      for (; bz.length !== uz;) {
        const uz = nz(zz.lines[zz.index++]);
        bz.push(...uz)
      }
    }

    function lz(zz, uz, bz) {
      let nz = 0,
        iz = 0,
        lz = 0,
        Mz = 0,
        tz = 0,
        Hz = 0;
      for (let Ez = 0; Ez < zz.numberOfHorizontalAngles - 1; Ez++)
        if (bz < zz.horizontalAngles[Ez + 1] || Ez === zz.numberOfHorizontalAngles - 2) {
          iz = Ez, lz = zz.horizontalAngles[Ez], Mz = zz.horizontalAngles[Ez + 1];
          break
        } for (let Ez = 0; Ez < zz.numberOfVerticalAngles - 1; Ez++)
        if (uz < zz.verticalAngles[Ez + 1] || Ez === zz.numberOfVerticalAngles - 2) {
          nz = Ez, tz = zz.verticalAngles[Ez], Hz = zz.verticalAngles[Ez + 1];
          break
        } const Oz = Mz - lz,
        pz = Hz - tz;
      if (0 === pz) return 0;
      const dz = 0 === Oz ? 0 : (bz - lz) / Oz,
        Fz = (uz - tz) / pz,
        Zz = 0 === Oz ? iz : iz + 1,
        Rz = (0, Ez.Lerp)(zz.candelaValues[iz][nz], zz.candelaValues[Zz][nz], dz),
        Kz = (0, Ez.Lerp)(zz.candelaValues[iz][nz + 1], zz.candelaValues[Zz][nz + 1], dz);
      return (0, Ez.Lerp)(Rz, Kz, Fz)
    }
    class Mz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(zz, uz, bz) {
        const Ez = function(zz) {
          const uz = {
              lines: new TextDecoder("utf-8").decode(zz).split("\n"),
              index: 0
            },
            bz = {
              version: uz.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (uz.index = 1; uz.lines.length > 0 && !uz.lines[uz.index].includes("TILT=");) uz.index++;
          uz.lines[uz.index].includes("INCLUDE"), uz.index++;
          const Ez = nz(uz.lines[uz.index++]);
          bz.numberOfLights = Ez[0], bz.lumensPerLamp = Ez[1], bz.numberOfVerticalAngles = Ez[3], bz.numberOfHorizontalAngles = Ez[4], bz.photometricType = Ez[5], bz.unitsType = Ez[6], bz.width = Ez[7], bz.length = Ez[8], bz.height = Ez[9], uz.index++;
          for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++) bz.candelaValues[nz] = [];
          iz(uz, bz.numberOfVerticalAngles, bz.verticalAngles), iz(uz, bz.numberOfHorizontalAngles, bz.horizontalAngles);
          for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++) iz(uz, bz.numberOfVerticalAngles, bz.candelaValues[nz]);
          let Mz = -1;
          for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++)
            for (let zz = 0; zz < bz.numberOfVerticalAngles; zz++) Mz = Math.max(Mz, bz.candelaValues[nz][zz]);
          if (Mz > 0)
            for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++)
              for (let zz = 0; zz < bz.numberOfVerticalAngles; zz++) bz.candelaValues[nz][zz] /= Mz;
          const tz = 180,
            Hz = 360,
            Oz = new Float32Array(64800),
            pz = bz.horizontalAngles[0],
            dz = bz.horizontalAngles[bz.numberOfHorizontalAngles - 1];
          for (let nz = 0; nz < 64800; nz++) {
            let zz = nz % Hz;
            const uz = Math.floor(nz / Hz);
            dz - pz !== 0 && (zz < pz || zz >= dz) && (zz %= 2 * dz, zz > dz && (zz = 2 * dz - zz)), Oz[uz + zz * tz] = lz(bz, uz, zz)
          }
          return {
            width: 180,
            height: 1,
            data: Oz
          }
        }(new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength));
        bz(Ez.width, Ez.height, !!uz.useMipMaps, !1, (() => {
          const zz = uz.uR();
          uz.type = 1, uz.format = 6, uz._gammaSpace = !1, zz._uploadDataToTextureDirectly(uz, Ez.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);