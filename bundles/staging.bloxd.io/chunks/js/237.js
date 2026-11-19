export const id = 237;
export const ids = [237];
export const modules = {
  39728: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      f: () => OY,
      g: () => RY
    });
    var FY = DY(39731),
      AY = DY(4376),
      IY = DY(39733);

    function RY(YY) {
      return YY.payloadKind === AY.dc.Msgpack ? (0, FY.e)(YY.payload) : void 0
    }

    function OY(YY, rY) {
      if (rY.payloadKind === AY.dc.Bytes || rY.payloadKind === AY.dc.MsgpackBin) return (0, IY.d)(YY, rY.payload)
    }

    function gY(YY) {
      return null !== YY && "object" === typeof YY
    }
  },
  39739: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => uY,
      g: () => sY,
      h: () => iY,
      l: () => vY,
      n: () => oY
    });
    var FY = DY(4376),
      AY = DY(39744);
    const IY = new Map,
      RY = new Set,
      OY = new Set;
    let gY = 0,
      aY = 0;

    function vY(YY, rY) {
      let DY = IY.get(YY);
      return DY || (DY = new Set, IY.set(YY, DY)), DY.add(rY), () => {
        DY.delete(rY)
      }
    }

    function uY() {
      return 0 !== gY
    }

    function sY(YY) {
      return RY.add(YY), () => {
        RY.delete(YY)
      }
    }

    function iY(YY) {
      return OY.add(YY), () => {
        OY.delete(YY)
      }
    }
    const yY = "A raw message listener threw";

    function QY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RY;
      for (const FY of rY) try {
        FY()
      } catch (DY) {
        YY ? (0, AY.m)(DY, yY) : console.error(yY, DY)
      }
    }
    const oY = {
      fire: function(YY) {
        if ("connection" === YY.type) {
          const rY = YY.phase === FY.C.Activated && YY.conn !== gY && YY.conn > aY,
            DY = (YY.phase === FY.C.Left || YY.phase === FY.C.Closed) && YY.conn === gY;
          return void(rY || DY ? (gY = rY ? YY.conn : 0, QY(!0)) : YY.phase === FY.C.Resumed && 0 !== gY && YY.conn > aY && (gY = YY.conn, QY(!0, OY)))
        }
        const rY = IY.get(YY.vv);
        if (rY && YY.conn === gY && 0 !== gY)
          for (const FY of rY) try {
            FY(YY)
          } catch (DY) {
            (0, AY.m)(DY, yY)
          }
      },
      close: function(YY) {
        aY = Math.max(aY, YY, gY), 0 !== gY && (gY = 0, QY(!1))
      }
    }
  },
  39717: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => aY,
      h: () => gY,
      l: () => OY
    });
    var FY = DY(1270),
      AY = DY(39683);
    const IY = new TextDecoder,
      RY = new TextEncoder;

    function OY(YY, rY) {
      const DY = YY.queries.entityName(rY);
      if (DY === AY.Cc) return;
      const RY = YY.memoryData(YY.scratch(), 4 + DY, 4, "entity_name's answer");
      if (!RY) return;
      const OY = RY.getUint32(0, !0),
        gY = IY.decode(new Uint8Array(RY.buffer, RY.byteOffset + 4, DY));
      return (0, FY.d)(gY, !1, OY === AY.Od ? null : OY)
    }

    function gY(YY, rY, DY) {
      const FY = RY.encode(DY);
      if (FY.length > AY.wb) return !1;
      const IY = YY.memoryView(Uint8Array, YY.scratch(), FY.length, "has_effect's name");
      return !!IY && (IY.set(FY), 1 === YY.queries.hasEffect(rY, FY.length))
    }

    function aY(YY, rY, DY, FY) {
      const RY = YY.queries.blockData(rY, DY, FY);
      if (RY === AY.Cc) return;
      const OY = YY.memoryView(Uint8Array, YY.scratch(), RY, "block_data's answer");
      return OY ? JSON.parse(IY.decode(OY)) : void 0
    }
  },
  39731: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      f: () => vY
    });
    const FY = new TextDecoder;

    function AY(YY) {
      const rY = new IY(YY),
        DY = rY.value();
      if (rY.at !== YY.length) throw new Error(`msgpack: ${YY.length-rY.at} bytes after the value`);
      return DY
    }
    class IY {
      constructor(YY) {
        this.bytes = YY, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(YY.buffer, YY.byteOffset, YY.byteLength)
      }
      value() {
        const YY = this.u8();
        if (YY <= 127) return YY;
        if (YY >= 224) return YY - 256;
        if (YY >= 128 && YY <= 143) return this.map(15 & YY);
        if (YY >= 144 && YY <= 159) return this.array(15 & YY);
        if (YY >= 160 && YY <= 191) return this.str(31 & YY);
        switch (YY) {
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
            throw new Error(`msgpack: unknown byte 0x${YY.toString(16)} at ${this.at-1}`)
        }
      }
      take(YY) {
        const rY = this.at;
        if (rY + YY > this.bytes.length) throw new Error(`msgpack: ${YY} bytes past the end at ${rY}`);
        return this.at = rY + YY, rY
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
      int64(YY) {
        const rY = this.take(8);
        return YY ? this.view.getBigInt64(rY, !1) : this.view.getBigUint64(rY, !1)
      }
      str(YY) {
        const rY = this.take(YY),
          DY = this.bytes;
        if (YY < 16) {
          let AY = "";
          for (let IY = rY; IY < rY + YY; IY++) {
            const RY = DY[IY];
            if (RY >= 128) return FY.decode(DY.subarray(rY, rY + YY));
            AY += String.fromCharCode(RY)
          }
          return AY
        }
        return FY.decode(DY.subarray(rY, rY + YY))
      }
      bin(YY) {
        const rY = this.take(YY);
        return this.bytes.subarray(rY, rY + YY)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(YY) {
        this.enter();
        const rY = [];
        for (let DY = 0; DY < YY; DY++) rY.push(this.value());
        return this.depth--, rY
      }
      map(YY) {
        this.enter();
        const rY = {};
        for (let DY = 0; DY < YY; DY++) {
          const YY = this.value(),
            DY = this.value();
          rY["__proto__" === YY ? "__proto_" : String(YY)] = DY
        }
        return this.depth--, rY
      }
      ext(YY) {
        const rY = this.view.getInt8(this.take(1)),
          DY = this.take(YY);
        if (0 !== rY) {
          if (-1 === rY) {
            if (1 === YY) return new Date(NaN);
            if (4 === YY) return new Date(1e3 * this.view.getUint32(DY, !1));
            if (8 === YY) {
              const YY = this.view.getUint32(DY, !1),
                rY = YY >>> 2,
                FY = 4294967296 * (3 & YY) + this.view.getUint32(DY + 4, !1);
              return new Date(1e3 * FY + rY / 1e6)
            }
            if (12 === YY) {
              const YY = this.view.getUint32(DY, !1),
                rY = 4294967296 * this.view.getInt32(DY + 4, !1) + this.view.getUint32(DY + 8, !1);
              return new Date(1e3 * rY + YY / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${rY} of ${YY} bytes`)
        }
      }
    }
    const RY = new TextEncoder,
      OY = -(2n ** 63n),
      gY = 2n ** 63n - 1n,
      aY = 2n ** 64n - 1n;

    function vY(YY) {
      const rY = new uY;
      return rY.value(YY, 0), rY.bytes()
    }
    class uY {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(YY, rY) {
        if (rY > 512) throw new Error("msgpack: nested too deep");
        switch (typeof YY) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(YY ? 195 : 194);
          case "number":
            return void this.number(YY);
          case "bigint":
            return void this.bigint(YY);
          case "string":
            return void this.string(YY);
          case "object":
            if (null === YY) this.u8(192);
            else if (YY instanceof Uint8Array) this.head(YY.length, 196, -1, 197, 198), this.room(YY.length), this.buf.set(YY, this.at), this.at += YY.length;
            else if (Array.isArray(YY)) {
              this.head(YY.length, 220, 144, 220, 221);
              for (const DY of YY) this.value(DY, rY + 1)
            } else {
              var DY, FY;
              if (Object.getPrototypeOf(YY) !== Object.prototype && null !== Object.getPrototypeOf(YY)) throw new Error(`msgpack: can't encode a ${null!==(DY=null===(FY=YY.constructor)||void 0===FY?void 0:FY.name)&&void 0!==DY?DY:"object"}`);
              {
                const DY = Object.keys(YY);
                this.head(DY.length, 222, 128, 222, 223);
                for (const FY of DY) this.string(FY), this.value(YY[FY], rY + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof YY)
        }
      }
      number(YY) {
        Number.isInteger(YY) && YY >= -2147483648 && YY <= 4294967295 ? YY >= 0 ? YY < 128 ? this.u8(YY) : YY < 256 ? (this.u8(204), this.u8(YY)) : YY < 65536 ? (this.u8(205), this.u16(YY)) : (this.u8(206), this.u32(YY)) : YY >= -32 ? this.u8(YY + 256) : YY >= -128 ? (this.u8(208), this.u8(YY + 256)) : YY >= -32768 ? (this.u8(209), this.u16(YY + 65536)) : (this.u8(210), this.u32(YY >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, YY, !1), this.at += 8)
      }
      bigint(YY) {
        const rY = YY >= OY && YY <= gY;
        if (!rY && (YY < 0n || YY > aY)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(rY ? 211 : 207), this.room(8), rY ? this.view.setBigInt64(this.at, YY, !1) : this.view.setBigUint64(this.at, YY, !1), this.at += 8
      }
      string(YY) {
        const rY = RY.encode(YY);
        this.head(rY.length, 217, 160, 218, 219), this.room(rY.length), this.buf.set(rY, this.at), this.at += rY.length
      }
      head(YY, rY, DY, FY, AY) {
        DY >= 0 && YY < (160 === DY ? 32 : 16) ? this.u8(DY | YY) : rY !== FY && YY < 256 ? (this.u8(rY), this.u8(YY)) : YY < 65536 ? (this.u8(FY), this.u16(YY)) : (this.u8(AY), this.u32(YY))
      }
      room(YY) {
        if (this.at + YY <= this.buf.length) return;
        let rY = 2 * this.buf.length;
        for (; rY < this.at + YY;) rY *= 2;
        const DY = new Uint8Array(rY);
        DY.set(this.buf.subarray(0, this.at)), this.buf = DY, this.view = new DataView(DY.buffer)
      }
      u8(YY) {
        this.room(1), this.buf[this.at++] = YY
      }
      u16(YY) {
        this.room(2), this.view.setUint16(this.at, YY, !1), this.at += 2
      }
      u32(YY) {
        this.room(4), this.view.setUint32(this.at, YY, !1), this.at += 4
      }
    }
  },
  39733: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(39725);
    const AY = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class IY {
      constructor(YY) {
        this.buf = YY, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let YY = this.u8(),
          rY = 127 & YY,
          DY = 128;
        for (; 128 & YY;) {
          if (DY > 2 ** 63) throw new RangeError("avro: varint too long");
          YY = this.u8(), rY += (127 & YY) * DY, DY *= 128
        }
        return rY % 2 === 1 ? -(rY + 1) / 2 : rY / 2
      }
      float() {
        const YY = this.take(4);
        return this.floats().getFloat32(YY, !0)
      }
      double() {
        const YY = this.take(8);
        return this.floats().getFloat64(YY, !0)
      }
      str() {
        const YY = this.size(),
          rY = this.take(YY),
          DY = rY + YY;
        if (YY <= 32) {
          let YY = "";
          for (let FY = rY; FY < DY; FY++) {
            const IY = this.buf[FY];
            if (IY >= 128) return AY.decode(this.buf.subarray(rY, DY));
            YY += String.fromCharCode(IY)
          }
          return YY
        }
        return AY.decode(this.buf.subarray(rY, DY))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(YY) {
        const rY = this.take(YY);
        return this.buf.slice(rY, rY + YY)
      }
      index(YY) {
        const rY = this.long();
        if (!(rY >= 0 && rY < YY)) throw new RangeError(`avro: index ${rY} of ${YY}`);
        return rY
      }
      Hy(YY) {
        const rY = [];
        for (let DY = this.long(); 0 !== DY; DY = this.long()) {
          DY = this.block(DY);
          for (let FY = 0; FY < DY; FY++) rY.push(YY(this))
        }
        return rY
      }
      map(YY) {
        const rY = {};
        for (let DY = this.long(); 0 !== DY; DY = this.long()) {
          DY = this.block(DY);
          for (let FY = 0; FY < DY; FY++) {
            rY[this.str()] = YY(this)
          }
        }
        return rY
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(YY) {
        let rY = YY;
        if (rY < 0 && (rY = -rY, this.long()), rY > this.buf.length - this.at) throw new RangeError(`avro: block of ${rY} items in ${this.buf.length-this.at} bytes`);
        return rY
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const YY = this.long();
        if (YY < 0) throw new RangeError(`avro: length ${YY}`);
        return YY
      }
      u8() {
        const YY = this.buf[this.at];
        if (void 0 === YY) throw new RangeError("avro: truncated");
        return this.at++, YY
      }
      take(YY) {
        const rY = this.at;
        if (YY > this.buf.length - rY) throw new RangeError("avro: truncated");
        return this.at = rY + YY, rY
      }
    }

    function RY(YY, rY) {
      const DY = new IY(rY),
        AY = (0, FY.sb)(YY, DY);
      return DY.end(), AY
    }
  },
  39725: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => sY,
      B: () => aY,
      C: () => RY,
      F: () => cY,
      J: () => AY,
      N: () => OY,
      Q: () => iY,
      T: () => NY,
      W: () => eY,
      Y: () => lY,
      ab: () => vY,
      cb: () => uY,
      e: () => SY,
      eb: () => BY,
      g: () => oY,
      hb: () => yY,
      jb: () => mY,
      k: () => WY,
      lb: () => QY,
      m: () => EY,
      p: () => TY,
      pb: () => gY,
      s: () => FY,
      sb: () => KY,
      v: () => IY,
      x: () => VY
    });
    const FY = 2,
      AY = 12,
      IY = 27,
      RY = 40,
      OY = 52,
      gY = 59,
      aY = 63,
      vY = 83,
      uY = 84,
      sY = 89,
      iY = 91,
      yY = 93,
      QY = 94,
      oY = 95,
      WY = 97,
      EY = 101,
      mY = 102,
      VY = 73,
      SY = 16,
      lY = 86,
      TY = 60,
      eY = 17,
      NY = 56,
      BY = 100,
      cY = 81;

    function KY(YY, rY) {
      switch (YY) {
        case FY:
          return function(YY) {
            return {
              jY: nY(YY),
              hY: YY.float(),
              dY: YY.long()
            }
          }(rY);
        case AY:
          return function(YY) {
            return {
              AD: fY(YY),
              RD: fY(YY)
            }
          }(rY);
        case IY:
          return function(YY) {
            return {
              yD: YY.bool(),
              QD: fY(YY)
            }
          }(rY);
        case RY:
          return rY.str();
        case OY:
          return function(YY) {
            return {
              id: YY.long(),
              hD: Rr(YY)
            }
          }(rY);
        case gY:
        case aY:
          return rY.str();
        case vY:
        case uY:
          return rY.long();
        case sY:
          return function(YY) {
            return {
              er: YY.long(),
              Nr: YY.bool(),
              Br: YY.float()
            }
          }(rY);
        case iY:
          return rY.long();
        case yY:
          return function(YY) {
            return {
              iD: YY.bool(),
              iY: ar(YY)
            }
          }(rY);
        case QY:
          return function(YY) {
            return {
              id: YY.str(),
              position: gr(YY),
              IY: vr(YY),
              style: wY(YY),
              aY: YY.bool()
            }
          }(rY);
        case oY:
          return function(YY) {
            return {
              id: fY(YY)
            }
          }(rY);
        case WY:
          return function(YY) {
            return {
              br: YY.long(),
              Xr: YY.str(),
              qr: Ar(YY),
              kr: Ar(YY),
              Gr: fY(YY),
              nr: fY(YY),
              Pr: fY(YY),
              Ur: fY(YY),
              Lr: fY(YY),
              tr: Ar(YY),
              YD: Ar(YY),
              rD: fY(YY),
              DD: fY(YY),
              FD: fY(YY)
            }
          }(rY);
        case EY:
          return rY.str();
        case mY:
          return rY.long();
        case VY:
          return function(YY) {
            return {
              yF: YY.long(),
              QF: YY.str(),
              oF: YY.float()
            }
          }(rY);
        case SY:
          return function(YY) {
            return {
              mF: YY.bool(),
              VF: fY(YY),
              SF: YY.str(),
              lF: sr(YY),
              TF: sr(YY),
              eF: YY.bool(),
              NF: YY.long(),
              BF: ir(YY)
            }
          }(rY);
        case lY:
          return function(YY) {
            return {
              mY: fY(YY)
            }
          }(rY);
        case TY:
          return function(YY) {
            return {
              VY: YY.str(),
              SY: YY.str(),
              lY: yr(YY),
              TY: YY.str(),
              eY: LY(YY),
              NY: YY.float()
            }
          }(rY);
        case eY:
          return function(YY) {
            return {
              VY: YY.str(),
              SY: YY.str(),
              lY: yr(YY)
            }
          }(rY);
        case NY:
          return function(YY) {
            return YY.Hy(Qr)
          }(rY);
        case BY:
          return function(YY) {
            return {
              jr: Wr(YY),
              wr: qY(YY)
            }
          }(rY);
        case cY:
          return function(YY) {
            return {
              EA: YY.bool(),
              mA: fY(YY),
              VA: mr(YY),
              lA: jr(YY)
            }
          }(rY);
        default:
          throw new Error(`no reader for to-client message ${YY}`)
      }
    }

    function HY(YY) {
      return {
        entityName: YY.str()
      }
    }

    function zY(YY) {
      const rY = YY.index(4);
      return 0 === rY ? YY.str() : 1 === rY ? YY.long() : 2 === rY ? YY.bool() : HY(YY)
    }

    function ZY(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return YY.map(zY)
      }(YY)
    }

    function CY(YY) {
      return {
        translationKey: YY.str(),
        params: ZY(YY)
      }
    }

    function fY(YY) {
      return 0 === YY.index(2) ? null : YY.str()
    }

    function jY(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          color: fY(YY),
          colour: fY(YY),
          fontSize: fY(YY)
        }
      }(YY)
    }

    function hY(YY) {
      return {
        icon: YY.str(),
        style: jY(YY)
      }
    }

    function dY(YY) {
      const rY = YY.index(3);
      return 0 === rY ? {
        string: YY.str()
      } : 1 === rY ? {
        styledEntityName: HY(YY)
      } : {
        styledTranslatedText: CY(YY)
      }
    }

    function JY(YY) {
      const rY = YY.index(3);
      return 0 === rY ? null : 1 === rY ? YY.str() : YY.long()
    }

    function MY(YY) {
      return 0 === YY.index(2) ? null : YY.float()
    }

    function wY(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          color: fY(YY),
          colour: fY(YY),
          fontWeight: JY(YY),
          fontStyle: fY(YY),
          fontSize: fY(YY),
          opacity: MY(YY)
        }
      }(YY)
    }

    function bY(YY) {
      return {
        str: dY(YY),
        style: wY(YY),
        clickableUrl: fY(YY)
      }
    }

    function XY(YY) {
      return YY.str()
    }

    function qY(YY) {
      return YY.Hy(XY)
    }

    function pY(YY) {
      return 0 === YY.index(2) ? null : qY(YY)
    }

    function kY(YY) {
      return {
        type: YY.str(),
        progress: YY.float(),
        width: fY(YY),
        height: fY(YY),
        colours: pY(YY),
        backgroundColour: fY(YY)
      }
    }

    function GY(YY) {
      return {
        type: YY.str(),
        action: YY.str(),
        style: wY(YY)
      }
    }

    function xY(YY) {
      const rY = YY.index(7);
      return 0 === rY ? {
        string: YY.str()
      } : 1 === rY ? {
        entityName: HY(YY)
      } : 2 === rY ? {
        translatedText: CY(YY)
      } : 3 === rY ? {
        styledIcon: hY(YY)
      } : 4 === rY ? {
        RY: bY(YY)
      } : 5 === rY ? {
        styledProgressBar: kY(YY)
      } : {
        styledKeyBinding: GY(YY)
      }
    }

    function nY(YY) {
      return YY.Hy(xY)
    }
    const PY = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function UY(YY) {
      return PY[YY.index(5)]
    }

    function LY(YY) {
      return 0 === YY.index(2) ? null : YY.double()
    }

    function tY(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          wD: LY(YY),
          bD: YY.double(),
          XD: YY.double(),
          qD: YY.bool(),
          description: nY(YY),
          pD: YY.str(),
          scale: LY(YY),
          rotation: LY(YY)
        }
      }(YY)
    }

    function Yr(YY) {
      return 0 === YY.index(2) ? null : YY.bool()
    }

    function rr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          GD: YY.double(),
          icon: YY.str(),
          label: nY(YY),
          xD: YY.bool(),
          scale: LY(YY),
          rotation: LY(YY),
          nD: Yr(YY)
        }
      }(YY)
    }

    function Dr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          wD: LY(YY),
          UD: YY.double(),
          LD: YY.double(),
          tD: YY.double(),
          gravity: YY.double(),
          YF: YY.double(),
          rF: YY.double(),
          DF: YY.double(),
          qD: YY.bool(),
          description: nY(YY),
          icon: fY(YY)
        }
      }(YY)
    }

    function Fr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          speed: YY.double(),
          AF: YY.double(),
          label: nY(YY),
          icon: fY(YY),
          scale: LY(YY),
          rotation: LY(YY)
        }
      }(YY)
    }

    function Ar(YY) {
      return 0 === YY.index(2) ? null : YY.long()
    }

    function Ir(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          RF: YY.long(),
          gF: YY.double(),
          aF: YY.double(),
          vF: Ar(YY),
          label: nY(YY),
          icon: fY(YY)
        }
      }(YY)
    }

    function Rr(YY) {
      return {
        type: UY(YY),
        progressBar: tY(YY),
        timedClick: rr(YY),
        gravityBar: Dr(YY),
        precisionBar: Fr(YY),
        rhythmClick: Ir(YY)
      }
    }

    function Or(YY) {
      return YY.float()
    }

    function gr(YY) {
      return YY.Hy(Or)
    }

    function ar(YY) {
      return 0 === YY.index(2) ? null : gr(YY)
    }

    function vr(YY) {
      return 0 === YY.index(2) ? null : nY(YY)
    }

    function ur(YY) {
      return YY.long()
    }

    function sr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return YY.Hy(ur)
      }(YY)
    }

    function ir(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          KD: YY.str(),
          jD: YY.long()
        }
      }(YY)
    }

    function yr(YY) {
      const rY = YY.index(3);
      return 0 === rY ? null : 1 === rY ? YY.str() : CY(YY)
    }

    function Qr(YY) {
      return {
        YY: YY.str(),
        rY: YY.str(),
        DY: YY.str()
      }
    }

    function or(YY) {
      return {
        hr: YY.str(),
        dr: fY(YY),
        Jr: fY(YY),
        Mr: qY(YY)
      }
    }

    function Wr(YY) {
      return YY.Hy(or)
    }

    function Er(YY) {
      return {
        SA: YY.str(),
        x: YY.long(),
        y: YY.long(),
        z: YY.long()
      }
    }

    function mr(YY) {
      return YY.Hy(Er)
    }

    function Vr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          qA: YY.float(),
          pA: YY.long(),
          kA: YY.long()
        }
      }(YY)
    }

    function Sr(YY) {
      return {
        blockName: YY.str(),
        jA: YY.bool(),
        hA: YY.bool(),
        dA: YY.bool(),
        JA: YY.float(),
        MA: YY.float(),
        wA: YY.long(),
        bA: Vr(YY)
      }
    }

    function lr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return YY.Hy(Sr)
      }(YY)
    }

    function Tr(YY) {
      return {
        ZA: YY.str(),
        CA: lr(YY)
      }
    }

    function er(YY) {
      return {
        blockName: YY.str(),
        frequency: YY.float()
      }
    }

    function Nr(YY) {
      return YY.Hy(er)
    }

    function Br(YY) {
      return {
        PA: YY.str(),
        UA: YY.str(),
        frequency: YY.float(),
        LA: Nr(YY)
      }
    }

    function cr(YY) {
      return YY.Hy(Br)
    }

    function Kr(YY) {
      return {
        blockName: YY.str(),
        radius: YY.long(),
        DI: YY.long(),
        NA: YY.long(),
        BA: YY.long(),
        FI: YY.float()
      }
    }

    function Hr(YY) {
      return YY.Hy(Kr)
    }

    function zr(YY) {
      return {
        NA: YY.long(),
        BA: YY.long(),
        cA: YY.long(),
        KA: YY.bool(),
        HA: Tr(YY),
        xA: cr(YY),
        YI: Hr(YY)
      }
    }

    function Zr(YY) {
      return YY.Hy(zr)
    }

    function Cr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          name: YY.str(),
          OI: fY(YY)
        }
      }(YY)
    }

    function fr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          terrain: Cr(YY),
          gI: Hr(YY)
        }
      }(YY)
    }

    function jr(YY) {
      return 0 === YY.index(2) ? null : function(YY) {
        return {
          layers: Zr(YY),
          AI: fr(YY)
        }
      }(YY)
    }
  },
  39699: (YY, rY, DY) => {
    DY.d(rY, {
      $: () => mY,
      B: () => TY,
      C: () => HY,
      F: () => VY,
      H: () => SY,
      K: () => oY,
      O: () => BY,
      P: () => ZY,
      T: () => yY,
      V: () => fY,
      X: () => EY,
      Y: () => WY,
      ab: () => lY,
      d: () => AY,
      g: () => CY,
      i: () => zY,
      j: () => iY,
      n: () => QY,
      r: () => KY,
      u: () => eY,
      w: () => cY,
      z: () => NY
    });
    var FY = DY(2610);
    const AY = {
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

    function IY(YY, rY) {
      return !ArrayBuffer.isView(YY) || YY instanceof DataView ? Array.isArray(YY) ? YY.map((YY => rY(YY))) : YY : Array.from(YY, (YY => rY(YY)))
    }

    function RY(YY) {
      if ("string" !== typeof YY) return YY;
      for (let rY = 0; rY < YY.length; rY++) {
        const DY = YY.charCodeAt(rY);
        if (DY >= 55296 && DY <= 57343) return gY.decode(OY.encode(YY))
      }
      return YY
    }
    const OY = new TextEncoder,
      gY = new TextDecoder;

    function aY(YY) {
      return YY
    }
    let vY;

    function uY(YY) {
      return null === YY || "object" !== typeof YY ? YY : [RY(YY.Qa), RY(YY.oa)]
    }

    function sY(YY) {
      return null === YY || "object" !== typeof YY ? YY : [IY(YY.lF, aY), IY(YY.kI, aY)]
    }

    function iY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.vv), RY(rY.sv)];
      var rY
    }

    function yY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [rY.id, rY.ga];
      var rY
    }

    function QY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [rY.br, RY(rY.Xr), rY.qr, RY(rY.nr), rY.tr, rY.YD, rY.Va, RY(rY.Sa), RY(rY.la)];
      var rY
    }

    function oY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [IY(rY.Yv, aY), rY.rv];
      var rY
    }

    function WY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [IY(rY.UR, (YY => RY(YY))), RY(rY.LR), rY.tR];
      var rY
    }

    function EY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [IY(rY.DO, aY), RY(rY.FO), rY.IO];
      var rY
    }

    function mY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.rY), RY(rY.DY)];
      var rY
    }

    function VY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.YO)];
      var rY
    }

    function SY(YY) {
      return RY(YY)
    }

    function lY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.ia), RY(rY.ya), RY(rY.Qa), RY(rY.oa)];
      var rY
    }

    function TY(YY) {
      return uY(YY)
    }

    function eY(YY) {
      return uY(YY)
    }

    function NY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.ua)];
      var rY
    }

    function BY(YY) {
      return YY
    }

    function cY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.ng), RY(rY.Pg)];
      var rY
    }

    function KY(YY) {
      return RY(YY)
    }

    function HY(YY) {
      return sY(YY)
    }

    function zY(YY) {
      return sY(YY)
    }

    function ZY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.eR)];
      var rY
    }

    function CY(YY) {
      return (vY ??= (0, FY.e)().map((YY => YY.name)), vY).map((rY => {
        return "string" === typeof(DY = YY[rY]) ? RY(DY) : IY(DY, aY);
        var DY
      }))
    }

    function fY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [rY.za, rY.Za, rY.Ca];
      var rY
    }
  },
  38568: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      f: () => OY
    });
    var FY = DY(341),
      AY = DY(4001);
    const IY = new Set(AY.j),
      RY = new Map;

    function OY(YY, rY) {
      let DY = RY.get(rY);
      void 0 === DY && (DY = new Map, RY.set(rY, DY));
      let AY = DY.get(YY);
      return void 0 === AY && (AY = `${YY}${(0,FY.A)(rY)}`, DY.set(YY, AY)), AY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);