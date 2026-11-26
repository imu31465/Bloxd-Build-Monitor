/*! For license information please see gw4e3a.229.ba721621.chunk.js.LICENSE.txt */
export const id = 229;
export const ids = [229];
export const modules = {
  40436: (BB, OB, GB) => {
    function YB() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function DB(BB) {
      return BB instanceof Uint8Array && (!YB() || !Buffer.isBuffer(BB))
    }

    function QB(BB) {
      return BB instanceof ArrayBuffer
    }

    function oB(BB) {
      return !!YB() && Buffer.isBuffer(BB)
    }
    var jB = GB(40440).e,
      yB = GB(40449).b,
      JB = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    OB.e = function(BB) {
      if (!DB(BB) && !QB(BB) && !oB(BB)) throw new TypeError(JB);
      var OB = !1,
        GB = !1;
      DB(BB) ? OB = !0 : QB(BB) && (GB = !0, BB = new Uint8Array(BB));
      var YB, jB, MB, PB = new yB(BB),
        zB = PB.maxCompressedLength();
      if (OB ? (YB = new Uint8Array(zB), MB = PB.compressToBuffer(YB)) : GB ? (YB = new ArrayBuffer(zB), jB = new Uint8Array(YB), MB = PB.compressToBuffer(jB)) : (YB = Buffer.alloc(zB), MB = PB.compressToBuffer(YB)), !YB.slice) {
        var lB = new Uint8Array(Array.prototype.slice.call(YB, 0, MB));
        if (OB) return lB;
        if (GB) return lB.buffer;
        throw new Error("Not implemented")
      }
      return YB.slice(0, MB)
    }
  },
  40449: (BB, OB) => {
    var GB = new Array(15);

    function YB(BB, OB) {
      return 506832829 * BB >>> OB
    }

    function DB(BB, OB) {
      return BB[OB] + (BB[OB + 1] << 8) + (BB[OB + 2] << 16) + (BB[OB + 3] << 24)
    }

    function QB(BB, OB, GB) {
      return BB[OB] === BB[GB] && BB[OB + 1] === BB[GB + 1] && BB[OB + 2] === BB[GB + 2] && BB[OB + 3] === BB[GB + 3]
    }

    function oB(BB, OB, GB, YB, DB) {
      return GB <= 60 ? (YB[DB] = GB - 1 << 2, DB += 1) : GB < 256 ? (YB[DB] = 240, YB[DB + 1] = GB - 1, DB += 2) : (YB[DB] = 244, YB[DB + 1] = GB - 1 & 255, YB[DB + 2] = GB - 1 >>> 8, DB += 3),
        function(BB, OB, GB, YB, DB) {
          var QB;
          for (QB = 0; QB < DB; QB++) GB[YB + QB] = BB[OB + QB]
        }(BB, OB, YB, DB, GB), DB + GB
    }

    function jB(BB, OB, GB, YB) {
      return YB < 12 && GB < 2048 ? (BB[OB] = 1 + (YB - 4 << 2) + (GB >>> 8 << 5), BB[OB + 1] = 255 & GB, OB + 2) : (BB[OB] = 2 + (YB - 1 << 2), BB[OB + 1] = 255 & GB, BB[OB + 2] = GB >>> 8, OB + 3)
    }

    function yB(BB, OB, GB, YB) {
      for (; YB >= 68;) OB = jB(BB, OB, GB, 64), YB -= 64;
      return YB > 64 && (OB = jB(BB, OB, GB, 60), YB -= 60), jB(BB, OB, GB, YB)
    }

    function JB(BB, OB, jB, JB, MB) {
      for (var PB = 1; 1 << PB <= jB && PB <= 14;) PB += 1;
      var zB = 32 - (PB -= 1);
      "undefined" === typeof GB[PB] && (GB[PB] = new Uint16Array(1 << PB));
      var lB, pB = GB[PB];
      for (lB = 0; lB < pB.length; lB++) pB[lB] = 0;
      var qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB = OB + jB,
        kB = OB,
        dB = OB,
        KB = !0;
      if (jB >= 15)
        for (qB = fB - 15, NB = YB(DB(BB, OB += 1), zB); KB;) {
          AB = 32, RB = OB;
          do {
            if (ZB = NB, VB = AB >>> 5, AB += 1, RB = (OB = RB) + VB, OB > qB) {
              KB = !1;
              break
            }
            NB = YB(DB(BB, RB), zB), WB = kB + pB[ZB], pB[ZB] = OB - kB
          } while (!QB(BB, OB, WB));
          if (!KB) break;
          MB = oB(BB, dB, OB - dB, JB, MB);
          do {
            for (SB = OB, nB = 4; OB + nB < fB && BB[OB + nB] === BB[WB + nB];) nB += 1;
            if (OB += nB, MB = yB(JB, MB, SB - WB, nB), dB = OB, OB >= qB) {
              KB = !1;
              break
            }
            pB[YB(DB(BB, OB - 1), zB)] = OB - 1 - kB, WB = kB + pB[UB = YB(DB(BB, OB), zB)], pB[UB] = OB - kB
          } while (QB(BB, OB, WB));
          if (!KB) break;
          NB = YB(DB(BB, OB += 1), zB)
        }
      return dB < fB && (MB = oB(BB, dB, fB - dB, JB, MB)), MB
    }

    function MB(BB) {
      this.array = BB
    }
    MB.prototype.maxCompressedLength = function() {
      var BB = this.array.length;
      return 32 + BB + Math.floor(BB / 6)
    }, MB.prototype.compressToBuffer = function(BB) {
      var OB, GB = this.array,
        YB = GB.length,
        DB = 0,
        QB = 0;
      for (QB = function(BB, OB, GB) {
          do {
            OB[GB] = 127 & BB, (BB >>>= 7) > 0 && (OB[GB] += 128), GB += 1
          } while (BB > 0);
          return GB
        }(YB, BB, QB); DB < YB;) QB = JB(GB, DB, OB = Math.min(YB - DB, 65536), BB, QB), DB += OB;
      return QB
    }, OB.b = MB
  },
  40440: (BB, OB) => {
    var GB = [0, 255, 65535, 16777215, 4294967295];

    function YB(BB, OB, GB, YB, DB) {
      var QB;
      for (QB = 0; QB < DB; QB++) GB[YB + QB] = BB[OB + QB]
    }

    function DB(BB, OB, GB, YB) {
      var DB;
      for (DB = 0; DB < YB; DB++) BB[OB + DB] = BB[OB - GB + DB]
    }

    function QB(BB) {
      this.array = BB, this.pos = 0
    }
    QB.prototype.readUncompressedLength = function() {
      for (var BB, OB, GB = 0, YB = 0; YB < 32 && this.pos < this.array.length;) {
        if (BB = this.array[this.pos], this.pos += 1, (OB = 127 & BB) << YB >>> YB !== OB) return -1;
        if (GB |= OB << YB, BB < 128) return GB;
        YB += 7
      }
      return -1
    }, QB.prototype.uncompressToBuffer = function(BB) {
      for (var OB, QB, oB, jB, yB = this.array, JB = yB.length, MB = this.pos, PB = 0; MB < yB.length;)
        if (OB = yB[MB], MB += 1, 0 === (3 & OB)) {
          if ((QB = 1 + (OB >>> 2)) > 60) {
            if (MB + 3 >= JB) return !1;
            oB = QB - 60, QB = 1 + ((QB = yB[MB] + (yB[MB + 1] << 8) + (yB[MB + 2] << 16) + (yB[MB + 3] << 24)) & GB[oB]), MB += oB
          }
          if (MB + QB > JB) return !1;
          YB(yB, MB, BB, PB, QB), MB += QB, PB += QB
        } else {
          switch (3 & OB) {
            case 1:
              QB = 4 + (OB >>> 2 & 7), jB = yB[MB] + (OB >>> 5 << 8), MB += 1;
              break;
            case 2:
              if (MB + 1 >= JB) return !1;
              QB = 1 + (OB >>> 2), jB = yB[MB] + (yB[MB + 1] << 8), MB += 2;
              break;
            case 3:
              if (MB + 3 >= JB) return !1;
              QB = 1 + (OB >>> 2), jB = yB[MB] + (yB[MB + 1] << 8) + (yB[MB + 2] << 16) + (yB[MB + 3] << 24), MB += 4
          }
          if (0 === jB || jB > PB) return !1;
          DB(BB, PB, jB, QB), PB += QB
        } return !0
    }, OB.e = QB
  },
  36856: BB => {
    BB.exports = function(BB, OB, GB, YB) {
      var DB = self || window;
      try {
        try {
          var QB;
          try {
            QB = new DB.Blob([BB])
          } catch (JB) {
            (QB = new(DB.BlobBuilder || DB.WebKitBlobBuilder || DB.MozBlobBuilder || DB.MSBlobBuilder)).append(BB), QB = QB.getBlob()
          }
          var oB = DB.URL || DB.webkitURL,
            jB = oB.createObjectURL(QB),
            yB = new DB[OB](jB, GB);
          return oB.revokeObjectURL(jB), yB
        } catch (JB) {
          return new DB[OB]("data:application/javascript,".concat(encodeURIComponent(BB)), GB)
        }
      } catch (JB) {
        if (!YB) throw Error("Inline worker is not supported");
        return new DB[OB](YB, GB)
      }
    }
  },
  40591: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      e: () => DB,
      g: () => JB,
      k: () => lB,
      n: () => oB,
      q: () => pB
    });
    var YB = GB(40594);
    const DB = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      QB = [-1, 1, 2, 3, 4, 5, 6, 8],
      oB = BB => {
        if (!BB || BB.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const OB = new YB.e(BB),
          GB = jB(OB),
          {
            frequencyIndex: DB,
            sampleRate: oB
          } = yB(OB),
          JB = OB.readBits(4);
        let MB = null;
        JB >= 1 && JB <= 7 && (MB = QB[JB]);
        let PB = GB,
          zB = !1,
          lB = oB;
        if (5 === GB || 29 === GB) zB = 29 === GB, lB = yB(OB).sampleRate, PB = jB(OB), 22 === PB && OB.skipBits(4);
        else
          for (; OB.getBitsLeft() > 15;) {
            const BB = OB.pos;
            if (695 === OB.readBits(11)) {
              5 === jB(OB) && OB.readBits(1) && (lB = yB(OB).sampleRate, OB.getBitsLeft() > 11 && 1352 === OB.readBits(11) && (zB = !!OB.readBits(1)));
              break
            }
            OB.pos = BB + 1
          }
        return null !== MB && MB > 1 && (zB = !1), {
          objectType: GB,
          coreObjectType: PB,
          frequencyIndex: DB,
          channelConfiguration: JB,
          outputSampleRate: lB,
          outputNumberOfChannels: zB && 1 === MB ? 2 : MB
        }
      },
      jB = BB => {
        const OB = BB.readBits(5);
        return 31 === OB ? 32 + BB.readBits(6) : OB
      },
      yB = BB => {
        const OB = BB.readBits(4);
        return 15 === OB ? {
          frequencyIndex: OB,
          sampleRate: BB.readBits(24)
        } : {
          frequencyIndex: OB,
          sampleRate: OB < DB.length ? DB[OB] : null
        }
      },
      JB = BB => {
        const OB = 5 === BB.objectType || 29 === BB.objectType,
          GB = 29 === BB.objectType,
          DB = OB ? BB.outputSampleRate / 2 : BB.outputSampleRate,
          oB = GB ? 1 : BB.outputNumberOfChannels,
          jB = QB.indexOf(oB);
        if (-1 === jB) throw new TypeError(`Unsupported number of channels: ${BB.outputNumberOfChannels}`);
        let yB = 16;
        BB.objectType >= 32 && (yB += 6), 15 === zB(DB) && (yB += 24), OB && (yB += 9, 15 === zB(BB.outputSampleRate) && (yB += 24));
        const JB = Math.ceil(yB / 8),
          lB = new Uint8Array(JB),
          pB = new YB.e(lB);
        return MB(pB, BB.objectType), PB(pB, DB), pB.writeBits(4, jB), OB && (PB(pB, BB.outputSampleRate), MB(pB, 2)), pB.writeBits(3, 0), lB
      },
      MB = (BB, OB) => {
        OB < 32 ? BB.writeBits(5, OB) : (BB.writeBits(5, 31), BB.writeBits(6, OB - 32))
      },
      PB = (BB, OB) => {
        const GB = zB(OB);
        BB.writeBits(4, GB), 15 === GB && BB.writeBits(24, OB)
      },
      zB = BB => {
        const OB = DB.indexOf(BB);
        return -1 === OB ? 15 : OB
      },
      lB = BB => {
        const OB = new Uint8Array(7),
          GB = new YB.e(OB),
          {
            coreObjectType: DB,
            frequencyIndex: QB,
            channelConfiguration: oB
          } = BB,
          jB = DB - 1;
        return GB.writeBits(12, 4095), GB.writeBits(1, 0), GB.writeBits(2, 0), GB.writeBits(1, 1), GB.writeBits(2, jB), GB.writeBits(4, QB), GB.writeBits(1, 0), GB.writeBits(3, oB), GB.writeBits(1, 0), GB.writeBits(1, 0), GB.writeBits(1, 0), GB.writeBits(1, 0), GB.skipBits(13), GB.writeBits(11, 2047), GB.writeBits(2, 0), {
          header: OB,
          bitstream: GB
        }
      },
      pB = (BB, OB) => {
        BB.pos = 30, BB.writeBits(13, OB)
      }
  },
  40594: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    class YB {
      constructor(BB) {
        this.bytes = BB, this.pos = 0
      }
      seekToByte(BB) {
        this.pos = 8 * BB
      }
      readBit() {
        const BB = Math.floor(this.pos / 8),
          OB = this.bytes[BB] ?? 0,
          GB = 7 - (7 & this.pos),
          YB = (OB & 1 << GB) >> GB;
        return this.pos++, YB
      }
      readBits(BB) {
        if (1 === BB) return this.readBit();
        let OB = 0;
        for (let GB = 0; GB < BB; GB++) OB <<= 1, OB |= this.readBit();
        return OB
      }
      writeBits(BB, OB) {
        const GB = this.pos + BB;
        for (let YB = this.pos; YB < GB; YB++) {
          const BB = Math.floor(YB / 8);
          let DB = this.bytes[BB];
          const QB = 7 - (7 & YB);
          DB &= ~(1 << QB), DB |= (OB & 1 << GB - YB - 1) >> GB - YB - 1 << QB, this.bytes[BB] = DB
        }
        this.pos = GB
      }
      copyBits(BB, OB) {
        let GB = 0;
        for (; GB < BB - 7; GB += 8) this.writeBits(8, OB.readBits(8));
        const YB = BB - GB;
        YB > 0 && this.writeBits(YB, OB.readBits(YB))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const BB = this.pos / 8,
          OB = this.bytes[BB] ?? 0;
        return this.pos += 8, OB
      }
      skipBits(BB) {
        this.pos += BB
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const BB = new YB(this.bytes);
        return BB.pos = this.pos, BB
      }
    }
  },
  40603: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => tB,
      g: () => yB,
      k: () => BO,
      n: () => vB,
      o: () => JB,
      p: () => aB,
      r: () => pO,
      v: () => NB,
      z: () => RB,
      C: () => sB,
      E: () => VB,
      G: () => rB,
      I: () => HB,
      N: () => hB,
      K: () => WB,
      O: () => dB,
      Q: () => pB,
      U: () => kB,
      Y: () => EB,
      $: () => zB,
      bb: () => lB,
      fb: () => xB,
      hb: () => PO,
      kb: () => GO,
      nb: () => CB,
      rb: () => eB,
      sb: () => bB,
      ub: () => AB,
      wb: () => gB
    });
    var YB = GB(40599),
      DB = GB(40574),
      QB = GB(40610);
    const oB = [48e3, 44100, 32e3],
      jB = [24e3, 22050, 16e3];
    var yB, JB, MB = GB(40594),
      PB = GB(40619);
    ! function(BB) {
      BB[BB.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", BB[BB.SLICE_DPA = 2] = "SLICE_DPA", BB[BB.SLICE_DPB = 3] = "SLICE_DPB", BB[BB.SLICE_DPC = 4] = "SLICE_DPC", BB[BB.IDR = 5] = "IDR", BB[BB.SEI = 6] = "SEI", BB[BB.SPS = 7] = "SPS", BB[BB.PPS = 8] = "PPS", BB[BB.AUD = 9] = "AUD", BB[BB.SPS_EXT = 13] = "SPS_EXT"
    }(yB || (yB = {})),
    function(BB) {
      BB[BB.RASL_N = 8] = "RASL_N", BB[BB.RASL_R = 9] = "RASL_R", BB[BB.BLA_W_LP = 16] = "BLA_W_LP", BB[BB.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", BB[BB.VPS_NUT = 32] = "VPS_NUT", BB[BB.SPS_NUT = 33] = "SPS_NUT", BB[BB.PPS_NUT = 34] = "PPS_NUT", BB[BB.AUD_NUT = 35] = "AUD_NUT", BB[BB.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", BB[BB.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(JB || (JB = {}));
    const zB = function*(BB) {
        let OB = 0,
          GB = -1;
        for (; OB < BB.length - 2;) {
          const YB = BB.indexOf(0, OB);
          if (-1 === YB || YB >= BB.length - 2) break;
          OB = YB;
          let DB = 0;
          OB + 3 < BB.length && 0 === BB[OB + 1] && 0 === BB[OB + 2] && 1 === BB[OB + 3] ? DB = 4 : 0 === BB[OB + 1] && 1 === BB[OB + 2] && (DB = 3), 0 !== DB ? (-1 !== GB && OB > GB && (yield {
            offset: GB,
            length: OB - GB
          }), GB = OB + DB, OB = GB) : OB++
        } - 1 !== GB && GB < BB.length && (yield {
          offset: GB,
          length: BB.length - GB
        })
      },
      lB = function*(BB, OB) {
        let GB = 0;
        const YB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
        for (; GB + OB <= BB.length;) {
          let BB;
          1 === OB ? BB = YB.getUint8(GB) : 2 === OB ? BB = YB.getUint16(GB, !1) : 3 === OB ? BB = (0, DB.Ab)(YB, GB, !1) : ((0, DB.Q)(4 === OB), BB = YB.getUint32(GB, !1)), GB += OB, yield {
            offset: GB,
            length: BB
          }, GB += BB
        }
      },
      pB = BB => 31 & BB,
      qB = BB => {
        const OB = [],
          GB = BB.length;
        for (let YB = 0; YB < GB; YB++) YB + 2 < GB && 0 === BB[YB] && 0 === BB[YB + 1] && 3 === BB[YB + 2] ? (OB.push(0, 0), YB += 2) : OB.push(BB[YB]);
        return new Uint8Array(OB)
      },
      ZB = new Uint8Array([0, 0, 0, 1]),
      NB = BB => {
        const OB = BB.reduce(((BB, OB) => BB + ZB.byteLength + OB.byteLength), 0),
          GB = new Uint8Array(OB);
        let YB = 0;
        for (const DB of BB) GB.set(ZB, YB), YB += ZB.byteLength, GB.set(DB, YB), YB += DB.byteLength;
        return GB
      },
      RB = (BB, OB) => {
        const GB = BB.reduce(((BB, GB) => BB + OB + GB.byteLength), 0),
          YB = new Uint8Array(GB);
        let QB = 0;
        for (const oB of BB) {
          const BB = new DataView(YB.buffer, YB.byteOffset, YB.byteLength);
          switch (OB) {
            case 1:
              BB.setUint8(QB, oB.byteLength);
              break;
            case 2:
              BB.setUint16(QB, oB.byteLength, !1);
              break;
            case 3:
              (0, DB.sd)(BB, QB, oB.byteLength, !1);
              break;
            case 4:
              BB.setUint32(QB, oB.byteLength, !1)
          }
          QB += OB, YB.set(oB, QB), QB += oB.byteLength
        }
        return YB
      },
      WB = BB => {
        try {
          const OB = [],
            GB = [],
            YB = [];
          for (const DB of zB(BB)) {
            const QB = BB.subarray(DB.offset, DB.offset + DB.length),
              oB = pB(QB[0]);
            oB === yB.SPS ? OB.push(QB) : oB === yB.PPS ? GB.push(QB) : oB === yB.SPS_EXT && YB.push(QB)
          }
          if (0 === OB.length) return null;
          if (0 === GB.length) return null;
          const QB = OB[0],
            oB = nB(QB);
          (0, DB.Q)(null !== oB);
          const jB = 100 === oB.profileIdc || 110 === oB.profileIdc || 122 === oB.profileIdc || 144 === oB.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: oB.profileIdc,
            profileCompatibility: oB.constraintFlags,
            avcLevelIndication: oB.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: OB,
            pictureParameterSets: GB,
            chromaFormat: jB ? oB.chromaFormatIdc : null,
            bitDepthLumaMinus8: jB ? oB.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: jB ? oB.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: jB ? YB : null
          }
        } catch (OB) {
          return QB.e._error("Error building AVC Decoder Configuration Record:", OB), null
        }
      },
      AB = BB => {
        const OB = [];
        OB.push(BB.configurationVersion), OB.push(BB.avcProfileIndication), OB.push(BB.profileCompatibility), OB.push(BB.avcLevelIndication), OB.push(252 | 3 & BB.lengthSizeMinusOne), OB.push(224 | 31 & BB.sequenceParameterSets.length);
        for (const GB of BB.sequenceParameterSets) {
          const BB = GB.byteLength;
          OB.push(BB >> 8), OB.push(255 & BB);
          for (let YB = 0; YB < BB; YB++) OB.push(GB[YB])
        }
        OB.push(BB.pictureParameterSets.length);
        for (const GB of BB.pictureParameterSets) {
          const BB = GB.byteLength;
          OB.push(BB >> 8), OB.push(255 & BB);
          for (let YB = 0; YB < BB; YB++) OB.push(GB[YB])
        }
        if ((100 === BB.avcProfileIndication || 110 === BB.avcProfileIndication || 122 === BB.avcProfileIndication || 144 === BB.avcProfileIndication) && null !== BB.chromaFormat) {
          (0, DB.Q)(null !== BB.bitDepthLumaMinus8), (0, DB.Q)(null !== BB.bitDepthChromaMinus8), (0, DB.Q)(null !== BB.sequenceParameterSetExt), OB.push(252 | 3 & BB.chromaFormat), OB.push(248 | 7 & BB.bitDepthLumaMinus8), OB.push(248 | 7 & BB.bitDepthChromaMinus8), OB.push(BB.sequenceParameterSetExt.length);
          for (const GB of BB.sequenceParameterSetExt) {
            const BB = GB.byteLength;
            OB.push(BB >> 8), OB.push(255 & BB);
            for (let YB = 0; YB < BB; YB++) OB.push(GB[YB])
          }
        }
        return new Uint8Array(OB)
      },
      VB = BB => {
        try {
          const OB = (0, DB.Gd)(BB);
          let GB = 0;
          const YB = OB.getUint8(GB++),
            QB = OB.getUint8(GB++),
            oB = OB.getUint8(GB++),
            jB = OB.getUint8(GB++),
            yB = 3 & OB.getUint8(GB++),
            JB = 31 & OB.getUint8(GB++),
            MB = [];
          for (let DB = 0; DB < JB; DB++) {
            const YB = OB.getUint16(GB, !1);
            GB += 2, MB.push(BB.subarray(GB, GB + YB)), GB += YB
          }
          const PB = OB.getUint8(GB++),
            zB = [];
          for (let DB = 0; DB < PB; DB++) {
            const YB = OB.getUint16(GB, !1);
            GB += 2, zB.push(BB.subarray(GB, GB + YB)), GB += YB
          }
          const lB = {
            configurationVersion: YB,
            avcProfileIndication: QB,
            profileCompatibility: oB,
            avcLevelIndication: jB,
            lengthSizeMinusOne: yB,
            sequenceParameterSets: MB,
            pictureParameterSets: zB,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === QB || 110 === QB || 122 === QB || 144 === QB) && GB + 4 <= BB.length) {
            const YB = 3 & OB.getUint8(GB++),
              DB = 7 & OB.getUint8(GB++),
              QB = 7 & OB.getUint8(GB++),
              oB = OB.getUint8(GB++);
            lB.chromaFormat = YB, lB.bitDepthLumaMinus8 = DB, lB.bitDepthChromaMinus8 = QB;
            const jB = [];
            for (let yB = 0; yB < oB; yB++) {
              const YB = OB.getUint16(GB, !1);
              GB += 2, jB.push(BB.subarray(GB, GB + YB)), GB += YB
            }
            lB.sequenceParameterSetExt = jB
          }
          return lB
        } catch (OB) {
          return QB.e._error("Error deserializing AVC Decoder Configuration Record:", OB), null
        }
      },
      SB = {
        1: {
          num: 1,
          den: 1
        },
        2: {
          num: 12,
          den: 11
        },
        3: {
          num: 10,
          den: 11
        },
        4: {
          num: 16,
          den: 11
        },
        5: {
          num: 40,
          den: 33
        },
        6: {
          num: 24,
          den: 11
        },
        7: {
          num: 20,
          den: 11
        },
        8: {
          num: 32,
          den: 11
        },
        9: {
          num: 80,
          den: 33
        },
        10: {
          num: 18,
          den: 11
        },
        11: {
          num: 15,
          den: 11
        },
        12: {
          num: 64,
          den: 33
        },
        13: {
          num: 160,
          den: 99
        },
        14: {
          num: 4,
          den: 3
        },
        15: {
          num: 3,
          den: 2
        },
        16: {
          num: 2,
          den: 1
        }
      },
      nB = BB => {
        try {
          const OB = qB(BB),
            GB = new MB.e(OB);
          GB.skipBits(1), GB.skipBits(2);
          if (7 !== GB.readBits(5)) return null;
          const QB = GB.readAlignedByte(),
            oB = GB.readAlignedByte(),
            jB = GB.readAlignedByte();
          (0, DB.Qc)(GB);
          let yB = 1,
            JB = 0,
            PB = 0,
            zB = 0;
          if (100 === QB || 110 === QB || 122 === QB || 244 === QB || 44 === QB || 83 === QB || 86 === QB || 118 === QB || 128 === QB) {
            yB = (0, DB.Qc)(GB), 3 === yB && (zB = GB.readBits(1)), JB = (0, DB.Qc)(GB), PB = (0, DB.Qc)(GB), GB.skipBits(1);
            if (GB.readBits(1))
              for (let BB = 0; BB < (3 !== yB ? 8 : 12); BB++) {
                if (GB.readBits(1)) {
                  const OB = BB < 6 ? 16 : 64;
                  let YB = 8,
                    QB = 8;
                  for (let BB = 0; BB < OB; BB++) {
                    if (0 !== QB) {
                      QB = (YB + (0, DB.Uc)(GB) + 256) % 256
                    }
                    YB = 0 === QB ? YB : QB
                  }
                }
              }
          }(0, DB.Qc)(GB);
          const lB = (0, DB.Qc)(GB);
          if (0 === lB)(0, DB.Qc)(GB);
          else if (1 === lB) {
            GB.skipBits(1), (0, DB.Uc)(GB), (0, DB.Uc)(GB);
            const BB = (0, DB.Qc)(GB);
            for (let OB = 0; OB < BB; OB++)(0, DB.Uc)(GB)
          }(0, DB.Qc)(GB), GB.skipBits(1);
          const pB = (0, DB.Qc)(GB),
            ZB = (0, DB.Qc)(GB),
            NB = 16 * (pB + 1),
            RB = 16 * (ZB + 1);
          let WB = NB,
            AB = RB;
          const VB = GB.readBits(1);
          VB || GB.skipBits(1), GB.skipBits(1);
          if (GB.readBits(1)) {
            const BB = (0, DB.Qc)(GB),
              OB = (0, DB.Qc)(GB),
              YB = (0, DB.Qc)(GB),
              QB = (0, DB.Qc)(GB);
            let oB, jB;
            if (0 === (0 === zB ? yB : 0)) oB = 1, jB = 2 - VB;
            else {
              oB = 3 === yB ? 1 : 2, jB = (1 === yB ? 2 : 1) * (2 - VB)
            }
            WB -= oB * (BB + OB), AB -= jB * (YB + QB)
          }
          let nB = 2,
            fB = 2,
            kB = 2,
            dB = 0,
            KB = {
              num: 1,
              den: 1
            },
            uB = null,
            mB = null,
            IB = null,
            FB = null;
          const iB = GB.pos;
          if (GB.readBits(1)) {
            if (GB.readBits(1)) {
              const BB = GB.readBits(8);
              if (255 === BB) KB = {
                num: GB.readBits(16),
                den: GB.readBits(16)
              };
              else {
                const OB = SB[BB];
                OB && (KB = OB)
              }
            }
            GB.readBits(1) && GB.skipBits(1);
            if (GB.readBits(1)) {
              GB.skipBits(3), dB = GB.readBits(1);
              GB.readBits(1) && (nB = GB.readBits(8), fB = GB.readBits(8), kB = GB.readBits(8))
            }
            GB.readBits(1) && ((0, DB.Qc)(GB), (0, DB.Qc)(GB));
            GB.readBits(1) && (GB.skipBits(32), GB.skipBits(32), GB.skipBits(1));
            const BB = GB.readBits(1);
            BB && UB(GB);
            const OB = GB.readBits(1);
            OB && UB(GB), (BB || OB) && GB.skipBits(1), GB.skipBits(1), IB = GB.pos, FB = GB.readBits(1), FB && (GB.skipBits(1), (0, DB.Qc)(GB), (0, DB.Qc)(GB), (0, DB.Qc)(GB), (0, DB.Qc)(GB), uB = (0, DB.Qc)(GB), mB = (0, DB.Qc)(GB))
          }
          if (null === uB) {
            (0, DB.Q)(null === mB);
            if (44 !== QB && 86 !== QB && 100 !== QB && 110 !== QB && 122 !== QB && 244 !== QB || !(16 & oB)) {
              const BB = pB + 1,
                OB = (2 - VB) * (ZB + 1),
                GB = YB.f.find((BB => BB.level >= jB)) ?? (0, DB.sc)(YB.f),
                QB = Math.min(Math.floor(GB.maxDpbMbs / (BB * OB)), 16);
              uB = QB, mB = QB
            } else uB = 0, mB = 0
          }
          return (0, DB.Q)(null !== mB), {
            emulationUnpreventedBytes: OB,
            profileIdc: QB,
            constraintFlags: oB,
            levelIdc: jB,
            frameMbsOnlyFlag: VB,
            chromaFormatIdc: yB,
            bitDepthLumaMinus8: JB,
            bitDepthChromaMinus8: PB,
            codedWidth: NB,
            codedHeight: RB,
            displayWidth: WB,
            displayHeight: AB,
            pixelAspectRatio: KB,
            colourPrimaries: nB,
            matrixCoefficients: kB,
            transferCharacteristics: fB,
            fullRangeFlag: dB,
            numReorderFrames: uB,
            maxDecFrameBuffering: mB,
            vuiParametersFlagBitOffset: iB,
            bitstreamRestrictionFlagBitOffset: IB,
            bitstreamRestrictionFlag: FB
          }
        } catch (OB) {
          return QB.e._error("Error parsing AVC SPS:", OB), null
        }
      },
      UB = BB => {
        const OB = (0, DB.Qc)(BB);
        BB.skipBits(4), BB.skipBits(4);
        for (let GB = 0; GB <= OB; GB++)(0, DB.Qc)(BB), (0, DB.Qc)(BB), BB.skipBits(1);
        BB.skipBits(5), BB.skipBits(5), BB.skipBits(5), BB.skipBits(5)
      },
      fB = (BB, OB) => {
        if (OB.description) {
          const GB = 3 & (0, DB.Id)(OB.description)[21];
          return lB(BB, GB + 1)
        }
        return zB(BB)
      },
      kB = BB => BB >> 1 & 63,
      dB = BB => {
        try {
          const OB = [],
            GB = [],
            YB = [],
            oB = [];
          for (const DB of zB(BB)) {
            const QB = BB.subarray(DB.offset, DB.offset + DB.length),
              jB = kB(QB[0]);
            jB === JB.VPS_NUT ? OB.push(QB) : jB === JB.SPS_NUT ? GB.push(QB) : jB === JB.PPS_NUT ? YB.push(QB) : jB !== JB.PREFIX_SEI_NUT && jB !== JB.SUFFIX_SEI_NUT || oB.push(QB)
          }
          if (0 === GB.length || 0 === YB.length) return null;
          const jB = (BB => {
            try {
              const OB = new MB.e(qB(BB));
              OB.skipBits(16), OB.readBits(4);
              const GB = OB.readBits(3),
                YB = OB.readBits(1),
                {
                  general_profile_space: QB,
                  general_tier_flag: oB,
                  general_profile_idc: jB,
                  general_profile_compatibility_flags: yB,
                  general_constraint_indicator_flags: JB,
                  general_level_idc: PB
                } = KB(OB, GB);
              (0, DB.Qc)(OB);
              const zB = (0, DB.Qc)(OB);
              let lB = 0;
              3 === zB && (lB = OB.readBits(1));
              const pB = (0, DB.Qc)(OB),
                ZB = (0, DB.Qc)(OB);
              let NB = pB,
                RB = ZB;
              if (OB.readBits(1)) {
                const BB = (0, DB.Qc)(OB),
                  GB = (0, DB.Qc)(OB),
                  YB = (0, DB.Qc)(OB),
                  QB = (0, DB.Qc)(OB);
                let oB = 1,
                  jB = 1;
                const yB = 0 === lB ? zB : 0;
                1 === yB ? (oB = 2, jB = 2) : 2 === yB && (oB = 2, jB = 1), NB -= (BB + GB) * oB, RB -= (YB + QB) * jB
              }
              const WB = (0, DB.Qc)(OB),
                AB = (0, DB.Qc)(OB);
              (0, DB.Qc)(OB);
              const VB = OB.readBits(1);
              let SB = 0;
              for (let BB = VB ? 0 : GB; BB <= GB; BB++)(0, DB.Qc)(OB), SB = (0, DB.Qc)(OB), (0, DB.Qc)(OB);
              (0, DB.Qc)(OB), (0, DB.Qc)(OB), (0, DB.Qc)(OB), (0, DB.Qc)(OB), (0, DB.Qc)(OB), (0, DB.Qc)(OB), OB.readBits(1) && OB.readBits(1) && uB(OB), OB.skipBits(1), OB.skipBits(1), OB.readBits(1) && (OB.skipBits(4), OB.skipBits(4), (0, DB.Qc)(OB), (0, DB.Qc)(OB), OB.skipBits(1));
              const nB = (0, DB.Qc)(OB);
              if (mB(OB, nB), OB.readBits(1)) {
                const BB = (0, DB.Qc)(OB);
                for (let GB = 0; GB < BB; GB++)(0, DB.Qc)(OB), OB.skipBits(1)
              }
              OB.skipBits(1), OB.skipBits(1);
              let UB = 2,
                fB = 2,
                kB = 2,
                dB = 0,
                IB = 0,
                iB = {
                  num: 1,
                  den: 1
                };
              if (OB.readBits(1)) {
                const BB = FB(OB, GB);
                iB = BB.pixelAspectRatio, UB = BB.colourPrimaries, fB = BB.transferCharacteristics, kB = BB.matrixCoefficients, dB = BB.fullRangeFlag, IB = BB.minSpatialSegmentationIdc
              }
              return {
                displayWidth: NB,
                displayHeight: RB,
                pixelAspectRatio: iB,
                colourPrimaries: UB,
                transferCharacteristics: fB,
                matrixCoefficients: kB,
                fullRangeFlag: dB,
                maxDecFrameBuffering: SB + 1,
                spsMaxSubLayersMinus1: GB,
                spsTemporalIdNestingFlag: YB,
                generalProfileSpace: QB,
                generalTierFlag: oB,
                generalProfileIdc: jB,
                generalProfileCompatibilityFlags: yB,
                generalConstraintIndicatorFlags: JB,
                generalLevelIdc: PB,
                chromaFormatIdc: zB,
                bitDepthLumaMinus8: WB,
                bitDepthChromaMinus8: AB,
                minSpatialSegmentationIdc: IB
              }
            } catch (OB) {
              return QB.e._error("Error parsing HEVC SPS:", OB), null
            }
          })(GB[0]);
          if (!jB) return null;
          let yB = 0;
          if (YB.length > 0) {
            const BB = YB[0],
              OB = new MB.e(qB(BB));
            OB.skipBits(16), (0, DB.Qc)(OB), (0, DB.Qc)(OB), OB.skipBits(1), OB.skipBits(1), OB.skipBits(3), OB.skipBits(1), OB.skipBits(1), (0, DB.Qc)(OB), (0, DB.Qc)(OB), (0, DB.Uc)(OB), OB.skipBits(1), OB.skipBits(1), OB.readBits(1) && (0, DB.Qc)(OB), (0, DB.Uc)(OB), (0, DB.Uc)(OB), OB.skipBits(1), OB.skipBits(1), OB.skipBits(1), OB.skipBits(1);
            const GB = OB.readBits(1),
              QB = OB.readBits(1);
            yB = GB || QB ? GB && !QB ? 2 : !GB && QB ? 3 : 0 : 0
          }
          const PB = [...OB.length ? [{
            arrayCompleteness: 1,
            nalUnitType: JB.VPS_NUT,
            nalUnits: OB
          }] : [], ...GB.length ? [{
            arrayCompleteness: 1,
            nalUnitType: JB.SPS_NUT,
            nalUnits: GB
          }] : [], ...YB.length ? [{
            arrayCompleteness: 1,
            nalUnitType: JB.PPS_NUT,
            nalUnits: YB
          }] : [], ...oB.length ? [{
            arrayCompleteness: 1,
            nalUnitType: kB(oB[0][0]),
            nalUnits: oB
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: jB.generalProfileSpace,
            generalTierFlag: jB.generalTierFlag,
            generalProfileIdc: jB.generalProfileIdc,
            generalProfileCompatibilityFlags: jB.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: jB.generalConstraintIndicatorFlags,
            generalLevelIdc: jB.generalLevelIdc,
            minSpatialSegmentationIdc: jB.minSpatialSegmentationIdc,
            parallelismType: yB,
            chromaFormatIdc: jB.chromaFormatIdc,
            bitDepthLumaMinus8: jB.bitDepthLumaMinus8,
            bitDepthChromaMinus8: jB.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: jB.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: jB.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: PB
          }
        } catch (OB) {
          return QB.e._error("Error building HEVC Decoder Configuration Record:", OB), null
        }
      },
      KB = (BB, OB) => {
        const GB = BB.readBits(2),
          YB = BB.readBits(1),
          DB = BB.readBits(5);
        let QB = 0;
        for (let MB = 0; MB < 32; MB++) QB = QB << 1 | BB.readBits(1);
        const oB = new Uint8Array(6);
        for (let MB = 0; MB < 6; MB++) oB[MB] = BB.readBits(8);
        const jB = BB.readBits(8),
          yB = [],
          JB = [];
        for (let MB = 0; MB < OB; MB++) yB.push(BB.readBits(1)), JB.push(BB.readBits(1));
        if (OB > 0)
          for (let MB = OB; MB < 8; MB++) BB.skipBits(2);
        for (let MB = 0; MB < OB; MB++) yB[MB] && BB.skipBits(88), JB[MB] && BB.skipBits(8);
        return {
          general_profile_space: GB,
          general_tier_flag: YB,
          general_profile_idc: DB,
          general_profile_compatibility_flags: QB,
          general_constraint_indicator_flags: oB,
          general_level_idc: jB
        }
      },
      uB = BB => {
        for (let OB = 0; OB < 4; OB++)
          for (let GB = 0; GB < (3 === OB ? 2 : 6); GB++) {
            if (BB.readBits(1)) {
              const GB = Math.min(64, 1 << 4 + (OB << 1));
              OB > 1 && (0, DB.Uc)(BB);
              for (let OB = 0; OB < GB; OB++)(0, DB.Uc)(BB)
            } else(0, DB.Qc)(BB)
          }
      },
      mB = (BB, OB) => {
        const GB = [];
        for (let YB = 0; YB < OB; YB++) GB[YB] = IB(BB, YB, OB, GB)
      },
      IB = (BB, OB, GB, YB) => {
        let QB = 0,
          oB = 0,
          jB = 0;
        if (0 !== OB && (oB = BB.readBits(1)), oB) {
          if (OB === GB) {
            jB = OB - ((0, DB.Qc)(BB) + 1)
          } else jB = OB - 1;
          BB.readBits(1), (0, DB.Qc)(BB);
          const oB = YB[jB] ?? 0;
          for (let OB = 0; OB <= oB; OB++) {
            BB.readBits(1) || BB.readBits(1)
          }
          QB = YB[jB]
        } else {
          const OB = (0, DB.Qc)(BB),
            GB = (0, DB.Qc)(BB);
          for (let YB = 0; YB < OB; YB++)(0, DB.Qc)(BB), BB.readBits(1);
          for (let YB = 0; YB < GB; YB++)(0, DB.Qc)(BB), BB.readBits(1);
          QB = OB + GB
        }
        return QB
      },
      FB = (BB, OB) => {
        let GB = 2,
          YB = 2,
          QB = 2,
          oB = 0,
          jB = 0,
          yB = {
            num: 1,
            den: 1
          };
        if (BB.readBits(1)) {
          const OB = BB.readBits(8);
          if (255 === OB) yB = {
            num: BB.readBits(16),
            den: BB.readBits(16)
          };
          else {
            const BB = SB[OB];
            BB && (yB = BB)
          }
        }
        return BB.readBits(1) && BB.readBits(1), BB.readBits(1) && (BB.readBits(3), oB = BB.readBits(1), BB.readBits(1) && (GB = BB.readBits(8), YB = BB.readBits(8), QB = BB.readBits(8))), BB.readBits(1) && ((0, DB.Qc)(BB), (0, DB.Qc)(BB)), BB.readBits(1), BB.readBits(1), BB.readBits(1), BB.readBits(1) && ((0, DB.Qc)(BB), (0, DB.Qc)(BB), (0, DB.Qc)(BB), (0, DB.Qc)(BB)), BB.readBits(1) && (BB.readBits(32), BB.readBits(32), BB.readBits(1) && (0, DB.Qc)(BB), BB.readBits(1) && iB(BB, !0, OB)), BB.readBits(1) && (BB.readBits(1), BB.readBits(1), BB.readBits(1), jB = (0, DB.Qc)(BB), (0, DB.Qc)(BB), (0, DB.Qc)(BB), (0, DB.Qc)(BB), (0, DB.Qc)(BB)), {
          pixelAspectRatio: yB,
          colourPrimaries: GB,
          transferCharacteristics: YB,
          matrixCoefficients: QB,
          fullRangeFlag: oB,
          minSpatialSegmentationIdc: jB
        }
      },
      iB = (BB, OB, GB) => {
        let YB = !1,
          QB = !1,
          oB = !1;
        OB && (YB = 1 === BB.readBits(1), QB = 1 === BB.readBits(1), (YB || QB) && (oB = 1 === BB.readBits(1), oB && (BB.readBits(8), BB.readBits(5), BB.readBits(1), BB.readBits(5)), BB.readBits(4), BB.readBits(4), oB && BB.readBits(4), BB.readBits(5), BB.readBits(5), BB.readBits(5)));
        for (let jB = 0; jB <= GB; jB++) {
          let OB = !0;
          1 === BB.readBits(1) || (OB = 1 === BB.readBits(1));
          let GB = !1;
          OB ? (0, DB.Qc)(BB) : GB = 1 === BB.readBits(1);
          let jB = 1;
          if (!GB) {
            jB = (0, DB.Qc)(BB) + 1
          }
          YB && LB(BB, jB, oB), QB && LB(BB, jB, oB)
        }
      },
      LB = (BB, OB, GB) => {
        for (let YB = 0; YB < OB; YB++)(0, DB.Qc)(BB), (0, DB.Qc)(BB), GB && ((0, DB.Qc)(BB), (0, DB.Qc)(BB)), BB.readBits(1)
      },
      gB = BB => {
        const OB = [];
        OB.push(BB.configurationVersion), OB.push((3 & BB.generalProfileSpace) << 6 | (1 & BB.generalTierFlag) << 5 | 31 & BB.generalProfileIdc), OB.push(BB.generalProfileCompatibilityFlags >>> 24 & 255), OB.push(BB.generalProfileCompatibilityFlags >>> 16 & 255), OB.push(BB.generalProfileCompatibilityFlags >>> 8 & 255), OB.push(255 & BB.generalProfileCompatibilityFlags), OB.push(...BB.generalConstraintIndicatorFlags), OB.push(255 & BB.generalLevelIdc), OB.push(240 | BB.minSpatialSegmentationIdc >> 8 & 15), OB.push(255 & BB.minSpatialSegmentationIdc), OB.push(252 | 3 & BB.parallelismType), OB.push(252 | 3 & BB.chromaFormatIdc), OB.push(248 | 7 & BB.bitDepthLumaMinus8), OB.push(248 | 7 & BB.bitDepthChromaMinus8), OB.push(BB.avgFrameRate >> 8 & 255), OB.push(255 & BB.avgFrameRate), OB.push((3 & BB.constantFrameRate) << 6 | (7 & BB.numTemporalLayers) << 3 | (1 & BB.temporalIdNested) << 2 | 3 & BB.lengthSizeMinusOne), OB.push(255 & BB.arrays.length);
        for (const GB of BB.arrays) {
          OB.push((1 & GB.arrayCompleteness) << 7 | 63 & GB.nalUnitType), OB.push(GB.nalUnits.length >> 8 & 255), OB.push(255 & GB.nalUnits.length);
          for (const BB of GB.nalUnits) {
            OB.push(BB.length >> 8 & 255), OB.push(255 & BB.length);
            for (let GB = 0; GB < BB.length; GB++) OB.push(BB[GB])
          }
        }
        return new Uint8Array(OB)
      },
      rB = BB => {
        try {
          const OB = (0, DB.Gd)(BB);
          let GB = 0;
          const YB = OB.getUint8(GB++),
            QB = OB.getUint8(GB++),
            oB = QB >> 6 & 3,
            jB = QB >> 5 & 1,
            yB = 31 & QB,
            JB = OB.getUint32(GB, !1);
          GB += 4;
          const MB = BB.subarray(GB, GB + 6);
          GB += 6;
          const PB = OB.getUint8(GB++),
            zB = (15 & OB.getUint8(GB++)) << 8 | OB.getUint8(GB++),
            lB = 3 & OB.getUint8(GB++),
            pB = 3 & OB.getUint8(GB++),
            qB = 7 & OB.getUint8(GB++),
            ZB = 7 & OB.getUint8(GB++),
            NB = OB.getUint16(GB, !1);
          GB += 2;
          const RB = OB.getUint8(GB++),
            WB = RB >> 6 & 3,
            AB = RB >> 3 & 7,
            VB = RB >> 2 & 1,
            SB = 3 & RB,
            nB = OB.getUint8(GB++),
            UB = [];
          for (let DB = 0; DB < nB; DB++) {
            const YB = OB.getUint8(GB++),
              DB = YB >> 7 & 1,
              QB = 63 & YB,
              oB = OB.getUint16(GB, !1);
            GB += 2;
            const jB = [];
            for (let yB = 0; yB < oB; yB++) {
              const YB = OB.getUint16(GB, !1);
              GB += 2, jB.push(BB.subarray(GB, GB + YB)), GB += YB
            }
            UB.push({
              arrayCompleteness: DB,
              nalUnitType: QB,
              nalUnits: jB
            })
          }
          return {
            configurationVersion: YB,
            generalProfileSpace: oB,
            generalTierFlag: jB,
            generalProfileIdc: yB,
            generalProfileCompatibilityFlags: JB,
            generalConstraintIndicatorFlags: MB,
            generalLevelIdc: PB,
            minSpatialSegmentationIdc: zB,
            parallelismType: lB,
            chromaFormatIdc: pB,
            bitDepthLumaMinus8: qB,
            bitDepthChromaMinus8: ZB,
            avgFrameRate: NB,
            constantFrameRate: WB,
            numTemporalLayers: AB,
            temporalIdNested: VB,
            lengthSizeMinusOne: SB,
            arrays: UB
          }
        } catch (OB) {
          return QB.e._error("Error deserializing HEVC Decoder Configuration Record:", OB), null
        }
      };
    var XB;
    ! function(BB) {
      BB[BB.audAllowed = 0] = "audAllowed", BB[BB.beforeFirstVcl = 1] = "beforeFirstVcl", BB[BB.afterFirstVcl = 2] = "afterFirstVcl", BB[BB.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", BB[BB.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(XB || (XB = {}));
    const wB = {
        1: {
          colourPrimaries: 5,
          transferCharacteristics: 6,
          matrixCoefficients: 5
        },
        2: {
          colourPrimaries: 1,
          transferCharacteristics: 1,
          matrixCoefficients: 1
        },
        3: {
          colourPrimaries: 6,
          transferCharacteristics: 6,
          matrixCoefficients: 6
        },
        4: {
          colourPrimaries: 7,
          transferCharacteristics: 7,
          matrixCoefficients: 7
        },
        5: {
          colourPrimaries: 9,
          transferCharacteristics: 14,
          matrixCoefficients: 9
        },
        7: {
          colourPrimaries: 1,
          transferCharacteristics: 13,
          matrixCoefficients: 0
        }
      },
      EB = BB => {
        const OB = new MB.e(BB);
        if (2 !== OB.readBits(2)) return null;
        const GB = OB.readBits(1),
          QB = (OB.readBits(1) << 1) + GB;
        3 === QB && OB.skipBits(1);
        if (1 === OB.readBits(1)) return null;
        if (0 !== OB.readBits(1)) return null;
        OB.skipBits(2);
        if (4817730 !== OB.readBits(24)) return null;
        let oB = 8;
        if (QB >= 2) {
          oB = OB.readBits(1) ? 12 : 10
        }
        const jB = OB.readBits(3);
        let yB = 0,
          JB = 0;
        if (7 !== jB) {
          if (JB = OB.readBits(1), 1 === QB || 3 === QB) {
            const BB = OB.readBits(1),
              GB = OB.readBits(1);
            yB = BB || GB ? BB && !GB ? 2 : 1 : 3, OB.skipBits(1)
          } else yB = 1
        } else yB = 3, JB = 1;
        const PB = (OB.readBits(16) + 1) * (OB.readBits(16) + 1);
        let zB = (0, DB.sc)(YB.u).level;
        for (const DB of YB.u)
          if (PB <= DB.maxPictureSize) {
            zB = DB.level;
            break
          } const lB = wB[jB];
        return {
          profile: QB,
          level: zB,
          bitDepth: oB,
          chromaSubsampling: yB,
          videoFullRangeFlag: JB,
          colourPrimaries: lB?.colourPrimaries ?? 2,
          transferCharacteristics: lB?.transferCharacteristics ?? 2,
          matrixCoefficients: lB?.matrixCoefficients ?? 2
        }
      },
      cB = function*(BB) {
        const OB = new MB.e(BB),
          GB = () => {
            let BB = 0;
            for (let GB = 0; GB < 8; GB++) {
              const YB = OB.readAlignedByte();
              if (BB += (127 & YB) * 2 ** (7 * GB), !(128 & YB)) break;
              if (7 === GB && 128 & YB) return null
            }
            return BB > 2 ** 32 - 1 ? null : BB
          };
        for (; OB.getBitsLeft() >= 8;) {
          OB.skipBits(1);
          const YB = OB.readBits(4),
            QB = OB.readBits(1),
            oB = OB.readBits(1);
          let jB;
          if (OB.skipBits(1), QB && OB.skipBits(8), oB) {
            const BB = GB();
            if (null === BB) return;
            jB = BB
          } else jB = Math.floor(OB.getBitsLeft() / 8);
          (0, DB.Q)(OB.pos % 8 === 0), yield {
            type: YB,
            data: BB.subarray(OB.pos / 8, OB.pos / 8 + jB)
          }, OB.skipBits(8 * jB)
        }
      },
      hB = BB => {
        for (const {
            type: OB,
            data: GB
          }
          of cB(BB)) {
          if (1 !== OB) continue;
          const BB = new MB.e(GB),
            YB = BB.readBits(3),
            DB = (BB.readBits(1), BB.readBits(1));
          let QB = 0,
            oB = 0,
            jB = 0;
          if (DB) QB = BB.readBits(5);
          else {
            let OB = 0;
            if (BB.readBits(1)) {
              BB.skipBits(32), BB.skipBits(32);
              if (BB.readBits(1)) {
                let OB = 0;
                for (; OB < 32 && !BB.readBits(1);) OB++;
                OB < 32 && BB.skipBits(OB)
              }
              OB = BB.readBits(1), OB && (jB = BB.readBits(5), BB.skipBits(32), BB.skipBits(5), BB.skipBits(5))
            }
            const GB = BB.readBits(1),
              YB = BB.readBits(5);
            for (let DB = 0; DB <= YB; DB++) {
              BB.skipBits(12);
              const YB = BB.readBits(5);
              if (0 === DB && (QB = YB), YB > 7) {
                const OB = BB.readBits(1);
                0 === DB && (oB = OB)
              }
              if (OB) {
                if (BB.readBits(1)) {
                  const OB = jB + 1;
                  BB.skipBits(OB), BB.skipBits(OB), BB.skipBits(1)
                }
              }
              if (GB) {
                BB.readBits(1) && BB.skipBits(4)
              }
            }
          }
          const yB = BB.readBits(4),
            JB = BB.readBits(4),
            PB = yB + 1;
          BB.skipBits(PB);
          const zB = JB + 1;
          BB.skipBits(zB);
          let lB = 0;
          if (lB = DB ? 0 : BB.readBits(1), lB && (BB.skipBits(4), BB.skipBits(3)), BB.skipBits(1), BB.skipBits(1), BB.skipBits(1), !DB) {
            BB.skipBits(1), BB.skipBits(1), BB.skipBits(1), BB.skipBits(1);
            const OB = BB.readBits(1);
            OB && (BB.skipBits(1), BB.skipBits(1));
            let GB = 0;
            if (GB = BB.readBits(1) ? 2 : BB.readBits(1), GB > 0) {
              BB.readBits(1) || BB.skipBits(1)
            }
            OB && BB.skipBits(3)
          }
          BB.skipBits(1), BB.skipBits(1), BB.skipBits(1);
          const pB = BB.readBits(1);
          let qB = 8;
          if (2 === YB && pB) {
            qB = BB.readBits(1) ? 12 : 10
          } else YB <= 2 && (qB = pB ? 10 : 8);
          let ZB = 0;
          1 !== YB && (ZB = BB.readBits(1));
          let NB = 2,
            RB = 2,
            WB = 2;
          BB.readBits(1) && (NB = BB.readBits(8), RB = BB.readBits(8), WB = BB.readBits(8));
          let AB = 0,
            VB = 1,
            SB = 1,
            nB = 0;
          return ZB ? AB = BB.readBits(1) : 1 === NB && 13 === RB && 0 === WB ? (AB = 1, VB = 0, SB = 0) : (AB = BB.readBits(1), 0 === YB ? (VB = 1, SB = 1) : 1 === YB ? (VB = 0, SB = 0) : 12 === qB ? (VB = BB.readBits(1), SB = VB ? BB.readBits(1) : 0) : (VB = 1, SB = 0), VB && SB && (nB = BB.readBits(2))), {
            profile: YB,
            level: QB,
            tier: oB,
            bitDepth: qB,
            monochrome: ZB,
            chromaSubsamplingX: VB,
            chromaSubsamplingY: SB,
            chromaSamplePosition: nB,
            videoFullRangeFlag: AB,
            colourPrimaries: NB,
            transferCharacteristics: RB,
            matrixCoefficients: WB
          }
        }
        return null
      },
      aB = BB => 2 !== BB.colourPrimaries || 2 !== BB.transferCharacteristics || 2 !== BB.matrixCoefficients,
      eB = BB => {
        const OB = (0, DB.Gd)(BB),
          GB = OB.getUint8(9),
          YB = OB.getUint16(10, !0),
          QB = OB.getUint32(12, !0),
          oB = OB.getInt16(16, !0),
          jB = OB.getUint8(18);
        let yB = null;
        return jB && (yB = BB.subarray(19, 21 + GB)), {
          outputChannelCount: GB,
          preSkip: YB,
          inputSampleRate: QB,
          outputGain: oB,
          channelMappingFamily: jB,
          channelMappingTable: yB
        }
      },
      TB = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      bB = BB => {
        const OB = BB[0] >> 3,
          GB = 3 & BB[0];
        let YB;
        return YB = 0 === GB ? 1 : 1 === GB || 2 === GB ? 2 : 63 & BB[1], {
          durationInSamples: TB[OB] * YB
        }
      },
      CB = BB => {
        if (BB.length < 7) throw new Error("Setup header is too short.");
        if (5 !== BB[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...BB.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const OB = BB.length,
          GB = new Uint8Array(OB);
        for (let MB = 0; MB < OB; MB++) GB[MB] = BB[OB - 1 - MB];
        const YB = new MB.e(GB);
        let DB = 0;
        for (; YB.getBitsLeft() > 97;)
          if (1 === YB.readBits(1)) {
            DB = YB.pos;
            break
          } if (0 === DB) throw new Error("Invalid Setup header: framing bit not found.");
        let QB = 0,
          oB = !1,
          jB = 0;
        for (; YB.getBitsLeft() >= 97;) {
          const BB = YB.pos,
            OB = YB.readBits(8),
            GB = YB.readBits(16),
            DB = YB.readBits(16);
          if (OB > 63 || 0 !== GB || 0 !== DB) {
            YB.pos = BB;
            break
          }
          if (YB.skipBits(1), QB++, QB > 64) break;
          YB.clone().readBits(6) + 1 === QB && (oB = !0, jB = QB)
        }
        if (!oB) throw new Error("Invalid Setup header: mode header not found.");
        if (jB > 63) throw new Error(`Unsupported mode count: ${jB}.`);
        const yB = jB;
        YB.pos = 0, YB.skipBits(DB);
        const JB = Array(yB).fill(0);
        for (let MB = yB - 1; MB >= 0; MB--) YB.skipBits(40), JB[MB] = YB.readBits(1);
        return {
          modeBlockflags: JB
        }
      },
      HB = (BB, OB, GB) => {
        switch (BB) {
          case "avc":
            for (const BB of ((BB, OB) => {
                if (OB.description) {
                  const GB = 3 & (0, DB.Id)(OB.description)[4];
                  return lB(BB, GB + 1)
                }
                return zB(BB)
              })(GB, OB)) {
              const OB = GB[BB.offset],
                YB = pB(OB);
              if (YB >= yB.NON_IDR_SLICE && YB <= yB.SLICE_DPC) return "delta";
              if (YB === yB.IDR) return "key";
              if (YB === yB.SEI && !(0, DB.Kb)()) {
                const OB = GB.subarray(BB.offset, BB.offset + BB.length),
                  YB = qB(OB);
                let QB = 1;
                do {
                  let BB = 0;
                  for (;;) {
                    const OB = YB[QB++];
                    if (void 0 === OB) break;
                    if (BB += OB, OB < 255) break
                  }
                  let OB = 0;
                  for (;;) {
                    const BB = YB[QB++];
                    if (void 0 === BB) break;
                    if (OB += BB, BB < 255) break
                  }
                  if (BB === 6) {
                    const BB = new MB.e(YB);
                    BB.pos = 8 * QB;
                    const OB = (0, DB.Qc)(BB),
                      GB = BB.readBits(1);
                    if (0 === OB && 1 === GB) return "key"
                  }
                  QB += OB
                } while (QB < YB.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const BB of fB(GB, OB)) {
              const OB = kB(GB[BB.offset]);
              if (OB < JB.BLA_W_LP) return "delta";
              if (OB <= JB.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & GB[0]) ? "key" : "delta";
          case "vp9": {
            const BB = new MB.e(GB);
            if (2 !== BB.readBits(2)) return null;
            const OB = BB.readBits(1);
            3 === (BB.readBits(1) << 1) + OB && BB.skipBits(1);
            if (BB.readBits(1)) return null;
            return 0 === BB.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let BB = !1;
            for (const {
                type: OB,
                data: YB
              }
              of cB(GB))
              if (1 === OB) {
                const OB = new MB.e(YB);
                OB.skipBits(4), BB = !!OB.readBits(1)
              } else if (3 === OB || 6 === OB || 7 === OB) {
              if (BB) return "key";
              const OB = new MB.e(YB);
              if (OB.readBits(1)) return null;
              return 0 === OB.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, DB.M)(BB), (0, DB.Q)(!1)
        }
      };
    var vB;
    ! function(BB) {
      BB[BB.STREAMINFO = 0] = "STREAMINFO", BB[BB.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", BB[BB.PICTURE = 6] = "PICTURE"
    }(vB || (vB = {}));
    const sB = (BB, OB, GB) => {
        const YB = [BB],
          QB = DB.Bd.encode(PB.c);
        let oB = new Uint8Array(4 + QB.length),
          jB = new DataView(oB.buffer);
        jB.setUint32(0, QB.length, !0), oB.set(QB, 4), YB.push(oB);
        const yB = [],
          JB = (BB, OB) => {
            const GB = `${BB}=${OB}`,
              QB = DB.Bd.encode(GB);
            oB = new Uint8Array(4 + QB.length), jB = new DataView(oB.buffer), jB.setUint32(0, QB.length, !0), oB.set(QB, 4), YB.push(oB), yB.push(BB)
          };
        for (const {
            key: PB,
            value: qB
          }
          of(0, DB.rc)(OB)) switch (PB) {
          case "title":
            JB("TITLE", qB);
            break;
          case "description":
            JB("DESCRIPTION", qB);
            break;
          case "artist":
            JB("ARTIST", qB);
            break;
          case "album":
            JB("ALBUM", qB);
            break;
          case "albumArtist":
            JB("ALBUMARTIST", qB);
            break;
          case "genre":
            JB("GENRE", qB);
            break;
          case "date":
            JB("DATE", qB.toISOString().slice(0, 10));
            break;
          case "comment":
            JB("COMMENT", qB);
            break;
          case "lyrics":
            JB("LYRICS", qB);
            break;
          case "trackNumber":
            JB("TRACKNUMBER", qB.toString());
            break;
          case "tracksTotal":
            JB("TRACKTOTAL", qB.toString());
            break;
          case "discNumber":
            JB("DISCNUMBER", qB.toString());
            break;
          case "discsTotal":
            JB("DISCTOTAL", qB.toString());
            break;
          case "beatsPerMinute":
            JB("BPM", qB.toString());
            break;
          case "images":
            if (!GB) break;
            for (const BB of qB) {
              const OB = "coverFront" === BB.kind ? 3 : "coverBack" === BB.kind ? 4 : 0,
                GB = new Uint8Array(BB.mimeType.length);
              for (let DB = 0; DB < BB.mimeType.length; DB++) GB[DB] = BB.mimeType.charCodeAt(DB);
              const YB = DB.Bd.encode(BB.description ?? ""),
                QB = new Uint8Array(8 + GB.length + 4 + YB.length + 16 + 4 + BB.data.length),
                oB = (0, DB.Gd)(QB);
              oB.setUint32(0, OB, !1), oB.setUint32(4, GB.length, !1), QB.set(GB, 8), oB.setUint32(8 + GB.length, YB.length, !1), QB.set(YB, 12 + GB.length), oB.setUint32(28 + GB.length + YB.length, BB.data.length, !1), QB.set(BB.data, 32 + GB.length + YB.length);
              JB("METADATA_BLOCK_PICTURE", (0, DB.V)(QB))
            }
            break;
          case "raw":
            break;
          default:
            (0, DB.M)(PB)
        }
        if (OB.raw)
          for (const DB in OB.raw) {
            const BB = OB.raw[DB] ?? OB.raw[DB.toLowerCase()];
            if ("vendor" !== DB && null != BB && !yB.includes(DB))
              if ("string" === typeof BB) JB(DB, BB);
              else if (Array.isArray(BB)) {
              if (BB.every((BB => "string" === typeof BB)))
                for (const OB of BB) JB(DB, OB)
            }
          }
        const MB = new Uint8Array(4);
        (0, DB.Gd)(MB).setUint32(0, yB.length, !0), YB.splice(2, 0, MB);
        const zB = YB.reduce(((BB, OB) => BB + OB.length), 0),
          lB = new Uint8Array(zB);
        let pB = 0;
        for (const DB of YB) lB.set(DB, pB), pB += DB.length;
        return lB
      },
      xB = BB => {
        if (BB.length < 7) return null;
        if (11 !== BB[0] || 119 !== BB[1]) return null;
        const OB = new MB.e(BB);
        OB.skipBits(16), OB.skipBits(16);
        const GB = OB.readBits(2);
        if (3 === GB) return null;
        const YB = OB.readBits(6),
          DB = OB.readBits(5);
        if (DB > 8) return null;
        const QB = OB.readBits(3),
          oB = OB.readBits(3);
        0 !== (1 & oB) && 1 !== oB && OB.skipBits(2), 0 !== (4 & oB) && OB.skipBits(2), 2 === oB && OB.skipBits(2);
        return {
          fscod: GB,
          bsid: DB,
          bsmod: QB,
          acmod: oB,
          lfeon: OB.readBits(1),
          bitRateCode: Math.floor(YB / 2)
        }
      },
      tB = new Uint8Array([5, 4, 65, 67, 45, 51]),
      BO = new Uint8Array([5, 4, 69, 65, 67, 51]),
      OO = [1, 2, 3, 6],
      GO = BB => {
        if (BB.length < 6) return null;
        if (11 !== BB[0] || 119 !== BB[1]) return null;
        const OB = new MB.e(BB);
        OB.skipBits(16);
        const GB = OB.readBits(2);
        if (OB.skipBits(3), 0 !== GB && 2 !== GB) return null;
        const YB = OB.readBits(11),
          DB = OB.readBits(2);
        let QB, yB = 0;
        3 === DB ? (yB = OB.readBits(2), QB = 3) : QB = OB.readBits(2);
        const JB = OB.readBits(3),
          PB = OB.readBits(1),
          zB = OB.readBits(5);
        if (zB < 11 || zB > 16) return null;
        const lB = OO[QB];
        let pB;
        pB = DB < 3 ? oB[DB] / 1e3 : jB[yB] / 1e3;
        return {
          dataRate: Math.round((YB + 1) * pB / (16 * lB)),
          substreams: [{
            fscod: DB,
            fscod2: yB,
            bsid: zB,
            bsmod: 0,
            acmod: JB,
            lfeon: PB,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      YO = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      DO = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      QO = [16, 16, 20, 20, 0, 24, 24, 0],
      oO = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      jO = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      yO = [32e3, 44100, 48e3, 0],
      JO = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      MO = [512, 1024, 2048, 4096],
      PO = BB => {
        const OB = zO(BB),
          GB = (0, DB.Gd)(BB);
        let YB = OB ? 4 * Math.ceil(OB.frameSize / 4) : 0,
          QB = null;
        for (; YB + 4 <= BB.length && 1683496997 === GB.getUint32(YB);) {
          const OB = lO(BB.subarray(YB));
          if (!OB) break;
          QB ??= OB, YB += OB.frameSize
        }
        if (OB) return {
          frameSize: QB ? YB : OB.frameSize,
          sampleRate: OB.sampleRate,
          numberOfChannels: OB.numberOfChannels,
          sampleCount: OB.sampleCount,
          channelLayout: OB.channelLayout,
          pcmResolution: OB.pcmResolution,
          bitRate: OB.bitRate,
          core: OB,
          hasExtensions: null !== QB
        };
        if (!QB?.asset) return null;
        const {
          asset: oB
        } = QB;
        return {
          frameSize: YB,
          sampleRate: oB.sampleRate,
          numberOfChannels: oB.numberOfChannels,
          sampleCount: oB.sampleCount,
          channelLayout: oB.channelLayout,
          pcmResolution: oB.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      zO = BB => {
        if (BB.length < 18) return null;
        if (127 !== BB[0] || 254 !== BB[1] || 128 !== BB[2] || 1 !== BB[3]) return null;
        const OB = new MB.e(BB);
        if (OB.skipBits(32), OB.skipBits(1), 31 !== OB.readBits(5)) return null;
        const GB = OB.readBits(1),
          YB = OB.readBits(7) + 1;
        if (YB % 8 !== 0) return null;
        const DB = OB.readBits(14) + 1;
        if (DB < 96) return null;
        const QB = OB.readBits(6);
        if (QB >= oO.length) return null;
        const oB = YO[OB.readBits(4)];
        if (0 === oB) return null;
        const jB = DO[OB.readBits(5)];
        if (0 !== OB.readBits(1)) return null;
        OB.skipBits(4), OB.skipBits(5);
        const yB = OB.readBits(2);
        if (3 === yB) return null;
        OB.skipBits(1), GB && OB.skipBits(16), OB.skipBits(7);
        const JB = QO[OB.readBits(3)];
        if (0 === JB) return null;
        const PB = 0 !== yB;
        return {
          frameSize: DB,
          sampleRate: oB,
          numberOfChannels: oO[QB] + (PB ? 1 : 0),
          sampleCount: 32 * YB,
          channelLayout: jO[QB] | (PB ? 8 : 0),
          amode: QB,
          lfePresent: PB,
          bitRate: jB,
          pcmResolution: JB
        }
      },
      lO = BB => {
        if (BB.length < 10) return null;
        if (100 !== BB[0] || 88 !== BB[1] || 32 !== BB[2] || 37 !== BB[3]) return null;
        const OB = new MB.e(BB);
        OB.skipBits(32), OB.skipBits(8);
        const GB = OB.readBits(2),
          YB = OB.readBits(1),
          QB = 8 + 4 * YB,
          oB = 16 + 4 * YB;
        OB.skipBits(QB);
        const jB = OB.readBits(oB) + 1,
          yB = {
            frameSize: jB,
            asset: null
          };
        if (!OB.readBits(1)) return yB;
        const JB = yO[OB.readBits(2)],
          PB = 512 * (OB.readBits(3) + 1);
        OB.readBits(1) && OB.skipBits(36);
        const zB = OB.readBits(3) + 1,
          lB = OB.readBits(3) + 1,
          pB = [];
        for (let DB = 0; DB < zB; DB++) pB.push(OB.readBits(GB + 1));
        for (const MB of pB) OB.skipBits(8 * (0, DB.Jc)(MB));
        if (OB.readBits(1)) {
          OB.skipBits(2);
          const BB = OB.readBits(2) + 1 << 2,
            GB = OB.readBits(2) + 1;
          OB.skipBits(GB * BB)
        }
        for (let DB = 0; DB < lB; DB++) OB.skipBits(oB);
        OB.skipBits(9), OB.skipBits(3), OB.readBits(1) && OB.skipBits(4), OB.readBits(1) && OB.skipBits(24), OB.readBits(1) && OB.skipBits(8 * (OB.readBits(10) + 1));
        const qB = OB.readBits(5) + 1,
          ZB = JO[OB.readBits(4)],
          NB = OB.readBits(8) + 1;
        let RB = 0;
        if (OB.readBits(1) && (NB > 2 && OB.skipBits(1), NB > 6 && OB.skipBits(1), OB.readBits(1))) {
          const BB = OB.readBits(2) + 1 << 2;
          RB = OB.readBits(BB)
        }
        return 0 === JB || OB.getBitsLeft() < 0 ? yB : {
          frameSize: jB,
          asset: {
            sampleRate: ZB,
            numberOfChannels: NB,
            sampleCount: Math.round(PB * ZB / JB),
            channelLayout: RB,
            pcmResolution: qB
          }
        }
      },
      pO = BB => {
        const OB = new Uint8Array(20),
          GB = (0, DB.Gd)(OB);
        GB.setUint32(0, BB.sampleRate), GB.setUint32(4, BB.bitRate), GB.setUint32(8, BB.bitRate), OB[12] = BB.pcmResolution;
        const YB = BB.core && !BB.hasExtensions ? 1 : 0,
          QB = new MB.e(OB);
        return QB.seekToByte(13), QB.writeBits(2, Math.max(MO.indexOf(BB.sampleCount), 0)), QB.writeBits(5, YB), QB.writeBits(1, BB.core?.lfePresent ? 1 : 0), QB.writeBits(6, BB.core?.amode ?? 0), QB.writeBits(14, BB.core ? BB.core.frameSize - 1 : 0), QB.writeBits(1, 0), QB.writeBits(3, 0), QB.writeBits(16, BB.channelLayout), QB.writeBits(1, 0), QB.writeBits(1, 0), QB.writeBits(1, 0), QB.writeBits(5, 0), OB
      }
  },
  40599: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => WB,
      C: () => SB,
      F: () => VB,
      H: () => AB,
      L: () => uB,
      O: () => KB,
      P: () => dB,
      S: () => kB,
      V: () => XB,
      X: () => wB,
      Y: () => gB,
      e: () => yB,
      f: () => MB,
      g: () => jB,
      k: () => UB,
      n: () => oB,
      q: () => JB,
      t: () => QB,
      u: () => zB,
      y: () => nB
    });
    var YB = GB(40603),
      DB = GB(40574);
    const QB = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      oB = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      jB = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      yB = [...jB, ...oB],
      JB = ["webvtt"],
      MB = [{
        maxMacroblocks: 99,
        maxBitrate: 64e3,
        maxDpbMbs: 396,
        level: 10
      }, {
        maxMacroblocks: 396,
        maxBitrate: 192e3,
        maxDpbMbs: 900,
        level: 11
      }, {
        maxMacroblocks: 396,
        maxBitrate: 384e3,
        maxDpbMbs: 2376,
        level: 12
      }, {
        maxMacroblocks: 396,
        maxBitrate: 768e3,
        maxDpbMbs: 2376,
        level: 13
      }, {
        maxMacroblocks: 396,
        maxBitrate: 2e6,
        maxDpbMbs: 2376,
        level: 20
      }, {
        maxMacroblocks: 792,
        maxBitrate: 4e6,
        maxDpbMbs: 4752,
        level: 21
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 4e6,
        maxDpbMbs: 8100,
        level: 22
      }, {
        maxMacroblocks: 1620,
        maxBitrate: 1e7,
        maxDpbMbs: 8100,
        level: 30
      }, {
        maxMacroblocks: 3600,
        maxBitrate: 14e6,
        maxDpbMbs: 18e3,
        level: 31
      }, {
        maxMacroblocks: 5120,
        maxBitrate: 2e7,
        maxDpbMbs: 20480,
        level: 32
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 2e7,
        maxDpbMbs: 32768,
        level: 40
      }, {
        maxMacroblocks: 8192,
        maxBitrate: 5e7,
        maxDpbMbs: 32768,
        level: 41
      }, {
        maxMacroblocks: 8704,
        maxBitrate: 5e7,
        maxDpbMbs: 34816,
        level: 42
      }, {
        maxMacroblocks: 22080,
        maxBitrate: 135e6,
        maxDpbMbs: 110400,
        level: 50
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 51
      }, {
        maxMacroblocks: 36864,
        maxBitrate: 24e7,
        maxDpbMbs: 184320,
        level: 52
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 24e7,
        maxDpbMbs: 696320,
        level: 60
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 48e7,
        maxDpbMbs: 696320,
        level: 61
      }, {
        maxMacroblocks: 139264,
        maxBitrate: 8e8,
        maxDpbMbs: 696320,
        level: 62
      }],
      PB = [{
        maxPictureSize: 36864,
        maxBitrate: 128e3,
        tier: "L",
        level: 30
      }, {
        maxPictureSize: 122880,
        maxBitrate: 15e5,
        tier: "L",
        level: 60
      }, {
        maxPictureSize: 245760,
        maxBitrate: 3e6,
        tier: "L",
        level: 63
      }, {
        maxPictureSize: 552960,
        maxBitrate: 6e6,
        tier: "L",
        level: 90
      }, {
        maxPictureSize: 983040,
        maxBitrate: 1e7,
        tier: "L",
        level: 93
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 12e6,
        tier: "L",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        tier: "H",
        level: 120
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 2e7,
        tier: "L",
        level: 123
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 5e7,
        tier: "H",
        level: 123
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 25e6,
        tier: "L",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 150
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "L",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 153
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "L",
        level: 156
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 156
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "L",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 180
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 12e7,
        tier: "L",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 183
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "L",
        level: 186
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 186
      }],
      zB = [{
        maxPictureSize: 36864,
        maxBitrate: 2e5,
        level: 10
      }, {
        maxPictureSize: 73728,
        maxBitrate: 8e5,
        level: 11
      }, {
        maxPictureSize: 122880,
        maxBitrate: 18e5,
        level: 20
      }, {
        maxPictureSize: 245760,
        maxBitrate: 36e5,
        level: 21
      }, {
        maxPictureSize: 552960,
        maxBitrate: 72e5,
        level: 30
      }, {
        maxPictureSize: 983040,
        maxBitrate: 12e6,
        level: 31
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 18e6,
        level: 40
      }, {
        maxPictureSize: 2228224,
        maxBitrate: 3e7,
        level: 41
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        level: 50
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 12e7,
        level: 51
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 18e7,
        level: 52
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 18e7,
        level: 60
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        level: 61
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        level: 62
      }],
      lB = [{
        maxPictureSize: 147456,
        maxBitrate: 15e5,
        tier: "M",
        level: 0
      }, {
        maxPictureSize: 278784,
        maxBitrate: 3e6,
        tier: "M",
        level: 1
      }, {
        maxPictureSize: 665856,
        maxBitrate: 6e6,
        tier: "M",
        level: 4
      }, {
        maxPictureSize: 1065024,
        maxBitrate: 1e7,
        tier: "M",
        level: 5
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 12e6,
        tier: "M",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 3e7,
        tier: "H",
        level: 8
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 2e7,
        tier: "M",
        level: 9
      }, {
        maxPictureSize: 2359296,
        maxBitrate: 5e7,
        tier: "H",
        level: 9
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 3e7,
        tier: "M",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 1e8,
        tier: "H",
        level: 12
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 4e7,
        tier: "M",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 16e7,
        tier: "H",
        level: 13
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 6e7,
        tier: "M",
        level: 14
      }, {
        maxPictureSize: 8912896,
        maxBitrate: 24e7,
        tier: "H",
        level: 14
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 15
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 6e7,
        tier: "M",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 24e7,
        tier: "H",
        level: 16
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 1e8,
        tier: "M",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 48e7,
        tier: "H",
        level: 17
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 18
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 16e7,
        tier: "M",
        level: 19
      }, {
        maxPictureSize: 35651584,
        maxBitrate: 8e8,
        tier: "H",
        level: 19
      }],
      pB = ".01.01.01.01.00",
      qB = ".0.110.01.01.01.0",
      ZB = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      NB = ["dtsc", "dtsh", "dtsl", "dtse"],
      RB = [{
        fourCc: "apco",
        bitrate: 45e6,
        alpha: !1
      }, {
        fourCc: "apcs",
        bitrate: 102e6,
        alpha: !1
      }, {
        fourCc: "apcn",
        bitrate: 147e6,
        alpha: !1
      }, {
        fourCc: "apch",
        bitrate: 22e7,
        alpha: !1
      }, {
        fourCc: "ap4h",
        bitrate: 33e7,
        alpha: !0
      }, {
        fourCc: "ap4x",
        bitrate: 5e8,
        alpha: !0
      }],
      WB = (BB, OB, GB, YB, QB) => {
        if ("avc" === BB) {
          const BB = 100,
            QB = Math.ceil(OB / 16) * Math.ceil(GB / 16),
            oB = MB.find((BB => QB <= BB.maxMacroblocks && YB <= BB.maxBitrate)) ?? (0, DB.sc)(MB),
            jB = oB ? oB.level : 0;
          return `avc1.${BB.toString(16).padStart(2,"0")}${"00"}${jB.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === BB) {
          const BB = "",
            QB = 1,
            oB = "6",
            jB = OB * GB,
            yB = PB.find((BB => jB <= BB.maxPictureSize && YB <= BB.maxBitrate)) ?? (0, DB.sc)(PB),
            JB = "B0";
          return `hev1.${BB}${QB}.${oB}.${yB.tier}${yB.level}.${JB}`
        }
        if ("vp8" === BB) return "vp8";
        if ("vp9" === BB) {
          const BB = OB * GB,
            QB = "08";
          return `vp09.${"00"}.${(zB.find((OB=>BB<=OB.maxPictureSize&&YB<=OB.maxBitrate))??(0,DB.sc)(zB)).level.toString().padStart(2,"0")}.${QB}`
        }
        if ("av1" === BB) {
          const BB = 0,
            QB = OB * GB,
            oB = lB.find((BB => QB <= BB.maxPictureSize && YB <= BB.maxBitrate)) ?? (0, DB.sc)(lB),
            jB = "08";
          return `av01.${BB}.${oB.level.toString().padStart(2,"0")}${oB.tier}.${jB}`
        }
        if ("prores" === BB) {
          const BB = 2073600,
            DB = Math.pow(OB * GB / BB, .95),
            oB = RB.filter((BB => BB.alpha === QB));
          let jB = oB[0].fourCc,
            yB = 1 / 0;
          for (const {
              fourCc: OB,
              bitrate: GB
            }
            of oB) {
            const BB = Math.abs(GB * DB - YB);
            BB < yB && (yB = BB, jB = OB)
          }
          return jB
        }
        throw (0, DB.M)(BB), new TypeError(`Unhandled codec '${String(BB)}'.`)
      },
      AB = BB => {
        const OB = BB.split(".");
        return [1, 1, Number(OB[1]), 2, 1, Number(OB[2]), 3, 1, Number(OB[3]), 4, 1, OB[4] ? Number(OB[4]) : 1]
      },
      VB = BB => {
        const OB = BB.split("."),
          GB = Number(OB[1]),
          YB = OB[2],
          DB = (GB << 5) + Number(YB.slice(0, -1)),
          QB = "H" === YB.slice(-1) ? 1 : 0,
          oB = Number(OB[3]);
        return [129, DB, (QB << 7) + ((8 === oB ? 0 : 1) << 6) + ((12 === oB ? 1 : 0) << 5) + ((OB[4] ? Number(OB[4]) : 0) << 4) + ((OB[5] ? Number(OB[5][0]) : 1) << 3) + ((OB[5] ? Number(OB[5][1]) : 1) << 2) + (OB[5] ? Number(OB[5][2]) : 0), 0]
      },
      SB = BB => {
        const {
          codec: OB,
          codecDescription: GB,
          colorSpace: QB,
          avcCodecInfo: oB,
          hevcCodecInfo: jB,
          vp9CodecInfo: yB,
          av1CodecInfo: JB,
          proresFormat: MB
        } = BB;
        if ("avc" === OB) {
          if ((0, DB.Q)(null !== BB.avcType), oB) {
            const OB = new Uint8Array([oB.avcProfileIndication, oB.profileCompatibility, oB.avcLevelIndication]);
            return `avc${BB.avcType}.${(0,DB.X)(OB)}`
          }
          if (!GB || GB.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${BB.avcType}.${(0,DB.X)(GB.subarray(1,4))}`
        }
        if ("hevc" === OB) {
          let BB, OB, YB, QB, oB, yB;
          if (jB) BB = jB.generalProfileSpace, OB = jB.generalProfileIdc, YB = (0, DB.Xc)(jB.generalProfileCompatibilityFlags), QB = jB.generalTierFlag, oB = jB.generalLevelIdc, yB = [...jB.generalConstraintIndicatorFlags];
          else {
            if (!GB || GB.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const jB = (0, DB.Gd)(GB),
              JB = jB.getUint8(1);
            BB = JB >> 6 & 3, OB = 31 & JB, YB = (0, DB.Xc)(jB.getUint32(2)), QB = JB >> 5 & 1, oB = jB.getUint8(12), yB = [];
            for (let BB = 0; BB < 6; BB++) yB.push(jB.getUint8(6 + BB))
          }
          let JB = "hev1.";
          for (JB += ["", "A", "B", "C"][BB] + OB, JB += ".", JB += YB.toString(16).toUpperCase(), JB += ".", JB += 0 === QB ? "L" : "H", JB += oB; yB.length > 0 && 0 === yB[yB.length - 1];) yB.pop();
          return yB.length > 0 && (JB += ".", JB += yB.map((BB => BB.toString(16).toUpperCase())).join(".")), JB
        }
        if ("vp8" === OB) return "vp8";
        if ("vp9" === OB) {
          if (!yB) {
            const OB = BB.width * BB.height;
            let GB = (0, DB.sc)(zB).level;
            for (const BB of zB)
              if (OB <= BB.maxPictureSize) {
                GB = BB.level;
                break
              } return `vp09.00.${GB.toString().padStart(2,"0")}.08`
          }
          let OB = `vp09.${yB.profile.toString().padStart(2,"0")}.${yB.level.toString().padStart(2,"0")}.${yB.bitDepth.toString().padStart(2,"0")}.${yB.chromaSubsampling.toString().padStart(2,"0")}`;
          return OB += `.${yB.colourPrimaries.toString().padStart(2,"0")}.${yB.transferCharacteristics.toString().padStart(2,"0")}.${yB.matrixCoefficients.toString().padStart(2,"0")}.${yB.videoFullRangeFlag.toString().padStart(2,"0")}`, OB.endsWith(pB) && (OB = OB.slice(0, -15)), OB
        }
        if ("av1" === OB) {
          if (!JB) {
            const OB = BB.width * BB.height;
            let GB = (0, DB.sc)(zB).level;
            for (const BB of zB)
              if (OB <= BB.maxPictureSize) {
                GB = BB.level;
                break
              } return `av01.0.${GB.toString().padStart(2,"0")}M.08`
          }
          const OB = JB.profile,
            GB = JB.level.toString().padStart(2, "0"),
            oB = JB.tier ? "H" : "M",
            jB = JB.bitDepth.toString().padStart(2, "0"),
            yB = JB.monochrome ? "1" : "0",
            MB = 100 * JB.chromaSubsamplingX + 10 * JB.chromaSubsamplingY + 1 * (JB.chromaSubsamplingX && JB.chromaSubsamplingY ? JB.chromaSamplePosition : 0);
          let PB, lB, pB, ZB;
          (0, YB.p)(JB) ? (PB = JB.colourPrimaries, lB = JB.transferCharacteristics, pB = JB.matrixCoefficients, ZB = JB.videoFullRangeFlag) : (PB = QB?.primaries ? DB.g[QB.primaries] : 1, lB = QB?.transfer ? DB.z[QB.transfer] : 1, pB = QB?.matrix ? DB.r[QB.matrix] : 1, ZB = QB?.fullRange ? 1 : 0);
          let NB = `av01.${OB}.${GB}${oB}.${jB}`;
          return NB += `.${yB}.${MB.toString().padStart(3,"0")}`, NB += `.${PB.toString().padStart(2,"0")}`, NB += `.${lB.toString().padStart(2,"0")}`, NB += `.${pB.toString().padStart(2,"0")}`, NB += `.${ZB}`, NB.endsWith(qB) && (NB = NB.slice(0, -17)), NB
        }
        if ("prores" === OB) return MB ?? "apch";
        throw null !== OB && (0, DB.M)(OB), new TypeError(`Unhandled codec '${OB}'.`)
      },
      nB = (BB, OB, GB) => {
        if ("aac" === BB) return OB >= 2 && GB <= 24e3 ? "mp4a.40.29" : GB <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === BB) return "mp3";
        if ("opus" === BB) return "opus";
        if ("vorbis" === BB) return "vorbis";
        if ("flac" === BB) return "flac";
        if ("ac3" === BB) return "ac-3";
        if ("eac3" === BB) return "ec-3";
        if ("dts" === BB) return "dtsc";
        if (oB.includes(BB)) return BB;
        throw new TypeError(`Unhandled codec '${BB}'.`)
      },
      UB = 48e3,
      fB = /^pcm-([usf])(\d+)(be)?$/,
      kB = BB => {
        if ((0, DB.Q)(oB.includes(BB)), "ulaw" === BB) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === BB) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const OB = fB.exec(BB);
        let GB;
        (0, DB.Q)(OB), GB = "u" === OB[1] ? "unsigned" : "s" === OB[1] ? "signed" : "float";
        return {
          dataType: GB,
          sampleSize: Number(OB[2]) / 8,
          littleEndian: "be" !== OB[3],
          silentValue: "pcm-u8" === BB ? 128 : 0
        }
      },
      dB = BB => BB.startsWith("avc1") || BB.startsWith("avc3") ? "avc" : BB.startsWith("hev1") || BB.startsWith("hvc1") ? "hevc" : "vp8" === BB ? "vp8" : BB.startsWith("vp09") ? "vp9" : BB.startsWith("av01") ? "av1" : ZB.includes(BB) ? "prores" : "mp3" === BB || "mp4a.69" === BB || "mp4a.6B" === BB || "mp4a.6b" === BB || "mp4a.40.34" === BB ? "mp3" : BB.startsWith("mp4a.40.") || "mp4a.67" === BB ? "aac" : "opus" === BB || "Opus" === BB ? "opus" : "vorbis" === BB ? "vorbis" : "flac" === BB ? "flac" : "ac-3" === BB || "ac3" === BB ? "ac3" : "ec-3" === BB || "eac3" === BB ? "eac3" : NB.includes(BB) ? "dts" : "ulaw" === BB ? "ulaw" : "alaw" === BB ? "alaw" : fB.test(BB) ? BB : "webvtt" === BB ? "webvtt" : null,
      KB = BB => "avc" === BB ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === BB ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      uB = BB => "aac" === BB ? {
        aac: {
          format: "aac"
        }
      } : "opus" === BB ? {
        opus: {
          format: "opus"
        }
      } : {},
      mB = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...ZB],
      IB = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      FB = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      iB = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      LB = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      gB = (BB, OB) => {
        if (!BB) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof BB) throw new TypeError("Video chunk metadata must be an object.");
        if (!BB.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof BB.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof BB.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!mB.some((OB => BB.decoderConfig.codec.startsWith(OB)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(BB.decoderConfig.codedWidth) || BB.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(BB.decoderConfig.codedHeight) || BB.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== BB.decoderConfig.displayAspectWidth && (!Number.isInteger(BB.decoderConfig.displayAspectWidth) || BB.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== BB.decoderConfig.displayAspectHeight && (!Number.isInteger(BB.decoderConfig.displayAspectHeight) || BB.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== BB.decoderConfig.displayAspectWidth !== (void 0 !== BB.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== BB.decoderConfig.description && !(0, DB.Gb)(BB.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== BB.decoderConfig.colorSpace) {
          const {
            colorSpace: OB
          } = BB.decoderConfig;
          if ("object" !== typeof OB) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const GB = Object.keys(DB.g);
          if (null != OB.primaries && !GB.includes(OB.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${GB.join(", ")}.`);
          const YB = Object.keys(DB.z);
          if (null != OB.transfer && !YB.includes(OB.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${YB.join(", ")}.`);
          const QB = Object.keys(DB.r);
          if (null != OB.matrix && !QB.includes(OB.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${QB.join(", ")}.`);
          if (null != OB.fullRange && "boolean" !== typeof OB.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (BB.decoderConfig.codec.startsWith("avc1") || BB.decoderConfig.codec.startsWith("avc3")) {
          if (!IB.test(BB.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (BB.decoderConfig.codec.startsWith("hev1") || BB.decoderConfig.codec.startsWith("hvc1")) {
          if (!FB.test(BB.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (BB.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== BB.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (BB.decoderConfig.codec.startsWith("vp09")) {
          if (!iB.test(BB.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (BB.decoderConfig.codec.startsWith("av01")) {
          if (!LB.test(BB.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (ZB.some((OB => BB.decoderConfig.codec.startsWith(OB))) && !ZB.some((OB => BB.decoderConfig.codec === OB))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${ZB.join(", ")}.`);
        if (null !== OB && dB(BB.decoderConfig.codec) !== OB) throw new TypeError(`Video chunk metadata decoder configuration codec string '${BB.decoderConfig.codec}' does not fit to the track codec '${OB}'.`)
      },
      rB = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      XB = (BB, OB) => {
        if (!BB) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof BB) throw new TypeError("Audio chunk metadata must be an object.");
        if (!BB.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof BB.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof BB.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!rB.some((OB => BB.decoderConfig.codec.startsWith(OB)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(BB.decoderConfig.sampleRate) || BB.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(BB.decoderConfig.numberOfChannels) || BB.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== BB.decoderConfig.description && !(0, DB.Gb)(BB.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (BB.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== BB.decoderConfig.codec && "mp4a.6B" !== BB.decoderConfig.codec && "mp4a.6b" !== BB.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(BB.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (BB.decoderConfig.codec.startsWith("mp3") || BB.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== BB.decoderConfig.codec && "mp4a.69" !== BB.decoderConfig.codec && "mp4a.6B" !== BB.decoderConfig.codec && "mp4a.6b" !== BB.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (BB.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== BB.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (BB.decoderConfig.description && BB.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (BB.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== BB.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!BB.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (BB.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== BB.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const OB = 42;
          if (!BB.decoderConfig.description || BB.decoderConfig.description.byteLength < OB) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (BB.decoderConfig.codec.startsWith("ac-3") || BB.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== BB.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (BB.decoderConfig.codec.startsWith("ec-3") || BB.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== BB.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (BB.decoderConfig.codec.startsWith("dts")) {
          if (!NB.includes(BB.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${NB.join(", ")}.`)
        } else if ((BB.decoderConfig.codec.startsWith("pcm") || BB.decoderConfig.codec.startsWith("ulaw") || BB.decoderConfig.codec.startsWith("alaw")) && !oB.includes(BB.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${oB.join(", ")}).`);
        if (null !== OB && dB(BB.decoderConfig.codec) !== OB) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${BB.decoderConfig.codec}' does not fit to the track codec '${OB}'.`)
      },
      wB = BB => {
        if (!BB) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof BB) throw new TypeError("Subtitle metadata must be an object.");
        if (!BB.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof BB.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof BB.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  40657: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      g: () => PB,
      j: () => NB,
      l: () => yB,
      p: () => RB,
      t: () => JB,
      w: () => oB
    });
    var YB = GB(40599),
      DB = GB(40574),
      QB = GB(40660);
    new Map, new Map;
    const oB = BB => {
        if (!BB || "object" !== typeof BB) throw new TypeError("Encoding config must be an object.");
        if (!YB.t.includes(BB.codec)) throw new TypeError(`Invalid video codec '${BB.codec}'. Must be one of: ${YB.t.join(", ")}.`);
        const OB = BB.bitrate;
        if (void 0 === BB.quality && void 0 === OB) throw new TypeError("config.quality must be provided.");
        if (void 0 !== BB.quality && void 0 !== OB) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== BB.quality && !(BB.quality instanceof zB)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== OB && !(OB instanceof zB) && (!Number.isInteger(OB) || OB <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== BB.keyFrameInterval && (!Number.isFinite(BB.keyFrameInterval) || BB.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== BB.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(BB.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== BB.transform) {
          if ("object" !== typeof BB.transform || !BB.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== BB.transform.width && (!Number.isInteger(BB.transform.width) || BB.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== BB.transform.height && (!Number.isInteger(BB.transform.height) || BB.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== BB.transform.fit && !["fill", "contain", "cover"].includes(BB.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== BB.transform.width && void 0 !== BB.transform.height && void 0 === BB.transform.fit && !["fill", "contain", "cover"].includes(BB.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== BB.transform.fit && ["fill", "contain", "cover"].includes(BB.sizeChangeBehavior) && BB.transform.fit !== BB.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== BB.transform.rotate && ![0, 90, 180, 270].includes(BB.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== BB.transform.flip && "boolean" !== typeof BB.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== BB.transform.crop && (0, QB.m)(BB.transform.crop, "config.transform."), void 0 !== BB.transform.process && "function" !== typeof BB.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== BB.transform.frameRate && (!Number.isFinite(BB.transform.frameRate) || BB.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== BB.transform.force && "boolean" !== typeof BB.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== BB.onEncodedPacket && "function" !== typeof BB.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== BB.onEncoderConfig && "function" !== typeof BB.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== BB.onEncodedSample && "function" !== typeof BB.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        jB(BB.codec, BB)
      },
      jB = (BB, OB) => {
        if (!OB || "object" !== typeof OB) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== OB.alpha && !["discard", "keep"].includes(OB.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const GB = OB.bitrateMode;
        if (void 0 !== GB && !["constant", "variable"].includes(GB)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== OB.latencyMode && !["quality", "realtime"].includes(OB.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== OB.fullCodecString && "string" !== typeof OB.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== OB.fullCodecString && (0, YB.P)(OB.fullCodecString) !== BB) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${BB}).`);
        if (void 0 !== OB.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(OB.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== OB.scalabilityMode && "string" !== typeof OB.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== OB.contentHint && "string" !== typeof OB.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      yB = BB => {
        const OB = BB.bitrateMode,
          GB = BB.quality._toVideoRateControl(BB.codec, BB.width, BB.height, OB),
          QB = (OB, GB, DB) => ({
            codec: BB.fullCodecString ?? (0, YB.A)(BB.codec, BB.width, BB.height, DB, "keep" === BB.alpha),
            width: BB.width,
            height: BB.height,
            displayWidth: BB.squarePixelWidth,
            displayHeight: BB.squarePixelHeight,
            bitrate: OB,
            bitrateMode: GB,
            alpha: BB.alpha ?? "discard",
            framerate: BB.framerate,
            latencyMode: BB.latencyMode,
            hardwareAcceleration: BB.hardwareAcceleration,
            scalabilityMode: BB.scalabilityMode,
            contentHint: BB.contentHint,
            ...(0, YB.O)(BB.codec)
          }),
          oB = [];
        return null !== GB.quantizer && oB.push({
          config: QB(void 0, "quantizer", GB.bitrate),
          quantizer: GB.quantizer
        }), "quantizer" !== GB.bitrateMode && oB.push({
          config: QB(GB.bitrate, GB.bitrateMode, GB.bitrate),
          quantizer: null
        }), (0, DB.Q)(oB.length > 0), oB
      },
      JB = BB => {
        if (!BB || "object" !== typeof BB) throw new TypeError("Encoding config must be an object.");
        if (!YB.e.includes(BB.codec)) throw new TypeError(`Invalid audio codec '${BB.codec}'. Must be one of: ${YB.e.join(", ")}.`);
        const OB = BB.bitrate;
        if (void 0 === BB.quality && void 0 === OB && !YB.n.includes(BB.codec) && "flac" !== BB.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== BB.quality && void 0 !== OB) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== BB.quality && !(BB.quality instanceof zB)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== OB && !(OB instanceof zB) && (!Number.isInteger(OB) || OB <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== BB.transform) {
          if ("object" !== typeof BB.transform || !BB.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== BB.transform.numberOfChannels && (!Number.isInteger(BB.transform.numberOfChannels) || BB.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== BB.transform.sampleRate && (!Number.isInteger(BB.transform.sampleRate) || BB.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== BB.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(BB.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== BB.transform.process && "function" !== typeof BB.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== BB.onEncodedPacket && "function" !== typeof BB.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== BB.onEncoderConfig && "function" !== typeof BB.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== BB.onEncodedSample && "function" !== typeof BB.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        MB(BB.codec, BB)
      },
      MB = (BB, OB) => {
        if (!OB || "object" !== typeof OB) throw new TypeError("Encoding options must be an object.");
        const GB = OB.bitrateMode;
        if (void 0 !== GB && !["constant", "variable"].includes(GB)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== OB.fullCodecString && "string" !== typeof OB.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== OB.fullCodecString && (0, YB.P)(OB.fullCodecString) !== BB) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${BB}).`)
      },
      PB = BB => {
        const OB = BB.bitrateMode;
        return {
          codec: BB.fullCodecString ?? (0, YB.y)(BB.codec, BB.numberOfChannels, BB.sampleRate),
          numberOfChannels: BB.numberOfChannels,
          sampleRate: BB.sampleRate,
          bitrate: BB.quality?._toAudioBitrate(BB.codec),
          bitrateMode: BB.quality?._bitrateMode ?? OB,
          ...(0, YB.L)(BB.codec)
        }
      };
    class zB {
      constructor(BB) {
        if ("number" !== typeof BB && "string" !== typeof BB || (BB = {
            quality: BB
          }), !BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
        if (void 0 !== BB.bitrateMode && !["constant", "variable"].includes(BB.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in BB) {
          if ("string" === typeof BB.quality ? !(BB.quality in lB) : "number" !== typeof BB.quality || Number.isNaN(BB.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== BB.preferBitrate && "boolean" !== typeof BB.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in BB || "quantizer" in BB) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof BB.quality ? lB[BB.quality] : BB.quality, this._preferBitrate = BB.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== BB.bitrate && (!Number.isInteger(BB.bitrate) || BB.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== BB.quantizer && (!Number.isInteger(BB.quantizer) || BB.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === BB.bitrate && void 0 === BB.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in BB) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = BB.bitrate, this._quantizer = BB.quantizer
        }
        this._bitrateMode = BB.bitrateMode
      }
      _toVideoRateControl(BB, OB, GB, YB) {
        const QB = pB[BB];
        let oB, jB = null,
          yB = this._bitrateMode ?? YB ?? "variable";
        if (void 0 !== this._quantizer) {
          if (QB)
            if (this._quantizer < QB.min || this._quantizer > QB.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${BB}'; must be between ${QB.min} and ${QB.max}.`)
            } else jB = this._quantizer, void 0 === this._bitrate && (yB = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${BB}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && QB && !this._preferBitrate && ((0, DB.Q)(void 0 !== this._quality), jB = (0, DB.cb)(Math.round((0, DB.vc)(QB.worst, QB.best, this._quality)), QB.min, QB.max));
        if (void 0 !== this._bitrate) oB = this._bitrate;
        else {
          let YB = this._quality;
          void 0 === YB && ((0, DB.Q)(null !== jB && QB), YB = (0, DB.cb)((jB - QB.worst) / (QB.best - QB.worst), 0, 1)), oB = ZB(BB, OB, GB, qB(YB))
        }
        return {
          quantizer: jB,
          bitrate: oB,
          bitrateMode: yB
        }
      }
      _toVideoBitrate(BB, OB, GB) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, DB.Q)(void 0 !== this._quality), ZB(BB, OB, GB, qB(this._quality)))
      }
      _toAudioBitrate(BB) {
        if (YB.n.includes(BB) || "flac" === BB) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const OB = qB(this._quality),
          GB = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [BB];
        if (!GB) throw new Error(`Unhandled codec: ${BB}`);
        let DB = GB * OB;
        if ("aac" === BB) {
          DB = [96e3, 128e3, 16e4, 192e3].reduce(((BB, OB) => Math.abs(OB - DB) < Math.abs(BB - DB) ? OB : BB))
        } else if ("opus" === BB || "vorbis" === BB) DB = Math.max(6e3, DB);
        else if ("mp3" === BB) {
          DB = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((BB, OB) => Math.abs(OB - DB) < Math.abs(BB - DB) ? OB : BB))
        }
        return 1e3 * Math.round(DB / 1e3)
      }
    }
    const lB = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      pB = {
        avc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        hevc: {
          min: 0,
          max: 51,
          worst: 41,
          best: 16
        },
        vp9: {
          min: 0,
          max: 63,
          worst: 52,
          best: 20
        },
        av1: {
          min: 0,
          max: 255,
          worst: 208,
          best: 80
        }
      },
      qB = BB => .3 * Math.exp(2.5538 * BB),
      ZB = (BB, OB, GB, YB) => {
        const DB = OB * GB,
          QB = 3e6,
          oB = QB * Math.pow(DB / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [BB] * YB;
        return 1e3 * Math.ceil(oB / 1e3)
      },
      NB = (BB, OB) => "avc" === BB ? {
        avc: {
          quantizer: OB
        }
      } : "hevc" === BB ? {
        hevc: {
          quantizer: OB
        }
      } : "vp9" === BB ? {
        vp9: {
          quantizer: OB
        }
      } : "av1" === BB ? {
        av1: {
          quantizer: OB
        }
      } : void(0, DB.Q)(!1),
      RB = (BB, OB) => void 0 !== BB ? BB : void 0 !== OB ? OB instanceof zB ? OB : new zB({
        bitrate: OB
      }) : void 0
  },
  40610: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB, DB = GB(40574);
    ! function(BB) {
      BB[BB.Silent = 0] = "Silent", BB[BB.Errors = 1] = "Errors", BB[BB.Warnings = 2] = "Warnings", BB[BB.Info = 3] = "Info"
    }(YB || (YB = {}));
    class QB {
      constructor() {}
      static get level() {
        return QB._level
      }
      static set level(BB) {
        if (BB !== YB.Silent && BB !== YB.Errors && BB !== YB.Warnings && BB !== YB.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        QB._level = BB
      }
      static get _emitter() {
        return QB._emitterInstance ??= new DB.m
      }
      static on(BB, OB, GB) {
        return QB._emitter.on(BB, OB, GB)
      }
      static _error() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        QB._emitter._emit("error", OB), QB._level >= YB.Errors && console.error(...OB)
      }
      static _warn() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        QB._emitter._emit("warn", OB), QB._level >= YB.Warnings && console.warn(...OB)
      }
      static _info() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        QB._emitter._emit("info", OB), QB._level >= YB.Info && console.info(...OB)
      }
    }
    QB._level = YB.Info, QB._emitterInstance = null
  },
  40669: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB,
      e: () => MB,
      i: () => yB,
      l: () => PB,
      m: () => oB
    });
    GB(40591);
    var YB = GB(40599);
    GB(40574), GB(40627);
    var DB = GB(40650);
    GB(40660), GB(40657);
    GB(40603), GB(40610), "function" === typeof SuppressedError && SuppressedError;
    class QB {
      constructor() {
        this._connectedTrack = null, this._closingPromise = null, this._closed = !1, this._nominalBitrate = null
      }
      _ensureValidAdd() {
        if (!this._connectedTrack) throw new Error("Source is not connected to an output track.");
        if ("canceled" === this._connectedTrack.output.state) throw new Error("Output has been canceled.");
        if ("finalizing" === this._connectedTrack.output.state || "finalized" === this._connectedTrack.output.state) throw new Error("Output has been finalized.");
        if ("pending" === this._connectedTrack.output.state) throw new Error("Output has not started.");
        if (this._closed) throw new Error("Source is closed.")
      }
      async _start() {}
      async _flushAndClose(BB) {}
      close() {
        if (this._closingPromise) return;
        const BB = this._connectedTrack;
        if (!BB) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === BB.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== BB.output.state && "finalized" !== BB.output.state && BB.output._muxer.onTrackClose(BB)
        })()
      }
      async _flushOrWaitForOngoingClose(BB) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(BB), this._closed = !0
        })()
      }
    }
    class oB extends QB {
      constructor(BB) {
        if (super(), !YB.t.includes(BB)) throw new TypeError(`Invalid video codec '${BB}'. Must be one of: ${YB.t.join(", ")}.`);
        this._codec = BB
      }
    }
    const jB = (BB, OB) => {
      if (BB.metadata.hasOnlyKeyPackets && "key" !== OB.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class yB extends oB {
      constructor(BB) {
        super(BB)
      }
      add(BB, OB) {
        if (!(BB instanceof DB.d)) throw new TypeError("packet must be an EncodedPacket.");
        if (BB.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== OB && (!OB || "object" !== typeof OB)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), jB(this._connectedTrack, BB), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, BB, OB)
      }
    }
    class JB extends QB {
      constructor(BB) {
        if (super(), !YB.e.includes(BB)) throw new TypeError(`Invalid audio codec '${BB}'. Must be one of: ${YB.e.join(", ")}.`);
        this._codec = BB
      }
    }
    class MB extends JB {
      constructor(BB) {
        super(BB)
      }
      add(BB, OB) {
        if (!(BB instanceof DB.d)) throw new TypeError("packet must be an EncodedPacket.");
        if (BB.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== OB && (!OB || "object" !== typeof OB)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, BB, OB)
      }
    }
    class PB extends QB {
      constructor(BB) {
        if (super(), !YB.q.includes(BB)) throw new TypeError(`Invalid subtitle codec '${BB}'. Must be one of: ${YB.q.join(", ")}.`);
        this._codec = BB
      }
    }
  },
  40581: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      f: () => yB,
      h: () => DB,
      l: () => jB,
      n: () => oB,
      p: () => JB
    });
    var YB = GB(40574);
    class DB {
      constructor(BB, OB) {
        if (this.data = BB, this.mimeType = OB, !(BB instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof OB) throw new TypeError("mimeType must be a string.")
      }
    }
    class QB {
      constructor(BB, OB, GB, YB) {
        if (this.data = BB, this.mimeType = OB, this.name = GB, this.description = YB, !(BB instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== OB && "string" !== typeof OB) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== GB && "string" !== typeof GB) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== YB && "string" !== typeof YB) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const oB = BB => {
        if (!BB || "object" !== typeof BB) throw new TypeError("tags must be an object.");
        if (void 0 !== BB.title && "string" !== typeof BB.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== BB.description && "string" !== typeof BB.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== BB.artist && "string" !== typeof BB.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== BB.album && "string" !== typeof BB.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== BB.albumArtist && "string" !== typeof BB.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== BB.trackNumber && (!Number.isInteger(BB.trackNumber) || BB.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== BB.tracksTotal && (!Number.isInteger(BB.tracksTotal) || BB.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== BB.discNumber && (!Number.isInteger(BB.discNumber) || BB.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== BB.discsTotal && (!Number.isInteger(BB.discsTotal) || BB.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== BB.genre && "string" !== typeof BB.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== BB.date && (!(BB.date instanceof Date) || Number.isNaN(BB.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== BB.beatsPerMinute && (!Number.isInteger(BB.beatsPerMinute) || BB.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== BB.lyrics && "string" !== typeof BB.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== BB.images) {
          if (!Array.isArray(BB.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const OB of BB.images) {
            if (!OB || "object" !== typeof OB) throw new TypeError("Each image in tags.images must be an object.");
            if (!(OB.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof OB.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(OB.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== BB.comment && "string" !== typeof BB.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== BB.raw) {
          if (!BB.raw || "object" !== typeof BB.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const OB of Object.values(BB.raw))
            if (null !== OB && "string" !== typeof OB && (!Array.isArray(OB) || !OB.every((BB => "string" === typeof BB))) && !(OB instanceof Uint8Array) && !(OB instanceof DB) && !(OB instanceof QB) && !(0, YB.ec)(OB)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      jB = BB => void 0 === BB.title && void 0 === BB.description && void 0 === BB.artist && void 0 === BB.album && void 0 === BB.albumArtist && void 0 === BB.trackNumber && void 0 === BB.tracksTotal && void 0 === BB.discNumber && void 0 === BB.discsTotal && void 0 === BB.genre && void 0 === BB.beatsPerMinute && void 0 === BB.date && void 0 === BB.lyrics && (!BB.images || 0 === BB.images.length) && void 0 === BB.comment && (void 0 === BB.raw || 0 === Object.keys(BB.raw).length),
      yB = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      JB = BB => {
        if (!BB || "object" !== typeof BB) throw new TypeError("disposition must be an object.");
        if (void 0 !== BB.default && "boolean" !== typeof BB.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== BB.primary && "boolean" !== typeof BB.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== BB.forced && "boolean" !== typeof BB.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== BB.original && "boolean" !== typeof BB.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== BB.commentary && "boolean" !== typeof BB.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== BB.hearingImpaired && "boolean" !== typeof BB.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== BB.visuallyImpaired && "boolean" !== typeof BB.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  40574: (BB, OB, GB) => {
    function YB(BB) {
      if (!BB) throw new Error("Assertion failed.")
    }
    GB.d(OB, {
      Ab: () => hB,
      Bb: () => BO,
      Bd: () => dB,
      C: () => fB,
      Cc: () => HB,
      D: () => vB,
      Eb: () => WO,
      Ec: () => pB,
      F: () => kO,
      Fc: () => oB,
      Fd: () => EO,
      Gb: () => iB,
      Gc: () => SO,
      Gd: () => nB,
      Id: () => SB,
      J: () => fO,
      Jc: () => OO,
      Kb: () => zO,
      Ld: () => VO,
      M: () => cB,
      Nb: () => pO,
      Nc: () => wB,
      Pd: () => KO,
      Q: () => YB,
      Qc: () => WB,
      Qd: () => wO,
      Rb: () => MO,
      Sd: () => VB,
      U: () => XB,
      Ub: () => YO,
      Uc: () => AB,
      V: () => AO,
      X: () => gB,
      Xc: () => rB,
      Yb: () => KB,
      Yc: () => PB,
      Zb: () => RB,
      _: () => yB,
      _c: () => xB,
      ac: () => nO,
      cb: () => bB,
      cd: () => sB,
      d: () => LB,
      ec: () => hO,
      fd: () => lB,
      g: () => uB,
      gb: () => XO,
      gc: () => ZO,
      hd: () => rO,
      j: () => oO,
      kb: () => NO,
      kc: () => NB,
      lc: () => yO,
      ld: () => eB,
      m: () => cO,
      mb: () => FB,
      oc: () => UO,
      od: () => TB,
      p: () => jB,
      qb: () => qB,
      r: () => IB,
      rc: () => RO,
      s: () => QB,
      sc: () => ZB,
      sd: () => aB,
      ub: () => QO,
      vb: () => JB,
      vc: () => CB,
      vd: () => dO,
      w: () => DO,
      yb: () => EB,
      z: () => mB,
      zb: () => tB,
      zc: () => lO,
      zd: () => kB
    });
    const DB = Math.PI / 180,
      QB = 180 / Math.PI,
      oB = BB => {
        const OB = (BB % 360 + 360) % 360;
        if (0 === OB || 90 === OB || 180 === OB || 270 === OB) return OB;
        throw new Error(`Invalid rotation ${BB}.`)
      },
      jB = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      yB = (BB, OB, GB) => {
        const [YB, DB, , QB, oB] = BB, jB = Math.abs(YB) * OB + Math.abs(QB) * GB, yB = Math.abs(DB) * OB + Math.abs(oB) * GB;
        return pB(pB(zB(-OB / 2, -GB / 2), BB), zB(jB / 2, yB / 2))
      },
      JB = BB => {
        const [OB, GB] = BB, YB = Math.atan2(GB, MB(BB) ? -OB : OB);
        return oB(sB(YB * QB, 90))
      },
      MB = BB => {
        const [OB, GB, , YB, DB] = BB;
        return OB * DB - GB * YB < 0
      },
      PB = BB => {
        const OB = BB * DB,
          GB = Math.round(Math.cos(OB)),
          YB = Math.round(Math.sin(OB));
        return [GB, YB, 0, -YB, GB, 0, 0, 0, 1]
      },
      zB = (BB, OB) => [1, 0, 0, 0, 1, 0, BB, OB, 1],
      lB = (BB, OB) => [BB, 0, 0, 0, OB, 0, 0, 0, 1],
      pB = (BB, OB) => {
        const GB = new Array(9);
        for (let YB = 0; YB < 3; YB++)
          for (let DB = 0; DB < 3; DB++) GB[3 * YB + DB] = BB[3 * YB] * OB[DB] + BB[3 * YB + 1] * OB[3 + DB] + BB[3 * YB + 2] * OB[6 + DB];
        return GB
      },
      qB = (BB, OB, GB, YB) => ({
        rotation: oB(BB + (OB ? -GB : GB)),
        flip: OB !== YB
      }),
      ZB = BB => BB && BB[BB.length - 1],
      NB = BB => BB >= 0 && BB < 2 ** 32,
      RB = BB => BB >= -(2 ** 31) && BB < 2 ** 31,
      WB = BB => {
        let OB = 0;
        for (; 0 === BB.readBits(1) && OB < 32;) OB++;
        if (OB >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << OB) - 1 + BB.readBits(OB)
      },
      AB = BB => {
        const OB = WB(BB);
        return 0 === (1 & OB) ? -(OB >> 1) : OB + 1 >> 1
      },
      VB = (BB, OB, GB, YB) => {
        for (let DB = OB; DB < GB; DB++) {
          const OB = Math.floor(DB / 8);
          let QB = BB[OB];
          const oB = 7 - (7 & DB);
          QB &= ~(1 << oB), QB |= (YB & 1 << GB - DB - 1) >> GB - DB - 1 << oB, BB[OB] = QB
        }
      },
      SB = BB => BB.constructor === Uint8Array ? BB : ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB),
      nB = BB => BB.constructor === DataView ? BB : ArrayBuffer.isView(BB) ? new DataView(BB.buffer, BB.byteOffset, BB.byteLength) : new DataView(BB),
      UB = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const OB = new Uint8Array(3 * BB.length);
          let GB = 0;
          for (let YB = 0; YB < BB.length; YB++) {
            let DB = BB.charCodeAt(YB);
            if (DB < 128) OB[GB++] = DB;
            else if (DB < 2048) OB[GB++] = 192 | DB >> 6, OB[GB++] = 128 | 63 & DB;
            else if (DB < 55296 || DB > 57343) OB[GB++] = 224 | DB >> 12, OB[GB++] = 128 | DB >> 6 & 63, OB[GB++] = 128 | 63 & DB;
            else {
              const QB = YB + 1 < BB.length ? BB.charCodeAt(YB + 1) : 0;
              DB < 56320 && QB >= 56320 && QB <= 57343 ? (DB = 65536 + (DB - 55296 << 10) + (QB - 56320), YB++, OB[GB++] = 240 | DB >> 18, OB[GB++] = 128 | DB >> 12 & 63, OB[GB++] = 128 | DB >> 6 & 63, OB[GB++] = 128 | 63 & DB) : (OB[GB++] = 239, OB[GB++] = 191, OB[GB++] = 189)
            }
          }
          return OB.slice(0, GB)
        }
      },
      fB = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const OB = BB.trim().toLowerCase();
          if ("utf-8" === OB || "utf8" === OB || "unicode-1-1-utf-8" === OB) this.encoding = "utf-8";
          else if ("utf-16le" === OB || "utf-16" === OB) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== OB) throw new RangeError(`The encoding label provided ('${BB}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(BB) {
          const OB = BB ? SB(BB) : new Uint8Array(0),
            GB = [];
          if ("utf-8" === this.encoding) {
            let BB = OB.length >= 3 && 239 === OB[0] && 187 === OB[1] && 191 === OB[2] ? 3 : 0;
            for (; BB < OB.length;) {
              const YB = OB[BB];
              if (YB < 128) {
                GB.push(YB), BB++;
                continue
              }
              let DB, QB;
              if (YB >= 194 && YB < 224) DB = 1, QB = 31 & YB;
              else if (YB >= 224 && YB < 240) DB = 2, QB = 15 & YB;
              else {
                if (!(YB >= 240 && YB < 245)) {
                  GB.push(65533), BB++;
                  continue
                }
                DB = 3, QB = 7 & YB
              }
              let oB = 224 === YB ? 160 : 240 === YB ? 144 : 128,
                jB = 237 === YB ? 159 : 244 === YB ? 143 : 191,
                yB = 1;
              for (; yB <= DB; yB++) {
                const GB = BB + yB < OB.length ? OB[BB + yB] : 0;
                if (GB < oB || GB > jB) break;
                QB = QB << 6 | 63 & GB, oB = 128, jB = 191
              }
              BB += yB, yB <= DB ? GB.push(65533) : QB >= 65536 ? (QB -= 65536, GB.push(55296 | QB >> 10, 56320 | 1023 & QB)) : GB.push(QB)
            }
          } else {
            const BB = "utf-16le" === this.encoding,
              YB = BB ? 255 : 254,
              DB = BB ? 254 : 255;
            let QB = OB.length >= 2 && OB[0] === YB && OB[1] === DB ? 2 : 0;
            for (; QB + 1 < OB.length;) {
              const YB = BB ? OB[QB] | OB[QB + 1] << 8 : OB[QB] << 8 | OB[QB + 1];
              if (QB += 2, YB >= 55296 && YB <= 56319) {
                const DB = QB + 1 < OB.length ? BB ? OB[QB] | OB[QB + 1] << 8 : OB[QB] << 8 | OB[QB + 1] : -1;
                DB >= 56320 && DB <= 57343 ? (GB.push(YB, DB), QB += 2) : GB.push(65533)
              } else YB >= 56320 && YB <= 57343 ? GB.push(65533) : GB.push(YB)
            }
            QB < OB.length && GB.push(65533)
          }
          let YB = "";
          for (let DB = 0; DB < GB.length; DB += 8192) YB += String.fromCharCode(...GB.slice(DB, DB + 8192));
          return YB
        }
      },
      kB = new fB,
      dB = new UB,
      KB = BB => {
        for (let OB = 0; OB < BB.length; OB++) {
          if (BB.charCodeAt(OB) > 255) return !1
        }
        return !0
      },
      uB = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      mB = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      IB = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      FB = BB => !BB || null == BB.primaries && null == BB.transfer && null == BB.matrix && null == BB.fullRange,
      iB = BB => BB instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && BB instanceof SharedArrayBuffer || ArrayBuffer.isView(BB);
    class LB {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let BB;
        const OB = new Promise((OB => {
            let GB = !1;
            BB = () => {
              GB || (OB(), this.pending--, GB = !0)
            }
          })),
          GB = this.currentPromise;
        return this.currentPromise = OB, this.pending++, await GB, BB
      }
    }
    const gB = BB => [...BB].map((BB => BB.toString(16).padStart(2, "0"))).join(""),
      rB = BB => (BB = (BB = (BB = (BB = (BB = BB >> 1 & 1431655765 | (1431655765 & BB) << 1) >> 2 & 858993459 | (858993459 & BB) << 2) >> 4 & 252645135 | (252645135 & BB) << 4) >> 8 & 16711935 | (16711935 & BB) << 8) >> 16 & 65535 | (65535 & BB) << 16) >>> 0,
      XB = (BB, OB, GB) => {
        let YB = 0,
          DB = BB.length - 1,
          QB = -1;
        for (; YB <= DB;) {
          const oB = YB + (DB - YB + 1) / 2 | 0;
          GB(BB[oB]) <= OB ? (QB = oB, YB = oB + 1) : DB = oB - 1
        }
        return QB
      },
      wB = () => {
        let BB, OB;
        return {
          promise: new Promise(((GB, YB) => {
            BB = GB, OB = YB
          })),
          resolve: BB,
          reject: OB
        }
      },
      EB = (BB, OB) => {
        for (let GB = BB.length - 1; GB >= 0; GB--)
          if (OB(BB[GB])) return GB;
        return -1
      },
      cB = BB => {
        throw new Error(`Unexpected value: ${BB}`)
      },
      hB = (BB, OB, GB) => {
        const YB = BB.getUint8(OB),
          DB = BB.getUint8(OB + 1),
          QB = BB.getUint8(OB + 2);
        return GB ? YB | DB << 8 | QB << 16 : YB << 16 | DB << 8 | QB
      },
      aB = (BB, OB, GB, YB) => {
        GB >>>= 0, GB &= 16777215, YB ? (BB.setUint8(OB, 255 & GB), BB.setUint8(OB + 1, GB >>> 8 & 255), BB.setUint8(OB + 2, GB >>> 16 & 255)) : (BB.setUint8(OB, GB >>> 16 & 255), BB.setUint8(OB + 1, GB >>> 8 & 255), BB.setUint8(OB + 2, 255 & GB))
      },
      eB = (BB, OB, GB, YB) => {
        (GB = bB(GB, -8388608, 8388607)) < 0 && (GB = GB + 16777216 & 16777215), aB(BB, OB, GB, YB)
      },
      TB = (BB, OB, GB, YB) => {
        YB ? (BB.setUint32(OB + 0, GB, !0), BB.setInt32(OB + 4, Math.floor(GB / 2 ** 32), !0)) : (BB.setInt32(OB + 0, Math.floor(GB / 2 ** 32), !0), BB.setUint32(OB + 4, GB, !0))
      },
      bB = (BB, OB, GB) => Math.max(OB, Math.min(GB, BB)),
      CB = (BB, OB, GB) => BB + (OB - BB) * GB,
      HB = (BB, OB) => BB - Math.floor(BB / OB) * OB,
      vB = "und",
      sB = (BB, OB) => Math.round(BB / OB) * OB,
      xB = (BB, OB) => Math.round(BB * OB) / OB,
      tB = (BB, OB) => Math.floor(BB * OB) / OB,
      BO = BB => {
        let OB = 0;
        for (; BB;) OB++, BB >>= 1;
        return OB
      },
      OO = BB => {
        let OB = 0;
        for (; 0 !== BB;) BB &= BB - 1, OB++;
        return OB
      },
      GO = /^[a-z]{3}$/,
      YO = BB => GO.test(BB),
      DO = 1e6 * (1 + Number.EPSILON),
      QO = (BB, OB) => {
        const GB = BB < 0 ? -1 : 1;
        let YB = 0,
          DB = 1,
          QB = 1,
          oB = 0,
          jB = BB = Math.abs(BB);
        for (;;) {
          const BB = Math.floor(jB),
            yB = BB * QB + YB,
            JB = BB * oB + DB;
          if (JB > OB) return {
            num: GB * QB,
            den: oB
          };
          if (YB = QB, DB = oB, QB = yB, oB = JB, jB = 1 / (jB - BB), !isFinite(jB)) break
        }
        return {
          num: GB * QB,
          den: oB
        }
      };
    class oO {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(BB) {
        return this.currentPromise = this.currentPromise.then(BB)
      }
    }
    let jO = null;
    const yO = () => null !== jO ? jO : jO = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let JO = null;
    const MO = () => null !== JO ? JO : JO = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let PO = null;
    const zO = () => null !== PO ? PO : PO = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const lO = BB => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${BB} is not available in this environment.` : `${BB} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      pO = BB => BB instanceof DOMException && "QuotaExceededError" === BB.name && /reclaimed/i.test(BB.message),
      qO = (async () => {})().constructor,
      ZO = BB => BB instanceof qO || BB instanceof Promise || "function" === typeof BB?.then,
      NO = (BB, OB) => -1 !== BB ? BB : OB,
      RO = function*(BB) {
        for (const OB in BB) {
          const GB = BB[OB];
          void 0 !== GB && (yield {
            key: OB,
            value: GB
          })
        }
      },
      WO = BB => {
        switch (BB.toLowerCase()) {
          case "image/jpeg":
          case "image/jpg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "image/webp":
            return ".webp";
          case "image/bmp":
            return ".bmp";
          case "image/svg+xml":
            return ".svg";
          case "image/tiff":
            return ".tiff";
          case "image/avif":
            return ".avif";
          case "image/x-icon":
          case "image/vnd.microsoft.icon":
            return ".ico";
          default:
            return null
        }
      },
      AO = BB => {
        let OB = "";
        for (let GB = 0; GB < BB.length; GB++) OB += String.fromCharCode(BB[GB]);
        return btoa(OB)
      },
      VO = (BB, OB) => {
        if (BB.length !== OB.length) return !1;
        for (let GB = 0; GB < BB.length; GB++)
          if (BB[GB] !== OB[GB]) return !1;
        return !0
      },
      SO = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      nO = BB => "number" === typeof BB && !Number.isNaN(BB),
      UO = (BB, OB) => {
        if (OB.includes("://")) return OB;
        if (BB.includes("://")) {
          const OB = BB.indexOf("?"); - 1 !== OB && (BB = BB.slice(0, OB))
        }
        let GB;
        if (OB.startsWith("/")) {
          const YB = BB.indexOf("://");
          if (-1 === YB) GB = OB;
          else {
            const DB = BB.indexOf("/", YB + 3);
            GB = -1 === DB ? BB + OB : BB.slice(0, DB) + OB
          }
        } else {
          const YB = BB.lastIndexOf("/");
          GB = -1 === YB ? OB : BB.slice(0, YB + 1) + OB
        }
        let YB = "";
        const DB = GB.indexOf("://");
        if (-1 !== DB) {
          const BB = GB.indexOf("/", DB + 3); - 1 !== BB && (YB = GB.slice(0, BB), GB = GB.slice(BB))
        }
        const QB = GB.split("/"),
          oB = [];
        for (const jB of QB) ".." === jB ? oB.pop() : "." !== jB && oB.push(jB);
        return YB + oB.join("/")
      },
      fO = (BB, OB) => {
        let GB = -1,
          YB = 1 / 0;
        for (let DB = 0; DB < BB.length; DB++) {
          const QB = OB(BB[DB]);
          QB < YB && (YB = QB, GB = DB)
        }
        return GB
      },
      kO = (BB, OB) => {
        let GB = -1,
          YB = -1 / 0;
        for (let DB = 0; DB < BB.length; DB++) {
          const QB = OB(BB[DB]);
          QB > YB && (YB = QB, GB = DB)
        }
        return GB
      },
      dO = BB => {
        YB(Number.isInteger(BB.num)), YB(Number.isInteger(BB.den)), YB(0 !== BB.den);
        let OB = Math.abs(BB.num),
          GB = Math.abs(BB.den);
        for (; 0 !== GB;) {
          const BB = OB % GB;
          OB = GB, GB = BB
        }
        const DB = OB || 1;
        return {
          num: BB.num / DB,
          den: BB.den / DB
        }
      },
      KO = (BB, OB) => {
        if ("object" !== typeof BB || !BB) throw new TypeError(`${OB} must be an object.`);
        if (!Number.isInteger(BB.left) || BB.left < 0) throw new TypeError(`${OB}.left must be a non-negative integer.`);
        if (!Number.isInteger(BB.top) || BB.top < 0) throw new TypeError(`${OB}.top must be a non-negative integer.`);
        if (!Number.isInteger(BB.width) || BB.width < 0) throw new TypeError(`${OB}.width must be a non-negative integer.`);
        if (!Number.isInteger(BB.height) || BB.height < 0) throw new TypeError(`${OB}.height must be a non-negative integer.`)
      };
    let uO, mO = 1;
    const IO = new Map,
      FO = new Map,
      iO = () => "undefined" === typeof window,
      LO = () => {
        const BB = new Map,
          OB = new Map;
        self.onmessage = GB => {
          const YB = GB.data;
          switch (YB.type) {
            case "set-timeout": {
              const OB = setTimeout((() => {
                BB.delete(YB.timerId), self.postMessage({
                  type: "fire",
                  timerId: YB.timerId
                })
              }), YB.delay);
              BB.set(YB.timerId, OB)
            }
            break;
            case "set-interval": {
              const BB = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: YB.timerId
                })
              }), YB.delay);
              OB.set(YB.timerId, BB)
            }
            break;
            case "clear-timeout": {
              const OB = BB.get(YB.timerId);
              void 0 !== OB && (clearTimeout(OB), BB.delete(YB.timerId))
            }
            break;
            case "clear-interval": {
              const BB = OB.get(YB.timerId);
              void 0 !== BB && (clearInterval(BB), OB.delete(YB.timerId))
            }
          }
        }
      },
      gO = () => {
        if (uO) return uO;
        const BB = `(${LO.toString()})();`,
          OB = URL.createObjectURL(new Blob([BB], {
            type: "text/javascript"
          }));
        return uO = new Worker(OB), URL.revokeObjectURL(OB), uO.onmessage = BB => {
          const OB = BB.data,
            GB = IO.get(OB.timerId);
          if (GB) return IO.delete(OB.timerId), void GB();
          const YB = FO.get(OB.timerId);
          YB && YB()
        }, uO
      },
      rO = (BB, OB) => {
        if (iO()) return {
          id: setInterval(BB, OB)
        };
        const GB = mO++;
        return FO.set(GB, (() => {
          BB()
        })), gO().postMessage({
          type: "set-interval",
          timerId: GB,
          delay: OB
        }), {
          id: GB
        }
      },
      XO = BB => {
        iO() ? clearInterval(BB.id) : (YB("number" === typeof BB.id), FO.delete(BB.id), gO().postMessage({
          type: "clear-interval",
          timerId: BB.id
        }))
      },
      wO = BB => new Promise((OB => setTimeout(OB, BB))),
      EO = BB => Array.isArray(BB) ? BB : [BB];
    class cO {
      constructor() {
        this._listeners = new Map
      }
      on(BB, OB, GB) {
        this._listeners.has(BB) || this._listeners.set(BB, new Set);
        const YB = {
          oP: OB,
          once: GB?.once ?? !1
        };
        return this._listeners.get(BB).add(YB), () => {
          this._listeners.get(BB)?.delete(YB)
        }
      }
      _emit() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        const [YB, DB] = OB, QB = this._listeners.get(YB);
        if (QB)
          for (const jB of QB) {
            try {
              jB.oP(DB)
            } catch (oB) {
              console.error(oB)
            }
            jB.once && QB.delete(jB)
          }
      }
    }
    const hO = BB => null !== BB && "object" === typeof BB && Object.getPrototypeOf(BB) === Object.prototype && Object.values(BB).every((BB => "string" === typeof BB))
  },
  40589: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => gG,
      e: () => rG,
      g: () => LG,
      i: () => FG,
      j: () => wG
    });
    var YB = GB(40591),
      DB = GB(40599);
    var QB;
    ! function(BB) {
      BB[BB.FrameCount = 1] = "FrameCount", BB[BB.FileSize = 2] = "FileSize", BB[BB.Toc = 4] = "Toc"
    }(QB || (QB = {}));
    var oB = GB(40610),
      jB = GB(40574);
    class yB {
      constructor(BB, OB, GB, YB, DB) {
        this.bytes = BB, this.view = OB, this.offset = GB, this.start = YB, this.end = DB, this.bufferPos = YB - GB
      }
      static tempFromBytes(BB) {
        return new yB(BB, (0, jB.Gd)(BB), 0, 0, BB.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(BB) {
        this.bufferPos = BB - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(BB) {
        this.bufferPos += BB
      }
      slice(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - BB;
        if (BB < this.start || BB + OB > this.end) throw new RangeError("Slicing outside of original slice.");
        return new yB(this.bytes, this.view, this.offset, BB, BB + OB)
      }
    }
    const JB = (BB, OB) => {
        if (BB.filePos < BB.start || BB.filePos + OB > BB.end) throw new RangeError(`Tried reading [${BB.filePos}, ${BB.filePos+OB}), but slice is [${BB.start}, ${BB.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      MB = (BB, OB) => {
        JB(BB, OB);
        const GB = BB.bytes.subarray(BB.bufferPos, BB.bufferPos + OB);
        return BB.bufferPos += OB, GB
      };
    var PB, zB;
    ! function(BB) {
      BB[BB.Unsynchronisation = 128] = "Unsynchronisation", BB[BB.ExtendedHeader = 64] = "ExtendedHeader", BB[BB.ExperimentalIndicator = 32] = "ExperimentalIndicator", BB[BB.Footer = 16] = "Footer"
    }(PB || (PB = {})),
    function(BB) {
      BB[BB.ISO_8859_1 = 0] = "ISO_8859_1", BB[BB.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", BB[BB.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", BB[BB.UTF_8 = 3] = "UTF_8"
    }(zB || (zB = {}));
    var lB = GB(40581);
    class pB {
      constructor(BB) {
        this.mutex = new jB.d, this.trackTimestampInfo = new WeakMap, this.output = BB
      }
      onTrackClose(BB) {}
      validateTimestamp(BB, OB, GB) {
        let YB = this.trackTimestampInfo.get(BB);
        if (YB) {
          if (GB && (YB.maxTimestampBeforeLastKeyPacket = YB.maxTimestamp), null !== YB.maxTimestampBeforeLastKeyPacket && OB < YB.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${OB}s, but largest timestamp is ${YB.maxTimestampBeforeLastKeyPacket}s.`);
          YB.maxTimestamp = Math.max(YB.maxTimestamp, OB)
        } else {
          if (!GB) throw new Error("First packet must be a key packet.");
          YB = {
            maxTimestamp: OB,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(BB, YB)
        }
      }
    }
    var qB = GB(40603),
      ZB = GB(40594);
    var NB = GB(40627),
      RB = GB(40619);
    class WB {
      constructor(BB) {
        this.writer = BB, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(BB) {
        this.helperView.setUint32(0, BB, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(BB) {
        this.helperView.setUint32(0, Math.floor(BB / 2 ** 32), !1), this.helperView.setUint32(4, BB, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(BB) {
        for (let OB = 0; OB < BB.length; OB++) this.helperView.setUint8(OB % 8, BB.charCodeAt(OB)), OB % 8 === 7 && this.writer.write(this.helper);
        BB.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, BB.length % 8))
      }
      writeBox(BB) {
        if (this.offsets.set(BB, this.writer.getPos()), BB.contents && !BB.children) this.writeBoxHeader(BB, BB.size ?? BB.contents.byteLength + 8), this.writer.write(BB.contents);
        else {
          const OB = this.writer.getPos();
          if (this.writeBoxHeader(BB, 0), BB.contents && this.writer.write(BB.contents), BB.children)
            for (const DB of BB.children) DB && this.writeBox(DB);
          const GB = this.writer.getPos(),
            YB = BB.size ?? GB - OB;
          this.writer.seek(OB), this.writeBoxHeader(BB, YB), this.writer.seek(GB)
        }
      }
      writeBoxHeader(BB, OB) {
        this.writeU32(BB.largeSize ? 1 : OB), this.writeAscii(BB.type), BB.largeSize && this.writeU64(OB)
      }
      measureBoxHeader(BB) {
        return 8 + (BB.largeSize ? 8 : 0)
      }
      patchBox(BB) {
        const OB = this.offsets.get(BB);
        (0, jB.Q)(void 0 !== OB);
        const GB = this.writer.getPos();
        this.writer.seek(OB), this.writeBox(BB), this.writer.seek(GB)
      }
      measureBox(BB) {
        if (BB.contents && !BB.children) {
          return this.measureBoxHeader(BB) + BB.contents.byteLength
        } {
          let OB = this.measureBoxHeader(BB);
          if (BB.contents && (OB += BB.contents.byteLength), BB.children)
            for (const GB of BB.children) GB && (OB += this.measureBox(GB));
          return OB
        }
      }
    }
    const AB = new Uint8Array(8),
      VB = new DataView(AB.buffer),
      SB = BB => [(BB % 256 + 256) % 256],
      nB = BB => (VB.setUint16(0, BB, !1), [AB[0], AB[1]]),
      UB = BB => (VB.setInt16(0, BB, !1), [AB[0], AB[1]]),
      fB = BB => (VB.setUint32(0, BB, !1), [AB[1], AB[2], AB[3]]),
      kB = BB => (VB.setUint32(0, BB, !1), [AB[0], AB[1], AB[2], AB[3]]),
      dB = BB => (VB.setInt32(0, BB, !1), [AB[0], AB[1], AB[2], AB[3]]),
      KB = BB => (VB.setUint32(0, Math.floor(BB / 2 ** 32), !1), VB.setUint32(4, BB, !1), [AB[0], AB[1], AB[2], AB[3], AB[4], AB[5], AB[6], AB[7]]),
      uB = BB => (VB.setInt32(0, Math.floor(BB / 2 ** 32), !1), VB.setUint32(4, BB, !1), [AB[0], AB[1], AB[2], AB[3], AB[4], AB[5], AB[6], AB[7]]),
      mB = BB => (VB.setInt16(0, 256 * BB, !1), [AB[0], AB[1]]),
      IB = BB => (VB.setInt32(0, 65536 * BB, !1), [AB[0], AB[1], AB[2], AB[3]]),
      FB = BB => (VB.setInt32(0, 2 ** 30 * BB, !1), [AB[0], AB[1], AB[2], AB[3]]),
      iB = (BB, OB) => {
        const GB = [];
        let YB = BB;
        do {
          let BB = 127 & YB;
          YB >>= 7, GB.length > 0 && (BB |= 128), GB.push(BB), void 0 !== OB && OB--
        } while (YB > 0 || OB);
        return GB.reverse()
      },
      LB = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = Array(BB.length).fill(null).map(((OB, GB) => BB.charCodeAt(GB)));
        return OB && GB.push(0), GB
      },
      gB = BB => [IB(BB[0]), IB(BB[1]), FB(BB[2]), IB(BB[3]), IB(BB[4]), FB(BB[5]), IB(BB[6]), IB(BB[7]), FB(BB[8])],
      rB = (BB, OB, GB) => ({
        type: BB,
        contents: OB && new Uint8Array(OB.flat(10)),
        children: GB
      }),
      XB = (BB, OB, GB, YB, DB) => rB(BB, [SB(OB), fB(GB), YB ?? []], DB),
      wB = () => rB("styp", [LB("iso5"), kB(0), LB("iso5"), LB("iso6"), LB("mp41"), LB("cmfc"), LB("dash")]),
      EB = (BB, OB) => {
        const GB = Math.max(0, BB.minWrittenTimestamp);
        let YB = Math.max(0, BB.maxWrittenEndTimestamp - GB);
        return Number.isFinite(YB) || (YB = 0), XB("sidx", 1, 0, [kB(1), kB(MG), KB(zG(GB, MG)), KB(0), nB(0), nB(1), kB(2147483647 & OB), kB(zG(YB, MG)), kB(0)])
      },
      cB = BB => ({
        type: "mdat",
        largeSize: BB
      }),
      hB = BB => rB("moov", void 0, [aB(BB.creationTime, BB.trackDatas), ...BB.trackDatas.map((OB => eB(OB, BB.creationTime))), BB.isFragmented ? mO(BB.trackDatas) : null, TO(BB)]),
      aB = (BB, OB) => {
        const GB = Math.max(0, ...OB.map((BB => Math.max(0, zG(lG(BB), MG) + zG(BB.startTimestampOffset ?? 0, MG))))),
          YB = Math.max(0, ...OB.map((BB => BB.track.id))) + 1,
          DB = !(0, jB.kc)(BB) || !(0, jB.kc)(GB),
          QB = DB ? KB : kB;
        return XB("mvhd", +DB, 0, [QB(BB), QB(BB), kB(MG), QB(GB), IB(1), mB(1), Array(10).fill(0), gB(jB.p), Array(24).fill(0), kB(YB)])
      },
      eB = (BB, OB) => {
        const GB = PG(BB),
          YB = null !== BB.startTimestampOffset && 0 !== BB.startTimestampOffset;
        return rB("trak", void 0, [TB(BB, OB), YB ? bB(BB) : null, CB(BB, OB), void 0 !== GB.name ? rB("udta", void 0, [rB("name", [...jB.Bd.encode(GB.name)])]) : null])
      },
      TB = (BB, OB) => {
        const GB = Math.max(0, zG(lG(BB), MG) + zG(BB.startTimestampOffset ?? 0, MG)),
          YB = !(0, jB.kc)(OB) || !(0, jB.kc)(GB),
          DB = YB ? KB : kB;
        let QB;
        if ("video" === BB.type && BB.track.metadata.transformationMatrix) QB = BB.track.metadata.transformationMatrix;
        else if ("video" === BB.type) {
          const {
            rotation: OB,
            flip: GB
          } = BB.track.metadata, YB = (0, jB.Ec)((0, jB.Yc)(OB ?? 0), (0, jB.fd)(GB ? -1 : 1, 1));
          QB = (0, jB._)(YB, BB.info.width, BB.info.height)
        } else QB = jB.p;
        let oB = 2;
        !1 !== BB.track.metadata.disposition?.default && (oB |= 1);
        const yB = "video" === BB.type ? 0 : "audio" === BB.type ? 1 : "subtitle" === BB.type ? 2 : (0, jB.M)(BB);
        return XB("tkhd", +YB, oB, [DB(OB), DB(OB), kB(BB.track.id), kB(0), DB(GB), Array(8).fill(0), nB(0), nB(yB), mB("audio" === BB.type ? 1 : 0), nB(0), gB(QB), IB("video" === BB.type ? BB.info.width : 0), IB("video" === BB.type ? BB.info.height : 0)])
      },
      bB = BB => {
        const OB = BB.startTimestampOffset;
        if ((0, jB.Q)(null !== OB), OB > 0) {
          const GB = zG(OB, MG),
            YB = zG(lG(BB), MG),
            DB = !(0, jB.kc)(GB) || !(0, jB.kc)(YB),
            QB = DB ? KB : kB,
            oB = DB ? uB : dB;
          return rB("edts", void 0, [XB("elst", DB ? 1 : 0, 0, [kB(2), QB(GB), oB(-1), IB(1), QB(YB), oB(0), IB(1)])])
        } {
          const GB = zG(-OB, BB.timescale),
            YB = Math.max(0, zG(lG(BB), MG) + zG(OB, MG)),
            DB = !(0, jB.Zb)(GB) || !(0, jB.kc)(YB),
            QB = DB ? KB : kB,
            oB = DB ? uB : dB;
          return rB("edts", void 0, [XB("elst", DB ? 1 : 0, 0, [kB(1), QB(YB), oB(GB), IB(1)])])
        }
      },
      CB = (BB, OB) => rB("mdia", void 0, [HB(BB, OB), xB(!0, vB[BB.type], sB[BB.type]), tB(BB)]),
      HB = (BB, OB) => {
        const GB = zG(lG(BB), BB.timescale),
          YB = !(0, jB.kc)(OB) || !(0, jB.kc)(GB),
          DB = YB ? KB : kB;
        return XB("mdhd", +YB, 0, [DB(OB), DB(OB), kB(BB.timescale), DB(GB), nB(oG(BB.track.metadata.languageCode ?? jB.D)), nB(0)])
      },
      vB = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      sB = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      xB = function(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return XB("hdlr", 0, 0, [BB ? LB("mhlr") : kB(0), LB(OB), LB(YB), kB(0), kB(0), LB(GB, !0)])
      },
      tB = BB => rB("minf", void 0, [BO[BB.type](), OO(), DO(BB)]),
      BO = {
        video: () => XB("vmhd", 0, 1, [nB(0), nB(0), nB(0), nB(0)]),
        audio: () => XB("smhd", 0, 0, [nB(0), nB(0)]),
        subtitle: () => XB("nmhd", 0, 0)
      },
      OO = () => rB("dinf", void 0, [GO()]),
      GO = () => XB("dref", 0, 0, [kB(1)], [YO()]),
      YO = () => XB("url ", 0, 1),
      DO = BB => {
        const OB = BB.compositionTimeOffsetTable.length > 1 || BB.compositionTimeOffsetTable.some((BB => 0 !== BB.sampleCompositionTimeOffset));
        return rB("stbl", void 0, [QO(BB), nO(BB), OB ? KO(BB) : null, OB ? uO(BB) : null, fO(BB), kO(BB), dO(BB), UO(BB)])
      },
      QO = BB => {
        let OB;
        if ("video" === BB.type) OB = oO(BG(BB.track.source._codec, BB.info.decoderConfig.codec), BB);
        else if ("audio" === BB.type) {
          const GB = GG(BB.track.source._codec, BB.info.decoderConfig.codec, BB.muxer.isQuickTime);
          (0, jB.Q)(GB), OB = PO(GB, BB)
        } else "subtitle" === BB.type && (OB = SO(DG[BB.track.source._codec], BB));
        return (0, jB.Q)(OB), XB("stsd", 0, 0, [kB(1)], [OB])
      },
      oO = (BB, OB) => rB(BB, [Array(6).fill(0), nB(1), nB(0), nB(0), Array(12).fill(0), nB(OB.info.width), nB(OB.info.height), kB(4718592), kB(4718592), kB(0), nB(1), SB(RB.c.length), LB(RB.c), Array(31 - RB.c.length).fill(0), nB(OB.info.hasAlphaChannel ? 32 : 24), UB(65535)], [OG[OB.track.source._codec]?.(OB) ?? null, yO(OB), (0, jB.mb)(OB.info.decoderConfig.colorSpace) ? null : JO(OB), jO(OB)]),
      jO = BB => 0 === BB.avgBitrate && 0 === BB.maxBitrate ? null : rB("btrt", [kB(0), kB(BB.maxBitrate), kB(BB.avgBitrate)]),
      yO = BB => BB.info.pixelAspectRatio.num === BB.info.pixelAspectRatio.den ? null : rB("pasp", [kB(BB.info.pixelAspectRatio.num), kB(BB.info.pixelAspectRatio.den)]),
      JO = BB => {
        const OB = BB.info.decoderConfig.colorSpace;
        return rB("colr", [LB(BB.muxer.isQuickTime ? "nclc" : "nclx"), nB(null != OB?.primaries ? jB.g[OB.primaries] : 2), nB(null != OB?.transfer ? jB.z[OB.transfer] : 2), nB(null != OB?.matrix ? jB.r[OB.matrix] : 2), BB.muxer.isQuickTime ? [] : SB((OB?.fullRange ? 1 : 0) << 7)])
      },
      MO = BB => {
        if (!BB.info.decoderConfig) return null;
        const OB = BB.info.decoderConfig,
          GB = OB.codec.split("."),
          YB = Number(GB[1]),
          DB = Number(GB[2]),
          QB = (Number(GB[3]) << 4) + ((GB[4] ? Number(GB[4]) : 1) << 1) + (GB[8] ? Number(GB[8]) : Number(OB.colorSpace?.fullRange ?? 0)),
          oB = GB[5] ? Number(GB[5]) : OB.colorSpace?.primaries ? jB.g[OB.colorSpace.primaries] : 1,
          yB = GB[6] ? Number(GB[6]) : OB.colorSpace?.transfer ? jB.z[OB.colorSpace.transfer] : 1,
          JB = GB[7] ? Number(GB[7]) : OB.colorSpace?.matrix ? jB.r[OB.colorSpace.matrix] : 1;
        return XB("vpcC", 1, 0, [SB(YB), SB(DB), SB(QB), SB(oB), SB(yB), SB(JB), nB(0)])
      },
      PO = (BB, OB) => {
        let GB, YB = 0,
          QB = 16;
        const oB = DB.n.includes(OB.track.source._codec);
        if (oB) {
          const BB = OB.track.source._codec,
            {
              sampleSize: GB
            } = (0, DB.S)(BB);
          QB = 8 * GB, QB > 16 && (YB = 1)
        }
        if (OB.muxer.isQuickTime && (YB = 1), 0 === YB) GB = [Array(6).fill(0), nB(1), nB(YB), nB(0), kB(0), nB(OB.info.numberOfChannels), nB(QB), nB(0), nB(0), nB(OB.info.sampleRate < 65536 ? OB.info.sampleRate : 0), nB(0)];
        else {
          const BB = oB ? 0 : -2;
          GB = [Array(6).fill(0), nB(1), nB(YB), nB(0), kB(0), nB(OB.info.numberOfChannels), nB(Math.min(QB, 16)), UB(BB), nB(0), nB(OB.info.sampleRate < 65536 ? OB.info.sampleRate : 0), nB(0), oB ? [kB(1), kB(QB / 8), kB(OB.info.numberOfChannels * QB / 8)] : [kB(0), kB(0), kB(0)], kB(2)]
        }
        return rB(BB, GB, [YG(OB.track.source._codec, OB.muxer.isQuickTime)?.(OB) ?? null, jO(OB)])
      },
      zO = BB => {
        let OB;
        switch (BB.track.source._codec) {
          case "aac":
            OB = 64;
            break;
          case "mp3":
            OB = 107;
            break;
          case "vorbis":
            OB = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${BB.track.source._codec}`)
        }
        let GB = [...SB(OB), ...SB(21), ...fB(0), ...kB(BB.maxBitrate), ...kB(BB.avgBitrate)];
        if (BB.info.decoderConfig.description) {
          const OB = (0, jB.Id)(BB.info.decoderConfig.description);
          GB = [...GB, ...SB(5), ...iB(OB.byteLength), ...OB]
        }
        return GB = [...nB(1), ...SB(0), ...SB(4), ...iB(GB.length), ...GB, ...SB(6), ...SB(1), ...SB(2)], GB = [...SB(3), ...iB(GB.length), ...GB], XB("esds", 0, 0, GB)
      },
      lO = BB => rB("wave", void 0, [pO(BB), qO(BB), rB("\0\0\0\0")]),
      pO = BB => rB("frma", [LB(GG(BB.track.source._codec, BB.info.decoderConfig.codec, BB.muxer.isQuickTime))]),
      qO = BB => {
        const {
          littleEndian: OB
        } = (0, DB.S)(BB.track.source._codec);
        return rB("enda", [nB(+OB)])
      },
      ZO = BB => {
        let OB = BB.info.numberOfChannels,
          GB = 3840,
          YB = BB.info.sampleRate,
          DB = 0,
          QB = 0,
          oB = new Uint8Array(0);
        const yB = BB.info.decoderConfig?.description;
        if (yB) {
          (0, jB.Q)(yB.byteLength >= 18);
          const BB = (0, jB.Id)(yB),
            JB = (0, qB.rb)(BB);
          OB = JB.outputChannelCount, GB = JB.preSkip, YB = JB.inputSampleRate, DB = JB.outputGain, QB = JB.channelMappingFamily, JB.channelMappingTable && (oB = JB.channelMappingTable)
        }
        return rB("dOps", [SB(0), SB(OB), nB(GB), kB(YB), UB(DB), SB(QB), ...oB])
      },
      NO = BB => {
        const OB = BB.info.decoderConfig?.description;
        (0, jB.Q)(OB);
        const GB = (0, jB.Id)(OB);
        return XB("dfLa", 0, 0, [...GB.subarray(4)])
      },
      RO = BB => {
        const {
          littleEndian: OB,
          sampleSize: GB
        } = (0, DB.S)(BB.track.source._codec);
        return XB("pcmC", 0, 0, [SB(+OB), SB(8 * GB)])
      },
      WO = BB => {
        (0, jB.Q)(BB.info.primingPacket);
        const OB = (0, qB.fb)(BB.info.primingPacket.data);
        if (!OB) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const GB = new Uint8Array(3),
          YB = new ZB.e(GB);
        return YB.writeBits(2, OB.fscod), YB.writeBits(5, OB.bsid), YB.writeBits(3, OB.bsmod), YB.writeBits(3, OB.acmod), YB.writeBits(1, OB.lfeon), YB.writeBits(5, OB.bitRateCode), YB.writeBits(5, 0), rB("dac3", [...GB])
      },
      AO = BB => {
        (0, jB.Q)(BB.info.primingPacket);
        const OB = (0, qB.kb)(BB.info.primingPacket.data);
        if (!OB) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let GB = 16;
        for (const oB of OB.substreams) GB += 23, oB.numDepSub > 0 ? GB += 9 : GB += 1;
        const YB = Math.ceil(GB / 8),
          DB = new Uint8Array(YB),
          QB = new ZB.e(DB);
        QB.writeBits(13, OB.dataRate), QB.writeBits(3, OB.substreams.length - 1);
        for (const oB of OB.substreams) QB.writeBits(2, oB.fscod), QB.writeBits(5, oB.bsid), QB.writeBits(1, 0), QB.writeBits(1, 0), QB.writeBits(3, oB.bsmod), QB.writeBits(3, oB.acmod), QB.writeBits(1, oB.lfeon), QB.writeBits(3, 0), QB.writeBits(4, oB.numDepSub), oB.numDepSub > 0 ? QB.writeBits(9, oB.chanLoc) : QB.writeBits(1, 0);
        return rB("dec3", [...DB])
      },
      VO = BB => {
        (0, jB.Q)(BB.info.primingPacket);
        const OB = (0, qB.hb)(BB.info.primingPacket.data);
        if (!OB) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return rB("ddts", [...(0, qB.r)(OB)])
      },
      SO = (BB, OB) => rB(BB, [Array(6).fill(0), nB(1)], [QG[OB.track.source._codec](OB), jO(OB)]),
      nO = BB => XB("stts", 0, 0, [kB(BB.timeToSampleTable.length), BB.timeToSampleTable.map((BB => [kB(BB.sampleCount), kB(BB.sampleDelta)]))]),
      UO = BB => {
        if (BB.samples.every((BB => "key" === BB.type))) return null;
        const OB = [...BB.samples.entries()].filter((BB => {
          let [, OB] = BB;
          return "key" === OB.type
        }));
        return XB("stss", 0, 0, [kB(OB.length), OB.map((BB => {
          let [OB] = BB;
          return kB(OB + 1)
        }))])
      },
      fO = BB => XB("stsc", 0, 0, [kB(BB.compactlyCodedChunkTable.length), BB.compactlyCodedChunkTable.map((BB => [kB(BB.firstChunk), kB(BB.samplesPerChunk), kB(1)]))]),
      kO = BB => {
        if ("audio" === BB.type && BB.info.requiresPcmTransformation) {
          const {
            sampleSize: OB
          } = (0, DB.S)(BB.track.source._codec);
          return XB("stsz", 0, 0, [kB(OB * BB.info.numberOfChannels), kB(BB.samples.reduce(((OB, GB) => OB + zG(GB.duration, BB.timescale)), 0))])
        }
        return XB("stsz", 0, 0, [kB(0), kB(BB.samples.length), BB.samples.map((BB => kB(BB.size)))])
      },
      dO = BB => BB.finalizedChunks.length > 0 && (0, jB.sc)(BB.finalizedChunks).offset >= 2 ** 32 ? XB("co64", 0, 0, [kB(BB.finalizedChunks.length), BB.finalizedChunks.map((BB => KB(BB.offset)))]) : XB("stco", 0, 0, [kB(BB.finalizedChunks.length), BB.finalizedChunks.map((BB => kB(BB.offset)))]),
      KO = BB => XB("ctts", 1, 0, [kB(BB.compositionTimeOffsetTable.length), BB.compositionTimeOffsetTable.map((BB => [kB(BB.sampleCount), dB(BB.sampleCompositionTimeOffset)]))]),
      uO = BB => {
        let OB = 1 / 0,
          GB = -1 / 0,
          YB = 1 / 0,
          DB = -1 / 0;
        (0, jB.Q)(BB.compositionTimeOffsetTable.length > 0), (0, jB.Q)(BB.samples.length > 0);
        for (let oB = 0; oB < BB.compositionTimeOffsetTable.length; oB++) {
          const YB = BB.compositionTimeOffsetTable[oB];
          OB = Math.min(OB, YB.sampleCompositionTimeOffset), GB = Math.max(GB, YB.sampleCompositionTimeOffset)
        }
        for (let oB = 0; oB < BB.samples.length; oB++) {
          const OB = BB.samples[oB];
          YB = Math.min(YB, zG(OB.timestamp, BB.timescale)), DB = Math.max(DB, zG(OB.timestamp + OB.duration, BB.timescale))
        }
        const QB = Math.max(-OB, 0);
        return DB >= 2 ** 31 ? null : XB("cslg", 0, 0, [dB(QB), dB(OB), dB(GB), dB(YB), dB(DB)])
      },
      mO = BB => rB("mvex", void 0, BB.map(IO)),
      IO = BB => XB("trex", 0, 0, [kB(BB.track.id), kB(1), kB(0), kB(0), kB(0)]),
      FO = (BB, OB) => rB("moof", void 0, [iO(BB), ...OB.map(gO)]),
      iO = BB => XB("mfhd", 0, 0, [kB(BB)]),
      LO = BB => {
        let OB = 0,
          GB = 0;
        const YB = "delta" === BB.type;
        return GB |= +YB, OB |= YB ? 1 : 2, OB << 24 | GB << 16
      },
      gO = BB => rB("traf", void 0, [rO(BB), XO(BB), wO(BB)]),
      rO = BB => {
        (0, jB.Q)(BB.currentChunk);
        let OB = 0;
        OB |= 8, OB |= 16, OB |= 32, OB |= 131072;
        const GB = BB.currentChunk.samples[1] ?? BB.currentChunk.samples[0],
          YB = {
            duration: GB.timescaleUnitsToNextSample,
            size: GB.size,
            flags: LO(GB)
          };
        return XB("tfhd", 0, 131128, [kB(BB.track.id), kB(YB.duration), kB(YB.size), kB(YB.flags)])
      },
      XO = BB => ((0, jB.Q)(BB.currentChunk), XB("tfdt", 1, 0, [KB(zG(BB.currentChunk.startTimestamp, BB.timescale))])),
      wO = BB => {
        (0, jB.Q)(BB.currentChunk);
        const OB = BB.currentChunk.samples.map((BB => BB.timescaleUnitsToNextSample)),
          GB = BB.currentChunk.samples.map((BB => BB.size)),
          YB = BB.currentChunk.samples.map(LO),
          DB = BB.currentChunk.samples.map((OB => zG(OB.timestamp - OB.decodeTimestamp, BB.timescale))),
          QB = new Set(OB),
          oB = new Set(GB),
          yB = new Set(YB),
          JB = new Set(DB),
          MB = 2 === yB.size && YB[0] !== YB[1],
          PB = QB.size > 1,
          zB = oB.size > 1,
          lB = !MB && yB.size > 1,
          pB = JB.size > 1 || [...JB].some((BB => 0 !== BB));
        let qB = 0;
        return qB |= 1, qB |= 4 * +MB, qB |= 256 * +PB, qB |= 512 * +zB, qB |= 1024 * +lB, qB |= 2048 * +pB, XB("trun", 1, qB, [kB(BB.currentChunk.samples.length), kB(BB.currentChunk.offset - BB.currentChunk.moofOffset || 0), MB ? kB(YB[0]) : [], BB.currentChunk.samples.map(((BB, QB) => [PB ? kB(OB[QB]) : [], zB ? kB(GB[QB]) : [], lB ? kB(YB[QB]) : [], pB ? dB(DB[QB]) : []]))])
      },
      EO = BB => XB("tfra", 1, 0, [kB(BB.track.id), kB(63), kB(BB.finalizedChunks.length), BB.finalizedChunks.map((OB => [KB(zG(OB.samples[0].timestamp, BB.timescale)), KB(OB.moofOffset), kB(OB.trafIndex + 1), kB(1), kB(1)]))]),
      cO = () => XB("mfro", 0, 0, [kB(0)]),
      hO = () => rB("vtte"),
      aO = (BB, OB, GB, YB, DB) => rB("vttc", void 0, [null !== DB ? rB("vsid", [dB(DB)]) : null, null !== GB ? rB("iden", [...jB.Bd.encode(GB)]) : null, null !== OB ? rB("ctim", [...jB.Bd.encode((0, NB.e)(OB))]) : null, null !== YB ? rB("sttg", [...jB.Bd.encode(YB)]) : null, rB("payl", [...jB.Bd.encode(BB)])]),
      eO = BB => rB("vtta", [...jB.Bd.encode(BB)]),
      TO = BB => {
        const OB = [],
          GB = BB.format._options.metadataFormat ?? "auto",
          YB = BB.output._metadataTags;
        if ("mdir" === GB || "auto" === GB && !BB.isQuickTime) {
          const BB = sO(YB);
          BB && OB.push(BB)
        } else if ("mdta" === GB) {
          const BB = xO(YB);
          BB && OB.push(BB)
        } else("udta" === GB || "auto" === GB && BB.isQuickTime) && bO(OB, BB.output._metadataTags);
        return 0 === OB.length ? null : rB("udta", void 0, OB)
      },
      bO = (BB, OB) => {
        for (const {
            key: GB,
            value: YB
          }
          of(0, jB.rc)(OB)) switch (GB) {
          case "title":
            BB.push(CO("\xa9nam", YB));
            break;
          case "description":
            BB.push(CO("\xa9des", YB));
            break;
          case "artist":
            BB.push(CO("\xa9ART", YB));
            break;
          case "album":
            BB.push(CO("\xa9alb", YB));
            break;
          case "albumArtist":
            BB.push(CO("albr", YB));
            break;
          case "genre":
            BB.push(CO("\xa9gen", YB));
            break;
          case "date":
            BB.push(CO("\xa9day", YB.toISOString().slice(0, 10)));
            break;
          case "comment":
            BB.push(CO("\xa9cmt", YB));
            break;
          case "lyrics":
            BB.push(CO("\xa9lyr", YB));
            break;
          case "raw":
          case "discNumber":
          case "discsTotal":
          case "trackNumber":
          case "tracksTotal":
          case "beatsPerMinute":
          case "images":
            break;
          default:
            (0, jB.M)(GB)
        }
        if (OB.raw)
          for (const GB in OB.raw) {
            const YB = OB.raw[GB];
            null == YB || 4 !== GB.length || BB.some((BB => BB.type === GB)) || ("string" === typeof YB ? BB.push(CO(GB, YB)) : YB instanceof Uint8Array && BB.push(rB(GB, Array.from(YB))))
          }
      },
      CO = (BB, OB) => {
        const GB = jB.Bd.encode(OB);
        return rB(BB, [nB(GB.length), nB(oG("und")), Array.from(GB)])
      },
      HO = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      vO = (BB, OB) => {
        const GB = [];
        for (const {
            key: YB,
            value: DB
          }
          of(0, jB.rc)(BB)) switch (YB) {
          case "title":
            GB.push({
              key: OB ? "title" : "\xa9nam",
              value: tO(DB)
            });
            break;
          case "description":
            GB.push({
              key: OB ? "description" : "\xa9des",
              value: tO(DB)
            });
            break;
          case "artist":
            GB.push({
              key: OB ? "artist" : "\xa9ART",
              value: tO(DB)
            });
            break;
          case "album":
            GB.push({
              key: OB ? "album" : "\xa9alb",
              value: tO(DB)
            });
            break;
          case "albumArtist":
            GB.push({
              key: OB ? "album_artist" : "aART",
              value: tO(DB)
            });
            break;
          case "comment":
            GB.push({
              key: OB ? "comment" : "\xa9cmt",
              value: tO(DB)
            });
            break;
          case "genre":
            GB.push({
              key: OB ? "genre" : "\xa9gen",
              value: tO(DB)
            });
            break;
          case "beatsPerMinute":
            OB || GB.push({
              key: "tmpo",
              value: rB("data", [kB(21), kB(0), nB(DB)])
            });
            break;
          case "lyrics":
            GB.push({
              key: OB ? "lyrics" : "\xa9lyr",
              value: tO(DB)
            });
            break;
          case "date":
            GB.push({
              key: OB ? "date" : "\xa9day",
              value: tO(DB.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const BB of DB) "coverFront" === BB.kind && GB.push({
              key: "covr",
              value: rB("data", [kB(HO[BB.mimeType] ?? 0), kB(0), Array.from(BB.data)])
            });
            break;
          case "trackNumber":
            if (OB) {
              const OB = void 0 !== BB.tracksTotal ? `${DB}/${BB.tracksTotal}` : DB.toString();
              GB.push({
                key: "track",
                value: tO(OB)
              })
            } else GB.push({
              key: "trkn",
              value: rB("data", [kB(0), kB(0), nB(0), nB(DB), nB(BB.tracksTotal ?? 0), nB(0)])
            });
            break;
          case "discNumber":
            OB || GB.push({
              key: "disc",
              value: rB("data", [kB(0), kB(0), nB(0), nB(DB), nB(BB.discsTotal ?? 0), nB(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, jB.M)(YB)
        }
        if (BB.raw)
          for (const YB in BB.raw) {
            const DB = BB.raw[YB];
            null == DB || !OB && 4 !== YB.length || GB.some((BB => BB.key === YB)) || ("string" === typeof DB ? GB.push({
              key: YB,
              value: tO(DB)
            }) : DB instanceof Uint8Array ? GB.push({
              key: YB,
              value: rB("data", [kB(0), kB(0), Array.from(DB)])
            }) : DB instanceof lB.h && GB.push({
              key: YB,
              value: rB("data", [kB(HO[DB.mimeType] ?? 0), kB(0), Array.from(DB.data)])
            }))
          }
        return GB
      },
      sO = BB => {
        const OB = vO(BB, !1);
        return 0 === OB.length ? null : XB("meta", 0, 0, void 0, [xB(!1, "mdir", "", "appl"), rB("ilst", void 0, OB.map((BB => rB(BB.key, void 0, [BB.value]))))])
      },
      xO = BB => {
        const OB = vO(BB, !0);
        return 0 === OB.length ? null : rB("meta", void 0, [xB(!1, "mdta", ""), XB("keys", 0, 0, [kB(OB.length)], OB.map((BB => rB("mdta", [...jB.Bd.encode(BB.key)])))), rB("ilst", void 0, OB.map(((BB, OB) => {
          const GB = String.fromCharCode(...kB(OB + 1));
          return rB(GB, void 0, [BB.value])
        })))])
      },
      tO = BB => rB("data", [kB(1), kB(0), ...jB.Bd.encode(BB)]),
      BG = (BB, OB) => {
        switch (BB) {
          case "avc":
            return OB.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return OB
        }
      },
      OG = {
        avc: BB => BB.info.decoderConfig && rB("avcC", [...(0, jB.Id)(BB.info.decoderConfig.description)]),
        hevc: BB => BB.info.decoderConfig && rB("hvcC", [...(0, jB.Id)(BB.info.decoderConfig.description)]),
        vp8: MO,
        vp9: MO,
        av1: BB => rB("av1C", (0, DB.F)(BB.info.decoderConfig.codec)),
        prores: null
      },
      GG = (BB, OB, GB) => {
        switch (BB) {
          case "aac":
          case "mp3":
          case "vorbis":
            return "mp4a";
          case "opus":
            return "Opus";
          case "flac":
            return "fLaC";
          case "ulaw":
            return "ulaw";
          case "alaw":
            return "alaw";
          case "pcm-u8":
            return "raw ";
          case "pcm-s8":
            return "sowt";
          case "ac3":
            return "ac-3";
          case "eac3":
            return "ec-3";
          case "dts":
            return OB
        }
        if (GB) switch (BB) {
          case "pcm-s16":
            return "sowt";
          case "pcm-s16be":
            return "twos";
          case "pcm-s24":
          case "pcm-s24be":
            return "in24";
          case "pcm-s32":
          case "pcm-s32be":
            return "in32";
          case "pcm-f32":
          case "pcm-f32be":
            return "fl32";
          case "pcm-f64":
          case "pcm-f64be":
            return "fl64"
        } else switch (BB) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
            return "ipcm";
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return "fpcm"
        }
      },
      YG = (BB, OB) => {
        switch (BB) {
          case "aac":
          case "mp3":
          case "vorbis":
            return zO;
          case "opus":
            return ZO;
          case "flac":
            return NO;
          case "ac3":
            return WO;
          case "eac3":
            return AO;
          case "dts":
            return VO
        }
        if (OB) switch (BB) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return lO
        } else switch (BB) {
          case "pcm-s16":
          case "pcm-s16be":
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return RO
        }
        return null
      },
      DG = {
        webvtt: "wvtt"
      },
      QG = {
        webvtt: BB => rB("vttC", [...jB.Bd.encode(BB.info.config.description)])
      },
      oG = BB => {
        (0, jB.Q)(3 === BB.length);
        let OB = 0;
        for (let GB = 0; GB < 3; GB++) OB <<= 5, OB += BB.charCodeAt(GB) - 96;
        return OB
      };
    var jG = GB(40633),
      yG = GB(40641);
    const JG = BB => {
        const OB = BB.filePos,
          GB = MB(BB, 9),
          YB = new ZB.e(GB);
        if (4095 !== YB.readBits(12)) return null;
        YB.skipBits(1);
        if (0 !== YB.readBits(2)) return null;
        const DB = YB.readBits(1),
          QB = YB.readBits(2) + 1,
          oB = YB.readBits(4);
        if (15 === oB) return null;
        YB.skipBits(1);
        const jB = YB.readBits(3);
        if (0 === jB) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        YB.skipBits(1), YB.skipBits(1), YB.skipBits(1), YB.skipBits(1);
        const yB = YB.readBits(13);
        YB.skipBits(11);
        const JB = YB.readBits(2) + 1;
        if (1 !== JB) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let PB = null;
        return 1 === DB ? BB.filePos -= 2 : PB = YB.readBits(16), {
          objectType: QB,
          samplingFrequencyIndex: oB,
          channelConfiguration: jB,
          frameLength: yB,
          numberOfAacFrames: JB,
          crcCheck: PB,
          startPos: OB
        }
      },
      MG = 57600,
      PG = BB => {
        const OB = {},
          GB = BB.track;
        return void 0 !== GB.metadata.name && (OB.name = GB.metadata.name), OB
      },
      zG = function(BB, OB) {
        const GB = BB * OB;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(GB) : GB
      },
      lG = BB => {
        if (0 === BB.samples.length) return 0;
        let OB = 1 / 0,
          GB = -1 / 0;
        for (let YB = 0; YB < BB.samples.length; YB++) {
          const DB = BB.samples[YB];
          DB.timestamp < OB && (OB = DB.timestamp), DB.timestamp + DB.duration > GB && (GB = DB.timestamp + DB.duration)
        }
        return OB === 1 / 0 ? 0 : GB - OB
      };
    class pG extends pB {
      constructor(BB, OB) {
        super(BB), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new yG.b, this.auxWriter = new jG.e(this.auxTarget, !1), this.auxBoxWriter = new WB(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, jB.Nc)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = OB, this.formatOptions = {
          ...OB._options
        }, this.isQuickTime = OB instanceof rG, this.isCmaf = OB instanceof gG, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (OB instanceof gG ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const BB = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((BB => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : BB instanceof yG.b)), this.boxWriter = new WB(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof yG.b && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const BB = await this.output._getInitTarget(),
            OB = new jG.e(BB, !0);
          OB.start(), this.initWriter = OB, this.initBoxWriter = new WB(OB)
        }
        const OB = this.output.tracks.some((BB => BB.isVideoTrack() && "avc" === BB.source._codec));
        {
          const BB = this.initBoxWriter ?? this.boxWriter;
          if ((0, jB.Q)(BB), this.formatOptions.onFtyp && BB.writer.startTrackingWrites(), BB.writeBox((BB => {
              const OB = 512;
              return BB.isQuickTime ? rB("ftyp", [LB("qt  "), kB(OB), LB("qt  ")]) : BB.fragmented ? BB.cmaf ? rB("ftyp", [LB("iso5"), kB(OB), LB("iso5"), LB("iso6"), LB("mp41"), LB("cmfc"), LB("dash")]) : rB("ftyp", [LB("iso5"), kB(OB), LB("iso5"), LB("iso6"), LB("mp41")]) : rB("ftyp", [LB("isom"), kB(OB), LB("isom"), BB.holdsAvc ? LB("avc1") : [], LB("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: OB,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: OB,
              start: GB
            } = BB.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(OB, GB)
          }
          this.ftypSize = BB.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const GB of this.output.tracks)
            if (void 0 === GB.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = cB(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const GB of this.output.tracks) GB.isVideoTrack() && GB.metadata.decoderConfig ? this.getVideoTrackData(GB, GB.metadata.primingPacket ?? null, {
          decoderConfig: GB.metadata.decoderConfig
        }) : GB.isAudioTrack() && GB.metadata.decoderConfig && this.getAudioTrackData(GB, GB.metadata.primingPacket ?? null, {
          decoderConfig: GB.metadata.decoderConfig
        });
        BB()
      }
      allTracksAreKnown() {
        for (const BB of this.output.tracks)
          if (!BB.source._closed && !this.trackDatas.some((OB => OB.track === BB))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const BB = this.trackDatas.map((BB => {
          if ("video" === BB.type) return BB.info.decoderConfig.codec;
          if ("audio" === BB.type) return BB.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [BB.track.source._codec]
        }));
        return (BB => {
          let OB = (BB.hasVideo ? "video/" : BB.hasAudio ? "audio/" : "application/") + (BB.isQuickTime ? "quicktime" : "mp4");
          BB.codecStrings.length > 0 && (OB += `; codecs="${[...new Set(BB.codecStrings)].join(", ")}"`);
          return OB
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((BB => "video" === BB.type)),
          hasAudio: this.trackDatas.some((BB => "audio" === BB.type)),
          codecStrings: BB
        })
      }
      getVideoTrackData(BB, OB, GB) {
        const YB = this.trackDatas.find((OB => OB.track === BB));
        if (YB) return YB;
        (0, DB.Y)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig);
        const QB = {
          ...GB.decoderConfig
        };
        (0, jB.Q)(void 0 !== QB.codedWidth), (0, jB.Q)(void 0 !== QB.codedHeight);
        let oB = !1;
        if ("avc" !== BB.source._codec || QB.description) {
          if ("hevc" === BB.source._codec && !QB.description) {
            if (!OB) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const BB = (0, qB.O)(OB.data);
            if (!BB) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            QB.description = (0, qB.wb)(BB), oB = !0
          }
        } else {
          if (!OB) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const BB = (0, qB.K)(OB.data);
          if (!BB) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          QB.description = (0, qB.ub)(BB), oB = !0
        }
        const yB = (0, jB.ub)(1 / (BB.metadata.frameRate ?? MG), 1e6).den,
          JB = QB.displayAspectWidth,
          MB = QB.displayAspectHeight,
          PB = void 0 === JB || void 0 === MB ? {
            num: 1,
            den: 1
          } : (0, jB.vd)({
            num: JB * QB.codedHeight,
            den: MB * QB.codedWidth
          }),
          zB = "ap4h" === QB.codec || "ap4x" === QB.codec,
          lB = {
            muxer: this,
            track: BB,
            type: "video",
            info: {
              width: QB.codedWidth,
              height: QB.codedHeight,
              pixelAspectRatio: PB,
              decoderConfig: QB,
              requiresAnnexBTransformation: oB,
              hasAlphaChannel: zB
            },
            timescale: yB,
            samples: [],
            sampleQueue: [],
            timestampProcessingQueue: [],
            timeToSampleTable: [],
            compositionTimeOffsetTable: [],
            lastTimescaleUnits: null,
            lastSample: null,
            startTimestampOffset: null,
            finalizedChunks: [],
            currentChunk: null,
            compactlyCodedChunkTable: [],
            closed: !1,
            avgBitrate: BB.source._nominalBitrate ?? BB.metadata.averageBitrate ?? 0,
            maxBitrate: BB.source._nominalBitrate ?? BB.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(lB), this.trackDatas.sort(((BB, OB) => BB.track.id - OB.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), lB
      }
      getAudioTrackData(BB, OB, GB) {
        const QB = this.trackDatas.find((OB => OB.track === BB));
        if (QB) return QB;
        (0, DB.V)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig);
        const oB = {
          ...GB.decoderConfig
        };
        let JB = !1;
        if ("aac" === BB.source._codec && !oB.description) {
          if (!OB) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const BB = JG(yB.tempFromBytes(OB.data));
          if (!BB) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const GB = YB.e[BB.samplingFrequencyIndex],
            DB = YB.d[BB.channelConfiguration];
          if (void 0 === GB || void 0 === DB) throw new Error("Invalid ADTS frame header.");
          oB.description = (0, YB.g)({
            objectType: BB.objectType,
            outputSampleRate: GB,
            outputNumberOfChannels: DB
          }), JB = !0
        }
        if (!OB) {
          if ("ac3" === BB.source._codec || "eac3" === BB.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === BB.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const MB = {
          muxer: this,
          track: BB,
          type: "audio",
          info: {
            numberOfChannels: GB.decoderConfig.numberOfChannels,
            sampleRate: GB.decoderConfig.sampleRate,
            decoderConfig: oB,
            requiresPcmTransformation: !this.isFragmented && DB.n.includes(BB.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: JB,
            primingPacket: OB
          },
          timescale: oB.sampleRate,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: BB.source._nominalBitrate ?? BB.metadata.averageBitrate ?? 0,
          maxBitrate: BB.source._nominalBitrate ?? BB.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(MB), this.trackDatas.sort(((BB, OB) => BB.track.id - OB.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), MB
      }
      getSubtitleTrackData(BB, OB) {
        const GB = this.trackDatas.find((OB => OB.track === BB));
        if (GB) return GB;
        (0, DB.X)(OB), (0, jB.Q)(OB), (0, jB.Q)(OB.config);
        const YB = {
          muxer: this,
          track: BB,
          type: "subtitle",
          info: {
            config: OB.config
          },
          timescale: 1e3,
          samples: [],
          sampleQueue: [],
          timestampProcessingQueue: [],
          timeToSampleTable: [],
          compositionTimeOffsetTable: [],
          lastTimescaleUnits: null,
          lastSample: null,
          startTimestampOffset: null,
          finalizedChunks: [],
          currentChunk: null,
          compactlyCodedChunkTable: [],
          closed: !1,
          avgBitrate: BB.source._nominalBitrate ?? BB.metadata.averageBitrate ?? 0,
          maxBitrate: BB.source._nominalBitrate ?? BB.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(YB), this.trackDatas.sort(((BB, OB) => BB.track.id - OB.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), YB
      }
      async addEncodedVideoPacket(BB, OB, GB) {
        const YB = await this.mutex.acquire();
        try {
          const YB = this.getVideoTrackData(BB, OB, GB);
          let DB = OB.data;
          if (YB.info.requiresAnnexBTransformation) {
            const BB = [...(0, qB.$)(DB)].map((BB => DB.subarray(BB.offset, BB.offset + BB.length)));
            if (0 === BB.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            DB = (0, qB.z)(BB, 4)
          }
          this.validateTimestamp(YB.track, OB.timestamp, "key" === OB.type);
          const QB = this.createSampleForTrack(YB, DB, OB.timestamp, OB.duration, OB.type);
          await this.registerSample(YB, QB)
        } finally {
          YB()
        }
      }
      async addEncodedAudioPacket(BB, OB, GB) {
        const YB = await this.mutex.acquire();
        try {
          const YB = this.getAudioTrackData(BB, OB, GB);
          let QB = OB.data;
          if (YB.info.requiresAdtsStripping) {
            const BB = JG(yB.tempFromBytes(QB));
            if (!BB) throw new Error("Expected ADTS frame, didn't get one.");
            const OB = null === BB.crcCheck ? 7 : 9;
            QB = QB.subarray(OB)
          }
          this.validateTimestamp(YB.track, OB.timestamp, "key" === OB.type);
          let oB = OB.timestamp,
            jB = OB.duration;
          if (YB.info.requiresPcmTransformation) {
            const BB = (0, DB.S)(YB.info.decoderConfig.codec).sampleSize * YB.info.numberOfChannels;
            if (jB = QB.byteLength / BB / YB.info.sampleRate, null !== YB.info.expectedNextPcmPacketTimestamp) {
              const BB = oB - YB.info.expectedNextPcmPacketTimestamp;
              if (BB < .01) oB = YB.info.expectedNextPcmPacketTimestamp;
              else {
                const OB = await this.padWithSilence(YB, YB.info.expectedNextPcmPacketTimestamp, BB);
                oB = YB.info.expectedNextPcmPacketTimestamp + OB
              }
            }
            YB.info.expectedNextPcmPacketTimestamp = oB + jB
          }
          const JB = this.createSampleForTrack(YB, QB, oB, jB, OB.type);
          await this.registerSample(YB, JB)
        } finally {
          YB()
        }
      }
      async padWithSilence(BB, OB, GB) {
        const YB = zG(GB, BB.timescale);
        if (GB = YB / BB.timescale, YB > 0) {
          const {
            sampleSize: QB,
            silentValue: oB
          } = (0, DB.S)(BB.info.decoderConfig.codec), jB = YB * BB.info.numberOfChannels, yB = new Uint8Array(QB * jB).fill(oB), JB = this.createSampleForTrack(BB, new Uint8Array(yB.buffer), OB, GB, "key");
          await this.registerSample(BB, JB)
        }
        return GB
      }
      async addSubtitleCue(BB, OB, GB) {
        const YB = await this.mutex.acquire();
        try {
          const YB = this.getSubtitleTrackData(BB, GB);
          this.validateTimestamp(YB.track, OB.timestamp, !0), "webvtt" === BB.source._codec && (YB.cueQueue.push(OB), await this.processWebVTTCues(YB, OB.timestamp))
        } finally {
          YB()
        }
      }
      async processWebVTTCues(BB, OB) {
        for (; BB.cueQueue.length > 0;) {
          BB.lastCueEndTimestamp ??= Math.min(0, BB.cueQueue[0].timestamp);
          const GB = new Set([]);
          for (const JB of BB.cueQueue)(0, jB.Q)(JB.timestamp <= OB), (0, jB.Q)(BB.lastCueEndTimestamp <= JB.timestamp + JB.duration), GB.add(Math.max(JB.timestamp, BB.lastCueEndTimestamp)), GB.add(JB.timestamp + JB.duration);
          const YB = [...GB].sort(((BB, OB) => BB - OB)),
            DB = YB[0],
            QB = YB[1] ?? DB;
          if (OB < QB) break;
          if (BB.lastCueEndTimestamp < DB) {
            this.auxWriter.seek(0);
            const OB = hO();
            this.auxBoxWriter.writeBox(OB);
            const GB = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              YB = this.createSampleForTrack(BB, GB, BB.lastCueEndTimestamp, DB - BB.lastCueEndTimestamp, "key");
            await this.registerSample(BB, YB), BB.lastCueEndTimestamp = DB
          }
          this.auxWriter.seek(0);
          for (let OB = 0; OB < BB.cueQueue.length; OB++) {
            const GB = BB.cueQueue[OB];
            if (GB.timestamp >= QB) break;
            NB.h.lastIndex = 0;
            const YB = NB.h.test(GB.text),
              oB = GB.timestamp + GB.duration;
            let jB = BB.cueToSourceId.get(GB);
            if (void 0 === jB && QB < oB && (jB = BB.nextSourceId++, BB.cueToSourceId.set(GB, jB)), GB.notes) {
              const BB = eO(GB.notes);
              this.auxBoxWriter.writeBox(BB)
            }
            const yB = aO(GB.text, YB ? DB : null, GB.identifier ?? null, GB.settings ?? null, jB ?? null);
            this.auxBoxWriter.writeBox(yB), oB === QB && BB.cueQueue.splice(OB--, 1)
          }
          const oB = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            yB = this.createSampleForTrack(BB, oB, DB, QB - DB, "key");
          await this.registerSample(BB, yB), BB.lastCueEndTimestamp = QB
        }
      }
      createSampleForTrack(BB, OB, GB, YB, DB) {
        return {
          timestamp: GB,
          decodeTimestamp: GB,
          duration: YB,
          data: OB,
          size: OB.byteLength,
          type: DB,
          timescaleUnitsToNextSample: zG(YB, BB.timescale)
        }
      }
      processTimestamps(BB, OB) {
        if (0 === BB.timestampProcessingQueue.length) return;
        if ("audio" === BB.type && BB.info.requiresPcmTransformation) {
          (0, jB.Q)(!this.isFragmented), BB.startTimestampOffset ??= BB.timestampProcessingQueue[0].timestamp;
          let OB = 0;
          for (let GB = 0; GB < BB.timestampProcessingQueue.length; GB++) {
            const YB = BB.timestampProcessingQueue[GB];
            OB += zG(YB.duration, BB.timescale)
          }
          if (0 === BB.timeToSampleTable.length) BB.timeToSampleTable.push({
            sampleCount: OB,
            sampleDelta: 1
          });
          else {
            (0, jB.sc)(BB.timeToSampleTable).sampleCount += OB
          }
          return void(BB.timestampProcessingQueue.length = 0)
        }
        const GB = BB.timestampProcessingQueue.map((BB => BB.timestamp)).sort(((BB, OB) => BB - OB));
        this.isFragmented ? BB.startTimestampOffset ??= Math.min(GB[0], 0) : BB.startTimestampOffset ??= GB[0];
        for (let YB = 0; YB < BB.timestampProcessingQueue.length; YB++) {
          const OB = BB.timestampProcessingQueue[YB];
          OB.decodeTimestamp = GB[YB];
          const DB = zG(OB.timestamp - OB.decodeTimestamp, BB.timescale),
            QB = zG(OB.duration, BB.timescale);
          if (null !== BB.lastTimescaleUnits) {
            (0, jB.Q)(BB.lastSample);
            const GB = zG(OB.decodeTimestamp, BB.timescale, !1),
              YB = Math.round(GB - BB.lastTimescaleUnits);
            if ((0, jB.Q)(YB >= 0), BB.lastTimescaleUnits += YB, BB.lastSample.timescaleUnitsToNextSample = YB, !this.isFragmented) {
              let OB = (0, jB.sc)(BB.timeToSampleTable);
              if ((0, jB.Q)(OB), 1 === OB.sampleCount) {
                OB.sampleDelta = YB;
                const GB = BB.timeToSampleTable[BB.timeToSampleTable.length - 2];
                GB && GB.sampleDelta === YB && (GB.sampleCount++, BB.timeToSampleTable.pop(), OB = GB)
              } else OB.sampleDelta !== YB && (OB.sampleCount--, BB.timeToSampleTable.push(OB = {
                sampleCount: 1,
                sampleDelta: YB
              }));
              OB.sampleDelta === QB ? OB.sampleCount++ : BB.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: QB
              });
              const GB = (0, jB.sc)(BB.compositionTimeOffsetTable);
              (0, jB.Q)(GB), GB.sampleCompositionTimeOffset === DB ? GB.sampleCount++ : BB.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: DB
              })
            }
          } else BB.lastTimescaleUnits = zG(OB.decodeTimestamp, BB.timescale, !1), this.isFragmented || (BB.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: QB
          }), BB.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: DB
          }));
          BB.lastSample = OB
        }
        if (BB.timestampProcessingQueue.length = 0, (0, jB.Q)(BB.lastSample), (0, jB.Q)(null !== BB.lastTimescaleUnits), void 0 !== OB && 0 === BB.lastSample.timescaleUnitsToNextSample) {
          (0, jB.Q)("key" === OB.type);
          const GB = zG(OB.timestamp, BB.timescale, !1),
            YB = Math.round(GB - BB.lastTimescaleUnits);
          BB.lastSample.timescaleUnitsToNextSample = YB
        }
      }
      async registerSample(BB, OB) {
        "key" === OB.type && this.processTimestamps(BB, OB), BB.timestampProcessingQueue.push(OB), this.isFragmented ? (BB.sampleQueue.push(OB), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(BB, OB) : await this.addSampleToTrack(BB, OB)
      }
      async addSampleToTrack(BB, OB) {
        if (!this.isFragmented && (BB.samples.push(OB), "reserve" === this.fastStart)) {
          const OB = BB.track.metadata.maximumPacketCount;
          if ((0, jB.Q)(void 0 !== OB), BB.samples.length > OB) throw new Error(`Track #${BB.track.id} has already reached the maximum packet count (${OB}). Either add less packets or increase the maximum packet count.`)
        }
        let GB = !1;
        if (BB.currentChunk) {
          BB.currentChunk.startTimestamp = Math.min(BB.currentChunk.startTimestamp, OB.timestamp);
          const YB = OB.timestamp - BB.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const DB = this.trackDatas.every((GB => {
              if (BB === GB) return "key" === OB.type;
              const YB = GB.sampleQueue[0];
              return YB ? "key" === YB.type : GB.closed
            }));
            YB >= this.minimumFragmentDuration && DB && OB.timestamp > this.maxWrittenTimestamp && (GB = !0, await this.finalizeFragment())
          } else GB = YB >= .5
        } else GB = !0;
        GB && (BB.currentChunk && await this.finalizeCurrentChunk(BB), BB.currentChunk = {
          startTimestamp: OB.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, jB.Q)(BB.currentChunk), BB.currentChunk.samples.push(OB), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, OB.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, OB.timestamp + OB.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, OB.timestamp))
      }
      async finalizeCurrentChunk(BB) {
        if ((0, jB.Q)(!this.isFragmented), (0, jB.Q)(this.writer), !BB.currentChunk) return;
        BB.finalizedChunks.push(BB.currentChunk), this.finalizedChunks.push(BB.currentChunk);
        let OB = BB.currentChunk.samples.length;
        if ("audio" === BB.type && BB.info.requiresPcmTransformation && (OB = BB.currentChunk.samples.reduce(((OB, GB) => OB + zG(GB.duration, BB.timescale)), 0)), 0 !== BB.compactlyCodedChunkTable.length && (0, jB.sc)(BB.compactlyCodedChunkTable).samplesPerChunk === OB || BB.compactlyCodedChunkTable.push({
            firstChunk: BB.finalizedChunks.length,
            samplesPerChunk: OB
          }), "in-memory" !== this.fastStart) {
          BB.currentChunk.offset = this.writer.getPos();
          for (const OB of BB.currentChunk.samples)(0, jB.Q)(OB.data), this.writer.write(OB.data), OB.data = null;
          await this.writer.flush()
        } else BB.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, jB.Q)(this.isFragmented), BB || this.allTracksAreKnown()) BB: for (;;) {
          let OB = null,
            GB = 1 / 0;
          for (const DB of this.trackDatas) {
            if (!BB && 0 === DB.sampleQueue.length && !DB.closed) break BB;
            DB.sampleQueue.length > 0 && DB.sampleQueue[0].timestamp < GB && (OB = DB, GB = DB.sampleQueue[0].timestamp)
          }
          if (!OB) break;
          const YB = OB.sampleQueue.shift();
          await this.addSampleToTrack(OB, YB)
        }
      }
      async finalizeFragment() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, jB.Q)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const BB = this.initBoxWriter ?? this.boxWriter;
          (0, jB.Q)(BB), this.formatOptions.onMoov && BB.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const OB = hB(this);
          if (BB.writeBox(OB), this.formatOptions.onMoov) {
            const {
              data: OB,
              start: GB
            } = BB.writer.stopTrackingWrites();
            this.formatOptions.onMoov(OB, GB)
          }
          if (this.isCmaf) {
            (0, jB.Q)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new WB(this.writer);
            const BB = this.boxWriter.measureBox(wB()),
              OB = this.boxWriter.measureBox(EB(this, 0));
            this.segmentHeaderSize = BB + OB, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter);
        const OB = this.trackDatas.filter((BB => BB.currentChunk));
        if (0 === OB.length) return void(BB && await this.writer.flush());
        const GB = this.nextFragmentNumber++,
          YB = FO(GB, OB),
          DB = this.writer.getPos(),
          QB = DB + this.boxWriter.measureBox(YB);
        let oB = QB + 8,
          yB = 1 / 0;
        for (let lB = 0; lB < OB.length; lB++) {
          const BB = OB[lB];
          (0, jB.Q)(BB.currentChunk), (0, jB.Q)(null !== BB.startTimestampOffset), BB.currentChunk.offset = oB, BB.currentChunk.moofOffset = DB, BB.currentChunk.trafIndex = lB, BB.currentChunk.startTimestamp -= BB.startTimestampOffset;
          for (const OB of BB.currentChunk.samples) oB += OB.size, OB.timestamp -= BB.startTimestampOffset, OB.decodeTimestamp -= BB.startTimestampOffset;
          yB = Math.min(yB, BB.currentChunk.startTimestamp)
        }
        const JB = oB - QB,
          MB = JB >= 2 ** 32;
        if (MB)
          for (const jB of OB) jB.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const PB = FO(GB, OB);
        if (this.boxWriter.writeBox(PB), this.formatOptions.onMoof) {
          const {
            data: BB,
            start: OB
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(BB, OB, yB)
        }(0, jB.Q)(this.writer.getPos() === QB), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const zB = cB(MB);
        zB.size = JB, this.boxWriter.writeBox(zB), this.writer.seek(QB + (MB ? 16 : 8));
        for (const jB of OB)
          for (const BB of jB.currentChunk.samples) this.writer.write(BB.data), BB.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: BB,
            start: OB
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(BB, OB)
        }
        for (const jB of OB) jB.finalizedChunks.push(jB.currentChunk), this.finalizedChunks.push(jB.currentChunk), jB.currentChunk = null;
        BB && await this.writer.flush()
      }
      async registerSampleFastStartReserve(BB, OB) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(BB, OB)) : BB.sampleQueue.push(OB)
      }
      async createFastStartReserveMdat() {
        (0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter), this.ensureOneEnabledTrack();
        const BB = hB(this),
          OB = this.boxWriter.measureBox(BB) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, jB.Q)(null !== this.ftypSize), this.writer.seek(this.ftypSize + OB), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = cB(!0), this.boxWriter.writeBox(this.mdat);
        for (const GB of this.trackDatas) {
          for (const BB of GB.sampleQueue) await this.addSampleToTrack(GB, BB);
          GB.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, jB.Q)("reserve" === this.fastStart);
        let BB = 0;
        for (const OB of this.trackDatas) {
          const GB = OB.track.metadata.maximumPacketCount;
          (0, jB.Q)(void 0 !== GB), BB += 8 * Math.ceil(2 / 3 * GB), BB += 4 * GB, BB += 8 * Math.ceil(2 / 3 * GB), BB += 12 * Math.ceil(2 / 3 * GB), BB += 4 * GB, BB += 8 * GB
        }
        return BB
      }
      async onTrackClose(BB) {
        const OB = await this.mutex.acquire(),
          GB = this.trackDatas.find((OB => OB.track === BB));
        GB && (GB.closed = !0, "subtitle" === GB.type && "webvtt" === BB.source._codec && await this.processWebVTTCues(GB, 1 / 0), this.processTimestamps(GB)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), OB()
      }
      ensureOneEnabledTrack() {
        for (const BB of ["video", "audio", "subtitle"]) {
          const OB = this.trackDatas.filter((OB => OB.type === BB));
          if (0 === OB.length) continue;
          if (!OB.some((BB => !1 !== BB.track.metadata.disposition?.default))) {
            const BB = OB[0];
            BB.track.metadata.disposition = {
              ...BB.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, jB.Q)(this.isFragmented);
        const BB = await this.mutex.acquire();
        try {
          for (const BB of this.trackDatas) "subtitle" === BB.type && "webvtt" === BB.track.source._codec && await this.processWebVTTCues(BB, 1 / 0), this.processTimestamps(BB);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          BB()
        }
      }
      async finalize() {
        const BB = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const GB of this.trackDatas) GB.closed = !0, "subtitle" === GB.type && "webvtt" === GB.track.source._codec && await this.processWebVTTCues(GB, 1 / 0), this.processTimestamps(GB);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const GB of this.trackDatas) {
            await this.finalizeCurrentChunk(GB);
            const BB = lG(GB);
            if (BB > 0) {
              let OB = 0;
              for (const BB of GB.samples) OB += BB.size;
              GB.avgBitrate = Math.round(8 * OB / BB)
            } else GB.avgBitrate = 0;
            let OB = 0,
              YB = 0,
              DB = 0;
            for (let QB = 0; QB < GB.samples.length; QB++) {
              const BB = GB.samples[QB];
              for (YB += BB.size; BB.decodeTimestamp - GB.samples[OB].decodeTimestamp >= 1;) YB -= GB.samples[OB].size, OB++;
              DB = Math.max(DB, YB)
            }
            if (GB.maxBitrate = 8 * DB, null !== GB.startTimestampOffset)
              for (let QB = 0; QB < GB.samples.length; QB++) {
                const BB = GB.samples[QB];
                BB.timestamp -= GB.startTimestampOffset, BB.decodeTimestamp -= GB.startTimestampOffset
              }
          }
        if ((0, jB.Q)(this.writer), (0, jB.Q)(this.boxWriter), "in-memory" === this.fastStart) {
          let BB;
          this.mdat = cB(!1);
          for (let GB = 0; GB < 2; GB++) {
            const OB = hB(this),
              GB = this.boxWriter.measureBox(OB);
            BB = this.boxWriter.measureBox(this.mdat);
            let YB = this.writer.getPos() + GB + BB;
            for (const DB of this.finalizedChunks) {
              DB.offset = YB;
              for (const {
                  data: OB
                }
                of DB.samples)(0, jB.Q)(OB), YB += OB.byteLength, BB += OB.byteLength
            }
            if (YB < 2 ** 32) break;
            BB >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const OB = hB(this);
          if (this.boxWriter.writeBox(OB), this.formatOptions.onMoov) {
            const {
              data: BB,
              start: OB
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(BB, OB)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = BB, this.boxWriter.writeBox(this.mdat);
          for (const GB of this.finalizedChunks)
            for (const BB of GB.samples)(0, jB.Q)(BB.data), this.writer.write(BB.data), BB.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: BB,
              start: OB
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(BB, OB)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const BB = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(wB()), this.boxWriter.writeBox(EB(this, BB))
          } else {
            const BB = this.writer.getPos(),
              GB = (OB = this.trackDatas, rB("mfra", void 0, [...OB.map(EO), cO()]));
            this.boxWriter.writeBox(GB);
            const YB = this.writer.getPos() - BB;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(YB)
          }
        else {
          (0, jB.Q)(this.mdat);
          const BB = this.boxWriter.offsets.get(this.mdat);
          (0, jB.Q)(void 0 !== BB);
          const OB = this.writer.getPos() - BB;
          if (this.mdat.size = OB, this.mdat.largeSize = OB >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: BB,
              start: OB
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(BB, OB)
          }
          const GB = hB(this);
          if ("reserve" === this.fastStart) {
            (0, jB.Q)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(GB);
            const BB = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: BB
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(GB);
          if (this.formatOptions.onMoov) {
            const {
              data: BB,
              start: OB
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(BB, OB)
          }
        }
        var OB;
        BB()
      }
    }
    class qG {
      constructor(BB) {
        this.value = BB
      }
    }
    class ZG {
      constructor(BB) {
        this.value = BB
      }
    }
    class NG {
      constructor(BB) {
        this.value = BB
      }
    }
    class RG {
      constructor(BB) {
        this.value = BB
      }
    }
    var WG;
    ! function(BB) {
      BB[BB.EBML = 440786851] = "EBML", BB[BB.EBMLVersion = 17030] = "EBMLVersion", BB[BB.EBMLReadVersion = 17143] = "EBMLReadVersion", BB[BB.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", BB[BB.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", BB[BB.DocType = 17026] = "DocType", BB[BB.DocTypeVersion = 17031] = "DocTypeVersion", BB[BB.DocTypeReadVersion = 17029] = "DocTypeReadVersion", BB[BB.Void = 236] = "Void", BB[BB.Segment = 408125543] = "Segment", BB[BB.SeekHead = 290298740] = "SeekHead", BB[BB.Seek = 19899] = "Seek", BB[BB.SeekID = 21419] = "SeekID", BB[BB.SeekPosition = 21420] = "SeekPosition", BB[BB.Duration = 17545] = "Duration", BB[BB.Info = 357149030] = "Info", BB[BB.TimestampScale = 2807729] = "TimestampScale", BB[BB.MuxingApp = 19840] = "MuxingApp", BB[BB.WritingApp = 22337] = "WritingApp", BB[BB.Tracks = 374648427] = "Tracks", BB[BB.TrackEntry = 174] = "TrackEntry", BB[BB.TrackNumber = 215] = "TrackNumber", BB[BB.TrackUID = 29637] = "TrackUID", BB[BB.TrackType = 131] = "TrackType", BB[BB.FlagEnabled = 185] = "FlagEnabled", BB[BB.FlagDefault = 136] = "FlagDefault", BB[BB.FlagForced = 21930] = "FlagForced", BB[BB.FlagOriginal = 21934] = "FlagOriginal", BB[BB.FlagHearingImpaired = 21931] = "FlagHearingImpaired", BB[BB.FlagVisualImpaired = 21932] = "FlagVisualImpaired", BB[BB.FlagCommentary = 21935] = "FlagCommentary", BB[BB.FlagLacing = 156] = "FlagLacing", BB[BB.Name = 21358] = "Name", BB[BB.Language = 2274716] = "Language", BB[BB.LanguageBCP47 = 2274717] = "LanguageBCP47", BB[BB.CodecID = 134] = "CodecID", BB[BB.CodecPrivate = 25506] = "CodecPrivate", BB[BB.CodecDelay = 22186] = "CodecDelay", BB[BB.SeekPreRoll = 22203] = "SeekPreRoll", BB[BB.DefaultDuration = 2352003] = "DefaultDuration", BB[BB.Video = 224] = "Video", BB[BB.PixelWidth = 176] = "PixelWidth", BB[BB.PixelHeight = 186] = "PixelHeight", BB[BB.DisplayWidth = 21680] = "DisplayWidth", BB[BB.DisplayHeight = 21690] = "DisplayHeight", BB[BB.DisplayUnit = 21682] = "DisplayUnit", BB[BB.AlphaMode = 21440] = "AlphaMode", BB[BB.Audio = 225] = "Audio", BB[BB.SamplingFrequency = 181] = "SamplingFrequency", BB[BB.Channels = 159] = "Channels", BB[BB.BitDepth = 25188] = "BitDepth", BB[BB.SimpleBlock = 163] = "SimpleBlock", BB[BB.BlockGroup = 160] = "BlockGroup", BB[BB.Block = 161] = "Block", BB[BB.BlockAdditions = 30113] = "BlockAdditions", BB[BB.BlockMore = 166] = "BlockMore", BB[BB.BlockAdditional = 165] = "BlockAdditional", BB[BB.BlockAddID = 238] = "BlockAddID", BB[BB.BlockDuration = 155] = "BlockDuration", BB[BB.ReferenceBlock = 251] = "ReferenceBlock", BB[BB.Cluster = 524531317] = "Cluster", BB[BB.Timestamp = 231] = "Timestamp", BB[BB.Cues = 475249515] = "Cues", BB[BB.CuePoint = 187] = "CuePoint", BB[BB.CueTime = 179] = "CueTime", BB[BB.CueTrackPositions = 183] = "CueTrackPositions", BB[BB.CueTrack = 247] = "CueTrack", BB[BB.CueClusterPosition = 241] = "CueClusterPosition", BB[BB.Colour = 21936] = "Colour", BB[BB.MatrixCoefficients = 21937] = "MatrixCoefficients", BB[BB.TransferCharacteristics = 21946] = "TransferCharacteristics", BB[BB.Primaries = 21947] = "Primaries", BB[BB.Range = 21945] = "Range", BB[BB.Projection = 30320] = "Projection", BB[BB.ProjectionType = 30321] = "ProjectionType", BB[BB.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", BB[BB.ProjectionPosePitch = 30324] = "ProjectionPosePitch", BB[BB.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", BB[BB.Attachments = 423732329] = "Attachments", BB[BB.AttachedFile = 24999] = "AttachedFile", BB[BB.FileDescription = 18046] = "FileDescription", BB[BB.FileName = 18030] = "FileName", BB[BB.FileMediaType = 18016] = "FileMediaType", BB[BB.FileData = 18012] = "FileData", BB[BB.FileUID = 18094] = "FileUID", BB[BB.Chapters = 272869232] = "Chapters", BB[BB.Tags = 307544935] = "Tags", BB[BB.Tag = 29555] = "Tag", BB[BB.Targets = 25536] = "Targets", BB[BB.TargetTypeValue = 26826] = "TargetTypeValue", BB[BB.TargetType = 25546] = "TargetType", BB[BB.TagTrackUID = 25541] = "TagTrackUID", BB[BB.TagEditionUID = 25545] = "TagEditionUID", BB[BB.TagChapterUID = 25540] = "TagChapterUID", BB[BB.TagAttachmentUID = 25542] = "TagAttachmentUID", BB[BB.SimpleTag = 26568] = "SimpleTag", BB[BB.TagName = 17827] = "TagName", BB[BB.TagLanguage = 17530] = "TagLanguage", BB[BB.TagString = 17543] = "TagString", BB[BB.TagBinary = 17541] = "TagBinary", BB[BB.ContentEncodings = 28032] = "ContentEncodings", BB[BB.ContentEncoding = 25152] = "ContentEncoding", BB[BB.ContentEncodingOrder = 20529] = "ContentEncodingOrder", BB[BB.ContentEncodingScope = 20530] = "ContentEncodingScope", BB[BB.ContentCompression = 20532] = "ContentCompression", BB[BB.ContentCompAlgo = 16980] = "ContentCompAlgo", BB[BB.ContentCompSettings = 16981] = "ContentCompSettings", BB[BB.ContentEncryption = 20533] = "ContentEncryption"
    }(WG || (WG = {}));
    WG.EBML, WG.Segment, WG.SeekHead, WG.Info, WG.Cluster, WG.Tracks, WG.Cues, WG.Attachments, WG.Chapters, WG.Tags;
    const AG = BB => BB < 256 ? 1 : BB < 65536 ? 2 : BB < 1 << 24 ? 3 : BB < 2 ** 32 ? 4 : BB < 2 ** 40 ? 5 : 6,
      VG = BB => BB < 256n ? 1 : BB < 65536n ? 2 : BB < 1n << 24n ? 3 : BB < 1n << 32n ? 4 : BB < 1n << 40n ? 5 : BB < 1n << 48n ? 6 : BB < 1n << 56n ? 7 : 8,
      SG = BB => BB >= -64 && BB < 64 ? 1 : BB >= -8192 && BB < 8192 ? 2 : BB >= -1048576 && BB < 1 << 20 ? 3 : BB >= -(1 << 27) && BB < 1 << 27 ? 4 : BB >= -(2 ** 34) && BB < 2 ** 34 ? 5 : 6;
    class nG {
      constructor(BB) {
        this.writer = BB, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(BB) {
        this.helperView.setUint8(0, BB), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(BB) {
        this.helperView.setFloat32(0, BB, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(BB) {
        this.helperView.setFloat64(0, BB, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AG(BB),
          GB = 0;
        switch (OB) {
          case 6:
            this.helperView.setUint8(GB++, BB / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(GB++, BB / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(GB++, BB >> 24);
          case 3:
            this.helperView.setUint8(GB++, BB >> 16);
          case 2:
            this.helperView.setUint8(GB++, BB >> 8);
          case 1:
            this.helperView.setUint8(GB++, BB);
            break;
          default:
            throw new Error("Bad unsigned int size " + OB)
        }
        this.writer.write(this.helper.subarray(0, GB))
      }
      writeUnsignedBigInt(BB) {
        let OB = 0;
        for (let GB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VG(BB)) - 1; GB >= 0; GB--) this.helperView.setUint8(OB++, Number(BB >> BigInt(8 * GB) & 0xffn));
        this.writer.write(this.helper.subarray(0, OB))
      }
      writeSignedInt(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG(BB);
        BB < 0 && (BB += 2 ** (8 * OB)), this.writeUnsignedInt(BB, OB)
      }
      writeVarInt(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (BB => {
            if (BB < 127) return 1;
            if (BB < 16383) return 2;
            if (BB < 2097151) return 3;
            if (BB < 268435455) return 4;
            if (BB < 2 ** 35 - 1) return 5;
            if (BB < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + BB)
          })(BB),
          GB = 0;
        switch (OB) {
          case 1:
            this.helperView.setUint8(GB++, 128 | BB);
            break;
          case 2:
            this.helperView.setUint8(GB++, 64 | BB >> 8), this.helperView.setUint8(GB++, BB);
            break;
          case 3:
            this.helperView.setUint8(GB++, 32 | BB >> 16), this.helperView.setUint8(GB++, BB >> 8), this.helperView.setUint8(GB++, BB);
            break;
          case 4:
            this.helperView.setUint8(GB++, 16 | BB >> 24), this.helperView.setUint8(GB++, BB >> 16), this.helperView.setUint8(GB++, BB >> 8), this.helperView.setUint8(GB++, BB);
            break;
          case 5:
            this.helperView.setUint8(GB++, 8 | BB / 2 ** 32 & 7), this.helperView.setUint8(GB++, BB >> 24), this.helperView.setUint8(GB++, BB >> 16), this.helperView.setUint8(GB++, BB >> 8), this.helperView.setUint8(GB++, BB);
            break;
          case 6:
            this.helperView.setUint8(GB++, 4 | BB / 2 ** 40 & 3), this.helperView.setUint8(GB++, BB / 2 ** 32 | 0), this.helperView.setUint8(GB++, BB >> 24), this.helperView.setUint8(GB++, BB >> 16), this.helperView.setUint8(GB++, BB >> 8), this.helperView.setUint8(GB++, BB);
            break;
          default:
            throw new Error("Bad EBML varint size " + OB)
        }
        this.writer.write(this.helper.subarray(0, GB))
      }
      writeAsciiString(BB) {
        this.writer.write(new Uint8Array(BB.split("").map((BB => BB.charCodeAt(0)))))
      }
      writeEBML(BB) {
        if (null !== BB)
          if (BB instanceof Uint8Array) this.writer.write(BB);
          else if (Array.isArray(BB))
          for (const OB of BB) this.writeEBML(OB);
        else if (this.offsets.set(BB, this.writer.getPos()), this.writeUnsignedInt(BB.id), Array.isArray(BB.data)) {
          const OB = this.writer.getPos(),
            GB = -1 === BB.size ? 1 : BB.size ?? 4; - 1 === BB.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + GB);
          const YB = this.writer.getPos();
          if (this.dataOffsets.set(BB, YB), this.writeEBML(BB.data), -1 !== BB.size) {
            const BB = this.writer.getPos() - YB,
              DB = this.writer.getPos();
            this.writer.seek(OB), this.writeVarInt(BB, GB), this.writer.seek(DB)
          }
        } else if ("number" === typeof BB.data) {
          const OB = BB.size ?? AG(BB.data);
          this.writeVarInt(OB), this.writeUnsignedInt(BB.data, OB)
        } else if ("bigint" === typeof BB.data) {
          const OB = BB.size ?? VG(BB.data);
          this.writeVarInt(OB), this.writeUnsignedBigInt(BB.data, OB)
        } else if ("string" === typeof BB.data) this.writeVarInt(BB.data.length), this.writeAsciiString(BB.data);
        else if (BB.data instanceof Uint8Array) this.writeVarInt(BB.data.byteLength, BB.size), this.writer.write(BB.data);
        else if (BB.data instanceof qG) this.writeVarInt(4), this.writeFloat32(BB.data.value);
        else if (BB.data instanceof ZG) this.writeVarInt(8), this.writeFloat64(BB.data.value);
        else if (BB.data instanceof NG) {
          const OB = BB.size ?? SG(BB.data.value);
          this.writeVarInt(OB), this.writeSignedInt(BB.data.value, OB)
        } else if (BB.data instanceof RG) {
          const OB = jB.Bd.encode(BB.data.value);
          this.writeVarInt(OB.length), this.writer.write(OB)
        } else(0, jB.M)(BB.data)
      }
    }
    const UG = {
      avc: "V_MPEG4/ISO/AVC",
      hevc: "V_MPEGH/ISO/HEVC",
      vp8: "V_VP8",
      vp9: "V_VP9",
      av1: "V_AV1",
      prores: "V_PRORES",
      aac: "A_AAC",
      mp3: "A_MPEG/L3",
      opus: "A_OPUS",
      vorbis: "A_VORBIS",
      flac: "A_FLAC",
      ac3: "A_AC3",
      eac3: "A_EAC3",
      dts: "A_DTS",
      "pcm-u8": "A_PCM/INT/LIT",
      "pcm-s16": "A_PCM/INT/LIT",
      "pcm-s16be": "A_PCM/INT/BIG",
      "pcm-s24": "A_PCM/INT/LIT",
      "pcm-s24be": "A_PCM/INT/BIG",
      "pcm-s32": "A_PCM/INT/LIT",
      "pcm-s32be": "A_PCM/INT/BIG",
      "pcm-f32": "A_PCM/FLOAT/IEEE",
      "pcm-f64": "A_PCM/FLOAT/IEEE",
      webvtt: "S_TEXT/WEBVTT"
    };
    const fG = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class kG extends pB {
      constructor(BB, OB) {
        super(BB), this.trackDatas = [], this.allTracksKnown = (0, jB.Nc)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = OB
      }
      async start() {
        const BB = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new nG(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const OB of this.output.tracks) OB.isVideoTrack() && OB.metadata.decoderConfig ? this.getVideoTrackData(OB, OB.metadata.primingPacket ?? null, {
          decoderConfig: OB.metadata.decoderConfig
        }) : OB.isAudioTrack() && OB.metadata.decoderConfig && this.getAudioTrackData(OB, OB.metadata.primingPacket ?? null, {
          decoderConfig: OB.metadata.decoderConfig
        });
        BB()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const BB = {
          id: WG.EBML,
          data: [{
            id: WG.EBMLVersion,
            data: 1
          }, {
            id: WG.EBMLReadVersion,
            data: 1
          }, {
            id: WG.EBMLMaxIDLength,
            data: 4
          }, {
            id: WG.EBMLMaxSizeLength,
            data: 8
          }, {
            id: WG.DocType,
            data: this.format instanceof wG ? "webm" : "matroska"
          }, {
            id: WG.DocTypeVersion,
            data: 4
          }, {
            id: WG.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(BB), this.format._options.onEbmlHeader) {
          const {
            data: BB,
            start: OB
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(BB, OB)
        }
      }
      maybeCreateSeekHead(BB) {
        if (this.format._options.appendOnly) return;
        const OB = new Uint8Array([28, 83, 187, 107]),
          GB = new Uint8Array([21, 73, 169, 102]),
          YB = new Uint8Array([22, 84, 174, 107]),
          DB = new Uint8Array([25, 65, 164, 105]),
          QB = new Uint8Array([18, 84, 195, 103]),
          oB = {
            id: WG.SeekHead,
            data: [{
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: GB
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: BB ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: YB
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: BB ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: DB
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: BB ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: QB
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: BB ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: WG.Seek,
              data: [{
                id: WG.SeekID,
                data: OB
              }, {
                id: WG.SeekPosition,
                size: 5,
                data: BB ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = oB
      }
      createSegmentInfo() {
        const BB = {
          id: WG.Duration,
          data: new ZG(0)
        };
        this.segmentDuration = BB;
        const OB = {
          id: WG.Info,
          data: [{
            id: WG.TimestampScale,
            data: 1e6
          }, {
            id: WG.MuxingApp,
            data: RB.c
          }, {
            id: WG.WritingApp,
            data: RB.c
          }, this.format._options.appendOnly ? null : BB]
        };
        this.segmentInfo = OB
      }
      createTracks() {
        const BB = {
          id: WG.Tracks,
          data: []
        };
        this.tracksElement = BB;
        for (const OB of this.trackDatas) {
          let GB = UG[OB.track.source._codec];
          (0, jB.Q)(GB), "audio" === OB.type && "dts" === OB.track.source._codec && ("dtse" === OB.info.decoderConfig.codec ? GB = "A_DTS/EXPRESS" : "dtsl" === OB.info.decoderConfig.codec && (GB = "A_DTS/LOSSLESS"));
          let YB = 0;
          if ("audio" === OB.type && "opus" === OB.track.source._codec) {
            YB = 8e7;
            const BB = OB.info.decoderConfig.description;
            if (BB) {
              const OB = (0, jB.Id)(BB),
                GB = (0, qB.rb)(OB);
              YB = Math.round(GB.preSkip / DB.k * 1e9)
            }
          }
          BB.data.push({
            id: WG.TrackEntry,
            data: [{
              id: WG.TrackNumber,
              data: OB.track.id
            }, {
              id: WG.TrackUID,
              data: OB.track.id
            }, {
              id: WG.TrackType,
              data: fG[OB.type]
            }, !1 === OB.track.metadata.disposition?.default ? {
              id: WG.FlagDefault,
              data: 0
            } : null, OB.track.metadata.disposition?.forced ? {
              id: WG.FlagForced,
              data: 1
            } : null, OB.track.metadata.disposition?.hearingImpaired ? {
              id: WG.FlagHearingImpaired,
              data: 1
            } : null, OB.track.metadata.disposition?.visuallyImpaired ? {
              id: WG.FlagVisualImpaired,
              data: 1
            } : null, OB.track.metadata.disposition?.original ? {
              id: WG.FlagOriginal,
              data: 1
            } : null, OB.track.metadata.disposition?.commentary ? {
              id: WG.FlagCommentary,
              data: 1
            } : null, {
              id: WG.FlagLacing,
              data: 0
            }, {
              id: WG.Language,
              data: OB.track.metadata.languageCode ?? jB.D
            }, {
              id: WG.CodecID,
              data: GB
            }, OB.codecPrivate ? {
              id: WG.CodecPrivate,
              data: (0, jB.Id)(OB.codecPrivate)
            } : null, YB > 0 ? {
              id: WG.SeekPreRoll,
              data: YB
            } : null, void 0 !== OB.track.metadata.name ? {
              id: WG.Name,
              data: new RG(OB.track.metadata.name)
            } : null, "video" === OB.type ? this.videoSpecificTrackInfo(OB) : null, "audio" === OB.type ? this.audioSpecificTrackInfo(OB) : null, "subtitle" === OB.type ? this.subtitleSpecificTrackInfo(OB) : null]
          })
        }
      }
      videoSpecificTrackInfo(BB) {
        const {
          frameRate: OB,
          transformationMatrix: GB
        } = BB.track.metadata, YB = [OB ? {
          id: WG.DefaultDuration,
          data: 1e9 / OB
        } : null];
        let DB, QB, oB;
        if (GB) {
          DB = (0, jB.vb)(GB);
          const BB = (0, jB.Ec)((0, jB.Yc)(-DB), GB);
          QB = Math.sign(BB[0]), oB = Math.sign(BB[4]), -1 === oB && (oB = 1, QB = -QB, DB = (0, jB.Fc)(DB + 180))
        } else DB = BB.track.metadata.rotation ?? 0, QB = BB.track.metadata.flip ? -1 : 1, oB = 1;
        const yB = DB ? (0, jB.Fc)(-1 === QB ? DB : -DB) : 0,
          JB = Math.round(Math.acos(QB) * jB.s),
          MB = Math.round(Math.acos(oB) * jB.s),
          PB = !!BB.info.aspectRatio && BB.info.aspectRatio.num * BB.info.height !== BB.info.aspectRatio.den * BB.info.width,
          zB = BB.info.decoderConfig.colorSpace,
          lB = {
            id: WG.Video,
            data: [{
              id: WG.PixelWidth,
              data: BB.info.width
            }, {
              id: WG.PixelHeight,
              data: BB.info.height
            }, PB ? {
              id: WG.DisplayWidth,
              data: BB.info.aspectRatio.num
            } : null, PB ? {
              id: WG.DisplayHeight,
              data: BB.info.aspectRatio.den
            } : null, PB ? {
              id: WG.DisplayUnit,
              data: 3
            } : null, BB.info.alphaMode ? {
              id: WG.AlphaMode,
              data: 1
            } : null, (0, jB.mb)(zB) ? null : {
              id: WG.Colour,
              data: [{
                id: WG.MatrixCoefficients,
                data: null != zB?.matrix ? jB.r[zB.matrix] : 2
              }, {
                id: WG.TransferCharacteristics,
                data: null != zB?.transfer ? jB.z[zB.transfer] : 2
              }, {
                id: WG.Primaries,
                data: null != zB?.primaries ? jB.g[zB.primaries] : 2
              }, {
                id: WG.Range,
                data: null != zB?.fullRange ? zB.fullRange ? 2 : 1 : 0
              }]
            }, yB || JB || MB ? {
              id: WG.Projection,
              data: [{
                id: WG.ProjectionType,
                data: 0
              }, JB ? {
                id: WG.ProjectionPoseYaw,
                data: new qG(JB)
              } : null, MB ? {
                id: WG.ProjectionPosePitch,
                data: new qG(MB)
              } : null, yB ? {
                id: WG.ProjectionPoseRoll,
                data: new qG((yB + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return YB.push(lB), YB
      }
      audioSpecificTrackInfo(BB) {
        const OB = DB.n.includes(BB.track.source._codec) ? (0, DB.S)(BB.track.source._codec) : null;
        return [{
          id: WG.Audio,
          data: [{
            id: WG.SamplingFrequency,
            data: new qG(BB.info.sampleRate)
          }, {
            id: WG.Channels,
            data: BB.info.numberOfChannels
          }, OB ? {
            id: WG.BitDepth,
            data: 8 * OB.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(BB) {
        return []
      }
      maybeCreateTags() {
        const BB = [],
          OB = (OB, GB) => {
            BB.push({
              id: WG.SimpleTag,
              data: [{
                id: WG.TagName,
                data: new RG(OB)
              }, "string" === typeof GB ? {
                id: WG.TagString,
                data: new RG(GB)
              } : {
                id: WG.TagBinary,
                data: GB
              }]
            })
          },
          GB = this.output._metadataTags,
          YB = new Set;
        for (const {
            key: DB,
            value: QB
          }
          of(0, jB.rc)(GB)) switch (DB) {
          case "title":
            OB("TITLE", QB), YB.add("TITLE");
            break;
          case "description":
            OB("DESCRIPTION", QB), YB.add("DESCRIPTION");
            break;
          case "artist":
            OB("ARTIST", QB), YB.add("ARTIST");
            break;
          case "album":
            OB("ALBUM", QB), YB.add("ALBUM");
            break;
          case "albumArtist":
            OB("ALBUM_ARTIST", QB), YB.add("ALBUM_ARTIST");
            break;
          case "genre":
            OB("GENRE", QB), YB.add("GENRE");
            break;
          case "beatsPerMinute":
            OB("BPM", QB.toString()), YB.add("BPM");
            break;
          case "comment":
            OB("COMMENT", QB), YB.add("COMMENT");
            break;
          case "lyrics":
            OB("LYRICS", QB), YB.add("LYRICS");
            break;
          case "date":
            OB("DATE", QB.toISOString().slice(0, 10)), YB.add("DATE");
            break;
          case "trackNumber":
            OB("PART_NUMBER", void 0 !== GB.tracksTotal ? `${QB}/${GB.tracksTotal}` : QB.toString()), YB.add("PART_NUMBER");
            break;
          case "discNumber":
            OB("DISC", void 0 !== GB.discsTotal ? `${QB}/${GB.discsTotal}` : QB.toString()), YB.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, jB.M)(DB)
        }
        if (GB.raw)
          for (const DB in GB.raw) {
            const BB = GB.raw[DB];
            null == BB || YB.has(DB) || ("string" === typeof BB || BB instanceof Uint8Array) && OB(DB, BB)
          }
        0 !== BB.length && (this.tagsElement = {
          id: WG.Tags,
          data: [{
            id: WG.Tag,
            data: [{
              id: WG.Targets,
              data: [{
                id: WG.TargetTypeValue,
                data: 50
              }, {
                id: WG.TargetType,
                data: "MOVIE"
              }]
            }, ...BB]
          }]
        })
      }
      maybeCreateAttachments() {
        const BB = this.output._metadataTags,
          OB = [],
          GB = new Set,
          YB = BB.images ?? [];
        for (const DB of YB) {
          let BB, YB = DB.name;
          if (void 0 === YB) {
            YB = ("coverFront" === DB.kind ? "cover" : "coverBack" === DB.kind ? "back" : "image") + ((0, jB.Eb)(DB.mimeType) ?? "")
          }
          for (;;) {
            BB = 0n;
            for (let OB = 0; OB < 8; OB++) BB <<= 8n, BB |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== BB && !GB.has(BB)) break
          }
          GB.add(BB), OB.push({
            id: WG.AttachedFile,
            data: [void 0 !== DB.description ? {
              id: WG.FileDescription,
              data: new RG(DB.description)
            } : null, {
              id: WG.FileName,
              data: new RG(YB)
            }, {
              id: WG.FileMediaType,
              data: DB.mimeType
            }, {
              id: WG.FileData,
              data: DB.data
            }, {
              id: WG.FileUID,
              data: BB
            }]
          })
        }
        for (const [DB, QB] of Object.entries(BB.raw ?? {})) {
          if (!(QB instanceof lB.e)) continue;
          /^\d+$/.test(DB) && (YB.find((BB => BB.mimeType === QB.mimeType && (0, jB.Ld)(BB.data, QB.data))) || OB.push({
            id: WG.AttachedFile,
            data: [void 0 !== QB.description ? {
              id: WG.FileDescription,
              data: new RG(QB.description)
            } : null, {
              id: WG.FileName,
              data: new RG(QB.name ?? "")
            }, {
              id: WG.FileMediaType,
              data: QB.mimeType ?? ""
            }, {
              id: WG.FileData,
              data: QB.data
            }, {
              id: WG.FileUID,
              data: BigInt(DB)
            }]
          }))
        }
        0 !== OB.length && (this.attachmentsElement = {
          id: WG.Attachments,
          data: OB
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const BB = {
          id: WG.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = BB, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(BB), this.format._options.onSegmentHeader) {
          const {
            data: BB,
            start: OB
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(BB, OB)
        }
      }
      createCues() {
        this.cues = {
          id: WG.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, jB.Q)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const BB of this.output.tracks)
          if (!BB.source._closed && !this.trackDatas.some((OB => OB.track === BB))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const BB = this.trackDatas.map((BB => {
          if ("video" === BB.type) return BB.info.decoderConfig.codec;
          if ("audio" === BB.type) return BB.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [BB.track.source._codec]
        }));
        return (BB => {
          let OB = (BB.hasVideo ? "video/" : BB.hasAudio ? "audio/" : "application/") + (BB.isWebM ? "webm" : "x-matroska");
          BB.codecStrings.length > 0 && (OB += `; codecs="${[...new Set(BB.codecStrings.filter(Boolean))].join(", ")}"`);
          return OB
        })({
          isWebM: this.format instanceof wG,
          hasVideo: this.trackDatas.some((BB => "video" === BB.type)),
          hasAudio: this.trackDatas.some((BB => "audio" === BB.type)),
          codecStrings: BB
        })
      }
      getVideoTrackData(BB, OB, GB) {
        const YB = this.trackDatas.find((OB => OB.track === BB));
        if (YB) return YB;
        (0, DB.Y)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig), (0, jB.Q)(void 0 !== GB.decoderConfig.codedWidth), (0, jB.Q)(void 0 !== GB.decoderConfig.codedHeight);
        const QB = GB.decoderConfig.displayAspectWidth,
          oB = GB.decoderConfig.displayAspectHeight,
          yB = void 0 === QB || void 0 === oB ? null : (0, jB.vd)({
            num: QB,
            den: oB
          }),
          JB = {
            track: BB,
            type: "video",
            info: {
              width: GB.decoderConfig.codedWidth,
              height: GB.decoderConfig.codedHeight,
              aspectRatio: yB,
              decoderConfig: GB.decoderConfig,
              alphaMode: BB.metadata.canBeTransparent || (OB ? !!OB.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: GB.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === BB.source._codec ? JB.codecPrivate = new Uint8Array((0, DB.H)(JB.info.decoderConfig.codec)) : "av1" === BB.source._codec ? JB.codecPrivate = new Uint8Array((0, DB.F)(JB.info.decoderConfig.codec)) : "prores" === BB.source._codec && (JB.codecPrivate = jB.Bd.encode(GB.decoderConfig.codec)), this.trackDatas.push(JB), this.trackDatas.sort(((BB, OB) => BB.track.id - OB.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), JB
      }
      getAudioTrackData(BB, OB, GB) {
        const QB = this.trackDatas.find((OB => OB.track === BB));
        if (QB) return QB;
        (0, DB.V)(GB, BB.source._codec), (0, jB.Q)(GB), (0, jB.Q)(GB.decoderConfig);
        const oB = {
          ...GB.decoderConfig
        };
        let JB = !1;
        if ("aac" === BB.source._codec && !oB.description) {
          if (!OB) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const BB = JG(yB.tempFromBytes(OB.data));
          if (!BB) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const GB = YB.e[BB.samplingFrequencyIndex],
            DB = YB.d[BB.channelConfiguration];
          if (void 0 === GB || void 0 === DB) throw new Error("Invalid ADTS frame header.");
          oB.description = (0, YB.g)({
            objectType: BB.objectType,
            outputSampleRate: GB,
            outputNumberOfChannels: DB
          }), JB = !0
        }
        const MB = {
          track: BB,
          type: "audio",
          info: {
            numberOfChannels: GB.decoderConfig.numberOfChannels,
            sampleRate: GB.decoderConfig.sampleRate,
            decoderConfig: oB,
            requiresAdtsStripping: JB
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: oB.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(MB), this.trackDatas.sort(((BB, OB) => BB.track.id - OB.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), MB
      }
      getSubtitleTrackData(BB, OB) {
        const GB = this.trackDatas.find((OB => OB.track === BB));
        if (GB) return GB;
        (0, DB.X)(OB), (0, jB.Q)(OB), (0, jB.Q)(OB.config);
        const YB = {
          track: BB,
          type: "subtitle",
          info: {
            config: OB.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: jB.Bd.encode(OB.config.description),
          closed: !1
        };
        return this.trackDatas.push(YB), this.trackDatas.sort(((BB, OB) => BB.track.id - OB.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), YB
      }
      async addEncodedVideoPacket(BB, OB, GB) {
        const YB = await this.mutex.acquire();
        try {
          const YB = this.getVideoTrackData(BB, OB, GB);
          YB.info.alphaMode ??= !!OB.sideData.alpha;
          let DB = OB.data;
          if ("prores" === BB.source._codec) {
            if (DB.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            DB = DB.subarray(8)
          }
          const QB = "key" === OB.type;
          this.validateTimestamp(YB.track, OB.timestamp, QB);
          let oB = OB.timestamp,
            yB = OB.duration;
          void 0 !== BB.metadata.frameRate && (oB = (0, jB._c)(oB, BB.metadata.frameRate), yB = (0, jB._c)(yB, BB.metadata.frameRate));
          const JB = YB.info.alphaMode ? OB.sideData.alpha ?? null : null,
            MB = this.createInternalChunk(DB, oB, yB, OB.type, JB);
          "vp9" === BB.source._codec && this.fixVP9ColorSpace(YB, MB), YB.chunkQueue.push(MB), await this.interleaveChunks()
        } finally {
          YB()
        }
      }
      async addEncodedAudioPacket(BB, OB, GB) {
        const YB = await this.mutex.acquire();
        try {
          const YB = this.getAudioTrackData(BB, OB, GB);
          let DB = OB.data;
          if (YB.info.requiresAdtsStripping) {
            const BB = JG(yB.tempFromBytes(DB));
            if (!BB) throw new Error("Expected ADTS frame, didn't get one.");
            const OB = null === BB.crcCheck ? 7 : 9;
            DB = DB.subarray(OB)
          }
          const QB = "key" === OB.type;
          this.validateTimestamp(YB.track, OB.timestamp, QB);
          const oB = this.createInternalChunk(DB, OB.timestamp, OB.duration, OB.type);
          YB.chunkQueue.push(oB), await this.interleaveChunks()
        } finally {
          YB()
        }
      }
      async addSubtitleCue(BB, OB, GB) {
        const YB = await this.mutex.acquire();
        try {
          const YB = this.getSubtitleTrackData(BB, GB);
          this.validateTimestamp(YB.track, OB.timestamp, !0);
          let DB = OB.text;
          const QB = Math.round(1e3 * OB.timestamp);
          NB.h.lastIndex = 0, DB = DB.replace(NB.h, (BB => {
            const OB = (0, NB.j)(BB.slice(1, -1)) - QB;
            return `<${(0,NB.e)(OB)}>`
          }));
          const oB = jB.Bd.encode(DB),
            yB = `${OB.settings??""}\n${OB.identifier??""}\n${OB.notes??""}`,
            JB = this.createInternalChunk(oB, OB.timestamp, OB.duration, "key", yB.trim() ? jB.Bd.encode(yB) : null);
          YB.chunkQueue.push(JB), await this.interleaveChunks()
        } finally {
          YB()
        }
      }
      async interleaveChunks() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (BB || this.allTracksAreKnown()) {
          BB: for (;;) {
            let OB = null,
              GB = 1 / 0;
            for (const DB of this.trackDatas) {
              if (!BB && 0 === DB.chunkQueue.length && !DB.closed) break BB;
              DB.chunkQueue.length > 0 && DB.chunkQueue[0].timestamp < GB && (OB = DB, GB = DB.chunkQueue[0].timestamp)
            }
            if (!OB) break;
            const YB = OB.chunkQueue.shift();
            this.writeBlock(OB, YB)
          }
          BB || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(BB, OB) {
        if ("key" !== OB.type) return;
        if (!BB.info.decoderConfig.colorSpace || !BB.info.decoderConfig.colorSpace.matrix) return;
        const GB = new ZB.e(OB.data);
        GB.skipBits(2);
        const YB = GB.readBits(1),
          DB = (GB.readBits(1) << 1) + YB;
        3 === DB && GB.skipBits(1);
        if (GB.readBits(1)) return;
        if (0 !== GB.readBits(1)) return;
        GB.skipBits(2);
        if (4817730 !== GB.readBits(24)) return;
        DB >= 2 && GB.skipBits(1);
        const QB = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [BB.info.decoderConfig.colorSpace.matrix];
        (0, jB.Sd)(OB.data, GB.pos, GB.pos + 3, QB)
      }
      createInternalChunk(BB, OB, GB, YB) {
        return {
          data: BB,
          type: YB,
          timestamp: OB,
          duration: GB,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(BB, OB) {
        this.segment || this.createSegment();
        const GB = Math.round(1e3 * OB.timestamp),
          YB = this.trackDatas.every((GB => {
            if (BB === GB) return "key" === OB.type;
            const YB = GB.chunkQueue[0];
            return YB ? "key" === YB.type : GB.closed
          }));
        let DB = !1;
        if (this.currentCluster) {
          (0, jB.Q)(null !== this.currentClusterStartMsTimestamp), (0, jB.Q)(null !== this.currentClusterMaxMsTimestamp);
          const BB = GB - this.currentClusterStartMsTimestamp;
          DB = YB && GB > this.currentClusterMaxMsTimestamp && BB >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || BB > 32767
        } else DB = !0;
        DB && this.createNewCluster(GB);
        const QB = GB - this.currentClusterStartMsTimestamp;
        if (QB < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const BB = this.format instanceof wG ? "WebM" : "Matroska";
            oB.e._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${BB}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const yB = new Uint8Array(4),
          JB = new DataView(yB.buffer);
        JB.setUint8(0, 128 | BB.track.id), JB.setInt16(1, QB, !1);
        const MB = Math.round(1e3 * OB.duration);
        if (!!OB.additions || "subtitle" === BB.type) {
          const YB = {
            id: WG.BlockGroup,
            data: [{
              id: WG.Block,
              data: [yB, OB.data]
            }, "delta" === OB.type ? {
              id: WG.ReferenceBlock,
              data: new NG(BB.lastWrittenMsTimestamp - GB)
            } : null, OB.additions ? {
              id: WG.BlockAdditions,
              data: [{
                id: WG.BlockMore,
                data: [{
                  id: WG.BlockAddID,
                  data: 1
                }, {
                  id: WG.BlockAdditional,
                  data: OB.additions
                }]
              }]
            } : null, MB > 0 ? {
              id: WG.BlockDuration,
              data: MB
            } : null]
          };
          this.ebmlWriter.writeEBML(YB)
        } else {
          JB.setUint8(3, Number("key" === OB.type) << 7);
          const BB = {
            id: WG.SimpleBlock,
            data: [yB, OB.data]
          };
          this.ebmlWriter.writeEBML(BB)
        }
        this.startTimestamp = Math.min(this.startTimestamp, GB), this.endTimestamp = Math.max(this.endTimestamp, GB + MB), BB.lastWrittenMsTimestamp = GB, this.trackDatasInCurrentCluster.has(BB) || this.trackDatasInCurrentCluster.set(BB, {
          firstMsTimestamp: GB
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, GB)
      }
      createNewCluster(BB) {
        BB = Math.max(0, BB), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: WG.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: WG.Timestamp,
            data: BB
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = BB, this.currentClusterMaxMsTimestamp = BB, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, jB.Q)(this.currentCluster), !this.format._options.appendOnly) {
          const BB = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            OB = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(BB, 5), this.writer.seek(OB)
        }
        if (this.format._options.onCluster) {
          (0, jB.Q)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: BB,
            start: OB
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(BB, OB, this.currentClusterStartMsTimestamp / 1e3)
        }
        const BB = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          OB = new Map;
        for (const [YB, {
            firstMsTimestamp: DB
          }] of this.trackDatasInCurrentCluster) OB.has(DB) || OB.set(DB, []), OB.get(DB).push(YB);
        const GB = [...OB.entries()].sort(((BB, OB) => BB[0] - OB[0]));
        for (const [YB, DB] of GB)(0, jB.Q)(this.cues), this.cues.data.push({
          id: WG.CuePoint,
          data: [{
            id: WG.CueTime,
            data: Math.max(0, YB)
          }, ...DB.map((OB => ({
            id: WG.CueTrackPositions,
            data: [{
              id: WG.CueTrack,
              data: OB.track.id
            }, {
              id: WG.CueClusterPosition,
              data: BB
            }]
          })))]
        })
      }
      async onTrackClose(BB) {
        const OB = await this.mutex.acquire(),
          GB = this.trackDatas.find((OB => OB.track === BB));
        GB && (GB.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), OB()
      }
      async finalize() {
        const BB = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const OB of this.trackDatas) OB.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, jB.Q)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const BB = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(BB, 6);
          const OB = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new ZG(OB), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, jB.Q)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        BB()
      }
    }
    const dG = new Uint32Array(256);
    for (let EG = 0; EG < 256; EG++) {
      let BB = EG << 24;
      for (let OB = 0; OB < 8; OB++) BB = 2147483648 & BB ? BB << 1 ^ 79764919 : BB << 1;
      dG[EG] = BB >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const KG = new Uint32Array(256);
    for (let EG = 0; EG < 256; EG++) {
      let BB = EG << 24;
      for (let OB = 0; OB < 8; OB++) BB = 2147483648 & BB ? BB << 1 ^ 79764919 : BB << 1;
      KG[EG] = BB >>> 0 & 4294967295
    }
    const uG = BB => {
        let OB = 4294967295;
        for (let GB = 0; GB < BB.length; GB++) {
          const YB = BB[GB];
          OB = (OB << 8 ^ KG[OB >>> 24 ^ YB]) >>> 0
        }
        return OB
      },
      mG = new Uint8Array(16);
    {
      const BB = (0, jB.Gd)(mG);
      mG[0] = 0, BB.setUint16(1, 45069, !1), BB.setUint16(3, 1, !1), mG[5] = 193, mG[6] = 0, mG[7] = 0, BB.setUint16(8, 1, !1), BB.setUint16(10, 61440, !1), BB.setUint32(12, uG(mG.subarray(0, 12)), !1)
    }
    var IG;
    GB(40650);
    ! function(BB) {
      BB[BB.PCM = 1] = "PCM", BB[BB.IEEE_FLOAT = 3] = "IEEE_FLOAT", BB[BB.ALAW = 6] = "ALAW", BB[BB.MULAW = 7] = "MULAW", BB[BB.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(IG || (IG = {}));
    GB(40657), GB(40669), GB(40572);
    class FG {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((BB => DB.t.includes(BB)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((BB => DB.e.includes(BB)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((BB => DB.q.includes(BB)))
      }
      _codecUnsupportedHint(BB) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class iG extends FG {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
        if (void 0 !== BB.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(BB.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== BB.minimumFragmentDuration && (!(0, jB.ac)(BB.minimumFragmentDuration) || BB.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== BB.onFtyp && "function" !== typeof BB.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== BB.onMoov && "function" !== typeof BB.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== BB.onMdat && "function" !== typeof BB.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== BB.onMoof && "function" !== typeof BB.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== BB.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(BB.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = BB
      }
      getSupportedTrackCounts() {
        const BB = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: BB
          },
          audio: {
            min: 0,
            max: BB
          },
          subtitle: {
            min: 0,
            max: BB
          },
          total: {
            min: 0,
            max: BB
          }
        }
      }
      get supportsVideoTransformationMetadata() {
        return !0
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "full"
      }
      _createMuxer(BB) {
        return new pG(BB, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class LG extends iG {
      constructor(BB) {
        super(BB)
      }
      get _name() {
        return "MP4"
      }
      get fileExtension() {
        return ".mp4"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...DB.t, ...DB.g, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...DB.q]
      }
      _codecUnsupportedHint(BB) {
        return (new rG).getSupportedCodecs().includes(BB) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class gG extends iG {
      constructor(BB) {
        super(BB)
      }
      get _name() {
        return "CMAF"
      }
      get fileExtension() {
        return ".m4s"
      }
      get mimeType() {
        return "video/mp4"
      }
      getSupportedCodecs() {
        return [...DB.t, ...DB.g, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...DB.q]
      }
    }
    class rG extends iG {
      constructor(BB) {
        super(BB)
      }
      get _name() {
        return "MOV"
      }
      get fileExtension() {
        return ".mov"
      }
      get mimeType() {
        return "video/quicktime"
      }
      getSupportedCodecs() {
        return [...DB.t, ...DB.e]
      }
      _codecUnsupportedHint(BB) {
        return (new LG).getSupportedCodecs().includes(BB) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class XG extends FG {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
        if (void 0 !== BB.appendOnly && "boolean" !== typeof BB.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== BB.minimumClusterDuration && (!(0, jB.ac)(BB.minimumClusterDuration) || BB.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== BB.onEbmlHeader && "function" !== typeof BB.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== BB.onSegmentHeader && "function" !== typeof BB.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== BB.onCluster && "function" !== typeof BB.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = BB
      }
      _createMuxer(BB) {
        return new kG(BB, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const BB = 127;
        return {
          video: {
            min: 0,
            max: BB
          },
          audio: {
            min: 0,
            max: BB
          },
          subtitle: {
            min: 0,
            max: BB
          },
          total: {
            min: 0,
            max: BB
          }
        }
      }
      get fileExtension() {
        return ".mkv"
      }
      get mimeType() {
        return "video/x-matroska"
      }
      getSupportedCodecs() {
        return [...DB.t, ...DB.g, ...DB.n.filter((BB => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(BB))), ...DB.q]
      }
      get supportsVideoTransformationMetadata() {
        return !1
      }
      get supportsTimestampedMediaData() {
        return !0
      }
      get negativeTimestampSupport() {
        return "prefer-non-negative"
      }
    }
    class wG extends XG {
      constructor(BB) {
        super(BB)
      }
      getSupportedCodecs() {
        return [...DB.t.filter((BB => ["vp8", "vp9", "av1"].includes(BB))), ...DB.e.filter((BB => ["opus", "vorbis"].includes(BB))), ...DB.q]
      }
      get _name() {
        return "WebM"
      }
      get fileExtension() {
        return ".webm"
      }
      get mimeType() {
        return "video/webm"
      }
      _codecUnsupportedHint(BB) {
        return (new XG).getSupportedCodecs().includes(BB) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  40572: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => WB
    });
    var YB = GB(40574),
      DB = GB(40581),
      QB = GB(40589),
      oB = GB(40669),
      jB = GB(40641),
      yB = GB(40633),
      JB = GB(40610),
      MB = GB(40650),
      PB = GB(40599);
    const zB = ["video", "audio", "subtitle"];
    class lB {
      constructor(BB, OB, GB, YB, DB) {
        this.id = BB, this.output = OB, this.type = GB, this.source = YB, this.metadata = DB
      }
      isVideoTrack() {
        return "video" === this.type
      }
      isAudioTrack() {
        return "audio" === this.type
      }
      isSubtitleTrack() {
        return "subtitle" === this.type
      }
      canBePairedWith(BB) {
        if (!(BB instanceof lB)) throw new TypeError("other must be an OutputTrack.");
        if (this === BB) return !1;
        const OB = (0, YB.Fd)(this.metadata.group),
          GB = (0, YB.Fd)(BB.metadata.group);
        for (const YB of OB) {
          if (this.type !== BB.type && GB.some((BB => YB === BB))) return !0;
          if (GB.some((BB => YB._pairedGroups.has(BB)))) return !0
        }
        return !1
      }
    }
    class pB extends lB {
      constructor(BB, OB, GB, YB) {
        super(BB, OB, "video", GB, YB)
      }
    }
    class qB extends lB {
      constructor(BB, OB, GB, YB) {
        super(BB, OB, "audio", GB, YB)
      }
    }
    class ZB extends lB {
      constructor(BB, OB, GB, YB) {
        super(BB, OB, "subtitle", GB, YB)
      }
    }
    class NB {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(BB) {
        if (!(BB instanceof NB)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === BB) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(BB), BB._pairedGroups.add(this)
      }
    }
    const RB = BB => {
      if (!BB || "object" !== typeof BB) throw new TypeError("metadata must be an object.");
      if (void 0 !== BB.languageCode && !(0, YB.Ub)(BB.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== BB.name && "string" !== typeof BB.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== BB.disposition && (0, DB.p)(BB.disposition), void 0 !== BB.maximumPacketCount && (!Number.isInteger(BB.maximumPacketCount) || BB.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== BB.bitrate && (!Number.isFinite(BB.bitrate) || BB.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== BB.averageBitrate && (!Number.isFinite(BB.averageBitrate) || BB.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== BB.group && !(BB.group instanceof NB) && (!Array.isArray(BB.group) || BB.group.some((BB => !(BB instanceof NB))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class WB extends YB.m {
      get target() {
        const BB = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(BB);
        const OB = this._getRootTarget();
        if ((0, YB.gc)(OB)) throw new TypeError(BB);
        return OB
      }
      constructor(BB) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new NB, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new YB.d, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
        if (!(BB.format instanceof QB.i)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(BB.target instanceof jB.i || BB.target instanceof jB.g)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (BB.target instanceof jB.i && this._rememberTarget(BB.target), void 0 !== BB.initTarget && !(BB.initTarget instanceof jB.i) && "function" !== typeof BB.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== BB.onFinalize && "function" !== typeof BB.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = BB.format, this.dP = BB.target, this._onFinalize = BB.onFinalize ?? null, this._initTarget = BB.initTarget ?? null, this._initTarget instanceof jB.i && this._rememberTarget(this._initTarget), this._muxer = BB.format._createMuxer(this)
      }
      _getTargetValidated(BB) {
        (0, YB.Q)(this.dP instanceof jB.g);
        const OB = this.dP.getTarget(BB),
          GB = BB => {
            if (!(BB instanceof jB.i)) throw new TypeError("getTarget must return a Target.");
            return BB
          };
        return (0, YB.gc)(OB) ? OB.then(GB) : GB(OB)
      }
      async _getTarget(BB) {
        (0, YB.Q)(this.dP instanceof jB.g);
        const OB = await this._getTargetValidated(BB);
        return this._emit("target", {
          target: OB,
          request: BB,
          isRoot: BB.isRoot
        }), "canceled" === this.state ? await OB._close() : this._rememberTarget(OB), OB
      }
      _rememberTarget(BB) {
        this._unfinalizedTargets.add(BB), BB.on("finalized", (() => this._unfinalizedTargets.delete(BB)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, YB.Q)(null !== this._initTarget), this._initTarget instanceof jB.i) return this._initTarget;
        const BB = await this._initTarget();
        return "canceled" === this.state ? await BB._close() : this._rememberTarget(BB), BB
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.dP instanceof jB.i) return this._emit("target", {
          target: this.dP,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.dP, this.dP;
        const BB = {
            path: this.dP.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          OB = this._getTargetValidated(BB),
          GB = OB => ("canceled" === this.state ? OB._close() : this._rememberTarget(OB), this._emit("target", {
            target: OB,
            request: BB,
            isRoot: !0
          }), this._rootTarget = OB, OB);
        return (0, YB.gc)(OB) ? this._rootTargetPromise = OB.then(GB) : GB(OB)
      }
      _getRootWriter(BB) {
        return this._rootWriterPromise ??= (async () => {
          const OB = await this._getRootTarget(),
            GB = new yB.e(OB, "boolean" === typeof BB ? BB : BB(OB));
          return GB.start(), GB
        })()
      }
      addVideoTrack(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(BB instanceof oB.m)) throw new TypeError("source must be a VideoSource.");
        if (RB(OB), void 0 !== OB.rotation && ![0, 90, 180, 270].includes(OB.rotation)) throw new TypeError(`Invalid video rotation: ${OB.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== OB.flip && "boolean" !== typeof OB.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== OB.transformationMatrix && (!Array.isArray(OB.transformationMatrix) || 9 !== OB.transformationMatrix.length || !OB.transformationMatrix.every((BB => Number.isFinite(BB))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== OB.frameRate && (!Number.isFinite(OB.frameRate) || OB.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${OB.frameRate}. Must be a positive number.`);
        if (void 0 !== OB.hasOnlyKeyPackets && "boolean" !== typeof OB.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== OB.canBeTransparent && "boolean" !== typeof OB.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== OB.decoderConfig && (0, PB.Y)({
            decoderConfig: OB.decoderConfig
          }, BB._codec), void 0 !== OB.primingPacket) {
          if (!(OB.primingPacket instanceof MB.d)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === OB.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const GB = {
          ...OB
        };
        return GB.group ??= this.defaultTrackGroup, this._addTrack(new pB(this.tracks.length + 1, this, BB, GB))
      }
      addAudioTrack(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(BB instanceof oB.b)) throw new TypeError("source must be an AudioSource.");
        if (RB(OB), void 0 !== OB.decoderConfig && (0, PB.V)({
            decoderConfig: OB.decoderConfig
          }, BB._codec), void 0 !== OB.primingPacket) {
          if (!(OB.primingPacket instanceof MB.d)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === OB.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const GB = {
          ...OB
        };
        return GB.group ??= this.defaultTrackGroup, this._addTrack(new qB(this.tracks.length + 1, this, BB, GB))
      }
      addSubtitleTrack(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(BB instanceof oB.l)) throw new TypeError("source must be a SubtitleSource.");
        RB(OB);
        const GB = {
          ...OB
        };
        return GB.group ??= this.defaultTrackGroup, this._addTrack(new ZB(this.tracks.length + 1, this, BB, GB))
      }
      setMetadataTags(BB) {
        if ((0, DB.n)(BB), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = BB
      }
      _addTrack(BB) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (BB.source._connectedTrack) throw new Error("Source is already used for a track.");
        const OB = this.format.getSupportedTrackCounts(),
          GB = this.tracks.reduce(((OB, GB) => OB + (GB.type === BB.type ? 1 : 0)), 0),
          YB = OB[BB.type].max;
        if (GB === YB) throw new Error(0 === YB ? `${this.format._name} does not support ${BB.type} tracks.` : `${this.format._name} does not support more than ${YB} ${BB.type} track` + (1 === YB ? "" : "s") + ".");
        const DB = OB.total.max;
        if (this.tracks.length === DB) throw new Error(`${this.format._name} does not support more than ${DB} tracks` + (1 === DB ? "" : "s") + " in total.");
        if (BB.isVideoTrack()) {
          const OB = this.format.getSupportedVideoCodecs();
          if (0 === OB.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(BB.source._codec));
          if (!OB.includes(BB.source._codec)) throw new Error(`Codec '${BB.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${OB.map((BB=>`'${BB}'`)).join(", ")}.` + this.format._codecUnsupportedHint(BB.source._codec))
        } else if (BB.isAudioTrack()) {
          const OB = this.format.getSupportedAudioCodecs();
          if (0 === OB.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(BB.source._codec));
          if (!OB.includes(BB.source._codec)) throw new Error(`Codec '${BB.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${OB.map((BB=>`'${BB}'`)).join(", ")}.` + this.format._codecUnsupportedHint(BB.source._codec))
        } else if (BB.isSubtitleTrack()) {
          const OB = this.format.getSupportedSubtitleCodecs();
          if (0 === OB.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(BB.source._codec));
          if (!OB.includes(BB.source._codec)) throw new Error(`Codec '${BB.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${OB.map((BB=>`'${BB}'`)).join(", ")}.` + this.format._codecUnsupportedHint(BB.source._codec))
        }
        return this.tracks.push(BB), BB.source._connectedTrack = BB, BB
      }
      hasEnoughTracks() {
        const BB = this.format.getSupportedTrackCounts();
        for (const GB of zB) {
          if (this.tracks.reduce(((BB, OB) => BB + (OB.type === GB ? 1 : 0)), 0) < BB[GB].min) return !1
        }
        const OB = BB.total.min;
        return !(this.tracks.length < OB)
      }
      async start() {
        const BB = this.format.getSupportedTrackCounts();
        for (const GB of zB) {
          const OB = this.tracks.reduce(((BB, OB) => BB + (OB.type === GB ? 1 : 0)), 0),
            YB = BB[GB].min;
          if (OB < YB) throw new Error(YB === BB[GB].max ? `${this.format._name} requires exactly ${YB} ${GB} track${1===YB?"":"s"}.` : `${this.format._name} requires at least ${YB} ${GB} track${1===YB?"":"s"}.`)
        }
        const OB = BB.total.min;
        if (this.tracks.length < OB) throw new Error(OB === BB.total.max ? `${this.format._name} requires exactly ${OB} track` + (1 === OB ? "" : "s") + "." : `${this.format._name} requires at least ${OB} track` + (1 === OB ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (JB.e._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const BB = this._mutex.acquire();
          try {
            await this._muxer.start();
            const BB = this.tracks.map((BB => BB.source._start()));
            await Promise.all(BB)
          } finally {
            (await BB)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const BB = await this._mutex.acquire();
          try {
            const BB = this.tracks.map((BB => BB.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(BB), await Promise.all([...this._unfinalizedTargets].map((BB => BB._close()))), this._unfinalizedTargets.clear()
          } finally {
            BB()
          }
        })() : void("finalized" === this.state && JB.e._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (JB.e._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const BB = await this._mutex.acquire();
          try {
            const BB = this.tracks.map((BB => BB.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(BB), await this._muxer.finalize(), this._rootWriterPromise) {
              const BB = await this._rootWriterPromise;
              BB.finalized || (await BB.flush(), await BB.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (OB) {
            throw this.state = "canceled", OB
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((BB => BB._close().catch((() => {}))))), this._unfinalizedTargets.clear(), BB()
          }
        })()
      }
    }
  },
  40650: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      e: () => DB
    });
    var YB = GB(40574);
    const DB = new Uint8Array(0);
    class QB {
      constructor(BB, OB, GB, YB) {
        let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          jB = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = BB, this.type = OB, this.timestamp = GB, this.duration = YB, this.sequenceNumber = QB, BB === DB && void 0 === oB) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === oB && (oB = BB.byteLength), !(BB instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== OB && "delta" !== OB) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(GB)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(YB) || YB < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(QB)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(oB) || oB < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== jB && ("object" !== typeof jB || !jB)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== jB?.alpha && !(jB.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== jB?.alphaByteLength && (!Number.isInteger(jB.alphaByteLength) || jB.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = oB, this.sideData = jB ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === DB
      }
      get microsecondTimestamp() {
        return Math.trunc(YB.w * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(YB.w * this.duration)
      }
      toEncodedVideoChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      alphaToEncodedVideoChunk() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: BB,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      toEncodedAudioChunk() {
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
        if ("undefined" === typeof EncodedAudioChunk) throw new Error("EncodedAudioChunk is not available in this environment.");
        return new EncodedAudioChunk({
          data: this.data,
          type: this.type,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration
        })
      }
      static fromEncodedChunk(BB, OB) {
        if (!(BB instanceof EncodedVideoChunk || BB instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const GB = new Uint8Array(BB.byteLength);
        return BB.copyTo(GB), new QB(GB, BB.type, BB.timestamp / 1e6, (BB.duration ?? 0) / 1e6, void 0, void 0, OB)
      }
      clone(BB) {
        if (void 0 !== BB && ("object" !== typeof BB || null === BB)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== BB?.data && !(BB.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== BB?.type && "key" !== BB.type && "delta" !== BB.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== BB?.timestamp && !Number.isFinite(BB.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== BB?.duration && !Number.isFinite(BB.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== BB?.sequenceNumber && !Number.isFinite(BB.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== BB?.sideData && ("object" !== typeof BB.sideData || null === BB.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new QB(BB?.data ?? this.data, BB?.type ?? this.type, BB?.timestamp ?? this.timestamp, BB?.duration ?? this.duration, BB?.sequenceNumber ?? this.sequenceNumber, this.byteLength, BB?.sideData ?? this.sideData)
      }
    }
  },
  40660: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => IB,
      e: () => lB,
      h: () => EB,
      i: () => XB,
      m: () => VB
    });
    var YB = GB(40574),
      DB = GB(40610),
      QB = function(BB, OB, GB) {
        if (null !== OB && void 0 !== OB) {
          if ("object" !== typeof OB && "function" !== typeof OB) throw new TypeError("Object expected.");
          var YB, DB;
          if (GB) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            YB = OB[Symbol.asyncDispose]
          }
          if (void 0 === YB) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            YB = OB[Symbol.dispose], GB && (DB = YB)
          }
          if ("function" !== typeof YB) throw new TypeError("Object not disposable.");
          DB && (YB = function() {
            try {
              DB.call(this)
            } catch (BB) {
              return Promise.reject(BB)
            }
          }), BB.stack.push({
            value: OB,
            dispose: YB,
            async: GB
          })
        } else GB && BB.stack.push({
          async: !0
        });
        return OB
      },
      oB = function(BB) {
        return function(OB) {
          function GB(GB) {
            OB.error = OB.hasError ? new BB(GB, OB.error, "An error was suppressed during disposal.") : GB, OB.hasError = !0
          }
          var YB, DB = 0;
          return function BB() {
            for (; YB = OB.stack.pop();) try {
              if (!YB.async && 1 === DB) return DB = 0, OB.stack.push(YB), Promise.resolve().then(BB);
              if (YB.dispose) {
                var QB = YB.dispose.call(YB.value);
                if (YB.async) return DB |= 2, Promise.resolve(QB).then(BB, (function(OB) {
                  return GB(OB), BB()
                }))
              } else DB |= 1
            } catch (oB) {
              GB(oB)
            }
            if (1 === DB) return OB.hasError ? Promise.reject(OB.error) : Promise.resolve();
            if (OB.hasError) throw OB.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(BB, OB, GB) {
        var YB = new Error(GB);
        return YB.name = "SuppressedError", YB.error = BB, YB.suppressed = OB, YB
      });
    (0, YB.Gc)();
    let jB = -1 / 0,
      yB = -1 / 0,
      JB = null;
    "undefined" !== typeof FinalizationRegistry && (JB = new FinalizationRegistry((BB => {
      const OB = performance.now();
      "video" === BB.type ? (OB - jB >= 1e3 && (DB.e._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), jB = OB), "undefined" !== typeof VideoFrame && BB.data instanceof VideoFrame && BB.data.close()) : (OB - yB >= 1e3 && (DB.e._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), yB = OB), "undefined" !== typeof AudioData && BB.data instanceof AudioData && BB.data.close())
    })));
    class MB {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const PB = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      zB = new Set(PB);
    class lB {
      get codedWidth() {
        return this.visibleRect.width
      }
      get codedHeight() {
        return this.visibleRect.height
      }
      get displayWidth() {
        return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight
      }
      get displayHeight() {
        return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth
      }
      get microsecondTimestamp() {
        return Math.trunc(YB.w * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(YB.w * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(BB, OB) {
        if (this._closed = !1, BB instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && BB instanceof SharedArrayBuffer || ArrayBuffer.isView(BB)) {
          if (!OB || "object" !== typeof OB) throw new TypeError("init must be an object.");
          if (void 0 === OB.format || !zB.has(OB.format)) throw new TypeError("init.format must be one of: " + PB.join(", "));
          if (!Number.isInteger(OB.codedWidth) || OB.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(OB.codedHeight) || OB.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== OB.rotation && ![0, 90, 180, 270].includes(OB.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== OB.flip && "boolean" !== typeof OB.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(OB.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== OB.duration && (!Number.isFinite(OB.duration) || OB.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== OB.layout) {
            if (!Array.isArray(OB.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const BB of OB.layout) {
              if (!BB || "object" !== typeof BB || Array.isArray(BB)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(BB.offset) || BB.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(BB.stride) || BB.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== OB.visibleRect && (0, YB.Pd)(OB.visibleRect, "init.visibleRect"), void 0 !== OB.displayWidth && (!Number.isInteger(OB.displayWidth) || OB.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== OB.displayHeight && (!Number.isInteger(OB.displayHeight) || OB.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== OB.displayWidth !== (void 0 !== OB.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = OB.format, this.rotation = OB.rotation ?? 0, this.flip = OB.flip ?? !1, this.timestamp = OB.timestamp, this.duration = OB.duration ?? 0;
          const GB = OB.layout ?? nB(OB.format, OB.codedWidth, OB.codedHeight);
          let DB = OB.colorSpace ?? null;
          null === DB && (DB = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
            primaries: "bt709",
            transfer: "iec61966-2-1",
            matrix: "rgb",
            fullRange: !0
          } : {
            primaries: "bt709",
            transfer: "bt709",
            matrix: "bt709",
            fullRange: !1
          }), this.visibleRect = {
            left: OB.visibleRect?.left ?? 0,
            top: OB.visibleRect?.top ?? 0,
            width: OB.visibleRect?.width ?? OB.codedWidth,
            height: OB.visibleRect?.height ?? OB.codedHeight
          }, void 0 !== OB.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? OB.displayWidth : OB.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? OB.displayHeight : OB.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = OB._doNotCopy ? (0, YB.Id)(BB) : (0, YB.Id)(BB).slice(), this._layout = GB, this.colorSpace = new RB(DB)
        } else if ("undefined" !== typeof VideoFrame && BB instanceof VideoFrame) {
          if (void 0 !== OB?.rotation && ![0, 90, 180, 270].includes(OB.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== OB?.flip && "boolean" !== typeof OB.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== OB?.timestamp && !Number.isFinite(OB?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== OB?.duration && (!Number.isFinite(OB.duration) || OB.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== OB?.visibleRect && (0, YB.Pd)(OB.visibleRect, "init.visibleRect"), this._data = BB, this._layout = null, this.format = BB.format, this.visibleRect = {
            left: BB.visibleRect?.x ?? 0,
            top: BB.visibleRect?.y ?? 0,
            width: BB.visibleRect?.width ?? BB.codedWidth,
            height: BB.visibleRect?.height ?? BB.codedHeight
          }, this.rotation = OB?.rotation ?? 0, this.flip = OB?.flip ?? !1, this.squarePixelWidth = BB.displayWidth, this.squarePixelHeight = BB.displayHeight, this.timestamp = OB?.timestamp ?? BB.timestamp / 1e6, this.duration = OB?.duration ?? (BB.duration ?? 0) / 1e6, this.colorSpace = new RB(BB.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && BB instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && BB instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && BB instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && BB instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && BB instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && BB instanceof OffscreenCanvas) {
          if (!OB || "object" !== typeof OB) throw new TypeError("init must be an object.");
          if (void 0 !== OB.rotation && ![0, 90, 180, 270].includes(OB.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== OB.flip && "boolean" !== typeof OB.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(OB.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== OB.duration && (!Number.isFinite(OB.duration) || OB.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== OB.visibleRect && (0, YB.Pd)(OB.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new lB(new VideoFrame(BB, {
            timestamp: Math.trunc(OB.timestamp * YB.w),
            duration: Math.trunc((OB.duration ?? 0) * YB.w) || void 0,
            visibleRect: OB.visibleRect && {
              x: OB.visibleRect.left,
              y: OB.visibleRect.top,
              width: OB.visibleRect.width,
              height: OB.visibleRect.height
            }
          }), OB);
          let GB = 0,
            DB = 0;
          if ("naturalWidth" in BB ? (GB = BB.naturalWidth, DB = BB.naturalHeight) : "videoWidth" in BB ? (GB = BB.videoWidth, DB = BB.videoHeight) : "width" in BB && (GB = Number(BB.width), DB = Number(BB.height)), !GB || !DB) throw new TypeError("Could not determine dimensions.");
          const QB = OB.visibleRect ?? {
              left: 0,
              top: 0,
              width: GB,
              height: DB
            },
            oB = new OffscreenCanvas(QB.width, QB.height),
            jB = oB.getContext("2d", {
              alpha: (0, YB.Rb)(),
              willReadFrequently: !0
            });
          if (!jB) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          jB.drawImage(BB, -QB.left, -QB.top), this._data = oB, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: QB.width,
            height: QB.height
          }, this.squarePixelWidth = QB.width, this.squarePixelHeight = QB.height, this.rotation = OB.rotation ?? 0, this.flip = OB.flip ?? !1, this.timestamp = OB.timestamp, this.duration = OB.duration ?? 0, this.colorSpace = new RB({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(BB instanceof MB)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!OB || "object" !== typeof OB) throw new TypeError("init must be an object.");
          if (void 0 !== OB.rotation && ![0, 90, 180, 270].includes(OB.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== OB.flip && "boolean" !== typeof OB.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(OB.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== OB.duration && (!Number.isFinite(OB.duration) || OB.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = BB, BB._referenceCount++, this.format = BB.getFormat(), null !== this.format && !PB.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: BB.getCodedWidth(),
              height: BB.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = BB.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = BB.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = OB.rotation ?? 0, this.flip = OB.flip ?? !1, this.timestamp = OB.timestamp, this.duration = OB.duration ?? 0, this.colorSpace = BB.getColorSpace()
        }
        this.encodeOptions = OB?.encodeOptions ?? {}, this.pixelAspectRatio = (0, YB.vd)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), JB?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, YB.Q)(null !== this._data), this._data instanceof MB ? new lB(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : WB(this._data) ? new lB(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, YB.Q)(this._layout), new lB(this._data, {
          format: this.format,
          layout: this._layout,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions,
          _doNotCopy: !0
        })) : new lB(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          timestamp: this.timestamp,
          duration: this.duration,
          colorSpace: this.colorSpace,
          rotation: this.rotation,
          flip: this.flip,
          visibleRect: this.visibleRect,
          displayWidth: this.displayWidth,
          displayHeight: this.displayHeight,
          encodeOptions: this.encodeOptions
        })
      }
      close() {
        this._closed || (JB?.unregister(this), this._data instanceof MB ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : WB(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (SB(BB), this._closed) throw new Error("VideoSample is closed.");
        if (null == (BB.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (WB(this._data)) return this._data.allocationSize(BB);
        return fB(this, BB).allocationSize
      }
      async copyTo(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, YB.Gb)(BB)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (SB(OB), this._closed) throw new Error("VideoSample is closed.");
        if (null == (OB.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, YB.Q)(null !== this._data), WB(this._data)) return this._data.copyTo(BB, OB);
        if (OB.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(OB.format)) {
          if (!(this._data instanceof MB)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const GB = this.toVideoFrame(),
              YB = await GB.copyTo(BB, OB);
            return GB.close(), YB
          } {
            const GB = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const YB = QB(GB, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, OB.colorSpace ?? "srgb"), !1);
              if (!(YB instanceof lB)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(YB.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${YB.format}' instead.`);
              return await YB.copyTo(BB, OB)
            } catch (zB) {
              GB.error = zB, GB.hasError = !0
            } finally {
              oB(GB)
            }
          }
        }
        const GB = fB(this, OB);
        (0, YB.Q)(this.format);
        const DB = (0, YB.Id)(BB);
        if (DB.byteLength < GB.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${GB.allocationSize}, Available: ${DB.byteLength}`);
        const jB = UB(this.format);
        let yB;
        if (this._data instanceof MB) {
          let BB = this._data.getDataPlanes();
          if ((0, YB.gc)(BB) && (BB = await BB), !Array.isArray(BB) || BB.some((BB => !(BB.data instanceof Uint8Array) || !Number.isInteger(BB.stride) || BB.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          yB = BB
        } else if (this._data instanceof Uint8Array)(0, YB.Q)(this._layout), (0, YB.Q)(this._layout.length === jB.length), yB = this._layout.map(((BB, OB) => {
          const GB = Math.ceil(this.codedHeight / jB[OB].heightDivisor);
          return {
            data: this._data.subarray(BB.offset, BB.offset + BB.stride * GB),
            stride: BB.stride
          }
        }));
        else {
          const BB = this._data.getContext("2d");
          (0, YB.Q)(BB);
          const OB = BB.getImageData(0, 0, this.codedWidth, this.codedHeight);
          yB = [{
            data: (0, YB.Id)(OB.data),
            stride: 4 * this.codedWidth
          }]
        }
        const JB = [],
          PB = jB.length;
        for (let YB = 0; YB < PB; YB++) {
          const BB = GB.computedLayouts[YB],
            OB = yB[YB].stride,
            QB = yB[YB].data;
          let oB = BB.sourceTop * OB;
          oB += BB.sourceLeftBytes;
          let jB = BB.destinationOffset;
          const MB = BB.sourceWidthBytes,
            PB = {
              offset: jB,
              stride: BB.destinationStride
            };
          for (let GB = 0; GB < BB.sourceHeight; GB++) {
            if (oB + MB > QB.byteLength) throw new Error("Source buffer OOB read.");
            if (jB + MB > DB.byteLength) throw new Error("Destination buffer OOB write.");
            const GB = QB.subarray(oB, oB + MB);
            DB.set(GB, jB), oB += OB, jB += BB.destinationStride
          }
          JB.push(PB)
        }
        if (void 0 !== OB.format) {
          const BB = this.format.startsWith("RGB") !== OB.format.startsWith("RGB"),
            YB = this.format.includes("X") && OB.format.includes("A");
          if (BB || YB)
            for (let OB = 0; OB < GB.allocationSize; OB += 4) {
              if (BB) {
                const BB = DB[OB],
                  GB = DB[OB + 2];
                DB[OB] = GB, DB[OB + 2] = BB
              }
              YB && (DB[OB + 3] = 255)
            }
        }
        return JB
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, YB.Q)(null !== this._data), this._data instanceof MB) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const BB = this._data.getDataPlanes();
          if ((0, YB.gc)(BB)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const OB = BB.reduce(((BB, OB) => BB + OB.data.byteLength), 0),
            GB = new Uint8Array(OB);
          let DB = 0;
          const QB = [];
          for (const YB of BB) GB.set(YB.data, DB), QB.push(DB), DB += YB.data.byteLength;
          return new VideoFrame(GB, {
            format: this.format,
            layout: BB.map(((BB, OB) => ({
              offset: QB[OB],
              stride: BB.stride
            }))),
            codedWidth: this.codedWidth,
            codedHeight: this.codedHeight,
            timestamp: this.microsecondTimestamp,
            duration: this.microsecondDuration,
            colorSpace: this.colorSpace,
            visibleRect: this.visibleRect,
            displayWidth: this.squarePixelWidth,
            displayHeight: this.squarePixelHeight
          })
        }
        return WB(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, YB.Q)(this._layout), new VideoFrame(this._data, {
          format: this.format,
          codedWidth: this.codedWidth,
          codedHeight: this.codedHeight,
          layout: this._layout,
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0,
          colorSpace: this.colorSpace,
          visibleRect: this.visibleRect,
          displayWidth: this.squarePixelWidth,
          displayHeight: this.squarePixelHeight
        })) : new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        })
      }
      draw(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
        let JB = 0,
          MB = 0,
          PB = this.displayWidth,
          zB = this.displayHeight,
          lB = 0,
          pB = 0,
          qB = this.displayWidth,
          ZB = this.displayHeight;
        if (void 0 !== QB ? (JB = OB, MB = GB, PB = YB, zB = DB, lB = QB, pB = oB, void 0 !== jB ? (qB = jB, ZB = yB) : (qB = PB, ZB = zB)) : (lB = OB, pB = GB, void 0 !== YB && (qB = YB, ZB = DB)), !("undefined" !== typeof CanvasRenderingContext2D && BB instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && BB instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(JB)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(MB)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(PB) || PB < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(zB) || zB < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(lB)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(pB)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(qB) || qB < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(ZB) || ZB < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: JB,
          sy: MB,
          sWidth: PB,
          sHeight: zB
        } = this._unmapSourceRegion(JB, MB, PB, zB, this.rotation, this.flip));
        const NB = this.toCanvasImageSource();
        BB.save();
        const RB = lB + qB / 2,
          WB = pB + ZB / 2;
        BB.translate(RB, WB), this.flip && BB.scale(-1, 1), BB.rotate(this.rotation * Math.PI / 180);
        const AB = this.rotation % 180 === 0 ? 1 : qB / ZB;
        BB.scale(1 / AB, AB), BB.drawImage(NB, JB, MB, PB, zB, -qB / 2, -ZB / 2, qB, ZB), BB.restore()
      }
      drawWithFit(BB, OB) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && BB instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && BB instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!OB || "object" !== typeof OB) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(OB.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== OB.rotation && ![0, 90, 180, 270].includes(OB.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== OB.flip && "boolean" !== typeof OB.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== OB.crop && VB(OB.crop, "options.");
        const GB = BB.canvas.width,
          YB = BB.canvas.height,
          DB = OB.rotation ?? this.rotation,
          QB = OB.flip ?? this.flip,
          [oB, jB] = DB % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let yB, JB, MB, PB, zB = OB.crop;
        zB && (zB = AB(zB, oB, jB));
        const {
          sx: lB,
          sy: pB,
          sWidth: qB,
          sHeight: ZB
        } = this._unmapSourceRegion(OB.crop?.left ?? 0, OB.crop?.top ?? 0, OB.crop?.width ?? oB, OB.crop?.height ?? jB, DB, QB);
        if ("fill" === OB.fit) yB = 0, JB = 0, MB = GB, PB = YB;
        else {
          const [BB, DB] = OB.crop ? [OB.crop.width, OB.crop.height] : [oB, jB], QB = "contain" === OB.fit ? Math.min(GB / BB, YB / DB) : Math.max(GB / BB, YB / DB);
          MB = BB * QB, PB = DB * QB, yB = (GB - MB) / 2, JB = (YB - PB) / 2
        }
        BB.save();
        const NB = DB % 180 === 0 ? 1 : MB / PB;
        BB.translate(GB / 2, YB / 2), QB && BB.scale(-1, 1), BB.rotate(DB * Math.PI / 180), BB.scale(1 / NB, NB), BB.translate(-GB / 2, -YB / 2), BB.drawImage(this.toCanvasImageSource(), lB, pB, qB, ZB, yB, JB, MB, PB), BB.restore()
      }
      _unmapSourceRegion(BB, OB, GB, YB, DB, QB) {
        if (QB) {
          BB = (DB % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - BB - GB
        }
        return 90 === DB ? [BB, OB, GB, YB] = [OB, this.squarePixelHeight - BB - GB, YB, GB] : 180 === DB ? [BB, OB] = [this.squarePixelWidth - BB - GB, this.squarePixelHeight - OB - YB] : 270 === DB && ([BB, OB, GB, YB] = [this.squarePixelWidth - OB - YB, BB, YB, GB]), {
          sx: BB,
          sy: OB,
          sWidth: GB,
          sHeight: YB
        }
      }
      _drawWithFitAndMipmapping(BB, OB, GB) {
        const YB = BB.width,
          DB = BB.height,
          [QB, oB] = GB.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          jB = GB.crop ? GB.crop.width : QB,
          yB = GB.crop ? GB.crop.height : oB;
        let JB = 0;
        2 * YB < jB && 2 * DB < yB && (JB = Math.floor(Math.log2(Math.min(jB / YB, yB / DB))));
        const MB = YB * 2 ** JB,
          PB = DB * 2 ** JB,
          {
            canvas: zB,
            context: lB,
            isNew: pB
          } = JB > 0 ? NB(MB, PB) : {
            canvas: BB,
            context: OB,
            isNew: GB.targetIsFresh
          };
        lB.imageSmoothingQuality = "high", GB.fillBlack ? (lB.fillStyle = "black", lB.fillRect(0, 0, MB, PB)) : pB || lB.clearRect(0, 0, MB, PB), this.drawWithFit(lB, {
          fit: GB.fit,
          rotation: GB.rotation,
          flip: GB.flip,
          crop: GB.crop
        }), lB.globalCompositeOperation = "copy";
        for (let qB = JB; qB > 1; qB--) {
          const BB = YB * 2 ** qB,
            OB = DB * 2 ** qB;
          lB.drawImage(zB, 0, 0, BB, OB, 0, 0, BB / 2, OB / 2)
        }
        lB.globalCompositeOperation = "source-over", JB > 0 && (OB.imageSmoothingQuality = "high", OB.globalCompositeOperation = "copy", OB.drawImage(zB, 0, 0, 2 * YB, 2 * DB, 0, 0, YB, DB), OB.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, YB.Q)(null !== this._data), this._data instanceof MB || this._data instanceof Uint8Array) {
          const BB = this.toVideoFrame();
          return queueMicrotask((() => BB.close())), BB
        }
        return this._data
      }
      async transform(BB) {
        if (!BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
        if (void 0 !== BB.width && (!Number.isInteger(BB.width) || BB.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== BB.height && (!Number.isInteger(BB.height) || BB.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== BB.roundDimensionsTo && (!Number.isInteger(BB.roundDimensionsTo) || BB.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== BB.fit && !["fill", "contain", "cover"].includes(BB.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== BB.width && void 0 !== BB.height && void 0 === BB.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== BB.rotate && ![0, 90, 180, 270].includes(BB.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== BB.flip && "boolean" !== typeof BB.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== BB.crop && VB(BB.crop, "options."), void 0 !== BB.alpha && !["keep", "discard"].includes(BB.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: OB,
          flip: GB
        } = (0, YB.qb)(this.rotation, this.flip, BB.rotate ?? 0, BB.flip ?? !1), [DB, QB] = OB % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let oB = BB.crop;
        oB && (oB = AB(oB, DB, QB));
        const jB = oB ? oB.width : DB,
          yB = oB ? oB.height : QB,
          JB = jB / yB;
        let MB, PB;
        void 0 !== BB.width && void 0 === BB.height ? (MB = BB.width, PB = MB / JB) : void 0 === BB.width && void 0 !== BB.height ? (PB = BB.height, MB = PB * JB) : void 0 !== BB.width && void 0 !== BB.height ? (MB = BB.width, PB = BB.height) : (MB = jB, PB = yB), MB = (0, YB.cd)(MB, BB.roundDimensionsTo ?? 1), PB = (0, YB.cd)(PB, BB.roundDimensionsTo ?? 1);
        const zB = {
          width: MB,
          height: PB,
          fit: BB.fit ?? "fill",
          rotation: OB,
          flip: GB,
          crop: oB ?? {
            left: 0,
            top: 0,
            width: DB,
            height: QB
          },
          alpha: BB.alpha ?? "keep"
        };
        for (const lB of pB) {
          let BB = lB(this, zB);
          if ((0, YB.gc)(BB) && (BB = await BB), null !== BB) return BB
        }
        const {
          canvas: qB,
          context: ZB,
          isNew: RB
        } = NB(zB.width, zB.height);
        return this._drawWithFitAndMipmapping(qB, ZB, {
          fit: zB.fit,
          rotation: zB.rotation,
          flip: zB.flip,
          crop: zB.crop,
          targetIsFresh: RB,
          fillBlack: "discard" === zB.alpha
        }), new lB(qB, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(BB) {
        if (![0, 90, 180, 270].includes(BB)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = BB
      }
      setFlip(BB) {
        if ("boolean" !== typeof BB) throw new TypeError("newFlip must be a boolean.");
        this.flip = BB
      }
      setTimestamp(BB) {
        if (!Number.isFinite(BB)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = BB
      }
      setDuration(BB) {
        if (!Number.isFinite(BB) || BB < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = BB
      }
      setEncodeOptions(BB) {
        if (!BB || "object" !== typeof BB) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = BB
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const pB = [],
      qB = [];
    let ZB = 0;
    const NB = (BB, OB) => {
      for (const YB of qB)
        if (YB.canvas.width === BB && YB.canvas.height === OB) return YB.age = ZB++, {
          canvas: YB.canvas,
          context: YB.context,
          isNew: !1
        };
      let GB;
      if ("undefined" !== typeof OffscreenCanvas) GB = new OffscreenCanvas(BB, OB);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        GB = document.createElement("canvas"), GB.width = BB, GB.height = OB
      }
      const DB = GB.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!DB) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return qB.length >= 3 && qB.splice((0, YB.J)(qB, (BB => BB.age)), 1), qB.push({
        canvas: GB,
        context: DB,
        age: ZB++
      }), {
        canvas: GB,
        context: DB,
        isNew: !0
      }
    };
    class RB {
      constructor(BB) {
        if (void 0 !== BB) {
          if (!BB || "object" !== typeof BB) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const OB = Object.keys(YB.g);
          if (null != BB.primaries && !OB.includes(BB.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${OB.join(", ")}.`);
          const GB = Object.keys(YB.z);
          if (null != BB.transfer && !GB.includes(BB.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${GB.join(", ")}.`);
          const DB = Object.keys(YB.r);
          if (null != BB.matrix && !DB.includes(BB.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${DB.join(", ")}.`);
          if (null != BB.fullRange && "boolean" !== typeof BB.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = BB?.primaries ?? null, this.transfer = BB?.transfer ?? null, this.matrix = BB?.matrix ?? null, this.fullRange = BB?.fullRange ?? null
      }
      toJSON() {
        return {
          primaries: this.primaries,
          transfer: this.transfer,
          matrix: this.matrix,
          fullRange: this.fullRange
        }
      }
    }
    const WB = BB => "undefined" !== typeof VideoFrame && BB instanceof VideoFrame,
      AB = (BB, OB, GB) => {
        const DB = Math.min(BB.left, OB),
          QB = Math.min(BB.top, GB),
          oB = Math.min(BB.width, OB - DB),
          jB = Math.min(BB.height, GB - QB);
        return (0, YB.Q)(oB >= 0), (0, YB.Q)(jB >= 0), {
          left: DB,
          top: QB,
          width: oB,
          height: jB
        }
      },
      VB = (BB, OB) => {
        if (!BB || "object" !== typeof BB) throw new TypeError(OB + "crop, when provided, must be an object.");
        if (!Number.isInteger(BB.left) || BB.left < 0) throw new TypeError(OB + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(BB.top) || BB.top < 0) throw new TypeError(OB + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(BB.width) || BB.width < 0) throw new TypeError(OB + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(BB.height) || BB.height < 0) throw new TypeError(OB + "crop.height must be a non-negative integer.")
      },
      SB = BB => {
        if (!BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
        if (void 0 !== BB.colorSpace && !["display-p3", "srgb"].includes(BB.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== BB.format && "string" !== typeof BB.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== BB.layout) {
          if (!Array.isArray(BB.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const OB of BB.layout) {
            if (!OB || "object" !== typeof OB) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(OB.offset) || OB.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(OB.stride) || OB.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== BB.rect) {
          if (!BB.rect || "object" !== typeof BB.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== BB.rect.x && (!Number.isInteger(BB.rect.x) || BB.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== BB.rect.y && (!Number.isInteger(BB.rect.y) || BB.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== BB.rect.width && (!Number.isInteger(BB.rect.width) || BB.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== BB.rect.height && (!Number.isInteger(BB.rect.height) || BB.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      nB = (BB, OB, GB) => {
        const YB = UB(BB),
          DB = [];
        let QB = 0;
        for (const oB of YB) {
          const BB = Math.ceil(OB / oB.widthDivisor),
            YB = Math.ceil(GB / oB.heightDivisor),
            jB = BB * oB.sampleBytes,
            yB = jB * YB;
          DB.push({
            offset: QB,
            stride: jB
          }), QB += yB
        }
        return DB
      },
      UB = BB => {
        const OB = (BB, OB, GB, YB, DB) => {
          const QB = [{
            sampleBytes: BB,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: OB,
            widthDivisor: GB,
            heightDivisor: YB
          }, {
            sampleBytes: OB,
            widthDivisor: GB,
            heightDivisor: YB
          }];
          return DB && QB.push({
            sampleBytes: BB,
            widthDivisor: 1,
            heightDivisor: 1
          }), QB
        };
        switch (BB) {
          case "I420":
            return OB(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return OB(2, 2, 2, 2, !1);
          case "I420A":
            return OB(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return OB(2, 2, 2, 2, !0);
          case "I422":
            return OB(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return OB(2, 2, 2, 1, !1);
          case "I422A":
            return OB(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return OB(2, 2, 2, 1, !0);
          case "I444":
            return OB(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return OB(2, 2, 1, 1, !1);
          case "I444A":
            return OB(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return OB(2, 2, 1, 1, !0);
          case "NV12":
            return [{
              sampleBytes: 1,
              widthDivisor: 1,
              heightDivisor: 1
            }, {
              sampleBytes: 2,
              widthDivisor: 2,
              heightDivisor: 2
            }];
          case "RGBA":
          case "RGBX":
          case "BGRA":
          case "BGRX":
            return [{
              sampleBytes: 4,
              widthDivisor: 1,
              heightDivisor: 1
            }];
          default:
            (0, YB.M)(BB), (0, YB.Q)(!1)
        }
      },
      fB = (BB, OB) => {
        const GB = {
            left: 0,
            top: 0,
            width: BB.codedWidth,
            height: BB.codedHeight
          },
          YB = OB.rect,
          DB = kB(GB, YB, BB.codedWidth, BB.codedHeight, BB.format),
          QB = OB.layout;
        let oB;
        if (OB.format && OB.format !== BB.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(OB.format)) throw new Error("NotSupportedError: Invalid destination format.");
          oB = OB.format
        } else oB = BB.format;
        return KB(DB, oB, QB)
      },
      kB = (BB, OB, GB, YB, DB) => {
        const QB = {
          ...BB
        };
        if (void 0 !== OB) {
          if (0 === OB.width || 0 === OB.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((OB.x || 0) + (OB.width || 0) > GB) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((OB.y || 0) + (OB.height || 0) > YB) throw new TypeError("visibleRect exceeds codedHeight.");
          QB.x = OB.x || 0, QB.y = OB.y || 0, QB.width = OB.width || 0, QB.height = OB.height || 0
        }
        if (!dB(DB, QB)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return QB
      },
      dB = (BB, OB) => {
        if (null === BB) return !0;
        const GB = UB(BB);
        for (let YB = 0; YB < GB.length; YB++) {
          const BB = GB[YB],
            DB = BB.widthDivisor,
            QB = BB.heightDivisor;
          if ((OB.x || 0) % DB !== 0) return !1;
          if ((OB.y || 0) % QB !== 0) return !1
        }
        return !0
      },
      KB = (BB, OB, GB) => {
        const YB = UB(OB),
          DB = YB.length;
        if (void 0 !== GB && GB.length !== DB) throw new TypeError(`Layout must have ${DB} planes.`);
        let QB = 0;
        const oB = [],
          jB = [];
        for (let yB = 0; yB < DB; yB++) {
          const OB = YB[yB],
            DB = OB.sampleBytes,
            JB = OB.widthDivisor,
            MB = OB.heightDivisor,
            PB = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (PB.sourceTop = Math.ceil(Math.trunc(BB.y || 0) / MB), PB.sourceHeight = Math.ceil(Math.trunc(BB.height || 0) / MB), PB.sourceLeftBytes = Math.floor(Math.trunc(BB.x || 0) / JB) * DB, PB.sourceWidthBytes = Math.floor(Math.trunc(BB.width || 0) / JB) * DB, void 0 !== GB) {
            const BB = GB[yB];
            if (BB.stride < PB.sourceWidthBytes) throw new TypeError(`Stride for plane ${yB} is too small.`);
            PB.destinationOffset = BB.offset, PB.destinationStride = BB.stride
          } else PB.destinationOffset = QB, PB.destinationStride = PB.sourceWidthBytes;
          const zB = PB.destinationStride * PB.sourceHeight + PB.destinationOffset;
          if (zB > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          jB.push(zB), QB = Math.max(QB, zB);
          for (let BB = 0; BB < yB; BB++) {
            const OB = oB[BB];
            if (!(jB[yB] <= OB.destinationOffset || jB[BB] <= PB.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          oB.push(PB)
        }
        return {
          allocationSize: QB,
          computedLayouts: oB
        }
      },
      uB = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class mB {
      constructor() {
        this._referenceCount = 0
      }
    }
    class IB {
      get microsecondTimestamp() {
        return Math.trunc(YB.w * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(YB.w * this.duration)
      }
      constructor(BB) {
        if (this._closed = !1, rB(BB)) {
          if (null === BB.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = BB, this.format = BB.format, this.sampleRate = BB.sampleRate, this.numberOfFrames = BB.numberOfFrames, this.numberOfChannels = BB.numberOfChannels, this.timestamp = BB.timestamp / 1e6, this.duration = BB.numberOfFrames / BB.sampleRate
        } else if (BB instanceof mB) {
          if (this._data = BB, BB._referenceCount++, this.format = BB.getFormat(), !uB.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = BB.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = BB.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = BB.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = BB.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!BB || "object" !== typeof BB) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!uB.has(BB.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(BB.sampleRate) || BB.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(BB.numberOfChannels) || 0 === BB.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(BB?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const OB = BB.data.byteLength / (FB(BB.format) * BB.numberOfChannels);
          if (!Number.isInteger(OB)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let GB;
          if (this.format = BB.format, this.sampleRate = BB.sampleRate, this.numberOfFrames = OB, this.numberOfChannels = BB.numberOfChannels, this.timestamp = BB.timestamp, this.duration = OB / BB.sampleRate, BB.data instanceof ArrayBuffer) GB = new Uint8Array(BB.data);
          else {
            if (!ArrayBuffer.isView(BB.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            GB = new Uint8Array(BB.data.buffer, BB.data.byteOffset, BB.data.byteLength)
          }
          const YB = this.numberOfFrames * this.numberOfChannels * FB(this.format);
          if (GB.byteLength < YB) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = GB
        }
        JB?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(BB) {
        if (!BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
        if (!Number.isInteger(BB.planeIndex) || BB.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== BB.format && !uB.has(BB.format)) throw new TypeError("Invalid format.");
        if (void 0 !== BB.frameOffset && (!Number.isInteger(BB.frameOffset) || BB.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== BB.frameCount && (!Number.isInteger(BB.frameCount) || BB.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const OB = BB.format ?? this.format,
          GB = BB.frameOffset ?? 0;
        if (GB >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const YB = void 0 !== BB.frameCount ? BB.frameCount : this.numberOfFrames - GB;
        if (YB > this.numberOfFrames - GB) throw new RangeError("frameCount out of range");
        const DB = FB(OB),
          QB = iB(OB);
        if (QB && BB.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!QB && 0 !== BB.planeIndex) throw new RangeError("planeIndex out of range");
        return (QB ? YB : YB * this.numberOfChannels) * DB
      }
      copyTo(BB, OB) {
        if (!(0, YB.Gb)(BB)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!OB || "object" !== typeof OB) throw new TypeError("options must be an object.");
        if (!Number.isInteger(OB.planeIndex) || OB.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== OB.format && !uB.has(OB.format)) throw new TypeError("Invalid format.");
        if (void 0 !== OB.frameOffset && (!Number.isInteger(OB.frameOffset) || OB.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== OB.frameCount && (!Number.isInteger(OB.frameCount) || OB.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: GB,
          frameCount: DB,
          frameOffset: QB
        } = OB;
        let {
          planeIndex: oB
        } = OB, jB = this.format;
        const yB = GB ?? this.format;
        if (!yB) throw new Error("Destination format not determined");
        const JB = this.numberOfFrames,
          MB = this.numberOfChannels,
          PB = QB ?? 0;
        if (PB >= JB) throw new RangeError("frameOffset out of range");
        const zB = void 0 !== DB ? DB : JB - PB;
        if (zB > JB - PB) throw new RangeError("frameCount out of range");
        const lB = FB(yB),
          pB = iB(yB);
        if (pB && oB >= MB) throw new RangeError("planeIndex out of range");
        if (!pB && 0 !== oB) throw new RangeError("planeIndex out of range");
        const qB = (pB ? zB : zB * MB) * lB;
        if (BB.byteLength < qB) throw new RangeError("Destination buffer is too small");
        const ZB = (0, YB.Gd)(BB),
          NB = gB(yB);
        if (rB(this._data)) {
          if ((0, YB.lc)() && MB > 2 && yB !== jB) return void wB(this._data, ZB, jB, yB, MB, oB, PB, zB);
          try {
            return void this._data.copyTo(BB, {
              planeIndex: oB,
              frameOffset: PB,
              frameCount: zB,
              format: yB
            })
          } catch (nB) {
            if ("f32-planar" === yB) throw nB;
            jB = "f32-planar"
          }
        }
        const RB = LB(jB),
          WB = FB(jB),
          AB = iB(jB);
        let VB;
        if (this._data instanceof mB) {
          const BB = BB => {
            const OB = this._data.getDataPlane(BB);
            if (!(OB instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const GB = JB * WB * (AB ? 1 : MB);
            if (OB.byteLength !== GB) throw new TypeError(`Data plane ${BB} has invalid size. Expected exactly ${GB} bytes, got ${OB.byteLength} bytes.`);
            return OB
          };
          if (AB)
            if (pB) VB = BB(oB), oB = 0;
            else {
              VB = new Uint8Array(JB * WB * MB);
              for (let OB = 0; OB < MB; OB++) {
                const GB = BB(OB);
                VB.set(GB, OB * JB * WB)
              }
            }
          else VB = BB(0)
        } else if (this._data instanceof Uint8Array) VB = this._data;
        else if ((0, YB.Q)("f32-planar" === jB), pB) VB = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: oB
        })), this._data.copyTo(VB, {
          format: "f32-planar",
          planeIndex: oB
        }), oB = 0;
        else {
          VB = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * MB);
          for (let BB = 0; BB < MB; BB++) this._data.copyTo(VB.subarray(BB * JB * WB, (BB + 1) * JB * WB), {
            format: "f32-planar",
            planeIndex: BB
          })
        }
        const SB = (0, YB.Gd)(VB);
        for (let YB = 0; YB < zB; YB++)
          if (pB) {
            let BB;
            BB = AB ? (oB * JB + (YB + PB)) * WB : ((YB + PB) * MB + oB) * WB;
            NB(ZB, YB * lB, RB(SB, BB))
          } else
            for (let BB = 0; BB < MB; BB++) {
              let OB;
              OB = AB ? (BB * JB + (YB + PB)) * WB : ((YB + PB) * MB + BB) * WB;
              NB(ZB, (YB * MB + BB) * lB, RB(SB, OB))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof mB) {
          const BB = new IB(this._data);
          return BB.setTimestamp(this.timestamp), BB
        }
        if (rB(this._data)) {
          const BB = new IB(this._data.clone());
          return BB.setTimestamp(this.timestamp), BB
        }
        return new IB({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(BB) || BB < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(OB) || OB < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (BB > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (OB > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (OB < BB) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const GB = OB - BB,
          YB = FB(this.format);
        let DB;
        if (iB(this.format)) {
          const OB = GB * YB;
          if (DB = new Uint8Array(OB * this.numberOfChannels), GB > 0)
            for (let YB = 0; YB < this.numberOfChannels; YB++) this.copyTo(DB.subarray(YB * OB, (YB + 1) * OB), {
              planeIndex: YB,
              format: this.format,
              frameOffset: BB,
              frameCount: GB
            })
        } else DB = new Uint8Array(GB * this.numberOfChannels * YB), GB > 0 && this.copyTo(DB, {
          planeIndex: 0,
          format: this.format,
          frameOffset: BB,
          frameCount: GB
        });
        return new IB({
          data: DB,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + BB / this.sampleRate
        })
      }
      close() {
        this._closed || (JB?.unregister(this), this._data instanceof mB ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : rB(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof mB ? this._createAudioDataFromData() : rB(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (iB(this.format)) {
          const BB = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            OB = new ArrayBuffer(BB * this.numberOfChannels);
          for (let GB = 0; GB < this.numberOfChannels; GB++) this.copyTo(new Uint8Array(OB, GB * BB, BB), {
            planeIndex: GB,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: OB
          })
        } {
          const BB = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(BB, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: BB
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const BB = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          OB = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let GB = 0; GB < this.numberOfChannels; GB++) this.copyTo(OB, {
          planeIndex: GB,
          format: "f32-planar"
        }), BB.copyToChannel(OB, GB);
        return BB
      }
      setTimestamp(BB) {
        if (!Number.isFinite(BB)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = BB
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(BB, OB) {
        if (!(BB instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const GB = BB.numberOfChannels,
          YB = BB.sampleRate,
          DB = BB.length,
          QB = Math.floor(24e4 / GB);
        let oB = 0,
          jB = DB;
        for (; jB > 0;) {
          const DB = Math.min(QB, jB),
            yB = new Float32Array(GB * DB);
          for (let OB = 0; OB < GB; OB++) BB.copyFromChannel(yB.subarray(OB * DB, (OB + 1) * DB), OB, oB);
          yield new IB({
            format: "f32-planar",
            sampleRate: YB,
            numberOfFrames: DB,
            numberOfChannels: GB,
            timestamp: OB + oB / YB,
            data: yB
          }), oB += DB, jB -= DB
        }
      }
      static fromAudioBuffer(BB, OB) {
        if (!(BB instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const GB = BB.numberOfChannels,
          YB = BB.sampleRate,
          DB = BB.length,
          QB = Math.floor(24e4 / GB);
        let oB = 0,
          jB = DB;
        const yB = [];
        for (; jB > 0;) {
          const DB = Math.min(QB, jB),
            JB = new Float32Array(GB * DB);
          for (let OB = 0; OB < GB; OB++) BB.copyFromChannel(JB.subarray(OB * DB, (OB + 1) * DB), OB, oB);
          const MB = new IB({
            format: "f32-planar",
            sampleRate: YB,
            numberOfFrames: DB,
            numberOfChannels: GB,
            timestamp: OB + oB / YB,
            data: JB
          });
          yB.push(MB), oB += DB, jB -= DB
        }
        return yB
      }
    }
    const FB = BB => {
        switch (BB) {
          case "u8":
          case "u8-planar":
            return 1;
          case "s16":
          case "s16-planar":
            return 2;
          case "s32":
          case "s32-planar":
          case "f32":
          case "f32-planar":
            return 4;
          default:
            throw new Error("Unknown AudioSampleFormat")
        }
      },
      iB = BB => {
        switch (BB) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      LB = BB => {
        switch (BB) {
          case "u8":
          case "u8-planar":
            return (BB, OB) => (BB.getUint8(OB) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (BB, OB) => BB.getInt16(OB, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (BB, OB) => BB.getInt32(OB, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (BB, OB) => BB.getFloat32(OB, !0)
        }
      },
      gB = BB => {
        switch (BB) {
          case "u8":
          case "u8-planar":
            return (BB, OB, GB) => BB.setUint8(OB, (0, YB.cb)(Math.round(128 * GB) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (BB, OB, GB) => BB.setInt16(OB, (0, YB.cb)(Math.round(32768 * GB), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (BB, OB, GB) => BB.setInt32(OB, (0, YB.cb)(Math.round(2147483648 * GB), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (BB, OB, GB) => BB.setFloat32(OB, GB, !0)
        }
      },
      rB = BB => "undefined" !== typeof AudioData && BB instanceof AudioData,
      XB = BB => {
        switch (BB) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return BB
        }
      },
      wB = (BB, OB, GB, DB, QB, oB, jB, yB) => {
        const JB = LB(GB),
          MB = gB(DB),
          PB = FB(GB),
          zB = FB(DB),
          lB = iB(GB);
        if (iB(DB))
          if (lB) {
            const DB = new ArrayBuffer(yB * PB),
              QB = (0, YB.Gd)(DB);
            BB.copyTo(DB, {
              planeIndex: oB,
              frameOffset: jB,
              frameCount: yB,
              format: GB
            });
            for (let BB = 0; BB < yB; BB++) {
              MB(OB, BB * zB, JB(QB, BB * PB))
            }
          } else {
            const DB = new ArrayBuffer(yB * QB * PB),
              lB = (0, YB.Gd)(DB);
            BB.copyTo(DB, {
              planeIndex: 0,
              frameOffset: jB,
              frameCount: yB,
              format: GB
            });
            for (let BB = 0; BB < yB; BB++) {
              MB(OB, BB * zB, JB(lB, (BB * QB + oB) * PB))
            }
          }
        else if (lB) {
          const DB = new ArrayBuffer(yB * PB),
            oB = (0, YB.Gd)(DB);
          for (let YB = 0; YB < QB; YB++) {
            BB.copyTo(DB, {
              planeIndex: YB,
              frameOffset: jB,
              frameCount: yB,
              format: GB
            });
            for (let BB = 0; BB < yB; BB++) {
              MB(OB, (BB * QB + YB) * zB, JB(oB, BB * PB))
            }
          }
        } else {
          const DB = new ArrayBuffer(yB * QB * PB),
            oB = (0, YB.Gd)(DB);
          BB.copyTo(DB, {
            planeIndex: 0,
            frameOffset: jB,
            frameCount: yB,
            format: GB
          });
          for (let BB = 0; BB < yB; BB++)
            for (let GB = 0; GB < QB; GB++) {
              const YB = BB * QB + GB;
              MB(OB, YB * zB, JB(oB, YB * PB))
            }
        }
      },
      EB = (BB, OB) => {
        const GB = BB.allocationSize({
            format: OB,
            planeIndex: 0
          }),
          YB = new ArrayBuffer(GB);
        return BB.copyTo(YB, {
          format: OB,
          planeIndex: 0
        }), new IB({
          data: YB,
          format: OB,
          numberOfChannels: BB.numberOfChannels,
          sampleRate: BB.sampleRate,
          timestamp: BB.timestamp,
          duration: BB.duration
        })
      }
  },
  40627: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => JB,
      h: () => QB,
      j: () => yB
    });
    const YB = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      DB = /^WEBVTT(.|\n)*?\n{2}/,
      QB = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class oB {
      constructor(BB) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = BB
      }
      parse(BB) {
        let OB;
        if (BB = BB.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), YB.lastIndex = 0, !this.preambleText) {
          if (!DB.test(BB)) throw new Error("WebVTT preamble incorrect.");
          OB = YB.exec(BB);
          const GB = BB.slice(0, OB?.index ?? BB.length).trimEnd();
          if (!GB) throw new Error("No WebVTT preamble provided.");
          this.preambleText = GB, OB && (BB = BB.slice(OB.index), YB.lastIndex = 0)
        }
        for (; OB = YB.exec(BB);) {
          const GB = BB.slice(0, OB.index),
            DB = OB[1],
            QB = OB.index + OB[0].length,
            oB = BB.indexOf("\n", QB) + 1,
            jB = BB.slice(QB, oB).trim();
          let JB = BB.indexOf("\n\n", QB); - 1 === JB && (JB = BB.length);
          const MB = yB(OB[2]),
            PB = yB(OB[3]) - MB,
            zB = BB.slice(oB, JB).trim();
          BB = BB.slice(JB).trimStart(), YB.lastIndex = 0;
          const lB = {
              timestamp: MB / 1e3,
              duration: PB / 1e3,
              text: zB,
              identifier: DB,
              settings: jB,
              notes: GB
            },
            pB = {};
          this.preambleEmitted || (pB.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(lB, pB)
        }
      }
    }
    const jB = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      yB = BB => {
        const OB = jB.exec(BB);
        if (!OB) throw new Error("Expected match.");
        return 36e5 * Number(OB[1] || "0") + 6e4 * Number(OB[2]) + 1e3 * Number(OB[3]) + Number(OB[4])
      },
      JB = BB => {
        const OB = Math.floor(BB / 36e5),
          GB = Math.floor(BB % 36e5 / 6e4),
          YB = Math.floor(BB % 6e4 / 1e3),
          DB = BB % 1e3;
        return OB.toString().padStart(2, "0") + ":" + GB.toString().padStart(2, "0") + ":" + YB.toString().padStart(2, "0") + "." + DB.toString().padStart(3, "0")
      }
  },
  40641: (BB, OB, GB) => {
    var YB;
    GB.d(OB, {
      b: () => JB,
      e: () => MB,
      g: () => zB,
      i: () => oB
    });
    var DB = GB(40648),
      QB = GB(40574);
    "undefined" !== typeof(YB || (YB = GB.t(DB, 2))) && (YB || (YB = GB.t(DB, 2)));
    class oB extends QB.m {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(BB) {
        !1 !== this._monotonicity && (this._monotonicity = BB)
      }
      _dispatchWrite(BB, OB) {
        this.onwrite?.(BB, OB), this._emit("write", {
          start: BB,
          end: OB
        })
      }
      slice(BB) {
        if (!Number.isInteger(BB) || BB < 0) throw new TypeError("offset must be a non-negative integer.");
        return new PB(this, BB)
      }
    }
    const jB = 65536,
      yB = 2 ** 32;
    class JB extends oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !BB || "object" !== typeof BB) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== BB.onFinalize && "function" !== typeof BB.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = BB, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(jB, {
            maxByteLength: yB
          })
        } catch {
          this._buffer = new ArrayBuffer(jB), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(jB);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(BB) {
        let OB = this._buffer.byteLength;
        for (; OB < BB;) OB *= 2;
        if (OB !== this._buffer.byteLength) {
          if (OB > yB) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(OB);
          else {
            const BB = new ArrayBuffer(OB),
              GB = new Uint8Array(BB);
            GB.set(this._bytes, 0), this._buffer = BB, this._bytes = GB
          }
        }
      }
      _start() {}
      _write(BB, OB) {
        this._ensureSize(OB + BB.byteLength), this._bytes.set(BB, OB), this._maxPos = Math.max(this._maxPos, OB + BB.byteLength), this._dispatchWrite(OB, OB + BB.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(BB, OB) {
        return this._bytes.slice(BB, OB)
      }
    }
    class MB extends oB {
      _start() {}
      _write(BB, OB) {
        this._dispatchWrite(OB, OB + BB.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class PB extends oB {
      constructor(BB, OB) {
        super(), this._baseTarget = BB, this._offset = OB
      }
      _start() {}
      _write(BB, OB) {
        this._baseTarget._write(BB, this._offset + OB), this._dispatchWrite(OB, OB + BB.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(BB) {
        super._setMonotonicity(BB), this._baseTarget._setMonotonicity(BB)
      }
    }
    class zB {
      constructor(BB, OB) {
        if (this.rootPath = BB, this.getTarget = OB, "string" !== typeof BB) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof OB) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  40619: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = "Mediabunny v1.61.3"
  },
  40633: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    var YB = GB(40574);
    class DB {
      constructor(BB, OB) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, BB._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = BB, BB._setMonotonicity(OB), BB._writerAcquired = !0
      }
      start() {
        (0, YB.Q)(!this.started), this.target._start(), this.started = !0
      }
      write(BB) {
        (0, YB.Q)(this.started && !this.finalized), this.maybeTrackWrites(BB), this.target._write(BB, this.pos), this.pos += BB.byteLength
      }
      seek(BB) {
        this.pos = BB
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, YB.Q)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, YB.Q)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(BB) {
        if (!this.trackedWrites) return;
        let OB = this.getPos();
        if (OB < this.trackedStart) {
          if (OB + BB.byteLength <= this.trackedStart) return;
          BB = BB.subarray(this.trackedStart - OB), OB = 0
        }
        const GB = OB + BB.byteLength - this.trackedStart;
        let YB = this.trackedWrites.byteLength;
        for (; YB < GB;) YB *= 2;
        if (YB !== this.trackedWrites.byteLength) {
          const BB = new Uint8Array(YB);
          BB.set(this.trackedWrites, 0), this.trackedWrites = BB
        }
        this.trackedWrites.set(BB, OB - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, OB + BB.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const BB = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);