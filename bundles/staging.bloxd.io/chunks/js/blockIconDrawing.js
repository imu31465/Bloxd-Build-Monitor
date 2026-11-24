export const id = 2;
export const ids = [2];
export const modules = {
  36469: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      drawBlockIcon: () => kB,
      drawBlockIconUrl: () => GB,
      getDrawnBlockIcon: () => yB
    });
    var QB = zB(36473);
    const nB = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      dB = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      IB = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const NB = 1e-6;

    function uB(BB, jB, zB, QB) {
      let {
        origin: nB,
        across: dB,
        down: IB,
        texture: uB,
        rect: [UB, aB, pB, rB],
        shade: sB
      } = QB;
      const JB = dB.x * IB.y - dB.y * IB.x;
      if (Math.abs(JB) < 1e-9) return;
      const mB = [nB.x, nB.x + dB.x, nB.x + IB.x, nB.x + dB.x + IB.x],
        yB = [nB.y, nB.y + dB.y, nB.y + IB.y, nB.y + dB.y + IB.y],
        kB = Math.max(0, Math.floor(Math.min(...mB))),
        GB = Math.min(zB - 1, Math.ceil(Math.max(...mB))),
        LB = Math.max(0, Math.floor(Math.min(...yB))),
        gB = Math.min(zB - 1, Math.ceil(Math.max(...yB)));
      for (let tB = LB; tB <= gB; tB++)
        for (let QB = kB; QB <= GB; QB++) {
          const mB = QB + .5 - nB.x,
            yB = tB + .5 - nB.y,
            kB = (mB * IB.y - yB * IB.x) / JB,
            GB = (dB.x * yB - dB.y * mB) / JB;
          if (kB < -NB || kB > 1 + NB || GB < -NB || GB > 1 + NB) continue;
          const LB = tB * zB + QB;
          jB[LB] = 1;
          const gB = UB + Math.min(Math.max(kB, 0), 1) * (pB - UB),
            SB = aB + Math.min(Math.max(GB, 0), 1) * (rB - aB),
            MB = Math.min(uB.width - 1, Math.floor(gB * uB.width)),
            EB = 4 * (Math.min(uB.height - 1, Math.floor(SB * uB.height)) * uB.width + MB),
            iB = uB.pixels[EB + 3] / 255;
          if (0 === iB) continue;
          const qB = 4 * LB,
            fB = BB[qB + 3] / 255 * (1 - iB),
            oB = iB + fB;
          for (let jB = 0; jB < 3; jB++) BB[qB + jB] = (uB.pixels[EB + jB] * sB * iB + BB[qB + jB] * fB) / oB;
          BB[qB + 3] = 255 * oB
        }
    }
    var UB = zB(36475);
    const aB = new Map,
      pB = new Map,
      rB = new Map,
      sB = new Map;

    function JB(BB, jB, zB) {
      return `${jB}|${zB}|${BB}`
    }

    function mB(BB, jB, zB) {
      let QB = BB.get(jB);
      return void 0 === QB && (QB = zB().catch((zB => {
        throw BB.delete(jB), zB
      })), BB.set(jB, QB)), QB
    }

    function yB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return pB.get(JB(BB, jB, zB))
    }

    function kB(BB, jB, zB, QB) {
      const nB = JB(BB, jB, zB);
      return mB(aB, nB, (async () => {
        const dB = await LB(QB(BB), jB, zB);
        return pB.set(nB, dB), dB
      }))
    }

    function GB(BB, jB, zB, QB) {
      return mB(rB, JB(BB, jB, zB), (async () => {
        var nB;
        const dB = QB(BB);
        return null !== (nB = await (0, UB.c)(dB, jB, zB)) && void 0 !== nB ? nB : (await LB(dB, jB, zB)).toDataURL()
      }))
    }
    async function LB(BB, jB, zB) {
      let {
        top: NB,
        left: UB,
        right: aB,
        itemType: pB
      } = BB;
      const [rB, sB, JB] = await Promise.all([gB(NB), gB(UB), gB(aB)]), mB = function(BB, jB, zB, nB) {
        const dB = (0, QB.g)(zB, nB),
          IB = dB * QB.c.across,
          NB = dB * QB.c.down,
          UB = dB * QB.c.up,
          aB = Math.max(...jB.boxes.map((BB => BB[4]))),
          pB = zB / 2,
          rB = NB + (zB - NB - NB - aB * UB) / 2,
          sB = (BB, jB, zB) => ({
            x: pB + (BB - zB) * IB,
            y: rB - NB + (BB + zB) * NB + (aB - jB) * UB
          }),
          JB = (BB, zB, QB, nB, dB, IB) => ({
            origin: BB,
            across: {
              x: zB.x - BB.x,
              y: zB.y - BB.y
            },
            down: {
              x: QB.x - BB.x,
              y: QB.y - BB.y
            },
            texture: nB,
            rect: jB.cropFaces ? dB : [0, 0, 1, 1],
            shade: IB
          }),
          mB = new Uint8ClampedArray(zB * zB * 4),
          yB = new Uint8Array(zB * zB),
          kB = QB.f;
        for (const [QB, GB, LB, gB, tB, SB] of jB.boxes) {
          const jB = JB(sB(gB, tB, SB), sB(gB, tB, LB), sB(gB, GB, SB), BB.right, [1 - SB, 1 - tB, 1 - LB, 1 - GB], kB.right),
            nB = JB(sB(QB, tB, SB), sB(gB, tB, SB), sB(QB, GB, SB), BB.left, [QB, 1 - tB, gB, 1 - GB], kB.left),
            dB = JB(sB(QB, tB, LB), sB(gB, tB, LB), sB(QB, tB, SB), BB.top, [QB, LB, gB, SB], kB.top);
          for (const BB of [jB, nB, dB]) uB(mB, yB, zB, BB)
        }
        return (0, QB.j)(mB, zB, nB, (BB => 1 === yB[BB])), mB
      }({
        top: rB,
        left: sB,
        right: JB
      }, function(BB) {
        return "SlabBlock" === BB ? dB : "StairsBlock" === BB ? IB : nB
      }(pB), jB, zB), yB = document.createElement("canvas");
      yB.width = jB, yB.height = jB;
      const kB = yB.getContext("2d");
      if (!kB) throw new Error("Failed to get 2D context");
      return kB.putImageData(new ImageData(mB, jB, jB), 0, 0), yB
    }

    function gB(BB) {
      return mB(sB, BB, (async () => {
        const jB = await (0, UB.g)(BB),
          zB = document.createElement("canvas");
        zB.width = jB.width, zB.height = jB.height;
        const QB = zB.getContext("2d");
        if (!QB) throw new Error("Failed to get 2D context");
        return QB.drawImage(jB, 0, 0), {
          width: jB.width,
          height: jB.height,
          pixels: QB.getImageData(0, 0, jB.width, jB.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);