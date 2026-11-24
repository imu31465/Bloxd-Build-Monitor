export const id = 191;
export const ids = [191];
export const modules = {
  40756: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      h: () => nT,
      k: () => gT
    });
    var WT = mT(40765),
      zT = mT(4895),
      MT = mT(40771);

    function gT(TT) {
      return TT.payloadKind === zT.lc.Msgpack ? (0, WT.c)(TT.payload) : void 0
    }

    function nT(TT, UT) {
      if (UT.payloadKind === zT.lc.Bytes || UT.payloadKind === zT.lc.MsgpackBin) return (0, MT.c)(TT, UT.payload)
    }

    function HT(TT) {
      return null !== TT && "object" === typeof TT
    }
  },
  40780: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      h: () => LT,
      l: () => pT,
      m: () => jT,
      q: () => cT
    });
    var WT = mT(4895),
      zT = mT(40786);
    const MT = new Map,
      gT = new Set,
      nT = new Set;
    let HT = 0,
      kT = 0;

    function jT(TT, UT) {
      let mT = MT.get(TT);
      return mT || (mT = new Set, MT.set(TT, mT)), mT.add(UT), () => {
        mT.delete(UT)
      }
    }

    function lT() {
      return 0 !== HT
    }

    function LT(TT) {
      return gT.add(TT), () => {
        gT.delete(TT)
      }
    }

    function pT(TT) {
      return nT.add(TT), () => {
        nT.delete(TT)
      }
    }
    const BT = "A raw message listener threw";

    function ZT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gT;
      for (const WT of UT) try {
        WT()
      } catch (mT) {
        TT ? (0, zT.l)(mT, BT) : console.error(BT, mT)
      }
    }
    const cT = {
      fire: function(TT) {
        if ("connection" === TT.type) {
          const UT = TT.phase === WT.O.Activated && TT.conn !== HT && TT.conn > kT,
            mT = (TT.phase === WT.O.Left || TT.phase === WT.O.Closed) && TT.conn === HT;
          return void(UT || mT ? (HT = UT ? TT.conn : 0, ZT(!0)) : TT.phase === WT.O.Resumed && 0 !== HT && TT.conn > kT && (HT = TT.conn, ZT(!0, nT)))
        }
        const UT = MT.get(TT.Xj);
        if (UT && TT.conn === HT && 0 !== HT)
          for (const WT of UT) try {
            WT(TT)
          } catch (mT) {
            (0, zT.l)(mT, BT)
          }
      },
      close: function(TT) {
        kT = Math.max(kT, TT, HT), 0 !== HT && (HT = 0, ZT(!1))
      }
    }
  },
  40743: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      h: () => HT,
      j: () => nT
    });
    var WT = mT(1367),
      zT = mT(40709);
    const MT = new TextDecoder,
      gT = new TextEncoder;

    function nT(TT, UT) {
      const mT = TT.queries.entityName(UT);
      if (mT === zT.Fc) return;
      const gT = TT.memoryData(TT.scratch(), 4 + mT, 4, "entity_name's answer");
      if (!gT) return;
      const nT = gT.getUint32(0, !0),
        HT = MT.decode(new Uint8Array(gT.buffer, gT.byteOffset + 4, mT));
      return (0, WT.d)(HT, !1, nT === zT.Nd ? null : nT)
    }

    function HT(TT, UT, mT) {
      const WT = gT.encode(mT);
      if (WT.length > zT.Db) return !1;
      const MT = TT.memoryView(Uint8Array, TT.scratch(), WT.length, "has_effect's name");
      return !!MT && (MT.set(WT), 1 === TT.queries.hasEffect(UT, WT.length))
    }

    function kT(TT, UT, mT, WT) {
      const gT = TT.queries.blockData(UT, mT, WT);
      if (gT === zT.Fc) return;
      const nT = TT.memoryView(Uint8Array, TT.scratch(), gT, "block_data's answer");
      return nT ? JSON.parse(MT.decode(nT)) : void 0
    }
  },
  40765: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      g: () => jT
    });
    const WT = new TextDecoder;

    function zT(TT) {
      const UT = new MT(TT),
        mT = UT.value();
      if (UT.at !== TT.length) throw new Error(`msgpack: ${TT.length-UT.at} bytes after the value`);
      return mT
    }
    class MT {
      constructor(TT) {
        this.bytes = TT, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(TT.buffer, TT.byteOffset, TT.byteLength)
      }
      value() {
        const TT = this.u8();
        if (TT <= 127) return TT;
        if (TT >= 224) return TT - 256;
        if (TT >= 128 && TT <= 143) return this.map(15 & TT);
        if (TT >= 144 && TT <= 159) return this.array(15 & TT);
        if (TT >= 160 && TT <= 191) return this.str(31 & TT);
        switch (TT) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${TT.toString(16)} at ${this.at-1}`)
        }
      }
      take(TT) {
        const UT = this.at;
        if (UT + TT > this.bytes.length) throw new Error(`msgpack: ${TT} bytes past the end at ${UT}`);
        return this.at = UT + TT, UT
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(TT) {
        const UT = this.take(8);
        return TT ? this.view.getBigInt64(UT, !1) : this.view.getBigUint64(UT, !1)
      }
      str(TT) {
        const UT = this.take(TT),
          mT = this.bytes;
        if (TT < 16) {
          let zT = "";
          for (let MT = UT; MT < UT + TT; MT++) {
            const gT = mT[MT];
            if (gT >= 128) return WT.decode(mT.subarray(UT, UT + TT));
            zT += String.fromCharCode(gT)
          }
          return zT
        }
        return WT.decode(mT.subarray(UT, UT + TT))
      }
      bin(TT) {
        const UT = this.take(TT);
        return this.bytes.subarray(UT, UT + TT)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(TT) {
        this.enter();
        const UT = [];
        for (let mT = 0; mT < TT; mT++) UT.push(this.value());
        return this.depth--, UT
      }
      map(TT) {
        this.enter();
        const UT = {};
        for (let mT = 0; mT < TT; mT++) {
          const TT = this.value(),
            mT = this.value();
          UT["__proto__" === TT ? "__proto_" : String(TT)] = mT
        }
        return this.depth--, UT
      }
      ext(TT) {
        const UT = this.view.getInt8(this.take(1)),
          mT = this.take(TT);
        if (0 !== UT) {
          if (-1 === UT) {
            if (1 === TT) return new Date(NaN);
            if (4 === TT) return new Date(1e3 * this.view.getUint32(mT, !1));
            if (8 === TT) {
              const TT = this.view.getUint32(mT, !1),
                UT = TT >>> 2,
                WT = 4294967296 * (3 & TT) + this.view.getUint32(mT + 4, !1);
              return new Date(1e3 * WT + UT / 1e6)
            }
            if (12 === TT) {
              const TT = this.view.getUint32(mT, !1),
                UT = 4294967296 * this.view.getInt32(mT + 4, !1) + this.view.getUint32(mT + 8, !1);
              return new Date(1e3 * UT + TT / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${UT} of ${TT} bytes`)
        }
      }
    }
    const gT = new TextEncoder,
      nT = -(2n ** 63n),
      HT = 2n ** 63n - 1n,
      kT = 2n ** 64n - 1n;

    function jT(TT) {
      const UT = new lT;
      return UT.value(TT, 0), UT.bytes()
    }
    class lT {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(TT, UT) {
        if (UT > 512) throw new Error("msgpack: nested too deep");
        switch (typeof TT) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(TT ? 195 : 194);
          case "number":
            return void this.number(TT);
          case "bigint":
            return void this.bigint(TT);
          case "string":
            return void this.string(TT);
          case "object":
            if (null === TT) this.u8(192);
            else if (TT instanceof Uint8Array) this.head(TT.length, 196, -1, 197, 198), this.room(TT.length), this.buf.set(TT, this.at), this.at += TT.length;
            else if (Array.isArray(TT)) {
              this.head(TT.length, 220, 144, 220, 221);
              for (const mT of TT) this.value(mT, UT + 1)
            } else {
              var mT, WT;
              if (Object.getPrototypeOf(TT) !== Object.prototype && null !== Object.getPrototypeOf(TT)) throw new Error(`msgpack: can't encode a ${null!==(mT=null===(WT=TT.constructor)||void 0===WT?void 0:WT.name)&&void 0!==mT?mT:"object"}`);
              {
                const mT = Object.keys(TT);
                this.head(mT.length, 222, 128, 222, 223);
                for (const WT of mT) this.string(WT), this.value(TT[WT], UT + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof TT)
        }
      }
      number(TT) {
        Number.isInteger(TT) && TT >= -2147483648 && TT <= 4294967295 ? TT >= 0 ? TT < 128 ? this.u8(TT) : TT < 256 ? (this.u8(204), this.u8(TT)) : TT < 65536 ? (this.u8(205), this.u16(TT)) : (this.u8(206), this.u32(TT)) : TT >= -32 ? this.u8(TT + 256) : TT >= -128 ? (this.u8(208), this.u8(TT + 256)) : TT >= -32768 ? (this.u8(209), this.u16(TT + 65536)) : (this.u8(210), this.u32(TT >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, TT, !1), this.at += 8)
      }
      bigint(TT) {
        const UT = TT >= nT && TT <= HT;
        if (!UT && (TT < 0n || TT > kT)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(UT ? 211 : 207), this.room(8), UT ? this.view.setBigInt64(this.at, TT, !1) : this.view.setBigUint64(this.at, TT, !1), this.at += 8
      }
      string(TT) {
        const UT = gT.encode(TT);
        this.head(UT.length, 217, 160, 218, 219), this.room(UT.length), this.buf.set(UT, this.at), this.at += UT.length
      }
      head(TT, UT, mT, WT, zT) {
        mT >= 0 && TT < (160 === mT ? 32 : 16) ? this.u8(mT | TT) : UT !== WT && TT < 256 ? (this.u8(UT), this.u8(TT)) : TT < 65536 ? (this.u8(WT), this.u16(TT)) : (this.u8(zT), this.u32(TT))
      }
      room(TT) {
        if (this.at + TT <= this.buf.length) return;
        let UT = 2 * this.buf.length;
        for (; UT < this.at + TT;) UT *= 2;
        const mT = new Uint8Array(UT);
        mT.set(this.buf.subarray(0, this.at)), this.buf = mT, this.view = new DataView(mT.buffer)
      }
      u8(TT) {
        this.room(1), this.buf[this.at++] = TT
      }
      u16(TT) {
        this.room(2), this.view.setUint16(this.at, TT, !1), this.at += 2
      }
      u32(TT) {
        this.room(4), this.view.setUint32(this.at, TT, !1), this.at += 4
      }
    }
  },
  40771: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(40752);
    const zT = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class MT {
      constructor(TT) {
        this.buf = TT, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let TT = this.u8(),
          UT = 127 & TT,
          mT = 128;
        for (; 128 & TT;) {
          if (mT > 2 ** 63) throw new RangeError("avro: varint too long");
          TT = this.u8(), UT += (127 & TT) * mT, mT *= 128
        }
        return UT % 2 === 1 ? -(UT + 1) / 2 : UT / 2
      }
      float() {
        const TT = this.take(4);
        return this.floats().getFloat32(TT, !0)
      }
      double() {
        const TT = this.take(8);
        return this.floats().getFloat64(TT, !0)
      }
      str() {
        const TT = this.size(),
          UT = this.take(TT),
          mT = UT + TT;
        if (TT <= 32) {
          let TT = "";
          for (let WT = UT; WT < mT; WT++) {
            const MT = this.buf[WT];
            if (MT >= 128) return zT.decode(this.buf.subarray(UT, mT));
            TT += String.fromCharCode(MT)
          }
          return TT
        }
        return zT.decode(this.buf.subarray(UT, mT))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(TT) {
        const UT = this.take(TT);
        return this.buf.slice(UT, UT + TT)
      }
      index(TT) {
        const UT = this.long();
        if (!(UT >= 0 && UT < TT)) throw new RangeError(`avro: index ${UT} of ${TT}`);
        return UT
      }
      jB(TT) {
        const UT = [];
        for (let mT = this.long(); 0 !== mT; mT = this.long()) {
          mT = this.block(mT);
          for (let WT = 0; WT < mT; WT++) UT.push(TT(this))
        }
        return UT
      }
      map(TT) {
        const UT = {};
        for (let mT = this.long(); 0 !== mT; mT = this.long()) {
          mT = this.block(mT);
          for (let WT = 0; WT < mT; WT++) {
            UT[this.str()] = TT(this)
          }
        }
        return UT
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(TT) {
        let UT = TT;
        if (UT < 0 && (UT = -UT, this.long()), UT > this.buf.length - this.at) throw new RangeError(`avro: block of ${UT} items in ${this.buf.length-this.at} bytes`);
        return UT
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const TT = this.long();
        if (TT < 0) throw new RangeError(`avro: length ${TT}`);
        return TT
      }
      u8() {
        const TT = this.buf[this.at];
        if (void 0 === TT) throw new RangeError("avro: truncated");
        return this.at++, TT
      }
      take(TT) {
        const UT = this.at;
        if (TT > this.buf.length - UT) throw new RangeError("avro: truncated");
        return this.at = UT + TT, UT
      }
    }

    function gT(TT, UT) {
      const mT = new MT(UT),
        zT = (0, WT.lb)(TT, mT);
      return mT.end(), zT
    }
  },
  40752: (TT, UT, mT) => {
    mT.d(UT, {
      B: () => gT,
      D: () => dT,
      H: () => zT,
      L: () => nT,
      M: () => pT,
      Q: () => JT,
      U: () => YT,
      X: () => OT,
      Y: () => jT,
      ab: () => lT,
      bb: () => xT,
      e: () => bT,
      fb: () => BT,
      gb: () => qT,
      h: () => cT,
      ib: () => ZT,
      j: () => vT,
      jb: () => HT,
      l: () => fT,
      lb: () => wT,
      m: () => eT,
      p: () => WT,
      r: () => MT,
      u: () => iT,
      x: () => LT,
      y: () => kT
    });
    const WT = 2,
      zT = 12,
      MT = 27,
      gT = 40,
      nT = 52,
      HT = 59,
      kT = 63,
      jT = 83,
      lT = 84,
      LT = 89,
      pT = 91,
      BT = 93,
      ZT = 94,
      cT = 95,
      vT = 97,
      fT = 101,
      qT = 102,
      iT = 73,
      bT = 16,
      OT = 86,
      eT = 60,
      YT = 17,
      JT = 56,
      xT = 100,
      dT = 81;

    function wT(TT, UT) {
      switch (TT) {
        case WT:
          return function(TT) {
            return {
              aM: hT(TT),
              yM: TT.float(),
              XM: TT.long()
            }
          }(UT);
        case zT:
          return function(TT) {
            return {
              Fz: IT(TT),
              Pz: IT(TT)
            }
          }(UT);
        case MT:
          return function(TT) {
            return {
              nT: TT.bool(),
              HT: IT(TT)
            }
          }(UT);
        case gT:
          return UT.str();
        case nT:
          return function(TT) {
            return {
              id: TT.long(),
              ST: gU(TT)
            }
          }(UT);
        case HT:
          return function(TT) {
            return {
              hM: IT(TT),
              DM: HU(TT)
            }
          }(UT);
        case kT:
          return UT.str();
        case jT:
        case lT:
          return UT.long();
        case LT:
          return function(TT) {
            return {
              yz: TT.long(),
              Xz: TT.bool(),
              Iz: TT.float()
            }
          }(UT);
        case pT:
          return UT.long();
        case BT:
          return function(TT) {
            return {
              PU: TT.bool(),
              xT: lU(TT)
            }
          }(UT);
        case ZT:
          return function(TT) {
            return {
              id: TT.str(),
              position: jU(TT),
              tU: LU(TT),
              style: uT(TT),
              yU: TT.bool()
            }
          }(UT);
        case cT:
          return function(TT) {
            return {
              id: IT(TT)
            }
          }(UT);
        case vT:
          return function(TT) {
            return {
              Rz: TT.long(),
              TM: TT.str(),
              UM: zU(TT),
              mM: zU(TT),
              WM: IT(TT),
              zM: IT(TT),
              MM: IT(TT),
              gM: IT(TT),
              nM: IT(TT),
              HM: zU(TT),
              kM: zU(TT),
              jM: IT(TT),
              lM: IT(TT),
              LM: IT(TT)
            }
          }(UT);
        case fT:
          return UT.str();
        case qT:
          return UT.long();
        case iT:
          return function(TT) {
            return {
              pm: TT.long(),
              Bm: TT.str(),
              Zm: TT.float()
            }
          }(UT);
        case bT:
          return function(TT) {
            return {
              Vz: TT.bool(),
              Cz: IT(TT),
              rz: TT.str(),
              Kz: BU(TT),
              Sz: BU(TT),
              Gz: TT.bool(),
              Nz: TT.long(),
              Ez: ZU(TT)
            }
          }(UT);
        case OT:
          return function(TT) {
            return {
              az: IT(TT)
            }
          }(UT);
        case eT:
          return function(TT) {
            return {
              XT: TT.str(),
              IT: TT.str(),
              QT: cU(TT),
              VU: TT.str(),
              uU: AT(TT),
              CU: TT.float()
            }
          }(UT);
        case YT:
          return function(TT) {
            return {
              XT: TT.str(),
              IT: TT.str(),
              QT: cU(TT)
            }
          }(UT);
        case JT:
          return function(TT) {
            return TT.jB(vU)
          }(UT);
        case xT:
          return function(TT) {
            return {
              sT: qU(TT),
              CT: KT(TT)
            }
          }(UT);
        case dT:
          return function(TT) {
            return {
              Em: TT.bool(),
              hm: IT(TT),
              Dm: bU(TT),
              Am: FU(TT)
            }
          }(UT);
        default:
          throw new Error(`no reader for to-client message ${TT}`)
      }
    }

    function tT(TT) {
      return {
        entityName: TT.str()
      }
    }

    function aT(TT) {
      const UT = TT.index(4);
      return 0 === UT ? TT.str() : 1 === UT ? TT.long() : 2 === UT ? TT.bool() : tT(TT)
    }

    function yT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.map(aT)
      }(TT)
    }

    function XT(TT) {
      return {
        translationKey: TT.str(),
        params: yT(TT)
      }
    }

    function IT(TT) {
      return 0 === TT.index(2) ? null : TT.str()
    }

    function QT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          color: IT(TT),
          colour: IT(TT),
          fontSize: IT(TT)
        }
      }(TT)
    }

    function sT(TT) {
      return {
        icon: TT.str(),
        style: QT(TT)
      }
    }

    function FT(TT) {
      const UT = TT.index(3);
      return 0 === UT ? {
        string: TT.str()
      } : 1 === UT ? {
        styledEntityName: tT(TT)
      } : {
        styledTranslatedText: XT(TT)
      }
    }

    function PT(TT) {
      const UT = TT.index(3);
      return 0 === UT ? null : 1 === UT ? TT.str() : TT.long()
    }

    function VT(TT) {
      return 0 === TT.index(2) ? null : TT.float()
    }

    function uT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          color: IT(TT),
          colour: IT(TT),
          fontWeight: PT(TT),
          fontStyle: IT(TT),
          fontSize: IT(TT),
          opacity: VT(TT)
        }
      }(TT)
    }

    function CT(TT) {
      return {
        str: FT(TT),
        style: uT(TT),
        clickableUrl: IT(TT)
      }
    }

    function rT(TT) {
      return TT.str()
    }

    function KT(TT) {
      return TT.jB(rT)
    }

    function ST(TT) {
      return 0 === TT.index(2) ? null : KT(TT)
    }

    function GT(TT) {
      return {
        type: TT.str(),
        progress: TT.float(),
        width: IT(TT),
        height: IT(TT),
        colours: ST(TT),
        backgroundColour: IT(TT)
      }
    }

    function NT(TT) {
      return {
        type: TT.str(),
        action: TT.str(),
        style: uT(TT)
      }
    }

    function ET(TT) {
      const UT = TT.index(7);
      return 0 === UT ? {
        string: TT.str()
      } : 1 === UT ? {
        entityName: tT(TT)
      } : 2 === UT ? {
        translatedText: XT(TT)
      } : 3 === UT ? {
        styledIcon: sT(TT)
      } : 4 === UT ? {
        RT: CT(TT)
      } : 5 === UT ? {
        styledProgressBar: GT(TT)
      } : {
        styledKeyBinding: NT(TT)
      }
    }

    function hT(TT) {
      return TT.jB(ET)
    }
    const DT = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function oT(TT) {
      return DT[TT.index(5)]
    }

    function AT(TT) {
      return 0 === TT.index(2) ? null : TT.double()
    }

    function RT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          hT: AT(TT),
          DT: TT.double(),
          oT: TT.double(),
          AT: TT.bool(),
          description: hT(TT),
          UU: TT.str(),
          scale: AT(TT),
          rotation: AT(TT)
        }
      }(TT)
    }

    function TU(TT) {
      return 0 === TT.index(2) ? null : TT.bool()
    }

    function UU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          WU: TT.double(),
          icon: TT.str(),
          label: hT(TT),
          zU: TT.bool(),
          scale: AT(TT),
          rotation: AT(TT),
          MU: TU(TT)
        }
      }(TT)
    }

    function mU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          hT: AT(TT),
          nU: TT.double(),
          HU: TT.double(),
          kU: TT.double(),
          gravity: TT.double(),
          jU: TT.double(),
          lU: TT.double(),
          LU: TT.double(),
          AT: TT.bool(),
          description: hT(TT),
          icon: IT(TT)
        }
      }(TT)
    }

    function WU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          speed: TT.double(),
          BU: TT.double(),
          label: hT(TT),
          icon: IT(TT),
          scale: AT(TT),
          rotation: AT(TT)
        }
      }(TT)
    }

    function zU(TT) {
      return 0 === TT.index(2) ? null : TT.long()
    }

    function MU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          cU: TT.long(),
          vU: TT.double(),
          fU: TT.double(),
          qU: zU(TT),
          label: hT(TT),
          icon: IT(TT)
        }
      }(TT)
    }

    function gU(TT) {
      return {
        type: oT(TT),
        progressBar: RT(TT),
        timedClick: UU(TT),
        gravityBar: mU(TT),
        precisionBar: WU(TT),
        rhythmClick: MU(TT)
      }
    }
    const nU = ["playerGone", "rateLimited"];

    function HU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return nU[TT.index(2)]
      }(TT)
    }

    function kU(TT) {
      return TT.float()
    }

    function jU(TT) {
      return TT.jB(kU)
    }

    function lU(TT) {
      return 0 === TT.index(2) ? null : jU(TT)
    }

    function LU(TT) {
      return 0 === TT.index(2) ? null : hT(TT)
    }

    function pU(TT) {
      return TT.long()
    }

    function BU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.jB(pU)
      }(TT)
    }

    function ZU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          Dz: TT.str(),
          Az: TT.long()
        }
      }(TT)
    }

    function cU(TT) {
      const UT = TT.index(3);
      return 0 === UT ? null : 1 === UT ? TT.str() : XT(TT)
    }

    function vU(TT) {
      return {
        dM: TT.str(),
        wM: TT.str(),
        tM: TT.str()
      }
    }

    function fU(TT) {
      return {
        FT: TT.str(),
        PT: IT(TT),
        VT: IT(TT),
        uT: KT(TT)
      }
    }

    function qU(TT) {
      return TT.jB(fU)
    }

    function iU(TT) {
      return {
        om: TT.str(),
        x: TT.long(),
        y: TT.long(),
        z: TT.long()
      }
    }

    function bU(TT) {
      return TT.jB(iU)
    }

    function OU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          fW: TT.float(),
          qW: TT.long(),
          iW: TT.long()
        }
      }(TT)
    }

    function eU(TT) {
      return {
        blockName: TT.str(),
        jW: TT.bool(),
        lW: TT.bool(),
        LW: TT.bool(),
        pW: TT.float(),
        BW: TT.float(),
        ZW: TT.long(),
        cW: OU(TT)
      }
    }

    function YU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.jB(eU)
      }(TT)
    }

    function JU(TT) {
      return {
        nW: TT.str(),
        HW: YU(TT)
      }
    }

    function xU(TT) {
      return {
        blockName: TT.str(),
        frequency: TT.float()
      }
    }

    function dU(TT) {
      return TT.jB(xU)
    }

    function wU(TT) {
      return {
        eW: TT.str(),
        YW: TT.str(),
        frequency: TT.float(),
        JW: dU(TT)
      }
    }

    function tU(TT) {
      return TT.jB(wU)
    }

    function aU(TT) {
      return {
        blockName: TT.str(),
        radius: TT.long(),
        tW: TT.long(),
        UW: TT.long(),
        mW: TT.long(),
        aW: TT.float()
      }
    }

    function yU(TT) {
      return TT.jB(aU)
    }

    function XU(TT) {
      return {
        UW: TT.long(),
        mW: TT.long(),
        WW: TT.long(),
        zW: TT.bool(),
        MW: JU(TT),
        bW: tU(TT),
        dW: yU(TT)
      }
    }

    function IU(TT) {
      return TT.jB(XU)
    }

    function QU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          name: TT.str(),
          QW: IT(TT)
        }
      }(TT)
    }

    function sU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          terrain: QU(TT),
          sW: yU(TT)
        }
      }(TT)
    }

    function FU(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          layers: IU(TT),
          yW: sU(TT)
        }
      }(TT)
    }
  },
  40731: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => IT,
      A: () => JT,
      D: () => eT,
      H: () => tT,
      J: () => iT,
      N: () => bT,
      Q: () => cT,
      S: () => xT,
      V: () => yT,
      Z: () => BT,
      db: () => fT,
      e: () => zT,
      f: () => XT,
      gb: () => vT,
      h: () => aT,
      ib: () => qT,
      l: () => pT,
      mb: () => OT,
      p: () => ZT,
      t: () => wT,
      u: () => YT,
      w: () => dT
    });
    var WT = mT(3124);
    const zT = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function MT(TT, UT) {
      return !ArrayBuffer.isView(TT) || TT instanceof DataView ? Array.isArray(TT) ? TT.map((TT => UT(TT))) : TT : Array.from(TT, (TT => UT(TT)))
    }

    function gT(TT) {
      if ("string" !== typeof TT) return TT;
      for (let UT = 0; UT < TT.length; UT++) {
        const mT = TT.charCodeAt(UT);
        if (mT >= 55296 && mT <= 57343) return HT.decode(nT.encode(TT))
      }
      return TT
    }
    const nT = new TextEncoder,
      HT = new TextDecoder;

    function kT(TT) {
      return TT
    }
    let jT;

    function lT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [gT(TT.Tn), gT(TT.Un)]
    }

    function LT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [MT(TT.Kz, kT), MT(TT.cn, kT)]
    }

    function pT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.Xj), gT(UT.Ij)];
      var UT
    }

    function BT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [UT.id, UT.qj];
      var UT
    }

    function ZT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [UT.Rz, gT(UT.TM), UT.UM, gT(UT.zM), UT.HM, UT.kM, UT.tj, gT(UT.aj), gT(UT.yj)];
      var UT
    }

    function cT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [MT(UT.Sg, kT), UT.Gg];
      var UT
    }

    function vT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [MT(UT.Cg, (TT => gT(TT))), gT(UT.rg), UT.Kg];
      var UT
    }

    function fT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [MT(UT.qH, kT), gT(UT.iH), UT.bH];
      var UT
    }

    function qT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.wM), gT(UT.tM)];
      var UT
    }

    function iT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.tn)];
      var UT
    }

    function bT(TT) {
      return gT(TT)
    }

    function OT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.Zj), gT(UT.vj), gT(UT.Tn), gT(UT.Un)];
      var UT
    }

    function eT(TT) {
      return lT(TT)
    }

    function YT(TT) {
      return lT(TT)
    }

    function JT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.lH)];
      var UT
    }

    function xT(TT) {
      return TT
    }

    function dT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.Ag), gT(UT.Rg)];
      var UT
    }

    function wT(TT) {
      return gT(TT)
    }

    function tT(TT) {
      return LT(TT)
    }

    function aT(TT) {
      return LT(TT)
    }

    function yT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [gT(UT.OH)];
      var UT
    }

    function XT(TT) {
      return (jT ??= (0, WT.i)().map((TT => TT.name)), jT).map((UT => {
        return "string" === typeof(mT = TT[UT]) ? gT(mT) : MT(mT, kT);
        var mT
      }))
    }

    function IT(TT) {
      return null === (UT = TT) || "object" !== typeof UT ? UT : [UT.HH, UT.kH, UT.jH];
      var UT
    }
  },
  9411: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      i: () => MT
    });
    var WT = mT(9369);
    const zT = "Air",
      MT = Object.freeze(new WT.g(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39366: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      e: () => nT
    });
    var WT = mT(366),
      zT = mT(4581);
    const MT = new Set(zT.p),
      gT = new Map;

    function nT(TT, UT) {
      let mT = gT.get(UT);
      void 0 === mT && (mT = new Map, gT.set(UT, mT));
      let zT = mT.get(TT);
      return void 0 === zT && (zT = `${TT}${(0,WT.G)(UT)}`, mT.set(TT, zT)), zT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);