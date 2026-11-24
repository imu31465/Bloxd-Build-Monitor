export const id = 191;
export const ids = [191];
export const modules = {
  40713: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      d: () => NB,
      e: () => IB
    });
    var QB = zB(40718),
      nB = zB(4887),
      dB = zB(40721);

    function IB(BB) {
      return BB.payloadKind === nB.fc.Msgpack ? (0, QB.c)(BB.payload) : void 0
    }

    function NB(BB, jB) {
      if (jB.payloadKind === nB.fc.Bytes || jB.payloadKind === nB.fc.MsgpackBin) return (0, dB.e)(BB, jB.payload)
    }

    function uB(BB) {
      return null !== BB && "object" === typeof BB
    }
  },
  40725: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB,
      e: () => rB,
      h: () => sB,
      l: () => aB,
      m: () => yB
    });
    var QB = zB(4887),
      nB = zB(40730);
    const dB = new Map,
      IB = new Set,
      NB = new Set;
    let uB = 0,
      UB = 0;

    function aB(BB, jB) {
      let zB = dB.get(BB);
      return zB || (zB = new Set, dB.set(BB, zB)), zB.add(jB), () => {
        zB.delete(jB)
      }
    }

    function pB() {
      return 0 !== uB
    }

    function rB(BB) {
      return IB.add(BB), () => {
        IB.delete(BB)
      }
    }

    function sB(BB) {
      return NB.add(BB), () => {
        NB.delete(BB)
      }
    }
    const JB = "A raw message listener threw";

    function mB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB;
      for (const QB of jB) try {
        QB()
      } catch (zB) {
        BB ? (0, nB.p)(zB, JB) : console.error(JB, zB)
      }
    }
    const yB = {
      fire: function(BB) {
        if ("connection" === BB.type) {
          const jB = BB.phase === QB.E.Activated && BB.conn !== uB && BB.conn > UB,
            zB = (BB.phase === QB.E.Left || BB.phase === QB.E.Closed) && BB.conn === uB;
          return void(jB || zB ? (uB = jB ? BB.conn : 0, mB(!0)) : BB.phase === QB.E.Resumed && 0 !== uB && BB.conn > UB && (uB = BB.conn, mB(!0, NB)))
        }
        const jB = dB.get(BB.ha);
        if (jB && BB.conn === uB && 0 !== uB)
          for (const QB of jB) try {
            QB(BB)
          } catch (zB) {
            (0, nB.p)(zB, JB)
          }
      },
      close: function(BB) {
        UB = Math.max(UB, BB, uB), 0 !== uB && (uB = 0, mB(!1))
      }
    }
  },
  40705: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UB,
      f: () => uB,
      g: () => NB
    });
    var QB = zB(1297),
      nB = zB(40682);
    const dB = new TextDecoder,
      IB = new TextEncoder;

    function NB(BB, jB) {
      const zB = BB.queries.entityName(jB);
      if (zB === nB.Yc) return;
      const IB = BB.memoryData(BB.scratch(), 4 + zB, 4, "entity_name's answer");
      if (!IB) return;
      const NB = IB.getUint32(0, !0),
        uB = dB.decode(new Uint8Array(IB.buffer, IB.byteOffset + 4, zB));
      return (0, QB.d)(uB, !1, NB === nB.fe ? null : NB)
    }

    function uB(BB, jB, zB) {
      const QB = IB.encode(zB);
      if (QB.length > nB.Nb) return !1;
      const dB = BB.memoryView(Uint8Array, BB.scratch(), QB.length, "has_effect's name");
      return !!dB && (dB.set(QB), 1 === BB.queries.hasEffect(jB, QB.length))
    }

    function UB(BB, jB, zB, QB) {
      const IB = BB.queries.blockData(jB, zB, QB);
      if (IB === nB.Yc) return;
      const NB = BB.memoryView(Uint8Array, BB.scratch(), IB, "block_data's answer");
      return NB ? JSON.parse(dB.decode(NB)) : void 0
    }
  },
  40718: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      d: () => aB
    });
    const QB = new TextDecoder;

    function nB(BB) {
      const jB = new dB(BB),
        zB = jB.value();
      if (jB.at !== BB.length) throw new Error(`msgpack: ${BB.length-jB.at} bytes after the value`);
      return zB
    }
    class dB {
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
        const jB = this.at;
        if (jB + BB > this.bytes.length) throw new Error(`msgpack: ${BB} bytes past the end at ${jB}`);
        return this.at = jB + BB, jB
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
        const jB = this.take(8);
        return BB ? this.view.getBigInt64(jB, !1) : this.view.getBigUint64(jB, !1)
      }
      str(BB) {
        const jB = this.take(BB),
          zB = this.bytes;
        if (BB < 16) {
          let nB = "";
          for (let dB = jB; dB < jB + BB; dB++) {
            const IB = zB[dB];
            if (IB >= 128) return QB.decode(zB.subarray(jB, jB + BB));
            nB += String.fromCharCode(IB)
          }
          return nB
        }
        return QB.decode(zB.subarray(jB, jB + BB))
      }
      bin(BB) {
        const jB = this.take(BB);
        return this.bytes.subarray(jB, jB + BB)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(BB) {
        this.enter();
        const jB = [];
        for (let zB = 0; zB < BB; zB++) jB.push(this.value());
        return this.depth--, jB
      }
      map(BB) {
        this.enter();
        const jB = {};
        for (let zB = 0; zB < BB; zB++) {
          const BB = this.value(),
            zB = this.value();
          jB["__proto__" === BB ? "__proto_" : String(BB)] = zB
        }
        return this.depth--, jB
      }
      ext(BB) {
        const jB = this.view.getInt8(this.take(1)),
          zB = this.take(BB);
        if (0 !== jB) {
          if (-1 === jB) {
            if (1 === BB) return new Date(NaN);
            if (4 === BB) return new Date(1e3 * this.view.getUint32(zB, !1));
            if (8 === BB) {
              const BB = this.view.getUint32(zB, !1),
                jB = BB >>> 2,
                QB = 4294967296 * (3 & BB) + this.view.getUint32(zB + 4, !1);
              return new Date(1e3 * QB + jB / 1e6)
            }
            if (12 === BB) {
              const BB = this.view.getUint32(zB, !1),
                jB = 4294967296 * this.view.getInt32(zB + 4, !1) + this.view.getUint32(zB + 8, !1);
              return new Date(1e3 * jB + BB / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${jB} of ${BB} bytes`)
        }
      }
    }
    const IB = new TextEncoder,
      NB = -(2n ** 63n),
      uB = 2n ** 63n - 1n,
      UB = 2n ** 64n - 1n;

    function aB(BB) {
      const jB = new pB;
      return jB.value(BB, 0), jB.bytes()
    }
    class pB {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(BB, jB) {
        if (jB > 512) throw new Error("msgpack: nested too deep");
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
              for (const zB of BB) this.value(zB, jB + 1)
            } else {
              var zB, QB;
              if (Object.getPrototypeOf(BB) !== Object.prototype && null !== Object.getPrototypeOf(BB)) throw new Error(`msgpack: can't encode a ${null!==(zB=null===(QB=BB.constructor)||void 0===QB?void 0:QB.name)&&void 0!==zB?zB:"object"}`);
              {
                const zB = Object.keys(BB);
                this.head(zB.length, 222, 128, 222, 223);
                for (const QB of zB) this.string(QB), this.value(BB[QB], jB + 1)
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
        const jB = BB >= NB && BB <= uB;
        if (!jB && (BB < 0n || BB > UB)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(jB ? 211 : 207), this.room(8), jB ? this.view.setBigInt64(this.at, BB, !1) : this.view.setBigUint64(this.at, BB, !1), this.at += 8
      }
      string(BB) {
        const jB = IB.encode(BB);
        this.head(jB.length, 217, 160, 218, 219), this.room(jB.length), this.buf.set(jB, this.at), this.at += jB.length
      }
      head(BB, jB, zB, QB, nB) {
        zB >= 0 && BB < (160 === zB ? 32 : 16) ? this.u8(zB | BB) : jB !== QB && BB < 256 ? (this.u8(jB), this.u8(BB)) : BB < 65536 ? (this.u8(QB), this.u16(BB)) : (this.u8(nB), this.u32(BB))
      }
      room(BB) {
        if (this.at + BB <= this.buf.length) return;
        let jB = 2 * this.buf.length;
        for (; jB < this.at + BB;) jB *= 2;
        const zB = new Uint8Array(jB);
        zB.set(this.buf.subarray(0, this.at)), this.buf = zB, this.view = new DataView(zB.buffer)
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
  40721: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(40709);
    const nB = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class dB {
      constructor(BB) {
        this.buf = BB, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let BB = this.u8(),
          jB = 127 & BB,
          zB = 128;
        for (; 128 & BB;) {
          if (zB > 2 ** 63) throw new RangeError("avro: varint too long");
          BB = this.u8(), jB += (127 & BB) * zB, zB *= 128
        }
        return jB % 2 === 1 ? -(jB + 1) / 2 : jB / 2
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
          jB = this.take(BB),
          zB = jB + BB;
        if (BB <= 32) {
          let BB = "";
          for (let QB = jB; QB < zB; QB++) {
            const dB = this.buf[QB];
            if (dB >= 128) return nB.decode(this.buf.subarray(jB, zB));
            BB += String.fromCharCode(dB)
          }
          return BB
        }
        return nB.decode(this.buf.subarray(jB, zB))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(BB) {
        const jB = this.take(BB);
        return this.buf.slice(jB, jB + BB)
      }
      index(BB) {
        const jB = this.long();
        if (!(jB >= 0 && jB < BB)) throw new RangeError(`avro: index ${jB} of ${BB}`);
        return jB
      }
      DJ(BB) {
        const jB = [];
        for (let zB = this.long(); 0 !== zB; zB = this.long()) {
          zB = this.block(zB);
          for (let QB = 0; QB < zB; QB++) jB.push(BB(this))
        }
        return jB
      }
      map(BB) {
        const jB = {};
        for (let zB = this.long(); 0 !== zB; zB = this.long()) {
          zB = this.block(zB);
          for (let QB = 0; QB < zB; QB++) {
            jB[this.str()] = BB(this)
          }
        }
        return jB
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(BB) {
        let jB = BB;
        if (jB < 0 && (jB = -jB, this.long()), jB > this.buf.length - this.at) throw new RangeError(`avro: block of ${jB} items in ${this.buf.length-this.at} bytes`);
        return jB
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
        const jB = this.at;
        if (BB > this.buf.length - jB) throw new RangeError("avro: truncated");
        return this.at = jB + BB, jB
      }
    }

    function IB(BB, jB) {
      const zB = new dB(jB),
        nB = (0, QB.gb)(BB, zB);
      return zB.end(), nB
    }
  },
  40709: (BB, jB, zB) => {
    zB.d(jB, {
      $: () => JB,
      C: () => nB,
      F: () => NB,
      G: () => sB,
      I: () => iB,
      M: () => EB,
      Q: () => SB,
      T: () => aB,
      W: () => pB,
      X: () => qB,
      ab: () => LB,
      bb: () => mB,
      c: () => tB,
      db: () => uB,
      f: () => yB,
      g: () => kB,
      gb: () => oB,
      h: () => GB,
      j: () => MB,
      m: () => QB,
      o: () => dB,
      p: () => gB,
      q: () => rB,
      s: () => UB,
      w: () => IB,
      y: () => fB
    });
    const QB = 2,
      nB = 12,
      dB = 27,
      IB = 40,
      NB = 52,
      uB = 59,
      UB = 63,
      aB = 83,
      pB = 84,
      rB = 89,
      sB = 91,
      JB = 93,
      mB = 94,
      yB = 95,
      kB = 97,
      GB = 101,
      LB = 102,
      gB = 73,
      tB = 16,
      SB = 86,
      MB = 60,
      EB = 17,
      iB = 56,
      qB = 100,
      fB = 81;

    function oB(BB, jB) {
      switch (BB) {
        case QB:
          return function(BB) {
            return {
              wd: cB(BB),
              xd: BB.float(),
              Kd: BB.long()
            }
          }(jB);
        case nB:
          return function(BB) {
            return {
              xn: VB(BB),
              Kn: VB(BB)
            }
          }(jB);
        case dB:
          return function(BB) {
            return {
              NB: BB.bool(),
              uB: VB(BB)
            }
          }(jB);
        case IB:
          return jB.str();
        case NB:
          return function(BB) {
            return {
              id: BB.long(),
              xB: Ij(BB)
            }
          }(jB);
        case uB:
          return function(BB) {
            return {
              UI: VB(BB),
              aI: uj(BB)
            }
          }(jB);
        case UB:
          return jB.str();
        case aB:
        case pB:
          return jB.long();
        case rB:
          return function(BB) {
            return {
              Zn: BB.long(),
              Tn: BB.bool(),
              Pn: BB.float()
            }
          }(jB);
        case sB:
          return jB.long();
        case JB:
          return function(BB) {
            return {
              Wj: BB.bool(),
              fB: pj(BB)
            }
          }(jB);
        case mB:
          return function(BB) {
            return {
              id: BB.str(),
              position: aj(BB),
              Yj: rj(BB),
              style: PB(BB),
              hj: BB.bool()
            }
          }(jB);
        case yB:
          return function(BB) {
            return {
              id: VB(BB)
            }
          }(jB);
        case kB:
          return function(BB) {
            return {
              Nd: BB.long(),
              ud: BB.str(),
              Ud: nj(BB),
              pd: nj(BB),
              rd: VB(BB),
              sd: VB(BB),
              Jd: VB(BB),
              yd: VB(BB),
              kd: VB(BB),
              Gd: nj(BB),
              Ld: nj(BB),
              td: VB(BB),
              Sd: VB(BB),
              Md: VB(BB)
            }
          }(jB);
        case GB:
          return jB.str();
        case LB:
          return jB.long();
        case gB:
          return function(BB) {
            return {
              kz: BB.long(),
              Gz: BB.str(),
              Lz: BB.float()
            }
          }(jB);
        case tB:
          return function(BB) {
            return {
              Cn: BB.bool(),
              cn: VB(BB),
              bn: BB.str(),
              vn: Jj(BB),
              Rn: Jj(BB),
              Bd: BB.bool(),
              jd: BB.long(),
              zd: mj(BB)
            }
          }(jB);
        case SB:
          return function(BB) {
            return {
              Xn: VB(BB)
            }
          }(jB);
        case MB:
          return function(BB) {
            return {
              VB: BB.str(),
              hB: BB.str(),
              XB: yj(BB),
              ej: BB.str(),
              lj: RB(BB),
              wj: BB.float()
            }
          }(jB);
        case EB:
          return function(BB) {
            return {
              VB: BB.str(),
              hB: BB.str(),
              XB: yj(BB)
            }
          }(jB);
        case iB:
          return function(BB) {
            return BB.DJ(kj)
          }(jB);
        case qB:
          return function(BB) {
            return {
              ZB: Lj(BB),
              eB: lB(BB)
            }
          }(jB);
        case fB:
          return function(BB) {
            return {
              vz: BB.bool(),
              Rz: VB(BB),
              Oz: tj(BB),
              jQ: Zj(BB)
            }
          }(jB);
        default:
          throw new Error(`no reader for to-client message ${BB}`)
      }
    }

    function HB(BB) {
      return {
        entityName: BB.str()
      }
    }

    function DB(BB) {
      const jB = BB.index(4);
      return 0 === jB ? BB.str() : 1 === jB ? BB.long() : 2 === jB ? BB.bool() : HB(BB)
    }

    function FB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.map(DB)
      }(BB)
    }

    function YB(BB) {
      return {
        translationKey: BB.str(),
        params: FB(BB)
      }
    }

    function VB(BB) {
      return 0 === BB.index(2) ? null : BB.str()
    }

    function hB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          color: VB(BB),
          colour: VB(BB),
          fontSize: VB(BB)
        }
      }(BB)
    }

    function XB(BB) {
      return {
        icon: BB.str(),
        style: hB(BB)
      }
    }

    function ZB(BB) {
      const jB = BB.index(3);
      return 0 === jB ? {
        string: BB.str()
      } : 1 === jB ? {
        styledEntityName: HB(BB)
      } : {
        styledTranslatedText: YB(BB)
      }
    }

    function AB(BB) {
      const jB = BB.index(3);
      return 0 === jB ? null : 1 === jB ? BB.str() : BB.long()
    }

    function TB(BB) {
      return 0 === BB.index(2) ? null : BB.float()
    }

    function PB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          color: VB(BB),
          colour: VB(BB),
          fontWeight: AB(BB),
          fontStyle: VB(BB),
          fontSize: VB(BB),
          opacity: TB(BB)
        }
      }(BB)
    }

    function WB(BB) {
      return {
        str: ZB(BB),
        style: PB(BB),
        clickableUrl: VB(BB)
      }
    }

    function eB(BB) {
      return BB.str()
    }

    function lB(BB) {
      return BB.DJ(eB)
    }

    function wB(BB) {
      return 0 === BB.index(2) ? null : lB(BB)
    }

    function xB(BB) {
      return {
        type: BB.str(),
        progress: BB.float(),
        width: VB(BB),
        height: VB(BB),
        colours: wB(BB),
        backgroundColour: VB(BB)
      }
    }

    function KB(BB) {
      return {
        type: BB.str(),
        action: BB.str(),
        style: PB(BB)
      }
    }

    function CB(BB) {
      const jB = BB.index(7);
      return 0 === jB ? {
        string: BB.str()
      } : 1 === jB ? {
        entityName: HB(BB)
      } : 2 === jB ? {
        translatedText: YB(BB)
      } : 3 === jB ? {
        styledIcon: XB(BB)
      } : 4 === jB ? {
        jj: WB(BB)
      } : 5 === jB ? {
        styledProgressBar: xB(BB)
      } : {
        styledKeyBinding: KB(BB)
      }
    }

    function cB(BB) {
      return BB.DJ(CB)
    }
    const bB = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function vB(BB) {
      return bB[BB.index(5)]
    }

    function RB(BB) {
      return 0 === BB.index(2) ? null : BB.double()
    }

    function OB(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          vB: RB(BB),
          RB: BB.double(),
          OB: BB.double(),
          Bj: BB.bool(),
          description: cB(BB),
          Qj: BB.str(),
          scale: RB(BB),
          rotation: RB(BB)
        }
      }(BB)
    }

    function Bj(BB) {
      return 0 === BB.index(2) ? null : BB.bool()
    }

    function jj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          Ij: BB.double(),
          icon: BB.str(),
          label: cB(BB),
          Nj: BB.bool(),
          scale: RB(BB),
          rotation: RB(BB),
          uj: Bj(BB)
        }
      }(BB)
    }

    function zj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          vB: RB(BB),
          aj: BB.double(),
          pj: BB.double(),
          rj: BB.double(),
          gravity: BB.double(),
          sj: BB.double(),
          Jj: BB.double(),
          mj: BB.double(),
          Bj: BB.bool(),
          description: cB(BB),
          icon: VB(BB)
        }
      }(BB)
    }

    function Qj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          speed: BB.double(),
          kj: BB.double(),
          label: cB(BB),
          icon: VB(BB),
          scale: RB(BB),
          rotation: RB(BB)
        }
      }(BB)
    }

    function nj(BB) {
      return 0 === BB.index(2) ? null : BB.long()
    }

    function dj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          Lj: BB.long(),
          gj: BB.double(),
          tj: BB.double(),
          Sj: nj(BB),
          label: cB(BB),
          icon: VB(BB)
        }
      }(BB)
    }

    function Ij(BB) {
      return {
        type: vB(BB),
        progressBar: OB(BB),
        timedClick: jj(BB),
        gravityBar: zj(BB),
        precisionBar: Qj(BB),
        rhythmClick: dj(BB)
      }
    }
    const Nj = ["playerGone", "rateLimited"];

    function uj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return Nj[BB.index(2)]
      }(BB)
    }

    function Uj(BB) {
      return BB.float()
    }

    function aj(BB) {
      return BB.DJ(Uj)
    }

    function pj(BB) {
      return 0 === BB.index(2) ? null : aj(BB)
    }

    function rj(BB) {
      return 0 === BB.index(2) ? null : cB(BB)
    }

    function sj(BB) {
      return BB.long()
    }

    function Jj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.DJ(sj)
      }(BB)
    }

    function mj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          dd: BB.str(),
          Id: BB.long()
        }
      }(BB)
    }

    function yj(BB) {
      const jB = BB.index(3);
      return 0 === jB ? null : 1 === jB ? BB.str() : YB(BB)
    }

    function kj(BB) {
      return {
        Pd: BB.str(),
        Wd: BB.str(),
        ld: BB.str()
      }
    }

    function Gj(BB) {
      return {
        AB: BB.str(),
        TB: VB(BB),
        PB: VB(BB),
        WB: lB(BB)
      }
    }

    function Lj(BB) {
      return BB.DJ(Gj)
    }

    function gj(BB) {
      return {
        BQ: BB.str(),
        x: BB.long(),
        y: BB.long(),
        z: BB.long()
      }
    }

    function tj(BB) {
      return BB.DJ(gj)
    }

    function Sj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          tQ: BB.float(),
          SQ: BB.long(),
          MQ: BB.long()
        }
      }(BB)
    }

    function Mj(BB) {
      return {
        blockName: BB.str(),
        sQ: BB.bool(),
        JQ: BB.bool(),
        mQ: BB.bool(),
        yQ: BB.float(),
        kQ: BB.float(),
        GQ: BB.long(),
        LQ: Sj(BB)
      }
    }

    function Ej(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return BB.DJ(Mj)
      }(BB)
    }

    function ij(BB) {
      return {
        aQ: BB.str(),
        pQ: Ej(BB)
      }
    }

    function qj(BB) {
      return {
        blockName: BB.str(),
        frequency: BB.float()
      }
    }

    function fj(BB) {
      return BB.DJ(qj)
    }

    function oj(BB) {
      return {
        qQ: BB.str(),
        fQ: BB.str(),
        frequency: BB.float(),
        oQ: fj(BB)
      }
    }

    function Hj(BB) {
      return BB.DJ(oj)
    }

    function Dj(BB) {
      return {
        blockName: BB.str(),
        radius: BB.long(),
        YQ: BB.long(),
        nQ: BB.long(),
        dQ: BB.long(),
        VQ: BB.float()
      }
    }

    function Fj(BB) {
      return BB.DJ(Dj)
    }

    function Yj(BB) {
      return {
        nQ: BB.long(),
        dQ: BB.long(),
        IQ: BB.long(),
        NQ: BB.bool(),
        uQ: ij(BB),
        EQ: Hj(BB),
        DQ: Fj(BB)
      }
    }

    function Vj(BB) {
      return BB.DJ(Yj)
    }

    function hj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          name: BB.str(),
          AQ: VB(BB)
        }
      }(BB)
    }

    function Xj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          terrain: hj(BB),
          TQ: Fj(BB)
        }
      }(BB)
    }

    function Zj(BB) {
      return 0 === BB.index(2) ? null : function(BB) {
        return {
          layers: Vj(BB),
          hQ: Xj(BB)
        }
      }(BB)
    }
  },
  40697: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => HB,
      C: () => gB,
      E: () => tB,
      G: () => yB,
      J: () => qB,
      M: () => FB,
      Q: () => JB,
      S: () => VB,
      T: () => GB,
      X: () => kB,
      Z: () => LB,
      _: () => SB,
      e: () => nB,
      f: () => YB,
      j: () => DB,
      l: () => sB,
      n: () => mB,
      p: () => oB,
      q: () => EB,
      s: () => fB,
      w: () => iB,
      y: () => MB
    });
    var QB = zB(3099);
    const nB = {
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

    function dB(BB, jB) {
      return !ArrayBuffer.isView(BB) || BB instanceof DataView ? Array.isArray(BB) ? BB.map((BB => jB(BB))) : BB : Array.from(BB, (BB => jB(BB)))
    }

    function IB(BB) {
      if ("string" !== typeof BB) return BB;
      for (let jB = 0; jB < BB.length; jB++) {
        const zB = BB.charCodeAt(jB);
        if (zB >= 55296 && zB <= 57343) return uB.decode(NB.encode(BB))
      }
      return BB
    }
    const NB = new TextEncoder,
      uB = new TextDecoder;

    function UB(BB) {
      return BB
    }
    let aB;

    function pB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [IB(BB.sN), IB(BB.JN)]
    }

    function rB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [dB(BB.vn, UB), dB(BB.oN, UB)]
    }

    function sB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.ha), IB(jB.Xa)];
      var jB
    }

    function JB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [jB.id, jB.Sa];
      var jB
    }

    function mB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [jB.Nd, IB(jB.ud), jB.Ud, IB(jB.sd), jB.Gd, jB.Ld, jB.Fa, IB(jB.Ya), IB(jB.Va)];
      var jB
    }

    function yB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [dB(jB.nN, UB), jB.dN];
      var jB
    }

    function kB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [dB(jB.jN, (BB => IB(BB))), IB(jB.zN), jB.QN];
      var jB
    }

    function GB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [dB(jB.iu, UB), IB(jB.qu), jB.fu];
      var jB
    }

    function LB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.Wd), IB(jB.ld)];
      var jB
    }

    function gB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.TN)];
      var jB
    }

    function tB(BB) {
      return IB(BB)
    }

    function SB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.Ga), IB(jB.La), IB(jB.sN), IB(jB.JN)];
      var jB
    }

    function MB(BB) {
      return pB(BB)
    }

    function EB(BB) {
      return pB(BB)
    }

    function iB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.ku)];
      var jB
    }

    function qB(BB) {
      return BB
    }

    function fB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.pN), IB(jB.rN)];
      var jB
    }

    function oB(BB) {
      return IB(BB)
    }

    function HB(BB) {
      return rB(BB)
    }

    function DB(BB) {
      return rB(BB)
    }

    function FB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [IB(jB.ou)];
      var jB
    }

    function YB(BB) {
      return (aB ??= (0, QB.f)().map((BB => BB.name)), aB).map((jB => {
        return "string" === typeof(zB = BB[jB]) ? IB(zB) : dB(zB, UB);
        var zB
      }))
    }

    function VB(BB) {
      return null === (jB = BB) || "object" !== typeof jB ? jB : [jB.Ju, jB.mu, jB.yu];
      var jB
    }
  },
  9366: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => dB
    });
    var QB = zB(9311);
    const nB = "Air",
      dB = Object.freeze(new QB.h(nB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39330: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      g: () => NB
    });
    var QB = zB(376),
      nB = zB(4577);
    const dB = new Set(nB.l),
      IB = new Map;

    function NB(BB, jB) {
      let zB = IB.get(jB);
      void 0 === zB && (zB = new Map, IB.set(jB, zB));
      let nB = zB.get(BB);
      return void 0 === nB && (nB = `${BB}${(0,QB.t)(jB)}`, zB.set(BB, nB)), nB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);