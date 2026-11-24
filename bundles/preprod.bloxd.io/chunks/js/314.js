export const id = 314;
export const ids = [314];
export const modules = {
  42034: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      _IESTextureLoader: () => xp
    });
    var Op = cp(37356);

    function op(pp) {
      return pp.split(" ").filter((pp => "" !== pp)).map((pp => parseFloat(pp)))
    }

    function Ip(pp, ip, cp) {
      for (; cp.length !== ip;) {
        const ip = op(pp.lines[pp.index++]);
        cp.push(...ip)
      }
    }

    function Sp(pp, ip, cp) {
      let op = 0,
        Ip = 0,
        Sp = 0,
        xp = 0,
        Lp = 0,
        Yp = 0;
      for (let Op = 0; Op < pp.numberOfHorizontalAngles - 1; Op++)
        if (cp < pp.horizontalAngles[Op + 1] || Op === pp.numberOfHorizontalAngles - 2) {
          Ip = Op, Sp = pp.horizontalAngles[Op], xp = pp.horizontalAngles[Op + 1];
          break
        } for (let Op = 0; Op < pp.numberOfVerticalAngles - 1; Op++)
        if (ip < pp.verticalAngles[Op + 1] || Op === pp.numberOfVerticalAngles - 2) {
          op = Op, Lp = pp.verticalAngles[Op], Yp = pp.verticalAngles[Op + 1];
          break
        } const Dp = xp - Sp,
        Ap = Yp - Lp;
      if (0 === Ap) return 0;
      const Pp = 0 === Dp ? 0 : (cp - Sp) / Dp,
        Wp = (ip - Lp) / Ap,
        yp = 0 === Dp ? Ip : Ip + 1,
        Up = (0, Op.Lerp)(pp.candelaValues[Ip][op], pp.candelaValues[yp][op], Pp),
        wp = (0, Op.Lerp)(pp.candelaValues[Ip][op + 1], pp.candelaValues[yp][op + 1], Pp);
      return (0, Op.Lerp)(Up, wp, Wp)
    }
    class xp {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(pp, ip, cp) {
        const Op = function(pp) {
          const ip = {
              lines: new TextDecoder("utf-8").decode(pp).split("\n"),
              index: 0
            },
            cp = {
              version: ip.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (ip.index = 1; ip.lines.length > 0 && !ip.lines[ip.index].includes("TILT=");) ip.index++;
          ip.lines[ip.index].includes("INCLUDE"), ip.index++;
          const Op = op(ip.lines[ip.index++]);
          cp.numberOfLights = Op[0], cp.lumensPerLamp = Op[1], cp.numberOfVerticalAngles = Op[3], cp.numberOfHorizontalAngles = Op[4], cp.photometricType = Op[5], cp.unitsType = Op[6], cp.width = Op[7], cp.length = Op[8], cp.height = Op[9], ip.index++;
          for (let op = 0; op < cp.numberOfHorizontalAngles; op++) cp.candelaValues[op] = [];
          Ip(ip, cp.numberOfVerticalAngles, cp.verticalAngles), Ip(ip, cp.numberOfHorizontalAngles, cp.horizontalAngles);
          for (let op = 0; op < cp.numberOfHorizontalAngles; op++) Ip(ip, cp.numberOfVerticalAngles, cp.candelaValues[op]);
          let xp = -1;
          for (let op = 0; op < cp.numberOfHorizontalAngles; op++)
            for (let pp = 0; pp < cp.numberOfVerticalAngles; pp++) xp = Math.max(xp, cp.candelaValues[op][pp]);
          if (xp > 0)
            for (let op = 0; op < cp.numberOfHorizontalAngles; op++)
              for (let pp = 0; pp < cp.numberOfVerticalAngles; pp++) cp.candelaValues[op][pp] /= xp;
          const Lp = 180,
            Yp = 360,
            Dp = new Float32Array(64800),
            Ap = cp.horizontalAngles[0],
            Pp = cp.horizontalAngles[cp.numberOfHorizontalAngles - 1];
          for (let op = 0; op < 64800; op++) {
            let pp = op % Yp;
            const ip = Math.floor(op / Yp);
            Pp - Ap !== 0 && (pp < Ap || pp >= Pp) && (pp %= 2 * Pp, pp > Pp && (pp = 2 * Pp - pp)), Dp[ip + pp * Lp] = Sp(cp, ip, pp)
          }
          return {
            width: 180,
            height: 1,
            data: Dp
          }
        }(new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength));
        cp(Op.width, Op.height, !!ip.useMipMaps, !1, (() => {
          const pp = ip.gy();
          ip.type = 1, ip.format = 6, ip._gammaSpace = !1, pp._uploadDataToTextureDirectly(ip, Op.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);