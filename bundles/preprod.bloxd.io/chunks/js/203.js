export const id = 203;
export const ids = [203];
export const modules = {
  41680: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU,
      d: () => FU,
      f: () => AU
    });
    var cU = zU(41685),
      yU = zU(5318),
      QU = zU(41692);

    function AU(UU) {
      return UU.payloadKind === yU.jc.Msgpack ? (0, cU.d)(UU.payload) : void 0
    }

    function FU(UU, XU) {
      if (XU.payloadKind === yU.jc.Bytes || XU.payloadKind === yU.jc.MsgpackBin) return (0, QU.d)(UU, XU.payload)
    }

    function oU(UU) {
      return null !== UU && "object" === typeof UU
    }
  },
  41695: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      e: () => NU,
      i: () => IU,
      m: () => EU,
      o: () => tU
    });
    var cU = zU(5318),
      yU = zU(41699);
    const QU = new Map,
      AU = new Set,
      FU = new Set;
    let oU = 0,
      DU = 0;

    function EU(UU, XU) {
      let zU = QU.get(UU);
      return zU || (zU = new Set, QU.set(UU, zU)), zU.add(XU), () => {
        zU.delete(XU)
      }
    }

    function YU() {
      return 0 !== oU
    }

    function NU(UU) {
      return AU.add(UU), () => {
        AU.delete(UU)
      }
    }

    function IU(UU) {
      return FU.add(UU), () => {
        FU.delete(UU)
      }
    }
    const pU = "A raw message listener threw";

    function aU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU;
      for (const cU of XU) try {
        cU()
      } catch (zU) {
        UU ? (0, yU.p)(zU, pU) : console.error(pU, zU)
      }
    }
    const tU = {
      fire: function(UU) {
        if ("connection" === UU.type) {
          const XU = UU.phase === cU.E.Activated && UU.conn !== oU && UU.conn > DU,
            zU = (UU.phase === cU.E.Left || UU.phase === cU.E.Closed) && UU.conn === oU;
          return void(XU || zU ? (oU = XU ? UU.conn : 0, aU(!0)) : UU.phase === cU.E.Resumed && 0 !== oU && UU.conn > DU && (oU = UU.conn, aU(!0, FU)))
        }
        const XU = QU.get(UU.TE);
        if (XU && UU.conn === oU && 0 !== oU)
          for (const cU of XU) try {
            cU(UU)
          } catch (zU) {
            (0, yU.p)(zU, pU)
          }
      },
      close: function(UU) {
        DU = Math.max(DU, UU, oU), 0 !== oU && (oU = 0, aU(!1))
      }
    }
  },
  41674: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      e: () => oU,
      h: () => FU
    });
    var cU = zU(1280),
      yU = zU(41652);
    const QU = new TextDecoder,
      AU = new TextEncoder;

    function FU(UU, XU) {
      const zU = UU.queries.entityName(XU);
      if (zU === yU.Nc) return;
      const AU = UU.memoryData(UU.scratch(), 4 + zU, 4, "entity_name's answer");
      if (!AU) return;
      const FU = AU.getUint32(0, !0),
        oU = QU.decode(new Uint8Array(AU.buffer, AU.byteOffset + 4, zU));
      return (0, cU.b)(oU, !1, FU === yU._d ? null : FU)
    }

    function oU(UU, XU, zU) {
      const cU = AU.encode(zU);
      if (cU.length > yU.Gb) return !1;
      const QU = UU.memoryView(Uint8Array, UU.scratch(), cU.length, "has_effect's name");
      return !!QU && (QU.set(cU), 1 === UU.queries.hasEffect(XU, cU.length))
    }

    function DU(UU, XU, zU, cU) {
      const AU = UU.queries.blockData(XU, zU, cU);
      if (AU === yU.Nc) return;
      const FU = UU.memoryView(Uint8Array, UU.scratch(), AU, "block_data's answer");
      return FU ? JSON.parse(QU.decode(FU)) : void 0
    }
  },
  41685: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      e: () => EU
    });
    const cU = new TextDecoder;

    function yU(UU) {
      const XU = new QU(UU),
        zU = XU.value();
      if (XU.at !== UU.length) throw new Error(`msgpack: ${UU.length-XU.at} bytes after the value`);
      return zU
    }
    class QU {
      constructor(UU) {
        this.bytes = UU, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(UU.buffer, UU.byteOffset, UU.byteLength)
      }
      value() {
        const UU = this.u8();
        if (UU <= 127) return UU;
        if (UU >= 224) return UU - 256;
        if (UU >= 128 && UU <= 143) return this.map(15 & UU);
        if (UU >= 144 && UU <= 159) return this.array(15 & UU);
        if (UU >= 160 && UU <= 191) return this.str(31 & UU);
        switch (UU) {
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
            throw new Error(`msgpack: unknown byte 0x${UU.toString(16)} at ${this.at-1}`)
        }
      }
      take(UU) {
        const XU = this.at;
        if (XU + UU > this.bytes.length) throw new Error(`msgpack: ${UU} bytes past the end at ${XU}`);
        return this.at = XU + UU, XU
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
      int64(UU) {
        const XU = this.take(8);
        return UU ? this.view.getBigInt64(XU, !1) : this.view.getBigUint64(XU, !1)
      }
      str(UU) {
        const XU = this.take(UU),
          zU = this.bytes;
        if (UU < 16) {
          let yU = "";
          for (let QU = XU; QU < XU + UU; QU++) {
            const AU = zU[QU];
            if (AU >= 128) return cU.decode(zU.subarray(XU, XU + UU));
            yU += String.fromCharCode(AU)
          }
          return yU
        }
        return cU.decode(zU.subarray(XU, XU + UU))
      }
      bin(UU) {
        const XU = this.take(UU);
        return this.bytes.subarray(XU, XU + UU)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(UU) {
        this.enter();
        const XU = [];
        for (let zU = 0; zU < UU; zU++) XU.push(this.value());
        return this.depth--, XU
      }
      map(UU) {
        this.enter();
        const XU = {};
        for (let zU = 0; zU < UU; zU++) {
          const UU = this.value(),
            zU = this.value();
          XU["__proto__" === UU ? "__proto_" : String(UU)] = zU
        }
        return this.depth--, XU
      }
      ext(UU) {
        const XU = this.view.getInt8(this.take(1)),
          zU = this.take(UU);
        if (0 !== XU) {
          if (-1 === XU) {
            if (1 === UU) return new Date(NaN);
            if (4 === UU) return new Date(1e3 * this.view.getUint32(zU, !1));
            if (8 === UU) {
              const UU = this.view.getUint32(zU, !1),
                XU = UU >>> 2,
                cU = 4294967296 * (3 & UU) + this.view.getUint32(zU + 4, !1);
              return new Date(1e3 * cU + XU / 1e6)
            }
            if (12 === UU) {
              const UU = this.view.getUint32(zU, !1),
                XU = 4294967296 * this.view.getInt32(zU + 4, !1) + this.view.getUint32(zU + 8, !1);
              return new Date(1e3 * XU + UU / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${XU} of ${UU} bytes`)
        }
      }
    }
    const AU = new TextEncoder,
      FU = -(2n ** 63n),
      oU = 2n ** 63n - 1n,
      DU = 2n ** 64n - 1n;

    function EU(UU) {
      const XU = new YU;
      return XU.value(UU, 0), XU.bytes()
    }
    class YU {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(UU, XU) {
        if (XU > 512) throw new Error("msgpack: nested too deep");
        switch (typeof UU) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(UU ? 195 : 194);
          case "number":
            return void this.number(UU);
          case "bigint":
            return void this.bigint(UU);
          case "string":
            return void this.string(UU);
          case "object":
            if (null === UU) this.u8(192);
            else if (UU instanceof Uint8Array) this.head(UU.length, 196, -1, 197, 198), this.room(UU.length), this.buf.set(UU, this.at), this.at += UU.length;
            else if (Array.isArray(UU)) {
              this.head(UU.length, 220, 144, 220, 221);
              for (const zU of UU) this.value(zU, XU + 1)
            } else {
              var zU, cU;
              if (Object.getPrototypeOf(UU) !== Object.prototype && null !== Object.getPrototypeOf(UU)) throw new Error(`msgpack: can't encode a ${null!==(zU=null===(cU=UU.constructor)||void 0===cU?void 0:cU.name)&&void 0!==zU?zU:"object"}`);
              {
                const zU = Object.keys(UU);
                this.head(zU.length, 222, 128, 222, 223);
                for (const cU of zU) this.string(cU), this.value(UU[cU], XU + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof UU)
        }
      }
      number(UU) {
        Number.isInteger(UU) && UU >= -2147483648 && UU <= 4294967295 ? UU >= 0 ? UU < 128 ? this.u8(UU) : UU < 256 ? (this.u8(204), this.u8(UU)) : UU < 65536 ? (this.u8(205), this.u16(UU)) : (this.u8(206), this.u32(UU)) : UU >= -32 ? this.u8(UU + 256) : UU >= -128 ? (this.u8(208), this.u8(UU + 256)) : UU >= -32768 ? (this.u8(209), this.u16(UU + 65536)) : (this.u8(210), this.u32(UU >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, UU, !1), this.at += 8)
      }
      bigint(UU) {
        const XU = UU >= FU && UU <= oU;
        if (!XU && (UU < 0n || UU > DU)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(XU ? 211 : 207), this.room(8), XU ? this.view.setBigInt64(this.at, UU, !1) : this.view.setBigUint64(this.at, UU, !1), this.at += 8
      }
      string(UU) {
        const XU = AU.encode(UU);
        this.head(XU.length, 217, 160, 218, 219), this.room(XU.length), this.buf.set(XU, this.at), this.at += XU.length
      }
      head(UU, XU, zU, cU, yU) {
        zU >= 0 && UU < (160 === zU ? 32 : 16) ? this.u8(zU | UU) : XU !== cU && UU < 256 ? (this.u8(XU), this.u8(UU)) : UU < 65536 ? (this.u8(cU), this.u16(UU)) : (this.u8(yU), this.u32(UU))
      }
      room(UU) {
        if (this.at + UU <= this.buf.length) return;
        let XU = 2 * this.buf.length;
        for (; XU < this.at + UU;) XU *= 2;
        const zU = new Uint8Array(XU);
        zU.set(this.buf.subarray(0, this.at)), this.buf = zU, this.view = new DataView(zU.buffer)
      }
      u8(UU) {
        this.room(1), this.buf[this.at++] = UU
      }
      u16(UU) {
        this.room(2), this.view.setUint16(this.at, UU, !1), this.at += 2
      }
      u32(UU) {
        this.room(4), this.view.setUint32(this.at, UU, !1), this.at += 4
      }
    }
  },
  41692: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(41676);
    const yU = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class QU {
      constructor(UU) {
        this.buf = UU, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let UU = this.u8(),
          XU = 127 & UU,
          zU = 128;
        for (; 128 & UU;) {
          if (zU > 2 ** 63) throw new RangeError("avro: varint too long");
          UU = this.u8(), XU += (127 & UU) * zU, zU *= 128
        }
        return XU % 2 === 1 ? -(XU + 1) / 2 : XU / 2
      }
      float() {
        const UU = this.take(4);
        return this.floats().getFloat32(UU, !0)
      }
      double() {
        const UU = this.take(8);
        return this.floats().getFloat64(UU, !0)
      }
      str() {
        const UU = this.size(),
          XU = this.take(UU),
          zU = XU + UU;
        if (UU <= 32) {
          let UU = "";
          for (let cU = XU; cU < zU; cU++) {
            const QU = this.buf[cU];
            if (QU >= 128) return yU.decode(this.buf.subarray(XU, zU));
            UU += String.fromCharCode(QU)
          }
          return UU
        }
        return yU.decode(this.buf.subarray(XU, zU))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(UU) {
        const XU = this.take(UU);
        return this.buf.slice(XU, XU + UU)
      }
      index(UU) {
        const XU = this.long();
        if (!(XU >= 0 && XU < UU)) throw new RangeError(`avro: index ${XU} of ${UU}`);
        return XU
      }
      AY(UU) {
        const XU = [];
        for (let zU = this.long(); 0 !== zU; zU = this.long()) {
          zU = this.block(zU);
          for (let cU = 0; cU < zU; cU++) XU.push(UU(this))
        }
        return XU
      }
      map(UU) {
        const XU = {};
        for (let zU = this.long(); 0 !== zU; zU = this.long()) {
          zU = this.block(zU);
          for (let cU = 0; cU < zU; cU++) {
            XU[this.str()] = UU(this)
          }
        }
        return XU
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(UU) {
        let XU = UU;
        if (XU < 0 && (XU = -XU, this.long()), XU > this.buf.length - this.at) throw new RangeError(`avro: block of ${XU} items in ${this.buf.length-this.at} bytes`);
        return XU
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const UU = this.long();
        if (UU < 0) throw new RangeError(`avro: length ${UU}`);
        return UU
      }
      u8() {
        const UU = this.buf[this.at];
        if (void 0 === UU) throw new RangeError("avro: truncated");
        return this.at++, UU
      }
      take(UU) {
        const XU = this.at;
        if (UU > this.buf.length - XU) throw new RangeError("avro: truncated");
        return this.at = XU + UU, XU
      }
    }

    function AU(UU, XU) {
      const zU = new QU(XU),
        yU = (0, cU.lb)(UU, zU);
      return zU.end(), yU
    }
  },
  41676: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => pU,
      C: () => DU,
      F: () => AU,
      G: () => eU,
      H: () => yU,
      I: () => FU,
      L: () => IU,
      N: () => dU,
      O: () => WU,
      S: () => RU,
      U: () => EU,
      V: () => YU,
      Z: () => LU,
      c: () => ZU,
      cb: () => GU,
      eb: () => aU,
      g: () => tU,
      ib: () => oU,
      j: () => gU,
      k: () => kU,
      lb: () => CU,
      o: () => PU,
      p: () => cU,
      s: () => QU,
      w: () => BU,
      y: () => NU
    });
    const cU = 2,
      yU = 12,
      QU = 27,
      AU = 40,
      FU = 52,
      oU = 59,
      DU = 63,
      EU = 83,
      YU = 84,
      NU = 89,
      IU = 91,
      pU = 93,
      aU = 94,
      tU = 95,
      gU = 97,
      kU = 101,
      GU = 102,
      BU = 73,
      ZU = 16,
      RU = 86,
      PU = 60,
      WU = 17,
      dU = 56,
      LU = 100,
      eU = 81;

    function CU(UU, XU) {
      switch (UU) {
        case cU:
          return function(UU) {
            return {
              vX: jU(UU),
              nX: UU.float(),
              mX: UU.long()
            }
          }(XU);
        case yU:
          return function(UU) {
            return {
              nU: rU(UU),
              mU: rU(UU)
            }
          }(XU);
        case QU:
          return function(UU) {
            return {
              fc: UU.bool(),
              Hc: rU(UU)
            }
          }(XU);
        case AU:
          return XU.str();
        case FU:
          return function(UU) {
            return {
              id: UU.long(),
              Cz: AX(UU)
            }
          }(XU);
        case oU:
          return function(UU) {
            return {
              Ec: rU(UU),
              Yc: oX(UU)
            }
          }(XU);
        case DU:
          return XU.str();
        case EU:
        case YU:
          return XU.long();
        case NU:
          return function(UU) {
            return {
              Mc: UU.long(),
              vc: UU.bool(),
              Vc: UU.float()
            }
          }(XU);
        case IU:
          return XU.long();
        case pU:
          return function(UU) {
            return {
              yX: UU.bool(),
              iU: YX(UU)
            }
          }(XU);
        case aU:
          return function(UU) {
            return {
              id: UU.str(),
              position: EX(UU),
              Pc: NX(UU),
              style: vU(UU),
              dc: UU.bool()
            }
          }(XU);
        case tU:
          return function(UU) {
            return {
              id: rU(UU)
            }
          }(XU);
        case gU:
          return function(UU) {
            return {
              Ey: UU.long(),
              Yy: UU.str(),
              Ny: yX(UU),
              Iy: yX(UU),
              py: rU(UU),
              ty: rU(UU),
              gy: rU(UU),
              ky: rU(UU),
              Gy: rU(UU),
              By: yX(UU),
              Zy: yX(UU),
              Ry: rU(UU),
              Py: rU(UU),
              Wy: rU(UU)
            }
          }(XU);
        case kU:
          return XU.str();
        case GU:
          return XU.long();
        case BU:
          return function(UU) {
            return {
              uQ: UU.long(),
              fQ: UU.str(),
              iQ: UU.float()
            }
          }(XU);
        case ZU:
          return function(UU) {
            return {
              lU: UU.bool(),
              xU: rU(UU),
              JU: UU.str(),
              jU: pX(UU),
              KU: pX(UU),
              bU: UU.bool(),
              TU: UU.long(),
              hU: aX(UU)
            }
          }(XU);
        case RU:
          return function(UU) {
            return {
              DU: rU(UU)
            }
          }(XU);
        case PU:
          return function(UU) {
            return {
              iX: UU.str(),
              HX: UU.str(),
              MX: tX(UU),
              wQ: UU.str(),
              qQ: TU(UU),
              OQ: UU.float()
            }
          }(XU);
        case WU:
          return function(UU) {
            return {
              iX: UU.str(),
              HX: UU.str(),
              MX: tX(UU)
            }
          }(XU);
        case dU:
          return function(UU) {
            return UU.AY(gX)
          }(XU);
        case LU:
          return function(UU) {
            return {
              KQ: GX(UU),
              XA: nU(UU)
            }
          }(XU);
        case eU:
          return function(UU) {
            return {
              uy: UU.bool(),
              iy: rU(UU),
              Hy: ZX(UU),
              vy: iX(UU)
            }
          }(XU);
        default:
          throw new Error(`no reader for to-client message ${UU}`)
      }
    }

    function wU(UU) {
      return {
        entityName: UU.str()
      }
    }

    function qU(UU) {
      const XU = UU.index(4);
      return 0 === XU ? UU.str() : 1 === XU ? UU.long() : 2 === XU ? UU.bool() : wU(UU)
    }

    function OU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return UU.map(qU)
      }(UU)
    }

    function SU(UU) {
      return {
        translationKey: UU.str(),
        params: OU(UU)
      }
    }

    function rU(UU) {
      return 0 === UU.index(2) ? null : UU.str()
    }

    function uU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          color: rU(UU),
          colour: rU(UU),
          fontSize: rU(UU)
        }
      }(UU)
    }

    function fU(UU) {
      return {
        icon: UU.str(),
        style: uU(UU)
      }
    }

    function iU(UU) {
      const XU = UU.index(3);
      return 0 === XU ? {
        string: UU.str()
      } : 1 === XU ? {
        styledEntityName: wU(UU)
      } : {
        styledTranslatedText: SU(UU)
      }
    }

    function HU(UU) {
      const XU = UU.index(3);
      return 0 === XU ? null : 1 === XU ? UU.str() : UU.long()
    }

    function MU(UU) {
      return 0 === UU.index(2) ? null : UU.float()
    }

    function vU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          color: rU(UU),
          colour: rU(UU),
          fontWeight: HU(UU),
          fontStyle: rU(UU),
          fontSize: rU(UU),
          opacity: MU(UU)
        }
      }(UU)
    }

    function VU(UU) {
      return {
        str: iU(UU),
        style: vU(UU),
        clickableUrl: rU(UU)
      }
    }

    function sU(UU) {
      return UU.str()
    }

    function nU(UU) {
      return UU.AY(sU)
    }

    function mU(UU) {
      return 0 === UU.index(2) ? null : nU(UU)
    }

    function lU(UU) {
      return {
        type: UU.str(),
        progress: UU.float(),
        width: rU(UU),
        height: rU(UU),
        colours: mU(UU),
        backgroundColour: rU(UU)
      }
    }

    function xU(UU) {
      return {
        type: UU.str(),
        action: UU.str(),
        style: vU(UU)
      }
    }

    function JU(UU) {
      const XU = UU.index(7);
      return 0 === XU ? {
        string: UU.str()
      } : 1 === XU ? {
        entityName: wU(UU)
      } : 2 === XU ? {
        translatedText: SU(UU)
      } : 3 === XU ? {
        styledIcon: fU(UU)
      } : 4 === XU ? {
        VX: VU(UU)
      } : 5 === XU ? {
        styledProgressBar: lU(UU)
      } : {
        styledKeyBinding: xU(UU)
      }
    }

    function jU(UU) {
      return UU.AY(JU)
    }
    const KU = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function bU(UU) {
      return KU[UU.index(5)]
    }

    function TU(UU) {
      return 0 === UU.index(2) ? null : UU.double()
    }

    function hU(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          Sz: TU(UU),
          rz: UU.double(),
          uz: UU.double(),
          fz: UU.bool(),
          description: jU(UU),
          iz: UU.str(),
          scale: TU(UU),
          rotation: TU(UU)
        }
      }(UU)
    }

    function UX(UU) {
      return 0 === UU.index(2) ? null : UU.bool()
    }

    function XX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          vz: UU.double(),
          icon: UU.str(),
          label: jU(UU),
          Vz: UU.bool(),
          scale: TU(UU),
          rotation: TU(UU),
          sz: UX(UU)
        }
      }(UU)
    }

    function zX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          Sz: TU(UU),
          mz: UU.double(),
          lz: UU.double(),
          xz: UU.double(),
          gravity: UU.double(),
          Jz: UU.double(),
          jz: UU.double(),
          Kz: UU.double(),
          fz: UU.bool(),
          description: jU(UU),
          icon: rU(UU)
        }
      }(UU)
    }

    function cX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          speed: UU.double(),
          Tz: UU.double(),
          label: jU(UU),
          icon: rU(UU),
          scale: TU(UU),
          rotation: TU(UU)
        }
      }(UU)
    }

    function yX(UU) {
      return 0 === UU.index(2) ? null : UU.long()
    }

    function QX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          Uc: UU.long(),
          Xc: UU.double(),
          zc: UU.double(),
          yc: yX(UU),
          label: jU(UU),
          icon: rU(UU)
        }
      }(UU)
    }

    function AX(UU) {
      return {
        type: bU(UU),
        progressBar: hU(UU),
        timedClick: XX(UU),
        gravityBar: zX(UU),
        precisionBar: cX(UU),
        rhythmClick: QX(UU)
      }
    }
    const FX = ["playerGone", "rateLimited"];

    function oX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return FX[UU.index(2)]
      }(UU)
    }

    function DX(UU) {
      return UU.float()
    }

    function EX(UU) {
      return UU.AY(DX)
    }

    function YX(UU) {
      return 0 === UU.index(2) ? null : EX(UU)
    }

    function NX(UU) {
      return 0 === UU.index(2) ? null : jU(UU)
    }

    function IX(UU) {
      return UU.long()
    }

    function pX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return UU.AY(IX)
      }(UU)
    }

    function aX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          XX: UU.str(),
          zX: UU.long()
        }
      }(UU)
    }

    function tX(UU) {
      const XU = UU.index(3);
      return 0 === XU ? null : 1 === XU ? UU.str() : SU(UU)
    }

    function gX(UU) {
      return {
        AU: UU.str(),
        FU: UU.str(),
        oU: UU.str()
      }
    }

    function kX(UU) {
      return {
        bQ: UU.str(),
        TQ: rU(UU),
        hQ: rU(UU),
        UA: nU(UU)
      }
    }

    function GX(UU) {
      return UU.AY(kX)
    }

    function BX(UU) {
      return {
        My: UU.str(),
        x: UU.long(),
        y: UU.long(),
        z: UU.long()
      }
    }

    function ZX(UU) {
      return UU.AY(BX)
    }

    function RX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          EQ: UU.float(),
          YQ: UU.long(),
          NQ: UU.long()
        }
      }(UU)
    }

    function PX(UU) {
      return {
        blockName: UU.str(),
        zQ: UU.bool(),
        cQ: UU.bool(),
        yQ: UU.bool(),
        QQ: UU.float(),
        AQ: UU.float(),
        FQ: UU.long(),
        oQ: RX(UU)
      }
    }

    function WX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return UU.AY(PX)
      }(UU)
    }

    function dX(UU) {
      return {
        Ty: UU.str(),
        hy: WX(UU)
      }
    }

    function LX(UU) {
      return {
        blockName: UU.str(),
        frequency: UU.float()
      }
    }

    function eX(UU) {
      return UU.AY(LX)
    }

    function CX(UU) {
      return {
        aQ: UU.str(),
        tQ: UU.str(),
        frequency: UU.float(),
        gQ: eX(UU)
      }
    }

    function wX(UU) {
      return UU.AY(CX)
    }

    function qX(UU) {
      return {
        blockName: UU.str(),
        radius: UU.long(),
        ZQ: UU.long(),
        my: UU.long(),
        ly: UU.long(),
        RQ: UU.float()
      }
    }

    function OX(UU) {
      return UU.AY(qX)
    }

    function SX(UU) {
      return {
        my: UU.long(),
        ly: UU.long(),
        xy: UU.long(),
        Jy: UU.bool(),
        jy: dX(UU),
        IQ: wX(UU),
        GQ: OX(UU)
      }
    }

    function rX(UU) {
      return UU.AY(SX)
    }

    function uX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          name: UU.str(),
          eQ: rU(UU)
        }
      }(UU)
    }

    function fX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          terrain: uX(UU),
          CQ: OX(UU)
        }
      }(UU)
    }

    function iX(UU) {
      return 0 === UU.index(2) ? null : function(UU) {
        return {
          layers: rX(UU),
          WQ: fX(UU)
        }
      }(UU)
    }
  },
  41667: (UU, XU, zU) => {
    zU.d(XU, {
      $: () => GU,
      A: () => PU,
      B: () => wU,
      D: () => BU,
      G: () => ZU,
      J: () => tU,
      N: () => LU,
      Q: () => OU,
      U: () => pU,
      V: () => rU,
      W: () => kU,
      Y: () => gU,
      b: () => yU,
      c: () => SU,
      db: () => RU,
      e: () => qU,
      i: () => IU,
      m: () => aU,
      o: () => CU,
      r: () => WU,
      v: () => eU,
      y: () => dU
    });
    var cU = zU(3318);
    const yU = {
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

    function QU(UU, XU) {
      return !ArrayBuffer.isView(UU) || UU instanceof DataView ? Array.isArray(UU) ? UU.map((UU => XU(UU))) : UU : Array.from(UU, (UU => XU(UU)))
    }

    function AU(UU) {
      if ("string" !== typeof UU) return UU;
      for (let XU = 0; XU < UU.length; XU++) {
        const zU = UU.charCodeAt(XU);
        if (zU >= 55296 && zU <= 57343) return oU.decode(FU.encode(UU))
      }
      return UU
    }
    const FU = new TextEncoder,
      oU = new TextDecoder;

    function DU(UU) {
      return UU
    }
    let EU;

    function YU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [AU(UU.policy), AU(UU.ZD)]
    }

    function NU(UU) {
      return null === UU || "object" !== typeof UU ? UU : [QU(UU.jU, DU), QU(UU.uA, DU)]
    }

    function IU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.TE), AU(XU.hE)];
      var XU
    }

    function pU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.id, XU.KD];
      var XU
    }

    function aU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.Ey, AU(XU.Yy), XU.Ny, AU(XU.ty), XU.By, XU.Zy, XU.zD, AU(XU.cD), AU(XU.yD)];
      var XU
    }

    function tU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.cF, DU), XU.yF];
      var XU
    }

    function gU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.ED, (UU => AU(UU))), AU(XU.YD), XU.ND];
      var XU
    }

    function kU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [QU(XU.tD, DU), AU(XU.gD), XU.kD];
      var XU
    }

    function GU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.FU), AU(XU.oU)];
      var XU
    }

    function BU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.GA)];
      var XU
    }

    function ZU(UU) {
      return AU(UU)
    }

    function RU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.GD), AU(XU.BD), AU(XU.policy), AU(XU.ZD)];
      var XU
    }

    function PU(UU) {
      return YU(UU)
    }

    function WU(UU) {
      return YU(UU)
    }

    function dU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.bD)];
      var XU
    }

    function LU(UU) {
      return UU
    }

    function eU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.pA), AU(XU.aA)];
      var XU
    }

    function CU(UU) {
      return AU(UU)
    }

    function wU(UU) {
      return NU(UU)
    }

    function qU(UU) {
      return NU(UU)
    }

    function OU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [AU(XU.xD)];
      var XU
    }

    function SU(UU) {
      return (EU ??= (0, cU.d)().map((UU => UU.name)), EU).map((XU => {
        return "string" === typeof(zU = UU[XU]) ? AU(zU) : QU(zU, DU);
        var zU
      }))
    }

    function rU(UU) {
      return null === (XU = UU) || "object" !== typeof XU ? XU : [XU.iA, XU.HA, XU.MA];
      var XU
    }
  },
  9894: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      f: () => QU
    });
    var cU = zU(9834);
    const yU = "Air",
      QU = Object.freeze(new cU.g(yU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40101: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      e: () => FU
    });
    var cU = zU(344),
      yU = zU(4895);
    const QU = new Set(yU.m),
      AU = new Map;

    function FU(UU, XU) {
      let zU = AU.get(XU);
      void 0 === zU && (zU = new Map, AU.set(XU, zU));
      let yU = zU.get(UU);
      return void 0 === yU && (yU = `${UU}${(0,cU.y)(XU)}`, zU.set(UU, yU)), yU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);