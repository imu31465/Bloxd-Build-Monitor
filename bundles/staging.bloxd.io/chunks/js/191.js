export const id = 191;
export const ids = [191];
export const modules = {
  40675: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB,
      e: () => vB,
      f: () => GB
    });
    var TB = ZB(40682),
      JB = ZB(4969),
      oB = ZB(40684);

    function GB(BB) {
      return BB.payloadKind === JB.nc.Msgpack ? (0, TB.e)(BB.payload) : void 0
    }

    function vB(BB, IB) {
      if (IB.payloadKind === JB.nc.Bytes || IB.payloadKind === JB.nc.MsgpackBin) return (0, oB.e)(BB, IB.payload)
    }

    function kB(BB) {
      return null !== BB && "object" === typeof BB
    }
  },
  40692: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => hB,
      g: () => zB,
      j: () => FB,
      l: () => nB,
      p: () => qB
    });
    var TB = ZB(4969),
      JB = ZB(40701);
    const oB = new Map,
      GB = new Set,
      vB = new Set;
    let kB = 0,
      cB = 0;

    function nB(BB, IB) {
      let ZB = oB.get(BB);
      return ZB || (ZB = new Set, oB.set(BB, ZB)), ZB.add(IB), () => {
        ZB.delete(IB)
      }
    }

    function hB() {
      return 0 !== kB
    }

    function zB(BB) {
      return GB.add(BB), () => {
        GB.delete(BB)
      }
    }

    function FB(BB) {
      return vB.add(BB), () => {
        vB.delete(BB)
      }
    }
    const NB = "A raw message listener threw";

    function gB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GB;
      for (const TB of IB) try {
        TB()
      } catch (ZB) {
        BB ? (0, JB.r)(ZB, NB) : console.error(NB, ZB)
      }
    }
    const qB = {
      fire: function(BB) {
        if ("connection" === BB.type) {
          const IB = BB.phase === TB.G.Activated && BB.conn !== kB && BB.conn > cB,
            ZB = (BB.phase === TB.G.Left || BB.phase === TB.G.Closed) && BB.conn === kB;
          return void(IB || ZB ? (kB = IB ? BB.conn : 0, gB(!0)) : BB.phase === TB.G.Resumed && 0 !== kB && BB.conn > cB && (kB = BB.conn, gB(!0, vB)))
        }
        const IB = oB.get(BB.Xn);
        if (IB && BB.conn === kB && 0 !== kB)
          for (const TB of IB) try {
            TB(BB)
          } catch (ZB) {
            (0, JB.r)(ZB, NB)
          }
      },
      close: function(BB) {
        cB = Math.max(cB, BB, kB), 0 !== kB && (kB = 0, gB(!1))
      }
    }
  },
  40664: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB,
      h: () => kB,
      k: () => vB
    });
    var TB = ZB(1333),
      JB = ZB(40633);
    const oB = new TextDecoder,
      GB = new TextEncoder;

    function vB(BB, IB) {
      const ZB = BB.queries.entityName(IB);
      if (ZB === JB.Bc) return;
      const GB = BB.memoryData(BB.scratch(), 4 + ZB, 4, "entity_name's answer");
      if (!GB) return;
      const vB = GB.getUint32(0, !0),
        kB = oB.decode(new Uint8Array(GB.buffer, GB.byteOffset + 4, ZB));
      return (0, TB.c)(kB, !1, vB === JB.Qd ? null : vB)
    }

    function kB(BB, IB, ZB) {
      const TB = GB.encode(ZB);
      if (TB.length > JB.sb) return !1;
      const oB = BB.memoryView(Uint8Array, BB.scratch(), TB.length, "has_effect's name");
      return !!oB && (oB.set(TB), 1 === BB.queries.hasEffect(IB, TB.length))
    }

    function cB(BB, IB, ZB, TB) {
      const GB = BB.queries.blockData(IB, ZB, TB);
      if (GB === JB.Bc) return;
      const vB = BB.memoryView(Uint8Array, BB.scratch(), GB, "block_data's answer");
      return vB ? JSON.parse(oB.decode(vB)) : void 0
    }
  },
  40682: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => nB
    });
    const TB = new TextDecoder;

    function JB(BB) {
      const IB = new oB(BB),
        ZB = IB.value();
      if (IB.at !== BB.length) throw new Error(`msgpack: ${BB.length-IB.at} bytes after the value`);
      return ZB
    }
    class oB {
      constructor(BB) {
        this.bytes = BB, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(BB.buffer, BB.byteOffset, BB.byteLength)
      }
      value() {
        const BB = this.u8();
        if (BB <= 127) return BB;
        if (BB >= 224) return BB - 256;
        if (BB >= 128 && BB <= 143) return this.map(15 & BB);
        if (BB >= 144 && BB <= 159) return this.array(15 & BB);
        if (BB >= 160 && BB <= 191) return this.str(31 & BB);
        switch (BB) {
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
            throw new Error(`msgpack: unknown byte 0x${BB.toString(16)} at ${this.at-1}`)
        }
      }
      take(BB) {
        const IB = this.at;
        if (IB + BB > this.bytes.length) throw new Error(`msgpack: ${BB} bytes past the end at ${IB}`);
        return this.at = IB + BB, IB
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
      int64(BB) {
        const IB = this.take(8);
        return BB ? this.view.getBigInt64(IB, !1) : this.view.getBigUint64(IB, !1)
      }
      str(BB) {
        const IB = this.take(BB),
          ZB = this.bytes;
        if (BB < 16) {
          let JB = "";
          for (let oB = IB; oB < IB + BB; oB++) {
            const GB = ZB[oB];
            if (GB >= 128) return TB.decode(ZB.subarray(IB, IB + BB));
            JB += String.fromCharCode(GB)
          }
          return JB
        }
        return TB.decode(ZB.subarray(IB, IB + BB))
      }
      bin(BB) {
        const IB = this.take(BB);
        return this.bytes.subarray(IB, IB + BB)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(BB) {
        this.enter();
        const IB = [];
        for (let ZB = 0; ZB < BB; ZB++) IB.push(this.value());
        return this.depth--, IB
      }
      map(BB) {
        this.enter();
        const IB = {};
        for (let ZB = 0; ZB < BB; ZB++) {
          const BB = this.value(),
            ZB = this.value();
          IB["__proto__" === BB ? "__proto_" : String(BB)] = ZB
        }
        return this.depth--, IB
      }
      ext(BB) {
        const IB = this.view.getInt8(this.take(1)),
          ZB = this.take(BB);
        if (0 !== IB) {
          if (-1 === IB) {
            if (1 === BB) return new Date(NaN);
            if (4 === BB) return new Date(1e3 * this.view.getUint32(ZB, !1));
            if (8 === BB) {
              const BB = this.view.getUint32(ZB, !1),
                IB = BB >>> 2,
                TB = 4294967296 * (3 & BB) + this.view.getUint32(ZB + 4, !1);
              return new Date(1e3 * TB + IB / 1e6)
            }
            if (12 === BB) {
              const BB = this.view.getUint32(ZB, !1),
                IB = 4294967296 * this.view.getInt32(ZB + 4, !1) + this.view.getUint32(ZB + 8, !1);
              return new Date(1e3 * IB + BB / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${IB} of ${BB} bytes`)
        }
      }
    }
    const GB = new TextEncoder,
      vB = -(2n ** 63n),
      kB = 2n ** 63n - 1n,
      cB = 2n ** 64n - 1n;

    function nB(BB) {
      const IB = new hB;
      return IB.value(BB, 0), IB.bytes()
    }
    class hB {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(BB, IB) {
        if (IB > 512) throw new Error("msgpack: nested too deep");
        switch (typeof BB) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(BB ? 195 : 194);
          case "number":
            return void this.number(BB);
          case "bigint":
            return void this.bigint(BB);
          case "string":
            return void this.string(BB);
          case "object":
            if (null === BB) this.u8(192);
            else if (BB instanceof Uint8Array) this.head(BB.length, 196, -1, 197, 198), this.room(BB.length), this.buf.set(BB, this.at), this.at += BB.length;
            else if (Array.isArray(BB)) {
              this.head(BB.length, 220, 144, 220, 221);
              for (const ZB of BB) this.value(ZB, IB + 1)
            } else {
              var ZB, TB;
              if (Object.getPrototypeOf(BB) !== Object.prototype && null !== Object.getPrototypeOf(BB)) throw new Error(`msgpack: can't encode a ${null!==(ZB=null===(TB=BB.constructor)||void 0===TB?void 0:TB.name)&&void 0!==ZB?ZB:"object"}`);
              {
                const ZB = Object.keys(BB);
                this.head(ZB.length, 222, 128, 222, 223);
                for (const TB of ZB) this.string(TB), this.value(BB[TB], IB + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof BB)
        }
      }
      number(BB) {
        Number.isInteger(BB) && BB >= -2147483648 && BB <= 4294967295 ? BB >= 0 ? BB < 128 ? this.u8(BB) : BB < 256 ? (this.u8(204), this.u8(BB)) : BB < 65536 ? (this.u8(205), this.u16(BB)) : (this.u8(206), this.u32(BB)) : BB >= -32 ? this.u8(BB + 256) : BB >= -128 ? (this.u8(208), this.u8(BB + 256)) : BB >= -32768 ? (this.u8(209), this.u16(BB + 65536)) : (this.u8(210), this.u32(BB >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, BB, !1), this.at += 8)
      }
      bigint(BB) {
        const IB = BB >= vB && BB <= kB;
        if (!IB && (BB < 0n || BB > cB)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(IB ? 211 : 207), this.room(8), IB ? this.view.setBigInt64(this.at, BB, !1) : this.view.setBigUint64(this.at, BB, !1), this.at += 8
      }
      string(BB) {
        const IB = GB.encode(BB);
        this.head(IB.length, 217, 160, 218, 219), this.room(IB.length), this.buf.set(IB, this.at), this.at += IB.length
      }
      head(BB, IB, ZB, TB, JB) {
        ZB >= 0 && BB < (160 === ZB ? 32 : 16) ? this.u8(ZB | BB) : IB !== TB && BB < 256 ? (this.u8(IB), this.u8(BB)) : BB < 65536 ? (this.u8(TB), this.u16(BB)) : (this.u8(JB), this.u32(BB))
      }
      room(BB) {
        if (this.at + BB <= this.buf.length) return;
        let IB = 2 * this.buf.length;
        for (; IB < this.at + BB;) IB *= 2;
        const ZB = new Uint8Array(IB);
        ZB.set(this.buf.subarray(0, this.at)), this.buf = ZB, this.view = new DataView(ZB.buffer)
      }
      u8(BB) {
        this.room(1), this.buf[this.at++] = BB
      }
      u16(BB) {
        this.room(2), this.view.setUint16(this.at, BB, !1), this.at += 2
      }
      u32(BB) {
        this.room(4), this.view.setUint32(this.at, BB, !1), this.at += 4
      }
    }
  },
  40684: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(40666);
    const JB = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class oB {
      constructor(BB) {
        this.buf = BB, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let BB = this.u8(),
          IB = 127 & BB,
          ZB = 128;
        for (; 128 & BB;) {
          if (ZB > 2 ** 63) throw new RangeError("avro: varint too long");
          BB = this.u8(), IB += (127 & BB) * ZB, ZB *= 128
        }
        return IB % 2 === 1 ? -(IB + 1) / 2 : IB / 2
      }
      float() {
        const BB = this.take(4);
        return this.floats().getFloat32(BB, !0)
      }
      double() {
        const BB = this.take(8);
        return this.floats().getFloat64(BB, !0)
      }
      str() {
        const BB = this.size(),
          IB = this.take(BB),
          ZB = IB + BB;
        if (BB <= 32) {
          let BB = "";
          for (let TB = IB; TB < ZB; TB++) {
            const oB = this.buf[TB];
            if (oB >= 128) return JB.decode(this.buf.subarray(IB, ZB));
            BB += String.fromCharCode(oB)
          }
          return BB
        }
        return JB.decode(this.buf.subarray(IB, ZB))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(BB) {
        const IB = this.take(BB);
        return this.buf.slice(IB, IB + BB)
      }
      index(BB) {
        const IB = this.long();
        if (!(IB >= 0 && IB < BB)) throw new RangeError(`avro: index ${IB} of ${BB}`);
        return IB
      }
      dN(BB) {
        const IB = [];
        for (let ZB = this.long(); 0 !== ZB; ZB = this.long()) {
          ZB = this.block(ZB);
          for (let TB = 0; TB < ZB; TB++) IB.push(BB(this))
        }
        return IB
      }
      map(BB) {
        const IB = {};
        for (let ZB = this.long(); 0 !== ZB; ZB = this.long()) {
          ZB = this.block(ZB);
          for (let TB = 0; TB < ZB; TB++) {
            IB[this.str()] = BB(this)
          }
        }
        return IB
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(BB) {
        let IB = BB;
        if (IB < 0 && (IB = -IB, this.long()), IB > this.buf.length - this.at) throw new RangeError(`avro: block of ${IB} items in ${this.buf.length-this.at} bytes`);
        return IB
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const BB = this.long();
        if (BB < 0) throw new RangeError(`avro: length ${BB}`);
        return BB
      }
      u8() {
        const BB = this.buf[this.at];
        if (void 0 === BB) throw new RangeError("avro: truncated");
        return this.at++, BB
      }
      take(BB) {
        const IB = this.at;
        if (BB > this.buf.length - IB) throw new RangeError("avro: truncated");
        return this.at = IB + BB, IB
      }
    }

    function GB(BB, IB) {
      const ZB = new oB(IB),
        JB = (0, TB.ab)(BB, ZB);
      return ZB.end(), JB
    }
  },
  40666: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => JB,
      C: () => vB,
      E: () => FB,
      F: () => OB,
      H: () => wB,
      I: () => QB,
      J: () => nB,
      L: () => hB,
      O: () => YB,
      R: () => NB,
      U: () => WB,
      W: () => gB,
      Z: () => kB,
      ab: () => pB,
      c: () => CB,
      f: () => qB,
      h: () => yB,
      k: () => UB,
      n: () => sB,
      o: () => TB,
      p: () => oB,
      q: () => dB,
      t: () => zB,
      u: () => cB,
      v: () => GB,
      y: () => iB
    });
    const TB = 2,
      JB = 12,
      oB = 27,
      GB = 40,
      vB = 52,
      kB = 59,
      cB = 63,
      nB = 83,
      hB = 84,
      zB = 89,
      FB = 91,
      NB = 93,
      gB = 94,
      qB = 95,
      yB = 97,
      UB = 101,
      WB = 102,
      dB = 73,
      CB = 16,
      QB = 86,
      sB = 60,
      wB = 17,
      OB = 56,
      YB = 100,
      iB = 81;

    function pB(BB, IB) {
      switch (BB) {
        case TB:
          return function(BB) {
            return {
              jo: EB(BB),
              Po: BB.float(),
              Ro: BB.long()
            }
          }(IB);
        case JB:
          return function(BB) {
            return {
              jJ: PB(BB),
              PJ: PB(BB)
            }
          }(IB);
        case oB:
          return function(BB) {
            return {
              vB: BB.bool(),
              kB: PB(BB)
            }
          }(IB);
        case GB:
          return IB.str();
        case vB:
          return function(BB) {
            return {
              id: BB.long(),
              tB: GI(BB)
            }
          }(IB);
        case kB:
          return function(BB) {
            return {
              IG: PB(BB),
              ZG: kI(BB)
            }
          }(IB);
        case cB:
          return IB.str();
        case nB:
        case hB:
          return IB.long();
        case zB:
          return function(BB) {
            return {
              iJ: BB.long(),
              pJ: BB.bool(),
              aJ: BB.float()
            }
          }(IB);
        case FB:
          return IB.long();
        case NB:
          return function(BB) {
            return {
              uI: BB.bool(),
              YB: hI(BB)
            }
          }(IB);
        case gB:
          return function(BB) {
            return {
              id: BB.str(),
              position: nI(BB),
              MI: zI(BB),
              style: eB(BB),
              RI: BB.bool()
            }
          }(IB);
        case qB:
          return function(BB) {
            return {
              id: PB(BB)
            }
          }(IB);
        case yB:
          return function(BB) {
            return {
              bJ: BB.long(),
              xJ: BB.str(),
              EJ: JI(BB),
              DJ: JI(BB),
              KJ: PB(BB),
              VJ: PB(BB),
              SJ: PB(BB),
              Bo: PB(BB),
              Io: PB(BB),
              Zo: JI(BB),
              Jo: JI(BB),
              oo: PB(BB),
              Go: PB(BB),
              vo: PB(BB)
            }
          }(IB);
        case UB:
          return IB.str();
        case WB:
          return IB.long();
        case dB:
          return function(BB) {
            return {
              qZ: BB.long(),
              yZ: BB.str(),
              UZ: BB.float()
            }
          }(IB);
        case CB:
          return function(BB) {
            return {
              RJ: BB.bool(),
              rJ: PB(BB),
              mJ: BB.str(),
              XJ: NI(BB),
              LJ: NI(BB),
              eJ: BB.bool(),
              uJ: BB.long(),
              fJ: gI(BB)
            }
          }(IB);
        case QB:
          return function(BB) {
            return {
              YJ: PB(BB)
            }
          }(IB);
        case sB:
          return function(BB) {
            return {
              PB: BB.str(),
              RB: BB.str(),
              rB: qI(BB),
              fI: BB.str(),
              lI: VB(BB),
              AI: BB.float()
            }
          }(IB);
        case wB:
          return function(BB) {
            return {
              PB: BB.str(),
              RB: BB.str(),
              rB: qI(BB)
            }
          }(IB);
        case OB:
          return function(BB) {
            return BB.dN(yI)
          }(IB);
        case YB:
          return function(BB) {
            return {
              mB: WI(BB),
              fB: lB(BB)
            }
          }(IB);
        case iB:
          return function(BB) {
            return {
              bZ: BB.bool(),
              xZ: PB(BB),
              EZ: CI(BB),
              KZ: mI(BB)
            }
          }(IB);
        default:
          throw new Error(`no reader for to-client message ${BB}`)
      }
    }

    function aB(BB) {
      return {
        entityName: BB.str()
      }
    }

    function HB(BB) {
      const IB = BB.index(4);
      return 0 === IB ? BB.str() : 1 === IB ? BB.long() : 2 === IB ? BB.bool() : aB(BB)
    }

    function MB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.map(HB)
      }(BB)
    }

    function jB(BB) {
      return {
        translationKey: BB.str(),
        params: MB(BB)
      }
    }

    function PB(BB) {
      return 0 === BB.index(2) ? null : BB.str()
    }

    function RB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          color: PB(BB),
          colour: PB(BB),
          fontSize: PB(BB)
        }
      }(BB)
    }

    function rB(BB) {
      return {
        icon: BB.str(),
        style: RB(BB)
      }
    }

    function mB(BB) {
      const IB = BB.index(3);
      return 0 === IB ? {
        string: BB.str()
      } : 1 === IB ? {
        styledEntityName: aB(BB)
      } : {
        styledTranslatedText: jB(BB)
      }
    }

    function XB(BB) {
      const IB = BB.index(3);
      return 0 === IB ? null : 1 === IB ? BB.str() : BB.long()
    }

    function LB(BB) {
      return 0 === BB.index(2) ? null : BB.float()
    }

    function eB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          color: PB(BB),
          colour: PB(BB),
          fontWeight: XB(BB),
          fontStyle: PB(BB),
          fontSize: PB(BB),
          opacity: LB(BB)
        }
      }(BB)
    }

    function uB(BB) {
      return {
        str: mB(BB),
        style: eB(BB),
        clickableUrl: PB(BB)
      }
    }

    function fB(BB) {
      return BB.str()
    }

    function lB(BB) {
      return BB.dN(fB)
    }

    function AB(BB) {
      return 0 === BB.index(2) ? null : lB(BB)
    }

    function tB(BB) {
      return {
        type: BB.str(),
        progress: BB.float(),
        width: PB(BB),
        height: PB(BB),
        colours: AB(BB),
        backgroundColour: PB(BB)
      }
    }

    function bB(BB) {
      return {
        type: BB.str(),
        action: BB.str(),
        style: eB(BB)
      }
    }

    function xB(BB) {
      const IB = BB.index(7);
      return 0 === IB ? {
        string: BB.str()
      } : 1 === IB ? {
        entityName: aB(BB)
      } : 2 === IB ? {
        translatedText: jB(BB)
      } : 3 === IB ? {
        styledIcon: rB(BB)
      } : 4 === IB ? {
        II: uB(BB)
      } : 5 === IB ? {
        styledProgressBar: tB(BB)
      } : {
        styledKeyBinding: bB(BB)
      }
    }

    function EB(BB) {
      return BB.dN(xB)
    }
    const DB = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function KB(BB) {
      return DB[BB.index(5)]
    }

    function VB(BB) {
      return 0 === BB.index(2) ? null : BB.double()
    }

    function SB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          DB: VB(BB),
          VB: BB.double(),
          SB: BB.double(),
          BI: BB.bool(),
          description: EB(BB),
          TI: BB.str(),
          scale: VB(BB),
          rotation: VB(BB)
        }
      }(BB)
    }

    function BI(BB) {
      return 0 === BB.index(2) ? null : BB.bool()
    }

    function II(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          oI: BB.double(),
          icon: BB.str(),
          label: EB(BB),
          GI: BB.bool(),
          scale: VB(BB),
          rotation: VB(BB),
          vI: BI(BB)
        }
      }(BB)
    }

    function ZI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          DB: VB(BB),
          cI: BB.double(),
          nI: BB.double(),
          hI: BB.double(),
          gravity: BB.double(),
          zI: BB.double(),
          FI: BB.double(),
          NI: BB.double(),
          BI: BB.bool(),
          description: EB(BB),
          icon: PB(BB)
        }
      }(BB)
    }

    function TI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          speed: BB.double(),
          qI: BB.double(),
          label: EB(BB),
          icon: PB(BB),
          scale: VB(BB),
          rotation: VB(BB)
        }
      }(BB)
    }

    function JI(BB) {
      return 0 === BB.index(2) ? null : BB.long()
    }

    function oI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          UI: BB.long(),
          WI: BB.double(),
          dI: BB.double(),
          CI: JI(BB),
          label: EB(BB),
          icon: PB(BB)
        }
      }(BB)
    }

    function GI(BB) {
      return {
        type: KB(BB),
        progressBar: SB(BB),
        timedClick: II(BB),
        gravityBar: ZI(BB),
        precisionBar: TI(BB),
        rhythmClick: oI(BB)
      }
    }
    const vI = ["playerGone", "rateLimited"];

    function kI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return vI[BB.index(2)]
      }(BB)
    }

    function cI(BB) {
      return BB.float()
    }

    function nI(BB) {
      return BB.dN(cI)
    }

    function hI(BB) {
      return 0 === BB.index(2) ? null : nI(BB)
    }

    function zI(BB) {
      return 0 === BB.index(2) ? null : EB(BB)
    }

    function FI(BB) {
      return BB.long()
    }

    function NI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.dN(FI)
      }(BB)
    }

    function gI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          AJ: BB.str(),
          tJ: BB.long()
        }
      }(BB)
    }

    function qI(BB) {
      const IB = BB.index(3);
      return 0 === IB ? null : 1 === IB ? BB.str() : jB(BB)
    }

    function yI(BB) {
      return {
        ao: BB.str(),
        Ho: BB.str(),
        Mo: BB.str()
      }
    }

    function UI(BB) {
      return {
        XB: BB.str(),
        LB: PB(BB),
        eB: PB(BB),
        uB: lB(BB)
      }
    }

    function WI(BB) {
      return BB.dN(UI)
    }

    function dI(BB) {
      return {
        DZ: BB.str(),
        x: BB.long(),
        y: BB.long(),
        z: BB.long()
      }
    }

    function CI(BB) {
      return BB.dN(dI)
    }

    function QI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          yT: BB.float(),
          UT: BB.long(),
          WT: BB.long()
        }
      }(BB)
    }

    function sI(BB) {
      return {
        blockName: BB.str(),
        cT: BB.bool(),
        nT: BB.bool(),
        hT: BB.bool(),
        zT: BB.float(),
        FT: BB.float(),
        NT: BB.long(),
        gT: QI(BB)
      }
    }

    function wI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.dN(sI)
      }(BB)
    }

    function OI(BB) {
      return {
        GT: BB.str(),
        vT: wI(BB)
      }
    }

    function YI(BB) {
      return {
        blockName: BB.str(),
        frequency: BB.float()
      }
    }

    function iI(BB) {
      return BB.dN(YI)
    }

    function pI(BB) {
      return {
        QT: BB.str(),
        sT: BB.str(),
        frequency: BB.float(),
        wT: iI(BB)
      }
    }

    function aI(BB) {
      return BB.dN(pI)
    }

    function HI(BB) {
      return {
        blockName: BB.str(),
        radius: BB.long(),
        pT: BB.long(),
        BT: BB.long(),
        IT: BB.long(),
        aT: BB.float()
      }
    }

    function MI(BB) {
      return BB.dN(HI)
    }

    function jI(BB) {
      return {
        BT: BB.long(),
        IT: BB.long(),
        ZT: BB.long(),
        TT: BB.bool(),
        JT: OI(BB),
        dT: aI(BB),
        YT: MI(BB)
      }
    }

    function PI(BB) {
      return BB.dN(jI)
    }

    function RI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          name: BB.str(),
          PT: PB(BB)
        }
      }(BB)
    }

    function rI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          terrain: RI(BB),
          RT: MI(BB)
        }
      }(BB)
    }

    function mI(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          layers: PI(BB),
          HT: rI(BB)
        }
      }(BB)
    }
  },
  40649: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => dB,
      B: () => CB,
      D: () => qB,
      G: () => YB,
      H: () => MB,
      K: () => NB,
      L: () => PB,
      M: () => UB,
      N: () => yB,
      R: () => WB,
      T: () => QB,
      e: () => JB,
      i: () => jB,
      k: () => HB,
      l: () => FB,
      m: () => gB,
      o: () => pB,
      q: () => wB,
      s: () => iB,
      t: () => OB,
      v: () => sB,
      y: () => aB
    });
    var TB = ZB(3159);
    const JB = {
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

    function oB(BB, IB) {
      return !ArrayBuffer.isView(BB) || BB instanceof DataView ? Array.isArray(BB) ? BB.map((BB => IB(BB))) : BB : Array.from(BB, (BB => IB(BB)))
    }

    function GB(BB) {
      if ("string" !== typeof BB) return BB;
      for (let IB = 0; IB < BB.length; IB++) {
        const ZB = BB.charCodeAt(IB);
        if (ZB >= 55296 && ZB <= 57343) return kB.decode(vB.encode(BB))
      }
      return BB
    }
    const vB = new TextEncoder,
      kB = new TextDecoder;

    function cB(BB) {
      return BB
    }
    let nB;

    function hB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [GB(BB.ov), GB(BB.Gv)]
    }

    function zB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [oB(BB.XJ, cB), oB(BB.Cv, cB)]
    }

    function FB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Xn), GB(IB.Ln)];
      var IB
    }

    function NB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [IB.id, IB.Cn];
      var IB
    }

    function gB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [IB.bJ, GB(IB.xJ), IB.EJ, GB(IB.VJ), IB.Zo, IB.Jo, IB.Rn, GB(IB.rn), GB(IB.mn)];
      var IB
    }

    function qB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [oB(IB.DG, cB), IB.KG];
      var IB
    }

    function yB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [oB(IB.bG, (BB => GB(BB))), GB(IB.xG), IB.EG];
      var IB
    }

    function UB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [oB(IB.Wk, cB), GB(IB.Ck), IB.Qk];
      var IB
    }

    function WB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Ho), GB(IB.Mo)];
      var IB
    }

    function dB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Mv)];
      var IB
    }

    function CB(BB) {
      return GB(BB)
    }

    function QB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Un), GB(IB.Wn), GB(IB.ov), GB(IB.Gv)];
      var IB
    }

    function sB(BB) {
      return hB(BB)
    }

    function wB(BB) {
      return hB(BB)
    }

    function OB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.hk)];
      var IB
    }

    function YB(BB) {
      return BB
    }

    function iB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.Tv), GB(IB.Jv)];
      var IB
    }

    function pB(BB) {
      return GB(BB)
    }

    function aB(BB) {
      return zB(BB)
    }

    function HB(BB) {
      return zB(BB)
    }

    function MB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [GB(IB.sk)];
      var IB
    }

    function jB(BB) {
      return (nB ??= (0, TB.d)().map((BB => BB.name)), nB).map((IB => {
        return "string" === typeof(ZB = BB[IB]) ? GB(ZB) : oB(ZB, cB);
        var ZB
      }))
    }

    function PB(BB) {
      return null === (IB = BB) || "object" !== typeof IB ? IB : [IB.vk, IB.kk, IB.nk];
      var IB
    }
  },
  9388: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => oB
    });
    var TB = ZB(9340);
    const JB = "Air",
      oB = Object.freeze(new TB.i(JB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39308: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      g: () => vB
    });
    var TB = ZB(360),
      JB = ZB(4643);
    const oB = new Set(JB.m),
      GB = new Map;

    function vB(BB, IB) {
      let ZB = GB.get(IB);
      void 0 === ZB && (ZB = new Map, GB.set(IB, ZB));
      let JB = ZB.get(BB);
      return void 0 === JB && (JB = `${BB}${(0,TB.F)(IB)}`, ZB.set(BB, JB)), JB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);