export const id = 623;
export const ids = [623];
export const modules = {
  45001: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      _TGATextureLoader: () => jB
    });
    var YB = GB(39366);

    function DB(BB) {
      let OB = 0;
      return {
        id_length: BB[OB++],
        colormap_type: BB[OB++],
        image_type: BB[OB++],
        colormap_index: BB[OB++] | BB[OB++] << 8,
        colormap_length: BB[OB++] | BB[OB++] << 8,
        colormap_size: BB[OB++],
        origin: [BB[OB++] | BB[OB++] << 8, BB[OB++] | BB[OB++] << 8],
        width: BB[OB++] | BB[OB++] << 8,
        height: BB[OB++] | BB[OB++] << 8,
        pixel_size: BB[OB++],
        flags: BB[17]
      }
    }

    function QB(BB, OB) {
      if (OB.length < 19) return void YB.b.Error("Unable to load TGA file - Not enough data to contain header");
      let GB = 18;
      const QB = DB(OB);
      if (QB.id_length + GB > OB.length) return void YB.b.Error("Unable to load TGA file - Not enough data");
      GB += QB.id_length;
      let jB, yB = !1,
        JB = !1,
        MB = !1;
      switch (QB.image_type) {
        case 9:
          yB = !0;
        case 1:
          JB = !0;
          break;
        case 10:
          yB = !0;
        case 2:
          break;
        case 11:
          yB = !0;
        case 3:
          MB = !0
      }
      const PB = QB.pixel_size >> 3,
        zB = QB.width * QB.height * PB;
      let lB, pB, qB, ZB, NB, RB, WB;
      if (JB && (lB = OB.subarray(GB, GB += QB.colormap_length * (QB.colormap_size >> 3))), yB) {
        let BB, YB, DB;
        jB = new Uint8Array(zB);
        let QB = 0;
        const oB = new Uint8Array(PB);
        for (; GB < zB && QB < zB;)
          if (BB = OB[GB++], YB = 1 + (127 & BB), 128 & BB) {
            for (DB = 0; DB < PB; ++DB) oB[DB] = OB[GB++];
            for (DB = 0; DB < YB; ++DB) jB.set(oB, QB + DB * PB);
            QB += PB * YB
          } else {
            for (YB *= PB, DB = 0; DB < YB; ++DB) jB[QB + DB] = OB[GB++];
            QB += YB
          }
      } else jB = OB.subarray(GB, GB + (JB ? QB.width * QB.height : zB));
      switch ((48 & QB.flags) >> 4) {
        default:
        case 2:
          pB = 0, ZB = 1, WB = QB.width, qB = 0, NB = 1, RB = QB.height;
          break;
        case 0:
          pB = 0, ZB = 1, WB = QB.width, qB = QB.height - 1, NB = -1, RB = -1;
          break;
        case 3:
          pB = QB.width - 1, ZB = -1, WB = -1, qB = 0, NB = 1, RB = QB.height;
          break;
        case 1:
          pB = QB.width - 1, ZB = -1, WB = -1, qB = QB.height - 1, NB = -1, RB = -1
      }
      const AB = "_getImageData" + (MB ? "Grey" : "") + QB.pixel_size + "bits",
        VB = oB[AB](QB, lB, jB, qB, NB, RB, pB, ZB, WB);
      BB.Lp()._uploadDataToTextureDirectly(BB, VB)
    }
    const oB = {
      GetTGAHeader: DB,
      UploadContent: QB,
      _getImageData8bits: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = GB,
          MB = OB,
          PB = BB.width,
          zB = BB.height;
        let lB, pB, qB, ZB = 0;
        const NB = new Uint8Array(PB * zB * 4);
        for (qB = YB; qB !== QB; qB += DB)
          for (pB = oB; pB !== yB; pB += jB, ZB++) lB = JB[ZB], NB[4 * (pB + PB * qB) + 3] = 255, NB[4 * (pB + PB * qB) + 2] = MB[3 * lB + 0], NB[4 * (pB + PB * qB) + 1] = MB[3 * lB + 1], NB[4 * (pB + PB * qB) + 0] = MB[3 * lB + 2];
        return NB
      },
      _getImageData16bits: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = GB,
          MB = BB.width,
          PB = BB.height;
        let zB, lB, pB, qB = 0;
        const ZB = new Uint8Array(MB * PB * 4);
        for (pB = YB; pB !== QB; pB += DB)
          for (lB = oB; lB !== yB; lB += jB, qB += 2) {
            zB = JB[qB + 0] + (JB[qB + 1] << 8);
            const BB = 255 * ((31744 & zB) >> 10) / 31 | 0,
              OB = 255 * ((992 & zB) >> 5) / 31 | 0,
              GB = 255 * (31 & zB) / 31 | 0;
            ZB[4 * (lB + MB * pB) + 0] = BB, ZB[4 * (lB + MB * pB) + 1] = OB, ZB[4 * (lB + MB * pB) + 2] = GB, ZB[4 * (lB + MB * pB) + 3] = 32768 & zB ? 0 : 255
          }
        return ZB
      },
      _getImageData24bits: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = GB,
          MB = BB.width,
          PB = BB.height;
        let zB, lB, pB = 0;
        const qB = new Uint8Array(MB * PB * 4);
        for (lB = YB; lB !== QB; lB += DB)
          for (zB = oB; zB !== yB; zB += jB, pB += 3) qB[4 * (zB + MB * lB) + 3] = 255, qB[4 * (zB + MB * lB) + 2] = JB[pB + 0], qB[4 * (zB + MB * lB) + 1] = JB[pB + 1], qB[4 * (zB + MB * lB) + 0] = JB[pB + 2];
        return qB
      },
      _getImageData32bits: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = GB,
          MB = BB.width,
          PB = BB.height;
        let zB, lB, pB = 0;
        const qB = new Uint8Array(MB * PB * 4);
        for (lB = YB; lB !== QB; lB += DB)
          for (zB = oB; zB !== yB; zB += jB, pB += 4) qB[4 * (zB + MB * lB) + 2] = JB[pB + 0], qB[4 * (zB + MB * lB) + 1] = JB[pB + 1], qB[4 * (zB + MB * lB) + 0] = JB[pB + 2], qB[4 * (zB + MB * lB) + 3] = JB[pB + 3];
        return qB
      },
      _getImageDataGrey8bits: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = GB,
          MB = BB.width,
          PB = BB.height;
        let zB, lB, pB, qB = 0;
        const ZB = new Uint8Array(MB * PB * 4);
        for (pB = YB; pB !== QB; pB += DB)
          for (lB = oB; lB !== yB; lB += jB, qB++) zB = JB[qB], ZB[4 * (lB + MB * pB) + 0] = zB, ZB[4 * (lB + MB * pB) + 1] = zB, ZB[4 * (lB + MB * pB) + 2] = zB, ZB[4 * (lB + MB * pB) + 3] = 255;
        return ZB
      },
      _getImageDataGrey16bits: function(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        const JB = GB,
          MB = BB.width,
          PB = BB.height;
        let zB, lB, pB = 0;
        const qB = new Uint8Array(MB * PB * 4);
        for (lB = YB; lB !== QB; lB += DB)
          for (zB = oB; zB !== yB; zB += jB, pB += 2) qB[4 * (zB + MB * lB) + 0] = JB[pB + 0], qB[4 * (zB + MB * lB) + 1] = JB[pB + 0], qB[4 * (zB + MB * lB) + 2] = JB[pB + 0], qB[4 * (zB + MB * lB) + 3] = JB[pB + 1];
        return qB
      }
    };
    class jB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(BB, OB, GB) {
        const YB = new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength),
          oB = DB(YB);
        GB(oB.width, oB.height, OB.generateMipMaps, !1, (() => {
          QB(OB, YB)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);