export const id = 199;
export const ids = [199];
export const modules = {
  39742: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb,
      f: () => Yb,
      i: () => Eb
    });
    var Ab = Ub(39751),
      Mb = Ub(4479),
      Tb = Ub(39758);

    function Eb(bb) {
      return bb.payloadKind === Mb._b.Msgpack ? (0, Ab.c)(bb.payload) : void 0
    }

    function Yb(bb, ab) {
      if (ab.payloadKind === Mb._b.Bytes || ab.payloadKind === Mb._b.MsgpackBin) return (0, Tb.c)(bb, ab.payload)
    }

    function Bb(bb) {
      return null !== bb && "object" === typeof bb
    }
  },
  39762: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Lb,
      d: () => Pb,
      g: () => Xb,
      k: () => vb,
      m: () => kb
    });
    var Ab = Ub(4479),
      Mb = Ub(39764);
    const Tb = new Map,
      Eb = new Set,
      Yb = new Set;
    let Bb = 0,
      eb = 0;

    function vb(bb, ab) {
      let Ub = Tb.get(bb);
      return Ub || (Ub = new Set, Tb.set(bb, Ub)), Ub.add(ab), () => {
        Ub.delete(ab)
      }
    }

    function Lb() {
      return 0 !== Bb
    }

    function Pb(bb) {
      return Eb.add(bb), () => {
        Eb.delete(bb)
      }
    }

    function Xb(bb) {
      return Yb.add(bb), () => {
        Yb.delete(bb)
      }
    }
    const jb = "A raw message listener threw";

    function Rb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb;
      for (const Ab of ab) try {
        Ab()
      } catch (Ub) {
        bb ? (0, Mb.o)(Ub, jb) : console.error(jb, Ub)
      }
    }
    const kb = {
      fire: function(bb) {
        if ("connection" === bb.type) {
          const ab = bb.phase === Ab.C.Activated && bb.conn !== Bb && bb.conn > eb,
            Ub = (bb.phase === Ab.C.Left || bb.phase === Ab.C.Closed) && bb.conn === Bb;
          return void(ab || Ub ? (Bb = ab ? bb.conn : 0, Rb(!0)) : bb.phase === Ab.C.Resumed && 0 !== Bb && bb.conn > eb && (Bb = bb.conn, Rb(!0, Yb)))
        }
        const ab = Tb.get(bb.fE);
        if (ab && bb.conn === Bb && 0 !== Bb)
          for (const Ab of ab) try {
            Ab(bb)
          } catch (Ub) {
            (0, Mb.o)(Ub, jb)
          }
      },
      close: function(bb) {
        eb = Math.max(eb, bb, Bb), 0 !== Bb && (Bb = 0, Rb(!1))
      }
    }
  },
  39731: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb,
      e: () => Bb,
      f: () => Yb
    });
    var Ab = Ub(1208),
      Mb = Ub(39701);
    const Tb = new TextDecoder,
      Eb = new TextEncoder;

    function Yb(bb, ab) {
      const Ub = bb.queries.entityName(ab);
      if (Ub === Mb.Ac) return;
      const Eb = bb.memoryData(bb.scratch(), 4 + Ub, 4, "entity_name's answer");
      if (!Eb) return;
      const Yb = Eb.getUint32(0, !0),
        Bb = Tb.decode(new Uint8Array(Eb.buffer, Eb.byteOffset + 4, Ub));
      return (0, Ab.d)(Bb, !1, Yb === Mb.Od ? null : Yb)
    }

    function Bb(bb, ab, Ub) {
      const Ab = Eb.encode(Ub);
      if (Ab.length > Mb.Eb) return !1;
      const Tb = bb.memoryView(Uint8Array, bb.scratch(), Ab.length, "has_effect's name");
      return !!Tb && (Tb.set(Ab), 1 === bb.queries.hasEffect(ab, Ab.length))
    }

    function eb(bb, ab, Ub, Ab) {
      const Eb = bb.queries.blockData(ab, Ub, Ab);
      if (Eb === Mb.Ac) return;
      const Yb = bb.memoryView(Uint8Array, bb.scratch(), Eb, "block_data's answer");
      return Yb ? JSON.parse(Tb.decode(Yb)) : void 0
    }
  },
  39751: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      d: () => vb
    });
    const Ab = new TextDecoder;

    function Mb(bb) {
      const ab = new Tb(bb),
        Ub = ab.value();
      if (ab.at !== bb.length) throw new Error(`msgpack: ${bb.length-ab.at} bytes after the value`);
      return Ub
    }
    class Tb {
      constructor(bb) {
        this.bytes = bb, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(bb.buffer, bb.byteOffset, bb.byteLength)
      }
      value() {
        const bb = this.u8();
        if (bb <= 127) return bb;
        if (bb >= 224) return bb - 256;
        if (bb >= 128 && bb <= 143) return this.map(15 & bb);
        if (bb >= 144 && bb <= 159) return this.array(15 & bb);
        if (bb >= 160 && bb <= 191) return this.str(31 & bb);
        switch (bb) {
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
            throw new Error(`msgpack: unknown byte 0x${bb.toString(16)} at ${this.at-1}`)
        }
      }
      take(bb) {
        const ab = this.at;
        if (ab + bb > this.bytes.length) throw new Error(`msgpack: ${bb} bytes past the end at ${ab}`);
        return this.at = ab + bb, ab
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
      int64(bb) {
        const ab = this.take(8);
        return bb ? this.view.getBigInt64(ab, !1) : this.view.getBigUint64(ab, !1)
      }
      str(bb) {
        const ab = this.take(bb),
          Ub = this.bytes;
        if (bb < 16) {
          let Mb = "";
          for (let Tb = ab; Tb < ab + bb; Tb++) {
            const Eb = Ub[Tb];
            if (Eb >= 128) return Ab.decode(Ub.subarray(ab, ab + bb));
            Mb += String.fromCharCode(Eb)
          }
          return Mb
        }
        return Ab.decode(Ub.subarray(ab, ab + bb))
      }
      bin(bb) {
        const ab = this.take(bb);
        return this.bytes.subarray(ab, ab + bb)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(bb) {
        this.enter();
        const ab = [];
        for (let Ub = 0; Ub < bb; Ub++) ab.push(this.value());
        return this.depth--, ab
      }
      map(bb) {
        this.enter();
        const ab = {};
        for (let Ub = 0; Ub < bb; Ub++) {
          const bb = this.value(),
            Ub = this.value();
          ab["__proto__" === bb ? "__proto_" : String(bb)] = Ub
        }
        return this.depth--, ab
      }
      ext(bb) {
        const ab = this.view.getInt8(this.take(1)),
          Ub = this.take(bb);
        if (0 !== ab) {
          if (-1 === ab) {
            if (1 === bb) return new Date(NaN);
            if (4 === bb) return new Date(1e3 * this.view.getUint32(Ub, !1));
            if (8 === bb) {
              const bb = this.view.getUint32(Ub, !1),
                ab = bb >>> 2,
                Ab = 4294967296 * (3 & bb) + this.view.getUint32(Ub + 4, !1);
              return new Date(1e3 * Ab + ab / 1e6)
            }
            if (12 === bb) {
              const bb = this.view.getUint32(Ub, !1),
                ab = 4294967296 * this.view.getInt32(Ub + 4, !1) + this.view.getUint32(Ub + 8, !1);
              return new Date(1e3 * ab + bb / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ab} of ${bb} bytes`)
        }
      }
    }
    const Eb = new TextEncoder,
      Yb = -(2n ** 63n),
      Bb = 2n ** 63n - 1n,
      eb = 2n ** 64n - 1n;

    function vb(bb) {
      const ab = new Lb;
      return ab.value(bb, 0), ab.bytes()
    }
    class Lb {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(bb, ab) {
        if (ab > 512) throw new Error("msgpack: nested too deep");
        switch (typeof bb) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(bb ? 195 : 194);
          case "number":
            return void this.number(bb);
          case "bigint":
            return void this.bigint(bb);
          case "string":
            return void this.string(bb);
          case "object":
            if (null === bb) this.u8(192);
            else if (bb instanceof Uint8Array) this.head(bb.length, 196, -1, 197, 198), this.room(bb.length), this.buf.set(bb, this.at), this.at += bb.length;
            else if (Array.isArray(bb)) {
              this.head(bb.length, 220, 144, 220, 221);
              for (const Ub of bb) this.value(Ub, ab + 1)
            } else {
              var Ub, Ab;
              if (Object.getPrototypeOf(bb) !== Object.prototype && null !== Object.getPrototypeOf(bb)) throw new Error(`msgpack: can't encode a ${null!==(Ub=null===(Ab=bb.constructor)||void 0===Ab?void 0:Ab.name)&&void 0!==Ub?Ub:"object"}`);
              {
                const Ub = Object.keys(bb);
                this.head(Ub.length, 222, 128, 222, 223);
                for (const Ab of Ub) this.string(Ab), this.value(bb[Ab], ab + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof bb)
        }
      }
      number(bb) {
        Number.isInteger(bb) && bb >= -2147483648 && bb <= 4294967295 ? bb >= 0 ? bb < 128 ? this.u8(bb) : bb < 256 ? (this.u8(204), this.u8(bb)) : bb < 65536 ? (this.u8(205), this.u16(bb)) : (this.u8(206), this.u32(bb)) : bb >= -32 ? this.u8(bb + 256) : bb >= -128 ? (this.u8(208), this.u8(bb + 256)) : bb >= -32768 ? (this.u8(209), this.u16(bb + 65536)) : (this.u8(210), this.u32(bb >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, bb, !1), this.at += 8)
      }
      bigint(bb) {
        const ab = bb >= Yb && bb <= Bb;
        if (!ab && (bb < 0n || bb > eb)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ab ? 211 : 207), this.room(8), ab ? this.view.setBigInt64(this.at, bb, !1) : this.view.setBigUint64(this.at, bb, !1), this.at += 8
      }
      string(bb) {
        const ab = Eb.encode(bb);
        this.head(ab.length, 217, 160, 218, 219), this.room(ab.length), this.buf.set(ab, this.at), this.at += ab.length
      }
      head(bb, ab, Ub, Ab, Mb) {
        Ub >= 0 && bb < (160 === Ub ? 32 : 16) ? this.u8(Ub | bb) : ab !== Ab && bb < 256 ? (this.u8(ab), this.u8(bb)) : bb < 65536 ? (this.u8(Ab), this.u16(bb)) : (this.u8(Mb), this.u32(bb))
      }
      room(bb) {
        if (this.at + bb <= this.buf.length) return;
        let ab = 2 * this.buf.length;
        for (; ab < this.at + bb;) ab *= 2;
        const Ub = new Uint8Array(ab);
        Ub.set(this.buf.subarray(0, this.at)), this.buf = Ub, this.view = new DataView(Ub.buffer)
      }
      u8(bb) {
        this.room(1), this.buf[this.at++] = bb
      }
      u16(bb) {
        this.room(2), this.view.setUint16(this.at, bb, !1), this.at += 2
      }
      u32(bb) {
        this.room(4), this.view.setUint32(this.at, bb, !1), this.at += 4
      }
    }
  },
  39758: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(39740);
    const Mb = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Tb {
      constructor(bb) {
        this.buf = bb, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let bb = this.u8(),
          ab = 127 & bb,
          Ub = 128;
        for (; 128 & bb;) {
          if (Ub > 2 ** 63) throw new RangeError("avro: varint too long");
          bb = this.u8(), ab += (127 & bb) * Ub, Ub *= 128
        }
        return ab % 2 === 1 ? -(ab + 1) / 2 : ab / 2
      }
      float() {
        const bb = this.take(4);
        return this.floats().getFloat32(bb, !0)
      }
      double() {
        const bb = this.take(8);
        return this.floats().getFloat64(bb, !0)
      }
      str() {
        const bb = this.size(),
          ab = this.take(bb),
          Ub = ab + bb;
        if (bb <= 32) {
          let bb = "";
          for (let Ab = ab; Ab < Ub; Ab++) {
            const Tb = this.buf[Ab];
            if (Tb >= 128) return Mb.decode(this.buf.subarray(ab, Ub));
            bb += String.fromCharCode(Tb)
          }
          return bb
        }
        return Mb.decode(this.buf.subarray(ab, Ub))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(bb) {
        const ab = this.take(bb);
        return this.buf.slice(ab, ab + bb)
      }
      index(bb) {
        const ab = this.long();
        if (!(ab >= 0 && ab < bb)) throw new RangeError(`avro: index ${ab} of ${bb}`);
        return ab
      }
      JX(bb) {
        const ab = [];
        for (let Ub = this.long(); 0 !== Ub; Ub = this.long()) {
          Ub = this.block(Ub);
          for (let Ab = 0; Ab < Ub; Ab++) ab.push(bb(this))
        }
        return ab
      }
      map(bb) {
        const ab = {};
        for (let Ub = this.long(); 0 !== Ub; Ub = this.long()) {
          Ub = this.block(Ub);
          for (let Ab = 0; Ab < Ub; Ab++) {
            ab[this.str()] = bb(this)
          }
        }
        return ab
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(bb) {
        let ab = bb;
        if (ab < 0 && (ab = -ab, this.long()), ab > this.buf.length - this.at) throw new RangeError(`avro: block of ${ab} items in ${this.buf.length-this.at} bytes`);
        return ab
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const bb = this.long();
        if (bb < 0) throw new RangeError(`avro: length ${bb}`);
        return bb
      }
      u8() {
        const bb = this.buf[this.at];
        if (void 0 === bb) throw new RangeError("avro: truncated");
        return this.at++, bb
      }
      take(bb) {
        const ab = this.at;
        if (bb > this.buf.length - ab) throw new RangeError("avro: truncated");
        return this.at = ab + bb, ab
      }
    }

    function Eb(bb, ab) {
      const Ub = new Tb(ab),
        Mb = (0, Ab.bb)(bb, Ub);
      return Ub.end(), Mb
    }
  },
  39740: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => Wb,
      D: () => Mb,
      G: () => Yb,
      K: () => Xb,
      L: () => pb,
      M: () => mb,
      Q: () => ib,
      R: () => vb,
      U: () => Lb,
      V: () => Nb,
      W: () => jb,
      X: () => Db,
      Y: () => Rb,
      ab: () => Bb,
      b: () => xb,
      bb: () => Hb,
      e: () => kb,
      g: () => yb,
      h: () => Zb,
      j: () => fb,
      k: () => Ab,
      l: () => Tb,
      o: () => zb,
      r: () => Pb,
      t: () => eb,
      x: () => Eb
    });
    const Ab = 2,
      Mb = 12,
      Tb = 27,
      Eb = 40,
      Yb = 52,
      Bb = 59,
      eb = 63,
      vb = 83,
      Lb = 84,
      Pb = 89,
      Xb = 91,
      jb = 93,
      Rb = 94,
      kb = 95,
      yb = 97,
      Zb = 101,
      Db = 102,
      zb = 73,
      xb = 16,
      ib = 86,
      fb = 60,
      mb = 17,
      pb = 56,
      Nb = 100,
      Wb = 81;

    function Hb(bb, ab) {
      switch (bb) {
        case Ab:
          return function(bb) {
            return {
              pT: Ob(bb),
              NT: bb.float(),
              WT: bb.long()
            }
          }(ab);
        case Mb:
          return function(bb) {
            return {
              bb: Gb(bb),
              Ub: Gb(bb)
            }
          }(ab);
        case Tb:
          return function(bb) {
            return {
              Za: bb.bool(),
              Da: Gb(bb)
            }
          }(ab);
        case Eb:
          return ab.str();
        case Yb:
          return function(bb) {
            return {
              id: bb.long(),
              Ib: Ea(bb)
            }
          }(ab);
        case Bb:
        case eb:
          return ab.str();
        case vb:
        case Lb:
          return ab.long();
        case Pb:
          return function(bb) {
            return {
              eA: bb.long(),
              vA: bb.bool(),
              LA: bb.float()
            }
          }(ab);
        case Xb:
          return ab.long();
        case jb:
          return function(bb) {
            return {
              BU: bb.bool(),
              eU: ea(bb)
            }
          }(ab);
        case Rb:
          return function(bb) {
            return {
              id: bb.str(),
              position: Ba(bb),
              cM: va(bb),
              style: ob(bb),
              nM: bb.bool()
            }
          }(ab);
        case kb:
          return function(bb) {
            return {
              id: Gb(bb)
            }
          }(ab);
        case yb:
          return function(bb) {
            return {
              fa: bb.long(),
              ma: bb.str(),
              Na: Ma(bb),
              Wa: Ma(bb),
              Ha: Gb(bb),
              Ia: Gb(bb),
              da: Gb(bb),
              Fa: Gb(bb),
              ha: Gb(bb),
              Ga: Ma(bb),
              Qa: Ma(bb),
              qa: Gb(bb),
              ua: Gb(bb),
              ra: Gb(bb)
            }
          }(ab);
        case Zb:
          return ab.str();
        case Db:
          return ab.long();
        case zb:
          return function(bb) {
            return {
              JU: bb.long(),
              nU: bb.str(),
              SU: bb.float()
            }
          }(ab);
        case xb:
          return function(bb) {
            return {
              GT: bb.bool(),
              QT: Gb(bb),
              qT: bb.str(),
              uT: Pa(bb),
              rT: Pa(bb),
              KT: bb.bool(),
              oT: bb.long(),
              lT: Xa(bb)
            }
          }(ab);
        case ib:
          return function(bb) {
            return {
              fM: Gb(bb)
            }
          }(ab);
        case fb:
          return function(bb) {
            return {
              Pa: bb.str(),
              Xa: bb.str(),
              ja: ja(bb),
              Ra: bb.str(),
              ka: nb(bb),
              ya: bb.float()
            }
          }(ab);
        case mb:
          return function(bb) {
            return {
              Pa: bb.str(),
              Xa: bb.str(),
              ja: ja(bb)
            }
          }(ab);
        case pb:
          return function(bb) {
            return bb.JX(Ra)
          }(ab);
        case Nb:
          return function(bb) {
            return {
              PA: ya(bb),
              yA: wb(bb)
            }
          }(ab);
        case Wb:
          return function(bb) {
            return {
              ZA: bb.bool(),
              DA: Gb(bb),
              zA: Da(bb),
              iA: Qa(bb)
            }
          }(ab);
        default:
          throw new Error(`no reader for to-client message ${bb}`)
      }
    }

    function Ib(bb) {
      return {
        entityName: bb.str()
      }
    }

    function db(bb) {
      const ab = bb.index(4);
      return 0 === ab ? bb.str() : 1 === ab ? bb.long() : 2 === ab ? bb.bool() : Ib(bb)
    }

    function Fb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.map(db)
      }(bb)
    }

    function hb(bb) {
      return {
        translationKey: bb.str(),
        params: Fb(bb)
      }
    }

    function Gb(bb) {
      return 0 === bb.index(2) ? null : bb.str()
    }

    function Qb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: Gb(bb),
          colour: Gb(bb),
          fontSize: Gb(bb)
        }
      }(bb)
    }

    function qb(bb) {
      return {
        icon: bb.str(),
        style: Qb(bb)
      }
    }

    function ub(bb) {
      const ab = bb.index(3);
      return 0 === ab ? {
        string: bb.str()
      } : 1 === ab ? {
        styledEntityName: Ib(bb)
      } : {
        styledTranslatedText: hb(bb)
      }
    }

    function rb(bb) {
      const ab = bb.index(3);
      return 0 === ab ? null : 1 === ab ? bb.str() : bb.long()
    }

    function Kb(bb) {
      return 0 === bb.index(2) ? null : bb.float()
    }

    function ob(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          color: Gb(bb),
          colour: Gb(bb),
          fontWeight: rb(bb),
          fontStyle: Gb(bb),
          fontSize: Gb(bb),
          opacity: Kb(bb)
        }
      }(bb)
    }

    function lb(bb) {
      return {
        str: ub(bb),
        style: ob(bb),
        clickableUrl: Gb(bb)
      }
    }

    function tb(bb) {
      return bb.str()
    }

    function wb(bb) {
      return bb.JX(tb)
    }

    function sb(bb) {
      return 0 === bb.index(2) ? null : wb(bb)
    }

    function gb(bb) {
      return {
        type: bb.str(),
        progress: bb.float(),
        width: Gb(bb),
        height: Gb(bb),
        colours: sb(bb),
        backgroundColour: Gb(bb)
      }
    }

    function Cb(bb) {
      return {
        type: bb.str(),
        action: bb.str(),
        style: ob(bb)
      }
    }

    function Vb(bb) {
      const ab = bb.index(7);
      return 0 === ab ? {
        string: bb.str()
      } : 1 === ab ? {
        entityName: Ib(bb)
      } : 2 === ab ? {
        translatedText: hb(bb)
      } : 3 === ab ? {
        styledIcon: qb(bb)
      } : 4 === ab ? {
        tb: lb(bb)
      } : 5 === ab ? {
        styledProgressBar: gb(bb)
      } : {
        styledKeyBinding: Cb(bb)
      }
    }

    function Ob(bb) {
      return bb.JX(Vb)
    }
    const cb = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function Jb(bb) {
      return cb[bb.index(5)]
    }

    function nb(bb) {
      return 0 === bb.index(2) ? null : bb.double()
    }

    function Sb(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          qb: nb(bb),
          ub: bb.double(),
          Kb: bb.double(),
          ob: bb.bool(),
          description: Ob(bb),
          gb: bb.str(),
          scale: nb(bb),
          rotation: nb(bb)
        }
      }(bb)
    }

    function ba(bb) {
      return 0 === bb.index(2) ? null : bb.bool()
    }

    function aa(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Vb: bb.double(),
          icon: bb.str(),
          label: Ob(bb),
          Ob: bb.bool(),
          scale: nb(bb),
          rotation: nb(bb),
          cb: ba(bb)
        }
      }(bb)
    }

    function Ua(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          qb: nb(bb),
          Sb: bb.double(),
          ba: bb.double(),
          aa: bb.double(),
          gravity: bb.double(),
          Ua: bb.double(),
          Aa: bb.double(),
          Ma: bb.double(),
          ob: bb.bool(),
          description: Ob(bb),
          icon: Gb(bb)
        }
      }(bb)
    }

    function Aa(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          speed: bb.double(),
          Ea: bb.double(),
          label: Ob(bb),
          icon: Gb(bb),
          scale: nb(bb),
          rotation: nb(bb)
        }
      }(bb)
    }

    function Ma(bb) {
      return 0 === bb.index(2) ? null : bb.long()
    }

    function Ta(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          Ba: bb.long(),
          ea: bb.double(),
          va: bb.double(),
          La: Ma(bb),
          label: Ob(bb),
          icon: Gb(bb)
        }
      }(bb)
    }

    function Ea(bb) {
      return {
        type: Jb(bb),
        progressBar: Sb(bb),
        timedClick: aa(bb),
        gravityBar: Ua(bb),
        precisionBar: Aa(bb),
        rhythmClick: Ta(bb)
      }
    }

    function Ya(bb) {
      return bb.float()
    }

    function Ba(bb) {
      return bb.JX(Ya)
    }

    function ea(bb) {
      return 0 === bb.index(2) ? null : Ba(bb)
    }

    function va(bb) {
      return 0 === bb.index(2) ? null : Ob(bb)
    }

    function La(bb) {
      return bb.long()
    }

    function Pa(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.JX(La)
      }(bb)
    }

    function Xa(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          FU: bb.str(),
          rU: bb.long()
        }
      }(bb)
    }

    function ja(bb) {
      const ab = bb.index(3);
      return 0 === ab ? null : 1 === ab ? bb.str() : hb(bb)
    }

    function Ra(bb) {
      return {
        gU: bb.str(),
        CU: bb.str(),
        VU: bb.str()
      }
    }

    function ka(bb) {
      return {
        XA: bb.str(),
        jA: Gb(bb),
        RA: Gb(bb),
        kA: wb(bb)
      }
    }

    function ya(bb) {
      return bb.JX(ka)
    }

    function Za(bb) {
      return {
        xA: bb.str(),
        x: bb.long(),
        y: bb.long(),
        z: bb.long()
      }
    }

    function Da(bb) {
      return bb.JX(Za)
    }

    function za(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          sA: bb.float(),
          gA: bb.long(),
          CA: bb.long()
        }
      }(bb)
    }

    function xa(bb) {
      return {
        blockName: bb.str(),
        qA: bb.bool(),
        uA: bb.bool(),
        rA: bb.bool(),
        KA: bb.float(),
        oA: bb.float(),
        lA: bb.long(),
        tA: za(bb)
      }
    }

    function ia(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return bb.JX(xa)
      }(bb)
    }

    function fa(bb) {
      return {
        FA: bb.str(),
        hA: ia(bb)
      }
    }

    function ma(bb) {
      return {
        blockName: bb.str(),
        frequency: bb.float()
      }
    }

    function pa(bb) {
      return bb.JX(ma)
    }

    function Na(bb) {
      return {
        cA: bb.str(),
        JA: bb.str(),
        frequency: bb.float(),
        nA: pa(bb)
      }
    }

    function Wa(bb) {
      return bb.JX(Na)
    }

    function Ha(bb) {
      return {
        blockName: bb.str(),
        radius: bb.long(),
        UM: bb.long(),
        pA: bb.long(),
        NA: bb.long(),
        AM: bb.float()
      }
    }

    function Ia(bb) {
      return bb.JX(Ha)
    }

    function da(bb) {
      return {
        pA: bb.long(),
        NA: bb.long(),
        WA: bb.long(),
        HA: bb.bool(),
        IA: fa(bb),
        VA: Wa(bb),
        bM: Ia(bb)
      }
    }

    function Fa(bb) {
      return bb.JX(da)
    }

    function ha(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          name: bb.str(),
          YM: Gb(bb)
        }
      }(bb)
    }

    function Ga(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          terrain: ha(bb),
          BM: Ia(bb)
        }
      }(bb)
    }

    function Qa(bb) {
      return 0 === bb.index(2) ? null : function(bb) {
        return {
          layers: Fa(bb),
          MM: Ga(bb)
        }
      }(bb)
    }
  },
  39716: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => ib,
      C: () => fb,
      E: () => Ib,
      G: () => zb,
      H: () => xb,
      K: () => kb,
      N: () => Nb,
      O: () => Fb,
      Q: () => jb,
      R: () => Gb,
      V: () => Zb,
      W: () => yb,
      Z: () => Db,
      c: () => Mb,
      f: () => hb,
      i: () => db,
      m: () => Xb,
      q: () => Rb,
      s: () => Hb,
      t: () => mb,
      v: () => Wb,
      y: () => pb
    });
    var Ab = Ub(2698);
    const Mb = {
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

    function Tb(bb, ab) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => ab(bb))) : bb : Array.from(bb, (bb => ab(bb)))
    }

    function Eb(bb) {
      if ("string" !== typeof bb) return bb;
      for (let ab = 0; ab < bb.length; ab++) {
        const Ub = bb.charCodeAt(ab);
        if (Ub >= 55296 && Ub <= 57343) return Bb.decode(Yb.encode(bb))
      }
      return bb
    }
    const Yb = new TextEncoder,
      Bb = new TextDecoder;

    function eb(bb) {
      return bb
    }
    let vb;

    function Lb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Eb(bb.OT), Eb(bb.cT)]
    }

    function Pb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Tb(bb.uT, eb), Tb(bb.ve, eb)]
    }

    function Xb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.fE), Eb(ab.mE)];
      var ab
    }

    function jb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [ab.id, ab.ME];
      var ab
    }

    function Rb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [ab.fa, Eb(ab.ma), ab.Na, Eb(ab.Ia), ab.Ga, ab.Qa, ab.zE, Eb(ab.xE), Eb(ab.iE)];
      var ab
    }

    function kb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Tb(ab.Uv, eb), ab.Av];
      var ab
    }

    function yb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Tb(ab.BY, (bb => Eb(bb))), Eb(ab.eY), ab.vY];
      var ab
    }

    function Zb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Tb(ab.TE, eb), Eb(ab.EE), ab.YE];
      var ab
    }

    function Db(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.CU), Eb(ab.VU)];
      var ab
    }

    function zb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.UY)];
      var ab
    }

    function xb(bb) {
      return Eb(bb)
    }

    function ib(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.Fv), Eb(ab.hv), Eb(ab.OT), Eb(ab.cT)];
      var ab
    }

    function fb(bb) {
      return Lb(bb)
    }

    function mb(bb) {
      return Lb(bb)
    }

    function pb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.pE)];
      var ab
    }

    function Nb(bb) {
      return bb
    }

    function Wb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.ST), Eb(ab.bE)];
      var ab
    }

    function Hb(bb) {
      return Eb(bb)
    }

    function Ib(bb) {
      return Pb(bb)
    }

    function db(bb) {
      return Pb(bb)
    }

    function Fb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.EY)];
      var ab
    }

    function hb(bb) {
      return (vb ??= (0, Ab.g)().map((bb => bb.name)), vb).map((ab => {
        return "string" === typeof(Ub = bb[ab]) ? Eb(Ub) : Tb(Ub, eb);
        var Ub
      }))
    }

    function Gb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [ab.jY, ab.RY, ab.kY];
      var ab
    }
  },
  9094: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(9043);
    const Mb = "Air",
      Tb = Object.freeze(new Ab.h(Mb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38506: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      e: () => Yb
    });
    var Ab = Ub(325),
      Mb = Ub(4139);
    const Tb = new Set(Mb.l),
      Eb = new Map;

    function Yb(bb, ab) {
      let Ub = Eb.get(ab);
      void 0 === Ub && (Ub = new Map, Eb.set(ab, Ub));
      let Mb = Ub.get(bb);
      return void 0 === Mb && (Mb = `${bb}${(0,Ab.y)(ab)}`, Ub.set(bb, Mb)), Mb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);