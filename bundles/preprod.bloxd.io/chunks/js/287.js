export const id = 287;
export const ids = [287];
export const modules = {
  40248: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      _IESTextureLoader: () => cb
    });
    var Uy = Wy(35902);

    function hy(yb) {
      return yb.split(" ").filter((yb => "" !== yb)).map((yb => parseFloat(yb)))
    }

    function fy(yb, bb, Wy) {
      for (; Wy.length !== bb;) {
        const bb = hy(yb.lines[yb.index++]);
        Wy.push(...bb)
      }
    }

    function Zy(yb, bb, Wy) {
      let hy = 0,
        fy = 0,
        Zy = 0,
        cb = 0,
        Py = 0,
        oy = 0;
      for (let Uy = 0; Uy < yb.numberOfHorizontalAngles - 1; Uy++)
        if (Wy < yb.horizontalAngles[Uy + 1] || Uy === yb.numberOfHorizontalAngles - 2) {
          fy = Uy, Zy = yb.horizontalAngles[Uy], cb = yb.horizontalAngles[Uy + 1];
          break
        } for (let Uy = 0; Uy < yb.numberOfVerticalAngles - 1; Uy++)
        if (bb < yb.verticalAngles[Uy + 1] || Uy === yb.numberOfVerticalAngles - 2) {
          hy = Uy, Py = yb.verticalAngles[Uy], oy = yb.verticalAngles[Uy + 1];
          break
        } const By = cb - Zy,
        Ky = oy - Py;
      if (0 === Ky) return 0;
      const ey = 0 === By ? 0 : (Wy - Zy) / By,
        qb = (bb - Py) / Ky,
        sy = 0 === By ? fy : fy + 1,
        Sy = (0, Uy.Lerp)(yb.candelaValues[fy][hy], yb.candelaValues[sy][hy], ey),
        Ey = (0, Uy.Lerp)(yb.candelaValues[fy][hy + 1], yb.candelaValues[sy][hy + 1], ey);
      return (0, Uy.Lerp)(Sy, Ey, qb)
    }
    class cb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(yb, bb, Wy) {
        const Uy = function(yb) {
          const bb = {
              lines: new TextDecoder("utf-8").decode(yb).split("\n"),
              index: 0
            },
            Wy = {
              version: bb.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (bb.index = 1; bb.lines.length > 0 && !bb.lines[bb.index].includes("TILT=");) bb.index++;
          bb.lines[bb.index].includes("INCLUDE"), bb.index++;
          const Uy = hy(bb.lines[bb.index++]);
          Wy.numberOfLights = Uy[0], Wy.lumensPerLamp = Uy[1], Wy.numberOfVerticalAngles = Uy[3], Wy.numberOfHorizontalAngles = Uy[4], Wy.photometricType = Uy[5], Wy.unitsType = Uy[6], Wy.width = Uy[7], Wy.length = Uy[8], Wy.height = Uy[9], bb.index++;
          for (let hy = 0; hy < Wy.numberOfHorizontalAngles; hy++) Wy.candelaValues[hy] = [];
          fy(bb, Wy.numberOfVerticalAngles, Wy.verticalAngles), fy(bb, Wy.numberOfHorizontalAngles, Wy.horizontalAngles);
          for (let hy = 0; hy < Wy.numberOfHorizontalAngles; hy++) fy(bb, Wy.numberOfVerticalAngles, Wy.candelaValues[hy]);
          let cb = -1;
          for (let hy = 0; hy < Wy.numberOfHorizontalAngles; hy++)
            for (let yb = 0; yb < Wy.numberOfVerticalAngles; yb++) cb = Math.max(cb, Wy.candelaValues[hy][yb]);
          if (cb > 0)
            for (let hy = 0; hy < Wy.numberOfHorizontalAngles; hy++)
              for (let yb = 0; yb < Wy.numberOfVerticalAngles; yb++) Wy.candelaValues[hy][yb] /= cb;
          const Py = 180,
            oy = 360,
            By = new Float32Array(64800),
            Ky = Wy.horizontalAngles[0],
            ey = Wy.horizontalAngles[Wy.numberOfHorizontalAngles - 1];
          for (let hy = 0; hy < 64800; hy++) {
            let yb = hy % oy;
            const bb = Math.floor(hy / oy);
            ey - Ky !== 0 && (yb < Ky || yb >= ey) && (yb %= 2 * ey, yb > ey && (yb = 2 * ey - yb)), By[bb + yb * Py] = Zy(Wy, bb, yb)
          }
          return {
            width: 180,
            height: 1,
            data: By
          }
        }(new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength));
        Wy(Uy.width, Uy.height, !!bb.useMipMaps, !1, (() => {
          const yb = bb.xh();
          bb.type = 1, bb.format = 6, bb._gammaSpace = !1, yb._uploadDataToTextureDirectly(bb, Uy.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);