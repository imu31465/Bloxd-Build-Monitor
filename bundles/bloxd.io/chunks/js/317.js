export const id = 317;
export const ids = [317];
export const modules = {
  41925: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      _HDRTextureLoader: () => aB
    });
    var QB = zB(37171);
    class nB {
      static ConvertPanoramaToCubemap(BB, jB, zB, QB) {
        let nB, dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          IB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!BB) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (BB.length != jB * zB * 3) {
          if (BB.length != jB * zB * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          nB = 4
        } else nB = 3;
        return {
          front: this.CreateCubemapTexture(QB, this.FACE_FRONT, BB, jB, zB, dB, IB, nB),
          back: this.CreateCubemapTexture(QB, this.FACE_BACK, BB, jB, zB, dB, IB, nB),
          left: this.CreateCubemapTexture(QB, this.FACE_LEFT, BB, jB, zB, dB, IB, nB),
          right: this.CreateCubemapTexture(QB, this.FACE_RIGHT, BB, jB, zB, dB, IB, nB),
          up: this.CreateCubemapTexture(QB, this.FACE_UP, BB, jB, zB, dB, IB, nB),
          down: this.CreateCubemapTexture(QB, this.FACE_DOWN, BB, jB, zB, dB, IB, nB),
          size: QB,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(BB, jB, zB, QB, nB, dB, IB, NB) {
        const uB = new ArrayBuffer(BB * BB * 4 * 3),
          UB = new Float32Array(uB),
          aB = dB ? Math.max(1, Math.round(QB / 4 / BB)) : 1,
          pB = 1 / aB,
          rB = pB * pB,
          sB = jB[1].subtract(jB[0]).scale(pB / BB),
          JB = jB[3].subtract(jB[2]).scale(pB / BB),
          mB = 1 / BB;
        let yB = 0;
        for (let kB = 0; kB < BB; kB++)
          for (let dB = 0; dB < aB; dB++) {
            let dB = jB[0],
              uB = jB[2];
            for (let jB = 0; jB < BB; jB++)
              for (let pB = 0; pB < aB; pB++) {
                const aB = uB.subtract(dB).scale(yB).add(dB);
                aB.normalize();
                const pB = this.CalcProjectionSpherical(aB, zB, QB, nB, NB, IB);
                UB[kB * BB * 3 + 3 * jB + 0] += pB.r * rB, UB[kB * BB * 3 + 3 * jB + 1] += pB.g * rB, UB[kB * BB * 3 + 3 * jB + 2] += pB.b * rB, dB = dB.add(sB), uB = uB.add(JB)
              }
            yB += mB * pB
          }
        return UB
      }
      static CalcProjectionSpherical(BB, jB, zB, QB, nB, dB) {
        let IB = Math.atan2(BB.z, BB.x);
        const NB = Math.acos(BB.y);
        for (; IB < -Math.PI;) IB += 2 * Math.PI;
        for (; IB > Math.PI;) IB -= 2 * Math.PI;
        let uB = IB / Math.PI;
        const UB = NB / Math.PI;
        uB = .5 * uB + .5;
        let aB = Math.round(uB * zB);
        aB < 0 ? aB = 0 : aB >= zB && (aB = zB - 1);
        let pB = Math.round(UB * QB);
        pB < 0 ? pB = 0 : pB >= QB && (pB = QB - 1);
        const rB = dB ? QB - pB - 1 : pB;
        return {
          r: jB[rB * zB * nB + aB * nB + 0],
          g: jB[rB * zB * nB + aB * nB + 1],
          b: jB[rB * zB * nB + aB * nB + 2]
        }
      }
    }

    function dB(BB, jB, zB, QB, nB, dB) {
      nB > 0 ? (nB = function(BB, jB) {
        return jB > 1023 ? BB * Math.pow(2, 1023) * Math.pow(2, jB - 1023) : jB < -1074 ? BB * Math.pow(2, -1074) * Math.pow(2, jB + 1074) : BB * Math.pow(2, jB)
      }(1, nB - 136), BB[dB + 0] = jB * nB, BB[dB + 1] = zB * nB, BB[dB + 2] = QB * nB) : (BB[dB + 0] = 0, BB[dB + 1] = 0, BB[dB + 2] = 0)
    }

    function IB(BB, jB) {
      let zB, QB = "";
      for (let nB = jB; nB < BB.length - jB && (zB = String.fromCharCode(BB[nB]), "\n" != zB); nB++) QB += zB;
      return QB
    }

    function NB(BB) {
      let jB = IB(BB, 0);
      if ("#" != jB[0] || "?" != jB[1]) throw "Bad HDR Format.";
      let zB = !1,
        QB = !1,
        nB = 0;
      do {
        nB += jB.length + 1, jB = IB(BB, nB), "FORMAT=32-bit_rle_rgbe" == jB ? QB = !0 : 0 == jB.length && (zB = !0)
      } while (!zB);
      if (!QB) throw "HDR Bad header format, unsupported FORMAT";
      nB += jB.length + 1, jB = IB(BB, nB);
      const dB = /^-Y (.*) \+X (.*)$/g.exec(jB);
      if (!dB || dB.length < 3) throw "HDR Bad header format, no size";
      const NB = parseInt(dB[2]),
        uB = parseInt(dB[1]);
      if (NB < 8 || NB > 32767) throw "HDR Bad header format, unsupported size";
      return nB += jB.length + 1, {
        height: uB,
        width: NB,
        dataPosition: nB
      }
    }

    function uB(BB, jB) {
      return function(BB, jB) {
        let zB = jB.height;
        const QB = jB.width;
        let nB, IB, NB, uB, aB, pB, rB, sB, JB = jB.dataPosition;
        const mB = new ArrayBuffer(4 * QB),
          yB = new Uint8Array(mB),
          kB = new ArrayBuffer(jB.width * jB.height * 4 * 3),
          GB = new Float32Array(kB);
        for (; zB > 0;) {
          if (nB = BB[JB++], IB = BB[JB++], NB = BB[JB++], uB = BB[JB++], 2 != nB || 2 != IB || 128 & NB || jB.width < 8 || jB.width > 32767) return UB(BB, jB);
          if ((NB << 8 | uB) != QB) throw "HDR Bad header format, wrong scan line width";
          for (pB = 0, sB = 0; sB < 4; sB++)
            for (rB = (sB + 1) * QB; pB < rB;)
              if (nB = BB[JB++], IB = BB[JB++], nB > 128) {
                if (aB = nB - 128, 0 == aB || aB > rB - pB) throw "HDR Bad Format, bad scanline data (run)";
                for (; aB-- > 0;) yB[pB++] = IB
              } else {
                if (aB = nB, 0 == aB || aB > rB - pB) throw "HDR Bad Format, bad scanline data (non-run)";
                if (yB[pB++] = IB, --aB > 0)
                  for (let jB = 0; jB < aB; jB++) yB[pB++] = BB[JB++]
              } for (sB = 0; sB < QB; sB++) nB = yB[sB], IB = yB[sB + QB], NB = yB[sB + 2 * QB], uB = yB[sB + 3 * QB], dB(GB, nB, IB, NB, uB, (jB.height - zB) * QB * 3 + 3 * sB);
          zB--
        }
        return GB
      }(BB, jB)
    }

    function UB(BB, jB) {
      let zB = jB.height;
      const QB = jB.width;
      let nB, IB, NB, uB, UB, aB = jB.dataPosition;
      const pB = new ArrayBuffer(jB.width * jB.height * 4 * 3),
        rB = new Float32Array(pB);
      for (; zB > 0;) {
        for (UB = 0; UB < jB.width; UB++) nB = BB[aB++], IB = BB[aB++], NB = BB[aB++], uB = BB[aB++], dB(rB, nB, IB, NB, uB, (jB.height - zB) * QB * 3 + 3 * UB);
        zB--
      }
      return rB
    }
    nB.FACE_LEFT = [new QB.m(-1, -1, -1), new QB.m(1, -1, -1), new QB.m(-1, 1, -1), new QB.m(1, 1, -1)], nB.FACE_RIGHT = [new QB.m(1, -1, 1), new QB.m(-1, -1, 1), new QB.m(1, 1, 1), new QB.m(-1, 1, 1)], nB.FACE_FRONT = [new QB.m(1, -1, -1), new QB.m(1, -1, 1), new QB.m(1, 1, -1), new QB.m(1, 1, 1)], nB.FACE_BACK = [new QB.m(-1, -1, 1), new QB.m(-1, -1, -1), new QB.m(-1, 1, 1), new QB.m(-1, 1, -1)], nB.FACE_DOWN = [new QB.m(1, 1, -1), new QB.m(1, 1, 1), new QB.m(-1, 1, -1), new QB.m(-1, 1, 1)], nB.FACE_UP = [new QB.m(-1, -1, -1), new QB.m(-1, -1, 1), new QB.m(1, -1, -1), new QB.m(1, -1, 1)];
    class aB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(BB, jB, zB) {
        const QB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          nB = NB(QB),
          dB = uB(QB, nB),
          IB = nB.width * nB.height,
          UB = new Float32Array(4 * IB);
        for (let NB = 0; NB < IB; NB += 1) UB[4 * NB] = dB[3 * NB], UB[4 * NB + 1] = dB[3 * NB + 1], UB[4 * NB + 2] = dB[3 * NB + 2], UB[4 * NB + 3] = 1;
        zB(nB.width, nB.height, jB.generateMipMaps, !1, (() => {
          const BB = jB.wJ();
          jB.type = 1, jB.format = 5, jB._gammaSpace = !1, BB._uploadDataToTextureDirectly(jB, UB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);