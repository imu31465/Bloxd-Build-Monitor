/*! For license information please see yteou.237.77ddedfb.chunk.js.LICENSE.txt */
export const id = 237;
export const ids = [237];
export const modules = {
  41357: (dd, Od, md) => {
    function Wd() {
      return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
    }

    function Fd(dd) {
      return dd instanceof Uint8Array && (!Wd() || !Buffer.isBuffer(dd))
    }

    function Rd(dd) {
      return dd instanceof ArrayBuffer
    }

    function Xd(dd) {
      return !!Wd() && Buffer.isBuffer(dd)
    }
    var Kd = md(41365).c,
      hd = md(41368).e,
      vd = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
    Od.d = function(dd) {
      if (!Fd(dd) && !Rd(dd) && !Xd(dd)) throw new TypeError(vd);
      var Od = !1,
        md = !1;
      Fd(dd) ? Od = !0 : Rd(dd) && (md = !0, dd = new Uint8Array(dd));
      var Wd, Kd, Qd, td = new hd(dd),
        od = td.maxCompressedLength();
      if (Od ? (Wd = new Uint8Array(od), Qd = td.compressToBuffer(Wd)) : md ? (Wd = new ArrayBuffer(od), Kd = new Uint8Array(Wd), Qd = td.compressToBuffer(Kd)) : (Wd = Buffer.alloc(od), Qd = td.compressToBuffer(Wd)), !Wd.slice) {
        var Nd = new Uint8Array(Array.prototype.slice.call(Wd, 0, Qd));
        if (Od) return Nd;
        if (md) return Nd.buffer;
        throw new Error("Not implemented")
      }
      return Wd.slice(0, Qd)
    }
  },
  41368: (dd, Od) => {
    var md = new Array(15);

    function Wd(dd, Od) {
      return 506832829 * dd >>> Od
    }

    function Fd(dd, Od) {
      return dd[Od] + (dd[Od + 1] << 8) + (dd[Od + 2] << 16) + (dd[Od + 3] << 24)
    }

    function Rd(dd, Od, md) {
      return dd[Od] === dd[md] && dd[Od + 1] === dd[md + 1] && dd[Od + 2] === dd[md + 2] && dd[Od + 3] === dd[md + 3]
    }

    function Xd(dd, Od, md, Wd, Fd) {
      return md <= 60 ? (Wd[Fd] = md - 1 << 2, Fd += 1) : md < 256 ? (Wd[Fd] = 240, Wd[Fd + 1] = md - 1, Fd += 2) : (Wd[Fd] = 244, Wd[Fd + 1] = md - 1 & 255, Wd[Fd + 2] = md - 1 >>> 8, Fd += 3),
        function(dd, Od, md, Wd, Fd) {
          var Rd;
          for (Rd = 0; Rd < Fd; Rd++) md[Wd + Rd] = dd[Od + Rd]
        }(dd, Od, Wd, Fd, md), Fd + md
    }

    function Kd(dd, Od, md, Wd) {
      return Wd < 12 && md < 2048 ? (dd[Od] = 1 + (Wd - 4 << 2) + (md >>> 8 << 5), dd[Od + 1] = 255 & md, Od + 2) : (dd[Od] = 2 + (Wd - 1 << 2), dd[Od + 1] = 255 & md, dd[Od + 2] = md >>> 8, Od + 3)
    }

    function hd(dd, Od, md, Wd) {
      for (; Wd >= 68;) Od = Kd(dd, Od, md, 64), Wd -= 64;
      return Wd > 64 && (Od = Kd(dd, Od, md, 60), Wd -= 60), Kd(dd, Od, md, Wd)
    }

    function vd(dd, Od, Kd, vd, Qd) {
      for (var td = 1; 1 << td <= Kd && td <= 14;) td += 1;
      var od = 32 - (td -= 1);
      "undefined" === typeof md[td] && (md[td] = new Uint16Array(1 << td));
      var Nd, qd = md[td];
      for (Nd = 0; Nd < qd.length; Nd++) qd[Nd] = 0;
      var Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud = Od + Kd,
        xd = Od,
        Bd = Od,
        Sd = !0;
      if (Kd >= 15)
        for (Hd = Ud - 15, bd = Wd(Fd(dd, Od += 1), od); Sd;) {
          Yd = 32, Td = Od;
          do {
            if (yd = bd, gd = Yd >>> 5, Yd += 1, Td = (Od = Td) + gd, Od > Hd) {
              Sd = !1;
              break
            }
            bd = Wd(Fd(dd, Td), od), pd = xd + qd[yd], qd[yd] = Od - xd
          } while (!Rd(dd, Od, pd));
          if (!Sd) break;
          Qd = Xd(dd, Bd, Od - Bd, vd, Qd);
          do {
            for (wd = Od, Ed = 4; Od + Ed < Ud && dd[Od + Ed] === dd[pd + Ed];) Ed += 1;
            if (Od += Ed, Qd = hd(vd, Qd, wd - pd, Ed), Bd = Od, Od >= Hd) {
              Sd = !1;
              break
            }
            qd[Wd(Fd(dd, Od - 1), od)] = Od - 1 - xd, pd = xd + qd[Jd = Wd(Fd(dd, Od), od)], qd[Jd] = Od - xd
          } while (Rd(dd, Od, pd));
          if (!Sd) break;
          bd = Wd(Fd(dd, Od += 1), od)
        }
      return Bd < Ud && (Qd = Xd(dd, Bd, Ud - Bd, vd, Qd)), Qd
    }

    function Qd(dd) {
      this.array = dd
    }
    Qd.prototype.maxCompressedLength = function() {
      var dd = this.array.length;
      return 32 + dd + Math.floor(dd / 6)
    }, Qd.prototype.compressToBuffer = function(dd) {
      var Od, md = this.array,
        Wd = md.length,
        Fd = 0,
        Rd = 0;
      for (Rd = function(dd, Od, md) {
          do {
            Od[md] = 127 & dd, (dd >>>= 7) > 0 && (Od[md] += 128), md += 1
          } while (dd > 0);
          return md
        }(Wd, dd, Rd); Fd < Wd;) Rd = vd(md, Fd, Od = Math.min(Wd - Fd, 65536), dd, Rd), Fd += Od;
      return Rd
    }, Od.e = Qd
  },
  41365: (dd, Od) => {
    var md = [0, 255, 65535, 16777215, 4294967295];

    function Wd(dd, Od, md, Wd, Fd) {
      var Rd;
      for (Rd = 0; Rd < Fd; Rd++) md[Wd + Rd] = dd[Od + Rd]
    }

    function Fd(dd, Od, md, Wd) {
      var Fd;
      for (Fd = 0; Fd < Wd; Fd++) dd[Od + Fd] = dd[Od - md + Fd]
    }

    function Rd(dd) {
      this.array = dd, this.pos = 0
    }
    Rd.prototype.readUncompressedLength = function() {
      for (var dd, Od, md = 0, Wd = 0; Wd < 32 && this.pos < this.array.length;) {
        if (dd = this.array[this.pos], this.pos += 1, (Od = 127 & dd) << Wd >>> Wd !== Od) return -1;
        if (md |= Od << Wd, dd < 128) return md;
        Wd += 7
      }
      return -1
    }, Rd.prototype.uncompressToBuffer = function(dd) {
      for (var Od, Rd, Xd, Kd, hd = this.array, vd = hd.length, Qd = this.pos, td = 0; Qd < hd.length;)
        if (Od = hd[Qd], Qd += 1, 0 === (3 & Od)) {
          if ((Rd = 1 + (Od >>> 2)) > 60) {
            if (Qd + 3 >= vd) return !1;
            Xd = Rd - 60, Rd = 1 + ((Rd = hd[Qd] + (hd[Qd + 1] << 8) + (hd[Qd + 2] << 16) + (hd[Qd + 3] << 24)) & md[Xd]), Qd += Xd
          }
          if (Qd + Rd > vd) return !1;
          Wd(hd, Qd, dd, td, Rd), Qd += Rd, td += Rd
        } else {
          switch (3 & Od) {
            case 1:
              Rd = 4 + (Od >>> 2 & 7), Kd = hd[Qd] + (Od >>> 5 << 8), Qd += 1;
              break;
            case 2:
              if (Qd + 1 >= vd) return !1;
              Rd = 1 + (Od >>> 2), Kd = hd[Qd] + (hd[Qd + 1] << 8), Qd += 2;
              break;
            case 3:
              if (Qd + 3 >= vd) return !1;
              Rd = 1 + (Od >>> 2), Kd = hd[Qd] + (hd[Qd + 1] << 8) + (hd[Qd + 2] << 16) + (hd[Qd + 3] << 24), Qd += 4
          }
          if (0 === Kd || Kd > td) return !1;
          Fd(dd, td, Kd, Rd), td += Rd
        } return !0
    }, Od.c = Rd
  },
  37635: dd => {
    dd.exports = function(dd, Od, md, Wd) {
      var Fd = self || window;
      try {
        try {
          var Rd;
          try {
            Rd = new Fd.Blob([dd])
          } catch (vd) {
            (Rd = new(Fd.BlobBuilder || Fd.WebKitBlobBuilder || Fd.MozBlobBuilder || Fd.MSBlobBuilder)).append(dd), Rd = Rd.getBlob()
          }
          var Xd = Fd.URL || Fd.webkitURL,
            Kd = Xd.createObjectURL(Rd),
            hd = new Fd[Od](Kd, md);
          return Xd.revokeObjectURL(Kd), hd
        } catch (vd) {
          return new Fd[Od]("data:application/javascript,".concat(encodeURIComponent(dd)), md)
        }
      } catch (vd) {
        if (!Wd) throw Error("Inline worker is not supported");
        return new Fd[Od](Wd, md)
      }
    }
  },
  41503: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      g: () => Fd,
      k: () => vd,
      o: () => Nd,
      p: () => Xd,
      s: () => qd
    });
    var Wd = md(41506);
    const Fd = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
      Rd = [-1, 1, 2, 3, 4, 5, 6, 8],
      Xd = dd => {
        if (!dd || dd.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
        const Od = new Wd.c(dd),
          md = Kd(Od),
          {
            frequencyIndex: Fd,
            sampleRate: Xd
          } = hd(Od),
          vd = Od.readBits(4);
        let Qd = null;
        vd >= 1 && vd <= 7 && (Qd = Rd[vd]);
        let td = md,
          od = !1,
          Nd = Xd;
        if (5 === md || 29 === md) od = 29 === md, Nd = hd(Od).sampleRate, td = Kd(Od), 22 === td && Od.skipBits(4);
        else
          for (; Od.getBitsLeft() > 15;) {
            const dd = Od.pos;
            if (695 === Od.readBits(11)) {
              5 === Kd(Od) && Od.readBits(1) && (Nd = hd(Od).sampleRate, Od.getBitsLeft() > 11 && 1352 === Od.readBits(11) && (od = !!Od.readBits(1)));
              break
            }
            Od.pos = dd + 1
          }
        return null !== Qd && Qd > 1 && (od = !1), {
          objectType: md,
          coreObjectType: td,
          frequencyIndex: Fd,
          channelConfiguration: vd,
          outputSampleRate: Nd,
          outputNumberOfChannels: od && 1 === Qd ? 2 : Qd
        }
      },
      Kd = dd => {
        const Od = dd.readBits(5);
        return 31 === Od ? 32 + dd.readBits(6) : Od
      },
      hd = dd => {
        const Od = dd.readBits(4);
        return 15 === Od ? {
          frequencyIndex: Od,
          sampleRate: dd.readBits(24)
        } : {
          frequencyIndex: Od,
          sampleRate: Od < Fd.length ? Fd[Od] : null
        }
      },
      vd = dd => {
        const Od = 5 === dd.objectType || 29 === dd.objectType,
          md = 29 === dd.objectType,
          Fd = Od ? dd.outputSampleRate / 2 : dd.outputSampleRate,
          Xd = md ? 1 : dd.outputNumberOfChannels,
          Kd = Rd.indexOf(Xd);
        if (-1 === Kd) throw new TypeError(`Unsupported number of channels: ${dd.outputNumberOfChannels}`);
        let hd = 16;
        dd.objectType >= 32 && (hd += 6), 15 === od(Fd) && (hd += 24), Od && (hd += 9, 15 === od(dd.outputSampleRate) && (hd += 24));
        const vd = Math.ceil(hd / 8),
          Nd = new Uint8Array(vd),
          qd = new Wd.c(Nd);
        return Qd(qd, dd.objectType), td(qd, Fd), qd.writeBits(4, Kd), Od && (td(qd, dd.outputSampleRate), Qd(qd, 2)), qd.writeBits(3, 0), Nd
      },
      Qd = (dd, Od) => {
        Od < 32 ? dd.writeBits(5, Od) : (dd.writeBits(5, 31), dd.writeBits(6, Od - 32))
      },
      td = (dd, Od) => {
        const md = od(Od);
        dd.writeBits(4, md), 15 === md && dd.writeBits(24, Od)
      },
      od = dd => {
        const Od = Fd.indexOf(dd);
        return -1 === Od ? 15 : Od
      },
      Nd = dd => {
        const Od = new Uint8Array(7),
          md = new Wd.c(Od),
          {
            coreObjectType: Fd,
            frequencyIndex: Rd,
            channelConfiguration: Xd
          } = dd,
          Kd = Fd - 1;
        return md.writeBits(12, 4095), md.writeBits(1, 0), md.writeBits(2, 0), md.writeBits(1, 1), md.writeBits(2, Kd), md.writeBits(4, Rd), md.writeBits(1, 0), md.writeBits(3, Xd), md.writeBits(1, 0), md.writeBits(1, 0), md.writeBits(1, 0), md.writeBits(1, 0), md.skipBits(13), md.writeBits(11, 2047), md.writeBits(2, 0), {
          header: Od,
          bitstream: md
        }
      },
      qd = (dd, Od) => {
        dd.pos = 30, dd.writeBits(13, Od)
      }
  },
  41506: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      constructor(dd) {
        this.bytes = dd, this.pos = 0
      }
      seekToByte(dd) {
        this.pos = 8 * dd
      }
      readBit() {
        const dd = Math.floor(this.pos / 8),
          Od = this.bytes[dd] ?? 0,
          md = 7 - (7 & this.pos),
          Wd = (Od & 1 << md) >> md;
        return this.pos++, Wd
      }
      readBits(dd) {
        if (1 === dd) return this.readBit();
        let Od = 0;
        for (let md = 0; md < dd; md++) Od <<= 1, Od |= this.readBit();
        return Od
      }
      writeBits(dd, Od) {
        const md = this.pos + dd;
        for (let Wd = this.pos; Wd < md; Wd++) {
          const dd = Math.floor(Wd / 8);
          let Fd = this.bytes[dd];
          const Rd = 7 - (7 & Wd);
          Fd &= ~(1 << Rd), Fd |= (Od & 1 << md - Wd - 1) >> md - Wd - 1 << Rd, this.bytes[dd] = Fd
        }
        this.pos = md
      }
      copyBits(dd, Od) {
        let md = 0;
        for (; md < dd - 7; md += 8) this.writeBits(8, Od.readBits(8));
        const Wd = dd - md;
        Wd > 0 && this.writeBits(Wd, Od.readBits(Wd))
      }
      readAlignedByte() {
        if (this.pos % 8 !== 0) throw new Error("Bitstream is not byte-aligned.");
        const dd = this.pos / 8,
          Od = this.bytes[dd] ?? 0;
        return this.pos += 8, Od
      }
      skipBits(dd) {
        this.pos += dd
      }
      getBitsLeft() {
        return 8 * this.bytes.length - this.pos
      }
      clone() {
        const dd = new Wd(this.bytes);
        return dd.pos = this.pos, dd
      }
    }
  },
  41522: (dd, Od, md) => {
    md.d(Od, {
      c: () => OO,
      d: () => hd,
      h: () => mO,
      k: () => fd,
      n: () => vd,
      p: () => ed,
      q: () => yO,
      r: () => bd,
      v: () => Td,
      z: () => Md,
      A: () => gd,
      B: () => Ld,
      D: () => kd,
      J: () => Dd,
      H: () => pd,
      L: () => Bd,
      N: () => qd,
      O: () => xd,
      P: () => cd,
      S: () => od,
      V: () => Nd,
      Z: () => dO,
      _: () => NO,
      cb: () => FO,
      eb: () => Zd,
      hb: () => Id,
      ib: () => Cd,
      kb: () => Yd,
      mb: () => nd
    });
    var Wd = md(41513),
      Fd = md(41487),
      Rd = md(41526);
    const Xd = [48e3, 44100, 32e3],
      Kd = [24e3, 22050, 16e3];
    var hd, vd, Qd = md(41506),
      td = md(41534);
    ! function(dd) {
      dd[dd.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", dd[dd.SLICE_DPA = 2] = "SLICE_DPA", dd[dd.SLICE_DPB = 3] = "SLICE_DPB", dd[dd.SLICE_DPC = 4] = "SLICE_DPC", dd[dd.IDR = 5] = "IDR", dd[dd.SEI = 6] = "SEI", dd[dd.SPS = 7] = "SPS", dd[dd.PPS = 8] = "PPS", dd[dd.AUD = 9] = "AUD", dd[dd.SPS_EXT = 13] = "SPS_EXT"
    }(hd || (hd = {})),
    function(dd) {
      dd[dd.RASL_N = 8] = "RASL_N", dd[dd.RASL_R = 9] = "RASL_R", dd[dd.BLA_W_LP = 16] = "BLA_W_LP", dd[dd.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", dd[dd.VPS_NUT = 32] = "VPS_NUT", dd[dd.SPS_NUT = 33] = "SPS_NUT", dd[dd.PPS_NUT = 34] = "PPS_NUT", dd[dd.AUD_NUT = 35] = "AUD_NUT", dd[dd.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", dd[dd.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT"
    }(vd || (vd = {}));
    const od = function*(dd) {
        let Od = 0,
          md = -1;
        for (; Od < dd.length - 2;) {
          const Wd = dd.indexOf(0, Od);
          if (-1 === Wd || Wd >= dd.length - 2) break;
          Od = Wd;
          let Fd = 0;
          Od + 3 < dd.length && 0 === dd[Od + 1] && 0 === dd[Od + 2] && 1 === dd[Od + 3] ? Fd = 4 : 0 === dd[Od + 1] && 1 === dd[Od + 2] && (Fd = 3), 0 !== Fd ? (-1 !== md && Od > md && (yield {
            offset: md,
            length: Od - md
          }), md = Od + Fd, Od = md) : Od++
        } - 1 !== md && md < dd.length && (yield {
          offset: md,
          length: dd.length - md
        })
      },
      Nd = function*(dd, Od) {
        let md = 0;
        const Wd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
        for (; md + Od <= dd.length;) {
          let dd;
          1 === Od ? dd = Wd.getUint8(md) : 2 === Od ? dd = Wd.getUint16(md, !1) : 3 === Od ? dd = (0, Fd.qb)(Wd, md, !1) : ((0, Fd.M)(4 === Od), dd = Wd.getUint32(md, !1)), md += Od, yield {
            offset: md,
            length: dd
          }, md += dd
        }
      },
      qd = dd => 31 & dd,
      Hd = dd => {
        const Od = [],
          md = dd.length;
        for (let Wd = 0; Wd < md; Wd++) Wd + 2 < md && 0 === dd[Wd] && 0 === dd[Wd + 1] && 3 === dd[Wd + 2] ? (Od.push(0, 0), Wd += 2) : Od.push(dd[Wd]);
        return new Uint8Array(Od)
      },
      yd = new Uint8Array([0, 0, 0, 1]),
      bd = dd => {
        const Od = dd.reduce(((dd, Od) => dd + yd.byteLength + Od.byteLength), 0),
          md = new Uint8Array(Od);
        let Wd = 0;
        for (const Fd of dd) md.set(yd, Wd), Wd += yd.byteLength, md.set(Fd, Wd), Wd += Fd.byteLength;
        return md
      },
      Td = (dd, Od) => {
        const md = dd.reduce(((dd, md) => dd + Od + md.byteLength), 0),
          Wd = new Uint8Array(md);
        let Rd = 0;
        for (const Xd of dd) {
          const dd = new DataView(Wd.buffer, Wd.byteOffset, Wd.byteLength);
          switch (Od) {
            case 1:
              dd.setUint8(Rd, Xd.byteLength);
              break;
            case 2:
              dd.setUint16(Rd, Xd.byteLength, !1);
              break;
            case 3:
              (0, Fd.ed)(dd, Rd, Xd.byteLength, !1);
              break;
            case 4:
              dd.setUint32(Rd, Xd.byteLength, !1)
          }
          Rd += Od, Wd.set(Xd, Rd), Rd += Xd.byteLength
        }
        return Wd
      },
      pd = dd => {
        try {
          const Od = [],
            md = [],
            Wd = [];
          for (const Fd of od(dd)) {
            const Rd = dd.subarray(Fd.offset, Fd.offset + Fd.length),
              Xd = qd(Rd[0]);
            Xd === hd.SPS ? Od.push(Rd) : Xd === hd.PPS ? md.push(Rd) : Xd === hd.SPS_EXT && Wd.push(Rd)
          }
          if (0 === Od.length) return null;
          if (0 === md.length) return null;
          const Rd = Od[0],
            Xd = Ed(Rd);
          (0, Fd.M)(null !== Xd);
          const Kd = 100 === Xd.profileIdc || 110 === Xd.profileIdc || 122 === Xd.profileIdc || 144 === Xd.profileIdc;
          return {
            configurationVersion: 1,
            avcProfileIndication: Xd.profileIdc,
            profileCompatibility: Xd.constraintFlags,
            avcLevelIndication: Xd.levelIdc,
            lengthSizeMinusOne: 3,
            sequenceParameterSets: Od,
            pictureParameterSets: md,
            chromaFormat: Kd ? Xd.chromaFormatIdc : null,
            bitDepthLumaMinus8: Kd ? Xd.bitDepthLumaMinus8 : null,
            bitDepthChromaMinus8: Kd ? Xd.bitDepthChromaMinus8 : null,
            sequenceParameterSetExt: Kd ? Wd : null
          }
        } catch (Od) {
          return Rd.e._error("Error building AVC Decoder Configuration Record:", Od), null
        }
      },
      Yd = dd => {
        const Od = [];
        Od.push(dd.configurationVersion), Od.push(dd.avcProfileIndication), Od.push(dd.profileCompatibility), Od.push(dd.avcLevelIndication), Od.push(252 | 3 & dd.lengthSizeMinusOne), Od.push(224 | 31 & dd.sequenceParameterSets.length);
        for (const md of dd.sequenceParameterSets) {
          const dd = md.byteLength;
          Od.push(dd >> 8), Od.push(255 & dd);
          for (let Wd = 0; Wd < dd; Wd++) Od.push(md[Wd])
        }
        Od.push(dd.pictureParameterSets.length);
        for (const md of dd.pictureParameterSets) {
          const dd = md.byteLength;
          Od.push(dd >> 8), Od.push(255 & dd);
          for (let Wd = 0; Wd < dd; Wd++) Od.push(md[Wd])
        }
        if ((100 === dd.avcProfileIndication || 110 === dd.avcProfileIndication || 122 === dd.avcProfileIndication || 144 === dd.avcProfileIndication) && null !== dd.chromaFormat) {
          (0, Fd.M)(null !== dd.bitDepthLumaMinus8), (0, Fd.M)(null !== dd.bitDepthChromaMinus8), (0, Fd.M)(null !== dd.sequenceParameterSetExt), Od.push(252 | 3 & dd.chromaFormat), Od.push(248 | 7 & dd.bitDepthLumaMinus8), Od.push(248 | 7 & dd.bitDepthChromaMinus8), Od.push(dd.sequenceParameterSetExt.length);
          for (const md of dd.sequenceParameterSetExt) {
            const dd = md.byteLength;
            Od.push(dd >> 8), Od.push(255 & dd);
            for (let Wd = 0; Wd < dd; Wd++) Od.push(md[Wd])
          }
        }
        return new Uint8Array(Od)
      },
      gd = dd => {
        try {
          const Od = (0, Fd.sd)(dd);
          let md = 0;
          const Wd = Od.getUint8(md++),
            Rd = Od.getUint8(md++),
            Xd = Od.getUint8(md++),
            Kd = Od.getUint8(md++),
            hd = 3 & Od.getUint8(md++),
            vd = 31 & Od.getUint8(md++),
            Qd = [];
          for (let Fd = 0; Fd < vd; Fd++) {
            const Wd = Od.getUint16(md, !1);
            md += 2, Qd.push(dd.subarray(md, md + Wd)), md += Wd
          }
          const td = Od.getUint8(md++),
            od = [];
          for (let Fd = 0; Fd < td; Fd++) {
            const Wd = Od.getUint16(md, !1);
            md += 2, od.push(dd.subarray(md, md + Wd)), md += Wd
          }
          const Nd = {
            configurationVersion: Wd,
            avcProfileIndication: Rd,
            profileCompatibility: Xd,
            avcLevelIndication: Kd,
            lengthSizeMinusOne: hd,
            sequenceParameterSets: Qd,
            pictureParameterSets: od,
            chromaFormat: null,
            bitDepthLumaMinus8: null,
            bitDepthChromaMinus8: null,
            sequenceParameterSetExt: null
          };
          if ((100 === Rd || 110 === Rd || 122 === Rd || 144 === Rd) && md + 4 <= dd.length) {
            const Wd = 3 & Od.getUint8(md++),
              Fd = 7 & Od.getUint8(md++),
              Rd = 7 & Od.getUint8(md++),
              Xd = Od.getUint8(md++);
            Nd.chromaFormat = Wd, Nd.bitDepthLumaMinus8 = Fd, Nd.bitDepthChromaMinus8 = Rd;
            const Kd = [];
            for (let hd = 0; hd < Xd; hd++) {
              const Wd = Od.getUint16(md, !1);
              md += 2, Kd.push(dd.subarray(md, md + Wd)), md += Wd
            }
            Nd.sequenceParameterSetExt = Kd
          }
          return Nd
        } catch (Od) {
          return Rd.e._error("Error deserializing AVC Decoder Configuration Record:", Od), null
        }
      },
      wd = {
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
      Ed = dd => {
        try {
          const Od = Hd(dd),
            md = new Qd.c(Od);
          md.skipBits(1), md.skipBits(2);
          if (7 !== md.readBits(5)) return null;
          const Rd = md.readAlignedByte(),
            Xd = md.readAlignedByte(),
            Kd = md.readAlignedByte();
          (0, Fd.Dc)(md);
          let hd = 1,
            vd = 0,
            td = 0,
            od = 0;
          if (100 === Rd || 110 === Rd || 122 === Rd || 244 === Rd || 44 === Rd || 83 === Rd || 86 === Rd || 118 === Rd || 128 === Rd) {
            hd = (0, Fd.Dc)(md), 3 === hd && (od = md.readBits(1)), vd = (0, Fd.Dc)(md), td = (0, Fd.Dc)(md), md.skipBits(1);
            if (md.readBits(1))
              for (let dd = 0; dd < (3 !== hd ? 8 : 12); dd++) {
                if (md.readBits(1)) {
                  const Od = dd < 6 ? 16 : 64;
                  let Wd = 8,
                    Rd = 8;
                  for (let dd = 0; dd < Od; dd++) {
                    if (0 !== Rd) {
                      Rd = (Wd + (0, Fd.Ec)(md) + 256) % 256
                    }
                    Wd = 0 === Rd ? Wd : Rd
                  }
                }
              }
          }(0, Fd.Dc)(md);
          const Nd = (0, Fd.Dc)(md);
          if (0 === Nd)(0, Fd.Dc)(md);
          else if (1 === Nd) {
            md.skipBits(1), (0, Fd.Ec)(md), (0, Fd.Ec)(md);
            const dd = (0, Fd.Dc)(md);
            for (let Od = 0; Od < dd; Od++)(0, Fd.Ec)(md)
          }(0, Fd.Dc)(md), md.skipBits(1);
          const qd = (0, Fd.Dc)(md),
            yd = (0, Fd.Dc)(md),
            bd = 16 * (qd + 1),
            Td = 16 * (yd + 1);
          let pd = bd,
            Yd = Td;
          const gd = md.readBits(1);
          gd || md.skipBits(1), md.skipBits(1);
          if (md.readBits(1)) {
            const dd = (0, Fd.Dc)(md),
              Od = (0, Fd.Dc)(md),
              Wd = (0, Fd.Dc)(md),
              Rd = (0, Fd.Dc)(md);
            let Xd, Kd;
            if (0 === (0 === od ? hd : 0)) Xd = 1, Kd = 2 - gd;
            else {
              Xd = 3 === hd ? 1 : 2, Kd = (1 === hd ? 2 : 1) * (2 - gd)
            }
            pd -= Xd * (dd + Od), Yd -= Kd * (Wd + Rd)
          }
          let Ed = 2,
            Ud = 2,
            xd = 2,
            Bd = 0,
            Sd = {
              num: 1,
              den: 1
            },
            sd = null,
            ud = null,
            Vd = null,
            Ad = null;
          const rd = md.pos;
          if (md.readBits(1)) {
            if (md.readBits(1)) {
              const dd = md.readBits(8);
              if (255 === dd) Sd = {
                num: md.readBits(16),
                den: md.readBits(16)
              };
              else {
                const Od = wd[dd];
                Od && (Sd = Od)
              }
            }
            md.readBits(1) && md.skipBits(1);
            if (md.readBits(1)) {
              md.skipBits(3), Bd = md.readBits(1);
              md.readBits(1) && (Ed = md.readBits(8), Ud = md.readBits(8), xd = md.readBits(8))
            }
            md.readBits(1) && ((0, Fd.Dc)(md), (0, Fd.Dc)(md));
            md.readBits(1) && (md.skipBits(32), md.skipBits(32), md.skipBits(1));
            const dd = md.readBits(1);
            dd && Jd(md);
            const Od = md.readBits(1);
            Od && Jd(md), (dd || Od) && md.skipBits(1), md.skipBits(1), Vd = md.pos, Ad = md.readBits(1), Ad && (md.skipBits(1), (0, Fd.Dc)(md), (0, Fd.Dc)(md), (0, Fd.Dc)(md), (0, Fd.Dc)(md), sd = (0, Fd.Dc)(md), ud = (0, Fd.Dc)(md))
          }
          if (null === sd) {
            (0, Fd.M)(null === ud);
            if (44 !== Rd && 86 !== Rd && 100 !== Rd && 110 !== Rd && 122 !== Rd && 244 !== Rd || !(16 & Xd)) {
              const dd = qd + 1,
                Od = (2 - gd) * (yd + 1),
                md = Wd.f.find((dd => dd.level >= Kd)) ?? (0, Fd.jc)(Wd.f),
                Rd = Math.min(Math.floor(md.maxDpbMbs / (dd * Od)), 16);
              sd = Rd, ud = Rd
            } else sd = 0, ud = 0
          }
          return (0, Fd.M)(null !== ud), {
            emulationUnpreventedBytes: Od,
            profileIdc: Rd,
            constraintFlags: Xd,
            levelIdc: Kd,
            frameMbsOnlyFlag: gd,
            chromaFormatIdc: hd,
            bitDepthLumaMinus8: vd,
            bitDepthChromaMinus8: td,
            codedWidth: bd,
            codedHeight: Td,
            displayWidth: pd,
            displayHeight: Yd,
            pixelAspectRatio: Sd,
            colourPrimaries: Ed,
            matrixCoefficients: xd,
            transferCharacteristics: Ud,
            fullRangeFlag: Bd,
            numReorderFrames: sd,
            maxDecFrameBuffering: ud,
            vuiParametersFlagBitOffset: rd,
            bitstreamRestrictionFlagBitOffset: Vd,
            bitstreamRestrictionFlag: Ad
          }
        } catch (Od) {
          return Rd.e._error("Error parsing AVC SPS:", Od), null
        }
      },
      Jd = dd => {
        const Od = (0, Fd.Dc)(dd);
        dd.skipBits(4), dd.skipBits(4);
        for (let md = 0; md <= Od; md++)(0, Fd.Dc)(dd), (0, Fd.Dc)(dd), dd.skipBits(1);
        dd.skipBits(5), dd.skipBits(5), dd.skipBits(5), dd.skipBits(5)
      },
      Ud = (dd, Od) => {
        if (Od.description) {
          const md = 3 & (0, Fd.vd)(Od.description)[21];
          return Nd(dd, md + 1)
        }
        return od(dd)
      },
      xd = dd => dd >> 1 & 63,
      Bd = dd => {
        try {
          const Od = [],
            md = [],
            Wd = [],
            Xd = [];
          for (const Fd of od(dd)) {
            const Rd = dd.subarray(Fd.offset, Fd.offset + Fd.length),
              Kd = xd(Rd[0]);
            Kd === vd.VPS_NUT ? Od.push(Rd) : Kd === vd.SPS_NUT ? md.push(Rd) : Kd === vd.PPS_NUT ? Wd.push(Rd) : Kd !== vd.PREFIX_SEI_NUT && Kd !== vd.SUFFIX_SEI_NUT || Xd.push(Rd)
          }
          if (0 === md.length || 0 === Wd.length) return null;
          const Kd = (dd => {
            try {
              const Od = new Qd.c(Hd(dd));
              Od.skipBits(16), Od.readBits(4);
              const md = Od.readBits(3),
                Wd = Od.readBits(1),
                {
                  general_profile_space: Rd,
                  general_tier_flag: Xd,
                  general_profile_idc: Kd,
                  general_profile_compatibility_flags: hd,
                  general_constraint_indicator_flags: vd,
                  general_level_idc: td
                } = Sd(Od, md);
              (0, Fd.Dc)(Od);
              const od = (0, Fd.Dc)(Od);
              let Nd = 0;
              3 === od && (Nd = Od.readBits(1));
              const qd = (0, Fd.Dc)(Od),
                yd = (0, Fd.Dc)(Od);
              let bd = qd,
                Td = yd;
              if (Od.readBits(1)) {
                const dd = (0, Fd.Dc)(Od),
                  md = (0, Fd.Dc)(Od),
                  Wd = (0, Fd.Dc)(Od),
                  Rd = (0, Fd.Dc)(Od);
                let Xd = 1,
                  Kd = 1;
                const hd = 0 === Nd ? od : 0;
                1 === hd ? (Xd = 2, Kd = 2) : 2 === hd && (Xd = 2, Kd = 1), bd -= (dd + md) * Xd, Td -= (Wd + Rd) * Kd
              }
              const pd = (0, Fd.Dc)(Od),
                Yd = (0, Fd.Dc)(Od);
              (0, Fd.Dc)(Od);
              const gd = Od.readBits(1);
              let wd = 0;
              for (let dd = gd ? 0 : md; dd <= md; dd++)(0, Fd.Dc)(Od), wd = (0, Fd.Dc)(Od), (0, Fd.Dc)(Od);
              (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), Od.readBits(1) && Od.readBits(1) && sd(Od), Od.skipBits(1), Od.skipBits(1), Od.readBits(1) && (Od.skipBits(4), Od.skipBits(4), (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), Od.skipBits(1));
              const Ed = (0, Fd.Dc)(Od);
              if (ud(Od, Ed), Od.readBits(1)) {
                const dd = (0, Fd.Dc)(Od);
                for (let md = 0; md < dd; md++)(0, Fd.Dc)(Od), Od.skipBits(1)
              }
              Od.skipBits(1), Od.skipBits(1);
              let Jd = 2,
                Ud = 2,
                xd = 2,
                Bd = 0,
                Vd = 0,
                rd = {
                  num: 1,
                  den: 1
                };
              if (Od.readBits(1)) {
                const dd = Ad(Od, md);
                rd = dd.pixelAspectRatio, Jd = dd.colourPrimaries, Ud = dd.transferCharacteristics, xd = dd.matrixCoefficients, Bd = dd.fullRangeFlag, Vd = dd.minSpatialSegmentationIdc
              }
              return {
                displayWidth: bd,
                displayHeight: Td,
                pixelAspectRatio: rd,
                colourPrimaries: Jd,
                transferCharacteristics: Ud,
                matrixCoefficients: xd,
                fullRangeFlag: Bd,
                maxDecFrameBuffering: wd + 1,
                spsMaxSubLayersMinus1: md,
                spsTemporalIdNestingFlag: Wd,
                generalProfileSpace: Rd,
                generalTierFlag: Xd,
                generalProfileIdc: Kd,
                generalProfileCompatibilityFlags: hd,
                generalConstraintIndicatorFlags: vd,
                generalLevelIdc: td,
                chromaFormatIdc: od,
                bitDepthLumaMinus8: pd,
                bitDepthChromaMinus8: Yd,
                minSpatialSegmentationIdc: Vd
              }
            } catch (Od) {
              return Rd.e._error("Error parsing HEVC SPS:", Od), null
            }
          })(md[0]);
          if (!Kd) return null;
          let hd = 0;
          if (Wd.length > 0) {
            const dd = Wd[0],
              Od = new Qd.c(Hd(dd));
            Od.skipBits(16), (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), Od.skipBits(1), Od.skipBits(1), Od.skipBits(3), Od.skipBits(1), Od.skipBits(1), (0, Fd.Dc)(Od), (0, Fd.Dc)(Od), (0, Fd.Ec)(Od), Od.skipBits(1), Od.skipBits(1), Od.readBits(1) && (0, Fd.Dc)(Od), (0, Fd.Ec)(Od), (0, Fd.Ec)(Od), Od.skipBits(1), Od.skipBits(1), Od.skipBits(1), Od.skipBits(1);
            const md = Od.readBits(1),
              Rd = Od.readBits(1);
            hd = md || Rd ? md && !Rd ? 2 : !md && Rd ? 3 : 0 : 0
          }
          const td = [...Od.length ? [{
            arrayCompleteness: 1,
            nalUnitType: vd.VPS_NUT,
            nalUnits: Od
          }] : [], ...md.length ? [{
            arrayCompleteness: 1,
            nalUnitType: vd.SPS_NUT,
            nalUnits: md
          }] : [], ...Wd.length ? [{
            arrayCompleteness: 1,
            nalUnitType: vd.PPS_NUT,
            nalUnits: Wd
          }] : [], ...Xd.length ? [{
            arrayCompleteness: 1,
            nalUnitType: xd(Xd[0][0]),
            nalUnits: Xd
          }] : []];
          return {
            configurationVersion: 1,
            generalProfileSpace: Kd.generalProfileSpace,
            generalTierFlag: Kd.generalTierFlag,
            generalProfileIdc: Kd.generalProfileIdc,
            generalProfileCompatibilityFlags: Kd.generalProfileCompatibilityFlags,
            generalConstraintIndicatorFlags: Kd.generalConstraintIndicatorFlags,
            generalLevelIdc: Kd.generalLevelIdc,
            minSpatialSegmentationIdc: Kd.minSpatialSegmentationIdc,
            parallelismType: hd,
            chromaFormatIdc: Kd.chromaFormatIdc,
            bitDepthLumaMinus8: Kd.bitDepthLumaMinus8,
            bitDepthChromaMinus8: Kd.bitDepthChromaMinus8,
            avgFrameRate: 0,
            constantFrameRate: 0,
            numTemporalLayers: Kd.spsMaxSubLayersMinus1 + 1,
            temporalIdNested: Kd.spsTemporalIdNestingFlag,
            lengthSizeMinusOne: 3,
            arrays: td
          }
        } catch (Od) {
          return Rd.e._error("Error building HEVC Decoder Configuration Record:", Od), null
        }
      },
      Sd = (dd, Od) => {
        const md = dd.readBits(2),
          Wd = dd.readBits(1),
          Fd = dd.readBits(5);
        let Rd = 0;
        for (let Qd = 0; Qd < 32; Qd++) Rd = Rd << 1 | dd.readBits(1);
        const Xd = new Uint8Array(6);
        for (let Qd = 0; Qd < 6; Qd++) Xd[Qd] = dd.readBits(8);
        const Kd = dd.readBits(8),
          hd = [],
          vd = [];
        for (let Qd = 0; Qd < Od; Qd++) hd.push(dd.readBits(1)), vd.push(dd.readBits(1));
        if (Od > 0)
          for (let Qd = Od; Qd < 8; Qd++) dd.skipBits(2);
        for (let Qd = 0; Qd < Od; Qd++) hd[Qd] && dd.skipBits(88), vd[Qd] && dd.skipBits(8);
        return {
          general_profile_space: md,
          general_tier_flag: Wd,
          general_profile_idc: Fd,
          general_profile_compatibility_flags: Rd,
          general_constraint_indicator_flags: Xd,
          general_level_idc: Kd
        }
      },
      sd = dd => {
        for (let Od = 0; Od < 4; Od++)
          for (let md = 0; md < (3 === Od ? 2 : 6); md++) {
            if (dd.readBits(1)) {
              const md = Math.min(64, 1 << 4 + (Od << 1));
              Od > 1 && (0, Fd.Ec)(dd);
              for (let Od = 0; Od < md; Od++)(0, Fd.Ec)(dd)
            } else(0, Fd.Dc)(dd)
          }
      },
      ud = (dd, Od) => {
        const md = [];
        for (let Wd = 0; Wd < Od; Wd++) md[Wd] = Vd(dd, Wd, Od, md)
      },
      Vd = (dd, Od, md, Wd) => {
        let Rd = 0,
          Xd = 0,
          Kd = 0;
        if (0 !== Od && (Xd = dd.readBits(1)), Xd) {
          if (Od === md) {
            Kd = Od - ((0, Fd.Dc)(dd) + 1)
          } else Kd = Od - 1;
          dd.readBits(1), (0, Fd.Dc)(dd);
          const Xd = Wd[Kd] ?? 0;
          for (let Od = 0; Od <= Xd; Od++) {
            dd.readBits(1) || dd.readBits(1)
          }
          Rd = Wd[Kd]
        } else {
          const Od = (0, Fd.Dc)(dd),
            md = (0, Fd.Dc)(dd);
          for (let Wd = 0; Wd < Od; Wd++)(0, Fd.Dc)(dd), dd.readBits(1);
          for (let Wd = 0; Wd < md; Wd++)(0, Fd.Dc)(dd), dd.readBits(1);
          Rd = Od + md
        }
        return Rd
      },
      Ad = (dd, Od) => {
        let md = 2,
          Wd = 2,
          Rd = 2,
          Xd = 0,
          Kd = 0,
          hd = {
            num: 1,
            den: 1
          };
        if (dd.readBits(1)) {
          const Od = dd.readBits(8);
          if (255 === Od) hd = {
            num: dd.readBits(16),
            den: dd.readBits(16)
          };
          else {
            const dd = wd[Od];
            dd && (hd = dd)
          }
        }
        return dd.readBits(1) && dd.readBits(1), dd.readBits(1) && (dd.readBits(3), Xd = dd.readBits(1), dd.readBits(1) && (md = dd.readBits(8), Wd = dd.readBits(8), Rd = dd.readBits(8))), dd.readBits(1) && ((0, Fd.Dc)(dd), (0, Fd.Dc)(dd)), dd.readBits(1), dd.readBits(1), dd.readBits(1), dd.readBits(1) && ((0, Fd.Dc)(dd), (0, Fd.Dc)(dd), (0, Fd.Dc)(dd), (0, Fd.Dc)(dd)), dd.readBits(1) && (dd.readBits(32), dd.readBits(32), dd.readBits(1) && (0, Fd.Dc)(dd), dd.readBits(1) && rd(dd, !0, Od)), dd.readBits(1) && (dd.readBits(1), dd.readBits(1), dd.readBits(1), Kd = (0, Fd.Dc)(dd), (0, Fd.Dc)(dd), (0, Fd.Dc)(dd), (0, Fd.Dc)(dd), (0, Fd.Dc)(dd)), {
          pixelAspectRatio: hd,
          colourPrimaries: md,
          transferCharacteristics: Wd,
          matrixCoefficients: Rd,
          fullRangeFlag: Xd,
          minSpatialSegmentationIdc: Kd
        }
      },
      rd = (dd, Od, md) => {
        let Wd = !1,
          Rd = !1,
          Xd = !1;
        Od && (Wd = 1 === dd.readBits(1), Rd = 1 === dd.readBits(1), (Wd || Rd) && (Xd = 1 === dd.readBits(1), Xd && (dd.readBits(8), dd.readBits(5), dd.readBits(1), dd.readBits(5)), dd.readBits(4), dd.readBits(4), Xd && dd.readBits(4), dd.readBits(5), dd.readBits(5), dd.readBits(5)));
        for (let Kd = 0; Kd <= md; Kd++) {
          let Od = !0;
          1 === dd.readBits(1) || (Od = 1 === dd.readBits(1));
          let md = !1;
          Od ? (0, Fd.Dc)(dd) : md = 1 === dd.readBits(1);
          let Kd = 1;
          if (!md) {
            Kd = (0, Fd.Dc)(dd) + 1
          }
          Wd && Gd(dd, Kd, Xd), Rd && Gd(dd, Kd, Xd)
        }
      },
      Gd = (dd, Od, md) => {
        for (let Wd = 0; Wd < Od; Wd++)(0, Fd.Dc)(dd), (0, Fd.Dc)(dd), md && ((0, Fd.Dc)(dd), (0, Fd.Dc)(dd)), dd.readBits(1)
      },
      nd = dd => {
        const Od = [];
        Od.push(dd.configurationVersion), Od.push((3 & dd.generalProfileSpace) << 6 | (1 & dd.generalTierFlag) << 5 | 31 & dd.generalProfileIdc), Od.push(dd.generalProfileCompatibilityFlags >>> 24 & 255), Od.push(dd.generalProfileCompatibilityFlags >>> 16 & 255), Od.push(dd.generalProfileCompatibilityFlags >>> 8 & 255), Od.push(255 & dd.generalProfileCompatibilityFlags), Od.push(...dd.generalConstraintIndicatorFlags), Od.push(255 & dd.generalLevelIdc), Od.push(240 | dd.minSpatialSegmentationIdc >> 8 & 15), Od.push(255 & dd.minSpatialSegmentationIdc), Od.push(252 | 3 & dd.parallelismType), Od.push(252 | 3 & dd.chromaFormatIdc), Od.push(248 | 7 & dd.bitDepthLumaMinus8), Od.push(248 | 7 & dd.bitDepthChromaMinus8), Od.push(dd.avgFrameRate >> 8 & 255), Od.push(255 & dd.avgFrameRate), Od.push((3 & dd.constantFrameRate) << 6 | (7 & dd.numTemporalLayers) << 3 | (1 & dd.temporalIdNested) << 2 | 3 & dd.lengthSizeMinusOne), Od.push(255 & dd.arrays.length);
        for (const md of dd.arrays) {
          Od.push((1 & md.arrayCompleteness) << 7 | 63 & md.nalUnitType), Od.push(md.nalUnits.length >> 8 & 255), Od.push(255 & md.nalUnits.length);
          for (const dd of md.nalUnits) {
            Od.push(dd.length >> 8 & 255), Od.push(255 & dd.length);
            for (let md = 0; md < dd.length; md++) Od.push(dd[md])
          }
        }
        return new Uint8Array(Od)
      },
      Ld = dd => {
        try {
          const Od = (0, Fd.sd)(dd);
          let md = 0;
          const Wd = Od.getUint8(md++),
            Rd = Od.getUint8(md++),
            Xd = Rd >> 6 & 3,
            Kd = Rd >> 5 & 1,
            hd = 31 & Rd,
            vd = Od.getUint32(md, !1);
          md += 4;
          const Qd = dd.subarray(md, md + 6);
          md += 6;
          const td = Od.getUint8(md++),
            od = (15 & Od.getUint8(md++)) << 8 | Od.getUint8(md++),
            Nd = 3 & Od.getUint8(md++),
            qd = 3 & Od.getUint8(md++),
            Hd = 7 & Od.getUint8(md++),
            yd = 7 & Od.getUint8(md++),
            bd = Od.getUint16(md, !1);
          md += 2;
          const Td = Od.getUint8(md++),
            pd = Td >> 6 & 3,
            Yd = Td >> 3 & 7,
            gd = Td >> 2 & 1,
            wd = 3 & Td,
            Ed = Od.getUint8(md++),
            Jd = [];
          for (let Fd = 0; Fd < Ed; Fd++) {
            const Wd = Od.getUint8(md++),
              Fd = Wd >> 7 & 1,
              Rd = 63 & Wd,
              Xd = Od.getUint16(md, !1);
            md += 2;
            const Kd = [];
            for (let hd = 0; hd < Xd; hd++) {
              const Wd = Od.getUint16(md, !1);
              md += 2, Kd.push(dd.subarray(md, md + Wd)), md += Wd
            }
            Jd.push({
              arrayCompleteness: Fd,
              nalUnitType: Rd,
              nalUnits: Kd
            })
          }
          return {
            configurationVersion: Wd,
            generalProfileSpace: Xd,
            generalTierFlag: Kd,
            generalProfileIdc: hd,
            generalProfileCompatibilityFlags: vd,
            generalConstraintIndicatorFlags: Qd,
            generalLevelIdc: td,
            minSpatialSegmentationIdc: od,
            parallelismType: Nd,
            chromaFormatIdc: qd,
            bitDepthLumaMinus8: Hd,
            bitDepthChromaMinus8: yd,
            avgFrameRate: bd,
            constantFrameRate: pd,
            numTemporalLayers: Yd,
            temporalIdNested: gd,
            lengthSizeMinusOne: wd,
            arrays: Jd
          }
        } catch (Od) {
          return Rd.e._error("Error deserializing HEVC Decoder Configuration Record:", Od), null
        }
      };
    var Pd;
    ! function(dd) {
      dd[dd.audAllowed = 0] = "audAllowed", dd[dd.beforeFirstVcl = 1] = "beforeFirstVcl", dd[dd.afterFirstVcl = 2] = "afterFirstVcl", dd[dd.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", dd[dd.noMoreDataAllowed = 4] = "noMoreDataAllowed"
    }(Pd || (Pd = {}));
    const zd = {
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
      cd = dd => {
        const Od = new Qd.c(dd);
        if (2 !== Od.readBits(2)) return null;
        const md = Od.readBits(1),
          Rd = (Od.readBits(1) << 1) + md;
        3 === Rd && Od.skipBits(1);
        if (1 === Od.readBits(1)) return null;
        if (0 !== Od.readBits(1)) return null;
        Od.skipBits(2);
        if (4817730 !== Od.readBits(24)) return null;
        let Xd = 8;
        if (Rd >= 2) {
          Xd = Od.readBits(1) ? 12 : 10
        }
        const Kd = Od.readBits(3);
        let hd = 0,
          vd = 0;
        if (7 !== Kd) {
          if (vd = Od.readBits(1), 1 === Rd || 3 === Rd) {
            const dd = Od.readBits(1),
              md = Od.readBits(1);
            hd = dd || md ? dd && !md ? 2 : 1 : 3, Od.skipBits(1)
          } else hd = 1
        } else hd = 3, vd = 1;
        const td = (Od.readBits(16) + 1) * (Od.readBits(16) + 1);
        let od = (0, Fd.jc)(Wd.s).level;
        for (const Fd of Wd.s)
          if (td <= Fd.maxPictureSize) {
            od = Fd.level;
            break
          } const Nd = zd[Kd];
        return {
          profile: Rd,
          level: od,
          bitDepth: Xd,
          chromaSubsampling: hd,
          videoFullRangeFlag: vd,
          colourPrimaries: Nd?.colourPrimaries ?? 2,
          transferCharacteristics: Nd?.transferCharacteristics ?? 2,
          matrixCoefficients: Nd?.matrixCoefficients ?? 2
        }
      },
      jd = function*(dd) {
        const Od = new Qd.c(dd),
          md = () => {
            let dd = 0;
            for (let md = 0; md < 8; md++) {
              const Wd = Od.readAlignedByte();
              if (dd += (127 & Wd) * 2 ** (7 * md), !(128 & Wd)) break;
              if (7 === md && 128 & Wd) return null
            }
            return dd > 2 ** 32 - 1 ? null : dd
          };
        for (; Od.getBitsLeft() >= 8;) {
          Od.skipBits(1);
          const Wd = Od.readBits(4),
            Rd = Od.readBits(1),
            Xd = Od.readBits(1);
          let Kd;
          if (Od.skipBits(1), Rd && Od.skipBits(8), Xd) {
            const dd = md();
            if (null === dd) return;
            Kd = dd
          } else Kd = Math.floor(Od.getBitsLeft() / 8);
          (0, Fd.M)(Od.pos % 8 === 0), yield {
            type: Wd,
            data: dd.subarray(Od.pos / 8, Od.pos / 8 + Kd)
          }, Od.skipBits(8 * Kd)
        }
      },
      Dd = dd => {
        for (const {
            type: Od,
            data: md
          }
          of jd(dd)) {
          if (1 !== Od) continue;
          const dd = new Qd.c(md),
            Wd = dd.readBits(3),
            Fd = (dd.readBits(1), dd.readBits(1));
          let Rd = 0,
            Xd = 0,
            Kd = 0;
          if (Fd) Rd = dd.readBits(5);
          else {
            let Od = 0;
            if (dd.readBits(1)) {
              dd.skipBits(32), dd.skipBits(32);
              if (dd.readBits(1)) {
                let Od = 0;
                for (; Od < 32 && !dd.readBits(1);) Od++;
                Od < 32 && dd.skipBits(Od)
              }
              Od = dd.readBits(1), Od && (Kd = dd.readBits(5), dd.skipBits(32), dd.skipBits(5), dd.skipBits(5))
            }
            const md = dd.readBits(1),
              Wd = dd.readBits(5);
            for (let Fd = 0; Fd <= Wd; Fd++) {
              dd.skipBits(12);
              const Wd = dd.readBits(5);
              if (0 === Fd && (Rd = Wd), Wd > 7) {
                const Od = dd.readBits(1);
                0 === Fd && (Xd = Od)
              }
              if (Od) {
                if (dd.readBits(1)) {
                  const Od = Kd + 1;
                  dd.skipBits(Od), dd.skipBits(Od), dd.skipBits(1)
                }
              }
              if (md) {
                dd.readBits(1) && dd.skipBits(4)
              }
            }
          }
          const hd = dd.readBits(4),
            vd = dd.readBits(4),
            td = hd + 1;
          dd.skipBits(td);
          const od = vd + 1;
          dd.skipBits(od);
          let Nd = 0;
          if (Nd = Fd ? 0 : dd.readBits(1), Nd && (dd.skipBits(4), dd.skipBits(3)), dd.skipBits(1), dd.skipBits(1), dd.skipBits(1), !Fd) {
            dd.skipBits(1), dd.skipBits(1), dd.skipBits(1), dd.skipBits(1);
            const Od = dd.readBits(1);
            Od && (dd.skipBits(1), dd.skipBits(1));
            let md = 0;
            if (md = dd.readBits(1) ? 2 : dd.readBits(1), md > 0) {
              dd.readBits(1) || dd.skipBits(1)
            }
            Od && dd.skipBits(3)
          }
          dd.skipBits(1), dd.skipBits(1), dd.skipBits(1);
          const qd = dd.readBits(1);
          let Hd = 8;
          if (2 === Wd && qd) {
            Hd = dd.readBits(1) ? 12 : 10
          } else Wd <= 2 && (Hd = qd ? 10 : 8);
          let yd = 0;
          1 !== Wd && (yd = dd.readBits(1));
          let bd = 2,
            Td = 2,
            pd = 2;
          dd.readBits(1) && (bd = dd.readBits(8), Td = dd.readBits(8), pd = dd.readBits(8));
          let Yd = 0,
            gd = 1,
            wd = 1,
            Ed = 0;
          return yd ? Yd = dd.readBits(1) : 1 === bd && 13 === Td && 0 === pd ? (Yd = 1, gd = 0, wd = 0) : (Yd = dd.readBits(1), 0 === Wd ? (gd = 1, wd = 1) : 1 === Wd ? (gd = 0, wd = 0) : 12 === Hd ? (gd = dd.readBits(1), wd = gd ? dd.readBits(1) : 0) : (gd = 1, wd = 0), gd && wd && (Ed = dd.readBits(2))), {
            profile: Wd,
            level: Rd,
            tier: Xd,
            bitDepth: Hd,
            monochrome: yd,
            chromaSubsamplingX: gd,
            chromaSubsamplingY: wd,
            chromaSamplePosition: Ed,
            videoFullRangeFlag: Yd,
            colourPrimaries: bd,
            transferCharacteristics: Td,
            matrixCoefficients: pd
          }
        }
        return null
      },
      ed = dd => 2 !== dd.colourPrimaries || 2 !== dd.transferCharacteristics || 2 !== dd.matrixCoefficients,
      Id = dd => {
        const Od = (0, Fd.sd)(dd),
          md = Od.getUint8(9),
          Wd = Od.getUint16(10, !0),
          Rd = Od.getUint32(12, !0),
          Xd = Od.getInt16(16, !0),
          Kd = Od.getUint8(18);
        let hd = null;
        return Kd && (hd = dd.subarray(19, 21 + md)), {
          outputChannelCount: md,
          preSkip: Wd,
          inputSampleRate: Rd,
          outputGain: Xd,
          channelMappingFamily: Kd,
          channelMappingTable: hd
        }
      },
      ld = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960],
      Cd = dd => {
        const Od = dd[0] >> 3,
          md = 3 & dd[0];
        let Wd;
        return Wd = 0 === md ? 1 : 1 === md || 2 === md ? 2 : 63 & dd[1], {
          durationInSamples: ld[Od] * Wd
        }
      },
      Zd = dd => {
        if (dd.length < 7) throw new Error("Setup header is too short.");
        if (5 !== dd[0]) throw new Error("Wrong packet type in Setup header.");
        if ("vorbis" !== String.fromCharCode(...dd.slice(1, 7))) throw new Error("Invalid packet signature in Setup header.");
        const Od = dd.length,
          md = new Uint8Array(Od);
        for (let Qd = 0; Qd < Od; Qd++) md[Qd] = dd[Od - 1 - Qd];
        const Wd = new Qd.c(md);
        let Fd = 0;
        for (; Wd.getBitsLeft() > 97;)
          if (1 === Wd.readBits(1)) {
            Fd = Wd.pos;
            break
          } if (0 === Fd) throw new Error("Invalid Setup header: framing bit not found.");
        let Rd = 0,
          Xd = !1,
          Kd = 0;
        for (; Wd.getBitsLeft() >= 97;) {
          const dd = Wd.pos,
            Od = Wd.readBits(8),
            md = Wd.readBits(16),
            Fd = Wd.readBits(16);
          if (Od > 63 || 0 !== md || 0 !== Fd) {
            Wd.pos = dd;
            break
          }
          if (Wd.skipBits(1), Rd++, Rd > 64) break;
          Wd.clone().readBits(6) + 1 === Rd && (Xd = !0, Kd = Rd)
        }
        if (!Xd) throw new Error("Invalid Setup header: mode header not found.");
        if (Kd > 63) throw new Error(`Unsupported mode count: ${Kd}.`);
        const hd = Kd;
        Wd.pos = 0, Wd.skipBits(Fd);
        const vd = Array(hd).fill(0);
        for (let Qd = hd - 1; Qd >= 0; Qd--) Wd.skipBits(40), vd[Qd] = Wd.readBits(1);
        return {
          modeBlockflags: vd
        }
      },
      kd = (dd, Od, md) => {
        switch (dd) {
          case "avc":
            for (const dd of ((dd, Od) => {
                if (Od.description) {
                  const md = 3 & (0, Fd.vd)(Od.description)[4];
                  return Nd(dd, md + 1)
                }
                return od(dd)
              })(md, Od)) {
              const Od = md[dd.offset],
                Wd = qd(Od);
              if (Wd >= hd.NON_IDR_SLICE && Wd <= hd.SLICE_DPC) return "delta";
              if (Wd === hd.IDR) return "key";
              if (Wd === hd.SEI && !(0, Fd.Bb)()) {
                const Od = md.subarray(dd.offset, dd.offset + dd.length),
                  Wd = Hd(Od);
                let Rd = 1;
                do {
                  let dd = 0;
                  for (;;) {
                    const Od = Wd[Rd++];
                    if (void 0 === Od) break;
                    if (dd += Od, Od < 255) break
                  }
                  let Od = 0;
                  for (;;) {
                    const dd = Wd[Rd++];
                    if (void 0 === dd) break;
                    if (Od += dd, dd < 255) break
                  }
                  if (dd === 6) {
                    const dd = new Qd.c(Wd);
                    dd.pos = 8 * Rd;
                    const Od = (0, Fd.Dc)(dd),
                      md = dd.readBits(1);
                    if (0 === Od && 1 === md) return "key"
                  }
                  Rd += Od
                } while (Rd < Wd.length - 1)
              }
            }
            return "delta";
          case "hevc":
            for (const dd of Ud(md, Od)) {
              const Od = xd(md[dd.offset]);
              if (Od < vd.BLA_W_LP) return "delta";
              if (Od <= vd.RSV_IRAP_VCL23) return "key"
            }
            return "delta";
          case "vp8":
            return 0 === (1 & md[0]) ? "key" : "delta";
          case "vp9": {
            const dd = new Qd.c(md);
            if (2 !== dd.readBits(2)) return null;
            const Od = dd.readBits(1);
            3 === (dd.readBits(1) << 1) + Od && dd.skipBits(1);
            if (dd.readBits(1)) return null;
            return 0 === dd.readBits(1) ? "key" : "delta"
          }
          case "av1": {
            let dd = !1;
            for (const {
                type: Od,
                data: Wd
              }
              of jd(md))
              if (1 === Od) {
                const Od = new Qd.c(Wd);
                Od.skipBits(4), dd = !!Od.readBits(1)
              } else if (3 === Od || 6 === Od || 7 === Od) {
              if (dd) return "key";
              const Od = new Qd.c(Wd);
              if (Od.readBits(1)) return null;
              return 0 === Od.readBits(2) ? "key" : "delta"
            }
            return null
          }
          case "prores":
            return "key";
          default:
            (0, Fd.J)(dd), (0, Fd.M)(!1)
        }
      };
    var fd;
    ! function(dd) {
      dd[dd.STREAMINFO = 0] = "STREAMINFO", dd[dd.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", dd[dd.PICTURE = 6] = "PICTURE"
    }(fd || (fd = {}));
    const Md = (dd, Od, md) => {
        const Wd = [dd],
          Rd = Fd.od.encode(td.c);
        let Xd = new Uint8Array(4 + Rd.length),
          Kd = new DataView(Xd.buffer);
        Kd.setUint32(0, Rd.length, !0), Xd.set(Rd, 4), Wd.push(Xd);
        const hd = [],
          vd = (dd, Od) => {
            const md = `${dd}=${Od}`,
              Rd = Fd.od.encode(md);
            Xd = new Uint8Array(4 + Rd.length), Kd = new DataView(Xd.buffer), Kd.setUint32(0, Rd.length, !0), Xd.set(Rd, 4), Wd.push(Xd), hd.push(dd)
          };
        for (const {
            key: td,
            value: Hd
          }
          of(0, Fd.fc)(Od)) switch (td) {
          case "title":
            vd("TITLE", Hd);
            break;
          case "description":
            vd("DESCRIPTION", Hd);
            break;
          case "artist":
            vd("ARTIST", Hd);
            break;
          case "album":
            vd("ALBUM", Hd);
            break;
          case "albumArtist":
            vd("ALBUMARTIST", Hd);
            break;
          case "genre":
            vd("GENRE", Hd);
            break;
          case "date":
            vd("DATE", Hd.toISOString().slice(0, 10));
            break;
          case "comment":
            vd("COMMENT", Hd);
            break;
          case "lyrics":
            vd("LYRICS", Hd);
            break;
          case "trackNumber":
            vd("TRACKNUMBER", Hd.toString());
            break;
          case "tracksTotal":
            vd("TRACKTOTAL", Hd.toString());
            break;
          case "discNumber":
            vd("DISCNUMBER", Hd.toString());
            break;
          case "discsTotal":
            vd("DISCTOTAL", Hd.toString());
            break;
          case "beatsPerMinute":
            vd("BPM", Hd.toString());
            break;
          case "images":
            if (!md) break;
            for (const dd of Hd) {
              const Od = "coverFront" === dd.kind ? 3 : "coverBack" === dd.kind ? 4 : 0,
                md = new Uint8Array(dd.mimeType.length);
              for (let Fd = 0; Fd < dd.mimeType.length; Fd++) md[Fd] = dd.mimeType.charCodeAt(Fd);
              const Wd = Fd.od.encode(dd.description ?? ""),
                Rd = new Uint8Array(8 + md.length + 4 + Wd.length + 16 + 4 + dd.data.length),
                Xd = (0, Fd.sd)(Rd);
              Xd.setUint32(0, Od, !1), Xd.setUint32(4, md.length, !1), Rd.set(md, 8), Xd.setUint32(8 + md.length, Wd.length, !1), Rd.set(Wd, 12 + md.length), Xd.setUint32(28 + md.length + Wd.length, dd.data.length, !1), Rd.set(dd.data, 32 + md.length + Wd.length);
              vd("METADATA_BLOCK_PICTURE", (0, Fd.T)(Rd))
            }
            break;
          case "raw":
            break;
          default:
            (0, Fd.J)(td)
        }
        if (Od.raw)
          for (const Fd in Od.raw) {
            const dd = Od.raw[Fd] ?? Od.raw[Fd.toLowerCase()];
            if ("vendor" !== Fd && null != dd && !hd.includes(Fd))
              if ("string" === typeof dd) vd(Fd, dd);
              else if (Array.isArray(dd)) {
              if (dd.every((dd => "string" === typeof dd)))
                for (const Od of dd) vd(Fd, Od)
            }
          }
        const Qd = new Uint8Array(4);
        (0, Fd.sd)(Qd).setUint32(0, hd.length, !0), Wd.splice(2, 0, Qd);
        const od = Wd.reduce(((dd, Od) => dd + Od.length), 0),
          Nd = new Uint8Array(od);
        let qd = 0;
        for (const Fd of Wd) Nd.set(Fd, qd), qd += Fd.length;
        return Nd
      },
      dO = dd => {
        if (dd.length < 7) return null;
        if (11 !== dd[0] || 119 !== dd[1]) return null;
        const Od = new Qd.c(dd);
        Od.skipBits(16), Od.skipBits(16);
        const md = Od.readBits(2);
        if (3 === md) return null;
        const Wd = Od.readBits(6),
          Fd = Od.readBits(5);
        if (Fd > 8) return null;
        const Rd = Od.readBits(3),
          Xd = Od.readBits(3);
        0 !== (1 & Xd) && 1 !== Xd && Od.skipBits(2), 0 !== (4 & Xd) && Od.skipBits(2), 2 === Xd && Od.skipBits(2);
        return {
          fscod: md,
          bsid: Fd,
          bsmod: Rd,
          acmod: Xd,
          lfeon: Od.readBits(1),
          bitRateCode: Math.floor(Wd / 2)
        }
      },
      OO = new Uint8Array([5, 4, 65, 67, 45, 51]),
      mO = new Uint8Array([5, 4, 69, 65, 67, 51]),
      WO = [1, 2, 3, 6],
      FO = dd => {
        if (dd.length < 6) return null;
        if (11 !== dd[0] || 119 !== dd[1]) return null;
        const Od = new Qd.c(dd);
        Od.skipBits(16);
        const md = Od.readBits(2);
        if (Od.skipBits(3), 0 !== md && 2 !== md) return null;
        const Wd = Od.readBits(11),
          Fd = Od.readBits(2);
        let Rd, hd = 0;
        3 === Fd ? (hd = Od.readBits(2), Rd = 3) : Rd = Od.readBits(2);
        const vd = Od.readBits(3),
          td = Od.readBits(1),
          od = Od.readBits(5);
        if (od < 11 || od > 16) return null;
        const Nd = WO[Rd];
        let qd;
        qd = Fd < 3 ? Xd[Fd] / 1e3 : Kd[hd] / 1e3;
        return {
          dataRate: Math.round((Wd + 1) * qd / (16 * Nd)),
          substreams: [{
            fscod: Fd,
            fscod2: hd,
            bsid: od,
            bsmod: 0,
            acmod: vd,
            lfeon: td,
            numDepSub: 0,
            chanLoc: 0
          }]
        }
      },
      RO = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3],
      XO = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0],
      KO = [16, 16, 20, 20, 0, 24, 24, 0],
      hO = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8],
      vO = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535],
      QO = [32e3, 44100, 48e3, 0],
      tO = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3],
      oO = [512, 1024, 2048, 4096],
      NO = dd => {
        const Od = qO(dd),
          md = (0, Fd.sd)(dd);
        let Wd = Od ? 4 * Math.ceil(Od.frameSize / 4) : 0,
          Rd = null;
        for (; Wd + 4 <= dd.length && 1683496997 === md.getUint32(Wd);) {
          const Od = HO(dd.subarray(Wd));
          if (!Od) break;
          Rd ??= Od, Wd += Od.frameSize
        }
        if (Od) return {
          frameSize: Rd ? Wd : Od.frameSize,
          sampleRate: Od.sampleRate,
          numberOfChannels: Od.numberOfChannels,
          sampleCount: Od.sampleCount,
          channelLayout: Od.channelLayout,
          pcmResolution: Od.pcmResolution,
          bitRate: Od.bitRate,
          core: Od,
          hasExtensions: null !== Rd
        };
        if (!Rd?.asset) return null;
        const {
          asset: Xd
        } = Rd;
        return {
          frameSize: Wd,
          sampleRate: Xd.sampleRate,
          numberOfChannels: Xd.numberOfChannels,
          sampleCount: Xd.sampleCount,
          channelLayout: Xd.channelLayout,
          pcmResolution: Xd.pcmResolution,
          bitRate: 0,
          core: null,
          hasExtensions: !0
        }
      },
      qO = dd => {
        if (dd.length < 18) return null;
        if (127 !== dd[0] || 254 !== dd[1] || 128 !== dd[2] || 1 !== dd[3]) return null;
        const Od = new Qd.c(dd);
        if (Od.skipBits(32), Od.skipBits(1), 31 !== Od.readBits(5)) return null;
        const md = Od.readBits(1),
          Wd = Od.readBits(7) + 1;
        if (Wd % 8 !== 0) return null;
        const Fd = Od.readBits(14) + 1;
        if (Fd < 96) return null;
        const Rd = Od.readBits(6);
        if (Rd >= hO.length) return null;
        const Xd = RO[Od.readBits(4)];
        if (0 === Xd) return null;
        const Kd = XO[Od.readBits(5)];
        if (0 !== Od.readBits(1)) return null;
        Od.skipBits(4), Od.skipBits(5);
        const hd = Od.readBits(2);
        if (3 === hd) return null;
        Od.skipBits(1), md && Od.skipBits(16), Od.skipBits(7);
        const vd = KO[Od.readBits(3)];
        if (0 === vd) return null;
        const td = 0 !== hd;
        return {
          frameSize: Fd,
          sampleRate: Xd,
          numberOfChannels: hO[Rd] + (td ? 1 : 0),
          sampleCount: 32 * Wd,
          channelLayout: vO[Rd] | (td ? 8 : 0),
          amode: Rd,
          lfePresent: td,
          bitRate: Kd,
          pcmResolution: vd
        }
      },
      HO = dd => {
        if (dd.length < 10) return null;
        if (100 !== dd[0] || 88 !== dd[1] || 32 !== dd[2] || 37 !== dd[3]) return null;
        const Od = new Qd.c(dd);
        Od.skipBits(32), Od.skipBits(8);
        const md = Od.readBits(2),
          Wd = Od.readBits(1),
          Rd = 8 + 4 * Wd,
          Xd = 16 + 4 * Wd;
        Od.skipBits(Rd);
        const Kd = Od.readBits(Xd) + 1,
          hd = {
            frameSize: Kd,
            asset: null
          };
        if (!Od.readBits(1)) return hd;
        const vd = QO[Od.readBits(2)],
          td = 512 * (Od.readBits(3) + 1);
        Od.readBits(1) && Od.skipBits(36);
        const od = Od.readBits(3) + 1,
          Nd = Od.readBits(3) + 1,
          qd = [];
        for (let Fd = 0; Fd < od; Fd++) qd.push(Od.readBits(md + 1));
        for (const Qd of qd) Od.skipBits(8 * (0, Fd.xc)(Qd));
        if (Od.readBits(1)) {
          Od.skipBits(2);
          const dd = Od.readBits(2) + 1 << 2,
            md = Od.readBits(2) + 1;
          Od.skipBits(md * dd)
        }
        for (let Fd = 0; Fd < Nd; Fd++) Od.skipBits(Xd);
        Od.skipBits(9), Od.skipBits(3), Od.readBits(1) && Od.skipBits(4), Od.readBits(1) && Od.skipBits(24), Od.readBits(1) && Od.skipBits(8 * (Od.readBits(10) + 1));
        const Hd = Od.readBits(5) + 1,
          yd = tO[Od.readBits(4)],
          bd = Od.readBits(8) + 1;
        let Td = 0;
        if (Od.readBits(1) && (bd > 2 && Od.skipBits(1), bd > 6 && Od.skipBits(1), Od.readBits(1))) {
          const dd = Od.readBits(2) + 1 << 2;
          Td = Od.readBits(dd)
        }
        return 0 === vd || Od.getBitsLeft() < 0 ? hd : {
          frameSize: Kd,
          asset: {
            sampleRate: yd,
            numberOfChannels: bd,
            sampleCount: Math.round(td * yd / vd),
            channelLayout: Td,
            pcmResolution: Hd
          }
        }
      },
      yO = dd => {
        const Od = new Uint8Array(20),
          md = (0, Fd.sd)(Od);
        md.setUint32(0, dd.sampleRate), md.setUint32(4, dd.bitRate), md.setUint32(8, dd.bitRate), Od[12] = dd.pcmResolution;
        const Wd = dd.core && !dd.hasExtensions ? 1 : 0,
          Rd = new Qd.c(Od);
        return Rd.seekToByte(13), Rd.writeBits(2, Math.max(oO.indexOf(dd.sampleCount), 0)), Rd.writeBits(5, Wd), Rd.writeBits(1, dd.core?.lfePresent ? 1 : 0), Rd.writeBits(6, dd.core?.amode ?? 0), Rd.writeBits(14, dd.core ? dd.core.frameSize - 1 : 0), Rd.writeBits(1, 0), Rd.writeBits(3, 0), Rd.writeBits(16, dd.channelLayout), Rd.writeBits(1, 0), Rd.writeBits(1, 0), Rd.writeBits(1, 0), Rd.writeBits(5, 0), Od
      }
  },
  41513: (dd, Od, md) => {
    md.d(Od, {
      A: () => wd,
      E: () => gd,
      H: () => Yd,
      L: () => sd,
      N: () => Sd,
      Q: () => Bd,
      S: () => xd,
      U: () => Pd,
      V: () => zd,
      X: () => nd,
      b: () => hd,
      f: () => Qd,
      j: () => Kd,
      l: () => Jd,
      m: () => Xd,
      p: () => vd,
      q: () => Rd,
      s: () => od,
      v: () => Ed,
      z: () => pd
    });
    var Wd = md(41522),
      Fd = md(41487);
    const Rd = ["avc", "hevc", "vp9", "av1", "vp8", "prores"],
      Xd = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"],
      Kd = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"],
      hd = [...Kd, ...Xd],
      vd = ["webvtt"],
      Qd = [{
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
      td = [{
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
      od = [{
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
      Nd = [{
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
      qd = ".01.01.01.01.00",
      Hd = ".0.110.01.01.01.0",
      yd = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"],
      bd = ["dtsc", "dtsh", "dtsl", "dtse"],
      Td = [{
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
      pd = (dd, Od, md, Wd, Rd) => {
        if ("avc" === dd) {
          const dd = 100,
            Rd = Math.ceil(Od / 16) * Math.ceil(md / 16),
            Xd = Qd.find((dd => Rd <= dd.maxMacroblocks && Wd <= dd.maxBitrate)) ?? (0, Fd.jc)(Qd),
            Kd = Xd ? Xd.level : 0;
          return `avc1.${dd.toString(16).padStart(2,"0")}${"00"}${Kd.toString(16).padStart(2,"0")}`
        }
        if ("hevc" === dd) {
          const dd = "",
            Rd = 1,
            Xd = "6",
            Kd = Od * md,
            hd = td.find((dd => Kd <= dd.maxPictureSize && Wd <= dd.maxBitrate)) ?? (0, Fd.jc)(td),
            vd = "B0";
          return `hev1.${dd}${Rd}.${Xd}.${hd.tier}${hd.level}.${vd}`
        }
        if ("vp8" === dd) return "vp8";
        if ("vp9" === dd) {
          const dd = Od * md,
            Rd = "08";
          return `vp09.${"00"}.${(od.find((Od=>dd<=Od.maxPictureSize&&Wd<=Od.maxBitrate))??(0,Fd.jc)(od)).level.toString().padStart(2,"0")}.${Rd}`
        }
        if ("av1" === dd) {
          const dd = 0,
            Rd = Od * md,
            Xd = Nd.find((dd => Rd <= dd.maxPictureSize && Wd <= dd.maxBitrate)) ?? (0, Fd.jc)(Nd),
            Kd = "08";
          return `av01.${dd}.${Xd.level.toString().padStart(2,"0")}${Xd.tier}.${Kd}`
        }
        if ("prores" === dd) {
          const dd = 2073600,
            Fd = Math.pow(Od * md / dd, .95),
            Xd = Td.filter((dd => dd.alpha === Rd));
          let Kd = Xd[0].fourCc,
            hd = 1 / 0;
          for (const {
              fourCc: Od,
              bitrate: md
            }
            of Xd) {
            const dd = Math.abs(md * Fd - Wd);
            dd < hd && (hd = dd, Kd = Od)
          }
          return Kd
        }
        throw (0, Fd.J)(dd), new TypeError(`Unhandled codec '${String(dd)}'.`)
      },
      Yd = dd => {
        const Od = dd.split(".");
        return [1, 1, Number(Od[1]), 2, 1, Number(Od[2]), 3, 1, Number(Od[3]), 4, 1, Od[4] ? Number(Od[4]) : 1]
      },
      gd = dd => {
        const Od = dd.split("."),
          md = Number(Od[1]),
          Wd = Od[2],
          Fd = (md << 5) + Number(Wd.slice(0, -1)),
          Rd = "H" === Wd.slice(-1) ? 1 : 0,
          Xd = Number(Od[3]);
        return [129, Fd, (Rd << 7) + ((8 === Xd ? 0 : 1) << 6) + ((12 === Xd ? 1 : 0) << 5) + ((Od[4] ? Number(Od[4]) : 0) << 4) + ((Od[5] ? Number(Od[5][0]) : 1) << 3) + ((Od[5] ? Number(Od[5][1]) : 1) << 2) + (Od[5] ? Number(Od[5][2]) : 0), 0]
      },
      wd = dd => {
        const {
          codec: Od,
          codecDescription: md,
          colorSpace: Rd,
          avcCodecInfo: Xd,
          hevcCodecInfo: Kd,
          vp9CodecInfo: hd,
          av1CodecInfo: vd,
          proresFormat: Qd
        } = dd;
        if ("avc" === Od) {
          if ((0, Fd.M)(null !== dd.avcType), Xd) {
            const Od = new Uint8Array([Xd.avcProfileIndication, Xd.profileCompatibility, Xd.avcLevelIndication]);
            return `avc${dd.avcType}.${(0,Fd.W)(Od)}`
          }
          if (!md || md.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
          return `avc${dd.avcType}.${(0,Fd.W)(md.subarray(1,4))}`
        }
        if ("hevc" === Od) {
          let dd, Od, Wd, Rd, Xd, hd;
          if (Kd) dd = Kd.generalProfileSpace, Od = Kd.generalProfileIdc, Wd = (0, Fd.Ic)(Kd.generalProfileCompatibilityFlags), Rd = Kd.generalTierFlag, Xd = Kd.generalLevelIdc, hd = [...Kd.generalConstraintIndicatorFlags];
          else {
            if (!md || md.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
            const Kd = (0, Fd.sd)(md),
              vd = Kd.getUint8(1);
            dd = vd >> 6 & 3, Od = 31 & vd, Wd = (0, Fd.Ic)(Kd.getUint32(2)), Rd = vd >> 5 & 1, Xd = Kd.getUint8(12), hd = [];
            for (let dd = 0; dd < 6; dd++) hd.push(Kd.getUint8(6 + dd))
          }
          let vd = "hev1.";
          for (vd += ["", "A", "B", "C"][dd] + Od, vd += ".", vd += Wd.toString(16).toUpperCase(), vd += ".", vd += 0 === Rd ? "L" : "H", vd += Xd; hd.length > 0 && 0 === hd[hd.length - 1];) hd.pop();
          return hd.length > 0 && (vd += ".", vd += hd.map((dd => dd.toString(16).toUpperCase())).join(".")), vd
        }
        if ("vp8" === Od) return "vp8";
        if ("vp9" === Od) {
          if (!hd) {
            const Od = dd.width * dd.height;
            let md = (0, Fd.jc)(od).level;
            for (const dd of od)
              if (Od <= dd.maxPictureSize) {
                md = dd.level;
                break
              } return `vp09.00.${md.toString().padStart(2,"0")}.08`
          }
          let Od = `vp09.${hd.profile.toString().padStart(2,"0")}.${hd.level.toString().padStart(2,"0")}.${hd.bitDepth.toString().padStart(2,"0")}.${hd.chromaSubsampling.toString().padStart(2,"0")}`;
          return Od += `.${hd.colourPrimaries.toString().padStart(2,"0")}.${hd.transferCharacteristics.toString().padStart(2,"0")}.${hd.matrixCoefficients.toString().padStart(2,"0")}.${hd.videoFullRangeFlag.toString().padStart(2,"0")}`, Od.endsWith(qd) && (Od = Od.slice(0, -15)), Od
        }
        if ("av1" === Od) {
          if (!vd) {
            const Od = dd.width * dd.height;
            let md = (0, Fd.jc)(od).level;
            for (const dd of od)
              if (Od <= dd.maxPictureSize) {
                md = dd.level;
                break
              } return `av01.0.${md.toString().padStart(2,"0")}M.08`
          }
          const Od = vd.profile,
            md = vd.level.toString().padStart(2, "0"),
            Xd = vd.tier ? "H" : "M",
            Kd = vd.bitDepth.toString().padStart(2, "0"),
            hd = vd.monochrome ? "1" : "0",
            Qd = 100 * vd.chromaSubsamplingX + 10 * vd.chromaSubsamplingY + 1 * (vd.chromaSubsamplingX && vd.chromaSubsamplingY ? vd.chromaSamplePosition : 0);
          let td, Nd, qd, yd;
          (0, Wd.p)(vd) ? (td = vd.colourPrimaries, Nd = vd.transferCharacteristics, qd = vd.matrixCoefficients, yd = vd.videoFullRangeFlag) : (td = Rd?.primaries ? Fd.g[Rd.primaries] : 1, Nd = Rd?.transfer ? Fd.t[Rd.transfer] : 1, qd = Rd?.matrix ? Fd.p[Rd.matrix] : 1, yd = Rd?.fullRange ? 1 : 0);
          let bd = `av01.${Od}.${md}${Xd}.${Kd}`;
          return bd += `.${hd}.${Qd.toString().padStart(3,"0")}`, bd += `.${td.toString().padStart(2,"0")}`, bd += `.${Nd.toString().padStart(2,"0")}`, bd += `.${qd.toString().padStart(2,"0")}`, bd += `.${yd}`, bd.endsWith(Hd) && (bd = bd.slice(0, -17)), bd
        }
        if ("prores" === Od) return Qd ?? "apch";
        throw null !== Od && (0, Fd.J)(Od), new TypeError(`Unhandled codec '${Od}'.`)
      },
      Ed = (dd, Od, md) => {
        if ("aac" === dd) return Od >= 2 && md <= 24e3 ? "mp4a.40.29" : md <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
        if ("mp3" === dd) return "mp3";
        if ("opus" === dd) return "opus";
        if ("vorbis" === dd) return "vorbis";
        if ("flac" === dd) return "flac";
        if ("ac3" === dd) return "ac-3";
        if ("eac3" === dd) return "ec-3";
        if ("dts" === dd) return "dtsc";
        if (Xd.includes(dd)) return dd;
        throw new TypeError(`Unhandled codec '${dd}'.`)
      },
      Jd = 48e3,
      Ud = /^pcm-([usf])(\d+)(be)?$/,
      xd = dd => {
        if ((0, Fd.M)(Xd.includes(dd)), "ulaw" === dd) return {
          dataType: "ulaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 255
        };
        if ("alaw" === dd) return {
          dataType: "alaw",
          sampleSize: 1,
          littleEndian: !0,
          silentValue: 213
        };
        const Od = Ud.exec(dd);
        let md;
        (0, Fd.M)(Od), md = "u" === Od[1] ? "unsigned" : "s" === Od[1] ? "signed" : "float";
        return {
          dataType: md,
          sampleSize: Number(Od[2]) / 8,
          littleEndian: "be" !== Od[3],
          silentValue: "pcm-u8" === dd ? 128 : 0
        }
      },
      Bd = dd => dd.startsWith("avc1") || dd.startsWith("avc3") ? "avc" : dd.startsWith("hev1") || dd.startsWith("hvc1") ? "hevc" : "vp8" === dd ? "vp8" : dd.startsWith("vp09") ? "vp9" : dd.startsWith("av01") ? "av1" : yd.includes(dd) ? "prores" : "mp3" === dd || "mp4a.69" === dd || "mp4a.6B" === dd || "mp4a.6b" === dd || "mp4a.40.34" === dd ? "mp3" : dd.startsWith("mp4a.40.") || "mp4a.67" === dd ? "aac" : "opus" === dd || "Opus" === dd ? "opus" : "vorbis" === dd ? "vorbis" : "flac" === dd ? "flac" : "ac-3" === dd || "ac3" === dd ? "ac3" : "ec-3" === dd || "eac3" === dd ? "eac3" : bd.includes(dd) ? "dts" : "ulaw" === dd ? "ulaw" : "alaw" === dd ? "alaw" : Ud.test(dd) ? dd : "webvtt" === dd ? "webvtt" : null,
      Sd = dd => "avc" === dd ? {
        avc: {
          format: "avc"
        }
      } : "hevc" === dd ? {
        hevc: {
          format: "hevc"
        }
      } : {},
      sd = dd => "aac" === dd ? {
        aac: {
          format: "aac"
        }
      } : "opus" === dd ? {
        opus: {
          format: "opus"
        }
      } : {},
      ud = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...yd],
      Vd = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/,
      Ad = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,
      rd = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,
      Gd = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,
      nd = (dd, Od) => {
        if (!dd) throw new TypeError("Video chunk metadata must be provided.");
        if ("object" !== typeof dd) throw new TypeError("Video chunk metadata must be an object.");
        if (!dd.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
        if ("object" !== typeof dd.decoderConfig) throw new TypeError("Video chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof dd.decoderConfig.codec) throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
        if (!ud.some((Od => dd.decoderConfig.codec.startsWith(Od)))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(dd.decoderConfig.codedWidth) || dd.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
        if (!Number.isInteger(dd.decoderConfig.codedHeight) || dd.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
        if (void 0 !== dd.decoderConfig.displayAspectWidth && (!Number.isInteger(dd.decoderConfig.displayAspectWidth) || dd.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
        if (void 0 !== dd.decoderConfig.displayAspectHeight && (!Number.isInteger(dd.decoderConfig.displayAspectHeight) || dd.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
        if (void 0 !== dd.decoderConfig.displayAspectWidth !== (void 0 !== dd.decoderConfig.displayAspectHeight)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
        if (void 0 !== dd.decoderConfig.description && !(0, Fd.yb)(dd.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (void 0 !== dd.decoderConfig.colorSpace) {
          const {
            colorSpace: Od
          } = dd.decoderConfig;
          if ("object" !== typeof Od) throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
          const md = Object.keys(Fd.g);
          if (null != Od.primaries && !md.includes(Od.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${md.join(", ")}.`);
          const Wd = Object.keys(Fd.t);
          if (null != Od.transfer && !Wd.includes(Od.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${Wd.join(", ")}.`);
          const Rd = Object.keys(Fd.p);
          if (null != Od.matrix && !Rd.includes(Od.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${Rd.join(", ")}.`);
          if (null != Od.fullRange && "boolean" !== typeof Od.fullRange) throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")
        }
        if (dd.decoderConfig.codec.startsWith("avc1") || dd.decoderConfig.codec.startsWith("avc3")) {
          if (!Vd.test(dd.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")
        } else if (dd.decoderConfig.codec.startsWith("hev1") || dd.decoderConfig.codec.startsWith("hvc1")) {
          if (!Ad.test(dd.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")
        } else if (dd.decoderConfig.codec.startsWith("vp8")) {
          if ("vp8" !== dd.decoderConfig.codec) throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')
        } else if (dd.decoderConfig.codec.startsWith("vp09")) {
          if (!rd.test(dd.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')
        } else if (dd.decoderConfig.codec.startsWith("av01")) {
          if (!Gd.test(dd.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')
        } else if (yd.some((Od => dd.decoderConfig.codec.startsWith(Od))) && !yd.some((Od => dd.decoderConfig.codec === Od))) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${yd.join(", ")}.`);
        if (null !== Od && Bd(dd.decoderConfig.codec) !== Od) throw new TypeError(`Video chunk metadata decoder configuration codec string '${dd.decoderConfig.codec}' does not fit to the track codec '${Od}'.`)
      },
      Ld = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"],
      Pd = (dd, Od) => {
        if (!dd) throw new TypeError("Audio chunk metadata must be provided.");
        if ("object" !== typeof dd) throw new TypeError("Audio chunk metadata must be an object.");
        if (!dd.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
        if ("object" !== typeof dd.decoderConfig) throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
        if ("string" !== typeof dd.decoderConfig.codec) throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
        if (!Ld.some((Od => dd.decoderConfig.codec.startsWith(Od)))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
        if (!Number.isInteger(dd.decoderConfig.sampleRate) || dd.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
        if (!Number.isInteger(dd.decoderConfig.numberOfChannels) || dd.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
        if (void 0 !== dd.decoderConfig.description && !(0, Fd.yb)(dd.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
        if (dd.decoderConfig.codec.startsWith("mp4a") && "mp4a.69" !== dd.decoderConfig.codec && "mp4a.6B" !== dd.decoderConfig.codec && "mp4a.6b" !== dd.decoderConfig.codec) {
          if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(dd.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")
        } else if (dd.decoderConfig.codec.startsWith("mp3") || dd.decoderConfig.codec.startsWith("mp4a")) {
          if ("mp3" !== dd.decoderConfig.codec && "mp4a.69" !== dd.decoderConfig.codec && "mp4a.6B" !== dd.decoderConfig.codec && "mp4a.6b" !== dd.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')
        } else if (dd.decoderConfig.codec.startsWith("opus")) {
          if ("opus" !== dd.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
          if (dd.decoderConfig.description && dd.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")
        } else if (dd.decoderConfig.codec.startsWith("vorbis")) {
          if ("vorbis" !== dd.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
          if (!dd.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")
        } else if (dd.decoderConfig.codec.startsWith("flac")) {
          if ("flac" !== dd.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
          const Od = 42;
          if (!dd.decoderConfig.description || dd.decoderConfig.description.byteLength < Od) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")
        } else if (dd.decoderConfig.codec.startsWith("ac-3") || dd.decoderConfig.codec.startsWith("ac3")) {
          if ("ac-3" !== dd.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')
        } else if (dd.decoderConfig.codec.startsWith("ec-3") || dd.decoderConfig.codec.startsWith("eac3")) {
          if ("ec-3" !== dd.decoderConfig.codec) throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')
        } else if (dd.decoderConfig.codec.startsWith("dts")) {
          if (!bd.includes(dd.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${bd.join(", ")}.`)
        } else if ((dd.decoderConfig.codec.startsWith("pcm") || dd.decoderConfig.codec.startsWith("ulaw") || dd.decoderConfig.codec.startsWith("alaw")) && !Xd.includes(dd.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Xd.join(", ")}).`);
        if (null !== Od && Bd(dd.decoderConfig.codec) !== Od) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${dd.decoderConfig.codec}' does not fit to the track codec '${Od}'.`)
      },
      zd = dd => {
        if (!dd) throw new TypeError("Subtitle metadata must be provided.");
        if ("object" !== typeof dd) throw new TypeError("Subtitle metadata must be an object.");
        if (!dd.config) throw new TypeError("Subtitle metadata must include a config object.");
        if ("object" !== typeof dd.config) throw new TypeError("Subtitle metadata config must be an object.");
        if ("string" !== typeof dd.config.description) throw new TypeError("Subtitle metadata config description must be a string.")
      }
  },
  41559: (dd, Od, md) => {
    md.d(Od, {
      d: () => od,
      f: () => td,
      g: () => bd,
      j: () => hd,
      k: () => Td,
      l: () => vd,
      o: () => Xd
    });
    var Wd = md(41513),
      Fd = md(41487),
      Rd = md(41562);
    new Map, new Map;
    const Xd = dd => {
        if (!dd || "object" !== typeof dd) throw new TypeError("Encoding config must be an object.");
        if (!Wd.q.includes(dd.codec)) throw new TypeError(`Invalid video codec '${dd.codec}'. Must be one of: ${Wd.q.join(", ")}.`);
        const Od = dd.bitrate;
        if (void 0 === dd.quality && void 0 === Od) throw new TypeError("config.quality must be provided.");
        if (void 0 !== dd.quality && void 0 !== Od) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== dd.quality && !(dd.quality instanceof od)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== Od && !(Od instanceof od) && (!Number.isInteger(Od) || Od <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== dd.keyFrameInterval && (!Number.isFinite(dd.keyFrameInterval) || dd.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
        if (void 0 !== dd.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(dd.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
        if (void 0 !== dd.transform) {
          if ("object" !== typeof dd.transform || !dd.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== dd.transform.width && (!Number.isInteger(dd.transform.width) || dd.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
          if (void 0 !== dd.transform.height && (!Number.isInteger(dd.transform.height) || dd.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
          if (void 0 !== dd.transform.fit && !["fill", "contain", "cover"].includes(dd.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
          if (void 0 !== dd.transform.width && void 0 !== dd.transform.height && void 0 === dd.transform.fit && !["fill", "contain", "cover"].includes(dd.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
          if (void 0 !== dd.transform.fit && ["fill", "contain", "cover"].includes(dd.sizeChangeBehavior) && dd.transform.fit !== dd.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
          if (void 0 !== dd.transform.rotate && ![0, 90, 180, 270].includes(dd.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
          if (void 0 !== dd.transform.flip && "boolean" !== typeof dd.transform.flip) throw new TypeError("config.transform.flip, when provided, must be a boolean.");
          if (void 0 !== dd.transform.crop && (0, Rd.p)(dd.transform.crop, "config.transform."), void 0 !== dd.transform.process && "function" !== typeof dd.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.");
          if (void 0 !== dd.transform.frameRate && (!Number.isFinite(dd.transform.frameRate) || dd.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
          if (void 0 !== dd.transform.force && "boolean" !== typeof dd.transform.force) throw new TypeError("config.transform.force, when provided, must be a boolean.")
        }
        if (void 0 !== dd.onEncodedPacket && "function" !== typeof dd.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== dd.onEncoderConfig && "function" !== typeof dd.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== dd.onEncodedSample && "function" !== typeof dd.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        Kd(dd.codec, dd)
      },
      Kd = (dd, Od) => {
        if (!Od || "object" !== typeof Od) throw new TypeError("Encoding options must be an object.");
        if (void 0 !== Od.alpha && !["discard", "keep"].includes(Od.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
        const md = Od.bitrateMode;
        if (void 0 !== md && !["constant", "variable"].includes(md)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== Od.latencyMode && !["quality", "realtime"].includes(Od.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
        if (void 0 !== Od.fullCodecString && "string" !== typeof Od.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== Od.fullCodecString && (0, Wd.Q)(Od.fullCodecString) !== dd) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${dd}).`);
        if (void 0 !== Od.hardwareAcceleration && !["no-preference", "prefer-hardware", "prefer-software"].includes(Od.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
        if (void 0 !== Od.scalabilityMode && "string" !== typeof Od.scalabilityMode) throw new TypeError("scalabilityMode, when provided, must be a string.");
        if (void 0 !== Od.contentHint && "string" !== typeof Od.contentHint) throw new TypeError("contentHint, when provided, must be a string.")
      },
      hd = dd => {
        const Od = dd.bitrateMode,
          md = dd.quality._toVideoRateControl(dd.codec, dd.width, dd.height, Od),
          Rd = (Od, md, Fd) => ({
            codec: dd.fullCodecString ?? (0, Wd.z)(dd.codec, dd.width, dd.height, Fd, "keep" === dd.alpha),
            width: dd.width,
            height: dd.height,
            displayWidth: dd.squarePixelWidth,
            displayHeight: dd.squarePixelHeight,
            bitrate: Od,
            bitrateMode: md,
            alpha: dd.alpha ?? "discard",
            framerate: dd.framerate,
            latencyMode: dd.latencyMode,
            hardwareAcceleration: dd.hardwareAcceleration,
            scalabilityMode: dd.scalabilityMode,
            contentHint: dd.contentHint,
            ...(0, Wd.N)(dd.codec)
          }),
          Xd = [];
        return null !== md.quantizer && Xd.push({
          config: Rd(void 0, "quantizer", md.bitrate),
          quantizer: md.quantizer
        }), "quantizer" !== md.bitrateMode && Xd.push({
          config: Rd(md.bitrate, md.bitrateMode, md.bitrate),
          quantizer: null
        }), (0, Fd.M)(Xd.length > 0), Xd
      },
      vd = dd => {
        if (!dd || "object" !== typeof dd) throw new TypeError("Encoding config must be an object.");
        if (!Wd.b.includes(dd.codec)) throw new TypeError(`Invalid audio codec '${dd.codec}'. Must be one of: ${Wd.b.join(", ")}.`);
        const Od = dd.bitrate;
        if (void 0 === dd.quality && void 0 === Od && !Wd.m.includes(dd.codec) && "flac" !== dd.codec) throw new TypeError("config.quality must be provided for compressed audio codecs.");
        if (void 0 !== dd.quality && void 0 !== Od) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
        if (void 0 !== dd.quality && !(dd.quality instanceof od)) throw new TypeError("config.quality, when provided, must be a Quality.");
        if (void 0 !== Od && !(Od instanceof od) && (!Number.isInteger(Od) || Od <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
        if (void 0 !== dd.transform) {
          if ("object" !== typeof dd.transform || !dd.transform) throw new TypeError("config.transform, when provided, must be an object.");
          if (void 0 !== dd.transform.numberOfChannels && (!Number.isInteger(dd.transform.numberOfChannels) || dd.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
          if (void 0 !== dd.transform.sampleRate && (!Number.isInteger(dd.transform.sampleRate) || dd.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
          if (void 0 !== dd.transform.sampleFormat && !["u8", "s16", "s32", "f32"].includes(dd.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
          if (void 0 !== dd.transform.process && "function" !== typeof dd.transform.process) throw new TypeError("config.transform.process, when provided, must be a function.")
        }
        if (void 0 !== dd.onEncodedPacket && "function" !== typeof dd.onEncodedPacket) throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
        if (void 0 !== dd.onEncoderConfig && "function" !== typeof dd.onEncoderConfig) throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
        if (void 0 !== dd.onEncodedSample && "function" !== typeof dd.onEncodedSample) throw new TypeError("config.onEncodedSample, when provided, must be a function.");
        Qd(dd.codec, dd)
      },
      Qd = (dd, Od) => {
        if (!Od || "object" !== typeof Od) throw new TypeError("Encoding options must be an object.");
        const md = Od.bitrateMode;
        if (void 0 !== md && !["constant", "variable"].includes(md)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
        if (void 0 !== Od.fullCodecString && "string" !== typeof Od.fullCodecString) throw new TypeError("fullCodecString, when provided, must be a string.");
        if (void 0 !== Od.fullCodecString && (0, Wd.Q)(Od.fullCodecString) !== dd) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${dd}).`)
      },
      td = dd => {
        const Od = dd.bitrateMode;
        return {
          codec: dd.fullCodecString ?? (0, Wd.v)(dd.codec, dd.numberOfChannels, dd.sampleRate),
          numberOfChannels: dd.numberOfChannels,
          sampleRate: dd.sampleRate,
          bitrate: dd.quality?._toAudioBitrate(dd.codec),
          bitrateMode: dd.quality?._bitrateMode ?? Od,
          ...(0, Wd.L)(dd.codec)
        }
      };
    class od {
      constructor(dd) {
        if ("number" !== typeof dd && "string" !== typeof dd || (dd = {
            quality: dd
          }), !dd || "object" !== typeof dd) throw new TypeError("options must be an object.");
        if (void 0 !== dd.bitrateMode && !["constant", "variable"].includes(dd.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
        if ("quality" in dd) {
          if ("string" === typeof dd.quality ? !(dd.quality in Nd) : "number" !== typeof dd.quality || Number.isNaN(dd.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
          if (void 0 !== dd.preferBitrate && "boolean" !== typeof dd.preferBitrate) throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
          if ("bitrate" in dd || "quantizer" in dd) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
          this._quality = "string" === typeof dd.quality ? Nd[dd.quality] : dd.quality, this._preferBitrate = dd.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0
        } else {
          if (void 0 !== dd.bitrate && (!Number.isInteger(dd.bitrate) || dd.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
          if (void 0 !== dd.quantizer && (!Number.isInteger(dd.quantizer) || dd.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
          if (void 0 === dd.bitrate && void 0 === dd.quantizer) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
          if ("preferBitrate" in dd) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
          this._quality = void 0, this._preferBitrate = !1, this._bitrate = dd.bitrate, this._quantizer = dd.quantizer
        }
        this._bitrateMode = dd.bitrateMode
      }
      _toVideoRateControl(dd, Od, md, Wd) {
        const Rd = qd[dd];
        let Xd, Kd = null,
          hd = this._bitrateMode ?? Wd ?? "variable";
        if (void 0 !== this._quantizer) {
          if (Rd)
            if (this._quantizer < Rd.min || this._quantizer > Rd.max) {
              if (void 0 === this._bitrate) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${dd}'; must be between ${Rd.min} and ${Rd.max}.`)
            } else Kd = this._quantizer, void 0 === this._bitrate && (hd = "quantizer");
          else if (void 0 === this._bitrate) throw new Error(`Codec '${dd}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)
        } else void 0 === this._bitrate && Rd && !this._preferBitrate && ((0, Fd.M)(void 0 !== this._quality), Kd = (0, Fd.$)(Math.round((0, Fd.kc)(Rd.worst, Rd.best, this._quality)), Rd.min, Rd.max));
        if (void 0 !== this._bitrate) Xd = this._bitrate;
        else {
          let Wd = this._quality;
          void 0 === Wd && ((0, Fd.M)(null !== Kd && Rd), Wd = (0, Fd.$)((Kd - Rd.worst) / (Rd.best - Rd.worst), 0, 1)), Xd = yd(dd, Od, md, Hd(Wd))
        }
        return {
          quantizer: Kd,
          bitrate: Xd,
          bitrateMode: hd
        }
      }
      _toVideoBitrate(dd, Od, md) {
        return void 0 !== this._bitrate ? this._bitrate : ((0, Fd.M)(void 0 !== this._quality), yd(dd, Od, md, Hd(this._quality)))
      }
      _toAudioBitrate(dd) {
        if (Wd.m.includes(dd) || "flac" === dd) return;
        if (void 0 !== this._bitrate) return this._bitrate;
        if (void 0 === this._quality) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
        const Od = Hd(this._quality),
          md = {
            aac: 128e3,
            opus: 64e3,
            mp3: 16e4,
            vorbis: 64e3,
            ac3: 384e3,
            eac3: 192e3,
            dts: 768e3
          } [dd];
        if (!md) throw new Error(`Unhandled codec: ${dd}`);
        let Fd = md * Od;
        if ("aac" === dd) {
          Fd = [96e3, 128e3, 16e4, 192e3].reduce(((dd, Od) => Math.abs(Od - Fd) < Math.abs(dd - Fd) ? Od : dd))
        } else if ("opus" === dd || "vorbis" === dd) Fd = Math.max(6e3, Fd);
        else if ("mp3" === dd) {
          Fd = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce(((dd, Od) => Math.abs(Od - Fd) < Math.abs(dd - Fd) ? Od : dd))
        }
        return 1e3 * Math.round(Fd / 1e3)
      }
    }
    const Nd = {
        "very-low": 0,
        low: .25,
        medium: .5,
        high: .75,
        "very-high": 1
      },
      qd = {
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
      Hd = dd => .3 * Math.exp(2.5538 * dd),
      yd = (dd, Od, md, Wd) => {
        const Fd = Od * md,
          Rd = 3e6,
          Xd = Rd * Math.pow(Fd / 2073600, .95) * {
            avc: 1,
            hevc: .6,
            vp9: .6,
            av1: .4,
            vp8: 1.2,
            prores: 73.33333333333333
          } [dd] * Wd;
        return 1e3 * Math.ceil(Xd / 1e3)
      },
      bd = (dd, Od) => "avc" === dd ? {
        avc: {
          quantizer: Od
        }
      } : "hevc" === dd ? {
        hevc: {
          quantizer: Od
        }
      } : "vp9" === dd ? {
        vp9: {
          quantizer: Od
        }
      } : "av1" === dd ? {
        av1: {
          quantizer: Od
        }
      } : void(0, Fd.M)(!1),
      Td = (dd, Od) => void 0 !== dd ? dd : void 0 !== Od ? Od instanceof od ? Od : new od({
        bitrate: Od
      }) : void 0
  },
  41526: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd, Fd = md(41487);
    ! function(dd) {
      dd[dd.Silent = 0] = "Silent", dd[dd.Errors = 1] = "Errors", dd[dd.Warnings = 2] = "Warnings", dd[dd.Info = 3] = "Info"
    }(Wd || (Wd = {}));
    class Rd {
      constructor() {}
      static get level() {
        return Rd._level
      }
      static set level(dd) {
        if (dd !== Wd.Silent && dd !== Wd.Errors && dd !== Wd.Warnings && dd !== Wd.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
        Rd._level = dd
      }
      static get _emitter() {
        return Rd._emitterInstance ??= new Fd.k
      }
      static on(dd, Od, md) {
        return Rd._emitter.on(dd, Od, md)
      }
      static _error() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        Rd._emitter._emit("error", Od), Rd._level >= Wd.Errors && console.error(...Od)
      }
      static _warn() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        Rd._emitter._emit("warn", Od), Rd._level >= Wd.Warnings && console.warn(...Od)
      }
      static _info() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        Rd._emitter._emit("info", Od), Rd._level >= Wd.Info && console.info(...Od)
      }
    }
    Rd._level = Wd.Info, Rd._emitterInstance = null
  },
  41569: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      g: () => Qd,
      k: () => hd,
      n: () => td,
      p: () => Xd
    });
    md(41503);
    var Wd = md(41513);
    md(41487), md(41537);
    var Fd = md(41555);
    md(41562), md(41559);
    md(41522), md(41526), "function" === typeof SuppressedError && SuppressedError;
    class Rd {
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
      async _flushAndClose(dd) {}
      close() {
        if (this._closingPromise) return;
        const dd = this._connectedTrack;
        if (!dd) throw new Error("Cannot call close without connecting the source to an output track.");
        if ("pending" === dd.output.state) throw new Error("Cannot call close before output has been started.");
        this._closingPromise = (async () => {
          await this._flushAndClose(!1), this._closed = !0, "finalizing" !== dd.output.state && "finalized" !== dd.output.state && dd.output._muxer.onTrackClose(dd)
        })()
      }
      async _flushOrWaitForOngoingClose(dd) {
        return this._closingPromise ??= (async () => {
          await this._flushAndClose(dd), this._closed = !0
        })()
      }
    }
    class Xd extends Rd {
      constructor(dd) {
        if (super(), !Wd.q.includes(dd)) throw new TypeError(`Invalid video codec '${dd}'. Must be one of: ${Wd.q.join(", ")}.`);
        this._codec = dd
      }
    }
    const Kd = (dd, Od) => {
      if (dd.metadata.hasOnlyKeyPackets && "key" !== Od.type) throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")
    };
    class hd extends Xd {
      constructor(dd) {
        super(dd)
      }
      add(dd, Od) {
        if (!(dd instanceof Fd.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (dd.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== Od && (!Od || "object" !== typeof Od)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), Kd(this._connectedTrack, dd), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, dd, Od)
      }
    }
    class vd extends Rd {
      constructor(dd) {
        if (super(), !Wd.b.includes(dd)) throw new TypeError(`Invalid audio codec '${dd}'. Must be one of: ${Wd.b.join(", ")}.`);
        this._codec = dd
      }
    }
    class Qd extends vd {
      constructor(dd) {
        super(dd)
      }
      add(dd, Od) {
        if (!(dd instanceof Fd.e)) throw new TypeError("packet must be an EncodedPacket.");
        if (dd.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
        if (void 0 !== Od && (!Od || "object" !== typeof Od)) throw new TypeError("meta, when provided, must be an object.");
        return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, dd, Od)
      }
    }
    class td extends Rd {
      constructor(dd) {
        if (super(), !Wd.p.includes(dd)) throw new TypeError(`Invalid subtitle codec '${dd}'. Must be one of: ${Wd.p.join(", ")}.`);
        this._codec = dd
      }
    }
  },
  41491: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      f: () => hd,
      h: () => Fd,
      j: () => Kd,
      m: () => Xd,
      n: () => vd
    });
    var Wd = md(41487);
    class Fd {
      constructor(dd, Od) {
        if (this.data = dd, this.mimeType = Od, !(dd instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("string" !== typeof Od) throw new TypeError("mimeType must be a string.")
      }
    }
    class Rd {
      constructor(dd, Od, md, Wd) {
        if (this.data = dd, this.mimeType = Od, this.name = md, this.description = Wd, !(dd instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if (void 0 !== Od && "string" !== typeof Od) throw new TypeError("mimeType, when provided, must be a string.");
        if (void 0 !== md && "string" !== typeof md) throw new TypeError("name, when provided, must be a string.");
        if (void 0 !== Wd && "string" !== typeof Wd) throw new TypeError("description, when provided, must be a string.")
      }
    }
    const Xd = dd => {
        if (!dd || "object" !== typeof dd) throw new TypeError("tags must be an object.");
        if (void 0 !== dd.title && "string" !== typeof dd.title) throw new TypeError("tags.title, when provided, must be a string.");
        if (void 0 !== dd.description && "string" !== typeof dd.description) throw new TypeError("tags.description, when provided, must be a string.");
        if (void 0 !== dd.artist && "string" !== typeof dd.artist) throw new TypeError("tags.artist, when provided, must be a string.");
        if (void 0 !== dd.album && "string" !== typeof dd.album) throw new TypeError("tags.album, when provided, must be a string.");
        if (void 0 !== dd.albumArtist && "string" !== typeof dd.albumArtist) throw new TypeError("tags.albumArtist, when provided, must be a string.");
        if (void 0 !== dd.trackNumber && (!Number.isInteger(dd.trackNumber) || dd.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
        if (void 0 !== dd.tracksTotal && (!Number.isInteger(dd.tracksTotal) || dd.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
        if (void 0 !== dd.discNumber && (!Number.isInteger(dd.discNumber) || dd.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
        if (void 0 !== dd.discsTotal && (!Number.isInteger(dd.discsTotal) || dd.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
        if (void 0 !== dd.genre && "string" !== typeof dd.genre) throw new TypeError("tags.genre, when provided, must be a string.");
        if (void 0 !== dd.date && (!(dd.date instanceof Date) || Number.isNaN(dd.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
        if (void 0 !== dd.beatsPerMinute && (!Number.isInteger(dd.beatsPerMinute) || dd.beatsPerMinute <= 0)) throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");
        if (void 0 !== dd.lyrics && "string" !== typeof dd.lyrics) throw new TypeError("tags.lyrics, when provided, must be a string.");
        if (void 0 !== dd.images) {
          if (!Array.isArray(dd.images)) throw new TypeError("tags.images, when provided, must be an array.");
          for (const Od of dd.images) {
            if (!Od || "object" !== typeof Od) throw new TypeError("Each image in tags.images must be an object.");
            if (!(Od.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
            if ("string" !== typeof Od.mimeType) throw new TypeError("Each image.mimeType must be a string.");
            if (!["coverFront", "coverBack", "unknown"].includes(Od.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")
          }
        }
        if (void 0 !== dd.comment && "string" !== typeof dd.comment) throw new TypeError("tags.comment, when provided, must be a string.");
        if (void 0 !== dd.raw) {
          if (!dd.raw || "object" !== typeof dd.raw) throw new TypeError("tags.raw, when provided, must be an object.");
          for (const Od of Object.values(dd.raw))
            if (null !== Od && "string" !== typeof Od && (!Array.isArray(Od) || !Od.every((dd => "string" === typeof dd))) && !(Od instanceof Uint8Array) && !(Od instanceof Fd) && !(Od instanceof Rd) && !(0, Wd.Vb)(Od)) throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")
        }
      },
      Kd = dd => void 0 === dd.title && void 0 === dd.description && void 0 === dd.artist && void 0 === dd.album && void 0 === dd.albumArtist && void 0 === dd.trackNumber && void 0 === dd.tracksTotal && void 0 === dd.discNumber && void 0 === dd.discsTotal && void 0 === dd.genre && void 0 === dd.beatsPerMinute && void 0 === dd.date && void 0 === dd.lyrics && (!dd.images || 0 === dd.images.length) && void 0 === dd.comment && (void 0 === dd.raw || 0 === Object.keys(dd.raw).length),
      hd = {
        default: !0,
        primary: !0,
        forced: !1,
        original: !1,
        commentary: !1,
        hearingImpaired: !1,
        visuallyImpaired: !1
      },
      vd = dd => {
        if (!dd || "object" !== typeof dd) throw new TypeError("disposition must be an object.");
        if (void 0 !== dd.default && "boolean" !== typeof dd.default) throw new TypeError("disposition.default must be a boolean.");
        if (void 0 !== dd.primary && "boolean" !== typeof dd.primary) throw new TypeError("disposition.primary must be a boolean.");
        if (void 0 !== dd.forced && "boolean" !== typeof dd.forced) throw new TypeError("disposition.forced must be a boolean.");
        if (void 0 !== dd.original && "boolean" !== typeof dd.original) throw new TypeError("disposition.original must be a boolean.");
        if (void 0 !== dd.commentary && "boolean" !== typeof dd.commentary) throw new TypeError("disposition.commentary must be a boolean.");
        if (void 0 !== dd.hearingImpaired && "boolean" !== typeof dd.hearingImpaired) throw new TypeError("disposition.hearingImpaired must be a boolean.");
        if (void 0 !== dd.visuallyImpaired && "boolean" !== typeof dd.visuallyImpaired) throw new TypeError("disposition.visuallyImpaired must be a boolean.")
      }
  },
  41487: (dd, Od, md) => {
    function Wd(dd) {
      if (!dd) throw new Error("Assertion failed.")
    }
    md.d(Od, {
      $: () => Cd,
      Ac: () => zd,
      B: () => BO,
      Bb: () => qO,
      Bd: () => sO,
      Dc: () => pd,
      Dd: () => zO,
      Eb: () => yO,
      Ec: () => Yd,
      Ed: () => gd,
      F: () => xO,
      Fb: () => oO,
      Ic: () => Ld,
      J: () => jd,
      Jb: () => RO,
      M: () => Wd,
      Mb: () => Sd,
      Mc: () => td,
      P: () => Pd,
      Pc: () => dO,
      Qb: () => Td,
      Qc: () => Md,
      T: () => wO,
      Tb: () => JO,
      Tc: () => Nd,
      Uc: () => LO,
      Vb: () => DO,
      W: () => nd,
      Xb: () => TO,
      Yc: () => Id,
      _: () => hd,
      _b: () => bd,
      ab: () => PO,
      ad: () => ld,
      c: () => Gd,
      cc: () => QO,
      dc: () => UO,
      eb: () => pO,
      ed: () => ed,
      fc: () => YO,
      g: () => sd,
      i: () => hO,
      ib: () => Ad,
      id: () => SO,
      jb: () => Hd,
      jc: () => yd,
      k: () => jO,
      kc: () => Zd,
      lb: () => KO,
      lc: () => HO,
      m: () => Kd,
      md: () => xd,
      nb: () => vd,
      ob: () => cd,
      oc: () => kd,
      od: () => Bd,
      p: () => Vd,
      pb: () => OO,
      pd: () => cO,
      q: () => Rd,
      qb: () => Dd,
      rc: () => qd,
      s: () => XO,
      sc: () => Xd,
      sd: () => Ed,
      t: () => ud,
      tb: () => mO,
      v: () => Ud,
      vd: () => wd,
      wb: () => gO,
      wc: () => EO,
      xc: () => WO,
      yb: () => rd,
      yd: () => aO,
      z: () => fd
    });
    const Fd = Math.PI / 180,
      Rd = 180 / Math.PI,
      Xd = dd => {
        const Od = (dd % 360 + 360) % 360;
        if (0 === Od || 90 === Od || 180 === Od || 270 === Od) return Od;
        throw new Error(`Invalid rotation ${dd}.`)
      },
      Kd = [1, 0, 0, 0, 1, 0, 0, 0, 1],
      hd = (dd, Od, md) => {
        const [Wd, Fd, , Rd, Xd] = dd, Kd = Math.abs(Wd) * Od + Math.abs(Rd) * md, hd = Math.abs(Fd) * Od + Math.abs(Xd) * md;
        return qd(qd(od(-Od / 2, -md / 2), dd), od(Kd / 2, hd / 2))
      },
      vd = dd => {
        const [Od, md] = dd, Wd = Math.atan2(md, Qd(dd) ? -Od : Od);
        return Xd(Md(Wd * Rd, 90))
      },
      Qd = dd => {
        const [Od, md, , Wd, Fd] = dd;
        return Od * Fd - md * Wd < 0
      },
      td = dd => {
        const Od = dd * Fd,
          md = Math.round(Math.cos(Od)),
          Wd = Math.round(Math.sin(Od));
        return [md, Wd, 0, -Wd, md, 0, 0, 0, 1]
      },
      od = (dd, Od) => [1, 0, 0, 0, 1, 0, dd, Od, 1],
      Nd = (dd, Od) => [dd, 0, 0, 0, Od, 0, 0, 0, 1],
      qd = (dd, Od) => {
        const md = new Array(9);
        for (let Wd = 0; Wd < 3; Wd++)
          for (let Fd = 0; Fd < 3; Fd++) md[3 * Wd + Fd] = dd[3 * Wd] * Od[Fd] + dd[3 * Wd + 1] * Od[3 + Fd] + dd[3 * Wd + 2] * Od[6 + Fd];
        return md
      },
      Hd = (dd, Od, md, Wd) => ({
        rotation: Xd(dd + (Od ? -md : md)),
        flip: Od !== Wd
      }),
      yd = dd => dd && dd[dd.length - 1],
      bd = dd => dd >= 0 && dd < 2 ** 32,
      Td = dd => dd >= -(2 ** 31) && dd < 2 ** 31,
      pd = dd => {
        let Od = 0;
        for (; 0 === dd.readBits(1) && Od < 32;) Od++;
        if (Od >= 32) throw new Error("Invalid exponential-Golomb code.");
        return (1 << Od) - 1 + dd.readBits(Od)
      },
      Yd = dd => {
        const Od = pd(dd);
        return 0 === (1 & Od) ? -(Od >> 1) : Od + 1 >> 1
      },
      gd = (dd, Od, md, Wd) => {
        for (let Fd = Od; Fd < md; Fd++) {
          const Od = Math.floor(Fd / 8);
          let Rd = dd[Od];
          const Xd = 7 - (7 & Fd);
          Rd &= ~(1 << Xd), Rd |= (Wd & 1 << md - Fd - 1) >> md - Fd - 1 << Xd, dd[Od] = Rd
        }
      },
      wd = dd => dd.constructor === Uint8Array ? dd : ArrayBuffer.isView(dd) ? new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength) : new Uint8Array(dd),
      Ed = dd => dd.constructor === DataView ? dd : ArrayBuffer.isView(dd) ? new DataView(dd.buffer, dd.byteOffset, dd.byteLength) : new DataView(dd),
      Jd = "undefined" !== typeof globalThis.TextEncoder ? globalThis.TextEncoder : class {
        constructor() {
          this.encoding = "utf-8"
        }
        encode() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          const Od = new Uint8Array(3 * dd.length);
          let md = 0;
          for (let Wd = 0; Wd < dd.length; Wd++) {
            let Fd = dd.charCodeAt(Wd);
            if (Fd < 128) Od[md++] = Fd;
            else if (Fd < 2048) Od[md++] = 192 | Fd >> 6, Od[md++] = 128 | 63 & Fd;
            else if (Fd < 55296 || Fd > 57343) Od[md++] = 224 | Fd >> 12, Od[md++] = 128 | Fd >> 6 & 63, Od[md++] = 128 | 63 & Fd;
            else {
              const Rd = Wd + 1 < dd.length ? dd.charCodeAt(Wd + 1) : 0;
              Fd < 56320 && Rd >= 56320 && Rd <= 57343 ? (Fd = 65536 + (Fd - 55296 << 10) + (Rd - 56320), Wd++, Od[md++] = 240 | Fd >> 18, Od[md++] = 128 | Fd >> 12 & 63, Od[md++] = 128 | Fd >> 6 & 63, Od[md++] = 128 | 63 & Fd) : (Od[md++] = 239, Od[md++] = 191, Od[md++] = 189)
            }
          }
          return Od.slice(0, md)
        }
      },
      Ud = "undefined" !== typeof globalThis.TextDecoder ? globalThis.TextDecoder : class {
        constructor() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf-8";
          const Od = dd.trim().toLowerCase();
          if ("utf-8" === Od || "utf8" === Od || "unicode-1-1-utf-8" === Od) this.encoding = "utf-8";
          else if ("utf-16le" === Od || "utf-16" === Od) this.encoding = "utf-16le";
          else {
            if ("utf-16be" !== Od) throw new RangeError(`The encoding label provided ('${dd}') is invalid.`);
            this.encoding = "utf-16be"
          }
        }
        decode(dd) {
          const Od = dd ? wd(dd) : new Uint8Array(0),
            md = [];
          if ("utf-8" === this.encoding) {
            let dd = Od.length >= 3 && 239 === Od[0] && 187 === Od[1] && 191 === Od[2] ? 3 : 0;
            for (; dd < Od.length;) {
              const Wd = Od[dd];
              if (Wd < 128) {
                md.push(Wd), dd++;
                continue
              }
              let Fd, Rd;
              if (Wd >= 194 && Wd < 224) Fd = 1, Rd = 31 & Wd;
              else if (Wd >= 224 && Wd < 240) Fd = 2, Rd = 15 & Wd;
              else {
                if (!(Wd >= 240 && Wd < 245)) {
                  md.push(65533), dd++;
                  continue
                }
                Fd = 3, Rd = 7 & Wd
              }
              let Xd = 224 === Wd ? 160 : 240 === Wd ? 144 : 128,
                Kd = 237 === Wd ? 159 : 244 === Wd ? 143 : 191,
                hd = 1;
              for (; hd <= Fd; hd++) {
                const md = dd + hd < Od.length ? Od[dd + hd] : 0;
                if (md < Xd || md > Kd) break;
                Rd = Rd << 6 | 63 & md, Xd = 128, Kd = 191
              }
              dd += hd, hd <= Fd ? md.push(65533) : Rd >= 65536 ? (Rd -= 65536, md.push(55296 | Rd >> 10, 56320 | 1023 & Rd)) : md.push(Rd)
            }
          } else {
            const dd = "utf-16le" === this.encoding,
              Wd = dd ? 255 : 254,
              Fd = dd ? 254 : 255;
            let Rd = Od.length >= 2 && Od[0] === Wd && Od[1] === Fd ? 2 : 0;
            for (; Rd + 1 < Od.length;) {
              const Wd = dd ? Od[Rd] | Od[Rd + 1] << 8 : Od[Rd] << 8 | Od[Rd + 1];
              if (Rd += 2, Wd >= 55296 && Wd <= 56319) {
                const Fd = Rd + 1 < Od.length ? dd ? Od[Rd] | Od[Rd + 1] << 8 : Od[Rd] << 8 | Od[Rd + 1] : -1;
                Fd >= 56320 && Fd <= 57343 ? (md.push(Wd, Fd), Rd += 2) : md.push(65533)
              } else Wd >= 56320 && Wd <= 57343 ? md.push(65533) : md.push(Wd)
            }
            Rd < Od.length && md.push(65533)
          }
          let Wd = "";
          for (let Fd = 0; Fd < md.length; Fd += 8192) Wd += String.fromCharCode(...md.slice(Fd, Fd + 8192));
          return Wd
        }
      },
      xd = new Ud,
      Bd = new Jd,
      Sd = dd => {
        for (let Od = 0; Od < dd.length; Od++) {
          if (dd.charCodeAt(Od) > 255) return !1
        }
        return !0
      },
      sd = {
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        bt2020: 9,
        smpte432: 12
      },
      ud = {
        bt709: 1,
        smpte170m: 6,
        linear: 8,
        "iec61966-2-1": 13,
        pq: 16,
        hlg: 18
      },
      Vd = {
        rgb: 0,
        bt709: 1,
        bt470bg: 5,
        smpte170m: 6,
        "bt2020-ncl": 9
      },
      Ad = dd => !dd || null == dd.primaries && null == dd.transfer && null == dd.matrix && null == dd.fullRange,
      rd = dd => dd instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && dd instanceof SharedArrayBuffer || ArrayBuffer.isView(dd);
    class Gd {
      constructor() {
        this.currentPromise = Promise.resolve(), this.pending = 0
      }
      async acquire() {
        let dd;
        const Od = new Promise((Od => {
            let md = !1;
            dd = () => {
              md || (Od(), this.pending--, md = !0)
            }
          })),
          md = this.currentPromise;
        return this.currentPromise = Od, this.pending++, await md, dd
      }
    }
    const nd = dd => [...dd].map((dd => dd.toString(16).padStart(2, "0"))).join(""),
      Ld = dd => (dd = (dd = (dd = (dd = (dd = dd >> 1 & 1431655765 | (1431655765 & dd) << 1) >> 2 & 858993459 | (858993459 & dd) << 2) >> 4 & 252645135 | (252645135 & dd) << 4) >> 8 & 16711935 | (16711935 & dd) << 8) >> 16 & 65535 | (65535 & dd) << 16) >>> 0,
      Pd = (dd, Od, md) => {
        let Wd = 0,
          Fd = dd.length - 1,
          Rd = -1;
        for (; Wd <= Fd;) {
          const Xd = Wd + (Fd - Wd + 1) / 2 | 0;
          md(dd[Xd]) <= Od ? (Rd = Xd, Wd = Xd + 1) : Fd = Xd - 1
        }
        return Rd
      },
      zd = () => {
        let dd, Od;
        return {
          promise: new Promise(((md, Wd) => {
            dd = md, Od = Wd
          })),
          resolve: dd,
          reject: Od
        }
      },
      cd = (dd, Od) => {
        for (let md = dd.length - 1; md >= 0; md--)
          if (Od(dd[md])) return md;
        return -1
      },
      jd = dd => {
        throw new Error(`Unexpected value: ${dd}`)
      },
      Dd = (dd, Od, md) => {
        const Wd = dd.getUint8(Od),
          Fd = dd.getUint8(Od + 1),
          Rd = dd.getUint8(Od + 2);
        return md ? Wd | Fd << 8 | Rd << 16 : Wd << 16 | Fd << 8 | Rd
      },
      ed = (dd, Od, md, Wd) => {
        md >>>= 0, md &= 16777215, Wd ? (dd.setUint8(Od, 255 & md), dd.setUint8(Od + 1, md >>> 8 & 255), dd.setUint8(Od + 2, md >>> 16 & 255)) : (dd.setUint8(Od, md >>> 16 & 255), dd.setUint8(Od + 1, md >>> 8 & 255), dd.setUint8(Od + 2, 255 & md))
      },
      Id = (dd, Od, md, Wd) => {
        (md = Cd(md, -8388608, 8388607)) < 0 && (md = md + 16777216 & 16777215), ed(dd, Od, md, Wd)
      },
      ld = (dd, Od, md, Wd) => {
        Wd ? (dd.setUint32(Od + 0, md, !0), dd.setInt32(Od + 4, Math.floor(md / 2 ** 32), !0)) : (dd.setInt32(Od + 0, Math.floor(md / 2 ** 32), !0), dd.setUint32(Od + 4, md, !0))
      },
      Cd = (dd, Od, md) => Math.max(Od, Math.min(md, dd)),
      Zd = (dd, Od, md) => dd + (Od - dd) * md,
      kd = (dd, Od) => dd - Math.floor(dd / Od) * Od,
      fd = "und",
      Md = (dd, Od) => Math.round(dd / Od) * Od,
      dO = (dd, Od) => Math.round(dd * Od) / Od,
      OO = (dd, Od) => Math.floor(dd * Od) / Od,
      mO = dd => {
        let Od = 0;
        for (; dd;) Od++, dd >>= 1;
        return Od
      },
      WO = dd => {
        let Od = 0;
        for (; 0 !== dd;) dd &= dd - 1, Od++;
        return Od
      },
      FO = /^[a-z]{3}$/,
      RO = dd => FO.test(dd),
      XO = 1e6 * (1 + Number.EPSILON),
      KO = (dd, Od) => {
        const md = dd < 0 ? -1 : 1;
        let Wd = 0,
          Fd = 1,
          Rd = 1,
          Xd = 0,
          Kd = dd = Math.abs(dd);
        for (;;) {
          const dd = Math.floor(Kd),
            hd = dd * Rd + Wd,
            vd = dd * Xd + Fd;
          if (vd > Od) return {
            num: md * Rd,
            den: Xd
          };
          if (Wd = Rd, Fd = Xd, Rd = hd, Xd = vd, Kd = 1 / (Kd - dd), !isFinite(Kd)) break
        }
        return {
          num: md * Rd,
          den: Xd
        }
      };
    class hO {
      constructor() {
        this.currentPromise = Promise.resolve()
      }
      call(dd) {
        return this.currentPromise = this.currentPromise.then(dd)
      }
    }
    let vO = null;
    const QO = () => null !== vO ? vO : vO = !("undefined" === typeof navigator || !(navigator.vendor?.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
    let tO = null;
    const oO = () => null !== tO ? tO : tO = "undefined" !== typeof navigator && navigator.userAgent?.includes("Firefox");
    let NO = null;
    const qO = () => null !== NO ? NO : NO = !("undefined" === typeof navigator || !navigator.vendor?.includes("Google Inc") && !/Chrome/.test(navigator.userAgent));
    const HO = dd => "undefined" === typeof globalThis.isSecureContext || globalThis.isSecureContext ? `${dd} is not available in this environment.` : `${dd} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`,
      yO = dd => dd instanceof DOMException && "QuotaExceededError" === dd.name && /reclaimed/i.test(dd.message),
      bO = (async () => {})().constructor,
      TO = dd => dd instanceof bO || dd instanceof Promise || "function" === typeof dd?.then,
      pO = (dd, Od) => -1 !== dd ? dd : Od,
      YO = function*(dd) {
        for (const Od in dd) {
          const md = dd[Od];
          void 0 !== md && (yield {
            key: Od,
            value: md
          })
        }
      },
      gO = dd => {
        switch (dd.toLowerCase()) {
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
      wO = dd => {
        let Od = "";
        for (let md = 0; md < dd.length; md++) Od += String.fromCharCode(dd[md]);
        return btoa(Od)
      },
      aO = (dd, Od) => {
        if (dd.length !== Od.length) return !1;
        for (let md = 0; md < dd.length; md++)
          if (dd[md] !== Od[md]) return !1;
        return !0
      },
      EO = () => {
        Symbol.dispose ??= Symbol("Symbol.dispose")
      },
      JO = dd => "number" === typeof dd && !Number.isNaN(dd),
      UO = (dd, Od) => {
        if (Od.includes("://")) return Od;
        if (dd.includes("://")) {
          const Od = dd.indexOf("?"); - 1 !== Od && (dd = dd.slice(0, Od))
        }
        let md;
        if (Od.startsWith("/")) {
          const Wd = dd.indexOf("://");
          if (-1 === Wd) md = Od;
          else {
            const Fd = dd.indexOf("/", Wd + 3);
            md = -1 === Fd ? dd + Od : dd.slice(0, Fd) + Od
          }
        } else {
          const Wd = dd.lastIndexOf("/");
          md = -1 === Wd ? Od : dd.slice(0, Wd + 1) + Od
        }
        let Wd = "";
        const Fd = md.indexOf("://");
        if (-1 !== Fd) {
          const dd = md.indexOf("/", Fd + 3); - 1 !== dd && (Wd = md.slice(0, dd), md = md.slice(dd))
        }
        const Rd = md.split("/"),
          Xd = [];
        for (const Kd of Rd) ".." === Kd ? Xd.pop() : "." !== Kd && Xd.push(Kd);
        return Wd + Xd.join("/")
      },
      xO = (dd, Od) => {
        let md = -1,
          Wd = 1 / 0;
        for (let Fd = 0; Fd < dd.length; Fd++) {
          const Rd = Od(dd[Fd]);
          Rd < Wd && (Wd = Rd, md = Fd)
        }
        return md
      },
      BO = (dd, Od) => {
        let md = -1,
          Wd = -1 / 0;
        for (let Fd = 0; Fd < dd.length; Fd++) {
          const Rd = Od(dd[Fd]);
          Rd > Wd && (Wd = Rd, md = Fd)
        }
        return md
      },
      SO = dd => {
        Wd(Number.isInteger(dd.num)), Wd(Number.isInteger(dd.den)), Wd(0 !== dd.den);
        let Od = Math.abs(dd.num),
          md = Math.abs(dd.den);
        for (; 0 !== md;) {
          const dd = Od % md;
          Od = md, md = dd
        }
        const Fd = Od || 1;
        return {
          num: dd.num / Fd,
          den: dd.den / Fd
        }
      },
      sO = (dd, Od) => {
        if ("object" !== typeof dd || !dd) throw new TypeError(`${Od} must be an object.`);
        if (!Number.isInteger(dd.left) || dd.left < 0) throw new TypeError(`${Od}.left must be a non-negative integer.`);
        if (!Number.isInteger(dd.top) || dd.top < 0) throw new TypeError(`${Od}.top must be a non-negative integer.`);
        if (!Number.isInteger(dd.width) || dd.width < 0) throw new TypeError(`${Od}.width must be a non-negative integer.`);
        if (!Number.isInteger(dd.height) || dd.height < 0) throw new TypeError(`${Od}.height must be a non-negative integer.`)
      };
    let uO, VO = 1;
    const iO = new Map,
      AO = new Map,
      rO = () => "undefined" === typeof window,
      GO = () => {
        const dd = new Map,
          Od = new Map;
        self.onmessage = md => {
          const Wd = md.data;
          switch (Wd.type) {
            case "set-timeout": {
              const Od = setTimeout((() => {
                dd.delete(Wd.timerId), self.postMessage({
                  type: "fire",
                  timerId: Wd.timerId
                })
              }), Wd.delay);
              dd.set(Wd.timerId, Od)
            }
            break;
            case "set-interval": {
              const dd = setInterval((() => {
                self.postMessage({
                  type: "fire",
                  timerId: Wd.timerId
                })
              }), Wd.delay);
              Od.set(Wd.timerId, dd)
            }
            break;
            case "clear-timeout": {
              const Od = dd.get(Wd.timerId);
              void 0 !== Od && (clearTimeout(Od), dd.delete(Wd.timerId))
            }
            break;
            case "clear-interval": {
              const dd = Od.get(Wd.timerId);
              void 0 !== dd && (clearInterval(dd), Od.delete(Wd.timerId))
            }
          }
        }
      },
      nO = () => {
        if (uO) return uO;
        const dd = `(${GO.toString()})();`,
          Od = URL.createObjectURL(new Blob([dd], {
            type: "text/javascript"
          }));
        return uO = new Worker(Od), URL.revokeObjectURL(Od), uO.onmessage = dd => {
          const Od = dd.data,
            md = iO.get(Od.timerId);
          if (md) return iO.delete(Od.timerId), void md();
          const Wd = AO.get(Od.timerId);
          Wd && Wd()
        }, uO
      },
      LO = (dd, Od) => {
        if (rO()) return {
          id: setInterval(dd, Od)
        };
        const md = VO++;
        return AO.set(md, (() => {
          dd()
        })), nO().postMessage({
          type: "set-interval",
          timerId: md,
          delay: Od
        }), {
          id: md
        }
      },
      PO = dd => {
        rO() ? clearInterval(dd.id) : (Wd("number" === typeof dd.id), AO.delete(dd.id), nO().postMessage({
          type: "clear-interval",
          timerId: dd.id
        }))
      },
      zO = dd => new Promise((Od => setTimeout(Od, dd))),
      cO = dd => Array.isArray(dd) ? dd : [dd];
    class jO {
      constructor() {
        this._listeners = new Map
      }
      on(dd, Od, md) {
        this._listeners.has(dd) || this._listeners.set(dd, new Set);
        const Wd = {
          Ot: Od,
          once: md?.once ?? !1
        };
        return this._listeners.get(dd).add(Wd), () => {
          this._listeners.get(dd)?.delete(Wd)
        }
      }
      _emit() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        const [Wd, Fd] = Od, Rd = this._listeners.get(Wd);
        if (Rd)
          for (const Kd of Rd) {
            try {
              Kd.Ot(Fd)
            } catch (Xd) {
              console.error(Xd)
            }
            Kd.once && Rd.delete(Kd)
          }
      }
    }
    const DO = dd => null !== dd && "object" === typeof dd && Object.getPrototypeOf(dd) === Object.prototype && Object.values(dd).every((dd => "string" === typeof dd))
  },
  41498: (dd, Od, md) => {
    md.d(Od, {
      b: () => Lm,
      d: () => Pm,
      h: () => nm,
      l: () => rm,
      n: () => cm
    });
    var Wd = md(41503),
      Fd = md(41513);
    var Rd;
    ! function(dd) {
      dd[dd.FrameCount = 1] = "FrameCount", dd[dd.FileSize = 2] = "FileSize", dd[dd.Toc = 4] = "Toc"
    }(Rd || (Rd = {}));
    var Xd = md(41526),
      Kd = md(41487);
    class hd {
      constructor(dd, Od, md, Wd, Fd) {
        this.bytes = dd, this.view = Od, this.offset = md, this.start = Wd, this.end = Fd, this.bufferPos = Wd - md
      }
      static tempFromBytes(dd) {
        return new hd(dd, (0, Kd.sd)(dd), 0, 0, dd.length)
      }
      get length() {
        return this.end - this.start
      }
      get filePos() {
        return this.offset + this.bufferPos
      }
      set filePos(dd) {
        this.bufferPos = dd - this.offset
      }
      get remainingLength() {
        return Math.max(this.end - this.filePos, 0)
      }
      skip(dd) {
        this.bufferPos += dd
      }
      slice(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.end - dd;
        if (dd < this.start || dd + Od > this.end) throw new RangeError("Slicing outside of original slice.");
        return new hd(this.bytes, this.view, this.offset, dd, dd + Od)
      }
    }
    const vd = (dd, Od) => {
        if (dd.filePos < dd.start || dd.filePos + Od > dd.end) throw new RangeError(`Tried reading [${dd.filePos}, ${dd.filePos+Od}), but slice is [${dd.start}, ${dd.end}). This is likely an internal error, please report it alongside the file that caused it.`)
      },
      Qd = (dd, Od) => {
        vd(dd, Od);
        const md = dd.bytes.subarray(dd.bufferPos, dd.bufferPos + Od);
        return dd.bufferPos += Od, md
      };
    var td, od;
    ! function(dd) {
      dd[dd.Unsynchronisation = 128] = "Unsynchronisation", dd[dd.ExtendedHeader = 64] = "ExtendedHeader", dd[dd.ExperimentalIndicator = 32] = "ExperimentalIndicator", dd[dd.Footer = 16] = "Footer"
    }(td || (td = {})),
    function(dd) {
      dd[dd.ISO_8859_1 = 0] = "ISO_8859_1", dd[dd.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", dd[dd.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", dd[dd.UTF_8 = 3] = "UTF_8"
    }(od || (od = {}));
    var Nd = md(41491);
    class qd {
      constructor(dd) {
        this.mutex = new Kd.c, this.trackTimestampInfo = new WeakMap, this.output = dd
      }
      onTrackClose(dd) {}
      validateTimestamp(dd, Od, md) {
        let Wd = this.trackTimestampInfo.get(dd);
        if (Wd) {
          if (md && (Wd.maxTimestampBeforeLastKeyPacket = Wd.maxTimestamp), null !== Wd.maxTimestampBeforeLastKeyPacket && Od < Wd.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${Od}s, but largest timestamp is ${Wd.maxTimestampBeforeLastKeyPacket}s.`);
          Wd.maxTimestamp = Math.max(Wd.maxTimestamp, Od)
        } else {
          if (!md) throw new Error("First packet must be a key packet.");
          Wd = {
            maxTimestamp: Od,
            maxTimestampBeforeLastKeyPacket: null
          }, this.trackTimestampInfo.set(dd, Wd)
        }
      }
    }
    var Hd = md(41522),
      yd = md(41506);
    var bd = md(41537),
      Td = md(41534);
    class pd {
      constructor(dd) {
        this.writer = dd, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap
      }
      writeU32(dd) {
        this.helperView.setUint32(0, dd, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeU64(dd) {
        this.helperView.setUint32(0, Math.floor(dd / 2 ** 32), !1), this.helperView.setUint32(4, dd, !1), this.writer.write(this.helper.subarray(0, 8))
      }
      writeAscii(dd) {
        for (let Od = 0; Od < dd.length; Od++) this.helperView.setUint8(Od % 8, dd.charCodeAt(Od)), Od % 8 === 7 && this.writer.write(this.helper);
        dd.length % 8 !== 0 && this.writer.write(this.helper.subarray(0, dd.length % 8))
      }
      writeBox(dd) {
        if (this.offsets.set(dd, this.writer.getPos()), dd.contents && !dd.children) this.writeBoxHeader(dd, dd.size ?? dd.contents.byteLength + 8), this.writer.write(dd.contents);
        else {
          const Od = this.writer.getPos();
          if (this.writeBoxHeader(dd, 0), dd.contents && this.writer.write(dd.contents), dd.children)
            for (const Fd of dd.children) Fd && this.writeBox(Fd);
          const md = this.writer.getPos(),
            Wd = dd.size ?? md - Od;
          this.writer.seek(Od), this.writeBoxHeader(dd, Wd), this.writer.seek(md)
        }
      }
      writeBoxHeader(dd, Od) {
        this.writeU32(dd.largeSize ? 1 : Od), this.writeAscii(dd.type), dd.largeSize && this.writeU64(Od)
      }
      measureBoxHeader(dd) {
        return 8 + (dd.largeSize ? 8 : 0)
      }
      patchBox(dd) {
        const Od = this.offsets.get(dd);
        (0, Kd.M)(void 0 !== Od);
        const md = this.writer.getPos();
        this.writer.seek(Od), this.writeBox(dd), this.writer.seek(md)
      }
      measureBox(dd) {
        if (dd.contents && !dd.children) {
          return this.measureBoxHeader(dd) + dd.contents.byteLength
        } {
          let Od = this.measureBoxHeader(dd);
          if (dd.contents && (Od += dd.contents.byteLength), dd.children)
            for (const md of dd.children) md && (Od += this.measureBox(md));
          return Od
        }
      }
    }
    const Yd = new Uint8Array(8),
      gd = new DataView(Yd.buffer),
      wd = dd => [(dd % 256 + 256) % 256],
      Ed = dd => (gd.setUint16(0, dd, !1), [Yd[0], Yd[1]]),
      Jd = dd => (gd.setInt16(0, dd, !1), [Yd[0], Yd[1]]),
      Ud = dd => (gd.setUint32(0, dd, !1), [Yd[1], Yd[2], Yd[3]]),
      xd = dd => (gd.setUint32(0, dd, !1), [Yd[0], Yd[1], Yd[2], Yd[3]]),
      Bd = dd => (gd.setInt32(0, dd, !1), [Yd[0], Yd[1], Yd[2], Yd[3]]),
      Sd = dd => (gd.setUint32(0, Math.floor(dd / 2 ** 32), !1), gd.setUint32(4, dd, !1), [Yd[0], Yd[1], Yd[2], Yd[3], Yd[4], Yd[5], Yd[6], Yd[7]]),
      sd = dd => (gd.setInt32(0, Math.floor(dd / 2 ** 32), !1), gd.setUint32(4, dd, !1), [Yd[0], Yd[1], Yd[2], Yd[3], Yd[4], Yd[5], Yd[6], Yd[7]]),
      ud = dd => (gd.setInt16(0, 256 * dd, !1), [Yd[0], Yd[1]]),
      Vd = dd => (gd.setInt32(0, 65536 * dd, !1), [Yd[0], Yd[1], Yd[2], Yd[3]]),
      Ad = dd => (gd.setInt32(0, 2 ** 30 * dd, !1), [Yd[0], Yd[1], Yd[2], Yd[3]]),
      rd = (dd, Od) => {
        const md = [];
        let Wd = dd;
        do {
          let dd = 127 & Wd;
          Wd >>= 7, md.length > 0 && (dd |= 128), md.push(dd), void 0 !== Od && Od--
        } while (Wd > 0 || Od);
        return md.reverse()
      },
      Gd = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = Array(dd.length).fill(null).map(((Od, md) => dd.charCodeAt(md)));
        return Od && md.push(0), md
      },
      nd = dd => [Vd(dd[0]), Vd(dd[1]), Ad(dd[2]), Vd(dd[3]), Vd(dd[4]), Ad(dd[5]), Vd(dd[6]), Vd(dd[7]), Ad(dd[8])],
      Ld = (dd, Od, md) => ({
        type: dd,
        contents: Od && new Uint8Array(Od.flat(10)),
        children: md
      }),
      Pd = (dd, Od, md, Wd, Fd) => Ld(dd, [wd(Od), Ud(md), Wd ?? []], Fd),
      zd = () => Ld("styp", [Gd("iso5"), xd(0), Gd("iso5"), Gd("iso6"), Gd("mp41"), Gd("cmfc"), Gd("dash")]),
      cd = (dd, Od) => {
        const md = Math.max(0, dd.minWrittenTimestamp);
        let Wd = Math.max(0, dd.maxWrittenEndTimestamp - md);
        return Number.isFinite(Wd) || (Wd = 0), Pd("sidx", 1, 0, [xd(1), xd(Nm), Sd(Hm(md, Nm)), Sd(0), Ed(0), Ed(1), xd(2147483647 & Od), xd(Hm(Wd, Nm)), xd(0)])
      },
      jd = dd => ({
        type: "mdat",
        largeSize: dd
      }),
      Dd = dd => Ld("moov", void 0, [ed(dd.creationTime, dd.trackDatas), ...dd.trackDatas.map((Od => Id(Od, dd.creationTime))), dd.isFragmented ? VO(dd.trackDatas) : null, lO(dd)]),
      ed = (dd, Od) => {
        const md = Math.max(0, ...Od.map((dd => Math.max(0, Hm(ym(dd), Nm) + Hm(dd.startTimestampOffset ?? 0, Nm))))),
          Wd = Math.max(0, ...Od.map((dd => dd.track.id))) + 1,
          Fd = !(0, Kd._b)(dd) || !(0, Kd._b)(md),
          Rd = Fd ? Sd : xd;
        return Pd("mvhd", +Fd, 0, [Rd(dd), Rd(dd), xd(Nm), Rd(md), Vd(1), ud(1), Array(10).fill(0), nd(Kd.m), Array(24).fill(0), xd(Wd)])
      },
      Id = (dd, Od) => {
        const md = qm(dd),
          Wd = null !== dd.startTimestampOffset && 0 !== dd.startTimestampOffset;
        return Ld("trak", void 0, [ld(dd, Od), Wd ? Cd(dd) : null, Zd(dd, Od), void 0 !== md.name ? Ld("udta", void 0, [Ld("name", [...Kd.od.encode(md.name)])]) : null])
      },
      ld = (dd, Od) => {
        const md = Math.max(0, Hm(ym(dd), Nm) + Hm(dd.startTimestampOffset ?? 0, Nm)),
          Wd = !(0, Kd._b)(Od) || !(0, Kd._b)(md),
          Fd = Wd ? Sd : xd;
        let Rd;
        if ("video" === dd.type && dd.track.metadata.transformationMatrix) Rd = dd.track.metadata.transformationMatrix;
        else if ("video" === dd.type) {
          const {
            rotation: Od,
            flip: md
          } = dd.track.metadata, Wd = (0, Kd.rc)((0, Kd.Mc)(Od ?? 0), (0, Kd.Tc)(md ? -1 : 1, 1));
          Rd = (0, Kd._)(Wd, dd.info.width, dd.info.height)
        } else Rd = Kd.m;
        let Xd = 2;
        !1 !== dd.track.metadata.disposition?.default && (Xd |= 1);
        const hd = "video" === dd.type ? 0 : "audio" === dd.type ? 1 : "subtitle" === dd.type ? 2 : (0, Kd.J)(dd);
        return Pd("tkhd", +Wd, Xd, [Fd(Od), Fd(Od), xd(dd.track.id), xd(0), Fd(md), Array(8).fill(0), Ed(0), Ed(hd), ud("audio" === dd.type ? 1 : 0), Ed(0), nd(Rd), Vd("video" === dd.type ? dd.info.width : 0), Vd("video" === dd.type ? dd.info.height : 0)])
      },
      Cd = dd => {
        const Od = dd.startTimestampOffset;
        if ((0, Kd.M)(null !== Od), Od > 0) {
          const md = Hm(Od, Nm),
            Wd = Hm(ym(dd), Nm),
            Fd = !(0, Kd._b)(md) || !(0, Kd._b)(Wd),
            Rd = Fd ? Sd : xd,
            Xd = Fd ? sd : Bd;
          return Ld("edts", void 0, [Pd("elst", Fd ? 1 : 0, 0, [xd(2), Rd(md), Xd(-1), Vd(1), Rd(Wd), Xd(0), Vd(1)])])
        } {
          const md = Hm(-Od, dd.timescale),
            Wd = Math.max(0, Hm(ym(dd), Nm) + Hm(Od, Nm)),
            Fd = !(0, Kd.Qb)(md) || !(0, Kd._b)(Wd),
            Rd = Fd ? Sd : xd,
            Xd = Fd ? sd : Bd;
          return Ld("edts", void 0, [Pd("elst", Fd ? 1 : 0, 0, [xd(1), Rd(Wd), Xd(md), Vd(1)])])
        }
      },
      Zd = (dd, Od) => Ld("mdia", void 0, [kd(dd, Od), dO(!0, fd[dd.type], Md[dd.type]), OO(dd)]),
      kd = (dd, Od) => {
        const md = Hm(ym(dd), dd.timescale),
          Wd = !(0, Kd._b)(Od) || !(0, Kd._b)(md),
          Fd = Wd ? Sd : xd;
        return Pd("mdhd", +Wd, 0, [Fd(Od), Fd(Od), xd(dd.timescale), Fd(md), Ed(hm(dd.track.metadata.languageCode ?? Kd.z)), Ed(0)])
      },
      fd = {
        video: "vide",
        audio: "soun",
        subtitle: "text"
      },
      Md = {
        video: "MediabunnyVideoHandler",
        audio: "MediabunnySoundHandler",
        subtitle: "MediabunnyTextHandler"
      },
      dO = function(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "\0\0\0\0";
        return Pd("hdlr", 0, 0, [dd ? Gd("mhlr") : xd(0), Gd(Od), Gd(Wd), xd(0), xd(0), Gd(md, !0)])
      },
      OO = dd => Ld("minf", void 0, [mO[dd.type](), WO(), XO(dd)]),
      mO = {
        video: () => Pd("vmhd", 0, 1, [Ed(0), Ed(0), Ed(0), Ed(0)]),
        audio: () => Pd("smhd", 0, 0, [Ed(0), Ed(0)]),
        subtitle: () => Pd("nmhd", 0, 0)
      },
      WO = () => Ld("dinf", void 0, [FO()]),
      FO = () => Pd("dref", 0, 0, [xd(1)], [RO()]),
      RO = () => Pd("url ", 0, 1),
      XO = dd => {
        const Od = dd.compositionTimeOffsetTable.length > 1 || dd.compositionTimeOffsetTable.some((dd => 0 !== dd.sampleCompositionTimeOffset));
        return Ld("stbl", void 0, [KO(dd), JO(dd), Od ? sO(dd) : null, Od ? uO(dd) : null, xO(dd), BO(dd), SO(dd), UO(dd)])
      },
      KO = dd => {
        let Od;
        if ("video" === dd.type) Od = hO(mm(dd.track.source._codec, dd.info.decoderConfig.codec), dd);
        else if ("audio" === dd.type) {
          const md = Fm(dd.track.source._codec, dd.info.decoderConfig.codec, dd.muxer.isQuickTime);
          (0, Kd.M)(md), Od = NO(md, dd)
        } else "subtitle" === dd.type && (Od = EO(Xm[dd.track.source._codec], dd));
        return (0, Kd.M)(Od), Pd("stsd", 0, 0, [xd(1)], [Od])
      },
      hO = (dd, Od) => Ld(dd, [Array(6).fill(0), Ed(1), Ed(0), Ed(0), Array(12).fill(0), Ed(Od.info.width), Ed(Od.info.height), xd(4718592), xd(4718592), xd(0), Ed(1), wd(Td.c.length), Gd(Td.c), Array(31 - Td.c.length).fill(0), Ed(Od.info.hasAlphaChannel ? 32 : 24), Jd(65535)], [Wm[Od.track.source._codec]?.(Od) ?? null, QO(Od), (0, Kd.ib)(Od.info.decoderConfig.colorSpace) ? null : tO(Od), vO(Od)]),
      vO = dd => 0 === dd.avgBitrate && 0 === dd.maxBitrate ? null : Ld("btrt", [xd(0), xd(dd.maxBitrate), xd(dd.avgBitrate)]),
      QO = dd => dd.info.pixelAspectRatio.num === dd.info.pixelAspectRatio.den ? null : Ld("pasp", [xd(dd.info.pixelAspectRatio.num), xd(dd.info.pixelAspectRatio.den)]),
      tO = dd => {
        const Od = dd.info.decoderConfig.colorSpace;
        return Ld("colr", [Gd(dd.muxer.isQuickTime ? "nclc" : "nclx"), Ed(null != Od?.primaries ? Kd.g[Od.primaries] : 2), Ed(null != Od?.transfer ? Kd.t[Od.transfer] : 2), Ed(null != Od?.matrix ? Kd.p[Od.matrix] : 2), dd.muxer.isQuickTime ? [] : wd((Od?.fullRange ? 1 : 0) << 7)])
      },
      oO = dd => {
        if (!dd.info.decoderConfig) return null;
        const Od = dd.info.decoderConfig,
          md = Od.codec.split("."),
          Wd = Number(md[1]),
          Fd = Number(md[2]),
          Rd = (Number(md[3]) << 4) + ((md[4] ? Number(md[4]) : 1) << 1) + (md[8] ? Number(md[8]) : Number(Od.colorSpace?.fullRange ?? 0)),
          Xd = md[5] ? Number(md[5]) : Od.colorSpace?.primaries ? Kd.g[Od.colorSpace.primaries] : 1,
          hd = md[6] ? Number(md[6]) : Od.colorSpace?.transfer ? Kd.t[Od.colorSpace.transfer] : 1,
          vd = md[7] ? Number(md[7]) : Od.colorSpace?.matrix ? Kd.p[Od.colorSpace.matrix] : 1;
        return Pd("vpcC", 1, 0, [wd(Wd), wd(Fd), wd(Rd), wd(Xd), wd(hd), wd(vd), Ed(0)])
      },
      NO = (dd, Od) => {
        let md, Wd = 0,
          Rd = 16;
        const Xd = Fd.m.includes(Od.track.source._codec);
        if (Xd) {
          const dd = Od.track.source._codec,
            {
              sampleSize: md
            } = (0, Fd.S)(dd);
          Rd = 8 * md, Rd > 16 && (Wd = 1)
        }
        if (Od.muxer.isQuickTime && (Wd = 1), 0 === Wd) md = [Array(6).fill(0), Ed(1), Ed(Wd), Ed(0), xd(0), Ed(Od.info.numberOfChannels), Ed(Rd), Ed(0), Ed(0), Ed(Od.info.sampleRate < 65536 ? Od.info.sampleRate : 0), Ed(0)];
        else {
          const dd = Xd ? 0 : -2;
          md = [Array(6).fill(0), Ed(1), Ed(Wd), Ed(0), xd(0), Ed(Od.info.numberOfChannels), Ed(Math.min(Rd, 16)), Jd(dd), Ed(0), Ed(Od.info.sampleRate < 65536 ? Od.info.sampleRate : 0), Ed(0), Xd ? [xd(1), xd(Rd / 8), xd(Od.info.numberOfChannels * Rd / 8)] : [xd(0), xd(0), xd(0)], xd(2)]
        }
        return Ld(dd, md, [Rm(Od.track.source._codec, Od.muxer.isQuickTime)?.(Od) ?? null, vO(Od)])
      },
      qO = dd => {
        let Od;
        switch (dd.track.source._codec) {
          case "aac":
            Od = 64;
            break;
          case "mp3":
            Od = 107;
            break;
          case "vorbis":
            Od = 221;
            break;
          default:
            throw new Error(`Unhandled audio codec: ${dd.track.source._codec}`)
        }
        let md = [...wd(Od), ...wd(21), ...Ud(0), ...xd(dd.maxBitrate), ...xd(dd.avgBitrate)];
        if (dd.info.decoderConfig.description) {
          const Od = (0, Kd.vd)(dd.info.decoderConfig.description);
          md = [...md, ...wd(5), ...rd(Od.byteLength), ...Od]
        }
        return md = [...Ed(1), ...wd(0), ...wd(4), ...rd(md.length), ...md, ...wd(6), ...wd(1), ...wd(2)], md = [...wd(3), ...rd(md.length), ...md], Pd("esds", 0, 0, md)
      },
      HO = dd => Ld("wave", void 0, [yO(dd), bO(dd), Ld("\0\0\0\0")]),
      yO = dd => Ld("frma", [Gd(Fm(dd.track.source._codec, dd.info.decoderConfig.codec, dd.muxer.isQuickTime))]),
      bO = dd => {
        const {
          littleEndian: Od
        } = (0, Fd.S)(dd.track.source._codec);
        return Ld("enda", [Ed(+Od)])
      },
      TO = dd => {
        let Od = dd.info.numberOfChannels,
          md = 3840,
          Wd = dd.info.sampleRate,
          Fd = 0,
          Rd = 0,
          Xd = new Uint8Array(0);
        const hd = dd.info.decoderConfig?.description;
        if (hd) {
          (0, Kd.M)(hd.byteLength >= 18);
          const dd = (0, Kd.vd)(hd),
            vd = (0, Hd.hb)(dd);
          Od = vd.outputChannelCount, md = vd.preSkip, Wd = vd.inputSampleRate, Fd = vd.outputGain, Rd = vd.channelMappingFamily, vd.channelMappingTable && (Xd = vd.channelMappingTable)
        }
        return Ld("dOps", [wd(0), wd(Od), Ed(md), xd(Wd), Jd(Fd), wd(Rd), ...Xd])
      },
      pO = dd => {
        const Od = dd.info.decoderConfig?.description;
        (0, Kd.M)(Od);
        const md = (0, Kd.vd)(Od);
        return Pd("dfLa", 0, 0, [...md.subarray(4)])
      },
      YO = dd => {
        const {
          littleEndian: Od,
          sampleSize: md
        } = (0, Fd.S)(dd.track.source._codec);
        return Pd("pcmC", 0, 0, [wd(+Od), wd(8 * md)])
      },
      gO = dd => {
        (0, Kd.M)(dd.info.primingPacket);
        const Od = (0, Hd.Z)(dd.info.primingPacket.data);
        if (!Od) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
        const md = new Uint8Array(3),
          Wd = new yd.c(md);
        return Wd.writeBits(2, Od.fscod), Wd.writeBits(5, Od.bsid), Wd.writeBits(3, Od.bsmod), Wd.writeBits(3, Od.acmod), Wd.writeBits(1, Od.lfeon), Wd.writeBits(5, Od.bitRateCode), Wd.writeBits(5, 0), Ld("dac3", [...md])
      },
      wO = dd => {
        (0, Kd.M)(dd.info.primingPacket);
        const Od = (0, Hd.cb)(dd.info.primingPacket.data);
        if (!Od) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
        let md = 16;
        for (const Xd of Od.substreams) md += 23, Xd.numDepSub > 0 ? md += 9 : md += 1;
        const Wd = Math.ceil(md / 8),
          Fd = new Uint8Array(Wd),
          Rd = new yd.c(Fd);
        Rd.writeBits(13, Od.dataRate), Rd.writeBits(3, Od.substreams.length - 1);
        for (const Xd of Od.substreams) Rd.writeBits(2, Xd.fscod), Rd.writeBits(5, Xd.bsid), Rd.writeBits(1, 0), Rd.writeBits(1, 0), Rd.writeBits(3, Xd.bsmod), Rd.writeBits(3, Xd.acmod), Rd.writeBits(1, Xd.lfeon), Rd.writeBits(3, 0), Rd.writeBits(4, Xd.numDepSub), Xd.numDepSub > 0 ? Rd.writeBits(9, Xd.chanLoc) : Rd.writeBits(1, 0);
        return Ld("dec3", [...Fd])
      },
      aO = dd => {
        (0, Kd.M)(dd.info.primingPacket);
        const Od = (0, Hd._)(dd.info.primingPacket.data);
        if (!Od) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
        return Ld("ddts", [...(0, Hd.q)(Od)])
      },
      EO = (dd, Od) => Ld(dd, [Array(6).fill(0), Ed(1)], [Km[Od.track.source._codec](Od), vO(Od)]),
      JO = dd => Pd("stts", 0, 0, [xd(dd.timeToSampleTable.length), dd.timeToSampleTable.map((dd => [xd(dd.sampleCount), xd(dd.sampleDelta)]))]),
      UO = dd => {
        if (dd.samples.every((dd => "key" === dd.type))) return null;
        const Od = [...dd.samples.entries()].filter((dd => {
          let [, Od] = dd;
          return "key" === Od.type
        }));
        return Pd("stss", 0, 0, [xd(Od.length), Od.map((dd => {
          let [Od] = dd;
          return xd(Od + 1)
        }))])
      },
      xO = dd => Pd("stsc", 0, 0, [xd(dd.compactlyCodedChunkTable.length), dd.compactlyCodedChunkTable.map((dd => [xd(dd.firstChunk), xd(dd.samplesPerChunk), xd(1)]))]),
      BO = dd => {
        if ("audio" === dd.type && dd.info.requiresPcmTransformation) {
          const {
            sampleSize: Od
          } = (0, Fd.S)(dd.track.source._codec);
          return Pd("stsz", 0, 0, [xd(Od * dd.info.numberOfChannels), xd(dd.samples.reduce(((Od, md) => Od + Hm(md.duration, dd.timescale)), 0))])
        }
        return Pd("stsz", 0, 0, [xd(0), xd(dd.samples.length), dd.samples.map((dd => xd(dd.size)))])
      },
      SO = dd => dd.finalizedChunks.length > 0 && (0, Kd.jc)(dd.finalizedChunks).offset >= 2 ** 32 ? Pd("co64", 0, 0, [xd(dd.finalizedChunks.length), dd.finalizedChunks.map((dd => Sd(dd.offset)))]) : Pd("stco", 0, 0, [xd(dd.finalizedChunks.length), dd.finalizedChunks.map((dd => xd(dd.offset)))]),
      sO = dd => Pd("ctts", 1, 0, [xd(dd.compositionTimeOffsetTable.length), dd.compositionTimeOffsetTable.map((dd => [xd(dd.sampleCount), Bd(dd.sampleCompositionTimeOffset)]))]),
      uO = dd => {
        let Od = 1 / 0,
          md = -1 / 0,
          Wd = 1 / 0,
          Fd = -1 / 0;
        (0, Kd.M)(dd.compositionTimeOffsetTable.length > 0), (0, Kd.M)(dd.samples.length > 0);
        for (let Xd = 0; Xd < dd.compositionTimeOffsetTable.length; Xd++) {
          const Wd = dd.compositionTimeOffsetTable[Xd];
          Od = Math.min(Od, Wd.sampleCompositionTimeOffset), md = Math.max(md, Wd.sampleCompositionTimeOffset)
        }
        for (let Xd = 0; Xd < dd.samples.length; Xd++) {
          const Od = dd.samples[Xd];
          Wd = Math.min(Wd, Hm(Od.timestamp, dd.timescale)), Fd = Math.max(Fd, Hm(Od.timestamp + Od.duration, dd.timescale))
        }
        const Rd = Math.max(-Od, 0);
        return Fd >= 2 ** 31 ? null : Pd("cslg", 0, 0, [Bd(Rd), Bd(Od), Bd(md), Bd(Wd), Bd(Fd)])
      },
      VO = dd => Ld("mvex", void 0, dd.map(iO)),
      iO = dd => Pd("trex", 0, 0, [xd(dd.track.id), xd(1), xd(0), xd(0), xd(0)]),
      AO = (dd, Od) => Ld("moof", void 0, [rO(dd), ...Od.map(nO)]),
      rO = dd => Pd("mfhd", 0, 0, [xd(dd)]),
      GO = dd => {
        let Od = 0,
          md = 0;
        const Wd = "delta" === dd.type;
        return md |= +Wd, Od |= Wd ? 1 : 2, Od << 24 | md << 16
      },
      nO = dd => Ld("traf", void 0, [LO(dd), PO(dd), zO(dd)]),
      LO = dd => {
        (0, Kd.M)(dd.currentChunk);
        let Od = 0;
        Od |= 8, Od |= 16, Od |= 32, Od |= 131072;
        const md = dd.currentChunk.samples[1] ?? dd.currentChunk.samples[0],
          Wd = {
            duration: md.timescaleUnitsToNextSample,
            size: md.size,
            flags: GO(md)
          };
        return Pd("tfhd", 0, 131128, [xd(dd.track.id), xd(Wd.duration), xd(Wd.size), xd(Wd.flags)])
      },
      PO = dd => ((0, Kd.M)(dd.currentChunk), Pd("tfdt", 1, 0, [Sd(Hm(dd.currentChunk.startTimestamp, dd.timescale))])),
      zO = dd => {
        (0, Kd.M)(dd.currentChunk);
        const Od = dd.currentChunk.samples.map((dd => dd.timescaleUnitsToNextSample)),
          md = dd.currentChunk.samples.map((dd => dd.size)),
          Wd = dd.currentChunk.samples.map(GO),
          Fd = dd.currentChunk.samples.map((Od => Hm(Od.timestamp - Od.decodeTimestamp, dd.timescale))),
          Rd = new Set(Od),
          Xd = new Set(md),
          hd = new Set(Wd),
          vd = new Set(Fd),
          Qd = 2 === hd.size && Wd[0] !== Wd[1],
          td = Rd.size > 1,
          od = Xd.size > 1,
          Nd = !Qd && hd.size > 1,
          qd = vd.size > 1 || [...vd].some((dd => 0 !== dd));
        let Hd = 0;
        return Hd |= 1, Hd |= 4 * +Qd, Hd |= 256 * +td, Hd |= 512 * +od, Hd |= 1024 * +Nd, Hd |= 2048 * +qd, Pd("trun", 1, Hd, [xd(dd.currentChunk.samples.length), xd(dd.currentChunk.offset - dd.currentChunk.moofOffset || 0), Qd ? xd(Wd[0]) : [], dd.currentChunk.samples.map(((dd, Rd) => [td ? xd(Od[Rd]) : [], od ? xd(md[Rd]) : [], Nd ? xd(Wd[Rd]) : [], qd ? Bd(Fd[Rd]) : []]))])
      },
      cO = dd => Pd("tfra", 1, 0, [xd(dd.track.id), xd(63), xd(dd.finalizedChunks.length), dd.finalizedChunks.map((Od => [Sd(Hm(Od.samples[0].timestamp, dd.timescale)), Sd(Od.moofOffset), xd(Od.trafIndex + 1), xd(1), xd(1)]))]),
      jO = () => Pd("mfro", 0, 0, [xd(0)]),
      DO = () => Ld("vtte"),
      eO = (dd, Od, md, Wd, Fd) => Ld("vttc", void 0, [null !== Fd ? Ld("vsid", [Bd(Fd)]) : null, null !== md ? Ld("iden", [...Kd.od.encode(md)]) : null, null !== Od ? Ld("ctim", [...Kd.od.encode((0, bd.e)(Od))]) : null, null !== Wd ? Ld("sttg", [...Kd.od.encode(Wd)]) : null, Ld("payl", [...Kd.od.encode(dd)])]),
      IO = dd => Ld("vtta", [...Kd.od.encode(dd)]),
      lO = dd => {
        const Od = [],
          md = dd.format._options.metadataFormat ?? "auto",
          Wd = dd.output._metadataTags;
        if ("mdir" === md || "auto" === md && !dd.isQuickTime) {
          const dd = MO(Wd);
          dd && Od.push(dd)
        } else if ("mdta" === md) {
          const dd = dm(Wd);
          dd && Od.push(dd)
        } else("udta" === md || "auto" === md && dd.isQuickTime) && CO(Od, dd.output._metadataTags);
        return 0 === Od.length ? null : Ld("udta", void 0, Od)
      },
      CO = (dd, Od) => {
        for (const {
            key: md,
            value: Wd
          }
          of(0, Kd.fc)(Od)) switch (md) {
          case "title":
            dd.push(ZO("\xa9nam", Wd));
            break;
          case "description":
            dd.push(ZO("\xa9des", Wd));
            break;
          case "artist":
            dd.push(ZO("\xa9ART", Wd));
            break;
          case "album":
            dd.push(ZO("\xa9alb", Wd));
            break;
          case "albumArtist":
            dd.push(ZO("albr", Wd));
            break;
          case "genre":
            dd.push(ZO("\xa9gen", Wd));
            break;
          case "date":
            dd.push(ZO("\xa9day", Wd.toISOString().slice(0, 10)));
            break;
          case "comment":
            dd.push(ZO("\xa9cmt", Wd));
            break;
          case "lyrics":
            dd.push(ZO("\xa9lyr", Wd));
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
            (0, Kd.J)(md)
        }
        if (Od.raw)
          for (const md in Od.raw) {
            const Wd = Od.raw[md];
            null == Wd || 4 !== md.length || dd.some((dd => dd.type === md)) || ("string" === typeof Wd ? dd.push(ZO(md, Wd)) : Wd instanceof Uint8Array && dd.push(Ld(md, Array.from(Wd))))
          }
      },
      ZO = (dd, Od) => {
        const md = Kd.od.encode(Od);
        return Ld(dd, [Ed(md.length), Ed(hm("und")), Array.from(md)])
      },
      kO = {
        "image/jpeg": 13,
        "image/png": 14,
        "image/bmp": 27
      },
      fO = (dd, Od) => {
        const md = [];
        for (const {
            key: Wd,
            value: Fd
          }
          of(0, Kd.fc)(dd)) switch (Wd) {
          case "title":
            md.push({
              key: Od ? "title" : "\xa9nam",
              value: Om(Fd)
            });
            break;
          case "description":
            md.push({
              key: Od ? "description" : "\xa9des",
              value: Om(Fd)
            });
            break;
          case "artist":
            md.push({
              key: Od ? "artist" : "\xa9ART",
              value: Om(Fd)
            });
            break;
          case "album":
            md.push({
              key: Od ? "album" : "\xa9alb",
              value: Om(Fd)
            });
            break;
          case "albumArtist":
            md.push({
              key: Od ? "album_artist" : "aART",
              value: Om(Fd)
            });
            break;
          case "comment":
            md.push({
              key: Od ? "comment" : "\xa9cmt",
              value: Om(Fd)
            });
            break;
          case "genre":
            md.push({
              key: Od ? "genre" : "\xa9gen",
              value: Om(Fd)
            });
            break;
          case "beatsPerMinute":
            Od || md.push({
              key: "tmpo",
              value: Ld("data", [xd(21), xd(0), Ed(Fd)])
            });
            break;
          case "lyrics":
            md.push({
              key: Od ? "lyrics" : "\xa9lyr",
              value: Om(Fd)
            });
            break;
          case "date":
            md.push({
              key: Od ? "date" : "\xa9day",
              value: Om(Fd.toISOString().slice(0, 10))
            });
            break;
          case "images":
            for (const dd of Fd) "coverFront" === dd.kind && md.push({
              key: "covr",
              value: Ld("data", [xd(kO[dd.mimeType] ?? 0), xd(0), Array.from(dd.data)])
            });
            break;
          case "trackNumber":
            if (Od) {
              const Od = void 0 !== dd.tracksTotal ? `${Fd}/${dd.tracksTotal}` : Fd.toString();
              md.push({
                key: "track",
                value: Om(Od)
              })
            } else md.push({
              key: "trkn",
              value: Ld("data", [xd(0), xd(0), Ed(0), Ed(Fd), Ed(dd.tracksTotal ?? 0), Ed(0)])
            });
            break;
          case "discNumber":
            Od || md.push({
              key: "disc",
              value: Ld("data", [xd(0), xd(0), Ed(0), Ed(Fd), Ed(dd.discsTotal ?? 0), Ed(0)])
            });
            break;
          case "tracksTotal":
          case "discsTotal":
          case "raw":
            break;
          default:
            (0, Kd.J)(Wd)
        }
        if (dd.raw)
          for (const Wd in dd.raw) {
            const Fd = dd.raw[Wd];
            null == Fd || !Od && 4 !== Wd.length || md.some((dd => dd.key === Wd)) || ("string" === typeof Fd ? md.push({
              key: Wd,
              value: Om(Fd)
            }) : Fd instanceof Uint8Array ? md.push({
              key: Wd,
              value: Ld("data", [xd(0), xd(0), Array.from(Fd)])
            }) : Fd instanceof Nd.h && md.push({
              key: Wd,
              value: Ld("data", [xd(kO[Fd.mimeType] ?? 0), xd(0), Array.from(Fd.data)])
            }))
          }
        return md
      },
      MO = dd => {
        const Od = fO(dd, !1);
        return 0 === Od.length ? null : Pd("meta", 0, 0, void 0, [dO(!1, "mdir", "", "appl"), Ld("ilst", void 0, Od.map((dd => Ld(dd.key, void 0, [dd.value]))))])
      },
      dm = dd => {
        const Od = fO(dd, !0);
        return 0 === Od.length ? null : Ld("meta", void 0, [dO(!1, "mdta", ""), Pd("keys", 0, 0, [xd(Od.length)], Od.map((dd => Ld("mdta", [...Kd.od.encode(dd.key)])))), Ld("ilst", void 0, Od.map(((dd, Od) => {
          const md = String.fromCharCode(...xd(Od + 1));
          return Ld(md, void 0, [dd.value])
        })))])
      },
      Om = dd => Ld("data", [xd(1), xd(0), ...Kd.od.encode(dd)]),
      mm = (dd, Od) => {
        switch (dd) {
          case "avc":
            return Od.startsWith("avc3") ? "avc3" : "avc1";
          case "hevc":
            return "hvc1";
          case "vp8":
            return "vp08";
          case "vp9":
            return "vp09";
          case "av1":
            return "av01";
          case "prores":
            return Od
        }
      },
      Wm = {
        avc: dd => dd.info.decoderConfig && Ld("avcC", [...(0, Kd.vd)(dd.info.decoderConfig.description)]),
        hevc: dd => dd.info.decoderConfig && Ld("hvcC", [...(0, Kd.vd)(dd.info.decoderConfig.description)]),
        vp8: oO,
        vp9: oO,
        av1: dd => Ld("av1C", (0, Fd.E)(dd.info.decoderConfig.codec)),
        prores: null
      },
      Fm = (dd, Od, md) => {
        switch (dd) {
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
            return Od
        }
        if (md) switch (dd) {
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
        } else switch (dd) {
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
      Rm = (dd, Od) => {
        switch (dd) {
          case "aac":
          case "mp3":
          case "vorbis":
            return qO;
          case "opus":
            return TO;
          case "flac":
            return pO;
          case "ac3":
            return gO;
          case "eac3":
            return wO;
          case "dts":
            return aO
        }
        if (Od) switch (dd) {
          case "pcm-s24":
          case "pcm-s24be":
          case "pcm-s32":
          case "pcm-s32be":
          case "pcm-f32":
          case "pcm-f32be":
          case "pcm-f64":
          case "pcm-f64be":
            return HO
        } else switch (dd) {
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
            return YO
        }
        return null
      },
      Xm = {
        webvtt: "wvtt"
      },
      Km = {
        webvtt: dd => Ld("vttC", [...Kd.od.encode(dd.info.config.description)])
      },
      hm = dd => {
        (0, Kd.M)(3 === dd.length);
        let Od = 0;
        for (let md = 0; md < 3; md++) Od <<= 5, Od += dd.charCodeAt(md) - 96;
        return Od
      };
    var Qm = md(41540),
      tm = md(41544);
    const om = dd => {
        const Od = dd.filePos,
          md = Qd(dd, 9),
          Wd = new yd.c(md);
        if (4095 !== Wd.readBits(12)) return null;
        Wd.skipBits(1);
        if (0 !== Wd.readBits(2)) return null;
        const Fd = Wd.readBits(1),
          Rd = Wd.readBits(2) + 1,
          Xd = Wd.readBits(4);
        if (15 === Xd) return null;
        Wd.skipBits(1);
        const Kd = Wd.readBits(3);
        if (0 === Kd) throw new Error("ADTS frames with channel configuration 0 are not supported.");
        Wd.skipBits(1), Wd.skipBits(1), Wd.skipBits(1), Wd.skipBits(1);
        const hd = Wd.readBits(13);
        Wd.skipBits(11);
        const vd = Wd.readBits(2) + 1;
        if (1 !== vd) throw new Error("ADTS frames with more than one AAC frame are not supported.");
        let td = null;
        return 1 === Fd ? dd.filePos -= 2 : td = Wd.readBits(16), {
          objectType: Rd,
          samplingFrequencyIndex: Xd,
          channelConfiguration: Kd,
          frameLength: hd,
          numberOfAacFrames: vd,
          crcCheck: td,
          startPos: Od
        }
      },
      Nm = 57600,
      qm = dd => {
        const Od = {},
          md = dd.track;
        return void 0 !== md.metadata.name && (Od.name = md.metadata.name), Od
      },
      Hm = function(dd, Od) {
        const md = dd * Od;
        return !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Math.round(md) : md
      },
      ym = dd => {
        if (0 === dd.samples.length) return 0;
        let Od = 1 / 0,
          md = -1 / 0;
        for (let Wd = 0; Wd < dd.samples.length; Wd++) {
          const Fd = dd.samples[Wd];
          Fd.timestamp < Od && (Od = Fd.timestamp), Fd.timestamp + Fd.duration > md && (md = Fd.timestamp + Fd.duration)
        }
        return Od === 1 / 0 ? 0 : md - Od
      };
    class bm extends qd {
      constructor(dd, Od) {
        super(dd), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new tm.c, this.auxWriter = new Qm.d(this.auxTarget, !1), this.auxBoxWriter = new pd(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = (0, Kd.Ac)(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = Od, this.formatOptions = {
          ...Od._options
        }, this.isQuickTime = Od instanceof Pm, this.isCmaf = Od instanceof Lm, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (Od instanceof Lm ? 1 / 0 : 1), this.auxWriter.start()
      }
      async start() {
        const dd = await this.mutex.acquire();
        if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((dd => void 0 !== this.formatOptions.fastStart ? "fragmented" === this.formatOptions.fastStart : dd instanceof tm.c)), this.boxWriter = new pd(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof tm.c && "in-memory"), this.isFragmented = "fragmented" === this.fastStart), this.isCmaf) {
          if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
          const dd = await this.output._getInitTarget(),
            Od = new Qm.d(dd, !0);
          Od.start(), this.initWriter = Od, this.initBoxWriter = new pd(Od)
        }
        const Od = this.output.tracks.some((dd => dd.isVideoTrack() && "avc" === dd.source._codec));
        {
          const dd = this.initBoxWriter ?? this.boxWriter;
          if ((0, Kd.M)(dd), this.formatOptions.onFtyp && dd.writer.startTrackingWrites(), dd.writeBox((dd => {
              const Od = 512;
              return dd.isQuickTime ? Ld("ftyp", [Gd("qt  "), xd(Od), Gd("qt  ")]) : dd.fragmented ? dd.cmaf ? Ld("ftyp", [Gd("iso5"), xd(Od), Gd("iso5"), Gd("iso6"), Gd("mp41"), Gd("cmfc"), Gd("dash")]) : Ld("ftyp", [Gd("iso5"), xd(Od), Gd("iso5"), Gd("iso6"), Gd("mp41")]) : Ld("ftyp", [Gd("isom"), xd(Od), Gd("isom"), dd.holdsAvc ? Gd("avc1") : [], Gd("mp41")])
            })({
              isQuickTime: this.isQuickTime,
              holdsAvc: Od,
              fragmented: this.isFragmented,
              cmaf: this.isCmaf
            })), this.formatOptions.onFtyp) {
            const {
              data: Od,
              start: md
            } = dd.writer.stopTrackingWrites();
            this.formatOptions.onFtyp(Od, md)
          }
          this.ftypSize = dd.writer.getPos(), this.isCmaf && await this.initWriter.flush()
        }
        if ("in-memory" === this.fastStart);
        else if ("reserve" === this.fastStart) {
          for (const md of this.output.tracks)
            if (void 0 === md.metadata.maximumPacketCount) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")
        } else this.isFragmented || ((0, Kd.M)(this.writer), (0, Kd.M)(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = jd(!0), this.boxWriter.writeBox(this.mdat));
        await (this.writer?.flush());
        for (const md of this.output.tracks) md.isVideoTrack() && md.metadata.decoderConfig ? this.getVideoTrackData(md, md.metadata.primingPacket ?? null, {
          decoderConfig: md.metadata.decoderConfig
        }) : md.isAudioTrack() && md.metadata.decoderConfig && this.getAudioTrackData(md, md.metadata.primingPacket ?? null, {
          decoderConfig: md.metadata.decoderConfig
        });
        dd()
      }
      allTracksAreKnown() {
        for (const dd of this.output.tracks)
          if (!dd.source._closed && !this.trackDatas.some((Od => Od.track === dd))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const dd = this.trackDatas.map((dd => {
          if ("video" === dd.type) return dd.info.decoderConfig.codec;
          if ("audio" === dd.type) return dd.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [dd.track.source._codec]
        }));
        return (dd => {
          let Od = (dd.hasVideo ? "video/" : dd.hasAudio ? "audio/" : "application/") + (dd.isQuickTime ? "quicktime" : "mp4");
          dd.codecStrings.length > 0 && (Od += `; codecs="${[...new Set(dd.codecStrings)].join(", ")}"`);
          return Od
        })({
          isQuickTime: this.isQuickTime,
          hasVideo: this.trackDatas.some((dd => "video" === dd.type)),
          hasAudio: this.trackDatas.some((dd => "audio" === dd.type)),
          codecStrings: dd
        })
      }
      getVideoTrackData(dd, Od, md) {
        const Wd = this.trackDatas.find((Od => Od.track === dd));
        if (Wd) return Wd;
        (0, Fd.X)(md, dd.source._codec), (0, Kd.M)(md), (0, Kd.M)(md.decoderConfig);
        const Rd = {
          ...md.decoderConfig
        };
        (0, Kd.M)(void 0 !== Rd.codedWidth), (0, Kd.M)(void 0 !== Rd.codedHeight);
        let Xd = !1;
        if ("avc" !== dd.source._codec || Rd.description) {
          if ("hevc" === dd.source._codec && !Rd.description) {
            if (!Od) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
            const dd = (0, Hd.L)(Od.data);
            if (!dd) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
            Rd.description = (0, Hd.mb)(dd), Xd = !0
          }
        } else {
          if (!Od) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
          const dd = (0, Hd.H)(Od.data);
          if (!dd) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
          Rd.description = (0, Hd.kb)(dd), Xd = !0
        }
        const hd = (0, Kd.lb)(1 / (dd.metadata.frameRate ?? Nm), 1e6).den,
          vd = Rd.displayAspectWidth,
          Qd = Rd.displayAspectHeight,
          td = void 0 === vd || void 0 === Qd ? {
            num: 1,
            den: 1
          } : (0, Kd.id)({
            num: vd * Rd.codedHeight,
            den: Qd * Rd.codedWidth
          }),
          od = "ap4h" === Rd.codec || "ap4x" === Rd.codec,
          Nd = {
            muxer: this,
            track: dd,
            type: "video",
            info: {
              width: Rd.codedWidth,
              height: Rd.codedHeight,
              pixelAspectRatio: td,
              decoderConfig: Rd,
              requiresAnnexBTransformation: Xd,
              hasAlphaChannel: od
            },
            timescale: hd,
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
            avgBitrate: dd.source._nominalBitrate ?? dd.metadata.averageBitrate ?? 0,
            maxBitrate: dd.source._nominalBitrate ?? dd.metadata.bitrate ?? 0
          };
        return this.trackDatas.push(Nd), this.trackDatas.sort(((dd, Od) => dd.track.id - Od.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Nd
      }
      getAudioTrackData(dd, Od, md) {
        const Rd = this.trackDatas.find((Od => Od.track === dd));
        if (Rd) return Rd;
        (0, Fd.U)(md, dd.source._codec), (0, Kd.M)(md), (0, Kd.M)(md.decoderConfig);
        const Xd = {
          ...md.decoderConfig
        };
        let vd = !1;
        if ("aac" === dd.source._codec && !Xd.description) {
          if (!Od) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const dd = om(hd.tempFromBytes(Od.data));
          if (!dd) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const md = Wd.g[dd.samplingFrequencyIndex],
            Fd = Wd.c[dd.channelConfiguration];
          if (void 0 === md || void 0 === Fd) throw new Error("Invalid ADTS frame header.");
          Xd.description = (0, Wd.k)({
            objectType: dd.objectType,
            outputSampleRate: md,
            outputNumberOfChannels: Fd
          }), vd = !0
        }
        if (!Od) {
          if ("ac3" === dd.source._codec || "eac3" === dd.source._codec) throw new Error("AC-3/E-AC-3 require a priming packet.");
          if ("dts" === dd.source._codec) throw new Error("DTS requires a priming packet.")
        }
        const Qd = {
          muxer: this,
          track: dd,
          type: "audio",
          info: {
            numberOfChannels: md.decoderConfig.numberOfChannels,
            sampleRate: md.decoderConfig.sampleRate,
            decoderConfig: Xd,
            requiresPcmTransformation: !this.isFragmented && Fd.m.includes(dd.source._codec),
            expectedNextPcmPacketTimestamp: null,
            requiresAdtsStripping: vd,
            primingPacket: Od
          },
          timescale: Xd.sampleRate,
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
          avgBitrate: dd.source._nominalBitrate ?? dd.metadata.averageBitrate ?? 0,
          maxBitrate: dd.source._nominalBitrate ?? dd.metadata.bitrate ?? 0
        };
        return this.trackDatas.push(Qd), this.trackDatas.sort(((dd, Od) => dd.track.id - Od.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Qd
      }
      getSubtitleTrackData(dd, Od) {
        const md = this.trackDatas.find((Od => Od.track === dd));
        if (md) return md;
        (0, Fd.V)(Od), (0, Kd.M)(Od), (0, Kd.M)(Od.config);
        const Wd = {
          muxer: this,
          track: dd,
          type: "subtitle",
          info: {
            config: Od.config
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
          avgBitrate: dd.source._nominalBitrate ?? dd.metadata.averageBitrate ?? 0,
          maxBitrate: dd.source._nominalBitrate ?? dd.metadata.bitrate ?? 0,
          lastCueEndTimestamp: null,
          cueQueue: [],
          nextSourceId: 0,
          cueToSourceId: new WeakMap
        };
        return this.trackDatas.push(Wd), this.trackDatas.sort(((dd, Od) => dd.track.id - Od.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Wd
      }
      async addEncodedVideoPacket(dd, Od, md) {
        const Wd = await this.mutex.acquire();
        try {
          const Wd = this.getVideoTrackData(dd, Od, md);
          let Fd = Od.data;
          if (Wd.info.requiresAnnexBTransformation) {
            const dd = [...(0, Hd.S)(Fd)].map((dd => Fd.subarray(dd.offset, dd.offset + dd.length)));
            if (0 === dd.length) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
            Fd = (0, Hd.v)(dd, 4)
          }
          this.validateTimestamp(Wd.track, Od.timestamp, "key" === Od.type);
          const Rd = this.createSampleForTrack(Wd, Fd, Od.timestamp, Od.duration, Od.type);
          await this.registerSample(Wd, Rd)
        } finally {
          Wd()
        }
      }
      async addEncodedAudioPacket(dd, Od, md) {
        const Wd = await this.mutex.acquire();
        try {
          const Wd = this.getAudioTrackData(dd, Od, md);
          let Rd = Od.data;
          if (Wd.info.requiresAdtsStripping) {
            const dd = om(hd.tempFromBytes(Rd));
            if (!dd) throw new Error("Expected ADTS frame, didn't get one.");
            const Od = null === dd.crcCheck ? 7 : 9;
            Rd = Rd.subarray(Od)
          }
          this.validateTimestamp(Wd.track, Od.timestamp, "key" === Od.type);
          let Xd = Od.timestamp,
            Kd = Od.duration;
          if (Wd.info.requiresPcmTransformation) {
            const dd = (0, Fd.S)(Wd.info.decoderConfig.codec).sampleSize * Wd.info.numberOfChannels;
            if (Kd = Rd.byteLength / dd / Wd.info.sampleRate, null !== Wd.info.expectedNextPcmPacketTimestamp) {
              const dd = Xd - Wd.info.expectedNextPcmPacketTimestamp;
              if (dd < .01) Xd = Wd.info.expectedNextPcmPacketTimestamp;
              else {
                const Od = await this.padWithSilence(Wd, Wd.info.expectedNextPcmPacketTimestamp, dd);
                Xd = Wd.info.expectedNextPcmPacketTimestamp + Od
              }
            }
            Wd.info.expectedNextPcmPacketTimestamp = Xd + Kd
          }
          const vd = this.createSampleForTrack(Wd, Rd, Xd, Kd, Od.type);
          await this.registerSample(Wd, vd)
        } finally {
          Wd()
        }
      }
      async padWithSilence(dd, Od, md) {
        const Wd = Hm(md, dd.timescale);
        if (md = Wd / dd.timescale, Wd > 0) {
          const {
            sampleSize: Rd,
            silentValue: Xd
          } = (0, Fd.S)(dd.info.decoderConfig.codec), Kd = Wd * dd.info.numberOfChannels, hd = new Uint8Array(Rd * Kd).fill(Xd), vd = this.createSampleForTrack(dd, new Uint8Array(hd.buffer), Od, md, "key");
          await this.registerSample(dd, vd)
        }
        return md
      }
      async addSubtitleCue(dd, Od, md) {
        const Wd = await this.mutex.acquire();
        try {
          const Wd = this.getSubtitleTrackData(dd, md);
          this.validateTimestamp(Wd.track, Od.timestamp, !0), "webvtt" === dd.source._codec && (Wd.cueQueue.push(Od), await this.processWebVTTCues(Wd, Od.timestamp))
        } finally {
          Wd()
        }
      }
      async processWebVTTCues(dd, Od) {
        for (; dd.cueQueue.length > 0;) {
          dd.lastCueEndTimestamp ??= Math.min(0, dd.cueQueue[0].timestamp);
          const md = new Set([]);
          for (const vd of dd.cueQueue)(0, Kd.M)(vd.timestamp <= Od), (0, Kd.M)(dd.lastCueEndTimestamp <= vd.timestamp + vd.duration), md.add(Math.max(vd.timestamp, dd.lastCueEndTimestamp)), md.add(vd.timestamp + vd.duration);
          const Wd = [...md].sort(((dd, Od) => dd - Od)),
            Fd = Wd[0],
            Rd = Wd[1] ?? Fd;
          if (Od < Rd) break;
          if (dd.lastCueEndTimestamp < Fd) {
            this.auxWriter.seek(0);
            const Od = DO();
            this.auxBoxWriter.writeBox(Od);
            const md = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
              Wd = this.createSampleForTrack(dd, md, dd.lastCueEndTimestamp, Fd - dd.lastCueEndTimestamp, "key");
            await this.registerSample(dd, Wd), dd.lastCueEndTimestamp = Fd
          }
          this.auxWriter.seek(0);
          for (let Od = 0; Od < dd.cueQueue.length; Od++) {
            const md = dd.cueQueue[Od];
            if (md.timestamp >= Rd) break;
            bd.h.lastIndex = 0;
            const Wd = bd.h.test(md.text),
              Xd = md.timestamp + md.duration;
            let Kd = dd.cueToSourceId.get(md);
            if (void 0 === Kd && Rd < Xd && (Kd = dd.nextSourceId++, dd.cueToSourceId.set(md, Kd)), md.notes) {
              const dd = IO(md.notes);
              this.auxBoxWriter.writeBox(dd)
            }
            const hd = eO(md.text, Wd ? Fd : null, md.identifier ?? null, md.settings ?? null, Kd ?? null);
            this.auxBoxWriter.writeBox(hd), Xd === Rd && dd.cueQueue.splice(Od--, 1)
          }
          const Xd = this.auxTarget._getSlice(0, this.auxWriter.getPos()),
            hd = this.createSampleForTrack(dd, Xd, Fd, Rd - Fd, "key");
          await this.registerSample(dd, hd), dd.lastCueEndTimestamp = Rd
        }
      }
      createSampleForTrack(dd, Od, md, Wd, Fd) {
        return {
          timestamp: md,
          decodeTimestamp: md,
          duration: Wd,
          data: Od,
          size: Od.byteLength,
          type: Fd,
          timescaleUnitsToNextSample: Hm(Wd, dd.timescale)
        }
      }
      processTimestamps(dd, Od) {
        if (0 === dd.timestampProcessingQueue.length) return;
        if ("audio" === dd.type && dd.info.requiresPcmTransformation) {
          (0, Kd.M)(!this.isFragmented), dd.startTimestampOffset ??= dd.timestampProcessingQueue[0].timestamp;
          let Od = 0;
          for (let md = 0; md < dd.timestampProcessingQueue.length; md++) {
            const Wd = dd.timestampProcessingQueue[md];
            Od += Hm(Wd.duration, dd.timescale)
          }
          if (0 === dd.timeToSampleTable.length) dd.timeToSampleTable.push({
            sampleCount: Od,
            sampleDelta: 1
          });
          else {
            (0, Kd.jc)(dd.timeToSampleTable).sampleCount += Od
          }
          return void(dd.timestampProcessingQueue.length = 0)
        }
        const md = dd.timestampProcessingQueue.map((dd => dd.timestamp)).sort(((dd, Od) => dd - Od));
        this.isFragmented ? dd.startTimestampOffset ??= Math.min(md[0], 0) : dd.startTimestampOffset ??= md[0];
        for (let Wd = 0; Wd < dd.timestampProcessingQueue.length; Wd++) {
          const Od = dd.timestampProcessingQueue[Wd];
          Od.decodeTimestamp = md[Wd];
          const Fd = Hm(Od.timestamp - Od.decodeTimestamp, dd.timescale),
            Rd = Hm(Od.duration, dd.timescale);
          if (null !== dd.lastTimescaleUnits) {
            (0, Kd.M)(dd.lastSample);
            const md = Hm(Od.decodeTimestamp, dd.timescale, !1),
              Wd = Math.round(md - dd.lastTimescaleUnits);
            if ((0, Kd.M)(Wd >= 0), dd.lastTimescaleUnits += Wd, dd.lastSample.timescaleUnitsToNextSample = Wd, !this.isFragmented) {
              let Od = (0, Kd.jc)(dd.timeToSampleTable);
              if ((0, Kd.M)(Od), 1 === Od.sampleCount) {
                Od.sampleDelta = Wd;
                const md = dd.timeToSampleTable[dd.timeToSampleTable.length - 2];
                md && md.sampleDelta === Wd && (md.sampleCount++, dd.timeToSampleTable.pop(), Od = md)
              } else Od.sampleDelta !== Wd && (Od.sampleCount--, dd.timeToSampleTable.push(Od = {
                sampleCount: 1,
                sampleDelta: Wd
              }));
              Od.sampleDelta === Rd ? Od.sampleCount++ : dd.timeToSampleTable.push({
                sampleCount: 1,
                sampleDelta: Rd
              });
              const md = (0, Kd.jc)(dd.compositionTimeOffsetTable);
              (0, Kd.M)(md), md.sampleCompositionTimeOffset === Fd ? md.sampleCount++ : dd.compositionTimeOffsetTable.push({
                sampleCount: 1,
                sampleCompositionTimeOffset: Fd
              })
            }
          } else dd.lastTimescaleUnits = Hm(Od.decodeTimestamp, dd.timescale, !1), this.isFragmented || (dd.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: Rd
          }), dd.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: Fd
          }));
          dd.lastSample = Od
        }
        if (dd.timestampProcessingQueue.length = 0, (0, Kd.M)(dd.lastSample), (0, Kd.M)(null !== dd.lastTimescaleUnits), void 0 !== Od && 0 === dd.lastSample.timescaleUnitsToNextSample) {
          (0, Kd.M)("key" === Od.type);
          const md = Hm(Od.timestamp, dd.timescale, !1),
            Wd = Math.round(md - dd.lastTimescaleUnits);
          dd.lastSample.timescaleUnitsToNextSample = Wd
        }
      }
      async registerSample(dd, Od) {
        "key" === Od.type && this.processTimestamps(dd, Od), dd.timestampProcessingQueue.push(Od), this.isFragmented ? (dd.sampleQueue.push(Od), await this.interleaveSamples()) : "reserve" === this.fastStart ? await this.registerSampleFastStartReserve(dd, Od) : await this.addSampleToTrack(dd, Od)
      }
      async addSampleToTrack(dd, Od) {
        if (!this.isFragmented && (dd.samples.push(Od), "reserve" === this.fastStart)) {
          const Od = dd.track.metadata.maximumPacketCount;
          if ((0, Kd.M)(void 0 !== Od), dd.samples.length > Od) throw new Error(`Track #${dd.track.id} has already reached the maximum packet count (${Od}). Either add less packets or increase the maximum packet count.`)
        }
        let md = !1;
        if (dd.currentChunk) {
          dd.currentChunk.startTimestamp = Math.min(dd.currentChunk.startTimestamp, Od.timestamp);
          const Wd = Od.timestamp - dd.currentChunk.startTimestamp;
          if (this.isFragmented) {
            const Fd = this.trackDatas.every((md => {
              if (dd === md) return "key" === Od.type;
              const Wd = md.sampleQueue[0];
              return Wd ? "key" === Wd.type : md.closed
            }));
            Wd >= this.minimumFragmentDuration && Fd && Od.timestamp > this.maxWrittenTimestamp && (md = !0, await this.finalizeFragment())
          } else md = Wd >= .5
        } else md = !0;
        md && (dd.currentChunk && await this.finalizeCurrentChunk(dd), dd.currentChunk = {
          startTimestamp: Od.timestamp,
          samples: [],
          offset: null,
          moofOffset: null,
          trafIndex: null
        }), (0, Kd.M)(dd.currentChunk), dd.currentChunk.samples.push(Od), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, Od.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, Od.timestamp + Od.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, Od.timestamp))
      }
      async finalizeCurrentChunk(dd) {
        if ((0, Kd.M)(!this.isFragmented), (0, Kd.M)(this.writer), !dd.currentChunk) return;
        dd.finalizedChunks.push(dd.currentChunk), this.finalizedChunks.push(dd.currentChunk);
        let Od = dd.currentChunk.samples.length;
        if ("audio" === dd.type && dd.info.requiresPcmTransformation && (Od = dd.currentChunk.samples.reduce(((Od, md) => Od + Hm(md.duration, dd.timescale)), 0)), 0 !== dd.compactlyCodedChunkTable.length && (0, Kd.jc)(dd.compactlyCodedChunkTable).samplesPerChunk === Od || dd.compactlyCodedChunkTable.push({
            firstChunk: dd.finalizedChunks.length,
            samplesPerChunk: Od
          }), "in-memory" !== this.fastStart) {
          dd.currentChunk.offset = this.writer.getPos();
          for (const Od of dd.currentChunk.samples)(0, Kd.M)(Od.data), this.writer.write(Od.data), Od.data = null;
          await this.writer.flush()
        } else dd.currentChunk.offset = 0
      }
      async interleaveSamples() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if ((0, Kd.M)(this.isFragmented), dd || this.allTracksAreKnown()) dd: for (;;) {
          let Od = null,
            md = 1 / 0;
          for (const Fd of this.trackDatas) {
            if (!dd && 0 === Fd.sampleQueue.length && !Fd.closed) break dd;
            Fd.sampleQueue.length > 0 && Fd.sampleQueue[0].timestamp < md && (Od = Fd, md = Fd.sampleQueue[0].timestamp)
          }
          if (!Od) break;
          const Wd = Od.sampleQueue.shift();
          await this.addSampleToTrack(Od, Wd)
        }
      }
      async finalizeFragment() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isCmaf;
        if ((0, Kd.M)(this.isFragmented), !this.wroteFragmentedHeader) {
          this.wroteFragmentedHeader = !0;
          const dd = this.initBoxWriter ?? this.boxWriter;
          (0, Kd.M)(dd), this.formatOptions.onMoov && dd.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
          const Od = Dd(this);
          if (dd.writeBox(Od), this.formatOptions.onMoov) {
            const {
              data: Od,
              start: md
            } = dd.writer.stopTrackingWrites();
            this.formatOptions.onMoov(Od, md)
          }
          if (this.isCmaf) {
            (0, Kd.M)(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new pd(this.writer);
            const dd = this.boxWriter.measureBox(zd()),
              Od = this.boxWriter.measureBox(cd(this, 0));
            this.segmentHeaderSize = dd + Od, this.writer.seek(this.segmentHeaderSize)
          }
        }(0, Kd.M)(this.writer), (0, Kd.M)(this.boxWriter);
        const Od = this.trackDatas.filter((dd => dd.currentChunk));
        if (0 === Od.length) return void(dd && await this.writer.flush());
        const md = this.nextFragmentNumber++,
          Wd = AO(md, Od),
          Fd = this.writer.getPos(),
          Rd = Fd + this.boxWriter.measureBox(Wd);
        let Xd = Rd + 8,
          hd = 1 / 0;
        for (let Nd = 0; Nd < Od.length; Nd++) {
          const dd = Od[Nd];
          (0, Kd.M)(dd.currentChunk), (0, Kd.M)(null !== dd.startTimestampOffset), dd.currentChunk.offset = Xd, dd.currentChunk.moofOffset = Fd, dd.currentChunk.trafIndex = Nd, dd.currentChunk.startTimestamp -= dd.startTimestampOffset;
          for (const Od of dd.currentChunk.samples) Xd += Od.size, Od.timestamp -= dd.startTimestampOffset, Od.decodeTimestamp -= dd.startTimestampOffset;
          hd = Math.min(hd, dd.currentChunk.startTimestamp)
        }
        const vd = Xd - Rd,
          Qd = vd >= 2 ** 32;
        if (Qd)
          for (const Kd of Od) Kd.currentChunk.offset += 8;
        this.formatOptions.onMoof && this.writer.startTrackingWrites();
        const td = AO(md, Od);
        if (this.boxWriter.writeBox(td), this.formatOptions.onMoof) {
          const {
            data: dd,
            start: Od
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMoof(dd, Od, hd)
        }(0, Kd.M)(this.writer.getPos() === Rd), this.formatOptions.onMdat && this.writer.startTrackingWrites();
        const od = jd(Qd);
        od.size = vd, this.boxWriter.writeBox(od), this.writer.seek(Rd + (Qd ? 16 : 8));
        for (const Kd of Od)
          for (const dd of Kd.currentChunk.samples) this.writer.write(dd.data), dd.data = null;
        if (this.formatOptions.onMdat) {
          const {
            data: dd,
            start: Od
          } = this.writer.stopTrackingWrites();
          this.formatOptions.onMdat(dd, Od)
        }
        for (const Kd of Od) Kd.finalizedChunks.push(Kd.currentChunk), this.finalizedChunks.push(Kd.currentChunk), Kd.currentChunk = null;
        dd && await this.writer.flush()
      }
      async registerSampleFastStartReserve(dd, Od) {
        this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(dd, Od)) : dd.sampleQueue.push(Od)
      }
      async createFastStartReserveMdat() {
        (0, Kd.M)(this.writer), (0, Kd.M)(this.boxWriter), this.ensureOneEnabledTrack();
        const dd = Dd(this),
          Od = this.boxWriter.measureBox(dd) + this.computeSampleTableSizeUpperBound() + 4096;
        (0, Kd.M)(null !== this.ftypSize), this.writer.seek(this.ftypSize + Od), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = jd(!0), this.boxWriter.writeBox(this.mdat);
        for (const md of this.trackDatas) {
          for (const dd of md.sampleQueue) await this.addSampleToTrack(md, dd);
          md.sampleQueue.length = 0
        }
      }
      computeSampleTableSizeUpperBound() {
        (0, Kd.M)("reserve" === this.fastStart);
        let dd = 0;
        for (const Od of this.trackDatas) {
          const md = Od.track.metadata.maximumPacketCount;
          (0, Kd.M)(void 0 !== md), dd += 8 * Math.ceil(2 / 3 * md), dd += 4 * md, dd += 8 * Math.ceil(2 / 3 * md), dd += 12 * Math.ceil(2 / 3 * md), dd += 4 * md, dd += 8 * md
        }
        return dd
      }
      async onTrackClose(dd) {
        const Od = await this.mutex.acquire(),
          md = this.trackDatas.find((Od => Od.track === dd));
        md && (md.closed = !0, "subtitle" === md.type && "webvtt" === dd.source._codec && await this.processWebVTTCues(md, 1 / 0), this.processTimestamps(md)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), Od()
      }
      ensureOneEnabledTrack() {
        for (const dd of ["video", "audio", "subtitle"]) {
          const Od = this.trackDatas.filter((Od => Od.type === dd));
          if (0 === Od.length) continue;
          if (!Od.some((dd => !1 !== dd.track.metadata.disposition?.default))) {
            const dd = Od[0];
            dd.track.metadata.disposition = {
              ...dd.track.metadata.disposition,
              default: !0
            }
          }
        }
      }
      async forceFragmentFinalization() {
        (0, Kd.M)(this.isFragmented);
        const dd = await this.mutex.acquire();
        try {
          for (const dd of this.trackDatas) "subtitle" === dd.type && "webvtt" === dd.track.source._codec && await this.processWebVTTCues(dd, 1 / 0), this.processTimestamps(dd);
          await this.interleaveSamples(!0), await this.finalizeFragment()
        } finally {
          dd()
        }
      }
      async finalize() {
        const dd = await this.mutex.acquire();
        this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || "reserve" !== this.fastStart || await this.createFastStartReserveMdat();
        for (const md of this.trackDatas) md.closed = !0, "subtitle" === md.type && "webvtt" === md.track.source._codec && await this.processWebVTTCues(md, 1 / 0), this.processTimestamps(md);
        if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
        else
          for (const md of this.trackDatas) {
            await this.finalizeCurrentChunk(md);
            const dd = ym(md);
            if (dd > 0) {
              let Od = 0;
              for (const dd of md.samples) Od += dd.size;
              md.avgBitrate = Math.round(8 * Od / dd)
            } else md.avgBitrate = 0;
            let Od = 0,
              Wd = 0,
              Fd = 0;
            for (let Rd = 0; Rd < md.samples.length; Rd++) {
              const dd = md.samples[Rd];
              for (Wd += dd.size; dd.decodeTimestamp - md.samples[Od].decodeTimestamp >= 1;) Wd -= md.samples[Od].size, Od++;
              Fd = Math.max(Fd, Wd)
            }
            if (md.maxBitrate = 8 * Fd, null !== md.startTimestampOffset)
              for (let Rd = 0; Rd < md.samples.length; Rd++) {
                const dd = md.samples[Rd];
                dd.timestamp -= md.startTimestampOffset, dd.decodeTimestamp -= md.startTimestampOffset
              }
          }
        if ((0, Kd.M)(this.writer), (0, Kd.M)(this.boxWriter), "in-memory" === this.fastStart) {
          let dd;
          this.mdat = jd(!1);
          for (let md = 0; md < 2; md++) {
            const Od = Dd(this),
              md = this.boxWriter.measureBox(Od);
            dd = this.boxWriter.measureBox(this.mdat);
            let Wd = this.writer.getPos() + md + dd;
            for (const Fd of this.finalizedChunks) {
              Fd.offset = Wd;
              for (const {
                  data: Od
                }
                of Fd.samples)(0, Kd.M)(Od), Wd += Od.byteLength, dd += Od.byteLength
            }
            if (Wd < 2 ** 32) break;
            dd >= 2 ** 32 && (this.mdat.largeSize = !0)
          }
          this.formatOptions.onMoov && this.writer.startTrackingWrites();
          const Od = Dd(this);
          if (this.boxWriter.writeBox(Od), this.formatOptions.onMoov) {
            const {
              data: dd,
              start: Od
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(dd, Od)
          }
          this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = dd, this.boxWriter.writeBox(this.mdat);
          for (const md of this.finalizedChunks)
            for (const dd of md.samples)(0, Kd.M)(dd.data), this.writer.write(dd.data), dd.data = null;
          if (this.formatOptions.onMdat) {
            const {
              data: dd,
              start: Od
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(dd, Od)
          }
        } else if (this.isFragmented)
          if (this.isCmaf) {
            const dd = null !== this.segmentHeaderSize ? this.writer.getPos() - this.segmentHeaderSize : 0;
            this.writer.seek(0), this.boxWriter.writeBox(zd()), this.boxWriter.writeBox(cd(this, dd))
          } else {
            const dd = this.writer.getPos(),
              md = (Od = this.trackDatas, Ld("mfra", void 0, [...Od.map(cO), jO()]));
            this.boxWriter.writeBox(md);
            const Wd = this.writer.getPos() - dd;
            this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(Wd)
          }
        else {
          (0, Kd.M)(this.mdat);
          const dd = this.boxWriter.offsets.get(this.mdat);
          (0, Kd.M)(void 0 !== dd);
          const Od = this.writer.getPos() - dd;
          if (this.mdat.size = Od, this.mdat.largeSize = Od >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
            const {
              data: dd,
              start: Od
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMdat(dd, Od)
          }
          const md = Dd(this);
          if ("reserve" === this.fastStart) {
            (0, Kd.M)(null !== this.ftypSize), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(md);
            const dd = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
            this.boxWriter.writeBox({
              type: "free",
              size: dd
            })
          } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(md);
          if (this.formatOptions.onMoov) {
            const {
              data: dd,
              start: Od
            } = this.writer.stopTrackingWrites();
            this.formatOptions.onMoov(dd, Od)
          }
        }
        var Od;
        dd()
      }
    }
    class Tm {
      constructor(dd) {
        this.value = dd
      }
    }
    class pm {
      constructor(dd) {
        this.value = dd
      }
    }
    class Ym {
      constructor(dd) {
        this.value = dd
      }
    }
    class gm {
      constructor(dd) {
        this.value = dd
      }
    }
    var wm;
    ! function(dd) {
      dd[dd.EBML = 440786851] = "EBML", dd[dd.EBMLVersion = 17030] = "EBMLVersion", dd[dd.EBMLReadVersion = 17143] = "EBMLReadVersion", dd[dd.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", dd[dd.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", dd[dd.DocType = 17026] = "DocType", dd[dd.DocTypeVersion = 17031] = "DocTypeVersion", dd[dd.DocTypeReadVersion = 17029] = "DocTypeReadVersion", dd[dd.Void = 236] = "Void", dd[dd.Segment = 408125543] = "Segment", dd[dd.SeekHead = 290298740] = "SeekHead", dd[dd.Seek = 19899] = "Seek", dd[dd.SeekID = 21419] = "SeekID", dd[dd.SeekPosition = 21420] = "SeekPosition", dd[dd.Duration = 17545] = "Duration", dd[dd.Info = 357149030] = "Info", dd[dd.TimestampScale = 2807729] = "TimestampScale", dd[dd.MuxingApp = 19840] = "MuxingApp", dd[dd.WritingApp = 22337] = "WritingApp", dd[dd.Tracks = 374648427] = "Tracks", dd[dd.TrackEntry = 174] = "TrackEntry", dd[dd.TrackNumber = 215] = "TrackNumber", dd[dd.TrackUID = 29637] = "TrackUID", dd[dd.TrackType = 131] = "TrackType", dd[dd.FlagEnabled = 185] = "FlagEnabled", dd[dd.FlagDefault = 136] = "FlagDefault", dd[dd.FlagForced = 21930] = "FlagForced", dd[dd.FlagOriginal = 21934] = "FlagOriginal", dd[dd.FlagHearingImpaired = 21931] = "FlagHearingImpaired", dd[dd.FlagVisualImpaired = 21932] = "FlagVisualImpaired", dd[dd.FlagCommentary = 21935] = "FlagCommentary", dd[dd.FlagLacing = 156] = "FlagLacing", dd[dd.Name = 21358] = "Name", dd[dd.Language = 2274716] = "Language", dd[dd.LanguageBCP47 = 2274717] = "LanguageBCP47", dd[dd.CodecID = 134] = "CodecID", dd[dd.CodecPrivate = 25506] = "CodecPrivate", dd[dd.CodecDelay = 22186] = "CodecDelay", dd[dd.SeekPreRoll = 22203] = "SeekPreRoll", dd[dd.DefaultDuration = 2352003] = "DefaultDuration", dd[dd.Video = 224] = "Video", dd[dd.PixelWidth = 176] = "PixelWidth", dd[dd.PixelHeight = 186] = "PixelHeight", dd[dd.DisplayWidth = 21680] = "DisplayWidth", dd[dd.DisplayHeight = 21690] = "DisplayHeight", dd[dd.DisplayUnit = 21682] = "DisplayUnit", dd[dd.AlphaMode = 21440] = "AlphaMode", dd[dd.Audio = 225] = "Audio", dd[dd.SamplingFrequency = 181] = "SamplingFrequency", dd[dd.Channels = 159] = "Channels", dd[dd.BitDepth = 25188] = "BitDepth", dd[dd.SimpleBlock = 163] = "SimpleBlock", dd[dd.BlockGroup = 160] = "BlockGroup", dd[dd.Block = 161] = "Block", dd[dd.BlockAdditions = 30113] = "BlockAdditions", dd[dd.BlockMore = 166] = "BlockMore", dd[dd.BlockAdditional = 165] = "BlockAdditional", dd[dd.BlockAddID = 238] = "BlockAddID", dd[dd.BlockDuration = 155] = "BlockDuration", dd[dd.ReferenceBlock = 251] = "ReferenceBlock", dd[dd.Cluster = 524531317] = "Cluster", dd[dd.Timestamp = 231] = "Timestamp", dd[dd.Cues = 475249515] = "Cues", dd[dd.CuePoint = 187] = "CuePoint", dd[dd.CueTime = 179] = "CueTime", dd[dd.CueTrackPositions = 183] = "CueTrackPositions", dd[dd.CueTrack = 247] = "CueTrack", dd[dd.CueClusterPosition = 241] = "CueClusterPosition", dd[dd.Colour = 21936] = "Colour", dd[dd.MatrixCoefficients = 21937] = "MatrixCoefficients", dd[dd.TransferCharacteristics = 21946] = "TransferCharacteristics", dd[dd.Primaries = 21947] = "Primaries", dd[dd.Range = 21945] = "Range", dd[dd.Projection = 30320] = "Projection", dd[dd.ProjectionType = 30321] = "ProjectionType", dd[dd.ProjectionPoseYaw = 30323] = "ProjectionPoseYaw", dd[dd.ProjectionPosePitch = 30324] = "ProjectionPosePitch", dd[dd.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", dd[dd.Attachments = 423732329] = "Attachments", dd[dd.AttachedFile = 24999] = "AttachedFile", dd[dd.FileDescription = 18046] = "FileDescription", dd[dd.FileName = 18030] = "FileName", dd[dd.FileMediaType = 18016] = "FileMediaType", dd[dd.FileData = 18012] = "FileData", dd[dd.FileUID = 18094] = "FileUID", dd[dd.Chapters = 272869232] = "Chapters", dd[dd.Tags = 307544935] = "Tags", dd[dd.Tag = 29555] = "Tag", dd[dd.Targets = 25536] = "Targets", dd[dd.TargetTypeValue = 26826] = "TargetTypeValue", dd[dd.TargetType = 25546] = "TargetType", dd[dd.TagTrackUID = 25541] = "TagTrackUID", dd[dd.TagEditionUID = 25545] = "TagEditionUID", dd[dd.TagChapterUID = 25540] = "TagChapterUID", dd[dd.TagAttachmentUID = 25542] = "TagAttachmentUID", dd[dd.SimpleTag = 26568] = "SimpleTag", dd[dd.TagName = 17827] = "TagName", dd[dd.TagLanguage = 17530] = "TagLanguage", dd[dd.TagString = 17543] = "TagString", dd[dd.TagBinary = 17541] = "TagBinary", dd[dd.ContentEncodings = 28032] = "ContentEncodings", dd[dd.ContentEncoding = 25152] = "ContentEncoding", dd[dd.ContentEncodingOrder = 20529] = "ContentEncodingOrder", dd[dd.ContentEncodingScope = 20530] = "ContentEncodingScope", dd[dd.ContentCompression = 20532] = "ContentCompression", dd[dd.ContentCompAlgo = 16980] = "ContentCompAlgo", dd[dd.ContentCompSettings = 16981] = "ContentCompSettings", dd[dd.ContentEncryption = 20533] = "ContentEncryption"
    }(wm || (wm = {}));
    wm.EBML, wm.Segment, wm.SeekHead, wm.Info, wm.Cluster, wm.Tracks, wm.Cues, wm.Attachments, wm.Chapters, wm.Tags;
    const am = dd => dd < 256 ? 1 : dd < 65536 ? 2 : dd < 1 << 24 ? 3 : dd < 2 ** 32 ? 4 : dd < 2 ** 40 ? 5 : 6,
      Em = dd => dd < 256n ? 1 : dd < 65536n ? 2 : dd < 1n << 24n ? 3 : dd < 1n << 32n ? 4 : dd < 1n << 40n ? 5 : dd < 1n << 48n ? 6 : dd < 1n << 56n ? 7 : 8,
      Jm = dd => dd >= -64 && dd < 64 ? 1 : dd >= -8192 && dd < 8192 ? 2 : dd >= -1048576 && dd < 1 << 20 ? 3 : dd >= -(1 << 27) && dd < 1 << 27 ? 4 : dd >= -(2 ** 34) && dd < 2 ** 34 ? 5 : 6;
    class Um {
      constructor(dd) {
        this.writer = dd, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = new WeakMap, this.dataOffsets = new WeakMap
      }
      writeByte(dd) {
        this.helperView.setUint8(0, dd), this.writer.write(this.helper.subarray(0, 1))
      }
      writeFloat32(dd) {
        this.helperView.setFloat32(0, dd, !1), this.writer.write(this.helper.subarray(0, 4))
      }
      writeFloat64(dd) {
        this.helperView.setFloat64(0, dd, !1), this.writer.write(this.helper)
      }
      writeUnsignedInt(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : am(dd),
          md = 0;
        switch (Od) {
          case 6:
            this.helperView.setUint8(md++, dd / 2 ** 40 | 0);
          case 5:
            this.helperView.setUint8(md++, dd / 2 ** 32 | 0);
          case 4:
            this.helperView.setUint8(md++, dd >> 24);
          case 3:
            this.helperView.setUint8(md++, dd >> 16);
          case 2:
            this.helperView.setUint8(md++, dd >> 8);
          case 1:
            this.helperView.setUint8(md++, dd);
            break;
          default:
            throw new Error("Bad unsigned int size " + Od)
        }
        this.writer.write(this.helper.subarray(0, md))
      }
      writeUnsignedBigInt(dd) {
        let Od = 0;
        for (let md = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Em(dd)) - 1; md >= 0; md--) this.helperView.setUint8(Od++, Number(dd >> BigInt(8 * md) & 0xffn));
        this.writer.write(this.helper.subarray(0, Od))
      }
      writeSignedInt(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jm(dd);
        dd < 0 && (dd += 2 ** (8 * Od)), this.writeUnsignedInt(dd, Od)
      }
      writeVarInt(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (dd => {
            if (dd < 127) return 1;
            if (dd < 16383) return 2;
            if (dd < 2097151) return 3;
            if (dd < 268435455) return 4;
            if (dd < 2 ** 35 - 1) return 5;
            if (dd < 2 ** 42 - 1) return 6;
            throw new Error("EBML varint size not supported " + dd)
          })(dd),
          md = 0;
        switch (Od) {
          case 1:
            this.helperView.setUint8(md++, 128 | dd);
            break;
          case 2:
            this.helperView.setUint8(md++, 64 | dd >> 8), this.helperView.setUint8(md++, dd);
            break;
          case 3:
            this.helperView.setUint8(md++, 32 | dd >> 16), this.helperView.setUint8(md++, dd >> 8), this.helperView.setUint8(md++, dd);
            break;
          case 4:
            this.helperView.setUint8(md++, 16 | dd >> 24), this.helperView.setUint8(md++, dd >> 16), this.helperView.setUint8(md++, dd >> 8), this.helperView.setUint8(md++, dd);
            break;
          case 5:
            this.helperView.setUint8(md++, 8 | dd / 2 ** 32 & 7), this.helperView.setUint8(md++, dd >> 24), this.helperView.setUint8(md++, dd >> 16), this.helperView.setUint8(md++, dd >> 8), this.helperView.setUint8(md++, dd);
            break;
          case 6:
            this.helperView.setUint8(md++, 4 | dd / 2 ** 40 & 3), this.helperView.setUint8(md++, dd / 2 ** 32 | 0), this.helperView.setUint8(md++, dd >> 24), this.helperView.setUint8(md++, dd >> 16), this.helperView.setUint8(md++, dd >> 8), this.helperView.setUint8(md++, dd);
            break;
          default:
            throw new Error("Bad EBML varint size " + Od)
        }
        this.writer.write(this.helper.subarray(0, md))
      }
      writeAsciiString(dd) {
        this.writer.write(new Uint8Array(dd.split("").map((dd => dd.charCodeAt(0)))))
      }
      writeEBML(dd) {
        if (null !== dd)
          if (dd instanceof Uint8Array) this.writer.write(dd);
          else if (Array.isArray(dd))
          for (const Od of dd) this.writeEBML(Od);
        else if (this.offsets.set(dd, this.writer.getPos()), this.writeUnsignedInt(dd.id), Array.isArray(dd.data)) {
          const Od = this.writer.getPos(),
            md = -1 === dd.size ? 1 : dd.size ?? 4; - 1 === dd.size ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + md);
          const Wd = this.writer.getPos();
          if (this.dataOffsets.set(dd, Wd), this.writeEBML(dd.data), -1 !== dd.size) {
            const dd = this.writer.getPos() - Wd,
              Fd = this.writer.getPos();
            this.writer.seek(Od), this.writeVarInt(dd, md), this.writer.seek(Fd)
          }
        } else if ("number" === typeof dd.data) {
          const Od = dd.size ?? am(dd.data);
          this.writeVarInt(Od), this.writeUnsignedInt(dd.data, Od)
        } else if ("bigint" === typeof dd.data) {
          const Od = dd.size ?? Em(dd.data);
          this.writeVarInt(Od), this.writeUnsignedBigInt(dd.data, Od)
        } else if ("string" === typeof dd.data) this.writeVarInt(dd.data.length), this.writeAsciiString(dd.data);
        else if (dd.data instanceof Uint8Array) this.writeVarInt(dd.data.byteLength, dd.size), this.writer.write(dd.data);
        else if (dd.data instanceof Tm) this.writeVarInt(4), this.writeFloat32(dd.data.value);
        else if (dd.data instanceof pm) this.writeVarInt(8), this.writeFloat64(dd.data.value);
        else if (dd.data instanceof Ym) {
          const Od = dd.size ?? Jm(dd.data.value);
          this.writeVarInt(Od), this.writeSignedInt(dd.data.value, Od)
        } else if (dd.data instanceof gm) {
          const Od = Kd.od.encode(dd.data.value);
          this.writeVarInt(Od.length), this.writer.write(Od)
        } else(0, Kd.J)(dd.data)
      }
    }
    const xm = {
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
    const Bm = {
      video: 1,
      audio: 2,
      subtitle: 17
    };
    class Sm extends qd {
      constructor(dd, Od) {
        super(dd), this.trackDatas = [], this.allTracksKnown = (0, Kd.Ac)(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = new Map, this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.warnedAboutTooNegativeTimestamp = !1, this.format = Od
      }
      async start() {
        const dd = await this.mutex.acquire();
        this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new Um(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
        for (const Od of this.output.tracks) Od.isVideoTrack() && Od.metadata.decoderConfig ? this.getVideoTrackData(Od, Od.metadata.primingPacket ?? null, {
          decoderConfig: Od.metadata.decoderConfig
        }) : Od.isAudioTrack() && Od.metadata.decoderConfig && this.getAudioTrackData(Od, Od.metadata.primingPacket ?? null, {
          decoderConfig: Od.metadata.decoderConfig
        });
        dd()
      }
      writeEBMLHeader() {
        this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
        const dd = {
          id: wm.EBML,
          data: [{
            id: wm.EBMLVersion,
            data: 1
          }, {
            id: wm.EBMLReadVersion,
            data: 1
          }, {
            id: wm.EBMLMaxIDLength,
            data: 4
          }, {
            id: wm.EBMLMaxSizeLength,
            data: 8
          }, {
            id: wm.DocType,
            data: this.format instanceof cm ? "webm" : "matroska"
          }, {
            id: wm.DocTypeVersion,
            data: 4
          }, {
            id: wm.DocTypeReadVersion,
            data: 2
          }]
        };
        if (this.ebmlWriter.writeEBML(dd), this.format._options.onEbmlHeader) {
          const {
            data: dd,
            start: Od
          } = this.writer.stopTrackingWrites();
          this.format._options.onEbmlHeader(dd, Od)
        }
      }
      maybeCreateSeekHead(dd) {
        if (this.format._options.appendOnly) return;
        const Od = new Uint8Array([28, 83, 187, 107]),
          md = new Uint8Array([21, 73, 169, 102]),
          Wd = new Uint8Array([22, 84, 174, 107]),
          Fd = new Uint8Array([25, 65, 164, 105]),
          Rd = new Uint8Array([18, 84, 195, 103]),
          Xd = {
            id: wm.SeekHead,
            data: [{
              id: wm.Seek,
              data: [{
                id: wm.SeekID,
                data: md
              }, {
                id: wm.SeekPosition,
                size: 5,
                data: dd ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0
              }]
            }, {
              id: wm.Seek,
              data: [{
                id: wm.SeekID,
                data: Wd
              }, {
                id: wm.SeekPosition,
                size: 5,
                data: dd ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0
              }]
            }, this.attachmentsElement ? {
              id: wm.Seek,
              data: [{
                id: wm.SeekID,
                data: Fd
              }, {
                id: wm.SeekPosition,
                size: 5,
                data: dd ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0
              }]
            } : null, this.tagsElement ? {
              id: wm.Seek,
              data: [{
                id: wm.SeekID,
                data: Rd
              }, {
                id: wm.SeekPosition,
                size: 5,
                data: dd ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0
              }]
            } : null, {
              id: wm.Seek,
              data: [{
                id: wm.SeekID,
                data: Od
              }, {
                id: wm.SeekPosition,
                size: 5,
                data: dd ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0
              }]
            }]
          };
        this.seekHead = Xd
      }
      createSegmentInfo() {
        const dd = {
          id: wm.Duration,
          data: new pm(0)
        };
        this.segmentDuration = dd;
        const Od = {
          id: wm.Info,
          data: [{
            id: wm.TimestampScale,
            data: 1e6
          }, {
            id: wm.MuxingApp,
            data: Td.c
          }, {
            id: wm.WritingApp,
            data: Td.c
          }, this.format._options.appendOnly ? null : dd]
        };
        this.segmentInfo = Od
      }
      createTracks() {
        const dd = {
          id: wm.Tracks,
          data: []
        };
        this.tracksElement = dd;
        for (const Od of this.trackDatas) {
          let md = xm[Od.track.source._codec];
          (0, Kd.M)(md), "audio" === Od.type && "dts" === Od.track.source._codec && ("dtse" === Od.info.decoderConfig.codec ? md = "A_DTS/EXPRESS" : "dtsl" === Od.info.decoderConfig.codec && (md = "A_DTS/LOSSLESS"));
          let Wd = 0;
          if ("audio" === Od.type && "opus" === Od.track.source._codec) {
            Wd = 8e7;
            const dd = Od.info.decoderConfig.description;
            if (dd) {
              const Od = (0, Kd.vd)(dd),
                md = (0, Hd.hb)(Od);
              Wd = Math.round(md.preSkip / Fd.l * 1e9)
            }
          }
          dd.data.push({
            id: wm.TrackEntry,
            data: [{
              id: wm.TrackNumber,
              data: Od.track.id
            }, {
              id: wm.TrackUID,
              data: Od.track.id
            }, {
              id: wm.TrackType,
              data: Bm[Od.type]
            }, !1 === Od.track.metadata.disposition?.default ? {
              id: wm.FlagDefault,
              data: 0
            } : null, Od.track.metadata.disposition?.forced ? {
              id: wm.FlagForced,
              data: 1
            } : null, Od.track.metadata.disposition?.hearingImpaired ? {
              id: wm.FlagHearingImpaired,
              data: 1
            } : null, Od.track.metadata.disposition?.visuallyImpaired ? {
              id: wm.FlagVisualImpaired,
              data: 1
            } : null, Od.track.metadata.disposition?.original ? {
              id: wm.FlagOriginal,
              data: 1
            } : null, Od.track.metadata.disposition?.commentary ? {
              id: wm.FlagCommentary,
              data: 1
            } : null, {
              id: wm.FlagLacing,
              data: 0
            }, {
              id: wm.Language,
              data: Od.track.metadata.languageCode ?? Kd.z
            }, {
              id: wm.CodecID,
              data: md
            }, Od.codecPrivate ? {
              id: wm.CodecPrivate,
              data: (0, Kd.vd)(Od.codecPrivate)
            } : null, Wd > 0 ? {
              id: wm.SeekPreRoll,
              data: Wd
            } : null, void 0 !== Od.track.metadata.name ? {
              id: wm.Name,
              data: new gm(Od.track.metadata.name)
            } : null, "video" === Od.type ? this.videoSpecificTrackInfo(Od) : null, "audio" === Od.type ? this.audioSpecificTrackInfo(Od) : null, "subtitle" === Od.type ? this.subtitleSpecificTrackInfo(Od) : null]
          })
        }
      }
      videoSpecificTrackInfo(dd) {
        const {
          frameRate: Od,
          transformationMatrix: md
        } = dd.track.metadata, Wd = [Od ? {
          id: wm.DefaultDuration,
          data: 1e9 / Od
        } : null];
        let Fd, Rd, Xd;
        if (md) {
          Fd = (0, Kd.nb)(md);
          const dd = (0, Kd.rc)((0, Kd.Mc)(-Fd), md);
          Rd = Math.sign(dd[0]), Xd = Math.sign(dd[4]), -1 === Xd && (Xd = 1, Rd = -Rd, Fd = (0, Kd.sc)(Fd + 180))
        } else Fd = dd.track.metadata.rotation ?? 0, Rd = dd.track.metadata.flip ? -1 : 1, Xd = 1;
        const hd = Fd ? (0, Kd.sc)(-1 === Rd ? Fd : -Fd) : 0,
          vd = Math.round(Math.acos(Rd) * Kd.q),
          Qd = Math.round(Math.acos(Xd) * Kd.q),
          td = !!dd.info.aspectRatio && dd.info.aspectRatio.num * dd.info.height !== dd.info.aspectRatio.den * dd.info.width,
          od = dd.info.decoderConfig.colorSpace,
          Nd = {
            id: wm.Video,
            data: [{
              id: wm.PixelWidth,
              data: dd.info.width
            }, {
              id: wm.PixelHeight,
              data: dd.info.height
            }, td ? {
              id: wm.DisplayWidth,
              data: dd.info.aspectRatio.num
            } : null, td ? {
              id: wm.DisplayHeight,
              data: dd.info.aspectRatio.den
            } : null, td ? {
              id: wm.DisplayUnit,
              data: 3
            } : null, dd.info.alphaMode ? {
              id: wm.AlphaMode,
              data: 1
            } : null, (0, Kd.ib)(od) ? null : {
              id: wm.Colour,
              data: [{
                id: wm.MatrixCoefficients,
                data: null != od?.matrix ? Kd.p[od.matrix] : 2
              }, {
                id: wm.TransferCharacteristics,
                data: null != od?.transfer ? Kd.t[od.transfer] : 2
              }, {
                id: wm.Primaries,
                data: null != od?.primaries ? Kd.g[od.primaries] : 2
              }, {
                id: wm.Range,
                data: null != od?.fullRange ? od.fullRange ? 2 : 1 : 0
              }]
            }, hd || vd || Qd ? {
              id: wm.Projection,
              data: [{
                id: wm.ProjectionType,
                data: 0
              }, vd ? {
                id: wm.ProjectionPoseYaw,
                data: new Tm(vd)
              } : null, Qd ? {
                id: wm.ProjectionPosePitch,
                data: new Tm(Qd)
              } : null, hd ? {
                id: wm.ProjectionPoseRoll,
                data: new Tm((hd + 180) % 360 - 180)
              } : null]
            } : null]
          };
        return Wd.push(Nd), Wd
      }
      audioSpecificTrackInfo(dd) {
        const Od = Fd.m.includes(dd.track.source._codec) ? (0, Fd.S)(dd.track.source._codec) : null;
        return [{
          id: wm.Audio,
          data: [{
            id: wm.SamplingFrequency,
            data: new Tm(dd.info.sampleRate)
          }, {
            id: wm.Channels,
            data: dd.info.numberOfChannels
          }, Od ? {
            id: wm.BitDepth,
            data: 8 * Od.sampleSize
          } : null]
        }]
      }
      subtitleSpecificTrackInfo(dd) {
        return []
      }
      maybeCreateTags() {
        const dd = [],
          Od = (Od, md) => {
            dd.push({
              id: wm.SimpleTag,
              data: [{
                id: wm.TagName,
                data: new gm(Od)
              }, "string" === typeof md ? {
                id: wm.TagString,
                data: new gm(md)
              } : {
                id: wm.TagBinary,
                data: md
              }]
            })
          },
          md = this.output._metadataTags,
          Wd = new Set;
        for (const {
            key: Fd,
            value: Rd
          }
          of(0, Kd.fc)(md)) switch (Fd) {
          case "title":
            Od("TITLE", Rd), Wd.add("TITLE");
            break;
          case "description":
            Od("DESCRIPTION", Rd), Wd.add("DESCRIPTION");
            break;
          case "artist":
            Od("ARTIST", Rd), Wd.add("ARTIST");
            break;
          case "album":
            Od("ALBUM", Rd), Wd.add("ALBUM");
            break;
          case "albumArtist":
            Od("ALBUM_ARTIST", Rd), Wd.add("ALBUM_ARTIST");
            break;
          case "genre":
            Od("GENRE", Rd), Wd.add("GENRE");
            break;
          case "beatsPerMinute":
            Od("BPM", Rd.toString()), Wd.add("BPM");
            break;
          case "comment":
            Od("COMMENT", Rd), Wd.add("COMMENT");
            break;
          case "lyrics":
            Od("LYRICS", Rd), Wd.add("LYRICS");
            break;
          case "date":
            Od("DATE", Rd.toISOString().slice(0, 10)), Wd.add("DATE");
            break;
          case "trackNumber":
            Od("PART_NUMBER", void 0 !== md.tracksTotal ? `${Rd}/${md.tracksTotal}` : Rd.toString()), Wd.add("PART_NUMBER");
            break;
          case "discNumber":
            Od("DISC", void 0 !== md.discsTotal ? `${Rd}/${md.discsTotal}` : Rd.toString()), Wd.add("DISC");
            break;
          case "tracksTotal":
          case "discsTotal":
          case "images":
          case "raw":
            break;
          default:
            (0, Kd.J)(Fd)
        }
        if (md.raw)
          for (const Fd in md.raw) {
            const dd = md.raw[Fd];
            null == dd || Wd.has(Fd) || ("string" === typeof dd || dd instanceof Uint8Array) && Od(Fd, dd)
          }
        0 !== dd.length && (this.tagsElement = {
          id: wm.Tags,
          data: [{
            id: wm.Tag,
            data: [{
              id: wm.Targets,
              data: [{
                id: wm.TargetTypeValue,
                data: 50
              }, {
                id: wm.TargetType,
                data: "MOVIE"
              }]
            }, ...dd]
          }]
        })
      }
      maybeCreateAttachments() {
        const dd = this.output._metadataTags,
          Od = [],
          md = new Set,
          Wd = dd.images ?? [];
        for (const Fd of Wd) {
          let dd, Wd = Fd.name;
          if (void 0 === Wd) {
            Wd = ("coverFront" === Fd.kind ? "cover" : "coverBack" === Fd.kind ? "back" : "image") + ((0, Kd.wb)(Fd.mimeType) ?? "")
          }
          for (;;) {
            dd = 0n;
            for (let Od = 0; Od < 8; Od++) dd <<= 8n, dd |= BigInt(Math.floor(256 * Math.random()));
            if (0n !== dd && !md.has(dd)) break
          }
          md.add(dd), Od.push({
            id: wm.AttachedFile,
            data: [void 0 !== Fd.description ? {
              id: wm.FileDescription,
              data: new gm(Fd.description)
            } : null, {
              id: wm.FileName,
              data: new gm(Wd)
            }, {
              id: wm.FileMediaType,
              data: Fd.mimeType
            }, {
              id: wm.FileData,
              data: Fd.data
            }, {
              id: wm.FileUID,
              data: dd
            }]
          })
        }
        for (const [Fd, Rd] of Object.entries(dd.raw ?? {})) {
          if (!(Rd instanceof Nd.e)) continue;
          /^\d+$/.test(Fd) && (Wd.find((dd => dd.mimeType === Rd.mimeType && (0, Kd.yd)(dd.data, Rd.data))) || Od.push({
            id: wm.AttachedFile,
            data: [void 0 !== Rd.description ? {
              id: wm.FileDescription,
              data: new gm(Rd.description)
            } : null, {
              id: wm.FileName,
              data: new gm(Rd.name ?? "")
            }, {
              id: wm.FileMediaType,
              data: Rd.mimeType ?? ""
            }, {
              id: wm.FileData,
              data: Rd.data
            }, {
              id: wm.FileUID,
              data: BigInt(Fd)
            }]
          }))
        }
        0 !== Od.length && (this.attachmentsElement = {
          id: wm.Attachments,
          data: Od
        })
      }
      createSegment() {
        this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
        const dd = {
          id: wm.Segment,
          size: this.format._options.appendOnly ? -1 : 6,
          data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement]
        };
        if (this.segment = dd, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(dd), this.format._options.onSegmentHeader) {
          const {
            data: dd,
            start: Od
          } = this.writer.stopTrackingWrites();
          this.format._options.onSegmentHeader(dd, Od)
        }
      }
      createCues() {
        this.cues = {
          id: wm.Cues,
          data: []
        }
      }
      get segmentDataOffset() {
        return (0, Kd.M)(this.segment), this.ebmlWriter.dataOffsets.get(this.segment)
      }
      allTracksAreKnown() {
        for (const dd of this.output.tracks)
          if (!dd.source._closed && !this.trackDatas.some((Od => Od.track === dd))) return !1;
        return !0
      }
      async getMimeType() {
        await this.allTracksKnown.promise;
        const dd = this.trackDatas.map((dd => {
          if ("video" === dd.type) return dd.info.decoderConfig.codec;
          if ("audio" === dd.type) return dd.info.decoderConfig.codec;
          return {
            webvtt: "wvtt"
          } [dd.track.source._codec]
        }));
        return (dd => {
          let Od = (dd.hasVideo ? "video/" : dd.hasAudio ? "audio/" : "application/") + (dd.isWebM ? "webm" : "x-matroska");
          dd.codecStrings.length > 0 && (Od += `; codecs="${[...new Set(dd.codecStrings.filter(Boolean))].join(", ")}"`);
          return Od
        })({
          isWebM: this.format instanceof cm,
          hasVideo: this.trackDatas.some((dd => "video" === dd.type)),
          hasAudio: this.trackDatas.some((dd => "audio" === dd.type)),
          codecStrings: dd
        })
      }
      getVideoTrackData(dd, Od, md) {
        const Wd = this.trackDatas.find((Od => Od.track === dd));
        if (Wd) return Wd;
        (0, Fd.X)(md, dd.source._codec), (0, Kd.M)(md), (0, Kd.M)(md.decoderConfig), (0, Kd.M)(void 0 !== md.decoderConfig.codedWidth), (0, Kd.M)(void 0 !== md.decoderConfig.codedHeight);
        const Rd = md.decoderConfig.displayAspectWidth,
          Xd = md.decoderConfig.displayAspectHeight,
          hd = void 0 === Rd || void 0 === Xd ? null : (0, Kd.id)({
            num: Rd,
            den: Xd
          }),
          vd = {
            track: dd,
            type: "video",
            info: {
              width: md.decoderConfig.codedWidth,
              height: md.decoderConfig.codedHeight,
              aspectRatio: hd,
              decoderConfig: md.decoderConfig,
              alphaMode: dd.metadata.canBeTransparent || (Od ? !!Od.sideData.alpha : null)
            },
            chunkQueue: [],
            lastWrittenMsTimestamp: null,
            codecPrivate: md.decoderConfig.description ?? null,
            closed: !1
          };
        return "vp9" === dd.source._codec ? vd.codecPrivate = new Uint8Array((0, Fd.H)(vd.info.decoderConfig.codec)) : "av1" === dd.source._codec ? vd.codecPrivate = new Uint8Array((0, Fd.E)(vd.info.decoderConfig.codec)) : "prores" === dd.source._codec && (vd.codecPrivate = Kd.od.encode(md.decoderConfig.codec)), this.trackDatas.push(vd), this.trackDatas.sort(((dd, Od) => dd.track.id - Od.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), vd
      }
      getAudioTrackData(dd, Od, md) {
        const Rd = this.trackDatas.find((Od => Od.track === dd));
        if (Rd) return Rd;
        (0, Fd.U)(md, dd.source._codec), (0, Kd.M)(md), (0, Kd.M)(md.decoderConfig);
        const Xd = {
          ...md.decoderConfig
        };
        let vd = !1;
        if ("aac" === dd.source._codec && !Xd.description) {
          if (!Od) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
          const dd = om(hd.tempFromBytes(Od.data));
          if (!dd) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
          const md = Wd.g[dd.samplingFrequencyIndex],
            Fd = Wd.c[dd.channelConfiguration];
          if (void 0 === md || void 0 === Fd) throw new Error("Invalid ADTS frame header.");
          Xd.description = (0, Wd.k)({
            objectType: dd.objectType,
            outputSampleRate: md,
            outputNumberOfChannels: Fd
          }), vd = !0
        }
        const Qd = {
          track: dd,
          type: "audio",
          info: {
            numberOfChannels: md.decoderConfig.numberOfChannels,
            sampleRate: md.decoderConfig.sampleRate,
            decoderConfig: Xd,
            requiresAdtsStripping: vd
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: Xd.description ?? null,
          closed: !1
        };
        return this.trackDatas.push(Qd), this.trackDatas.sort(((dd, Od) => dd.track.id - Od.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Qd
      }
      getSubtitleTrackData(dd, Od) {
        const md = this.trackDatas.find((Od => Od.track === dd));
        if (md) return md;
        (0, Fd.V)(Od), (0, Kd.M)(Od), (0, Kd.M)(Od.config);
        const Wd = {
          track: dd,
          type: "subtitle",
          info: {
            config: Od.config
          },
          chunkQueue: [],
          lastWrittenMsTimestamp: null,
          codecPrivate: Kd.od.encode(Od.config.description),
          closed: !1
        };
        return this.trackDatas.push(Wd), this.trackDatas.sort(((dd, Od) => dd.track.id - Od.track.id)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), Wd
      }
      async addEncodedVideoPacket(dd, Od, md) {
        const Wd = await this.mutex.acquire();
        try {
          const Wd = this.getVideoTrackData(dd, Od, md);
          Wd.info.alphaMode ??= !!Od.sideData.alpha;
          let Fd = Od.data;
          if ("prores" === dd.source._codec) {
            if (Fd.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
            Fd = Fd.subarray(8)
          }
          const Rd = "key" === Od.type;
          this.validateTimestamp(Wd.track, Od.timestamp, Rd);
          let Xd = Od.timestamp,
            hd = Od.duration;
          void 0 !== dd.metadata.frameRate && (Xd = (0, Kd.Pc)(Xd, dd.metadata.frameRate), hd = (0, Kd.Pc)(hd, dd.metadata.frameRate));
          const vd = Wd.info.alphaMode ? Od.sideData.alpha ?? null : null,
            Qd = this.createInternalChunk(Fd, Xd, hd, Od.type, vd);
          "vp9" === dd.source._codec && this.fixVP9ColorSpace(Wd, Qd), Wd.chunkQueue.push(Qd), await this.interleaveChunks()
        } finally {
          Wd()
        }
      }
      async addEncodedAudioPacket(dd, Od, md) {
        const Wd = await this.mutex.acquire();
        try {
          const Wd = this.getAudioTrackData(dd, Od, md);
          let Fd = Od.data;
          if (Wd.info.requiresAdtsStripping) {
            const dd = om(hd.tempFromBytes(Fd));
            if (!dd) throw new Error("Expected ADTS frame, didn't get one.");
            const Od = null === dd.crcCheck ? 7 : 9;
            Fd = Fd.subarray(Od)
          }
          const Rd = "key" === Od.type;
          this.validateTimestamp(Wd.track, Od.timestamp, Rd);
          const Xd = this.createInternalChunk(Fd, Od.timestamp, Od.duration, Od.type);
          Wd.chunkQueue.push(Xd), await this.interleaveChunks()
        } finally {
          Wd()
        }
      }
      async addSubtitleCue(dd, Od, md) {
        const Wd = await this.mutex.acquire();
        try {
          const Wd = this.getSubtitleTrackData(dd, md);
          this.validateTimestamp(Wd.track, Od.timestamp, !0);
          let Fd = Od.text;
          const Rd = Math.round(1e3 * Od.timestamp);
          bd.h.lastIndex = 0, Fd = Fd.replace(bd.h, (dd => {
            const Od = (0, bd.k)(dd.slice(1, -1)) - Rd;
            return `<${(0,bd.e)(Od)}>`
          }));
          const Xd = Kd.od.encode(Fd),
            hd = `${Od.settings??""}\n${Od.identifier??""}\n${Od.notes??""}`,
            vd = this.createInternalChunk(Xd, Od.timestamp, Od.duration, "key", hd.trim() ? Kd.od.encode(hd) : null);
          Wd.chunkQueue.push(vd), await this.interleaveChunks()
        } finally {
          Wd()
        }
      }
      async interleaveChunks() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (dd || this.allTracksAreKnown()) {
          dd: for (;;) {
            let Od = null,
              md = 1 / 0;
            for (const Fd of this.trackDatas) {
              if (!dd && 0 === Fd.chunkQueue.length && !Fd.closed) break dd;
              Fd.chunkQueue.length > 0 && Fd.chunkQueue[0].timestamp < md && (Od = Fd, md = Fd.chunkQueue[0].timestamp)
            }
            if (!Od) break;
            const Wd = Od.chunkQueue.shift();
            this.writeBlock(Od, Wd)
          }
          dd || await this.writer.flush()
        }
      }
      fixVP9ColorSpace(dd, Od) {
        if ("key" !== Od.type) return;
        if (!dd.info.decoderConfig.colorSpace || !dd.info.decoderConfig.colorSpace.matrix) return;
        const md = new yd.c(Od.data);
        md.skipBits(2);
        const Wd = md.readBits(1),
          Fd = (md.readBits(1) << 1) + Wd;
        3 === Fd && md.skipBits(1);
        if (md.readBits(1)) return;
        if (0 !== md.readBits(1)) return;
        md.skipBits(2);
        if (4817730 !== md.readBits(24)) return;
        Fd >= 2 && md.skipBits(1);
        const Rd = {
          rgb: 7,
          bt709: 2,
          bt470bg: 1,
          smpte170m: 3
        } [dd.info.decoderConfig.colorSpace.matrix];
        (0, Kd.Ed)(Od.data, md.pos, md.pos + 3, Rd)
      }
      createInternalChunk(dd, Od, md, Wd) {
        return {
          data: dd,
          type: Wd,
          timestamp: Od,
          duration: md,
          additions: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
        }
      }
      writeBlock(dd, Od) {
        this.segment || this.createSegment();
        const md = Math.round(1e3 * Od.timestamp),
          Wd = this.trackDatas.every((md => {
            if (dd === md) return "key" === Od.type;
            const Wd = md.chunkQueue[0];
            return Wd ? "key" === Wd.type : md.closed
          }));
        let Fd = !1;
        if (this.currentCluster) {
          (0, Kd.M)(null !== this.currentClusterStartMsTimestamp), (0, Kd.M)(null !== this.currentClusterMaxMsTimestamp);
          const dd = md - this.currentClusterStartMsTimestamp;
          Fd = Wd && md > this.currentClusterMaxMsTimestamp && dd >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || dd > 32767
        } else Fd = !0;
        Fd && this.createNewCluster(md);
        const Rd = md - this.currentClusterStartMsTimestamp;
        if (Rd < -32768) {
          if (!this.warnedAboutTooNegativeTimestamp) {
            const dd = this.format instanceof cm ? "WebM" : "Matroska";
            Xd.e._warn(`Packets had to be discarded because their timestamp is too negative to represent in ${dd}.`), this.warnedAboutTooNegativeTimestamp = !0
          }
          return
        }
        const hd = new Uint8Array(4),
          vd = new DataView(hd.buffer);
        vd.setUint8(0, 128 | dd.track.id), vd.setInt16(1, Rd, !1);
        const Qd = Math.round(1e3 * Od.duration);
        if (!!Od.additions || "subtitle" === dd.type) {
          const Wd = {
            id: wm.BlockGroup,
            data: [{
              id: wm.Block,
              data: [hd, Od.data]
            }, "delta" === Od.type ? {
              id: wm.ReferenceBlock,
              data: new Ym(dd.lastWrittenMsTimestamp - md)
            } : null, Od.additions ? {
              id: wm.BlockAdditions,
              data: [{
                id: wm.BlockMore,
                data: [{
                  id: wm.BlockAddID,
                  data: 1
                }, {
                  id: wm.BlockAdditional,
                  data: Od.additions
                }]
              }]
            } : null, Qd > 0 ? {
              id: wm.BlockDuration,
              data: Qd
            } : null]
          };
          this.ebmlWriter.writeEBML(Wd)
        } else {
          vd.setUint8(3, Number("key" === Od.type) << 7);
          const dd = {
            id: wm.SimpleBlock,
            data: [hd, Od.data]
          };
          this.ebmlWriter.writeEBML(dd)
        }
        this.startTimestamp = Math.min(this.startTimestamp, md), this.endTimestamp = Math.max(this.endTimestamp, md + Qd), dd.lastWrittenMsTimestamp = md, this.trackDatasInCurrentCluster.has(dd) || this.trackDatasInCurrentCluster.set(dd, {
          firstMsTimestamp: md
        }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, md)
      }
      createNewCluster(dd) {
        dd = Math.max(0, dd), this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = {
          id: wm.Cluster,
          size: this.format._options.appendOnly ? -1 : 5,
          data: [{
            id: wm.Timestamp,
            data: dd
          }]
        }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = dd, this.currentClusterMaxMsTimestamp = dd, this.trackDatasInCurrentCluster.clear()
      }
      finalizeCurrentCluster() {
        if ((0, Kd.M)(this.currentCluster), !this.format._options.appendOnly) {
          const dd = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster),
            Od = this.writer.getPos();
          this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(dd, 5), this.writer.seek(Od)
        }
        if (this.format._options.onCluster) {
          (0, Kd.M)(null !== this.currentClusterStartMsTimestamp);
          const {
            data: dd,
            start: Od
          } = this.writer.stopTrackingWrites();
          this.format._options.onCluster(dd, Od, this.currentClusterStartMsTimestamp / 1e3)
        }
        const dd = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset,
          Od = new Map;
        for (const [Wd, {
            firstMsTimestamp: Fd
          }] of this.trackDatasInCurrentCluster) Od.has(Fd) || Od.set(Fd, []), Od.get(Fd).push(Wd);
        const md = [...Od.entries()].sort(((dd, Od) => dd[0] - Od[0]));
        for (const [Wd, Fd] of md)(0, Kd.M)(this.cues), this.cues.data.push({
          id: wm.CuePoint,
          data: [{
            id: wm.CueTime,
            data: Math.max(0, Wd)
          }, ...Fd.map((Od => ({
            id: wm.CueTrackPositions,
            data: [{
              id: wm.CueTrack,
              data: Od.track.id
            }, {
              id: wm.CueClusterPosition,
              data: dd
            }]
          })))]
        })
      }
      async onTrackClose(dd) {
        const Od = await this.mutex.acquire(),
          md = this.trackDatas.find((Od => Od.track === dd));
        md && (md.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), Od()
      }
      async finalize() {
        const dd = await this.mutex.acquire();
        this.allTracksKnown.resolve();
        for (const Od of this.trackDatas) Od.closed = !0;
        if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), (0, Kd.M)(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
          const dd = this.writer.getPos() - this.segmentDataOffset;
          this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(dd, 6);
          const Od = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp;
          this.segmentDuration.data = new pm(Od), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), (0, Kd.M)(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead)
        }
        dd()
      }
    }
    const sm = new Uint32Array(256);
    for (let jm = 0; jm < 256; jm++) {
      let dd = jm << 24;
      for (let Od = 0; Od < 8; Od++) dd = 2147483648 & dd ? dd << 1 ^ 79764919 : dd << 1;
      sm[jm] = dd >>> 0 & 4294967295
    }
    new Uint8Array([9, 240]), new Uint8Array([70, 1]);
    const um = new Uint32Array(256);
    for (let jm = 0; jm < 256; jm++) {
      let dd = jm << 24;
      for (let Od = 0; Od < 8; Od++) dd = 2147483648 & dd ? dd << 1 ^ 79764919 : dd << 1;
      um[jm] = dd >>> 0 & 4294967295
    }
    const Vm = dd => {
        let Od = 4294967295;
        for (let md = 0; md < dd.length; md++) {
          const Wd = dd[md];
          Od = (Od << 8 ^ um[Od >>> 24 ^ Wd]) >>> 0
        }
        return Od
      },
      im = new Uint8Array(16);
    {
      const dd = (0, Kd.sd)(im);
      im[0] = 0, dd.setUint16(1, 45069, !1), dd.setUint16(3, 1, !1), im[5] = 193, im[6] = 0, im[7] = 0, dd.setUint16(8, 1, !1), dd.setUint16(10, 61440, !1), dd.setUint32(12, Vm(im.subarray(0, 12)), !1)
    }
    var Am;
    md(41555);
    ! function(dd) {
      dd[dd.PCM = 1] = "PCM", dd[dd.IEEE_FLOAT = 3] = "IEEE_FLOAT", dd[dd.ALAW = 6] = "ALAW", dd[dd.MULAW = 7] = "MULAW", dd[dd.EXTENSIBLE = 65534] = "EXTENSIBLE"
    }(Am || (Am = {}));
    md(41559), md(41569), md(41483);
    class rm {
      get supportsVideoRotationMetadata() {
        return this.supportsVideoTransformationMetadata
      }
      getSupportedVideoCodecs() {
        return this.getSupportedCodecs().filter((dd => Fd.q.includes(dd)))
      }
      getSupportedAudioCodecs() {
        return this.getSupportedCodecs().filter((dd => Fd.b.includes(dd)))
      }
      getSupportedSubtitleCodecs() {
        return this.getSupportedCodecs().filter((dd => Fd.p.includes(dd)))
      }
      _codecUnsupportedHint(dd) {
        return ""
      }
      _isFragmentedIsobmff() {
        return !1
      }
    }
    class Gm extends rm {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!dd || "object" !== typeof dd) throw new TypeError("options must be an object.");
        if (void 0 !== dd.fastStart && ![!1, "in-memory", "reserve", "fragmented"].includes(dd.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
        if (void 0 !== dd.minimumFragmentDuration && (!(0, Kd.Tb)(dd.minimumFragmentDuration) || dd.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
        if (void 0 !== dd.onFtyp && "function" !== typeof dd.onFtyp) throw new TypeError("options.onFtyp, when provided, must be a function.");
        if (void 0 !== dd.onMoov && "function" !== typeof dd.onMoov) throw new TypeError("options.onMoov, when provided, must be a function.");
        if (void 0 !== dd.onMdat && "function" !== typeof dd.onMdat) throw new TypeError("options.onMdat, when provided, must be a function.");
        if (void 0 !== dd.onMoof && "function" !== typeof dd.onMoof) throw new TypeError("options.onMoof, when provided, must be a function.");
        if (void 0 !== dd.metadataFormat && !["mdir", "mdta", "udta", "auto"].includes(dd.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
        super(), this._options = dd
      }
      getSupportedTrackCounts() {
        const dd = 2 ** 32 - 1;
        return {
          video: {
            min: 0,
            max: dd
          },
          audio: {
            min: 0,
            max: dd
          },
          subtitle: {
            min: 0,
            max: dd
          },
          total: {
            min: 0,
            max: dd
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
      _createMuxer(dd) {
        return new bm(dd, this)
      }
      _isFragmentedIsobmff() {
        return "fragmented" === this._options.fastStart
      }
    }
    class nm extends Gm {
      constructor(dd) {
        super(dd)
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
        return [...Fd.q, ...Fd.j, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...Fd.p]
      }
      _codecUnsupportedHint(dd) {
        return (new Pm).getSupportedCodecs().includes(dd) ? " Switching to MOV will grant support for this codec." : ""
      }
    }
    class Lm extends Gm {
      constructor(dd) {
        super(dd)
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
        return [...Fd.q, ...Fd.j, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...Fd.p]
      }
    }
    class Pm extends Gm {
      constructor(dd) {
        super(dd)
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
        return [...Fd.q, ...Fd.b]
      }
      _codecUnsupportedHint(dd) {
        return (new nm).getSupportedCodecs().includes(dd) ? " Switching to MP4 will grant support for this codec." : ""
      }
    }
    class zm extends rm {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!dd || "object" !== typeof dd) throw new TypeError("options must be an object.");
        if (void 0 !== dd.appendOnly && "boolean" !== typeof dd.appendOnly) throw new TypeError("options.appendOnly, when provided, must be a boolean.");
        if (void 0 !== dd.minimumClusterDuration && (!(0, Kd.Tb)(dd.minimumClusterDuration) || dd.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
        if (void 0 !== dd.onEbmlHeader && "function" !== typeof dd.onEbmlHeader) throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
        if (void 0 !== dd.onSegmentHeader && "function" !== typeof dd.onSegmentHeader) throw new TypeError("options.onHeader, when provided, must be a function.");
        if (void 0 !== dd.onCluster && "function" !== typeof dd.onCluster) throw new TypeError("options.onCluster, when provided, must be a function.");
        super(), this._options = dd
      }
      _createMuxer(dd) {
        return new Sm(dd, this)
      }
      get _name() {
        return "Matroska"
      }
      getSupportedTrackCounts() {
        const dd = 127;
        return {
          video: {
            min: 0,
            max: dd
          },
          audio: {
            min: 0,
            max: dd
          },
          subtitle: {
            min: 0,
            max: dd
          },
          total: {
            min: 0,
            max: dd
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
        return [...Fd.q, ...Fd.j, ...Fd.m.filter((dd => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(dd))), ...Fd.p]
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
    class cm extends zm {
      constructor(dd) {
        super(dd)
      }
      getSupportedCodecs() {
        return [...Fd.q.filter((dd => ["vp8", "vp9", "av1"].includes(dd))), ...Fd.b.filter((dd => ["opus", "vorbis"].includes(dd))), ...Fd.p]
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
      _codecUnsupportedHint(dd) {
        return (new zm).getSupportedCodecs().includes(dd) ? " Switching to MKV will grant support for this codec." : ""
      }
    }
  },
  41483: (dd, Od, md) => {
    md.d(Od, {
      c: () => pd
    });
    var Wd = md(41487),
      Fd = md(41491),
      Rd = md(41498),
      Xd = md(41569),
      Kd = md(41544),
      hd = md(41540),
      vd = md(41526),
      Qd = md(41555),
      td = md(41513);
    const od = ["video", "audio", "subtitle"];
    class Nd {
      constructor(dd, Od, md, Wd, Fd) {
        this.id = dd, this.output = Od, this.type = md, this.source = Wd, this.metadata = Fd
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
      canBePairedWith(dd) {
        if (!(dd instanceof Nd)) throw new TypeError("other must be an OutputTrack.");
        if (this === dd) return !1;
        const Od = (0, Wd.pd)(this.metadata.group),
          md = (0, Wd.pd)(dd.metadata.group);
        for (const Wd of Od) {
          if (this.type !== dd.type && md.some((dd => Wd === dd))) return !0;
          if (md.some((dd => Wd._pairedGroups.has(dd)))) return !0
        }
        return !1
      }
    }
    class qd extends Nd {
      constructor(dd, Od, md, Wd) {
        super(dd, Od, "video", md, Wd)
      }
    }
    class Hd extends Nd {
      constructor(dd, Od, md, Wd) {
        super(dd, Od, "audio", md, Wd)
      }
    }
    class yd extends Nd {
      constructor(dd, Od, md, Wd) {
        super(dd, Od, "subtitle", md, Wd)
      }
    }
    class bd {
      constructor() {
        this._pairedGroups = new Set
      }
      pairWith(dd) {
        if (!(dd instanceof bd)) throw new TypeError("other must be an OutputTrackGroup.");
        if (this === dd) throw new TypeError("Cannot pair a group with itself.");
        this._pairedGroups.add(dd), dd._pairedGroups.add(this)
      }
    }
    const Td = dd => {
      if (!dd || "object" !== typeof dd) throw new TypeError("metadata must be an object.");
      if (void 0 !== dd.languageCode && !(0, Wd.Jb)(dd.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
      if (void 0 !== dd.name && "string" !== typeof dd.name) throw new TypeError("metadata.name, when provided, must be a string.");
      if (void 0 !== dd.disposition && (0, Fd.n)(dd.disposition), void 0 !== dd.maximumPacketCount && (!Number.isInteger(dd.maximumPacketCount) || dd.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
      if (void 0 !== dd.bitrate && (!Number.isFinite(dd.bitrate) || dd.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
      if (void 0 !== dd.averageBitrate && (!Number.isFinite(dd.averageBitrate) || dd.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
      if (void 0 !== dd.group && !(dd.group instanceof bd) && (!Array.isArray(dd.group) || dd.group.some((dd => !(dd instanceof bd))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
    };
    class pd extends Wd.k {
      get target() {
        const dd = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
        if (this._rootTargetPromise) throw new TypeError(dd);
        const Od = this._getRootTarget();
        if ((0, Wd.Xb)(Od)) throw new TypeError(dd);
        return Od
      }
      constructor(dd) {
        if (super(), this.state = "pending", this.defaultTrackGroup = new bd, this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = new Set, this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new Wd.c, this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !dd || "object" !== typeof dd) throw new TypeError("options must be an object.");
        if (!(dd.format instanceof Rd.l)) throw new TypeError("options.format must be an OutputFormat.");
        if (!(dd.target instanceof Kd.j || dd.target instanceof Kd.g)) throw new TypeError("options.target must be a Target or a PathedTarget.");
        if (dd.target instanceof Kd.j && this._rememberTarget(dd.target), void 0 !== dd.initTarget && !(dd.initTarget instanceof Kd.j) && "function" !== typeof dd.initTarget) throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
        if (void 0 !== dd.onFinalize && "function" !== typeof dd.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        this.format = dd.format, this.Jt = dd.target, this._onFinalize = dd.onFinalize ?? null, this._initTarget = dd.initTarget ?? null, this._initTarget instanceof Kd.j && this._rememberTarget(this._initTarget), this._muxer = dd.format._createMuxer(this)
      }
      _getTargetValidated(dd) {
        (0, Wd.M)(this.Jt instanceof Kd.g);
        const Od = this.Jt.getTarget(dd),
          md = dd => {
            if (!(dd instanceof Kd.j)) throw new TypeError("getTarget must return a Target.");
            return dd
          };
        return (0, Wd.Xb)(Od) ? Od.then(md) : md(Od)
      }
      async _getTarget(dd) {
        (0, Wd.M)(this.Jt instanceof Kd.g);
        const Od = await this._getTargetValidated(dd);
        return this._emit("target", {
          target: Od,
          request: dd,
          isRoot: dd.isRoot
        }), "canceled" === this.state ? await Od._close() : this._rememberTarget(Od), Od
      }
      _rememberTarget(dd) {
        this._unfinalizedTargets.add(dd), dd.on("finalized", (() => this._unfinalizedTargets.delete(dd)), {
          once: !0
        })
      }
      async _getInitTarget() {
        if ((0, Wd.M)(null !== this._initTarget), this._initTarget instanceof Kd.j) return this._initTarget;
        const dd = await this._initTarget();
        return "canceled" === this.state ? await dd._close() : this._rememberTarget(dd), dd
      }
      _hasInitTarget() {
        return null !== this._initTarget
      }
      _getRootTarget() {
        if (this._rootTarget) return this._rootTarget;
        if (this._rootTargetPromise) return this._rootTargetPromise;
        if (this.Jt instanceof Kd.j) return this._emit("target", {
          target: this.Jt,
          request: null,
          isRoot: !0
        }), this._rootTarget = this.Jt, this.Jt;
        const dd = {
            path: this.Jt.rootPath,
            isRoot: !0,
            mimeType: this.format.mimeType
          },
          Od = this._getTargetValidated(dd),
          md = Od => ("canceled" === this.state ? Od._close() : this._rememberTarget(Od), this._emit("target", {
            target: Od,
            request: dd,
            isRoot: !0
          }), this._rootTarget = Od, Od);
        return (0, Wd.Xb)(Od) ? this._rootTargetPromise = Od.then(md) : md(Od)
      }
      _getRootWriter(dd) {
        return this._rootWriterPromise ??= (async () => {
          const Od = await this._getRootTarget(),
            md = new hd.d(Od, "boolean" === typeof dd ? dd : dd(Od));
          return md.start(), md
        })()
      }
      addVideoTrack(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(dd instanceof Xd.p)) throw new TypeError("source must be a VideoSource.");
        if (Td(Od), void 0 !== Od.rotation && ![0, 90, 180, 270].includes(Od.rotation)) throw new TypeError(`Invalid video rotation: ${Od.rotation}. Has to be 0, 90, 180 or 270.`);
        if (void 0 !== Od.flip && "boolean" !== typeof Od.flip) throw new TypeError("metadata.flip, when provided, must be a boolean.");
        if (void 0 !== Od.transformationMatrix && (!Array.isArray(Od.transformationMatrix) || 9 !== Od.transformationMatrix.length || !Od.transformationMatrix.every((dd => Number.isFinite(dd))))) throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");
        if (void 0 !== Od.frameRate && (!Number.isFinite(Od.frameRate) || Od.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${Od.frameRate}. Must be a positive number.`);
        if (void 0 !== Od.hasOnlyKeyPackets && "boolean" !== typeof Od.hasOnlyKeyPackets) throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");
        if (void 0 !== Od.canBeTransparent && "boolean" !== typeof Od.canBeTransparent) throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");
        if (void 0 !== Od.decoderConfig && (0, td.X)({
            decoderConfig: Od.decoderConfig
          }, dd._codec), void 0 !== Od.primingPacket) {
          if (!(Od.primingPacket instanceof Qd.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === Od.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const md = {
          ...Od
        };
        return md.group ??= this.defaultTrackGroup, this._addTrack(new qd(this.tracks.length + 1, this, dd, md))
      }
      addAudioTrack(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(dd instanceof Xd.e)) throw new TypeError("source must be an AudioSource.");
        if (Td(Od), void 0 !== Od.decoderConfig && (0, td.U)({
            decoderConfig: Od.decoderConfig
          }, dd._codec), void 0 !== Od.primingPacket) {
          if (!(Od.primingPacket instanceof Qd.e)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
          if (void 0 === Od.decoderConfig) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")
        }
        const md = {
          ...Od
        };
        return md.group ??= this.defaultTrackGroup, this._addTrack(new Hd(this.tracks.length + 1, this, dd, md))
      }
      addSubtitleTrack(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(dd instanceof Xd.n)) throw new TypeError("source must be a SubtitleSource.");
        Td(Od);
        const md = {
          ...Od
        };
        return md.group ??= this.defaultTrackGroup, this._addTrack(new yd(this.tracks.length + 1, this, dd, md))
      }
      setMetadataTags(dd) {
        if ((0, Fd.m)(dd), "pending" !== this.state) throw new Error("Cannot set metadata tags after output has been started or canceled.");
        this._metadataTags = dd
      }
      _addTrack(dd) {
        if ("pending" !== this.state) throw new Error("Cannot add track after output has been started or canceled.");
        if (dd.source._connectedTrack) throw new Error("Source is already used for a track.");
        const Od = this.format.getSupportedTrackCounts(),
          md = this.tracks.reduce(((Od, md) => Od + (md.type === dd.type ? 1 : 0)), 0),
          Wd = Od[dd.type].max;
        if (md === Wd) throw new Error(0 === Wd ? `${this.format._name} does not support ${dd.type} tracks.` : `${this.format._name} does not support more than ${Wd} ${dd.type} track` + (1 === Wd ? "" : "s") + ".");
        const Fd = Od.total.max;
        if (this.tracks.length === Fd) throw new Error(`${this.format._name} does not support more than ${Fd} tracks` + (1 === Fd ? "" : "s") + " in total.");
        if (dd.isVideoTrack()) {
          const Od = this.format.getSupportedVideoCodecs();
          if (0 === Od.length) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(dd.source._codec));
          if (!Od.includes(dd.source._codec)) throw new Error(`Codec '${dd.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${Od.map((dd=>`'${dd}'`)).join(", ")}.` + this.format._codecUnsupportedHint(dd.source._codec))
        } else if (dd.isAudioTrack()) {
          const Od = this.format.getSupportedAudioCodecs();
          if (0 === Od.length) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(dd.source._codec));
          if (!Od.includes(dd.source._codec)) throw new Error(`Codec '${dd.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${Od.map((dd=>`'${dd}'`)).join(", ")}.` + this.format._codecUnsupportedHint(dd.source._codec))
        } else if (dd.isSubtitleTrack()) {
          const Od = this.format.getSupportedSubtitleCodecs();
          if (0 === Od.length) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(dd.source._codec));
          if (!Od.includes(dd.source._codec)) throw new Error(`Codec '${dd.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${Od.map((dd=>`'${dd}'`)).join(", ")}.` + this.format._codecUnsupportedHint(dd.source._codec))
        }
        return this.tracks.push(dd), dd.source._connectedTrack = dd, dd
      }
      hasEnoughTracks() {
        const dd = this.format.getSupportedTrackCounts();
        for (const md of od) {
          if (this.tracks.reduce(((dd, Od) => dd + (Od.type === md ? 1 : 0)), 0) < dd[md].min) return !1
        }
        const Od = dd.total.min;
        return !(this.tracks.length < Od)
      }
      async start() {
        const dd = this.format.getSupportedTrackCounts();
        for (const md of od) {
          const Od = this.tracks.reduce(((dd, Od) => dd + (Od.type === md ? 1 : 0)), 0),
            Wd = dd[md].min;
          if (Od < Wd) throw new Error(Wd === dd[md].max ? `${this.format._name} requires exactly ${Wd} ${md} track${1===Wd?"":"s"}.` : `${this.format._name} requires at least ${Wd} ${md} track${1===Wd?"":"s"}.`)
        }
        const Od = dd.total.min;
        if (this.tracks.length < Od) throw new Error(Od === dd.total.max ? `${this.format._name} requires exactly ${Od} track` + (1 === Od ? "" : "s") + "." : `${this.format._name} requires at least ${Od} track` + (1 === Od ? "" : "s") + ".");
        if ("canceled" === this.state) throw new Error("Output has been canceled.");
        return this._startPromise ? (vd.e._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
          this.state = "started";
          const dd = this._mutex.acquire();
          try {
            await this._muxer.start();
            const dd = this.tracks.map((dd => dd.source._start()));
            await Promise.all(dd)
          } finally {
            (await dd)()
          }
        })()
      }
      getMimeType() {
        return this._muxer.getMimeType()
      }
      async cancel() {
        return "canceled" === this.state ? this._cancelPromise ?? void 0 : "finalizing" !== this.state && "finalized" !== this.state ? this._cancelPromise = (async () => {
          this.state = "canceled";
          const dd = await this._mutex.acquire();
          try {
            const dd = this.tracks.map((dd => dd.source._flushOrWaitForOngoingClose(!0)));
            await Promise.all(dd), await Promise.all([...this._unfinalizedTargets].map((dd => dd._close()))), this._unfinalizedTargets.clear()
          } finally {
            dd()
          }
        })() : void("finalized" === this.state && vd.e._warn("Output has already been finalized."))
      }
      async finalize() {
        if ("pending" === this.state) throw new Error("Cannot finalize before starting.");
        if ("canceled" === this.state) throw new Error("Cannot finalize after canceling.");
        return this._finalizePromise ? (vd.e._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
          this.state = "finalizing";
          const dd = await this._mutex.acquire();
          try {
            const dd = this.tracks.map((dd => dd.source._flushOrWaitForOngoingClose(!1)));
            if (await Promise.all(dd), await this._muxer.finalize(), this._rootWriterPromise) {
              const dd = await this._rootWriterPromise;
              dd.finalized || (await dd.flush(), await dd.finalize())
            }
            this._onFinalize && await this._onFinalize(), this.state = "finalized"
          } catch (Od) {
            throw this.state = "canceled", Od
          } finally {
            await Promise.all([...this._unfinalizedTargets].map((dd => dd._close().catch((() => {}))))), this._unfinalizedTargets.clear(), dd()
          }
        })()
      }
    }
  },
  41555: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      i: () => Fd
    });
    var Wd = md(41487);
    const Fd = new Uint8Array(0);
    class Rd {
      constructor(dd, Od, md, Wd) {
        let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          Xd = arguments.length > 5 ? arguments[5] : void 0,
          Kd = arguments.length > 6 ? arguments[6] : void 0;
        if (this.data = dd, this.type = Od, this.timestamp = md, this.duration = Wd, this.sequenceNumber = Rd, dd === Fd && void 0 === Xd) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
        if (void 0 === Xd && (Xd = dd.byteLength), !(dd instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
        if ("key" !== Od && "delta" !== Od) throw new TypeError('type must be either "key" or "delta".');
        if (!Number.isFinite(md)) throw new TypeError("timestamp must be a number.");
        if (!Number.isFinite(Wd) || Wd < 0) throw new TypeError("duration must be a non-negative number.");
        if (!Number.isFinite(Rd)) throw new TypeError("sequenceNumber must be a number.");
        if (!Number.isInteger(Xd) || Xd < 0) throw new TypeError("byteLength must be a non-negative integer.");
        if (void 0 !== Kd && ("object" !== typeof Kd || !Kd)) throw new TypeError("sideData, when provided, must be an object.");
        if (void 0 !== Kd?.alpha && !(Kd.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
        if (void 0 !== Kd?.alphaByteLength && (!Number.isInteger(Kd.alphaByteLength) || Kd.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
        this.byteLength = Xd, this.sideData = Kd ?? {}, this.sideData.alpha && void 0 === this.sideData.alphaByteLength && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength)
      }
      get isMetadataOnly() {
        return this.data === Fd
      }
      get microsecondTimestamp() {
        return Math.trunc(Wd.s * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(Wd.s * this.duration)
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type;
        if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
        if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
        if ("undefined" === typeof EncodedVideoChunk) throw new Error("EncodedVideoChunk is not available in this environment.");
        return new EncodedVideoChunk({
          data: this.sideData.alpha,
          type: dd,
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
      static fromEncodedChunk(dd, Od) {
        if (!(dd instanceof EncodedVideoChunk || dd instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
        const md = new Uint8Array(dd.byteLength);
        return dd.copyTo(md), new Rd(md, dd.type, dd.timestamp / 1e6, (dd.duration ?? 0) / 1e6, void 0, void 0, Od)
      }
      clone(dd) {
        if (void 0 !== dd && ("object" !== typeof dd || null === dd)) throw new TypeError("options, when provided, must be an object.");
        if (void 0 !== dd?.data && !(dd.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
        if (void 0 !== dd?.type && "key" !== dd.type && "delta" !== dd.type) throw new TypeError('options.type, when provided, must be either "key" or "delta".');
        if (void 0 !== dd?.timestamp && !Number.isFinite(dd.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
        if (void 0 !== dd?.duration && !Number.isFinite(dd.duration)) throw new TypeError("options.duration, when provided, must be a number.");
        if (void 0 !== dd?.sequenceNumber && !Number.isFinite(dd.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
        if (void 0 !== dd?.sideData && ("object" !== typeof dd.sideData || null === dd.sideData)) throw new TypeError("options.sideData, when provided, must be an object.");
        return new Rd(dd?.data ?? this.data, dd?.type ?? this.type, dd?.timestamp ?? this.timestamp, dd?.duration ?? this.duration, dd?.sequenceNumber ?? this.sequenceNumber, this.byteLength, dd?.sideData ?? this.sideData)
      }
    }
  },
  41562: (dd, Od, md) => {
    md.d(Od, {
      e: () => Vd,
      g: () => Nd,
      j: () => cd,
      m: () => Pd,
      p: () => gd
    });
    var Wd = md(41487),
      Fd = md(41526),
      Rd = function(dd, Od, md) {
        if (null !== Od && void 0 !== Od) {
          if ("object" !== typeof Od && "function" !== typeof Od) throw new TypeError("Object expected.");
          var Wd, Fd;
          if (md) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            Wd = Od[Symbol.asyncDispose]
          }
          if (void 0 === Wd) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            Wd = Od[Symbol.dispose], md && (Fd = Wd)
          }
          if ("function" !== typeof Wd) throw new TypeError("Object not disposable.");
          Fd && (Wd = function() {
            try {
              Fd.call(this)
            } catch (dd) {
              return Promise.reject(dd)
            }
          }), dd.stack.push({
            value: Od,
            dispose: Wd,
            async: md
          })
        } else md && dd.stack.push({
          async: !0
        });
        return Od
      },
      Xd = function(dd) {
        return function(Od) {
          function md(md) {
            Od.error = Od.hasError ? new dd(md, Od.error, "An error was suppressed during disposal.") : md, Od.hasError = !0
          }
          var Wd, Fd = 0;
          return function dd() {
            for (; Wd = Od.stack.pop();) try {
              if (!Wd.async && 1 === Fd) return Fd = 0, Od.stack.push(Wd), Promise.resolve().then(dd);
              if (Wd.dispose) {
                var Rd = Wd.dispose.call(Wd.value);
                if (Wd.async) return Fd |= 2, Promise.resolve(Rd).then(dd, (function(Od) {
                  return md(Od), dd()
                }))
              } else Fd |= 1
            } catch (Xd) {
              md(Xd)
            }
            if (1 === Fd) return Od.hasError ? Promise.reject(Od.error) : Promise.resolve();
            if (Od.hasError) throw Od.error
          }()
        }
      }("function" === typeof SuppressedError ? SuppressedError : function(dd, Od, md) {
        var Wd = new Error(md);
        return Wd.name = "SuppressedError", Wd.error = dd, Wd.suppressed = Od, Wd
      });
    (0, Wd.wc)();
    let Kd = -1 / 0,
      hd = -1 / 0,
      vd = null;
    "undefined" !== typeof FinalizationRegistry && (vd = new FinalizationRegistry((dd => {
      const Od = performance.now();
      "video" === dd.type ? (Od - Kd >= 1e3 && (Fd.e._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), Kd = Od), "undefined" !== typeof VideoFrame && dd.data instanceof VideoFrame && dd.data.close()) : (Od - hd >= 1e3 && (Fd.e._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), hd = Od), "undefined" !== typeof AudioData && dd.data instanceof AudioData && dd.data.close())
    })));
    class Qd {
      constructor() {
        this._referenceCount = 0, this._lastAllocationBuffer = null
      }
    }
    const td = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
      od = new Set(td);
    class Nd {
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
        return Math.trunc(Wd.s * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(Wd.s * this.duration)
      }
      get hasAlpha() {
        return this.format && this.format.includes("A")
      }
      constructor(dd, Od) {
        if (this._closed = !1, dd instanceof ArrayBuffer || "undefined" !== typeof SharedArrayBuffer && dd instanceof SharedArrayBuffer || ArrayBuffer.isView(dd)) {
          if (!Od || "object" !== typeof Od) throw new TypeError("init must be an object.");
          if (void 0 === Od.format || !od.has(Od.format)) throw new TypeError("init.format must be one of: " + td.join(", "));
          if (!Number.isInteger(Od.codedWidth) || Od.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
          if (!Number.isInteger(Od.codedHeight) || Od.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
          if (void 0 !== Od.rotation && ![0, 90, 180, 270].includes(Od.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Od.flip && "boolean" !== typeof Od.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(Od.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== Od.duration && (!Number.isFinite(Od.duration) || Od.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== Od.layout) {
            if (!Array.isArray(Od.layout)) throw new TypeError("init.layout, when provided, must be an array.");
            for (const dd of Od.layout) {
              if (!dd || "object" !== typeof dd || Array.isArray(dd)) throw new TypeError("Each entry in init.layout must be an object.");
              if (!Number.isInteger(dd.offset) || dd.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
              if (!Number.isInteger(dd.stride) || dd.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
            }
          }
          if (void 0 !== Od.visibleRect && (0, Wd.Bd)(Od.visibleRect, "init.visibleRect"), void 0 !== Od.displayWidth && (!Number.isInteger(Od.displayWidth) || Od.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
          if (void 0 !== Od.displayHeight && (!Number.isInteger(Od.displayHeight) || Od.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
          if (void 0 !== Od.displayWidth !== (void 0 !== Od.displayHeight)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
          this.format = Od.format, this.rotation = Od.rotation ?? 0, this.flip = Od.flip ?? !1, this.timestamp = Od.timestamp, this.duration = Od.duration ?? 0;
          const md = Od.layout ?? Ed(Od.format, Od.codedWidth, Od.codedHeight);
          let Fd = Od.colorSpace ?? null;
          null === Fd && (Fd = "RGBA" === this.format || "RGBX" === this.format || "BGRA" === this.format || "BGRX" === this.format ? {
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
            left: Od.visibleRect?.left ?? 0,
            top: Od.visibleRect?.top ?? 0,
            width: Od.visibleRect?.width ?? Od.codedWidth,
            height: Od.visibleRect?.height ?? Od.codedHeight
          }, void 0 !== Od.displayWidth ? (this.squarePixelWidth = this.rotation % 180 === 0 ? Od.displayWidth : Od.displayHeight, this.squarePixelHeight = this.rotation % 180 === 0 ? Od.displayHeight : Od.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = Od._doNotCopy ? (0, Wd.vd)(dd) : (0, Wd.vd)(dd).slice(), this._layout = md, this.colorSpace = new Td(Fd)
        } else if ("undefined" !== typeof VideoFrame && dd instanceof VideoFrame) {
          if (void 0 !== Od?.rotation && ![0, 90, 180, 270].includes(Od.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Od?.flip && "boolean" !== typeof Od.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (void 0 !== Od?.timestamp && !Number.isFinite(Od?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
          if (void 0 !== Od?.duration && (!Number.isFinite(Od.duration) || Od.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          void 0 !== Od?.visibleRect && (0, Wd.Bd)(Od.visibleRect, "init.visibleRect"), this._data = dd, this._layout = null, this.format = dd.format, this.visibleRect = {
            left: dd.visibleRect?.x ?? 0,
            top: dd.visibleRect?.y ?? 0,
            width: dd.visibleRect?.width ?? dd.codedWidth,
            height: dd.visibleRect?.height ?? dd.codedHeight
          }, this.rotation = Od?.rotation ?? 0, this.flip = Od?.flip ?? !1, this.squarePixelWidth = dd.displayWidth, this.squarePixelHeight = dd.displayHeight, this.timestamp = Od?.timestamp ?? dd.timestamp / 1e6, this.duration = Od?.duration ?? (dd.duration ?? 0) / 1e6, this.colorSpace = new Td(dd.colorSpace)
        } else if ("undefined" !== typeof HTMLImageElement && dd instanceof HTMLImageElement || "undefined" !== typeof SVGImageElement && dd instanceof SVGImageElement || "undefined" !== typeof ImageBitmap && dd instanceof ImageBitmap || "undefined" !== typeof HTMLVideoElement && dd instanceof HTMLVideoElement || "undefined" !== typeof HTMLCanvasElement && dd instanceof HTMLCanvasElement || "undefined" !== typeof OffscreenCanvas && dd instanceof OffscreenCanvas) {
          if (!Od || "object" !== typeof Od) throw new TypeError("init must be an object.");
          if (void 0 !== Od.rotation && ![0, 90, 180, 270].includes(Od.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Od.flip && "boolean" !== typeof Od.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(Od.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== Od.duration && (!Number.isFinite(Od.duration) || Od.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (void 0 !== Od.visibleRect && (0, Wd.Bd)(Od.visibleRect, "init.visibleRect"), "undefined" !== typeof VideoFrame) return new Nd(new VideoFrame(dd, {
            timestamp: Math.trunc(Od.timestamp * Wd.s),
            duration: Math.trunc((Od.duration ?? 0) * Wd.s) || void 0,
            visibleRect: Od.visibleRect && {
              x: Od.visibleRect.left,
              y: Od.visibleRect.top,
              width: Od.visibleRect.width,
              height: Od.visibleRect.height
            }
          }), Od);
          let md = 0,
            Fd = 0;
          if ("naturalWidth" in dd ? (md = dd.naturalWidth, Fd = dd.naturalHeight) : "videoWidth" in dd ? (md = dd.videoWidth, Fd = dd.videoHeight) : "width" in dd && (md = Number(dd.width), Fd = Number(dd.height)), !md || !Fd) throw new TypeError("Could not determine dimensions.");
          const Rd = Od.visibleRect ?? {
              left: 0,
              top: 0,
              width: md,
              height: Fd
            },
            Xd = new OffscreenCanvas(Rd.width, Rd.height),
            Kd = Xd.getContext("2d", {
              alpha: (0, Wd.Fb)(),
              willReadFrequently: !0
            });
          if (!Kd) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
          Kd.drawImage(dd, -Rd.left, -Rd.top), this._data = Xd, this._layout = null, this.format = "RGBX", this.visibleRect = {
            left: 0,
            top: 0,
            width: Rd.width,
            height: Rd.height
          }, this.squarePixelWidth = Rd.width, this.squarePixelHeight = Rd.height, this.rotation = Od.rotation ?? 0, this.flip = Od.flip ?? !1, this.timestamp = Od.timestamp, this.duration = Od.duration ?? 0, this.colorSpace = new Td({
            matrix: "rgb",
            primaries: "bt709",
            transfer: "iec61966-2-1",
            fullRange: !0
          })
        } else {
          if (!(dd instanceof Qd)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
          if (!Od || "object" !== typeof Od) throw new TypeError("init must be an object.");
          if (void 0 !== Od.rotation && ![0, 90, 180, 270].includes(Od.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
          if (void 0 !== Od.flip && "boolean" !== typeof Od.flip) throw new TypeError("init.flip, when provided, must be a boolean.");
          if (!Number.isFinite(Od.timestamp)) throw new TypeError("init.timestamp must be a number.");
          if (void 0 !== Od.duration && (!Number.isFinite(Od.duration) || Od.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
          if (this._data = dd, dd._referenceCount++, this.format = dd.getFormat(), null !== this.format && !td.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
          if (this.visibleRect = {
              left: 0,
              top: 0,
              width: dd.getCodedWidth(),
              height: dd.getCodedHeight()
            }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
          if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
          if (this.squarePixelWidth = dd.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
          if (this.squarePixelHeight = dd.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
          this.rotation = Od.rotation ?? 0, this.flip = Od.flip ?? !1, this.timestamp = Od.timestamp, this.duration = Od.duration ?? 0, this.colorSpace = dd.getColorSpace()
        }
        this.encodeOptions = Od?.encodeOptions ?? {}, this.pixelAspectRatio = (0, Wd.id)({
          num: this.squarePixelWidth * this.codedHeight,
          den: this.squarePixelHeight * this.codedWidth
        }), vd?.register(this, {
          type: "video",
          data: this._data
        }, this)
      }
      clone() {
        if (this._closed) throw new Error("VideoSample is closed.");
        return (0, Wd.M)(null !== this._data), this._data instanceof Qd ? new Nd(this._data, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : pd(this._data) ? new Nd(this._data.clone(), {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: this.rotation,
          flip: this.flip,
          encodeOptions: this.encodeOptions
        }) : this._data instanceof Uint8Array ? ((0, Wd.M)(this._layout), new Nd(this._data, {
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
        })) : new Nd(this._data, {
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
        this._closed || (vd?.unregister(this), this._data instanceof Qd ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : pd(this._data) ? this._data.close() : this._data = null, this._closed = !0)
      }
      allocationSize() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (wd(dd), this._closed) throw new Error("VideoSample is closed.");
        if (null == (dd.format ?? this.format)) throw new Error("Cannot get allocation size when format is null.");
        if (pd(this._data)) return this._data.allocationSize(dd);
        return Ud(this, dd).allocationSize
      }
      async copyTo(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(0, Wd.yb)(dd)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (wd(Od), this._closed) throw new Error("VideoSample is closed.");
        if (null == (Od.format ?? this.format)) throw new Error("Cannot copy video sample data when format is null.");
        if ((0, Wd.M)(null !== this._data), pd(this._data)) return this._data.copyTo(dd, Od);
        if (Od.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(Od.format)) {
          if (!(this._data instanceof Qd)) {
            if ("undefined" === typeof VideoFrame) throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
            const md = this.toVideoFrame(),
              Wd = await md.copyTo(dd, Od);
            return md.close(), Wd
          } {
            const md = {
              stack: [],
              error: void 0,
              hasError: !1
            };
            try {
              const Wd = Rd(md, await this._data.toRgbSample({
                timestamp: this.timestamp,
                duration: this.duration,
                rotation: this.rotation,
                flip: this.flip
              }, Od.colorSpace ?? "srgb"), !1);
              if (!(Wd instanceof Nd)) throw new TypeError("toRgbSample() must return a VideoSample.");
              if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(Wd.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${Wd.format}' instead.`);
              return await Wd.copyTo(dd, Od)
            } catch (od) {
              md.error = od, md.hasError = !0
            } finally {
              Xd(md)
            }
          }
        }
        const md = Ud(this, Od);
        (0, Wd.M)(this.format);
        const Fd = (0, Wd.vd)(dd);
        if (Fd.byteLength < md.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${md.allocationSize}, Available: ${Fd.byteLength}`);
        const Kd = Jd(this.format);
        let hd;
        if (this._data instanceof Qd) {
          let dd = this._data.getDataPlanes();
          if ((0, Wd.Xb)(dd) && (dd = await dd), !Array.isArray(dd) || dd.some((dd => !(dd.data instanceof Uint8Array) || !Number.isInteger(dd.stride) || dd.stride < 0))) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
          hd = dd
        } else if (this._data instanceof Uint8Array)(0, Wd.M)(this._layout), (0, Wd.M)(this._layout.length === Kd.length), hd = this._layout.map(((dd, Od) => {
          const md = Math.ceil(this.codedHeight / Kd[Od].heightDivisor);
          return {
            data: this._data.subarray(dd.offset, dd.offset + dd.stride * md),
            stride: dd.stride
          }
        }));
        else {
          const dd = this._data.getContext("2d");
          (0, Wd.M)(dd);
          const Od = dd.getImageData(0, 0, this.codedWidth, this.codedHeight);
          hd = [{
            data: (0, Wd.vd)(Od.data),
            stride: 4 * this.codedWidth
          }]
        }
        const vd = [],
          td = Kd.length;
        for (let Wd = 0; Wd < td; Wd++) {
          const dd = md.computedLayouts[Wd],
            Od = hd[Wd].stride,
            Rd = hd[Wd].data;
          let Xd = dd.sourceTop * Od;
          Xd += dd.sourceLeftBytes;
          let Kd = dd.destinationOffset;
          const Qd = dd.sourceWidthBytes,
            td = {
              offset: Kd,
              stride: dd.destinationStride
            };
          for (let md = 0; md < dd.sourceHeight; md++) {
            if (Xd + Qd > Rd.byteLength) throw new Error("Source buffer OOB read.");
            if (Kd + Qd > Fd.byteLength) throw new Error("Destination buffer OOB write.");
            const md = Rd.subarray(Xd, Xd + Qd);
            Fd.set(md, Kd), Xd += Od, Kd += dd.destinationStride
          }
          vd.push(td)
        }
        if (void 0 !== Od.format) {
          const dd = this.format.startsWith("RGB") !== Od.format.startsWith("RGB"),
            Wd = this.format.includes("X") && Od.format.includes("A");
          if (dd || Wd)
            for (let Od = 0; Od < md.allocationSize; Od += 4) {
              if (dd) {
                const dd = Fd[Od],
                  md = Fd[Od + 2];
                Fd[Od] = md, Fd[Od + 2] = dd
              }
              Wd && (Fd[Od + 3] = 255)
            }
        }
        return vd
      }
      toVideoFrame() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, Wd.M)(null !== this._data), this._data instanceof Qd) {
          if (null === this.format) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
          const dd = this._data.getDataPlanes();
          if ((0, Wd.Xb)(dd)) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
          const Od = dd.reduce(((dd, Od) => dd + Od.data.byteLength), 0),
            md = new Uint8Array(Od);
          let Fd = 0;
          const Rd = [];
          for (const Wd of dd) md.set(Wd.data, Fd), Rd.push(Fd), Fd += Wd.data.byteLength;
          return new VideoFrame(md, {
            format: this.format,
            layout: dd.map(((dd, Od) => ({
              offset: Rd[Od],
              stride: dd.stride
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
        return pd(this._data) ? new VideoFrame(this._data, {
          timestamp: this.microsecondTimestamp,
          duration: this.microsecondDuration || void 0
        }) : this._data instanceof Uint8Array ? ((0, Wd.M)(this._layout), new VideoFrame(this._data, {
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
      draw(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        let vd = 0,
          Qd = 0,
          td = this.displayWidth,
          od = this.displayHeight,
          Nd = 0,
          qd = 0,
          Hd = this.displayWidth,
          yd = this.displayHeight;
        if (void 0 !== Rd ? (vd = Od, Qd = md, td = Wd, od = Fd, Nd = Rd, qd = Xd, void 0 !== Kd ? (Hd = Kd, yd = hd) : (Hd = td, yd = od)) : (Nd = Od, qd = md, void 0 !== Wd && (Hd = Wd, yd = Fd)), !("undefined" !== typeof CanvasRenderingContext2D && dd instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && dd instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Number.isFinite(vd)) throw new TypeError("sx must be a number.");
        if (!Number.isFinite(Qd)) throw new TypeError("sy must be a number.");
        if (!Number.isFinite(td) || td < 0) throw new TypeError("sWidth must be a non-negative number.");
        if (!Number.isFinite(od) || od < 0) throw new TypeError("sHeight must be a non-negative number.");
        if (!Number.isFinite(Nd)) throw new TypeError("dx must be a number.");
        if (!Number.isFinite(qd)) throw new TypeError("dy must be a number.");
        if (!Number.isFinite(Hd) || Hd < 0) throw new TypeError("dWidth must be a non-negative number.");
        if (!Number.isFinite(yd) || yd < 0) throw new TypeError("dHeight must be a non-negative number.");
        if (this._closed) throw new Error("VideoSample is closed.");
        ({
          sx: vd,
          sy: Qd,
          sWidth: td,
          sHeight: od
        } = this._unmapSourceRegion(vd, Qd, td, od, this.rotation, this.flip));
        const bd = this.toCanvasImageSource();
        dd.save();
        const Td = Nd + Hd / 2,
          pd = qd + yd / 2;
        dd.translate(Td, pd), this.flip && dd.scale(-1, 1), dd.rotate(this.rotation * Math.PI / 180);
        const Yd = this.rotation % 180 === 0 ? 1 : Hd / yd;
        dd.scale(1 / Yd, Yd), dd.drawImage(bd, vd, Qd, td, od, -Hd / 2, -yd / 2, Hd, yd), dd.restore()
      }
      drawWithFit(dd, Od) {
        if (!("undefined" !== typeof CanvasRenderingContext2D && dd instanceof CanvasRenderingContext2D || "undefined" !== typeof OffscreenCanvasRenderingContext2D && dd instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
        if (!Od || "object" !== typeof Od) throw new TypeError("options must be an object.");
        if (!["fill", "contain", "cover"].includes(Od.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
        if (void 0 !== Od.rotation && ![0, 90, 180, 270].includes(Od.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
        if (void 0 !== Od.flip && "boolean" !== typeof Od.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        void 0 !== Od.crop && gd(Od.crop, "options.");
        const md = dd.canvas.width,
          Wd = dd.canvas.height,
          Fd = Od.rotation ?? this.rotation,
          Rd = Od.flip ?? this.flip,
          [Xd, Kd] = Fd % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let hd, vd, Qd, td, od = Od.crop;
        od && (od = Yd(od, Xd, Kd));
        const {
          sx: Nd,
          sy: qd,
          sWidth: Hd,
          sHeight: yd
        } = this._unmapSourceRegion(Od.crop?.left ?? 0, Od.crop?.top ?? 0, Od.crop?.width ?? Xd, Od.crop?.height ?? Kd, Fd, Rd);
        if ("fill" === Od.fit) hd = 0, vd = 0, Qd = md, td = Wd;
        else {
          const [dd, Fd] = Od.crop ? [Od.crop.width, Od.crop.height] : [Xd, Kd], Rd = "contain" === Od.fit ? Math.min(md / dd, Wd / Fd) : Math.max(md / dd, Wd / Fd);
          Qd = dd * Rd, td = Fd * Rd, hd = (md - Qd) / 2, vd = (Wd - td) / 2
        }
        dd.save();
        const bd = Fd % 180 === 0 ? 1 : Qd / td;
        dd.translate(md / 2, Wd / 2), Rd && dd.scale(-1, 1), dd.rotate(Fd * Math.PI / 180), dd.scale(1 / bd, bd), dd.translate(-md / 2, -Wd / 2), dd.drawImage(this.toCanvasImageSource(), Nd, qd, Hd, yd, hd, vd, Qd, td), dd.restore()
      }
      _unmapSourceRegion(dd, Od, md, Wd, Fd, Rd) {
        if (Rd) {
          dd = (Fd % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight) - dd - md
        }
        return 90 === Fd ? [dd, Od, md, Wd] = [Od, this.squarePixelHeight - dd - md, Wd, md] : 180 === Fd ? [dd, Od] = [this.squarePixelWidth - dd - md, this.squarePixelHeight - Od - Wd] : 270 === Fd && ([dd, Od, md, Wd] = [this.squarePixelWidth - Od - Wd, dd, Wd, md]), {
          sx: dd,
          sy: Od,
          sWidth: md,
          sHeight: Wd
        }
      }
      _drawWithFitAndMipmapping(dd, Od, md) {
        const Wd = dd.width,
          Fd = dd.height,
          [Rd, Xd] = md.rotation % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth],
          Kd = md.crop ? md.crop.width : Rd,
          hd = md.crop ? md.crop.height : Xd;
        let vd = 0;
        2 * Wd < Kd && 2 * Fd < hd && (vd = Math.floor(Math.log2(Math.min(Kd / Wd, hd / Fd))));
        const Qd = Wd * 2 ** vd,
          td = Fd * 2 ** vd,
          {
            canvas: od,
            context: Nd,
            isNew: qd
          } = vd > 0 ? bd(Qd, td) : {
            canvas: dd,
            context: Od,
            isNew: md.targetIsFresh
          };
        Nd.imageSmoothingQuality = "high", md.fillBlack ? (Nd.fillStyle = "black", Nd.fillRect(0, 0, Qd, td)) : qd || Nd.clearRect(0, 0, Qd, td), this.drawWithFit(Nd, {
          fit: md.fit,
          rotation: md.rotation,
          flip: md.flip,
          crop: md.crop
        }), Nd.globalCompositeOperation = "copy";
        for (let Hd = vd; Hd > 1; Hd--) {
          const dd = Wd * 2 ** Hd,
            Od = Fd * 2 ** Hd;
          Nd.drawImage(od, 0, 0, dd, Od, 0, 0, dd / 2, Od / 2)
        }
        Nd.globalCompositeOperation = "source-over", vd > 0 && (Od.imageSmoothingQuality = "high", Od.globalCompositeOperation = "copy", Od.drawImage(od, 0, 0, 2 * Wd, 2 * Fd, 0, 0, Wd, Fd), Od.globalCompositeOperation = "source-over")
      }
      toCanvasImageSource() {
        if (this._closed) throw new Error("VideoSample is closed.");
        if ((0, Wd.M)(null !== this._data), this._data instanceof Qd || this._data instanceof Uint8Array) {
          const dd = this.toVideoFrame();
          return queueMicrotask((() => dd.close())), dd
        }
        return this._data
      }
      async transform(dd) {
        if (!dd || "object" !== typeof dd) throw new TypeError("options must be an object.");
        if (void 0 !== dd.width && (!Number.isInteger(dd.width) || dd.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
        if (void 0 !== dd.height && (!Number.isInteger(dd.height) || dd.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
        if (void 0 !== dd.roundDimensionsTo && (!Number.isInteger(dd.roundDimensionsTo) || dd.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
        if (void 0 !== dd.fit && !["fill", "contain", "cover"].includes(dd.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (void 0 !== dd.width && void 0 !== dd.height && void 0 === dd.fit) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
        if (void 0 !== dd.rotate && ![0, 90, 180, 270].includes(dd.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
        if (void 0 !== dd.flip && "boolean" !== typeof dd.flip) throw new TypeError("options.flip, when provided, must be a boolean.");
        if (void 0 !== dd.crop && gd(dd.crop, "options."), void 0 !== dd.alpha && !["keep", "discard"].includes(dd.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
        const {
          rotation: Od,
          flip: md
        } = (0, Wd.jb)(this.rotation, this.flip, dd.rotate ?? 0, dd.flip ?? !1), [Fd, Rd] = Od % 180 === 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
        let Xd = dd.crop;
        Xd && (Xd = Yd(Xd, Fd, Rd));
        const Kd = Xd ? Xd.width : Fd,
          hd = Xd ? Xd.height : Rd,
          vd = Kd / hd;
        let Qd, td;
        void 0 !== dd.width && void 0 === dd.height ? (Qd = dd.width, td = Qd / vd) : void 0 === dd.width && void 0 !== dd.height ? (td = dd.height, Qd = td * vd) : void 0 !== dd.width && void 0 !== dd.height ? (Qd = dd.width, td = dd.height) : (Qd = Kd, td = hd), Qd = (0, Wd.Qc)(Qd, dd.roundDimensionsTo ?? 1), td = (0, Wd.Qc)(td, dd.roundDimensionsTo ?? 1);
        const od = {
          width: Qd,
          height: td,
          fit: dd.fit ?? "fill",
          rotation: Od,
          flip: md,
          crop: Xd ?? {
            left: 0,
            top: 0,
            width: Fd,
            height: Rd
          },
          alpha: dd.alpha ?? "keep"
        };
        for (const Nd of qd) {
          let dd = Nd(this, od);
          if ((0, Wd.Xb)(dd) && (dd = await dd), null !== dd) return dd
        }
        const {
          canvas: Hd,
          context: yd,
          isNew: Td
        } = bd(od.width, od.height);
        return this._drawWithFitAndMipmapping(Hd, yd, {
          fit: od.fit,
          rotation: od.rotation,
          flip: od.flip,
          crop: od.crop,
          targetIsFresh: Td,
          fillBlack: "discard" === od.alpha
        }), new Nd(Hd, {
          timestamp: this.timestamp,
          duration: this.duration,
          rotation: 0,
          flip: !1
        })
      }
      setRotation(dd) {
        if (![0, 90, 180, 270].includes(dd)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
        this.rotation = dd
      }
      setFlip(dd) {
        if ("boolean" !== typeof dd) throw new TypeError("newFlip must be a boolean.");
        this.flip = dd
      }
      setTimestamp(dd) {
        if (!Number.isFinite(dd)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = dd
      }
      setDuration(dd) {
        if (!Number.isFinite(dd) || dd < 0) throw new TypeError("newDuration must be a non-negative number.");
        this.duration = dd
      }
      setEncodeOptions(dd) {
        if (!dd || "object" !== typeof dd) throw new TypeError("newEncodeOptions must be an object.");
        this.encodeOptions = dd
      } [Symbol.dispose]() {
        this.close()
      }
    }
    const qd = [],
      Hd = [];
    let yd = 0;
    const bd = (dd, Od) => {
      for (const Wd of Hd)
        if (Wd.canvas.width === dd && Wd.canvas.height === Od) return Wd.age = yd++, {
          canvas: Wd.canvas,
          context: Wd.context,
          isNew: !1
        };
      let md;
      if ("undefined" !== typeof OffscreenCanvas) md = new OffscreenCanvas(dd, Od);
      else {
        if ("undefined" === typeof window || "undefined" === typeof document) throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
        md = document.createElement("canvas"), md.width = dd, md.height = Od
      }
      const Fd = md.getContext("2d", {
        alpha: !0,
        willReadFrequently: !1
      });
      if (!Fd) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
      return Hd.length >= 3 && Hd.splice((0, Wd.F)(Hd, (dd => dd.age)), 1), Hd.push({
        canvas: md,
        context: Fd,
        age: yd++
      }), {
        canvas: md,
        context: Fd,
        isNew: !0
      }
    };
    class Td {
      constructor(dd) {
        if (void 0 !== dd) {
          if (!dd || "object" !== typeof dd) throw new TypeError("init.colorSpace, when provided, must be an object.");
          const Od = Object.keys(Wd.g);
          if (null != dd.primaries && !Od.includes(dd.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${Od.join(", ")}.`);
          const md = Object.keys(Wd.t);
          if (null != dd.transfer && !md.includes(dd.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${md.join(", ")}.`);
          const Fd = Object.keys(Wd.p);
          if (null != dd.matrix && !Fd.includes(dd.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${Fd.join(", ")}.`);
          if (null != dd.fullRange && "boolean" !== typeof dd.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
        }
        this.primaries = dd?.primaries ?? null, this.transfer = dd?.transfer ?? null, this.matrix = dd?.matrix ?? null, this.fullRange = dd?.fullRange ?? null
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
    const pd = dd => "undefined" !== typeof VideoFrame && dd instanceof VideoFrame,
      Yd = (dd, Od, md) => {
        const Fd = Math.min(dd.left, Od),
          Rd = Math.min(dd.top, md),
          Xd = Math.min(dd.width, Od - Fd),
          Kd = Math.min(dd.height, md - Rd);
        return (0, Wd.M)(Xd >= 0), (0, Wd.M)(Kd >= 0), {
          left: Fd,
          top: Rd,
          width: Xd,
          height: Kd
        }
      },
      gd = (dd, Od) => {
        if (!dd || "object" !== typeof dd) throw new TypeError(Od + "crop, when provided, must be an object.");
        if (!Number.isInteger(dd.left) || dd.left < 0) throw new TypeError(Od + "crop.left must be a non-negative integer.");
        if (!Number.isInteger(dd.top) || dd.top < 0) throw new TypeError(Od + "crop.top must be a non-negative integer.");
        if (!Number.isInteger(dd.width) || dd.width < 0) throw new TypeError(Od + "crop.width must be a non-negative integer.");
        if (!Number.isInteger(dd.height) || dd.height < 0) throw new TypeError(Od + "crop.height must be a non-negative integer.")
      },
      wd = dd => {
        if (!dd || "object" !== typeof dd) throw new TypeError("options must be an object.");
        if (void 0 !== dd.colorSpace && !["display-p3", "srgb"].includes(dd.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
        if (void 0 !== dd.format && "string" !== typeof dd.format) throw new TypeError("options.format, when provided, must be a string.");
        if (void 0 !== dd.layout) {
          if (!Array.isArray(dd.layout)) throw new TypeError("options.layout, when provided, must be an array.");
          for (const Od of dd.layout) {
            if (!Od || "object" !== typeof Od) throw new TypeError("Each entry in options.layout must be an object.");
            if (!Number.isInteger(Od.offset) || Od.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
            if (!Number.isInteger(Od.stride) || Od.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.")
          }
        }
        if (void 0 !== dd.rect) {
          if (!dd.rect || "object" !== typeof dd.rect) throw new TypeError("options.rect, when provided, must be an object.");
          if (void 0 !== dd.rect.x && (!Number.isInteger(dd.rect.x) || dd.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
          if (void 0 !== dd.rect.y && (!Number.isInteger(dd.rect.y) || dd.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
          if (void 0 !== dd.rect.width && (!Number.isInteger(dd.rect.width) || dd.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
          if (void 0 !== dd.rect.height && (!Number.isInteger(dd.rect.height) || dd.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")
        }
      },
      Ed = (dd, Od, md) => {
        const Wd = Jd(dd),
          Fd = [];
        let Rd = 0;
        for (const Xd of Wd) {
          const dd = Math.ceil(Od / Xd.widthDivisor),
            Wd = Math.ceil(md / Xd.heightDivisor),
            Kd = dd * Xd.sampleBytes,
            hd = Kd * Wd;
          Fd.push({
            offset: Rd,
            stride: Kd
          }), Rd += hd
        }
        return Fd
      },
      Jd = dd => {
        const Od = (dd, Od, md, Wd, Fd) => {
          const Rd = [{
            sampleBytes: dd,
            widthDivisor: 1,
            heightDivisor: 1
          }, {
            sampleBytes: Od,
            widthDivisor: md,
            heightDivisor: Wd
          }, {
            sampleBytes: Od,
            widthDivisor: md,
            heightDivisor: Wd
          }];
          return Fd && Rd.push({
            sampleBytes: dd,
            widthDivisor: 1,
            heightDivisor: 1
          }), Rd
        };
        switch (dd) {
          case "I420":
            return Od(1, 1, 2, 2, !1);
          case "I420P10":
          case "I420P12":
            return Od(2, 2, 2, 2, !1);
          case "I420A":
            return Od(1, 1, 2, 2, !0);
          case "I420AP10":
          case "I420AP12":
            return Od(2, 2, 2, 2, !0);
          case "I422":
            return Od(1, 1, 2, 1, !1);
          case "I422P10":
          case "I422P12":
            return Od(2, 2, 2, 1, !1);
          case "I422A":
            return Od(1, 1, 2, 1, !0);
          case "I422AP10":
          case "I422AP12":
            return Od(2, 2, 2, 1, !0);
          case "I444":
            return Od(1, 1, 1, 1, !1);
          case "I444P10":
          case "I444P12":
            return Od(2, 2, 1, 1, !1);
          case "I444A":
            return Od(1, 1, 1, 1, !0);
          case "I444AP10":
          case "I444AP12":
            return Od(2, 2, 1, 1, !0);
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
            (0, Wd.J)(dd), (0, Wd.M)(!1)
        }
      },
      Ud = (dd, Od) => {
        const md = {
            left: 0,
            top: 0,
            width: dd.codedWidth,
            height: dd.codedHeight
          },
          Wd = Od.rect,
          Fd = xd(md, Wd, dd.codedWidth, dd.codedHeight, dd.format),
          Rd = Od.layout;
        let Xd;
        if (Od.format && Od.format !== dd.format) {
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(Od.format)) throw new Error("NotSupportedError: Invalid destination format.");
          Xd = Od.format
        } else Xd = dd.format;
        return Sd(Fd, Xd, Rd)
      },
      xd = (dd, Od, md, Wd, Fd) => {
        const Rd = {
          ...dd
        };
        if (void 0 !== Od) {
          if (0 === Od.width || 0 === Od.height) throw new TypeError("visibleRect dimensions cannot be zero.");
          if ((Od.x || 0) + (Od.width || 0) > md) throw new TypeError("visibleRect exceeds codedWidth.");
          if ((Od.y || 0) + (Od.height || 0) > Wd) throw new TypeError("visibleRect exceeds codedHeight.");
          Rd.x = Od.x || 0, Rd.y = Od.y || 0, Rd.width = Od.width || 0, Rd.height = Od.height || 0
        }
        if (!Bd(Fd, Rd)) throw new TypeError("visibleRect alignment is invalid for the format.");
        return Rd
      },
      Bd = (dd, Od) => {
        if (null === dd) return !0;
        const md = Jd(dd);
        for (let Wd = 0; Wd < md.length; Wd++) {
          const dd = md[Wd],
            Fd = dd.widthDivisor,
            Rd = dd.heightDivisor;
          if ((Od.x || 0) % Fd !== 0) return !1;
          if ((Od.y || 0) % Rd !== 0) return !1
        }
        return !0
      },
      Sd = (dd, Od, md) => {
        const Wd = Jd(Od),
          Fd = Wd.length;
        if (void 0 !== md && md.length !== Fd) throw new TypeError(`Layout must have ${Fd} planes.`);
        let Rd = 0;
        const Xd = [],
          Kd = [];
        for (let hd = 0; hd < Fd; hd++) {
          const Od = Wd[hd],
            Fd = Od.sampleBytes,
            vd = Od.widthDivisor,
            Qd = Od.heightDivisor,
            td = {
              destinationOffset: 0,
              destinationStride: 0,
              sourceTop: 0,
              sourceHeight: 0,
              sourceLeftBytes: 0,
              sourceWidthBytes: 0
            };
          if (td.sourceTop = Math.ceil(Math.trunc(dd.y || 0) / Qd), td.sourceHeight = Math.ceil(Math.trunc(dd.height || 0) / Qd), td.sourceLeftBytes = Math.floor(Math.trunc(dd.x || 0) / vd) * Fd, td.sourceWidthBytes = Math.floor(Math.trunc(dd.width || 0) / vd) * Fd, void 0 !== md) {
            const dd = md[hd];
            if (dd.stride < td.sourceWidthBytes) throw new TypeError(`Stride for plane ${hd} is too small.`);
            td.destinationOffset = dd.offset, td.destinationStride = dd.stride
          } else td.destinationOffset = Rd, td.destinationStride = td.sourceWidthBytes;
          const od = td.destinationStride * td.sourceHeight + td.destinationOffset;
          if (od > 4294967295) throw new TypeError("Allocation size exceeds limit.");
          Kd.push(od), Rd = Math.max(Rd, od);
          for (let dd = 0; dd < hd; dd++) {
            const Od = Xd[dd];
            if (!(Kd[hd] <= Od.destinationOffset || Kd[dd] <= td.destinationOffset)) throw new TypeError("Planes overlap.")
          }
          Xd.push(td)
        }
        return {
          allocationSize: Rd,
          computedLayouts: Xd
        }
      },
      sd = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
    class ud {
      constructor() {
        this._referenceCount = 0
      }
    }
    class Vd {
      get microsecondTimestamp() {
        return Math.trunc(Wd.s * this.timestamp)
      }
      get microsecondDuration() {
        return Math.trunc(Wd.s * this.duration)
      }
      constructor(dd) {
        if (this._closed = !1, Ld(dd)) {
          if (null === dd.format) throw new TypeError("AudioData with null format is not supported.");
          this._data = dd, this.format = dd.format, this.sampleRate = dd.sampleRate, this.numberOfFrames = dd.numberOfFrames, this.numberOfChannels = dd.numberOfChannels, this.timestamp = dd.timestamp / 1e6, this.duration = dd.numberOfFrames / dd.sampleRate
        } else if (dd instanceof ud) {
          if (this._data = dd, dd._referenceCount++, this.format = dd.getFormat(), !sd.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
          if (this.sampleRate = dd.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
          if (this.numberOfFrames = dd.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
          if (this.numberOfChannels = dd.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
          if (this.timestamp = dd.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
          this.duration = this.numberOfFrames / this.sampleRate
        } else {
          if (!dd || "object" !== typeof dd) throw new TypeError("Invalid AudioDataInit: must be an object.");
          if (!sd.has(dd.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
          if (!Number.isFinite(dd.sampleRate) || dd.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
          if (!Number.isInteger(dd.numberOfChannels) || 0 === dd.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
          if (!Number.isFinite(dd?.timestamp)) throw new TypeError("init.timestamp must be a number.");
          const Od = dd.data.byteLength / (Ad(dd.format) * dd.numberOfChannels);
          if (!Number.isInteger(Od)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
          let md;
          if (this.format = dd.format, this.sampleRate = dd.sampleRate, this.numberOfFrames = Od, this.numberOfChannels = dd.numberOfChannels, this.timestamp = dd.timestamp, this.duration = Od / dd.sampleRate, dd.data instanceof ArrayBuffer) md = new Uint8Array(dd.data);
          else {
            if (!ArrayBuffer.isView(dd.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
            md = new Uint8Array(dd.data.buffer, dd.data.byteOffset, dd.data.byteLength)
          }
          const Wd = this.numberOfFrames * this.numberOfChannels * Ad(this.format);
          if (md.byteLength < Wd) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
          this._data = md
        }
        vd?.register(this, {
          type: "audio",
          data: this._data
        }, this)
      }
      allocationSize(dd) {
        if (!dd || "object" !== typeof dd) throw new TypeError("options must be an object.");
        if (!Number.isInteger(dd.planeIndex) || dd.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== dd.format && !sd.has(dd.format)) throw new TypeError("Invalid format.");
        if (void 0 !== dd.frameOffset && (!Number.isInteger(dd.frameOffset) || dd.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== dd.frameCount && (!Number.isInteger(dd.frameCount) || dd.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const Od = dd.format ?? this.format,
          md = dd.frameOffset ?? 0;
        if (md >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
        const Wd = void 0 !== dd.frameCount ? dd.frameCount : this.numberOfFrames - md;
        if (Wd > this.numberOfFrames - md) throw new RangeError("frameCount out of range");
        const Fd = Ad(Od),
          Rd = rd(Od);
        if (Rd && dd.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
        if (!Rd && 0 !== dd.planeIndex) throw new RangeError("planeIndex out of range");
        return (Rd ? Wd : Wd * this.numberOfChannels) * Fd
      }
      copyTo(dd, Od) {
        if (!(0, Wd.yb)(dd)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
        if (!Od || "object" !== typeof Od) throw new TypeError("options must be an object.");
        if (!Number.isInteger(Od.planeIndex) || Od.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
        if (void 0 !== Od.format && !sd.has(Od.format)) throw new TypeError("Invalid format.");
        if (void 0 !== Od.frameOffset && (!Number.isInteger(Od.frameOffset) || Od.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
        if (void 0 !== Od.frameCount && (!Number.isInteger(Od.frameCount) || Od.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const {
          format: md,
          frameCount: Fd,
          frameOffset: Rd
        } = Od;
        let {
          planeIndex: Xd
        } = Od, Kd = this.format;
        const hd = md ?? this.format;
        if (!hd) throw new Error("Destination format not determined");
        const vd = this.numberOfFrames,
          Qd = this.numberOfChannels,
          td = Rd ?? 0;
        if (td >= vd) throw new RangeError("frameOffset out of range");
        const od = void 0 !== Fd ? Fd : vd - td;
        if (od > vd - td) throw new RangeError("frameCount out of range");
        const Nd = Ad(hd),
          qd = rd(hd);
        if (qd && Xd >= Qd) throw new RangeError("planeIndex out of range");
        if (!qd && 0 !== Xd) throw new RangeError("planeIndex out of range");
        const Hd = (qd ? od : od * Qd) * Nd;
        if (dd.byteLength < Hd) throw new RangeError("Destination buffer is too small");
        const yd = (0, Wd.sd)(dd),
          bd = nd(hd);
        if (Ld(this._data)) {
          if ((0, Wd.cc)() && Qd > 2 && hd !== Kd) return void zd(this._data, yd, Kd, hd, Qd, Xd, td, od);
          try {
            return void this._data.copyTo(dd, {
              planeIndex: Xd,
              frameOffset: td,
              frameCount: od,
              format: hd
            })
          } catch (Ed) {
            if ("f32-planar" === hd) throw Ed;
            Kd = "f32-planar"
          }
        }
        const Td = Gd(Kd),
          pd = Ad(Kd),
          Yd = rd(Kd);
        let gd;
        if (this._data instanceof ud) {
          const dd = dd => {
            const Od = this._data.getDataPlane(dd);
            if (!(Od instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
            const md = vd * pd * (Yd ? 1 : Qd);
            if (Od.byteLength !== md) throw new TypeError(`Data plane ${dd} has invalid size. Expected exactly ${md} bytes, got ${Od.byteLength} bytes.`);
            return Od
          };
          if (Yd)
            if (qd) gd = dd(Xd), Xd = 0;
            else {
              gd = new Uint8Array(vd * pd * Qd);
              for (let Od = 0; Od < Qd; Od++) {
                const md = dd(Od);
                gd.set(md, Od * vd * pd)
              }
            }
          else gd = dd(0)
        } else if (this._data instanceof Uint8Array) gd = this._data;
        else if ((0, Wd.M)("f32-planar" === Kd), qd) gd = new Uint8Array(this._data.allocationSize({
          format: "f32-planar",
          planeIndex: Xd
        })), this._data.copyTo(gd, {
          format: "f32-planar",
          planeIndex: Xd
        }), Xd = 0;
        else {
          gd = new Uint8Array(this._data.allocationSize({
            format: "f32-planar",
            planeIndex: 0
          }) * Qd);
          for (let dd = 0; dd < Qd; dd++) this._data.copyTo(gd.subarray(dd * vd * pd, (dd + 1) * vd * pd), {
            format: "f32-planar",
            planeIndex: dd
          })
        }
        const wd = (0, Wd.sd)(gd);
        for (let Wd = 0; Wd < od; Wd++)
          if (qd) {
            let dd;
            dd = Yd ? (Xd * vd + (Wd + td)) * pd : ((Wd + td) * Qd + Xd) * pd;
            bd(yd, Wd * Nd, Td(wd, dd))
          } else
            for (let dd = 0; dd < Qd; dd++) {
              let Od;
              Od = Yd ? (dd * vd + (Wd + td)) * pd : ((Wd + td) * Qd + dd) * pd;
              bd(yd, (Wd * Qd + dd) * Nd, Td(wd, Od))
            }
      }
      clone() {
        if (this._closed) throw new Error("AudioSample is closed.");
        if (this._data instanceof ud) {
          const dd = new Vd(this._data);
          return dd.setTimestamp(this.timestamp), dd
        }
        if (Ld(this._data)) {
          const dd = new Vd(this._data.clone());
          return dd.setTimestamp(this.timestamp), dd
        }
        return new Vd({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp,
          data: this._data
        })
      }
      trim(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.numberOfFrames;
        if (!Number.isInteger(dd) || dd < 0) throw new TypeError("startFrame must be a non-negative integer.");
        if (!Number.isInteger(Od) || Od < 0) throw new TypeError("endFrame must be a non-negative integer.");
        if (dd > this.numberOfFrames) throw new RangeError("startFrame out of range.");
        if (Od > this.numberOfFrames) throw new RangeError("endFrame out of range.");
        if (Od < dd) throw new RangeError("endFrame must not be less than startFrame.");
        if (this._closed) throw new Error("AudioSample is closed.");
        const md = Od - dd,
          Wd = Ad(this.format);
        let Fd;
        if (rd(this.format)) {
          const Od = md * Wd;
          if (Fd = new Uint8Array(Od * this.numberOfChannels), md > 0)
            for (let Wd = 0; Wd < this.numberOfChannels; Wd++) this.copyTo(Fd.subarray(Wd * Od, (Wd + 1) * Od), {
              planeIndex: Wd,
              format: this.format,
              frameOffset: dd,
              frameCount: md
            })
        } else Fd = new Uint8Array(md * this.numberOfChannels * Wd), md > 0 && this.copyTo(Fd, {
          planeIndex: 0,
          format: this.format,
          frameOffset: dd,
          frameCount: md
        });
        return new Vd({
          data: Fd,
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.timestamp + dd / this.sampleRate
        })
      }
      close() {
        this._closed || (vd?.unregister(this), this._data instanceof ud ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : Ld(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
      }
      toAudioData() {
        if (this._closed) throw new Error("AudioSample is closed.");
        return this._data instanceof ud ? this._createAudioDataFromData() : Ld(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
          format: this.format,
          sampleRate: this.sampleRate,
          numberOfFrames: this.numberOfFrames,
          numberOfChannels: this.numberOfChannels,
          timestamp: this.microsecondTimestamp,
          data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
        })
      }
      _createAudioDataFromData() {
        if (rd(this.format)) {
          const dd = this.allocationSize({
              planeIndex: 0,
              format: this.format
            }),
            Od = new ArrayBuffer(dd * this.numberOfChannels);
          for (let md = 0; md < this.numberOfChannels; md++) this.copyTo(new Uint8Array(Od, md * dd, dd), {
            planeIndex: md,
            format: this.format
          });
          return new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: Od
          })
        } {
          const dd = new ArrayBuffer(this.allocationSize({
            planeIndex: 0,
            format: this.format
          }));
          return this.copyTo(dd, {
            planeIndex: 0,
            format: this.format
          }), new AudioData({
            format: this.format,
            sampleRate: this.sampleRate,
            numberOfFrames: this.numberOfFrames,
            numberOfChannels: this.numberOfChannels,
            timestamp: this.microsecondTimestamp,
            data: dd
          })
        }
      }
      toAudioBuffer() {
        if (this._closed) throw new Error("AudioSample is closed.");
        const dd = new AudioBuffer({
            numberOfChannels: this.numberOfChannels,
            length: this.numberOfFrames,
            sampleRate: this.sampleRate
          }),
          Od = new Float32Array(this.allocationSize({
            planeIndex: 0,
            format: "f32-planar"
          }) / 4);
        for (let md = 0; md < this.numberOfChannels; md++) this.copyTo(Od, {
          planeIndex: md,
          format: "f32-planar"
        }), dd.copyToChannel(Od, md);
        return dd
      }
      setTimestamp(dd) {
        if (!Number.isFinite(dd)) throw new TypeError("newTimestamp must be a number.");
        this.timestamp = dd
      } [Symbol.dispose]() {
        this.close()
      }
      static * _fromAudioBuffer(dd, Od) {
        if (!(dd instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const md = dd.numberOfChannels,
          Wd = dd.sampleRate,
          Fd = dd.length,
          Rd = Math.floor(24e4 / md);
        let Xd = 0,
          Kd = Fd;
        for (; Kd > 0;) {
          const Fd = Math.min(Rd, Kd),
            hd = new Float32Array(md * Fd);
          for (let Od = 0; Od < md; Od++) dd.copyFromChannel(hd.subarray(Od * Fd, (Od + 1) * Fd), Od, Xd);
          yield new Vd({
            format: "f32-planar",
            sampleRate: Wd,
            numberOfFrames: Fd,
            numberOfChannels: md,
            timestamp: Od + Xd / Wd,
            data: hd
          }), Xd += Fd, Kd -= Fd
        }
      }
      static fromAudioBuffer(dd, Od) {
        if (!(dd instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
        const md = dd.numberOfChannels,
          Wd = dd.sampleRate,
          Fd = dd.length,
          Rd = Math.floor(24e4 / md);
        let Xd = 0,
          Kd = Fd;
        const hd = [];
        for (; Kd > 0;) {
          const Fd = Math.min(Rd, Kd),
            vd = new Float32Array(md * Fd);
          for (let Od = 0; Od < md; Od++) dd.copyFromChannel(vd.subarray(Od * Fd, (Od + 1) * Fd), Od, Xd);
          const Qd = new Vd({
            format: "f32-planar",
            sampleRate: Wd,
            numberOfFrames: Fd,
            numberOfChannels: md,
            timestamp: Od + Xd / Wd,
            data: vd
          });
          hd.push(Qd), Xd += Fd, Kd -= Fd
        }
        return hd
      }
    }
    const Ad = dd => {
        switch (dd) {
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
      rd = dd => {
        switch (dd) {
          case "u8-planar":
          case "s16-planar":
          case "s32-planar":
          case "f32-planar":
            return !0;
          default:
            return !1
        }
      },
      Gd = dd => {
        switch (dd) {
          case "u8":
          case "u8-planar":
            return (dd, Od) => (dd.getUint8(Od) - 128) / 128;
          case "s16":
          case "s16-planar":
            return (dd, Od) => dd.getInt16(Od, !0) / 32768;
          case "s32":
          case "s32-planar":
            return (dd, Od) => dd.getInt32(Od, !0) / 2147483648;
          case "f32":
          case "f32-planar":
            return (dd, Od) => dd.getFloat32(Od, !0)
        }
      },
      nd = dd => {
        switch (dd) {
          case "u8":
          case "u8-planar":
            return (dd, Od, md) => dd.setUint8(Od, (0, Wd.$)(Math.round(128 * md) + 128, 0, 255));
          case "s16":
          case "s16-planar":
            return (dd, Od, md) => dd.setInt16(Od, (0, Wd.$)(Math.round(32768 * md), -32768, 32767), !0);
          case "s32":
          case "s32-planar":
            return (dd, Od, md) => dd.setInt32(Od, (0, Wd.$)(Math.round(2147483648 * md), -2147483648, 2147483647), !0);
          case "f32":
          case "f32-planar":
            return (dd, Od, md) => dd.setFloat32(Od, md, !0)
        }
      },
      Ld = dd => "undefined" !== typeof AudioData && dd instanceof AudioData,
      Pd = dd => {
        switch (dd) {
          case "u8-planar":
            return "u8";
          case "s16-planar":
            return "s16";
          case "s32-planar":
            return "s32";
          case "f32-planar":
            return "f32";
          default:
            return dd
        }
      },
      zd = (dd, Od, md, Fd, Rd, Xd, Kd, hd) => {
        const vd = Gd(md),
          Qd = nd(Fd),
          td = Ad(md),
          od = Ad(Fd),
          Nd = rd(md);
        if (rd(Fd))
          if (Nd) {
            const Fd = new ArrayBuffer(hd * td),
              Rd = (0, Wd.sd)(Fd);
            dd.copyTo(Fd, {
              planeIndex: Xd,
              frameOffset: Kd,
              frameCount: hd,
              format: md
            });
            for (let dd = 0; dd < hd; dd++) {
              Qd(Od, dd * od, vd(Rd, dd * td))
            }
          } else {
            const Fd = new ArrayBuffer(hd * Rd * td),
              Nd = (0, Wd.sd)(Fd);
            dd.copyTo(Fd, {
              planeIndex: 0,
              frameOffset: Kd,
              frameCount: hd,
              format: md
            });
            for (let dd = 0; dd < hd; dd++) {
              Qd(Od, dd * od, vd(Nd, (dd * Rd + Xd) * td))
            }
          }
        else if (Nd) {
          const Fd = new ArrayBuffer(hd * td),
            Xd = (0, Wd.sd)(Fd);
          for (let Wd = 0; Wd < Rd; Wd++) {
            dd.copyTo(Fd, {
              planeIndex: Wd,
              frameOffset: Kd,
              frameCount: hd,
              format: md
            });
            for (let dd = 0; dd < hd; dd++) {
              Qd(Od, (dd * Rd + Wd) * od, vd(Xd, dd * td))
            }
          }
        } else {
          const Fd = new ArrayBuffer(hd * Rd * td),
            Xd = (0, Wd.sd)(Fd);
          dd.copyTo(Fd, {
            planeIndex: 0,
            frameOffset: Kd,
            frameCount: hd,
            format: md
          });
          for (let dd = 0; dd < hd; dd++)
            for (let md = 0; md < Rd; md++) {
              const Wd = dd * Rd + md;
              Qd(Od, Wd * od, vd(Xd, Wd * td))
            }
        }
      },
      cd = (dd, Od) => {
        const md = dd.allocationSize({
            format: Od,
            planeIndex: 0
          }),
          Wd = new ArrayBuffer(md);
        return dd.copyTo(Wd, {
          format: Od,
          planeIndex: 0
        }), new Vd({
          data: Wd,
          format: Od,
          numberOfChannels: dd.numberOfChannels,
          sampleRate: dd.sampleRate,
          timestamp: dd.timestamp,
          duration: dd.duration
        })
      }
  },
  41537: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      e: () => vd,
      h: () => Rd,
      k: () => hd
    });
    const Wd = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
      Fd = /^WEBVTT(.|\n)*?\n{2}/,
      Rd = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
    class Xd {
      constructor(dd) {
        this.preambleText = null, this.preambleEmitted = !1, this.options = dd
      }
      parse(dd) {
        let Od;
        if (dd = dd.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), Wd.lastIndex = 0, !this.preambleText) {
          if (!Fd.test(dd)) throw new Error("WebVTT preamble incorrect.");
          Od = Wd.exec(dd);
          const md = dd.slice(0, Od?.index ?? dd.length).trimEnd();
          if (!md) throw new Error("No WebVTT preamble provided.");
          this.preambleText = md, Od && (dd = dd.slice(Od.index), Wd.lastIndex = 0)
        }
        for (; Od = Wd.exec(dd);) {
          const md = dd.slice(0, Od.index),
            Fd = Od[1],
            Rd = Od.index + Od[0].length,
            Xd = dd.indexOf("\n", Rd) + 1,
            Kd = dd.slice(Rd, Xd).trim();
          let vd = dd.indexOf("\n\n", Rd); - 1 === vd && (vd = dd.length);
          const Qd = hd(Od[2]),
            td = hd(Od[3]) - Qd,
            od = dd.slice(Xd, vd).trim();
          dd = dd.slice(vd).trimStart(), Wd.lastIndex = 0;
          const Nd = {
              timestamp: Qd / 1e3,
              duration: td / 1e3,
              text: od,
              identifier: Fd,
              settings: Kd,
              notes: md
            },
            qd = {};
          this.preambleEmitted || (qd.config = {
            description: this.preambleText
          }, this.preambleEmitted = !0), this.options.output(Nd, qd)
        }
      }
    }
    const Kd = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
      hd = dd => {
        const Od = Kd.exec(dd);
        if (!Od) throw new Error("Expected match.");
        return 36e5 * Number(Od[1] || "0") + 6e4 * Number(Od[2]) + 1e3 * Number(Od[3]) + Number(Od[4])
      },
      vd = dd => {
        const Od = Math.floor(dd / 36e5),
          md = Math.floor(dd % 36e5 / 6e4),
          Wd = Math.floor(dd % 6e4 / 1e3),
          Fd = dd % 1e3;
        return Od.toString().padStart(2, "0") + ":" + md.toString().padStart(2, "0") + ":" + Wd.toString().padStart(2, "0") + "." + Fd.toString().padStart(3, "0")
      }
  },
  41544: (dd, Od, md) => {
    var Wd;
    md.d(Od, {
      c: () => vd,
      d: () => Qd,
      g: () => od,
      j: () => Xd
    });
    var Fd = md(41551),
      Rd = md(41487);
    "undefined" !== typeof(Wd || (Wd = md.t(Fd, 2))) && (Wd || (Wd = md.t(Fd, 2)));
    class Xd extends Rd.k {
      constructor() {
        super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
      }
      _setMonotonicity(dd) {
        !1 !== this._monotonicity && (this._monotonicity = dd)
      }
      _dispatchWrite(dd, Od) {
        this.onwrite?.(dd, Od), this._emit("write", {
          start: dd,
          end: Od
        })
      }
      slice(dd) {
        if (!Number.isInteger(dd) || dd < 0) throw new TypeError("offset must be a non-negative integer.");
        return new td(this, dd)
      }
    }
    const Kd = 65536,
      hd = 2 ** 32;
    class vd extends Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (super(), this.buffer = null, this._maxPos = 0, !dd || "object" !== typeof dd) throw new TypeError("BufferTarget options, when provided, must be an object.");
        if (void 0 !== dd.onFinalize && "function" !== typeof dd.onFinalize) throw new TypeError("options.onFinalize, when provided, must be a function.");
        if (this._options = dd, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
          this._buffer = new ArrayBuffer(Kd, {
            maxByteLength: hd
          })
        } catch {
          this._buffer = new ArrayBuffer(Kd), this._supportsResize = !1
        } else this._buffer = new ArrayBuffer(Kd);
        this._bytes = new Uint8Array(this._buffer)
      }
      _ensureSize(dd) {
        let Od = this._buffer.byteLength;
        for (; Od < dd;) Od *= 2;
        if (Od !== this._buffer.byteLength) {
          if (Od > hd) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
          if (this._supportsResize) this._buffer.resize(Od);
          else {
            const dd = new ArrayBuffer(Od),
              md = new Uint8Array(dd);
            md.set(this._bytes, 0), this._buffer = dd, this._bytes = md
          }
        }
      }
      _start() {}
      _write(dd, Od) {
        this._ensureSize(Od + dd.byteLength), this._bytes.set(dd, Od), this._maxPos = Math.max(this._maxPos, Od + dd.byteLength), this._dispatchWrite(Od, Od + dd.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
      }
      async _close() {}
      _getSlice(dd, Od) {
        return this._bytes.slice(dd, Od)
      }
    }
    class Qd extends Xd {
      _start() {}
      _write(dd, Od) {
        this._dispatchWrite(Od, Od + dd.byteLength)
      }
      async _flush() {}
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
    }
    class td extends Xd {
      constructor(dd, Od) {
        super(), this._baseTarget = dd, this._offset = Od
      }
      _start() {}
      _write(dd, Od) {
        this._baseTarget._write(dd, this._offset + Od), this._dispatchWrite(Od, Od + dd.byteLength)
      }
      _flush() {
        return this._baseTarget._flush()
      }
      async _finalize() {
        this._emit("finalized")
      }
      async _close() {}
      _setMonotonicity(dd) {
        super._setMonotonicity(dd), this._baseTarget._setMonotonicity(dd)
      }
    }
    class od {
      constructor(dd, Od) {
        if (this.rootPath = dd, this.getTarget = Od, "string" !== typeof dd) throw new TypeError("rootPath must be a string.");
        if ("function" !== typeof Od) throw new TypeError("getTarget must be a function.")
      }
    }
  },
  41534: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    const Wd = "Mediabunny v1.61.3"
  },
  41540: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(41487);
    class Fd {
      constructor(dd, Od) {
        if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, dd._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
        this.target = dd, dd._setMonotonicity(Od), dd._writerAcquired = !0
      }
      start() {
        (0, Wd.M)(!this.started), this.target._start(), this.started = !0
      }
      write(dd) {
        (0, Wd.M)(this.started && !this.finalized), this.maybeTrackWrites(dd), this.target._write(dd, this.pos), this.pos += dd.byteLength
      }
      seek(dd) {
        this.pos = dd
      }
      getPos() {
        return this.pos
      }
      async flush() {
        return (0, Wd.M)(this.started && !this.finalized), this.target._flush()
      }
      async finalize() {
        (0, Wd.M)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
      }
      maybeTrackWrites(dd) {
        if (!this.trackedWrites) return;
        let Od = this.getPos();
        if (Od < this.trackedStart) {
          if (Od + dd.byteLength <= this.trackedStart) return;
          dd = dd.subarray(this.trackedStart - Od), Od = 0
        }
        const md = Od + dd.byteLength - this.trackedStart;
        let Wd = this.trackedWrites.byteLength;
        for (; Wd < md;) Wd *= 2;
        if (Wd !== this.trackedWrites.byteLength) {
          const dd = new Uint8Array(Wd);
          dd.set(this.trackedWrites, 0), this.trackedWrites = dd
        }
        this.trackedWrites.set(dd, Od - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, Od + dd.byteLength)
      }
      startTrackingWrites() {
        this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
      }
      stopTrackingWrites() {
        if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
        const dd = {
          data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
          start: this.trackedStart,
          end: this.trackedEnd
        };
        return this.trackedWrites = null, dd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);