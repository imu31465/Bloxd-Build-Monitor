export const id = 628;
export const ids = [628];
export const modules = {
  54312: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      _IESTextureLoader: () => Ir
    });
    var Zr = Qr(38599);

    function Wr(rr) {
      return rr.split(" ").filter((rr => "" !== rr)).map((rr => parseFloat(rr)))
    }

    function ar(rr, Sr, Qr) {
      for (; Qr.length !== Sr;) {
        const Sr = Wr(rr.lines[rr.index++]);
        Qr.push(...Sr)
      }
    }

    function jr(rr, Sr, Qr) {
      let Wr = 0,
        ar = 0,
        jr = 0,
        Ir = 0,
        fr = 0,
        Er = 0;
      for (let Zr = 0; Zr < rr.numberOfHorizontalAngles - 1; Zr++)
        if (Qr < rr.horizontalAngles[Zr + 1] || Zr === rr.numberOfHorizontalAngles - 2) {
          ar = Zr, jr = rr.horizontalAngles[Zr], Ir = rr.horizontalAngles[Zr + 1];
          break
        } for (let Zr = 0; Zr < rr.numberOfVerticalAngles - 1; Zr++)
        if (Sr < rr.verticalAngles[Zr + 1] || Zr === rr.numberOfVerticalAngles - 2) {
          Wr = Zr, fr = rr.verticalAngles[Zr], Er = rr.verticalAngles[Zr + 1];
          break
        } const pr = Ir - jr,
        xr = Er - fr;
      if (0 === xr) return 0;
      const mr = 0 === pr ? 0 : (Qr - jr) / pr,
        Nr = (Sr - fr) / xr,
        Ur = 0 === pr ? ar : ar + 1,
        tr = (0, Zr.Lerp)(rr.candelaValues[ar][Wr], rr.candelaValues[Ur][Wr], mr),
        hr = (0, Zr.Lerp)(rr.candelaValues[ar][Wr + 1], rr.candelaValues[Ur][Wr + 1], mr);
      return (0, Zr.Lerp)(tr, hr, Nr)
    }
    class Ir {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(rr, Sr, Qr) {
        const Zr = function(rr) {
          const Sr = {
              lines: new TextDecoder("utf-8").decode(rr).split("\n"),
              index: 0
            },
            Qr = {
              version: Sr.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Sr.index = 1; Sr.lines.length > 0 && !Sr.lines[Sr.index].includes("TILT=");) Sr.index++;
          Sr.lines[Sr.index].includes("INCLUDE"), Sr.index++;
          const Zr = Wr(Sr.lines[Sr.index++]);
          Qr.numberOfLights = Zr[0], Qr.lumensPerLamp = Zr[1], Qr.numberOfVerticalAngles = Zr[3], Qr.numberOfHorizontalAngles = Zr[4], Qr.photometricType = Zr[5], Qr.unitsType = Zr[6], Qr.width = Zr[7], Qr.length = Zr[8], Qr.height = Zr[9], Sr.index++;
          for (let Wr = 0; Wr < Qr.numberOfHorizontalAngles; Wr++) Qr.candelaValues[Wr] = [];
          ar(Sr, Qr.numberOfVerticalAngles, Qr.verticalAngles), ar(Sr, Qr.numberOfHorizontalAngles, Qr.horizontalAngles);
          for (let Wr = 0; Wr < Qr.numberOfHorizontalAngles; Wr++) ar(Sr, Qr.numberOfVerticalAngles, Qr.candelaValues[Wr]);
          let Ir = -1;
          for (let Wr = 0; Wr < Qr.numberOfHorizontalAngles; Wr++)
            for (let rr = 0; rr < Qr.numberOfVerticalAngles; rr++) Ir = Math.max(Ir, Qr.candelaValues[Wr][rr]);
          if (Ir > 0)
            for (let Wr = 0; Wr < Qr.numberOfHorizontalAngles; Wr++)
              for (let rr = 0; rr < Qr.numberOfVerticalAngles; rr++) Qr.candelaValues[Wr][rr] /= Ir;
          const fr = 180,
            Er = 360,
            pr = new Float32Array(64800),
            xr = Qr.horizontalAngles[0],
            mr = Qr.horizontalAngles[Qr.numberOfHorizontalAngles - 1];
          for (let Wr = 0; Wr < 64800; Wr++) {
            let rr = Wr % Er;
            const Sr = Math.floor(Wr / Er);
            mr - xr !== 0 && (rr < xr || rr >= mr) && (rr %= 2 * mr, rr > mr && (rr = 2 * mr - rr)), pr[Sr + rr * fr] = jr(Qr, Sr, rr)
          }
          return {
            width: 180,
            height: 1,
            data: pr
          }
        }(new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength));
        Qr(Zr.width, Zr.height, !!Sr.useMipMaps, !1, (() => {
          const rr = Sr.MU();
          Sr.type = 1, Sr.format = 6, Sr._gammaSpace = !1, rr._uploadDataToTextureDirectly(Sr, Zr.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);