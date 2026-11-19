export const id = 237;
export const ids = [237];
export const modules = {
  39400: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT,
      h: () => XT,
      l: () => WT
    });
    var iT = IT(39403),
      zT = IT(4276),
      kT = IT(39407);

    function WT(TT) {
      return TT.payloadKind === zT.fc.Msgpack ? (0, iT.e)(TT.payload) : void 0
    }

    function XT(TT, oT) {
      if (oT.payloadKind === zT.fc.Bytes || oT.payloadKind === zT.fc.MsgpackBin) return (0, kT.d)(TT, oT.payload)
    }

    function BT(TT) {
      return null !== TT && "object" === typeof TT
    }
  },
  39415: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => DT,
      e: () => LT,
      h: () => xT,
      i: () => ST,
      j: () => MT
    });
    var iT = IT(4276),
      zT = IT(39420);
    const kT = new Map,
      WT = new Set,
      XT = new Set;
    let BT = 0,
      FT = 0;

    function ST(TT, oT) {
      let IT = kT.get(TT);
      return IT || (IT = new Set, kT.set(TT, IT)), IT.add(oT), () => {
        IT.delete(oT)
      }
    }

    function DT() {
      return 0 !== BT
    }

    function LT(TT) {
      return WT.add(TT), () => {
        WT.delete(TT)
      }
    }

    function xT(TT) {
      return XT.add(TT), () => {
        XT.delete(TT)
      }
    }
    const cT = "A raw message listener threw";

    function KT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT;
      for (const iT of oT) try {
        iT()
      } catch (IT) {
        TT ? (0, zT.m)(IT, cT) : console.error(cT, IT)
      }
    }
    const MT = {
      fire: function(TT) {
        if ("connection" === TT.type) {
          const oT = TT.phase === iT.F.Activated && TT.conn !== BT && TT.conn > FT,
            IT = (TT.phase === iT.F.Left || TT.phase === iT.F.Closed) && TT.conn === BT;
          return void(oT || IT ? (BT = oT ? TT.conn : 0, KT(!0)) : TT.phase === iT.F.Resumed && 0 !== BT && TT.conn > FT && (BT = TT.conn, KT(!0, XT)))
        }
        const oT = kT.get(TT.US);
        if (oT && TT.conn === BT && 0 !== BT)
          for (const iT of oT) try {
            iT(TT)
          } catch (IT) {
            (0, zT.m)(IT, cT)
          }
      },
      close: function(TT) {
        FT = Math.max(FT, TT, BT), 0 !== BT && (BT = 0, KT(!1))
      }
    }
  },
  39386: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT,
      g: () => BT,
      i: () => XT
    });
    var iT = IT(1236),
      zT = IT(39354);
    const kT = new TextDecoder,
      WT = new TextEncoder;

    function XT(TT, oT) {
      const IT = TT.queries.entityName(oT);
      if (IT === zT.Gc) return;
      const WT = TT.memoryData(TT.scratch(), 4 + IT, 4, "entity_name's answer");
      if (!WT) return;
      const XT = WT.getUint32(0, !0),
        BT = kT.decode(new Uint8Array(WT.buffer, WT.byteOffset + 4, IT));
      return (0, iT.b)(BT, !1, XT === zT.Rd ? null : XT)
    }

    function BT(TT, oT, IT) {
      const iT = WT.encode(IT);
      if (iT.length > zT.Ab) return !1;
      const kT = TT.memoryView(Uint8Array, TT.scratch(), iT.length, "has_effect's name");
      return !!kT && (kT.set(iT), 1 === TT.queries.hasEffect(oT, iT.length))
    }

    function FT(TT, oT, IT, iT) {
      const WT = TT.queries.blockData(oT, IT, iT);
      if (WT === zT.Gc) return;
      const XT = TT.memoryView(Uint8Array, TT.scratch(), WT, "block_data's answer");
      return XT ? JSON.parse(kT.decode(XT)) : void 0
    }
  },
  39403: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      f: () => ST
    });
    const iT = new TextDecoder;

    function zT(TT) {
      const oT = new kT(TT),
        IT = oT.value();
      if (oT.at !== TT.length) throw new Error(`msgpack: ${TT.length-oT.at} bytes after the value`);
      return IT
    }
    class kT {
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
        const oT = this.at;
        if (oT + TT > this.bytes.length) throw new Error(`msgpack: ${TT} bytes past the end at ${oT}`);
        return this.at = oT + TT, oT
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
        const oT = this.take(8);
        return TT ? this.view.getBigInt64(oT, !1) : this.view.getBigUint64(oT, !1)
      }
      str(TT) {
        const oT = this.take(TT),
          IT = this.bytes;
        if (TT < 16) {
          let zT = "";
          for (let kT = oT; kT < oT + TT; kT++) {
            const WT = IT[kT];
            if (WT >= 128) return iT.decode(IT.subarray(oT, oT + TT));
            zT += String.fromCharCode(WT)
          }
          return zT
        }
        return iT.decode(IT.subarray(oT, oT + TT))
      }
      bin(TT) {
        const oT = this.take(TT);
        return this.bytes.subarray(oT, oT + TT)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(TT) {
        this.enter();
        const oT = [];
        for (let IT = 0; IT < TT; IT++) oT.push(this.value());
        return this.depth--, oT
      }
      map(TT) {
        this.enter();
        const oT = {};
        for (let IT = 0; IT < TT; IT++) {
          const TT = this.value(),
            IT = this.value();
          oT["__proto__" === TT ? "__proto_" : String(TT)] = IT
        }
        return this.depth--, oT
      }
      ext(TT) {
        const oT = this.view.getInt8(this.take(1)),
          IT = this.take(TT);
        if (0 !== oT) {
          if (-1 === oT) {
            if (1 === TT) return new Date(NaN);
            if (4 === TT) return new Date(1e3 * this.view.getUint32(IT, !1));
            if (8 === TT) {
              const TT = this.view.getUint32(IT, !1),
                oT = TT >>> 2,
                iT = 4294967296 * (3 & TT) + this.view.getUint32(IT + 4, !1);
              return new Date(1e3 * iT + oT / 1e6)
            }
            if (12 === TT) {
              const TT = this.view.getUint32(IT, !1),
                oT = 4294967296 * this.view.getInt32(IT + 4, !1) + this.view.getUint32(IT + 8, !1);
              return new Date(1e3 * oT + TT / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${oT} of ${TT} bytes`)
        }
      }
    }
    const WT = new TextEncoder,
      XT = -(2n ** 63n),
      BT = 2n ** 63n - 1n,
      FT = 2n ** 64n - 1n;

    function ST(TT) {
      const oT = new DT;
      return oT.value(TT, 0), oT.bytes()
    }
    class DT {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(TT, oT) {
        if (oT > 512) throw new Error("msgpack: nested too deep");
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
              for (const IT of TT) this.value(IT, oT + 1)
            } else {
              var IT, iT;
              if (Object.getPrototypeOf(TT) !== Object.prototype && null !== Object.getPrototypeOf(TT)) throw new Error(`msgpack: can't encode a ${null!==(IT=null===(iT=TT.constructor)||void 0===iT?void 0:iT.name)&&void 0!==IT?IT:"object"}`);
              {
                const IT = Object.keys(TT);
                this.head(IT.length, 222, 128, 222, 223);
                for (const iT of IT) this.string(iT), this.value(TT[iT], oT + 1)
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
        const oT = TT >= XT && TT <= BT;
        if (!oT && (TT < 0n || TT > FT)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(oT ? 211 : 207), this.room(8), oT ? this.view.setBigInt64(this.at, TT, !1) : this.view.setBigUint64(this.at, TT, !1), this.at += 8
      }
      string(TT) {
        const oT = WT.encode(TT);
        this.head(oT.length, 217, 160, 218, 219), this.room(oT.length), this.buf.set(oT, this.at), this.at += oT.length
      }
      head(TT, oT, IT, iT, zT) {
        IT >= 0 && TT < (160 === IT ? 32 : 16) ? this.u8(IT | TT) : oT !== iT && TT < 256 ? (this.u8(oT), this.u8(TT)) : TT < 65536 ? (this.u8(iT), this.u16(TT)) : (this.u8(zT), this.u32(TT))
      }
      room(TT) {
        if (this.at + TT <= this.buf.length) return;
        let oT = 2 * this.buf.length;
        for (; oT < this.at + TT;) oT *= 2;
        const IT = new Uint8Array(oT);
        IT.set(this.buf.subarray(0, this.at)), this.buf = IT, this.view = new DataView(IT.buffer)
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
  39407: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(39392);
    const zT = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class kT {
      constructor(TT) {
        this.buf = TT, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let TT = this.u8(),
          oT = 127 & TT,
          IT = 128;
        for (; 128 & TT;) {
          if (IT > 2 ** 63) throw new RangeError("avro: varint too long");
          TT = this.u8(), oT += (127 & TT) * IT, IT *= 128
        }
        return oT % 2 === 1 ? -(oT + 1) / 2 : oT / 2
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
          oT = this.take(TT),
          IT = oT + TT;
        if (TT <= 32) {
          let TT = "";
          for (let iT = oT; iT < IT; iT++) {
            const kT = this.buf[iT];
            if (kT >= 128) return zT.decode(this.buf.subarray(oT, IT));
            TT += String.fromCharCode(kT)
          }
          return TT
        }
        return zT.decode(this.buf.subarray(oT, IT))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(TT) {
        const oT = this.take(TT);
        return this.buf.slice(oT, oT + TT)
      }
      index(TT) {
        const oT = this.long();
        if (!(oT >= 0 && oT < TT)) throw new RangeError(`avro: index ${oT} of ${TT}`);
        return oT
      }
      fc(TT) {
        const oT = [];
        for (let IT = this.long(); 0 !== IT; IT = this.long()) {
          IT = this.block(IT);
          for (let iT = 0; iT < IT; iT++) oT.push(TT(this))
        }
        return oT
      }
      map(TT) {
        const oT = {};
        for (let IT = this.long(); 0 !== IT; IT = this.long()) {
          IT = this.block(IT);
          for (let iT = 0; iT < IT; iT++) {
            oT[this.str()] = TT(this)
          }
        }
        return oT
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(TT) {
        let oT = TT;
        if (oT < 0 && (oT = -oT, this.long()), oT > this.buf.length - this.at) throw new RangeError(`avro: block of ${oT} items in ${this.buf.length-this.at} bytes`);
        return oT
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
        const oT = this.at;
        if (TT > this.buf.length - oT) throw new RangeError("avro: truncated");
        return this.at = oT + TT, oT
      }
    }

    function WT(TT, oT) {
      const IT = new kT(oT),
        zT = (0, iT.Cb)(TT, IT);
      return IT.end(), zT
    }
  },
  39392: (TT, oT, IT) => {
    IT.d(oT, {
      C: () => hT,
      Cb: () => fT,
      D: () => LT,
      G: () => FT,
      I: () => WT,
      M: () => ET,
      P: () => zT,
      T: () => XT,
      W: () => xT,
      Z: () => uT,
      ab: () => RT,
      db: () => mT,
      e: () => wT,
      gb: () => ST,
      h: () => MT,
      jb: () => DT,
      l: () => rT,
      nb: () => vT,
      p: () => AT,
      pb: () => cT,
      s: () => eT,
      tb: () => gT,
      w: () => iT,
      wb: () => KT,
      y: () => kT,
      yb: () => BT
    });
    const iT = 2,
      zT = 12,
      kT = 27,
      WT = 40,
      XT = 52,
      BT = 59,
      FT = 63,
      ST = 83,
      DT = 84,
      LT = 89,
      xT = 91,
      cT = 93,
      KT = 94,
      MT = 95,
      rT = 97,
      AT = 101,
      gT = 102,
      hT = 73,
      wT = 16,
      mT = 86,
      eT = 60,
      RT = 17,
      uT = 56,
      vT = 100,
      ET = 81;

    function fT(TT, oT) {
      switch (TT) {
        case iT:
          return function(TT) {
            return {
              YT: yT(TT),
              QT: TT.float(),
              OT: TT.long()
            }
          }(oT);
        case zT:
          return function(TT) {
            return {
              FI: aT(TT),
              SI: aT(TT)
            }
          }(oT);
        case kT:
          return function(TT) {
            return {
              AI: TT.bool(),
              gI: aT(TT)
            }
          }(oT);
        case WT:
          return oT.str();
        case XT:
          return function(TT) {
            return {
              id: TT.long(),
              qI: Wo(TT)
            }
          }(oT);
        case BT:
        case FT:
          return oT.str();
        case ST:
        case DT:
          return oT.long();
        case LT:
          return function(TT) {
            return {
              Eo: TT.long(),
              fo: TT.bool(),
              Co: TT.float()
            }
          }(oT);
        case xT:
          return oT.long();
        case cT:
          return function(TT) {
            return {
              rI: TT.bool(),
              xT: Fo(TT)
            }
          }(oT);
        case KT:
          return function(TT) {
            return {
              id: TT.str(),
              position: Bo(TT),
              kT: So(TT),
              style: qT(TT),
              FT: TT.bool()
            }
          }(oT);
        case MT:
          return function(TT) {
            return {
              id: aT(TT)
            }
          }(oT);
        case rT:
          return function(TT) {
            return {
              po: TT.long(),
              bo: TT.str(),
              yo: zo(TT),
              Po: zo(TT),
              Vo: aT(TT),
              TI: aT(TT),
              oI: aT(TT),
              II: aT(TT),
              iI: aT(TT),
              zI: zo(TT),
              kI: zo(TT),
              WI: aT(TT),
              XI: aT(TT),
              BI: aT(TT)
            }
          }(oT);
        case AT:
          return oT.str();
        case gT:
          return oT.long();
        case hT:
          return function(TT) {
            return {
              mi: TT.long(),
              Ri: TT.str(),
              ui: TT.float()
            }
          }(oT);
        case wT:
          return function(TT) {
            return {
              ji: TT.bool(),
              Ji: aT(TT),
              Ui: TT.str(),
              ai: Lo(TT),
              Yi: Lo(TT),
              Qi: TT.bool(),
              Oi: TT.long(),
              Hi: xo(TT)
            }
          }(oT);
        case mT:
          return function(TT) {
            return {
              gT: aT(TT)
            }
          }(oT);
        case eT:
          return function(TT) {
            return {
              hT: TT.str(),
              wT: TT.str(),
              mT: co(TT),
              eT: TT.str(),
              RT: dT(TT),
              uT: TT.float()
            }
          }(oT);
        case RT:
          return function(TT) {
            return {
              hT: TT.str(),
              wT: TT.str(),
              mT: co(TT)
            }
          }(oT);
        case uT:
          return function(TT) {
            return TT.fc(Ko)
          }(oT);
        case vT:
          return function(TT) {
            return {
              Qo: ro(TT),
              Go: sT(TT)
            }
          }(oT);
        case ET:
          return function(TT) {
            return {
              Yz: TT.bool(),
              Qz: aT(TT),
              Oz: go(TT),
              qz: Yo(TT)
            }
          }(oT);
        default:
          throw new Error(`no reader for to-client message ${TT}`)
      }
    }

    function CT(TT) {
      return {
        entityName: TT.str()
      }
    }

    function jT(TT) {
      const oT = TT.index(4);
      return 0 === oT ? TT.str() : 1 === oT ? TT.long() : 2 === oT ? TT.bool() : CT(TT)
    }

    function JT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.map(jT)
      }(TT)
    }

    function UT(TT) {
      return {
        translationKey: TT.str(),
        params: JT(TT)
      }
    }

    function aT(TT) {
      return 0 === TT.index(2) ? null : TT.str()
    }

    function YT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          color: aT(TT),
          colour: aT(TT),
          fontSize: aT(TT)
        }
      }(TT)
    }

    function QT(TT) {
      return {
        icon: TT.str(),
        style: YT(TT)
      }
    }

    function OT(TT) {
      const oT = TT.index(3);
      return 0 === oT ? {
        string: TT.str()
      } : 1 === oT ? {
        styledEntityName: CT(TT)
      } : {
        styledTranslatedText: UT(TT)
      }
    }

    function HT(TT) {
      const oT = TT.index(3);
      return 0 === oT ? null : 1 === oT ? TT.str() : TT.long()
    }

    function nT(TT) {
      return 0 === TT.index(2) ? null : TT.float()
    }

    function qT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          color: aT(TT),
          colour: aT(TT),
          fontWeight: HT(TT),
          fontStyle: aT(TT),
          fontSize: aT(TT),
          opacity: nT(TT)
        }
      }(TT)
    }

    function ZT(TT) {
      return {
        str: OT(TT),
        style: qT(TT),
        clickableUrl: aT(TT)
      }
    }

    function lT(TT) {
      return TT.str()
    }

    function sT(TT) {
      return TT.fc(lT)
    }

    function tT(TT) {
      return 0 === TT.index(2) ? null : sT(TT)
    }

    function GT(TT) {
      return {
        type: TT.str(),
        progress: TT.float(),
        width: aT(TT),
        height: aT(TT),
        colours: tT(TT),
        backgroundColour: aT(TT)
      }
    }

    function pT(TT) {
      return {
        type: TT.str(),
        action: TT.str(),
        style: qT(TT)
      }
    }

    function bT(TT) {
      const oT = TT.index(7);
      return 0 === oT ? {
        string: TT.str()
      } : 1 === oT ? {
        entityName: CT(TT)
      } : 2 === oT ? {
        translatedText: UT(TT)
      } : 3 === oT ? {
        styledIcon: QT(TT)
      } : 4 === oT ? {
        WT: ZT(TT)
      } : 5 === oT ? {
        styledProgressBar: GT(TT)
      } : {
        styledKeyBinding: pT(TT)
      }
    }

    function yT(TT) {
      return TT.fc(bT)
    }
    const NT = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function PT(TT) {
      return NT[TT.index(5)]
    }

    function dT(TT) {
      return 0 === TT.index(2) ? null : TT.double()
    }

    function VT(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          tI: dT(TT),
          GI: TT.double(),
          pI: TT.double(),
          bI: TT.bool(),
          description: yT(TT),
          yI: TT.str(),
          scale: dT(TT),
          rotation: dT(TT)
        }
      }(TT)
    }

    function To(TT) {
      return 0 === TT.index(2) ? null : TT.bool()
    }

    function oo(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          dI: TT.double(),
          icon: TT.str(),
          label: yT(TT),
          VI: TT.bool(),
          scale: dT(TT),
          rotation: dT(TT),
          Ti: To(TT)
        }
      }(TT)
    }

    function Io(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          tI: dT(TT),
          Ii: TT.double(),
          ii: TT.double(),
          zi: TT.double(),
          gravity: TT.double(),
          ki: TT.double(),
          Wi: TT.double(),
          Xi: TT.double(),
          bI: TT.bool(),
          description: yT(TT),
          icon: aT(TT)
        }
      }(TT)
    }

    function io(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          speed: TT.double(),
          Fi: TT.double(),
          label: yT(TT),
          icon: aT(TT),
          scale: dT(TT),
          rotation: dT(TT)
        }
      }(TT)
    }

    function zo(TT) {
      return 0 === TT.index(2) ? null : TT.long()
    }

    function ko(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          Di: TT.long(),
          Li: TT.double(),
          xi: TT.double(),
          Ki: zo(TT),
          label: yT(TT),
          icon: aT(TT)
        }
      }(TT)
    }

    function Wo(TT) {
      return {
        type: PT(TT),
        progressBar: VT(TT),
        timedClick: oo(TT),
        gravityBar: Io(TT),
        precisionBar: io(TT),
        rhythmClick: ko(TT)
      }
    }

    function Xo(TT) {
      return TT.float()
    }

    function Bo(TT) {
      return TT.fc(Xo)
    }

    function Fo(TT) {
      return 0 === TT.index(2) ? null : Bo(TT)
    }

    function So(TT) {
      return 0 === TT.index(2) ? null : yT(TT)
    }

    function Do(TT) {
      return TT.long()
    }

    function Lo(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.fc(Do)
      }(TT)
    }

    function xo(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          UI: TT.str(),
          nI: TT.long()
        }
      }(TT)
    }

    function co(TT) {
      const oT = TT.index(3);
      return 0 === oT ? null : 1 === oT ? TT.str() : UT(TT)
    }

    function Ko(TT) {
      return {
        TT: TT.str(),
        oT: TT.str(),
        IT: TT.str()
      }
    }

    function Mo(TT) {
      return {
        Oo: TT.str(),
        Ho: aT(TT),
        qo: aT(TT),
        Zo: sT(TT)
      }
    }

    function ro(TT) {
      return TT.fc(Mo)
    }

    function Ao(TT) {
      return {
        nz: TT.str(),
        x: TT.long(),
        y: TT.long(),
        z: TT.long()
      }
    }

    function go(TT) {
      return TT.fc(Ao)
    }

    function ho(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          Fk: TT.float(),
          Sk: TT.long(),
          Dk: TT.long()
        }
      }(TT)
    }

    function wo(TT) {
      return {
        blockName: TT.str(),
        Tk: TT.bool(),
        Ik: TT.bool(),
        ik: TT.bool(),
        zk: TT.float(),
        kk: TT.float(),
        Wk: TT.long(),
        Xk: ho(TT)
      }
    }

    function mo(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return TT.fc(wo)
      }(TT)
    }

    function eo(TT) {
      return {
        Pz: TT.str(),
        dz: mo(TT)
      }
    }

    function Ro(TT) {
      return {
        blockName: TT.str(),
        frequency: TT.float()
      }
    }

    function uo(TT) {
      return TT.fc(Ro)
    }

    function vo(TT) {
      return {
        Kk: TT.str(),
        Mk: TT.str(),
        frequency: TT.float(),
        rk: uo(TT)
      }
    }

    function Eo(TT) {
      return TT.fc(vo)
    }

    function fo(TT) {
      return {
        blockName: TT.str(),
        radius: TT.long(),
        wk: TT.long(),
        tz: TT.long(),
        Gz: TT.long(),
        mk: TT.float()
      }
    }

    function Co(TT) {
      return TT.fc(fo)
    }

    function jo(TT) {
      return {
        tz: TT.long(),
        Gz: TT.long(),
        pz: TT.long(),
        bz: TT.bool(),
        yz: eo(TT),
        Lk: Eo(TT),
        gk: Co(TT)
      }
    }

    function Jo(TT) {
      return TT.fc(jo)
    }

    function Uo(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          name: TT.str(),
          Ek: aT(TT)
        }
      }(TT)
    }

    function ao(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          terrain: Uo(TT),
          fk: Co(TT)
        }
      }(TT)
    }

    function Yo(TT) {
      return 0 === TT.index(2) ? null : function(TT) {
        return {
          layers: Jo(TT),
          Rk: ao(TT)
        }
      }(TT)
    }
  },
  39379: (TT, oT, IT) => {
    IT.d(oT, {
      D: () => hT,
      H: () => wT,
      L: () => MT,
      N: () => vT,
      R: () => JT,
      T: () => cT,
      V: () => aT,
      W: () => AT,
      Z: () => rT,
      ab: () => gT,
      b: () => zT,
      c: () => UT,
      cb: () => mT,
      g: () => jT,
      j: () => xT,
      k: () => KT,
      n: () => fT,
      o: () => RT,
      q: () => ET,
      u: () => uT,
      w: () => eT,
      z: () => CT
    });
    var iT = IT(2597);
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
      UpdateNameTag: 53
    };

    function kT(TT, oT) {
      return !ArrayBuffer.isView(TT) || TT instanceof DataView ? Array.isArray(TT) ? TT.map((TT => oT(TT))) : TT : Array.from(TT, (TT => oT(TT)))
    }

    function WT(TT) {
      if ("string" !== typeof TT) return TT;
      for (let oT = 0; oT < TT.length; oT++) {
        const IT = TT.charCodeAt(oT);
        if (IT >= 55296 && IT <= 57343) return BT.decode(XT.encode(TT))
      }
      return TT
    }
    const XT = new TextEncoder,
      BT = new TextDecoder;

    function FT(TT) {
      return TT
    }
    let ST;

    function DT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [WT(TT.QF), WT(TT.HF)]
    }

    function LT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [kT(TT.ai, FT), kT(TT.cW, FT)]
    }

    function xT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.US), WT(oT.aS)];
      var oT
    }

    function cT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [oT.id, oT.fF];
      var oT
    }

    function KT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [oT.po, WT(oT.bo), oT.yo, WT(oT.TI), oT.zI, oT.kI, oT.lF, WT(oT.sF), WT(oT.tF)];
      var oT
    }

    function MT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [kT(oT.wS, FT), oT.mS];
      var oT
    }

    function rT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [kT(oT.AX, (TT => WT(TT))), WT(oT.gX), oT.hX];
      var oT
    }

    function AT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [kT(oT.eX, FT), WT(oT.RX), oT.uX];
      var oT
    }

    function gT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.oT), WT(oT.IT)];
      var oT
    }

    function hT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.wX)];
      var oT
    }

    function wT(TT) {
      return WT(TT)
    }

    function mT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.aF), WT(oT.YF), WT(oT.QF), WT(oT.HF)];
      var oT
    }

    function eT(TT) {
      return DT(TT)
    }

    function RT(TT) {
      return DT(TT)
    }

    function uT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.JF)];
      var oT
    }

    function vT(TT) {
      return TT
    }

    function ET(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.KF), WT(oT.MF)];
      var oT
    }

    function fT(TT) {
      return WT(TT)
    }

    function CT(TT) {
      return LT(TT)
    }

    function jT(TT) {
      return LT(TT)
    }

    function JT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.pW)];
      var oT
    }

    function UT(TT) {
      return (ST ??= (0, iT.f)().map((TT => TT.name)), ST).map((oT => {
        return "string" === typeof(IT = TT[oT]) ? WT(IT) : kT(IT, FT);
        var IT
      }))
    }

    function aT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [oT.VF, oT.oS, oT.iS];
      var oT
    }
  },
  38180: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      f: () => XT
    });
    var iT = IT(314),
      zT = IT(3985);
    const kT = new Set(zT.m),
      WT = new Map;

    function XT(TT, oT) {
      let IT = WT.get(oT);
      void 0 === IT && (IT = new Map, WT.set(oT, IT));
      let zT = IT.get(TT);
      return void 0 === zT && (zT = `${TT}${(0,iT.A)(oT)}`, IT.set(TT, zT)), zT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);