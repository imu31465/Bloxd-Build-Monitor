export const id = 189;
export const ids = [189];
export const modules = {
  40449: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      h: () => fC,
      j: () => nC
    });
    var QC = ZC(40457),
      wC = ZC(4727),
      bC = ZC(40465);

    function nC(CC) {
      return CC.payloadKind === wC.hc.Msgpack ? (0, QC.c)(CC.payload) : void 0
    }

    function fC(CC, zC) {
      if (zC.payloadKind === wC.hc.Bytes || zC.payloadKind === wC.hc.MsgpackBin) return (0, bC.e)(CC, zC.payload)
    }

    function oC(CC) {
      return null !== CC && "object" === typeof CC
    }
  },
  40470: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC,
      i: () => NC,
      j: () => MC,
      l: () => FC,
      o: () => pC
    });
    var QC = ZC(4727),
      wC = ZC(40476);
    const bC = new Map,
      nC = new Set,
      fC = new Set;
    let oC = 0,
      qC = 0;

    function FC(CC, zC) {
      let ZC = bC.get(CC);
      return ZC || (ZC = new Set, bC.set(CC, ZC)), ZC.add(zC), () => {
        ZC.delete(zC)
      }
    }

    function WC() {
      return 0 !== oC
    }

    function NC(CC) {
      return nC.add(CC), () => {
        nC.delete(CC)
      }
    }

    function MC(CC) {
      return fC.add(CC), () => {
        fC.delete(CC)
      }
    }
    const gC = "A raw message listener threw";

    function SC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC;
      for (const QC of zC) try {
        QC()
      } catch (ZC) {
        CC ? (0, wC.k)(ZC, gC) : console.error(gC, ZC)
      }
    }
    const pC = {
      fire: function(CC) {
        if ("connection" === CC.type) {
          const zC = CC.phase === QC.J.Activated && CC.conn !== oC && CC.conn > qC,
            ZC = (CC.phase === QC.J.Left || CC.phase === QC.J.Closed) && CC.conn === oC;
          return void(zC || ZC ? (oC = zC ? CC.conn : 0, SC(!0)) : CC.phase === QC.J.Resumed && 0 !== oC && CC.conn > qC && (oC = CC.conn, SC(!0, fC)))
        }
        const zC = bC.get(CC.cq);
        if (zC && CC.conn === oC && 0 !== oC)
          for (const QC of zC) try {
            QC(CC)
          } catch (ZC) {
            (0, wC.k)(ZC, gC)
          }
      },
      close: function(CC) {
        qC = Math.max(qC, CC, oC), 0 !== oC && (oC = 0, SC(!1))
      }
    }
  },
  40440: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC,
      g: () => oC,
      j: () => fC
    });
    var QC = ZC(1211),
      wC = ZC(40412);
    const bC = new TextDecoder,
      nC = new TextEncoder;

    function fC(CC, zC) {
      const ZC = CC.queries.entityName(zC);
      if (ZC === wC.Xc) return;
      const nC = CC.memoryData(CC.scratch(), 4 + ZC, 4, "entity_name's answer");
      if (!nC) return;
      const fC = nC.getUint32(0, !0),
        oC = bC.decode(new Uint8Array(nC.buffer, nC.byteOffset + 4, ZC));
      return (0, QC.b)(oC, !1, fC === wC.le ? null : fC)
    }

    function oC(CC, zC, ZC) {
      const QC = nC.encode(ZC);
      if (QC.length > wC.Kb) return !1;
      const bC = CC.memoryView(Uint8Array, CC.scratch(), QC.length, "has_effect's name");
      return !!bC && (bC.set(QC), 1 === CC.queries.hasEffect(zC, QC.length))
    }

    function qC(CC, zC, ZC, QC) {
      const nC = CC.queries.blockData(zC, ZC, QC);
      if (nC === wC.Xc) return;
      const fC = CC.memoryView(Uint8Array, CC.scratch(), nC, "block_data's answer");
      return fC ? JSON.parse(bC.decode(fC)) : void 0
    }
  },
  40457: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => FC
    });
    const QC = new TextDecoder;

    function wC(CC) {
      const zC = new bC(CC),
        ZC = zC.value();
      if (zC.at !== CC.length) throw new Error(`msgpack: ${CC.length-zC.at} bytes after the value`);
      return ZC
    }
    class bC {
      constructor(CC) {
        this.bytes = CC, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(CC.buffer, CC.byteOffset, CC.byteLength)
      }
      value() {
        const CC = this.u8();
        if (CC <= 127) return CC;
        if (CC >= 224) return CC - 256;
        if (CC >= 128 && CC <= 143) return this.map(15 & CC);
        if (CC >= 144 && CC <= 159) return this.array(15 & CC);
        if (CC >= 160 && CC <= 191) return this.str(31 & CC);
        switch (CC) {
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
            throw new Error(`msgpack: unknown byte 0x${CC.toString(16)} at ${this.at-1}`)
        }
      }
      take(CC) {
        const zC = this.at;
        if (zC + CC > this.bytes.length) throw new Error(`msgpack: ${CC} bytes past the end at ${zC}`);
        return this.at = zC + CC, zC
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
      int64(CC) {
        const zC = this.take(8);
        return CC ? this.view.getBigInt64(zC, !1) : this.view.getBigUint64(zC, !1)
      }
      str(CC) {
        const zC = this.take(CC),
          ZC = this.bytes;
        if (CC < 16) {
          let wC = "";
          for (let bC = zC; bC < zC + CC; bC++) {
            const nC = ZC[bC];
            if (nC >= 128) return QC.decode(ZC.subarray(zC, zC + CC));
            wC += String.fromCharCode(nC)
          }
          return wC
        }
        return QC.decode(ZC.subarray(zC, zC + CC))
      }
      bin(CC) {
        const zC = this.take(CC);
        return this.bytes.subarray(zC, zC + CC)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(CC) {
        this.enter();
        const zC = [];
        for (let ZC = 0; ZC < CC; ZC++) zC.push(this.value());
        return this.depth--, zC
      }
      map(CC) {
        this.enter();
        const zC = {};
        for (let ZC = 0; ZC < CC; ZC++) {
          const CC = this.value(),
            ZC = this.value();
          zC["__proto__" === CC ? "__proto_" : String(CC)] = ZC
        }
        return this.depth--, zC
      }
      ext(CC) {
        const zC = this.view.getInt8(this.take(1)),
          ZC = this.take(CC);
        if (0 !== zC) {
          if (-1 === zC) {
            if (1 === CC) return new Date(NaN);
            if (4 === CC) return new Date(1e3 * this.view.getUint32(ZC, !1));
            if (8 === CC) {
              const CC = this.view.getUint32(ZC, !1),
                zC = CC >>> 2,
                QC = 4294967296 * (3 & CC) + this.view.getUint32(ZC + 4, !1);
              return new Date(1e3 * QC + zC / 1e6)
            }
            if (12 === CC) {
              const CC = this.view.getUint32(ZC, !1),
                zC = 4294967296 * this.view.getInt32(ZC + 4, !1) + this.view.getUint32(ZC + 8, !1);
              return new Date(1e3 * zC + CC / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${zC} of ${CC} bytes`)
        }
      }
    }
    const nC = new TextEncoder,
      fC = -(2n ** 63n),
      oC = 2n ** 63n - 1n,
      qC = 2n ** 64n - 1n;

    function FC(CC) {
      const zC = new WC;
      return zC.value(CC, 0), zC.bytes()
    }
    class WC {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(CC, zC) {
        if (zC > 512) throw new Error("msgpack: nested too deep");
        switch (typeof CC) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(CC ? 195 : 194);
          case "number":
            return void this.number(CC);
          case "bigint":
            return void this.bigint(CC);
          case "string":
            return void this.string(CC);
          case "object":
            if (null === CC) this.u8(192);
            else if (CC instanceof Uint8Array) this.head(CC.length, 196, -1, 197, 198), this.room(CC.length), this.buf.set(CC, this.at), this.at += CC.length;
            else if (Array.isArray(CC)) {
              this.head(CC.length, 220, 144, 220, 221);
              for (const ZC of CC) this.value(ZC, zC + 1)
            } else {
              var ZC, QC;
              if (Object.getPrototypeOf(CC) !== Object.prototype && null !== Object.getPrototypeOf(CC)) throw new Error(`msgpack: can't encode a ${null!==(ZC=null===(QC=CC.constructor)||void 0===QC?void 0:QC.name)&&void 0!==ZC?ZC:"object"}`);
              {
                const ZC = Object.keys(CC);
                this.head(ZC.length, 222, 128, 222, 223);
                for (const QC of ZC) this.string(QC), this.value(CC[QC], zC + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof CC)
        }
      }
      number(CC) {
        Number.isInteger(CC) && CC >= -2147483648 && CC <= 4294967295 ? CC >= 0 ? CC < 128 ? this.u8(CC) : CC < 256 ? (this.u8(204), this.u8(CC)) : CC < 65536 ? (this.u8(205), this.u16(CC)) : (this.u8(206), this.u32(CC)) : CC >= -32 ? this.u8(CC + 256) : CC >= -128 ? (this.u8(208), this.u8(CC + 256)) : CC >= -32768 ? (this.u8(209), this.u16(CC + 65536)) : (this.u8(210), this.u32(CC >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, CC, !1), this.at += 8)
      }
      bigint(CC) {
        const zC = CC >= fC && CC <= oC;
        if (!zC && (CC < 0n || CC > qC)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(zC ? 211 : 207), this.room(8), zC ? this.view.setBigInt64(this.at, CC, !1) : this.view.setBigUint64(this.at, CC, !1), this.at += 8
      }
      string(CC) {
        const zC = nC.encode(CC);
        this.head(zC.length, 217, 160, 218, 219), this.room(zC.length), this.buf.set(zC, this.at), this.at += zC.length
      }
      head(CC, zC, ZC, QC, wC) {
        ZC >= 0 && CC < (160 === ZC ? 32 : 16) ? this.u8(ZC | CC) : zC !== QC && CC < 256 ? (this.u8(zC), this.u8(CC)) : CC < 65536 ? (this.u8(QC), this.u16(CC)) : (this.u8(wC), this.u32(CC))
      }
      room(CC) {
        if (this.at + CC <= this.buf.length) return;
        let zC = 2 * this.buf.length;
        for (; zC < this.at + CC;) zC *= 2;
        const ZC = new Uint8Array(zC);
        ZC.set(this.buf.subarray(0, this.at)), this.buf = ZC, this.view = new DataView(ZC.buffer)
      }
      u8(CC) {
        this.room(1), this.buf[this.at++] = CC
      }
      u16(CC) {
        this.room(2), this.view.setUint16(this.at, CC, !1), this.at += 2
      }
      u32(CC) {
        this.room(4), this.view.setUint32(this.at, CC, !1), this.at += 4
      }
    }
  },
  40465: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(40446);
    const wC = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class bC {
      constructor(CC) {
        this.buf = CC, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let CC = this.u8(),
          zC = 127 & CC,
          ZC = 128;
        for (; 128 & CC;) {
          if (ZC > 2 ** 63) throw new RangeError("avro: varint too long");
          CC = this.u8(), zC += (127 & CC) * ZC, ZC *= 128
        }
        return zC % 2 === 1 ? -(zC + 1) / 2 : zC / 2
      }
      float() {
        const CC = this.take(4);
        return this.floats().getFloat32(CC, !0)
      }
      double() {
        const CC = this.take(8);
        return this.floats().getFloat64(CC, !0)
      }
      str() {
        const CC = this.size(),
          zC = this.take(CC),
          ZC = zC + CC;
        if (CC <= 32) {
          let CC = "";
          for (let QC = zC; QC < ZC; QC++) {
            const bC = this.buf[QC];
            if (bC >= 128) return wC.decode(this.buf.subarray(zC, ZC));
            CC += String.fromCharCode(bC)
          }
          return CC
        }
        return wC.decode(this.buf.subarray(zC, ZC))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(CC) {
        const zC = this.take(CC);
        return this.buf.slice(zC, zC + CC)
      }
      index(CC) {
        const zC = this.long();
        if (!(zC >= 0 && zC < CC)) throw new RangeError(`avro: index ${zC} of ${CC}`);
        return zC
      }
      Pg(CC) {
        const zC = [];
        for (let ZC = this.long(); 0 !== ZC; ZC = this.long()) {
          ZC = this.block(ZC);
          for (let QC = 0; QC < ZC; QC++) zC.push(CC(this))
        }
        return zC
      }
      map(CC) {
        const zC = {};
        for (let ZC = this.long(); 0 !== ZC; ZC = this.long()) {
          ZC = this.block(ZC);
          for (let QC = 0; QC < ZC; QC++) {
            zC[this.str()] = CC(this)
          }
        }
        return zC
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(CC) {
        let zC = CC;
        if (zC < 0 && (zC = -zC, this.long()), zC > this.buf.length - this.at) throw new RangeError(`avro: block of ${zC} items in ${this.buf.length-this.at} bytes`);
        return zC
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const CC = this.long();
        if (CC < 0) throw new RangeError(`avro: length ${CC}`);
        return CC
      }
      u8() {
        const CC = this.buf[this.at];
        if (void 0 === CC) throw new RangeError("avro: truncated");
        return this.at++, CC
      }
      take(CC) {
        const zC = this.at;
        if (CC > this.buf.length - zC) throw new RangeError("avro: truncated");
        return this.at = zC + CC, zC
      }
    }

    function nC(CC, zC) {
      const ZC = new bC(zC),
        wC = (0, QC.kb)(CC, ZC);
      return ZC.end(), wC
    }
  },
  40446: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => qC,
      G: () => nC,
      H: () => hC,
      K: () => wC,
      N: () => fC,
      P: () => MC,
      Q: () => vC,
      T: () => iC,
      V: () => JC,
      X: () => FC,
      _: () => WC,
      cb: () => eC,
      db: () => gC,
      e: () => xC,
      fb: () => RC,
      h: () => pC,
      hb: () => SC,
      j: () => PC,
      jb: () => oC,
      k: () => GC,
      kb: () => KC,
      m: () => IC,
      o: () => QC,
      r: () => bC,
      v: () => AC,
      y: () => NC
    });
    const QC = 2,
      wC = 12,
      bC = 27,
      nC = 40,
      fC = 52,
      oC = 59,
      qC = 63,
      FC = 83,
      WC = 84,
      NC = 89,
      MC = 91,
      gC = 93,
      SC = 94,
      pC = 95,
      PC = 97,
      GC = 101,
      RC = 102,
      AC = 73,
      xC = 16,
      JC = 86,
      IC = 60,
      iC = 17,
      vC = 56,
      eC = 100,
      hC = 81;

    function KC(CC, zC) {
      switch (CC) {
        case QC:
          return function(CC) {
            return {
              xb: UC(CC),
              Jb: CC.float(),
              Ib: CC.long()
            }
          }(zC);
        case wC:
          return function(CC) {
            return {
              Kw: EC(CC),
              Yw: EC(CC)
            }
          }(zC);
        case bC:
          return function(CC) {
            return {
              ew: CC.bool(),
              hw: EC(CC)
            }
          }(zC);
        case nC:
          return zC.str();
        case fC:
          return function(CC) {
            return {
              id: CC.long(),
              AZ: nz(CC)
            }
          }(zC);
        case oC:
          return function(CC) {
            return {
              kQ: EC(CC),
              VQ: oz(CC)
            }
          }(zC);
        case qC:
          return zC.str();
        case FC:
        case WC:
          return zC.long();
        case NC:
          return function(CC) {
            return {
              rQ: CC.long(),
              sQ: CC.bool(),
              TQ: CC.float()
            }
          }(zC);
        case MC:
          return zC.long();
        case gC:
          return function(CC) {
            return {
              RQ: CC.bool(),
              AQ: Wz(CC)
            }
          }(zC);
        case SC:
          return function(CC) {
            return {
              id: CC.str(),
              position: Fz(CC),
              WQ: Nz(CC),
              style: sC(CC),
              MQ: CC.bool()
            }
          }(zC);
        case pC:
          return function(CC) {
            return {
              id: EC(CC)
            }
          }(zC);
        case PC:
          return function(CC) {
            return {
              rb: CC.long(),
              sb: CC.str(),
              Tb: wz(CC),
              ab: wz(CC),
              tb: EC(CC),
              Db: EC(CC),
              jb: EC(CC),
              yb: EC(CC),
              Lb: EC(CC),
              Ub: wz(CC),
              Bb: wz(CC),
              Ob: EC(CC),
              kb: EC(CC),
              Vb: EC(CC)
            }
          }(zC);
        case GC:
          return zC.str();
        case RC:
          return zC.long();
        case AC:
          return function(CC) {
            return {
              LC: CC.long(),
              UC: CC.str(),
              BC: CC.float()
            }
          }(zC);
        case xC:
          return function(CC) {
            return {
              iQ: CC.bool(),
              vQ: EC(CC),
              eQ: CC.str(),
              hQ: gz(CC),
              KQ: gz(CC),
              YQ: CC.bool(),
              dQ: CC.long(),
              mQ: Sz(CC)
            }
          }(zC);
        case JC:
          return function(CC) {
            return {
              Gb: EC(CC)
            }
          }(zC);
        case IC:
          return function(CC) {
            return {
              gQ: CC.str(),
              SQ: CC.str(),
              pQ: pz(CC),
              Aw: CC.str(),
              xw: kC(CC),
              Jw: CC.float()
            }
          }(zC);
        case iC:
          return function(CC) {
            return {
              gQ: CC.str(),
              SQ: CC.str(),
              pQ: pz(CC)
            }
          }(zC);
        case vC:
          return function(CC) {
            return CC.Pg(Pz)
          }(zC);
        case eC:
          return function(CC) {
            return {
              OZ: Rz(CC),
              ZQ: tC(CC)
            }
          }(zC);
        case hC:
          return function(CC) {
            return {
              CC: CC.bool(),
              zC: EC(CC),
              ZC: xz(CC),
              wC: cz(CC)
            }
          }(zC);
        default:
          throw new Error(`no reader for to-client message ${CC}`)
      }
    }

    function YC(CC) {
      return {
        entityName: CC.str()
      }
    }

    function dC(CC) {
      const zC = CC.index(4);
      return 0 === zC ? CC.str() : 1 === zC ? CC.long() : 2 === zC ? CC.bool() : YC(CC)
    }

    function mC(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return CC.map(dC)
      }(CC)
    }

    function HC(CC) {
      return {
        translationKey: CC.str(),
        params: mC(CC)
      }
    }

    function EC(CC) {
      return 0 === CC.index(2) ? null : CC.str()
    }

    function lC(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          color: EC(CC),
          colour: EC(CC),
          fontSize: EC(CC)
        }
      }(CC)
    }

    function XC(CC) {
      return {
        icon: CC.str(),
        style: lC(CC)
      }
    }

    function cC(CC) {
      const zC = CC.index(3);
      return 0 === zC ? {
        string: CC.str()
      } : 1 === zC ? {
        styledEntityName: YC(CC)
      } : {
        styledTranslatedText: HC(CC)
      }
    }

    function uC(CC) {
      const zC = CC.index(3);
      return 0 === zC ? null : 1 === zC ? CC.str() : CC.long()
    }

    function rC(CC) {
      return 0 === CC.index(2) ? null : CC.float()
    }

    function sC(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          color: EC(CC),
          colour: EC(CC),
          fontWeight: uC(CC),
          fontStyle: EC(CC),
          fontSize: EC(CC),
          opacity: rC(CC)
        }
      }(CC)
    }

    function TC(CC) {
      return {
        str: cC(CC),
        style: sC(CC),
        clickableUrl: EC(CC)
      }
    }

    function aC(CC) {
      return CC.str()
    }

    function tC(CC) {
      return CC.Pg(aC)
    }

    function DC(CC) {
      return 0 === CC.index(2) ? null : tC(CC)
    }

    function jC(CC) {
      return {
        type: CC.str(),
        progress: CC.float(),
        width: EC(CC),
        height: EC(CC),
        colours: DC(CC),
        backgroundColour: EC(CC)
      }
    }

    function yC(CC) {
      return {
        type: CC.str(),
        action: CC.str(),
        style: sC(CC)
      }
    }

    function LC(CC) {
      const zC = CC.index(7);
      return 0 === zC ? {
        string: CC.str()
      } : 1 === zC ? {
        entityName: YC(CC)
      } : 2 === zC ? {
        translatedText: HC(CC)
      } : 3 === zC ? {
        styledIcon: XC(CC)
      } : 4 === zC ? {
        KZ: TC(CC)
      } : 5 === zC ? {
        styledProgressBar: jC(CC)
      } : {
        styledKeyBinding: yC(CC)
      }
    }

    function UC(CC) {
      return CC.Pg(LC)
    }
    const BC = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function OC(CC) {
      return BC[CC.index(5)]
    }

    function kC(CC) {
      return 0 === CC.index(2) ? null : CC.double()
    }

    function VC(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          iZ: kC(CC),
          vZ: CC.double(),
          eZ: CC.double(),
          hZ: CC.bool(),
          description: UC(CC),
          dZ: CC.str(),
          scale: kC(CC),
          rotation: kC(CC)
        }
      }(CC)
    }

    function Cz(CC) {
      return 0 === CC.index(2) ? null : CC.bool()
    }

    function zz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          HZ: CC.double(),
          icon: CC.str(),
          label: UC(CC),
          EZ: CC.bool(),
          scale: kC(CC),
          rotation: kC(CC),
          lZ: Cz(CC)
        }
      }(CC)
    }

    function Zz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          iZ: kC(CC),
          cZ: CC.double(),
          uZ: CC.double(),
          rZ: CC.double(),
          gravity: CC.double(),
          sZ: CC.double(),
          TZ: CC.double(),
          aZ: CC.double(),
          hZ: CC.bool(),
          description: UC(CC),
          icon: EC(CC)
        }
      }(CC)
    }

    function Qz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          speed: CC.double(),
          DZ: CC.double(),
          label: UC(CC),
          icon: EC(CC),
          scale: kC(CC),
          rotation: kC(CC)
        }
      }(CC)
    }

    function wz(CC) {
      return 0 === CC.index(2) ? null : CC.long()
    }

    function bz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          yZ: CC.long(),
          LZ: CC.double(),
          UZ: CC.double(),
          BZ: wz(CC),
          label: UC(CC),
          icon: EC(CC)
        }
      }(CC)
    }

    function nz(CC) {
      return {
        type: OC(CC),
        progressBar: VC(CC),
        timedClick: zz(CC),
        gravityBar: Zz(CC),
        precisionBar: Qz(CC),
        rhythmClick: bz(CC)
      }
    }
    const fz = ["playerGone", "rateLimited"];

    function oz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return fz[CC.index(2)]
      }(CC)
    }

    function qz(CC) {
      return CC.float()
    }

    function Fz(CC) {
      return CC.Pg(qz)
    }

    function Wz(CC) {
      return 0 === CC.index(2) ? null : Fz(CC)
    }

    function Nz(CC) {
      return 0 === CC.index(2) ? null : UC(CC)
    }

    function Mz(CC) {
      return CC.long()
    }

    function gz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return CC.Pg(Mz)
      }(CC)
    }

    function Sz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          wQ: CC.str(),
          FQ: CC.long()
        }
      }(CC)
    }

    function pz(CC) {
      const zC = CC.index(3);
      return 0 === zC ? null : 1 === zC ? CC.str() : HC(CC)
    }

    function Pz(CC) {
      return {
        xQ: CC.str(),
        JQ: CC.str(),
        IQ: CC.str()
      }
    }

    function Gz(CC) {
      return {
        kZ: CC.str(),
        VZ: EC(CC),
        CQ: EC(CC),
        zQ: tC(CC)
      }
    }

    function Rz(CC) {
      return CC.Pg(Gz)
    }

    function Az(CC) {
      return {
        QC: CC.str(),
        x: CC.long(),
        y: CC.long(),
        z: CC.long()
      }
    }

    function xz(CC) {
      return CC.Pg(Az)
    }

    function Jz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          vC: CC.float(),
          eC: CC.long(),
          hC: CC.long()
        }
      }(CC)
    }

    function Iz(CC) {
      return {
        blockName: CC.str(),
        pC: CC.bool(),
        PC: CC.bool(),
        RC: CC.bool(),
        AC: CC.float(),
        xC: CC.float(),
        JC: CC.long(),
        IC: Jz(CC)
      }
    }

    function iz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return CC.Pg(Iz)
      }(CC)
    }

    function vz(CC) {
      return {
        MC: CC.str(),
        gC: iz(CC)
      }
    }

    function ez(CC) {
      return {
        blockName: CC.str(),
        frequency: CC.float()
      }
    }

    function hz(CC) {
      return CC.Pg(ez)
    }

    function Kz(CC) {
      return {
        dC: CC.str(),
        mC: CC.str(),
        frequency: CC.float(),
        HC: hz(CC)
      }
    }

    function Yz(CC) {
      return CC.Pg(Kz)
    }

    function dz(CC) {
      return {
        blockName: CC.str(),
        radius: CC.long(),
        cC: CC.long(),
        fC: CC.long(),
        oC: CC.long(),
        uC: CC.float()
      }
    }

    function mz(CC) {
      return CC.Pg(dz)
    }

    function Hz(CC) {
      return {
        fC: CC.long(),
        oC: CC.long(),
        qC: CC.long(),
        FC: CC.bool(),
        WC: vz(CC),
        KC: Yz(CC),
        lC: mz(CC)
      }
    }

    function Ez(CC) {
      return CC.Pg(Hz)
    }

    function lz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          name: CC.str(),
          aC: EC(CC)
        }
      }(CC)
    }

    function Xz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          terrain: lz(CC),
          tC: mz(CC)
        }
      }(CC)
    }

    function cz(CC) {
      return 0 === CC.index(2) ? null : function(CC) {
        return {
          layers: Ez(CC),
          rC: Xz(CC)
        }
      }(CC)
    }
  },
  40427: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => RC,
      A: () => AC,
      E: () => xC,
      H: () => pC,
      J: () => eC,
      M: () => mC,
      Q: () => gC,
      S: () => EC,
      V: () => GC,
      Y: () => PC,
      b: () => wC,
      cb: () => JC,
      f: () => HC,
      j: () => dC,
      k: () => MC,
      m: () => SC,
      o: () => KC,
      q: () => iC,
      r: () => hC,
      s: () => vC,
      w: () => IC,
      y: () => YC
    });
    var QC = ZC(2982);
    const wC = {
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

    function bC(CC, zC) {
      return !ArrayBuffer.isView(CC) || CC instanceof DataView ? Array.isArray(CC) ? CC.map((CC => zC(CC))) : CC : Array.from(CC, (CC => zC(CC)))
    }

    function nC(CC) {
      if ("string" !== typeof CC) return CC;
      for (let zC = 0; zC < CC.length; zC++) {
        const ZC = CC.charCodeAt(zC);
        if (ZC >= 55296 && ZC <= 57343) return oC.decode(fC.encode(CC))
      }
      return CC
    }
    const fC = new TextEncoder,
      oC = new TextDecoder;

    function qC(CC) {
      return CC
    }
    let FC;

    function WC(CC) {
      return null === CC || "object" !== typeof CC ? CC : [nC(CC.Zq), nC(CC.Qq)]
    }

    function NC(CC) {
      return null === CC || "object" !== typeof CC ? CC : [bC(CC.hQ, qC), bC(CC.zn, qC)]
    }

    function MC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.cq), nC(zC.uq)];
      var zC
    }

    function gC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.id, zC.hF];
      var zC
    }

    function SC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.rb, nC(zC.sb), zC.Tb, nC(zC.Db), zC.Ub, zC.Bb, zC.Tn, nC(zC.tn), nC(zC.Dn)];
      var zC
    }

    function pC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.gF, qC), zC.SF];
      var zC
    }

    function PC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.eq, (CC => nC(CC))), nC(zC.hq), zC.Kq];
      var zC
    }

    function GC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [bC(zC.cn, qC), nC(zC.rn), zC.sn];
      var zC
    }

    function RC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.JQ), nC(zC.IQ)];
      var zC
    }

    function AC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.Bn)];
      var zC
    }

    function xC(CC) {
      return nC(CC)
    }

    function JC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.ZF), nC(zC.QF), nC(zC.Zq), nC(zC.Qq)];
      var zC
    }

    function IC(CC) {
      return WC(CC)
    }

    function iC(CC) {
      return WC(CC)
    }

    function vC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.Cn)];
      var zC
    }

    function eC(CC) {
      return CC
    }

    function hC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.vn), nC(zC.en)];
      var zC
    }

    function KC(CC) {
      return nC(CC)
    }

    function YC(CC) {
      return NC(CC)
    }

    function dC(CC) {
      return NC(CC)
    }

    function mC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [nC(zC.wF)];
      var zC
    }

    function HC(CC) {
      return (FC ??= (0, QC.e)().map((CC => CC.name)), FC).map((zC => {
        return "string" === typeof(ZC = CC[zC]) ? nC(ZC) : bC(ZC, qC);
        var ZC
      }))
    }

    function EC(CC) {
      return null === (zC = CC) || "object" !== typeof zC ? zC : [zC.Lq, zC.Uq, zC.Bq];
      var zC
    }
  },
  9299: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      d: () => bC
    });
    var QC = ZC(9239);
    const wC = "Air",
      bC = Object.freeze(new QC.e(wC, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39076: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      d: () => fC
    });
    var QC = ZC(326),
      wC = ZC(4386);
    const bC = new Set(wC.k),
      nC = new Map;

    function fC(CC, zC) {
      let ZC = nC.get(zC);
      void 0 === ZC && (ZC = new Map, nC.set(zC, ZC));
      let wC = ZC.get(CC);
      return void 0 === wC && (wC = `${CC}${(0,QC.u)(zC)}`, ZC.set(CC, wC)), wC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);