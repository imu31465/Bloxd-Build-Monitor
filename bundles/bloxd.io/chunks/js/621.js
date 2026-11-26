export const id = 621;
export const ids = [621];
export const modules = {
  44986: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      _HDRTextureLoader: () => MB
    });
    var YB = GB(37778);
    class DB {
      static ConvertPanoramaToCubemap(BB, OB, GB, YB) {
        let DB, QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!BB) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (BB.length != OB * GB * 3) {
          if (BB.length != OB * GB * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          DB = 4
        } else DB = 3;
        return {
          front: this.CreateCubemapTexture(YB, this.FACE_FRONT, BB, OB, GB, QB, oB, DB),
          back: this.CreateCubemapTexture(YB, this.FACE_BACK, BB, OB, GB, QB, oB, DB),
          left: this.CreateCubemapTexture(YB, this.FACE_LEFT, BB, OB, GB, QB, oB, DB),
          right: this.CreateCubemapTexture(YB, this.FACE_RIGHT, BB, OB, GB, QB, oB, DB),
          up: this.CreateCubemapTexture(YB, this.FACE_UP, BB, OB, GB, QB, oB, DB),
          down: this.CreateCubemapTexture(YB, this.FACE_DOWN, BB, OB, GB, QB, oB, DB),
          size: YB,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(BB, OB, GB, YB, DB, QB, oB, jB) {
        const yB = new ArrayBuffer(BB * BB * 4 * 3),
          JB = new Float32Array(yB),
          MB = QB ? Math.max(1, Math.round(YB / 4 / BB)) : 1,
          PB = 1 / MB,
          zB = PB * PB,
          lB = OB[1].subtract(OB[0]).scale(PB / BB),
          pB = OB[3].subtract(OB[2]).scale(PB / BB),
          qB = 1 / BB;
        let ZB = 0;
        for (let NB = 0; NB < BB; NB++)
          for (let QB = 0; QB < MB; QB++) {
            let QB = OB[0],
              yB = OB[2];
            for (let OB = 0; OB < BB; OB++)
              for (let PB = 0; PB < MB; PB++) {
                const MB = yB.subtract(QB).scale(ZB).add(QB);
                MB.normalize();
                const PB = this.CalcProjectionSpherical(MB, GB, YB, DB, jB, oB);
                JB[NB * BB * 3 + 3 * OB + 0] += PB.r * zB, JB[NB * BB * 3 + 3 * OB + 1] += PB.g * zB, JB[NB * BB * 3 + 3 * OB + 2] += PB.b * zB, QB = QB.add(lB), yB = yB.add(pB)
              }
            ZB += qB * PB
          }
        return JB
      }
      static CalcProjectionSpherical(BB, OB, GB, YB, DB, QB) {
        let oB = Math.atan2(BB.z, BB.x);
        const jB = Math.acos(BB.y);
        for (; oB < -Math.PI;) oB += 2 * Math.PI;
        for (; oB > Math.PI;) oB -= 2 * Math.PI;
        let yB = oB / Math.PI;
        const JB = jB / Math.PI;
        yB = .5 * yB + .5;
        let MB = Math.round(yB * GB);
        MB < 0 ? MB = 0 : MB >= GB && (MB = GB - 1);
        let PB = Math.round(JB * YB);
        PB < 0 ? PB = 0 : PB >= YB && (PB = YB - 1);
        const zB = QB ? YB - PB - 1 : PB;
        return {
          r: OB[zB * GB * DB + MB * DB + 0],
          g: OB[zB * GB * DB + MB * DB + 1],
          b: OB[zB * GB * DB + MB * DB + 2]
        }
      }
    }

    function QB(BB, OB, GB, YB, DB, QB) {
      DB > 0 ? (DB = function(BB, OB) {
        return OB > 1023 ? BB * Math.pow(2, 1023) * Math.pow(2, OB - 1023) : OB < -1074 ? BB * Math.pow(2, -1074) * Math.pow(2, OB + 1074) : BB * Math.pow(2, OB)
      }(1, DB - 136), BB[QB + 0] = OB * DB, BB[QB + 1] = GB * DB, BB[QB + 2] = YB * DB) : (BB[QB + 0] = 0, BB[QB + 1] = 0, BB[QB + 2] = 0)
    }

    function oB(BB, OB) {
      let GB, YB = "";
      for (let DB = OB; DB < BB.length - OB && (GB = String.fromCharCode(BB[DB]), "\n" != GB); DB++) YB += GB;
      return YB
    }

    function jB(BB) {
      let OB = oB(BB, 0);
      if ("#" != OB[0] || "?" != OB[1]) throw "Bad HDR Format.";
      let GB = !1,
        YB = !1,
        DB = 0;
      do {
        DB += OB.length + 1, OB = oB(BB, DB), "FORMAT=32-bit_rle_rgbe" == OB ? YB = !0 : 0 == OB.length && (GB = !0)
      } while (!GB);
      if (!YB) throw "HDR Bad header format, unsupported FORMAT";
      DB += OB.length + 1, OB = oB(BB, DB);
      const QB = /^-Y (.*) \+X (.*)$/g.exec(OB);
      if (!QB || QB.length < 3) throw "HDR Bad header format, no size";
      const jB = parseInt(QB[2]),
        yB = parseInt(QB[1]);
      if (jB < 8 || jB > 32767) throw "HDR Bad header format, unsupported size";
      return DB += OB.length + 1, {
        height: yB,
        width: jB,
        dataPosition: DB
      }
    }

    function yB(BB, OB) {
      return function(BB, OB) {
        let GB = OB.height;
        const YB = OB.width;
        let DB, oB, jB, yB, MB, PB, zB, lB, pB = OB.dataPosition;
        const qB = new ArrayBuffer(4 * YB),
          ZB = new Uint8Array(qB),
          NB = new ArrayBuffer(OB.width * OB.height * 4 * 3),
          RB = new Float32Array(NB);
        for (; GB > 0;) {
          if (DB = BB[pB++], oB = BB[pB++], jB = BB[pB++], yB = BB[pB++], 2 != DB || 2 != oB || 128 & jB || OB.width < 8 || OB.width > 32767) return JB(BB, OB);
          if ((jB << 8 | yB) != YB) throw "HDR Bad header format, wrong scan line width";
          for (PB = 0, lB = 0; lB < 4; lB++)
            for (zB = (lB + 1) * YB; PB < zB;)
              if (DB = BB[pB++], oB = BB[pB++], DB > 128) {
                if (MB = DB - 128, 0 == MB || MB > zB - PB) throw "HDR Bad Format, bad scanline data (run)";
                for (; MB-- > 0;) ZB[PB++] = oB
              } else {
                if (MB = DB, 0 == MB || MB > zB - PB) throw "HDR Bad Format, bad scanline data (non-run)";
                if (ZB[PB++] = oB, --MB > 0)
                  for (let OB = 0; OB < MB; OB++) ZB[PB++] = BB[pB++]
              } for (lB = 0; lB < YB; lB++) DB = ZB[lB], oB = ZB[lB + YB], jB = ZB[lB + 2 * YB], yB = ZB[lB + 3 * YB], QB(RB, DB, oB, jB, yB, (OB.height - GB) * YB * 3 + 3 * lB);
          GB--
        }
        return RB
      }(BB, OB)
    }

    function JB(BB, OB) {
      let GB = OB.height;
      const YB = OB.width;
      let DB, oB, jB, yB, JB, MB = OB.dataPosition;
      const PB = new ArrayBuffer(OB.width * OB.height * 4 * 3),
        zB = new Float32Array(PB);
      for (; GB > 0;) {
        for (JB = 0; JB < OB.width; JB++) DB = BB[MB++], oB = BB[MB++], jB = BB[MB++], yB = BB[MB++], QB(zB, DB, oB, jB, yB, (OB.height - GB) * YB * 3 + 3 * JB);
        GB--
      }
      return zB
    }
    DB.FACE_LEFT = [new YB.r(-1, -1, -1), new YB.r(1, -1, -1), new YB.r(-1, 1, -1), new YB.r(1, 1, -1)], DB.FACE_RIGHT = [new YB.r(1, -1, 1), new YB.r(-1, -1, 1), new YB.r(1, 1, 1), new YB.r(-1, 1, 1)], DB.FACE_FRONT = [new YB.r(1, -1, -1), new YB.r(1, -1, 1), new YB.r(1, 1, -1), new YB.r(1, 1, 1)], DB.FACE_BACK = [new YB.r(-1, -1, 1), new YB.r(-1, -1, -1), new YB.r(-1, 1, 1), new YB.r(-1, 1, -1)], DB.FACE_DOWN = [new YB.r(1, 1, -1), new YB.r(1, 1, 1), new YB.r(-1, 1, -1), new YB.r(-1, 1, 1)], DB.FACE_UP = [new YB.r(-1, -1, -1), new YB.r(-1, -1, 1), new YB.r(1, -1, -1), new YB.r(1, -1, 1)];
    class MB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(BB, OB, GB) {
        const YB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          DB = jB(YB),
          QB = yB(YB, DB),
          oB = DB.width * DB.height,
          JB = new Float32Array(4 * oB);
        for (let jB = 0; jB < oB; jB += 1) JB[4 * jB] = QB[3 * jB], JB[4 * jB + 1] = QB[3 * jB + 1], JB[4 * jB + 2] = QB[3 * jB + 2], JB[4 * jB + 3] = 1;
        GB(DB.width, DB.height, OB.generateMipMaps, !1, (() => {
          const BB = OB.Lp();
          OB.type = 1, OB.format = 5, OB._gammaSpace = !1, BB._uploadDataToTextureDirectly(OB, JB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);