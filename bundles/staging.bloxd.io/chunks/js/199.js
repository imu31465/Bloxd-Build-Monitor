export const id = 199;
export const ids = [199];
export const modules = {
  40199: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      f: () => Ju,
      g: () => mu
    });
    var Eu = yu(40205),
      Ku = yu(4562),
      Qu = yu(40209);

    function mu(uu) {
      return uu.payloadKind === Ku.ac.Msgpack ? (0, Eu.e)(uu.payload) : void 0
    }

    function Ju(uu, Ru) {
      if (Ru.payloadKind === Ku.ac.Bytes || Ru.payloadKind === Ku.ac.MsgpackBin) return (0, Qu.d)(uu, Ru.payload)
    }

    function Nu(uu) {
      return null !== uu && "object" === typeof uu
    }
  },
  40217: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ru,
      g: () => Bu,
      i: () => xu,
      m: () => Vu,
      q: () => Tu
    });
    var Eu = yu(4562),
      Ku = yu(40223);
    const Qu = new Map,
      mu = new Set,
      Ju = new Set;
    let Nu = 0,
      Xu = 0;

    function Vu(uu, Ru) {
      let yu = Qu.get(uu);
      return yu || (yu = new Set, Qu.set(uu, yu)), yu.add(Ru), () => {
        yu.delete(Ru)
      }
    }

    function ru() {
      return 0 !== Nu
    }

    function Bu(uu) {
      return mu.add(uu), () => {
        mu.delete(uu)
      }
    }

    function xu(uu) {
      return Ju.add(uu), () => {
        Ju.delete(uu)
      }
    }
    const Su = "A raw message listener threw";

    function pu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mu;
      for (const Eu of Ru) try {
        Eu()
      } catch (yu) {
        uu ? (0, Ku.m)(yu, Su) : console.error(Su, yu)
      }
    }
    const Tu = {
      fire: function(uu) {
        if ("connection" === uu.type) {
          const Ru = uu.phase === Eu.J.Activated && uu.conn !== Nu && uu.conn > Xu,
            yu = (uu.phase === Eu.J.Left || uu.phase === Eu.J.Closed) && uu.conn === Nu;
          return void(Ru || yu ? (Nu = Ru ? uu.conn : 0, pu(!0)) : uu.phase === Eu.J.Resumed && 0 !== Nu && uu.conn > Xu && (Nu = uu.conn, pu(!0, Ju)))
        }
        const Ru = Qu.get(uu.Dm);
        if (Ru && uu.conn === Nu && 0 !== Nu)
          for (const Eu of Ru) try {
            Eu(uu)
          } catch (yu) {
            (0, Ku.m)(yu, Su)
          }
      },
      close: function(uu) {
        Xu = Math.max(Xu, uu, Nu), 0 !== Nu && (Nu = 0, pu(!1))
      }
    }
  },
  40191: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu,
      d: () => Nu,
      e: () => Ju
    });
    var Eu = yu(1240),
      Ku = yu(40160);
    const Qu = new TextDecoder,
      mu = new TextEncoder;

    function Ju(uu, Ru) {
      const yu = uu.queries.entityName(Ru);
      if (yu === Ku.Lc) return;
      const mu = uu.memoryData(uu.scratch(), 4 + yu, 4, "entity_name's answer");
      if (!mu) return;
      const Ju = mu.getUint32(0, !0),
        Nu = Qu.decode(new Uint8Array(mu.buffer, mu.byteOffset + 4, yu));
      return (0, Eu.e)(Nu, !1, Ju === Ku._d ? null : Ju)
    }

    function Nu(uu, Ru, yu) {
      const Eu = mu.encode(yu);
      if (Eu.length > Ku.Jb) return !1;
      const Qu = uu.memoryView(Uint8Array, uu.scratch(), Eu.length, "has_effect's name");
      return !!Qu && (Qu.set(Eu), 1 === uu.queries.hasEffect(Ru, Eu.length))
    }

    function Xu(uu, Ru, yu, Eu) {
      const mu = uu.queries.blockData(Ru, yu, Eu);
      if (mu === Ku.Lc) return;
      const Ju = uu.memoryView(Uint8Array, uu.scratch(), mu, "block_data's answer");
      return Ju ? JSON.parse(Qu.decode(Ju)) : void 0
    }
  },
  40205: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      g: () => Vu
    });
    const Eu = new TextDecoder;

    function Ku(uu) {
      const Ru = new Qu(uu),
        yu = Ru.value();
      if (Ru.at !== uu.length) throw new Error(`msgpack: ${uu.length-Ru.at} bytes after the value`);
      return yu
    }
    class Qu {
      constructor(uu) {
        this.bytes = uu, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(uu.buffer, uu.byteOffset, uu.byteLength)
      }
      value() {
        const uu = this.u8();
        if (uu <= 127) return uu;
        if (uu >= 224) return uu - 256;
        if (uu >= 128 && uu <= 143) return this.map(15 & uu);
        if (uu >= 144 && uu <= 159) return this.array(15 & uu);
        if (uu >= 160 && uu <= 191) return this.str(31 & uu);
        switch (uu) {
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
            throw new Error(`msgpack: unknown byte 0x${uu.toString(16)} at ${this.at-1}`)
        }
      }
      take(uu) {
        const Ru = this.at;
        if (Ru + uu > this.bytes.length) throw new Error(`msgpack: ${uu} bytes past the end at ${Ru}`);
        return this.at = Ru + uu, Ru
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
      int64(uu) {
        const Ru = this.take(8);
        return uu ? this.view.getBigInt64(Ru, !1) : this.view.getBigUint64(Ru, !1)
      }
      str(uu) {
        const Ru = this.take(uu),
          yu = this.bytes;
        if (uu < 16) {
          let Ku = "";
          for (let Qu = Ru; Qu < Ru + uu; Qu++) {
            const mu = yu[Qu];
            if (mu >= 128) return Eu.decode(yu.subarray(Ru, Ru + uu));
            Ku += String.fromCharCode(mu)
          }
          return Ku
        }
        return Eu.decode(yu.subarray(Ru, Ru + uu))
      }
      bin(uu) {
        const Ru = this.take(uu);
        return this.bytes.subarray(Ru, Ru + uu)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(uu) {
        this.enter();
        const Ru = [];
        for (let yu = 0; yu < uu; yu++) Ru.push(this.value());
        return this.depth--, Ru
      }
      map(uu) {
        this.enter();
        const Ru = {};
        for (let yu = 0; yu < uu; yu++) {
          const uu = this.value(),
            yu = this.value();
          Ru["__proto__" === uu ? "__proto_" : String(uu)] = yu
        }
        return this.depth--, Ru
      }
      ext(uu) {
        const Ru = this.view.getInt8(this.take(1)),
          yu = this.take(uu);
        if (0 !== Ru) {
          if (-1 === Ru) {
            if (1 === uu) return new Date(NaN);
            if (4 === uu) return new Date(1e3 * this.view.getUint32(yu, !1));
            if (8 === uu) {
              const uu = this.view.getUint32(yu, !1),
                Ru = uu >>> 2,
                Eu = 4294967296 * (3 & uu) + this.view.getUint32(yu + 4, !1);
              return new Date(1e3 * Eu + Ru / 1e6)
            }
            if (12 === uu) {
              const uu = this.view.getUint32(yu, !1),
                Ru = 4294967296 * this.view.getInt32(yu + 4, !1) + this.view.getUint32(yu + 8, !1);
              return new Date(1e3 * Ru + uu / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Ru} of ${uu} bytes`)
        }
      }
    }
    const mu = new TextEncoder,
      Ju = -(2n ** 63n),
      Nu = 2n ** 63n - 1n,
      Xu = 2n ** 64n - 1n;

    function Vu(uu) {
      const Ru = new ru;
      return Ru.value(uu, 0), Ru.bytes()
    }
    class ru {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(uu, Ru) {
        if (Ru > 512) throw new Error("msgpack: nested too deep");
        switch (typeof uu) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(uu ? 195 : 194);
          case "number":
            return void this.number(uu);
          case "bigint":
            return void this.bigint(uu);
          case "string":
            return void this.string(uu);
          case "object":
            if (null === uu) this.u8(192);
            else if (uu instanceof Uint8Array) this.head(uu.length, 196, -1, 197, 198), this.room(uu.length), this.buf.set(uu, this.at), this.at += uu.length;
            else if (Array.isArray(uu)) {
              this.head(uu.length, 220, 144, 220, 221);
              for (const yu of uu) this.value(yu, Ru + 1)
            } else {
              var yu, Eu;
              if (Object.getPrototypeOf(uu) !== Object.prototype && null !== Object.getPrototypeOf(uu)) throw new Error(`msgpack: can't encode a ${null!==(yu=null===(Eu=uu.constructor)||void 0===Eu?void 0:Eu.name)&&void 0!==yu?yu:"object"}`);
              {
                const yu = Object.keys(uu);
                this.head(yu.length, 222, 128, 222, 223);
                for (const Eu of yu) this.string(Eu), this.value(uu[Eu], Ru + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof uu)
        }
      }
      number(uu) {
        Number.isInteger(uu) && uu >= -2147483648 && uu <= 4294967295 ? uu >= 0 ? uu < 128 ? this.u8(uu) : uu < 256 ? (this.u8(204), this.u8(uu)) : uu < 65536 ? (this.u8(205), this.u16(uu)) : (this.u8(206), this.u32(uu)) : uu >= -32 ? this.u8(uu + 256) : uu >= -128 ? (this.u8(208), this.u8(uu + 256)) : uu >= -32768 ? (this.u8(209), this.u16(uu + 65536)) : (this.u8(210), this.u32(uu >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, uu, !1), this.at += 8)
      }
      bigint(uu) {
        const Ru = uu >= Ju && uu <= Nu;
        if (!Ru && (uu < 0n || uu > Xu)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Ru ? 211 : 207), this.room(8), Ru ? this.view.setBigInt64(this.at, uu, !1) : this.view.setBigUint64(this.at, uu, !1), this.at += 8
      }
      string(uu) {
        const Ru = mu.encode(uu);
        this.head(Ru.length, 217, 160, 218, 219), this.room(Ru.length), this.buf.set(Ru, this.at), this.at += Ru.length
      }
      head(uu, Ru, yu, Eu, Ku) {
        yu >= 0 && uu < (160 === yu ? 32 : 16) ? this.u8(yu | uu) : Ru !== Eu && uu < 256 ? (this.u8(Ru), this.u8(uu)) : uu < 65536 ? (this.u8(Eu), this.u16(uu)) : (this.u8(Ku), this.u32(uu))
      }
      room(uu) {
        if (this.at + uu <= this.buf.length) return;
        let Ru = 2 * this.buf.length;
        for (; Ru < this.at + uu;) Ru *= 2;
        const yu = new Uint8Array(Ru);
        yu.set(this.buf.subarray(0, this.at)), this.buf = yu, this.view = new DataView(yu.buffer)
      }
      u8(uu) {
        this.room(1), this.buf[this.at++] = uu
      }
      u16(uu) {
        this.room(2), this.view.setUint16(this.at, uu, !1), this.at += 2
      }
      u32(uu) {
        this.room(4), this.view.setUint32(this.at, uu, !1), this.at += 4
      }
    }
  },
  40209: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(40197);
    const Ku = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Qu {
      constructor(uu) {
        this.buf = uu, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let uu = this.u8(),
          Ru = 127 & uu,
          yu = 128;
        for (; 128 & uu;) {
          if (yu > 2 ** 63) throw new RangeError("avro: varint too long");
          uu = this.u8(), Ru += (127 & uu) * yu, yu *= 128
        }
        return Ru % 2 === 1 ? -(Ru + 1) / 2 : Ru / 2
      }
      float() {
        const uu = this.take(4);
        return this.floats().getFloat32(uu, !0)
      }
      double() {
        const uu = this.take(8);
        return this.floats().getFloat64(uu, !0)
      }
      str() {
        const uu = this.size(),
          Ru = this.take(uu),
          yu = Ru + uu;
        if (uu <= 32) {
          let uu = "";
          for (let Eu = Ru; Eu < yu; Eu++) {
            const Qu = this.buf[Eu];
            if (Qu >= 128) return Ku.decode(this.buf.subarray(Ru, yu));
            uu += String.fromCharCode(Qu)
          }
          return uu
        }
        return Ku.decode(this.buf.subarray(Ru, yu))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(uu) {
        const Ru = this.take(uu);
        return this.buf.slice(Ru, Ru + uu)
      }
      index(uu) {
        const Ru = this.long();
        if (!(Ru >= 0 && Ru < uu)) throw new RangeError(`avro: index ${Ru} of ${uu}`);
        return Ru
      }
      rS(uu) {
        const Ru = [];
        for (let yu = this.long(); 0 !== yu; yu = this.long()) {
          yu = this.block(yu);
          for (let Eu = 0; Eu < yu; Eu++) Ru.push(uu(this))
        }
        return Ru
      }
      map(uu) {
        const Ru = {};
        for (let yu = this.long(); 0 !== yu; yu = this.long()) {
          yu = this.block(yu);
          for (let Eu = 0; Eu < yu; Eu++) {
            Ru[this.str()] = uu(this)
          }
        }
        return Ru
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(uu) {
        let Ru = uu;
        if (Ru < 0 && (Ru = -Ru, this.long()), Ru > this.buf.length - this.at) throw new RangeError(`avro: block of ${Ru} items in ${this.buf.length-this.at} bytes`);
        return Ru
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const uu = this.long();
        if (uu < 0) throw new RangeError(`avro: length ${uu}`);
        return uu
      }
      u8() {
        const uu = this.buf[this.at];
        if (void 0 === uu) throw new RangeError("avro: truncated");
        return this.at++, uu
      }
      take(uu) {
        const Ru = this.at;
        if (uu > this.buf.length - Ru) throw new RangeError("avro: truncated");
        return this.at = Ru + uu, Ru
      }
    }

    function mu(uu, Ru) {
      const yu = new Qu(Ru),
        Ku = (0, Eu.nb)(uu, yu);
      return yu.end(), Ku
    }
  },
  40197: (uu, Ru, yu) => {
    yu.d(Ru, {
      C: () => Xu,
      F: () => mu,
      I: () => Mu,
      J: () => Ku,
      N: () => Ju,
      O: () => xu,
      Q: () => Au,
      T: () => eu,
      X: () => Cu,
      Y: () => Vu,
      ab: () => ru,
      cb: () => Du,
      d: () => bu,
      db: () => Su,
      f: () => Tu,
      hb: () => Hu,
      ib: () => pu,
      j: () => Wu,
      jb: () => Nu,
      l: () => ju,
      nb: () => Iu,
      o: () => ku,
      s: () => Eu,
      u: () => Qu,
      w: () => du,
      y: () => Bu
    });
    const Eu = 2,
      Ku = 12,
      Qu = 27,
      mu = 40,
      Ju = 52,
      Nu = 59,
      Xu = 63,
      Vu = 83,
      ru = 84,
      Bu = 89,
      xu = 91,
      Su = 93,
      pu = 94,
      Tu = 95,
      Wu = 97,
      ju = 101,
      Hu = 102,
      du = 73,
      bu = 16,
      Cu = 86,
      ku = 60,
      eu = 17,
      Au = 56,
      Du = 100,
      Mu = 81;

    function Iu(uu, Ru) {
      switch (uu) {
        case Eu:
          return function(uu) {
            return {
              MQ: qu(uu),
              IQ: uu.float(),
              GQ: uu.long()
            }
          }(Ru);
        case Ku:
          return function(uu) {
            return {
              uu: tu(uu),
              Ru: tu(uu)
            }
          }(Ru);
        case Qu:
          return function(uu) {
            return {
              BR: uu.bool(),
              xR: tu(uu)
            }
          }(Ru);
        case mu:
          return Ru.str();
        case Ju:
          return function(uu) {
            return {
              id: uu.long(),
              Mu: mR(uu)
            }
          }(Ru);
        case Nu:
        case Xu:
          return Ru.str();
        case Vu:
        case ru:
          return Ru.long();
        case Bu:
          return function(uu) {
            return {
              VE: uu.long(),
              rE: uu.bool(),
              xE: uu.float()
            }
          }(Ru);
        case xu:
          return Ru.long();
        case Su:
          return function(uu) {
            return {
              Ry: uu.bool(),
              yy: XR(uu)
            }
          }(Ru);
        case pu:
          return function(uu) {
            return {
              id: uu.str(),
              position: NR(uu),
              aK: VR(uu),
              style: Fu(uu),
              uQ: uu.bool()
            }
          }(Ru);
        case Tu:
          return function(uu) {
            return {
              id: tu(uu)
            }
          }(Ru);
        case Wu:
          return function(uu) {
            return {
              WR: uu.long(),
              jR: uu.str(),
              HR: KR(uu),
              dR: KR(uu),
              bR: tu(uu),
              CR: tu(uu),
              kR: tu(uu),
              eR: tu(uu),
              AR: tu(uu),
              DR: KR(uu),
              MR: KR(uu),
              IR: tu(uu),
              GR: tu(uu),
              UR: tu(uu)
            }
          }(Ru);
        case ju:
          return Ru.str();
        case Hu:
          return Ru.long();
        case du:
          return function(uu) {
            return {
              Oy: uu.long(),
              vy: uu.str(),
              uE: uu.float()
            }
          }(Ru);
        case bu:
          return function(uu) {
            return {
              gQ: uu.bool(),
              cQ: tu(uu),
              LQ: uu.str(),
              zQ: BR(uu),
              FQ: BR(uu),
              wQ: uu.bool(),
              ZQ: uu.long(),
              hQ: xR(uu)
            }
          }(Ru);
        case Cu:
          return function(uu) {
            return {
              eK: tu(uu)
            }
          }(Ru);
        case ku:
          return function(uu) {
            return {
              mR: uu.str(),
              JR: uu.str(),
              NR: SR(uu),
              XR: uu.str(),
              VR: au(uu),
              rR: uu.float()
            }
          }(Ru);
        case eu:
          return function(uu) {
            return {
              mR: uu.str(),
              JR: uu.str(),
              NR: SR(uu)
            }
          }(Ru);
        case Au:
          return function(uu) {
            return uu.rS(pR)
          }(Ru);
        case Du:
          return function(uu) {
            return {
              SE: WR(uu),
              HE: hu(uu)
            }
          }(Ru);
        case Mu:
          return function(uu) {
            return {
              dE: uu.bool(),
              bE: tu(uu),
              CE: HR(uu),
              eE: lR(uu)
            }
          }(Ru);
        default:
          throw new Error(`no reader for to-client message ${uu}`)
      }
    }

    function Gu(uu) {
      return {
        entityName: uu.str()
      }
    }

    function Uu(uu) {
      const Ru = uu.index(4);
      return 0 === Ru ? uu.str() : 1 === Ru ? uu.long() : 2 === Ru ? uu.bool() : Gu(uu)
    }

    function nu(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return uu.map(Uu)
      }(uu)
    }

    function su(uu) {
      return {
        translationKey: uu.str(),
        params: nu(uu)
      }
    }

    function tu(uu) {
      return 0 === uu.index(2) ? null : uu.str()
    }

    function lu(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          color: tu(uu),
          colour: tu(uu),
          fontSize: tu(uu)
        }
      }(uu)
    }

    function gu(uu) {
      return {
        icon: uu.str(),
        style: lu(uu)
      }
    }

    function cu(uu) {
      const Ru = uu.index(3);
      return 0 === Ru ? {
        string: uu.str()
      } : 1 === Ru ? {
        styledEntityName: Gu(uu)
      } : {
        styledTranslatedText: su(uu)
      }
    }

    function Lu(uu) {
      const Ru = uu.index(3);
      return 0 === Ru ? null : 1 === Ru ? uu.str() : uu.long()
    }

    function zu(uu) {
      return 0 === uu.index(2) ? null : uu.float()
    }

    function Fu(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          color: tu(uu),
          colour: tu(uu),
          fontWeight: Lu(uu),
          fontStyle: tu(uu),
          fontSize: tu(uu),
          opacity: zu(uu)
        }
      }(uu)
    }

    function wu(uu) {
      return {
        str: cu(uu),
        style: Fu(uu),
        clickableUrl: tu(uu)
      }
    }

    function Zu(uu) {
      return uu.str()
    }

    function hu(uu) {
      return uu.rS(Zu)
    }

    function Pu(uu) {
      return 0 === uu.index(2) ? null : hu(uu)
    }

    function iu(uu) {
      return {
        type: uu.str(),
        progress: uu.float(),
        width: tu(uu),
        height: tu(uu),
        colours: Pu(uu),
        backgroundColour: tu(uu)
      }
    }

    function Yu(uu) {
      return {
        type: uu.str(),
        action: uu.str(),
        style: Fu(uu)
      }
    }

    function ou(uu) {
      const Ru = uu.index(7);
      return 0 === Ru ? {
        string: uu.str()
      } : 1 === Ru ? {
        entityName: Gu(uu)
      } : 2 === Ru ? {
        translatedText: su(uu)
      } : 3 === Ru ? {
        styledIcon: gu(uu)
      } : 4 === Ru ? {
        cu: wu(uu)
      } : 5 === Ru ? {
        styledProgressBar: iu(uu)
      } : {
        styledKeyBinding: Yu(uu)
      }
    }

    function qu(uu) {
      return uu.rS(ou)
    }
    const Ou = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function vu(uu) {
      return Ou[uu.index(5)]
    }

    function au(uu) {
      return 0 === uu.index(2) ? null : uu.double()
    }

    function fu(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          nu: au(uu),
          tu: uu.double(),
          lu: uu.double(),
          gu: uu.bool(),
          description: qu(uu),
          zu: uu.str(),
          scale: au(uu),
          rotation: au(uu)
        }
      }(uu)
    }

    function uR(uu) {
      return 0 === uu.index(2) ? null : uu.bool()
    }

    function RR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          wu: uu.double(),
          icon: uu.str(),
          label: qu(uu),
          Zu: uu.bool(),
          scale: au(uu),
          rotation: au(uu),
          Pu: uR(uu)
        }
      }(uu)
    }

    function yR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          nu: au(uu),
          Yu: uu.double(),
          ou: uu.double(),
          qu: uu.double(),
          gravity: uu.double(),
          Ou: uu.double(),
          vu: uu.double(),
          au: uu.double(),
          gu: uu.bool(),
          description: qu(uu),
          icon: tu(uu)
        }
      }(uu)
    }

    function ER(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          speed: uu.double(),
          uR: uu.double(),
          label: qu(uu),
          icon: tu(uu),
          scale: au(uu),
          rotation: au(uu)
        }
      }(uu)
    }

    function KR(uu) {
      return 0 === uu.index(2) ? null : uu.long()
    }

    function QR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          yR: uu.long(),
          ER: uu.double(),
          KR: uu.double(),
          QR: KR(uu),
          label: qu(uu),
          icon: tu(uu)
        }
      }(uu)
    }

    function mR(uu) {
      return {
        type: vu(uu),
        progressBar: fu(uu),
        timedClick: RR(uu),
        gravityBar: yR(uu),
        precisionBar: ER(uu),
        rhythmClick: QR(uu)
      }
    }

    function JR(uu) {
      return uu.float()
    }

    function NR(uu) {
      return uu.rS(JR)
    }

    function XR(uu) {
      return 0 === uu.index(2) ? null : NR(uu)
    }

    function VR(uu) {
      return 0 === uu.index(2) ? null : qu(uu)
    }

    function rR(uu) {
      return uu.long()
    }

    function BR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return uu.rS(rR)
      }(uu)
    }

    function xR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          Iy: uu.str(),
          ly: uu.long()
        }
      }(uu)
    }

    function SR(uu) {
      const Ru = uu.index(3);
      return 0 === Ru ? null : 1 === Ru ? uu.str() : su(uu)
    }

    function pR(uu) {
      return {
        hy: uu.str(),
        Py: uu.str(),
        iy: uu.str()
      }
    }

    function TR(uu) {
      return {
        pE: uu.str(),
        TE: tu(uu),
        WE: tu(uu),
        jE: hu(uu)
      }
    }

    function WR(uu) {
      return uu.rS(TR)
    }

    function jR(uu) {
      return {
        kE: uu.str(),
        x: uu.long(),
        y: uu.long(),
        z: uu.long()
      }
    }

    function HR(uu) {
      return uu.rS(jR)
    }

    function dR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          iE: uu.float(),
          YE: uu.long(),
          oE: uu.long()
        }
      }(uu)
    }

    function bR(uu) {
      return {
        blockName: uu.str(),
        cE: uu.bool(),
        LE: uu.bool(),
        zE: uu.bool(),
        FE: uu.float(),
        wE: uu.float(),
        ZE: uu.long(),
        hE: dR(uu)
      }
    }

    function CR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return uu.rS(bR)
      }(uu)
    }

    function kR(uu) {
      return {
        tE: uu.str(),
        lE: CR(uu)
      }
    }

    function eR(uu) {
      return {
        blockName: uu.str(),
        frequency: uu.float()
      }
    }

    function AR(uu) {
      return uu.rS(eR)
    }

    function DR(uu) {
      return {
        vE: uu.str(),
        aE: uu.str(),
        frequency: uu.float(),
        fE: AR(uu)
      }
    }

    function MR(uu) {
      return uu.rS(DR)
    }

    function IR(uu) {
      return {
        blockName: uu.str(),
        radius: uu.long(),
        EK: uu.long(),
        ME: uu.long(),
        IE: uu.long(),
        KK: uu.float()
      }
    }

    function GR(uu) {
      return uu.rS(IR)
    }

    function UR(uu) {
      return {
        ME: uu.long(),
        IE: uu.long(),
        GE: uu.long(),
        UE: uu.bool(),
        nE: kR(uu),
        qE: MR(uu),
        RK: GR(uu)
      }
    }

    function nR(uu) {
      return uu.rS(UR)
    }

    function sR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          name: uu.str(),
          NK: tu(uu)
        }
      }(uu)
    }

    function tR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          terrain: sR(uu),
          XK: GR(uu)
        }
      }(uu)
    }

    function lR(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          layers: nR(uu),
          QK: tR(uu)
        }
      }(uu)
    }
  },
  40177: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => du,
      C: () => bu,
      E: () => Tu,
      H: () => Du,
      L: () => nu,
      N: () => Su,
      R: () => tu,
      T: () => ju,
      U: () => Wu,
      V: () => Hu,
      W: () => Cu,
      d: () => Ku,
      e: () => su,
      g: () => Uu,
      i: () => xu,
      l: () => pu,
      n: () => Iu,
      p: () => eu,
      q: () => Mu,
      r: () => Au,
      v: () => ku,
      x: () => Gu
    });
    var Eu = yu(2772);
    const Ku = {
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

    function Qu(uu, Ru) {
      return !ArrayBuffer.isView(uu) || uu instanceof DataView ? Array.isArray(uu) ? uu.map((uu => Ru(uu))) : uu : Array.from(uu, (uu => Ru(uu)))
    }

    function mu(uu) {
      if ("string" !== typeof uu) return uu;
      for (let Ru = 0; Ru < uu.length; Ru++) {
        const yu = uu.charCodeAt(Ru);
        if (yu >= 55296 && yu <= 57343) return Nu.decode(Ju.encode(uu))
      }
      return uu
    }
    const Ju = new TextEncoder,
      Nu = new TextDecoder;

    function Xu(uu) {
      return uu
    }
    let Vu;

    function ru(uu) {
      return null === uu || "object" !== typeof uu ? uu : [mu(uu.vQ), mu(uu.aQ)]
    }

    function Bu(uu) {
      return null === uu || "object" !== typeof uu ? uu : [Qu(uu.zQ, Xu), Qu(uu.SX, Xu)]
    }

    function xu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Dm), mu(Ru.Mm)];
      var Ru
    }

    function Su(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Ru.id, Ru.Jm];
      var Ru
    }

    function pu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Ru.WR, mu(Ru.jR), Ru.HR, mu(Ru.CR), Ru.DR, Ru.MR, Ru.Cm, mu(Ru.km), mu(Ru.Am)];
      var Ru
    }

    function Tu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Qu(Ru.RV, Xu), Ru.yV];
      var Ru
    }

    function Wu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Qu(Ru.SJ, (uu => mu(uu))), mu(Ru.pJ), Ru.TJ];
      var Ru
    }

    function ju(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Qu(Ru.Nm, Xu), mu(Ru.Xm), Ru.Vm];
      var Ru
    }

    function Hu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Py), mu(Ru.iy)];
      var Ru
    }

    function du(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.NJ)];
      var Ru
    }

    function bu(uu) {
      return mu(uu)
    }

    function Cu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.IV), mu(Ru.GV), mu(Ru.vQ), mu(Ru.aQ)];
      var Ru
    }

    function ku(uu) {
      return ru(uu)
    }

    function eu(uu) {
      return ru(uu)
    }

    function Au(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Im)];
      var Ru
    }

    function Du(uu) {
      return uu
    }

    function Mu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.Rm), mu(Ru.ym)];
      var Ru
    }

    function Iu(uu) {
      return mu(uu)
    }

    function Gu(uu) {
      return Bu(uu)
    }

    function Uu(uu) {
      return Bu(uu)
    }

    function nu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [mu(Ru.BJ)];
      var Ru
    }

    function su(uu) {
      return (Vu ??= (0, Eu.f)().map((uu => uu.name)), Vu).map((Ru => {
        return "string" === typeof(yu = uu[Ru]) ? mu(yu) : Qu(yu, Xu);
        var yu
      }))
    }

    function tu(uu) {
      return null === (Ru = uu) || "object" !== typeof Ru ? Ru : [Ru.dJ, Ru.bJ, Ru.CJ];
      var Ru
    }
  },
  9247: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(9205);
    const Ku = "Air",
      Qu = Object.freeze(new Eu.e(Ku, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38978: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      f: () => Ju
    });
    var Eu = yu(343),
      Ku = yu(4227);
    const Qu = new Set(Ku.n),
      mu = new Map;

    function Ju(uu, Ru) {
      let yu = mu.get(Ru);
      void 0 === yu && (yu = new Map, mu.set(Ru, yu));
      let Ku = yu.get(uu);
      return void 0 === Ku && (Ku = `${uu}${(0,Eu.A)(Ru)}`, yu.set(uu, Ku)), Ku
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);